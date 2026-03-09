import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "christmas", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-accent: #b5aa29;
  --background-modifier-border: rgba(0, 0, 0, 0.25);
  --background-primary: #35674d;
  --background-primary-alt: #2c5640;
  --background-secondary: #a23227;
  --background-secondary-alt: #952e24;
  --bases-cards-background: #35674d;
  --bases-cards-cover-background: #2c5640;
  --bases-cards-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  --bases-embed-border-color: rgba(0, 0, 0, 0.25);
  --bases-group-heading-property-color: #f2f2f2;
  --bases-table-border-color: rgba(0, 0, 0, 0.25);
  --bases-table-cell-background-active: #35674d;
  --bases-table-cell-background-disabled: #2c5640;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffbf00;
  --bases-table-group-background: #2c5640;
  --bases-table-header-background: #35674d;
  --bases-table-header-color: #f2f2f2;
  --bases-table-summary-background: #35674d;
  --blockquote-border-color: #ffbf00;
  --canvas-background: #35674d;
  --canvas-card-label-color: #c5c5c5;
  --caret-color: #f2f2f2;
  --checkbox-border-color: #c5c5c5;
  --checkbox-border-color-hover: #f2f2f2;
  --checkbox-color: #ffbf00;
  --checkbox-color-hover: #d0a011;
  --checkbox-marker-color: #35674d;
  --checklist-done-color: #f2f2f2;
  --code-background: #2c5640;
  --code-border-color: rgba(0, 0, 0, 0.25);
  --code-comment: #c5c5c5;
  --code-normal: #f2f2f2;
  --code-punctuation: #f2f2f2;
  --collapse-icon-color: #c5c5c5;
  --collapse-icon-color-collapsed: #f2f2f2;
  --divider-color: rgba(0, 0, 0, 0.25);
  --divider-color-hover: #ffbf00;
  --embed-block-shadow-hover: 0 0 0 1px rgba(0, 0, 0, 0.25), inset 0 0 0 1px rgba(0, 0, 0, 0.25);
  --embed-border-start: 2px solid #ffbf00;
  --file-header-background: #35674d;
  --file-header-background-focused: #35674d;
  --flair-color: #f2f2f2;
  --footnote-divider-color: rgba(0, 0, 0, 0.25);
  --footnote-id-color: #f2f2f2;
  --footnote-id-color-no-occurrences: #c5c5c5;
  --graph-node: #f2f2f2;
  --graph-node-focused: #f2f2f2;
  --graph-node-unresolved: #c5c5c5;
  --graph-text: #f2f2f2;
  --heading-formatting: #c5c5c5;
  --hr-color: rgba(0, 0, 0, 0.25);
  --icon-color: #f2f2f2;
  --icon-color-active: #f2f2f2;
  --icon-color-focused: #f2f2f2;
  --icon-color-hover: #f2f2f2;
  --input-date-separator: #c5c5c5;
  --input-placeholder-color: #c5c5c5;
  --interactive-accent: #ffbf00;
  --interactive-accent-hover: #d0a011;
  --interactive-accent-rgb: 255, 191, 0;
  --link-color: #f2f2f2;
  --link-color-hover: #ffffff;
  --link-external-color: #f2f2f2;
  --link-external-color-hover: #ffffff;
  --link-unresolved-color: #f2f2f2;
  --list-marker-color: #c5c5c5;
  --list-marker-color-collapsed: #f2f2f2;
  --list-marker-color-hover: #f2f2f2;
  --menu-background: #a23227;
  --metadata-border-color: rgba(0, 0, 0, 0.25);
  --metadata-divider-color: rgba(0, 0, 0, 0.25);
  --metadata-input-text-color: #f2f2f2;
  --metadata-label-text-color: #f2f2f2;
  --metadata-label-text-color-hover: #f2f2f2;
  --modal-background: #35674d;
  --nav-collapse-icon-color: #c5c5c5;
  --nav-collapse-icon-color-collapsed: #c5c5c5;
  --nav-heading-color: #f2f2f2;
  --nav-heading-color-collapsed: #c5c5c5;
  --nav-heading-color-collapsed-hover: #f2f2f2;
  --nav-heading-color-hover: #f2f2f2;
  --nav-item-color: #f2f2f2;
  --nav-item-color-active: #f2f2f2;
  --nav-item-color-highlighted: #f2f2f2;
  --nav-item-color-hover: #f2f2f2;
  --nav-item-color-selected: #f2f2f2;
  --nav-tag-color: #c5c5c5;
  --nav-tag-color-active: #f2f2f2;
  --nav-tag-color-hover: #f2f2f2;
  --pdf-background: #35674d;
  --pdf-page-background: #35674d;
  --pdf-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  --pdf-sidebar-background: #35674d;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
  --pill-border-color: rgba(0, 0, 0, 0.25);
  --pill-color: #f2f2f2;
  --pill-color-hover: #f2f2f2;
  --pill-color-remove: #c5c5c5;
  --pill-color-remove-hover: #f2f2f2;
  --prompt-background: #35674d;
  --ribbon-background: #a23227;
  --ribbon-background-collapsed: #35674d;
  --search-clear-button-color: #f2f2f2;
  --search-icon-color: #f2f2f2;
  --search-result-background: #35674d;
  --setting-group-heading-color: #f2f2f2;
  --setting-items-background: #2c5640;
  --setting-items-border-color: rgba(0, 0, 0, 0.25);
  --slider-track-background: rgba(0, 0, 0, 0.25);
  --status-bar-background: #a23227;
  --status-bar-border-color: rgba(0, 0, 0, 0.25);
  --status-bar-text-color: #f2f2f2;
  --suggestion-background: #35674d;
  --tab-background-active: #35674d;
  --tab-container-background: #a23227;
  --tab-outline-color: rgba(0, 0, 0, 0.25);
  --tab-switcher-background: #a23227;
  --tab-switcher-menubar-background: linear-gradient(to top, #a23227, transparent);
  --tab-text-color: #c5c5c5;
  --tab-text-color-active: #f2f2f2;
  --tab-text-color-focused: #f2f2f2;
  --tab-text-color-focused-active: #f2f2f2;
  --tab-text-color-focused-active-current: #f2f2f2;
  --tab-text-color-focused-highlighted: #f2f2f2;
  --table-add-button-border-color: rgba(0, 0, 0, 0.25);
  --table-border-color: rgba(0, 0, 0, 0.25);
  --table-drag-handle-background-active: #ffbf00;
  --table-drag-handle-color: #c5c5c5;
  --table-drag-handle-color-active: #000000;
  --table-header-border-color: rgba(0, 0, 0, 0.25);
  --table-header-color: #f2f2f2;
  --table-selection-border-color: #ffbf00;
  --tag-color: #f2f2f2;
  --tag-color-hover: #f2f2f2;
  --text-accent: #f2f2f2;
  --text-accent-hover: #ffffff;
  --text-faint: #c5c5c5;
  --text-highlight-bg: #b5aa29;
  --text-muted: #f2f2f2;
  --text-normal: #f2f2f2;
  --text-on-accent: #000000;
  --text-selection: rgba(44, 86, 64, 0.99);
  --titlebar-background: #a23227;
  --titlebar-background-focused: #952e24;
  --titlebar-border-color: rgba(0, 0, 0, 0.25);
  --titlebar-text-color: #f2f2f2;
  --titlebar-text-color-focused: #f2f2f2;
  --vault-profile-color: #f2f2f2;
  --vault-profile-color-hover: #f2f2f2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(162, 50, 39);
  color: rgb(242, 242, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(53, 103, 77);
  color: rgb(242, 242, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(162, 50, 39);
  color: rgb(242, 242, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0.25);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(162, 50, 39);
  border-left-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}

body div#quartz-root {
  background-color: rgb(53, 103, 77);
  color: rgb(242, 242, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body .page article p > em, em {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body .page article p > i, i {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body .page article p > strong, strong {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body .text-highlight {
  background-color: rgb(181, 170, 41);
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body del {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: line-through rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body p {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}`,
    links: `body a.external, footer a {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: underline rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: underline rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body a.internal.broken {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
}`,
    lists: `body dd {
  color: rgb(242, 242, 242);
}

body dt {
  color: rgb(242, 242, 242);
}

body ol > li {
  color: rgb(242, 242, 242);
}

body ol.overflow {
  background-color: rgb(53, 103, 77);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body ul > li {
  color: rgb(242, 242, 242);
}

body ul.overflow {
  background-color: rgb(53, 103, 77);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(197, 197, 197);
  text-decoration: rgb(197, 197, 197);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body table {
  color: rgb(242, 242, 242);
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 64, 115);
  border-left-color: rgb(255, 64, 115);
  border-right-color: rgb(255, 64, 115);
  border-top-color: rgb(255, 64, 115);
  color: rgb(255, 64, 115);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 86, 64);
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 86, 64);
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 86, 64);
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
}

body pre:has(> code) {
  background-color: rgb(44, 86, 64);
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
}`,
    images: `body audio {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body figcaption {
  color: rgb(242, 242, 242);
}

body figure {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body img {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body video {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 86, 64);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body .footnotes {
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .transclude {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(255, 191, 0);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(255, 191, 0);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(242, 242, 242);
  text-decoration: line-through rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body input[type=checkbox] {
  border-bottom-color: rgb(197, 197, 197);
  border-left-color: rgb(197, 197, 197);
  border-right-color: rgb(197, 197, 197);
  border-top-color: rgb(197, 197, 197);
}

body li.task-list-item[data-task='!'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space {
  background-color: rgb(53, 103, 77);
}

body .search > .search-container > .search-space > * {
  color: rgb(242, 242, 242);
  outline: rgb(242, 242, 242) none 0px;
  text-decoration: rgb(242, 242, 242);
  text-decoration-color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(242, 242, 242);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(162, 50, 39);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(242, 242, 242);
}

body a.internal.tag-link::before {
  color: rgb(242, 242, 242);
}

body h1 {
  color: rgb(242, 242, 242);
}

body h2 {
  color: rgb(242, 242, 242);
}

body h2.page-title, h2.page-title a {
  color: rgb(242, 242, 242);
}

body h3 {
  color: rgb(242, 242, 242);
}

body h4 {
  color: rgb(242, 242, 242);
}

body h5 {
  color: rgb(242, 242, 242);
}

body h6 {
  color: rgb(242, 242, 242);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(53, 103, 77) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 103, 77);
}

body ::-webkit-scrollbar-corner {
  background: rgb(53, 103, 77) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 103, 77);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(53, 103, 77) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 103, 77);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(53, 103, 77) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 103, 77);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(53, 103, 77) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 103, 77);
}

body ::-webkit-scrollbar-track {
  background: rgb(53, 103, 77) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(53, 103, 77);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}`,
    footer: `body footer {
  background-color: rgb(162, 50, 39);
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}

body footer ul li a {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(242, 242, 242);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(242, 242, 242);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body li.section-li > .section .meta {
  color: rgb(242, 242, 242);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(242, 242, 242);
  text-decoration: rgb(242, 242, 242);
}

body ul.section-ul {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .darkmode svg {
  color: rgb(242, 242, 242);
  stroke: rgb(242, 242, 242);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .breadcrumb-element p {
  color: rgb(197, 197, 197);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .metadata {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-left-color: rgba(0, 0, 0, 0.25);
  border-right-color: rgba(0, 0, 0, 0.25);
  border-top-color: rgba(0, 0, 0, 0.25);
  color: rgb(242, 242, 242);
}

body .metadata-properties {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body .navigation-progress {
  background-color: rgb(162, 50, 39);
}

body .page-header h2.page-title {
  color: rgb(242, 242, 242);
}

body abbr {
  color: rgb(242, 242, 242);
  text-decoration: underline dotted rgb(242, 242, 242);
}

body details {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body input[type=text] {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body kbd {
  background-color: rgb(44, 86, 64);
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
  color: rgb(242, 242, 242);
}

body progress {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(242, 242, 242);
  border-right-color: rgb(242, 242, 242);
  border-top-color: rgb(242, 242, 242);
}

body sub {
  color: rgb(242, 242, 242);
}

body summary {
  color: rgb(242, 242, 242);
}

body sup {
  color: rgb(242, 242, 242);
}`,
  },
  light: {},
};
