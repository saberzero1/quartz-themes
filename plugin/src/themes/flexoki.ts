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

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .canvas-node {
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
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(16, 15, 15);
  color: rgb(206, 205, 195);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(206, 205, 195);
  outline: rgb(206, 205, 195) none 0px;
  text-decoration-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(41, 153, 138);
  outline: rgb(41, 153, 138) none 0px;
  text-decoration-color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(41, 153, 138);
  outline: rgb(41, 153, 138) none 0px;
  text-decoration-color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body a.internal.broken {
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

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
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
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(208, 162, 21);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(208, 162, 21);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(208, 162, 21);
  border-left-color: rgb(208, 162, 21);
  border-right-color: rgb(208, 162, 21);
  border-top-color: rgb(208, 162, 21);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 27, 26);
  border-bottom-color: rgb(40, 39, 38);
  border-left-color: rgb(40, 39, 38);
  border-right-color: rgb(40, 39, 38);
  border-top-color: rgb(40, 39, 38);
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
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(67, 133, 190);
  border-left-color: rgb(67, 133, 190);
  border-right-color: rgb(67, 133, 190);
  border-top-color: rgb(67, 133, 190);
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(67, 133, 190);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 58, 169, 159;
  background-color: rgba(58, 169, 159, 0.1);
  border-bottom-color: rgba(58, 169, 159, 0.25);
  border-left-color: rgba(58, 169, 159, 0.25);
  border-right-color: rgba(58, 169, 159, 0.25);
  border-top-color: rgba(58, 169, 159, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 209, 77, 65;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 209, 77, 65;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 139, 126, 200;
  background-color: rgba(139, 126, 200, 0.1);
  border-bottom-color: rgba(139, 126, 200, 0.25);
  border-left-color: rgba(139, 126, 200, 0.25);
  border-right-color: rgba(139, 126, 200, 0.25);
  border-top-color: rgba(139, 126, 200, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 209, 77, 65;
  background-color: rgba(209, 77, 65, 0.1);
  border-bottom-color: rgba(209, 77, 65, 0.25);
  border-left-color: rgba(209, 77, 65, 0.25);
  border-right-color: rgba(209, 77, 65, 0.25);
  border-top-color: rgba(209, 77, 65, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 67, 133, 190;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 67, 133, 190;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 218, 112, 44;
  background-color: rgba(218, 112, 44, 0.1);
  border-bottom-color: rgba(218, 112, 44, 0.25);
  border-left-color: rgba(218, 112, 44, 0.25);
  border-right-color: rgba(218, 112, 44, 0.25);
  border-top-color: rgba(218, 112, 44, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 135, 154, 57;
  background-color: rgba(135, 154, 57, 0.1);
  border-bottom-color: rgba(135, 154, 57, 0.25);
  border-left-color: rgba(135, 154, 57, 0.25);
  border-right-color: rgba(135, 154, 57, 0.25);
  border-top-color: rgba(135, 154, 57, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 58, 169, 159;
  background-color: rgba(58, 169, 159, 0.1);
  border-bottom-color: rgba(58, 169, 159, 0.25);
  border-left-color: rgba(58, 169, 159, 0.25);
  border-right-color: rgba(58, 169, 159, 0.25);
  border-top-color: rgba(58, 169, 159, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 67, 133, 190;
  background-color: rgba(67, 133, 190, 0.1);
  border-bottom-color: rgba(67, 133, 190, 0.25);
  border-left-color: rgba(67, 133, 190, 0.25);
  border-right-color: rgba(67, 133, 190, 0.25);
  border-top-color: rgba(67, 133, 190, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 218, 112, 44;
  background-color: rgba(218, 112, 44, 0.1);
  border-bottom-color: rgba(218, 112, 44, 0.25);
  border-left-color: rgba(218, 112, 44, 0.25);
  border-right-color: rgba(218, 112, 44, 0.25);
  border-top-color: rgba(218, 112, 44, 0.25);
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

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(41, 153, 138);
}

html[saved-theme="dark"] body h1 {
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
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(16, 15, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 15, 15);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(135, 133, 128);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
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
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(206, 205, 195);
  border-left-color: rgb(206, 205, 195);
  border-right-color: rgb(206, 205, 195);
  border-top-color: rgb(206, 205, 195);
  color: rgb(206, 205, 195);
}

html[saved-theme="dark"] body .metadata {
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

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .canvas-node {
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
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 252, 240);
  color: rgb(16, 15, 15);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(16, 15, 15);
  outline: rgb(16, 15, 15) none 0px;
  text-decoration-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(36, 132, 124);
  outline: rgb(36, 132, 124) none 0px;
  text-decoration-color: rgb(36, 132, 124);
}

html[saved-theme="light"] body a.internal.broken {
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

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
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
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(173, 131, 1);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(173, 131, 1);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(173, 131, 1);
  border-left-color: rgb(173, 131, 1);
  border-right-color: rgb(173, 131, 1);
  border-top-color: rgb(173, 131, 1);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 240, 229);
  border-bottom-color: rgb(230, 228, 217);
  border-left-color: rgb(230, 228, 217);
  border-right-color: rgb(230, 228, 217);
  border-top-color: rgb(230, 228, 217);
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
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(32, 94, 166);
  border-left-color: rgb(32, 94, 166);
  border-right-color: rgb(32, 94, 166);
  border-top-color: rgb(32, 94, 166);
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(32, 94, 166);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 36, 131, 123;
  background-color: rgba(36, 131, 123, 0.1);
  border-bottom-color: rgba(36, 131, 123, 0.25);
  border-left-color: rgba(36, 131, 123, 0.25);
  border-right-color: rgba(36, 131, 123, 0.25);
  border-top-color: rgba(36, 131, 123, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 175, 48, 41;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 175, 48, 41;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 94, 64, 157;
  background-color: rgba(94, 64, 157, 0.1);
  border-bottom-color: rgba(94, 64, 157, 0.25);
  border-left-color: rgba(94, 64, 157, 0.25);
  border-right-color: rgba(94, 64, 157, 0.25);
  border-top-color: rgba(94, 64, 157, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 175, 48, 41;
  background-color: rgba(175, 48, 41, 0.1);
  border-bottom-color: rgba(175, 48, 41, 0.25);
  border-left-color: rgba(175, 48, 41, 0.25);
  border-right-color: rgba(175, 48, 41, 0.25);
  border-top-color: rgba(175, 48, 41, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 32, 94, 166;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 32, 94, 166;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 188, 82, 21;
  background-color: rgba(188, 82, 21, 0.1);
  border-bottom-color: rgba(188, 82, 21, 0.25);
  border-left-color: rgba(188, 82, 21, 0.25);
  border-right-color: rgba(188, 82, 21, 0.25);
  border-top-color: rgba(188, 82, 21, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 102, 128, 11;
  background-color: rgba(102, 128, 11, 0.1);
  border-bottom-color: rgba(102, 128, 11, 0.25);
  border-left-color: rgba(102, 128, 11, 0.25);
  border-right-color: rgba(102, 128, 11, 0.25);
  border-top-color: rgba(102, 128, 11, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 36, 131, 123;
  background-color: rgba(36, 131, 123, 0.1);
  border-bottom-color: rgba(36, 131, 123, 0.25);
  border-left-color: rgba(36, 131, 123, 0.25);
  border-right-color: rgba(36, 131, 123, 0.25);
  border-top-color: rgba(36, 131, 123, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 32, 94, 166;
  background-color: rgba(32, 94, 166, 0.1);
  border-bottom-color: rgba(32, 94, 166, 0.25);
  border-left-color: rgba(32, 94, 166, 0.25);
  border-right-color: rgba(32, 94, 166, 0.25);
  border-top-color: rgba(32, 94, 166, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 188, 82, 21;
  background-color: rgba(188, 82, 21, 0.1);
  border-bottom-color: rgba(188, 82, 21, 0.25);
  border-left-color: rgba(188, 82, 21, 0.25);
  border-right-color: rgba(188, 82, 21, 0.25);
  border-top-color: rgba(188, 82, 21, 0.25);
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

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(36, 132, 124, 0.1);
  border-bottom-color: rgba(36, 132, 124, 0.15);
  border-left-color: rgba(36, 132, 124, 0.15);
  border-right-color: rgba(36, 132, 124, 0.15);
  border-top-color: rgba(36, 132, 124, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(36, 132, 124);
}

html[saved-theme="light"] body h1 {
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
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 252, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 252, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 252, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 240);
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 252, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 252, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 240);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 252, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 240);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 110, 105);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
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
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(16, 15, 15);
  border-left-color: rgb(16, 15, 15);
  border-right-color: rgb(16, 15, 15);
  border-top-color: rgb(16, 15, 15);
  color: rgb(16, 15, 15);
}

html[saved-theme="light"] body .metadata {
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
