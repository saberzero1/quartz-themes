import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "green-nightmare", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #000000;
  --background-primary-alt: #000000;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #000000;
  --bases-group-heading-property-color: #cccccc;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-cell-shadow-focus: 0 0 0 2px #39ff14;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #000000;
  --bases-table-header-color: #cccccc;
  --bases-table-summary-background: #000000;
  --blockquote-border-color: #39ff14;
  --bold-color: #ffffff;
  --canvas-background: #000000;
  --canvas-card-label-color: #cccccc;
  --caret-color: #eeeeee;
  --checkbox-border-color: #cccccc;
  --checkbox-border-color-hover: #cccccc;
  --checkbox-color: #39ff14;
  --checkbox-marker-color: #000000;
  --checklist-done-color: #cccccc;
  --code-background: #000000;
  --code-comment: #cccccc;
  --code-normal: #a8c090;
  --code-punctuation: #cccccc;
  --collapse-icon-color: #cccccc;
  --collapse-icon-color-collapsed: #39ff14;
  --divider-color-hover: #39ff14;
  --embed-border-start: 2px solid #39ff14;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --flair-color: #eeeeee;
  --footnote-id-color: #cccccc;
  --footnote-id-color-no-occurrences: #cccccc;
  --graph-node: #cccccc;
  --graph-node-focused: #39ff14;
  --graph-node-unresolved: #cccccc;
  --graph-text: #eeeeee;
  --h1-color: #98fb98;
  --h2-color: #50c878;
  --h3-color: #a8e4a0;
  --h4-color: #a9ba9d;
  --h5-color: #9dc183;
  --h6-color: #486e02;
  --heading-formatting: #cccccc;
  --icon-color: #cccccc;
  --icon-color-active: #39ff14;
  --icon-color-focused: #39ff14;
  --icon-color-hover: #39ff14;
  --indentation-guide-color: #39ff14;
  --indentation-guide-color-active: #39ff14;
  --inline-title-color: #39ff14;
  --input-date-separator: #cccccc;
  --input-placeholder-color: #cccccc;
  --interactive-accent: #39ff14;
  --italic-color: #dddddd;
  --link-color: #ace1af;
  --link-decoration-thickness: 1px;
  --link-external-color: #568203;
  --link-unresolved-color: #39ff14;
  --list-marker-color: #cccccc;
  --list-marker-color-collapsed: #39ff14;
  --list-marker-color-hover: #cccccc;
  --menu-background: #000000;
  --metadata-input-text-color: #eeeeee;
  --metadata-label-text-color: #cccccc;
  --metadata-label-text-color-hover: #cccccc;
  --modal-background: #000000;
  --nav-collapse-icon-color: #cccccc;
  --nav-collapse-icon-color-collapsed: #cccccc;
  --nav-file-tag: #f4ec9e;
  --nav-heading-color: #eeeeee;
  --nav-heading-color-collapsed: #cccccc;
  --nav-heading-color-collapsed-hover: #cccccc;
  --nav-heading-color-hover: #eeeeee;
  --nav-indentation-guide-color: #5f6148;
  --nav-item-background-active: #000000;
  --nav-item-color: #cccccc;
  --nav-item-color-active: #39ff14;
  --nav-item-color-highlighted: #39ff14;
  --nav-item-color-hover: #39ff14;
  --nav-item-color-selected: #eeeeee;
  --nav-item-size: 15px;
  --nav-item-weight: 500;
  --nav-item-weight-active: 900;
  --nav-tag-color: #cccccc;
  --nav-tag-color-active: #cccccc;
  --nav-tag-color-hover: #cccccc;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color: #cccccc;
  --pill-color-hover: #eeeeee;
  --pill-color-remove: #cccccc;
  --pill-color-remove-hover: #39ff14;
  --prompt-background: #000000;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --scrollbar-thumb-bg: #39ff14;
  --search-clear-button-color: #cccccc;
  --search-icon-color: #cccccc;
  --search-result-background: #000000;
  --setting-group-heading-color: #eeeeee;
  --setting-items-background: #000000;
  --status-bar-background: #000000;
  --status-bar-text-color: #cccccc;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #000000;
  --tab-font-weight: 900;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color: #cccccc;
  --tab-text-color-active: #cccccc;
  --tab-text-color-focused: #cccccc;
  --tab-text-color-focused-active: #cccccc;
  --tab-text-color-focused-active-current: #39ff14;
  --tab-text-color-focused-highlighted: #39ff14;
  --tab-text-weight-focused-active-current: 900;
  --table-drag-handle-background-active: #39ff14;
  --table-drag-handle-color: #cccccc;
  --table-drag-handle-color-active: #000000;
  --table-header-background: #2a2a2a;
  --table-header-color: #eeeeee;
  --table-row-alt-background: #141414;
  --table-selection-border-color: #39ff14;
  --tag-color: #74c365;
  --tag-color-hover: #39ff14;
  --text-accent: #39ff14;
  --text-faint: #cccccc;
  --text-muted: #cccccc;
  --text-normal: #eeeeee;
  --text-on-accent: #000000;
  --text-selection: #486e02;
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-text-color: #cccccc;
  --titlebar-text-color-focused: #eeeeee;
  --vault-profile-color: #eeeeee;
  --vault-profile-color-hover: #eeeeee;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(221, 221, 221);
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .page article p > i, i {
  color: rgb(221, 221, 221);
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body del {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: line-through rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body p {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `body a.external, footer a {
  color: rgb(86, 130, 3);
  outline: rgb(86, 130, 3) none 0px;
  text-decoration: underline 1px rgb(86, 130, 3);
  text-decoration-color: rgb(86, 130, 3);
  text-decoration-thickness: 1px;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(172, 225, 175);
  outline: rgb(172, 225, 175) none 0px;
  text-decoration: underline 1px rgb(172, 225, 175);
  text-decoration-color: rgb(172, 225, 175);
  text-decoration-thickness: 1px;
}

body a.internal.broken {
  color: rgb(57, 255, 20);
  outline: rgb(57, 255, 20) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `body dd {
  color: rgb(238, 238, 238);
}

body dt {
  color: rgb(238, 238, 238);
}

body ol > li {
  color: rgb(238, 238, 238);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body ul > li {
  color: rgb(238, 238, 238);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body table {
  color: rgb(238, 238, 238);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(20, 20, 20);
}

body td {
  color: rgb(238, 238, 238);
}

body th {
  color: rgb(238, 238, 238);
}

body tr {
  background-color: rgb(42, 42, 42);
}`,
    code: `body code {
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body figcaption {
  color: rgb(238, 238, 238);
}

body figure {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body img {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body video {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .footnotes {
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .transclude {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(57, 255, 20);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .transclude-inner {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(57, 255, 20);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 204, 204);
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body input[type=checkbox] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    search: `body .search > .search-button {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(238, 238, 238);
}

body a.internal.tag-link::before {
  color: rgb(116, 195, 101);
}

body h1 {
  color: rgb(152, 251, 152);
}

body h2 {
  color: rgb(80, 200, 120);
}

body h2.page-title, h2.page-title a {
  color: rgb(57, 255, 20);
}

body h3 {
  color: rgb(168, 228, 160);
}

body h4 {
  color: rgb(169, 186, 157);
}

body h5 {
  color: rgb(157, 193, 131);
}

body h6 {
  color: rgb(72, 110, 2);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  font-weight: 500;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-weight: 500;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 204, 204);
  font-weight: 500;
  text-decoration: rgb(204, 204, 204);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(57, 255, 20);
  border-left-color: rgb(57, 255, 20);
  border-right-color: rgb(57, 255, 20);
  border-top-color: rgb(57, 255, 20);
  color: rgb(57, 255, 20);
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
}

body footer ul li a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(238, 238, 238);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
}

body ul.section-ul {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .darkmode svg {
  color: rgb(204, 204, 204);
  stroke: rgb(204, 204, 204);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .breadcrumb-element p {
  color: rgb(204, 204, 204);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .metadata {
  color: rgb(204, 204, 204);
}

body .metadata-properties {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(238, 238, 238);
}

body abbr {
  color: rgb(238, 238, 238);
  text-decoration: underline dotted rgb(238, 238, 238);
}

body details {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body input[type=text] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

body progress {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body sub {
  color: rgb(238, 238, 238);
}

body summary {
  color: rgb(238, 238, 238);
}

body sup {
  color: rgb(238, 238, 238);
}`,
  },
  light: {},
};
