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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 34, 37);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body .bases-table thead th {
  background-color: rgb(47, 49, 54);
  border-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(32, 34, 37);
  border-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgba(255, 150, 64, 0.73);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 34, 37);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 34, 37);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(187, 192, 197);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(181, 199, 199);
  outline: rgb(181, 199, 199) none 0px;
  text-decoration-color: rgb(181, 199, 199);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(184, 206, 206);
  outline: rgb(184, 206, 206) none 0px;
  text-decoration-color: rgb(184, 206, 206);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(184, 206, 206);
  outline: rgb(184, 206, 206) none 0px;
  text-decoration-color: rgb(184, 206, 206);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(181, 199, 199);
  outline: rgb(181, 199, 199) none 0px;
  text-decoration-color: rgb(181, 199, 199);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 255, 0, 0.2);
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body del {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(160, 155, 128);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(146, 161, 161);
  border-color: rgb(146, 161, 161);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgba(255, 150, 64, 0.73);
  outline: rgba(255, 150, 64, 0.73) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body dt {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(160, 155, 128);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body table {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body tbody tr:nth-child(odd) {
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body th {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html[saved-theme="dark"] body tr {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(186, 110, 160);
  border-left-color: rgb(186, 110, 160);
  border-right-color: rgb(186, 110, 160);
  border-top-color: rgb(186, 110, 160);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(54, 57, 63);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(160, 155, 128);
  border-left-color: rgb(160, 155, 128);
  border-right-color: rgb(160, 155, 128);
  border-top-color: rgb(160, 155, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 34, 37);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgba(255, 150, 64, 0.73);
}

html[saved-theme="dark"] body h1 {
  color: rgb(186, 110, 160);
}

html[saved-theme="dark"] body h2 {
  color: rgb(183, 139, 96);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(186, 110, 160);
}

html[saved-theme="dark"] body h3 {
  color: rgb(167, 150, 69);
}

html[saved-theme="dark"] body h4 {
  color: rgb(133, 150, 121);
}

html[saved-theme="dark"] body h5 {
  color: rgb(89, 162, 197);
}

html[saved-theme="dark"] body h6 {
  color: rgb(147, 155, 214);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(187, 192, 197);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(32, 34, 37);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(160, 155, 128);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(32, 34, 37);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body abbr {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body sub {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body summary {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body sup {
  color: rgb(187, 192, 197);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgba(255, 150, 64, 0.73);
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(240, 241, 242);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(224, 226, 229);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(214, 217, 220);
}

html[saved-theme="light"] body .bases-table thead th {
  background-color: rgb(224, 226, 229);
  border-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(224, 226, 229);
  border-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgba(255, 150, 64, 0.73);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 241, 242);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(240, 241, 242);
  border-left-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(224, 226, 229);
  color: rgb(47, 49, 54);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(74, 76, 79);
  outline: rgb(74, 76, 79) none 0px;
  text-decoration-color: rgb(74, 76, 79);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(71, 74, 77);
  outline: rgb(71, 74, 77) none 0px;
  text-decoration-color: rgb(71, 74, 77);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(71, 74, 77);
  outline: rgb(71, 74, 77) none 0px;
  text-decoration-color: rgb(71, 74, 77);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(74, 76, 79);
  outline: rgb(74, 76, 79) none 0px;
  text-decoration-color: rgb(74, 76, 79);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0.2);
  color: rgb(47, 49, 54);
  outline: rgb(47, 49, 54) none 0px;
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body del {
  color: rgb(47, 49, 54);
  outline: rgb(47, 49, 54) none 0px;
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(95, 97, 94);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(146, 161, 161);
  border-color: rgb(146, 161, 161);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  outline: rgb(89, 162, 197) none 0px;
  text-decoration-color: rgb(89, 162, 197);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgba(255, 150, 64, 0.73);
  outline: rgba(255, 150, 64, 0.73) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body dt {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ol > li {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ul > li {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(95, 97, 94);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body table {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(214, 217, 220);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body th {
  background-color: rgb(224, 226, 229);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html[saved-theme="light"] body tr {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body figcaption {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(186, 110, 160);
  border-left-color: rgb(186, 110, 160);
  border-right-color: rgb(186, 110, 160);
  border-top-color: rgb(186, 110, 160);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(214, 217, 220);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(146, 161, 161);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(95, 97, 94);
  border-left-color: rgb(95, 97, 94);
  border-right-color: rgb(95, 97, 94);
  border-top-color: rgb(95, 97, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(47, 49, 54);
  text-decoration-color: rgb(47, 49, 54);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(224, 226, 229);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(47, 49, 54);
  outline: rgb(47, 49, 54) none 0px;
  text-decoration-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 241, 242);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgba(255, 150, 64, 0.73);
}

html[saved-theme="light"] body h1 {
  color: rgb(186, 110, 160);
}

html[saved-theme="light"] body h2 {
  color: rgb(183, 139, 96);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(186, 110, 160);
}

html[saved-theme="light"] body h3 {
  color: rgb(167, 150, 69);
}

html[saved-theme="light"] body h4 {
  color: rgb(133, 150, 121);
}

html[saved-theme="light"] body h5 {
  color: rgb(89, 162, 197);
}

html[saved-theme="light"] body h6 {
  color: rgb(147, 155, 214);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(224, 226, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(224, 226, 229);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(47, 49, 54);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(240, 241, 242);
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(95, 97, 94);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.48);
  border-left-color: rgba(146, 161, 161, 0.48);
  border-right-color: rgba(146, 161, 161, 0.48);
  border-top-color: rgba(146, 161, 161, 0.48);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(240, 241, 242);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body abbr {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(214, 217, 220);
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(47, 49, 54);
  border-left-color: rgb(47, 49, 54);
  border-right-color: rgb(47, 49, 54);
  border-top-color: rgb(47, 49, 54);
}

html[saved-theme="light"] body sub {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body summary {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body sup {
  color: rgb(47, 49, 54);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgba(255, 150, 64, 0.73);
}`,
  },
};
