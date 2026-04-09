import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "base16-default-dark",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #383838 !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: rgba(24, 24, 24, 0.8) !important;
  --background-modifier-error: #ab4642 !important;
  --background-modifier-error-hover: #ab4642 !important;
  --background-modifier-error-rgb: 171, 70, 66 !important;
  --background-modifier-form-field: #181818 !important;
  --background-modifier-form-field-highlighted: #181818 !important;
  --background-modifier-form-field-hover: #181818 !important;
  --background-modifier-success: #a1b56c !important;
  --background-primary: #181818 !important;
  --background-primary-alt: #181818 !important;
  --background-secondary: #181818 !important;
  --background-secondary-alt: #181818 !important;
  --bases-cards-background: #181818 !important;
  --bases-cards-cover-background: #181818 !important;
  --bases-cards-shadow: 0 0 0 1px #383838 !important;
  --bases-charts-accent: #7cafc2 !important;
  --bases-embed-border-color: #383838 !important;
  --bases-group-heading-property-color: #b8b8b8 !important;
  --bases-table-border-color: #383838 !important;
  --bases-table-cell-background-active: #181818 !important;
  --bases-table-cell-background-disabled: #181818 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7cafc2 !important;
  --bases-table-group-background: #181818 !important;
  --bases-table-header-background: #181818 !important;
  --bases-table-header-color: #b8b8b8 !important;
  --bases-table-summary-background: #181818 !important;
  --blockquote-border-color: #7cafc2 !important;
  --blur-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)) !important;
  --bold-color: #ab4642 !important;
  --bullet-new-color: rgb(72, 72, 72) !important;
  --canvas-background: #181818 !important;
  --canvas-card-label-color: #585858 !important;
  --caret-color: #d8d8d8 !important;
  --checkbox-border-color: #585858 !important;
  --checkbox-border-color-hover: #b8b8b8 !important;
  --checkbox-color: #7cafc2 !important;
  --checkbox-color-hover: #86c1b9 !important;
  --checkbox-marker-color: #181818 !important;
  --checklist-done-color: #b8b8b8 !important;
  --code-background: #202020 !important;
  --code-border-color: #383838 !important;
  --code-comment: #585858 !important;
  --code-function: #7cafc2 !important;
  --code-important: #f7ca88 !important;
  --code-keyword: #ba8baf !important;
  --code-normal: #d8d8d8 !important;
  --code-operator: #86c1b9 !important;
  --code-property: #f7ca88 !important;
  --code-punctuation: #d8d8d8 !important;
  --code-string: #a1b56c !important;
  --code-tag: #ab4642 !important;
  --code-value: #f7ca88 !important;
  --collapse-icon-color: #585858 !important;
  --collapse-icon-color-collapsed: #7cafc2 !important;
  --color-blue: #7cafc2 !important;
  --color-cyan: #86c1b9 !important;
  --color-green: #a1b56c !important;
  --color-orange: #dc9656 !important;
  --color-pink: #ba8baf !important;
  --color-purple: #ba8baf !important;
  --color-red: #ab4642 !important;
  --color-yellow: #f7ca88 !important;
  --dark: #d8d8d8 !important;
  --darkgray: #d8d8d8 !important;
  --divider-color: #383838 !important;
  --divider-color-hover: #484848 !important;
  --dropdown-background: #282828 !important;
  --dropdown-background-hover: #383838 !important;
  --embed-block-shadow-hover: 0 0 0 1px #383838, inset 0 0 0 1px #383838 !important;
  --embed-border-start: 2px solid #7cafc2 !important;
  --file-header-background: #181818 !important;
  --file-header-background-focused: #181818 !important;
  --flair-background: #282828 !important;
  --flair-color: #d8d8d8 !important;
  --footnote-divider-color: #383838 !important;
  --footnote-id-color: #b8b8b8 !important;
  --footnote-id-color-no-occurrences: #585858 !important;
  --graph-line: #383838 !important;
  --graph-node: #7cafc2 !important;
  --graph-node-attachment: #f7ca88 !important;
  --graph-node-focused: #7cafc2 !important;
  --graph-node-tag: #a1b56c !important;
  --graph-node-unresolved: #585858 !important;
  --graph-text: #d8d8d8 !important;
  --gray: #b8b8b8 !important;
  --heading-color: #d8d8d8 !important;
  --heading-formatting: #585858 !important;
  --hr-color: #383838 !important;
  --icon-color: #b8b8b8 !important;
  --icon-color-active: #7cafc2 !important;
  --icon-color-focused: #d8d8d8 !important;
  --icon-color-hover: #b8b8b8 !important;
  --inline-code-color: #dc9656 !important;
  --inline-title-color: #d8d8d8 !important;
  --input-date-separator: #585858 !important;
  --input-placeholder-color: #585858 !important;
  --interactive-accent: #7cafc2 !important;
  --interactive-accent-hover: #86c1b9 !important;
  --interactive-accent-rgb: 124, 175, 194 !important;
  --interactive-hover: #383838 !important;
  --interactive-normal: #282828 !important;
  --interactive-success: #a1b56c !important;
  --italic-color: #a1b56c !important;
  --light: #181818 !important;
  --lightgray: #181818 !important;
  --link-color: #7cafc2 !important;
  --link-color-hover: #86c1b9 !important;
  --link-external-color: #ba8baf !important;
  --link-external-color-hover: #86c1b9 !important;
  --link-internal-color: #7cafc2 !important;
  --link-internal-hover: #86c1b9 !important;
  --link-unresolved-color: #888888 !important;
  --list-indent: 1.6em !important;
  --list-marker-color: #585858 !important;
  --list-marker-color-collapsed: #7cafc2 !important;
  --list-marker-color-hover: #b8b8b8 !important;
  --menu-background: #181818 !important;
  --metadata-border-color: #383838 !important;
  --metadata-divider-color: #383838 !important;
  --metadata-gap: 0 !important;
  --metadata-input-text-color: #d8d8d8 !important;
  --metadata-label-text-color: #b8b8b8 !important;
  --metadata-label-text-color-hover: #b8b8b8 !important;
  --metadata-label-width: 5em !important;
  --metadata-padding: 0 !important;
  --modal-background: #181818 !important;
  --nav-collapse-icon-color: #585858 !important;
  --nav-collapse-icon-color-collapsed: #585858 !important;
  --nav-heading-color: #d8d8d8 !important;
  --nav-heading-color-collapsed: #585858 !important;
  --nav-heading-color-collapsed-hover: #b8b8b8 !important;
  --nav-heading-color-hover: #d8d8d8 !important;
  --nav-item-color: #b8b8b8 !important;
  --nav-item-color-active: #d8d8d8 !important;
  --nav-item-color-highlighted: #7cafc2 !important;
  --nav-item-color-hover: #d8d8d8 !important;
  --nav-item-color-selected: #d8d8d8 !important;
  --nav-tag-color: #585858 !important;
  --nav-tag-color-active: #b8b8b8 !important;
  --nav-tag-color-hover: #b8b8b8 !important;
  --pdf-background: #181818 !important;
  --pdf-page-background: #181818 !important;
  --pdf-shadow: 0 0 0 1px #383838 !important;
  --pdf-sidebar-background: #181818 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838 !important;
  --pill-border-color: #383838 !important;
  --pill-color: #b8b8b8 !important;
  --pill-color-hover: #d8d8d8 !important;
  --pill-color-remove: #585858 !important;
  --pill-color-remove-hover: #7cafc2 !important;
  --popover-width: 600px !important;
  --prompt-background: #181818 !important;
  --prompt-border-color: #383838 !important;
  --raised-background: color-mix(in srgb, #282828 65%, transparent) linear-gradient(#282828, color-mix(in srgb, #282828 65%, transparent)) !important;
  --ribbon-background: #202020 !important;
  --ribbon-background-collapsed: #181818 !important;
  --scrollbar-active-thumb-bg: #484848 !important;
  --scrollbar-bg: #181818 !important;
  --scrollbar-thumb-bg: #383838 !important;
  --search-clear-button-color: #b8b8b8 !important;
  --search-icon-color: #b8b8b8 !important;
  --search-result-background: #181818 !important;
  --secondary: #7cafc2 !important;
  --setting-group-heading-color: #d8d8d8 !important;
  --setting-items-background: #181818 !important;
  --setting-items-border-color: #383838 !important;
  --slider-track-background: #383838 !important;
  --status-bar-background: #181818 !important;
  --status-bar-border-color: #383838 !important;
  --status-bar-text-color: #b8b8b8 !important;
  --suggestion-background: #181818 !important;
  --sync-avatar-color-1: #ab4642 !important;
  --sync-avatar-color-2: #dc9656 !important;
  --sync-avatar-color-3: #f7ca88 !important;
  --sync-avatar-color-4: #a1b56c !important;
  --sync-avatar-color-5: #86c1b9 !important;
  --sync-avatar-color-6: #7cafc2 !important;
  --sync-avatar-color-7: #ba8baf !important;
  --sync-avatar-color-8: #ba8baf !important;
  --tab-background-active: #282828 !important;
  --tab-container-background: #181818 !important;
  --tab-outline-color: #383838 !important;
  --tab-switcher-background: #181818 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent) !important;
  --tab-text-color: #b8b8b8 !important;
  --tab-text-color-active: #d8d8d8 !important;
  --tab-text-color-focused: #d8d8d8 !important;
  --tab-text-color-focused-active: #b8b8b8 !important;
  --tab-text-color-focused-active-current: #d8d8d8 !important;
  --tab-text-color-focused-highlighted: #7cafc2 !important;
  --table-add-button-border-color: #383838 !important;
  --table-border-color: #383838 !important;
  --table-drag-handle-background-active: #7cafc2 !important;
  --table-drag-handle-color: #585858 !important;
  --table-drag-handle-color-active: #181818 !important;
  --table-header-border-color: #383838 !important;
  --table-header-color: #d8d8d8 !important;
  --table-row-even-background: transparent !important;
  --table-row-odd-background: transparent !important;
  --table-selection-border-color: #7cafc2 !important;
  --tag-background: rgba(124, 175, 194, 0.05) !important;
  --tag-color: #7cafc2 !important;
  --tag-color-hover: #7cafc2 !important;
  --tertiary: #86c1b9 !important;
  --text-accent: #7cafc2 !important;
  --text-accent-hover: #86c1b9 !important;
  --text-error: #ab4642 !important;
  --text-faint: #585858 !important;
  --text-muted: #b8b8b8 !important;
  --text-normal: #d8d8d8 !important;
  --text-on-accent: #181818 !important;
  --text-selection: rgba(124, 175, 194, 0.3) !important;
  --text-success: #a1b56c !important;
  --text-warning: #dc9656 !important;
  --titlebar-background: #181818 !important;
  --titlebar-background-focused: #181818 !important;
  --titlebar-border-color: #383838 !important;
  --titlebar-text-color: #b8b8b8 !important;
  --titlebar-text-color-focused: #d8d8d8 !important;
  --toggle-border-color: #383838 !important;
  --toggle-thumb-color: #d8d8d8 !important;
  --vault-profile-color: #d8d8d8 !important;
  --vault-profile-color-hover: #d8d8d8 !important;
  --vim-cursor: #7cafc2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 56, 56) rgb(56, 56, 56) rgb(72, 72, 72);
  color: rgb(216, 216, 216);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 24, 24);
  border-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(124, 175, 194, 0.05);
  color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(24, 24, 24);
  color: rgb(216, 216, 216);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(171, 70, 66);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(161, 181, 108);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(161, 181, 108);
  outline: rgb(161, 181, 108) none 0px;
  text-decoration-color: rgb(161, 181, 108);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(171, 70, 66);
  outline: rgb(171, 70, 66) none 0px;
  text-decoration-color: rgb(171, 70, 66);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(210, 185, 60, 0.25);
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body del {
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(88, 88, 88);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(124, 175, 194);
  border-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body p {
  color: rgb(184, 184, 184);
  outline: rgb(184, 184, 184) none 0px;
  text-decoration-color: rgb(184, 184, 184);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(186, 139, 175);
  outline: rgb(186, 139, 175) none 0px;
  text-decoration-color: rgb(186, 139, 175);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(124, 175, 194);
  outline: rgb(124, 175, 194) none 0px;
  text-decoration-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration-color: rgb(136, 136, 136);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body dt {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body blockquote {
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(64, 64, 64);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 64, 64);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 64, 64);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
  margin-left: 223.562px;
  margin-right: 223.578px;
  width: 240.859px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(216, 216, 216);
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(72, 72, 72);
  border-bottom-width: 2px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
  font-weight: 700;
  padding-bottom: 6px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 6px;
  text-align: left;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(124, 175, 194);
  border-left-color: rgb(124, 175, 194);
  border-right-color: rgb(124, 175, 194);
  border-top-color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(40, 40, 40);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 1px;
  border-left-color: rgb(40, 40, 40);
  border-left-width: 1px;
  border-right-color: rgb(40, 40, 40);
  border-right-width: 1px;
  border-top-color: rgb(40, 40, 40);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 1px;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-left-width: 0px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(88, 88, 88);
  border-left-color: rgb(88, 88, 88);
  border-right-color: rgb(88, 88, 88);
  border-top-color: rgb(88, 88, 88);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(216, 216, 216);
  text-decoration-color: rgb(216, 216, 216);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgb(232, 232, 232);
  border-left-color: rgb(232, 232, 232);
  border-right-color: rgb(232, 232, 232);
  border-top-color: rgb(232, 232, 232);
  color: rgb(232, 232, 232);
  gap: 8px;
  padding-bottom: 4px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 4px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(232, 232, 232);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(24, 24, 24);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="ai"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8V4H8'/%3E%3Crect width='16' height='12' x='4' y='8' rx='2'/%3E%3Cpath d='M2 14h2'/%3E%3Cpath d='M20 14h2'/%3E%3Cpath d='M15 13v2'/%3E%3Cpath d='M9 13v2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bot"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 8V4H8'/%3E%3Crect width='16' height='12' x='4' y='8' rx='2'/%3E%3Cpath d='M2 14h2'/%3E%3Cpath d='M20 14h2'/%3E%3Cpath d='M15 13v2'/%3E%3Cpath d='M9 13v2'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m16 18 6-6-6-6'/%3E%3Cpath d='m8 6-6 6 6 6'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="contacts"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2'/%3E%3Cpath d='M16 3.128a4 4 0 0 1 0 7.744'/%3E%3Cpath d='M22 21v-2a4 4 0 0 0-3-3.87'/%3E%3Ccircle cx='9' cy='7' r='4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="documentation"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M19 17V5a2 2 0 0 0-2-2H4'/%3E%3Cpath d='M8 21h12a2 2 0 0 0 2-2v-1a1 1 0 0 0-1-1H11a1 1 0 0 0-1 1v1a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v2a1 1 0 0 0 1 1h3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5'/%3E%3Cpath d='M9 18h6'/%3E%3Cpath d='M10 22h4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="img"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="link"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71'/%3E%3Cpath d='M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="mind"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 18V5'/%3E%3Cpath d='M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4'/%3E%3Cpath d='M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5'/%3E%3Cpath d='M17.997 5.125a4 4 0 0 1 2.526 5.77'/%3E%3Cpath d='M18 18a4 4 0 0 0 2-7.464'/%3E%3Cpath d='M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517'/%3E%3Cpath d='M6 18a4 4 0 0 1-2-7.464'/%3E%3Cpath d='M6.003 5.125a4 4 0 0 0-2.526 5.77'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="mindmap"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 18V5'/%3E%3Cpath d='M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4'/%3E%3Cpath d='M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5'/%3E%3Cpath d='M17.997 5.125a4 4 0 0 1 2.526 5.77'/%3E%3Cpath d='M18 18a4 4 0 0 0 2-7.464'/%3E%3Cpath d='M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517'/%3E%3Cpath d='M6 18a4 4 0 0 1-2-7.464'/%3E%3Cpath d='M6.003 5.125a4 4 0 0 0-2.526 5.77'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="my"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M10.5 3 8 9l4 13 4-13-2.5-6'/%3E%3Cpath d='M17 3a2 2 0 0 1 1.6.8l3 4a2 2 0 0 1 .013 2.382l-7.99 10.986a2 2 0 0 1-3.247 0l-7.99-10.986A2 2 0 0 1 2.4 7.8l2.998-3.997A2 2 0 0 1 7 3z'/%3E%3Cpath d='M2 9h20'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="picture"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='18' height='18' x='3' y='3' rx='2' ry='2'/%3E%3Ccircle cx='9' cy='9' r='2'/%3E%3Cpath d='m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M13 12h8'/%3E%3Cpath d='M13 19h8'/%3E%3Cpath d='M3 10a2 2 0 0 0 2 2h3'/%3E%3Cpath d='M3 5v12a2 2 0 0 0 2 2h3'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(216, 216, 216);
  outline: rgb(216, 216, 216) none 0px;
  text-decoration-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(124, 175, 194, 0.05);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(124, 175, 194);
}

html[saved-theme="dark"] body h1 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h2 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h3 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h4 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h5 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body h6 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(216, 216, 216);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 4px;
  padding-left: 12px;
  padding-top: 4px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(184, 184, 184);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(216, 216, 216);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(184, 184, 184);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(184, 184, 184);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
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
  color: rgb(88, 88, 88);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(184, 184, 184);
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
  margin-top: 3px;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body abbr {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(184, 184, 184);
  border-left-color: rgb(184, 184, 184);
  border-right-color: rgb(184, 184, 184);
  border-top-color: rgb(184, 184, 184);
  color: rgb(184, 184, 184);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(32, 32, 32);
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(216, 216, 216);
  border-left-color: rgb(216, 216, 216);
  border-right-color: rgb(216, 216, 216);
  border-top-color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body sub {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body summary {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body sup {
  color: rgb(216, 216, 216);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(124, 175, 194, 0.05);
  color: rgb(124, 175, 194);
}`,
  },
  light: {
    base: `:root:root {
  --bullet-new-color: rgb(72, 72, 72) !important;
  --metadata-gap: 0 !important;
  --metadata-label-width: 5em !important;
  --metadata-padding: 0 !important;
  --popover-width: 600px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .text-highlight {
  background-color: rgba(210, 185, 60, 0.25);
}`,
    links: `html[saved-theme="light"] body a.internal.broken {
  text-decoration-color: rgb(138, 92, 245);
}`,
    tables: `html[saved-theme="light"] body table {
  margin-left: 231.391px;
  margin-right: 231.391px;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(255, 255, 255);
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

html[saved-theme="light"] body .callout[data-callout="ai"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bot"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="code"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="contacts"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="documentation"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="idea"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="image"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="img"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="link"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="mind"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="mindmap"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="my"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="picture"] {
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

html[saved-theme="light"] body .callout[data-callout="toc"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  margin-bottom: 24px;
  padding-bottom: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body .metadata-properties {
  margin-top: 3px;
}`,
  },
};
