import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "vesper", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-error: #FF8080;
  --background-primary: #101010;
  --background-secondary: #101010;
  --bases-cards-background: #101010;
  --bases-group-heading-property-color: #A0A0A0;
  --bases-table-cell-background-active: #101010;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FFC799;
  --bases-table-header-background: #101010;
  --bases-table-header-color: #A0A0A0;
  --bases-table-summary-background: #101010;
  --blockquote-border-color: #FFC799;
  --canvas-background: #101010;
  --canvas-card-label-color: #707070;
  --caret-color: #FFFFFF;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #A0A0A0;
  --checkbox-color: #99FFE4;
  --checkbox-color-hover: #e6a974;
  --checkbox-marker-color: #101010;
  --checklist-done-color: #99FFE4;
  --code-comment: #707070;
  --code-normal: #FFFFFF;
  --code-punctuation: #A0A0A0;
  --collapse-icon-color: #707070;
  --collapse-icon-color-collapsed: #FFC799;
  --color-accent: #FFC799;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #FFC799;
  --embed-border-start: 2px solid #FFC799;
  --file-header-background: #101010;
  --file-header-background-focused: #101010;
  --flair-color: #FFFFFF;
  --footnote-id-color: #A0A0A0;
  --footnote-id-color-no-occurrences: #707070;
  --graph-node: #A0A0A0;
  --graph-node-focused: #FFC799;
  --graph-node-unresolved: #707070;
  --graph-text: #FFFFFF;
  --gray: var(--text-muted);
  --heading-formatting: #707070;
  --icon-color: #A0A0A0;
  --icon-color-active: #FFC799;
  --icon-color-focused: #FFFFFF;
  --icon-color-hover: #A0A0A0;
  --input-date-separator: #707070;
  --input-placeholder-color: #707070;
  --interactive-accent: #FFC799;
  --interactive-accent-hover: #e6a974;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #FFC799;
  --link-external-color: #FFC799;
  --link-external-color-hover: #99FFE4;
  --link-unresolved-color: #FFC799;
  --list-marker-color: #707070;
  --list-marker-color-collapsed: #FFC799;
  --list-marker-color-hover: #A0A0A0;
  --menu-background: #101010;
  --metadata-input-text-color: #FFFFFF;
  --metadata-label-text-color: #A0A0A0;
  --metadata-label-text-color-hover: #A0A0A0;
  --modal-background: #101010;
  --nav-collapse-icon-color: #707070;
  --nav-collapse-icon-color-collapsed: #707070;
  --nav-heading-color: #FFFFFF;
  --nav-heading-color-collapsed: #707070;
  --nav-heading-color-collapsed-hover: #A0A0A0;
  --nav-heading-color-hover: #FFFFFF;
  --nav-item-color: #A0A0A0;
  --nav-item-color-active: #FFFFFF;
  --nav-item-color-highlighted: #FFC799;
  --nav-item-color-hover: #FFFFFF;
  --nav-item-color-selected: #FFFFFF;
  --nav-tag-color: #707070;
  --nav-tag-color-active: #A0A0A0;
  --nav-tag-color-hover: #A0A0A0;
  --pdf-background: #101010;
  --pdf-page-background: #101010;
  --pdf-sidebar-background: #101010;
  --pill-color: #A0A0A0;
  --pill-color-hover: #FFFFFF;
  --pill-color-remove: #707070;
  --pill-color-remove-hover: #FFC799;
  --prompt-background: #101010;
  --ribbon-background: #101010;
  --ribbon-background-collapsed: #101010;
  --search-clear-button-color: #A0A0A0;
  --search-icon-color: #A0A0A0;
  --search-result-background: #101010;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #FFFFFF;
  --status-bar-background: #101010;
  --status-bar-text-color: #A0A0A0;
  --suggestion-background: #101010;
  --tab-background-active: #101010;
  --tab-container-background: #101010;
  --tab-switcher-background: #101010;
  --tab-switcher-menubar-background: linear-gradient(to top, #101010, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #FFC799;
  --tab-text-color: #707070;
  --tab-text-color-active: #A0A0A0;
  --tab-text-color-focused: #A0A0A0;
  --tab-text-color-focused-active: #A0A0A0;
  --tab-text-color-focused-active-current: #FFFFFF;
  --tab-text-color-focused-highlighted: #FFC799;
  --table-drag-handle-background-active: #FFC799;
  --table-drag-handle-color: #707070;
  --table-drag-handle-color-active: #000000;
  --table-header-color: #FFFFFF;
  --table-selection-border-color: #FFC799;
  --tag-color: #FFC799;
  --tag-color-hover: #FFC799;
  --tertiary: var(--interactive-accent-hover);
  --text-accent: #FFC799;
  --text-faint: #707070;
  --text-muted: #A0A0A0;
  --text-normal: #FFFFFF;
  --text-on-accent: #000000;
  --text-selection: #FFC79950;
  --titlebar-background: #101010;
  --titlebar-background-focused: #101010;
  --titlebar-text-color: #A0A0A0;
  --titlebar-text-color-focused: #FFFFFF;
  --vault-profile-color: #FFFFFF;
  --vault-profile-color-hover: #FFFFFF;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(16, 16, 16);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(16, 16, 16);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(16, 16, 16);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(16, 16, 16);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(16, 16, 16);
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
  color: rgb(160, 160, 160);
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 199, 153);
  outline: rgb(255, 199, 153) none 0px;
  text-decoration: underline rgb(255, 199, 153);
  text-decoration-color: rgb(255, 199, 153);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 199, 153);
  outline: rgb(255, 199, 153) none 0px;
  text-decoration: underline rgb(255, 199, 153);
  text-decoration-color: rgb(255, 199, 153);
}

body a.internal.broken {
  color: rgb(255, 199, 153);
  outline: rgb(255, 199, 153) none 0px;
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
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
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
  color: rgb(255, 255, 255);
}

body th {
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(255, 255, 255);
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
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 199, 153);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 199, 153);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 255, 228);
  text-decoration: line-through rgb(153, 255, 228);
  text-decoration-color: rgb(153, 255, 228);
}

body input[type=checkbox] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
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
    search: `body .search > .search-button {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(16, 16, 16);
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
  border-bottom-color: rgb(16, 16, 16);
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
  color: rgb(255, 199, 153);
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
  color: rgb(255, 255, 255);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(16, 16, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 16, 16);
}

body ::-webkit-scrollbar-corner {
  background: rgb(16, 16, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 16, 16);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(16, 16, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(16, 16, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 16, 16);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(16, 16, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 16, 16);
}

body ::-webkit-scrollbar-track {
  background: rgb(16, 16, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(16, 16, 16);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}`,
    footer: `body footer {
  background-color: rgb(16, 16, 16);
  color: rgb(160, 160, 160);
}

body footer ul li a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
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
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .darkmode svg {
  color: rgb(160, 160, 160);
  stroke: rgb(160, 160, 160);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  color: rgb(160, 160, 160);
}

body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .navigation-progress {
  background-color: rgb(16, 16, 16);
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
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body kbd {
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
  light: {
    base: `:root:root {
  --background-modifier-error: #FF0000;
  --background-primary: #FFFFFF;
  --background-secondary: #FAFAFA;
  --bases-cards-background: #FFFFFF;
  --bases-group-heading-property-color: #777777;
  --bases-table-cell-background-active: #FFFFFF;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FFB066;
  --bases-table-header-background: #FFFFFF;
  --bases-table-header-color: #777777;
  --bases-table-summary-background: #FFFFFF;
  --blockquote-border-color: #FFB066;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --canvas-background: #FFFFFF;
  --canvas-card-label-color: #AAAAAA;
  --caret-color: #1A1A1A;
  --checkbox-border-color: #AAAAAA;
  --checkbox-border-color-hover: #777777;
  --checkbox-color: #00D2B0;
  --checkbox-color-hover: #E0A568;
  --checkbox-marker-color: #FFFFFF;
  --checklist-done-color: #00D2B0;
  --code-comment: #AAAAAA;
  --code-normal: #1A1A1A;
  --code-punctuation: #777777;
  --collapse-icon-color: #AAAAAA;
  --collapse-icon-color-collapsed: #FFB066;
  --color-accent: #FFB066;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #FFB066;
  --embed-border-start: 2px solid #FFB066;
  --file-header-background: #FFFFFF;
  --file-header-background-focused: #FFFFFF;
  --flair-color: #1A1A1A;
  --footnote-id-color: #777777;
  --footnote-id-color-no-occurrences: #AAAAAA;
  --graph-node: #777777;
  --graph-node-focused: #FFB066;
  --graph-node-unresolved: #AAAAAA;
  --graph-text: #1A1A1A;
  --gray: var(--text-muted);
  --heading-formatting: #AAAAAA;
  --icon-color: #777777;
  --icon-color-active: #FFB066;
  --icon-color-focused: #1A1A1A;
  --icon-color-hover: #777777;
  --input-date-separator: #AAAAAA;
  --input-placeholder-color: #AAAAAA;
  --interactive-accent: #FFB066;
  --interactive-accent-hover: #E0A568;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #FFB066;
  --link-external-color: #FFB066;
  --link-external-color-hover: #00D2B0;
  --link-unresolved-color: #FFB066;
  --list-marker-color: #AAAAAA;
  --list-marker-color-collapsed: #FFB066;
  --list-marker-color-hover: #777777;
  --menu-background: #FAFAFA;
  --metadata-input-text-color: #1A1A1A;
  --metadata-label-text-color: #777777;
  --metadata-label-text-color-hover: #777777;
  --modal-background: #FFFFFF;
  --nav-collapse-icon-color: #AAAAAA;
  --nav-collapse-icon-color-collapsed: #AAAAAA;
  --nav-heading-color: #1A1A1A;
  --nav-heading-color-collapsed: #AAAAAA;
  --nav-heading-color-collapsed-hover: #777777;
  --nav-heading-color-hover: #1A1A1A;
  --nav-item-color: #777777;
  --nav-item-color-active: #1A1A1A;
  --nav-item-color-highlighted: #FFB066;
  --nav-item-color-hover: #1A1A1A;
  --nav-item-color-selected: #1A1A1A;
  --nav-tag-color: #AAAAAA;
  --nav-tag-color-active: #777777;
  --nav-tag-color-hover: #777777;
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --pill-color: #777777;
  --pill-color-hover: #1A1A1A;
  --pill-color-remove: #AAAAAA;
  --pill-color-remove-hover: #FFB066;
  --prompt-background: #FFFFFF;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --ribbon-background: #FAFAFA;
  --ribbon-background-collapsed: #FFFFFF;
  --search-clear-button-color: #777777;
  --search-icon-color: #777777;
  --search-result-background: #FFFFFF;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1A1A1A;
  --status-bar-background: #FAFAFA;
  --status-bar-text-color: #777777;
  --suggestion-background: #FFFFFF;
  --tab-background-active: #FFFFFF;
  --tab-container-background: #FAFAFA;
  --tab-switcher-background: #FAFAFA;
  --tab-switcher-menubar-background: linear-gradient(to top, #FAFAFA, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #FFB066;
  --tab-text-color: #AAAAAA;
  --tab-text-color-active: #777777;
  --tab-text-color-focused: #777777;
  --tab-text-color-focused-active: #777777;
  --tab-text-color-focused-active-current: #1A1A1A;
  --tab-text-color-focused-highlighted: #FFB066;
  --table-drag-handle-background-active: #FFB066;
  --table-drag-handle-color: #AAAAAA;
  --table-header-color: #1A1A1A;
  --table-selection-border-color: #FFB066;
  --tag-color: #FFB066;
  --tag-color-hover: #FFB066;
  --tertiary: var(--interactive-accent-hover);
  --text-accent: #FFB066;
  --text-faint: #AAAAAA;
  --text-muted: #777777;
  --text-normal: #1A1A1A;
  --text-selection: #FFB06650;
  --titlebar-background: #FFFFFF;
  --titlebar-background-focused: #FFFFFF;
  --titlebar-text-color: #777777;
  --titlebar-text-color-focused: #1A1A1A;
  --vault-profile-color: #1A1A1A;
  --vault-profile-color-hover: #1A1A1A;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(250, 250, 250);
  color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(250, 250, 250);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(250, 250, 250);
  color: rgb(26, 26, 26);
}

body div#quartz-root {
  color: rgb(26, 26, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > em, em {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > i, i {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > strong, strong {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .text-highlight {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body p {
  color: rgb(119, 119, 119);
  outline: rgb(119, 119, 119) none 0px;
  text-decoration: rgb(119, 119, 119);
  text-decoration-color: rgb(119, 119, 119);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 176, 102);
  outline: rgb(255, 176, 102) none 0px;
  text-decoration: underline rgb(255, 176, 102);
  text-decoration-color: rgb(255, 176, 102);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 176, 102);
  outline: rgb(255, 176, 102) none 0px;
  text-decoration: underline rgb(255, 176, 102);
  text-decoration-color: rgb(255, 176, 102);
}

body a.internal.broken {
  color: rgb(255, 176, 102);
  outline: rgb(255, 176, 102) none 0px;
}`,
    lists: `body dd {
  color: rgb(26, 26, 26);
}

body dt {
  color: rgb(26, 26, 26);
}

body ol > li {
  color: rgb(26, 26, 26);
}

body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ul > li {
  color: rgb(26, 26, 26);
}

body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body table {
  color: rgb(26, 26, 26);
}

body td {
  color: rgb(26, 26, 26);
}

body th {
  color: rgb(26, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(26, 26, 26);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body figcaption {
  color: rgb(26, 26, 26);
}

body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
}

body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(255, 176, 102);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(255, 176, 102);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 210, 176);
  text-decoration: line-through rgb(0, 210, 176);
  text-decoration-color: rgb(0, 210, 176);
}

body input[type=checkbox] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    search: `body .search > .search-button {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(250, 250, 250);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body a.internal.tag-link::before {
  color: rgb(255, 176, 102);
}

body h1 {
  color: rgb(26, 26, 26);
}

body h2 {
  color: rgb(26, 26, 26);
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 26, 26);
}

body h3 {
  color: rgb(26, 26, 26);
}

body h4 {
  color: rgb(26, 26, 26);
}

body h5 {
  color: rgb(26, 26, 26);
}

body h6 {
  color: rgb(26, 26, 26);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}`,
    footer: `body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(119, 119, 119);
}

body footer ul li a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 119, 119);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body li.section-li > .section .meta {
  color: rgb(119, 119, 119);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 119, 119);
  text-decoration: rgb(119, 119, 119);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body .darkmode svg {
  color: rgb(119, 119, 119);
  stroke: rgb(119, 119, 119);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body .breadcrumb-element p {
  color: rgb(170, 170, 170);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .metadata {
  color: rgb(119, 119, 119);
}

body .metadata-properties {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body .navigation-progress {
  background-color: rgb(250, 250, 250);
}

body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

body abbr {
  color: rgb(26, 26, 26);
  text-decoration: underline dotted rgb(26, 26, 26);
}

body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body input[type=text] {
  border-bottom-color: rgb(119, 119, 119);
  border-left-color: rgb(119, 119, 119);
  border-right-color: rgb(119, 119, 119);
  border-top-color: rgb(119, 119, 119);
  color: rgb(119, 119, 119);
}

body kbd {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body sub {
  color: rgb(26, 26, 26);
}

body summary {
  color: rgb(26, 26, 26);
}

body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
