import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "onenice",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 75 !important;
  --accent-l: 48% !important;
  --accent-s: 26% !important;
  --aqua: #48b0bd !important;
  --background-accent: #000 !important;
  --background-modifier-active-hover: hsla(75, 26%, 48%, 0.1) !important;
  --background-modifier-border: #7a818e !important;
  --background-modifier-border-focus: #e5556197 !important;
  --background-modifier-border-hover: #e5556197 !important;
  --background-modifier-box-shadow: #0000004d !important;
  --background-modifier-cover: #00000099 !important;
  --background-modifier-error: #e55561 !important;
  --background-modifier-error-hover: #e55561 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #0000004d !important;
  --background-modifier-form-field-highlighted: #00000038 !important;
  --background-modifier-form-field-hover: #0000004d !important;
  --background-modifier-hover: hsla(75, -9%, 48%, 0.06) !important;
  --background-modifier-message: #a0a1a7 !important;
  --background-modifier-success: #8ebd6b !important;
  --background-primary: #1f2329 !important;
  --background-primary-alt: #181b20 !important;
  --background-secondary: #181b20 !important;
  --background-secondary-alt: #181b20 !important;
  --bases-cards-background: #1f2329 !important;
  --bases-cards-cover-background: #181b20 !important;
  --bases-cards-shadow: 0 0 0 1px #7a818e !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e5556197 !important;
  --bases-embed-border-color: #7a818e !important;
  --bases-group-heading-property-color: #a9abac !important;
  --bases-table-border-color: #7a818e !important;
  --bases-table-cell-background-active: #1f2329 !important;
  --bases-table-cell-background-disabled: #181b20 !important;
  --bases-table-cell-background-selected: hsla(75, 26%, 48%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #e5556197 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(75, 26%, 48%) !important;
  --bases-table-group-background: #181b20 !important;
  --bases-table-header-background: #1f2329 !important;
  --bases-table-header-background-hover: hsla(75, -9%, 48%, 0.06) !important;
  --bases-table-header-color: #a9abac !important;
  --bases-table-summary-background: #1f2329 !important;
  --bases-table-summary-background-hover: hsla(75, -9%, 48%, 0.06) !important;
  --blockquote-border-color: hsl(75, 26%, 48%) !important;
  --blue: #4fa6ed !important;
  --blur-background: color-mix(in srgb, #1f2329 65%, transparent) linear-gradient(#1f2329, color-mix(in srgb, #1f2329 65%, transparent)) !important;
  --canvas-background: #1f2329 !important;
  --canvas-card-label-color: #535965 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #535965 !important;
  --checkbox-border-color-hover: #a9abac !important;
  --checkbox-color: #8ebd6b !important;
  --checkbox-color-hover: #bf68d9 !important;
  --checkbox-marker-color: #1f2329 !important;
  --checklist-done-color: #a9abac !important;
  --code-background: #181b20 !important;
  --code-border-color: #7a818e !important;
  --code-bracket-background: hsla(75, -9%, 48%, 0.06) !important;
  --code-comment: #535965 !important;
  --code-normal: #dcddde !important;
  --code-punctuation: #a9abac !important;
  --collapse-icon-color: #535965 !important;
  --collapse-icon-color-collapsed: #61afef !important;
  --color-accent: hsl(75, 26%, 48%) !important;
  --color-accent-1: hsl(72, 26.52%, 55.2%) !important;
  --color-accent-2: hsl(70, 27.3%, 61.92%) !important;
  --color-accent-hsl: 75, 26%, 48% !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --divider-color: transparent !important;
  --divider-color-hover: #4fa6ed !important;
  --drag-ghost-background: #181b20 !important;
  --dropdown-background: #1f2329 !important;
  --dropdown-background-hover: #e5556197 !important;
  --embed-block-shadow-hover: 0 0 0 1px #7a818e, inset 0 0 0 1px #7a818e !important;
  --embed-border-start: 2px solid hsl(75, 26%, 48%) !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #1f2329 !important;
  --file-header-background-focused: #1f2329 !important;
  --flair-background: #1f2329 !important;
  --flair-color: #dcddde !important;
  --footnote-divider-color: #7a818e !important;
  --footnote-id-color: #a9abac !important;
  --footnote-id-color-no-occurrences: #535965 !important;
  --footnote-input-background-active: hsla(75, -9%, 48%, 0.06) !important;
  --graph-node: #a9abac !important;
  --graph-node-focused: #61afef !important;
  --graph-node-unresolved: #535965 !important;
  --graph-text: #dcddde !important;
  --gray: #a9abac !important;
  --gray-1: #7a818e !important;
  --gray-2: #7a818e !important;
  --green: #8ebd6b !important;
  --heading-formatting: #535965 !important;
  --highlight: #8a9a5b !important;
  --hr-color: #7a818e !important;
  --icon-color: #a9abac !important;
  --icon-color-active: #61afef !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #a9abac !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #535965 !important;
  --input-placeholder-color: #535965 !important;
  --interactive-accent: hsl(75, 26%, 48%) !important;
  --interactive-accent-hover: hsl(75, 31%, 38%) !important;
  --interactive-accent-hsl: 75, 26%, 48% !important;
  --interactive-hover: #e5556197 !important;
  --interactive-normal: #1f2329 !important;
  --light: #1f2329 !important;
  --lightgray: #181b20 !important;
  --link-color: #61afef !important;
  --link-color-hover: #e55561 !important;
  --link-decoration: none !important;
  --link-external-color: #61afef !important;
  --link-external-color-hover: #e55561 !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #61afef !important;
  --link-unresolved-decoration-color: hsla(75, 26%, 48%, 0.3) !important;
  --list-marker-color: #535965 !important;
  --list-marker-color-collapsed: #61afef !important;
  --list-marker-color-hover: #a9abac !important;
  --menu-background: #181b20 !important;
  --menu-border-color: #e5556197 !important;
  --metadata-border-color: #7a818e !important;
  --metadata-divider-color: #7a818e !important;
  --metadata-input-background-active: hsla(75, -9%, 48%, 0.06) !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-background-active: hsla(75, -9%, 48%, 0.06) !important;
  --metadata-label-text-color: #a9abac !important;
  --metadata-label-text-color-hover: #a9abac !important;
  --metadata-property-background-active: hsla(75, -9%, 48%, 0.06) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #e5556197 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e5556197 !important;
  --modal-background: #1f2329 !important;
  --modal-border-color: #8ebd6b !important;
  --nav-collapse-icon-color: #535965 !important;
  --nav-collapse-icon-color-collapsed: #535965 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #535965 !important;
  --nav-heading-color-collapsed-hover: #a9abac !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-background-active: #4fa6ed !important;
  --nav-item-background-hover: hsla(75, -9%, 48%, 0.06) !important;
  --nav-item-background-selected: hsla(75, 26%, 48%, 0.15) !important;
  --nav-item-color: #a9abac !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #61afef !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: #535965 !important;
  --nav-tag-color-active: #a9abac !important;
  --nav-tag-color-hover: #a9abac !important;
  --orange: #cc9057 !important;
  --panel-border-color: #535965 !important;
  --pdf-background: #1f2329 !important;
  --pdf-page-background: #1f2329 !important;
  --pdf-shadow: 0 0 0 1px #7a818e !important;
  --pdf-sidebar-background: #1f2329 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #7a818e !important;
  --pill-border-color: #7a818e !important;
  --pill-border-color-hover: #e5556197 !important;
  --pill-color: #a9abac !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #535965 !important;
  --pill-color-remove-hover: #61afef !important;
  --prompt-background: #1f2329 !important;
  --prompt-border-color: #8ebd6b !important;
  --purple: #bf68d9 !important;
  --raised-background: color-mix(in srgb, #1f2329 65%, transparent) linear-gradient(#1f2329, color-mix(in srgb, #1f2329 65%, transparent)) !important;
  --red: #e55561 !important;
  --ribbon-background: #181b20 !important;
  --ribbon-background-collapsed: #1f2329 !important;
  --scrollbar-active-thumb-bg: #4fa6ed !important;
  --scrollbar-bg: #ffffff0d !important;
  --scrollbar-thumb-bg: #20242f !important;
  --search-clear-button-color: #a9abac !important;
  --search-icon-color: #a9abac !important;
  --search-result-background: #1f2329 !important;
  --secondary: #61afef !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #181b20 !important;
  --setting-items-border-color: #7a818e !important;
  --slider-thumb-border-color: #e5556197 !important;
  --slider-track-background: #7a818e !important;
  --status-bar-background: #181b20 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #a9abac !important;
  --suggestion-background: #1f2329 !important;
  --tab-background-active: #1f2329 !important;
  --tab-container-background: #181b20 !important;
  --tab-divider-color: #e5556197 !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #181b20 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181b20, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(75, 26%, 48%) !important;
  --tab-text-color: #535965 !important;
  --tab-text-color-active: #a9abac !important;
  --tab-text-color-focused: #a9abac !important;
  --tab-text-color-focused-active: #a9abac !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #61afef !important;
  --table-add-button-border-color: #7a818e !important;
  --table-border-color: #7a818e !important;
  --table-drag-handle-background-active: hsl(75, 26%, 48%) !important;
  --table-drag-handle-color: #535965 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #7a818e !important;
  --table-header-color: #dcddde !important;
  --table-selection: hsla(75, 26%, 48%, 0.1) !important;
  --table-selection-border-color: hsl(75, 26%, 48%) !important;
  --tag-background: #181b20 !important;
  --tag-background-hover: #8ebd6b !important;
  --tag-border-color: hsla(75, 26%, 48%, 0.15) !important;
  --tag-border-color-hover: hsla(75, 26%, 48%, 0.15) !important;
  --tag-color: #bf68d9 !important;
  --tag-color-hover: #bf68d9 !important;
  --tag-padding-x: 5px !important;
  --tag-padding-y: 5px !important;
  --tag-radius: 40px !important;
  --tertiary: #e55561 !important;
  --text-accent: #61afef !important;
  --text-accent-hover: #e55561 !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-faint: #535965 !important;
  --text-highlight-bg: #8a9a5b !important;
  --text-muted: #a9abac !important;
  --text-normal: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: #ffffff1a !important;
  --text-title-h1: #e55561 !important;
  --text-title-h2: #8ebd6b !important;
  --text-title-h3: #cc9057 !important;
  --text-title-h4: #48b0bd !important;
  --text-title-h5: #bf68d9 !important;
  --text-title-h6: #7a818e !important;
  --textHighlight: #8a9a5b !important;
  --titlebar-background: #181b20 !important;
  --titlebar-background-focused: #181b20 !important;
  --titlebar-border-color: #7a818e !important;
  --titlebar-text-color: #a9abac !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --yellow: #e5c07b !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 27, 32);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(31, 35, 41);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 27, 32);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(122, 129, 142);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(24, 27, 32);
  border-radius: 40px;
  color: rgb(191, 104, 217);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 27, 32);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 27, 32);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(31, 35, 41);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(138, 154, 91);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
  text-decoration: underline rgb(169, 171, 172);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(83, 89, 101);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(142, 189, 107);
  border-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body p {
  color: rgb(169, 171, 172);
  outline: rgb(169, 171, 172) none 0px;
  text-decoration-color: rgb(169, 171, 172);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration-color: rgb(97, 175, 239);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgba(138, 154, 91, 0.3);
  text-decoration-color: rgba(138, 154, 91, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(83, 89, 101);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 221, 222);
  margin-left: 222.391px;
  margin-right: 222.391px;
  margin-top: 0px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(138, 154, 91);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  text-align: left;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(83, 89, 101);
  border-left-color: rgb(83, 89, 101);
  border-right-color: rgb(83, 89, 101);
  border-top-color: rgb(83, 89, 101);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
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
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(142, 189, 107);
  border-left-color: rgb(142, 189, 107);
  border-right-color: rgb(142, 189, 107);
  border-top-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(122, 122, 122, 0.06);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(142, 189, 107);
  border-left-color: rgb(142, 189, 107);
  border-right-color: rgb(142, 189, 107);
  border-top-color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 27, 32);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(122, 122, 122, 0.06);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(122, 122, 122, 0.06);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(191, 104, 217);
}

html[saved-theme="dark"] body h1 {
  color: rgb(229, 85, 97);
}

html[saved-theme="dark"] body h2 {
  color: rgb(142, 189, 107);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(204, 144, 87);
}

html[saved-theme="dark"] body h4 {
  color: rgb(72, 176, 189);
}

html[saved-theme="dark"] body h5 {
  color: rgb(191, 104, 217);
}

html[saved-theme="dark"] body h6 {
  color: rgb(122, 129, 142);
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
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(31, 35, 41) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(31, 35, 41);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 171, 172);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(83, 89, 101);
  border-bottom-width: 1px;
  border-left-color: rgb(83, 89, 101);
  border-right-color: rgb(83, 89, 101);
  border-right-width: 1px;
  border-top-color: rgb(83, 89, 101);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(169, 171, 172);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 171, 172);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(169, 171, 172);
  stroke: rgb(169, 171, 172);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(83, 89, 101);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(122, 129, 142);
  border-left-color: rgb(122, 129, 142);
  border-right-color: rgb(122, 129, 142);
  border-top-color: rgb(122, 129, 142);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 27, 32);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(169, 171, 172);
  border-left-color: rgb(169, 171, 172);
  border-right-color: rgb(169, 171, 172);
  border-top-color: rgb(169, 171, 172);
  color: rgb(169, 171, 172);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(24, 27, 32);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  color: rgb(191, 104, 217);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 75 !important;
  --accent-l: 48% !important;
  --accent-s: 26% !important;
  --aqua: #0184bc !important;
  --background-accent: #fff !important;
  --background-modifier-active-hover: hsla(75, 26%, 48%, 0.1) !important;
  --background-modifier-border: #a0a1a7 !important;
  --background-modifier-border-focus: #e5556197 !important;
  --background-modifier-border-hover: #e5556197 !important;
  --background-modifier-box-shadow: #0000001a !important;
  --background-modifier-cover: #000000cc !important;
  --background-modifier-error: #e45649 !important;
  --background-modifier-error-hover: #e45649 !important;
  --background-modifier-error-rgb: 230, 135, 135 !important;
  --background-modifier-form-field: #a0a1a7 !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #a0a1a7 !important;
  --background-modifier-message: #a0a1a7 !important;
  --background-modifier-success: #50a14f !important;
  --background-primary: #e6e6e6 !important;
  --background-primary-alt: #e1e1e1 !important;
  --background-secondary: #dcdcdc !important;
  --background-secondary-alt: #dcdcdc !important;
  --bases-cards-background: #e6e6e6 !important;
  --bases-cards-cover-background: #e1e1e1 !important;
  --bases-cards-shadow: 0 0 0 1px #a0a1a7 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #e5556197 !important;
  --bases-embed-border-color: #a0a1a7 !important;
  --bases-group-heading-property-color: #2d2f30 !important;
  --bases-table-border-color: #a0a1a7 !important;
  --bases-table-cell-background-active: #e6e6e6 !important;
  --bases-table-cell-background-disabled: #e1e1e1 !important;
  --bases-table-cell-background-selected: hsla(75, 26%, 48%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #e5556197 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(74, 26.26%, 51.6%) !important;
  --bases-table-group-background: #e1e1e1 !important;
  --bases-table-header-background: #e6e6e6 !important;
  --bases-table-header-color: #2d2f30 !important;
  --bases-table-summary-background: #e6e6e6 !important;
  --blockquote-border-color: hsl(74, 26.26%, 51.6%) !important;
  --blue: #4078f2 !important;
  --blur-background: color-mix(in srgb, #e6e6e6 65%, transparent) linear-gradient(#e6e6e6, color-mix(in srgb, #e6e6e6 65%, transparent)) !important;
  --canvas-background: #e6e6e6 !important;
  --canvas-card-label-color: #101012 !important;
  --caret-color: #383a42 !important;
  --checkbox-border-color: #101012 !important;
  --checkbox-border-color-hover: #2d2f30 !important;
  --checkbox-color: #50a14f !important;
  --checkbox-color-hover: #a626a4 !important;
  --checkbox-marker-color: #e6e6e6 !important;
  --checklist-done-color: #2d2f30 !important;
  --code-background: #e1e1e1 !important;
  --code-border-color: #a0a1a7 !important;
  --code-comment: #101012 !important;
  --code-normal: #383a42 !important;
  --code-punctuation: #2d2f30 !important;
  --collapse-icon-color: #101012 !important;
  --collapse-icon-color-collapsed: #4078f2 !important;
  --color-accent: hsl(75, 26%, 48%) !important;
  --color-accent-1: hsl(74, 26.26%, 51.6%) !important;
  --color-accent-2: hsl(72, 26.52%, 55.2%) !important;
  --color-accent-hsl: 75, 26%, 48% !important;
  --dark: #383a42 !important;
  --darkgray: #383a42 !important;
  --divider-color: transparent !important;
  --divider-color-hover: #4fa6ed !important;
  --drag-ghost-background: #dcdcdc !important;
  --dropdown-background: #fafafa !important;
  --dropdown-background-hover: #e5556197 !important;
  --embed-block-shadow-hover: 0 0 0 1px #a0a1a7, inset 0 0 0 1px #a0a1a7 !important;
  --embed-border-start: 2px solid hsl(74, 26.26%, 51.6%) !important;
  --embed-padding: 0 0 0 16px !important;
  --file-header-background: #e6e6e6 !important;
  --file-header-background-focused: #e6e6e6 !important;
  --flair-background: #fafafa !important;
  --flair-color: #383a42 !important;
  --footnote-divider-color: #a0a1a7 !important;
  --footnote-id-color: #2d2f30 !important;
  --footnote-id-color-no-occurrences: #101012 !important;
  --graph-node: #2d2f30 !important;
  --graph-node-focused: #4078f2 !important;
  --graph-node-unresolved: #101012 !important;
  --graph-text: #383a42 !important;
  --gray: #2d2f30 !important;
  --gray-1: #a0a1a7 !important;
  --gray-2: #a0a1a7 !important;
  --green: #50a14f !important;
  --heading-formatting: #101012 !important;
  --highlight: #8a9a5b !important;
  --hr-color: #a0a1a7 !important;
  --icon-color: #2d2f30 !important;
  --icon-color-active: #4078f2 !important;
  --icon-color-focused: #383a42 !important;
  --icon-color-hover: #2d2f30 !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #101012 !important;
  --input-placeholder-color: #101012 !important;
  --interactive-accent: hsl(74, 26.26%, 51.6%) !important;
  --interactive-accent-hover: hsl(75, 16%, 44%) !important;
  --interactive-accent-hsl: 75, 26%, 48% !important;
  --interactive-accent-rgb: 21, 146, 255 !important;
  --interactive-hover: #e5556197 !important;
  --interactive-normal: #fafafa !important;
  --light: #e6e6e6 !important;
  --lightgray: #dcdcdc !important;
  --link-color: #4078f2 !important;
  --link-color-hover: #e45649 !important;
  --link-decoration: none !important;
  --link-external-color: #4078f2 !important;
  --link-external-color-hover: #e45649 !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #4078f2 !important;
  --link-unresolved-decoration-color: hsla(75, 26%, 48%, 0.3) !important;
  --list-marker-color: #101012 !important;
  --list-marker-color-collapsed: #4078f2 !important;
  --list-marker-color-hover: #2d2f30 !important;
  --menu-background: #dcdcdc !important;
  --menu-border-color: #e5556197 !important;
  --metadata-border-color: #a0a1a7 !important;
  --metadata-divider-color: #a0a1a7 !important;
  --metadata-input-text-color: #383a42 !important;
  --metadata-label-text-color: #2d2f30 !important;
  --metadata-label-text-color-hover: #2d2f30 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #e5556197 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #e5556197 !important;
  --modal-background: #e6e6e6 !important;
  --modal-border-color: #50a14f !important;
  --nav-collapse-icon-color: #101012 !important;
  --nav-collapse-icon-color-collapsed: #101012 !important;
  --nav-heading-color: #383a42 !important;
  --nav-heading-color-collapsed: #101012 !important;
  --nav-heading-color-collapsed-hover: #2d2f30 !important;
  --nav-heading-color-hover: #383a42 !important;
  --nav-item-background-active: #4fa6ed !important;
  --nav-item-background-selected: hsla(75, 26%, 48%, 0.15) !important;
  --nav-item-color: #2d2f30 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #4078f2 !important;
  --nav-item-color-hover: #383a42 !important;
  --nav-item-color-selected: #383a42 !important;
  --nav-tag-color: #101012 !important;
  --nav-tag-color-active: #2d2f30 !important;
  --nav-tag-color-hover: #2d2f30 !important;
  --orange: #c18401 !important;
  --panel-border-color: #383a42 !important;
  --pdf-background: #e6e6e6 !important;
  --pdf-page-background: #e6e6e6 !important;
  --pdf-sidebar-background: #e6e6e6 !important;
  --pill-border-color: #a0a1a7 !important;
  --pill-border-color-hover: #e5556197 !important;
  --pill-color: #2d2f30 !important;
  --pill-color-hover: #383a42 !important;
  --pill-color-remove: #101012 !important;
  --pill-color-remove-hover: #4078f2 !important;
  --prompt-background: #e6e6e6 !important;
  --prompt-border-color: #50a14f !important;
  --purple: #a626a4 !important;
  --raised-background: color-mix(in srgb, #e6e6e6 65%, transparent) linear-gradient(#e6e6e6, color-mix(in srgb, #e6e6e6 65%, transparent)) !important;
  --red: #e45649 !important;
  --ribbon-background: #dcdcdc !important;
  --ribbon-background-collapsed: #e6e6e6 !important;
  --scrollbar-active-thumb-bg: #4fa6ed !important;
  --scrollbar-thumb-bg: #686868 !important;
  --search-clear-button-color: #2d2f30 !important;
  --search-icon-color: #2d2f30 !important;
  --search-result-background: #e6e6e6 !important;
  --secondary: #4078f2 !important;
  --setting-group-heading-color: #383a42 !important;
  --setting-items-background: #e1e1e1 !important;
  --setting-items-border-color: #a0a1a7 !important;
  --slider-thumb-border-color: #e5556197 !important;
  --slider-track-background: #a0a1a7 !important;
  --status-bar-background: #dcdcdc !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #2d2f30 !important;
  --suggestion-background: #e6e6e6 !important;
  --tab-background-active: #e6e6e6 !important;
  --tab-container-background: #dcdcdc !important;
  --tab-divider-color: #e5556197 !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #dcdcdc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #dcdcdc, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(75, 26%, 48%) !important;
  --tab-text-color: #101012 !important;
  --tab-text-color-active: #2d2f30 !important;
  --tab-text-color-focused: #2d2f30 !important;
  --tab-text-color-focused-active: #2d2f30 !important;
  --tab-text-color-focused-active-current: #383a42 !important;
  --tab-text-color-focused-highlighted: #4078f2 !important;
  --table-add-button-border-color: #a0a1a7 !important;
  --table-border-color: #a0a1a7 !important;
  --table-drag-handle-background-active: hsl(74, 26.26%, 51.6%) !important;
  --table-drag-handle-color: #101012 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #a0a1a7 !important;
  --table-header-color: #383a42 !important;
  --table-selection: hsla(75, 26%, 48%, 0.1) !important;
  --table-selection-border-color: hsl(74, 26.26%, 51.6%) !important;
  --tag-background: #e1e1e1 !important;
  --tag-background-hover: #8ebd6b !important;
  --tag-border-color: hsla(75, 26%, 48%, 0.15) !important;
  --tag-border-color-hover: hsla(75, 26%, 48%, 0.15) !important;
  --tag-color: #a626a4 !important;
  --tag-color-hover: #a626a4 !important;
  --tag-padding-x: 5px !important;
  --tag-padding-y: 5px !important;
  --tag-radius: 40px !important;
  --tertiary: #e45649 !important;
  --text-accent: #4078f2 !important;
  --text-accent-hover: #e45649 !important;
  --text-error: #e75545 !important;
  --text-error-hover: #f86959 !important;
  --text-faint: #101012 !important;
  --text-highlight-bg: #8a9a5b !important;
  --text-muted: #2d2f30 !important;
  --text-normal: #383a42 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: #00000050 !important;
  --text-title-h1: #e45649 !important;
  --text-title-h2: #50a14f !important;
  --text-title-h3: #c18401 !important;
  --text-title-h4: #0184bc !important;
  --text-title-h5: #a626a4 !important;
  --text-title-h6: #818387 !important;
  --textHighlight: #8a9a5b !important;
  --titlebar-background: #dcdcdc !important;
  --titlebar-background-focused: #dcdcdc !important;
  --titlebar-border-color: #a0a1a7 !important;
  --titlebar-text-color: #2d2f30 !important;
  --titlebar-text-color-focused: #383a42 !important;
  --vault-profile-color: #383a42 !important;
  --vault-profile-color-hover: #383a42 !important;
  --yellow: #986801 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(220, 220, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(230, 230, 230);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(230, 230, 230);
  border-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(160, 161, 167);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(225, 225, 225);
  border-radius: 40px;
  color: rgb(166, 38, 164);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(220, 220, 220);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(220, 220, 220);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(230, 230, 230);
  color: rgb(56, 58, 66);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(229, 85, 97);
  outline: rgb(229, 85, 97) none 0px;
  text-decoration-color: rgb(229, 85, 97);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(142, 189, 107);
  outline: rgb(142, 189, 107) none 0px;
  text-decoration-color: rgb(142, 189, 107);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(138, 154, 91);
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body del {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(56, 58, 66);
  text-decoration: underline rgb(45, 47, 48);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(16, 16, 18);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(80, 161, 79);
  border-color: rgb(80, 161, 79);
}

html[saved-theme="light"] body p {
  color: rgb(45, 47, 48);
  outline: rgb(45, 47, 48) none 0px;
  text-decoration-color: rgb(45, 47, 48);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration-color: rgb(64, 120, 242);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration-color: rgb(64, 120, 242);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(64, 120, 242);
  outline: rgb(64, 120, 242) none 0px;
  text-decoration: rgba(138, 154, 91, 0.3);
  text-decoration-color: rgba(138, 154, 91, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body dt {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ol > li {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul > li {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(16, 16, 18);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body table {
  color: rgb(56, 58, 66);
  margin-left: 222.391px;
  margin-right: 222.391px;
  margin-top: 0px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(152, 104, 1);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(152, 104, 1);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(152, 104, 1);
  border-left-color: rgb(152, 104, 1);
  border-right-color: rgb(152, 104, 1);
  border-top-color: rgb(152, 104, 1);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(160, 161, 167);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figcaption {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(149, 164, 99);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  text-align: left;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(16, 16, 18);
  border-left-color: rgb(16, 16, 18);
  border-right-color: rgb(16, 16, 18);
  border-top-color: rgb(16, 16, 18);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
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
  background-color: rgb(160, 161, 167);
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(80, 161, 79);
  border-left-color: rgb(80, 161, 79);
  border-right-color: rgb(80, 161, 79);
  border-top-color: rgb(80, 161, 79);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(80, 161, 79);
  border-left-color: rgb(80, 161, 79);
  border-right-color: rgb(80, 161, 79);
  border-top-color: rgb(80, 161, 79);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(220, 220, 220);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(166, 38, 164);
}

html[saved-theme="light"] body h1 {
  color: rgb(228, 86, 73);
}

html[saved-theme="light"] body h2 {
  color: rgb(80, 161, 79);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body h3 {
  color: rgb(193, 132, 1);
}

html[saved-theme="light"] body h4 {
  color: rgb(1, 132, 188);
}

html[saved-theme="light"] body h5 {
  color: rgb(166, 38, 164);
}

html[saved-theme="light"] body h6 {
  color: rgb(129, 131, 135);
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
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(230, 230, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(230, 230, 230);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(45, 47, 48);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(56, 58, 66);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(220, 220, 220);
  border-bottom-color: rgb(56, 58, 66);
  border-bottom-width: 1px;
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-right-width: 1px;
  border-top-color: rgb(56, 58, 66);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(45, 47, 48);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(45, 47, 48);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(45, 47, 48);
  stroke: rgb(45, 47, 48);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(16, 16, 18);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(160, 161, 167);
  border-left-color: rgb(160, 161, 167);
  border-right-color: rgb(160, 161, 167);
  border-top-color: rgb(160, 161, 167);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(220, 220, 220);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body abbr {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(45, 47, 48);
  border-left-color: rgb(45, 47, 48);
  border-right-color: rgb(45, 47, 48);
  border-top-color: rgb(45, 47, 48);
  color: rgb(45, 47, 48);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

html[saved-theme="light"] body sub {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body summary {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body sup {
  color: rgb(56, 58, 66);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(225, 225, 225);
  border-bottom-color: rgba(138, 154, 91, 0.15);
  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  border-left-color: rgba(138, 154, 91, 0.15);
  border-right-color: rgba(138, 154, 91, 0.15);
  border-top-color: rgba(138, 154, 91, 0.15);
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  color: rgb(166, 38, 164);
}`,
  },
};
