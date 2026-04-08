import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hojicha", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgba(240, 140, 58, 0.4) !important;
  --bases-cards-shadow: 0 0 0 1px rgba(240, 140, 58, 0.4) !important;
  --bases-embed-border-color: rgba(240, 140, 58, 0.4) !important;
  --bases-table-border-color: rgba(240, 140, 58, 0.4) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8bab85 !important;
  --bg: #161616 !important;
  --bg-black: #111111 !important;
  --bg-hard-accent: #333333 !important;
  --bg-light-accent: #1b1c1d !important;
  --blockquote-border: red !important;
  --blockquote-border-color: #8bab85 !important;
  --blue: #6e9bba !important;
  --blue-rgba: rgba(110, 155, 186, 0.4) !important;
  --border: rgba(240, 140, 58, 0.4) !important;
  --canvas-card-label-color: #696969 !important;
  --checkbox-border-color: #696969 !important;
  --checkbox-color: #8bab85 !important;
  --code-background: #161616 !important;
  --code-border-color: rgba(240, 140, 58, 0.4) !important;
  --code-comment: #696969 !important;
  --code-function: #939bd5 !important;
  --code-keyword: #a18b7f !important;
  --code-normal: #adacac !important;
  --code-operator: #9c797d !important;
  --code-property: #9c797d !important;
  --code-punctuation: #adacac !important;
  --code-string: #8a968f !important;
  --code-tag: #9e5560 !important;
  --code-value: #8a879c !important;
  --collapse-icon-color: #696969 !important;
  --dark-red: #9c797d !important;
  --dark-yellow: #969375 !important;
  --dark-yellow-rgba: rgba(150, 147, 117, 0.4) !important;
  --divider-color: rgba(240, 140, 58, 0.4) !important;
  --divider-color-hover: #8bab85 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(240, 140, 58, 0.4), inset 0 0 0 1px rgba(240, 140, 58, 0.4) !important;
  --embed-border-start: 2px solid #8bab85 !important;
  --faded-green: #8bab85 !important;
  --footnote-divider-color: rgba(240, 140, 58, 0.4) !important;
  --footnote-id-color-no-occurrences: #696969 !important;
  --graph-node-unresolved: #696969 !important;
  --gray: #696969 !important;
  --green: #859679 !important;
  --green-rgba: rgba(133, 150, 121, 0.4) !important;
  --h1: #859679 !important;
  --h2: #c99b53 !important;
  --h3: #a18b7f !important;
  --h4: #804043 !important;
  --h5: #6e9bba !important;
  --h6: #939bd5 !important;
  --heading-formatting: #696969 !important;
  --hr-color: rgba(240, 140, 58, 0.4) !important;
  --input-date-separator: #696969 !important;
  --input-placeholder-color: #696969 !important;
  --interactive-accent: #8bab85 !important;
  --light-blue: #c5f2ef !important;
  --light-blue-rgba: rgba(197, 242, 239, 0.4) !important;
  --list-marker-color: #696969 !important;
  --metadata-border-color: rgba(240, 140, 58, 0.4) !important;
  --metadata-divider-color: rgba(240, 140, 58, 0.4) !important;
  --nav-collapse-icon-color: #696969 !important;
  --nav-collapse-icon-color-collapsed: #696969 !important;
  --nav-heading-color-collapsed: #696969 !important;
  --nav-tag-color: #696969 !important;
  --orange: #a18b7f !important;
  --orange-rgba: rgba(240, 140, 58, 0.4) !important;
  --pdf-shadow: 0 0 0 1px rgba(240, 140, 58, 0.4) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(240, 140, 58, 0.4) !important;
  --pill-border-color: rgba(240, 140, 58, 0.4) !important;
  --pill-color-remove: #696969 !important;
  --pre-code: #111111 !important;
  --red: #804043 !important;
  --red-rgba: rgba(128, 64, 67, 0.4) !important;
  --secondary: #8bab85 !important;
  --setting-items-border-color: rgba(240, 140, 58, 0.4) !important;
  --slate-green: #8a968f !important;
  --slider-track-background: rgba(240, 140, 58, 0.4) !important;
  --status-bar-border-color: rgba(240, 140, 58, 0.4) !important;
  --tab-outline-color: rgba(240, 140, 58, 0.4) !important;
  --tab-text-color: #696969 !important;
  --table-add-button-border-color: rgba(240, 140, 58, 0.4) !important;
  --table-border-color: rgba(240, 140, 58, 0.4) !important;
  --table-drag-handle-background-active: #8bab85 !important;
  --table-drag-handle-color: #696969 !important;
  --table-header-border-color: rgba(240, 140, 58, 0.4) !important;
  --table-selection-border-color: #8bab85 !important;
  --text: #adacac !important;
  --text-a: #939bd5 !important;
  --text-a-hover: #a18b7f !important;
  --text-faint: #696969 !important;
  --text-link: #808796 !important;
  --text-mark: #969375 !important;
  --titlebar-border-color: rgba(240, 140, 58, 0.4) !important;
  --violet: #939bd5 !important;
  --violet-rgba: rgba(147, 155, 213, 0.4) !important;
  --yellow: #c99b53 !important;
  --yellow-rgba: rgba(201, 155, 83, 0.2) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(22, 22, 22);
}

html body .bases-table thead th {
  border-color: rgba(240, 140, 58, 0.4);
  font-weight: 800;
}

html body .canvas-node-file {
  color: rgb(173, 172, 172);
}

html body .note-properties {
  border-color: rgba(240, 140, 58, 0.4);
}

html body .note-properties-tags {
  border-radius: 26.25px;
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(22, 22, 22);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(240, 140, 58, 0.4);
}

html body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgba(240, 140, 58, 0.4);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(197, 242, 239);
  font-weight: 800;
  outline: rgb(197, 242, 239) none 0px;
  text-decoration-color: rgb(197, 242, 239);
}

html body .page article p > em, html em {
  color: rgb(184, 206, 206);
  outline: rgb(184, 206, 206) none 0px;
  text-decoration-color: rgb(184, 206, 206);
}

html body .page article p > i, html i {
  color: rgb(184, 206, 206);
  outline: rgb(184, 206, 206) none 0px;
  text-decoration-color: rgb(184, 206, 206);
}

html body .page article p > strong, html strong {
  color: rgb(197, 242, 239);
  font-weight: 800;
  outline: rgb(197, 242, 239) none 0px;
  text-decoration-color: rgb(197, 242, 239);
}

html body .text-highlight {
  background-color: rgb(150, 147, 117);
}

html body del {
  color: rgb(173, 172, 172);
  outline: rgb(173, 172, 172) none 0px;
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(105, 105, 105);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(139, 171, 133);
  border-color: rgb(139, 171, 133);
}`,
    links: `html body a.external, html footer a {
  color: rgb(147, 155, 213);
  outline: rgb(147, 155, 213) none 0px;
  text-decoration-color: rgb(147, 155, 213);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(147, 155, 213);
  outline: rgb(147, 155, 213) none 0px;
  text-decoration-color: rgb(147, 155, 213);
}

html body a.internal.broken {
  color: rgb(147, 155, 213);
  outline: rgb(147, 155, 213) none 0px;
  text-decoration-color: rgb(147, 155, 213);
}`,
    lists: `html body dd {
  color: rgb(173, 172, 172);
}

html body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html body dt {
  color: rgb(173, 172, 172);
}

html body ol > li {
  color: rgb(173, 172, 172);
}

html body ul > li {
  color: rgb(173, 172, 172);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(147, 155, 213);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

html body table {
  color: rgb(173, 172, 172);
}

html body tbody tr:nth-child(even) {
  background-color: rgb(51, 51, 51);
}

html body td {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  color: rgb(173, 172, 172);
}

html body th {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  font-weight: 800;
}

html body thead {
  background-color: rgb(105, 105, 105);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  border-bottom-color: rgba(240, 140, 58, 0.4);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
  color: rgb(173, 172, 172);
}

html body pre > code > [data-line] {
  border-left-color: rgb(147, 155, 213);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(147, 155, 213);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(147, 155, 213);
  border-left-color: rgb(147, 155, 213);
  border-right-color: rgb(147, 155, 213);
  border-top-color: rgb(147, 155, 213);
}

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

html body figcaption {
  color: rgb(173, 172, 172);
  font-size: 15px;
}

html body figure {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  margin-bottom: 15px;
  margin-top: 15px;
}

html body img {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

html body video {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
}

html body .transclude {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(139, 171, 133);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(105, 105, 105);
  border-left-color: rgb(105, 105, 105);
  border-right-color: rgb(105, 105, 105);
  border-top-color: rgb(105, 105, 105);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(173, 172, 172);
  text-decoration-color: rgb(173, 172, 172);
}`,
    callouts: `html body .callout[data-callout="info"] {
  background-color: rgba(240, 140, 58, 0.4);
}

html body .callout[data-callout="note"] {
  background-color: rgb(51, 51, 51);
}

html body .callout[data-callout="success"] {
  background-color: rgba(133, 150, 121, 0.4);
}

html body .callout[data-callout="tip"] {
  background-color: rgba(110, 155, 186, 0.4);
}

html body .callout[data-callout="warning"] {
  background-color: rgba(201, 155, 83, 0.2);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}

html body .search > .search-container > .search-space > * {
  color: rgb(173, 172, 172);
  outline: rgb(173, 172, 172) none 0px;
  text-decoration-color: rgb(173, 172, 172);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(173, 172, 172);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(173, 172, 172);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(173, 172, 172);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(173, 172, 172);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html body h1 {
  color: rgb(133, 150, 121);
}

html body h2 {
  color: rgb(201, 155, 83);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(173, 172, 172);
}

html body h3 {
  color: rgb(161, 139, 127);
}

html body h4 {
  color: rgb(128, 64, 67);
}

html body h5 {
  color: rgb(110, 155, 186);
}

html body h6 {
  color: rgb(147, 155, 213);
}

html body hr {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
}`,
    scrollbars: `html body .callout {
  padding-bottom: 0px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(133, 150, 121);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(133, 150, 121);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(173, 172, 172);
}`,
    footer: `html body footer {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(105, 105, 105);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
  color: rgb(173, 172, 172);
}

html body .metadata {
  border-bottom-color: rgba(240, 140, 58, 0.4);
  border-left-color: rgba(240, 140, 58, 0.4);
  border-right-color: rgba(240, 140, 58, 0.4);
  border-top-color: rgba(240, 140, 58, 0.4);
}

html body abbr {
  color: rgb(173, 172, 172);
}

html body details {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(173, 172, 172);
  border-left-color: rgb(173, 172, 172);
  border-right-color: rgb(173, 172, 172);
  border-top-color: rgb(173, 172, 172);
}

html body sub {
  color: rgb(173, 172, 172);
  font-size: 12.5px;
}

html body summary {
  color: rgb(173, 172, 172);
}

html body sup {
  color: rgb(173, 172, 172);
  font-size: 12.5px;
}

html body ul.tags > li {
  border-bottom-left-radius: 22.9688px;
  border-bottom-right-radius: 22.9688px;
  border-top-left-radius: 22.9688px;
  border-top-right-radius: 22.9688px;
  color: rgb(147, 155, 213);
}`,
  },
  light: {},
};
