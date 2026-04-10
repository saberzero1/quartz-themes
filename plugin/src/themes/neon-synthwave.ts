import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neon-synthwave", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-accent: #000 !important;
  --background-modifier-border: #fd8bfd !important;
  --background-primary: #262335 !important;
  --background-primary-alt: #241734 !important;
  --background-secondary: #241B2F !important;
  --background-secondary-alt: #241B2F !important;
  --bases-cards-background: #262335 !important;
  --bases-cards-cover-background: #241734 !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #fd8bfd !important;
  --bases-embed-border-color: #fd8bfd !important;
  --bases-embed-border-radius: 5px !important;
  --bases-group-heading-property-color: #8be9fd !important;
  --bases-table-border-color: #fd8bfd !important;
  --bases-table-cell-background-active: #262335 !important;
  --bases-table-cell-background-disabled: #241734 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5900ff !important;
  --bases-table-container-border-radius: 5px !important;
  --bases-table-group-background: #241734 !important;
  --bases-table-header-background: #262335 !important;
  --bases-table-header-color: #8be9fd !important;
  --bases-table-summary-background: #262335 !important;
  --blockquote-border-color: #5900ff !important;
  --blur-background: color-mix(in srgb, #bd93f9 65%, transparent) linear-gradient(#bd93f9, color-mix(in srgb, #bd93f9 65%, transparent)) !important;
  --callout-radius: 5px;
  --canvas-background: #262335 !important;
  --canvas-card-label-color: #bd93f9 !important;
  --canvas-controls-radius: 5px !important;
  --caret-color: #d4f5ff !important;
  --checkbox-border-color: #bd93f9 !important;
  --checkbox-border-color-hover: #8be9fd !important;
  --checkbox-color: #5900ff !important;
  --checkbox-color-hover: #FF00FF !important;
  --checkbox-marker-color: #262335 !important;
  --checkbox-radius: 5px !important;
  --checklist-done-color: #8be9fd !important;
  --clickable-icon-radius: 5px !important;
  --code-background: #241734 !important;
  --code-border-color: #fd8bfd !important;
  --code-comment: #bd93f9 !important;
  --code-normal: #d4f5ff !important;
  --code-punctuation: #8be9fd !important;
  --code-radius: 5px !important;
  --collapse-icon-color: #bd93f9 !important;
  --collapse-icon-color-collapsed: #FF1690 !important;
  --dark: #d4f5ff !important;
  --darkgray: #d4f5ff !important;
  --divider-color: #fd8bfd !important;
  --divider-color-hover: #5900ff !important;
  --dropdown-background: #bd93f9 !important;
  --dropdown-background-hover: #FF00FF !important;
  --embed-block-shadow-hover: 0 0 0 1px #fd8bfd, inset 0 0 0 1px #fd8bfd !important;
  --embed-border-start: 2px solid #5900ff !important;
  --file-header-background: #262335 !important;
  --file-header-background-focused: #262335 !important;
  --flair-background: #bd93f9 !important;
  --flair-color: #d4f5ff !important;
  --footnote-divider-color: #fd8bfd !important;
  --footnote-id-color: #8be9fd !important;
  --footnote-id-color-no-occurrences: #bd93f9 !important;
  --footnote-radius: 5px !important;
  --graph-node: #8be9fd !important;
  --graph-node-focused: #FF1690 !important;
  --graph-node-unresolved: #bd93f9 !important;
  --graph-text: #d4f5ff !important;
  --gray: #8be9fd !important;
  --heading-formatting: #bd93f9 !important;
  --highlight: #ffd319 !important;
  --hr-color: #fd8bfd !important;
  --icon-color: #8be9fd !important;
  --icon-color-active: #FF1690 !important;
  --icon-color-focused: #d4f5ff !important;
  --icon-color-hover: #8be9fd !important;
  --input-date-separator: #bd93f9 !important;
  --input-placeholder-color: #bd93f9 !important;
  --interactive-accent: #5900ff !important;
  --interactive-accent-hover: #FF00FF !important;
  --interactive-hover: #FF00FF !important;
  --interactive-normal: #bd93f9 !important;
  --light: #262335 !important;
  --lightgray: #241B2F !important;
  --link-color: #FF1690 !important;
  --link-color-hover: #7a6ae6 !important;
  --link-external-color: #FF1690 !important;
  --link-external-color-hover: #7a6ae6 !important;
  --link-unresolved-color: #FF1690 !important;
  --list-marker-color: #bd93f9 !important;
  --list-marker-color-collapsed: #FF1690 !important;
  --list-marker-color-hover: #8be9fd !important;
  --menu-background: #241B2F !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #fd8bfd !important;
  --metadata-divider-color: #fd8bfd !important;
  --metadata-input-text-color: #d4f5ff !important;
  --metadata-label-text-color: #8be9fd !important;
  --metadata-label-text-color-hover: #8be9fd !important;
  --modal-background: #262335 !important;
  --modal-radius: 5px !important;
  --nav-collapse-icon-color: #bd93f9 !important;
  --nav-collapse-icon-color-collapsed: #bd93f9 !important;
  --nav-heading-color: #d4f5ff !important;
  --nav-heading-color-collapsed: #bd93f9 !important;
  --nav-heading-color-collapsed-hover: #8be9fd !important;
  --nav-heading-color-hover: #d4f5ff !important;
  --nav-item-color: #8be9fd !important;
  --nav-item-color-active: #d4f5ff !important;
  --nav-item-color-highlighted: #FF1690 !important;
  --nav-item-color-hover: #d4f5ff !important;
  --nav-item-color-selected: #d4f5ff !important;
  --nav-item-radius: 5px !important;
  --nav-tag-color: #bd93f9 !important;
  --nav-tag-color-active: #8be9fd !important;
  --nav-tag-color-hover: #8be9fd !important;
  --nav-tag-radius: 5px !important;
  --pdf-background: #262335 !important;
  --pdf-page-background: #262335 !important;
  --pdf-shadow: 0 0 0 1px #fd8bfd !important;
  --pdf-sidebar-background: #262335 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #fd8bfd !important;
  --pill-border-color: #fd8bfd !important;
  --pill-color: #8be9fd !important;
  --pill-color-hover: #d4f5ff !important;
  --pill-color-remove: #bd93f9 !important;
  --pill-color-remove-hover: #FF1690 !important;
  --prompt-background: #262335 !important;
  --radius-l: 5px !important;
  --radius-m: 5px !important;
  --radius-s: 5px !important;
  --raised-background: color-mix(in srgb, #bd93f9 65%, transparent) linear-gradient(#bd93f9, color-mix(in srgb, #bd93f9 65%, transparent)) !important;
  --ribbon-background: #241B2F !important;
  --ribbon-background-collapsed: #262335 !important;
  --scrollbar-radius: 5px !important;
  --search-clear-button-color: #8be9fd !important;
  --search-icon-color: #8be9fd !important;
  --search-result-background: #262335 !important;
  --secondary: #FF1690 !important;
  --setting-group-heading-color: #d4f5ff !important;
  --setting-items-background: #241734 !important;
  --setting-items-border-color: #fd8bfd !important;
  --setting-items-radius: 5px !important;
  --slider-thumb-radius: 5px !important;
  --slider-track-background: #fd8bfd !important;
  --status-bar-background: #241B2F !important;
  --status-bar-border-color: #fd8bfd !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #8be9fd !important;
  --suggestion-background: #262335 !important;
  --tab-background-active: #262335 !important;
  --tab-container-background: #241B2F !important;
  --tab-outline-color: #fd8bfd !important;
  --tab-radius: 5px !important;
  --tab-radius-active: 5px !important;
  --tab-switcher-background: #241B2F !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #241B2F, transparent) !important;
  --tab-text-color: #bd93f9 !important;
  --tab-text-color-active: #8be9fd !important;
  --tab-text-color-focused: #8be9fd !important;
  --tab-text-color-focused-active: #8be9fd !important;
  --tab-text-color-focused-active-current: #d4f5ff !important;
  --tab-text-color-focused-highlighted: #FF1690 !important;
  --table-add-button-border-color: #fd8bfd !important;
  --table-border-color: #fd8bfd !important;
  --table-drag-handle-background-active: #5900ff !important;
  --table-drag-handle-color: #bd93f9 !important;
  --table-header-border-color: #fd8bfd !important;
  --table-header-color: #d4f5ff !important;
  --table-selection-border-color: #5900ff !important;
  --tag-color: #FF1690 !important;
  --tag-color-hover: #FF1690 !important;
  --tertiary: #7a6ae6 !important;
  --text-accent: #FF1690 !important;
  --text-accent-hover: #7a6ae6 !important;
  --text-faint: #bd93f9 !important;
  --text-highlight-bg: #ffd319 !important;
  --text-muted: #8be9fd !important;
  --text-normal: #d4f5ff !important;
  --textHighlight: #ffd319 !important;
  --titlebar-background: #241B2F !important;
  --titlebar-background-focused: #241B2F !important;
  --titlebar-border-color: #fd8bfd !important;
  --titlebar-text-color: #8be9fd !important;
  --titlebar-text-color-focused: #d4f5ff !important;
  --toggle-radius: 5px !important;
  --toggle-thumb-radius: 5px !important;
  --vault-profile-color: #d4f5ff !important;
  --vault-profile-color-hover: #d4f5ff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 27, 47);
  color: rgb(212, 245, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(38, 35, 53);
  color: rgb(212, 245, 255);
}

html body .bases-table thead th {
  border-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

html body .canvas-node {
  border-color: rgb(212, 245, 255);
}

html body .canvas-node-content {
  color: rgb(212, 245, 255);
}

html body .canvas-node-file {
  color: rgb(212, 245, 255);
}

html body .canvas-node-group {
  border-color: rgb(212, 245, 255);
}

html body .canvas-sidebar {
  background-color: rgb(36, 27, 47);
  border-color: rgb(212, 245, 255);
}

html body .note-properties {
  border-color: rgb(253, 139, 253);
}

html body .note-properties-key {
  color: rgb(139, 233, 253);
}

html body .note-properties-row {
  border-color: rgb(139, 233, 253);
}

html body .note-properties-tags {
  color: rgb(255, 22, 144);
}

html body .note-properties-value {
  color: rgb(139, 233, 253);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 27, 47);
  color: rgb(212, 245, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(253, 139, 253);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 27, 47);
  border-left-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

html body div#quartz-root {
  background-color: rgb(38, 35, 53);
  color: rgb(212, 245, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body .page article p > em, html em {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body .page article p > i, html i {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body .page article p > strong, html strong {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body .text-highlight {
  background-color: rgb(255, 211, 25);
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body del {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body h1.article-title {
  color: rgb(212, 245, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 147, 249);
  border-radius: 5px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(89, 0, 255);
  border-color: rgb(89, 0, 255);
}

html body p {
  color: rgb(139, 233, 253);
  outline: rgb(139, 233, 253) none 0px;
  text-decoration-color: rgb(139, 233, 253);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration-color: rgb(255, 22, 144);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration-color: rgb(255, 22, 144);
}

html body a.internal.broken {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
}`,
    lists: `html body dd {
  color: rgb(212, 245, 255);
}

html body dt {
  color: rgb(212, 245, 255);
}

html body ol > li {
  color: rgb(212, 245, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body ul > li {
  color: rgb(212, 245, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(189, 147, 249);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body table {
  color: rgb(212, 245, 255);
}

html body td {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

html body th {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body pre:has(> code) {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body figcaption {
  color: rgb(212, 245, 255);
}

html body figure {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body img {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body video {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .footnotes {
  border-top-color: rgb(212, 245, 255);
  color: rgb(212, 245, 255);
}

html body .transclude {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(89, 0, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(189, 147, 249);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(38, 35, 53);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration-color: rgb(212, 245, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 245, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(212, 245, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(212, 245, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 27, 47);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

html body a.internal.tag-link::before {
  color: rgb(255, 22, 144);
}

html body h1 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(255, 0, 255) 0px 0px 12.944px;
}

html body h2 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(56, 232, 255) 0px 0px 11.696px;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(212, 245, 255);
}

html body h3 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(0, 255, 0) 0px 0px 10.544px;
}

html body h4 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(255, 255, 0) 0px 0px 9.504px;
}

html body h5 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(255, 0, 0) 0px 0px 8.608px;
}

html body h6 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(0, 0, 255) 0px 0px 8px;
}

html body hr {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html body ::-webkit-scrollbar {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

html body ::-webkit-scrollbar-track {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 233, 253);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 233, 253);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(212, 245, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(139, 233, 253);
}`,
    footer: `html body footer {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  color: rgb(139, 233, 253);
}

html body footer ul li a {
  color: rgb(139, 233, 253);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(212, 245, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  color: rgb(212, 245, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 233, 253);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 233, 253);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body li.section-li > .section .meta {
  color: rgb(139, 233, 253);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 233, 253);
}

html body ul.section-ul {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(139, 233, 253);
}

html body .darkmode svg {
  color: rgb(139, 233, 253);
  stroke: rgb(139, 233, 253);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(139, 233, 253);
}

html body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  color: rgb(212, 245, 255);
}

html body .metadata {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(139, 233, 253);
}

html body .metadata-properties {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  color: rgb(139, 233, 253);
}

html body .navigation-progress {
  background-color: rgb(36, 27, 47);
}

html body .page-header h2.page-title {
  color: rgb(212, 245, 255);
}

html body abbr {
  color: rgb(212, 245, 255);
}

html body details {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  color: rgb(139, 233, 253);
}

html body kbd {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

html body progress {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

html body sub {
  color: rgb(212, 245, 255);
}

html body summary {
  color: rgb(212, 245, 255);
}

html body sup {
  color: rgb(212, 245, 255);
}

html body ul.tags > li {
  color: rgb(255, 22, 144);
}`,
  },
  light: {},
};
