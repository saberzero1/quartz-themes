import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "perso", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-border: #ddd !important;
  --background-primary: #f8f8f8 !important;
  --background-primary-alt: #f5f5f5 !important;
  --background-secondary: #f2f3f5 !important;
  --background-secondary-alt: #e3e5e8 !important;
  --bases-cards-background: #f8f8f8 !important;
  --bases-cards-cover-background: #f5f5f5 !important;
  --bases-cards-shadow: 0 0 0 1px #ddd !important;
  --bases-embed-border-color: #ddd !important;
  --bases-group-heading-property-color: #888888 !important;
  --bases-table-border-color: #ddd !important;
  --bases-table-cell-background-active: #f8f8f8 !important;
  --bases-table-cell-background-disabled: #f5f5f5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7b6cd9 !important;
  --bases-table-group-background: #f5f5f5 !important;
  --bases-table-header-background: #f8f8f8 !important;
  --bases-table-header-color: #888888 !important;
  --bases-table-summary-background: #f8f8f8 !important;
  --blockquote-border-color: #7b6cd9 !important;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent)) !important;
  --canvas-background: #f8f8f8 !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #3f3f3f !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #888888 !important;
  --checkbox-color: #7b6cd9 !important;
  --checkbox-color-hover: #8273e6 !important;
  --checkbox-marker-color: #f8f8f8 !important;
  --checklist-done-color: #888888 !important;
  --code-background: #f5f5f5 !important;
  --code-border-color: #ddd !important;
  --code-comment: #999999 !important;
  --code-normal: #3f3f3f !important;
  --code-punctuation: #888888 !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #392d78 !important;
  --dark: #3f3f3f !important;
  --darkgray: #3f3f3f !important;
  --divider-color: #ddd !important;
  --divider-color-hover: #7b6cd9 !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd !important;
  --embed-border-start: 2px solid #7b6cd9 !important;
  --file-header-background: #f8f8f8 !important;
  --file-header-background-focused: #f8f8f8 !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: #3f3f3f !important;
  --footnote-divider-color: #ddd !important;
  --footnote-id-color: #888888 !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-node: #888888 !important;
  --graph-node-focused: #392d78 !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #3f3f3f !important;
  --gray: #888888 !important;
  --h1-color: #253f56 !important;
  --h1-size: 2em !important;
  --h2-color: #3c678d !important;
  --h2-size: 1.6em !important;
  --h2-weight: 600 !important;
  --h3-color: #697d9e !important;
  --h3-size: 1.37em !important;
  --h3-weight: 600 !important;
  --h4-color: #a0a8b6 !important;
  --h4-size: 1.25em !important;
  --h4-weight: 600 !important;
  --h5-color: #b6c8e4 !important;
  --h5-size: 1.12em !important;
  --h5-weight: 600 !important;
  --h6-size: 1.12em !important;
  --heading-formatting: #999999 !important;
  --highlight: rgba(255, 242, 0, 0.848) !important;
  --hr-color: #ddd !important;
  --icon-color: #888888 !important;
  --icon-color-active: #392d78 !important;
  --icon-color-focused: #3f3f3f !important;
  --icon-color-hover: #888888 !important;
  --inline-title-color: #253f56 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: #7b6cd9 !important;
  --interactive-accent-hover: #8273e6 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: #f8f8f8 !important;
  --lightgray: #f2f3f5 !important;
  --link-color: #306d99 !important;
  --link-color-hover: #7a6ae6 !important;
  --link-color-light: #63a1ce7a !important;
  --link-decoration: none !important;
  --link-external-color: #392d78 !important;
  --link-external-color-hover: #7a6ae6 !important;
  --link-unresolved-color: #392d78 !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #392d78 !important;
  --list-marker-color-hover: #888888 !important;
  --menu-background: #f2f3f5 !important;
  --metadata-border-color: #ddd !important;
  --metadata-divider-color: #ddd !important;
  --metadata-input-text-color: #3f3f3f !important;
  --metadata-label-text-color: #888888 !important;
  --metadata-label-text-color-hover: #888888 !important;
  --modal-background: #f8f8f8 !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #3f3f3f !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #888888 !important;
  --nav-heading-color-hover: #3f3f3f !important;
  --nav-item-color: #888888 !important;
  --nav-item-color-active: #3f3f3f !important;
  --nav-item-color-highlighted: #392d78 !important;
  --nav-item-color-hover: #3f3f3f !important;
  --nav-item-color-selected: #3f3f3f !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #888888 !important;
  --nav-tag-color-hover: #888888 !important;
  --pdf-background: #f8f8f8 !important;
  --pdf-page-background: #f8f8f8 !important;
  --pdf-sidebar-background: #f8f8f8 !important;
  --pill-border-color: #ddd !important;
  --pill-color: #888888 !important;
  --pill-color-hover: #3f3f3f !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #392d78 !important;
  --prompt-background: #f8f8f8 !important;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent)) !important;
  --ribbon-background: #f2f3f5 !important;
  --ribbon-background-collapsed: #f8f8f8 !important;
  --search-clear-button-color: #888888 !important;
  --search-icon-color: #888888 !important;
  --search-result-background: #f8f8f8 !important;
  --secondary: #392d78 !important;
  --setting-group-heading-color: #3f3f3f !important;
  --setting-items-background: #f5f5f5 !important;
  --setting-items-border-color: #ddd !important;
  --slider-track-background: #ddd !important;
  --status-bar-background: #f2f3f5 !important;
  --status-bar-border-color: #ddd !important;
  --status-bar-text-color: #888888 !important;
  --suggestion-background: #f8f8f8 !important;
  --tab-background-active: #f8f8f8 !important;
  --tab-container-background: #f2f3f5 !important;
  --tab-outline-color: #ddd !important;
  --tab-switcher-background: #f2f3f5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #888888 !important;
  --tab-text-color-focused: #888888 !important;
  --tab-text-color-focused-active: #888888 !important;
  --tab-text-color-focused-active-current: #3f3f3f !important;
  --tab-text-color-focused-highlighted: #392d78 !important;
  --table-add-button-border-color: #ddd !important;
  --table-border-color: #ddd !important;
  --table-drag-handle-background-active: #7b6cd9 !important;
  --table-drag-handle-color: #999999 !important;
  --table-header-border-color: #ddd !important;
  --table-header-color: #3f3f3f !important;
  --table-selection-border-color: #7b6cd9 !important;
  --tag-color: #392d78 !important;
  --tag-color-hover: #392d78 !important;
  --tertiary: #7a6ae6 !important;
  --text-accent: #392d78 !important;
  --text-accent-hover: #7a6ae6 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: rgba(255, 242, 0, 0.848) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #888888 !important;
  --text-normal: #3f3f3f !important;
  --text-selection: rgba(255, 223, 106, 0.99) !important;
  --textHighlight: rgba(255, 242, 0, 0.848) !important;
  --titlebar-background: #f2f3f5 !important;
  --titlebar-background-focused: #e3e5e8 !important;
  --titlebar-border-color: #ddd !important;
  --titlebar-text-color: #888888 !important;
  --titlebar-text-color-focused: #3f3f3f !important;
  --vault-profile-color: #3f3f3f !important;
  --vault-profile-color-hover: #3f3f3f !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(63, 63, 63);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(248, 248, 248);
  color: rgb(63, 63, 63);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(63, 63, 63);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

html body div#quartz-root {
  background-color: rgb(248, 248, 248);
  color: rgb(63, 63, 63);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body .page article p > em, html em {
  color: rgb(48, 109, 153);
  outline: rgb(48, 109, 153) none 0px;
  text-decoration: rgb(48, 109, 153);
  text-decoration-color: rgb(48, 109, 153);
}

html body .page article p > i, html i {
  color: rgb(48, 109, 153);
  outline: rgb(48, 109, 153) none 0px;
  text-decoration: rgb(48, 109, 153);
  text-decoration-color: rgb(48, 109, 153);
}

html body .page article p > strong, html strong {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body .text-highlight {
  background-color: rgba(255, 242, 0, 0.847);
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body del {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: line-through rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `html body a.external, html footer a {
  color: rgb(57, 45, 120);
  outline: rgb(57, 45, 120) none 0px;
  text-decoration: underline rgb(57, 45, 120);
  text-decoration-color: rgb(57, 45, 120);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(48, 109, 153);
  outline: rgb(48, 109, 153) none 0px;
  text-decoration: rgb(48, 109, 153);
  text-decoration-color: rgb(48, 109, 153);
}

html body a.internal.broken {
  color: rgb(57, 45, 120);
  outline: rgb(57, 45, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(63, 63, 63);
}

html body dt {
  color: rgb(63, 63, 63);
}

html body ol > li {
  color: rgb(63, 63, 63);
}

html body ol.overflow {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body ul > li {
  color: rgb(63, 63, 63);
}

html body ul.overflow {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body table {
  color: rgb(63, 63, 63);
}

html body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

html body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}`,
    code: `html body code {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `html body audio {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body figcaption {
  color: rgb(63, 63, 63);
}

html body figure {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body img {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body video {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html body .footnotes {
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html body .transclude {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(123, 108, 217);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body .transclude-inner {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(123, 108, 217);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 248);
}

html body .search > .search-container > .search-space > * {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(63, 63, 63);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(63, 63, 63);
}

html body a.internal.tag-link::before {
  color: rgb(57, 45, 120);
}

html body h1 {
  color: rgb(37, 63, 86);
}

html body h2 {
  color: rgb(60, 103, 141);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(37, 63, 86);
}

html body h3 {
  color: rgb(105, 125, 158);
}

html body h4 {
  color: rgb(160, 168, 182);
}

html body h5 {
  color: rgb(182, 200, 228);
}

html body h6 {
  color: rgb(63, 63, 63);
}

html body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

html body ::-webkit-scrollbar-track {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `html body footer {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

html body footer ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(63, 63, 63);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

html body ul.section-ul {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

html body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body .navigation-progress {
  background-color: rgb(242, 243, 245);
}

html body .page-header h2.page-title {
  color: rgb(63, 63, 63);
}

html body abbr {
  color: rgb(63, 63, 63);
  text-decoration: underline dotted rgb(63, 63, 63);
}

html body details {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

html body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

html body progress {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

html body sub {
  color: rgb(63, 63, 63);
}

html body summary {
  color: rgb(63, 63, 63);
}

html body sup {
  color: rgb(63, 63, 63);
}`,
  },
};
