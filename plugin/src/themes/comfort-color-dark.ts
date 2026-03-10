import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "comfort-color-dark",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #92a1a17a;
  --background-primary: #2f3136;
  --background-primary-alt: #36393f;
  --background-secondary: #202225;
  --background-secondary-alt: #0c1018d1;
  --bases-cards-background: #2f3136;
  --bases-cards-cover-background: #36393f;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a;
  --bases-embed-border-color: #92a1a17a;
  --bases-table-border-color: #92a1a17a;
  --bases-table-cell-background-active: #2f3136;
  --bases-table-cell-background-disabled: #36393f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92A1A1;
  --bases-table-group-background: #36393f;
  --bases-table-header-background: #2f3136;
  --bases-table-summary-background: #2f3136;
  --blockquote-border: rgba(77, 60, 166, 0.6);
  --blockquote-border-color: #92A1A1;
  --canvas-background: #2f3136;
  --canvas-card-label-color: #a09b80;
  --caret-color: #bbc0c5;
  --checkbox-border-color: #a09b80;
  --checkbox-color: #92A1A1;
  --checkbox-marker-color: #2f3136;
  --code-background: #36393f;
  --code-border-color: #92a1a17a;
  --code-comment: #a09b80;
  --code-normal: #bbc0c5;
  --collapse-icon-color: #a09b80;
  --collapse-icon-color-collapsed: #ff9640ba;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #92a1a17a;
  --divider-color-hover: #92A1A1;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a;
  --embed-border-start: 2px solid #92A1A1;
  --file-header-background: #2f3136;
  --file-header-background-focused: #2f3136;
  --flair-color: #bbc0c5;
  --font-family-editor: Avenir;
  --font-family-preview: Avenir;
  --footnote-divider-color: #92a1a17a;
  --footnote-id-color-no-occurrences: #a09b80;
  --graph-node-focused: #ff9640ba;
  --graph-node-unresolved: #a09b80;
  --graph-text: #bbc0c5;
  --gray: var(--text-faint);
  --heading-formatting: #a09b80;
  --highlight: var(--text-highlight-bg);
  --hr-color: #92a1a17a;
  --icon-color-active: #ff9640ba;
  --icon-color-focused: #bbc0c5;
  --input-date-separator: #a09b80;
  --input-placeholder-color: #a09b80;
  --interactive-accent: #92A1A1;
  --interactive-accent-rgb: #fe8019;
  --interactive-before: #5e6565;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ff9640ba;
  --link-external-color: #ff9640ba;
  --link-unresolved-color: #ff9640ba;
  --list-marker-color: #a09b80;
  --list-marker-color-collapsed: #ff9640ba;
  --menu-background: #202225;
  --metadata-border-color: #92a1a17a;
  --metadata-divider-color: #92a1a17a;
  --metadata-input-text-color: #bbc0c5;
  --modal-background: #2f3136;
  --nav-collapse-icon-color: #a09b80;
  --nav-collapse-icon-color-collapsed: #a09b80;
  --nav-heading-color: #bbc0c5;
  --nav-heading-color-collapsed: #a09b80;
  --nav-heading-color-hover: #bbc0c5;
  --nav-item-color-active: #bbc0c5;
  --nav-item-color-highlighted: #ff9640ba;
  --nav-item-color-hover: #bbc0c5;
  --nav-item-color-selected: #bbc0c5;
  --nav-tag-color: #a09b80;
  --pdf-background: #2f3136;
  --pdf-page-background: #2f3136;
  --pdf-shadow: 0 0 0 1px #92a1a17a;
  --pdf-sidebar-background: #2f3136;
  --pdf-thumbnail-shadow: 0 0 0 1px #92a1a17a;
  --pill-border-color: #92a1a17a;
  --pill-color-hover: #bbc0c5;
  --pill-color-remove: #a09b80;
  --pill-color-remove-hover: #ff9640ba;
  --pre-code: #272524d9;
  --prompt-background: #2f3136;
  --ribbon-background: #202225;
  --ribbon-background-collapsed: #2f3136;
  --search-result-background: #2f3136;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bbc0c5;
  --setting-items-background: #36393f;
  --setting-items-border-color: #92a1a17a;
  --slider-track-background: #92a1a17a;
  --status-bar-background: #202225;
  --status-bar-border-color: #92a1a17a;
  --suggestion-background: #2f3136;
  --tab-background-active: #2f3136;
  --tab-container-background: #202225;
  --tab-outline-color: #92a1a17a;
  --tab-switcher-background: #202225;
  --tab-switcher-menubar-background: linear-gradient(to top, #202225, transparent);
  --tab-text-color: #a09b80;
  --tab-text-color-focused-active-current: #bbc0c5;
  --tab-text-color-focused-highlighted: #ff9640ba;
  --table-add-button-border-color: #92a1a17a;
  --table-border-color: #92a1a17a;
  --table-drag-handle-background-active: #92A1A1;
  --table-drag-handle-color: #a09b80;
  --table-header-border-color: #92a1a17a;
  --table-header-color: #bbc0c5;
  --table-selection-border-color: #92A1A1;
  --tag-color: #ff9640ba;
  --tag-color-hover: #ff9640ba;
  --tertiary: var(--text-accent);
  --text-a: #59a2c5;
  --text-a-hover: #b3a14b;
  --text-accent: #ff9640ba;
  --text-faint: #a09b80;
  --text-highlight-bg: rgba(255, 255, 0, 0.2);
  --text-link: #59a2c5;
  --text-mark: #d79921;
  --text-normal: #bbc0c5;
  --text-title-h1: #a79645;
  --text-title-h2: #939bd6;
  --text-title-h3: #ba6ea0;
  --text-title-h4: #b78b60;
  --text-title-h5: #859679;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #202225;
  --titlebar-background-focused: #0c1018d1;
  --titlebar-border-color: #92a1a17a;
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
  color: rgb(181, 199, 199);
  font-weight: 700;
  outline: rgb(181, 199, 199) none 0px;
  text-decoration: rgb(181, 199, 199);
  text-decoration-color: rgb(181, 199, 199);
}

body .page article p > em, em {
  color: rgb(184, 206, 206);
  outline: rgb(184, 206, 206) none 0px;
  text-decoration: rgb(184, 206, 206);
  text-decoration-color: rgb(184, 206, 206);
}

body .page article p > i, i {
  color: rgb(184, 206, 206);
  outline: rgb(184, 206, 206) none 0px;
  text-decoration: rgb(184, 206, 206);
  text-decoration-color: rgb(184, 206, 206);
}

body .page article p > strong, strong {
  color: rgb(181, 199, 199);
  font-weight: 700;
  outline: rgb(181, 199, 199) none 0px;
  text-decoration: rgb(181, 199, 199);
  text-decoration-color: rgb(181, 199, 199);
}

body .text-highlight {
  background-color: rgb(215, 153, 33);
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
  font-family: Avenir;
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

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
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
}

body blockquote {
  font-family: Avenir;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body table {
  color: rgb(187, 192, 197);
  font-family: Avenir;
  width: 180.766px;
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
  border-bottom-width: 4px;
}

body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `body code {
  background-color: rgba(39, 37, 36, 0.85);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(179, 179, 179);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body pre > code, pre:has(> code) {
  background-color: rgb(54, 57, 63);
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
  background-color: rgb(54, 57, 63);
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
  background-color: rgb(54, 57, 63);
}

body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(160, 155, 128);
  border-left-color: rgb(160, 155, 128);
  border-right-color: rgb(160, 155, 128);
  border-top-color: rgb(160, 155, 128);
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
  font-family: Avenir;
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  font-family: Avenir;
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

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body a.internal.tag-link::before {
  color: rgba(255, 150, 64, 0.73);
}

body h1 {
  color: rgb(167, 150, 69);
  font-family: Avenir;
}

body h2 {
  color: rgb(147, 155, 214);
  font-family: Avenir;
}

body h2.page-title, h2.page-title a {
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

body h3 {
  color: rgb(186, 110, 160);
  font-family: Avenir;
}

body h4 {
  color: rgb(183, 139, 96);
  font-family: Avenir;
}

body h5 {
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

body h6 {
  color: rgb(133, 150, 121);
  font-family: Avenir;
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
  font-family: Avenir;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Avenir;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Avenir;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
  font-family: Avenir;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(187, 192, 197);
  font-family: Avenir;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Avenir;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body li.section-li > .section .meta {
  font-family: Avenir;
}

body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `body .breadcrumb-element p {
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
  font-family: Avenir;
}

body .metadata-properties {
  font-family: Avenir;
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

body kbd {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body sub {
  color: rgb(187, 192, 197);
  font-size: 12.5px;
}

body summary {
  color: rgb(187, 192, 197);
}

body sup {
  color: rgb(187, 192, 197);
  font-size: 12.5px;
}`,
  },
  light: {},
};
