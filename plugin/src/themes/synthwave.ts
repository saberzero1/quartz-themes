import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "synthwave", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #372b3d !important;
  --background-modifier-box-shadow: none !important;
  --background-modifier-cover: #171520d2 !important;
  --background-modifier-error: #8b0000 !important;
  --background-modifier-error-hover: #580000 !important;
  --background-modifier-form-field: #372b3d !important;
  --background-modifier-form-field-hover: #372b3d !important;
  --background-modifier-success: #7ee787 !important;
  --background-primary: #262335 !important;
  --background-primary-alt: #241b2f !important;
  --background-secondary: #241b2f !important;
  --background-secondary-alt: #262335 !important;
  --bases-cards-background: #262335 !important;
  --bases-cards-cover-background: #241b2f !important;
  --bases-cards-shadow: 0 0 0 1px #372b3d !important;
  --bases-embed-border-color: #372b3d !important;
  --bases-group-heading-property-color: #a7a4ac !important;
  --bases-table-border-color: #372b3d !important;
  --bases-table-cell-background-active: #262335 !important;
  --bases-table-cell-background-disabled: #241b2f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f97e72 !important;
  --bases-table-group-background: #241b2f !important;
  --bases-table-header-background: #262335 !important;
  --bases-table-header-color: #a7a4ac !important;
  --bases-table-summary-background: #262335 !important;
  --blockquote-border-color: #f97e72 !important;
  --blur-background: color-mix(in srgb, #614e83 65%, transparent) linear-gradient(#614e83, color-mix(in srgb, #614e83 65%, transparent)) !important;
  --canvas-background: #262335 !important;
  --canvas-card-label-color: #706a76 !important;
  --caret-color: #fff !important;
  --checkbox-border-color: #706a76 !important;
  --checkbox-border-color-hover: #a7a4ac !important;
  --checkbox-color: #f97e72 !important;
  --checkbox-color-hover: #ff7edb !important;
  --checkbox-marker-color: #262335 !important;
  --checklist-done-color: #a7a4ac !important;
  --code-background: #241b2f !important;
  --code-border-color: #372b3d !important;
  --code-comment: #706a76 !important;
  --code-normal: #fff !important;
  --code-punctuation: #a7a4ac !important;
  --collapse-icon-color: #706a76 !important;
  --collapse-icon-color-collapsed: #f97e72 !important;
  --dark: #fff !important;
  --darkgray: #fff !important;
  --divider-color: #372b3d !important;
  --divider-color-hover: #f97e72 !important;
  --dropdown-background: #614e83 !important;
  --dropdown-background-hover: #745d9e !important;
  --embed-block-shadow-hover: 0 0 0 1px #372b3d, inset 0 0 0 1px #372b3d !important;
  --embed-border-start: 2px solid #f97e72 !important;
  --file-header-background: #262335 !important;
  --file-header-background-focused: #262335 !important;
  --flair-background: #614e83 !important;
  --flair-color: #fff !important;
  --footnote-divider-color: #372b3d !important;
  --footnote-id-color: #a7a4ac !important;
  --footnote-id-color-no-occurrences: #706a76 !important;
  --graph-node: #a7a4ac !important;
  --graph-node-focused: #f97e72 !important;
  --graph-node-unresolved: #706a76 !important;
  --graph-text: #fff !important;
  --gray: #a7a4ac !important;
  --heading-formatting: #706a76 !important;
  --highlight: #d18616bb !important;
  --hr-color: #372b3d !important;
  --icon-color: #a7a4ac !important;
  --icon-color-active: #f97e72 !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #a7a4ac !important;
  --input-date-separator: #706a76 !important;
  --input-placeholder-color: #706a76 !important;
  --interactive-accent: #f97e72 !important;
  --interactive-accent-hover: #ff7edb !important;
  --interactive-hover: #745d9e !important;
  --interactive-normal: #614e83 !important;
  --interactive-success: #7ee787 !important;
  --light: #262335 !important;
  --lightgray: #241b2f !important;
  --link-color: #f97e72 !important;
  --link-color-hover: #ff7edb !important;
  --link-external-color: #f97e72 !important;
  --link-external-color-hover: #ff7edb !important;
  --link-unresolved-color: #f97e72 !important;
  --list-marker-color: #706a76 !important;
  --list-marker-color-collapsed: #f97e72 !important;
  --list-marker-color-hover: #a7a4ac !important;
  --menu-background: #241b2f !important;
  --metadata-border-color: #372b3d !important;
  --metadata-divider-color: #372b3d !important;
  --metadata-input-text-color: #fff !important;
  --metadata-label-text-color: #a7a4ac !important;
  --metadata-label-text-color-hover: #a7a4ac !important;
  --modal-background: #262335 !important;
  --nav-collapse-icon-color: #706a76 !important;
  --nav-collapse-icon-color-collapsed: #706a76 !important;
  --nav-heading-color: #fff !important;
  --nav-heading-color-collapsed: #706a76 !important;
  --nav-heading-color-collapsed-hover: #a7a4ac !important;
  --nav-heading-color-hover: #fff !important;
  --nav-item-color: #a7a4ac !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-highlighted: #f97e72 !important;
  --nav-item-color-hover: #fff !important;
  --nav-item-color-selected: #fff !important;
  --nav-tag-color: #706a76 !important;
  --nav-tag-color-active: #a7a4ac !important;
  --nav-tag-color-hover: #a7a4ac !important;
  --pdf-background: #262335 !important;
  --pdf-page-background: #262335 !important;
  --pdf-shadow: 0 0 0 1px #372b3d !important;
  --pdf-sidebar-background: #262335 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #372b3d !important;
  --pill-border-color: #372b3d !important;
  --pill-color: #a7a4ac !important;
  --pill-color-hover: #fff !important;
  --pill-color-remove: #706a76 !important;
  --pill-color-remove-hover: #f97e72 !important;
  --prompt-background: #262335 !important;
  --raised-background: color-mix(in srgb, #614e83 65%, transparent) linear-gradient(#614e83, color-mix(in srgb, #614e83 65%, transparent)) !important;
  --ribbon-background: #241b2f !important;
  --ribbon-background-collapsed: #262335 !important;
  --search-clear-button-color: #a7a4ac !important;
  --search-icon-color: #a7a4ac !important;
  --search-result-background: #262335 !important;
  --secondary: #f97e72 !important;
  --setting-group-heading-color: #fff !important;
  --setting-items-background: #241b2f !important;
  --setting-items-border-color: #372b3d !important;
  --slider-track-background: #372b3d !important;
  --status-bar-background: #241b2f !important;
  --status-bar-border-color: #372b3d !important;
  --status-bar-text-color: #a7a4ac !important;
  --suggestion-background: #262335 !important;
  --tab-background-active: #262335 !important;
  --tab-container-background: #241b2f !important;
  --tab-outline-color: #372b3d !important;
  --tab-switcher-background: #241b2f !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #241b2f, transparent) !important;
  --tab-text-color: #706a76 !important;
  --tab-text-color-active: #a7a4ac !important;
  --tab-text-color-focused: #a7a4ac !important;
  --tab-text-color-focused-active: #a7a4ac !important;
  --tab-text-color-focused-active-current: #fff !important;
  --tab-text-color-focused-highlighted: #f97e72 !important;
  --table-add-button-border-color: #372b3d !important;
  --table-border-color: #372b3d !important;
  --table-drag-handle-background-active: #f97e72 !important;
  --table-drag-handle-color: #706a76 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-border-color: #372b3d !important;
  --table-header-color: #fff !important;
  --table-selection-border-color: #f97e72 !important;
  --tag-color: #f97e72 !important;
  --tag-color-hover: #f97e72 !important;
  --tertiary: #ff7edb !important;
  --text-accent: #f97e72 !important;
  --text-accent-hover: #ff7edb !important;
  --text-error: red !important;
  --text-error-hover: #ff0 !important;
  --text-faint: #706a76 !important;
  --text-highlight-bg: #d18616bb !important;
  --text-highlight-bg-active: #d1861655 !important;
  --text-muted: #a7a4ac !important;
  --text-normal: #fff !important;
  --text-on-accent: #fff !important;
  --text-selection: #ffffff20 !important;
  --textHighlight: #d18616bb !important;
  --titlebar-background: #241b2f !important;
  --titlebar-background-focused: #262335 !important;
  --titlebar-border-color: #372b3d !important;
  --titlebar-text-color: #a7a4ac !important;
  --titlebar-text-color-focused: #fff !important;
  --vault-profile-color: #fff !important;
  --vault-profile-color-hover: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 27, 47);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 35, 53);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 27, 47);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(55, 43, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 27, 47);
  border-left-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(38, 35, 53);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  background-color: rgba(209, 134, 22, 0.733);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(167, 164, 172);
  outline: rgb(167, 164, 172) none 0px;
  text-decoration: rgb(167, 164, 172);
  text-decoration-color: rgb(167, 164, 172);
}`,
    links: `body a.external, footer a {
  color: rgb(249, 126, 114);
  outline: rgb(249, 126, 114) none 0px;
  text-decoration: underline rgb(249, 126, 114);
  text-decoration-color: rgb(249, 126, 114);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(249, 126, 114);
  outline: rgb(249, 126, 114) none 0px;
  text-decoration: underline rgb(249, 126, 114);
  text-decoration-color: rgb(249, 126, 114);
}

body a.internal.broken {
  color: rgb(249, 126, 114);
  outline: rgb(249, 126, 114) none 0px;
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 106, 118);
  text-decoration: rgb(112, 106, 118);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
}

body td {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
}

body pre:has(> code) {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(249, 126, 114);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(249, 126, 114);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(167, 164, 172);
  text-decoration: line-through rgb(167, 164, 172);
  text-decoration-color: rgb(167, 164, 172);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 106, 118);
  border-left-color: rgb(112, 106, 118);
  border-right-color: rgb(112, 106, 118);
  border-top-color: rgb(112, 106, 118);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  background-color: rgb(55, 43, 61);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 35, 53);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 27, 47);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body a.internal.tag-link::before {
  color: rgb(249, 126, 114);
}

body h1 {
  color: rgb(255, 255, 255);
}

body h2 {
  color: rgb(255, 255, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(255, 255, 255);
}

body h5 {
  color: rgb(255, 255, 255);
}

body h6 {
  color: rgb(255, 255, 255);
}

body hr {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(167, 164, 172);
  text-decoration: rgb(167, 164, 172);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(167, 164, 172);
  text-decoration: rgb(167, 164, 172);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(167, 164, 172);
  text-decoration: rgb(167, 164, 172);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}`,
    footer: `body footer {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(167, 164, 172);
}

body footer ul li a {
  color: rgb(167, 164, 172);
  text-decoration: rgb(167, 164, 172);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(167, 164, 172);
  text-decoration: rgb(167, 164, 172);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(167, 164, 172);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(167, 164, 172);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(167, 164, 172);
  text-decoration: rgb(167, 164, 172);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

body .darkmode svg {
  color: rgb(167, 164, 172);
  stroke: rgb(167, 164, 172);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

body .breadcrumb-element p {
  color: rgb(112, 106, 118);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(55, 43, 61);
  border-left-color: rgb(55, 43, 61);
  border-right-color: rgb(55, 43, 61);
  border-top-color: rgb(55, 43, 61);
  color: rgb(167, 164, 172);
}

body .metadata-properties {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

body .navigation-progress {
  background-color: rgb(36, 27, 47);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(167, 164, 172);
  border-left-color: rgb(167, 164, 172);
  border-right-color: rgb(167, 164, 172);
  border-top-color: rgb(167, 164, 172);
  color: rgb(167, 164, 172);
}

body kbd {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
