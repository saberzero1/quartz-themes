import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "soothe", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #92A1A17A;
  --background-primary: #2F3136;
  --background-primary-alt: #36393F;
  --background-secondary: #202225;
  --background-secondary-alt: #0C1018D1;
  --bases-cards-background: #2F3136;
  --bases-cards-cover-background: #36393F;
  --bases-cards-shadow: 0 0 0 1px #92A1A17A;
  --bases-embed-border-color: #92A1A17A;
  --bases-table-border-color: #92A1A17A;
  --bases-table-cell-background-active: #2F3136;
  --bases-table-cell-background-disabled: #36393F;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92a1a1;
  --bases-table-group-background: #36393F;
  --bases-table-header-background: #2F3136;
  --bases-table-summary-background: #2F3136;
  --blockquote-border-color: #4D3CA699;
  --bold-color: #B5C7C7;
  --canvas-background: #2F3136;
  --canvas-card-label-color: #A09B80;
  --caret-color: #BBC0C5;
  --checkbox-border-color: #A09B80;
  --checkbox-color: #92a1a1;
  --checkbox-marker-color: #2F3136;
  --code-background: #36393F;
  --code-border-color: #92A1A17A;
  --code-comment: #A09B80;
  --code-normal: #BBC0C5;
  --code-tag: #FF9640BA;
  --collapse-icon-color: #A09B80;
  --collapse-icon-color-collapsed: #FF9640BA;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #92A1A17A;
  --divider-color-hover: #92a1a1;
  --embed-block-shadow-hover: 0 0 0 1px #92A1A17A, inset 0 0 0 1px #92A1A17A;
  --embed-border-start: 2px solid #92a1a1;
  --file-header-background: #2F3136;
  --file-header-background-focused: #2F3136;
  --flair-color: #BBC0C5;
  --footnote-divider-color: #92A1A17A;
  --footnote-id-color-no-occurrences: #A09B80;
  --graph-node-focused: #FF9640BA;
  --graph-node-unresolved: #A09B80;
  --graph-text: #BBC0C5;
  --gray: var(--text-faint);
  --h1-color: #BA6EA0;
  --h2-color: #B78B60;
  --h3-color: #A79645;
  --h4-color: #859679;
  --h5-color: #59A2C5;
  --h6-color: #939BD6;
  --heading-formatting: #A09B80;
  --highlight: var(--text-highlight-bg);
  --hr-color: #92A1A17A;
  --icon-color-active: #FF9640BA;
  --icon-color-focused: #BBC0C5;
  --inline-title-color: #BA6EA0;
  --input-date-separator: #A09B80;
  --input-placeholder-color: #A09B80;
  --interactive-accent: #92a1a1;
  --italic-color: #B8CECE;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #59A2C5;
  --link-color-hover: #B3A14B;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #59A2C5;
  --link-external-color-hover: #B3A14B;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #FF9640BA;
  --list-marker-color: #A09B80;
  --list-marker-color-collapsed: #FF9640BA;
  --menu-background: #202225;
  --metadata-border-color: #92A1A17A;
  --metadata-divider-color: #92A1A17A;
  --metadata-input-text-color: #BBC0C5;
  --modal-background: #2F3136;
  --my-link-color: #59A2C5;
  --my-link-color-hover: #B3A14B;
  --nav-collapse-icon-color: #A09B80;
  --nav-collapse-icon-color-collapsed: #A09B80;
  --nav-heading-color: #BBC0C5;
  --nav-heading-color-collapsed: #A09B80;
  --nav-heading-color-hover: #BBC0C5;
  --nav-item-color-active: #BBC0C5;
  --nav-item-color-highlighted: #FF9640BA;
  --nav-item-color-hover: #BBC0C5;
  --nav-item-color-selected: #BBC0C5;
  --nav-tag-color: #A09B80;
  --pdf-background: #2F3136;
  --pdf-page-background: #2F3136;
  --pdf-shadow: 0 0 0 1px #92A1A17A;
  --pdf-sidebar-background: #2F3136;
  --pdf-thumbnail-shadow: 0 0 0 1px #92A1A17A;
  --pill-border-color: #92A1A17A;
  --pill-color-hover: #BBC0C5;
  --pill-color-remove: #A09B80;
  --pill-color-remove-hover: #FF9640BA;
  --prompt-background: #2F3136;
  --ribbon-background: #202225;
  --ribbon-background-collapsed: #2F3136;
  --search-result-background: #2F3136;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #BBC0C5;
  --setting-items-background: #36393F;
  --setting-items-border-color: #92A1A17A;
  --slider-track-background: #92A1A17A;
  --status-bar-background: #202225;
  --status-bar-border-color: #92A1A17A;
  --suggestion-background: #2F3136;
  --tab-background-active: #2F3136;
  --tab-container-background: #202225;
  --tab-outline-color: #92A1A17A;
  --tab-switcher-background: #202225;
  --tab-switcher-menubar-background: linear-gradient(to top, #202225, transparent);
  --tab-text-color: #A09B80;
  --tab-text-color-focused-active-current: #BBC0C5;
  --tab-text-color-focused-highlighted: #FF9640BA;
  --table-add-button-border-color: #92A1A17A;
  --table-border-color: #92A1A17A;
  --table-drag-handle-background-active: #92a1a1;
  --table-drag-handle-color: #A09B80;
  --table-header-border-color: #92A1A17A;
  --table-header-color: #BBC0C5;
  --table-selection-border-color: #92a1a1;
  --tag-color: #FF9640BA;
  --tag-color-hover: #FF9640BA;
  --tertiary: var(--text-accent-hover);
  --text-accent: #FF9640BA;
  --text-accent-hover: #B3A14B;
  --text-faint: #A09B80;
  --text-highlight-bg: #FFFF0033;
  --text-normal: #BBC0C5;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #202225;
  --titlebar-background-focused: #0C1018D1;
  --titlebar-border-color: #92A1A17A;
  --titlebar-text-color-focused: #BBC0C5;
  --vault-profile-color: #BBC0C5;
  --vault-profile-color-hover: #BBC0C5;
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
  --background-modifier-border: #92A1A17A;
  --background-primary: #E0E2E5;
  --background-primary-alt: #D6D9DC;
  --background-secondary: #F0F1F2;
  --background-secondary-alt: #FFFFFF;
  --bases-cards-background: #E0E2E5;
  --bases-cards-cover-background: #D6D9DC;
  --bases-cards-shadow: 0 0 0 1px #92A1A17A;
  --bases-embed-border-color: #92A1A17A;
  --bases-table-border-color: #92A1A17A;
  --bases-table-cell-background-active: #E0E2E5;
  --bases-table-cell-background-disabled: #D6D9DC;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92a1a1;
  --bases-table-group-background: #D6D9DC;
  --bases-table-header-background: #E0E2E5;
  --bases-table-summary-background: #E0E2E5;
  --blockquote-border-color: #4D3CA699;
  --blur-background: color-mix(in srgb, #E0E2E5 65%, transparent) linear-gradient(#E0E2E5, color-mix(in srgb, #E0E2E5 65%, transparent));
  --bold-color: #4A4C4F;
  --canvas-background: #E0E2E5;
  --canvas-card-label-color: #5F615E;
  --caret-color: #2F3136;
  --checkbox-border-color: #5F615E;
  --checkbox-color: #92a1a1;
  --checkbox-marker-color: #E0E2E5;
  --code-background: #D6D9DC;
  --code-border-color: #92A1A17A;
  --code-comment: #5F615E;
  --code-normal: #2F3136;
  --code-tag: #FF9640BA;
  --collapse-icon-color: #5F615E;
  --collapse-icon-color-collapsed: #FF9640BA;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #92A1A17A;
  --divider-color-hover: #92a1a1;
  --embed-block-shadow-hover: 0 0 0 1px #92A1A17A, inset 0 0 0 1px #92A1A17A;
  --embed-border-start: 2px solid #92a1a1;
  --file-header-background: #E0E2E5;
  --file-header-background-focused: #E0E2E5;
  --flair-color: #2F3136;
  --footnote-divider-color: #92A1A17A;
  --footnote-id-color-no-occurrences: #5F615E;
  --graph-node-focused: #FF9640BA;
  --graph-node-unresolved: #5F615E;
  --graph-text: #2F3136;
  --gray: var(--text-faint);
  --h1-color: #BA6EA0;
  --h2-color: #B78B60;
  --h3-color: #A79645;
  --h4-color: #859679;
  --h5-color: #59A2C5;
  --h6-color: #939BD6;
  --heading-formatting: #5F615E;
  --highlight: var(--text-highlight-bg);
  --hr-color: #92A1A17A;
  --icon-color-active: #FF9640BA;
  --icon-color-focused: #2F3136;
  --inline-title-color: #BA6EA0;
  --input-date-separator: #5F615E;
  --input-placeholder-color: #5F615E;
  --interactive-accent: #92a1a1;
  --italic-color: #474A4D;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #59A2C5;
  --link-color-hover: #B3A14B;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #59A2C5;
  --link-external-color-hover: #B3A14B;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #FF9640BA;
  --list-marker-color: #5F615E;
  --list-marker-color-collapsed: #FF9640BA;
  --menu-background: #F0F1F2;
  --metadata-border-color: #92A1A17A;
  --metadata-divider-color: #92A1A17A;
  --metadata-input-text-color: #2F3136;
  --modal-background: #E0E2E5;
  --my-link-color: #59A2C5;
  --my-link-color-hover: #B3A14B;
  --nav-collapse-icon-color: #5F615E;
  --nav-collapse-icon-color-collapsed: #5F615E;
  --nav-heading-color: #2F3136;
  --nav-heading-color-collapsed: #5F615E;
  --nav-heading-color-hover: #2F3136;
  --nav-item-color-active: #2F3136;
  --nav-item-color-highlighted: #FF9640BA;
  --nav-item-color-hover: #2F3136;
  --nav-item-color-selected: #2F3136;
  --nav-tag-color: #5F615E;
  --pdf-background: #E0E2E5;
  --pdf-page-background: #E0E2E5;
  --pdf-sidebar-background: #E0E2E5;
  --pill-border-color: #92A1A17A;
  --pill-color-hover: #2F3136;
  --pill-color-remove: #5F615E;
  --pill-color-remove-hover: #FF9640BA;
  --prompt-background: #E0E2E5;
  --raised-background: color-mix(in srgb, #E0E2E5 65%, transparent) linear-gradient(#E0E2E5, color-mix(in srgb, #E0E2E5 65%, transparent));
  --ribbon-background: #F0F1F2;
  --ribbon-background-collapsed: #E0E2E5;
  --search-result-background: #E0E2E5;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #2F3136;
  --setting-items-background: #D6D9DC;
  --setting-items-border-color: #92A1A17A;
  --slider-track-background: #92A1A17A;
  --status-bar-background: #F0F1F2;
  --status-bar-border-color: #92A1A17A;
  --suggestion-background: #E0E2E5;
  --tab-background-active: #E0E2E5;
  --tab-container-background: #F0F1F2;
  --tab-outline-color: #92A1A17A;
  --tab-switcher-background: #F0F1F2;
  --tab-switcher-menubar-background: linear-gradient(to top, #F0F1F2, transparent);
  --tab-text-color: #5F615E;
  --tab-text-color-focused-active-current: #2F3136;
  --tab-text-color-focused-highlighted: #FF9640BA;
  --table-add-button-border-color: #92A1A17A;
  --table-border-color: #92A1A17A;
  --table-drag-handle-background-active: #92a1a1;
  --table-drag-handle-color: #5F615E;
  --table-header-border-color: #92A1A17A;
  --table-header-color: #2F3136;
  --table-selection-border-color: #92a1a1;
  --tag-color: #FF9640BA;
  --tag-color-hover: #FF9640BA;
  --tertiary: var(--text-accent-hover);
  --text-accent: #FF9640BA;
  --text-accent-hover: #B3A14B;
  --text-faint: #5F615E;
  --text-highlight-bg: #00000033;
  --text-normal: #2F3136;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #F0F1F2;
  --titlebar-background-focused: #FFFFFF;
  --titlebar-border-color: #92A1A17A;
  --titlebar-text-color-focused: #2F3136;
  --vault-profile-color: #2F3136;
  --vault-profile-color-hover: #2F3136;
  --quartz-icon-color: currentColor;
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
