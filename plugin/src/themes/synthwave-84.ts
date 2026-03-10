import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "synthwave-84", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #372b3d;
  --background-modifier-box-shadow: none;
  --background-modifier-cover: #171520d2;
  --background-modifier-error: #8b0000;
  --background-modifier-error-hover: #580000;
  --background-modifier-form-field: #372b3d;
  --background-modifier-form-field-hover: #372b3d;
  --background-modifier-success: #7ee787;
  --background-primary: #252334;
  --background-primary-alt: #241b2f;
  --background-secondary: #241b2f;
  --background-secondary-alt: #262335;
  --bases-cards-background: #252334;
  --bases-cards-cover-background: #241b2f;
  --bases-cards-shadow: 0 0 0 1px #372b3d;
  --bases-embed-border-color: #372b3d;
  --bases-group-heading-property-color: #a7a4ac;
  --bases-table-border-color: #372b3d;
  --bases-table-cell-background-active: #252334;
  --bases-table-cell-background-disabled: #241b2f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f97e72;
  --bases-table-group-background: #241b2f;
  --bases-table-header-background: #252334;
  --bases-table-header-color: #a7a4ac;
  --bases-table-summary-background: #252334;
  --blockquote-border-color: #f97e72;
  --blur-background: color-mix(in srgb, #614e83 65%, transparent) linear-gradient(#614e83, color-mix(in srgb, #614e83 65%, transparent));
  --canvas-background: #252334;
  --canvas-card-label-color: #706a76;
  --caret-color: #fff;
  --checkbox-border-color: #706a76;
  --checkbox-border-color-hover: #a7a4ac;
  --checkbox-color: #f97e72;
  --checkbox-color-hover: #ff7edb;
  --checkbox-marker-color: #252334;
  --checklist-done-color: #a7a4ac;
  --code-background: #241b2f;
  --code-border-color: #372b3d;
  --code-comment: #706a76;
  --code-normal: #fff;
  --code-punctuation: #a7a4ac;
  --collapse-icon-color: #706a76;
  --collapse-icon-color-collapsed: #f97e72;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #372b3d;
  --divider-color-hover: #f97e72;
  --dropdown-background: #614e83;
  --dropdown-background-hover: #745d9e;
  --embed-block-shadow-hover: 0 0 0 1px #372b3d, inset 0 0 0 1px #372b3d;
  --embed-border-start: 2px solid #f97e72;
  --file-header-background: #252334;
  --file-header-background-focused: #252334;
  --flair-background: #614e83;
  --flair-color: #fff;
  --footnote-divider-color: #372b3d;
  --footnote-id-color: #a7a4ac;
  --footnote-id-color-no-occurrences: #706a76;
  --graph-node: #a7a4ac;
  --graph-node-focused: #f97e72;
  --graph-node-unresolved: #706a76;
  --graph-text: #fff;
  --gray: var(--text-muted);
  --heading-formatting: #706a76;
  --highlight: var(--text-highlight-bg);
  --hr-color: #372b3d;
  --icon-color: #a7a4ac;
  --icon-color-active: #f97e72;
  --icon-color-focused: #fff;
  --icon-color-hover: #a7a4ac;
  --input-date-separator: #706a76;
  --input-placeholder-color: #706a76;
  --interactive-accent: #f97e72;
  --interactive-accent-hover: #ff7edb;
  --interactive-hover: #745d9e;
  --interactive-normal: #614e83;
  --interactive-success: #7ee787;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #f97e72;
  --link-color-hover: #ff7edb;
  --link-external-color: #f97e72;
  --link-external-color-hover: #ff7edb;
  --link-unresolved-color: #f97e72;
  --list-marker-color: #706a76;
  --list-marker-color-collapsed: #f97e72;
  --list-marker-color-hover: #a7a4ac;
  --menu-background: #241b2f;
  --metadata-border-color: #372b3d;
  --metadata-divider-color: #372b3d;
  --metadata-input-text-color: #fff;
  --metadata-label-text-color: #a7a4ac;
  --metadata-label-text-color-hover: #a7a4ac;
  --modal-background: #252334;
  --nav-collapse-icon-color: #706a76;
  --nav-collapse-icon-color-collapsed: #706a76;
  --nav-heading-color: #fff;
  --nav-heading-color-collapsed: #706a76;
  --nav-heading-color-collapsed-hover: #a7a4ac;
  --nav-heading-color-hover: #fff;
  --nav-item-color: #a7a4ac;
  --nav-item-color-active: #fff;
  --nav-item-color-highlighted: #f97e72;
  --nav-item-color-hover: #fff;
  --nav-item-color-selected: #fff;
  --nav-tag-color: #706a76;
  --nav-tag-color-active: #a7a4ac;
  --nav-tag-color-hover: #a7a4ac;
  --pdf-background: #252334;
  --pdf-page-background: #252334;
  --pdf-shadow: 0 0 0 1px #372b3d;
  --pdf-sidebar-background: #252334;
  --pdf-thumbnail-shadow: 0 0 0 1px #372b3d;
  --pill-border-color: #372b3d;
  --pill-color: #a7a4ac;
  --pill-color-hover: #fff;
  --pill-color-remove: #706a76;
  --pill-color-remove-hover: #f97e72;
  --prompt-background: #252334;
  --raised-background: color-mix(in srgb, #614e83 65%, transparent) linear-gradient(#614e83, color-mix(in srgb, #614e83 65%, transparent));
  --ribbon-background: #241b2f;
  --ribbon-background-collapsed: #252334;
  --search-clear-button-color: #a7a4ac;
  --search-icon-color: #a7a4ac;
  --search-result-background: #252334;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #fff;
  --setting-items-background: #241b2f;
  --setting-items-border-color: #372b3d;
  --slider-track-background: #372b3d;
  --status-bar-background: #241b2f;
  --status-bar-border-color: #372b3d;
  --status-bar-text-color: #a7a4ac;
  --suggestion-background: #252334;
  --tab-background-active: #252334;
  --tab-container-background: #241b2f;
  --tab-outline-color: #372b3d;
  --tab-switcher-background: #241b2f;
  --tab-switcher-menubar-background: linear-gradient(to top, #241b2f, transparent);
  --tab-text-color: #706a76;
  --tab-text-color-active: #a7a4ac;
  --tab-text-color-focused: #a7a4ac;
  --tab-text-color-focused-active: #a7a4ac;
  --tab-text-color-focused-active-current: #fff;
  --tab-text-color-focused-highlighted: #f97e72;
  --table-add-button-border-color: #372b3d;
  --table-border-color: #372b3d;
  --table-drag-handle-background-active: #f97e72;
  --table-drag-handle-color: #706a76;
  --table-drag-handle-color-active: #fff;
  --table-header-border-color: #372b3d;
  --table-header-color: #fff;
  --table-selection-border-color: #f97e72;
  --tag-color: #f97e72;
  --tag-color-hover: #f97e72;
  --tertiary: var(--text-accent-hover);
  --text-accent: #f97e72;
  --text-accent-hover: #ff7edb;
  --text-error: red;
  --text-error-hover: #ff0;
  --text-faint: #706a76;
  --text-highlight-bg: #d18616bb;
  --text-highlight-bg-active: #d1861655;
  --text-muted: #a7a4ac;
  --text-normal: #fff;
  --text-on-accent: #fff;
  --text-selection: #ffffff20;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #241b2f;
  --titlebar-background-focused: #262335;
  --titlebar-border-color: #372b3d;
  --titlebar-text-color: #a7a4ac;
  --titlebar-text-color-focused: #fff;
  --vault-profile-color: #fff;
  --vault-profile-color-hover: #fff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(35, 27, 46);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(37, 35, 52);
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
  background-color: rgb(37, 35, 52);
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
  background-color: rgb(37, 35, 52);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(37, 35, 52);
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
  color: rgb(148, 238, 188);
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
  background-color: rgb(37, 35, 52);
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
  color: rgb(247, 221, 113);
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
  background: rgb(37, 35, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 35, 52);
}

body ::-webkit-scrollbar-corner {
  background: rgb(37, 35, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 35, 52);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(37, 35, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 35, 52);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(37, 35, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 35, 52);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 35, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 35, 52);
}

body ::-webkit-scrollbar-track {
  background: rgb(37, 35, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 35, 52);
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
