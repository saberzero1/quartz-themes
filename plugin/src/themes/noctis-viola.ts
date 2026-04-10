import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "noctis-viola",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: #593a78 !important;
  --background-modifier-border: #1c1226 !important;
  --background-modifier-cover: rgba(41, 38, 64, 0.8) !important;
  --background-modifier-error: #e34e1c !important;
  --background-modifier-error-hover: #e97749 !important;
  --background-modifier-form-field: #1c1226 !important;
  --background-modifier-form-field-highlighted: #472e60 !important;
  --background-modifier-form-field-hover: #1c1226 !important;
  --background-modifier-hover: #472e60 !important;
  --background-modifier-success: #16b673 !important;
  --background-primary: #30243d !important;
  --background-primary-alt: #2b2136 !important;
  --background-secondary: #2b2136 !important;
  --background-secondary-alt: #3d2e4d !important;
  --bases-cards-background: #30243d !important;
  --bases-cards-cover-background: #2b2136 !important;
  --bases-cards-shadow: 0 0 0 1px #1c1226 !important;
  --bases-embed-border-color: #1c1226 !important;
  --bases-group-heading-property-color: #b3a5c0 !important;
  --bases-table-border-color: #1c1226 !important;
  --bases-table-cell-background-active: #30243d !important;
  --bases-table-cell-background-disabled: #2b2136 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #bf8ef1 !important;
  --bases-table-group-background: #2b2136 !important;
  --bases-table-header-background: #30243d !important;
  --bases-table-header-background-hover: #472e60 !important;
  --bases-table-header-color: #b3a5c0 !important;
  --bases-table-row-background-hover: rgba(191, 142, 241, 0.2) !important;
  --bases-table-summary-background: #30243d !important;
  --bases-table-summary-background-hover: #472e60 !important;
  --blockquote-border: #8767a8 !important;
  --blockquote-border-color: #bf8ef1 !important;
  --blockquote-color: #b3a5c0 !important;
  --blur-background: color-mix(in srgb, #1c1226 65%, transparent) linear-gradient(#1c1226, color-mix(in srgb, #1c1226 65%, transparent)) !important;
  --canvas-background: #30243d !important;
  --canvas-card-label-color: #665973 !important;
  --caret-color: #ccbfd9 !important;
  --checkbox-border-color: #bf8ef1 !important;
  --checkbox-border-color-hover: #60dbeb !important;
  --checkbox-color: #bf8ef1 !important;
  --checkbox-color-hover: #60dbeb !important;
  --checkbox-marker-color: #30243d !important;
  --checklist-done-color: #b3a5c0 !important;
  --code-background: #2b2136 !important;
  --code-border-color: #1c1226 !important;
  --code-bracket-background: #472e60 !important;
  --code-comment: #665973 !important;
  --code-function: #60dbeb !important;
  --code-important: #e66533 !important;
  --code-keyword: #df769b !important;
  --code-normal: #ccbfd9 !important;
  --code-operator: #ccbfd9 !important;
  --code-property: #e4b781 !important;
  --code-punctuation: #b3a5c0 !important;
  --code-string: #49e9a6 !important;
  --code-tag: #e66533 !important;
  --code-value: #7060eb !important;
  --collapse-icon-color: #665973 !important;
  --collapse-icon-color-collapsed: #bf8ef1 !important;
  --dark: #ccbfd9 !important;
  --darkgray: #ccbfd9 !important;
  --divider-color: #1c1226 !important;
  --divider-color-hover: #bf8ef1 !important;
  --dropdown-background: #1c1226 !important;
  --dropdown-background-hover: #472e60 !important;
  --embed-block-shadow-hover: 0 0 0 1px #1c1226, inset 0 0 0 1px #1c1226 !important;
  --embed-border-start: 2px solid #bf8ef1 !important;
  --file-header-background: #30243d !important;
  --file-header-background-focused: #30243d !important;
  --flair-background: #1c1226 !important;
  --flair-color: #ccbfd9 !important;
  --footnote-divider-color: #1c1226 !important;
  --footnote-id-color: #b3a5c0 !important;
  --footnote-id-color-no-occurrences: #665973 !important;
  --footnote-input-background-active: #472e60 !important;
  --graph-node: #bf8ef1 !important;
  --graph-node-attachment: #e4b781 !important;
  --graph-node-focused: #49e9a6 !important;
  --graph-node-tag: #df769b !important;
  --graph-node-unresolved: #e34e1c !important;
  --graph-text: #ccbfd9 !important;
  --gray: #b3a5c0 !important;
  --h1-color: #bf8ef1 !important;
  --h2-color: #49e9a6 !important;
  --h3-color: #e4b781 !important;
  --h4-color: #49ace9 !important;
  --h5-color: #df769b !important;
  --h6-color: #49d6e9 !important;
  --heading-formatting: #665973 !important;
  --highlight: rgba(153, 142, 241, 0.3) !important;
  --hr-color: #1c1226 !important;
  --icon-color: #b3a5c0 !important;
  --icon-color-active: #bf8ef1 !important;
  --icon-color-focused: #ccbfd9 !important;
  --icon-color-hover: #b3a5c0 !important;
  --inline-title-color: #bf8ef1 !important;
  --input-date-separator: #665973 !important;
  --input-placeholder-color: #665973 !important;
  --interactive-accent: #bf8ef1 !important;
  --interactive-accent-hover: #996bc7 !important;
  --interactive-accent-rgb: 191, 142, 241 !important;
  --interactive-before: #b3a5c0 !important;
  --interactive-hover: #472e60 !important;
  --interactive-normal: #1c1226 !important;
  --interactive-success: #49e9a6 !important;
  --light: #30243d !important;
  --lightgray: #2b2136 !important;
  --link-color: #bf8ef1 !important;
  --link-color-hover: #60dbeb !important;
  --link-external-color: #49ace9 !important;
  --link-external-color-hover: #60b6eb !important;
  --link-unresolved-color: #bf8ef1 !important;
  --list-marker-color: #665973 !important;
  --list-marker-color-collapsed: #bf8ef1 !important;
  --list-marker-color-hover: #b3a5c0 !important;
  --menu-background: #2b2136 !important;
  --metadata-border-color: #1c1226 !important;
  --metadata-divider-color: #1c1226 !important;
  --metadata-input-background-active: #472e60 !important;
  --metadata-input-text-color: #ccbfd9 !important;
  --metadata-label-background-active: #472e60 !important;
  --metadata-label-text-color: #b3a5c0 !important;
  --metadata-label-text-color-hover: #b3a5c0 !important;
  --metadata-property-background-active: #472e60 !important;
  --modal-background: #30243d !important;
  --nav-collapse-icon-color: #665973 !important;
  --nav-collapse-icon-color-collapsed: #665973 !important;
  --nav-heading-color: #ccbfd9 !important;
  --nav-heading-color-collapsed: #665973 !important;
  --nav-heading-color-collapsed-hover: #b3a5c0 !important;
  --nav-heading-color-hover: #ccbfd9 !important;
  --nav-item-background-active: #593a78 !important;
  --nav-item-background-hover: #472e60 !important;
  --nav-item-color: #b3a5c0 !important;
  --nav-item-color-active: #49e9a6 !important;
  --nav-item-color-highlighted: #bf8ef1 !important;
  --nav-item-color-hover: #bf8ef1 !important;
  --nav-item-color-selected: #ccbfd9 !important;
  --nav-tag-color: #665973 !important;
  --nav-tag-color-active: #b3a5c0 !important;
  --nav-tag-color-hover: #b3a5c0 !important;
  --noctis-accent: #bf8ef1 !important;
  --noctis-accent-hover: #996bc7 !important;
  --noctis-activity-foreground: #8767a8 !important;
  --noctis-activity-inactive: #8767a877 !important;
  --noctis-bg: #30243d !important;
  --noctis-bg-active: #593a78 !important;
  --noctis-bg-alt: #1c1226 !important;
  --noctis-bg-hover: #472e60 !important;
  --noctis-bg-line: #402d53ee !important;
  --noctis-bg-secondary: #2b2136 !important;
  --noctis-bg-sidebar: #2b2136 !important;
  --noctis-bg-tertiary: #3d2e4d !important;
  --noctis-blue: #49ace9 !important;
  --noctis-blue-bright: #60b6eb !important;
  --noctis-border: #1c1226 !important;
  --noctis-button-bg: #007f99 !important;
  --noctis-button-hover: #0ac !important;
  --noctis-cursor: #d9b3ff !important;
  --noctis-cyan: #49d6e9 !important;
  --noctis-cyan-bright: #60dbeb !important;
  --noctis-error: #e34e1c !important;
  --noctis-fg: #ccbfd9 !important;
  --noctis-fg-bright: #edebff !important;
  --noctis-fg-faint: #665973 !important;
  --noctis-fg-muted: #b3a5c0 !important;
  --noctis-green: #49e9a6 !important;
  --noctis-green-bright: #60ebb1 !important;
  --noctis-indent-guide: #422e56 !important;
  --noctis-indent-guide-active: #595289 !important;
  --noctis-info: #49ace9 !important;
  --noctis-input-bg: #291d35 !important;
  --noctis-input-border: #402956 !important;
  --noctis-magenta: #7060eb !important;
  --noctis-orange: #d67e5c !important;
  --noctis-panel-border: #8767a8 !important;
  --noctis-purple: #df769b !important;
  --noctis-purple-bright: #e798b3 !important;
  --noctis-red: #e66533 !important;
  --noctis-red-bright: #e97749 !important;
  --noctis-selection: #8767a855 !important;
  --noctis-success: #16b673 !important;
  --noctis-warning: #e69533 !important;
  --noctis-widget-bg: #3d2e4d !important;
  --noctis-widget-border: #1c1226 !important;
  --noctis-yellow: #e4b781 !important;
  --noctis-yellow-bright: #e69533 !important;
  --pdf-background: #30243d !important;
  --pdf-page-background: #30243d !important;
  --pdf-shadow: 0 0 0 1px #1c1226 !important;
  --pdf-sidebar-background: #30243d !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #1c1226 !important;
  --pill-border-color: #1c1226 !important;
  --pill-color: #b3a5c0 !important;
  --pill-color-hover: #ccbfd9 !important;
  --pill-color-remove: #665973 !important;
  --pill-color-remove-hover: #bf8ef1 !important;
  --prompt-background: #30243d !important;
  --raised-background: color-mix(in srgb, #1c1226 65%, transparent) linear-gradient(#1c1226, color-mix(in srgb, #1c1226 65%, transparent)) !important;
  --ribbon-background: #30243d !important;
  --ribbon-background-collapsed: #30243d !important;
  --scrollbar-active-thumb-bg: #a660eb77 !important;
  --scrollbar-bg: #30243d !important;
  --scrollbar-thumb-bg: #a660eb33 !important;
  --search-clear-button-color: #b3a5c0 !important;
  --search-icon-color: #b3a5c0 !important;
  --search-result-background: #30243d !important;
  --secondary: #bf8ef1 !important;
  --setting-group-heading-color: #ccbfd9 !important;
  --setting-items-background: #2b2136 !important;
  --setting-items-border-color: #1c1226 !important;
  --slider-track-background: #1c1226 !important;
  --status-bar-background: #2b2136 !important;
  --status-bar-border-color: #1c1226 !important;
  --status-bar-text-color: #b3a5c0 !important;
  --suggestion-background: #30243d !important;
  --tab-background-active: #30243d !important;
  --tab-container-background: #2b2136 !important;
  --tab-outline-color: #1c1226 !important;
  --tab-switcher-background: #2b2136 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2b2136, transparent) !important;
  --tab-text-color: #665973 !important;
  --tab-text-color-active: #b3a5c0 !important;
  --tab-text-color-focused: #b3a5c0 !important;
  --tab-text-color-focused-active: #b3a5c0 !important;
  --tab-text-color-focused-active-current: #ccbfd9 !important;
  --tab-text-color-focused-highlighted: #bf8ef1 !important;
  --table-add-button-border-color: #1c1226 !important;
  --table-border-color: #1c1226 !important;
  --table-drag-handle-background-active: #bf8ef1 !important;
  --table-drag-handle-color: #665973 !important;
  --table-drag-handle-color-active: #171523 !important;
  --table-header-background: #2b2136 !important;
  --table-header-border: #1c1226 !important;
  --table-header-border-color: #1c1226 !important;
  --table-header-color: #ccbfd9 !important;
  --table-row-background-hover: rgba(191, 142, 241, 0.2) !important;
  --table-selection-border-color: #bf8ef1 !important;
  --tag-background: rgba(223, 118, 155, 0.15) !important;
  --tag-background-hover: rgba(223, 118, 155, 0.25) !important;
  --tag-color: #df769b !important;
  --tag-color-hover: #bf8ef1 !important;
  --tertiary: #996bc7 !important;
  --text-accent: #bf8ef1 !important;
  --text-accent-hover: #996bc7 !important;
  --text-error: #e34e1c !important;
  --text-error-hover: #e97749 !important;
  --text-faint: #665973 !important;
  --text-highlight-bg: rgba(153, 142, 241, 0.3) !important;
  --text-highlight-bg-active: rgba(153, 142, 241, 0.5) !important;
  --text-muted: #b3a5c0 !important;
  --text-normal: #ccbfd9 !important;
  --text-on-accent: #171523 !important;
  --text-selection: #8767a855 !important;
  --textHighlight: rgba(153, 142, 241, 0.3) !important;
  --titlebar-background: #2b2136 !important;
  --titlebar-background-focused: #2b2136 !important;
  --titlebar-border-color: #1c1226 !important;
  --titlebar-text-color: #b3a5c0 !important;
  --titlebar-text-color-focused: #ccbfd9 !important;
  --vault-profile-color: #ccbfd9 !important;
  --vault-profile-color-hover: #ccbfd9 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(43, 33, 54);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(48, 36, 61);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(43, 33, 54);
  border-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(43, 33, 54);
  border-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(28, 18, 38);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(223, 118, 155, 0.15);
  color: rgb(223, 118, 155);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(43, 33, 54);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(28, 18, 38);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(43, 33, 54);
  border-left-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(48, 36, 61);
  color: rgb(204, 191, 217);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration-color: rgb(228, 183, 129);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration-color: rgb(214, 126, 92);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(214, 126, 92);
  outline: rgb(214, 126, 92) none 0px;
  text-decoration-color: rgb(214, 126, 92);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(228, 183, 129);
  font-weight: 700;
  outline: rgb(228, 183, 129) none 0px;
  text-decoration-color: rgb(228, 183, 129);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(153, 142, 241, 0.3);
  color: rgb(204, 191, 217);
  outline: rgb(204, 191, 217) none 0px;
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body del {
  color: rgb(204, 191, 217);
  outline: rgb(204, 191, 217) none 0px;
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(191, 142, 241);
  border-color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body p {
  color: rgb(179, 165, 192);
  outline: rgb(179, 165, 192) none 0px;
  text-decoration-color: rgb(179, 165, 192);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(73, 172, 233);
  outline: rgb(73, 172, 233) none 0px;
  text-decoration-color: rgb(73, 172, 233);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(191, 142, 241);
  outline: rgb(191, 142, 241) none 0px;
  text-decoration-color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(191, 142, 241);
  outline: rgb(191, 142, 241) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body dt {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(102, 89, 115);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body table {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body th {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(43, 33, 54);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(96, 219, 235);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(96, 219, 235);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(96, 219, 235);
  border-left-color: rgb(96, 219, 235);
  border-right-color: rgb(96, 219, 235);
  border-top-color: rgb(96, 219, 235);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(191, 142, 241);
  border-left-color: rgb(191, 142, 241);
  border-right-color: rgb(191, 142, 241);
  border-top-color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(191, 142, 241);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(191, 142, 241);
  border-left-color: rgb(191, 142, 241);
  border-right-color: rgb(191, 142, 241);
  border-top-color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(204, 191, 217);
  text-decoration-color: rgb(204, 191, 217);
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
  background-color: rgb(41, 29, 53);
  border-bottom-color: rgb(64, 41, 86);
  border-left-color: rgb(64, 41, 86);
  border-right-color: rgb(64, 41, 86);
  border-top-color: rgb(64, 41, 86);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 18, 38);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(204, 191, 217);
  outline: rgb(204, 191, 217) none 0px;
  text-decoration-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(237, 235, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(237, 235, 255);
  border-left-color: rgb(237, 235, 255);
  border-right-color: rgb(237, 235, 255);
  border-top-color: rgb(237, 235, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(237, 235, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(89, 58, 120);
  color: rgb(237, 235, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(41, 29, 53);
  border-bottom-color: rgb(64, 41, 86);
  border-left-color: rgb(64, 41, 86);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(64, 41, 86);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(64, 41, 86);
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(89, 58, 120);
  border-bottom-color: rgb(237, 235, 255);
  border-left-color: rgb(237, 235, 255);
  border-right-color: rgb(237, 235, 255);
  border-top-color: rgb(237, 235, 255);
  color: rgb(237, 235, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(89, 58, 120);
  color: rgb(237, 235, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(223, 118, 155, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(223, 118, 155);
}

html[saved-theme="dark"] body h1 {
  color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body h2 {
  color: rgb(73, 233, 166);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(191, 142, 241);
}

html[saved-theme="dark"] body h3 {
  color: rgb(228, 183, 129);
}

html[saved-theme="dark"] body h4 {
  color: rgb(73, 172, 233);
}

html[saved-theme="dark"] body h5 {
  color: rgb(223, 118, 155);
}

html[saved-theme="dark"] body h6 {
  color: rgb(73, 214, 233);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(48, 36, 61) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 36, 61);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(179, 165, 192);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(204, 191, 217);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(135, 103, 168);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(135, 103, 168);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(179, 165, 192);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(179, 165, 192);
  stroke: rgb(179, 165, 192);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(102, 89, 115);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(28, 18, 38);
  border-left-color: rgb(28, 18, 38);
  border-right-color: rgb(28, 18, 38);
  border-top-color: rgb(28, 18, 38);
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(179, 165, 192);
  border-left-color: rgb(179, 165, 192);
  border-right-color: rgb(179, 165, 192);
  border-top-color: rgb(179, 165, 192);
  color: rgb(179, 165, 192);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(43, 33, 54);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body abbr {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(41, 29, 53);
  border-bottom-color: rgb(64, 41, 86);
  border-bottom-width: 1px;
  border-left-color: rgb(64, 41, 86);
  border-left-width: 1px;
  border-right-color: rgb(64, 41, 86);
  border-right-width: 1px;
  border-top-color: rgb(64, 41, 86);
  border-top-width: 1px;
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(43, 33, 54);
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(204, 191, 217);
  border-left-color: rgb(204, 191, 217);
  border-right-color: rgb(204, 191, 217);
  border-top-color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body sub {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body summary {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body sup {
  color: rgb(204, 191, 217);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(223, 118, 155, 0.15);
  color: rgb(223, 118, 155);
}`,
  },
  light: {
    base: `:root:root {
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-weight: 700;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-weight: 700;
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
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
  border-left-color: rgb(34, 34, 34);
  border-left-width: 0px;
  border-right-color: rgb(34, 34, 34);
  border-right-width: 0px;
  border-top-color: rgb(34, 34, 34);
  border-top-width: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-bottom-width: 0px;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    footer: `html[saved-theme="light"] body footer {
  color: rgb(34, 34, 34);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(34, 34, 34);
}`,
    misc: `html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}`,
  },
};
