import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nebula",
    modes: ["dark"],
    variations: [],
    fonts: ["montserrat"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-cover: rgb(0 0 0 / 70%) !important;
  --background-primary: #07053500 !important;
  --background-primary-alt: #06094059 !important;
  --background-secondary: #07053500 !important;
  --background-secondary-alt: #06094059 !important;
  --bases-cards-background: #07053500 !important;
  --bases-cards-cover-background: #06094059 !important;
  --bases-group-heading-property-color: #efd1d1 !important;
  --bases-table-cell-background-active: #07053500 !important;
  --bases-table-cell-background-disabled: #06094059 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b44949 !important;
  --bases-table-group-background: #06094059 !important;
  --bases-table-header-background: #07053500 !important;
  --bases-table-header-color: #efd1d1 !important;
  --bases-table-summary-background: #07053500 !important;
  --bgcolor: #07053500 !important;
  --blockquote-border-color: #b44949 !important;
  --canvas-background: #07053500 !important;
  --caret-color: #ffffffdd !important;
  --checkbox-border-color-hover: #efd1d1 !important;
  --checkbox-color: #b44949 !important;
  --checkbox-marker-color: #07053500 !important;
  --checklist-done-color: #efd1d1 !important;
  --code-background: #06094059 !important;
  --code-normal: #ffffffdd !important;
  --code-punctuation: #efd1d1 !important;
  --dark: #ffffffdd !important;
  --darkgray: #ffffffdd !important;
  --divider-color-hover: #b44949 !important;
  --embed-border-start: 2px solid #b44949 !important;
  --file-header-background: #07053500 !important;
  --file-header-background-focused: #07053500 !important;
  --flair-color: #ffffffdd !important;
  --footnote-id-color: #efd1d1 !important;
  --graph-node: #efd1d1 !important;
  --graph-text: #ffffffdd !important;
  --gray: #efd1d1 !important;
  --highlight: #c9e7aba3 !important;
  --icon-color: #efd1d1 !important;
  --icon-color-focused: #ffffffdd !important;
  --icon-color-hover: #efd1d1 !important;
  --interactive-accent: #b44949 !important;
  --light: #07053500 !important;
  --lightgray: #07053500 !important;
  --list-marker-color: #ffd7d7 !important;
  --list-marker-color-hover: #efd1d1 !important;
  --menu-background: #07053500 !important;
  --metadata-input-text-color: #ffffffdd !important;
  --metadata-label-text-color: #efd1d1 !important;
  --metadata-label-text-color-hover: #efd1d1 !important;
  --modal-background: #07053500 !important;
  --mono-font: "Source Code Pro", "Consolas", monospace !important;
  --nav-heading-color: #ffffffdd !important;
  --nav-heading-color-collapsed-hover: #efd1d1 !important;
  --nav-heading-color-hover: #ffffffdd !important;
  --nav-item-color: #efd1d1 !important;
  --nav-item-color-active: #ffffffdd !important;
  --nav-item-color-hover: #ffffffdd !important;
  --nav-item-color-selected: #ffffffdd !important;
  --nav-tag-color-active: #efd1d1 !important;
  --nav-tag-color-hover: #efd1d1 !important;
  --nice-font: "Myuppy", "Montserrat", "Roboto", "Segoe Print", sans-serif !important;
  --overlay-bg: #101f618a !important;
  --pdf-background: #07053500 !important;
  --pdf-page-background: #07053500 !important;
  --pdf-sidebar-background: #07053500 !important;
  --pill-color: #efd1d1 !important;
  --pill-color-hover: #ffffffdd !important;
  --prompt-background: #07053500 !important;
  --ribbon-background: #07053500 !important;
  --ribbon-background-collapsed: #07053500 !important;
  --search-clear-button-color: #efd1d1 !important;
  --search-icon-color: #efd1d1 !important;
  --search-result-background: #07053500 !important;
  --secondary: #b44949 !important;
  --setting-group-heading-color: #ffffffdd !important;
  --setting-items-background: #06094059 !important;
  --settings-blue: #7772d76e !important;
  --settings-red: #d0535375 !important;
  --settings-red-light: #b44949 !important;
  --status-bar-background: #07053500 !important;
  --status-bar-text-color: #efd1d1 !important;
  --suggestion-background: #07053500 !important;
  --tab-background-active: #07053500 !important;
  --tab-container-background: #07053500 !important;
  --tab-switcher-background: #07053500 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #07053500, transparent) !important;
  --tab-text-color-active: #efd1d1 !important;
  --tab-text-color-focused: #efd1d1 !important;
  --tab-text-color-focused-active: #efd1d1 !important;
  --tab-text-color-focused-active-current: #ffffffdd !important;
  --table-drag-handle-background-active: #b44949 !important;
  --table-header-color: #ffffffdd !important;
  --table-selection-border-color: #b44949 !important;
  --text-highlight-bg: #c9e7aba3 !important;
  --text-muted: #efd1d1 !important;
  --text-normal: #ffffffdd !important;
  --text-selection: #97a5f954 !important;
  --textHighlight: #c9e7aba3 !important;
  --titlebar-background: #07053500 !important;
  --titlebar-background-focused: #06094059 !important;
  --titlebar-text-color: #efd1d1 !important;
  --titlebar-text-color-focused: #ffffffdd !important;
  --vault-profile-color: #ffffffdd !important;
  --vault-profile-color-hover: #ffffffdd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgba(255, 255, 255, 0.867);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}

body div#quartz-root {
  background-color: rgba(7, 5, 53, 0);
  color: rgba(255, 255, 255, 0.867);
}`,
    typography: `body .page article p > b, b {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body .page article p > em, em {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body .page article p > i, i {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body .page article p > strong, strong {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body .text-highlight {
  background-color: rgba(201, 231, 171, 0.64);
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body del {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: line-through rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body p {
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(239, 209, 209) none 0px;
  text-decoration: rgb(239, 209, 209);
  text-decoration-color: rgb(239, 209, 209);
}`,
    links: `body a.external, footer a {
  color: rgb(137, 192, 251);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(137, 192, 251) none 0px;
  text-decoration: rgb(137, 192, 251);
  text-decoration-color: rgb(137, 192, 251);
  transition: color 0.15s ease-out;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(137, 192, 251);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(137, 192, 251) none 0px;
  text-decoration: rgb(137, 192, 251);
  text-decoration-color: rgb(137, 192, 251);
}

body a.internal.broken {
  color: rgb(137, 192, 251);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgb(137, 192, 251) none 0px;
  text-decoration: rgb(137, 192, 251);
  text-decoration-color: rgb(137, 192, 251);
}`,
    lists: `body dd {
  color: rgba(255, 255, 255, 0.867);
}

body dl {
  margin-bottom: 20px;
  margin-top: 20px;
}

body dt {
  color: rgba(255, 255, 255, 0.867);
}

body ol > li {
  color: rgba(255, 255, 255, 0.867);
}

body ol.overflow {
  background-color: rgba(7, 5, 53, 0);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body ul > li {
  color: rgba(255, 255, 255, 0.867);
}

body ul.overflow {
  background-color: rgba(7, 5, 53, 0);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(137, 192, 251);
  text-decoration: rgb(137, 192, 251);
}

body blockquote {
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body table {
  background-color: rgba(255, 255, 255, 0.24);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  width: 196.062px;
}

body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-width: 2px;
  color: rgba(255, 255, 255, 0.867);
}

body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  color: rgba(255, 255, 255, 0.867);
}`,
    code: `body code {
  border-bottom-color: rgb(233, 234, 255);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgb(233, 234, 255);
  border-right-color: rgb(233, 234, 255);
  border-top-color: rgb(233, 234, 255);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
  color: rgb(233, 234, 255);
  font-family: "Source Code Pro", Consolas, monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(6, 9, 64, 0.35);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(6, 9, 64, 0.35);
  color: rgba(255, 255, 255, 0.867);
}

body pre > code, pre:has(> code) {
  background-color: rgba(6, 9, 64, 0.35);
}

body pre:has(> code) {
  background-color: rgba(6, 9, 64, 0.35);
}`,
    images: `body audio {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body figcaption {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body figure {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body img {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-radius: 15px;
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
}

body video {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    embeds: `body .file-embed {
  background-color: rgba(6, 9, 64, 0.35);
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
}

body .footnotes {
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
}

body .transclude {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgb(180, 73, 73);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body .transclude-inner {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgb(180, 73, 73);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: line-through rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body input[type=checkbox] {
  border-bottom-color: rgb(93, 118, 156);
  border-bottom-width: 3px;
  border-left-color: rgb(93, 118, 156);
  border-left-width: 3px;
  border-right-color: rgb(93, 118, 156);
  border-right-width: 3px;
  border-top-color: rgb(93, 118, 156);
  border-top-width: 3px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='*'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='-'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='/'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='>'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='?'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='I'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='S'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='b'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='c'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='d'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='f'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='i'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='k'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='l'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='p'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='u'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body li.task-list-item[data-task='w'] {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}`,
    search: `body .search > .search-button {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgba(16, 31, 97, 0.54);
}

body .search > .search-container > .search-space > * {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  outline: rgba(255, 255, 255, 0.867) none 0px;
  text-decoration: rgba(255, 255, 255, 0.867);
  text-decoration-color: rgba(255, 255, 255, 0.867);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 255, 255, 0.867);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(255, 255, 255, 0.867);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(221, 81, 81, 0.6);
  color: rgba(255, 255, 255, 0.867);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(7, 5, 53, 0);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(221, 81, 81, 0.6);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(255, 255, 255, 0.867);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(221, 81, 81, 0.6);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgba(255, 255, 255, 0.867);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 35px;
  border-bottom-right-radius: 35px;
  border-top-left-radius: 35px;
  border-top-right-radius: 35px;
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body h2 {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body h3 {
  color: rgb(255, 207, 207);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body h4 {
  color: rgb(255, 175, 175);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body h5 {
  color: rgb(255, 143, 143);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body h6 {
  color: rgb(255, 111, 111);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(7, 5, 53, 0) none repeat scroll 0% 90% / auto padding-box border-box;
  background-color: rgba(7, 5, 53, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  text-decoration: rgb(255, 223, 223);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  text-decoration: rgb(255, 223, 223);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
  text-decoration: rgb(255, 223, 223);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgba(255, 255, 255, 0.867);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}`,
    footer: `body footer {
  background-color: rgba(35, 1, 1, 0.72);
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body footer ul li a {
  color: rgb(239, 209, 209);
  text-decoration: rgb(239, 209, 209);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgba(255, 255, 255, 0.867);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 223, 223);
  text-decoration: rgb(255, 223, 223);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body li.section-li > .section .meta {
  color: rgb(255, 223, 223);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 223, 223);
  text-decoration: rgb(255, 223, 223);
}

body ul.section-ul {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}

body .darkmode svg {
  color: rgb(239, 209, 209);
  stroke: rgb(239, 209, 209);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
}

body .metadata {
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
  font-family: Myuppy, Montserrat, Roboto, "Segoe Print", sans-serif;
}

body .navigation-progress {
  background-color: rgba(35, 1, 1, 0.72);
}

body .page-header h2.page-title {
  color: rgba(255, 255, 255, 0.867);
}

body abbr {
  color: rgba(255, 255, 255, 0.867);
  text-decoration: underline dotted rgba(255, 255, 255, 0.867);
}

body details {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body input[type=text] {
  border-bottom-color: rgb(239, 209, 209);
  border-left-color: rgb(239, 209, 209);
  border-right-color: rgb(239, 209, 209);
  border-top-color: rgb(239, 209, 209);
  color: rgb(239, 209, 209);
}

body kbd {
  background-color: rgba(6, 9, 64, 0.35);
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
  color: rgba(255, 255, 255, 0.867);
  font-size: 17.5px;
  padding-bottom: 1.75px;
  padding-left: 4.375px;
  padding-right: 4.375px;
  padding-top: 1.75px;
}

body progress {
  border-bottom-color: rgba(255, 255, 255, 0.867);
  border-left-color: rgba(255, 255, 255, 0.867);
  border-right-color: rgba(255, 255, 255, 0.867);
  border-top-color: rgba(255, 255, 255, 0.867);
}

body sub {
  color: rgba(255, 255, 255, 0.867);
  font-size: 16.6667px;
}

body summary {
  color: rgba(255, 255, 255, 0.867);
}

body sup {
  color: rgba(255, 255, 255, 0.867);
  font-size: 16.6667px;
}`,
  },
  light: {},
};
