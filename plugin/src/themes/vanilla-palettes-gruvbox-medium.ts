import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.gruvbox-medium",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(60, 71%, 35%) !important;
  --accent-color-dark: #98971a !important;
  --accent-color-hover: #b8bb26 !important;
  --accent-color-light: #d79921 !important;
  --accent-h: 60 !important;
  --accent-l: 35% !important;
  --accent-s: 71% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #504945 !important;
  --background-modifier-border-focus: #665c54 !important;
  --background-modifier-border-hover: #665c54 !important;
  --background-modifier-error: #cc241d !important;
  --background-modifier-error-hover: #cc241d !important;
  --background-modifier-form-field: #32302f !important;
  --background-modifier-form-field-hover: #32302f !important;
  --background-modifier-hover: #665c54 !important;
  --background-modifier-success: #98971a !important;
  --background-primary: #282828 !important;
  --background-secondary: #32302f !important;
  --bases-cards-background: #282828 !important;
  --bases-cards-shadow: 0 0 0 1px #504945 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #665c54 !important;
  --bases-embed-border-color: #504945 !important;
  --bases-group-heading-property-color: #ebdbb2 !important;
  --bases-table-border-color: #504945 !important;
  --bases-table-cell-background-active: #282828 !important;
  --bases-table-cell-background-selected: #665c54 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #665c54 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(60, 71%, 35%) !important;
  --bases-table-header-background: #282828 !important;
  --bases-table-header-background-hover: #665c54 !important;
  --bases-table-header-color: #ebdbb2 !important;
  --bases-table-summary-background: #282828 !important;
  --bases-table-summary-background-hover: #665c54 !important;
  --blockquote-border-color: #98971a !important;
  --blur-background: color-mix(in srgb, #32302f 65%, transparent) linear-gradient(#32302f, color-mix(in srgb, #32302f 65%, transparent)) !important;
  --bold-color: #d79921 !important;
  --border-color: #504945 !important;
  --border-color-primary: #504945 !important;
  --border-color-secondary: #665c54 !important;
  --bright-aqua: #8ec07c !important;
  --bright-blue: #83a598 !important;
  --bright-green: #b8bb26 !important;
  --bright-orange: #fe8019 !important;
  --bright-purple: #d3869b !important;
  --bright-red: #fb4934 !important;
  --bright-yellow: #fabd2f !important;
  --canvas-background: #282828 !important;
  --canvas-card-label-color: #665c54 !important;
  --canvas-color: 152, 151, 26 !important;
  --caret-color: #ebdbb2 !important;
  --checkbox-border-color: #665c54 !important;
  --checkbox-border-color-hover: #b8bb26 !important;
  --checkbox-color: #98971a !important;
  --checkbox-color-hover: #b8bb26 !important;
  --checkbox-marker-color: #282828 !important;
  --checklist-done-color: #665c54 !important;
  --code-background: #32302f !important;
  --code-boolean: #d3869b !important;
  --code-border-color: #504945 !important;
  --code-bracket-background: #665c54 !important;
  --code-builtin: #fe8019 !important;
  --code-comment: #665c54 !important;
  --code-definition: #ebdbb2 !important;
  --code-function: #d79921 !important;
  --code-important: #d79921 !important;
  --code-keyword: #fb4934 !important;
  --code-normal: #ebdbb2 !important;
  --code-operator: #fe8019 !important;
  --code-parentheses: #fe8019 !important;
  --code-property: #b8bb26 !important;
  --code-punctuation: #ebdbb2 !important;
  --code-string: #b8bb26 !important;
  --code-tag: #cc241d !important;
  --code-value: #d3869b !important;
  --code-variable: #83a598 !important;
  --collapse-icon-color: #665c54 !important;
  --collapse-icon-color-collapsed: hsl(60, 71%, 35%) !important;
  --color-accent: hsl(60, 71%, 35%) !important;
  --color-accent-1: hsl(57, 72.42%, 40.25%) !important;
  --color-accent-2: hsl(55, 74.55%, 45.15%) !important;
  --color-accent-hsl: 60, 71%, 35% !important;
  --color-blue: #458588 !important;
  --color-cyan: #689d6a !important;
  --color-green: #98971a !important;
  --color-orange: #d65d0e !important;
  --color-pink: pink !important;
  --color-purple: #b16286 !important;
  --color-red: #cc241d !important;
  --color-yellow: #d79921 !important;
  --dark: #ebdbb2 !important;
  --dark-aqua: #49503b !important;
  --dark-aqua-hard: #3e4934 !important;
  --dark-aqua-soft: #525742 !important;
  --dark-green: #62693e !important;
  --dark-green-hard: #5a633a !important;
  --dark-green-soft: #686d43 !important;
  --dark-red: #722529 !important;
  --dark-red-hard: #792329 !important;
  --dark-red-soft: #7b2c2f !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #ebdbb2 !important;
  --divider-color: #504945 !important;
  --divider-color-hover: hsl(60, 71%, 35%) !important;
  --dropdown-background: #32302f !important;
  --dropdown-background-hover: #504945 !important;
  --embed-block-shadow-hover: 0 0 0 1px #504945, inset 0 0 0 1px #504945 !important;
  --embed-border-start: 2px solid hsl(60, 71%, 35%) !important;
  --faded-aqua: #427b58 !important;
  --faded-blue: #076678 !important;
  --faded-green: #79740e !important;
  --faded-orange: #af3a03 !important;
  --faded-purple: #8f3f71 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #282828 !important;
  --file-header-background-focused: #282828 !important;
  --flair-background: #32302f !important;
  --flair-color: #ebdbb2 !important;
  --footnote-divider-color: #504945 !important;
  --footnote-id-color: #ebdbb2 !important;
  --footnote-id-color-no-occurrences: #665c54 !important;
  --footnote-input-background-active: #665c54 !important;
  --graph-line: #665c54 !important;
  --graph-node: hsl(60, 71%, 35%) !important;
  --graph-node-attachment: #98971a !important;
  --graph-node-focused: #b8bb26 !important;
  --graph-node-tag: #d79921 !important;
  --graph-node-unresolved: #504945 !important;
  --graph-text: #ebdbb2 !important;
  --gray: #928374 !important;
  --h1-color: #b16286 !important;
  --h2-color: #458588 !important;
  --h3-color: #98971a !important;
  --h4-color: #d79921 !important;
  --h5-color: #d65d0e !important;
  --h6-color: #cc241d !important;
  --heading-formatting: #665c54 !important;
  --highlight: hsl(60, 71%, 35%) !important;
  --hr-color: #504945 !important;
  --icon-color: #ebdbb2 !important;
  --icon-color-active: hsl(60, 71%, 35%) !important;
  --icon-color-focused: #ebdbb2 !important;
  --icon-color-hover: #ebdbb2 !important;
  --indentation-guide-color: #504945 !important;
  --indentation-guide-color-active: #665c54 !important;
  --inline-title-color: #ebdbb2 !important;
  --input-date-separator: #665c54 !important;
  --input-placeholder-color: #665c54 !important;
  --interactive-accent: hsl(60, 71%, 35%) !important;
  --interactive-accent-hover: hsl(57, 72.42%, 40.25%) !important;
  --interactive-accent-hsl: 60, 71%, 35% !important;
  --interactive-hover: #504945 !important;
  --interactive-normal: #32302f !important;
  --italic-color: #d79921 !important;
  --light: #282828 !important;
  --light-aqua: #e8e5b5 !important;
  --light-aqua-hard: #e6e9c1 !important;
  --light-aqua-soft: #e1dbac !important;
  --light-green: #d5d39b !important;
  --light-green-hard: #d3d6a5 !important;
  --light-green-soft: #cecb94 !important;
  --light-red: #fc9487 !important;
  --light-red-hard: #fc9690 !important;
  --light-red-soft: #f78b7f !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightgray: #32302f !important;
  --link-color: #98971a !important;
  --link-color-hover: #b8bb26 !important;
  --link-external-color: #98971a !important;
  --link-external-color-hover: #b8bb26 !important;
  --link-unresolved-decoration-color: hsla(60, 71%, 35%, 0.3) !important;
  --list-marker-color: #98971a !important;
  --list-marker-color-collapsed: hsl(60, 71%, 35%) !important;
  --list-marker-color-hover: #ebdbb2 !important;
  --menu-background: #32302f !important;
  --menu-border-color: #665c54 !important;
  --metadata-border-color: #504945 !important;
  --metadata-divider-color: #504945 !important;
  --metadata-input-background-active: #665c54 !important;
  --metadata-input-text-color: #ebdbb2 !important;
  --metadata-label-background-active: #665c54 !important;
  --metadata-label-text-color: #ebdbb2 !important;
  --metadata-label-text-color-hover: #ebdbb2 !important;
  --metadata-property-background-active: #665c54 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #665c54 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #665c54 !important;
  --modal-background: #32302f !important;
  --modal-border-color: #504945 !important;
  --nav-collapse-icon-color: #665c54 !important;
  --nav-collapse-icon-color-collapsed: #665c54 !important;
  --nav-heading-color: #ebdbb2 !important;
  --nav-heading-color-collapsed: #665c54 !important;
  --nav-heading-color-collapsed-hover: #ebdbb2 !important;
  --nav-heading-color-hover: #ebdbb2 !important;
  --nav-indentation-guide-color: #665c54 !important;
  --nav-item-background-active: #98971a !important;
  --nav-item-background-hover: #665c54 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #ebdbb2 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #d79921 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #665c54 !important;
  --nav-tag-color-active: #ebdbb2 !important;
  --nav-tag-color-hover: #ebdbb2 !important;
  --neutral-aqua: #689d6a !important;
  --neutral-blue: #458588 !important;
  --neutral-green: #98971a !important;
  --neutral-orange: #d65d0e !important;
  --neutral-purple: #b16286 !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --pdf-background: #282828 !important;
  --pdf-page-background: #282828 !important;
  --pdf-shadow: 0 0 0 1px #504945 !important;
  --pdf-sidebar-background: #282828 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #504945 !important;
  --pill-border-color: #504945 !important;
  --pill-border-color-hover: #665c54 !important;
  --pill-color: #ebdbb2 !important;
  --pill-color-hover: #ebdbb2 !important;
  --pill-color-remove: #665c54 !important;
  --pill-color-remove-hover: hsl(60, 71%, 35%) !important;
  --prompt-background: #282828 !important;
  --prompt-border-color: #504945 !important;
  --raised-background: color-mix(in srgb, #32302f 65%, transparent) linear-gradient(#32302f, color-mix(in srgb, #32302f 65%, transparent)) !important;
  --ribbon-background: #32302f !important;
  --ribbon-background-collapsed: #282828 !important;
  --search-clear-button-color: #ebdbb2 !important;
  --search-icon-color: #ebdbb2 !important;
  --search-result-background: #282828 !important;
  --secondary: hsl(60, 71%, 35%) !important;
  --selection-background-color: #665c54 !important;
  --selection-border-color: #b8bb26 !important;
  --setting-group-heading-color: #ebdbb2 !important;
  --setting-items-border-color: #504945 !important;
  --slider-track-background: #32302f !important;
  --status-bar-background: #32302f !important;
  --status-bar-border-color: #504945 !important;
  --status-bar-text-color: #ebdbb2 !important;
  --suggestion-background: #282828 !important;
  --sync-avatar-color-1: #cc241d !important;
  --sync-avatar-color-2: #d65d0e !important;
  --sync-avatar-color-3: #d79921 !important;
  --sync-avatar-color-4: #98971a !important;
  --sync-avatar-color-5: #689d6a !important;
  --sync-avatar-color-6: #458588 !important;
  --sync-avatar-color-7: #b16286 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #282828 !important;
  --tab-container-background: #32302f !important;
  --tab-divider-color: #665c54 !important;
  --tab-outline-color: #504945 !important;
  --tab-switcher-background: #32302f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #32302f, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(60, 71%, 35%) !important;
  --tab-text-color: #504945 !important;
  --tab-text-color-active: #ebdbb2 !important;
  --tab-text-color-focused: #ebdbb2 !important;
  --tab-text-color-focused-active: #ebdbb2 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #504945 !important;
  --table-border-color: #504945 !important;
  --table-drag-handle-background-active: #b8bb26 !important;
  --table-drag-handle-color: #665c54 !important;
  --table-drag-handle-color-active: #665c54 !important;
  --table-header-border-color: #504945 !important;
  --table-header-color: #ebdbb2 !important;
  --table-selection: #665c54 !important;
  --table-selection-border-color: #b8bb26 !important;
  --tag-background: #504945 !important;
  --tag-background-hover: #665c54 !important;
  --tag-border-color: hsla(60, 71%, 35%, 0.15) !important;
  --tag-border-color-hover: hsla(60, 71%, 35%, 0.15) !important;
  --tag-color: #98971a !important;
  --tag-color-hover: #98971a !important;
  --tertiary: red !important;
  --text-accent: hsl(60, 71%, 35%) !important;
  --text-accent-hover: red !important;
  --text-color: #ebdbb2 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #504945 !important;
  --text-color-muted-light: #665c54 !important;
  --text-error: #cc241d !important;
  --text-faint: #665c54 !important;
  --text-highlight-bg: hsl(60, 71%, 35%) !important;
  --text-muted: #ebdbb2 !important;
  --text-normal: #ebdbb2 !important;
  --text-on-accent-inverted: #282828 !important;
  --text-selection: #665c54 !important;
  --text-success: #98971a !important;
  --text-warning: #d79921 !important;
  --textHighlight: hsl(60, 71%, 35%) !important;
  --titlebar-background: #32302f !important;
  --titlebar-background-focused: #504945 !important;
  --titlebar-border-color: #504945 !important;
  --titlebar-text-color: #ebdbb2 !important;
  --titlebar-text-color-focused: #ebdbb2 !important;
  --vault-profile-color: #ebdbb2 !important;
  --vault-profile-color-hover: #ebdbb2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(50, 48, 47);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(50, 48, 47);
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(80, 73, 69);
  color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(50, 48, 47);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(50, 48, 47);
  border-left-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(153, 153, 26);
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body del {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(152, 151, 26);
  border-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body p {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(152, 151, 26);
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 151, 26);
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: underline rgba(153, 153, 26, 0.3);
  text-decoration-color: rgba(153, 153, 26, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body dt {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(102, 92, 84);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body table {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(177, 98, 134);
  border-left-color: rgb(177, 98, 134);
  border-right-color: rgb(177, 98, 134);
  border-top-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(153, 153, 26);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(102, 92, 84);
  border-left-color: rgb(102, 92, 84);
  border-right-color: rgb(102, 92, 84);
  border-top-color: rgb(102, 92, 84);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 93, 14);
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
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 157, 106);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(102, 92, 84);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(50, 48, 47);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(102, 92, 84);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(102, 92, 84);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body h1 {
  color: rgb(177, 98, 134);
}

html[saved-theme="dark"] body h2 {
  color: rgb(69, 133, 136);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body h3 {
  color: rgb(152, 151, 26);
}

html[saved-theme="dark"] body h4 {
  color: rgb(215, 153, 33);
}

html[saved-theme="dark"] body h5 {
  color: rgb(214, 93, 14);
}

html[saved-theme="dark"] body h6 {
  color: rgb(204, 36, 29);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(102, 92, 84);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(235, 219, 178);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 219, 178);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(235, 219, 178);
  stroke: rgb(235, 219, 178);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(102, 92, 84);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(80, 73, 69);
  border-left-color: rgb(80, 73, 69);
  border-right-color: rgb(80, 73, 69);
  border-top-color: rgb(80, 73, 69);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(50, 48, 47);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body abbr {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(50, 48, 47);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body sub {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body summary {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body sup {
  color: rgb(235, 219, 178);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(80, 73, 69);
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
  color: rgb(152, 151, 26);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(60, 71%, 35%) !important;
  --accent-color-dark: #98971a !important;
  --accent-color-hover: #b8bb26 !important;
  --accent-color-light: #d79921 !important;
  --accent-h: 60 !important;
  --accent-l: 35% !important;
  --accent-s: 71% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #d5c4a1 !important;
  --background-modifier-border-focus: #bdae93 !important;
  --background-modifier-border-hover: #bdae93 !important;
  --background-modifier-error: #cc241d !important;
  --background-modifier-error-hover: #cc241d !important;
  --background-modifier-form-field: #f2e5bc !important;
  --background-modifier-form-field-hover: #f2e5bc !important;
  --background-modifier-hover: #bdae93 !important;
  --background-modifier-success: #98971a !important;
  --background-primary: #fbf1c7 !important;
  --background-secondary: #f2e5bc !important;
  --bases-cards-background: #fbf1c7 !important;
  --bases-cards-shadow: 0 0 0 1px #d5c4a1 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #bdae93 !important;
  --bases-embed-border-color: #d5c4a1 !important;
  --bases-group-heading-property-color: #3c3836 !important;
  --bases-table-border-color: #d5c4a1 !important;
  --bases-table-cell-background-active: #fbf1c7 !important;
  --bases-table-cell-background-selected: #bdae93 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #bdae93 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(60, 71%, 35%) !important;
  --bases-table-header-background: #fbf1c7 !important;
  --bases-table-header-background-hover: #bdae93 !important;
  --bases-table-header-color: #3c3836 !important;
  --bases-table-summary-background: #fbf1c7 !important;
  --bases-table-summary-background-hover: #bdae93 !important;
  --blockquote-border-color: #98971a !important;
  --blur-background: color-mix(in srgb, #fbf1c7 65%, transparent) linear-gradient(#fbf1c7, color-mix(in srgb, #fbf1c7 65%, transparent)) !important;
  --bold-color: #d79921 !important;
  --border-color: #d5c4a1 !important;
  --border-color-primary: #d5c4a1 !important;
  --border-color-secondary: #bdae93 !important;
  --bright-aqua: #8ec07c !important;
  --bright-blue: #83a598 !important;
  --bright-green: #b8bb26 !important;
  --bright-orange: #fe8019 !important;
  --bright-purple: #d3869b !important;
  --bright-red: #fb4934 !important;
  --bright-yellow: #fabd2f !important;
  --canvas-background: #fbf1c7 !important;
  --canvas-card-label-color: #bdae93 !important;
  --canvas-color: 152, 151, 26 !important;
  --caret-color: #3c3836 !important;
  --checkbox-border-color: #bdae93 !important;
  --checkbox-border-color-hover: #b8bb26 !important;
  --checkbox-color: #98971a !important;
  --checkbox-color-hover: #b8bb26 !important;
  --checkbox-marker-color: #fbf1c7 !important;
  --checklist-done-color: #bdae93 !important;
  --code-background: #f2e5bc !important;
  --code-boolean: #8f3f71 !important;
  --code-border-color: #d5c4a1 !important;
  --code-bracket-background: #bdae93 !important;
  --code-builtin: #af3a03 !important;
  --code-comment: #bdae93 !important;
  --code-definition: #3c3836 !important;
  --code-function: #d79921 !important;
  --code-important: #d79921 !important;
  --code-keyword: #9d0006 !important;
  --code-normal: #3c3836 !important;
  --code-operator: #af3a03 !important;
  --code-parentheses: #af3a03 !important;
  --code-property: #79740e !important;
  --code-punctuation: #3c3836 !important;
  --code-string: #79740e !important;
  --code-tag: #cc241d !important;
  --code-value: #8f3f71 !important;
  --code-variable: #076678 !important;
  --collapse-icon-color: #bdae93 !important;
  --collapse-icon-color-collapsed: hsl(60, 71%, 35%) !important;
  --color-accent: hsl(60, 71%, 35%) !important;
  --color-accent-1: hsl(59, 71.71%, 37.625%) !important;
  --color-accent-2: hsl(57, 72.42%, 40.25%) !important;
  --color-accent-hsl: 60, 71%, 35% !important;
  --color-blue: #458588 !important;
  --color-cyan: #689d6a !important;
  --color-green: #98971a !important;
  --color-orange: #d65d0e !important;
  --color-pink: pink !important;
  --color-purple: #b16286 !important;
  --color-red: #cc241d !important;
  --color-yellow: #d79921 !important;
  --dark: #3c3836 !important;
  --dark-aqua: #49503b !important;
  --dark-aqua-hard: #3e4934 !important;
  --dark-aqua-soft: #525742 !important;
  --dark-green: #62693e !important;
  --dark-green-hard: #5a633a !important;
  --dark-green-soft: #686d43 !important;
  --dark-red: #722529 !important;
  --dark-red-hard: #792329 !important;
  --dark-red-soft: #7b2c2f !important;
  --dark0: #282828 !important;
  --dark0-hard: #1d2021 !important;
  --dark0-soft: #32302f !important;
  --dark1: #3c3836 !important;
  --dark2: #504945 !important;
  --dark3: #665c54 !important;
  --dark4: #7c6f64 !important;
  --darkgray: #3c3836 !important;
  --divider-color: #d5c4a1 !important;
  --divider-color-hover: hsl(60, 71%, 35%) !important;
  --dropdown-background: #f2e5bc !important;
  --dropdown-background-hover: #d5c4a1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #d5c4a1, inset 0 0 0 1px #d5c4a1 !important;
  --embed-border-start: 2px solid hsl(60, 71%, 35%) !important;
  --faded-aqua: #427b58 !important;
  --faded-blue: #076678 !important;
  --faded-green: #79740e !important;
  --faded-orange: #af3a03 !important;
  --faded-purple: #8f3f71 !important;
  --faded-red: #9d0006 !important;
  --faded-yellow: #b57614 !important;
  --file-header-background: #fbf1c7 !important;
  --file-header-background-focused: #fbf1c7 !important;
  --flair-background: #f2e5bc !important;
  --flair-color: #3c3836 !important;
  --footnote-divider-color: #d5c4a1 !important;
  --footnote-id-color: #3c3836 !important;
  --footnote-id-color-no-occurrences: #bdae93 !important;
  --footnote-input-background-active: #bdae93 !important;
  --graph-line: #bdae93 !important;
  --graph-node: hsl(60, 71%, 35%) !important;
  --graph-node-attachment: #98971a !important;
  --graph-node-focused: #b8bb26 !important;
  --graph-node-tag: #d79921 !important;
  --graph-node-unresolved: #d5c4a1 !important;
  --graph-text: #3c3836 !important;
  --gray: #928374 !important;
  --h1-color: #b16286 !important;
  --h2-color: #458588 !important;
  --h3-color: #98971a !important;
  --h4-color: #d79921 !important;
  --h5-color: #d65d0e !important;
  --h6-color: #cc241d !important;
  --heading-formatting: #bdae93 !important;
  --highlight: hsl(60, 71%, 35%) !important;
  --hr-color: #d5c4a1 !important;
  --icon-color: #3c3836 !important;
  --icon-color-active: hsl(60, 71%, 35%) !important;
  --icon-color-focused: #3c3836 !important;
  --icon-color-hover: #3c3836 !important;
  --indentation-guide-color: #d5c4a1 !important;
  --indentation-guide-color-active: #bdae93 !important;
  --inline-title-color: #3c3836 !important;
  --input-date-separator: #bdae93 !important;
  --input-placeholder-color: #bdae93 !important;
  --interactive-accent: hsl(60, 71%, 35%) !important;
  --interactive-accent-hover: hsl(57, 72.42%, 40.25%) !important;
  --interactive-accent-hsl: 60, 71%, 35% !important;
  --interactive-hover: #d5c4a1 !important;
  --interactive-normal: #f2e5bc !important;
  --italic-color: #d79921 !important;
  --light: #fbf1c7 !important;
  --light-aqua: #e8e5b5 !important;
  --light-aqua-hard: #e6e9c1 !important;
  --light-aqua-soft: #e1dbac !important;
  --light-green: #d5d39b !important;
  --light-green-hard: #d3d6a5 !important;
  --light-green-soft: #cecb94 !important;
  --light-red: #fc9487 !important;
  --light-red-hard: #fc9690 !important;
  --light-red-soft: #f78b7f !important;
  --light0: #fbf1c7 !important;
  --light0-hard: #f9f5d7 !important;
  --light0-soft: #f2e5bc !important;
  --light1: #ebdbb2 !important;
  --light2: #d5c4a1 !important;
  --light3: #bdae93 !important;
  --light4: #a89984 !important;
  --lightgray: #f2e5bc !important;
  --link-color: #98971a !important;
  --link-color-hover: #b8bb26 !important;
  --link-external-color: #98971a !important;
  --link-external-color-hover: #b8bb26 !important;
  --link-unresolved-decoration-color: hsla(60, 71%, 35%, 0.3) !important;
  --list-marker-color: #98971a !important;
  --list-marker-color-collapsed: hsl(60, 71%, 35%) !important;
  --list-marker-color-hover: #3c3836 !important;
  --menu-background: #f2e5bc !important;
  --menu-border-color: #bdae93 !important;
  --metadata-border-color: #d5c4a1 !important;
  --metadata-divider-color: #d5c4a1 !important;
  --metadata-input-background-active: #bdae93 !important;
  --metadata-input-text-color: #3c3836 !important;
  --metadata-label-background-active: #bdae93 !important;
  --metadata-label-text-color: #3c3836 !important;
  --metadata-label-text-color-hover: #3c3836 !important;
  --metadata-property-background-active: #bdae93 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #bdae93 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bdae93 !important;
  --modal-background: #f2e5bc !important;
  --modal-border-color: #d5c4a1 !important;
  --nav-collapse-icon-color: #bdae93 !important;
  --nav-collapse-icon-color-collapsed: #bdae93 !important;
  --nav-heading-color: #3c3836 !important;
  --nav-heading-color-collapsed: #bdae93 !important;
  --nav-heading-color-collapsed-hover: #3c3836 !important;
  --nav-heading-color-hover: #3c3836 !important;
  --nav-indentation-guide-color: #bdae93 !important;
  --nav-item-background-active: #98971a !important;
  --nav-item-background-hover: #bdae93 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #3c3836 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #d79921 !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #bdae93 !important;
  --nav-tag-color-active: #3c3836 !important;
  --nav-tag-color-hover: #3c3836 !important;
  --neutral-aqua: #689d6a !important;
  --neutral-blue: #458588 !important;
  --neutral-green: #98971a !important;
  --neutral-orange: #d65d0e !important;
  --neutral-purple: #b16286 !important;
  --neutral-red: #cc241d !important;
  --neutral-yellow: #d79921 !important;
  --pdf-background: #fbf1c7 !important;
  --pdf-page-background: #fbf1c7 !important;
  --pdf-sidebar-background: #fbf1c7 !important;
  --pill-border-color: #d5c4a1 !important;
  --pill-border-color-hover: #bdae93 !important;
  --pill-color: #3c3836 !important;
  --pill-color-hover: #3c3836 !important;
  --pill-color-remove: #bdae93 !important;
  --pill-color-remove-hover: hsl(60, 71%, 35%) !important;
  --prompt-background: #fbf1c7 !important;
  --prompt-border-color: #d5c4a1 !important;
  --raised-background: color-mix(in srgb, #fbf1c7 65%, transparent) linear-gradient(#fbf1c7, color-mix(in srgb, #fbf1c7 65%, transparent)) !important;
  --ribbon-background: #f2e5bc !important;
  --ribbon-background-collapsed: #fbf1c7 !important;
  --search-clear-button-color: #3c3836 !important;
  --search-icon-color: #3c3836 !important;
  --search-result-background: #fbf1c7 !important;
  --secondary: hsl(60, 71%, 35%) !important;
  --selection-background-color: #bdae93 !important;
  --selection-border-color: #b8bb26 !important;
  --setting-group-heading-color: #3c3836 !important;
  --setting-items-border-color: #d5c4a1 !important;
  --slider-track-background: #f2e5bc !important;
  --status-bar-background: #f2e5bc !important;
  --status-bar-border-color: #d5c4a1 !important;
  --status-bar-text-color: #3c3836 !important;
  --suggestion-background: #fbf1c7 !important;
  --sync-avatar-color-1: #cc241d !important;
  --sync-avatar-color-2: #d65d0e !important;
  --sync-avatar-color-3: #d79921 !important;
  --sync-avatar-color-4: #98971a !important;
  --sync-avatar-color-5: #689d6a !important;
  --sync-avatar-color-6: #458588 !important;
  --sync-avatar-color-7: #b16286 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #fbf1c7 !important;
  --tab-container-background: #f2e5bc !important;
  --tab-divider-color: #bdae93 !important;
  --tab-outline-color: #d5c4a1 !important;
  --tab-switcher-background: #f2e5bc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2e5bc, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(60, 71%, 35%) !important;
  --tab-text-color: #d5c4a1 !important;
  --tab-text-color-active: #3c3836 !important;
  --tab-text-color-focused: #3c3836 !important;
  --tab-text-color-focused-active: #3c3836 !important;
  --tab-text-color-focused-active-current: #3c3836 !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #d5c4a1 !important;
  --table-border-color: #d5c4a1 !important;
  --table-drag-handle-background-active: #b8bb26 !important;
  --table-drag-handle-color: #bdae93 !important;
  --table-drag-handle-color-active: #bdae93 !important;
  --table-header-border-color: #d5c4a1 !important;
  --table-header-color: #3c3836 !important;
  --table-selection: #bdae93 !important;
  --table-selection-border-color: #b8bb26 !important;
  --tag-background: #d5c4a1 !important;
  --tag-background-hover: #bdae93 !important;
  --tag-border-color: hsla(60, 71%, 35%, 0.15) !important;
  --tag-border-color-hover: hsla(60, 71%, 35%, 0.15) !important;
  --tag-color: #98971a !important;
  --tag-color-hover: #98971a !important;
  --tertiary: red !important;
  --text-accent: hsl(60, 71%, 35%) !important;
  --text-accent-hover: red !important;
  --text-color: #3c3836 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #d5c4a1 !important;
  --text-color-muted-light: #bdae93 !important;
  --text-error: #cc241d !important;
  --text-faint: #bdae93 !important;
  --text-highlight-bg: hsl(60, 71%, 35%) !important;
  --text-muted: #3c3836 !important;
  --text-normal: #3c3836 !important;
  --text-on-accent-inverted: #fbf1c7 !important;
  --text-selection: #bdae93 !important;
  --text-success: #98971a !important;
  --text-warning: #d79921 !important;
  --textHighlight: hsl(60, 71%, 35%) !important;
  --titlebar-background: #f2e5bc !important;
  --titlebar-background-focused: #d5c4a1 !important;
  --titlebar-border-color: #d5c4a1 !important;
  --titlebar-text-color: #3c3836 !important;
  --titlebar-text-color-focused: #3c3836 !important;
  --vault-profile-color: #3c3836 !important;
  --vault-profile-color-hover: #3c3836 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 229, 188);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(251, 241, 199);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(251, 241, 199);
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(213, 196, 161);
  color: rgb(152, 151, 26);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 229, 188);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 229, 188);
  border-left-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(251, 241, 199);
  color: rgb(60, 56, 54);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(215, 153, 33);
  outline: rgb(215, 153, 33) none 0px;
  text-decoration-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(153, 153, 26);
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body del {
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(152, 151, 26);
  border-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body p {
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(152, 151, 26);
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 151, 26);
  outline: rgb(152, 151, 26) none 0px;
  text-decoration-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration: underline rgba(153, 153, 26, 0.3);
  text-decoration-color: rgba(153, 153, 26, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body dt {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ol > li {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul > li {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(189, 174, 147);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body table {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(215, 153, 33);
  border-left-color: rgb(215, 153, 33);
  border-right-color: rgb(215, 153, 33);
  border-top-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body figcaption {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(177, 98, 134);
  border-left-color: rgb(177, 98, 134);
  border-right-color: rgb(177, 98, 134);
  border-top-color: rgb(177, 98, 134);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(153, 153, 26);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(60, 56, 54);
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(214, 93, 14);
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
  background-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(104, 157, 106);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(69, 133, 136);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(215, 153, 33);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(177, 98, 134);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(204, 36, 29);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(152, 151, 26);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(251, 241, 199);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(60, 56, 54);
  outline: rgb(60, 56, 54) none 0px;
  text-decoration-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(189, 174, 147);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(189, 174, 147);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(189, 174, 147);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(213, 196, 161);
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(152, 151, 26);
}

html[saved-theme="light"] body h1 {
  color: rgb(177, 98, 134);
}

html[saved-theme="light"] body h2 {
  color: rgb(69, 133, 136);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body h3 {
  color: rgb(152, 151, 26);
}

html[saved-theme="light"] body h4 {
  color: rgb(215, 153, 33);
}

html[saved-theme="light"] body h5 {
  color: rgb(214, 93, 14);
}

html[saved-theme="light"] body h6 {
  color: rgb(204, 36, 29);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(251, 241, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(251, 241, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(251, 241, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 241, 199);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 241, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 241, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 241, 199);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(251, 241, 199) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 241, 199);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(189, 174, 147);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(60, 56, 54);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(60, 56, 54);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(60, 56, 54);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(60, 56, 54);
  stroke: rgb(60, 56, 54);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 229, 188);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body abbr {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 229, 188);
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(60, 56, 54);
  border-left-color: rgb(60, 56, 54);
  border-right-color: rgb(60, 56, 54);
  border-top-color: rgb(60, 56, 54);
}

html[saved-theme="light"] body sub {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body summary {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body sup {
  color: rgb(60, 56, 54);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(213, 196, 161);
  border-bottom-color: rgba(153, 153, 26, 0.15);
  border-left-color: rgba(153, 153, 26, 0.15);
  border-right-color: rgba(153, 153, 26, 0.15);
  border-top-color: rgba(153, 153, 26, 0.15);
  color: rgb(152, 151, 26);
}`,
  },
};
