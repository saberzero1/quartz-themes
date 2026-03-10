import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sunbather",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #050505 !important;
  --background-secondary: #050505 !important;
  --background-secondary-alt: #050505 !important;
  --bases-cards-background: #050505 !important;
  --bases-table-cell-background-active: #050505 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81 !important;
  --bases-table-header-background: #050505 !important;
  --bases-table-summary-background: #050505 !important;
  --blockquote-border-color: #da5c81 !important;
  --canvas-background: #050505 !important;
  --canvas-card-label-color: #767676 !important;
  --caret-color: #d6d4d4 !important;
  --checkbox-border-color: #767676 !important;
  --checkbox-color: #da5c81 !important;
  --checkbox-marker-color: #050505 !important;
  --code-background: #131313 !important;
  --code-comment: #767676 !important;
  --code-constant: #d75f87 !important;
  --code-function: #d6d4d4 !important;
  --code-keyword: #767676 !important;
  --code-normal: #d6d4d4 !important;
  --code-operator: #d6d4d4 !important;
  --code-string: #da5c81 !important;
  --code-tag: #20BBFC !important;
  --code-url: #20BBFC !important;
  --code-value: #d6d4d4 !important;
  --collapse-icon-color: #767676 !important;
  --collapse-icon-color-collapsed: #d75f87 !important;
  --color-accent: #d75f87 !important;
  --dark: #d6d4d4 !important;
  --darkgray: #d6d4d4 !important;
  --divider-color-hover: #da5c81 !important;
  --embed-border-start: 2px solid #da5c81 !important;
  --file-header-background: #050505 !important;
  --file-header-background-focused: #050505 !important;
  --flair-color: #d6d4d4 !important;
  --footnote-id-color-no-occurrences: #767676 !important;
  --graph-node-focused: #d75f87 !important;
  --graph-node-unresolved: #767676 !important;
  --graph-text: #d6d4d4 !important;
  --gray: #767676 !important;
  --heading-formatting: #767676 !important;
  --icon-color-active: #d75f87 !important;
  --icon-color-focused: #d6d4d4 !important;
  --input-date-separator: #767676 !important;
  --input-placeholder-color: #767676 !important;
  --interactive-accent: #da5c81 !important;
  --interactive-before: #4E4E4E !important;
  --light: #050505 !important;
  --lightgray: #050505 !important;
  --link-color: #d75f87 !important;
  --link-external-color: #d75f87 !important;
  --link-unresolved-color: #d75f87 !important;
  --list-marker-color: #767676 !important;
  --list-marker-color-collapsed: #d75f87 !important;
  --menu-background: #050505 !important;
  --metadata-input-text-color: #d6d4d4 !important;
  --modal-background: #050505 !important;
  --nav-collapse-icon-color: #767676 !important;
  --nav-collapse-icon-color-collapsed: #767676 !important;
  --nav-heading-color: #d6d4d4 !important;
  --nav-heading-color-collapsed: #767676 !important;
  --nav-heading-color-hover: #d6d4d4 !important;
  --nav-item-background-active: #e25f86 !important;
  --nav-item-color-active: #262626 !important;
  --nav-item-color-highlighted: #d75f87 !important;
  --nav-item-color-hover: #d6d4d4 !important;
  --nav-item-color-selected: #d6d4d4 !important;
  --nav-tag-color: #767676 !important;
  --pdf-background: #050505 !important;
  --pdf-page-background: #050505 !important;
  --pdf-sidebar-background: #050505 !important;
  --pill-color-hover: #d6d4d4 !important;
  --pill-color-remove: #767676 !important;
  --pill-color-remove-hover: #d75f87 !important;
  --prompt-background: #050505 !important;
  --ribbon-background: #050505 !important;
  --ribbon-background-collapsed: #050505 !important;
  --scrollbar-bg: #0c0c0c !important;
  --search-result-background: #050505 !important;
  --secondary: #d75f87 !important;
  --setting-group-heading-color: #d6d4d4 !important;
  --status-bar-background: #050505 !important;
  --suggestion-background: #050505 !important;
  --tab-background-active: #050505 !important;
  --tab-container-background: #050505 !important;
  --tab-switcher-background: #050505 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #050505, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87 !important;
  --tab-text-color: #767676 !important;
  --tab-text-color-focused-active-current: #d6d4d4 !important;
  --tab-text-color-focused-highlighted: #d75f87 !important;
  --table-drag-handle-background-active: #da5c81 !important;
  --table-drag-handle-color: #767676 !important;
  --table-header-color: #d6d4d4 !important;
  --table-selection-border-color: #da5c81 !important;
  --tag-color: #d75f87 !important;
  --tag-color-hover: #d75f87 !important;
  --tertiary: #d75f87 !important;
  --text-accent: #d75f87 !important;
  --text-faint: #767676 !important;
  --text-normal: #d6d4d4 !important;
  --text-selection: #da5c8133 !important;
  --titlebar-background: #050505 !important;
  --titlebar-background-focused: #050505 !important;
  --titlebar-text-color-focused: #d6d4d4 !important;
  --vault-profile-color: #d6d4d4 !important;
  --vault-profile-color-hover: #d6d4d4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

body div#quartz-root {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}`,
    typography: `body .page article p > b, b {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body .page article p > em, em {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body .page article p > i, i {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body .page article p > strong, strong {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body .text-highlight {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body del {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: line-through rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body p {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    links: `body a.external, footer a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

body a.internal.broken {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
}`,
    lists: `body dd {
  color: rgb(214, 212, 212);
}

body dt {
  color: rgb(214, 212, 212);
}

body ol > li {
  color: rgb(214, 212, 212);
}

body ol.overflow {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body ul > li {
  color: rgb(214, 212, 212);
}

body ul.overflow {
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(118, 118, 118);
  text-decoration: rgb(118, 118, 118);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body table {
  color: rgb(214, 212, 212);
}

body td {
  color: rgb(214, 212, 212);
}

body th {
  color: rgb(214, 212, 212);
}`,
    code: `body code {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 19, 19);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 19, 19);
  color: rgb(214, 212, 212);
}

body pre > code > [data-line] {
  border-left-color: rgb(214, 212, 212);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(214, 212, 212);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(19, 19, 19);
}

body pre:has(> code) {
  background-color: rgb(19, 19, 19);
}`,
    images: `body audio {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body figcaption {
  color: rgb(214, 212, 212);
}

body figure {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body img {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body video {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

body .transclude {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body .transclude-inner {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 118);
  border-left-color: rgb(118, 118, 118);
  border-right-color: rgb(118, 118, 118);
  border-top-color: rgb(118, 118, 118);
}

body li.task-list-item[data-task='!'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='*'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='-'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='/'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='>'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='?'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='I'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='b'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='c'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='d'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='i'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='k'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='l'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='p'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='u'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body li.task-list-item[data-task='w'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}`,
    search: `body .search > .search-button {
  color: rgb(214, 212, 212);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .search > .search-container > .search-space {
  background-color: rgb(5, 5, 5);
}

body .search > .search-container > .search-space > * {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(214, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(214, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(214, 212, 212);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(5, 5, 5);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(214, 212, 212);
}

body a.internal.tag-link::before {
  color: rgb(215, 95, 135);
}

body h1 {
  color: rgb(214, 212, 212);
}

body h2 {
  color: rgb(214, 212, 212);
}

body h2.page-title, h2.page-title a {
  color: rgb(214, 212, 212);
}

body h3 {
  color: rgb(214, 212, 212);
}

body h4 {
  color: rgb(214, 212, 212);
}

body h5 {
  color: rgb(214, 212, 212);
}

body h6 {
  color: rgb(214, 212, 212);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

body ::-webkit-scrollbar-corner {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

body ::-webkit-scrollbar-track {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(226, 95, 134);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}`,
    footer: `body footer {
  background-color: rgb(5, 5, 5);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(214, 212, 212);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body li.section-li > .section .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body ul.section-ul {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(118, 118, 118);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

body .navigation-progress {
  background-color: rgb(5, 5, 5);
}

body .page-header h2.page-title {
  color: rgb(214, 212, 212);
}

body abbr {
  color: rgb(214, 212, 212);
  text-decoration: underline dotted rgb(214, 212, 212);
}

body details {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body kbd {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

body progress {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

body sub {
  color: rgb(214, 212, 212);
}

body summary {
  color: rgb(214, 212, 212);
}

body sup {
  color: rgb(214, 212, 212);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #FFFFFF !important;
  --background-secondary: #FFFFFF !important;
  --background-secondary-alt: #C6C6C6 !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81 !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-summary-background: #FFFFFF !important;
  --blockquote-border-color: #da5c81 !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --canvas-background: #FFFFFF !important;
  --canvas-card-label-color: #767676 !important;
  --caret-color: #262626 !important;
  --checkbox-border-color: #767676 !important;
  --checkbox-color: #da5c81 !important;
  --checkbox-marker-color: #FFFFFF !important;
  --code-background: #ecebeb !important;
  --code-comment: #767676 !important;
  --code-constant: #d75f87 !important;
  --code-function: #262626 !important;
  --code-keyword: #767676 !important;
  --code-normal: #262626 !important;
  --code-operator: #262626 !important;
  --code-string: #d75f87 !important;
  --code-tag: #005F87 !important;
  --code-url: #008EC4 !important;
  --code-value: #262626 !important;
  --collapse-icon-color: #767676 !important;
  --collapse-icon-color-collapsed: #d75f87 !important;
  --color-accent: #d75f87 !important;
  --dark: #262626 !important;
  --darkgray: #262626 !important;
  --divider-color-hover: #da5c81 !important;
  --embed-border-start: 2px solid #da5c81 !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --flair-color: #262626 !important;
  --footnote-id-color-no-occurrences: #767676 !important;
  --graph-node-focused: #d75f87 !important;
  --graph-node-unresolved: #767676 !important;
  --graph-text: #262626 !important;
  --gray: #767676 !important;
  --heading-formatting: #767676 !important;
  --icon-color-active: #d75f87 !important;
  --icon-color-focused: #262626 !important;
  --input-date-separator: #767676 !important;
  --input-placeholder-color: #767676 !important;
  --interactive-accent: #da5c81 !important;
  --interactive-before: #4E4E4E !important;
  --light: #FFFFFF !important;
  --lightgray: #FFFFFF !important;
  --link-color: #d75f87 !important;
  --link-external-color: #d75f87 !important;
  --link-unresolved-color: #d75f87 !important;
  --list-marker-color: #767676 !important;
  --list-marker-color-collapsed: #d75f87 !important;
  --menu-background: #FFFFFF !important;
  --metadata-input-text-color: #262626 !important;
  --modal-background: #FFFFFF !important;
  --nav-collapse-icon-color: #767676 !important;
  --nav-collapse-icon-color-collapsed: #767676 !important;
  --nav-heading-color: #262626 !important;
  --nav-heading-color-collapsed: #767676 !important;
  --nav-heading-color-hover: #262626 !important;
  --nav-item-background-active: #e25f86 !important;
  --nav-item-color-active: #EEEEEE !important;
  --nav-item-color-highlighted: #d75f87 !important;
  --nav-item-color-hover: #262626 !important;
  --nav-item-color-selected: #262626 !important;
  --nav-tag-color: #767676 !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-color-hover: #262626 !important;
  --pill-color-remove: #767676 !important;
  --pill-color-remove-hover: #d75f87 !important;
  --prompt-background: #FFFFFF !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: #FFFFFF !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --scrollbar-bg: #EEEEEE !important;
  --search-result-background: #FFFFFF !important;
  --secondary: #d75f87 !important;
  --setting-group-heading-color: #262626 !important;
  --status-bar-background: #FFFFFF !important;
  --suggestion-background: #FFFFFF !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #FFFFFF !important;
  --tab-switcher-background: #FFFFFF !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #FFFFFF, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87 !important;
  --tab-text-color: #767676 !important;
  --tab-text-color-focused-active-current: #262626 !important;
  --tab-text-color-focused-highlighted: #d75f87 !important;
  --table-drag-handle-background-active: #da5c81 !important;
  --table-drag-handle-color: #767676 !important;
  --table-header-color: #262626 !important;
  --table-selection-border-color: #da5c81 !important;
  --tag-color: #d75f87 !important;
  --tag-color-hover: #d75f87 !important;
  --tertiary: #d75f87 !important;
  --text-accent: #d75f87 !important;
  --text-faint: #767676 !important;
  --text-normal: #262626 !important;
  --text-selection: #da5c8133 !important;
  --titlebar-background: #FFFFFF !important;
  --titlebar-background-focused: #C6C6C6 !important;
  --titlebar-text-color-focused: #262626 !important;
  --vault-profile-color: #262626 !important;
  --vault-profile-color-hover: #262626 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > em, em {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > i, i {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .page article p > strong, strong {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .text-highlight {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body del {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body p {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    links: `body a.external, footer a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

body a.internal.broken {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
}`,
    lists: `body dd {
  color: rgb(38, 38, 38);
}

body dt {
  color: rgb(38, 38, 38);
}

body ol > li {
  color: rgb(38, 38, 38);
}

body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body ul > li {
  color: rgb(38, 38, 38);
}

body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(118, 118, 118);
  text-decoration: rgb(118, 118, 118);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body table {
  color: rgb(38, 38, 38);
}

body td {
  color: rgb(38, 38, 38);
}

body th {
  color: rgb(38, 38, 38);
}`,
    code: `body code {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 235, 235);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 235, 235);
  color: rgb(38, 38, 38);
}

body pre > code > [data-line] {
  border-left-color: rgb(38, 38, 38);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 38, 38);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body pre > code, pre:has(> code) {
  background-color: rgb(236, 235, 235);
}

body pre:has(> code) {
  background-color: rgb(236, 235, 235);
}`,
    images: `body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body figcaption {
  color: rgb(38, 38, 38);
}

body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 118);
  border-left-color: rgb(118, 118, 118);
  border-right-color: rgb(118, 118, 118);
  border-top-color: rgb(118, 118, 118);
}

body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    search: `body .search > .search-button {
  color: rgb(38, 38, 38);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

body a.internal.tag-link::before {
  color: rgb(215, 95, 135);
}

body h1 {
  color: rgb(38, 38, 38);
}

body h2 {
  color: rgb(38, 38, 38);
}

body h2.page-title, h2.page-title a {
  color: rgb(38, 38, 38);
}

body h3 {
  color: rgb(38, 38, 38);
}

body h4 {
  color: rgb(38, 38, 38);
}

body h5 {
  color: rgb(38, 38, 38);
}

body h6 {
  color: rgb(38, 38, 38);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(226, 95, 134);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body li.section-li > .section .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(118, 118, 118);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(38, 38, 38);
}

body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body kbd {
  background-color: rgb(236, 235, 235);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

body sub {
  color: rgb(38, 38, 38);
}

body summary {
  color: rgb(38, 38, 38);
}

body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
