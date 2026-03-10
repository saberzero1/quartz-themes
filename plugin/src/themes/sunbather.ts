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
  --background-primary: #050505;
  --background-secondary: #050505;
  --background-secondary-alt: #050505;
  --bases-cards-background: #050505;
  --bases-table-cell-background-active: #050505;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81;
  --bases-table-header-background: #050505;
  --bases-table-summary-background: #050505;
  --blockquote-border-color: #da5c81;
  --canvas-background: #050505;
  --canvas-card-label-color: #767676;
  --caret-color: #d6d4d4;
  --checkbox-border-color: #767676;
  --checkbox-color: #da5c81;
  --checkbox-marker-color: #050505;
  --code-background: #131313;
  --code-comment: #767676;
  --code-constant: #d75f87;
  --code-function: #d6d4d4;
  --code-keyword: #767676;
  --code-normal: #d6d4d4;
  --code-operator: #d6d4d4;
  --code-string: #da5c81;
  --code-tag: #20BBFC;
  --code-url: #20BBFC;
  --code-value: #d6d4d4;
  --collapse-icon-color: #767676;
  --collapse-icon-color-collapsed: #d75f87;
  --color-accent: #d75f87;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #da5c81;
  --embed-border-start: 2px solid #da5c81;
  --file-header-background: #050505;
  --file-header-background-focused: #050505;
  --flair-color: #d6d4d4;
  --footnote-id-color-no-occurrences: #767676;
  --graph-node-focused: #d75f87;
  --graph-node-unresolved: #767676;
  --graph-text: #d6d4d4;
  --gray: var(--text-faint);
  --heading-formatting: #767676;
  --icon-color-active: #d75f87;
  --icon-color-focused: #d6d4d4;
  --input-date-separator: #767676;
  --input-placeholder-color: #767676;
  --interactive-accent: #da5c81;
  --interactive-before: #4E4E4E;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #d75f87;
  --link-external-color: #d75f87;
  --link-unresolved-color: #d75f87;
  --list-marker-color: #767676;
  --list-marker-color-collapsed: #d75f87;
  --menu-background: #050505;
  --metadata-input-text-color: #d6d4d4;
  --modal-background: #050505;
  --nav-collapse-icon-color: #767676;
  --nav-collapse-icon-color-collapsed: #767676;
  --nav-heading-color: #d6d4d4;
  --nav-heading-color-collapsed: #767676;
  --nav-heading-color-hover: #d6d4d4;
  --nav-item-background-active: #e25f86;
  --nav-item-color-active: #262626;
  --nav-item-color-highlighted: #d75f87;
  --nav-item-color-hover: #d6d4d4;
  --nav-item-color-selected: #d6d4d4;
  --nav-tag-color: #767676;
  --pdf-background: #050505;
  --pdf-page-background: #050505;
  --pdf-sidebar-background: #050505;
  --pill-color-hover: #d6d4d4;
  --pill-color-remove: #767676;
  --pill-color-remove-hover: #d75f87;
  --prompt-background: #050505;
  --ribbon-background: #050505;
  --ribbon-background-collapsed: #050505;
  --scrollbar-bg: #0c0c0c;
  --search-result-background: #050505;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d6d4d4;
  --status-bar-background: #050505;
  --suggestion-background: #050505;
  --tab-background-active: #050505;
  --tab-container-background: #050505;
  --tab-switcher-background: #050505;
  --tab-switcher-menubar-background: linear-gradient(to top, #050505, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87;
  --tab-text-color: #767676;
  --tab-text-color-focused-active-current: #d6d4d4;
  --tab-text-color-focused-highlighted: #d75f87;
  --table-drag-handle-background-active: #da5c81;
  --table-drag-handle-color: #767676;
  --table-header-color: #d6d4d4;
  --table-selection-border-color: #da5c81;
  --tag-color: #d75f87;
  --tag-color-hover: #d75f87;
  --tertiary: var(--text-accent);
  --text-accent: #d75f87;
  --text-faint: #767676;
  --text-normal: #d6d4d4;
  --text-selection: #da5c8133;
  --titlebar-background: #050505;
  --titlebar-background-focused: #050505;
  --titlebar-text-color-focused: #d6d4d4;
  --vault-profile-color: #d6d4d4;
  --vault-profile-color-hover: #d6d4d4;
  --quartz-icon-color: currentColor;
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
  --background-primary: #FFFFFF;
  --background-secondary: #FFFFFF;
  --background-secondary-alt: #C6C6C6;
  --bases-cards-background: #FFFFFF;
  --bases-table-cell-background-active: #FFFFFF;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81;
  --bases-table-header-background: #FFFFFF;
  --bases-table-summary-background: #FFFFFF;
  --blockquote-border-color: #da5c81;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --canvas-background: #FFFFFF;
  --canvas-card-label-color: #767676;
  --caret-color: #262626;
  --checkbox-border-color: #767676;
  --checkbox-color: #da5c81;
  --checkbox-marker-color: #FFFFFF;
  --code-background: #ecebeb;
  --code-comment: #767676;
  --code-constant: #d75f87;
  --code-function: #262626;
  --code-keyword: #767676;
  --code-normal: #262626;
  --code-operator: #262626;
  --code-string: #d75f87;
  --code-tag: #005F87;
  --code-url: #008EC4;
  --code-value: #262626;
  --collapse-icon-color: #767676;
  --collapse-icon-color-collapsed: #d75f87;
  --color-accent: #d75f87;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: #da5c81;
  --embed-border-start: 2px solid #da5c81;
  --file-header-background: #FFFFFF;
  --file-header-background-focused: #FFFFFF;
  --flair-color: #262626;
  --footnote-id-color-no-occurrences: #767676;
  --graph-node-focused: #d75f87;
  --graph-node-unresolved: #767676;
  --graph-text: #262626;
  --gray: var(--text-faint);
  --heading-formatting: #767676;
  --icon-color-active: #d75f87;
  --icon-color-focused: #262626;
  --input-date-separator: #767676;
  --input-placeholder-color: #767676;
  --interactive-accent: #da5c81;
  --interactive-before: #4E4E4E;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #d75f87;
  --link-external-color: #d75f87;
  --link-unresolved-color: #d75f87;
  --list-marker-color: #767676;
  --list-marker-color-collapsed: #d75f87;
  --menu-background: #FFFFFF;
  --metadata-input-text-color: #262626;
  --modal-background: #FFFFFF;
  --nav-collapse-icon-color: #767676;
  --nav-collapse-icon-color-collapsed: #767676;
  --nav-heading-color: #262626;
  --nav-heading-color-collapsed: #767676;
  --nav-heading-color-hover: #262626;
  --nav-item-background-active: #e25f86;
  --nav-item-color-active: #EEEEEE;
  --nav-item-color-highlighted: #d75f87;
  --nav-item-color-hover: #262626;
  --nav-item-color-selected: #262626;
  --nav-tag-color: #767676;
  --pdf-background: #FFFFFF;
  --pdf-page-background: #FFFFFF;
  --pdf-sidebar-background: #FFFFFF;
  --pill-color-hover: #262626;
  --pill-color-remove: #767676;
  --pill-color-remove-hover: #d75f87;
  --prompt-background: #FFFFFF;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent));
  --ribbon-background: #FFFFFF;
  --ribbon-background-collapsed: #FFFFFF;
  --scrollbar-bg: #EEEEEE;
  --search-result-background: #FFFFFF;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #262626;
  --status-bar-background: #FFFFFF;
  --suggestion-background: #FFFFFF;
  --tab-background-active: #FFFFFF;
  --tab-container-background: #FFFFFF;
  --tab-switcher-background: #FFFFFF;
  --tab-switcher-menubar-background: linear-gradient(to top, #FFFFFF, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87;
  --tab-text-color: #767676;
  --tab-text-color-focused-active-current: #262626;
  --tab-text-color-focused-highlighted: #d75f87;
  --table-drag-handle-background-active: #da5c81;
  --table-drag-handle-color: #767676;
  --table-header-color: #262626;
  --table-selection-border-color: #da5c81;
  --tag-color: #d75f87;
  --tag-color-hover: #d75f87;
  --tertiary: var(--text-accent);
  --text-accent: #d75f87;
  --text-faint: #767676;
  --text-normal: #262626;
  --text-selection: #da5c8133;
  --titlebar-background: #FFFFFF;
  --titlebar-background-focused: #C6C6C6;
  --titlebar-text-color-focused: #262626;
  --vault-profile-color: #262626;
  --vault-profile-color-hover: #262626;
  --quartz-icon-color: currentColor;
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
