import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ursa", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #92a1a17a;
  --background-primary: #1E2022;
  --background-primary-alt: #1E2022;
  --background-secondary: #1E2022;
  --background-secondary-alt: #2E3236;
  --bases-cards-background: #1E2022;
  --bases-cards-cover-background: #1E2022;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a;
  --bases-embed-border-color: #92a1a17a;
  --bases-table-border-color: #92a1a17a;
  --bases-table-cell-background-active: #1E2022;
  --bases-table-cell-background-disabled: #1E2022;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92A1A1;
  --bases-table-group-background: #1E2022;
  --bases-table-header-background: #1E2022;
  --bases-table-summary-background: #1E2022;
  --blockquote-border: #4AA8FB;
  --blockquote-border-color: #92A1A1;
  --canvas-background: #1E2022;
  --canvas-card-label-color: #B2B2B2;
  --caret-color: #DDDDDD;
  --checkbox-border-color: #B2B2B2;
  --checkbox-color: #92A1A1;
  --checkbox-marker-color: #1E2022;
  --code-background: #1E2022;
  --code-border-color: #92a1a17a;
  --code-comment: #B2B2B2;
  --code-normal: #DDDDDD;
  --collapse-icon-color: #B2B2B2;
  --divider-color: #92a1a17a;
  --divider-color-hover: #92A1A1;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a;
  --embed-border-start: 2px solid #92A1A1;
  --file-header-background: #1E2022;
  --file-header-background-focused: #1E2022;
  --flair-color: #DDDDDD;
  --font-family-editor: Avenir, "Avenir Next";
  --font-family-preview: Avenir, "Avenir Next";
  --footnote-divider-color: #92a1a17a;
  --footnote-id-color-no-occurrences: #B2B2B2;
  --graph-node-unresolved: #B2B2B2;
  --graph-text: #DDDDDD;
  --heading-formatting: #B2B2B2;
  --hr-color: #92a1a17a;
  --icon-color-focused: #DDDDDD;
  --input-date-separator: #B2B2B2;
  --input-placeholder-color: #B2B2B2;
  --interactive-accent: #92A1A1;
  --interactive-accent-rgb: #6BCAFB;
  --interactive-before: #5e6565;
  --list-marker-color: #B2B2B2;
  --menu-background: #1E2022;
  --metadata-border-color: #92a1a17a;
  --metadata-divider-color: #92a1a17a;
  --metadata-input-text-color: #DDDDDD;
  --modal-background: #1E2022;
  --nav-collapse-icon-color: #B2B2B2;
  --nav-collapse-icon-color-collapsed: #B2B2B2;
  --nav-heading-color: #DDDDDD;
  --nav-heading-color-collapsed: #B2B2B2;
  --nav-heading-color-hover: #DDDDDD;
  --nav-item-color-active: #DDDDDD;
  --nav-item-color-hover: #DDDDDD;
  --nav-item-color-selected: #DDDDDD;
  --nav-tag-color: #B2B2B2;
  --pdf-background: #1E2022;
  --pdf-page-background: #1E2022;
  --pdf-shadow: 0 0 0 1px #92a1a17a;
  --pdf-sidebar-background: #1E2022;
  --pdf-thumbnail-shadow: 0 0 0 1px #92a1a17a;
  --pill-border-color: #92a1a17a;
  --pill-color-hover: #DDDDDD;
  --pill-color-remove: #B2B2B2;
  --pre-code: #252525;
  --prompt-background: #1E2022;
  --ribbon-background: #1E2022;
  --ribbon-background-collapsed: #1E2022;
  --search-result-background: #1E2022;
  --setting-group-heading-color: #DDDDDD;
  --setting-items-background: #1E2022;
  --setting-items-border-color: #92a1a17a;
  --slider-track-background: #92a1a17a;
  --status-bar-background: #1E2022;
  --status-bar-border-color: #92a1a17a;
  --suggestion-background: #1E2022;
  --tab-background-active: #1E2022;
  --tab-container-background: #1E2022;
  --tab-outline-color: #92a1a17a;
  --tab-switcher-background: #1E2022;
  --tab-switcher-menubar-background: linear-gradient(to top, #1E2022, transparent);
  --tab-text-color: #B2B2B2;
  --tab-text-color-focused-active-current: #DDDDDD;
  --table-add-button-border-color: #92a1a17a;
  --table-border-color: #92a1a17a;
  --table-drag-handle-background-active: #92A1A1;
  --table-drag-handle-color: #B2B2B2;
  --table-header-border-color: #92a1a17a;
  --table-header-color: #DDDDDD;
  --table-selection-border-color: #92A1A1;
  --tag-background: #A7B0B3;
  --text-a: #6BCAFB;
  --text-a-hover: #6BCAFB;
  --text-faint: #B2B2B2;
  --text-link: #B4B4B4;
  --text-mark: #263D92;
  --text-normal: #DDDDDD;
  --text-title-h1: #CBDBE5;
  --text-title-h2: #CBDBE5;
  --text-title-h3: #CBDBE5;
  --text-title-h4: #CBDBE5;
  --text-title-h5: #CBDBE5;
  --titlebar-background: #1E2022;
  --titlebar-background-focused: #2E3236;
  --titlebar-border-color: #92a1a17a;
  --titlebar-text-color-focused: #DDDDDD;
  --vault-profile-color: #DDDDDD;
  --vault-profile-color-hover: #DDDDDD;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 32, 34);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
}

body div#quartz-root {
  background-color: rgb(30, 32, 34);
  color: rgb(221, 221, 221);
}`,
    typography: `body .page article p > b, b {
  color: rgb(221, 221, 221);
  font-weight: 900;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
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
  color: rgb(221, 221, 221);
  font-weight: 900;
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .text-highlight {
  background-color: rgb(38, 61, 146);
  color: rgb(221, 221, 221);
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body del {
  color: rgb(221, 221, 221);
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: line-through rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body p {
  font-family: Avenir, "Avenir Next";
}`,
    links: `body a.external, footer a {
  color: rgb(107, 202, 251);
  font-family: Avenir, "Avenir Next";
  outline: rgb(107, 202, 251) none 0px;
  text-decoration: rgb(107, 202, 251);
  text-decoration-color: rgb(107, 202, 251);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(107, 202, 251);
  font-family: Avenir, "Avenir Next";
  outline: rgb(107, 202, 251) none 0px;
  text-decoration: rgb(107, 202, 251);
  text-decoration-color: rgb(107, 202, 251);
}

body a.internal.broken {
  color: rgb(107, 202, 251);
  font-family: Avenir, "Avenir Next";
  outline: rgb(107, 202, 251) none 0px;
  text-decoration: rgb(107, 202, 251);
  text-decoration-color: rgb(107, 202, 251);
}`,
    lists: `body dd {
  color: rgb(221, 221, 221);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(221, 221, 221);
}

body ol > li {
  color: rgb(221, 221, 221);
}

body ol.overflow {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body ul > li {
  color: rgb(221, 221, 221);
}

body ul.overflow {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(107, 202, 251);
  text-decoration: rgb(107, 202, 251);
}

body blockquote {
  font-family: Avenir, "Avenir Next";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body table {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  width: 180.766px;
}

body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
}

body th {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `body code {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
}

body pre > code, pre:has(> code) {
  background-color: rgb(30, 32, 34);
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
  background-color: rgb(30, 32, 34);
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
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body figcaption {
  color: rgb(221, 221, 221);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body video {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 32, 34);
}

body .footnotes {
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body .transclude {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(167, 176, 179);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(167, 176, 179);
  border-right-color: rgb(167, 176, 179);
  border-top-color: rgb(167, 176, 179);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='*'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='-'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='/'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='>'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='?'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='I'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='S'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='b'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='c'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='d'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='f'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='i'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='k'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='l'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='p'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='u'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body li.task-list-item[data-task='w'] {
  color: rgb(221, 221, 221);
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
}

body .search > .search-container > .search-space {
  background-color: rgb(30, 32, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
  outline: rgb(221, 221, 221) none 0px;
  text-decoration: rgb(221, 221, 221);
  text-decoration-color: rgb(221, 221, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(221, 221, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(221, 221, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(37, 37, 37);
  color: rgb(221, 221, 221);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 32, 34);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(37, 37, 37);
  color: rgb(221, 221, 221);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(167, 176, 179);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body h1 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

body h2 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

body h2.page-title, h2.page-title a {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
}

body h3 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

body h4 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

body h5 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

body h6 {
  color: rgb(203, 219, 229);
  font-family: Avenir, "Avenir Next";
}

body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(30, 32, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 32, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Avenir, "Avenir Next";
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Avenir, "Avenir Next";
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
  text-decoration: rgb(178, 178, 178);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}`,
    footer: `body footer {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(221, 221, 221);
  font-family: Avenir, "Avenir Next";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
  text-decoration: rgb(178, 178, 178);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body li.section-li > .section .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
  text-decoration: rgb(178, 178, 178);
}

body ul.section-ul {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(178, 178, 178);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
}

body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}

body .metadata-properties {
  font-family: Avenir, "Avenir Next";
}

body .navigation-progress {
  background-color: rgb(30, 32, 34);
}

body .page-header h2.page-title {
  color: rgb(221, 221, 221);
}

body abbr {
  color: rgb(221, 221, 221);
  text-decoration: underline dotted rgb(221, 221, 221);
}

body details {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body kbd {
  background-color: rgb(30, 32, 34);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body sub {
  color: rgb(221, 221, 221);
  font-size: 12.5px;
}

body summary {
  color: rgb(221, 221, 221);
}

body sup {
  color: rgb(221, 221, 221);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #92a1a17a;
  --background-primary: #FBFBFB;
  --background-primary-alt: #FBFBFB;
  --background-secondary: #FBFBFB;
  --background-secondary-alt: #2E3236;
  --bases-cards-background: #FBFBFB;
  --bases-cards-cover-background: #FBFBFB;
  --bases-cards-shadow: 0 0 0 1px #92a1a17a;
  --bases-embed-border-color: #92a1a17a;
  --bases-table-border-color: #92a1a17a;
  --bases-table-cell-background-active: #FBFBFB;
  --bases-table-cell-background-disabled: #FBFBFB;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92A1A1;
  --bases-table-group-background: #FBFBFB;
  --bases-table-header-background: #FBFBFB;
  --bases-table-summary-background: #FBFBFB;
  --blockquote-border: #D6555F;
  --blockquote-border-color: #92A1A1;
  --blur-background: color-mix(in srgb, #FBFBFB 65%, transparent) linear-gradient(#FBFBFB, color-mix(in srgb, #FBFBFB 65%, transparent));
  --canvas-background: #FBFBFB;
  --canvas-card-label-color: #B2B2B2;
  --caret-color: #333;
  --checkbox-border-color: #B2B2B2;
  --checkbox-color: #92A1A1;
  --checkbox-marker-color: #FBFBFB;
  --code-background: #FBFBFB;
  --code-border-color: #92a1a17a;
  --code-comment: #B2B2B2;
  --code-normal: #333;
  --collapse-icon-color: #B2B2B2;
  --divider-color: #92a1a17a;
  --divider-color-hover: #92A1A1;
  --embed-block-shadow-hover: 0 0 0 1px #92a1a17a, inset 0 0 0 1px #92a1a17a;
  --embed-border-start: 2px solid #92A1A1;
  --file-header-background: #FBFBFB;
  --file-header-background-focused: #FBFBFB;
  --flair-color: #333;
  --font-family-editor: Avenir, "Avenir Next";
  --font-family-preview: Avenir, "Avenir Next";
  --footnote-divider-color: #92a1a17a;
  --footnote-id-color-no-occurrences: #B2B2B2;
  --graph-node-unresolved: #B2B2B2;
  --graph-text: #333;
  --heading-formatting: #B2B2B2;
  --hr-color: #92a1a17a;
  --icon-color-focused: #333;
  --input-date-separator: #B2B2B2;
  --input-placeholder-color: #B2B2B2;
  --interactive-accent: #92A1A1;
  --interactive-accent-rgb: #db4d52;
  --interactive-before: #5e6565;
  --list-marker-color: #B2B2B2;
  --menu-background: #FBFBFB;
  --metadata-border-color: #92a1a17a;
  --metadata-divider-color: #92a1a17a;
  --metadata-input-text-color: #333;
  --modal-background: #FBFBFB;
  --nav-collapse-icon-color: #B2B2B2;
  --nav-collapse-icon-color-collapsed: #B2B2B2;
  --nav-heading-color: #333;
  --nav-heading-color-collapsed: #B2B2B2;
  --nav-heading-color-hover: #333;
  --nav-item-color-active: #333;
  --nav-item-color-hover: #333;
  --nav-item-color-selected: #333;
  --nav-tag-color: #B2B2B2;
  --pdf-background: #FBFBFB;
  --pdf-page-background: #FBFBFB;
  --pdf-sidebar-background: #FBFBFB;
  --pill-border-color: #92a1a17a;
  --pill-color-hover: #333;
  --pill-color-remove: #B2B2B2;
  --pre-code: #FFFFFF;
  --prompt-background: #FBFBFB;
  --raised-background: color-mix(in srgb, #FBFBFB 65%, transparent) linear-gradient(#FBFBFB, color-mix(in srgb, #FBFBFB 65%, transparent));
  --ribbon-background: #FBFBFB;
  --ribbon-background-collapsed: #FBFBFB;
  --search-result-background: #FBFBFB;
  --setting-group-heading-color: #333;
  --setting-items-background: #FBFBFB;
  --setting-items-border-color: #92a1a17a;
  --slider-track-background: #92a1a17a;
  --status-bar-background: #FBFBFB;
  --status-bar-border-color: #92a1a17a;
  --suggestion-background: #FBFBFB;
  --tab-background-active: #FBFBFB;
  --tab-container-background: #FBFBFB;
  --tab-outline-color: #92a1a17a;
  --tab-switcher-background: #FBFBFB;
  --tab-switcher-menubar-background: linear-gradient(to top, #FBFBFB, transparent);
  --tab-text-color: #B2B2B2;
  --tab-text-color-focused-active-current: #333;
  --table-add-button-border-color: #92a1a17a;
  --table-border-color: #92a1a17a;
  --table-drag-handle-background-active: #92A1A1;
  --table-drag-handle-color: #B2B2B2;
  --table-header-border-color: #92a1a17a;
  --table-header-color: #333;
  --table-selection-border-color: #92A1A1;
  --tag-background: #A7B0B3;
  --text-a: #db4d52;
  --text-a-hover: #db4d52;
  --text-faint: #B2B2B2;
  --text-link: #B4B4B4;
  --text-mark: #D3FFA4;
  --text-normal: #333;
  --text-title-h1: #333;
  --text-title-h2: #333;
  --text-title-h3: #333;
  --text-title-h4: #333;
  --text-title-h5: #333;
  --titlebar-background: #FBFBFB;
  --titlebar-background-focused: #2E3236;
  --titlebar-border-color: #92a1a17a;
  --titlebar-text-color-focused: #333;
  --vault-profile-color: #333;
  --vault-profile-color-hover: #333;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 251, 251);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
}

body div#quartz-root {
  background-color: rgb(251, 251, 251);
  color: rgb(51, 51, 51);
}`,
    typography: `body .page article p > b, b {
  color: rgb(51, 51, 51);
  font-weight: 900;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > em, em {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > i, i {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .page article p > strong, strong {
  color: rgb(51, 51, 51);
  font-weight: 900;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .text-highlight {
  background-color: rgb(211, 255, 164);
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body del {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: line-through rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body p {
  font-family: Avenir, "Avenir Next";
}`,
    links: `body a.external, footer a {
  color: rgb(219, 77, 82);
  font-family: Avenir, "Avenir Next";
  outline: rgb(219, 77, 82) none 0px;
  text-decoration: rgb(219, 77, 82);
  text-decoration-color: rgb(219, 77, 82);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 77, 82);
  font-family: Avenir, "Avenir Next";
  outline: rgb(219, 77, 82) none 0px;
  text-decoration: rgb(219, 77, 82);
  text-decoration-color: rgb(219, 77, 82);
}

body a.internal.broken {
  color: rgb(219, 77, 82);
  font-family: Avenir, "Avenir Next";
  outline: rgb(219, 77, 82) none 0px;
  text-decoration: rgb(219, 77, 82);
  text-decoration-color: rgb(219, 77, 82);
}`,
    lists: `body dd {
  color: rgb(51, 51, 51);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(51, 51, 51);
}

body ol > li {
  color: rgb(51, 51, 51);
}

body ol.overflow {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ul > li {
  color: rgb(51, 51, 51);
}

body ul.overflow {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(219, 77, 82);
  text-decoration: rgb(219, 77, 82);
}

body blockquote {
  font-family: Avenir, "Avenir Next";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body table {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  width: 180.766px;
}

body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
}

body th {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `body code {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
}

body pre > code, pre:has(> code) {
  background-color: rgb(251, 251, 251);
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
  background-color: rgb(251, 251, 251);
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
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figcaption {
  color: rgb(51, 51, 51);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body video {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    embeds: `body .file-embed {
  background-color: rgb(251, 251, 251);
}

body .footnotes {
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .transclude {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(167, 176, 179);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(167, 176, 179);
  border-right-color: rgb(167, 176, 179);
  border-top-color: rgb(167, 176, 179);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='*'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='-'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='/'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='>'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='?'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='I'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='S'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='b'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='c'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='d'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='f'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='i'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='k'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='l'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='p'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='u'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body li.task-list-item[data-task='w'] {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body .search > .search-container > .search-space {
  background-color: rgb(251, 251, 251);
}

body .search > .search-container > .search-space > * {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 251, 251);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(255, 255, 255);
  color: rgb(51, 51, 51);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(167, 176, 179);
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body h1 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body h2 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body h2.page-title, h2.page-title a {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body h3 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body h4 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body h5 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body h6 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(251, 251, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(251, 251, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Avenir, "Avenir Next";
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Avenir, "Avenir Next";
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
  text-decoration: rgb(178, 178, 178);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `body footer {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(51, 51, 51);
  font-family: Avenir, "Avenir Next";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
  text-decoration: rgb(178, 178, 178);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body li.section-li > .section .meta {
  color: rgb(178, 178, 178);
  font-family: Avenir, "Avenir Next";
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 178, 178);
  text-decoration: rgb(178, 178, 178);
}

body ul.section-ul {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(178, 178, 178);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  font-family: Avenir, "Avenir Next";
}

body .metadata-properties {
  font-family: Avenir, "Avenir Next";
}

body .navigation-progress {
  background-color: rgb(251, 251, 251);
}

body .page-header h2.page-title {
  color: rgb(51, 51, 51);
}

body abbr {
  color: rgb(51, 51, 51);
  text-decoration: underline dotted rgb(51, 51, 51);
}

body details {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body kbd {
  background-color: rgb(251, 251, 251);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body sub {
  color: rgb(51, 51, 51);
  font-size: 12.5px;
}

body summary {
  color: rgb(51, 51, 51);
}

body sup {
  color: rgb(51, 51, 51);
  font-size: 12.5px;
}`,
  },
};
