import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "flexoki",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 175 !important;
  --accent-l: 33% !important;
  --accent-s: 57% !important;
  --background-modifier-active-hover: hsla(175, 57%, 33%, 0.1) !important;
  --background-modifier-border: #282726 !important;
  --background-modifier-border-focus: #403E3C !important;
  --background-modifier-border-hover: #343331 !important;
  --background-modifier-error: #D14D41 !important;
  --background-modifier-error-hover: #D14D41 !important;
  --background-modifier-error-rgb: 209, 77, 65 !important;
  --background-modifier-form-field: #282726 !important;
  --background-modifier-form-field-hover: #282726 !important;
  --background-modifier-success: #879A39 !important;
  --background-modifier-success-rgb: 135, 154, 57 !important;
  --background-primary: #100F0F !important;
  --background-primary-alt: #1C1B1A !important;
  --background-secondary: #1C1B1A !important;
  --background-secondary-alt: #282726 !important;
  --bases-cards-background: #100F0F !important;
  --bases-cards-cover-background: #1C1B1A !important;
  --bases-cards-shadow: 0 0 0 1px #282726 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #343331 !important;
  --bases-embed-border-color: #282726 !important;
  --bases-group-heading-property-color: #878580 !important;
  --bases-table-border-color: #282726 !important;
  --bases-table-cell-background-active: #100F0F !important;
  --bases-table-cell-background-disabled: #1C1B1A !important;
  --bases-table-cell-background-selected: hsla(175, 57%, 33%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #403E3C !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(175, 57%, 33%) !important;
  --bases-table-group-background: #1C1B1A !important;
  --bases-table-header-background: #100F0F !important;
  --bases-table-header-color: #878580 !important;
  --bases-table-summary-background: #100F0F !important;
  --blockquote-border-color: hsl(175, 57%, 33%) !important;
  --blur-background: color-mix(in srgb, #282726 65%, transparent) linear-gradient(#282726, color-mix(in srgb, #282726 65%, transparent)) !important;
  --callout-bug: 209, 77, 65;
  --callout-default: 67, 133, 190;
  --callout-error: 209, 77, 65;
  --callout-example: 139, 126, 200;
  --callout-fail: 209, 77, 65;
  --callout-important: 58, 169, 159;
  --callout-info: 67, 133, 190;
  --callout-question: 218, 112, 44;
  --callout-success: 135, 154, 57;
  --callout-summary: 58, 169, 159;
  --callout-tip: 58, 169, 159;
  --callout-todo: 67, 133, 190;
  --callout-warning: 218, 112, 44;
  --canvas-background: #100F0F !important;
  --canvas-card-label-color: #575653 !important;
  --canvas-color-1: 209, 77, 65 !important;
  --canvas-color-2: 218, 112, 44 !important;
  --canvas-color-3: 208, 162, 21 !important;
  --canvas-color-4: 135, 154, 57 !important;
  --canvas-color-5: 58, 169, 159 !important;
  --canvas-color-6: 139, 126, 200 !important;
  --canvas-dot-pattern: #282726 !important;
  --caret-color: #CECDC3 !important;
  --checkbox-border-color: #575653 !important;
  --checkbox-border-color-hover: #878580 !important;
  --checkbox-color: hsl(175, 57%, 33%) !important;
  --checkbox-color-hover: hsl(172, 58.14%, 37.95%) !important;
  --checkbox-marker-color: #100F0F !important;
  --checklist-done-color: #878580 !important;
  --code-background: #1C1B1A !important;
  --code-border-color: #282726 !important;
  --code-comment: #575653 !important;
  --code-function: #D0A215 !important;
  --code-important: #DA702C !important;
  --code-keyword: #CE5D97 !important;
  --code-normal: #CECDC3 !important;
  --code-operator: #D14D41 !important;
  --code-property: #3AA99F !important;
  --code-punctuation: #878580 !important;
  --code-string: #879A39 !important;
  --code-tag: #D14D41 !important;
  --code-value: #8B7EC8 !important;
  --collapse-icon-color: #575653 !important;
  --collapse-icon-color-collapsed: hsl(172, 58.14%, 37.95%) !important;
  --color-accent: hsl(175, 57%, 33%) !important;
  --color-accent-1: hsl(172, 58.14%, 37.95%) !important;
  --color-accent-2: hsl(170, 59.85%, 42.57%) !important;
  --color-accent-hsl: 175, 57%, 33% !important;
  --color-base-00: #100F0F !important;
  --color-base-05: #100F0F !important;
  --color-base-10: #1C1B1A !important;
  --color-base-100: #CECDC3 !important;
  --color-base-20: #1C1B1A !important;
  --color-base-25: #282726 !important;
  --color-base-30: #282726 !important;
  --color-base-35: #343331 !important;
  --color-base-40: #403E3C !important;
  --color-base-50: #575653 !important;
  --color-base-60: #6F6E69 !important;
  --color-base-70: #878580 !important;
  --color-blue: #4385BE !important;
  --color-blue-rgb: 67, 133, 190 !important;
  --color-cyan: #3AA99F !important;
  --color-cyan-rgb: 58, 169, 159 !important;
  --color-green: #879A39 !important;
  --color-green-rgb: 135, 154, 57 !important;
  --color-orange: #DA702C !important;
  --color-orange-rgb: 218, 112, 44 !important;
  --color-pink: #CE5D97 !important;
  --color-pink-rgb: 206, 93, 151 !important;
  --color-purple: #8B7EC8 !important;
  --color-purple-rgb: 139, 126, 200 !important;
  --color-red: #D14D41 !important;
  --color-red-rgb: 209, 77, 65 !important;
  --color-yellow: #D0A215 !important;
  --color-yellow-rgb: 208, 162, 21 !important;
  --dark: #CECDC3 !important;
  --darkgray: #CECDC3 !important;
  --divider-color: #282726 !important;
  --divider-color-hover: hsl(175, 57%, 33%) !important;
  --dropdown-background: #282726 !important;
  --dropdown-background-hover: #343331 !important;
  --embed-block-shadow-hover: 0 0 0 1px #282726, inset 0 0 0 1px #282726 !important;
  --embed-border-start: 2px solid hsl(175, 57%, 33%) !important;
  --file-header-background: #100F0F !important;
  --file-header-background-focused: #100F0F !important;
  --flair-background: #282726 !important;
  --flair-color: #CECDC3 !important;
  --footnote-divider-color: #282726 !important;
  --footnote-id-color: #878580 !important;
  --footnote-id-color-no-occurrences: #575653 !important;
  --graph-line: #343331 !important;
  --graph-node: #878580 !important;
  --graph-node-attachment: #D0A215 !important;
  --graph-node-focused: hsl(172, 58.14%, 37.95%) !important;
  --graph-node-tag: #879A39 !important;
  --graph-node-unresolved: #575653 !important;
  --graph-text: #CECDC3 !important;
  --gray: #878580 !important;
  --heading-formatting: #575653 !important;
  --highlight: hsla(175, 57%, 33%, 0.1) !important;
  --hr-color: #282726 !important;
  --icon-color: #878580 !important;
  --icon-color-active: hsl(172, 58.14%, 37.95%) !important;
  --icon-color-focused: #CECDC3 !important;
  --icon-color-hover: #878580 !important;
  --input-date-separator: #575653 !important;
  --input-placeholder-color: #575653 !important;
  --interactive-accent: hsl(175, 57%, 33%) !important;
  --interactive-accent-hover: hsl(172, 58.14%, 37.95%) !important;
  --interactive-accent-hsl: 175, 57%, 33% !important;
  --interactive-hover: #343331 !important;
  --interactive-normal: #282726 !important;
  --light: #100F0F !important;
  --lightgray: #1C1B1A !important;
  --link-color: hsl(172, 58.14%, 37.95%) !important;
  --link-color-hover: hsl(170, 59.85%, 42.57%) !important;
  --link-external-color: hsl(172, 58.14%, 37.95%) !important;
  --link-external-color-hover: hsl(170, 59.85%, 42.57%) !important;
  --link-unresolved-color: hsl(172, 58.14%, 37.95%) !important;
  --link-unresolved-decoration-color: hsla(175, 57%, 33%, 0.3) !important;
  --list-marker-color: #575653 !important;
  --list-marker-color-collapsed: hsl(172, 58.14%, 37.95%) !important;
  --list-marker-color-hover: #878580 !important;
  --menu-background: #1C1B1A !important;
  --menu-border-color: #343331 !important;
  --metadata-border-color: #282726 !important;
  --metadata-divider-color: #282726 !important;
  --metadata-input-text-color: #CECDC3 !important;
  --metadata-label-text-color: #878580 !important;
  --metadata-label-text-color-hover: #878580 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #403E3C !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #343331 !important;
  --modal-background: #100F0F !important;
  --modal-border-color: #403E3C !important;
  --nav-collapse-icon-color: #575653 !important;
  --nav-collapse-icon-color-collapsed: #575653 !important;
  --nav-heading-color: #CECDC3 !important;
  --nav-heading-color-collapsed: #575653 !important;
  --nav-heading-color-collapsed-hover: #878580 !important;
  --nav-heading-color-hover: #CECDC3 !important;
  --nav-item-background-selected: hsla(175, 57%, 33%, 0.15) !important;
  --nav-item-color: #878580 !important;
  --nav-item-color-active: #CECDC3 !important;
  --nav-item-color-highlighted: hsl(172, 58.14%, 37.95%) !important;
  --nav-item-color-hover: #CECDC3 !important;
  --nav-item-color-selected: #CECDC3 !important;
  --nav-tag-color: #575653 !important;
  --nav-tag-color-active: #878580 !important;
  --nav-tag-color-hover: #878580 !important;
  --pdf-background: #100F0F !important;
  --pdf-page-background: #100F0F !important;
  --pdf-shadow: 0 0 0 1px #282726 !important;
  --pdf-sidebar-background: #100F0F !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #282726 !important;
  --pill-border-color: #282726 !important;
  --pill-border-color-hover: #343331 !important;
  --pill-color: #878580 !important;
  --pill-color-hover: #CECDC3 !important;
  --pill-color-remove: #575653 !important;
  --pill-color-remove-hover: hsl(172, 58.14%, 37.95%) !important;
  --prompt-background: #100F0F !important;
  --prompt-border-color: #403E3C !important;
  --raised-background: color-mix(in srgb, #282726 65%, transparent) linear-gradient(#282726, color-mix(in srgb, #282726 65%, transparent)) !important;
  --ribbon-background: #1C1B1A !important;
  --ribbon-background-collapsed: #100F0F !important;
  --search-clear-button-color: #878580 !important;
  --search-icon-color: #878580 !important;
  --search-result-background: #100F0F !important;
  --secondary: hsl(172, 58.14%, 37.95%) !important;
  --setting-group-heading-color: #CECDC3 !important;
  --setting-items-background: #1C1B1A !important;
  --setting-items-border-color: #282726 !important;
  --shiki-active-tab-border-color: #878580 !important;
  --shiki-code-background: #1C1B1A !important;
  --shiki-code-comment: #575653 !important;
  --shiki-code-function: #879A39 !important;
  --shiki-code-important: #DA702C !important;
  --shiki-code-keyword: #CE5D97 !important;
  --shiki-code-normal: #878580 !important;
  --shiki-code-property: #3AA99F !important;
  --shiki-code-punctuation: #878580 !important;
  --shiki-code-string: #D0A215 !important;
  --shiki-code-value: #8B7EC8 !important;
  --shiki-gutter-border-color: #282726 !important;
  --shiki-gutter-text-color: #575653 !important;
  --shiki-gutter-text-color-highlight: #878580 !important;
  --shiki-highlight-green: rgba(135, 154, 57, 0.5) !important;
  --shiki-highlight-green-background: rgba(135, 154, 57, 0.1) !important;
  --shiki-highlight-neutral: #878580 !important;
  --shiki-highlight-red: rgba(209, 77, 65, 0.5) !important;
  --shiki-highlight-red-background: rgba(209, 77, 65, 0.1) !important;
  --shiki-terminal-dots-color: #575653 !important;
  --slider-thumb-border-color: #343331 !important;
  --slider-track-background: #282726 !important;
  --status-bar-background: #1C1B1A !important;
  --status-bar-border-color: #282726 !important;
  --status-bar-text-color: #878580 !important;
  --suggestion-background: #100F0F !important;
  --sync-avatar-color-1: #D14D41 !important;
  --sync-avatar-color-2: #DA702C !important;
  --sync-avatar-color-3: #D0A215 !important;
  --sync-avatar-color-4: #879A39 !important;
  --sync-avatar-color-5: #3AA99F !important;
  --sync-avatar-color-6: #4385BE !important;
  --sync-avatar-color-7: #8B7EC8 !important;
  --sync-avatar-color-8: #CE5D97 !important;
  --tab-background-active: #100F0F !important;
  --tab-container-background: #1C1B1A !important;
  --tab-divider-color: #343331 !important;
  --tab-outline-color: #282726 !important;
  --tab-switcher-background: #1C1B1A !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1C1B1A, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(175, 57%, 33%) !important;
  --tab-text-color: #575653 !important;
  --tab-text-color-active: #878580 !important;
  --tab-text-color-focused: #878580 !important;
  --tab-text-color-focused-active: #878580 !important;
  --tab-text-color-focused-active-current: #CECDC3 !important;
  --tab-text-color-focused-highlighted: hsl(172, 58.14%, 37.95%) !important;
  --table-add-button-border-color: #282726 !important;
  --table-border-color: #282726 !important;
  --table-drag-handle-background-active: hsl(175, 57%, 33%) !important;
  --table-drag-handle-color: #575653 !important;
  --table-header-border-color: #282726 !important;
  --table-header-color: #CECDC3 !important;
  --table-selection: hsla(175, 57%, 33%, 0.1) !important;
  --table-selection-border-color: hsl(175, 57%, 33%) !important;
  --tag-background: hsla(175, 57%, 33%, 0.1) !important;
  --tag-background-hover: hsla(175, 57%, 33%, 0.2) !important;
  --tag-border-color: hsla(175, 57%, 33%, 0.15) !important;
  --tag-border-color-hover: hsla(175, 57%, 33%, 0.15) !important;
  --tag-color: hsl(172, 58.14%, 37.95%) !important;
  --tag-color-hover: hsl(172, 58.14%, 37.95%) !important;
  --tertiary: hsl(170, 59.85%, 42.57%) !important;
  --text-accent: hsl(172, 58.14%, 37.95%) !important;
  --text-accent-hover: hsl(170, 59.85%, 42.57%) !important;
  --text-error: #D14D41 !important;
  --text-faint: #575653 !important;
  --text-muted: #878580 !important;
  --text-normal: #CECDC3 !important;
  --text-selection: hsla(175, 57%, 33%, 0.33) !important;
  --text-success: #879A39 !important;
  --text-warning: #DA702C !important;
  --textHighlight: hsla(175, 57%, 33%, 0.1) !important;
  --titlebar-background: #1C1B1A !important;
  --titlebar-background-focused: #282726 !important;
  --titlebar-border-color: #282726 !important;
  --titlebar-text-color: #878580 !important;
  --titlebar-text-color-focused: #CECDC3 !important;
  --vault-profile-color: #CECDC3 !important;
  --vault-profile-color-hover: #CECDC3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(28, 27, 26);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(16, 15, 15);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(28, 27, 26);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(40, 39, 38);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(28, 27, 26);
  border-left-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body del {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(87, 86, 83);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(36, 132, 124);
  border-color: rgb(36, 132, 124);
}

html[saved-theme="dark"] body p {
  color: rgb(135, 133, 128);
  outline: rgb(135, 133, 128) none 0px;
  text-decoration-color: rgb(135, 133, 128);
}`,
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(41, 153, 138);
  outline: rgb(41, 153, 138) none 0px;
  text-decoration-color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(41, 153, 138);
  outline: rgb(41, 153, 138) none 0px;
  text-decoration-color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body a.internal-link.broken {
  color: rgb(41, 153, 138);
  outline: rgb(41, 153, 138) none 0px;
  text-decoration: underline rgba(36, 132, 124, 0.3);
  text-decoration-color: rgba(36, 132, 124, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body dt {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(87, 86, 83);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body table {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(36, 132, 124);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(87, 86, 83);
  border-left-color: rgb(87, 86, 83);
  border-right-color: rgb(87, 86, 83);
  border-top-color: rgb(87, 86, 83);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(206, 205, 195);
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(16, 15, 15);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(218, 112, 44);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(87, 86, 83);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 162, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(58, 169, 159);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(209, 77, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(209, 77, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(209, 77, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(209, 77, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 162, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(208, 162, 21);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(139, 126, 200);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(209, 77, 65);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 154, 57);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 154, 57);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(135, 154, 57);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 58, 169, 159;
  background: rgba(58, 169, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(58, 169, 159, 0.1);
  border-bottom-color: rgba(58, 169, 159, 0.25);
  border-left-color: rgba(58, 169, 159, 0.25);
  border-right-color: rgba(58, 169, 159, 0.25);
  border-top-color: rgba(58, 169, 159, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 209, 77, 65;
  background: rgba(209, 77, 65, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 209, 77, 65;
  background: rgba(209, 77, 65, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 139, 126, 200;
  background: rgba(139, 126, 200, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(139, 126, 200, 0.1);
  border-bottom-color: rgba(139, 126, 200, 0.25);
  border-left-color: rgba(139, 126, 200, 0.25);
  border-right-color: rgba(139, 126, 200, 0.25);
  border-top-color: rgba(139, 126, 200, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 209, 77, 65;
  background: rgba(209, 77, 65, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 67, 133, 190;
  background: rgba(67, 133, 190, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 67, 133, 190;
  background: rgba(67, 133, 190, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 218, 112, 44;
  background: rgba(218, 112, 44, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(218, 112, 44, 0.1);
  border-bottom-color: rgba(218, 112, 44, 0.25);
  border-left-color: rgba(218, 112, 44, 0.25);
  border-right-color: rgba(218, 112, 44, 0.25);
  border-top-color: rgba(218, 112, 44, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 135, 154, 57;
  background: rgba(135, 154, 57, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(135, 154, 57, 0.1);
  border-bottom-color: rgba(135, 154, 57, 0.25);
  border-left-color: rgba(135, 154, 57, 0.25);
  border-right-color: rgba(135, 154, 57, 0.25);
  border-top-color: rgba(135, 154, 57, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 58, 169, 159;
  background: rgba(58, 169, 159, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(58, 169, 159, 0.1);
  border-bottom-color: rgba(58, 169, 159, 0.25);
  border-left-color: rgba(58, 169, 159, 0.25);
  border-right-color: rgba(58, 169, 159, 0.25);
  border-top-color: rgba(58, 169, 159, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 67, 133, 190;
  background: rgba(67, 133, 190, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 218, 112, 44;
  background: rgba(218, 112, 44, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(218, 112, 44, 0.1);
  border-bottom-color: rgba(218, 112, 44, 0.25);
  border-left-color: rgba(218, 112, 44, 0.25);
  border-right-color: rgba(218, 112, 44, 0.25);
  border-top-color: rgba(218, 112, 44, 0.25);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(206, 205, 195);
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
  background-color: rgb(40, 39, 38);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(16, 15, 15);
  border-bottom-color: rgb(64, 62, 60);
  border-left-color: rgb(64, 62, 60);
  border-right-color: rgb(64, 62, 60);
  border-top-color: rgb(64, 62, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 62, 60);
  border-left-color: rgb(64, 62, 60);
  border-right-color: rgb(64, 62, 60);
  border-top-color: rgb(64, 62, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(28, 27, 26);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body a.internal-link.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
}

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body h1 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h2 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h3 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h4 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h5 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body h6 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 67, 133, 190;
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}`,
    explorer: `html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(135, 133, 128);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(206, 205, 195);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(135, 133, 128);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(135, 133, 128);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(135, 133, 128);
  stroke: rgb(135, 133, 128);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(87, 86, 83);
}`,
    canvas: `html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(28, 27, 26);
  border-color: rgb(206, 205, 195);
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(40, 39, 38);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(36, 132, 124, 0.1);
  color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 15, 15);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(28, 27, 26);
  border-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(40, 39, 38);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(206, 205, 195);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(28, 27, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body abbr {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(135, 133, 128);
  border-left-color: rgb(135, 133, 128);
  border-right-color: rgb(135, 133, 128);
  border-top-color: rgb(135, 133, 128);
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body sub {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body summary {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body sup {
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
  color: rgb(41, 153, 138);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 175 !important;
  --accent-l: 33% !important;
  --accent-s: 57% !important;
  --background-modifier-active-hover: hsla(175, 57%, 33%, 0.1) !important;
  --background-modifier-border: #E6E4D9 !important;
  --background-modifier-border-focus: #CECDC3 !important;
  --background-modifier-border-hover: #DAD8CE !important;
  --background-modifier-error: #AF3029 !important;
  --background-modifier-error-hover: #AF3029 !important;
  --background-modifier-error-rgb: 175, 48, 41 !important;
  --background-modifier-form-field: #FFFCF0 !important;
  --background-modifier-form-field-hover: #FFFCF0 !important;
  --background-modifier-success: #66800B !important;
  --background-modifier-success-rgb: 102, 128, 11 !important;
  --background-primary: #FFFCF0 !important;
  --background-primary-alt: #F2F0E5 !important;
  --background-secondary: #F2F0E5 !important;
  --background-secondary-alt: #FFFCF0 !important;
  --bases-cards-background: #FFFCF0 !important;
  --bases-cards-cover-background: #F2F0E5 !important;
  --bases-cards-shadow: 0 0 0 1px #E6E4D9 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #DAD8CE !important;
  --bases-embed-border-color: #E6E4D9 !important;
  --bases-group-heading-property-color: #6F6E69 !important;
  --bases-table-border-color: #E6E4D9 !important;
  --bases-table-cell-background-active: #FFFCF0 !important;
  --bases-table-cell-background-disabled: #F2F0E5 !important;
  --bases-table-cell-background-selected: hsla(175, 57%, 33%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #CECDC3 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(174, 57.57%, 35.475%) !important;
  --bases-table-group-background: #F2F0E5 !important;
  --bases-table-header-background: #FFFCF0 !important;
  --bases-table-header-color: #6F6E69 !important;
  --bases-table-summary-background: #FFFCF0 !important;
  --blockquote-border-color: hsl(174, 57.57%, 35.475%) !important;
  --blur-background: color-mix(in srgb, #FFFCF0 65%, transparent) linear-gradient(#FFFCF0, color-mix(in srgb, #FFFCF0 65%, transparent)) !important;
  --callout-bug: 175, 48, 41;
  --callout-default: 32, 94, 166;
  --callout-error: 175, 48, 41;
  --callout-example: 94, 64, 157;
  --callout-fail: 175, 48, 41;
  --callout-important: 36, 131, 123;
  --callout-info: 32, 94, 166;
  --callout-question: 188, 82, 21;
  --callout-success: 102, 128, 11;
  --callout-summary: 36, 131, 123;
  --callout-tip: 36, 131, 123;
  --callout-todo: 32, 94, 166;
  --callout-warning: 188, 82, 21;
  --canvas-background: #FFFCF0 !important;
  --canvas-card-label-color: #B7B5AC !important;
  --canvas-color-1: 175, 48, 41 !important;
  --canvas-color-2: 188, 82, 21 !important;
  --canvas-color-3: 173, 131, 1 !important;
  --canvas-color-4: 102, 128, 11 !important;
  --canvas-color-5: 36, 131, 123 !important;
  --canvas-color-6: 94, 64, 157 !important;
  --canvas-dot-pattern: #E6E4D9 !important;
  --caret-color: #100F0F !important;
  --checkbox-border-color: #B7B5AC !important;
  --checkbox-border-color-hover: #6F6E69 !important;
  --checkbox-color: hsl(174, 57.57%, 35.475%) !important;
  --checkbox-color-hover: hsl(172, 58.14%, 37.95%) !important;
  --checkbox-marker-color: #FFFCF0 !important;
  --checklist-done-color: #6F6E69 !important;
  --code-background: #F2F0E5 !important;
  --code-border-color: #E6E4D9 !important;
  --code-comment: #B7B5AC !important;
  --code-function: #AD8301 !important;
  --code-important: #BC5215 !important;
  --code-keyword: #A02F6F !important;
  --code-normal: #100F0F !important;
  --code-operator: #AF3029 !important;
  --code-property: #24837B !important;
  --code-punctuation: #6F6E69 !important;
  --code-string: #66800B !important;
  --code-tag: #AF3029 !important;
  --code-value: #5E409D !important;
  --collapse-icon-color: #B7B5AC !important;
  --collapse-icon-color-collapsed: hsl(175, 57%, 33%) !important;
  --color-accent: hsl(175, 57%, 33%) !important;
  --color-accent-1: hsl(174, 57.57%, 35.475%) !important;
  --color-accent-2: hsl(172, 58.14%, 37.95%) !important;
  --color-accent-hsl: 175, 57%, 33% !important;
  --color-base-00: #FFFCF0 !important;
  --color-base-05: #FFFCF0 !important;
  --color-base-10: #F2F0E5 !important;
  --color-base-100: #100F0F !important;
  --color-base-20: #F2F0E5 !important;
  --color-base-25: #E6E4D9 !important;
  --color-base-30: #E6E4D9 !important;
  --color-base-35: #DAD8CE !important;
  --color-base-40: #CECDC3 !important;
  --color-base-50: #B7B5AC !important;
  --color-base-60: #878580 !important;
  --color-base-70: #6F6E69 !important;
  --color-blue: #205EA6 !important;
  --color-blue-rgb: 32, 94, 166 !important;
  --color-cyan: #24837B !important;
  --color-cyan-rgb: 36, 131, 123 !important;
  --color-green: #66800B !important;
  --color-green-rgb: 102, 128, 11 !important;
  --color-orange: #BC5215 !important;
  --color-orange-rgb: 188, 82, 21 !important;
  --color-pink: #A02F6F !important;
  --color-pink-rgb: 160, 47, 111 !important;
  --color-purple: #5E409D !important;
  --color-purple-rgb: 94, 64, 157 !important;
  --color-red: #AF3029 !important;
  --color-red-rgb: 175, 48, 41 !important;
  --color-yellow: #AD8301 !important;
  --color-yellow-rgb: 173, 131, 1 !important;
  --dark: #100F0F !important;
  --darkgray: #100F0F !important;
  --divider-color: #E6E4D9 !important;
  --divider-color-hover: hsl(174, 57.57%, 35.475%) !important;
  --dropdown-background: #FFFCF0 !important;
  --dropdown-background-hover: #F2F0E5 !important;
  --embed-block-shadow-hover: 0 0 0 1px #E6E4D9, inset 0 0 0 1px #E6E4D9 !important;
  --embed-border-start: 2px solid hsl(174, 57.57%, 35.475%) !important;
  --file-header-background: #FFFCF0 !important;
  --file-header-background-focused: #FFFCF0 !important;
  --flair-background: #FFFCF0 !important;
  --flair-color: #100F0F !important;
  --footnote-divider-color: #E6E4D9 !important;
  --footnote-id-color: #6F6E69 !important;
  --footnote-id-color-no-occurrences: #B7B5AC !important;
  --graph-line: #DAD8CE !important;
  --graph-node: #6F6E69 !important;
  --graph-node-attachment: #AD8301 !important;
  --graph-node-focused: hsl(175, 57%, 33%) !important;
  --graph-node-tag: #66800B !important;
  --graph-node-unresolved: #B7B5AC !important;
  --graph-text: #100F0F !important;
  --gray: #6F6E69 !important;
  --heading-formatting: #B7B5AC !important;
  --highlight: hsla(175, 57%, 33%, 0.1) !important;
  --hr-color: #E6E4D9 !important;
  --icon-color: #6F6E69 !important;
  --icon-color-active: hsl(175, 57%, 33%) !important;
  --icon-color-focused: #100F0F !important;
  --icon-color-hover: #6F6E69 !important;
  --input-date-separator: #B7B5AC !important;
  --input-placeholder-color: #B7B5AC !important;
  --interactive-accent: hsl(174, 57.57%, 35.475%) !important;
  --interactive-accent-hover: hsl(172, 58.14%, 37.95%) !important;
  --interactive-accent-hsl: 175, 57%, 33% !important;
  --interactive-hover: #F2F0E5 !important;
  --interactive-normal: #FFFCF0 !important;
  --light: #FFFCF0 !important;
  --lightgray: #F2F0E5 !important;
  --link-color: hsl(175, 57%, 33%) !important;
  --link-color-hover: hsl(172, 58.14%, 37.95%) !important;
  --link-external-color: hsl(175, 57%, 33%) !important;
  --link-external-color-hover: hsl(172, 58.14%, 37.95%) !important;
  --link-unresolved-color: hsl(175, 57%, 33%) !important;
  --link-unresolved-decoration-color: hsla(175, 57%, 33%, 0.3) !important;
  --list-marker-color: #B7B5AC !important;
  --list-marker-color-collapsed: hsl(175, 57%, 33%) !important;
  --list-marker-color-hover: #6F6E69 !important;
  --menu-background: #F2F0E5 !important;
  --menu-border-color: #DAD8CE !important;
  --metadata-border-color: #E6E4D9 !important;
  --metadata-divider-color: #E6E4D9 !important;
  --metadata-input-text-color: #100F0F !important;
  --metadata-label-text-color: #6F6E69 !important;
  --metadata-label-text-color-hover: #6F6E69 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #CECDC3 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #DAD8CE !important;
  --modal-background: #FFFCF0 !important;
  --modal-border-color: #CECDC3 !important;
  --nav-collapse-icon-color: #B7B5AC !important;
  --nav-collapse-icon-color-collapsed: #B7B5AC !important;
  --nav-heading-color: #100F0F !important;
  --nav-heading-color-collapsed: #B7B5AC !important;
  --nav-heading-color-collapsed-hover: #6F6E69 !important;
  --nav-heading-color-hover: #100F0F !important;
  --nav-item-background-selected: hsla(175, 57%, 33%, 0.15) !important;
  --nav-item-color: #6F6E69 !important;
  --nav-item-color-active: #100F0F !important;
  --nav-item-color-highlighted: hsl(175, 57%, 33%) !important;
  --nav-item-color-hover: #100F0F !important;
  --nav-item-color-selected: #100F0F !important;
  --nav-tag-color: #B7B5AC !important;
  --nav-tag-color-active: #6F6E69 !important;
  --nav-tag-color-hover: #6F6E69 !important;
  --pdf-background: #FFFCF0 !important;
  --pdf-page-background: #FFFCF0 !important;
  --pdf-sidebar-background: #FFFCF0 !important;
  --pill-border-color: #E6E4D9 !important;
  --pill-border-color-hover: #DAD8CE !important;
  --pill-color: #6F6E69 !important;
  --pill-color-hover: #100F0F !important;
  --pill-color-remove: #B7B5AC !important;
  --pill-color-remove-hover: hsl(175, 57%, 33%) !important;
  --prompt-background: #FFFCF0 !important;
  --prompt-border-color: #CECDC3 !important;
  --raised-background: color-mix(in srgb, #FFFCF0 65%, transparent) linear-gradient(#FFFCF0, color-mix(in srgb, #FFFCF0 65%, transparent)) !important;
  --ribbon-background: #F2F0E5 !important;
  --ribbon-background-collapsed: #FFFCF0 !important;
  --search-clear-button-color: #6F6E69 !important;
  --search-icon-color: #6F6E69 !important;
  --search-result-background: #FFFCF0 !important;
  --secondary: hsl(175, 57%, 33%) !important;
  --setting-group-heading-color: #100F0F !important;
  --setting-items-background: #F2F0E5 !important;
  --setting-items-border-color: #E6E4D9 !important;
  --shiki-active-tab-border-color: #6F6E69 !important;
  --shiki-code-background: #F2F0E5 !important;
  --shiki-code-comment: #B7B5AC !important;
  --shiki-code-function: #66800B !important;
  --shiki-code-important: #BC5215 !important;
  --shiki-code-keyword: #A02F6F !important;
  --shiki-code-normal: #6F6E69 !important;
  --shiki-code-property: #24837B !important;
  --shiki-code-punctuation: #6F6E69 !important;
  --shiki-code-string: #AD8301 !important;
  --shiki-code-value: #5E409D !important;
  --shiki-gutter-border-color: #E6E4D9 !important;
  --shiki-gutter-text-color: #B7B5AC !important;
  --shiki-gutter-text-color-highlight: #6F6E69 !important;
  --shiki-highlight-green: rgba(102, 128, 11, 0.5) !important;
  --shiki-highlight-green-background: rgba(102, 128, 11, 0.1) !important;
  --shiki-highlight-neutral: #6F6E69 !important;
  --shiki-highlight-red: rgba(175, 48, 41, 0.5) !important;
  --shiki-highlight-red-background: rgba(175, 48, 41, 0.1) !important;
  --shiki-terminal-dots-color: #B7B5AC !important;
  --slider-thumb-border-color: #DAD8CE !important;
  --slider-track-background: #E6E4D9 !important;
  --status-bar-background: #F2F0E5 !important;
  --status-bar-border-color: #E6E4D9 !important;
  --status-bar-text-color: #6F6E69 !important;
  --suggestion-background: #FFFCF0 !important;
  --sync-avatar-color-1: #AF3029 !important;
  --sync-avatar-color-2: #BC5215 !important;
  --sync-avatar-color-3: #AD8301 !important;
  --sync-avatar-color-4: #66800B !important;
  --sync-avatar-color-5: #24837B !important;
  --sync-avatar-color-6: #205EA6 !important;
  --sync-avatar-color-7: #5E409D !important;
  --sync-avatar-color-8: #A02F6F !important;
  --tab-background-active: #FFFCF0 !important;
  --tab-container-background: #F2F0E5 !important;
  --tab-divider-color: #DAD8CE !important;
  --tab-outline-color: #E6E4D9 !important;
  --tab-switcher-background: #F2F0E5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F2F0E5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(175, 57%, 33%) !important;
  --tab-text-color: #B7B5AC !important;
  --tab-text-color-active: #6F6E69 !important;
  --tab-text-color-focused: #6F6E69 !important;
  --tab-text-color-focused-active: #6F6E69 !important;
  --tab-text-color-focused-active-current: #100F0F !important;
  --tab-text-color-focused-highlighted: hsl(175, 57%, 33%) !important;
  --table-add-button-border-color: #E6E4D9 !important;
  --table-border-color: #E6E4D9 !important;
  --table-drag-handle-background-active: hsl(174, 57.57%, 35.475%) !important;
  --table-drag-handle-color: #B7B5AC !important;
  --table-header-border-color: #E6E4D9 !important;
  --table-header-color: #100F0F !important;
  --table-selection: hsla(175, 57%, 33%, 0.1) !important;
  --table-selection-border-color: hsl(174, 57.57%, 35.475%) !important;
  --tag-background: hsla(175, 57%, 33%, 0.1) !important;
  --tag-background-hover: hsla(175, 57%, 33%, 0.2) !important;
  --tag-border-color: hsla(175, 57%, 33%, 0.15) !important;
  --tag-border-color-hover: hsla(175, 57%, 33%, 0.15) !important;
  --tag-color: hsl(175, 57%, 33%) !important;
  --tag-color-hover: hsl(175, 57%, 33%) !important;
  --tertiary: hsl(172, 58.14%, 37.95%) !important;
  --text-accent: hsl(175, 57%, 33%) !important;
  --text-accent-hover: hsl(172, 58.14%, 37.95%) !important;
  --text-error: #AF3029 !important;
  --text-faint: #B7B5AC !important;
  --text-muted: #6F6E69 !important;
  --text-normal: #100F0F !important;
  --text-selection: hsla(175, 57%, 33%, 0.2) !important;
  --text-success: #66800B !important;
  --text-warning: #BC5215 !important;
  --textHighlight: hsla(175, 57%, 33%, 0.1) !important;
  --titlebar-background: #F2F0E5 !important;
  --titlebar-background-focused: #FFFCF0 !important;
  --titlebar-border-color: #E6E4D9 !important;
  --titlebar-text-color: #6F6E69 !important;
  --titlebar-text-color-focused: #100F0F !important;
  --vault-profile-color: #100F0F !important;
  --vault-profile-color-hover: #100F0F !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 240, 229);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 252, 240);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 240, 229);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(230, 228, 217);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 240, 229);
  border-left-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body del {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(183, 181, 172);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(38, 143, 132);
  border-color: rgb(38, 143, 132);
}

html[saved-theme="light"] body p {
  color: rgb(111, 110, 105);
  outline: rgb(111, 110, 105) none 0px;
  text-decoration-color: rgb(111, 110, 105);
}`,
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal-link.broken {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration: underline rgba(36, 132, 124, 0.3);
  text-decoration-color: rgba(36, 132, 124, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body dt {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body ol > li {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body ul > li {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(183, 181, 172);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body table {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body figcaption {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(38, 143, 132);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(183, 181, 172);
  border-left-color: rgb(183, 181, 172);
  border-right-color: rgb(183, 181, 172);
  border-top-color: rgb(183, 181, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(16, 15, 15);
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(188, 82, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(183, 181, 172);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 131, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(36, 131, 123);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 94, 166);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 48, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 48, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 48, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 48, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(32, 94, 166);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 131, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(173, 131, 1);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(94, 64, 157);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(175, 48, 41);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 128, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 128, 11);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 128, 11);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 36, 131, 123;
  background: rgba(36, 131, 123, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(36, 131, 123, 0.1);
  border-bottom-color: rgba(36, 131, 123, 0.25);
  border-left-color: rgba(36, 131, 123, 0.25);
  border-right-color: rgba(36, 131, 123, 0.25);
  border-top-color: rgba(36, 131, 123, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 175, 48, 41;
  background: rgba(175, 48, 41, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 175, 48, 41;
  background: rgba(175, 48, 41, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 94, 64, 157;
  background: rgba(94, 64, 157, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(94, 64, 157, 0.1);
  border-bottom-color: rgba(94, 64, 157, 0.25);
  border-left-color: rgba(94, 64, 157, 0.25);
  border-right-color: rgba(94, 64, 157, 0.25);
  border-top-color: rgba(94, 64, 157, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 175, 48, 41;
  background: rgba(175, 48, 41, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 32, 94, 166;
  background: rgba(32, 94, 166, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 32, 94, 166;
  background: rgba(32, 94, 166, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 188, 82, 21;
  background: rgba(188, 82, 21, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(188, 82, 21, 0.1);
  border-bottom-color: rgba(188, 82, 21, 0.25);
  border-left-color: rgba(188, 82, 21, 0.25);
  border-right-color: rgba(188, 82, 21, 0.25);
  border-top-color: rgba(188, 82, 21, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 102, 128, 11;
  background: rgba(102, 128, 11, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(102, 128, 11, 0.1);
  border-bottom-color: rgba(102, 128, 11, 0.25);
  border-left-color: rgba(102, 128, 11, 0.25);
  border-right-color: rgba(102, 128, 11, 0.25);
  border-top-color: rgba(102, 128, 11, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 36, 131, 123;
  background: rgba(36, 131, 123, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(36, 131, 123, 0.1);
  border-bottom-color: rgba(36, 131, 123, 0.25);
  border-left-color: rgba(36, 131, 123, 0.25);
  border-right-color: rgba(36, 131, 123, 0.25);
  border-top-color: rgba(36, 131, 123, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 32, 94, 166;
  background: rgba(32, 94, 166, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 188, 82, 21;
  background: rgba(188, 82, 21, 0.1) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(188, 82, 21, 0.1);
  border-bottom-color: rgba(188, 82, 21, 0.25);
  border-left-color: rgba(188, 82, 21, 0.25);
  border-right-color: rgba(188, 82, 21, 0.25);
  border-top-color: rgba(188, 82, 21, 0.25);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(16, 15, 15);
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
  background-color: rgb(255, 252, 240);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 252, 240);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 240, 229);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body a.internal-link.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
}

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(36, 132, 124);
}

html[saved-theme="light"] body h1 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h2 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h3 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h4 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h5 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body h6 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 32, 94, 166;
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}`,
    explorer: `html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer.open) > .nav-folder-title {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .nav-files-container li:has(> .folder-outer:not(.open)) > .nav-folder-title {
  color: rgb(111, 110, 105);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(16, 15, 15);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(111, 110, 105);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 110, 105);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(111, 110, 105);
  stroke: rgb(111, 110, 105);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(183, 181, 172);
}`,
    canvas: `html[saved-theme="light"] body .canvas-node {
  border-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 252, 240);
  border-color: rgb(16, 15, 15);
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(230, 228, 217);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(36, 132, 124, 0.1);
  color: rgb(36, 132, 124);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 252, 240);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(242, 240, 229);
  border-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(16, 15, 15);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 240, 229);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body abbr {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(111, 110, 105);
  border-left-color: rgb(111, 110, 105);
  border-right-color: rgb(111, 110, 105);
  border-top-color: rgb(111, 110, 105);
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body sub {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body summary {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body sup {
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
  color: rgb(36, 132, 124);
}`,
  },
};
