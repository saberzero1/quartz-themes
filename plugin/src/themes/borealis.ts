import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "borealis",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 110 !important;
  --accent-l: 77% !important;
  --accent-s: 90% !important;
  --background-modifier-active-hover: hsla(110, 90%, 77%, 0.1) !important;
  --background-modifier-border: #141414 !important;
  --background-modifier-form-field: #141414 !important;
  --background-modifier-form-field-hover: #141414 !important;
  --background-primary: #141414 !important;
  --background-primary-alt: #191919 !important;
  --background-secondary: #131313 !important;
  --background-secondary-alt: #141414 !important;
  --background-table: #212121 !important;
  --background-table-hover: #282828 !important;
  --background-titlebar: #1c1c1c !important;
  --bases-cards-background: #141414 !important;
  --bases-cards-cover-background: #191919 !important;
  --bases-cards-shadow: 0 0 0 1px #141414 !important;
  --bases-embed-border-color: #141414 !important;
  --bases-group-heading-property-color: #b8b8b8 !important;
  --bases-table-border-color: #141414 !important;
  --bases-table-cell-background-active: #141414 !important;
  --bases-table-cell-background-disabled: #191919 !important;
  --bases-table-cell-background-selected: hsla(110, 90%, 77%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a1f98f !important;
  --bases-table-group-background: #191919 !important;
  --bases-table-header-background: #141414 !important;
  --bases-table-header-color: #b8b8b8 !important;
  --bases-table-summary-background: #141414 !important;
  --blockquote-border-color: #a1f98f !important;
  --blur-background: color-mix(in srgb, #a1f98f 65%, transparent) linear-gradient(#a1f98f, color-mix(in srgb, #a1f98f 65%, transparent)) !important;
  --bold-color: #a1f98f !important;
  --canvas-background: #141414 !important;
  --canvas-card-label-color: #a1f98f !important;
  --canvas-color-1: 120, 246, 95 !important;
  --canvas-color-2: 161, 249, 143 !important;
  --canvas-color-3: 202, 252, 191 !important;
  --canvas-color-4: 221, 95, 246 !important;
  --canvas-color-5: 231, 143, 249 !important;
  --canvas-color-6: 241, 191, 252 !important;
  --caret-color: #d1d1d1 !important;
  --checkbox-border-color: #a1f98f !important;
  --checkbox-border-color-hover: #a1f98f !important;
  --checkbox-color: #a1f98f !important;
  --checkbox-color-hover: #a1f98f !important;
  --checkbox-marker-color: #141414 !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: none !important;
  --checklist-done-decoration: none !important;
  --code-background: #141414 !important;
  --code-border-color: #141414 !important;
  --code-comment: #4a4a4a !important;
  --code-function: #e78ff9 !important;
  --code-important: #cb4b16 !important;
  --code-keyword: #a1f98f !important;
  --code-operator: #dadada !important;
  --code-property: #a1f98f !important;
  --code-punctuation: #f8f8f2 !important;
  --code-size: 13px !important;
  --code-string: #f9e78f !important;
  --code-tag: #a1f98f !important;
  --code-value: #e78ff9 !important;
  --collapse-icon-color: #a1f98f !important;
  --collapse-icon-color-collapsed: #a1f98f !important;
  --color-accent: #a1f98f !important;
  --color-accent-1: hsl(107, 91.8%, 88.55%) !important;
  --color-accent-2: hsl(105, 94.5%, 99.33%) !important;
  --color-accent-hsl: 110, 90%, 77% !important;
  --color-primary: #a1f98f !important;
  --color-secondary: #e78ff9 !important;
  --dark: #d1d1d1 !important;
  --darkgray: #d1d1d1 !important;
  --divider-color: #141414 !important;
  --divider-color-hover: #a1f98f !important;
  --dropdown-background: #a1f98f !important;
  --dropdown-background-hover: #a1f98f !important;
  --embed-block-shadow-hover: 0 0 0 1px #141414, inset 0 0 0 1px #141414 !important;
  --embed-border-start: 2px solid #a1f98f !important;
  --file-header-background: #141414 !important;
  --file-header-background-focused: #141414 !important;
  --flair-background: #a1f98f !important;
  --flair-color: #d1d1d1 !important;
  --font-heading: 'JetBrains Mono', 'SF Mono', monospace !important;
  --footnote-divider-color: #141414 !important;
  --footnote-id-color: #b8b8b8 !important;
  --footnote-id-color-no-occurrences: #a1f98f !important;
  --graph-node: #b8b8b8 !important;
  --graph-node-focused: #a1f98f !important;
  --graph-node-unresolved: #a1f98f !important;
  --graph-text: #d1d1d1 !important;
  --gray: #b8b8b8 !important;
  --h1-size: 28px !important;
  --h2-size: 24px !important;
  --h3-size: 20px !important;
  --h4-size: 16px !important;
  --h5-size: 16px !important;
  --h6-size: 14px !important;
  --heading-formatting: #a1f98f !important;
  --highlight: rgba(161, 249, 143, 0.4) !important;
  --hr-color: #141414 !important;
  --hsl-primary: 110, 90%, 77% !important;
  --hsl-secondary: 290, 90%, 77% !important;
  --icon-color: #b8b8b8 !important;
  --icon-color-active: #a1f98f !important;
  --icon-color-focused: #d1d1d1 !important;
  --icon-color-hover: #b8b8b8 !important;
  --inline-title-size: 28px !important;
  --input-date-separator: #a1f98f !important;
  --input-placeholder-color: #a1f98f !important;
  --interactive-accent: #a1f98f !important;
  --interactive-accent-hover: #a1f98f !important;
  --interactive-accent-hsl: 110, 90%, 77% !important;
  --interactive-accent-rgb: #a1f98f !important;
  --interactive-hover: #a1f98f !important;
  --interactive-normal: #a1f98f !important;
  --interactive-secondary-accent: #e78ff9 !important;
  --interactive-secondary-accent-hover: #e78ff9 !important;
  --interactive-secondary-accent-rgb: #e78ff9 !important;
  --interactive-secondary-hover: #e78ff9 !important;
  --interactive-secondary-normal: #e78ff9 !important;
  --interactive-secondary-success: #e78ff9 !important;
  --interactive-success: #a1f98f !important;
  --italic-color: #e78ff9 !important;
  --light: #141414 !important;
  --lightgray: #131313 !important;
  --link-color: #a1f98f !important;
  --link-color-hover: #a1f98f !important;
  --link-decoration: none !important;
  --link-external-color: #a1f98f !important;
  --link-external-color-hover: #a1f98f !important;
  --link-unresolved-color: #a1f98f !important;
  --link-unresolved-decoration-color: #a1f98f !important;
  --link-unresolved-decoration-style: underline !important;
  --link-unresolved-opacity: 0.6 !important;
  --link-weight: none !important;
  --list-marker-color: #a1f98f !important;
  --list-marker-color-collapsed: #a1f98f !important;
  --list-marker-color-hover: #b8b8b8 !important;
  --menu-background: #131313 !important;
  --metadata-border-color: #141414 !important;
  --metadata-divider-color: #141414 !important;
  --metadata-input-font-size: 12px !important;
  --metadata-input-text-color: #d1d1d1 !important;
  --metadata-label-font-size: 12px !important;
  --metadata-label-text-color: #b8b8b8 !important;
  --metadata-label-text-color-hover: #b8b8b8 !important;
  --modal-background: #141414 !important;
  --nav-collapse-icon-color: #a1f98f !important;
  --nav-collapse-icon-color-collapsed: #a1f98f !important;
  --nav-heading-color: #d1d1d1 !important;
  --nav-heading-color-collapsed: #a1f98f !important;
  --nav-heading-color-collapsed-hover: #b8b8b8 !important;
  --nav-heading-color-hover: #d1d1d1 !important;
  --nav-item-background-selected: hsla(110, 90%, 77%, 0.15) !important;
  --nav-item-color: #b8b8b8 !important;
  --nav-item-color-active: #d1d1d1 !important;
  --nav-item-color-highlighted: #a1f98f !important;
  --nav-item-color-hover: #d1d1d1 !important;
  --nav-item-color-selected: #d1d1d1 !important;
  --nav-tag-color: #a1f98f !important;
  --nav-tag-color-active: #b8b8b8 !important;
  --nav-tag-color-hover: #b8b8b8 !important;
  --pdf-background: #141414 !important;
  --pdf-page-background: #141414 !important;
  --pdf-shadow: 0 0 0 1px #141414 !important;
  --pdf-sidebar-background: #141414 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #141414 !important;
  --pill-border-color: #141414 !important;
  --pill-color: #b8b8b8 !important;
  --pill-color-hover: #d1d1d1 !important;
  --pill-color-remove: #a1f98f !important;
  --pill-color-remove-hover: #a1f98f !important;
  --prompt-background: #141414 !important;
  --raised-background: color-mix(in srgb, #a1f98f 65%, transparent) linear-gradient(#a1f98f, color-mix(in srgb, #a1f98f 65%, transparent)) !important;
  --red: #f98fa1 !important;
  --rgb-primary: 161, 249, 143 !important;
  --rgb-secondary: 231, 143, 249 !important;
  --ribbon-background: #131313 !important;
  --ribbon-background-collapsed: #141414 !important;
  --scrollbar-active-thumb-bg: rgba(95, 94, 94, 0.3) !important;
  --scrollbar-bg: rgba(95, 94, 94, 0.1) !important;
  --scrollbar-thumb-bg: rgba(95, 94, 94, 0.1) !important;
  --search-clear-button-color: #b8b8b8 !important;
  --search-icon-color: #b8b8b8 !important;
  --search-result-background: #141414 !important;
  --secondary: #a1f98f !important;
  --setting-group-heading-color: #d1d1d1 !important;
  --setting-items-background: #191919 !important;
  --setting-items-border-color: #141414 !important;
  --slider-track-background: #141414 !important;
  --status-bar-background: #131313 !important;
  --status-bar-border-color: #141414 !important;
  --status-bar-text-color: #b8b8b8 !important;
  --suggestion-background: #141414 !important;
  --tab-background-active: #141414 !important;
  --tab-container-background: #131313 !important;
  --tab-outline-color: #141414 !important;
  --tab-switcher-background: #131313 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #131313, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #a1f98f !important;
  --tab-text-color: #939393 !important;
  --tab-text-color-active: #d1d1d1 !important;
  --tab-text-color-focused: #939393 !important;
  --tab-text-color-focused-active: #b8b8b8 !important;
  --tab-text-color-focused-active-current: #d1d1d1 !important;
  --tab-text-color-focused-highlighted: #a1f98f !important;
  --table-add-button-border-color: #141414 !important;
  --table-border-color: #141414 !important;
  --table-drag-handle-background-active: #a1f98f !important;
  --table-drag-handle-color: #a1f98f !important;
  --table-drag-handle-color-active: #141414 !important;
  --table-header-border-color: #141414 !important;
  --table-header-color: #d1d1d1 !important;
  --table-selection: hsla(110, 90%, 77%, 0.1) !important;
  --table-selection-border-color: #a1f98f !important;
  --tag-background: hsla(110, 90%, 77%, 0.1) !important;
  --tag-background-hover: hsla(110, 90%, 77%, 0.2) !important;
  --tag-border-color: hsla(110, 90%, 77%, 0.15) !important;
  --tag-border-color-hover: hsla(110, 90%, 77%, 0.15) !important;
  --tag-color: #a1f98f !important;
  --tag-color-hover: #a1f98f !important;
  --tertiary: #a1f98f !important;
  --text-accent: #a1f98f !important;
  --text-accent-hover: #a1f98f !important;
  --text-error: #CF6679 !important;
  --text-error-hover: #ff2f00 !important;
  --text-faint: #a1f98f !important;
  --text-highlight-bg: rgba(161, 249, 143, 0.4) !important;
  --text-highlight-bg-active: #ff2f00 !important;
  --text-muted: #b8b8b8 !important;
  --text-muted-rgb: rgb(184, 184, 184) !important;
  --text-normal: #d1d1d1 !important;
  --text-normal-light: #939393 !important;
  --text-on-accent: #141414 !important;
  --text-on-accent-inverted: #d1d1d1 !important;
  --text-selection: rgba(161, 249, 143, 0.25) !important;
  --textHighlight: rgba(161, 249, 143, 0.4) !important;
  --titlebar-background: #1c1c1c !important;
  --titlebar-background-focused: #1c1c1c !important;
  --titlebar-border-color: #141414 !important;
  --titlebar-text-color-focused: #d1d1d1 !important;
  --transparent-primary: rgba(161, 249, 143, 0.6) !important;
  --transparent-secondary: rgba(231, 143, 249, 0.6) !important;
  --vault-profile-color: #d1d1d1 !important;
  --vault-profile-color-hover: #d1d1d1 !important;
  --yellow: #f9e78f !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 19, 19);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(19, 19, 19);
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(161, 249, 143, 0.1);
  border-radius: 24px;
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 19, 19);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 19, 19);
  border-left-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(231, 143, 249);
  outline: rgb(231, 143, 249) none 0px;
  text-decoration-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(231, 143, 249);
  outline: rgb(231, 143, 249) none 0px;
  text-decoration-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(161, 249, 143, 0.4);
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(25, 25, 25);
  border-color: rgb(161, 249, 143);
  border-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(161, 249, 143);
  border-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body p {
  color: rgb(184, 184, 184);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration-color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(161, 249, 143);
  outline: rgb(161, 249, 143) none 0px;
  text-decoration: rgb(161, 249, 143);
  text-decoration-color: rgb(161, 249, 143);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body dt {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgba(231, 143, 249, 0.03);
  font-style: italic;
  padding-bottom: 17.9136px;
  padding-top: 17.9136px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body table {
  color: rgb(209, 209, 209);
  width: 215px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(147, 147, 147);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-width: 0px;
  border-left-color: rgb(209, 209, 209);
  border-left-width: 0px;
  border-right-color: rgb(209, 209, 209);
  border-right-width: 0px;
  border-top-color: rgb(209, 209, 209);
  border-top-width: 0px;
  color: rgb(209, 209, 209);
  padding-bottom: 14px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
  text-align: center;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(25, 25, 25);
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 143, 249);
  border-left-color: rgb(231, 143, 249);
  border-right-color: rgb(231, 143, 249);
  border-top-color: rgb(231, 143, 249);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(161, 249, 143);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(20, 20, 20);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(161, 249, 143);
  border-left-color: rgb(161, 249, 143);
  border-right-color: rgb(161, 249, 143);
  border-top-color: rgb(161, 249, 143);
  color: rgb(161, 249, 143);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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

html[saved-theme="dark"] body .callout[data-callout="primary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="secondary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 19, 19);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(161, 249, 143, 0.1);
  border-bottom-color: rgba(161, 249, 144, 0.15);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgba(161, 249, 144, 0.15);
  border-right-color: rgba(161, 249, 144, 0.15);
  border-top-color: rgba(161, 249, 144, 0.15);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(161, 249, 143);
}

html[saved-theme="dark"] body h1 {
  color: rgb(209, 209, 209);
  font-family: "JetBrains Mono", "SF Mono", monospace;
}

html[saved-theme="dark"] body h2 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h4 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h5 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h6 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(20, 20, 20) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(20, 20, 20);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 184, 184);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(209, 209, 209);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(184, 184, 184);
  stroke: rgb(184, 184, 184);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(161, 249, 143);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(19, 19, 19);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body abbr {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(20, 20, 20);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sub {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body summary {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sup {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(161, 249, 144, 0.1);
  border-bottom-color: rgba(161, 249, 144, 0.15);
  border-left-color: rgba(161, 249, 144, 0.15);
  border-right-color: rgba(161, 249, 144, 0.15);
  border-top-color: rgba(161, 249, 144, 0.15);
  color: rgb(161, 249, 143);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 134 !important;
  --accent-l: 41% !important;
  --accent-s: 68% !important;
  --background-modifier-active-hover: hsla(134, 68%, 41%, 0.1) !important;
  --background-modifier-border: #f6f6f6 !important;
  --background-modifier-form-field: #f6f6f6 !important;
  --background-modifier-form-field-hover: #f6f6f6 !important;
  --background-primary: #f6f6f6 !important;
  --background-primary-alt: #f0f0f0 !important;
  --background-secondary: #f4f2f2 !important;
  --background-secondary-alt: #f6f6f6 !important;
  --background-table: #f8f8f8 !important;
  --background-table-hover: #fafafa !important;
  --background-titlebar: #f0f0f0 !important;
  --bases-cards-background: #f6f6f6 !important;
  --bases-cards-cover-background: #f0f0f0 !important;
  --bases-cards-shadow: 0 0 0 1px #f6f6f6 !important;
  --bases-embed-border-color: #f6f6f6 !important;
  --bases-group-heading-property-color: #444444 !important;
  --bases-table-border-color: #f6f6f6 !important;
  --bases-table-cell-background-active: #f6f6f6 !important;
  --bases-table-cell-background-disabled: #f0f0f0 !important;
  --bases-table-cell-background-selected: hsla(134, 68%, 41%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #21b043 !important;
  --bases-table-group-background: #f0f0f0 !important;
  --bases-table-header-background: #f6f6f6 !important;
  --bases-table-header-color: #444444 !important;
  --bases-table-summary-background: #f6f6f6 !important;
  --blockquote-border-color: #21b043 !important;
  --blur-background: color-mix(in srgb, #f6f6f6 65%, transparent) linear-gradient(#f6f6f6, color-mix(in srgb, #f6f6f6 65%, transparent)) !important;
  --bold-color: #21b043 !important;
  --canvas-background: #f6f6f6 !important;
  --canvas-card-label-color: #21b043 !important;
  --canvas-color-1: 120, 246, 95 !important;
  --canvas-color-2: 161, 249, 143 !important;
  --canvas-color-3: 202, 252, 191 !important;
  --canvas-color-4: 221, 95, 246 !important;
  --canvas-color-5: 231, 143, 249 !important;
  --canvas-color-6: 241, 191, 252 !important;
  --caret-color: #141414 !important;
  --checkbox-border-color: #21b043 !important;
  --checkbox-border-color-hover: #21b043 !important;
  --checkbox-color: #21b043 !important;
  --checkbox-color-hover: #21b043 !important;
  --checkbox-marker-color: #f6f6f6 !important;
  --checkbox-radius: 50% !important;
  --checklist-done-color: none !important;
  --checklist-done-decoration: none !important;
  --code-background: #141414 !important;
  --code-border-color: #f6f6f6 !important;
  --code-comment: #4a4a4a !important;
  --code-function: #e78ff9 !important;
  --code-important: #cb4b16 !important;
  --code-keyword: #a1f98f !important;
  --code-normal: #dadada !important;
  --code-operator: #dadada !important;
  --code-property: #a1f98f !important;
  --code-punctuation: #f8f8f2 !important;
  --code-size: 13px !important;
  --code-string: #f9e78f !important;
  --code-tag: #a1f98f !important;
  --code-value: #e78ff9 !important;
  --collapse-icon-color: #21b043 !important;
  --collapse-icon-color-collapsed: #21b043 !important;
  --color-accent: #21b043 !important;
  --color-accent-1: hsl(133, 68.68%, 44.075%) !important;
  --color-accent-2: hsl(131, 69.36%, 47.15%) !important;
  --color-accent-hsl: 134, 68%, 41% !important;
  --color-primary: #21b043 !important;
  --color-secondary: #b0218e !important;
  --dark: #141414 !important;
  --darkgray: #141414 !important;
  --divider-color: #f6f6f6 !important;
  --divider-color-hover: #21b043 !important;
  --dropdown-background: #21b043 !important;
  --dropdown-background-hover: #21b043 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f6f6f6, inset 0 0 0 1px #f6f6f6 !important;
  --embed-border-start: 2px solid #21b043 !important;
  --file-header-background: #f6f6f6 !important;
  --file-header-background-focused: #f6f6f6 !important;
  --flair-background: #21b043 !important;
  --flair-color: #141414 !important;
  --font-heading: 'JetBrains Mono', 'SF Mono', monospace !important;
  --footnote-divider-color: #f6f6f6 !important;
  --footnote-id-color: #444444 !important;
  --footnote-id-color-no-occurrences: #21b043 !important;
  --graph-node: #444444 !important;
  --graph-node-focused: #21b043 !important;
  --graph-node-unresolved: #21b043 !important;
  --graph-text: #141414 !important;
  --gray: #444444 !important;
  --h1-size: 28px !important;
  --h2-size: 24px !important;
  --h3-size: 20px !important;
  --h4-size: 16px !important;
  --h5-size: 16px !important;
  --h6-size: 14px !important;
  --heading-formatting: #21b043 !important;
  --highlight: rgba(34, 176, 67, 0.4) !important;
  --hr-color: #f6f6f6 !important;
  --hsl-primary: 134, 68%, 41% !important;
  --hsl-secondary: 314, 68%, 41% !important;
  --icon-color: #444444 !important;
  --icon-color-active: #21b043 !important;
  --icon-color-focused: #141414 !important;
  --icon-color-hover: #444444 !important;
  --inline-title-size: 28px !important;
  --input-date-separator: #21b043 !important;
  --input-placeholder-color: #21b043 !important;
  --interactive-accent: #21b043 !important;
  --interactive-accent-hover: #21b043 !important;
  --interactive-accent-hsl: 134, 68%, 41% !important;
  --interactive-accent-rgb: #21b043 !important;
  --interactive-hover: #21b043 !important;
  --interactive-normal: #21b043 !important;
  --interactive-secondary-accent: #b0218e !important;
  --interactive-secondary-accent-hover: #b0218e !important;
  --interactive-secondary-accent-rgb: #b0218e !important;
  --interactive-secondary-hover: #b0218e !important;
  --interactive-secondary-normal: #b0218e !important;
  --interactive-secondary-success: #b0218e !important;
  --interactive-success: #21b043 !important;
  --italic-color: #b0218e !important;
  --light: #f6f6f6 !important;
  --lightgray: #f4f2f2 !important;
  --link-color: #21b043 !important;
  --link-color-hover: #21b043 !important;
  --link-decoration: none !important;
  --link-external-color: #21b043 !important;
  --link-external-color-hover: #21b043 !important;
  --link-unresolved-color: #21b043 !important;
  --link-unresolved-decoration-color: #21b043 !important;
  --link-unresolved-decoration-style: underline !important;
  --link-unresolved-opacity: 0.6 !important;
  --link-weight: none !important;
  --list-marker-color: #21b043 !important;
  --list-marker-color-collapsed: #21b043 !important;
  --list-marker-color-hover: #444444 !important;
  --menu-background: #f4f2f2 !important;
  --metadata-border-color: #f6f6f6 !important;
  --metadata-divider-color: #f6f6f6 !important;
  --metadata-input-font-size: 12px !important;
  --metadata-input-text-color: #141414 !important;
  --metadata-label-font-size: 12px !important;
  --metadata-label-text-color: #444444 !important;
  --metadata-label-text-color-hover: #444444 !important;
  --modal-background: #f6f6f6 !important;
  --nav-collapse-icon-color: #21b043 !important;
  --nav-collapse-icon-color-collapsed: #21b043 !important;
  --nav-heading-color: #141414 !important;
  --nav-heading-color-collapsed: #21b043 !important;
  --nav-heading-color-collapsed-hover: #444444 !important;
  --nav-heading-color-hover: #141414 !important;
  --nav-item-background-selected: hsla(134, 68%, 41%, 0.15) !important;
  --nav-item-color: #444444 !important;
  --nav-item-color-active: #141414 !important;
  --nav-item-color-highlighted: #21b043 !important;
  --nav-item-color-hover: #141414 !important;
  --nav-item-color-selected: #141414 !important;
  --nav-tag-color: #21b043 !important;
  --nav-tag-color-active: #444444 !important;
  --nav-tag-color-hover: #444444 !important;
  --pdf-background: #f6f6f6 !important;
  --pdf-page-background: #f6f6f6 !important;
  --pdf-sidebar-background: #f6f6f6 !important;
  --pill-border-color: #f6f6f6 !important;
  --pill-color: #444444 !important;
  --pill-color-hover: #141414 !important;
  --pill-color-remove: #21b043 !important;
  --pill-color-remove-hover: #21b043 !important;
  --prompt-background: #f6f6f6 !important;
  --raised-background: color-mix(in srgb, #f6f6f6 65%, transparent) linear-gradient(#f6f6f6, color-mix(in srgb, #f6f6f6 65%, transparent)) !important;
  --red: #b02146 !important;
  --rgb-primary: 34, 176, 67 !important;
  --rgb-secondary: 176, 33, 142 !important;
  --ribbon-background: #f4f2f2 !important;
  --ribbon-background-collapsed: #f6f6f6 !important;
  --scrollbar-active-thumb-bg: rgba(95, 94, 94, 0.3) !important;
  --scrollbar-bg: rgba(95, 94, 94, 0.1) !important;
  --scrollbar-thumb-bg: rgba(95, 94, 94, 0.1) !important;
  --search-clear-button-color: #444444 !important;
  --search-icon-color: #444444 !important;
  --search-result-background: #f6f6f6 !important;
  --secondary: #21b043 !important;
  --setting-group-heading-color: #141414 !important;
  --setting-items-background: #f0f0f0 !important;
  --setting-items-border-color: #f6f6f6 !important;
  --slider-track-background: #f6f6f6 !important;
  --status-bar-background: #f4f2f2 !important;
  --status-bar-border-color: #f6f6f6 !important;
  --status-bar-text-color: #444444 !important;
  --suggestion-background: #f6f6f6 !important;
  --tab-background-active: #f6f6f6 !important;
  --tab-container-background: #f4f2f2 !important;
  --tab-outline-color: #f6f6f6 !important;
  --tab-switcher-background: #f4f2f2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4f2f2, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #21b043 !important;
  --tab-text-color: #444444 !important;
  --tab-text-color-active: #141414 !important;
  --tab-text-color-focused: #444444 !important;
  --tab-text-color-focused-active: #444444 !important;
  --tab-text-color-focused-active-current: #141414 !important;
  --tab-text-color-focused-highlighted: #21b043 !important;
  --table-add-button-border-color: #f6f6f6 !important;
  --table-border-color: #f6f6f6 !important;
  --table-drag-handle-background-active: #21b043 !important;
  --table-drag-handle-color: #21b043 !important;
  --table-drag-handle-color-active: #f6f6f6 !important;
  --table-header-border-color: #f6f6f6 !important;
  --table-header-color: #141414 !important;
  --table-selection: hsla(134, 68%, 41%, 0.1) !important;
  --table-selection-border-color: #21b043 !important;
  --tag-background: hsla(134, 68%, 41%, 0.1) !important;
  --tag-background-hover: hsla(134, 68%, 41%, 0.2) !important;
  --tag-border-color: hsla(134, 68%, 41%, 0.15) !important;
  --tag-border-color-hover: hsla(134, 68%, 41%, 0.15) !important;
  --tag-color: #21b043 !important;
  --tag-color-hover: #21b043 !important;
  --tertiary: #21b043 !important;
  --text-accent: #21b043 !important;
  --text-accent-hover: #21b043 !important;
  --text-error: #CF6679 !important;
  --text-error-hover: #ff2f00 !important;
  --text-faint: #21b043 !important;
  --text-highlight-bg: rgba(34, 176, 67, 0.4) !important;
  --text-highlight-bg-active: #ff2f00 !important;
  --text-muted: #444444 !important;
  --text-muted-rgb: rgb(68, 68, 68) !important;
  --text-normal: #141414 !important;
  --text-normal-light: #444444 !important;
  --text-on-accent: #f6f6f6 !important;
  --text-on-accent-inverted: #141414 !important;
  --text-selection: rgba(34, 176, 67, 0.25) !important;
  --textHighlight: rgba(34, 176, 67, 0.4) !important;
  --titlebar-background: #f0f0f0 !important;
  --titlebar-background-focused: #f0f0f0 !important;
  --titlebar-border-color: #f6f6f6 !important;
  --titlebar-text-color-focused: #141414 !important;
  --transparent-primary: rgba(34, 176, 67, 0.6) !important;
  --transparent-secondary: rgba(176, 33, 142, 0.6) !important;
  --vault-profile-color: #141414 !important;
  --vault-profile-color-hover: #141414 !important;
  --yellow: #8eb021 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 242, 242);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(246, 246, 246);
  border-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(34, 176, 67, 0.1);
  border-radius: 24px;
  color: rgb(33, 176, 67);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 242, 242);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 242, 242);
  border-left-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(176, 33, 142);
  outline: rgb(176, 33, 142) none 0px;
  text-decoration-color: rgb(176, 33, 142);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(176, 33, 142);
  outline: rgb(176, 33, 142) none 0px;
  text-decoration-color: rgb(176, 33, 142);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(34, 176, 67, 0.4);
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body del {
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(240, 240, 240);
  border-color: rgb(33, 176, 67);
  border-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(33, 176, 67);
  border-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body p {
  color: rgb(68, 68, 68);
  outline: rgb(68, 68, 68) none 0px;
  text-decoration-color: rgb(68, 68, 68);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration-color: rgb(33, 176, 67);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(33, 176, 67);
  outline: rgb(33, 176, 67) none 0px;
  text-decoration: rgb(33, 176, 67);
  text-decoration-color: rgb(33, 176, 67);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body dt {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ol > li {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ul > li {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(33, 176, 67);
}

html[saved-theme="light"] body blockquote {
  background-color: rgba(176, 33, 142, 0.03);
  font-style: italic;
  padding-bottom: 17.9136px;
  padding-top: 17.9136px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body table {
  color: rgb(20, 20, 20);
  width: 215px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(248, 248, 248);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(20, 20, 20);
  border-bottom-width: 0px;
  border-left-color: rgb(20, 20, 20);
  border-left-width: 0px;
  border-right-color: rgb(20, 20, 20);
  border-right-width: 0px;
  border-top-color: rgb(20, 20, 20);
  border-top-width: 0px;
  color: rgb(20, 20, 20);
  padding-bottom: 14px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 14px;
  text-align: center;
}

html[saved-theme="light"] body tr {
  background-color: rgb(240, 240, 240);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(231, 143, 249);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(231, 143, 249);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(231, 143, 249);
  border-left-color: rgb(231, 143, 249);
  border-right-color: rgb(231, 143, 249);
  border-top-color: rgb(231, 143, 249);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body figcaption {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(33, 176, 67);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(33, 176, 67);
  border-right-color: rgb(33, 176, 67);
  border-top-color: rgb(33, 176, 67);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(20, 20, 20);
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor'%3E%3Crect x='4' y='9' width='12' height='2' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(246, 246, 246);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(34, 176, 67);
  border-left-color: rgb(34, 176, 67);
  border-right-color: rgb(34, 176, 67);
  border-top-color: rgb(34, 176, 67);
  color: rgb(34, 176, 67);
  gap: 6px;
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(34, 176, 67);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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

html[saved-theme="light"] body .callout[data-callout="primary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="secondary"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
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
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(20, 20, 20);
  outline: rgb(20, 20, 20) none 0px;
  text-decoration-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 242, 242);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 176, 67, 0.1);
  border-bottom-color: rgba(33, 176, 67, 0.15);
  border-bottom-left-radius: 24px;
  border-bottom-right-radius: 24px;
  border-left-color: rgba(33, 176, 67, 0.15);
  border-right-color: rgba(33, 176, 67, 0.15);
  border-top-color: rgba(33, 176, 67, 0.15);
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(33, 176, 67);
}

html[saved-theme="light"] body h1 {
  color: rgb(20, 20, 20);
  font-family: "JetBrains Mono", "SF Mono", monospace;
}

html[saved-theme="light"] body h2 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h3 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h4 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h5 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body h6 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 246, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 246, 246);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(68, 68, 68);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(20, 20, 20);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 242, 242);
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(68, 68, 68);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(68, 68, 68);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(68, 68, 68);
  stroke: rgb(68, 68, 68);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(33, 176, 67);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(246, 246, 246);
  border-left-color: rgb(246, 246, 246);
  border-right-color: rgb(246, 246, 246);
  border-top-color: rgb(246, 246, 246);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 242, 242);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body abbr {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(68, 68, 68);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  color: rgb(218, 218, 218);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(20, 20, 20);
  border-right-color: rgb(20, 20, 20);
  border-top-color: rgb(20, 20, 20);
}

html[saved-theme="light"] body sub {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body summary {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body sup {
  color: rgb(20, 20, 20);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(33, 176, 67, 0.1);
  border-bottom-color: rgba(33, 176, 67, 0.15);
  border-left-color: rgba(33, 176, 67, 0.15);
  border-right-color: rgba(33, 176, 67, 0.15);
  border-top-color: rgba(33, 176, 67, 0.15);
  color: rgb(33, 176, 67);
}`,
  },
};
