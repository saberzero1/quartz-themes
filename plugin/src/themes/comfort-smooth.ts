import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "comfort-smooth", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #92a1a17a;
  --background-primary: #2f3136;
  --background-primary-alt: #3b3f48;
  --background-secondary: #202225;
  --background-secondary-alt: #0c1018d1;
  --bases-cards-background: #2f3136;
  --bases-cards-cover-background: #3b3f48;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a;
  --bases-embed-border-color: #92a1a17a;
  --bases-group-heading-property-color: #bbc0c5;
  --bases-table-border-color: #92a1a17a;
  --bases-table-cell-background-active: #2f3136;
  --bases-table-cell-background-disabled: #3b3f48;
  --bases-table-cell-shadow-focus: 0 0 0 2px #a79040;
  --bases-table-group-background: #3b3f48;
  --bases-table-header-background: #2f3136;
  --bases-table-header-color: #bbc0c5;
  --bases-table-summary-background: #2f3136;
  --blockquote-border: #6a7070;
  --blockquote-border-color: #a79040;
  --canvas-background: #2f3136;
  --canvas-card-label-color: #a09b80;
  --caret-color: #bbc0c5;
  --checkbox-border-color: #a09b80;
  --checkbox-border-color-hover: #bbc0c5;
  --checkbox-color: #a79040;
  --checkbox-marker-color: #2f3136;
  --checklist-done-color: #bbc0c5;
  --code-background: #3b3f48;
  --code-border-color: #92a1a17a;
  --code-comment: #a09b80;
  --code-normal: #bbc0c5;
  --code-punctuation: #bbc0c5;
  --collapse-icon-color: #a09b80;
  --collapse-icon-color-collapsed: #ff9640ba;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #92a1a17a;
  --divider-color-hover: #a79040;
  --dot-graph: #bbc0c5;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a;
  --embed-border-start: 2px solid #a79040;
  --file-header-background: #2f3136;
  --file-header-background-focused: #2f3136;
  --flair-color: #bbc0c5;
  --footnote-divider-color: #92a1a17a;
  --footnote-id-color: #bbc0c5;
  --footnote-id-color-no-occurrences: #a09b80;
  --graph-node: #bbc0c5;
  --graph-node-focused: #ff9640ba;
  --graph-node-unresolved: #a09b80;
  --graph-text: #bbc0c5;
  --gray: var(--text-muted);
  --heading-formatting: #a09b80;
  --highlight: var(--text-highlight-bg);
  --hr-color: #92a1a17a;
  --icon-color: #bbc0c5;
  --icon-color-active: #ff9640ba;
  --icon-color-focused: #bbc0c5;
  --icon-color-hover: #bbc0c5;
  --input-date-separator: #a09b80;
  --input-placeholder-color: #a09b80;
  --interactive-accent: #a79040;
  --interactive-accent-rgb: #fe8019;
  --interactive-before: #5e6565;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ff9640ba;
  --link-external-color: #ff9640ba;
  --link-unresolved-color: #ff9640ba;
  --list-marker-color: #a09b80;
  --list-marker-color-collapsed: #ff9640ba;
  --list-marker-color-hover: #bbc0c5;
  --menu-background: #202225;
  --metadata-border-color: #92a1a17a;
  --metadata-divider-color: #92a1a17a;
  --metadata-input-text-color: #bbc0c5;
  --metadata-label-text-color: #bbc0c5;
  --metadata-label-text-color-hover: #bbc0c5;
  --modal-background: #2f3136;
  --nav-collapse-icon-color: #a09b80;
  --nav-collapse-icon-color-collapsed: #a09b80;
  --nav-heading-color: #bbc0c5;
  --nav-heading-color-collapsed: #a09b80;
  --nav-heading-color-collapsed-hover: #bbc0c5;
  --nav-heading-color-hover: #bbc0c5;
  --nav-item-color: #bbc0c5;
  --nav-item-color-active: #bbc0c5;
  --nav-item-color-highlighted: #ff9640ba;
  --nav-item-color-hover: #bbc0c5;
  --nav-item-color-selected: #bbc0c5;
  --nav-tag-color: #a09b80;
  --nav-tag-color-active: #bbc0c5;
  --nav-tag-color-hover: #bbc0c5;
  --pdf-background: #2f3136;
  --pdf-page-background: #2f3136;
  --pdf-shadow: 0 0 0 1px #92a1a17a;
  --pdf-sidebar-background: #2f3136;
  --pdf-thumbnail-shadow: 0 0 0 1px #92a1a17a;
  --pill-border-color: #92a1a17a;
  --pill-color: #bbc0c5;
  --pill-color-hover: #bbc0c5;
  --pill-color-remove: #a09b80;
  --pill-color-remove-hover: #ff9640ba;
  --pre-code: #272524d9;
  --prompt-background: #2f3136;
  --ribbon-background: #202225;
  --ribbon-background-collapsed: #2f3136;
  --search-clear-button-color: #bbc0c5;
  --search-icon-color: #bbc0c5;
  --search-result-background: #2f3136;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bbc0c5;
  --setting-items-background: #3b3f48;
  --setting-items-border-color: #92a1a17a;
  --slider-track-background: #92a1a17a;
  --status-bar-background: #202225;
  --status-bar-border-color: #92a1a17a;
  --status-bar-text-color: #bbc0c5;
  --suggestion-background: #2f3136;
  --tab-background-active: #2f3136;
  --tab-container-background: #202225;
  --tab-outline-color: #92a1a17a;
  --tab-switcher-background: #202225;
  --tab-switcher-menubar-background: linear-gradient(to top, #202225, transparent);
  --tab-text-color: #a09b80;
  --tab-text-color-active: #bbc0c5;
  --tab-text-color-focused: #bbc0c5;
  --tab-text-color-focused-active: #bbc0c5;
  --tab-text-color-focused-active-current: #bbc0c5;
  --tab-text-color-focused-highlighted: #ff9640ba;
  --table-add-button-border-color: #92a1a17a;
  --table-border-color: #92a1a17a;
  --table-drag-handle-background-active: #a79040;
  --table-drag-handle-color: #a09b80;
  --table-header-border-color: #92a1a17a;
  --table-header-color: #bbc0c5;
  --table-selection-border-color: #a79040;
  --tag-color: #ff9640ba;
  --tag-color-hover: #ff9640ba;
  --tertiary: var(--text-accent);
  --text-a: #59a2c5;
  --text-a-hover: #b3a14b;
  --text-accent: #ff9640ba;
  --text-faint: #a09b80;
  --text-graph: #dde0e5;
  --text-highlight-bg: #686028;
  --text-link: #59a2c5;
  --text-mark: #686028;
  --text-muted: #bbc0c5;
  --text-normal: #bbc0c5;
  --text-selection: #406488;
  --text-title-h1: #939bd6;
  --text-title-h2: #ba7390;
  --text-title-h3: #b78b60;
  --text-title-h4: #a79645;
  --text-title-h5: #859676;
  --text-title-h6: #799097;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #202225;
  --titlebar-background-focused: #0c1018d1;
  --titlebar-border-color: #92a1a17a;
  --titlebar-text-color: #bbc0c5;
  --titlebar-text-color-focused: #bbc0c5;
  --vault-profile-color: #bbc0c5;
  --vault-profile-color-hover: #bbc0c5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 34, 37);
  color: rgb(187, 192, 197);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(187, 192, 197);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 34, 37);
  color: rgb(187, 192, 197);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 34, 37);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(187, 192, 197);
}`,
    typography: `body .page article p > b, b {
  color: rgb(202, 196, 188);
  font-weight: 550;
  outline: rgb(202, 196, 188) none 0px;
  text-decoration: rgb(202, 196, 188);
  text-decoration-color: rgb(202, 196, 188);
}

body .page article p > em, em {
  color: rgb(186, 167, 109);
  outline: rgb(186, 167, 109) none 0px;
  text-decoration: rgb(186, 167, 109);
  text-decoration-color: rgb(186, 167, 109);
}

body .page article p > i, i {
  color: rgb(186, 167, 109);
  outline: rgb(186, 167, 109) none 0px;
  text-decoration: rgb(186, 167, 109);
  text-decoration-color: rgb(186, 167, 109);
}

body .page article p > strong, strong {
  color: rgb(202, 196, 188);
  font-weight: 550;
  outline: rgb(202, 196, 188) none 0px;
  text-decoration: rgb(202, 196, 188);
  text-decoration-color: rgb(202, 196, 188);
}

body .text-highlight {
  background-color: rgb(104, 96, 40);
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body del {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: line-through rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body p {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}`,
    links: `body a.external, footer a {
  color: rgb(89, 162, 197);
  font-family: Avenir;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  font-family: Avenir;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal.broken {
  color: rgb(89, 162, 197);
  font-family: Avenir;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}`,
    lists: `body dd {
  color: rgb(187, 192, 197);
}

body dt {
  color: rgb(187, 192, 197);
}

body ol > li {
  color: rgb(187, 192, 197);
}

body ol.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body ul > li {
  color: rgb(187, 192, 197);
}

body ul.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(89, 162, 197);
  text-decoration: rgb(89, 162, 197);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body table {
  color: rgb(187, 192, 197);
}

body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body th {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `body code {
  background-color: rgb(85, 89, 97);
  border-bottom-color: rgb(213, 218, 221);
  border-left-color: rgb(213, 218, 221);
  border-right-color: rgb(213, 218, 221);
  border-top-color: rgb(213, 218, 221);
  color: rgb(213, 218, 221);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 63, 72);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 63, 72);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body pre > code, pre:has(> code) {
  background-color: rgb(59, 63, 72);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(59, 63, 72);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body figcaption {
  color: rgb(187, 192, 197);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body video {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    embeds: `body .file-embed {
  background-color: rgb(59, 63, 72);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(167, 144, 64);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(167, 144, 64);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(187, 192, 197);
  text-decoration: line-through rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body input[type=checkbox] {
  border-bottom-color: rgb(160, 155, 128);
  border-left-color: rgb(160, 155, 128);
  border-right-color: rgb(160, 155, 128);
  border-top-color: rgb(160, 155, 128);
  margin-bottom: 1px;
  margin-right: 1px;
  margin-top: 1px;
  width: 15.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='*'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='-'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='/'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='>'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='?'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='I'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='S'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='b'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='c'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='d'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='f'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='i'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='k'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='l'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='p'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='u'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='w'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 34, 37);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

body a.internal.tag-link::before {
  color: rgba(255, 150, 64, 0.73);
}

body h1 {
  color: rgb(147, 155, 214);
}

body h2 {
  color: rgb(186, 115, 144);
}

body h2.page-title, h2.page-title a {
  color: rgb(187, 192, 197);
}

body h3 {
  color: rgb(183, 139, 96);
}

body h4 {
  color: rgb(167, 150, 69);
}

body h5 {
  color: rgb(133, 150, 118);
}

body h6 {
  color: rgb(121, 144, 151);
}

body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(191, 191, 191);
  text-decoration: rgb(191, 191, 191);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(191, 191, 191);
  text-decoration: rgb(191, 191, 191);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}`,
    footer: `body footer {
  background-color: rgb(32, 34, 37);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body footer ul li a {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(187, 192, 197);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .darkmode svg {
  color: rgb(187, 192, 197);
  stroke: rgb(187, 192, 197);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .breadcrumb-element p {
  color: rgb(160, 155, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body .metadata-properties {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .navigation-progress {
  background-color: rgb(32, 34, 37);
}

body .page-header h2.page-title {
  color: rgb(187, 192, 197);
}

body abbr {
  color: rgb(187, 192, 197);
  text-decoration: underline dotted rgb(187, 192, 197);
}

body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body input[type=text] {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body kbd {
  background-color: rgb(59, 63, 72);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body sub {
  color: rgb(187, 192, 197);
}

body summary {
  color: rgb(187, 192, 197);
}

body sup {
  color: rgb(187, 192, 197);
}`,
  },
  light: {},
};
