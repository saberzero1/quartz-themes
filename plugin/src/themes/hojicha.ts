import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hojicha", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgba(240, 140, 58, 0.4);
  --bases-cards-shadow: 0 0 0 1px rgba(240, 140, 58, 0.4);
  --bases-embed-border-color: rgba(240, 140, 58, 0.4);
  --bases-table-border-color: rgba(240, 140, 58, 0.4);
  --bases-table-cell-shadow-focus: 0 0 0 2px #8bab85;
  --bg: #161616;
  --bg-black: #111111;
  --bg-hard-accent: #333333;
  --bg-light-accent: #1b1c1d;
  --blockquote-border: red;
  --blockquote-border-color: #8bab85;
  --blue: #6e9bba;
  --blue-rgba: rgba(110, 155, 186, 0.4);
  --border: rgba(240, 140, 58, 0.4);
  --canvas-card-label-color: #696969;
  --checkbox-border-color: #696969;
  --checkbox-color: #8bab85;
  --code-background: #161616;
  --code-border-color: rgba(240, 140, 58, 0.4);
  --code-comment: #696969;
  --code-function: #939bd5;
  --code-keyword: #a18b7f;
  --code-normal: #adacac;
  --code-operator: #9c797d;
  --code-property: #9c797d;
  --code-punctuation: #adacac;
  --code-string: #8a968f;
  --code-tag: #9e5560;
  --code-value: #8a879c;
  --collapse-icon-color: #696969;
  --dark-red: #9c797d;
  --dark-yellow: #969375;
  --dark-yellow-rgba: rgba(150, 147, 117, 0.4);
  --divider-color: rgba(240, 140, 58, 0.4);
  --divider-color-hover: #8bab85;
  --embed-block-shadow-hover: 0 0 0 1px rgba(240, 140, 58, 0.4), inset 0 0 0 1px rgba(240, 140, 58, 0.4);
  --embed-border-start: 2px solid #8bab85;
  --faded-green: #8bab85;
  --footnote-divider-color: rgba(240, 140, 58, 0.4);
  --footnote-id-color-no-occurrences: #696969;
  --graph-node-unresolved: #696969;
  --gray: var(--text-faint);
  --green: #859679;
  --green-rgba: rgba(133, 150, 121, 0.4);
  --h1: #859679;
  --h2: #c99b53;
  --h3: #a18b7f;
  --h4: #804043;
  --h5: #6e9bba;
  --h6: #939bd5;
  --heading-formatting: #696969;
  --hr-color: rgba(240, 140, 58, 0.4);
  --input-date-separator: #696969;
  --input-placeholder-color: #696969;
  --interactive-accent: #8bab85;
  --light-blue: #c5f2ef;
  --light-blue-rgba: rgba(197, 242, 239, 0.4);
  --list-marker-color: #696969;
  --metadata-border-color: rgba(240, 140, 58, 0.4);
  --metadata-divider-color: rgba(240, 140, 58, 0.4);
  --nav-collapse-icon-color: #696969;
  --nav-collapse-icon-color-collapsed: #696969;
  --nav-heading-color-collapsed: #696969;
  --nav-tag-color: #696969;
  --orange: #a18b7f;
  --orange-rgba: rgba(240, 140, 58, 0.4);
  --pdf-shadow: 0 0 0 1px rgba(240, 140, 58, 0.4);
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(240, 140, 58, 0.4);
  --pill-border-color: rgba(240, 140, 58, 0.4);
  --pill-color-remove: #696969;
  --pre-code: #111111;
  --red: #804043;
  --red-rgba: rgba(128, 64, 67, 0.4);
  --secondary: var(--interactive-accent);
  --setting-items-border-color: rgba(240, 140, 58, 0.4);
  --slate-green: #8a968f;
  --slider-track-background: rgba(240, 140, 58, 0.4);
  --status-bar-border-color: rgba(240, 140, 58, 0.4);
  --tab-outline-color: rgba(240, 140, 58, 0.4);
  --tab-text-color: #696969;
  --table-add-button-border-color: rgba(240, 140, 58, 0.4);
  --table-border-color: rgba(240, 140, 58, 0.4);
  --table-drag-handle-background-active: #8bab85;
  --table-drag-handle-color: #696969;
  --table-header-border-color: rgba(240, 140, 58, 0.4);
  --table-selection-border-color: #8bab85;
  --text: #adacac;
  --text-a: #939bd5;
  --text-a-hover: #a18b7f;
  --text-faint: #696969;
  --text-link: #808796;
  --text-mark: #969375;
  --titlebar-border-color: rgba(240, 140, 58, 0.4);
  --violet: #939bd5;
  --violet-rgba: rgba(147, 155, 213, 0.4);
  --yellow: #c99b53;
  --yellow-rgba: rgba(201, 155, 83, 0.2);
  --quartz-icon-color: currentColor;
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(240, 140, 58, 0.4);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgba(240, 140, 58, 0.4);
}`,
    typography: `body .page article p > b, b {
  color: rgb(197, 242, 239);
  font-weight: 800;
  outline: rgb(197, 242, 239) none 0px;
  text-decoration: rgb(197, 242, 239);
  text-decoration-color: rgb(197, 242, 239);
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
  color: rgb(197, 242, 239);
  font-weight: 800;
  outline: rgb(197, 242, 239) none 0px;
  text-decoration: rgb(197, 242, 239);
  text-decoration-color: rgb(197, 242, 239);
}

body .text-highlight {
  background-color: rgb(150, 147, 117);
}

body del {
  color: rgb(173, 172, 172);
  outline: rgb(173, 172, 172) none 0px;
  text-decoration: line-through rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}`,
    links: `body a.external, footer a {
  color: rgb(147, 155, 213);
  outline: rgb(147, 155, 213) none 0px;
  text-decoration: rgb(147, 155, 213);
  text-decoration-color: rgb(147, 155, 213);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(147, 155, 213);
  outline: rgb(147, 155, 213) none 0px;
  text-decoration: rgb(147, 155, 213);
  text-decoration-color: rgb(147, 155, 213);
}

body a.internal.broken {
  color: rgb(147, 155, 213);
  outline: rgb(147, 155, 213) none 0px;
  text-decoration: rgb(147, 155, 213);
  text-decoration-color: rgb(147, 155, 213);
}`,
    lists: `body dd {
  color: rgb(173, 172, 172);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(173, 172, 172);
}

body ol > li {
  color: rgb(173, 172, 172);
}

body ul > li {
  color: rgb(173, 172, 172);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(147, 155, 213);
  text-decoration: rgb(147, 155, 213);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

body table {
  color: rgb(173, 172, 172);
}

body tbody tr:nth-child(even) {
  background-color: rgb(51, 51, 51);
}

body td {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  color: rgb(173, 172, 172);
}

body th {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  font-weight: 800;
}

body thead {
  background-color: rgb(105, 105, 105);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  border-bottom-color: rgba(240, 140, 58, 0.4);
}`,
    code: `body code {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(179, 179, 179);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(179, 179, 179);
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  color: rgb(173, 172, 172);
}

body pre > code > [data-line] {
  border-left-color: rgb(147, 155, 213);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(147, 155, 213);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(147, 155, 213);
  border-left-color: rgb(147, 155, 213);
  border-right-color: rgb(147, 155, 213);
  border-top-color: rgb(147, 155, 213);
}

body pre > code, pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

body figcaption {
  color: rgb(173, 172, 172);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

body video {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
}

body .transclude {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(139, 171, 133);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(139, 171, 133);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(105, 105, 105);
  border-left-color: rgb(105, 105, 105);
  border-right-color: rgb(105, 105, 105);
  border-top-color: rgb(105, 105, 105);
}

body li.task-list-item[data-task='!'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='*'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='-'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='/'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='>'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='?'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='I'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='S'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='b'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='c'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='d'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='f'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='i'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='k'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='l'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='p'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='u'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body li.task-list-item[data-task='w'] {
  color: rgb(173, 172, 172);
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}`,
    callouts: `body .callout[data-callout="info"] {
  background-color: rgba(240, 140, 58, 0.4);
}

body .callout[data-callout="note"] {
  background-color: rgb(51, 51, 51);
}

body .callout[data-callout="success"] {
  background-color: rgba(133, 150, 121, 0.4);
}

body .callout[data-callout="tip"] {
  background-color: rgba(110, 155, 186, 0.4);
}

body .callout[data-callout="warning"] {
  background-color: rgba(201, 155, 83, 0.2);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}

body .search > .search-container > .search-space > * {
  color: rgb(173, 172, 172);
  outline: rgb(173, 172, 172) none 0px;
  text-decoration: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(173, 172, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(173, 172, 172);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(173, 172, 172);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(173, 172, 172);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body h1 {
  color: rgb(133, 150, 121);
}

body h2 {
  color: rgb(201, 155, 83);
}

body h2.page-title, h2.page-title a {
  color: rgb(173, 172, 172);
}

body h3 {
  color: rgb(161, 139, 127);
}

body h4 {
  color: rgb(128, 64, 67);
}

body h5 {
  color: rgb(110, 155, 186);
}

body h6 {
  color: rgb(147, 155, 213);
}

body hr {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
}`,
    scrollbars: `body .callout {
  padding-bottom: 0px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(133, 150, 121);
  text-decoration: rgb(133, 150, 121);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(133, 150, 121);
  text-decoration: rgb(133, 150, 121);
}`,
    footer: `body footer {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(105, 105, 105);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
}

body .metadata {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}

body abbr {
  color: rgb(173, 172, 172);
  text-decoration: underline dotted rgb(173, 172, 172);
}

body details {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

body kbd {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

body sub {
  color: rgb(173, 172, 172);
  font-size: 12.5px;
}

body summary {
  color: rgb(173, 172, 172);
}

body sup {
  color: rgb(173, 172, 172);
  font-size: 12.5px;
}`,
  },
  light: {},
};
