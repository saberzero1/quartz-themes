import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nobb", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-container-border-radius: 0px;
  --blockquote-border-color: rgb(250, 81, 81);
  --blockquote-border-thickness: 0.15em;
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-controls-radius: 0px;
  --caret-color: #bbbbbb;
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-background: #000000;
  --code-normal: #bbbbbb;
  --code-radius: 0px;
  --flair-color: #bbbbbb;
  --fluro-blue-rgb: 0, 255, 255;
  --fluro-coral-rgb: 240, 128, 128;
  --fluro-green-rgb: 0, 255, 0;
  --fluro-pink-rgb: 255, 0, 255;
  --fluro-purple-rgb: 200, 0, 255;
  --fluro-red-rgb: 255, 0, 0
	--fluro-yellow-rgb: 255, 255, 0;
  --footnote-radius: 0px;
  --graph-text: #bbbbbb;
  --h2-color: #fff;
  --h3-color: #fff;
  --h3-weight: 500;
  --icon-color-focused: #bbbbbb;
  --input-radius: 0px;
  --menu-radius: 0px;
  --metadata-input-text-color: #bbbbbb;
  --modal-radius: 0px;
  --nav-heading-color: #bbbbbb;
  --nav-heading-color-hover: #bbbbbb;
  --nav-item-color-active: #bbbbbb;
  --nav-item-color-hover: #bbbbbb;
  --nav-item-color-selected: #bbbbbb;
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --nobb-color: rgb(250, 81, 81);
  --pill-color-hover: #bbbbbb;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --scrollbar-radius: 0px;
  --setting-group-heading-color: #bbbbbb;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-radius: 0px 0 0 0;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-text-color-focused-active-current: #bbbbbb;
  --table-header-color: #bbbbbb;
  --text-normal: #bbbbbb;
  --title-border-bottom: 2px solid rgb(250, 81, 81);
  --titlebar-text-color-focused: #bbbbbb;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #bbbbbb;
  --vault-profile-color-hover: #bbbbbb;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(187, 187, 187);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(187, 187, 187);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(187, 187, 187);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(187, 187, 187);
}

body div#quartz-root {
  color: rgb(187, 187, 187);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 41, 41);
  font-weight: 900;
  outline: rgb(255, 41, 41) none 0px;
  text-decoration: rgb(255, 41, 41);
  text-decoration-color: rgb(255, 41, 41);
}

body .page article p > em, em {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body .page article p > i, i {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body .page article p > strong, strong {
  color: rgb(255, 41, 41);
  font-weight: 900;
  outline: rgb(255, 41, 41) none 0px;
  text-decoration: rgb(255, 41, 41);
  text-decoration-color: rgb(255, 41, 41);
}

body .text-highlight {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body del {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    lists: `body dd {
  color: rgb(187, 187, 187);
}

body dt {
  color: rgb(187, 187, 187);
}

body ol > li {
  color: rgb(187, 187, 187);
}

body ol.overflow {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body ul > li {
  color: rgb(187, 187, 187);
}

body ul.overflow {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body table {
  color: rgb(187, 187, 187);
  width: 241.938px;
}

body td {
  color: rgb(187, 187, 187);
}

body th {
  color: rgb(187, 187, 187);
}`,
    code: `body code {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 5.6px;
  border-bottom-right-radius: 5.6px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 5.6px;
  border-top-right-radius: 5.6px;
  color: rgb(187, 187, 187);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body figcaption {
  color: rgb(187, 187, 187);
}

body figure {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body img {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body video {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .transclude {
  border-bottom-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .transclude-inner {
  border-bottom-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='*'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='-'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='/'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='>'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='?'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='I'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='S'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='b'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='c'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='d'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='f'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='i'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='k'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='l'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='p'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='u'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='w'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(187, 187, 187);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

body h1 {
  color: rgb(187, 187, 187);
}

body h2 {
  color: rgb(255, 255, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(187, 187, 187);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(187, 187, 187);
}

body h5 {
  color: rgb(187, 187, 187);
}

body h6 {
  color: rgb(187, 187, 187);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(187, 187, 187);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body ul.section-ul {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .page-header h2.page-title {
  color: rgb(187, 187, 187);
}

body abbr {
  color: rgb(187, 187, 187);
  text-decoration: underline dotted rgb(187, 187, 187);
}

body details {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body kbd {
  background-color: rgb(51, 51, 56);
  border-bottom-color: rgb(227, 227, 236);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(227, 227, 236);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(227, 227, 236);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(227, 227, 236);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgb(227, 227, 236) 0px 4px 0px 0px;
  color: rgb(227, 227, 236);
  padding-bottom: 0px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body sub {
  color: rgb(187, 187, 187);
}

body summary {
  color: rgb(187, 187, 187);
}

body sup {
  color: rgb(187, 187, 187);
}`,
  },
  light: {},
};
