import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "penumbra",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 33 !important;
  --accent-l: 96% !important;
  --accent-s: 100% !important;
  --background-accent: #BEBEBE !important;
  --background-modifier-active-hover: hsla(33, 100%, 96%, 0.1) !important;
  --background-modifier-border: #636363 !important;
  --background-modifier-border-focus: #FFFDFB !important;
  --background-modifier-border-hover: #FFFDFB !important;
  --background-modifier-box-shadow: #636363 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error-rgb: #fb464c !important;
  --background-modifier-form-field: #F2E6D4 !important;
  --background-modifier-form-field-highlighted: #636363 !important;
  --background-modifier-form-field-hover: #F2E6D4 !important;
  --background-modifier-hover: hsla(33, 65%, 96%, 0.06) !important;
  --background-modifier-message: #24272B !important;
  --background-modifier-success-rgb: #44cf6e !important;
  --background-primary: #303338 !important;
  --background-primary-alt: #303338 !important;
  --background-secondary: #24272B !important;
  --background-secondary-alt: #24272B !important;
  --bases-cards-background: #303338 !important;
  --bases-cards-cover-background: #303338 !important;
  --bases-cards-shadow: 0 0 0 1px #636363 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #FFFDFB !important;
  --bases-embed-border-color: #636363 !important;
  --bases-group-heading-property-color: #8F8F8F !important;
  --bases-table-border-color: #636363 !important;
  --bases-table-cell-background-active: #303338 !important;
  --bases-table-cell-background-disabled: #303338 !important;
  --bases-table-cell-background-selected: hsla(33, 100%, 96%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #FFFDFB !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3E4044 !important;
  --bases-table-group-background: #303338 !important;
  --bases-table-header-background: #303338 !important;
  --bases-table-header-background-hover: hsla(33, 65%, 96%, 0.06) !important;
  --bases-table-header-color: #8F8F8F !important;
  --bases-table-summary-background: #303338 !important;
  --bases-table-summary-background-hover: hsla(33, 65%, 96%, 0.06) !important;
  --blockquote-background-color: #24272B !important;
  --blockquote-border-color: #3EA57B !important;
  --blockquote-font-style: italic !important;
  --blue: #6E8DD5 !important;
  --blur-background: color-mix(in srgb, #24272B 65%, transparent) linear-gradient(#24272B, color-mix(in srgb, #24272B 65%, transparent)) !important;
  --bold-color: #BEBEBE !important;
  --canvas-background: #303338 !important;
  --canvas-card-label-color: #8F8F8F !important;
  --canvas-color-1: #CA7081 !important;
  --canvas-color-2: #C27D40 !important;
  --canvas-color-3: #92963A !important;
  --canvas-color-4: #3EA57B !important;
  --canvas-color-5: #00A0BA !important;
  --canvas-color-6: #AC78BD !important;
  --caret-color: #8F8F8F !important;
  --checkbox-border-color: #636363 !important;
  --checkbox-border-color-hover: #8F8F8F !important;
  --checkbox-color: #00A0BA !important;
  --checkbox-color-hover: #00A0BA !important;
  --checkbox-marker-color: #303338 !important;
  --checklist-done-color: #636363 !important;
  --code-background: #24272B !important;
  --code-border-color: #636363 !important;
  --code-bracket-background: hsla(33, 65%, 96%, 0.06) !important;
  --code-comment: #636363 !important;
  --code-function: #AC78BD !important;
  --code-important: #CA7081 !important;
  --code-keyword: #AC78BD !important;
  --code-normal: #8F8F8F !important;
  --code-operator: #6E8DD5 !important;
  --code-property: #CA7081 !important;
  --code-punctuation: #3EA57B !important;
  --code-string: #3EA57B !important;
  --code-tag: #AC78BD !important;
  --code-value: #C27D40 !important;
  --collapse-icon-color: #636363 !important;
  --collapse-icon-color-collapsed: #00A0BA !important;
  --color-accent: hsl(33, 100%, 96%) !important;
  --color-accent-1: hsl(30, 102%, 110.4%) !important;
  --color-accent-2: hsl(28, 105%, 123.84%) !important;
  --color-accent-hsl: 33, 100%, 96% !important;
  --cyan: #00A0BA !important;
  --dark: #8F8F8F !important;
  --darkgray: #8F8F8F !important;
  --divider-color: transparent !important;
  --divider-color-hover: #FFFDFB !important;
  --drag-ghost-background: #24272B !important;
  --drag-ghost-text-color: #CA7081 !important;
  --dropdown-background: #24272B !important;
  --dropdown-background-hover: #FFFDFB !important;
  --embed-block-shadow-hover: 0 0 0 1px #636363, inset 0 0 0 1px #636363 !important;
  --embed-border-start: 2px solid #3E4044 !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #303338 !important;
  --file-header-background-focused: #303338 !important;
  --flair-background: #24272B !important;
  --flair-color: #8F8F8F !important;
  --footnote-divider-color: #636363 !important;
  --footnote-id-color: #8F8F8F !important;
  --footnote-id-color-no-occurrences: #636363 !important;
  --footnote-input-background-active: hsla(33, 65%, 96%, 0.06) !important;
  --graph-line: #636363 !important;
  --graph-node: #CA7081 !important;
  --graph-node-focused: #00A0BA !important;
  --graph-node-unresolved: #636363 !important;
  --graph-text: #BEBEBE !important;
  --gray: #8F8F8F !important;
  --gray-1: #8F8F8F !important;
  --gray-2: #636363 !important;
  --green: #3EA57B !important;
  --h1-color: #BEBEBE !important;
  --h2-color: #BEBEBE !important;
  --h3-color: #BEBEBE !important;
  --h4-color: #BEBEBE !important;
  --h5-color: #BEBEBE !important;
  --h6-color: #BEBEBE !important;
  --heading-formatting: #636363 !important;
  --highlight: #F2E6D4 !important;
  --hr-color: #636363 !important;
  --icon-color: #8F8F8F !important;
  --icon-color-active: #00A0BA !important;
  --icon-color-focused: #BEBEBE !important;
  --icon-color-hover: #BEBEBE !important;
  --inline-title-color: #BEBEBE !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #636363 !important;
  --input-placeholder-color: #636363 !important;
  --interactive-accent: #3E4044 !important;
  --interactive-accent-hover: #FFFDFB !important;
  --interactive-accent-hsl: 33, 100%, 96% !important;
  --interactive-hover: #FFFDFB !important;
  --interactive-normal: #24272B !important;
  --light: #303338 !important;
  --lightgray: #24272B !important;
  --link-color: #6E8DD5 !important;
  --link-color-hover: #6E8DD5 !important;
  --link-decoration: none !important;
  --link-external-color: #6E8DD5 !important;
  --link-external-color-hover: #6E8DD5 !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #00A0BA !important;
  --link-unresolved-decoration-color: hsla(33, 100%, 96%, 0.3) !important;
  --list-marker-color: #8F8F8F !important;
  --list-marker-color-collapsed: #00A0BA !important;
  --list-marker-color-hover: #8F8F8F !important;
  --menu-background: #24272B !important;
  --menu-border-color: #FFFDFB !important;
  --metadata-border-color: #636363 !important;
  --metadata-divider-color: #636363 !important;
  --metadata-input-background-active: hsla(33, 65%, 96%, 0.06) !important;
  --metadata-input-text-color: #8F8F8F !important;
  --metadata-label-background-active: hsla(33, 65%, 96%, 0.06) !important;
  --metadata-label-text-color: #8F8F8F !important;
  --metadata-label-text-color-hover: #8F8F8F !important;
  --metadata-property-background-active: #CA7081 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #FFFDFB !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #FFFDFB !important;
  --modal-background: #303338 !important;
  --modal-border-color: #F2E6D4 !important;
  --nav-collapse-icon-color: #BEBEBE !important;
  --nav-collapse-icon-color-collapsed: #636363 !important;
  --nav-heading-color: #8F8F8F !important;
  --nav-heading-color-collapsed: #636363 !important;
  --nav-heading-color-collapsed-hover: #8F8F8F !important;
  --nav-heading-color-hover: #8F8F8F !important;
  --nav-item-background-active: #3E4044 !important;
  --nav-item-background-hover: hsla(33, 65%, 96%, 0.06) !important;
  --nav-item-background-selected: hsla(33, 100%, 96%, 0.15) !important;
  --nav-item-color: #8F8F8F !important;
  --nav-item-color-active: #FFFDFB !important;
  --nav-item-color-highlighted: #00A0BA !important;
  --nav-item-color-hover: #BEBEBE !important;
  --nav-item-color-selected: #8F8F8F !important;
  --nav-tag-color: #636363 !important;
  --nav-tag-color-active: #8F8F8F !important;
  --nav-tag-color-hover: #8F8F8F !important;
  --orange: #C27D40 !important;
  --panel-border-color: #F2E6D4 !important;
  --pdf-background: #303338 !important;
  --pdf-page-background: #303338 !important;
  --pdf-shadow: 0 0 0 1px #636363 !important;
  --pdf-sidebar-background: #303338 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #636363 !important;
  --pill-border-color: #636363 !important;
  --pill-border-color-hover: #FFFDFB !important;
  --pill-color: #8F8F8F !important;
  --pill-color-hover: #8F8F8F !important;
  --pill-color-remove: #636363 !important;
  --pill-color-remove-hover: #00A0BA !important;
  --prompt-background: #303338 !important;
  --prompt-border-color: #F2E6D4 !important;
  --purple: #AC78BD !important;
  --raised-background: color-mix(in srgb, #24272B 65%, transparent) linear-gradient(#24272B, color-mix(in srgb, #24272B 65%, transparent)) !important;
  --red: #CA7081 !important;
  --ribbon-background: #303338 !important;
  --ribbon-background-collapsed: #303338 !important;
  --scrollbar-active-thumb-bg: #8F8F8F !important;
  --scrollbar-bg: #303338 !important;
  --scrollbar-thumb-bg: #303338 !important;
  --search-clear-button-color: #8F8F8F !important;
  --search-icon-color: #8F8F8F !important;
  --search-result-background: #303338 !important;
  --secondary: #00A0BA !important;
  --setting-group-heading-color: #8F8F8F !important;
  --setting-items-background: #303338 !important;
  --setting-items-border-color: #636363 !important;
  --slider-thumb-border-color: #FFFDFB !important;
  --slider-track-background: #636363 !important;
  --status-bar-background: #24272B !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #8F8F8F !important;
  --suggestion-background: #303338 !important;
  --tab-background-active: #303338 !important;
  --tab-container-background: #24272B !important;
  --tab-divider-color: #FFFDFB !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #24272B !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #24272B, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(33, 100%, 96%) !important;
  --tab-text-color: #636363 !important;
  --tab-text-color-active: #8F8F8F !important;
  --tab-text-color-focused: #8F8F8F !important;
  --tab-text-color-focused-active: #8F8F8F !important;
  --tab-text-color-focused-active-current: #8F8F8F !important;
  --tab-text-color-focused-highlighted: #00A0BA !important;
  --table-add-button-border-color: #636363 !important;
  --table-border-color: #636363 !important;
  --table-drag-handle-background-active: #3E4044 !important;
  --table-drag-handle-color: #636363 !important;
  --table-drag-handle-color-active: #FFFDFB !important;
  --table-header-border-color: #636363 !important;
  --table-header-color: #8F8F8F !important;
  --table-selection: hsla(33, 100%, 96%, 0.1) !important;
  --table-selection-border-color: #3E4044 !important;
  --tag-background: #303338 !important;
  --tag-background-hover: #303338 !important;
  --tag-border-color: hsla(33, 100%, 96%, 0.15) !important;
  --tag-border-color-hover: hsla(33, 100%, 96%, 0.15) !important;
  --tag-color: #92963A !important;
  --tag-color-hover: #92963A !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --tertiary: #00A0BA !important;
  --text-accent: #00A0BA !important;
  --text-accent-hover: #00A0BA !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-faint: #636363 !important;
  --text-highlight-bg: #F2E6D4 !important;
  --text-muted: #8F8F8F !important;
  --text-normal: #8F8F8F !important;
  --text-on-accent: #FFFDFB !important;
  --text-selection: #636363 !important;
  --textHighlight: #F2E6D4 !important;
  --titlebar-background: #24272B !important;
  --titlebar-background-focused: #24272B !important;
  --titlebar-border-color: #636363 !important;
  --titlebar-text-color: #8F8F8F !important;
  --titlebar-text-color-focused: #8F8F8F !important;
  --vault-profile-color: #8F8F8F !important;
  --vault-profile-color-hover: #8F8F8F !important;
  --yellow: #92963A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 39, 43);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(48, 51, 56);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(36, 39, 43);
  border-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(48, 51, 56);
  border-radius: 4px;
  color: rgb(146, 150, 58);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 39, 43);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 39, 43);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(48, 51, 56);
  color: rgb(143, 143, 143);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body del {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(143, 143, 143);
  text-decoration: underline rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 160, 186);
  border-color: rgb(0, 160, 186);
}

html[saved-theme="dark"] body p {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration-color: rgb(110, 141, 213);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration-color: rgb(110, 141, 213);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(0, 160, 186);
  outline: rgb(0, 160, 186) none 0px;
  text-decoration: rgba(255, 246, 235, 0.3);
  text-decoration-color: rgba(255, 246, 235, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body dt {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(36, 39, 43);
  font-style: italic;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body table {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(146, 150, 58);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(146, 150, 58);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(146, 150, 58);
  border-left-color: rgb(146, 150, 58);
  border-right-color: rgb(146, 150, 58);
  border-top-color: rgb(146, 150, 58);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(62, 64, 68);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
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
  background-color: rgb(242, 230, 212);
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(251, 245, 238, 0.06);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 39, 43);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(251, 245, 238, 0.06);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(251, 245, 238, 0.06);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgba(255, 246, 235, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(255, 246, 235, 0.15);
  border-right-color: rgba(255, 246, 235, 0.15);
  border-top-color: rgba(255, 246, 235, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(146, 150, 58);
}

html[saved-theme="dark"] body h1 {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body h2 {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body h3 {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body h4 {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body h5 {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body h6 {
  color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(48, 51, 56) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(48, 51, 56);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 143, 143);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(143, 143, 143);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(36, 39, 43);
  border-bottom-color: rgb(242, 230, 212);
  border-bottom-width: 1px;
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-right-width: 1px;
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(143, 143, 143);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(143, 143, 143);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(143, 143, 143);
  stroke: rgb(143, 143, 143);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(99, 99, 99);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(36, 39, 43);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body abbr {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(36, 39, 43);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body sub {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body summary {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body sup {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgba(255, 246, 235, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(255, 246, 235, 0.15);
  border-right-color: rgba(255, 246, 235, 0.15);
  border-top-color: rgba(255, 246, 235, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(146, 150, 58);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 36 !important;
  --accent-l: 89% !important;
  --accent-s: 53% !important;
  --background-accent: #636363 !important;
  --background-modifier-active-hover: hsla(36, 53%, 89%, 0.1) !important;
  --background-modifier-border: #F2E6D4 !important;
  --background-modifier-border-focus: #24272B !important;
  --background-modifier-border-hover: #24272B !important;
  --background-modifier-box-shadow: #FFFDFB !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error-rgb: #e93147 !important;
  --background-modifier-form-field: #FFFDFB !important;
  --background-modifier-form-field-highlighted: #FFFDFB !important;
  --background-modifier-form-field-hover: #FFFDFB !important;
  --background-modifier-message: #F2E6D4 !important;
  --background-modifier-success-rgb: #08b94e !important;
  --background-primary: #FFF7ED !important;
  --background-primary-alt: #FFF7ED !important;
  --background-secondary: #F2E6D4 !important;
  --background-secondary-alt: #F2E6D4 !important;
  --bases-cards-background: #FFF7ED !important;
  --bases-cards-cover-background: #FFF7ED !important;
  --bases-cards-shadow: 0 0 0 1px #F2E6D4 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #24272B !important;
  --bases-embed-border-color: #F2E6D4 !important;
  --bases-group-heading-property-color: #8F8F8F !important;
  --bases-table-border-color: #F2E6D4 !important;
  --bases-table-cell-background-active: #FFF7ED !important;
  --bases-table-cell-background-disabled: #FFF7ED !important;
  --bases-table-cell-background-selected: hsla(36, 53%, 89%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #24272B !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FFFDFB !important;
  --bases-table-group-background: #FFF7ED !important;
  --bases-table-header-background: #FFF7ED !important;
  --bases-table-header-color: #8F8F8F !important;
  --bases-table-summary-background: #FFF7ED !important;
  --blockquote-background-color: #F2E6D4 !important;
  --blockquote-border-color: #3EA57B !important;
  --blockquote-font-style: italic !important;
  --blue: #6E8DD5 !important;
  --blur-background: color-mix(in srgb, #FFF7ED 65%, transparent) linear-gradient(#FFF7ED, color-mix(in srgb, #FFF7ED 65%, transparent)) !important;
  --bold-color: #636363 !important;
  --canvas-background: #FFF7ED !important;
  --canvas-card-label-color: #8F8F8F !important;
  --canvas-color-1: #CA7081 !important;
  --canvas-color-2: #C27D40 !important;
  --canvas-color-3: #92963A !important;
  --canvas-color-4: #3EA57B !important;
  --canvas-color-5: #00A0BA !important;
  --canvas-color-6: #AC78BD !important;
  --caret-color: #8F8F8F !important;
  --checkbox-border-color: #BEBEBE !important;
  --checkbox-border-color-hover: #8F8F8F !important;
  --checkbox-color: #00A0BA !important;
  --checkbox-color-hover: #00A0BA !important;
  --checkbox-marker-color: #FFF7ED !important;
  --checklist-done-color: #BEBEBE !important;
  --code-background: #F2E6D4 !important;
  --code-border-color: #F2E6D4 !important;
  --code-comment: #BEBEBE !important;
  --code-function: #AC78BD !important;
  --code-important: #CA7081 !important;
  --code-keyword: #AC78BD !important;
  --code-normal: #8F8F8F !important;
  --code-operator: #6E8DD5 !important;
  --code-property: #CA7081 !important;
  --code-punctuation: #3EA57B !important;
  --code-string: #3EA57B !important;
  --code-tag: #AC78BD !important;
  --code-value: #C27D40 !important;
  --collapse-icon-color: #BEBEBE !important;
  --collapse-icon-color-collapsed: #00A0BA !important;
  --color-accent: hsl(36, 53%, 89%) !important;
  --color-accent-1: hsl(35, 53.53%, 95.675%) !important;
  --color-accent-2: hsl(33, 54.06%, 102.35%) !important;
  --color-accent-hsl: 36, 53%, 89% !important;
  --cyan: #00A0BA !important;
  --dark: #8F8F8F !important;
  --darkgray: #8F8F8F !important;
  --divider-color: transparent !important;
  --divider-color-hover: hsl(36, 43%, 85%) !important;
  --drag-ghost-background: #F2E6D4 !important;
  --drag-ghost-text-color: #CA7081 !important;
  --dropdown-background: #F2E6D4 !important;
  --dropdown-background-hover: #24272B !important;
  --embed-block-shadow-hover: 0 0 0 1px #F2E6D4, inset 0 0 0 1px #F2E6D4 !important;
  --embed-border-start: 2px solid #FFFDFB !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #FFF7ED !important;
  --file-header-background-focused: #FFF7ED !important;
  --flair-background: #F2E6D4 !important;
  --flair-color: #8F8F8F !important;
  --footnote-divider-color: #F2E6D4 !important;
  --footnote-id-color: #8F8F8F !important;
  --footnote-id-color-no-occurrences: #BEBEBE !important;
  --graph-line: #BEBEBE !important;
  --graph-node: #CA7081 !important;
  --graph-node-focused: #00A0BA !important;
  --graph-node-unresolved: #BEBEBE !important;
  --graph-text: #636363 !important;
  --gray: #8F8F8F !important;
  --gray-1: #8F8F8F !important;
  --gray-2: #636363 !important;
  --green: #3EA57B !important;
  --h1-color: #636363 !important;
  --h2-color: #636363 !important;
  --h3-color: #636363 !important;
  --h4-color: #636363 !important;
  --h5-color: #636363 !important;
  --h6-color: #636363 !important;
  --heading-formatting: #BEBEBE !important;
  --highlight: rgba(255, 255, 0, 0.4) !important;
  --hr-color: #F2E6D4 !important;
  --icon-color: #8F8F8F !important;
  --icon-color-active: #00A0BA !important;
  --icon-color-focused: #636363 !important;
  --icon-color-hover: #636363 !important;
  --inline-title-color: #636363 !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #BEBEBE !important;
  --input-placeholder-color: #BEBEBE !important;
  --interactive-accent: #FFFDFB !important;
  --interactive-accent-hover: hsl(36, 43%, 85%) !important;
  --interactive-accent-hsl: 36, 53%, 89% !important;
  --interactive-hover: #24272B !important;
  --interactive-normal: #F2E6D4 !important;
  --light: #FFF7ED !important;
  --lightgray: #F2E6D4 !important;
  --link-color: #6E8DD5 !important;
  --link-color-hover: #6E8DD5 !important;
  --link-decoration: none !important;
  --link-external-color: #6E8DD5 !important;
  --link-external-color-hover: #6E8DD5 !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #00A0BA !important;
  --link-unresolved-decoration-color: hsla(36, 53%, 89%, 0.3) !important;
  --list-marker-color: #8F8F8F !important;
  --list-marker-color-collapsed: #00A0BA !important;
  --list-marker-color-hover: #8F8F8F !important;
  --menu-background: #F2E6D4 !important;
  --menu-border-color: #24272B !important;
  --metadata-border-color: #F2E6D4 !important;
  --metadata-divider-color: #F2E6D4 !important;
  --metadata-input-text-color: #8F8F8F !important;
  --metadata-label-text-color: #8F8F8F !important;
  --metadata-label-text-color-hover: #8F8F8F !important;
  --metadata-property-background-active: #CA7081 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #24272B !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #24272B !important;
  --modal-background: #FFF7ED !important;
  --modal-border-color: #BEBEBE !important;
  --nav-collapse-icon-color: #636363 !important;
  --nav-collapse-icon-color-collapsed: #BEBEBE !important;
  --nav-heading-color: #8F8F8F !important;
  --nav-heading-color-collapsed: #BEBEBE !important;
  --nav-heading-color-collapsed-hover: #8F8F8F !important;
  --nav-heading-color-hover: #8F8F8F !important;
  --nav-item-background-active: #FFFDFB !important;
  --nav-item-background-selected: hsla(36, 53%, 89%, 0.15) !important;
  --nav-item-color: #8F8F8F !important;
  --nav-item-color-active: #24272B !important;
  --nav-item-color-highlighted: #00A0BA !important;
  --nav-item-color-hover: #636363 !important;
  --nav-item-color-selected: #8F8F8F !important;
  --nav-tag-color: #BEBEBE !important;
  --nav-tag-color-active: #8F8F8F !important;
  --nav-tag-color-hover: #8F8F8F !important;
  --orange: #C27D40 !important;
  --panel-border-color: #BEBEBE !important;
  --pdf-background: #FFF7ED !important;
  --pdf-page-background: #FFF7ED !important;
  --pdf-sidebar-background: #FFF7ED !important;
  --pill-border-color: #F2E6D4 !important;
  --pill-border-color-hover: #24272B !important;
  --pill-color: #8F8F8F !important;
  --pill-color-hover: #8F8F8F !important;
  --pill-color-remove: #BEBEBE !important;
  --pill-color-remove-hover: #00A0BA !important;
  --prompt-background: #FFF7ED !important;
  --prompt-border-color: #BEBEBE !important;
  --purple: #AC78BD !important;
  --raised-background: color-mix(in srgb, #FFF7ED 65%, transparent) linear-gradient(#FFF7ED, color-mix(in srgb, #FFF7ED 65%, transparent)) !important;
  --red: #CA7081 !important;
  --ribbon-background: #FFF7ED !important;
  --ribbon-background-collapsed: #FFF7ED !important;
  --scrollbar-active-thumb-bg: #F2E6D4 !important;
  --scrollbar-bg: #F2E6D4 !important;
  --scrollbar-thumb-bg: #F2E6D4 !important;
  --search-clear-button-color: #8F8F8F !important;
  --search-icon-color: #8F8F8F !important;
  --search-result-background: #FFF7ED !important;
  --secondary: #00A0BA !important;
  --setting-group-heading-color: #8F8F8F !important;
  --setting-items-background: #FFF7ED !important;
  --setting-items-border-color: #F2E6D4 !important;
  --slider-thumb-border-color: #24272B !important;
  --slider-track-background: #F2E6D4 !important;
  --status-bar-background: #F2E6D4 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #8F8F8F !important;
  --suggestion-background: #FFF7ED !important;
  --tab-background-active: #FFF7ED !important;
  --tab-container-background: #F2E6D4 !important;
  --tab-divider-color: #24272B !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #F2E6D4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F2E6D4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(36, 53%, 89%) !important;
  --tab-text-color: #BEBEBE !important;
  --tab-text-color-active: #8F8F8F !important;
  --tab-text-color-focused: #8F8F8F !important;
  --tab-text-color-focused-active: #8F8F8F !important;
  --tab-text-color-focused-active-current: #8F8F8F !important;
  --tab-text-color-focused-highlighted: #00A0BA !important;
  --table-add-button-border-color: #F2E6D4 !important;
  --table-border-color: #F2E6D4 !important;
  --table-drag-handle-background-active: #FFFDFB !important;
  --table-drag-handle-color: #BEBEBE !important;
  --table-drag-handle-color-active: #24272B !important;
  --table-header-border-color: #F2E6D4 !important;
  --table-header-color: #8F8F8F !important;
  --table-selection: hsla(36, 53%, 89%, 0.1) !important;
  --table-selection-border-color: #FFFDFB !important;
  --tag-background: #FFF7ED !important;
  --tag-background-hover: #FFF7ED !important;
  --tag-border-color: hsla(36, 53%, 89%, 0.15) !important;
  --tag-border-color-hover: hsla(36, 53%, 89%, 0.15) !important;
  --tag-color: #92963A !important;
  --tag-color-hover: #92963A !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 2px !important;
  --tag-radius: 4px !important;
  --tertiary: #00A0BA !important;
  --text-accent: #00A0BA !important;
  --text-accent-hover: #00A0BA !important;
  --text-error: #e75545 !important;
  --text-error-hover: #f86959 !important;
  --text-faint: #BEBEBE !important;
  --text-highlight-bg: rgba(255, 255, 0, 0.4) !important;
  --text-muted: #8F8F8F !important;
  --text-normal: #8F8F8F !important;
  --text-on-accent: #24272B !important;
  --text-selection: #FFFDFB !important;
  --textHighlight: rgba(255, 255, 0, 0.4) !important;
  --titlebar-background: #F2E6D4 !important;
  --titlebar-background-focused: #F2E6D4 !important;
  --titlebar-border-color: #F2E6D4 !important;
  --titlebar-text-color: #8F8F8F !important;
  --titlebar-text-color-focused: #8F8F8F !important;
  --vault-profile-color: #8F8F8F !important;
  --vault-profile-color-hover: #8F8F8F !important;
  --yellow: #92963A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 247, 237);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 247, 237);
  border-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(242, 230, 212);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(255, 247, 237);
  border-radius: 4px;
  color: rgb(146, 150, 58);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 230, 212);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 247, 237);
  color: rgb(143, 143, 143);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(99, 99, 99);
  outline: rgb(99, 99, 99) none 0px;
  text-decoration-color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(99, 99, 99);
  outline: rgb(99, 99, 99) none 0px;
  text-decoration-color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body del {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(143, 143, 143);
  text-decoration: underline rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(190, 190, 190);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 160, 186);
  border-color: rgb(0, 160, 186);
}

html[saved-theme="light"] body p {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration-color: rgb(110, 141, 213);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration-color: rgb(110, 141, 213);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 160, 186);
  outline: rgb(0, 160, 186) none 0px;
  text-decoration: rgba(242, 230, 212, 0.3);
  text-decoration-color: rgba(242, 230, 212, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body dt {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ol > li {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ul > li {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(190, 190, 190);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(242, 230, 212);
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body table {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(146, 150, 58);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(146, 150, 58);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(146, 150, 58);
  border-left-color: rgb(146, 150, 58);
  border-right-color: rgb(146, 150, 58);
  border-top-color: rgb(146, 150, 58);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body figcaption {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(255, 253, 251);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
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
  background-color: rgb(255, 253, 251);
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgba(242, 230, 212, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(242, 230, 212, 0.15);
  border-right-color: rgba(242, 230, 212, 0.15);
  border-top-color: rgba(242, 230, 212, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(146, 150, 58);
}

html[saved-theme="light"] body h1 {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body h2 {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body h3 {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body h4 {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body h5 {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body h6 {
  color: rgb(99, 99, 99);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 247, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 247, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 143, 143);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(143, 143, 143);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(242, 230, 212);
  border-bottom-color: rgb(190, 190, 190);
  border-bottom-width: 1px;
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-right-width: 1px;
  border-top-color: rgb(190, 190, 190);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(143, 143, 143);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(143, 143, 143);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(143, 143, 143);
  stroke: rgb(143, 143, 143);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(190, 190, 190);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(242, 230, 212);
  border-left-color: rgb(242, 230, 212);
  border-right-color: rgb(242, 230, 212);
  border-top-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(242, 230, 212);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body abbr {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(242, 230, 212);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body sub {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body summary {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body sup {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgba(242, 230, 212, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(242, 230, 212, 0.15);
  border-right-color: rgba(242, 230, 212, 0.15);
  border-top-color: rgba(242, 230, 212, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(146, 150, 58);
}`,
  },
};
