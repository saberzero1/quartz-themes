import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: rgb(129, 161, 193) !important;
  --accent-color-dark: #81a1c1 !important;
  --accent-color-hover: #88c0d0 !important;
  --accent-color-light: #8fbcbb !important;
  --accent-h: 210 !important;
  --accent-l: 63% !important;
  --accent-s: 34% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #434c5e !important;
  --background-modifier-border-focus: #4c566a !important;
  --background-modifier-border-hover: #4c566a !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-form-field: #3b4252 !important;
  --background-modifier-form-field-hover: #3b4252 !important;
  --background-modifier-hover: #4c566a !important;
  --background-modifier-success: #a3be8c !important;
  --background-primary: #2e3440 !important;
  --background-secondary: #3b4252 !important;
  --bases-cards-background: #2e3440 !important;
  --bases-cards-shadow: 0 0 0 1px #434c5e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #4c566a !important;
  --bases-embed-border-color: #434c5e !important;
  --bases-group-heading-property-color: #d8dee9 !important;
  --bases-table-border-color: #434c5e !important;
  --bases-table-cell-background-active: #2e3440 !important;
  --bases-table-cell-background-selected: #4c566a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4c566a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(129, 161, 193) !important;
  --bases-table-header-background: #2e3440 !important;
  --bases-table-header-background-hover: #4c566a !important;
  --bases-table-header-color: #d8dee9 !important;
  --bases-table-summary-background: #2e3440 !important;
  --bases-table-summary-background-hover: #4c566a !important;
  --black: #2e3440 !important;
  --blockquote-border-color: #81a1c1 !important;
  --blur-background: color-mix(in srgb, #3b4252 65%, transparent) linear-gradient(#3b4252, color-mix(in srgb, #3b4252 65%, transparent)) !important;
  --bold-color: #8fbcbb !important;
  --border-color: #434c5e !important;
  --border-color-primary: #434c5e !important;
  --border-color-secondary: #4c566a !important;
  --canvas-background: #2e3440 !important;
  --canvas-card-label-color: #616e88 !important;
  --canvas-color: 129, 161, 193 !important;
  --caret-color: #d8dee9 !important;
  --checkbox-border-color: #616e88 !important;
  --checkbox-border-color-hover: #88c0d0 !important;
  --checkbox-color: #81a1c1 !important;
  --checkbox-color-hover: #88c0d0 !important;
  --checkbox-marker-color: #2e3440 !important;
  --checklist-done-color: #616e88 !important;
  --code-background: #3b4252 !important;
  --code-boolean: #81a1c1 !important;
  --code-border-color: #434c5e !important;
  --code-bracket-background: #4c566a !important;
  --code-builtin: #88c0d0 !important;
  --code-comment: #616e88 !important;
  --code-definition: #88c0d0 !important;
  --code-function: #ebcb8b !important;
  --code-important: #ebcb8b !important;
  --code-keyword: #81a1c1 !important;
  --code-normal: #d8dee9 !important;
  --code-operator: #81a1c1 !important;
  --code-parentheses: #8fbcbb !important;
  --code-property: #88c0d0 !important;
  --code-punctuation: #d8dee9 !important;
  --code-string: #a3be8c !important;
  --code-tag: #bf616a !important;
  --code-value: #b48ead !important;
  --code-variable: #d8dee9 !important;
  --collapse-icon-color: #616e88 !important;
  --collapse-icon-color-collapsed: rgb(129, 161, 193) !important;
  --color-accent: rgb(129, 161, 193) !important;
  --color-accent-1: rgb(159, 186, 209) !important;
  --color-accent-2: rgb(189, 209, 224) !important;
  --color-accent-hsl: 210, 34%, 63% !important;
  --color-blue: #5e81ac !important;
  --color-cyan: #88c0d0 !important;
  --color-green: #a3be8c !important;
  --color-orange: #d08770 !important;
  --color-pink: pink !important;
  --color-purple: #b48ead !important;
  --color-red: #bf616a !important;
  --color-yellow: #ebcb8b !important;
  --dark: #d8dee9 !important;
  --dark-gray: #3b4252 !important;
  --darker-white: #e5e9f0 !important;
  --darkest-white: #d8dee9 !important;
  --darkgray: #d8dee9 !important;
  --divider-color: #434c5e !important;
  --divider-color-hover: rgb(129, 161, 193) !important;
  --dropdown-background: #3b4252 !important;
  --dropdown-background-hover: #434c5e !important;
  --embed-block-shadow-hover: 0 0 0 1px #434c5e, inset 0 0 0 1px #434c5e !important;
  --embed-border-start: 2px solid rgb(129, 161, 193) !important;
  --file-header-background: #2e3440 !important;
  --file-header-background-focused: #2e3440 !important;
  --flair-background: #3b4252 !important;
  --flair-color: #d8dee9 !important;
  --footnote-divider-color: #434c5e !important;
  --footnote-id-color: #d8dee9 !important;
  --footnote-id-color-no-occurrences: #616e88 !important;
  --footnote-input-background-active: #4c566a !important;
  --glacier: #81a1c1 !important;
  --graph-line: #4c566a !important;
  --graph-node: rgb(129, 161, 193) !important;
  --graph-node-attachment: #81a1c1 !important;
  --graph-node-focused: #88c0d0 !important;
  --graph-node-tag: #8fbcbb !important;
  --graph-node-unresolved: #434c5e !important;
  --graph-text: #d8dee9 !important;
  --gray: #434c5e !important;
  --h1-color: #b48ead !important;
  --h2-color: #5e81ac !important;
  --h3-color: #a3be8c !important;
  --h4-color: #ebcb8b !important;
  --h5-color: #d08770 !important;
  --h6-color: #bf616a !important;
  --heading-formatting: #616e88 !important;
  --highlight: rgb(129, 161, 193) !important;
  --hr-color: #3b4252 !important;
  --icon-color: #d8dee9 !important;
  --icon-color-active: rgb(129, 161, 193) !important;
  --icon-color-focused: #d8dee9 !important;
  --icon-color-hover: #d8dee9 !important;
  --indentation-guide-color: #3b4252 !important;
  --indentation-guide-color-active: #616e88 !important;
  --inline-title-color: #d8dee9 !important;
  --input-date-separator: #616e88 !important;
  --input-placeholder-color: #616e88 !important;
  --interactive-accent: rgb(129, 161, 193) !important;
  --interactive-accent-hover: rgb(159, 186, 209) !important;
  --interactive-accent-hsl: 210, 34%, 63% !important;
  --interactive-hover: #434c5e !important;
  --interactive-normal: #3b4252 !important;
  --italic-color: #8fbcbb !important;
  --light: #2e3440 !important;
  --light-gray: #4c566a !important;
  --light-gray-bright: #616e88 !important;
  --lightgray: #3b4252 !important;
  --link-color: #81a1c1 !important;
  --link-color-hover: #88c0d0 !important;
  --link-external-color: #81a1c1 !important;
  --link-external-color-hover: #88c0d0 !important;
  --link-unresolved-decoration-color: rgba(129, 161, 193, 0.3) !important;
  --list-marker-color: #81a1c1 !important;
  --list-marker-color-collapsed: rgb(129, 161, 193) !important;
  --list-marker-color-hover: #d8dee9 !important;
  --menu-background: #3b4252 !important;
  --menu-border-color: #4c566a !important;
  --metadata-border-color: #434c5e !important;
  --metadata-divider-color: #434c5e !important;
  --metadata-input-background-active: #4c566a !important;
  --metadata-input-text-color: #d8dee9 !important;
  --metadata-label-background-active: #4c566a !important;
  --metadata-label-text-color: #d8dee9 !important;
  --metadata-label-text-color-hover: #d8dee9 !important;
  --metadata-property-background-active: #4c566a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4c566a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4c566a !important;
  --modal-background: #3b4252 !important;
  --modal-border-color: #434c5e !important;
  --nav-collapse-icon-color: #4c566a !important;
  --nav-collapse-icon-color-collapsed: #4c566a !important;
  --nav-heading-color: #d8dee9 !important;
  --nav-heading-color-collapsed: #616e88 !important;
  --nav-heading-color-collapsed-hover: #d8dee9 !important;
  --nav-heading-color-hover: #d8dee9 !important;
  --nav-indentation-guide-color: #4c566a !important;
  --nav-item-background-active: #81a1c1 !important;
  --nav-item-background-hover: #4c566a !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #d8dee9 !important;
  --nav-item-color-active: #eceff4 !important;
  --nav-item-color-highlighted: #8fbcbb !important;
  --nav-item-color-hover: #eceff4 !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #616e88 !important;
  --nav-tag-color-active: #d8dee9 !important;
  --nav-tag-color-hover: #d8dee9 !important;
  --off-blue: #88c0d0 !important;
  --pdf-background: #2e3440 !important;
  --pdf-page-background: #2e3440 !important;
  --pdf-shadow: 0 0 0 1px #434c5e !important;
  --pdf-sidebar-background: #2e3440 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #434c5e !important;
  --pill-border-color: #434c5e !important;
  --pill-border-color-hover: #4c566a !important;
  --pill-color: #d8dee9 !important;
  --pill-color-hover: #d8dee9 !important;
  --pill-color-remove: #616e88 !important;
  --pill-color-remove-hover: rgb(129, 161, 193) !important;
  --prompt-background: #2e3440 !important;
  --prompt-border-color: #434c5e !important;
  --raised-background: color-mix(in srgb, #3b4252 65%, transparent) linear-gradient(#3b4252, color-mix(in srgb, #3b4252 65%, transparent)) !important;
  --ribbon-background: #3b4252 !important;
  --ribbon-background-collapsed: #2e3440 !important;
  --search-clear-button-color: #d8dee9 !important;
  --search-icon-color: #d8dee9 !important;
  --search-result-background: #2e3440 !important;
  --secondary: rgb(129, 161, 193) !important;
  --selection-background-color: #4c566a !important;
  --selection-border-color: #88c0d0 !important;
  --setting-group-heading-color: #d8dee9 !important;
  --setting-items-border-color: #434c5e !important;
  --slider-thumb-border-color: #2e3440 !important;
  --slider-track-background: #3b4252 !important;
  --status-bar-background: #3b4252 !important;
  --status-bar-border-color: #434c5e !important;
  --status-bar-text-color: #d8dee9 !important;
  --suggestion-background: #2e3440 !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #ebcb8b !important;
  --sync-avatar-color-4: #a3be8c !important;
  --sync-avatar-color-5: #88c0d0 !important;
  --sync-avatar-color-6: #5e81ac !important;
  --sync-avatar-color-7: #b48ead !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #2e3440 !important;
  --tab-container-background: #3b4252 !important;
  --tab-divider-color: #4c566a !important;
  --tab-outline-color: #434c5e !important;
  --tab-switcher-background: #3b4252 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4252, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(129, 161, 193) !important;
  --tab-text-color: #434c5e !important;
  --tab-text-color-active: #d8dee9 !important;
  --tab-text-color-focused: #d8dee9 !important;
  --tab-text-color-focused-active: #d8dee9 !important;
  --tab-text-color-focused-active-current: #eceff4 !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #434c5e !important;
  --table-border-color: #434c5e !important;
  --table-drag-handle-background-active: #88c0d0 !important;
  --table-drag-handle-color: #4c566a !important;
  --table-drag-handle-color-active: #4c566a !important;
  --table-header-border-color: #434c5e !important;
  --table-header-color: #d8dee9 !important;
  --table-selection: #4c566a !important;
  --table-selection-border-color: #88c0d0 !important;
  --tag-background: #3b4252 !important;
  --tag-background-hover: #616e88 !important;
  --tag-border-color: rgba(129, 161, 193, 0.15) !important;
  --tag-border-color-hover: rgba(129, 161, 193, 0.15) !important;
  --tag-color: #81a1c1 !important;
  --tag-color-hover: #81a1c1 !important;
  --teal: #8fbcbb !important;
  --tertiary: red !important;
  --text-accent: rgb(129, 161, 193) !important;
  --text-accent-hover: red !important;
  --text-color: #d8dee9 !important;
  --text-color-accent: #eceff4 !important;
  --text-color-muted-dark: #3b4252 !important;
  --text-color-muted-light: #616e88 !important;
  --text-error: #bf616a !important;
  --text-faint: #616e88 !important;
  --text-highlight-bg: rgb(129, 161, 193) !important;
  --text-muted: #d8dee9 !important;
  --text-normal: #d8dee9 !important;
  --text-on-accent: #eceff4 !important;
  --text-on-accent-inverted: #2e3440 !important;
  --text-selection: #4c566a !important;
  --text-success: #a3be8c !important;
  --text-warning: #ebcb8b !important;
  --textHighlight: rgb(129, 161, 193) !important;
  --titlebar-background: #3b4252 !important;
  --titlebar-background-focused: #434c5e !important;
  --titlebar-border-color: #434c5e !important;
  --titlebar-text-color: #d8dee9 !important;
  --titlebar-text-color-focused: #d8dee9 !important;
  --toggle-thumb-color: #eceff4 !important;
  --vault-profile-color: #d8dee9 !important;
  --vault-profile-color-hover: #d8dee9 !important;
  --white: #eceff4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(216, 222, 233);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(216, 222, 233);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 82);
  color: rgb(216, 222, 233);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(216, 222, 233);
}`,
    typography: `body .page article p > b, b {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > em, em {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > i, i {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > strong, strong {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .text-highlight {
  background-color: rgb(129, 161, 193);
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body del {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: line-through rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body p {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}`,
    links: `body a.external, footer a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal.broken {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: underline rgba(129, 161, 193, 0.3);
  text-decoration-color: rgba(129, 161, 193, 0.3);
}`,
    lists: `body dd {
  color: rgb(216, 222, 233);
}

body dt {
  color: rgb(216, 222, 233);
}

body ol > li {
  color: rgb(216, 222, 233);
}

body ol.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body ul > li {
  color: rgb(216, 222, 233);
}

body ul.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(97, 110, 136);
  text-decoration: rgb(97, 110, 136);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body table {
  color: rgb(216, 222, 233);
}

body td {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body th {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}`,
    code: `body code {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}`,
    images: `body audio {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body figcaption {
  color: rgb(216, 222, 233);
}

body figure {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body img {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body video {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .footnotes {
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .transclude {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .transclude-inner {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(97, 110, 136);
  text-decoration: line-through rgb(97, 110, 136);
  text-decoration-color: rgb(97, 110, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(97, 110, 136);
  border-left-color: rgb(97, 110, 136);
  border-right-color: rgb(97, 110, 136);
  border-top-color: rgb(97, 110, 136);
}

body li.task-list-item[data-task='!'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='*'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='-'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='/'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='>'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='?'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='I'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='S'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='b'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='c'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='d'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='f'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='i'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='k'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='l'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='p'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='u'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='w'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}`,
    search: `body .search > .search-button {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body .search > .search-container > .search-space > * {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(76, 86, 106);
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(76, 86, 106);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(76, 86, 106);
  color: rgb(216, 222, 233);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

body h1 {
  color: rgb(180, 142, 173);
}

body h2 {
  color: rgb(94, 129, 172);
}

body h2.page-title, h2.page-title a {
  color: rgb(216, 222, 233);
}

body h3 {
  color: rgb(163, 190, 140);
}

body h4 {
  color: rgb(235, 203, 139);
}

body h5 {
  color: rgb(208, 135, 112);
}

body h6 {
  color: rgb(191, 97, 106);
}

body hr {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(129, 161, 193);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}`,
    footer: `body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body footer ul li a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(216, 222, 233);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 222, 233);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body li.section-li > .section .meta {
  color: rgb(216, 222, 233);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body ul.section-ul {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .darkmode svg {
  color: rgb(216, 222, 233);
  stroke: rgb(216, 222, 233);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .breadcrumb-element p {
  color: rgb(97, 110, 136);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body .metadata-properties {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .navigation-progress {
  background-color: rgb(59, 66, 82);
}

body .page-header h2.page-title {
  color: rgb(216, 222, 233);
}

body abbr {
  color: rgb(216, 222, 233);
  text-decoration: underline dotted rgb(216, 222, 233);
}

body details {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body input[type=text] {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body kbd {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body progress {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body sub {
  color: rgb(216, 222, 233);
}

body summary {
  color: rgb(216, 222, 233);
}

body sup {
  color: rgb(216, 222, 233);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(215, 131, 126) !important;
  --accent-color-dark: #286983 !important;
  --accent-color-hover: #907aa9 !important;
  --accent-color-light: #d7827e !important;
  --accent-h: 3 !important;
  --accent-l: 67% !important;
  --accent-s: 53% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #dfdad9 !important;
  --background-modifier-border-focus: #cecacd !important;
  --background-modifier-border-hover: #cecacd !important;
  --background-modifier-error: #b4637a !important;
  --background-modifier-error-hover: #b4637a !important;
  --background-modifier-form-field: #fffaf3 !important;
  --background-modifier-form-field-hover: #fffaf3 !important;
  --background-modifier-hover: #f2e9e1 !important;
  --background-modifier-success: #56949f !important;
  --background-primary: #faf4ed !important;
  --background-secondary: #fffaf3 !important;
  --base: #faf4ed !important;
  --bases-cards-background: #faf4ed !important;
  --bases-cards-shadow: 0 0 0 1px #dfdad9 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #cecacd !important;
  --bases-embed-border-color: #dfdad9 !important;
  --bases-group-heading-property-color: #575279 !important;
  --bases-table-border-color: #dfdad9 !important;
  --bases-table-cell-background-active: #faf4ed !important;
  --bases-table-cell-background-selected: #f2e9e1 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #cecacd !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(215, 131, 126) !important;
  --bases-table-header-background: #faf4ed !important;
  --bases-table-header-background-hover: #f2e9e1 !important;
  --bases-table-header-color: #575279 !important;
  --bases-table-summary-background: #faf4ed !important;
  --bases-table-summary-background-hover: #f2e9e1 !important;
  --blockquote-border-color: #286983 !important;
  --blur-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)) !important;
  --bold-color: #d7827e !important;
  --border-color: #dfdad9 !important;
  --border-color-primary: #dfdad9 !important;
  --border-color-secondary: #cecacd !important;
  --canvas-background: #faf4ed !important;
  --canvas-card-label-color: #9893a5 !important;
  --canvas-color: 215, 130, 126 !important;
  --caret-color: #575279 !important;
  --checkbox-border-color: #9893a5 !important;
  --checkbox-border-color-hover: #907aa9 !important;
  --checkbox-color: #286983 !important;
  --checkbox-color-hover: #907aa9 !important;
  --checkbox-marker-color: #faf4ed !important;
  --checklist-done-color: #9893a5 !important;
  --code-background: #fffaf3 !important;
  --code-boolean: #d7827e !important;
  --code-border-color: #dfdad9 !important;
  --code-bracket-background: #f2e9e1 !important;
  --code-builtin: #b4637a !important;
  --code-comment: #9893a5 !important;
  --code-definition: #d7827e !important;
  --code-function: #ea9d34 !important;
  --code-important: #ea9d34 !important;
  --code-keyword: #286983 !important;
  --code-normal: #575279 !important;
  --code-operator: #286983 !important;
  --code-parentheses: #797593 !important;
  --code-property: #56949f !important;
  --code-punctuation: #575279 !important;
  --code-string: #ea9d34 !important;
  --code-tag: #b4637a !important;
  --code-value: #d7827e !important;
  --code-variable: #575279 !important;
  --collapse-icon-color: #9893a5 !important;
  --collapse-icon-color-collapsed: rgb(215, 131, 126) !important;
  --color-accent: rgb(215, 131, 126) !important;
  --color-accent-1: rgb(222, 148, 145) !important;
  --color-accent-2: rgb(228, 165, 165) !important;
  --color-accent-hsl: 3, 53%, 67% !important;
  --color-blue: #286983 !important;
  --color-cyan: #56949f !important;
  --color-green: #56949f !important;
  --color-orange: #d7827e !important;
  --color-pink: pink !important;
  --color-purple: #907aa9 !important;
  --color-red: #b4637a !important;
  --color-yellow: #ea9d34 !important;
  --dark: #575279 !important;
  --darkgray: #575279 !important;
  --divider-color: #dfdad9 !important;
  --divider-color-hover: rgb(215, 131, 126) !important;
  --dropdown-background: #fffaf3 !important;
  --dropdown-background-hover: #dfdad9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dfdad9, inset 0 0 0 1px #dfdad9 !important;
  --embed-border-start: 2px solid rgb(215, 131, 126) !important;
  --file-header-background: #faf4ed !important;
  --file-header-background-focused: #faf4ed !important;
  --flair-background: #fffaf3 !important;
  --flair-color: #575279 !important;
  --foam: #56949f !important;
  --footnote-divider-color: #dfdad9 !important;
  --footnote-id-color: #575279 !important;
  --footnote-id-color-no-occurrences: #9893a5 !important;
  --footnote-input-background-active: #f2e9e1 !important;
  --gold: #ea9d34 !important;
  --graph-line: #cecacd !important;
  --graph-node: rgb(215, 131, 126) !important;
  --graph-node-attachment: #286983 !important;
  --graph-node-focused: #907aa9 !important;
  --graph-node-tag: #d7827e !important;
  --graph-node-unresolved: #dfdad9 !important;
  --graph-text: #575279 !important;
  --gray: #575279 !important;
  --h1-color: #907aa9 !important;
  --h2-color: #286983 !important;
  --h3-color: #56949f !important;
  --h4-color: #ea9d34 !important;
  --h5-color: #d7827e !important;
  --h6-color: #b4637a !important;
  --heading-formatting: #9893a5 !important;
  --highlight: rgb(215, 131, 126) !important;
  --highlight-high: #cecacd !important;
  --highlight-low: #f4ede8 !important;
  --highlight-med: #dfdad9 !important;
  --hr-color: #f2e9e1 !important;
  --icon-color: #575279 !important;
  --icon-color-active: rgb(215, 131, 126) !important;
  --icon-color-focused: #575279 !important;
  --icon-color-hover: #575279 !important;
  --indentation-guide-color: #f2e9e1 !important;
  --indentation-guide-color-active: #9893a5 !important;
  --inline-title-color: #575279 !important;
  --input-date-separator: #9893a5 !important;
  --input-placeholder-color: #9893a5 !important;
  --interactive-accent: rgb(215, 131, 126) !important;
  --interactive-accent-hover: rgb(228, 165, 165) !important;
  --interactive-accent-hsl: 3, 53%, 67% !important;
  --interactive-hover: #dfdad9 !important;
  --interactive-normal: #fffaf3 !important;
  --iris: #907aa9 !important;
  --italic-color: #d7827e !important;
  --light: #faf4ed !important;
  --lightgray: #fffaf3 !important;
  --link-color: #286983 !important;
  --link-color-hover: #907aa9 !important;
  --link-external-color: #286983 !important;
  --link-external-color-hover: #907aa9 !important;
  --link-unresolved-decoration-color: rgba(215, 131, 126, 0.3) !important;
  --list-marker-color: #286983 !important;
  --list-marker-color-collapsed: rgb(215, 131, 126) !important;
  --list-marker-color-hover: #575279 !important;
  --love: #b4637a !important;
  --menu-background: #fffaf3 !important;
  --menu-border-color: #cecacd !important;
  --metadata-border-color: #dfdad9 !important;
  --metadata-divider-color: #dfdad9 !important;
  --metadata-input-background-active: #f2e9e1 !important;
  --metadata-input-text-color: #575279 !important;
  --metadata-label-background-active: #f2e9e1 !important;
  --metadata-label-text-color: #575279 !important;
  --metadata-label-text-color-hover: #575279 !important;
  --metadata-property-background-active: #f2e9e1 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #cecacd !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cecacd !important;
  --modal-background: #fffaf3 !important;
  --modal-border-color: #dfdad9 !important;
  --muted: #9893a5 !important;
  --nav-collapse-icon-color: #cecacd !important;
  --nav-collapse-icon-color-collapsed: #cecacd !important;
  --nav-heading-color: #575279 !important;
  --nav-heading-color-collapsed: #9893a5 !important;
  --nav-heading-color-collapsed-hover: #575279 !important;
  --nav-heading-color-hover: #575279 !important;
  --nav-indentation-guide-color: #cecacd !important;
  --nav-item-background-active: #286983 !important;
  --nav-item-background-hover: #f2e9e1 !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #575279 !important;
  --nav-item-color-active: #575279 !important;
  --nav-item-color-highlighted: #d7827e !important;
  --nav-item-color-hover: #575279 !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #9893a5 !important;
  --nav-tag-color-active: #575279 !important;
  --nav-tag-color-hover: #575279 !important;
  --nc: #f8f0e7 !important;
  --overlay: #f2e9e1 !important;
  --pdf-background: #faf4ed !important;
  --pdf-page-background: #faf4ed !important;
  --pdf-sidebar-background: #faf4ed !important;
  --pill-border-color: #dfdad9 !important;
  --pill-border-color-hover: #cecacd !important;
  --pill-color: #575279 !important;
  --pill-color-hover: #575279 !important;
  --pill-color-remove: #9893a5 !important;
  --pill-color-remove-hover: rgb(215, 131, 126) !important;
  --pine: #286983 !important;
  --prompt-background: #faf4ed !important;
  --prompt-border-color: #dfdad9 !important;
  --raised-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)) !important;
  --ribbon-background: #fffaf3 !important;
  --ribbon-background-collapsed: #faf4ed !important;
  --rose: #d7827e !important;
  --search-clear-button-color: #575279 !important;
  --search-icon-color: #575279 !important;
  --search-result-background: #faf4ed !important;
  --secondary: rgb(215, 131, 126) !important;
  --selection-background-color: #f2e9e1 !important;
  --selection-border-color: #907aa9 !important;
  --setting-group-heading-color: #575279 !important;
  --setting-items-border-color: #dfdad9 !important;
  --slider-track-background: #fffaf3 !important;
  --status-bar-background: #fffaf3 !important;
  --status-bar-border-color: #dfdad9 !important;
  --status-bar-text-color: #575279 !important;
  --subtle: #797593 !important;
  --suggestion-background: #faf4ed !important;
  --surface: #fffaf3 !important;
  --sync-avatar-color-1: #b4637a !important;
  --sync-avatar-color-2: #d7827e !important;
  --sync-avatar-color-3: #ea9d34 !important;
  --sync-avatar-color-4: #56949f !important;
  --sync-avatar-color-5: #56949f !important;
  --sync-avatar-color-6: #286983 !important;
  --sync-avatar-color-7: #907aa9 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #faf4ed !important;
  --tab-container-background: #fffaf3 !important;
  --tab-divider-color: #f2e9e1 !important;
  --tab-outline-color: #dfdad9 !important;
  --tab-switcher-background: #fffaf3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffaf3, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(215, 131, 126) !important;
  --tab-text-color: #dfdad9 !important;
  --tab-text-color-active: #575279 !important;
  --tab-text-color-focused: #575279 !important;
  --tab-text-color-focused-active: #575279 !important;
  --tab-text-color-focused-active-current: #575279 !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #dfdad9 !important;
  --table-border-color: #dfdad9 !important;
  --table-drag-handle-background-active: #907aa9 !important;
  --table-drag-handle-color: #f2e9e1 !important;
  --table-drag-handle-color-active: #f2e9e1 !important;
  --table-header-border-color: #dfdad9 !important;
  --table-header-color: #575279 !important;
  --table-selection: #f2e9e1 !important;
  --table-selection-border-color: #907aa9 !important;
  --tag-background: #f2e9e1 !important;
  --tag-background-hover: #9893a5 !important;
  --tag-border-color: rgba(215, 131, 126, 0.15) !important;
  --tag-border-color-hover: rgba(215, 131, 126, 0.15) !important;
  --tag-color: #286983 !important;
  --tag-color-hover: #286983 !important;
  --tertiary: red !important;
  --text: #575279 !important;
  --text-accent: rgb(215, 131, 126) !important;
  --text-accent-hover: red !important;
  --text-color: #575279 !important;
  --text-color-accent: #575279 !important;
  --text-color-muted-dark: #f2e9e1 !important;
  --text-color-muted-light: #9893a5 !important;
  --text-error: #b4637a !important;
  --text-faint: #9893a5 !important;
  --text-highlight-bg: rgb(215, 131, 126) !important;
  --text-muted: #575279 !important;
  --text-normal: #575279 !important;
  --text-on-accent: #575279 !important;
  --text-on-accent-inverted: #faf4ed !important;
  --text-selection: #f2e9e1 !important;
  --text-success: #56949f !important;
  --text-warning: #ea9d34 !important;
  --textHighlight: rgb(215, 131, 126) !important;
  --titlebar-background: #fffaf3 !important;
  --titlebar-background-focused: #dfdad9 !important;
  --titlebar-border-color: #dfdad9 !important;
  --titlebar-text-color: #575279 !important;
  --titlebar-text-color-focused: #575279 !important;
  --toggle-thumb-color: #575279 !important;
  --vault-profile-color: #575279 !important;
  --vault-profile-color-hover: #575279 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 250, 243);
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `body .page article p > b, b {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .page article p > em, em {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .page article p > i, i {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .page article p > strong, strong {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .text-highlight {
  background-color: rgb(215, 131, 126);
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: line-through rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body p {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    links: `body a.external, footer a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration: underline rgb(40, 105, 131);
  text-decoration-color: rgb(40, 105, 131);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration: underline rgb(40, 105, 131);
  text-decoration-color: rgb(40, 105, 131);
}

body a.internal.broken {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: underline rgba(215, 131, 126, 0.3);
  text-decoration-color: rgba(215, 131, 126, 0.3);
}`,
    lists: `body dd {
  color: rgb(87, 82, 121);
}

body dt {
  color: rgb(87, 82, 121);
}

body ol > li {
  color: rgb(87, 82, 121);
}

body ol.overflow {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ul > li {
  color: rgb(87, 82, 121);
}

body ul.overflow {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body table {
  color: rgb(87, 82, 121);
}

body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body th {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}`,
    code: `body code {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body pre > code > [data-line] {
  border-left-color: rgb(234, 157, 52);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 157, 52);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 157, 52);
  border-left-color: rgb(234, 157, 52);
  border-right-color: rgb(234, 157, 52);
  border-top-color: rgb(234, 157, 52);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}`,
    images: `body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body figcaption {
  color: rgb(87, 82, 121);
}

body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body img {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(40, 105, 131);
}

body h1 {
  color: rgb(144, 122, 169);
}

body h2 {
  color: rgb(40, 105, 131);
}

body h2.page-title, h2.page-title a {
  color: rgb(87, 82, 121);
}

body h3 {
  color: rgb(86, 148, 159);
}

body h4 {
  color: rgb(234, 157, 52);
}

body h5 {
  color: rgb(215, 130, 126);
}

body h6 {
  color: rgb(180, 99, 122);
}

body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(40, 105, 131);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    footer: `body footer {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body footer ul li a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .breadcrumb-element p {
  color: rgb(152, 147, 165);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body .metadata-properties {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .navigation-progress {
  background-color: rgb(255, 250, 243);
}

body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

body abbr {
  color: rgb(87, 82, 121);
  text-decoration: underline dotted rgb(87, 82, 121);
}

body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body input[type=text] {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body kbd {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body sub {
  color: rgb(87, 82, 121);
}

body summary {
  color: rgb(87, 82, 121);
}

body sup {
  color: rgb(87, 82, 121);
}`,
  },
};
