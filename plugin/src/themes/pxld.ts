import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pxld", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #080808 !important;
  --background-secondary: #080808 !important;
  --bases-cards-background: #080808 !important;
  --bases-table-cell-background-active: #080808 !important;
  --bases-table-header-background: #080808 !important;
  --bases-table-summary-background: #080808 !important;
  --bodyFont: 'pixel_squareregular' !important;
  --canvas-background: #080808 !important;
  --caret-color: #f5f7fa !important;
  --checkbox-color-hover: rgb(197, 182, 252) !important;
  --checkbox-marker-color: #080808 !important;
  --code-background: #111112 !important;
  --code-comment: #a4b9db !important;
  --code-keyword: #fb464c !important;
  --code-normal: #f5f7fa !important;
  --code-operator: #53dfdd !important;
  --code-property: #fa99cd !important;
  --code-string: #4682e3 !important;
  --codeFont: 'pixel_squareregular' !important;
  --collapse-icon-color-collapsed: rgb(197, 182, 252) !important;
  --dark: #f5f7fa !important;
  --darkgray: #f5f7fa !important;
  --file-header-background: #080808 !important;
  --file-header-background-focused: #080808 !important;
  --flair-color: #f5f7fa !important;
  --font-mermaid: 'pixel_squareregular' !important;
  --font-text: 'pixel_squareregular' !important;
  --graph-node-focused: rgb(197, 182, 252) !important;
  --graph-text: #f5f7fa !important;
  --gray: #f5f7fa !important;
  --headerFont: 'pixel_squareregular' !important;
  --icon-color-active: rgb(197, 182, 252) !important;
  --icon-color-focused: #f5f7fa !important;
  --light: #080808 !important;
  --lightgray: #080808 !important;
  --link-color: rgb(197, 182, 252) !important;
  --link-external-color: rgb(197, 182, 252) !important;
  --link-unresolved-color: rgb(197, 182, 252) !important;
  --list-marker-color-collapsed: rgb(197, 182, 252) !important;
  --menu-background: #080808 !important;
  --metadata-input-text-color: #f5f7fa !important;
  --modal-background: #080808 !important;
  --nav-heading-color: #f5f7fa !important;
  --nav-heading-color-hover: #f5f7fa !important;
  --nav-item-color-active: #f5f7fa !important;
  --nav-item-color-highlighted: rgb(197, 182, 252) !important;
  --nav-item-color-hover: #f5f7fa !important;
  --nav-item-color-selected: #f5f7fa !important;
  --pdf-background: #080808 !important;
  --pdf-page-background: #080808 !important;
  --pdf-sidebar-background: #080808 !important;
  --pill-color-hover: #f5f7fa !important;
  --pill-color-remove-hover: rgb(197, 182, 252) !important;
  --prompt-background: #080808 !important;
  --ribbon-background: #080808 !important;
  --ribbon-background-collapsed: #080808 !important;
  --search-result-background: #080808 !important;
  --secondary: rgb(197, 182, 252) !important;
  --selection-color: #f5f7fa !important;
  --setting-group-heading-color: #f5f7fa !important;
  --status-bar-background: #080808 !important;
  --suggestion-background: #080808 !important;
  --tab-background-active: #080808 !important;
  --tab-container-background: #080808 !important;
  --tab-switcher-background: #080808 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent) !important;
  --tab-text-color-focused-active-current: #f5f7fa !important;
  --tab-text-color-focused-highlighted: rgb(197, 182, 252) !important;
  --table-header-color: #f5f7fa !important;
  --tag-color: rgb(197, 182, 252) !important;
  --tag-color-hover: rgb(197, 182, 252) !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(197, 182, 252) !important;
  --text-normal: #f5f7fa !important;
  --text-selection: rgb(197, 182, 252) !important;
  --titleFont: 'pixel_squareregular' !important;
  --titlebar-background: #080808 !important;
  --titlebar-text-color-focused: #f5f7fa !important;
  --vault-profile-color: #f5f7fa !important;
  --vault-profile-color-hover: #f5f7fa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

body div#quartz-root {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}`,
    typography: `body .page article p > b, b {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body .page article p > em, em {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body .page article p > i, i {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body .page article p > strong, strong {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body .text-highlight {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body del {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: line-through rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body p {
  font-family: pixel_squareregular;
}`,
    links: `body a.external, footer a {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
  text-decoration: underline rgb(197, 182, 252);
  text-decoration-color: rgb(197, 182, 252);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
  text-decoration: underline rgb(197, 182, 252);
  text-decoration-color: rgb(197, 182, 252);
}

body a.internal.broken {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
}`,
    lists: `body dd {
  color: rgb(245, 247, 250);
}

body dt {
  color: rgb(245, 247, 250);
}

body ol > li {
  color: rgb(245, 247, 250);
}

body ol.overflow {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body ul > li {
  color: rgb(245, 247, 250);
}

body ul.overflow {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    blockquotes: `body blockquote {
  font-family: pixel_squareregular;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body table {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  width: 231.75px;
}

body td {
  color: rgb(245, 247, 250);
}

body th {
  color: rgb(245, 247, 250);
}`,
    code: `body code {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 18);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 18);
  color: rgb(245, 247, 250);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 17, 18);
}

body pre:has(> code) {
  background-color: rgb(17, 17, 18);
}`,
    images: `body audio {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body figcaption {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body figure {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body img {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body video {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body .transclude {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body .transclude-inner {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: pixel_squareregular;
}

body .katex-display > .katex > .katex-html {
  font-family: pixel_squareregular;
}

body li.task-list-item[data-task='!'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='*'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='-'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='/'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='>'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='?'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='I'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='S'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='b'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='c'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='d'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='f'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='i'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='k'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='l'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='p'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='u'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body li.task-list-item[data-task='w'] {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}`,
    search: `body .search > .search-button {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body .search > .search-container > .search-space {
  background-color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > * {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 247, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(245, 247, 250);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 247, 250);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(245, 247, 250);
}

body a.internal.tag-link::before {
  color: rgb(197, 182, 252);
}

body h1 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body h2 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body h3 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body h4 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body h5 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body h6 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

body ::-webkit-scrollbar-corner {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

body ::-webkit-scrollbar-track {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: pixel_squareregular;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: pixel_squareregular;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: pixel_squareregular;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}`,
    footer: `body footer {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body footer ul li a {
  color: rgb(245, 247, 250);
  text-decoration: rgb(245, 247, 250);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: pixel_squareregular;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body li.section-li > .section .meta {
  font-family: pixel_squareregular;
}

body ul.section-ul {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body .metadata {
  font-family: pixel_squareregular;
}

body .metadata-properties {
  font-family: pixel_squareregular;
}

body .navigation-progress {
  background-color: rgb(8, 8, 8);
}

body .page-header h2.page-title {
  color: rgb(245, 247, 250);
}

body abbr {
  color: rgb(245, 247, 250);
  text-decoration: underline dotted rgb(245, 247, 250);
}

body details {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body input[type=text] {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body kbd {
  background-color: rgb(17, 17, 18);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

body progress {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

body sub {
  color: rgb(245, 247, 250);
}

body summary {
  color: rgb(245, 247, 250);
}

body sup {
  color: rgb(245, 247, 250);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #f5f7fa !important;
  --background-secondary: #f5f7fa !important;
  --bases-cards-background: #f5f7fa !important;
  --bases-table-cell-background-active: #f5f7fa !important;
  --bases-table-header-background: #f5f7fa !important;
  --bases-table-summary-background: #f5f7fa !important;
  --blur-background: color-mix(in srgb, #f5f7fa 65%, transparent) linear-gradient(#f5f7fa, color-mix(in srgb, #f5f7fa 65%, transparent)) !important;
  --bodyFont: 'pixel_squareregular' !important;
  --canvas-background: #f5f7fa !important;
  --caret-color: #080808 !important;
  --checkbox-marker-color: #f5f7fa !important;
  --code-normal: #080808 !important;
  --code-string: #4682e3 !important;
  --codeFont: 'pixel_squareregular' !important;
  --collapse-icon-color-collapsed: rgb(153, 115, 247) !important;
  --color-accent: rgb(153, 115, 247) !important;
  --dark: #080808 !important;
  --darkgray: #080808 !important;
  --file-header-background: #f5f7fa !important;
  --file-header-background-focused: #f5f7fa !important;
  --flair-color: #080808 !important;
  --font-mermaid: 'pixel_squareregular' !important;
  --font-text: 'pixel_squareregular' !important;
  --graph-node-focused: rgb(153, 115, 247) !important;
  --graph-text: #080808 !important;
  --gray: #080808 !important;
  --headerFont: 'pixel_squareregular' !important;
  --icon-color-active: rgb(153, 115, 247) !important;
  --icon-color-focused: #080808 !important;
  --light: #f5f7fa !important;
  --lightgray: #f5f7fa !important;
  --link-color: rgb(153, 115, 247) !important;
  --link-external-color: rgb(153, 115, 247) !important;
  --link-unresolved-color: rgb(153, 115, 247) !important;
  --list-marker-color-collapsed: rgb(153, 115, 247) !important;
  --menu-background: #f5f7fa !important;
  --metadata-input-text-color: #080808 !important;
  --modal-background: #f5f7fa !important;
  --nav-heading-color: #080808 !important;
  --nav-heading-color-hover: #080808 !important;
  --nav-item-color-active: #080808 !important;
  --nav-item-color-highlighted: rgb(153, 115, 247) !important;
  --nav-item-color-hover: #080808 !important;
  --nav-item-color-selected: #080808 !important;
  --pdf-background: #f5f7fa !important;
  --pdf-page-background: #f5f7fa !important;
  --pdf-sidebar-background: #f5f7fa !important;
  --pill-color-hover: #080808 !important;
  --pill-color-remove-hover: rgb(153, 115, 247) !important;
  --prompt-background: #f5f7fa !important;
  --raised-background: color-mix(in srgb, #f5f7fa 65%, transparent) linear-gradient(#f5f7fa, color-mix(in srgb, #f5f7fa 65%, transparent)) !important;
  --ribbon-background: #f5f7fa !important;
  --ribbon-background-collapsed: #f5f7fa !important;
  --search-result-background: #f5f7fa !important;
  --secondary: rgb(153, 115, 247) !important;
  --selection-color: #f5f7fa !important;
  --setting-group-heading-color: #080808 !important;
  --status-bar-background: #f5f7fa !important;
  --suggestion-background: #f5f7fa !important;
  --tab-background-active: #f5f7fa !important;
  --tab-container-background: #f5f7fa !important;
  --tab-switcher-background: #f5f7fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f7fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(153, 115, 247) !important;
  --tab-text-color-focused-active-current: #080808 !important;
  --tab-text-color-focused-highlighted: rgb(153, 115, 247) !important;
  --table-header-color: #080808 !important;
  --tag-color: rgb(153, 115, 247) !important;
  --tag-color-hover: rgb(153, 115, 247) !important;
  --tertiary: rgb(153, 115, 247) !important;
  --text-accent: rgb(153, 115, 247) !important;
  --text-normal: #080808 !important;
  --text-selection: rgb(166, 139, 249) !important;
  --titleFont: 'pixel_squareregular' !important;
  --titlebar-background: #f5f7fa !important;
  --titlebar-text-color-focused: #080808 !important;
  --vault-profile-color: #080808 !important;
  --vault-profile-color-hover: #080808 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

body div#quartz-root {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}`,
    typography: `body .page article p > b, b {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .page article p > em, em {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .page article p > i, i {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .page article p > strong, strong {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .text-highlight {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body del {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: line-through rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body p {
  font-family: pixel_squareregular;
}`,
    links: `body a.external, footer a {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
  text-decoration: underline rgb(152, 115, 247);
  text-decoration-color: rgb(152, 115, 247);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
  text-decoration: underline rgb(152, 115, 247);
  text-decoration-color: rgb(152, 115, 247);
}

body a.internal.broken {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
}`,
    lists: `body dd {
  color: rgb(8, 8, 8);
}

body dt {
  color: rgb(8, 8, 8);
}

body ol > li {
  color: rgb(8, 8, 8);
}

body ol.overflow {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body ul > li {
  color: rgb(8, 8, 8);
}

body ul.overflow {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    blockquotes: `body blockquote {
  font-family: pixel_squareregular;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body table {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  width: 231.75px;
}

body td {
  color: rgb(8, 8, 8);
}

body th {
  color: rgb(8, 8, 8);
}`,
    code: `body code {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(8, 8, 8);
}`,
    images: `body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body figcaption {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body img {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: pixel_squareregular;
}

body .katex-display > .katex > .katex-html {
  font-family: pixel_squareregular;
}

body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}`,
    search: `body .search > .search-button {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 247, 250);
}

body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(8, 8, 8);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(8, 8, 8);
}

body a.internal.tag-link::before {
  color: rgb(152, 115, 247);
}

body h1 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body h2 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body h2.page-title, h2.page-title a {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body h3 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body h4 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body h5 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body h6 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: pixel_squareregular;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: pixel_squareregular;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: pixel_squareregular;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}`,
    footer: `body footer {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body footer ul li a {
  color: rgb(8, 8, 8);
  text-decoration: rgb(8, 8, 8);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: pixel_squareregular;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body li.section-li > .section .meta {
  font-family: pixel_squareregular;
}

body ul.section-ul {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body .metadata {
  font-family: pixel_squareregular;
}

body .metadata-properties {
  font-family: pixel_squareregular;
}

body .navigation-progress {
  background-color: rgb(245, 247, 250);
}

body .page-header h2.page-title {
  color: rgb(8, 8, 8);
}

body abbr {
  color: rgb(8, 8, 8);
  text-decoration: underline dotted rgb(8, 8, 8);
}

body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body input[type=text] {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body kbd {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

body sub {
  color: rgb(8, 8, 8);
}

body summary {
  color: rgb(8, 8, 8);
}

body sup {
  color: rgb(8, 8, 8);
}`,
  },
};
