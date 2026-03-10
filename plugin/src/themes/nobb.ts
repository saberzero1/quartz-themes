import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "nobb", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-table-container-border-radius: 0px !important;
  --blockquote-border-color: rgb(250, 81, 81) !important;
  --blockquote-border-thickness: 0.15em !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-controls-radius: 0px !important;
  --caret-color: #bbbbbb !important;
  --checkbox-radius: 0px !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #000000 !important;
  --code-normal: #bbbbbb !important;
  --code-radius: 0px !important;
  --dark: #bbbbbb !important;
  --darkgray: #bbbbbb !important;
  --flair-color: #bbbbbb !important;
  --fluro-blue-rgb: 0, 255, 255 !important;
  --fluro-coral-rgb: 240, 128, 128 !important;
  --fluro-green-rgb: 0, 255, 0 !important;
  --fluro-pink-rgb: 255, 0, 255 !important;
  --fluro-purple-rgb: 200, 0, 255 !important;
  --fluro-red-rgb: 255, 0, 0
	--fluro-yellow-rgb: 255, 255, 0 !important;
  --footnote-radius: 0px !important;
  --graph-text: #bbbbbb !important;
  --gray: #bbbbbb !important;
  --h2-color: #fff !important;
  --h3-color: #fff !important;
  --h3-weight: 500 !important;
  --icon-color-focused: #bbbbbb !important;
  --input-radius: 0px !important;
  --menu-radius: 0px !important;
  --metadata-input-text-color: #bbbbbb !important;
  --modal-radius: 0px !important;
  --nav-heading-color: #bbbbbb !important;
  --nav-heading-color-hover: #bbbbbb !important;
  --nav-item-color-active: #bbbbbb !important;
  --nav-item-color-hover: #bbbbbb !important;
  --nav-item-color-selected: #bbbbbb !important;
  --nav-item-radius: 0px !important;
  --nav-tag-radius: 0px !important;
  --nobb-color: rgb(250, 81, 81) !important;
  --pill-color-hover: #bbbbbb !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --scrollbar-radius: 0px !important;
  --setting-group-heading-color: #bbbbbb !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-text-color-focused-active-current: #bbbbbb !important;
  --table-header-color: #bbbbbb !important;
  --text-normal: #bbbbbb !important;
  --title-border-bottom: 2px solid rgb(250, 81, 81) !important;
  --titlebar-text-color-focused: #bbbbbb !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #bbbbbb !important;
  --vault-profile-color-hover: #bbbbbb !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(187, 187, 187);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(187, 187, 187);
}

html body div#quartz-root {
  color: rgb(187, 187, 187);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(255, 41, 41);
  font-weight: 900;
  outline: rgb(255, 41, 41) none 0px;
  text-decoration: rgb(255, 41, 41);
  text-decoration-color: rgb(255, 41, 41);
}

html body .page article p > em, em {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body .page article p > i, i {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body .page article p > strong, strong {
  color: rgb(255, 41, 41);
  font-weight: 900;
  outline: rgb(255, 41, 41) none 0px;
  text-decoration: rgb(255, 41, 41);
  text-decoration-color: rgb(255, 41, 41);
}

html body .text-highlight {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body del {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    lists: `html body dd {
  color: rgb(187, 187, 187);
}

html body dt {
  color: rgb(187, 187, 187);
}

html body ol > li {
  color: rgb(187, 187, 187);
}

html body ol.overflow {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body ul > li {
  color: rgb(187, 187, 187);
}

html body ul.overflow {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body table {
  color: rgb(187, 187, 187);
  width: 241.938px;
}

html body td {
  color: rgb(187, 187, 187);
}

html body th {
  color: rgb(187, 187, 187);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body figcaption {
  color: rgb(187, 187, 187);
}

html body figure {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body img {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body video {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .footnotes {
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .transclude {
  border-bottom-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .transclude-inner {
  border-bottom-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 187, 187);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(187, 187, 187);
}

html body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(187, 187, 187);
}

html body h1 {
  color: rgb(187, 187, 187);
}

html body h2 {
  color: rgb(255, 255, 255);
}

html body h2.page-title, h2.page-title a {
  color: rgb(187, 187, 187);
}

html body h3 {
  color: rgb(255, 255, 255);
}

html body h4 {
  color: rgb(187, 187, 187);
}

html body h5 {
  color: rgb(187, 187, 187);
}

html body h6 {
  color: rgb(187, 187, 187);
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `html body footer {
  border-top-left-radius: 0px;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(187, 187, 187);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body ul.section-ul {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .page-header h2.page-title {
  color: rgb(187, 187, 187);
}

html body abbr {
  color: rgb(187, 187, 187);
  text-decoration: underline dotted rgb(187, 187, 187);
}

html body details {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body sub {
  color: rgb(187, 187, 187);
}

html body summary {
  color: rgb(187, 187, 187);
}

html body sup {
  color: rgb(187, 187, 187);
}`,
  },
  light: {},
};
