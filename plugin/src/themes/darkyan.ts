import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "darkyan", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #374151;
  --background-primary: #111827;
  --background-primary-alt: #111827;
  --background-secondary: #1F2937;
  --background-secondary-alt: #1F2937;
  --bases-cards-background: #111827;
  --bases-cards-cover-background: #111827;
  --bases-cards-shadow: 0 0 0 1px #374151;
  --bases-embed-border-color: #374151;
  --bases-table-border-color: #374151;
  --bases-table-cell-background-active: #111827;
  --bases-table-cell-background-disabled: #111827;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00AAAD;
  --bases-table-group-background: #111827;
  --bases-table-header-background: #111827;
  --bases-table-summary-background: #111827;
  --blockquote-border-color: #00AAAD;
  --canvas-background: #111827;
  --canvas-card-label-color: #4B5563;
  --caret-color: #D1D5DB;
  --checkbox-border-color: #4B5563;
  --checkbox-color: #00AAAD;
  --checkbox-color-hover: #00AAAD;
  --checkbox-marker-color: #111827;
  --code-background: #111827;
  --code-block: #D1D5DB;
  --code-border-color: #374151;
  --code-comment: #4B5563;
  --code-normal: #D1D5DB;
  --collapse-icon-color: #4B5563;
  --collapse-icon-color-collapsed: #00AAAD;
  --divider-color: #374151;
  --divider-color-hover: #00AAAD;
  --embed-block-shadow-hover: 0 0 0 1px #374151, inset 0 0 0 1px #374151;
  --embed-border-start: 2px solid #00AAAD;
  --file-header-background: #111827;
  --file-header-background-focused: #111827;
  --file-line-width: 750px;
  --flair-color: #D1D5DB;
  --footnote-divider-color: #374151;
  --footnote-id-color-no-occurrences: #4B5563;
  --graph-node-focused: #00AAAD;
  --graph-node-unresolved: #4B5563;
  --graph-text: #D1D5DB;
  --heading-formatting: #4B5563;
  --hr-color: #374151;
  --icon-color-active: #00AAAD;
  --icon-color-focused: #D1D5DB;
  --inline-code: #D1D5DB;
  --input-date-separator: #4B5563;
  --input-placeholder-color: #4B5563;
  --interactive-accent: #00AAAD;
  --interactive-accent-hover: #00AAAD;
  --interactive-accent-rgb: #D1D5DB;
  --interactive-before: #374151;
  --link-color: #00AAAD;
  --link-color-hover: #00AAAD;
  --link-external-color: #00AAAD;
  --link-external-color-hover: #00AAAD;
  --link-unresolved-color: #00AAAD;
  --list-marker-color: #4B5563;
  --list-marker-color-collapsed: #00AAAD;
  --menu-background: #1F2937;
  --metadata-border-color: #374151;
  --metadata-divider-color: #374151;
  --metadata-input-text-color: #D1D5DB;
  --modal-background: #111827;
  --nav-collapse-icon-color: #4B5563;
  --nav-collapse-icon-color-collapsed: #4B5563;
  --nav-heading-color: #D1D5DB;
  --nav-heading-color-collapsed: #4B5563;
  --nav-heading-color-hover: #D1D5DB;
  --nav-item-color-active: #D1D5DB;
  --nav-item-color-highlighted: #00AAAD;
  --nav-item-color-hover: #D1D5DB;
  --nav-item-color-selected: #D1D5DB;
  --nav-tag-color: #4B5563;
  --pdf-background: #111827;
  --pdf-page-background: #111827;
  --pdf-shadow: 0 0 0 1px #374151;
  --pdf-sidebar-background: #111827;
  --pdf-thumbnail-shadow: 0 0 0 1px #374151;
  --pill-border-color: #374151;
  --pill-color-hover: #D1D5DB;
  --pill-color-remove: #4B5563;
  --pill-color-remove-hover: #00AAAD;
  --pre-code: #000000;
  --prompt-background: #111827;
  --ribbon-background: #1F2937;
  --ribbon-background-collapsed: #111827;
  --search-result-background: #111827;
  --setting-group-heading-color: #D1D5DB;
  --setting-items-background: #111827;
  --setting-items-border-color: #374151;
  --slider-track-background: #374151;
  --status-bar-background: #1F2937;
  --status-bar-border-color: #374151;
  --suggestion-background: #111827;
  --tab-background-active: #111827;
  --tab-container-background: #1F2937;
  --tab-outline-color: #374151;
  --tab-switcher-background: #1F2937;
  --tab-switcher-menubar-background: linear-gradient(to top, #1F2937, transparent);
  --tab-text-color: #4B5563;
  --tab-text-color-focused-active-current: #D1D5DB;
  --tab-text-color-focused-highlighted: #00AAAD;
  --table-add-button-border-color: #374151;
  --table-border-color: #374151;
  --table-drag-handle-background-active: #00AAAD;
  --table-drag-handle-color: #4B5563;
  --table-drag-handle-color-active: #D1D5DB;
  --table-header-border-color: #374151;
  --table-header-color: #D1D5DB;
  --table-selection-border-color: #00AAAD;
  --tag-color: #00AAAD;
  --tag-color-hover: #00AAAD;
  --text-a: #D1D5DB;
  --text-a-hover: #D1D5DB;
  --text-accent: #00AAAD;
  --text-accent-hover: #00AAAD;
  --text-faint: #4B5563;
  --text-highlight-bg: #374151;
  --text-link: #D1D5DB;
  --text-normal: #D1D5DB;
  --text-on-accent: #D1D5DB;
  --text-selection: #374151;
  --text-title-h1: #D1D5DB;
  --text-title-h2: #D1D5DB;
  --text-title-h3: #D1D5DB;
  --text-title-h4: #D1D5DB;
  --text-title-h5: #D1D5DB;
  --text-title-h6: #D1D5DB;
  --titlebar-background: #1F2937;
  --titlebar-background-focused: #1F2937;
  --titlebar-border-color: #374151;
  --titlebar-text-color-focused: #D1D5DB;
  --vault-profile-color: #D1D5DB;
  --vault-profile-color-hover: #D1D5DB;
  --vim-cursor: #D1D5DB;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 41, 55);
  color: rgb(209, 213, 219);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(55, 65, 81);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 41, 55);
  border-left-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

body div#quartz-root {
  background-color: rgb(17, 24, 39);
  color: rgb(209, 213, 219);
}`,
    typography: `body .page article p > b, b {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body .page article p > em, em {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body .page article p > i, i {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body .page article p > strong, strong {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body .text-highlight {
  background-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body del {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: line-through rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
  text-decoration: underline rgb(0, 170, 173);
  text-decoration-color: rgb(0, 170, 173);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
  text-decoration: underline rgb(0, 170, 173);
  text-decoration-color: rgb(0, 170, 173);
}

body a.internal.broken {
  color: rgb(0, 170, 173);
  outline: rgb(0, 170, 173) none 0px;
}`,
    lists: `body dd {
  color: rgb(209, 213, 219);
}

body dt {
  color: rgb(209, 213, 219);
}

body ol > li {
  color: rgb(209, 213, 219);
}

body ol.overflow {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body ul > li {
  color: rgb(209, 213, 219);
}

body ul.overflow {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(75, 85, 99);
  text-decoration: rgb(75, 85, 99);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body table {
  color: rgb(209, 213, 219);
}

body td {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

body th {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}`,
    code: `body code {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

body pre > code > [data-line] {
  border-left-color: rgb(209, 213, 219);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(209, 213, 219);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}`,
    images: `body audio {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body figcaption {
  color: rgb(209, 213, 219);
}

body figure {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body img {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body video {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    embeds: `body .file-embed {
  background-color: rgb(17, 24, 39);
}

body .footnotes {
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

body .transclude {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(0, 170, 173);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body .transclude-inner {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(0, 170, 173);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(75, 85, 99);
  border-left-color: rgb(75, 85, 99);
  border-right-color: rgb(75, 85, 99);
  border-top-color: rgb(75, 85, 99);
}

body li.task-list-item[data-task='!'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='*'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='-'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='/'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='>'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='?'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='I'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='S'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='b'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='c'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='d'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='f'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='i'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='k'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='l'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='p'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='u'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body li.task-list-item[data-task='w'] {
  color: rgb(209, 213, 219);
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
  color: rgb(209, 213, 219);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 24, 39);
}

body .search > .search-container > .search-space > * {
  color: rgb(209, 213, 219);
  outline: rgb(209, 213, 219) none 0px;
  text-decoration: rgb(209, 213, 219);
  text-decoration-color: rgb(209, 213, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 213, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(209, 213, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(209, 213, 219);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 41, 55);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(209, 213, 219);
}

body a.internal.tag-link::before {
  color: rgb(0, 170, 173);
}

body h1 {
  color: rgb(209, 213, 219);
}

body h2 {
  color: rgb(209, 213, 219);
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 213, 219);
}

body h3 {
  color: rgb(209, 213, 219);
}

body h4 {
  color: rgb(209, 213, 219);
}

body h5 {
  color: rgb(209, 213, 219);
}

body h6 {
  color: rgb(209, 213, 219);
}

body hr {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 24, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 24, 39);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}`,
    footer: `body footer {
  background-color: rgb(31, 41, 55);
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(209, 213, 219);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body ul.section-ul {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(75, 85, 99);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

body .metadata {
  border-bottom-color: rgb(55, 65, 81);
  border-left-color: rgb(55, 65, 81);
  border-right-color: rgb(55, 65, 81);
  border-top-color: rgb(55, 65, 81);
}

body .navigation-progress {
  background-color: rgb(31, 41, 55);
}

body .page-header h2.page-title {
  color: rgb(209, 213, 219);
}

body abbr {
  color: rgb(209, 213, 219);
  text-decoration: underline dotted rgb(209, 213, 219);
}

body details {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body kbd {
  background-color: rgb(17, 24, 39);
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
  color: rgb(209, 213, 219);
}

body progress {
  border-bottom-color: rgb(209, 213, 219);
  border-left-color: rgb(209, 213, 219);
  border-right-color: rgb(209, 213, 219);
  border-top-color: rgb(209, 213, 219);
}

body sub {
  color: rgb(209, 213, 219);
}

body summary {
  color: rgb(209, 213, 219);
}

body sup {
  color: rgb(209, 213, 219);
}`,
  },
  light: {},
};
