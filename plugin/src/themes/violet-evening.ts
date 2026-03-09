import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "violet-evening", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #121025;
  --background-modifier-cover: #171532;
  --background-modifier-error: #c80000bf;
  --background-modifier-error-hover: #ff0000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: #2a2458;
  --background-modifier-form-field-highlighted: #2d285e;
  --background-modifier-form-field-hover: #2a2458;
  --background-modifier-success: #79f269;
  --background-primary: #2b2751;
  --background-primary-alt: #1e1d3d;
  --background-secondary: #201e42;
  --background-secondary-alt: #2d2355;
  --bases-cards-background: #2b2751;
  --bases-cards-cover-background: #1e1d3d;
  --bases-cards-shadow: 0 0 0 1px #121025;
  --bases-embed-border-color: #121025;
  --bases-group-heading-property-color: #c5b5ff;
  --bases-table-border-color: #121025;
  --bases-table-cell-background-active: #2b2751;
  --bases-table-cell-background-disabled: #1e1d3d;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ddaa03;
  --bases-table-group-background: #1e1d3d;
  --bases-table-header-background: #2b2751;
  --bases-table-header-color: #c5b5ff;
  --bases-table-summary-background: #2b2751;
  --blockquote-border-color: #ddaa03;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --canvas-background: #2b2751;
  --canvas-card-label-color: #c5b5ff;
  --caret-color: #fff;
  --checkbox-border-color: #c5b5ff;
  --checkbox-border-color-hover: #c5b5ff;
  --checkbox-color: #ddaa03;
  --checkbox-color-hover: #ae3afc;
  --checkbox-marker-color: #2b2751;
  --checklist-done-color: #c5b5ff;
  --code-background: #1e1d3d;
  --code-border-color: #121025;
  --code-comment: #c5b5ff;
  --code-normal: #fff;
  --code-punctuation: #c5b5ff;
  --collapse-icon-color: #c5b5ff;
  --collapse-icon-color-collapsed: #bd6af5;
  --divider-color: #121025;
  --divider-color-hover: #ddaa03;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #121025, inset 0 0 0 1px #121025;
  --embed-border-start: 2px solid #ddaa03;
  --file-header-background: #2b2751;
  --file-header-background-focused: #2b2751;
  --flair-background: #2a2a2a;
  --flair-color: #fff;
  --footnote-divider-color: #121025;
  --footnote-id-color: #c5b5ff;
  --footnote-id-color-no-occurrences: #c5b5ff;
  --graph-node: #c5b5ff;
  --graph-node-focused: #bd6af5;
  --graph-node-unresolved: #c5b5ff;
  --graph-text: #fff;
  --heading-formatting: #c5b5ff;
  --hr-color: #121025;
  --icon-color: #c5b5ff;
  --icon-color-active: #bd6af5;
  --icon-color-focused: #fff;
  --icon-color-hover: #c5b5ff;
  --input-date-separator: #c5b5ff;
  --input-placeholder-color: #c5b5ff;
  --interactive-accent: #ddaa03;
  --interactive-accent-hover: #ae3afc;
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --interactive-success: #79f269;
  --link-color: #bd6af5;
  --link-color-hover: #fdc307;
  --link-external-color: #bd6af5;
  --link-external-color-hover: #fdc307;
  --link-unresolved-color: #bd6af5;
  --list-marker-color: #c5b5ff;
  --list-marker-color-collapsed: #bd6af5;
  --list-marker-color-hover: #c5b5ff;
  --menu-background: #201e42;
  --metadata-border-color: #121025;
  --metadata-divider-color: #121025;
  --metadata-input-text-color: #fff;
  --metadata-label-text-color: #c5b5ff;
  --metadata-label-text-color-hover: #c5b5ff;
  --modal-background: #2b2751;
  --nav-collapse-icon-color: #c5b5ff;
  --nav-collapse-icon-color-collapsed: #c5b5ff;
  --nav-heading-color: #fff;
  --nav-heading-color-collapsed: #c5b5ff;
  --nav-heading-color-collapsed-hover: #c5b5ff;
  --nav-heading-color-hover: #fff;
  --nav-item-color: #c5b5ff;
  --nav-item-color-active: #fff;
  --nav-item-color-highlighted: #bd6af5;
  --nav-item-color-hover: #fff;
  --nav-item-color-selected: #fff;
  --nav-tag-color: #c5b5ff;
  --nav-tag-color-active: #c5b5ff;
  --nav-tag-color-hover: #c5b5ff;
  --pdf-background: #2b2751;
  --pdf-page-background: #2b2751;
  --pdf-shadow: 0 0 0 1px #121025;
  --pdf-sidebar-background: #2b2751;
  --pdf-thumbnail-shadow: 0 0 0 1px #121025;
  --pill-border-color: #121025;
  --pill-color: #c5b5ff;
  --pill-color-hover: #fff;
  --pill-color-remove: #c5b5ff;
  --pill-color-remove-hover: #bd6af5;
  --prompt-background: #2b2751;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: #201e42;
  --ribbon-background-collapsed: #2b2751;
  --search-clear-button-color: #c5b5ff;
  --search-icon-color: #c5b5ff;
  --search-result-background: #2b2751;
  --setting-group-heading-color: #fff;
  --setting-items-background: #1e1d3d;
  --setting-items-border-color: #121025;
  --slider-track-background: #121025;
  --status-bar-background: #201e42;
  --status-bar-border-color: #121025;
  --status-bar-text-color: #c5b5ff;
  --suggestion-background: #2b2751;
  --tab-background-active: #2b2751;
  --tab-container-background: #201e42;
  --tab-outline-color: #121025;
  --tab-switcher-background: #201e42;
  --tab-switcher-menubar-background: linear-gradient(to top, #201e42, transparent);
  --tab-text-color: #c5b5ff;
  --tab-text-color-active: #c5b5ff;
  --tab-text-color-focused: #c5b5ff;
  --tab-text-color-focused-active: #c5b5ff;
  --tab-text-color-focused-active-current: #fff;
  --tab-text-color-focused-highlighted: #bd6af5;
  --table-add-button-border-color: #121025;
  --table-border-color: #121025;
  --table-drag-handle-background-active: #ddaa03;
  --table-drag-handle-color: #c5b5ff;
  --table-drag-handle-color-active: #202020;
  --table-header-border-color: #121025;
  --table-header-color: #fff;
  --table-selection-border-color: #ddaa03;
  --tag-color: #bd6af5;
  --tag-color-hover: #bd6af5;
  --text-accent: #bd6af5;
  --text-accent-hover: #fdc307;
  --text-error: #ff3737bf;
  --text-error-hover: #990000;
  --text-faint: #c5b5ff;
  --text-highlight-bg: #662ca5;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #c5b5ff;
  --text-muted-rgb: 153, 153, 153;
  --text-normal: #fff;
  --text-on-accent: #202020;
  --text-selection: #8f2bd2;
  --titlebar-background: #201e42;
  --titlebar-background-focused: #2d2355;
  --titlebar-border-color: #121025;
  --titlebar-text-color: #c5b5ff;
  --titlebar-text-color-focused: #fff;
  --vault-profile-color: #fff;
  --vault-profile-color-hover: #fff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 30, 66);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(43, 39, 81);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 30, 66);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(18, 16, 37);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 30, 66);
  border-left-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(43, 39, 81);
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
  background-color: rgb(102, 44, 165);
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
  color: rgb(197, 181, 255);
  outline: rgb(197, 181, 255) none 0px;
  text-decoration: rgb(197, 181, 255);
  text-decoration-color: rgb(197, 181, 255);
}`,
    links: `body a.external, footer a {
  color: rgb(189, 106, 245);
  outline: rgb(189, 106, 245) none 0px;
  text-decoration: underline rgb(189, 106, 245);
  text-decoration-color: rgb(189, 106, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(189, 106, 245);
  outline: rgb(189, 106, 245) none 0px;
  text-decoration: underline rgb(189, 106, 245);
  text-decoration-color: rgb(189, 106, 245);
}

body a.internal.broken {
  color: rgb(189, 106, 245);
  outline: rgb(189, 106, 245) none 0px;
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
  background-color: rgb(43, 39, 81);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(43, 39, 81);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
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
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 156, 42);
  border-left-color: rgb(250, 156, 42);
  border-right-color: rgb(250, 156, 42);
  border-top-color: rgb(250, 156, 42);
  color: rgb(250, 156, 42);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
}

body pre:has(> code) {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
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
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(221, 170, 3);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(221, 170, 3);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(197, 181, 255);
  text-decoration: line-through rgb(197, 181, 255);
  text-decoration-color: rgb(197, 181, 255);
}

body input[type=checkbox] {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
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
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(254, 197, 9);
  border-left-color: rgb(254, 197, 9);
  border-right-color: rgb(254, 197, 9);
  border-top-color: rgb(254, 197, 9);
}

body .callout[data-callout="note"] {
  --callout-color: 254, 197, 9;
  background-color: rgba(254, 197, 9, 0.1);
  border-bottom-color: rgba(254, 197, 9, 0.25);
  border-left-color: rgba(254, 197, 9, 0.25);
  border-right-color: rgba(254, 197, 9, 0.25);
  border-top-color: rgba(254, 197, 9, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(42, 36, 88);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(43, 39, 81);
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
  border-bottom-color: rgb(32, 30, 66);
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
  color: rgb(189, 106, 245);
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
  color: rgb(2, 254, 254);
}

body hr {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
}`,
    scrollbars: `body .callout {
  --callout-color: 254, 197, 9;
  border-bottom-color: rgba(254, 197, 9, 0.25);
  border-left-color: rgba(254, 197, 9, 0.25);
  border-right-color: rgba(254, 197, 9, 0.25);
  border-top-color: rgba(254, 197, 9, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

body ::-webkit-scrollbar-corner {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

body ::-webkit-scrollbar-track {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(253, 195, 7);
  border-left-color: rgb(253, 195, 7);
  border-right-color: rgb(253, 195, 7);
  border-top-color: rgb(253, 195, 7);
  color: rgb(253, 195, 7);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}`,
    footer: `body footer {
  background-color: rgb(32, 30, 66);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(197, 181, 255);
}

body footer ul li a {
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
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
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(197, 181, 255);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(197, 181, 255);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(197, 181, 255);
  text-decoration: rgb(197, 181, 255);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

body .darkmode svg {
  color: rgb(197, 181, 255);
  stroke: rgb(197, 181, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

body .breadcrumb-element p {
  color: rgb(197, 181, 255);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(197, 181, 255);
}

body .metadata-properties {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

body .navigation-progress {
  background-color: rgb(32, 30, 66);
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
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

body kbd {
  background-color: rgb(30, 29, 61);
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
