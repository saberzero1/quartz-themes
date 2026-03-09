import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "firefly", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --color-editor-title-h1: #ff6fcd;
  --color-editor-title-h2: #FF6F91;
  --color-editor-title-h3: #ffb86c;
  --color-editor-title-h4: #fff06c;
  --color-editor-title-h5: #c5e478;
  --color-editor-title-h6: #c0cdf3;
  --color-element-border: #0a0b0f;
  --color-element-border-light: #484e6d;
  --color-element-codeBlock: #0a0b0f;
  --color-element-icon: #adb9db;
  --color-element-icon-highlighted: #00B1F6;
  --color-element-icon-hover: #ebeff7;
  --color-element-markup-attribute: #95ff6f;
  --color-element-markup-attribute-value: #ebeff7;
  --color-element-markup-tags: #FFC75F;
  --color-element-ordered-list-indicator: #ebeff7;
  --color-element-unordered-list-indicator: #ebeff7;
  --color-family-primary: Inter, sans-serif;
  --color-family-secondary: Jetbrains Mono, monospace;
  --color-lineheight-large: 2em;
  --color-lineheight-max: 2.5em;
  --color-lineheight-medium: 1.5em;
  --color-lineheight-min: 1em;
  --color-lineheight-regular: 1.75em;
  --color-lineheight-xtra-large: 2.25em;
  --color-primary-100: #676f9b;
  --color-primary-1000: #0a0b0f;
  --color-primary-1100: #050608;
  --color-primary-200: #5d648c;
  --color-primary-300: #52597c;
  --color-primary-400: #484e6d;
  --color-primary-500: #3e435d;
  --color-primary-600: #34384e;
  --color-primary-700: #292c3e;
  --color-primary-800: #1f212f;
  --color-primary-900: #15161f;
  --color-size-2xtra-large: 1.5rem;
  --color-size-3xtra-large: 1.75rem;
  --color-size-4xtra-large: 2rem;
  --color-size-large: 1.15rem;
  --color-size-regular: 1rem;
  --color-size-small: 1rem;
  --color-size-xtra-large: 1.25rem;
  --color-size-xtra-small: 0.75rem;
  --color-text-code: #00C9A7;
  --color-text-code-background: #050608;
  --color-text-hash-tag: #95ff6f;
  --color-text-inline-code: #00C9A7;
  --color-text-link: #6fa1ff;
  --color-text-linkUrl: #6fa1ff;
  --color-text-note-indicator: #FF6F91;
  --color-text-paragraph: #c0cdf3;
  --color-text-quote: #c0cdf3;
  --color-text-quote-border: #FF6F91;
  --color-text-quotes: #c0cdf3;
  --color-text-strong: #ebeff7;
  --color-title-h1: #ff6fcd;
  --color-title-h2: #FF6F91;
  --color-title-h3: #ffb86c;
  --color-title-h4: #fff06c;
  --color-title-h5: #c5e478;
  --color-title-h6: #c0cdf3;
  --quartz-icon-color: currentColor;
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 22, 31);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(128, 128, 128);
}`,
    typography: `body .page article p > b, b {
  color: rgb(192, 205, 243);
  filter: drop-shadow(rgb(192, 205, 243) 0px 0px 3px);
  outline: rgb(192, 205, 243) none 0px;
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body .page article p > em, em {
  color: rgb(192, 205, 243);
  font-weight: 500;
  outline: rgb(192, 205, 243) none 0px;
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body .page article p > i, i {
  color: rgb(192, 205, 243);
  font-weight: 500;
  outline: rgb(192, 205, 243) none 0px;
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body .page article p > strong, strong {
  color: rgb(192, 205, 243);
  filter: drop-shadow(rgb(192, 205, 243) 0px 0px 3px);
  outline: rgb(192, 205, 243) none 0px;
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body .text-highlight {
  font-weight: 500;
}

body del {
  color: rgb(192, 205, 243);
  font-weight: 500;
  outline: rgb(192, 205, 243) none 0px;
  text-decoration: line-through rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}`,
    links: `body a.external, footer a {
  color: rgb(111, 161, 255);
  font-family: Inter, sans-serif;
  outline: rgb(111, 161, 255) none 0px;
  text-decoration: underline rgb(111, 161, 255);
  text-decoration-color: rgb(111, 161, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(111, 161, 255);
  font-family: Inter, sans-serif;
  outline: rgb(111, 161, 255) none 0px;
  text-decoration: rgb(111, 161, 255);
  text-decoration-color: rgb(111, 161, 255);
}

body a.internal.broken {
  font-family: Inter, sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body ol > li {
  color: rgb(192, 205, 243);
}

body ol.overflow {
  background-color: rgb(31, 33, 47);
}

body ul > li {
  color: rgb(192, 205, 243);
}

body ul.overflow {
  background-color: rgb(31, 33, 47);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(111, 161, 255);
  text-decoration: underline rgb(111, 161, 255);
}

body blockquote {
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body table {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 904px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(41, 44, 62);
}

body td {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 20px;
  border-top-width: 0px;
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
}

body th {
  background-color: rgb(41, 44, 62);
  border-bottom-color: rgb(255, 184, 108);
  border-bottom-left-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 184, 108);
  border-left-width: 0px;
  border-right-color: rgb(255, 184, 108);
  border-right-width: 0px;
  border-top-color: rgb(255, 184, 108);
  border-top-left-radius: 20px;
  border-top-width: 0px;
  color: rgb(255, 184, 108);
  padding-bottom: 10px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 10px;
}

body thead {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body tr {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 201, 167);
  border-left-color: rgb(0, 201, 167);
  border-right-color: rgb(0, 201, 167);
  border-top-color: rgb(0, 201, 167);
  color: rgb(0, 201, 167);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(5, 6, 8);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(5, 6, 8);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "Jetbrains Mono", monospace;
}

body pre > code, pre:has(> code) {
  background-color: rgb(5, 6, 8);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

body pre:has(> code) {
  background-color: rgb(5, 6, 8);
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `body audio {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body figcaption {
  color: rgb(192, 205, 243);
}

body figure {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body img {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body video {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    embeds: `body .transclude {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-left-width: 0px;
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .transclude-inner {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-left-width: 0px;
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body input[type=checkbox] {
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
  margin-left: 10px;
  margin-right: 0px;
  width: 22px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='*'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='-'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='/'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='>'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='?'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='I'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='S'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='b'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='c'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='d'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='f'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='i'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='k'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='l'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='p'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='u'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

body li.task-list-item[data-task='w'] {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="question"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

body .callout[data-callout="success"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-color: rgb(166, 138, 249);
  border-left-color: rgb(166, 138, 249);
  border-right-color: rgb(166, 138, 249);
  border-top-color: rgb(166, 138, 249);
}

body h1 {
  color: rgb(255, 111, 205);
  font-family: Inter, sans-serif;
}

body h2 {
  color: rgb(255, 111, 145);
  font-family: Inter, sans-serif;
}

body h3 {
  color: rgb(255, 184, 108);
  font-family: Inter, sans-serif;
}

body h4 {
  color: rgb(255, 240, 108);
  font-family: Inter, sans-serif;
}

body h5 {
  color: rgb(197, 228, 120);
  font-family: Inter, sans-serif;
}

body h6 {
  color: rgb(192, 205, 243);
  font-family: Inter, sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
  text-decoration: rgb(173, 185, 219);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
  text-decoration: rgb(173, 185, 219);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
  text-decoration: rgb(173, 185, 219);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(93, 100, 140);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(21, 22, 31);
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-left-width: 0px;
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
  border-top-width: 0px;
  color: rgb(192, 205, 243);
}

body footer ul li a {
  color: rgb(192, 205, 243);
  text-decoration: rgb(192, 205, 243);
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(173, 185, 219);
  text-decoration: rgb(173, 185, 219);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(173, 185, 219);
  text-decoration: rgb(173, 185, 219);
}`,
    darkmode: `body .darkmode {
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(173, 185, 219);
  stroke: rgb(173, 185, 219);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
  color: rgb(192, 205, 243);
}

body .metadata {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body .navigation-progress {
  background-color: rgb(21, 22, 31);
}

body .page-header h2.page-title {
  color: rgb(173, 185, 219);
}

body abbr {
  color: rgb(192, 205, 243);
  text-decoration: underline dotted rgb(192, 205, 243);
}

body progress {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

body sub {
  color: rgb(192, 205, 243);
}

body sup {
  color: rgb(192, 205, 243);
}`,
  },
  light: {},
};
