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
  --background-modifier-active-hover: rgba(255, 246, 235, 0.1) !important;
  --background-modifier-border: #636363 !important;
  --background-modifier-border-focus: #FFFDFB !important;
  --background-modifier-border-hover: #FFFDFB !important;
  --background-modifier-box-shadow: #636363 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error-rgb: #fb464c !important;
  --background-modifier-form-field: #F2E6D4 !important;
  --background-modifier-form-field-highlighted: #636363 !important;
  --background-modifier-form-field-hover: #F2E6D4 !important;
  --background-modifier-hover: rgba(251, 245, 238, 0.06) !important;
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
  --bases-table-cell-background-selected: rgba(255, 246, 235, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #FFFDFB !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #3E4044 !important;
  --bases-table-group-background: #303338 !important;
  --bases-table-header-background: #303338 !important;
  --bases-table-header-background-hover: rgba(251, 245, 238, 0.06) !important;
  --bases-table-header-color: #8F8F8F !important;
  --bases-table-summary-background: #303338 !important;
  --bases-table-summary-background-hover: rgba(251, 245, 238, 0.06) !important;
  --blockquote-background-color: #24272B !important;
  --blockquote-border-color: #3EA57B !important;
  --blockquote-font-style: italic !important;
  --blue: #6E8DD5 !important;
  --blur-background: color-mix(in srgb, #24272B 65%, transparent) linear-gradient(#24272B, color-mix(in srgb, #24272B 65%, transparent)) !important;
  --bold-color: #BEBEBE !important;
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
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
  --code-bracket-background: rgba(251, 245, 238, 0.06) !important;
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
  --color-accent: rgb(255, 246, 235) !important;
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
  --footnote-input-background-active: rgba(251, 245, 238, 0.06) !important;
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
  --heading-spacing: 2.5rem !important;
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
  --link-unresolved-decoration-color: rgba(255, 246, 235, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #8F8F8F !important;
  --list-marker-color-collapsed: #00A0BA !important;
  --list-marker-color-hover: #8F8F8F !important;
  --menu-background: #24272B !important;
  --menu-border-color: #FFFDFB !important;
  --metadata-border-color: #636363 !important;
  --metadata-divider-color: #636363 !important;
  --metadata-input-background-active: rgba(251, 245, 238, 0.06) !important;
  --metadata-input-height: 28px !important;
  --metadata-input-text-color: #8F8F8F !important;
  --metadata-label-background-active: rgba(251, 245, 238, 0.06) !important;
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
  --nav-item-background-hover: rgba(251, 245, 238, 0.06) !important;
  --nav-item-background-selected: rgba(255, 246, 235, 0.15) !important;
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
  --sidebar-markdown-font-size: 14.4px !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 246, 235) !important;
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
  --table-header-weight: 600 !important;
  --table-selection: rgba(255, 246, 235, 0.1) !important;
  --table-selection-border-color: #3E4044 !important;
  --tag-background: #303338 !important;
  --tag-background-hover: #303338 !important;
  --tag-border-color: rgba(255, 246, 235, 0.15) !important;
  --tag-border-color-hover: rgba(255, 246, 235, 0.15) !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --yellow: #92963A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 39, 43);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(48, 51, 56);
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
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body del {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: line-through rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body p {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
  text-decoration-color: rgb(110, 141, 213);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
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
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(48, 51, 56);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(99, 99, 99);
  text-decoration: rgb(99, 99, 99);
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

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
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
  border-left-color: rgb(62, 64, 68);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(99, 99, 99);
  text-decoration: line-through rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(99, 99, 99);
  border-left-color: rgb(99, 99, 99);
  border-right-color: rgb(99, 99, 99);
  border-top-color: rgb(99, 99, 99);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
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
  text-decoration: rgb(143, 143, 143);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(251, 245, 238, 0.06);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(251, 245, 238, 0.06);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(251, 245, 238, 0.06);
  color: rgb(143, 143, 143);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
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
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
  text-decoration: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(62, 64, 68);
  border-bottom-color: rgb(255, 253, 251);
  border-left-color: rgb(255, 253, 251);
  border-right-color: rgb(255, 253, 251);
  border-top-color: rgb(255, 253, 251);
  color: rgb(255, 253, 251);
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
  text-decoration: rgb(143, 143, 143);
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
  text-decoration: rgb(143, 143, 143);
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
  text-decoration: rgb(143, 143, 143);
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
  text-decoration: underline dotted rgb(143, 143, 143);
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
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 36 !important;
  --accent-l: 89% !important;
  --accent-s: 53% !important;
  --background-accent: #636363 !important;
  --background-modifier-active-hover: rgba(242, 230, 212, 0.1) !important;
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
  --bases-table-cell-background-selected: rgba(242, 230, 212, 0.1) !important;
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
  --bold-weight: 600 !important;
  --callout-title-weight: 600;
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
  --color-accent: rgb(242, 230, 212) !important;
  --color-accent-1: rgb(250, 246, 239) !important;
  --color-accent-2: hsl(33, 54.06%, 102.35%) !important;
  --color-accent-hsl: 36, 53%, 89% !important;
  --cyan: #00A0BA !important;
  --dark: #8F8F8F !important;
  --darkgray: #8F8F8F !important;
  --divider-color: transparent !important;
  --divider-color-hover: rgb(233, 220, 200) !important;
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
  --heading-spacing: 2.5rem !important;
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
  --interactive-accent-hover: rgb(233, 220, 200) !important;
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
  --link-unresolved-decoration-color: rgba(242, 230, 212, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: #8F8F8F !important;
  --list-marker-color-collapsed: #00A0BA !important;
  --list-marker-color-hover: #8F8F8F !important;
  --menu-background: #F2E6D4 !important;
  --menu-border-color: #24272B !important;
  --metadata-border-color: #F2E6D4 !important;
  --metadata-divider-color: #F2E6D4 !important;
  --metadata-input-height: 28px !important;
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
  --nav-item-background-selected: rgba(242, 230, 212, 0.15) !important;
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
  --sidebar-markdown-font-size: 14.4px !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(242, 230, 212) !important;
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
  --table-header-weight: 600 !important;
  --table-selection: rgba(242, 230, 212, 0.1) !important;
  --table-selection-border-color: #FFFDFB !important;
  --tag-background: #FFF7ED !important;
  --tag-background-hover: #FFF7ED !important;
  --tag-border-color: rgba(242, 230, 212, 0.15) !important;
  --tag-border-color-hover: rgba(242, 230, 212, 0.15) !important;
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
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --yellow: #92963A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 230, 212);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 247, 237);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(99, 99, 99);
  outline: rgb(99, 99, 99) none 0px;
  text-decoration: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(99, 99, 99);
  outline: rgb(99, 99, 99) none 0px;
  text-decoration: rgb(99, 99, 99);
  text-decoration-color: rgb(99, 99, 99);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body del {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: line-through rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body p {
  color: rgb(143, 143, 143);
  outline: rgb(143, 143, 143) none 0px;
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
  text-decoration-color: rgb(110, 141, 213);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(110, 141, 213);
  outline: rgb(110, 141, 213) none 0px;
  text-decoration: rgb(110, 141, 213);
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
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ul > li {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(255, 247, 237);
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
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
  border-left-color: rgb(255, 253, 251);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(190, 190, 190);
  text-decoration: line-through rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
  text-decoration-color: rgb(143, 143, 143);
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
  text-decoration: rgb(143, 143, 143);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(143, 143, 143);
  border-left-color: rgb(143, 143, 143);
  border-right-color: rgb(143, 143, 143);
  border-top-color: rgb(143, 143, 143);
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(143, 143, 143);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, h2.page-title a {
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
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
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
  text-decoration: rgb(143, 143, 143);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(143, 143, 143);
  text-decoration: rgb(143, 143, 143);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(255, 253, 251);
  border-bottom-color: rgb(36, 39, 43);
  border-left-color: rgb(36, 39, 43);
  border-right-color: rgb(36, 39, 43);
  border-top-color: rgb(36, 39, 43);
  color: rgb(36, 39, 43);
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
  text-decoration: rgb(143, 143, 143);
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
  text-decoration: rgb(143, 143, 143);
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
  text-decoration: rgb(143, 143, 143);
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
  text-decoration: underline dotted rgb(143, 143, 143);
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
}`,
  },
};
