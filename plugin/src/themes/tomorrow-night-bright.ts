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
  --background-primary: #000000;
  --background-primary-alt: #000000;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #000000;
  --bases-group-heading-property-color: #7aa6da;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #000000;
  --bases-table-header-color: #7aa6da;
  --bases-table-summary-background: #000000;
  --canvas-background: #000000;
  --caret-color: #eaeaea;
  --checkbox-border-color-hover: #7aa6da;
  --checkbox-marker-color: #000000;
  --checklist-done-color: #7aa6da;
  --code-background: #000000;
  --code-normal: #eaeaea;
  --code-punctuation: #7aa6da;
  --collapse-icon-color-collapsed: #d54e53;
  --color-0: #000000;
  --color-1: #eaeaea;
  --color-10: #424242;
  --color-11: #2a2a2a;
  --color-2: #b9ca4a;
  --color-3: #d54e53;
  --color-4: #e7c547;
  --color-5: #7aa6da;
  --color-6: #70c0b1;
  --color-7: #e78c45;
  --color-8: #c397d8;
  --color-9: #969896;
  --color-w: #ffffff;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --flair-color: #eaeaea;
  --footnote-id-color: #7aa6da;
  --graph-node: #7aa6da;
  --graph-node-focused: #d54e53;
  --graph-text: #eaeaea;
  --gray: var(--text-muted);
  --icon-color: #7aa6da;
  --icon-color-active: #d54e53;
  --icon-color-focused: #eaeaea;
  --icon-color-hover: #7aa6da;
  --interactive-accent-rgb: 72, 54, 153;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #d54e53;
  --link-external-color: #d54e53;
  --link-unresolved-color: #d54e53;
  --list-marker-color-collapsed: #d54e53;
  --list-marker-color-hover: #7aa6da;
  --menu-background: #000000;
  --metadata-input-text-color: #eaeaea;
  --metadata-label-text-color: #7aa6da;
  --metadata-label-text-color-hover: #7aa6da;
  --modal-background: #000000;
  --nav-heading-color: #eaeaea;
  --nav-heading-color-collapsed-hover: #7aa6da;
  --nav-heading-color-hover: #eaeaea;
  --nav-item-color: #7aa6da;
  --nav-item-color-active: #eaeaea;
  --nav-item-color-highlighted: #d54e53;
  --nav-item-color-hover: #eaeaea;
  --nav-item-color-selected: #eaeaea;
  --nav-tag-color-active: #7aa6da;
  --nav-tag-color-hover: #7aa6da;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color: #7aa6da;
  --pill-color-hover: #eaeaea;
  --pill-color-remove-hover: #d54e53;
  --prompt-background: #000000;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --search-clear-button-color: #7aa6da;
  --search-icon-color: #7aa6da;
  --search-result-background: #000000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #eaeaea;
  --setting-items-background: #000000;
  --status-bar-background: #000000;
  --status-bar-text-color: #7aa6da;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #000000;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color-active: #7aa6da;
  --tab-text-color-focused: #7aa6da;
  --tab-text-color-focused-active: #7aa6da;
  --tab-text-color-focused-active-current: #eaeaea;
  --tab-text-color-focused-highlighted: #d54e53;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8);
  --table-header-color: #eaeaea;
  --tag-color: #d54e53;
  --tag-color-hover: #d54e53;
  --tertiary: var(--text-accent);
  --text-accent: #d54e53;
  --text-muted: #7aa6da;
  --text-normal: #eaeaea;
  --text-on-accent: rgba(0, 0, 0, 0.8);
  --text-selection: #424242;
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-text-color: #7aa6da;
  --titlebar-text-color-focused: #eaeaea;
  --vault-profile-color: #eaeaea;
  --vault-profile-color-hover: #eaeaea;
  --quartz-icon-color: currentColor;
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
