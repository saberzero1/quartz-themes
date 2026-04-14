import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes.rose-pine",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: hsl(197, 49%, 38%) !important;
  --accent-color-dark: #31748f !important;
  --accent-color-hover: #9ccfd8 !important;
  --accent-color-light: #ebbcba !important;
  --accent-h: 197 !important;
  --accent-l: 38% !important;
  --accent-s: 49% !important;
  --background-modifier-active-hover: red !important;
  --background-modifier-border: #403d52 !important;
  --background-modifier-border-focus: #524f67 !important;
  --background-modifier-border-hover: #524f67 !important;
  --background-modifier-error: #eb6f92 !important;
  --background-modifier-error-hover: #eb6f92 !important;
  --background-modifier-form-field: #1f1d2e !important;
  --background-modifier-form-field-hover: #1f1d2e !important;
  --background-modifier-hover: #26233a !important;
  --background-modifier-success: #9ccfd8 !important;
  --background-primary: #191724 !important;
  --background-secondary: #1f1d2e !important;
  --base: #191724 !important;
  --bases-cards-background: #191724 !important;
  --bases-cards-shadow: 0 0 0 1px #403d52 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #524f67 !important;
  --bases-embed-border-color: #403d52 !important;
  --bases-group-heading-property-color: #e0def4 !important;
  --bases-table-border-color: #403d52 !important;
  --bases-table-cell-background-active: #191724 !important;
  --bases-table-cell-background-selected: #26233a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #524f67 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(197, 49%, 38%) !important;
  --bases-table-header-background: #191724 !important;
  --bases-table-header-background-hover: #26233a !important;
  --bases-table-header-color: #e0def4 !important;
  --bases-table-summary-background: #191724 !important;
  --bases-table-summary-background-hover: #26233a !important;
  --blockquote-border-color: #31748f !important;
  --blur-background: color-mix(in srgb, #1f1d2e 65%, transparent) linear-gradient(#1f1d2e, color-mix(in srgb, #1f1d2e 65%, transparent)) !important;
  --bold-color: #ebbcba !important;
  --border-color: #403d52 !important;
  --border-color-primary: #403d52 !important;
  --border-color-secondary: #524f67 !important;
  --canvas-background: #191724 !important;
  --canvas-card-label-color: #6e6a86 !important;
  --canvas-color: 49, 116, 143 !important;
  --caret-color: #e0def4 !important;
  --checkbox-border-color: #6e6a86 !important;
  --checkbox-border-color-hover: #9ccfd8 !important;
  --checkbox-color: #31748f !important;
  --checkbox-color-hover: #9ccfd8 !important;
  --checkbox-marker-color: #191724 !important;
  --checklist-done-color: #6e6a86 !important;
  --code-background: #1f1d2e !important;
  --code-boolean: #ebbcba !important;
  --code-border-color: #403d52 !important;
  --code-bracket-background: #26233a !important;
  --code-builtin: #eb6f92 !important;
  --code-comment: #6e6a86 !important;
  --code-definition: #ebbcba !important;
  --code-function: #f6c177 !important;
  --code-important: #f6c177 !important;
  --code-keyword: #31748f !important;
  --code-normal: #e0def4 !important;
  --code-operator: #31748f !important;
  --code-parentheses: #908caa !important;
  --code-property: #9ccfd8 !important;
  --code-punctuation: #e0def4 !important;
  --code-string: #f6c177 !important;
  --code-tag: #eb6f92 !important;
  --code-value: #ebbcba !important;
  --code-variable: #e0def4 !important;
  --collapse-icon-color: #6e6a86 !important;
  --collapse-icon-color-collapsed: hsl(197, 49%, 38%) !important;
  --color-accent: hsl(197, 49%, 38%) !important;
  --color-accent-1: hsl(194, 49.98%, 43.7%) !important;
  --color-accent-2: hsl(192, 51.45%, 49.02%) !important;
  --color-accent-hsl: 197, 49%, 38% !important;
  --color-blue: #31748f !important;
  --color-cyan: #9ccfd8 !important;
  --color-green: #9ccfd8 !important;
  --color-orange: #ebbcba !important;
  --color-pink: pink !important;
  --color-purple: #c4a7e7 !important;
  --color-red: #eb6f92 !important;
  --color-yellow: #f6c177 !important;
  --dark: #e0def4 !important;
  --darkgray: #e0def4 !important;
  --divider-color: #403d52 !important;
  --divider-color-hover: hsl(197, 49%, 38%) !important;
  --dropdown-background: #1f1d2e !important;
  --dropdown-background-hover: #403d52 !important;
  --embed-block-shadow-hover: 0 0 0 1px #403d52, inset 0 0 0 1px #403d52 !important;
  --embed-border-start: 2px solid hsl(197, 49%, 38%) !important;
  --file-header-background: #191724 !important;
  --file-header-background-focused: #191724 !important;
  --flair-background: #1f1d2e !important;
  --flair-color: #e0def4 !important;
  --foam: #9ccfd8 !important;
  --footnote-divider-color: #403d52 !important;
  --footnote-id-color: #e0def4 !important;
  --footnote-id-color-no-occurrences: #6e6a86 !important;
  --footnote-input-background-active: #26233a !important;
  --gold: #f6c177 !important;
  --graph-line: #524f67 !important;
  --graph-node: hsl(197, 49%, 38%) !important;
  --graph-node-attachment: #31748f !important;
  --graph-node-focused: #9ccfd8 !important;
  --graph-node-tag: #ebbcba !important;
  --graph-node-unresolved: #403d52 !important;
  --graph-text: #e0def4 !important;
  --gray: #e0def4 !important;
  --h1-color: #c4a7e7 !important;
  --h2-color: #31748f !important;
  --h3-color: #9ccfd8 !important;
  --h4-color: #f6c177 !important;
  --h5-color: #ebbcba !important;
  --h6-color: #eb6f92 !important;
  --heading-formatting: #6e6a86 !important;
  --highlight: hsl(197, 49%, 38%) !important;
  --highlight-high: #524f67 !important;
  --highlight-low: #21202e !important;
  --highlight-med: #403d52 !important;
  --hr-color: #26233a !important;
  --icon-color: #e0def4 !important;
  --icon-color-active: hsl(197, 49%, 38%) !important;
  --icon-color-focused: #e0def4 !important;
  --icon-color-hover: #e0def4 !important;
  --indentation-guide-color: #26233a !important;
  --indentation-guide-color-active: #6e6a86 !important;
  --inline-title-color: #e0def4 !important;
  --input-date-separator: #6e6a86 !important;
  --input-placeholder-color: #6e6a86 !important;
  --interactive-accent: hsl(197, 49%, 38%) !important;
  --interactive-accent-hover: hsl(194, 49.98%, 43.7%) !important;
  --interactive-accent-hsl: 197, 49%, 38% !important;
  --interactive-hover: #403d52 !important;
  --interactive-normal: #1f1d2e !important;
  --iris: #c4a7e7 !important;
  --italic-color: #ebbcba !important;
  --light: #191724 !important;
  --lightgray: #1f1d2e !important;
  --link-color: #31748f !important;
  --link-color-hover: #9ccfd8 !important;
  --link-external-color: #31748f !important;
  --link-external-color-hover: #9ccfd8 !important;
  --link-unresolved-decoration-color: hsla(197, 49%, 38%, 0.3) !important;
  --list-marker-color: #31748f !important;
  --list-marker-color-collapsed: hsl(197, 49%, 38%) !important;
  --list-marker-color-hover: #e0def4 !important;
  --love: #eb6f92 !important;
  --menu-background: #1f1d2e !important;
  --menu-border-color: #524f67 !important;
  --metadata-border-color: #403d52 !important;
  --metadata-divider-color: #403d52 !important;
  --metadata-input-background-active: #26233a !important;
  --metadata-input-text-color: #e0def4 !important;
  --metadata-label-background-active: #26233a !important;
  --metadata-label-text-color: #e0def4 !important;
  --metadata-label-text-color-hover: #e0def4 !important;
  --metadata-property-background-active: #26233a !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #524f67 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #524f67 !important;
  --modal-background: #1f1d2e !important;
  --modal-border-color: #403d52 !important;
  --muted: #6e6a86 !important;
  --nav-collapse-icon-color: #524f67 !important;
  --nav-collapse-icon-color-collapsed: #524f67 !important;
  --nav-heading-color: #e0def4 !important;
  --nav-heading-color-collapsed: #6e6a86 !important;
  --nav-heading-color-collapsed-hover: #e0def4 !important;
  --nav-heading-color-hover: #e0def4 !important;
  --nav-indentation-guide-color: #524f67 !important;
  --nav-item-background-active: #31748f !important;
  --nav-item-background-hover: #26233a !important;
  --nav-item-background-selected: red !important;
  --nav-item-color: #e0def4 !important;
  --nav-item-color-active: white !important;
  --nav-item-color-highlighted: #ebbcba !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: red !important;
  --nav-tag-color: #6e6a86 !important;
  --nav-tag-color-active: #e0def4 !important;
  --nav-tag-color-hover: #e0def4 !important;
  --nc: #16141f !important;
  --overlay: #26233a !important;
  --pdf-background: #191724 !important;
  --pdf-page-background: #191724 !important;
  --pdf-shadow: 0 0 0 1px #403d52 !important;
  --pdf-sidebar-background: #191724 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #403d52 !important;
  --pill-border-color: #403d52 !important;
  --pill-border-color-hover: #524f67 !important;
  --pill-color: #e0def4 !important;
  --pill-color-hover: #e0def4 !important;
  --pill-color-remove: #6e6a86 !important;
  --pill-color-remove-hover: hsl(197, 49%, 38%) !important;
  --pine: #31748f !important;
  --prompt-background: #191724 !important;
  --prompt-border-color: #403d52 !important;
  --raised-background: color-mix(in srgb, #1f1d2e 65%, transparent) linear-gradient(#1f1d2e, color-mix(in srgb, #1f1d2e 65%, transparent)) !important;
  --ribbon-background: #1f1d2e !important;
  --ribbon-background-collapsed: #191724 !important;
  --rose: #ebbcba !important;
  --search-clear-button-color: #e0def4 !important;
  --search-icon-color: #e0def4 !important;
  --search-result-background: #191724 !important;
  --secondary: hsl(197, 49%, 38%) !important;
  --selection-background-color: #26233a !important;
  --selection-border-color: #9ccfd8 !important;
  --setting-group-heading-color: #e0def4 !important;
  --setting-items-border-color: #403d52 !important;
  --slider-track-background: #1f1d2e !important;
  --status-bar-background: #1f1d2e !important;
  --status-bar-border-color: #403d52 !important;
  --status-bar-text-color: #e0def4 !important;
  --subtle: #908caa !important;
  --suggestion-background: #191724 !important;
  --surface: #1f1d2e !important;
  --sync-avatar-color-1: #eb6f92 !important;
  --sync-avatar-color-2: #ebbcba !important;
  --sync-avatar-color-3: #f6c177 !important;
  --sync-avatar-color-4: #9ccfd8 !important;
  --sync-avatar-color-5: #9ccfd8 !important;
  --sync-avatar-color-6: #31748f !important;
  --sync-avatar-color-7: #c4a7e7 !important;
  --sync-avatar-color-8: pink !important;
  --tab-background-active: #191724 !important;
  --tab-container-background: #1f1d2e !important;
  --tab-divider-color: #26233a !important;
  --tab-outline-color: #403d52 !important;
  --tab-switcher-background: #1f1d2e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1f1d2e, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(197, 49%, 38%) !important;
  --tab-text-color: #403d52 !important;
  --tab-text-color-active: #e0def4 !important;
  --tab-text-color-focused: #e0def4 !important;
  --tab-text-color-focused-active: #e0def4 !important;
  --tab-text-color-focused-active-current: white !important;
  --tab-text-color-focused-highlighted: red !important;
  --table-add-button-border-color: #403d52 !important;
  --table-border-color: #403d52 !important;
  --table-drag-handle-background-active: #9ccfd8 !important;
  --table-drag-handle-color: #26233a !important;
  --table-drag-handle-color-active: #26233a !important;
  --table-header-border-color: #403d52 !important;
  --table-header-color: #e0def4 !important;
  --table-selection: #26233a !important;
  --table-selection-border-color: #9ccfd8 !important;
  --tag-background: #26233a !important;
  --tag-background-hover: #6e6a86 !important;
  --tag-border-color: hsla(197, 49%, 38%, 0.15) !important;
  --tag-border-color-hover: hsla(197, 49%, 38%, 0.15) !important;
  --tag-color: #31748f !important;
  --tag-color-hover: #31748f !important;
  --tertiary: red !important;
  --text: #e0def4 !important;
  --text-accent: hsl(197, 49%, 38%) !important;
  --text-accent-hover: red !important;
  --text-color: #e0def4 !important;
  --text-color-accent: white !important;
  --text-color-muted-dark: #26233a !important;
  --text-color-muted-light: #6e6a86 !important;
  --text-error: #eb6f92 !important;
  --text-faint: #6e6a86 !important;
  --text-highlight-bg: hsl(197, 49%, 38%) !important;
  --text-muted: #e0def4 !important;
  --text-normal: #e0def4 !important;
  --text-on-accent-inverted: #191724 !important;
  --text-selection: #26233a !important;
  --text-success: #9ccfd8 !important;
  --text-warning: #f6c177 !important;
  --textHighlight: hsl(197, 49%, 38%) !important;
  --titlebar-background: #1f1d2e !important;
  --titlebar-background-focused: #403d52 !important;
  --titlebar-border-color: #403d52 !important;
  --titlebar-text-color: #e0def4 !important;
  --titlebar-text-color-focused: #e0def4 !important;
  --vault-profile-color: #e0def4 !important;
  --vault-profile-color-hover: #e0def4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(31, 29, 46);
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(38, 35, 58);
  color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 29, 46);
  border-left-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(235, 188, 186);
  outline: rgb(235, 188, 186) none 0px;
  text-decoration-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(235, 188, 186);
  outline: rgb(235, 188, 186) none 0px;
  text-decoration-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(235, 188, 186);
  outline: rgb(235, 188, 186) none 0px;
  text-decoration-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(235, 188, 186);
  outline: rgb(235, 188, 186) none 0px;
  text-decoration-color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(49, 117, 144);
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(49, 116, 143);
  border-color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body p {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(49, 116, 143);
  outline: rgb(49, 116, 143) none 0px;
  text-decoration-color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(49, 116, 143);
  outline: rgb(49, 116, 143) none 0px;
  text-decoration-color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: underline rgba(49, 117, 144, 0.3);
  text-decoration-color: rgba(49, 117, 144, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(110, 106, 134);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(246, 193, 119);
  border-left-color: rgb(246, 193, 119);
  border-right-color: rgb(246, 193, 119);
  border-top-color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(196, 167, 231);
  border-left-color: rgb(196, 167, 231);
  border-right-color: rgb(196, 167, 231);
  border-top-color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(49, 117, 144);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
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
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 29, 46);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgba(49, 117, 144, 0.15);
  border-left-color: rgba(49, 117, 144, 0.15);
  border-right-color: rgba(49, 117, 144, 0.15);
  border-top-color: rgba(49, 117, 144, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body h1 {
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body h2 {
  color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body h3 {
  color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body h4 {
  color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body h5 {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body h6 {
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(82, 79, 103);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 222, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(224, 222, 244);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 222, 244);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(110, 106, 134);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(64, 61, 82);
  border-left-color: rgb(64, 61, 82);
  border-right-color: rgb(64, 61, 82);
  border-top-color: rgb(64, 61, 82);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(38, 35, 58);
  border-bottom-color: rgba(49, 117, 144, 0.15);
  border-left-color: rgba(49, 117, 144, 0.15);
  border-right-color: rgba(49, 117, 144, 0.15);
  border-top-color: rgba(49, 117, 144, 0.15);
  color: rgb(49, 116, 143);
}`,
  },
  light: {
    base: `:root:root {
  --accent: hsl(3, 53%, 67%) !important;
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
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(3, 53%, 67%) !important;
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
  --collapse-icon-color-collapsed: hsl(3, 53%, 67%) !important;
  --color-accent: hsl(3, 53%, 67%) !important;
  --color-accent-1: hsl(2, 53.53%, 72.025%) !important;
  --color-accent-2: hsl(0, 54.06%, 77.05%) !important;
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
  --divider-color-hover: hsl(3, 53%, 67%) !important;
  --dropdown-background: #fffaf3 !important;
  --dropdown-background-hover: #dfdad9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dfdad9, inset 0 0 0 1px #dfdad9 !important;
  --embed-border-start: 2px solid hsl(3, 53%, 67%) !important;
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
  --graph-node: hsl(3, 53%, 67%) !important;
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
  --highlight: hsl(3, 53%, 67%) !important;
  --highlight-high: #cecacd !important;
  --highlight-low: #f4ede8 !important;
  --highlight-med: #dfdad9 !important;
  --hr-color: #f2e9e1 !important;
  --icon-color: #575279 !important;
  --icon-color-active: hsl(3, 53%, 67%) !important;
  --icon-color-focused: #575279 !important;
  --icon-color-hover: #575279 !important;
  --indentation-guide-color: #f2e9e1 !important;
  --indentation-guide-color-active: #9893a5 !important;
  --inline-title-color: #575279 !important;
  --input-date-separator: #9893a5 !important;
  --input-placeholder-color: #9893a5 !important;
  --interactive-accent: hsl(3, 53%, 67%) !important;
  --interactive-accent-hover: hsl(0, 54.06%, 77.05%) !important;
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
  --link-unresolved-decoration-color: hsla(3, 53%, 67%, 0.3) !important;
  --list-marker-color: #286983 !important;
  --list-marker-color-collapsed: hsl(3, 53%, 67%) !important;
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
  --pill-color-remove-hover: hsl(3, 53%, 67%) !important;
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
  --secondary: hsl(3, 53%, 67%) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(3, 53%, 67%) !important;
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
  --tag-border-color: hsla(3, 53%, 67%, 0.15) !important;
  --tag-border-color-hover: hsla(3, 53%, 67%, 0.15) !important;
  --tag-color: #286983 !important;
  --tag-color-hover: #286983 !important;
  --tertiary: red !important;
  --text: #575279 !important;
  --text-accent: hsl(3, 53%, 67%) !important;
  --text-accent-hover: red !important;
  --text-color: #575279 !important;
  --text-color-accent: #575279 !important;
  --text-color-muted-dark: #f2e9e1 !important;
  --text-color-muted-light: #9893a5 !important;
  --text-error: #b4637a !important;
  --text-faint: #9893a5 !important;
  --text-highlight-bg: hsl(3, 53%, 67%) !important;
  --text-muted: #575279 !important;
  --text-normal: #575279 !important;
  --text-on-accent: #575279 !important;
  --text-on-accent-inverted: #faf4ed !important;
  --text-selection: #f2e9e1 !important;
  --text-success: #56949f !important;
  --text-warning: #ea9d34 !important;
  --textHighlight: hsl(3, 53%, 67%) !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 244, 237);
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(242, 233, 225);
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 250, 243);
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration-color: rgb(215, 130, 126);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(215, 131, 126);
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(40, 105, 131);
  border-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body p {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration-color: rgb(40, 105, 131);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: underline rgba(215, 131, 126, 0.3);
  text-decoration-color: rgba(215, 131, 126, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(152, 147, 165);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 157, 52);
  border-left-color: rgb(234, 157, 52);
  border-right-color: rgb(234, 157, 52);
  border-top-color: rgb(234, 157, 52);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(144, 122, 169);
  border-left-color: rgb(144, 122, 169);
  border-right-color: rgb(144, 122, 169);
  border-top-color: rgb(144, 122, 169);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
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
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body h1 {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body h2 {
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body h3 {
  color: rgb(86, 148, 159);
}

html[saved-theme="light"] body h4 {
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body h5 {
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body h6 {
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(206, 202, 205);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(87, 82, 121);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(152, 147, 165);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
  color: rgb(40, 105, 131);
}`,
  },
};
