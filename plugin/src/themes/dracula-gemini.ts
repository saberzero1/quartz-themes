import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dracula-gemini", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 225 !important;
  --accent-l: 51% !important;
  --accent-s: 27% !important;
  --background-modifier-active-hover: hsla(225, 27%, 51%, 0.1) !important;
  --background-modifier-border: hsl(231, 15%, 30%) !important;
  --background-modifier-border-focus: hsl(231, 15%, 40%) !important;
  --background-modifier-border-hover: hsl(231, 15%, 33%) !important;
  --background-modifier-form-field: hsl(231, 15%, 27%) !important;
  --background-modifier-form-field-hover: hsl(231, 15%, 27%) !important;
  --background-primary: #282a36 !important;
  --background-primary-alt: hsl(231, 15%, 22%) !important;
  --background-secondary: hsl(231, 15%, 24%) !important;
  --background-secondary-alt: hsl(231, 15%, 30%) !important;
  --bases-cards-background: #282a36 !important;
  --bases-cards-cover-background: hsl(231, 15%, 22%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(231, 15%, 30%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(231, 15%, 33%) !important;
  --bases-embed-border-color: hsl(231, 15%, 30%) !important;
  --bases-group-heading-property-color: hsl(231, 15%, 84%) !important;
  --bases-table-border-color: hsl(231, 15%, 30%) !important;
  --bases-table-cell-background-active: #282a36 !important;
  --bases-table-cell-background-disabled: hsl(231, 15%, 22%) !important;
  --bases-table-cell-background-selected: hsla(225, 27%, 51%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(231, 15%, 40%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(225, 27%, 51%) !important;
  --bases-table-group-background: hsl(231, 15%, 22%) !important;
  --bases-table-header-background: #282a36 !important;
  --bases-table-header-color: hsl(231, 15%, 84%) !important;
  --bases-table-summary-background: #282a36 !important;
  --blockquote-border-color: #f1fa8c !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #f4f9bf !important;
  --blur-background: color-mix(in srgb, hsl(231, 15%, 30%) 65%, transparent) linear-gradient(hsl(231, 15%, 30%), color-mix(in srgb, hsl(231, 15%, 30%) 65%, transparent)) !important;
  --bold-color: #ffb86c !important;
  --canvas-background: #282a36 !important;
  --canvas-card-label-color: hsl(231, 15%, 50%) !important;
  --canvas-dot-pattern: hsl(231, 15%, 30%) !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-border-color: hsl(231, 15%, 50%) !important;
  --checkbox-border-color-hover: hsl(231, 15%, 84%) !important;
  --checkbox-color: hsl(225, 27%, 51%) !important;
  --checkbox-color-hover: hsl(222, 27.54%, 58.65%) !important;
  --checkbox-marker-color: #282a36 !important;
  --checklist-done-color: hsl(231, 15%, 50%) !important;
  --checklist-done-decoration: none !important;
  --code-background: hsl(231, 15%, 22%) !important;
  --code-border-color: hsl(231, 15%, 30%) !important;
  --code-comment: #6272a4 !important;
  --code-function: #50fa7b !important;
  --code-important: #ff5555 !important;
  --code-keyword: #ff79c6 !important;
  --code-normal: hsl(231, 15%, 84%) !important;
  --code-operator: #f8f8f2 !important;
  --code-property: #ffb86c !important;
  --code-punctuation: hsl(231, 15%, 84%) !important;
  --code-size: 0.933em !important;
  --code-string: #f1fa8c !important;
  --code-tag: #ff5555 !important;
  --code-value: #bd93f9 !important;
  --collapse-icon-color: hsl(231, 15%, 50%) !important;
  --collapse-icon-color-collapsed: hsl(222, 27.54%, 58.65%) !important;
  --color-accent: hsl(225, 27%, 51%) !important;
  --color-accent-1: hsl(222, 27.54%, 58.65%) !important;
  --color-accent-2: hsl(220, 28.35%, 65.79%) !important;
  --color-accent-hsl: 225, 27%, 51% !important;
  --color-base-00: #282a36 !important;
  --color-base-10: hsl(231, 15%, 22%) !important;
  --color-base-100: #f8f8f2 !important;
  --color-base-20: hsl(231, 15%, 24%) !important;
  --color-base-25: hsl(231, 15%, 27%) !important;
  --color-base-30: hsl(231, 15%, 30%) !important;
  --color-base-35: hsl(231, 15%, 33%) !important;
  --color-base-40: hsl(231, 15%, 40%) !important;
  --color-base-50: hsl(231, 15%, 50%) !important;
  --color-base-60: hsl(231, 15%, 65%) !important;
  --color-base-70: hsl(231, 15%, 84%) !important;
  --color-dracula-background: #282a36 !important;
  --color-dracula-comment: #6272a4 !important;
  --color-dracula-cyan: #8be9fd !important;
  --color-dracula-foreground: #f8f8f2 !important;
  --color-dracula-green: #50fa7b !important;
  --color-dracula-orange: #ffb86c !important;
  --color-dracula-pink: #ff79c6 !important;
  --color-dracula-purple: #bd93f9 !important;
  --color-dracula-red: #ff5555 !important;
  --color-dracula-selection: #44475a !important;
  --color-dracula-yellow: #f1fa8c !important;
  --color-dracula-yellow-ish: #f4f9bf !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color: hsl(231, 15%, 30%) !important;
  --divider-color-hover: hsl(225, 27%, 51%) !important;
  --dropdown-background: hsl(231, 15%, 30%) !important;
  --dropdown-background-hover: hsl(231, 15%, 33%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(231, 15%, 30%), inset 0 0 0 1px hsl(231, 15%, 30%) !important;
  --embed-border-start: 2px solid hsl(225, 27%, 51%) !important;
  --empty-line-height: 1em !important;
  --file-header-background: #282a36 !important;
  --file-header-background-focused: #282a36 !important;
  --file-margins: 32px 48px !important;
  --flair-background: hsl(231, 15%, 30%) !important;
  --flair-color: #f8f8f2 !important;
  --footnote-divider-color: hsl(231, 15%, 30%) !important;
  --footnote-id-color: hsl(231, 15%, 84%) !important;
  --footnote-id-color-no-occurrences: hsl(231, 15%, 50%) !important;
  --graph-line: hsl(231, 15%, 33%) !important;
  --graph-node: hsl(231, 15%, 84%) !important;
  --graph-node-focused: hsl(222, 27.54%, 58.65%) !important;
  --graph-node-unresolved: hsl(231, 15%, 50%) !important;
  --graph-text: #f8f8f2 !important;
  --gray: hsl(231, 15%, 84%) !important;
  --h1-color: #ff79c6 !important;
  --h1-line-height: 1.3125 !important;
  --h1-size: 2em !important;
  --h1-weight: 600 !important;
  --h2-color: #bd93f9 !important;
  --h2-line-height: 1.2847 !important;
  --h2-size: 1.8em !important;
  --h2-weight: 600 !important;
  --h3-color: #8be9fd !important;
  --h3-line-height: 1.2891 !important;
  --h3-size: 1.6em !important;
  --h3-weight: 600 !important;
  --h4-color: #50fa7b !important;
  --h4-line-height: 1.2946 !important;
  --h4-size: 1.4em !important;
  --h4-weight: 600 !important;
  --h5-color: #f1fa8c !important;
  --h5-line-height: 1.3021 !important;
  --h5-size: 1.2em !important;
  --h5-weight: 600 !important;
  --h6-color: #ffb86c !important;
  --h6-line-height: 1.3125 !important;
  --header-hanging-margin: 30px !important;
  --heading-formatting: hsl(231, 15%, 50%) !important;
  --heading-spacing: 0 !important;
  --highlight: hsla(225, 27%, 51%, 0.1) !important;
  --hr-color: hsl(231, 15%, 30%) !important;
  --icon-color: hsl(231, 15%, 84%) !important;
  --icon-color-active: hsl(222, 27.54%, 58.65%) !important;
  --icon-color-focused: #f8f8f2 !important;
  --icon-color-hover: hsl(231, 15%, 84%) !important;
  --inline-title-color: #ff79c6 !important;
  --inline-title-line-height: 1.3125 !important;
  --inline-title-size: 2em !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: hsl(231, 15%, 50%) !important;
  --input-placeholder-color: hsl(231, 15%, 50%) !important;
  --interactive-accent: hsl(225, 27%, 51%) !important;
  --interactive-accent-hover: hsl(222, 27.54%, 58.65%) !important;
  --interactive-accent-hsl: 225, 27%, 51% !important;
  --interactive-hover: hsl(231, 15%, 33%) !important;
  --interactive-normal: hsl(231, 15%, 30%) !important;
  --italic-color: #f1fa8c !important;
  --light: #282a36 !important;
  --lightgray: hsl(231, 15%, 24%) !important;
  --link-color: #ff79c6 !important;
  --link-color-hover: #bd93f9 !important;
  --link-external-color: #ff79c6 !important;
  --link-external-color-hover: #bd93f9 !important;
  --link-unresolved-color: #ff79c6 !important;
  --link-unresolved-decoration-color: #ff79c6 !important;
  --link-unresolved-opacity: 0.5 !important;
  --list-checkbox-margin-left: 6.16px !important;
  --list-checkbox-margin-right: 10.96px !important;
  --list-indent: 1.54688em !important;
  --list-indent-spacing: 0.125em !important;
  --list-item-gap: 0.375em !important;
  --list-marker-color: hsl(231, 15%, 50%) !important;
  --list-marker-color-collapsed: hsl(222, 27.54%, 58.65%) !important;
  --list-marker-color-hover: hsl(231, 15%, 84%) !important;
  --list-ol-bullet-width: 1.75em !important;
  --list-spacing: 0 !important;
  --list-ul-bullet-spacing: 0.0805em !important;
  --menu-background: hsl(231, 15%, 24%) !important;
  --menu-border-color: hsl(231, 15%, 33%) !important;
  --metadata-border-color: hsl(231, 15%, 30%) !important;
  --metadata-divider-color: hsl(231, 15%, 30%) !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --metadata-label-text-color: hsl(231, 15%, 84%) !important;
  --metadata-label-text-color-hover: hsl(231, 15%, 84%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(231, 15%, 40%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(231, 15%, 33%) !important;
  --modal-background: #282a36 !important;
  --modal-border-color: hsl(231, 15%, 40%) !important;
  --nav-collapse-icon-color: hsl(231, 15%, 50%) !important;
  --nav-collapse-icon-color-collapsed: hsl(231, 15%, 50%) !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-collapsed: hsl(231, 15%, 50%) !important;
  --nav-heading-color-collapsed-hover: hsl(231, 15%, 84%) !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-background-selected: hsla(225, 27%, 51%, 0.15) !important;
  --nav-item-color: hsl(231, 15%, 84%) !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-highlighted: hsl(222, 27.54%, 58.65%) !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --nav-tag-color: hsl(231, 15%, 50%) !important;
  --nav-tag-color-active: hsl(231, 15%, 84%) !important;
  --nav-tag-color-hover: hsl(231, 15%, 84%) !important;
  --pdf-background: #282a36 !important;
  --pdf-page-background: #282a36 !important;
  --pdf-shadow: 0 0 0 1px hsl(231, 15%, 30%) !important;
  --pdf-sidebar-background: #282a36 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(231, 15%, 30%) !important;
  --pill-border-color: hsl(231, 15%, 30%) !important;
  --pill-border-color-hover: hsl(231, 15%, 33%) !important;
  --pill-color: hsl(231, 15%, 84%) !important;
  --pill-color-hover: #f8f8f2 !important;
  --pill-color-remove: hsl(231, 15%, 50%) !important;
  --pill-color-remove-hover: hsl(222, 27.54%, 58.65%) !important;
  --prompt-background: #282a36 !important;
  --prompt-border-color: hsl(231, 15%, 40%) !important;
  --raised-background: color-mix(in srgb, hsl(231, 15%, 30%) 65%, transparent) linear-gradient(hsl(231, 15%, 30%), color-mix(in srgb, hsl(231, 15%, 30%) 65%, transparent)) !important;
  --ribbon-background: hsl(231, 15%, 24%) !important;
  --ribbon-background-collapsed: #282a36 !important;
  --search-clear-button-color: hsl(231, 15%, 84%) !important;
  --search-icon-color: hsl(231, 15%, 84%) !important;
  --search-result-background: #282a36 !important;
  --secondary: hsl(222, 27.54%, 58.65%) !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: hsl(231, 15%, 22%) !important;
  --setting-items-border-color: hsl(231, 15%, 30%) !important;
  --slider-thumb-border-color: hsl(231, 15%, 33%) !important;
  --slider-track-background: hsl(231, 15%, 30%) !important;
  --status-bar-background: hsl(231, 15%, 24%) !important;
  --status-bar-border-color: hsl(231, 15%, 30%) !important;
  --status-bar-text-color: hsl(231, 15%, 84%) !important;
  --suggestion-background: #282a36 !important;
  --tab-background-active: #282a36 !important;
  --tab-container-background: hsl(231, 15%, 24%) !important;
  --tab-divider-color: hsl(231, 15%, 33%) !important;
  --tab-outline-color: hsl(231, 15%, 30%) !important;
  --tab-switcher-background: hsl(231, 15%, 24%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(231, 15%, 24%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(225, 27%, 51%) !important;
  --tab-text-color: hsl(231, 15%, 50%) !important;
  --tab-text-color-active: hsl(231, 15%, 84%) !important;
  --tab-text-color-focused: hsl(231, 15%, 84%) !important;
  --tab-text-color-focused-active: hsl(231, 15%, 84%) !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --tab-text-color-focused-highlighted: hsl(222, 27.54%, 58.65%) !important;
  --table-add-button-border-color: hsl(231, 15%, 30%) !important;
  --table-border-color: hsl(231, 15%, 30%) !important;
  --table-drag-handle-background-active: hsl(225, 27%, 51%) !important;
  --table-drag-handle-color: hsl(231, 15%, 50%) !important;
  --table-header-background: hsl(231, 15%, 24%) !important;
  --table-header-border-color: hsl(231, 15%, 30%) !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection: hsla(225, 27%, 51%, 0.1) !important;
  --table-selection-border-color: hsl(225, 27%, 51%) !important;
  --tag-background: hsla(225, 27%, 51%, 0.2) !important;
  --tag-background-hover: hsla(225, 27%, 51%, 0.4) !important;
  --tag-border-color: hsla(225, 27%, 51%, 0.15) !important;
  --tag-border-color-hover: hsla(225, 27%, 51%, 0.15) !important;
  --tag-color: #ff79c6 !important;
  --tag-color-hover: #ff79c6 !important;
  --tag-padding-x: 0.25em !important;
  --tag-padding-y: 0.125em !important;
  --tag-radius: 0.1875em !important;
  --tag-size: 16px !important;
  --tertiary: hsl(220, 28.35%, 65.79%) !important;
  --text-accent: hsl(222, 27.54%, 58.65%) !important;
  --text-accent-hover: hsl(220, 28.35%, 65.79%) !important;
  --text-faint: hsl(231, 15%, 50%) !important;
  --text-muted: hsl(231, 15%, 84%) !important;
  --text-normal: #f8f8f2 !important;
  --text-selection: #44475a !important;
  --textHighlight: hsla(225, 27%, 51%, 0.1) !important;
  --titlebar-background: hsl(231, 15%, 24%) !important;
  --titlebar-background-focused: hsl(231, 15%, 30%) !important;
  --titlebar-border-color: hsl(231, 15%, 30%) !important;
  --titlebar-text-color: hsl(231, 15%, 84%) !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(52, 55, 70);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body .bases-table thead th {
  border-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(52, 55, 70);
  border-color: rgb(248, 248, 242);
}

html body .note-properties {
  border-color: rgb(65, 68, 88);
}

html body .note-properties-key {
  color: rgb(208, 210, 220);
}

html body .note-properties-row {
  border-color: rgb(208, 210, 220);
}

html body .note-properties-tags {
  background-color: rgba(96, 113, 164, 0.2);
  border-radius: 2.625px;
  color: rgb(255, 121, 198);
}

html body .note-properties-value {
  color: rgb(208, 210, 220);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(52, 55, 70);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 68, 88);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(52, 55, 70);
  border-left-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .page article p > em, html em {
  color: rgb(241, 250, 140);
  outline: rgb(241, 250, 140) none 0px;
  text-decoration-color: rgb(241, 250, 140);
}

html body .page article p > i, html i {
  color: rgb(241, 250, 140);
  outline: rgb(241, 250, 140) none 0px;
  text-decoration-color: rgb(241, 250, 140);
}

html body .page article p > strong, html strong {
  color: rgb(255, 184, 108);
  outline: rgb(255, 184, 108) none 0px;
  text-decoration-color: rgb(255, 184, 108);
}

html body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body h1.article-title {
  color: rgb(248, 248, 242);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(108, 114, 147);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(96, 113, 164);
  border-color: rgb(96, 113, 164);
}

html body p {
  color: rgb(208, 210, 220);
  outline: rgb(208, 210, 220) none 0px;
  text-decoration-color: rgb(208, 210, 220);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration-color: rgb(255, 121, 198);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration-color: rgb(255, 121, 198);
}

html body a.internal.broken {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration: underline rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(248, 248, 242);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(248, 248, 242);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(108, 114, 147);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body table {
  color: rgb(248, 248, 242);
  margin-top: 0px;
}

html body td {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

html body th {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

html body tr {
  background-color: rgb(52, 55, 70);
}`,
    code: `html body code {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

html body pre > code > [data-line] {
  border-left-color: rgb(80, 250, 123);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(80, 250, 123);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(80, 250, 123);
  border-left-color: rgb(80, 250, 123);
  border-right-color: rgb(80, 250, 123);
  border-top-color: rgb(80, 250, 123);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
}

html body pre:has(> code) {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figcaption {
  color: rgb(248, 248, 242);
}

html body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body img {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
}

html body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(96, 113, 164);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(108, 114, 147);
  border-left-color: rgb(108, 114, 147);
  border-right-color: rgb(108, 114, 147);
  border-top-color: rgb(108, 114, 147);
  margin-left: -26.96px;
  margin-right: 10.96px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
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
  --callout-color: 68, 207, 110;
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
  background-color: rgb(59, 62, 79);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(87, 91, 117);
  border-left-color: rgb(87, 91, 117);
  border-right-color: rgb(87, 91, 117);
  border-top-color: rgb(87, 91, 117);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(87, 91, 117);
  border-left-color: rgb(87, 91, 117);
  border-right-color: rgb(87, 91, 117);
  border-top-color: rgb(87, 91, 117);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(52, 55, 70);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(96, 113, 164, 0.2);
  border-bottom-color: rgba(96, 113, 164, 0.15);
  border-bottom-left-radius: 2.625px;
  border-bottom-right-radius: 2.625px;
  border-left-color: rgba(96, 113, 164, 0.15);
  border-right-color: rgba(96, 113, 164, 0.15);
  border-top-color: rgba(96, 113, 164, 0.15);
  border-top-left-radius: 2.625px;
  border-top-right-radius: 2.625px;
}

html body a.internal.tag-link::before {
  color: rgb(255, 121, 198);
}

html body h1 {
  color: rgb(255, 121, 198);
}

html body h2 {
  color: rgb(189, 147, 249);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 121, 198);
}

html body h3 {
  color: rgb(139, 233, 253);
}

html body h4 {
  color: rgb(80, 250, 123);
}

html body h5 {
  color: rgb(241, 250, 140);
}

html body h6 {
  color: rgb(255, 184, 108);
}

html body hr {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 210, 220);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 210, 220);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}`,
    footer: `html body footer {
  background-color: rgb(52, 55, 70);
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(208, 210, 220);
}

html body footer ul li a {
  color: rgb(208, 210, 220);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 210, 220);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(208, 210, 220);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body li.section-li > .section .meta {
  color: rgb(208, 210, 220);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 210, 220);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

html body .darkmode svg {
  color: rgb(208, 210, 220);
  stroke: rgb(208, 210, 220);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

html body .breadcrumb-element p {
  color: rgb(108, 114, 147);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .metadata {
  border-bottom-color: rgb(65, 68, 88);
  border-left-color: rgb(65, 68, 88);
  border-right-color: rgb(65, 68, 88);
  border-top-color: rgb(65, 68, 88);
  color: rgb(208, 210, 220);
}

html body .metadata-properties {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

html body .navigation-progress {
  background-color: rgb(52, 55, 70);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html body abbr {
  color: rgb(248, 248, 242);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body input[type=text] {
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
}

html body kbd {
  background-color: rgb(48, 50, 65);
  border-bottom-color: rgb(208, 210, 220);
  border-left-color: rgb(208, 210, 220);
  border-right-color: rgb(208, 210, 220);
  border-top-color: rgb(208, 210, 220);
  color: rgb(208, 210, 220);
  font-size: 14.928px;
  padding-bottom: 1.4928px;
  padding-left: 3.732px;
  padding-right: 3.732px;
  padding-top: 1.4928px;
}

html body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body sub {
  color: rgb(248, 248, 242);
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(248, 248, 242);
}

html body ul.tags > li {
  background-color: rgba(96, 113, 164, 0.2);
  border-bottom-color: rgba(96, 113, 164, 0.15);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(96, 113, 164, 0.15);
  border-right-color: rgba(96, 113, 164, 0.15);
  border-top-color: rgba(96, 113, 164, 0.15);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(255, 121, 198);
}`,
  },
  light: {},
};
