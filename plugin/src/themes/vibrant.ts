import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "vibrant", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-color-borders: #FFFFFF;
  --accent-color-text: #FFFF00;
  --accent-color-text-inverted: #000000;
  --background-fourth: #2C2C2C;
  --background-primary: #222222;
  --background-secondary: #333333;
  --background-third: #444444;
  --bases-cards-background: #222222;
  --bases-table-cell-background-active: #222222;
  --bases-table-header-background: #222222;
  --bases-table-summary-background: #222222;
  --canvas-background: #222222;
  --caret-color: #FFFFFF;
  --checkbox-marker-color: #222222;
  --code-normal: #FFFFFF;
  --color-icon: #FFFFFF;
  --file-header-background: #222222;
  --file-header-background-focused: #222222;
  --flair-color: #FFFFFF;
  --graph-text: #FFFFFF;
  --gray-color: #585858;
  --icon-color-focused: #FFFFFF;
  --menu-background: #333333;
  --metadata-input-text-color: #FFFFFF;
  --modal-background: #222222;
  --nav-heading-color: #FFFFFF;
  --nav-heading-color-hover: #FFFFFF;
  --nav-item-color-active: #FFFFFF;
  --nav-item-color-hover: #FFFFFF;
  --nav-item-color-selected: #FFFFFF;
  --pdf-background: #222222;
  --pdf-page-background: #222222;
  --pdf-sidebar-background: #222222;
  --pdf-title-h1: #810000;
  --pdf-title-h2: #008100;
  --pdf-title-h3: #1d00c0;
  --pdf-title-h4: #008181;
  --pdf-title-h5: #915e00;
  --pdf-title-h6: #6c00be;
  --pill-color-hover: #FFFFFF;
  --prompt-background: #222222;
  --ribbon-background: #333333;
  --ribbon-background-collapsed: #222222;
  --search-result-background: #222222;
  --setting-group-heading-color: #FFFFFF;
  --status-bar-background: #333333;
  --suggestion-background: #222222;
  --tab-background-active: #222222;
  --tab-container-background: #333333;
  --tab-switcher-background: #333333;
  --tab-switcher-menubar-background: linear-gradient(to top, #333333, transparent);
  --tab-text-color-focused-active-current: #FFFFFF;
  --table-header-color: #FFFFFF;
  --text-bold: #FF0000;
  --text-highlight: #FFFF00;
  --text-italics: #00FFFF;
  --text-link: #00FF00;
  --text-normal: #FFFFFF;
  --text-strikethrough: #FF00FF;
  --text-title-h1: #FF0000;
  --text-title-h2: #00FF00;
  --text-title-h3: #FFFF00;
  --text-title-h4: #00FFFF;
  --text-title-h5: #FFA500;
  --text-title-h6: #FF00AA;
  --titlebar-background: #333333;
  --titlebar-text-color-focused: #FFFFFF;
  --vault-profile-color: #FFFFFF;
  --vault-profile-color-hover: #FFFFFF;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 51, 51);
  color: rgb(34, 34, 34);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 51, 51);
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

body .page article p > i, i {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 0);
  outline: rgb(255, 255, 0) none 0px;
  text-decoration: rgb(255, 255, 0);
  text-decoration-color: rgb(255, 255, 0);
}

body del {
  color: rgb(255, 0, 255);
  outline: rgb(255, 0, 255) none 0px;
  text-decoration: rgb(255, 0, 255);
  text-decoration-color: rgb(255, 0, 255);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

body a.internal.broken {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
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
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(250, 128, 114);
  text-decoration: rgb(250, 128, 114);
}`,
    tables: `body .spacer {
  background-color: rgb(34, 34, 34);
}

body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  width: 231.219px;
}

body td {
  color: rgb(255, 255, 255);
}

body th {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(88, 88, 88);
  border-bottom-width: 3px;
  border-left-color: rgb(88, 88, 88);
  border-left-width: 3px;
  border-right-color: rgb(88, 88, 88);
  border-right-width: 3px;
  border-top-color: rgb(88, 88, 88);
  border-top-width: 3px;
  color: rgb(255, 255, 0);
}`,
    code: `body code {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 68, 68);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(68, 68, 68);
}

body pre:has(> code) {
  background-color: rgb(68, 68, 68);
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
    embeds: `body .footnotes {
  border-top-color: rgb(250, 128, 114);
  color: rgb(250, 128, 114);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  transition: 0.3s;
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
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(65, 135, 255);
  border-left-color: rgb(65, 135, 255);
  border-right-color: rgb(65, 135, 255);
  border-top-color: rgb(65, 135, 255);
}

body .callout[data-callout="abstract"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(157, 225, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(157, 225, 255);
  border-left-width: 2px;
  border-right-color: rgb(157, 225, 255);
  border-right-width: 2px;
  border-top-color: rgb(157, 225, 255);
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 93);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 93);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 93);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 93);
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 51);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 51);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 51);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 51);
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(158, 119, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(158, 119, 255);
  border-left-width: 2px;
  border-right-color: rgb(158, 119, 255);
  border-right-width: 2px;
  border-top-color: rgb(158, 119, 255);
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 0);
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 221, 255);
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(65, 135, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 135, 255);
  border-left-width: 2px;
  border-right-color: rgb(65, 135, 255);
  border-right-width: 2px;
  border-top-color: rgb(65, 135, 255);
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(98, 255, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(98, 255, 0);
  border-left-width: 2px;
  border-right-color: rgb(98, 255, 0);
  border-right-width: 2px;
  border-top-color: rgb(98, 255, 0);
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 255, 98);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 98);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 98);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 98);
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 255, 229);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 229);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 229);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 229);
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 221, 255);
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 149, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 149, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 149, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 149, 0);
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
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

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 2px;
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

body h1 {
  color: rgb(255, 0, 0);
}

body h2 {
  color: rgb(0, 255, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h3 {
  color: rgb(255, 255, 0);
}

body h4 {
  color: rgb(0, 255, 255);
}

body h5 {
  color: rgb(255, 165, 0);
}

body h6 {
  color: rgb(255, 0, 170);
}

body hr {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(65, 135, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 135, 255);
  border-left-width: 2px;
  border-right-color: rgb(65, 135, 255);
  border-right-width: 2px;
  border-top-color: rgb(65, 135, 255);
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(34, 34, 34);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

body ul.section-ul {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .breadcrumb-element p {
  color: rgb(255, 255, 255);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 7.55906px;
  border-bottom-right-radius: 7.55906px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(51, 51, 51);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(51, 51, 51);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 7.55906px;
  border-top-right-radius: 7.55906px;
  border-top-style: solid;
  border-top-width: 2px;
}

body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 0);
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
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
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
  light: {},
};
