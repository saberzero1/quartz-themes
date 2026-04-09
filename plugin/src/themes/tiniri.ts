import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "tiniri", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0 !important;
  --accent-l: 50 !important;
  --accent-s: 77 !important;
  --background-modifier-active-hover: hsla(0, 77, 50, 0.1) !important;
  --background-modifier-border: #0003 !important;
  --background-modifier-error: #AD514C !important;
  --background-modifier-error-hover: #AD514C !important;
  --background-modifier-error-rgb: 198, 107, 103 !important;
  --background-modifier-success: #F5A571 !important;
  --background-modifier-success-rgb: 173, 131, 1 !important;
  --background-primary: #1F2122 !important;
  --background-primary-alt: #1F2122 !important;
  --background-secondary: #1B1D1E !important;
  --background-secondary-alt: #1B1D1E !important;
  --bases-cards-background: #1F2122 !important;
  --bases-cards-cover-background: #1F2122 !important;
  --bases-cards-shadow: 0 0 0 1px #0003 !important;
  --bases-embed-border-color: #0003 !important;
  --bases-group-heading-property-color: #938A80 !important;
  --bases-table-border-color: #0003 !important;
  --bases-table-cell-background-active: #1F2122 !important;
  --bases-table-cell-background-disabled: #1F2122 !important;
  --bases-table-cell-background-selected: hsla(0, 77, 50, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #314F52 !important;
  --bases-table-group-background: #1F2122 !important;
  --bases-table-header-background: #1F2122 !important;
  --bases-table-header-color: #938A80 !important;
  --bases-table-summary-background: #1F2122 !important;
  --blockquote-border-color: #314F52 !important;
  --blur-background: color-mix(in srgb, #353A42 65%, transparent) linear-gradient(#353A42, color-mix(in srgb, #353A42 65%, transparent)) !important;
  --callout-bug: 198, 107, 103;
  --callout-default: 104, 160, 160;
  --callout-error: 198, 107, 103;
  --callout-example: 168, 144, 128;
  --callout-fail: 198, 107, 103;
  --callout-important: 120, 113, 108;
  --callout-info: 104, 160, 160;
  --callout-question: 235, 147, 80;
  --callout-success: 173, 131, 1;
  --callout-summary: 120, 113, 108;
  --callout-tip: 120, 113, 108;
  --callout-todo: 104, 160, 160;
  --callout-warning: 235, 147, 80;
  --canvas-background: #1F2122 !important;
  --canvas-card-label-color: #938A8099 !important;
  --canvas-color-1: 198, 107, 103 !important;
  --canvas-color-2: 235, 147, 80 !important;
  --canvas-color-3: 235, 147, 80 !important;
  --canvas-color-4: 173, 131, 1 !important;
  --canvas-color-5: 120, 113, 108 !important;
  --canvas-color-6: 168, 144, 128 !important;
  --caret-color: #DBD3CA !important;
  --checkbox-border-color: #938A8099 !important;
  --checkbox-border-color-hover: #938A80 !important;
  --checkbox-color: #314F52 !important;
  --checkbox-color-hover: #39595C !important;
  --checkbox-marker-color: #1F2122 !important;
  --checklist-done-color: #938A80 !important;
  --code-background: #1F2122 !important;
  --code-border-color: #0003 !important;
  --code-comment: #938A8099 !important;
  --code-function: #F5A571 !important;
  --code-important: #F5A571 !important;
  --code-keyword: #D67C7F !important;
  --code-normal: #DBD3CA !important;
  --code-operator: #AD514C !important;
  --code-property: #938A80 !important;
  --code-punctuation: #938A80 !important;
  --code-string: #F5A571 !important;
  --code-tag: #AD514C !important;
  --code-value: #D67C7F !important;
  --collapse-icon-color: #938A8099 !important;
  --collapse-icon-color-collapsed: #AD514C !important;
  --color-accent: hsl(0, 77, 50) !important;
  --color-accent-1: hsl(-3, 78.54, 57.5) !important;
  --color-accent-2: hsl(-5, 80.85, 64.5) !important;
  --color-accent-hsl: 0, 77, 50 !important;
  --color-blue: #5BA9B9 !important;
  --color-blue-rgb: 104, 160, 160 !important;
  --color-cyan: #938A80 !important;
  --color-cyan-rgb: 120, 113, 108 !important;
  --color-green: #F5A571 !important;
  --color-green-rgb: 173, 131, 1 !important;
  --color-orange: #F5A571 !important;
  --color-orange-rgb: 235, 147, 80 !important;
  --color-pink: #D67C7F !important;
  --color-pink-rgb: 168, 144, 128 !important;
  --color-purple: #D67C7F !important;
  --color-purple-rgb: 168, 144, 128 !important;
  --color-red: #AD514C !important;
  --color-red-rgb: 198, 107, 103 !important;
  --color-yellow: #F5A571 !important;
  --color-yellow-rgb: 235, 147, 80 !important;
  --dark: #DBD3CA !important;
  --darkgray: #DBD3CA !important;
  --divider-color: #0003 !important;
  --divider-color-hover: #314F52 !important;
  --dropdown-background: #353A42 !important;
  --dropdown-background-hover: #3F444D !important;
  --embed-block-shadow-hover: 0 0 0 1px #0003, inset 0 0 0 1px #0003 !important;
  --embed-border-start: 2px solid #314F52 !important;
  --file-header-background: #1F2122 !important;
  --file-header-background-focused: #1F2122 !important;
  --flair-background: #353A42 !important;
  --flair-color: #DBD3CA !important;
  --footnote-divider-color: #0003 !important;
  --footnote-id-color: #938A80 !important;
  --footnote-id-color-no-occurrences: #938A8099 !important;
  --graph-node: #938A80 !important;
  --graph-node-attachment: #F5A571 !important;
  --graph-node-focused: #AD514C !important;
  --graph-node-tag: #F5A571 !important;
  --graph-node-unresolved: #938A8099 !important;
  --graph-text: #DBD3CA !important;
  --gray: #938A80 !important;
  --heading-formatting: #938A8099 !important;
  --highlight: #AD514C44 !important;
  --hr-color: #0003 !important;
  --icon-color: #938A80 !important;
  --icon-color-active: #AD514C !important;
  --icon-color-focused: #DBD3CA !important;
  --icon-color-hover: #938A80 !important;
  --input-date-separator: #938A8099 !important;
  --input-placeholder-color: #938A8099 !important;
  --interactive-accent: #314F52 !important;
  --interactive-accent-hover: #39595C !important;
  --interactive-accent-hsl: 0, 77, 50 !important;
  --interactive-hover: #3F444D !important;
  --interactive-normal: #353A42 !important;
  --light: #1F2122 !important;
  --lightgray: #1B1D1E !important;
  --link-color: #AD514C !important;
  --link-color-hover: #E07575 !important;
  --link-external-color: #AD514C !important;
  --link-external-color-hover: #E07575 !important;
  --link-unresolved-color: #AD514C !important;
  --link-unresolved-decoration-color: hsla(0, 77, 50, 0.3) !important;
  --list-marker-color: #938A8099 !important;
  --list-marker-color-collapsed: #AD514C !important;
  --list-marker-color-hover: #938A80 !important;
  --menu-background: #1B1D1E !important;
  --metadata-border-color: #0003 !important;
  --metadata-divider-color: #0003 !important;
  --metadata-input-text-color: #DBD3CA !important;
  --metadata-label-text-color: #938A80 !important;
  --metadata-label-text-color-hover: #938A80 !important;
  --modal-background: #1F2122 !important;
  --nav-collapse-icon-color: #938A8099 !important;
  --nav-collapse-icon-color-collapsed: #938A8099 !important;
  --nav-heading-color: #DBD3CA !important;
  --nav-heading-color-collapsed: #938A8099 !important;
  --nav-heading-color-collapsed-hover: #938A80 !important;
  --nav-heading-color-hover: #DBD3CA !important;
  --nav-item-background-selected: hsla(0, 77, 50, 0.15) !important;
  --nav-item-color: #938A80 !important;
  --nav-item-color-active: #DBD3CA !important;
  --nav-item-color-highlighted: #AD514C !important;
  --nav-item-color-hover: #DBD3CA !important;
  --nav-item-color-selected: #DBD3CA !important;
  --nav-tag-color: #938A8099 !important;
  --nav-tag-color-active: #938A80 !important;
  --nav-tag-color-hover: #938A80 !important;
  --pdf-background: #1F2122 !important;
  --pdf-page-background: #1F2122 !important;
  --pdf-shadow: 0 0 0 1px #0003 !important;
  --pdf-sidebar-background: #1F2122 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #0003 !important;
  --pill-border-color: #0003 !important;
  --pill-color: #938A80 !important;
  --pill-color-hover: #DBD3CA !important;
  --pill-color-remove: #938A8099 !important;
  --pill-color-remove-hover: #AD514C !important;
  --prompt-background: #1F2122 !important;
  --raised-background: color-mix(in srgb, #353A42 65%, transparent) linear-gradient(#353A42, color-mix(in srgb, #353A42 65%, transparent)) !important;
  --ribbon-background: #1B1D1E !important;
  --ribbon-background-collapsed: #1F2122 !important;
  --search-clear-button-color: #938A80 !important;
  --search-icon-color: #938A80 !important;
  --search-result-background: #1F2122 !important;
  --secondary: #AD514C !important;
  --setting-group-heading-color: #DBD3CA !important;
  --setting-items-background: #1F2122 !important;
  --setting-items-border-color: #0003 !important;
  --slider-track-background: #0003 !important;
  --status-bar-background: #1B1D1E !important;
  --status-bar-border-color: #0003 !important;
  --status-bar-text-color: #938A80 !important;
  --suggestion-background: #1F2122 !important;
  --sync-avatar-color-1: #AD514C !important;
  --sync-avatar-color-2: #F5A571 !important;
  --sync-avatar-color-3: #F5A571 !important;
  --sync-avatar-color-4: #F5A571 !important;
  --sync-avatar-color-5: #938A80 !important;
  --sync-avatar-color-6: #5BA9B9 !important;
  --sync-avatar-color-7: #D67C7F !important;
  --sync-avatar-color-8: #D67C7F !important;
  --tab-background-active: #1F2122 !important;
  --tab-container-background: #1B1D1E !important;
  --tab-outline-color: #0003 !important;
  --tab-switcher-background: #1B1D1E !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1B1D1E, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0, 77, 50) !important;
  --tab-text-color: #938A8099 !important;
  --tab-text-color-active: #938A80 !important;
  --tab-text-color-focused: #938A80 !important;
  --tab-text-color-focused-active: #938A80 !important;
  --tab-text-color-focused-active-current: #DBD3CA !important;
  --tab-text-color-focused-highlighted: #AD514C !important;
  --table-add-button-border-color: #0003 !important;
  --table-border-color: #0003 !important;
  --table-drag-handle-background-active: #314F52 !important;
  --table-drag-handle-color: #938A8099 !important;
  --table-drag-handle-color-active: #DBD3CA !important;
  --table-header-border-color: #0003 !important;
  --table-header-color: #DBD3CA !important;
  --table-selection: hsla(0, 77, 50, 0.1) !important;
  --table-selection-border-color: #314F52 !important;
  --tag-background: hsla(0, 77, 50, 0.1) !important;
  --tag-background-hover: hsla(0, 77, 50, 0.2) !important;
  --tag-border-color: hsla(0, 77, 50, 0.15) !important;
  --tag-border-color-hover: hsla(0, 77, 50, 0.15) !important;
  --tag-color: #AD514C !important;
  --tag-color-hover: #AD514C !important;
  --tertiary: #E07575 !important;
  --text-accent: #AD514C !important;
  --text-accent-hover: #E07575 !important;
  --text-error: #F5A571 !important;
  --text-faint: #938A8099 !important;
  --text-highlight-bg: #AD514C44 !important;
  --text-muted: #938A80 !important;
  --text-normal: #DBD3CA !important;
  --text-on-accent: #DBD3CA !important;
  --text-on-accent-inverted: #1F2122 !important;
  --text-selection: #353A42 !important;
  --text-success: #AAC2AE !important;
  --text-warning: #F5A571 !important;
  --textHighlight: #AD514C44 !important;
  --titlebar-background: #1B1D1E !important;
  --titlebar-background-focused: #1B1D1E !important;
  --titlebar-border-color: #0003 !important;
  --titlebar-text-color: #938A80 !important;
  --titlebar-text-color-focused: #DBD3CA !important;
  --vault-profile-color: #DBD3CA !important;
  --vault-profile-color-hover: #DBD3CA !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 29, 30);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 33, 34);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(27, 29, 30);
  border-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 29, 30);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 29, 30);
  border-left-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 33, 34);
  color: rgb(219, 211, 202);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(173, 81, 76, 0.267);
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body del {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(147, 138, 128, 0.6);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(49, 79, 82);
  border-color: rgb(49, 79, 82);
}

html[saved-theme="dark"] body p {
  color: rgb(147, 138, 128);
  outline: rgb(147, 138, 128) none 0px;
  text-decoration-color: rgb(147, 138, 128);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(173, 81, 76);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body dt {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgba(147, 138, 128, 0.6);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body table {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(245, 165, 113);
  border-left-color: rgb(245, 165, 113);
  border-right-color: rgb(245, 165, 113);
  border-top-color: rgb(245, 165, 113);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(49, 79, 82);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgba(147, 138, 128, 0.6);
  border-left-color: rgba(147, 138, 128, 0.6);
  border-right-color: rgba(147, 138, 128, 0.6);
  border-top-color: rgba(147, 138, 128, 0.6);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(219, 211, 202);
  text-decoration-color: rgb(219, 211, 202);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(104, 160, 160);
  border-left-color: rgb(104, 160, 160);
  border-right-color: rgb(104, 160, 160);
  border-top-color: rgb(104, 160, 160);
  color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(104, 160, 160);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 198, 107, 103;
  background-color: rgba(198, 107, 103, 0.1);
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 198, 107, 103;
  background-color: rgba(198, 107, 103, 0.1);
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 144, 128;
  background-color: rgba(168, 144, 128, 0.1);
  border-bottom-color: rgba(168, 144, 128, 0.25);
  border-left-color: rgba(168, 144, 128, 0.25);
  border-right-color: rgba(168, 144, 128, 0.25);
  border-top-color: rgba(168, 144, 128, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 198, 107, 103;
  background-color: rgba(198, 107, 103, 0.1);
  border-bottom-color: rgba(198, 107, 103, 0.25);
  border-left-color: rgba(198, 107, 103, 0.25);
  border-right-color: rgba(198, 107, 103, 0.25);
  border-top-color: rgba(198, 107, 103, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 104, 160, 160;
  background-color: rgba(104, 160, 160, 0.1);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 104, 160, 160;
  background-color: rgba(104, 160, 160, 0.1);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 235, 147, 80;
  background-color: rgba(235, 147, 80, 0.1);
  border-bottom-color: rgba(235, 147, 80, 0.25);
  border-left-color: rgba(235, 147, 80, 0.25);
  border-right-color: rgba(235, 147, 80, 0.25);
  border-top-color: rgba(235, 147, 80, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 173, 131, 1;
  background-color: rgba(173, 131, 1, 0.1);
  border-bottom-color: rgba(173, 131, 1, 0.25);
  border-left-color: rgba(173, 131, 1, 0.25);
  border-right-color: rgba(173, 131, 1, 0.25);
  border-top-color: rgba(173, 131, 1, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 104, 160, 160;
  background-color: rgba(104, 160, 160, 0.1);
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 235, 147, 80;
  background-color: rgba(235, 147, 80, 0.1);
  border-bottom-color: rgba(235, 147, 80, 0.25);
  border-left-color: rgba(235, 147, 80, 0.25);
  border-right-color: rgba(235, 147, 80, 0.25);
  border-top-color: rgba(235, 147, 80, 0.25);
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
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(219, 211, 202);
  outline: rgb(219, 211, 202) none 0px;
  text-decoration-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 29, 30);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(173, 81, 76);
}

html[saved-theme="dark"] body h1 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h2 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h3 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h4 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h5 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body h6 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 104, 160, 160;
  border-bottom-color: rgba(104, 160, 160, 0.25);
  border-left-color: rgba(104, 160, 160, 0.25);
  border-right-color: rgba(104, 160, 160, 0.25);
  border-top-color: rgba(104, 160, 160, 0.25);
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(31, 33, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 33, 34);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(147, 138, 128);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(219, 211, 202);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(27, 29, 30);
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(147, 138, 128);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(147, 138, 128);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(147, 138, 128);
  stroke: rgb(147, 138, 128);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgba(147, 138, 128, 0.6);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.2);
  border-left-color: rgba(0, 0, 0, 0.2);
  border-right-color: rgba(0, 0, 0, 0.2);
  border-top-color: rgba(0, 0, 0, 0.2);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(27, 29, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body abbr {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(147, 138, 128);
  border-left-color: rgb(147, 138, 128);
  border-right-color: rgb(147, 138, 128);
  border-top-color: rgb(147, 138, 128);
  color: rgb(147, 138, 128);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(31, 33, 34);
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(219, 211, 202);
  border-left-color: rgb(219, 211, 202);
  border-right-color: rgb(219, 211, 202);
  border-top-color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body sub {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body summary {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body sup {
  color: rgb(219, 211, 202);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
  color: rgb(173, 81, 76);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 3 !important;
  --accent-l: 54 !important;
  --accent-s: 70 !important;
  --background-modifier-active-hover: hsla(3, 70, 54, 0.1) !important;
  --background-modifier-border: #33323118 !important;
  --background-modifier-error: #AD514C !important;
  --background-modifier-error-hover: #AD514C !important;
  --background-modifier-error-rgb: 173, 81, 76 !important;
  --background-modifier-success: #538A8A !important;
  --background-modifier-success-rgb: 83, 138, 138 !important;
  --background-primary: #FDFCFC !important;
  --background-primary-alt: #FDFCFC !important;
  --background-secondary: #F7F3F0 !important;
  --background-secondary-alt: #F7F3F0 !important;
  --bases-cards-background: #FDFCFC !important;
  --bases-cards-cover-background: #FDFCFC !important;
  --bases-cards-shadow: 0 0 0 1px #33323118 !important;
  --bases-embed-border-color: #33323118 !important;
  --bases-group-heading-property-color: #807974 !important;
  --bases-table-border-color: #33323118 !important;
  --bases-table-cell-background-active: #FDFCFC !important;
  --bases-table-cell-background-disabled: #FDFCFC !important;
  --bases-table-cell-background-selected: hsla(3, 70, 54, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #538a8a !important;
  --bases-table-group-background: #FDFCFC !important;
  --bases-table-header-background: #FDFCFC !important;
  --bases-table-header-color: #807974 !important;
  --bases-table-summary-background: #FDFCFC !important;
  --blockquote-border-color: #538a8a !important;
  --blur-background: color-mix(in srgb, #FDFCFC 65%, transparent) linear-gradient(#FDFCFC, color-mix(in srgb, #FDFCFC 65%, transparent)) !important;
  --callout-bug: 173, 81, 76;
  --callout-default: 53, 107, 148;
  --callout-error: 173, 81, 76;
  --callout-example: 128, 76, 110;
  --callout-fail: 173, 81, 76;
  --callout-important: 120, 113, 108;
  --callout-info: 53, 107, 148;
  --callout-question: 210, 132, 80;
  --callout-success: 83, 138, 138;
  --callout-summary: 120, 113, 108;
  --callout-tip: 120, 113, 108;
  --callout-todo: 53, 107, 148;
  --callout-warning: 210, 132, 80;
  --canvas-background: #FDFCFC !important;
  --canvas-card-label-color: #80797499 !important;
  --canvas-color-1: 173, 81, 76 !important;
  --canvas-color-2: 210, 132, 80 !important;
  --canvas-color-3: 120, 113, 108 !important;
  --canvas-color-4: 83, 138, 138 !important;
  --canvas-color-5: 120, 113, 108 !important;
  --canvas-color-6: 128, 76, 110 !important;
  --caret-color: #333231 !important;
  --checkbox-border-color: #80797499 !important;
  --checkbox-border-color-hover: #807974 !important;
  --checkbox-color: #538a8a !important;
  --checkbox-color-hover: #5c9e9e !important;
  --checkbox-marker-color: #FDFCFC !important;
  --checklist-done-color: #807974 !important;
  --code-background: #FDFCFC !important;
  --code-border-color: #33323118 !important;
  --code-comment: #80797499 !important;
  --code-function: #D28450 !important;
  --code-important: #D28450 !important;
  --code-keyword: #BD71A4 !important;
  --code-normal: #333231 !important;
  --code-operator: #AD514C !important;
  --code-property: #807974 !important;
  --code-punctuation: #807974 !important;
  --code-string: #538A8A !important;
  --code-tag: #AD514C !important;
  --code-value: #804C6E !important;
  --collapse-icon-color: #80797499 !important;
  --collapse-icon-color-collapsed: #AD514C !important;
  --color-accent: hsl(3, 70, 54) !important;
  --color-accent-1: hsl(2, 70.7, 58.05) !important;
  --color-accent-2: hsl(0, 71.4, 62.1) !important;
  --color-accent-hsl: 3, 70, 54 !important;
  --color-blue: #356B94 !important;
  --color-blue-rgb: 53, 107, 148 !important;
  --color-cyan: #807974 !important;
  --color-cyan-rgb: 120, 113, 108 !important;
  --color-green: #538A8A !important;
  --color-green-rgb: 83, 138, 138 !important;
  --color-orange: #D28450 !important;
  --color-orange-rgb: 210, 132, 80 !important;
  --color-pink: #BD71A4 !important;
  --color-pink-rgb: 189, 113, 164 !important;
  --color-purple: #804C6E !important;
  --color-purple-rgb: 128, 76, 110 !important;
  --color-red: #AD514C !important;
  --color-red-rgb: 173, 81, 76 !important;
  --color-yellow: #D28450 !important;
  --color-yellow-rgb: 120, 113, 108 !important;
  --dark: #333231 !important;
  --darkgray: #333231 !important;
  --divider-color: #33323118 !important;
  --divider-color-hover: #538a8a !important;
  --dropdown-background: #F7F3F0 !important;
  --dropdown-background-hover: #ede9e1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #33323118, inset 0 0 0 1px #33323118 !important;
  --embed-border-start: 2px solid #538a8a !important;
  --file-header-background: #FDFCFC !important;
  --file-header-background-focused: #FDFCFC !important;
  --flair-background: #F7F3F0 !important;
  --flair-color: #333231 !important;
  --footnote-divider-color: #33323118 !important;
  --footnote-id-color: #807974 !important;
  --footnote-id-color-no-occurrences: #80797499 !important;
  --graph-node: #807974 !important;
  --graph-node-attachment: #D28450 !important;
  --graph-node-focused: #AD514C !important;
  --graph-node-tag: #538A8A !important;
  --graph-node-unresolved: #80797499 !important;
  --graph-text: #333231 !important;
  --gray: #807974 !important;
  --heading-formatting: #80797499 !important;
  --highlight: #fab48588 !important;
  --hr-color: #33323118 !important;
  --icon-color: #807974 !important;
  --icon-color-active: #AD514C !important;
  --icon-color-focused: #333231 !important;
  --icon-color-hover: #807974 !important;
  --input-date-separator: #80797499 !important;
  --input-placeholder-color: #80797499 !important;
  --interactive-accent: #538a8a !important;
  --interactive-accent-hover: #5c9e9e !important;
  --interactive-accent-hsl: 3, 70, 54 !important;
  --interactive-hover: #ede9e1 !important;
  --interactive-normal: #F7F3F0 !important;
  --light: #FDFCFC !important;
  --lightgray: #F7F3F0 !important;
  --link-color: #AD514C !important;
  --link-color-hover: #cc645e !important;
  --link-external-color: #AD514C !important;
  --link-external-color-hover: #cc645e !important;
  --link-unresolved-color: #AD514C !important;
  --link-unresolved-decoration-color: hsla(3, 70, 54, 0.3) !important;
  --list-marker-color: #80797499 !important;
  --list-marker-color-collapsed: #AD514C !important;
  --list-marker-color-hover: #807974 !important;
  --menu-background: #F7F3F0 !important;
  --metadata-border-color: #33323118 !important;
  --metadata-divider-color: #33323118 !important;
  --metadata-input-text-color: #333231 !important;
  --metadata-label-text-color: #807974 !important;
  --metadata-label-text-color-hover: #807974 !important;
  --modal-background: #FDFCFC !important;
  --nav-collapse-icon-color: #80797499 !important;
  --nav-collapse-icon-color-collapsed: #80797499 !important;
  --nav-heading-color: #333231 !important;
  --nav-heading-color-collapsed: #80797499 !important;
  --nav-heading-color-collapsed-hover: #807974 !important;
  --nav-heading-color-hover: #333231 !important;
  --nav-item-background-selected: hsla(3, 70, 54, 0.15) !important;
  --nav-item-color: #807974 !important;
  --nav-item-color-active: #333231 !important;
  --nav-item-color-highlighted: #AD514C !important;
  --nav-item-color-hover: #333231 !important;
  --nav-item-color-selected: #333231 !important;
  --nav-tag-color: #80797499 !important;
  --nav-tag-color-active: #807974 !important;
  --nav-tag-color-hover: #807974 !important;
  --pdf-background: #FDFCFC !important;
  --pdf-page-background: #FDFCFC !important;
  --pdf-sidebar-background: #FDFCFC !important;
  --pill-border-color: #33323118 !important;
  --pill-color: #807974 !important;
  --pill-color-hover: #333231 !important;
  --pill-color-remove: #80797499 !important;
  --pill-color-remove-hover: #AD514C !important;
  --prompt-background: #FDFCFC !important;
  --raised-background: color-mix(in srgb, #FDFCFC 65%, transparent) linear-gradient(#FDFCFC, color-mix(in srgb, #FDFCFC 65%, transparent)) !important;
  --ribbon-background: #F7F3F0 !important;
  --ribbon-background-collapsed: #FDFCFC !important;
  --search-clear-button-color: #807974 !important;
  --search-icon-color: #807974 !important;
  --search-result-background: #FDFCFC !important;
  --secondary: #AD514C !important;
  --setting-group-heading-color: #333231 !important;
  --setting-items-background: #FDFCFC !important;
  --setting-items-border-color: #33323118 !important;
  --slider-track-background: #33323118 !important;
  --status-bar-background: #F7F3F0 !important;
  --status-bar-border-color: #33323118 !important;
  --status-bar-text-color: #807974 !important;
  --suggestion-background: #FDFCFC !important;
  --sync-avatar-color-1: #AD514C !important;
  --sync-avatar-color-2: #D28450 !important;
  --sync-avatar-color-3: #D28450 !important;
  --sync-avatar-color-4: #538A8A !important;
  --sync-avatar-color-5: #807974 !important;
  --sync-avatar-color-6: #356B94 !important;
  --sync-avatar-color-7: #804C6E !important;
  --sync-avatar-color-8: #BD71A4 !important;
  --tab-background-active: #FDFCFC !important;
  --tab-container-background: #F7F3F0 !important;
  --tab-outline-color: #33323118 !important;
  --tab-switcher-background: #F7F3F0 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F7F3F0, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(3, 70, 54) !important;
  --tab-text-color: #80797499 !important;
  --tab-text-color-active: #807974 !important;
  --tab-text-color-focused: #807974 !important;
  --tab-text-color-focused-active: #807974 !important;
  --tab-text-color-focused-active-current: #333231 !important;
  --tab-text-color-focused-highlighted: #AD514C !important;
  --table-add-button-border-color: #33323118 !important;
  --table-border-color: #33323118 !important;
  --table-drag-handle-background-active: #538a8a !important;
  --table-drag-handle-color: #80797499 !important;
  --table-drag-handle-color-active: #FDFCFC !important;
  --table-header-border-color: #33323118 !important;
  --table-header-color: #333231 !important;
  --table-selection: hsla(3, 70, 54, 0.1) !important;
  --table-selection-border-color: #538a8a !important;
  --tag-background: hsla(3, 70, 54, 0.1) !important;
  --tag-background-hover: hsla(3, 70, 54, 0.2) !important;
  --tag-border-color: hsla(3, 70, 54, 0.15) !important;
  --tag-border-color-hover: hsla(3, 70, 54, 0.15) !important;
  --tag-color: #AD514C !important;
  --tag-color-hover: #AD514C !important;
  --tertiary: #cc645e !important;
  --text-accent: #AD514C !important;
  --text-accent-hover: #cc645e !important;
  --text-error: #AD514C !important;
  --text-faint: #80797499 !important;
  --text-highlight-bg: #fab48588 !important;
  --text-muted: #807974 !important;
  --text-normal: #333231 !important;
  --text-on-accent: #FDFCFC !important;
  --text-on-accent-inverted: #333231 !important;
  --text-selection: #dae5e2 !important;
  --text-success: #538a8a !important;
  --text-warning: #AD514C !important;
  --textHighlight: #fab48588 !important;
  --titlebar-background: #F7F3F0 !important;
  --titlebar-background-focused: #F7F3F0 !important;
  --titlebar-border-color: #33323118 !important;
  --titlebar-text-color: #807974 !important;
  --titlebar-text-color-focused: #333231 !important;
  --vault-profile-color: #333231 !important;
  --vault-profile-color-hover: #333231 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 243, 240);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 252, 252);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 252, 252);
  border-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(51, 50, 49, 0.094);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(173, 81, 76);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 243, 240);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(51, 50, 49, 0.094);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 243, 240);
  border-left-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 252, 252);
  color: rgb(51, 50, 49);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(250, 180, 133, 0.533);
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body del {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgba(128, 121, 116, 0.6);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(83, 138, 138);
  border-color: rgb(83, 138, 138);
}

html[saved-theme="light"] body p {
  color: rgb(128, 121, 116);
  outline: rgb(128, 121, 116) none 0px;
  text-decoration-color: rgb(128, 121, 116);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(173, 81, 76);
  outline: rgb(173, 81, 76) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(173, 81, 76);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body dt {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ol > li {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ul > li {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgba(128, 121, 116, 0.6);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body table {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(210, 132, 80);
  border-left-color: rgb(210, 132, 80);
  border-right-color: rgb(210, 132, 80);
  border-top-color: rgb(210, 132, 80);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body figcaption {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(83, 138, 138);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgba(128, 121, 116, 0.6);
  border-left-color: rgba(128, 121, 116, 0.6);
  border-right-color: rgba(128, 121, 116, 0.6);
  border-top-color: rgba(128, 121, 116, 0.6);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(51, 50, 49);
  text-decoration-color: rgb(51, 50, 49);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(53, 107, 148);
  border-left-color: rgb(53, 107, 148);
  border-right-color: rgb(53, 107, 148);
  border-top-color: rgb(53, 107, 148);
  color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(53, 107, 148);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 173, 81, 76;
  background-color: rgba(173, 81, 76, 0.1);
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 173, 81, 76;
  background-color: rgba(173, 81, 76, 0.1);
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 128, 76, 110;
  background-color: rgba(128, 76, 110, 0.1);
  border-bottom-color: rgba(128, 76, 110, 0.25);
  border-left-color: rgba(128, 76, 110, 0.25);
  border-right-color: rgba(128, 76, 110, 0.25);
  border-top-color: rgba(128, 76, 110, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 173, 81, 76;
  background-color: rgba(173, 81, 76, 0.1);
  border-bottom-color: rgba(173, 81, 76, 0.25);
  border-left-color: rgba(173, 81, 76, 0.25);
  border-right-color: rgba(173, 81, 76, 0.25);
  border-top-color: rgba(173, 81, 76, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 53, 107, 148;
  background-color: rgba(53, 107, 148, 0.1);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 53, 107, 148;
  background-color: rgba(53, 107, 148, 0.1);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 210, 132, 80;
  background-color: rgba(210, 132, 80, 0.1);
  border-bottom-color: rgba(210, 132, 80, 0.25);
  border-left-color: rgba(210, 132, 80, 0.25);
  border-right-color: rgba(210, 132, 80, 0.25);
  border-top-color: rgba(210, 132, 80, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 83, 138, 138;
  background-color: rgba(83, 138, 138, 0.1);
  border-bottom-color: rgba(83, 138, 138, 0.25);
  border-left-color: rgba(83, 138, 138, 0.25);
  border-right-color: rgba(83, 138, 138, 0.25);
  border-top-color: rgba(83, 138, 138, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 120, 113, 108;
  background-color: rgba(120, 113, 108, 0.1);
  border-bottom-color: rgba(120, 113, 108, 0.25);
  border-left-color: rgba(120, 113, 108, 0.25);
  border-right-color: rgba(120, 113, 108, 0.25);
  border-top-color: rgba(120, 113, 108, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 53, 107, 148;
  background-color: rgba(53, 107, 148, 0.1);
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 210, 132, 80;
  background-color: rgba(210, 132, 80, 0.1);
  border-bottom-color: rgba(210, 132, 80, 0.25);
  border-left-color: rgba(210, 132, 80, 0.25);
  border-right-color: rgba(210, 132, 80, 0.25);
  border-top-color: rgba(210, 132, 80, 0.25);
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
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(51, 50, 49);
  outline: rgb(51, 50, 49) none 0px;
  text-decoration-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(247, 243, 240);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(173, 81, 76);
}

html[saved-theme="light"] body h1 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h2 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h3 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h4 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h5 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body h6 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 53, 107, 148;
  border-bottom-color: rgba(53, 107, 148, 0.25);
  border-left-color: rgba(53, 107, 148, 0.25);
  border-right-color: rgba(53, 107, 148, 0.25);
  border-top-color: rgba(53, 107, 148, 0.25);
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 252, 252) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 252, 252);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(128, 121, 116);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(51, 50, 49);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(247, 243, 240);
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(128, 121, 116);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 121, 116);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(128, 121, 116);
  stroke: rgb(128, 121, 116);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgba(128, 121, 116, 0.6);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(51, 50, 49, 0.094);
  border-left-color: rgba(51, 50, 49, 0.094);
  border-right-color: rgba(51, 50, 49, 0.094);
  border-top-color: rgba(51, 50, 49, 0.094);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(247, 243, 240);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body abbr {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(128, 121, 116);
  border-left-color: rgb(128, 121, 116);
  border-right-color: rgb(128, 121, 116);
  border-top-color: rgb(128, 121, 116);
  color: rgb(128, 121, 116);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(253, 252, 252);
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(51, 50, 49);
  border-left-color: rgb(51, 50, 49);
  border-right-color: rgb(51, 50, 49);
  border-top-color: rgb(51, 50, 49);
}

html[saved-theme="light"] body sub {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body summary {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body sup {
  color: rgb(51, 50, 49);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(173, 81, 76);
  border-left-color: rgb(173, 81, 76);
  border-right-color: rgb(173, 81, 76);
  border-top-color: rgb(173, 81, 76);
  color: rgb(173, 81, 76);
}`,
  },
};
