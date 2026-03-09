import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tokyo-night-simple",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: #292e42;
  --background-modifier-border: #292e42;
  --background-modifier-hover: #292e42;
  --background-primary: #1a1b26;
  --background-secondary: #16161e;
  --background-secondary-alt: #0c0e14;
  --bases-cards-background: #1a1b26;
  --bases-cards-shadow: 0 0 0 1px #292e42;
  --bases-embed-border-color: #292e42;
  --bases-group-heading-property-color: #a9b1d6;
  --bases-table-border-color: #292e42;
  --bases-table-cell-background-active: #1a1b26;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7aa2f7;
  --bases-table-header-background: #1a1b26;
  --bases-table-header-background-hover: #292e42;
  --bases-table-header-color: #a9b1d6;
  --bases-table-summary-background: #1a1b26;
  --bases-table-summary-background-hover: #292e42;
  --blockquote-border-color: #7aa2f7;
  --canvas-background: #1a1b26;
  --canvas-card-label-color: #565f89;
  --caret-color: #c0caf5;
  --checkbox-border-color: #565f89;
  --checkbox-border-color-hover: #a9b1d6;
  --checkbox-color: #7aa2f7;
  --checkbox-color-hover: #7dcfff;
  --checkbox-marker-color: #1a1b26;
  --checklist-done-color: #a9b1d6;
  --code-background: #16161e;
  --code-border-color: #292e42;
  --code-bracket-background: #292e42;
  --code-comment: #565f89;
  --code-function: #7dcfff;
  --code-keyword: #bb9af7;
  --code-normal: #7aa2f7;
  --code-number: #e0af68;
  --code-operator: #f7768e;
  --code-punctuation: #a9b1d6;
  --code-string: #9ece6a;
  --collapse-icon-color: #565f89;
  --collapse-icon-color-collapsed: #7aa2f7;
  --divider-color: #292e42;
  --divider-color-hover: #7aa2f7;
  --embed-block-shadow-hover: 0 0 0 1px #292e42, inset 0 0 0 1px #292e42;
  --embed-border-start: 2px solid #7aa2f7;
  --file-header-background: #1a1b26;
  --file-header-background-focused: #1a1b26;
  --flair-color: #c0caf5;
  --footnote-divider-color: #292e42;
  --footnote-id-color: #a9b1d6;
  --footnote-id-color-no-occurrences: #565f89;
  --footnote-input-background-active: #292e42;
  --graph-node: #a9b1d6;
  --graph-node-focused: #7aa2f7;
  --graph-node-unresolved: #565f89;
  --graph-text: #c0caf5;
  --heading-formatting: #565f89;
  --hr-color: #292e42;
  --icon-color: #a9b1d6;
  --icon-color-active: #7aa2f7;
  --icon-color-focused: #c0caf5;
  --icon-color-hover: #a9b1d6;
  --input-date-separator: #565f89;
  --input-placeholder-color: #565f89;
  --interactive-accent: #7aa2f7;
  --interactive-accent-hover: #7dcfff;
  --interactive-danger: #f7768e;
  --interactive-success: #9ece6a;
  --interactive-warning: #e0af68;
  --link-color: #7aa2f7;
  --link-color-hover: #7dcfff;
  --link-external-color: #7aa2f7;
  --link-external-color-hover: #7dcfff;
  --link-unresolved-color: #7aa2f7;
  --list-marker-color: #565f89;
  --list-marker-color-collapsed: #7aa2f7;
  --list-marker-color-hover: #a9b1d6;
  --menu-background: #16161e;
  --metadata-border-color: #292e42;
  --metadata-divider-color: #292e42;
  --metadata-input-background-active: #292e42;
  --metadata-input-text-color: #c0caf5;
  --metadata-label-background-active: #292e42;
  --metadata-label-text-color: #a9b1d6;
  --metadata-label-text-color-hover: #a9b1d6;
  --metadata-property-background-active: #292e42;
  --modal-background: #1a1b26;
  --nav-collapse-icon-color: #565f89;
  --nav-collapse-icon-color-collapsed: #565f89;
  --nav-heading-color: #c0caf5;
  --nav-heading-color-collapsed: #565f89;
  --nav-heading-color-collapsed-hover: #a9b1d6;
  --nav-heading-color-hover: #c0caf5;
  --nav-item-background-active: #292e42;
  --nav-item-background-hover: #292e42;
  --nav-item-color: #a9b1d6;
  --nav-item-color-active: #c0caf5;
  --nav-item-color-highlighted: #7aa2f7;
  --nav-item-color-hover: #c0caf5;
  --nav-item-color-selected: #c0caf5;
  --nav-tag-color: #565f89;
  --nav-tag-color-active: #a9b1d6;
  --nav-tag-color-hover: #a9b1d6;
  --pdf-background: #1a1b26;
  --pdf-page-background: #1a1b26;
  --pdf-shadow: 0 0 0 1px #292e42;
  --pdf-sidebar-background: #1a1b26;
  --pdf-thumbnail-shadow: 0 0 0 1px #292e42;
  --pill-border-color: #292e42;
  --pill-color: #a9b1d6;
  --pill-color-hover: #c0caf5;
  --pill-color-remove: #565f89;
  --pill-color-remove-hover: #7aa2f7;
  --prompt-background: #1a1b26;
  --ribbon-background: #16161e;
  --ribbon-background-collapsed: #1a1b26;
  --scrollbar-thumb-bg: #292e42;
  --search-clear-button-color: #a9b1d6;
  --search-icon-color: #a9b1d6;
  --search-result-background: #1a1b26;
  --setting-group-heading-color: #c0caf5;
  --setting-items-border-color: #292e42;
  --slider-track-background: #292e42;
  --status-bar-background: #16161e;
  --status-bar-border-color: #292e42;
  --status-bar-text-color: #a9b1d6;
  --suggestion-background: #1a1b26;
  --tab-background-active: #1a1b26;
  --tab-container-background: #16161e;
  --tab-outline-color: #292e42;
  --tab-switcher-background: #16161e;
  --tab-switcher-menubar-background: linear-gradient(to top, #16161e, transparent);
  --tab-text-color: #565f89;
  --tab-text-color-active: #a9b1d6;
  --tab-text-color-focused: #a9b1d6;
  --tab-text-color-focused-active: #a9b1d6;
  --tab-text-color-focused-active-current: #c0caf5;
  --tab-text-color-focused-highlighted: #7aa2f7;
  --table-add-button-border-color: #292e42;
  --table-border-color: #292e42;
  --table-drag-handle-background-active: #7aa2f7;
  --table-drag-handle-color: #565f89;
  --table-header-border-color: #292e42;
  --table-header-color: #c0caf5;
  --table-selection-border-color: #7aa2f7;
  --tag-color: #7aa2f7;
  --tag-color-hover: #7aa2f7;
  --text-accent: #7aa2f7;
  --text-accent-hover: #7dcfff;
  --text-faint: #565f89;
  --text-highlight-bg: #292e42;
  --text-link: #7aa2f7;
  --text-link-hover: #7dcfff;
  --text-muted: #a9b1d6;
  --text-normal: #c0caf5;
  --text-selection: #364a82;
  --titlebar-background: #16161e;
  --titlebar-background-focused: #0c0e14;
  --titlebar-border-color: #292e42;
  --titlebar-text-color: #a9b1d6;
  --titlebar-text-color-focused: #c0caf5;
  --vault-profile-color: #c0caf5;
  --vault-profile-color-hover: #c0caf5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 30);
  color: rgb(192, 202, 245);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(41, 46, 66);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(22, 22, 30);
  border-left-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body div#quartz-root {
  background-color: rgb(26, 27, 38);
  color: rgb(192, 202, 245);
}`,
    typography: `body .page article p > b, b {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body .page article p > em, em {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body .page article p > i, i {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body .page article p > strong, strong {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body .text-highlight {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body del {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: line-through rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body p {
  color: rgb(169, 177, 214);
  outline: rgb(169, 177, 214) none 0px;
  text-decoration: rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}`,
    links: `body a.external, footer a {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: underline rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
  text-decoration: underline rgb(122, 162, 247);
  text-decoration-color: rgb(122, 162, 247);
}

body a.internal.broken {
  color: rgb(122, 162, 247);
  outline: rgb(122, 162, 247) none 0px;
}`,
    lists: `body dd {
  color: rgb(192, 202, 245);
}

body dt {
  color: rgb(192, 202, 245);
}

body ol > li {
  color: rgb(192, 202, 245);
}

body ol.overflow {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body ul > li {
  color: rgb(192, 202, 245);
}

body ul.overflow {
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(86, 95, 137);
  text-decoration: rgb(86, 95, 137);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body table {
  color: rgb(192, 202, 245);
}

body td {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body th {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(125, 207, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(125, 207, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(125, 207, 255);
  border-left-color: rgb(125, 207, 255);
  border-right-color: rgb(125, 207, 255);
  border-top-color: rgb(125, 207, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}

body pre:has(> code) {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
}`,
    images: `body audio {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body figcaption {
  color: rgb(192, 202, 245);
}

body figure {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body img {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body video {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
}

body .footnotes {
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .transclude {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .transclude-inner {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(169, 177, 214);
  text-decoration: line-through rgb(169, 177, 214);
  text-decoration-color: rgb(169, 177, 214);
}

body input[type=checkbox] {
  border-bottom-color: rgb(86, 95, 137);
  border-left-color: rgb(86, 95, 137);
  border-right-color: rgb(86, 95, 137);
  border-top-color: rgb(86, 95, 137);
}

body li.task-list-item[data-task='!'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='*'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='-'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='/'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='>'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='?'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='I'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='S'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='b'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='c'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='d'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='f'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='i'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='k'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='l'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='p'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='u'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body li.task-list-item[data-task='w'] {
  color: rgb(192, 202, 245);
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 38);
}

body .search > .search-container > .search-space > * {
  color: rgb(192, 202, 245);
  outline: rgb(192, 202, 245) none 0px;
  text-decoration: rgb(192, 202, 245);
  text-decoration-color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 30);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(41, 46, 66);
  color: rgb(192, 202, 245);
}

body a.internal.tag-link::before {
  color: rgb(122, 162, 247);
}

body h1 {
  color: rgb(192, 202, 245);
}

body h2 {
  color: rgb(192, 202, 245);
}

body h2.page-title, h2.page-title a {
  color: rgb(192, 202, 245);
}

body h3 {
  color: rgb(192, 202, 245);
}

body h4 {
  color: rgb(192, 202, 245);
}

body h5 {
  color: rgb(192, 202, 245);
}

body h6 {
  color: rgb(192, 202, 245);
}

body hr {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(41, 46, 66);
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}`,
    footer: `body footer {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(169, 177, 214);
}

body footer ul li a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(192, 202, 245);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(169, 177, 214);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body li.section-li > .section .meta {
  color: rgb(169, 177, 214);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(169, 177, 214);
  text-decoration: rgb(169, 177, 214);
}

body ul.section-ul {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body .darkmode svg {
  color: rgb(169, 177, 214);
  stroke: rgb(169, 177, 214);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body .breadcrumb-element p {
  color: rgb(86, 95, 137);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
  color: rgb(192, 202, 245);
}

body .metadata {
  border-bottom-color: rgb(41, 46, 66);
  border-left-color: rgb(41, 46, 66);
  border-right-color: rgb(41, 46, 66);
  border-top-color: rgb(41, 46, 66);
  color: rgb(169, 177, 214);
}

body .metadata-properties {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body .navigation-progress {
  background-color: rgb(22, 22, 30);
}

body .page-header h2.page-title {
  color: rgb(192, 202, 245);
}

body abbr {
  color: rgb(192, 202, 245);
  text-decoration: underline dotted rgb(192, 202, 245);
}

body details {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body input[type=text] {
  border-bottom-color: rgb(169, 177, 214);
  border-left-color: rgb(169, 177, 214);
  border-right-color: rgb(169, 177, 214);
  border-top-color: rgb(169, 177, 214);
  color: rgb(169, 177, 214);
}

body kbd {
  background-color: rgb(22, 22, 30);
  border-bottom-color: rgb(122, 162, 247);
  border-left-color: rgb(122, 162, 247);
  border-right-color: rgb(122, 162, 247);
  border-top-color: rgb(122, 162, 247);
  color: rgb(122, 162, 247);
}

body progress {
  border-bottom-color: rgb(192, 202, 245);
  border-left-color: rgb(192, 202, 245);
  border-right-color: rgb(192, 202, 245);
  border-top-color: rgb(192, 202, 245);
}

body sub {
  color: rgb(192, 202, 245);
}

body summary {
  color: rgb(192, 202, 245);
}

body sup {
  color: rgb(192, 202, 245);
}`,
  },
  light: {},
};
