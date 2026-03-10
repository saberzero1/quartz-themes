import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "perso", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-border: #ddd;
  --background-primary: #f8f8f8;
  --background-primary-alt: #f5f5f5;
  --background-secondary: #f2f3f5;
  --background-secondary-alt: #e3e5e8;
  --bases-cards-background: #f8f8f8;
  --bases-cards-cover-background: #f5f5f5;
  --bases-cards-shadow: 0 0 0 1px #ddd;
  --bases-embed-border-color: #ddd;
  --bases-group-heading-property-color: #888888;
  --bases-table-border-color: #ddd;
  --bases-table-cell-background-active: #f8f8f8;
  --bases-table-cell-background-disabled: #f5f5f5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7b6cd9;
  --bases-table-group-background: #f5f5f5;
  --bases-table-header-background: #f8f8f8;
  --bases-table-header-color: #888888;
  --bases-table-summary-background: #f8f8f8;
  --blockquote-border-color: #7b6cd9;
  --blur-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --canvas-background: #f8f8f8;
  --canvas-card-label-color: #999999;
  --caret-color: #3f3f3f;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #888888;
  --checkbox-color: #7b6cd9;
  --checkbox-color-hover: #8273e6;
  --checkbox-marker-color: #f8f8f8;
  --checklist-done-color: #888888;
  --code-background: #f5f5f5;
  --code-border-color: #ddd;
  --code-comment: #999999;
  --code-normal: #3f3f3f;
  --code-punctuation: #888888;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #392d78;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #ddd;
  --divider-color-hover: #7b6cd9;
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd;
  --embed-border-start: 2px solid #7b6cd9;
  --file-header-background: #f8f8f8;
  --file-header-background-focused: #f8f8f8;
  --flair-background: #f2f3f5;
  --flair-color: #3f3f3f;
  --footnote-divider-color: #ddd;
  --footnote-id-color: #888888;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node: #888888;
  --graph-node-focused: #392d78;
  --graph-node-unresolved: #999999;
  --graph-text: #3f3f3f;
  --gray: var(--text-muted);
  --h1-color: #253f56;
  --h1-size: 2em;
  --h2-color: #3c678d;
  --h2-size: 1.6em;
  --h2-weight: 600;
  --h3-color: #697d9e;
  --h3-size: 1.37em;
  --h3-weight: 600;
  --h4-color: #a0a8b6;
  --h4-size: 1.25em;
  --h4-weight: 600;
  --h5-color: #b6c8e4;
  --h5-size: 1.12em;
  --h5-weight: 600;
  --h6-size: 1.12em;
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg);
  --hr-color: #ddd;
  --icon-color: #888888;
  --icon-color-active: #392d78;
  --icon-color-focused: #3f3f3f;
  --icon-color-hover: #888888;
  --inline-title-color: #253f56;
  --inline-title-size: 2em;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: #7b6cd9;
  --interactive-accent-hover: #8273e6;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #306d99;
  --link-color-hover: #7a6ae6;
  --link-color-light: #63a1ce7a;
  --link-decoration: none;
  --link-external-color: #392d78;
  --link-external-color-hover: #7a6ae6;
  --link-unresolved-color: #392d78;
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #392d78;
  --list-marker-color-hover: #888888;
  --menu-background: #f2f3f5;
  --metadata-border-color: #ddd;
  --metadata-divider-color: #ddd;
  --metadata-input-text-color: #3f3f3f;
  --metadata-label-text-color: #888888;
  --metadata-label-text-color-hover: #888888;
  --modal-background: #f8f8f8;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #3f3f3f;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #888888;
  --nav-heading-color-hover: #3f3f3f;
  --nav-item-color: #888888;
  --nav-item-color-active: #3f3f3f;
  --nav-item-color-highlighted: #392d78;
  --nav-item-color-hover: #3f3f3f;
  --nav-item-color-selected: #3f3f3f;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #888888;
  --nav-tag-color-hover: #888888;
  --pdf-background: #f8f8f8;
  --pdf-page-background: #f8f8f8;
  --pdf-sidebar-background: #f8f8f8;
  --pill-border-color: #ddd;
  --pill-color: #888888;
  --pill-color-hover: #3f3f3f;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #392d78;
  --prompt-background: #f8f8f8;
  --raised-background: color-mix(in srgb, #f8f8f8 65%, transparent) linear-gradient(#f8f8f8, color-mix(in srgb, #f8f8f8 65%, transparent));
  --ribbon-background: #f2f3f5;
  --ribbon-background-collapsed: #f8f8f8;
  --search-clear-button-color: #888888;
  --search-icon-color: #888888;
  --search-result-background: #f8f8f8;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #3f3f3f;
  --setting-items-background: #f5f5f5;
  --setting-items-border-color: #ddd;
  --slider-track-background: #ddd;
  --status-bar-background: #f2f3f5;
  --status-bar-border-color: #ddd;
  --status-bar-text-color: #888888;
  --suggestion-background: #f8f8f8;
  --tab-background-active: #f8f8f8;
  --tab-container-background: #f2f3f5;
  --tab-outline-color: #ddd;
  --tab-switcher-background: #f2f3f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #f2f3f5, transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: #888888;
  --tab-text-color-focused: #888888;
  --tab-text-color-focused-active: #888888;
  --tab-text-color-focused-active-current: #3f3f3f;
  --tab-text-color-focused-highlighted: #392d78;
  --table-add-button-border-color: #ddd;
  --table-border-color: #ddd;
  --table-drag-handle-background-active: #7b6cd9;
  --table-drag-handle-color: #999999;
  --table-header-border-color: #ddd;
  --table-header-color: #3f3f3f;
  --table-selection-border-color: #7b6cd9;
  --tag-color: #392d78;
  --tag-color-hover: #392d78;
  --tertiary: var(--text-accent-hover);
  --text-accent: #392d78;
  --text-accent-hover: #7a6ae6;
  --text-faint: #999999;
  --text-highlight-bg: rgba(255, 242, 0, 0.848);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #888888;
  --text-normal: #3f3f3f;
  --text-selection: rgba(255, 223, 106, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #f2f3f5;
  --titlebar-background-focused: #e3e5e8;
  --titlebar-border-color: #ddd;
  --titlebar-text-color: #888888;
  --titlebar-text-color-focused: #3f3f3f;
  --vault-profile-color: #3f3f3f;
  --vault-profile-color-hover: #3f3f3f;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 243, 245);
  color: rgb(63, 63, 63);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 248, 248);
  color: rgb(63, 63, 63);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 243, 245);
  color: rgb(63, 63, 63);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 243, 245);
  border-left-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

body div#quartz-root {
  background-color: rgb(248, 248, 248);
  color: rgb(63, 63, 63);
}`,
    typography: `body .page article p > b, b {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body .page article p > em, em {
  color: rgb(48, 109, 153);
  outline: rgb(48, 109, 153) none 0px;
  text-decoration: rgb(48, 109, 153);
  text-decoration-color: rgb(48, 109, 153);
}

body .page article p > i, i {
  color: rgb(48, 109, 153);
  outline: rgb(48, 109, 153) none 0px;
  text-decoration: rgb(48, 109, 153);
  text-decoration-color: rgb(48, 109, 153);
}

body .page article p > strong, strong {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body .text-highlight {
  background-color: rgba(255, 242, 0, 0.847);
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body del {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: line-through rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(57, 45, 120);
  outline: rgb(57, 45, 120) none 0px;
  text-decoration: underline rgb(57, 45, 120);
  text-decoration-color: rgb(57, 45, 120);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(48, 109, 153);
  outline: rgb(48, 109, 153) none 0px;
  text-decoration: rgb(48, 109, 153);
  text-decoration-color: rgb(48, 109, 153);
}

body a.internal.broken {
  color: rgb(57, 45, 120);
  outline: rgb(57, 45, 120) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(63, 63, 63);
}

body dt {
  color: rgb(63, 63, 63);
}

body ol > li {
  color: rgb(63, 63, 63);
}

body ol.overflow {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body ul > li {
  color: rgb(63, 63, 63);
}

body ul.overflow {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body table {
  color: rgb(63, 63, 63);
}

body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}`,
    code: `body code {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body pre:has(> code) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `body audio {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body figcaption {
  color: rgb(63, 63, 63);
}

body figure {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body img {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body video {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

body .footnotes {
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body .transclude {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(123, 108, 217);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body .transclude-inner {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(123, 108, 217);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body li.task-list-item[data-task='!'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='*'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='-'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='/'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='>'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='?'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='I'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='S'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='b'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='c'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='d'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='f'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='i'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='k'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='l'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='p'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='u'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body li.task-list-item[data-task='w'] {
  color: rgb(63, 63, 63);
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 248, 248);
}

body .search > .search-container > .search-space > * {
  color: rgb(63, 63, 63);
  outline: rgb(63, 63, 63) none 0px;
  text-decoration: rgb(63, 63, 63);
  text-decoration-color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(63, 63, 63);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 243, 245);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(63, 63, 63);
}

body a.internal.tag-link::before {
  color: rgb(57, 45, 120);
}

body h1 {
  color: rgb(37, 63, 86);
}

body h2 {
  color: rgb(60, 103, 141);
}

body h2.page-title, h2.page-title a {
  color: rgb(37, 63, 86);
}

body h3 {
  color: rgb(105, 125, 158);
}

body h4 {
  color: rgb(160, 168, 182);
}

body h5 {
  color: rgb(182, 200, 228);
}

body h6 {
  color: rgb(63, 63, 63);
}

body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 248, 248) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 248, 248);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `body footer {
  background-color: rgb(242, 243, 245);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

body footer ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(63, 63, 63);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body ul.section-ul {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(136, 136, 136);
}

body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .navigation-progress {
  background-color: rgb(242, 243, 245);
}

body .page-header h2.page-title {
  color: rgb(63, 63, 63);
}

body abbr {
  color: rgb(63, 63, 63);
  text-decoration: underline dotted rgb(63, 63, 63);
}

body details {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
  color: rgb(63, 63, 63);
}

body progress {
  border-bottom-color: rgb(63, 63, 63);
  border-left-color: rgb(63, 63, 63);
  border-right-color: rgb(63, 63, 63);
  border-top-color: rgb(63, 63, 63);
}

body sub {
  color: rgb(63, 63, 63);
}

body summary {
  color: rgb(63, 63, 63);
}

body sup {
  color: rgb(63, 63, 63);
}`,
  },
};
