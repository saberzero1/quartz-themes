import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "soothe", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #92A1A17A !important;
  --background-primary: #2F3136 !important;
  --background-primary-alt: #36393F !important;
  --background-secondary: #202225 !important;
  --background-secondary-alt: #0C1018D1 !important;
  --bases-cards-background: #2F3136 !important;
  --bases-cards-cover-background: #36393F !important;
  --bases-cards-shadow: 0 0 0 1px #92A1A17A !important;
  --bases-embed-border-color: #92A1A17A !important;
  --bases-table-border-color: #92A1A17A !important;
  --bases-table-cell-background-active: #2F3136 !important;
  --bases-table-cell-background-disabled: #36393F !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92a1a1 !important;
  --bases-table-group-background: #36393F !important;
  --bases-table-header-background: #2F3136 !important;
  --bases-table-summary-background: #2F3136 !important;
  --blockquote-border-color: #4D3CA699 !important;
  --bold-color: #B5C7C7 !important;
  --canvas-background: #2F3136 !important;
  --canvas-card-label-color: #A09B80 !important;
  --caret-color: #BBC0C5 !important;
  --checkbox-border-color: #A09B80 !important;
  --checkbox-color: #92a1a1 !important;
  --checkbox-marker-color: #2F3136 !important;
  --code-background: #36393F !important;
  --code-border-color: #92A1A17A !important;
  --code-comment: #A09B80 !important;
  --code-normal: #BBC0C5 !important;
  --code-tag: #FF9640BA !important;
  --collapse-icon-color: #A09B80 !important;
  --collapse-icon-color-collapsed: #FF9640BA !important;
  --dark: #BBC0C5 !important;
  --darkgray: #BBC0C5 !important;
  --divider-color: #92A1A17A !important;
  --divider-color-hover: #92a1a1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #92A1A17A, inset 0 0 0 1px #92A1A17A !important;
  --embed-border-start: 2px solid #92a1a1 !important;
  --file-header-background: #2F3136 !important;
  --file-header-background-focused: #2F3136 !important;
  --flair-color: #BBC0C5 !important;
  --footnote-divider-color: #92A1A17A !important;
  --footnote-id-color-no-occurrences: #A09B80 !important;
  --graph-node-focused: #FF9640BA !important;
  --graph-node-unresolved: #A09B80 !important;
  --graph-text: #BBC0C5 !important;
  --gray: #A09B80 !important;
  --h1-color: #BA6EA0 !important;
  --h2-color: #B78B60 !important;
  --h3-color: #A79645 !important;
  --h4-color: #859679 !important;
  --h5-color: #59A2C5 !important;
  --h6-color: #939BD6 !important;
  --heading-formatting: #A09B80 !important;
  --highlight: #FFFF0033 !important;
  --hr-color: #92A1A17A !important;
  --icon-color-active: #FF9640BA !important;
  --icon-color-focused: #BBC0C5 !important;
  --inline-title-color: #BA6EA0 !important;
  --input-date-separator: #A09B80 !important;
  --input-placeholder-color: #A09B80 !important;
  --interactive-accent: #92a1a1 !important;
  --italic-color: #B8CECE !important;
  --light: #2F3136 !important;
  --lightgray: #202225 !important;
  --link-color: #59A2C5 !important;
  --link-color-hover: #B3A14B !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #59A2C5 !important;
  --link-external-color-hover: #B3A14B !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #FF9640BA !important;
  --list-marker-color: #A09B80 !important;
  --list-marker-color-collapsed: #FF9640BA !important;
  --menu-background: #202225 !important;
  --metadata-border-color: #92A1A17A !important;
  --metadata-divider-color: #92A1A17A !important;
  --metadata-input-text-color: #BBC0C5 !important;
  --modal-background: #2F3136 !important;
  --my-link-color: #59A2C5 !important;
  --my-link-color-hover: #B3A14B !important;
  --nav-collapse-icon-color: #A09B80 !important;
  --nav-collapse-icon-color-collapsed: #A09B80 !important;
  --nav-heading-color: #BBC0C5 !important;
  --nav-heading-color-collapsed: #A09B80 !important;
  --nav-heading-color-hover: #BBC0C5 !important;
  --nav-item-color-active: #BBC0C5 !important;
  --nav-item-color-highlighted: #FF9640BA !important;
  --nav-item-color-hover: #BBC0C5 !important;
  --nav-item-color-selected: #BBC0C5 !important;
  --nav-tag-color: #A09B80 !important;
  --pdf-background: #2F3136 !important;
  --pdf-page-background: #2F3136 !important;
  --pdf-shadow: 0 0 0 1px #92A1A17A !important;
  --pdf-sidebar-background: #2F3136 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #92A1A17A !important;
  --pill-border-color: #92A1A17A !important;
  --pill-color-hover: #BBC0C5 !important;
  --pill-color-remove: #A09B80 !important;
  --pill-color-remove-hover: #FF9640BA !important;
  --prompt-background: #2F3136 !important;
  --ribbon-background: #202225 !important;
  --ribbon-background-collapsed: #2F3136 !important;
  --search-result-background: #2F3136 !important;
  --secondary: #FF9640BA !important;
  --setting-group-heading-color: #BBC0C5 !important;
  --setting-items-background: #36393F !important;
  --setting-items-border-color: #92A1A17A !important;
  --slider-track-background: #92A1A17A !important;
  --status-bar-background: #202225 !important;
  --status-bar-border-color: #92A1A17A !important;
  --suggestion-background: #2F3136 !important;
  --tab-background-active: #2F3136 !important;
  --tab-container-background: #202225 !important;
  --tab-outline-color: #92A1A17A !important;
  --tab-switcher-background: #202225 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #202225, transparent) !important;
  --tab-text-color: #A09B80 !important;
  --tab-text-color-focused-active-current: #BBC0C5 !important;
  --tab-text-color-focused-highlighted: #FF9640BA !important;
  --table-add-button-border-color: #92A1A17A !important;
  --table-border-color: #92A1A17A !important;
  --table-drag-handle-background-active: #92a1a1 !important;
  --table-drag-handle-color: #A09B80 !important;
  --table-header-border-color: #92A1A17A !important;
  --table-header-color: #BBC0C5 !important;
  --table-selection-border-color: #92a1a1 !important;
  --tag-color: #FF9640BA !important;
  --tag-color-hover: #FF9640BA !important;
  --tertiary: #B3A14B !important;
  --text-accent: #FF9640BA !important;
  --text-accent-hover: #B3A14B !important;
  --text-faint: #A09B80 !important;
  --text-highlight-bg: #FFFF0033 !important;
  --text-normal: #BBC0C5 !important;
  --textHighlight: #FFFF0033 !important;
  --titlebar-background: #202225 !important;
  --titlebar-background-focused: #0C1018D1 !important;
  --titlebar-border-color: #92A1A17A !important;
  --titlebar-text-color-focused: #BBC0C5 !important;
  --vault-profile-color: #BBC0C5 !important;
  --vault-profile-color-hover: #BBC0C5 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  outline: rgb(181, 199, 199) none 0px;
  text-decoration: rgb(181, 199, 199);
  text-decoration-color: rgb(181, 199, 199);
}

body .text-highlight {
  background-color: rgba(255, 255, 0, 0.2);
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
}`,
    links: `body a.external, footer a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal.broken {
  color: rgba(255, 150, 64, 0.73);
  outline: rgba(255, 150, 64, 0.73) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
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
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
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

body tbody tr:nth-child(odd) {
  background-color: rgb(54, 57, 63);
}

body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body th {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `body code {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
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
}

body pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    images: `body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body figcaption {
  color: rgb(187, 192, 197);
}

body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
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
}

body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
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
  color: rgb(186, 110, 160);
}

body h2 {
  color: rgb(183, 139, 96);
}

body h2.page-title, h2.page-title a {
  color: rgb(186, 110, 160);
}

body h3 {
  color: rgb(167, 150, 69);
}

body h4 {
  color: rgb(133, 150, 121);
}

body h5 {
  color: rgb(89, 162, 197);
}

body h6 {
  color: rgb(147, 155, 214);
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
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
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
  light: {
    base: `:root:root {
  --background-modifier-border: #92A1A17A !important;
  --background-primary: #E0E2E5 !important;
  --background-primary-alt: #D6D9DC !important;
  --background-secondary: #F0F1F2 !important;
  --background-secondary-alt: #FFFFFF !important;
  --bases-cards-background: #E0E2E5 !important;
  --bases-cards-cover-background: #D6D9DC !important;
  --bases-cards-shadow: 0 0 0 1px #92A1A17A !important;
  --bases-embed-border-color: #92A1A17A !important;
  --bases-table-border-color: #92A1A17A !important;
  --bases-table-cell-background-active: #E0E2E5 !important;
  --bases-table-cell-background-disabled: #D6D9DC !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92a1a1 !important;
  --bases-table-group-background: #D6D9DC !important;
  --bases-table-header-background: #E0E2E5 !important;
  --bases-table-summary-background: #E0E2E5 !important;
  --blockquote-border-color: #4D3CA699 !important;
  --blur-background: color-mix(in srgb, #E0E2E5 65%, transparent) linear-gradient(#E0E2E5, color-mix(in srgb, #E0E2E5 65%, transparent)) !important;
  --bold-color: #4A4C4F !important;
  --canvas-background: #E0E2E5 !important;
  --canvas-card-label-color: #5F615E !important;
  --caret-color: #2F3136 !important;
  --checkbox-border-color: #5F615E !important;
  --checkbox-color: #92a1a1 !important;
  --checkbox-marker-color: #E0E2E5 !important;
  --code-background: #D6D9DC !important;
  --code-border-color: #92A1A17A !important;
  --code-comment: #5F615E !important;
  --code-normal: #2F3136 !important;
  --code-tag: #FF9640BA !important;
  --collapse-icon-color: #5F615E !important;
  --collapse-icon-color-collapsed: #FF9640BA !important;
  --dark: #2F3136 !important;
  --darkgray: #2F3136 !important;
  --divider-color: #92A1A17A !important;
  --divider-color-hover: #92a1a1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #92A1A17A, inset 0 0 0 1px #92A1A17A !important;
  --embed-border-start: 2px solid #92a1a1 !important;
  --file-header-background: #E0E2E5 !important;
  --file-header-background-focused: #E0E2E5 !important;
  --flair-color: #2F3136 !important;
  --footnote-divider-color: #92A1A17A !important;
  --footnote-id-color-no-occurrences: #5F615E !important;
  --graph-node-focused: #FF9640BA !important;
  --graph-node-unresolved: #5F615E !important;
  --graph-text: #2F3136 !important;
  --gray: #5F615E !important;
  --h1-color: #BA6EA0 !important;
  --h2-color: #B78B60 !important;
  --h3-color: #A79645 !important;
  --h4-color: #859679 !important;
  --h5-color: #59A2C5 !important;
  --h6-color: #939BD6 !important;
  --heading-formatting: #5F615E !important;
  --highlight: #00000033 !important;
  --hr-color: #92A1A17A !important;
  --icon-color-active: #FF9640BA !important;
  --icon-color-focused: #2F3136 !important;
  --inline-title-color: #BA6EA0 !important;
  --input-date-separator: #5F615E !important;
  --input-placeholder-color: #5F615E !important;
  --interactive-accent: #92a1a1 !important;
  --italic-color: #474A4D !important;
  --light: #E0E2E5 !important;
  --lightgray: #F0F1F2 !important;
  --link-color: #59A2C5 !important;
  --link-color-hover: #B3A14B !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #59A2C5 !important;
  --link-external-color-hover: #B3A14B !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #FF9640BA !important;
  --list-marker-color: #5F615E !important;
  --list-marker-color-collapsed: #FF9640BA !important;
  --menu-background: #F0F1F2 !important;
  --metadata-border-color: #92A1A17A !important;
  --metadata-divider-color: #92A1A17A !important;
  --metadata-input-text-color: #2F3136 !important;
  --modal-background: #E0E2E5 !important;
  --my-link-color: #59A2C5 !important;
  --my-link-color-hover: #B3A14B !important;
  --nav-collapse-icon-color: #5F615E !important;
  --nav-collapse-icon-color-collapsed: #5F615E !important;
  --nav-heading-color: #2F3136 !important;
  --nav-heading-color-collapsed: #5F615E !important;
  --nav-heading-color-hover: #2F3136 !important;
  --nav-item-color-active: #2F3136 !important;
  --nav-item-color-highlighted: #FF9640BA !important;
  --nav-item-color-hover: #2F3136 !important;
  --nav-item-color-selected: #2F3136 !important;
  --nav-tag-color: #5F615E !important;
  --pdf-background: #E0E2E5 !important;
  --pdf-page-background: #E0E2E5 !important;
  --pdf-sidebar-background: #E0E2E5 !important;
  --pill-border-color: #92A1A17A !important;
  --pill-color-hover: #2F3136 !important;
  --pill-color-remove: #5F615E !important;
  --pill-color-remove-hover: #FF9640BA !important;
  --prompt-background: #E0E2E5 !important;
  --raised-background: color-mix(in srgb, #E0E2E5 65%, transparent) linear-gradient(#E0E2E5, color-mix(in srgb, #E0E2E5 65%, transparent)) !important;
  --ribbon-background: #F0F1F2 !important;
  --ribbon-background-collapsed: #E0E2E5 !important;
  --search-result-background: #E0E2E5 !important;
  --secondary: #FF9640BA !important;
  --setting-group-heading-color: #2F3136 !important;
  --setting-items-background: #D6D9DC !important;
  --setting-items-border-color: #92A1A17A !important;
  --slider-track-background: #92A1A17A !important;
  --status-bar-background: #F0F1F2 !important;
  --status-bar-border-color: #92A1A17A !important;
  --suggestion-background: #E0E2E5 !important;
  --tab-background-active: #E0E2E5 !important;
  --tab-container-background: #F0F1F2 !important;
  --tab-outline-color: #92A1A17A !important;
  --tab-switcher-background: #F0F1F2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0F1F2, transparent) !important;
  --tab-text-color: #5F615E !important;
  --tab-text-color-focused-active-current: #2F3136 !important;
  --tab-text-color-focused-highlighted: #FF9640BA !important;
  --table-add-button-border-color: #92A1A17A !important;
  --table-border-color: #92A1A17A !important;
  --table-drag-handle-background-active: #92a1a1 !important;
  --table-drag-handle-color: #5F615E !important;
  --table-header-border-color: #92A1A17A !important;
  --table-header-color: #2F3136 !important;
  --table-selection-border-color: #92a1a1 !important;
  --tag-color: #FF9640BA !important;
  --tag-color-hover: #FF9640BA !important;
  --tertiary: #B3A14B !important;
  --text-accent: #FF9640BA !important;
  --text-accent-hover: #B3A14B !important;
  --text-faint: #5F615E !important;
  --text-highlight-bg: #00000033 !important;
  --text-normal: #2F3136 !important;
  --textHighlight: #00000033 !important;
  --titlebar-background: #F0F1F2 !important;
  --titlebar-background-focused: #FFFFFF !important;
  --titlebar-border-color: #92A1A17A !important;
  --titlebar-text-color-focused: #2F3136 !important;
  --vault-profile-color: #2F3136 !important;
  --vault-profile-color-hover: #2F3136 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 241, 242);
  color: rgb(47, 49, 54);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(224, 226, 229);
  color: rgb(47, 49, 54);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 241, 242);
  color: rgb(47, 49, 54);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 241, 242);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

body div#quartz-root {
  background-color: rgb(224, 226, 229);
  color: rgb(47, 49, 54);
}`,
    typography: `body .page article p > b, b {
  color: rgb(74, 76, 79);
  outline: rgb(74, 76, 79) none 0px;
  text-decoration: rgb(74, 76, 79);
  text-decoration-color: rgb(74, 76, 79);
}

body .page article p > em, em {
  color: rgb(71, 74, 77);
  outline: rgb(71, 74, 77) none 0px;
  text-decoration: rgb(71, 74, 77);
  text-decoration-color: rgb(71, 74, 77);
}

body .page article p > i, i {
  color: rgb(71, 74, 77);
  outline: rgb(71, 74, 77) none 0px;
  text-decoration: rgb(71, 74, 77);
  text-decoration-color: rgb(71, 74, 77);
}

body .page article p > strong, strong {
  color: rgb(74, 76, 79);
  outline: rgb(74, 76, 79) none 0px;
  text-decoration: rgb(74, 76, 79);
  text-decoration-color: rgb(74, 76, 79);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(47, 49, 54);
  outline: rgb(47, 49, 54) none 0px;
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body del {
  color: rgb(47, 49, 54);
  outline: rgb(47, 49, 54) none 0px;
  text-decoration: line-through rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}`,
    links: `body a.external, footer a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal.broken {
  color: rgba(255, 150, 64, 0.73);
  outline: rgba(255, 150, 64, 0.73) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(47, 49, 54);
}

body dt {
  color: rgb(47, 49, 54);
}

body ol > li {
  color: rgb(47, 49, 54);
}

body ol.overflow {
  background-color: rgb(224, 226, 229);
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body ul > li {
  color: rgb(47, 49, 54);
}

body ul.overflow {
  background-color: rgb(224, 226, 229);
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(95, 97, 94);
  text-decoration: rgb(95, 97, 94);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body table {
  color: rgb(47, 49, 54);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(214, 217, 220);
}

body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

body th {
  background-color: rgb(224, 226, 229);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `body code {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

body pre > code, pre:has(> code) {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body pre:has(> code) {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    images: `body audio {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body figcaption {
  color: rgb(47, 49, 54);
}

body figure {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body img {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body video {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    embeds: `body .file-embed {
  background-color: rgb(214, 217, 220);
}

body .footnotes {
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

body .transclude {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body .transclude-inner {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(95, 97, 94);
  border-left-color: rgb(95, 97, 94);
  border-right-color: rgb(95, 97, 94);
  border-top-color: rgb(95, 97, 94);
}

body li.task-list-item[data-task='!'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='*'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='-'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='/'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='>'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='?'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='I'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='S'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='b'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='c'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='d'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='f'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='i'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='k'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='l'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='p'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='u'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body li.task-list-item[data-task='w'] {
  color: rgb(47, 49, 54);
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space {
  background-color: rgb(224, 226, 229);
}

body .search > .search-container > .search-space > * {
  color: rgb(47, 49, 54);
  outline: rgb(47, 49, 54) none 0px;
  text-decoration: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(47, 49, 54);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 241, 242);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(47, 49, 54);
}

body a.internal.tag-link::before {
  color: rgba(255, 150, 64, 0.73);
}

body h1 {
  color: rgb(186, 110, 160);
}

body h2 {
  color: rgb(183, 139, 96);
}

body h2.page-title, h2.page-title a {
  color: rgb(186, 110, 160);
}

body h3 {
  color: rgb(167, 150, 69);
}

body h4 {
  color: rgb(133, 150, 121);
}

body h5 {
  color: rgb(89, 162, 197);
}

body h6 {
  color: rgb(147, 155, 214);
}

body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

body ::-webkit-scrollbar-corner {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

body ::-webkit-scrollbar-track {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}`,
    footer: `body footer {
  background-color: rgb(240, 241, 242);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(47, 49, 54);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body ul.section-ul {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(95, 97, 94);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

body .navigation-progress {
  background-color: rgb(240, 241, 242);
}

body .page-header h2.page-title {
  color: rgb(47, 49, 54);
}

body abbr {
  color: rgb(47, 49, 54);
  text-decoration: underline dotted rgb(47, 49, 54);
}

body details {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body kbd {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

body progress {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

body sub {
  color: rgb(47, 49, 54);
}

body summary {
  color: rgb(47, 49, 54);
}

body sup {
  color: rgb(47, 49, 54);
}`,
  },
};
