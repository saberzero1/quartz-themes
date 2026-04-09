import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "firefly", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --color-editor-title-h1: #ff6fcd !important;
  --color-editor-title-h2: #FF6F91 !important;
  --color-editor-title-h3: #ffb86c !important;
  --color-editor-title-h4: #fff06c !important;
  --color-editor-title-h5: #c5e478 !important;
  --color-editor-title-h6: #c0cdf3 !important;
  --color-element-border: #0a0b0f !important;
  --color-element-border-light: #484e6d !important;
  --color-element-codeBlock: #0a0b0f !important;
  --color-element-icon: #adb9db !important;
  --color-element-icon-highlighted: #00B1F6 !important;
  --color-element-icon-hover: #ebeff7 !important;
  --color-element-markup-attribute: #95ff6f !important;
  --color-element-markup-attribute-value: #ebeff7 !important;
  --color-element-markup-tags: #FFC75F !important;
  --color-element-ordered-list-indicator: #ebeff7 !important;
  --color-element-unordered-list-indicator: #ebeff7 !important;
  --color-family-primary: Inter, sans-serif !important;
  --color-family-secondary: Jetbrains Mono, monospace !important;
  --color-lineheight-large: 2em !important;
  --color-lineheight-max: 2.5em !important;
  --color-lineheight-medium: 1.5em !important;
  --color-lineheight-min: 1em !important;
  --color-lineheight-regular: 1.75em !important;
  --color-lineheight-xtra-large: 2.25em !important;
  --color-primary-100: #676f9b !important;
  --color-primary-1000: #0a0b0f !important;
  --color-primary-1100: #050608 !important;
  --color-primary-200: #5d648c !important;
  --color-primary-300: #52597c !important;
  --color-primary-400: #484e6d !important;
  --color-primary-500: #3e435d !important;
  --color-primary-600: #34384e !important;
  --color-primary-700: #292c3e !important;
  --color-primary-800: #1f212f !important;
  --color-primary-900: #15161f !important;
  --color-size-2xtra-large: 1.5rem !important;
  --color-size-3xtra-large: 1.75rem !important;
  --color-size-4xtra-large: 2rem !important;
  --color-size-large: 1.15rem !important;
  --color-size-regular: 1rem !important;
  --color-size-small: 1rem !important;
  --color-size-xtra-large: 1.25rem !important;
  --color-size-xtra-small: 0.75rem !important;
  --color-text-code: #00C9A7 !important;
  --color-text-code-background: #050608 !important;
  --color-text-hash-tag: #95ff6f !important;
  --color-text-inline-code: #00C9A7 !important;
  --color-text-link: #6fa1ff !important;
  --color-text-linkUrl: #6fa1ff !important;
  --color-text-note-indicator: #FF6F91 !important;
  --color-text-paragraph: #c0cdf3 !important;
  --color-text-quote: #c0cdf3 !important;
  --color-text-quote-border: #FF6F91 !important;
  --color-text-quotes: #c0cdf3 !important;
  --color-text-strong: #ebeff7 !important;
  --color-title-h1: #ff6fcd !important;
  --color-title-h2: #FF6F91 !important;
  --color-title-h3: #ffb86c !important;
  --color-title-h4: #fff06c !important;
  --color-title-h5: #c5e478 !important;
  --color-title-h6: #c0cdf3 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body .bases-table {
  border-color: rgb(218, 218, 218);
}

html body .bases-table thead th {
  background-color: rgb(41, 44, 62);
  border-color: rgb(255, 184, 108);
  color: rgb(255, 184, 108);
}

html body .note-properties {
  border-color: rgb(179, 179, 179);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 22, 31);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgb(128, 128, 128);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(235, 239, 247);
  filter: drop-shadow(rgb(192, 205, 243) 0px 0px 3px);
  font-family: Inter, sans-serif;
  font-weight: 400;
  outline: rgb(235, 239, 247) none 0px;
  text-decoration-color: rgb(235, 239, 247);
}

html body .page article p > em, html em {
  color: rgb(192, 205, 243);
  font-family: Inter, sans-serif;
  outline: rgb(192, 205, 243) none 0px;
  text-decoration-color: rgb(192, 205, 243);
}

html body .page article p > i, html i {
  color: rgb(192, 205, 243);
  font-family: Inter, sans-serif;
  outline: rgb(192, 205, 243) none 0px;
  text-decoration-color: rgb(192, 205, 243);
}

html body .page article p > strong, html strong {
  color: rgb(235, 239, 247);
  filter: drop-shadow(rgb(192, 205, 243) 0px 0px 3px);
  font-family: Inter, sans-serif;
  font-weight: 400;
  outline: rgb(235, 239, 247) none 0px;
  text-decoration-color: rgb(235, 239, 247);
}

html body .text-highlight {
  font-family: Inter, sans-serif;
}

html body del {
  color: rgb(192, 205, 243);
  font-family: Inter, sans-serif;
  outline: rgb(192, 205, 243) none 0px;
  text-decoration-color: rgb(192, 205, 243);
}

html body h1.article-title {
  color: rgb(173, 185, 219);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-width: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  border-color: rgb(255, 255, 255);
}`,
    links: `html body a.external, html footer a {
  color: rgb(111, 161, 255);
  font-family: Inter, sans-serif;
  outline: rgb(111, 161, 255) none 0px;
  text-decoration-color: rgb(111, 161, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(111, 161, 255);
  font-family: Inter, sans-serif;
  outline: rgb(111, 161, 255) none 0px;
  text-decoration-color: rgb(111, 161, 255);
}

html body a.internal.broken {
  font-family: Inter, sans-serif;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body ol > li {
  color: rgb(192, 205, 243);
}

html body ul > li {
  color: rgb(192, 205, 243);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(111, 161, 255);
  text-decoration: underline;
}

html body blockquote {
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body table {
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

html body tbody tr:nth-child(even) {
  background-color: rgb(41, 44, 62);
}

html body td {
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

html body th {
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

html body thead {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html body tr {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}`,
    code: `html body code {
  border-bottom-color: rgb(0, 201, 167);
  border-left-color: rgb(0, 201, 167);
  border-right-color: rgb(0, 201, 167);
  border-top-color: rgb(0, 201, 167);
  color: rgb(0, 201, 167);
}

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body figcaption {
  color: rgb(192, 205, 243);
}

html body figure {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body img {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body video {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    embeds: `html body .transclude {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-left-width: 0px;
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    checkboxes: `html body input[type=checkbox] {
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

html body li.task-list-item[data-task='!'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(192, 205, 243);
  text-decoration-color: rgb(192, 205, 243);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
  border-right-color: rgb(218, 218, 218);
  border-right-width: 0px;
  border-top-color: rgb(218, 218, 218);
  border-top-width: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(218, 218, 218);
  border-bottom-width: 0px;
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-color: rgb(166, 138, 249);
  border-left-color: rgb(166, 138, 249);
  border-right-color: rgb(166, 138, 249);
  border-top-color: rgb(166, 138, 249);
}

html body h1 {
  color: rgb(255, 111, 205);
  font-family: Inter, sans-serif;
}

html body h2 {
  color: rgb(255, 111, 145);
  font-family: Inter, sans-serif;
}

html body h3 {
  color: rgb(255, 184, 108);
  font-family: Inter, sans-serif;
}

html body h4 {
  color: rgb(255, 240, 108);
  font-family: Inter, sans-serif;
}

html body h5 {
  color: rgb(197, 228, 120);
  font-family: Inter, sans-serif;
}

html body h6 {
  color: rgb(192, 205, 243);
  font-family: Inter, sans-serif;
}

html body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(218, 218, 218);
  border-left-width: 0px;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  cursor: pointer;
}`,
    footer: `html body footer {
  background-color: rgb(21, 22, 31);
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-left-width: 0px;
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
  border-top-width: 0px;
  color: rgb(192, 205, 243);
}

html body footer ul li a {
  color: rgb(192, 205, 243);
}`,
    recentNotes: `html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(173, 185, 219);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
}`,
    listPage: `html body li.section-li > .section .meta {
  color: rgb(173, 185, 219);
  font-family: Inter, sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(173, 185, 219);
}`,
    darkmode: `html body .darkmode {
  cursor: pointer;
}

html body .darkmode svg {
  color: rgb(173, 185, 219);
  stroke: rgb(173, 185, 219);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
  color: rgb(192, 205, 243);
}

html body .metadata {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html body .navigation-progress {
  background-color: rgb(21, 22, 31);
}

html body .page-header h2.page-title {
  color: rgb(173, 185, 219);
}

html body abbr {
  color: rgb(192, 205, 243);
}

html body progress {
  border-bottom-color: rgb(192, 205, 243);
  border-left-color: rgb(192, 205, 243);
  border-right-color: rgb(192, 205, 243);
  border-top-color: rgb(192, 205, 243);
}

html body sub {
  color: rgb(192, 205, 243);
}

html body sup {
  color: rgb(192, 205, 243);
}

html body ul.tags > li {
  border-bottom-color: rgb(111, 161, 255);
  border-left-color: rgb(111, 161, 255);
  border-right-color: rgb(111, 161, 255);
  border-top-color: rgb(111, 161, 255);
  color: rgb(111, 161, 255);
}`,
  },
  light: {},
};
