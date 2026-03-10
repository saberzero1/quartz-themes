import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "darkyan", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #374151 !important;
  --background-primary: #111827 !important;
  --background-primary-alt: #111827 !important;
  --background-secondary: #1F2937 !important;
  --background-secondary-alt: #1F2937 !important;
  --bases-cards-background: #111827 !important;
  --bases-cards-cover-background: #111827 !important;
  --bases-cards-shadow: 0 0 0 1px #374151 !important;
  --bases-embed-border-color: #374151 !important;
  --bases-table-border-color: #374151 !important;
  --bases-table-cell-background-active: #111827 !important;
  --bases-table-cell-background-disabled: #111827 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00AAAD !important;
  --bases-table-group-background: #111827 !important;
  --bases-table-header-background: #111827 !important;
  --bases-table-summary-background: #111827 !important;
  --blockquote-border-color: #00AAAD !important;
  --canvas-background: #111827 !important;
  --canvas-card-label-color: #4B5563 !important;
  --caret-color: #D1D5DB !important;
  --checkbox-border-color: #4B5563 !important;
  --checkbox-color: #00AAAD !important;
  --checkbox-color-hover: #00AAAD !important;
  --checkbox-marker-color: #111827 !important;
  --code-background: #111827 !important;
  --code-block: #D1D5DB !important;
  --code-border-color: #374151 !important;
  --code-comment: #4B5563 !important;
  --code-normal: #D1D5DB !important;
  --collapse-icon-color: #4B5563 !important;
  --collapse-icon-color-collapsed: #00AAAD !important;
  --dark: #D1D5DB !important;
  --darkgray: #D1D5DB !important;
  --divider-color: #374151 !important;
  --divider-color-hover: #00AAAD !important;
  --embed-block-shadow-hover: 0 0 0 1px #374151, inset 0 0 0 1px #374151 !important;
  --embed-border-start: 2px solid #00AAAD !important;
  --file-header-background: #111827 !important;
  --file-header-background-focused: #111827 !important;
  --file-line-width: 750px !important;
  --flair-color: #D1D5DB !important;
  --footnote-divider-color: #374151 !important;
  --footnote-id-color-no-occurrences: #4B5563 !important;
  --graph-node-focused: #00AAAD !important;
  --graph-node-unresolved: #4B5563 !important;
  --graph-text: #D1D5DB !important;
  --gray: #4B5563 !important;
  --heading-formatting: #4B5563 !important;
  --highlight: #374151 !important;
  --hr-color: #374151 !important;
  --icon-color-active: #00AAAD !important;
  --icon-color-focused: #D1D5DB !important;
  --inline-code: #D1D5DB !important;
  --input-date-separator: #4B5563 !important;
  --input-placeholder-color: #4B5563 !important;
  --interactive-accent: #00AAAD !important;
  --interactive-accent-hover: #00AAAD !important;
  --interactive-accent-rgb: #D1D5DB !important;
  --interactive-before: #374151 !important;
  --light: #111827 !important;
  --lightgray: #1F2937 !important;
  --link-color: #00AAAD !important;
  --link-color-hover: #00AAAD !important;
  --link-external-color: #00AAAD !important;
  --link-external-color-hover: #00AAAD !important;
  --link-unresolved-color: #00AAAD !important;
  --list-marker-color: #4B5563 !important;
  --list-marker-color-collapsed: #00AAAD !important;
  --menu-background: #1F2937 !important;
  --metadata-border-color: #374151 !important;
  --metadata-divider-color: #374151 !important;
  --metadata-input-text-color: #D1D5DB !important;
  --modal-background: #111827 !important;
  --nav-collapse-icon-color: #4B5563 !important;
  --nav-collapse-icon-color-collapsed: #4B5563 !important;
  --nav-heading-color: #D1D5DB !important;
  --nav-heading-color-collapsed: #4B5563 !important;
  --nav-heading-color-hover: #D1D5DB !important;
  --nav-item-color-active: #D1D5DB !important;
  --nav-item-color-highlighted: #00AAAD !important;
  --nav-item-color-hover: #D1D5DB !important;
  --nav-item-color-selected: #D1D5DB !important;
  --nav-tag-color: #4B5563 !important;
  --pdf-background: #111827 !important;
  --pdf-page-background: #111827 !important;
  --pdf-shadow: 0 0 0 1px #374151 !important;
  --pdf-sidebar-background: #111827 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #374151 !important;
  --pill-border-color: #374151 !important;
  --pill-color-hover: #D1D5DB !important;
  --pill-color-remove: #4B5563 !important;
  --pill-color-remove-hover: #00AAAD !important;
  --pre-code: #000000 !important;
  --prompt-background: #111827 !important;
  --ribbon-background: #1F2937 !important;
  --ribbon-background-collapsed: #111827 !important;
  --search-result-background: #111827 !important;
  --secondary: #00AAAD !important;
  --setting-group-heading-color: #D1D5DB !important;
  --setting-items-background: #111827 !important;
  --setting-items-border-color: #374151 !important;
  --slider-track-background: #374151 !important;
  --status-bar-background: #1F2937 !important;
  --status-bar-border-color: #374151 !important;
  --suggestion-background: #111827 !important;
  --tab-background-active: #111827 !important;
  --tab-container-background: #1F2937 !important;
  --tab-outline-color: #374151 !important;
  --tab-switcher-background: #1F2937 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1F2937, transparent) !important;
  --tab-text-color: #4B5563 !important;
  --tab-text-color-focused-active-current: #D1D5DB !important;
  --tab-text-color-focused-highlighted: #00AAAD !important;
  --table-add-button-border-color: #374151 !important;
  --table-border-color: #374151 !important;
  --table-drag-handle-background-active: #00AAAD !important;
  --table-drag-handle-color: #4B5563 !important;
  --table-drag-handle-color-active: #D1D5DB !important;
  --table-header-border-color: #374151 !important;
  --table-header-color: #D1D5DB !important;
  --table-selection-border-color: #00AAAD !important;
  --tag-color: #00AAAD !important;
  --tag-color-hover: #00AAAD !important;
  --tertiary: #00AAAD !important;
  --text-a: #D1D5DB !important;
  --text-a-hover: #D1D5DB !important;
  --text-accent: #00AAAD !important;
  --text-accent-hover: #00AAAD !important;
  --text-faint: #4B5563 !important;
  --text-highlight-bg: #374151 !important;
  --text-link: #D1D5DB !important;
  --text-normal: #D1D5DB !important;
  --text-on-accent: #D1D5DB !important;
  --text-selection: #374151 !important;
  --text-title-h1: #D1D5DB !important;
  --text-title-h2: #D1D5DB !important;
  --text-title-h3: #D1D5DB !important;
  --text-title-h4: #D1D5DB !important;
  --text-title-h5: #D1D5DB !important;
  --text-title-h6: #D1D5DB !important;
  --textHighlight: #374151 !important;
  --titlebar-background: #1F2937 !important;
  --titlebar-background-focused: #1F2937 !important;
  --titlebar-border-color: #374151 !important;
  --titlebar-text-color-focused: #D1D5DB !important;
  --vault-profile-color: #D1D5DB !important;
  --vault-profile-color-hover: #D1D5DB !important;
  --vim-cursor: #D1D5DB !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(55, 65, 81);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 41, 55);
  border-left-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body div#quartz-root {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body .page article p > em, html em {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body .page article p > i, html i {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body .page article p > strong, html strong {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body .text-highlight {
  background-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body del {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: line-through rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
  text-decoration: underline rgb(0, 170, 173);
  text-decoration-color: rgb(0, 170, 173);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
  text-decoration: underline rgb(0, 170, 173);
  text-decoration-color: rgb(0, 170, 173);
}

html body a.internal.broken {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
}`,
    lists: `html body dd {
  color: rgb(209, 213, 219);
}

html body dt {
  color: rgb(209, 213, 219);
}

html body ol > li {
  color: rgb(209, 213, 219);
}

html body ol.overflow {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body ul > li {
  color: rgb(209, 213, 219);
}

html body ul.overflow {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(75, 85, 99);
  text-decoration: rgb(75, 85, 99);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body table {
  color: rgb(209, 213, 219);
}

html body td {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body th {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}`,
    code: `html body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body pre > code > [data-line] {
  border-left-color: rgb(209, 213, 219);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(209, 213, 219);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}`,
    images: `html body audio {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body figcaption {
  color: rgb(209, 213, 219);
}

html body figure {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body img {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body video {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(17, 24, 39);
}

html body .footnotes {
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body .transclude {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(0, 170, 173);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body .transclude-inner {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(0, 170, 173);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(75, 85, 99);
  border-left-color: rgb(75, 85, 99);
  border-right-color: rgb(75, 85, 99);
  border-top-color: rgb(75, 85, 99);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space {
  background-color: rgb(17, 24, 39);
}

html body .search > .search-container > .search-space > * {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(209, 213, 219);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(209, 213, 219);
}

html body a.internal.tag-link::before {
  color: rgb(0, 170, 173);
}

html body h1 {
  color: rgb(209, 213, 219);
}

html body h2 {
  color: rgb(209, 213, 219);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(209, 213, 219);
}

html body h3 {
  color: rgb(209, 213, 219);
}

html body h4 {
  color: rgb(209, 213, 219);
}

html body h5 {
  color: rgb(209, 213, 219);
}

html body h6 {
  color: rgb(209, 213, 219);
}

html body hr {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

html body ::-webkit-scrollbar-track {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}`,
    footer: `html body footer {
  background-color: rgb(31, 41, 55);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(209, 213, 219);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body ul.section-ul {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(75, 85, 99);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body .metadata {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

html body .navigation-progress {
  background-color: rgb(31, 41, 55);
}

html body .page-header h2.page-title {
  color: rgb(209, 213, 219);
}

html body abbr {
  color: rgb(209, 213, 219);
  text-decoration: underline dotted rgb(209, 213, 219);
}

html body details {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body kbd {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

html body progress {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

html body sub {
  color: rgb(209, 213, 219);
}

html body summary {
  color: rgb(209, 213, 219);
}

html body sup {
  color: rgb(209, 213, 219);
}`,
  },
  light: {},
};
