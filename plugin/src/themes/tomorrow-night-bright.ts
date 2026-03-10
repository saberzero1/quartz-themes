import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tomorrow-night-bright",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-group-heading-property-color: #7aa6da !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #7aa6da !important;
  --bases-table-summary-background: #000000 !important;
  --canvas-background: #000000 !important;
  --caret-color: #eaeaea !important;
  --checkbox-border-color-hover: #7aa6da !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #7aa6da !important;
  --code-background: #000000 !important;
  --code-normal: #eaeaea !important;
  --code-punctuation: #7aa6da !important;
  --collapse-icon-color-collapsed: #d54e53 !important;
  --color-0: #000000 !important;
  --color-1: #eaeaea !important;
  --color-10: #424242 !important;
  --color-11: #2a2a2a !important;
  --color-2: #b9ca4a !important;
  --color-3: #d54e53 !important;
  --color-4: #e7c547 !important;
  --color-5: #7aa6da !important;
  --color-6: #70c0b1 !important;
  --color-7: #e78c45 !important;
  --color-8: #c397d8 !important;
  --color-9: #969896 !important;
  --color-w: #ffffff !important;
  --dark: #eaeaea !important;
  --darkgray: #eaeaea !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-color: #eaeaea !important;
  --footnote-id-color: #7aa6da !important;
  --graph-node: #7aa6da !important;
  --graph-node-focused: #d54e53 !important;
  --graph-text: #eaeaea !important;
  --gray: #7aa6da !important;
  --icon-color: #7aa6da !important;
  --icon-color-active: #d54e53 !important;
  --icon-color-focused: #eaeaea !important;
  --icon-color-hover: #7aa6da !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #d54e53 !important;
  --link-external-color: #d54e53 !important;
  --link-unresolved-color: #d54e53 !important;
  --list-marker-color-collapsed: #d54e53 !important;
  --list-marker-color-hover: #7aa6da !important;
  --menu-background: #000000 !important;
  --metadata-input-text-color: #eaeaea !important;
  --metadata-label-text-color: #7aa6da !important;
  --metadata-label-text-color-hover: #7aa6da !important;
  --modal-background: #000000 !important;
  --nav-heading-color: #eaeaea !important;
  --nav-heading-color-collapsed-hover: #7aa6da !important;
  --nav-heading-color-hover: #eaeaea !important;
  --nav-item-color: #7aa6da !important;
  --nav-item-color-active: #eaeaea !important;
  --nav-item-color-highlighted: #d54e53 !important;
  --nav-item-color-hover: #eaeaea !important;
  --nav-item-color-selected: #eaeaea !important;
  --nav-tag-color-active: #7aa6da !important;
  --nav-tag-color-hover: #7aa6da !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color: #7aa6da !important;
  --pill-color-hover: #eaeaea !important;
  --pill-color-remove-hover: #d54e53 !important;
  --prompt-background: #000000 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --search-clear-button-color: #7aa6da !important;
  --search-icon-color: #7aa6da !important;
  --search-result-background: #000000 !important;
  --secondary: #d54e53 !important;
  --setting-group-heading-color: #eaeaea !important;
  --setting-items-background: #000000 !important;
  --status-bar-background: #000000 !important;
  --status-bar-text-color: #7aa6da !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color-active: #7aa6da !important;
  --tab-text-color-focused: #7aa6da !important;
  --tab-text-color-focused-active: #7aa6da !important;
  --tab-text-color-focused-active-current: #eaeaea !important;
  --tab-text-color-focused-highlighted: #d54e53 !important;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8) !important;
  --table-header-color: #eaeaea !important;
  --tag-color: #d54e53 !important;
  --tag-color-hover: #d54e53 !important;
  --tertiary: #d54e53 !important;
  --text-accent: #d54e53 !important;
  --text-muted: #7aa6da !important;
  --text-normal: #eaeaea !important;
  --text-on-accent: rgba(0, 0, 0, 0.8) !important;
  --text-selection: #424242 !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-text-color: #7aa6da !important;
  --titlebar-text-color-focused: #eaeaea !important;
  --vault-profile-color: #eaeaea !important;
  --vault-profile-color-hover: #eaeaea !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}`,
    typography: `body .page article p > b, b {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body .page article p > em, em {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body .page article p > i, i {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body .page article p > strong, strong {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body .text-highlight {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body del {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: line-through rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body p {
  color: rgb(122, 166, 218);
  outline: rgb(122, 166, 218) none 0px;
  text-decoration: rgb(122, 166, 218);
  text-decoration-color: rgb(122, 166, 218);
}`,
    links: `body a.external, footer a {
  color: rgb(213, 78, 83);
  outline: rgb(213, 78, 83) none 0px;
  text-decoration: underline rgb(213, 78, 83);
  text-decoration-color: rgb(213, 78, 83);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 78, 83);
  outline: rgb(213, 78, 83) none 0px;
  text-decoration: underline rgb(213, 78, 83);
  text-decoration-color: rgb(213, 78, 83);
}

body a.internal.broken {
  color: rgb(213, 78, 83);
  outline: rgb(213, 78, 83) none 0px;
}`,
    lists: `body dd {
  color: rgb(234, 234, 234);
}

body dt {
  color: rgb(234, 234, 234);
}

body ol > li {
  color: rgb(234, 234, 234);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body ul > li {
  color: rgb(234, 234, 234);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body table {
  color: rgb(234, 234, 234);
}

body td {
  color: rgb(234, 234, 234);
}

body th {
  color: rgb(234, 234, 234);
}`,
    code: `body code {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body figcaption {
  color: rgb(234, 234, 234);
}

body figure {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body img {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body video {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
}

body .footnotes {
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

body .transclude {
  border-bottom-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body .transclude-inner {
  border-bottom-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(122, 166, 218);
  text-decoration: line-through rgb(122, 166, 218);
  text-decoration-color: rgb(122, 166, 218);
}

body li.task-list-item[data-task='!'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='*'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='-'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='/'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='>'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='?'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='I'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='S'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='b'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='c'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='d'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='f'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='i'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='k'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='l'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='p'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='u'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body li.task-list-item[data-task='w'] {
  color: rgb(234, 234, 234);
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}`,
    search: `body .search > .search-button {
  color: rgb(234, 234, 234);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(234, 234, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(234, 234, 234);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(66, 66, 66);
  color: rgb(234, 234, 234);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(66, 66, 66);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(66, 66, 66);
  color: rgb(234, 234, 234);
}

body a.internal.tag-link::before {
  color: rgb(213, 78, 83);
}

body h1 {
  color: rgb(234, 234, 234);
}

body h2 {
  color: rgb(234, 234, 234);
}

body h2.page-title, h2.page-title a {
  color: rgb(234, 234, 234);
}

body h3 {
  color: rgb(234, 234, 234);
}

body h4 {
  color: rgb(234, 234, 234);
}

body h5 {
  color: rgb(234, 234, 234);
}

body h6 {
  color: rgb(213, 78, 83);
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
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
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
  color: rgb(122, 166, 218);
  text-decoration: rgb(122, 166, 218);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(122, 166, 218);
  text-decoration: rgb(122, 166, 218);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(122, 166, 218);
  text-decoration: rgb(122, 166, 218);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(122, 166, 218);
}

body footer ul li a {
  color: rgb(122, 166, 218);
  text-decoration: rgb(122, 166, 218);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(234, 234, 234);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(122, 166, 218);
  text-decoration: rgb(122, 166, 218);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(122, 166, 218);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body li.section-li > .section .meta {
  color: rgb(122, 166, 218);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(122, 166, 218);
  text-decoration: rgb(122, 166, 218);
}

body ul.section-ul {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}

body .darkmode svg {
  color: rgb(122, 166, 218);
  stroke: rgb(122, 166, 218);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

body .metadata {
  color: rgb(122, 166, 218);
}

body .metadata-properties {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(234, 234, 234);
}

body abbr {
  color: rgb(234, 234, 234);
  text-decoration: underline dotted rgb(234, 234, 234);
}

body details {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body input[type=text] {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

body progress {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

body sub {
  color: rgb(234, 234, 234);
}

body summary {
  color: rgb(234, 234, 234);
}

body sup {
  color: rgb(234, 234, 234);
}`,
  },
  light: {},
};
