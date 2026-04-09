import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nichneumor",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background: light-dark(#dbd1c6, #1a1b20) !important;
  --background-excalidraw: light-dark(#dbd1c6, #EFF0F6) !important;
  --background-modifier-border: #41424f !important;
  --background-modifier-border-focus: #505262 !important;
  --background-modifier-border-hover: #494a58 !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-error-rgb: 233, 49, 71 !important;
  --background-modifier-form-field: #393b46 !important;
  --background-modifier-form-field-hover: #393b46 !important;
  --background-modifier-success: #a3be8c !important;
  --background-modifier-success-rgb: 8, 185, 78 !important;
  --background-primary: #1a1b20 !important;
  --background-primary-alt: #2a2b33 !important;
  --background-secondary: #31333c !important;
  --background-secondary-alt: #41424f !important;
  --background-top: light-dark(#2a2b33, #222329) !important;
  --bases-cards-background: #1a1b20 !important;
  --bases-cards-cover-background: #2a2b33 !important;
  --bases-cards-shadow: 0 0 0 1px #41424f !important;
  --bases-cards-shadow-hover: 0 0 0 1px #494a58 !important;
  --bases-embed-border-color: #41424f !important;
  --bases-group-heading-property-color: #b1b3c2 !important;
  --bases-table-border-color: #41424f !important;
  --bases-table-cell-background-active: #1a1b20 !important;
  --bases-table-cell-background-disabled: #2a2b33 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #505262 !important;
  --bases-table-group-background: #2a2b33 !important;
  --bases-table-header-background: #1a1b20 !important;
  --bases-table-header-color: #b1b3c2 !important;
  --bases-table-summary-background: #1a1b20 !important;
  --blur-background: color-mix(in srgb, #41424f 65%, transparent) linear-gradient(#41424f, color-mix(in srgb, #41424f 65%, transparent)) !important;
  --border-radius: 10px !important;
  --border-radius-twice: 10px 10px 0px 0px !important;
  --box-shadow: 4px 4px 8px light-dark(#bab2a8, #0a0b0d), -4px -4px 8px light-dark(#fcf0e4, #2a2b33) !important;
  --box-shadow-click: -4px -4px 8px light-dark(#bab2a8, #0a0b0d), 4px 4px 8px light-dark(#fcf0e4, #2a2b33) !important;
  --box-shadow-click-excaldraw: -4px -4px 8px light-dark(#bab2a8, #FFFFFF), 4px 4px 8px light-dark(#fcf0e4, #D8DAE3) !important;
  --box-shadow-excalidraw: 4px 4px 8px light-dark(#bab2a8, #FFFFFF), -4px -4px 8px light-dark(#fcf0e4, #D8DAE3) !important;
  --button-box-shadow: 2px 2px 4px light-dark(#bab2a8, #0a0b0d), -2px -2px 4px light-dark(#fcf0e4, #2a2b33) !important;
  --button-box-shadow-click: -2px -2px 4px light-dark(#bab2a8, #0a0b0d), 2px 2px 4px light-dark(#fcf0e4, #2a2b33) !important;
  --button-box-shadow-click-excalidraw: -2px -2px 4px light-dark(#bab2a8, #FFFFFF), 2px 2px 4px light-dark(#fcf0e4, #D8DAE3) !important;
  --button-box-shadow-excalidraw: 2px 2px 4px light-dark(#bab2a8, #FFFFFF), -2px -2px 4px light-dark(#fcf0e4, #D8DAE3) !important;
  --callout-bug: 233, 49, 71;
  --callout-default: 8, 109, 221;
  --callout-error: 233, 49, 71;
  --callout-example: 120, 82, 238;
  --callout-fail: 233, 49, 71;
  --callout-important: 0, 191, 188;
  --callout-info: 8, 109, 221;
  --callout-question: 236, 117, 0;
  --callout-success: 8, 185, 78;
  --callout-summary: 0, 191, 188;
  --callout-tip: 0, 191, 188;
  --callout-todo: 8, 109, 221;
  --callout-warning: 236, 117, 0;
  --canvas-background: #1a1b20 !important;
  --canvas-card-label-color: #585a6b !important;
  --canvas-color-1: 233, 49, 71 !important;
  --canvas-color-2: 236, 117, 0 !important;
  --canvas-color-3: 224, 172, 0 !important;
  --canvas-color-4: 8, 185, 78 !important;
  --canvas-color-5: 0, 191, 188 !important;
  --canvas-color-6: 120, 82, 238 !important;
  --canvas-dot-pattern: #41424f !important;
  --caret-color: #dddfee !important;
  --checkbox-border-color: #585a6b !important;
  --checkbox-border-color-hover: #b1b3c2 !important;
  --checkbox-marker-color: #1a1b20 !important;
  --checklist-done-color: #b1b3c2 !important;
  --code-background: #2a2b33 !important;
  --code-border-color: #41424f !important;
  --code-comment: #585a6b !important;
  --code-function: #ebcb8b !important;
  --code-important: #d08770 !important;
  --code-keyword: #c3afb8 !important;
  --code-normal: #dddfee !important;
  --code-operator: #bf616a !important;
  --code-property: #8fbcbb !important;
  --code-punctuation: #b1b3c2 !important;
  --code-string: #a3be8c !important;
  --code-tag: #bf616a !important;
  --code-value: #b48ead !important;
  --collapse-icon-color: #585a6b !important;
  --color-base-00: #1a1b20 !important;
  --color-base-05: #222329 !important;
  --color-base-10: #2a2b33 !important;
  --color-base-100: #dddfee !important;
  --color-base-20: #31333c !important;
  --color-base-25: #393b46 !important;
  --color-base-30: #41424f !important;
  --color-base-35: #494a58 !important;
  --color-base-40: #505262 !important;
  --color-base-50: #585a6b !important;
  --color-base-60: #848697 !important;
  --color-base-70: #b1b3c2 !important;
  --color-blue: #81a1c1 !important;
  --color-blue-rgb: 8, 109, 221 !important;
  --color-cyan: #8fbcbb !important;
  --color-cyan-rgb: 0, 191, 188 !important;
  --color-green: #a3be8c !important;
  --color-green-rgb: 8, 185, 78 !important;
  --color-orange: #d08770 !important;
  --color-orange-rgb: 236, 117, 0 !important;
  --color-pink: #c3afb8 !important;
  --color-pink-rgb: 213, 57, 132 !important;
  --color-purple: #b48ead !important;
  --color-purple-rgb: 120, 82, 238 !important;
  --color-red: #bf616a !important;
  --color-red-rgb: 233, 49, 71 !important;
  --color-yellow: #ebcb8b !important;
  --color-yellow-rgb: 224, 172, 0 !important;
  --dark: #dddfee !important;
  --dark-background: #1a1b20 !important;
  --dark-background-flip: #EFF0F6 !important;
  --dark-shadow-first: #0a0b0d !important;
  --dark-shadow-first-flip: #FFFFFF !important;
  --dark-shadow-fourth: #6b6c7b !important;
  --dark-shadow-fourth-flip: #C0C1CC !important;
  --dark-shadow-second: #2a2b33 !important;
  --dark-shadow-second-flip: #D8DAE3 !important;
  --dark-shadow-third: #000000 !important;
  --dark-shadow-third-flip: #F4F9F4 !important;
  --dark-titlebar-background: #2a2b33 !important;
  --dark-titlebar-background-focused: #0a0b0d !important;
  --darkgray: #dddfee !important;
  --divider-color: #41424f !important;
  --dropdown-background: #41424f !important;
  --dropdown-background-hover: #494a58 !important;
  --embed-block-shadow-hover: 0 0 0 1px #41424f, inset 0 0 0 1px #41424f !important;
  --file-header-background: #1a1b20 !important;
  --file-header-background-focused: #1a1b20 !important;
  --flair-background: #41424f !important;
  --flair-color: #dddfee !important;
  --floating-background: light-dark(#dbd1c6, #1a1b20) !important;
  --footnote-divider-color: #41424f !important;
  --footnote-id-color: #b1b3c2 !important;
  --footnote-id-color-no-occurrences: #585a6b !important;
  --gap: 1.5rem !important;
  --graph-line: #494a58 !important;
  --graph-node: #b1b3c2 !important;
  --graph-node-attachment: #ebcb8b !important;
  --graph-node-tag: #a3be8c !important;
  --graph-node-unresolved: #585a6b !important;
  --graph-text: #dddfee !important;
  --gray: #b1b3c2 !important;
  --h1-size: 2em !important;
  --h2-size: 1.7em !important;
  --h3-size: 1.5em !important;
  --h4-size: 1.3em !important;
  --h5-size: 1.2em !important;
  --h6-size: 1.1em !important;
  --header-padding: 5px !important;
  --heading-formatting: #585a6b !important;
  --hr-color: #41424f !important;
  --icon-color: #b1b3c2 !important;
  --icon-color-focused: #dddfee !important;
  --icon-color-hover: #b1b3c2 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #585a6b !important;
  --input-placeholder-color: #585a6b !important;
  --interactive-hover: #494a58 !important;
  --interactive-normal: #41424f !important;
  --light: #1a1b20 !important;
  --light-background: #dbd1c6 !important;
  --light-shadow-fifth: #FCFCFC !important;
  --light-shadow-first: #bab2a8 !important;
  --light-shadow-fourth: #ccc3b8 !important;
  --light-shadow-second: #fcf0e4 !important;
  --light-shadow-third: #ede2d6 !important;
  --light-titlebar-background: #fcf0e4 !important;
  --light-titlebar-background-focused: #bab2a8 !important;
  --lightgray: #31333c !important;
  --list-marker-color: #585a6b !important;
  --list-marker-color-hover: #b1b3c2 !important;
  --menu-background: #31333c !important;
  --menu-border-color: #494a58 !important;
  --metadata-border-color: #41424f !important;
  --metadata-divider-color: #41424f !important;
  --metadata-input-text-color: #dddfee !important;
  --metadata-label-text-color: #b1b3c2 !important;
  --metadata-label-text-color-hover: #b1b3c2 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #505262 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #494a58 !important;
  --modal-background: #1a1b20 !important;
  --modal-border-color: #505262 !important;
  --nav-collapse-icon-color: #585a6b !important;
  --nav-collapse-icon-color-collapsed: #585a6b !important;
  --nav-heading-color: #dddfee !important;
  --nav-heading-color-collapsed: #585a6b !important;
  --nav-heading-color-collapsed-hover: #b1b3c2 !important;
  --nav-heading-color-hover: #dddfee !important;
  --nav-item-color: #b1b3c2 !important;
  --nav-item-color-active: #dddfee !important;
  --nav-item-color-hover: #dddfee !important;
  --nav-item-color-selected: #dddfee !important;
  --nav-tag-color: #585a6b !important;
  --nav-tag-color-active: #b1b3c2 !important;
  --nav-tag-color-hover: #b1b3c2 !important;
  --pdf-background: #1a1b20 !important;
  --pdf-page-background: #1a1b20 !important;
  --pdf-shadow: 0 0 0 1px #41424f !important;
  --pdf-sidebar-background: #1a1b20 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #41424f !important;
  --pill-border-color: #41424f !important;
  --pill-border-color-hover: #494a58 !important;
  --pill-color: #b1b3c2 !important;
  --pill-color-hover: #dddfee !important;
  --pill-color-remove: #585a6b !important;
  --printing-text-shadow: 1px 1px 2px light-dark(#bab2a8, #000000), -1px -1px 4px light-dark(#FCFCFC, #6b6c7b) !important;
  --prompt-background: #1a1b20 !important;
  --prompt-border-color: #505262 !important;
  --raised-background: color-mix(in srgb, #41424f 65%, transparent) linear-gradient(#41424f, color-mix(in srgb, #41424f 65%, transparent)) !important;
  --ribbon-background: #31333c !important;
  --ribbon-background-collapsed: #1a1b20 !important;
  --scroll-button-offset: 25px !important;
  --search-clear-button-color: #b1b3c2 !important;
  --search-icon-color: #b1b3c2 !important;
  --search-result-background: #1a1b20 !important;
  --setting-group-heading-color: #dddfee !important;
  --setting-items-background: #2a2b33 !important;
  --setting-items-border-color: #41424f !important;
  --shell-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#fcf0e4, #6b6c7b) !important;
  --slider-thumb-border-color: #494a58 !important;
  --slider-track-background: #41424f !important;
  --status-bar-background: #31333c !important;
  --status-bar-border-color: #41424f !important;
  --status-bar-text-color: #b1b3c2 !important;
  --suggestion-background: #1a1b20 !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #ebcb8b !important;
  --sync-avatar-color-4: #a3be8c !important;
  --sync-avatar-color-5: #8fbcbb !important;
  --sync-avatar-color-6: #81a1c1 !important;
  --sync-avatar-color-7: #b48ead !important;
  --sync-avatar-color-8: #c3afb8 !important;
  --tab-background-active: #1a1b20 !important;
  --tab-container-background: #31333c !important;
  --tab-divider-color: #494a58 !important;
  --tab-outline-color: #41424f !important;
  --tab-switcher-background: #31333c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #31333c, transparent) !important;
  --tab-text-color: #585a6b !important;
  --tab-text-color-active: #b1b3c2 !important;
  --tab-text-color-focused: #b1b3c2 !important;
  --tab-text-color-focused-active: #b1b3c2 !important;
  --tab-text-color-focused-active-current: #dddfee !important;
  --table-add-button-border-color: #41424f !important;
  --table-border-color: #41424f !important;
  --table-drag-handle-color: #585a6b !important;
  --table-header-border-color: #41424f !important;
  --table-header-color: #dddfee !important;
  --text-error: #bf616a !important;
  --text-faint: #585a6b !important;
  --text-muted: #b1b3c2 !important;
  --text-normal: #dddfee !important;
  --text-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#FCFCFC, #6b6c7b) !important;
  --text-success: #a3be8c !important;
  --text-warning: #d08770 !important;
  --titlebar-background: #31333c !important;
  --titlebar-background-focused: #41424f !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #b1b3c2 !important;
  --titlebar-text-color-focused: #dddfee !important;
  --vault-profile-color: #dddfee !important;
  --vault-profile-color-hover: #dddfee !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(221, 223, 238);
  border-radius: 10px;
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(49, 51, 60);
  border-color: rgb(221, 223, 238);
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(65, 66, 79);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(65, 66, 79);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 32);
  border-left-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 27, 32);
  color: rgb(221, 223, 238);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(88, 90, 107);
}

html[saved-theme="dark"] body p {
  color: rgb(177, 179, 194);
  outline: rgb(177, 179, 194) none 0px;
  text-decoration-color: rgb(177, 179, 194);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(88, 90, 107);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body figcaption {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-radius: 10px;
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(221, 223, 238);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(221, 223, 238);
  border-radius: 10px;
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(88, 90, 107);
  border-left-color: rgb(88, 90, 107);
  border-right-color: rgb(88, 90, 107);
  border-top-color: rgb(88, 90, 107);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(221, 223, 238);
  text-decoration-color: rgb(221, 223, 238);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(8, 109, 221);
  border-left-color: rgb(8, 109, 221);
  border-right-color: rgb(8, 109, 221);
  border-top-color: rgb(8, 109, 221);
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(8, 109, 221);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(120, 82, 238, 0.1);
  border-bottom-color: rgba(120, 82, 238, 0.25);
  border-left-color: rgba(120, 82, 238, 0.25);
  border-right-color: rgba(120, 82, 238, 0.25);
  border-top-color: rgba(120, 82, 238, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.25);
  border-left-color: rgba(233, 49, 71, 0.25);
  border-right-color: rgba(233, 49, 71, 0.25);
  border-top-color: rgba(233, 49, 71, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-left-color: rgba(236, 117, 0, 0.25);
  border-right-color: rgba(236, 117, 0, 0.25);
  border-top-color: rgba(236, 117, 0, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.25);
  border-left-color: rgba(8, 185, 78, 0.25);
  border-right-color: rgba(8, 185, 78, 0.25);
  border-top-color: rgba(8, 185, 78, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 188, 0.1);
  border-bottom-color: rgba(0, 191, 188, 0.25);
  border-left-color: rgba(0, 191, 188, 0.25);
  border-right-color: rgba(0, 191, 188, 0.25);
  border-top-color: rgba(0, 191, 188, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(8, 109, 221, 0.1);
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(236, 117, 0, 0.1);
  border-bottom-color: rgba(236, 117, 0, 0.25);
  border-left-color: rgba(236, 117, 0, 0.25);
  border-right-color: rgba(236, 117, 0, 0.25);
  border-top-color: rgba(236, 117, 0, 0.25);
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
  background-color: rgb(57, 59, 70);
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(80, 82, 98);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(80, 82, 98);
  border-right-color: rgb(80, 82, 98);
  border-top-color: rgb(80, 82, 98);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgb(10, 11, 13) 4px 4px 8px 0px, rgb(42, 43, 51) -4px -4px 8px 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(221, 223, 238);
  outline: rgb(221, 223, 238) none 0px;
  text-decoration-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 82, 98);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(80, 82, 98);
  border-right-color: rgb(80, 82, 98);
  border-top-color: rgb(80, 82, 98);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 51, 60);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body h1 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body h3 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(221, 223, 238);
  text-shadow: rgb(0, 0, 0) -2px -2px 4px, rgb(107, 108, 123) 2px 2px 4px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(8, 109, 221, 0.25);
  border-left-color: rgba(8, 109, 221, 0.25);
  border-right-color: rgba(8, 109, 221, 0.25);
  border-top-color: rgba(8, 109, 221, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 32) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 32);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(177, 179, 194);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(221, 223, 238);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(26, 27, 32);
  border-bottom-color: rgb(65, 66, 79);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-right-width: 1px;
  border-top-color: rgb(65, 66, 79);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(177, 179, 194);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(177, 179, 194);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(177, 179, 194);
  stroke: rgb(177, 179, 194);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(88, 90, 107);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(65, 66, 79);
  border-left-color: rgb(65, 66, 79);
  border-right-color: rgb(65, 66, 79);
  border-top-color: rgb(65, 66, 79);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(26, 27, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body abbr {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(177, 179, 194);
  border-left-color: rgb(177, 179, 194);
  border-right-color: rgb(177, 179, 194);
  border-top-color: rgb(177, 179, 194);
  color: rgb(177, 179, 194);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(42, 43, 51);
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(221, 223, 238);
  border-left-color: rgb(221, 223, 238);
  border-right-color: rgb(221, 223, 238);
  border-top-color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(221, 223, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(221, 223, 238);
}`,
  },
  light: {
    base: `:root:root {
  --background: light-dark(#dbd1c6, #1a1b20) !important;
  --background-excalidraw: light-dark(#dbd1c6, #EFF0F6) !important;
  --background-modifier-border: #c1b8ae !important;
  --background-modifier-border-focus: #b6aea5 !important;
  --background-modifier-border-hover: #bcb3aa !important;
  --background-modifier-error: #bf616a !important;
  --background-modifier-error-hover: #bf616a !important;
  --background-modifier-form-field: #dbd1c6 !important;
  --background-modifier-form-field-hover: #dbd1c6 !important;
  --background-modifier-success: #8aa176 !important;
  --background-primary: #dbd1c6 !important;
  --background-primary-alt: #d1c7bd !important;
  --background-secondary: #cbc2b8 !important;
  --background-secondary-alt: #d6ccc1 !important;
  --background-top: light-dark(#d1c7bd, #d6ccc1) !important;
  --bases-cards-background: #dbd1c6 !important;
  --bases-cards-cover-background: #d1c7bd !important;
  --bases-cards-shadow: 0 0 0 1px #c1b8ae !important;
  --bases-cards-shadow-hover: 0 0 0 1px #bcb3aa !important;
  --bases-embed-border-color: #c1b8ae !important;
  --bases-group-heading-property-color: #54504d !important;
  --bases-table-border-color: #c1b8ae !important;
  --bases-table-cell-background-active: #dbd1c6 !important;
  --bases-table-cell-background-disabled: #d1c7bd !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #b6aea5 !important;
  --bases-table-group-background: #d1c7bd !important;
  --bases-table-header-background: #dbd1c6 !important;
  --bases-table-header-color: #54504d !important;
  --bases-table-summary-background: #dbd1c6 !important;
  --blur-background: color-mix(in srgb, #dbd1c6 65%, transparent) linear-gradient(#dbd1c6, color-mix(in srgb, #dbd1c6 65%, transparent)) !important;
  --border-radius: 10px !important;
  --border-radius-twice: 10px 10px 0px 0px !important;
  --box-shadow: 4px 4px 8px light-dark(#bab2a8, #0a0b0d), -4px -4px 8px light-dark(#fcf0e4, #2a2b33) !important;
  --box-shadow-click: -4px -4px 8px light-dark(#bab2a8, #0a0b0d), 4px 4px 8px light-dark(#fcf0e4, #2a2b33) !important;
  --box-shadow-click-excaldraw: -4px -4px 8px light-dark(#bab2a8, #FFFFFF), 4px 4px 8px light-dark(#fcf0e4, #D8DAE3) !important;
  --box-shadow-excalidraw: 4px 4px 8px light-dark(#bab2a8, #FFFFFF), -4px -4px 8px light-dark(#fcf0e4, #D8DAE3) !important;
  --button-box-shadow: 2px 2px 4px light-dark(#bab2a8, #0a0b0d), -2px -2px 4px light-dark(#fcf0e4, #2a2b33) !important;
  --button-box-shadow-click: -2px -2px 4px light-dark(#bab2a8, #0a0b0d), 2px 2px 4px light-dark(#fcf0e4, #2a2b33) !important;
  --button-box-shadow-click-excalidraw: -2px -2px 4px light-dark(#bab2a8, #FFFFFF), 2px 2px 4px light-dark(#fcf0e4, #D8DAE3) !important;
  --button-box-shadow-excalidraw: 2px 2px 4px light-dark(#bab2a8, #FFFFFF), -2px -2px 4px light-dark(#fcf0e4, #D8DAE3) !important;
  --canvas-background: #dbd1c6 !important;
  --canvas-card-label-color: #98928c !important;
  --canvas-dot-pattern: #c1b8ae !important;
  --caret-color: #252423 !important;
  --checkbox-border-color: #98928c !important;
  --checkbox-border-color-hover: #54504d !important;
  --checkbox-marker-color: #dbd1c6 !important;
  --checklist-done-color: #54504d !important;
  --code-background: #d1c7bd !important;
  --code-border-color: #c1b8ae !important;
  --code-comment: #98928c !important;
  --code-function: #c4963a !important;
  --code-important: #d08770 !important;
  --code-keyword: #b0748f !important;
  --code-normal: #252423 !important;
  --code-operator: #bf616a !important;
  --code-property: #70a9a8 !important;
  --code-punctuation: #54504d !important;
  --code-string: #8aa176 !important;
  --code-tag: #bf616a !important;
  --code-value: #b48ead !important;
  --collapse-icon-color: #98928c !important;
  --color-base-00: #dbd1c6 !important;
  --color-base-05: #d6ccc1 !important;
  --color-base-10: #d1c7bd !important;
  --color-base-100: #252423 !important;
  --color-base-20: #cbc2b8 !important;
  --color-base-25: #c6bdb3 !important;
  --color-base-30: #c1b8ae !important;
  --color-base-35: #bcb3aa !important;
  --color-base-40: #b6aea5 !important;
  --color-base-50: #98928c !important;
  --color-base-60: #64615b !important;
  --color-base-70: #54504d !important;
  --color-blue: #81a1c1 !important;
  --color-cyan: #70a9a8 !important;
  --color-green: #8aa176 !important;
  --color-orange: #d08770 !important;
  --color-pink: #b0748f !important;
  --color-purple: #b48ead !important;
  --color-red: #bf616a !important;
  --color-yellow: #c4963a !important;
  --dark: #252423 !important;
  --dark-background: #1a1b20 !important;
  --dark-background-flip: #EFF0F6 !important;
  --dark-shadow-first: #0a0b0d !important;
  --dark-shadow-first-flip: #FFFFFF !important;
  --dark-shadow-fourth: #6b6c7b !important;
  --dark-shadow-fourth-flip: #C0C1CC !important;
  --dark-shadow-second: #2a2b33 !important;
  --dark-shadow-second-flip: #D8DAE3 !important;
  --dark-shadow-third: #000000 !important;
  --dark-shadow-third-flip: #F4F9F4 !important;
  --dark-titlebar-background: #2a2b33 !important;
  --dark-titlebar-background-focused: #0a0b0d !important;
  --darkgray: #252423 !important;
  --divider-color: #c1b8ae !important;
  --dropdown-background: #dbd1c6 !important;
  --dropdown-background-hover: #d1c7bd !important;
  --embed-block-shadow-hover: 0 0 0 1px #c1b8ae, inset 0 0 0 1px #c1b8ae !important;
  --file-header-background: #dbd1c6 !important;
  --file-header-background-focused: #dbd1c6 !important;
  --flair-background: #dbd1c6 !important;
  --flair-color: #252423 !important;
  --floating-background: light-dark(#dbd1c6, #1a1b20) !important;
  --footnote-divider-color: #c1b8ae !important;
  --footnote-id-color: #54504d !important;
  --footnote-id-color-no-occurrences: #98928c !important;
  --gap: 1.5rem !important;
  --graph-line: #bcb3aa !important;
  --graph-node: #54504d !important;
  --graph-node-attachment: #c4963a !important;
  --graph-node-tag: #8aa176 !important;
  --graph-node-unresolved: #98928c !important;
  --graph-text: #252423 !important;
  --gray: #54504d !important;
  --h1-size: 2em !important;
  --h2-size: 1.7em !important;
  --h3-size: 1.5em !important;
  --h4-size: 1.3em !important;
  --h5-size: 1.2em !important;
  --h6-size: 1.1em !important;
  --header-padding: 5px !important;
  --heading-formatting: #98928c !important;
  --hr-color: #c1b8ae !important;
  --icon-color: #54504d !important;
  --icon-color-focused: #252423 !important;
  --icon-color-hover: #54504d !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #98928c !important;
  --input-placeholder-color: #98928c !important;
  --interactive-hover: #d1c7bd !important;
  --interactive-normal: #dbd1c6 !important;
  --light: #dbd1c6 !important;
  --light-background: #dbd1c6 !important;
  --light-shadow-fifth: #FCFCFC !important;
  --light-shadow-first: #bab2a8 !important;
  --light-shadow-fourth: #ccc3b8 !important;
  --light-shadow-second: #fcf0e4 !important;
  --light-shadow-third: #ede2d6 !important;
  --light-titlebar-background: #fcf0e4 !important;
  --light-titlebar-background-focused: #bab2a8 !important;
  --lightgray: #cbc2b8 !important;
  --list-marker-color: #98928c !important;
  --list-marker-color-hover: #54504d !important;
  --menu-background: #cbc2b8 !important;
  --menu-border-color: #bcb3aa !important;
  --metadata-border-color: #c1b8ae !important;
  --metadata-divider-color: #c1b8ae !important;
  --metadata-input-text-color: #252423 !important;
  --metadata-label-text-color: #54504d !important;
  --metadata-label-text-color-hover: #54504d !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #b6aea5 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #bcb3aa !important;
  --modal-background: #dbd1c6 !important;
  --modal-border-color: #b6aea5 !important;
  --nav-collapse-icon-color: #98928c !important;
  --nav-collapse-icon-color-collapsed: #98928c !important;
  --nav-heading-color: #252423 !important;
  --nav-heading-color-collapsed: #98928c !important;
  --nav-heading-color-collapsed-hover: #54504d !important;
  --nav-heading-color-hover: #252423 !important;
  --nav-item-color: #54504d !important;
  --nav-item-color-active: #252423 !important;
  --nav-item-color-hover: #252423 !important;
  --nav-item-color-selected: #252423 !important;
  --nav-tag-color: #98928c !important;
  --nav-tag-color-active: #54504d !important;
  --nav-tag-color-hover: #54504d !important;
  --pdf-background: #dbd1c6 !important;
  --pdf-page-background: #dbd1c6 !important;
  --pdf-sidebar-background: #dbd1c6 !important;
  --pill-border-color: #c1b8ae !important;
  --pill-border-color-hover: #bcb3aa !important;
  --pill-color: #54504d !important;
  --pill-color-hover: #252423 !important;
  --pill-color-remove: #98928c !important;
  --printing-text-shadow: 1px 1px 2px light-dark(#bab2a8, #000000), -1px -1px 4px light-dark(#FCFCFC, #6b6c7b) !important;
  --prompt-background: #dbd1c6 !important;
  --prompt-border-color: #b6aea5 !important;
  --raised-background: color-mix(in srgb, #dbd1c6 65%, transparent) linear-gradient(#dbd1c6, color-mix(in srgb, #dbd1c6 65%, transparent)) !important;
  --ribbon-background: #cbc2b8 !important;
  --ribbon-background-collapsed: #dbd1c6 !important;
  --scroll-button-offset: 25px !important;
  --search-clear-button-color: #54504d !important;
  --search-icon-color: #54504d !important;
  --search-result-background: #dbd1c6 !important;
  --setting-group-heading-color: #252423 !important;
  --setting-items-background: #d1c7bd !important;
  --setting-items-border-color: #c1b8ae !important;
  --shell-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#fcf0e4, #6b6c7b) !important;
  --slider-thumb-border-color: #bcb3aa !important;
  --slider-track-background: #c1b8ae !important;
  --status-bar-background: #cbc2b8 !important;
  --status-bar-border-color: #c1b8ae !important;
  --status-bar-text-color: #54504d !important;
  --suggestion-background: #dbd1c6 !important;
  --sync-avatar-color-1: #bf616a !important;
  --sync-avatar-color-2: #d08770 !important;
  --sync-avatar-color-3: #c4963a !important;
  --sync-avatar-color-4: #8aa176 !important;
  --sync-avatar-color-5: #70a9a8 !important;
  --sync-avatar-color-6: #81a1c1 !important;
  --sync-avatar-color-7: #b48ead !important;
  --sync-avatar-color-8: #b0748f !important;
  --tab-background-active: #dbd1c6 !important;
  --tab-container-background: #cbc2b8 !important;
  --tab-divider-color: #bcb3aa !important;
  --tab-outline-color: #c1b8ae !important;
  --tab-switcher-background: #cbc2b8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #cbc2b8, transparent) !important;
  --tab-text-color: #98928c !important;
  --tab-text-color-active: #54504d !important;
  --tab-text-color-focused: #54504d !important;
  --tab-text-color-focused-active: #54504d !important;
  --tab-text-color-focused-active-current: #252423 !important;
  --table-add-button-border-color: #c1b8ae !important;
  --table-border-color: #c1b8ae !important;
  --table-drag-handle-color: #98928c !important;
  --table-header-border-color: #c1b8ae !important;
  --table-header-color: #252423 !important;
  --text-error: #bf616a !important;
  --text-faint: #98928c !important;
  --text-muted: #54504d !important;
  --text-normal: #252423 !important;
  --text-shadow: -2px -2px 4px light-dark(#bab2a8, #000000), 2px 2px 4px light-dark(#FCFCFC, #6b6c7b) !important;
  --text-success: #8aa176 !important;
  --text-warning: #d08770 !important;
  --titlebar-background: #cbc2b8 !important;
  --titlebar-background-focused: #d6ccc1 !important;
  --titlebar-border-color: transparent !important;
  --titlebar-text-color: #54504d !important;
  --titlebar-text-color-focused: #252423 !important;
  --vault-profile-color: #252423 !important;
  --vault-profile-color-hover: #252423 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(37, 36, 35);
  border-radius: 10px;
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(219, 209, 198);
  border-color: rgb(37, 36, 35);
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(193, 184, 174);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(193, 184, 174);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(219, 209, 198);
  border-left-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(219, 209, 198);
  color: rgb(37, 36, 35);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body del {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 146, 140);
}

html[saved-theme="light"] body p {
  color: rgb(84, 80, 77);
  outline: rgb(84, 80, 77) none 0px;
  text-decoration-color: rgb(84, 80, 77);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ol > li {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 146, 140);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body table {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(196, 150, 58);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(196, 150, 58);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(196, 150, 58);
  border-left-color: rgb(196, 150, 58);
  border-right-color: rgb(196, 150, 58);
  border-top-color: rgb(196, 150, 58);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figcaption {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-radius: 10px;
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(37, 36, 35);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(37, 36, 35);
  border-radius: 10px;
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 146, 140);
  border-left-color: rgb(152, 146, 140);
  border-right-color: rgb(152, 146, 140);
  border-top-color: rgb(152, 146, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(37, 36, 35);
  text-decoration-color: rgb(37, 36, 35);
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
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(182, 174, 165);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(182, 174, 165);
  border-right-color: rgb(182, 174, 165);
  border-top-color: rgb(182, 174, 165);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgb(186, 178, 168) 4px 4px 8px 0px, rgb(252, 240, 228) -4px -4px 8px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(37, 36, 35);
  outline: rgb(37, 36, 35) none 0px;
  text-decoration-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(182, 174, 165);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(182, 174, 165);
  border-right-color: rgb(182, 174, 165);
  border-top-color: rgb(182, 174, 165);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(203, 194, 184);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body h1 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h2 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body h3 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h4 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h5 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body h6 {
  color: rgb(37, 36, 35);
  text-shadow: rgb(186, 178, 168) -2px -2px 4px, rgb(252, 252, 252) 2px 2px 4px;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(219, 209, 198) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(219, 209, 198);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(84, 80, 77);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(37, 36, 35);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(219, 209, 198);
  border-bottom-color: rgb(193, 184, 174);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-bottom-width: 1px;
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-right-width: 1px;
  border-top-color: rgb(193, 184, 174);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(84, 80, 77);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(84, 80, 77);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(84, 80, 77);
  stroke: rgb(84, 80, 77);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 146, 140);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(193, 184, 174);
  border-left-color: rgb(193, 184, 174);
  border-right-color: rgb(193, 184, 174);
  border-top-color: rgb(193, 184, 174);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(219, 209, 198);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body abbr {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(84, 80, 77);
  border-left-color: rgb(84, 80, 77);
  border-right-color: rgb(84, 80, 77);
  border-top-color: rgb(84, 80, 77);
  color: rgb(84, 80, 77);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(209, 199, 189);
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(37, 36, 35);
  border-left-color: rgb(37, 36, 35);
  border-right-color: rgb(37, 36, 35);
  border-top-color: rgb(37, 36, 35);
}

html[saved-theme="light"] body sub {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(37, 36, 35);
}

html[saved-theme="light"] body sup {
  color: rgb(37, 36, 35);
}`,
  },
};
