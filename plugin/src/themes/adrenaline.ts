import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "adrenaline",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-1: #171717 !important;
  --background-1-h: hsl(258, 88%, 66%) !important;
  --background-1-item: #b3b3b3 !important;
  --background-2: hsl(258, 0.98%, 15%) !important;
  --background-2_h: 258 !important;
  --background-2_l: 15% !important;
  --background-2_s: 0% !important;
  --background-3: hsl(258, -7%, 10%, 100%) !important;
  --background-4: rgb(12, 12, 12) !important;
  --background-5: hsla(258, 88%, 66%, 30%) !important;
  --background-6: hsla(258, 8.8%, 66%, 0.2) !important;
  --background-primary: hsl(258, 0.98%, 10%) !important;
  --background-secondary: hsl(258, 0.98%, 15%) !important;
  --bases-cards-background: hsl(258, 0.98%, 10%) !important;
  --bases-table-cell-background-active: hsl(258, 0.98%, 10%) !important;
  --bases-table-header-background: hsl(258, 0.98%, 10%) !important;
  --bases-table-summary-background: hsl(258, 0.98%, 10%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 88%, 66%) 65%, transparent) linear-gradient(hsl(258, 88%, 66%), color-mix(in srgb, hsl(258, 88%, 66%) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: hsl(258, 0.98%, 15%) !important;
  --canvas-card-label-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: hsl(258, 0.98%, 10%) !important;
  --code-background: hsl(258, -7%, 10%, 100%) !important;
  --code-comment: hsl(258, 88%, 66%) !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --color-base-00: hsl(258, -7%, 10%, 100%) !important;
  --color-base-50: hsl(258, 88%, 66%) !important;
  --colored-accent-1: hsl(258, 88%, 66%) !important;
  --colored-accent-2: hsla(258, 88%, 66%, 0.5) !important;
  --colored-accent-3: hsla(258, 35.2%, 39.6%, 1) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: hsl(258, 88%, 66%) !important;
  --divider-color: rgba(105, 105, 105, 0.441) !important;
  --dropdown-background: hsl(258, 88%, 66%) !important;
  --file-header-background: hsl(258, 0.98%, 10%) !important;
  --file-header-background-focused: hsl(258, 0.98%, 10%) !important;
  --flair-background: hsl(258, 88%, 66%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%) !important;
  --frame-right-space: 100px !important;
  --graph-node-unresolved: hsl(258, 88%, 66%) !important;
  --gray: hsl(258, 88%, 66%) !important;
  --heading-formatting: hsl(258, 88%, 66%) !important;
  --highlight-1: rgba(255, 255, 255, 0.075) !important;
  --highlight-2: rgba(255, 255, 255, 0.075) !important;
  --input-date-separator: hsl(258, 88%, 66%) !important;
  --input-placeholder-color: hsl(258, 88%, 66%) !important;
  --interactive-normal: hsl(258, 88%, 66%) !important;
  --light: hsl(258, 0.98%, 10%) !important;
  --lightgray: hsl(258, 0.98%, 15%) !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --menu-background: hsl(258, 0.98%, 15%) !important;
  --modal-background: hsl(258, 0.98%, 10%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-tag-color: hsl(258, 88%, 66%) !important;
  --pdf-background: hsl(258, 0.98%, 10%) !important;
  --pdf-page-background: hsl(258, 0.98%, 10%) !important;
  --pdf-sidebar-background: hsl(258, 0.98%, 10%) !important;
  --pill-color-remove: hsl(258, 88%, 66%) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: hsl(258, 0.98%, 10%) !important;
  --raised-background: color-mix(in srgb, hsl(258, 88%, 66%) 65%, transparent) linear-gradient(hsl(258, 88%, 66%), color-mix(in srgb, hsl(258, 88%, 66%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 0.98%, 15%) !important;
  --ribbon-background-collapsed: hsl(258, 0.98%, 10%) !important;
  --search-result-background: hsl(258, 0.98%, 10%) !important;
  --shadow-1: hsla(258, 88%, 5%, .5) !important;
  --shadow-2: hsla(258, 0%, 6.6%, .4) !important;
  --shadow-3: rgba(0, 0, 0, 0.47) !important;
  --shadow-4: hsla(258, 44.1%, -5%, .5) !important;
  --status-bar-background: hsl(258, 0.98%, 15%) !important;
  --status-bar-border-color: rgba(105, 105, 105, 0.441) !important;
  --suggestion-background: hsl(258, 0.98%, 10%) !important;
  --tab-background-active: hsl(258, 0.98%, 10%) !important;
  --tab-container-background: hsl(258, 0.98%, 15%) !important;
  --tab-outline-color: rgba(105, 105, 105, 0.441) !important;
  --tab-switcher-background: hsl(258, 0.98%, 15%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 0.98%, 15%), transparent) !important;
  --tab-text-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-weight: 700 !important;
  --tc: rgb(209, 209, 209) !important;
  --text-color-inverted: white !important;
  --text-faint: hsl(258, 88%, 66%) !important;
  --titlebar-background: hsl(258, 0.98%, 15%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 25, 26);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(218, 218, 218);
  font-weight: 350;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(38, 38, 39);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 38, 39);
  border-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .note-properties-key {
  font-weight: 350;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 38, 39);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(105, 105, 105, 0.44);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(105, 105, 105, 0.44);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 25, 26);
  color: rgb(209, 209, 209);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(209, 209, 209);
  font-weight: 700;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(209, 209, 209);
  font-weight: 700;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 350;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body p {
  font-weight: 350;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body dt {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

html[saved-theme="dark"] body ol > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(38, 38, 39);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body table {
  color: rgb(209, 209, 209);
  margin-top: 15px;
  width: 204.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-width: 0px;
  color: rgb(209, 209, 209);
  font-weight: 350;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  font-weight: 350;
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(209, 209, 209);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(209, 209, 209);
  border-radius: 10px;
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(0, 0, 0);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 26);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 38, 39);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 350;
}

html[saved-theme="dark"] body h1 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h2 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h3 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h4 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h5 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body h6 {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 350;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 350;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 350;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 38, 39);
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-top-color: rgba(105, 105, 105, 0.44);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: rgba(165, 161, 176, 0.2);
  border-bottom-color: rgba(17, 17, 17, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 38, 39);
}

html[saved-theme="dark"] body abbr {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body sub {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body summary {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

html[saved-theme="dark"] body sup {
  color: rgb(209, 209, 209);
}`,
  },
  light: {
    base: `:root:root {
  --background-1: hsl(258, 68%, 90%, 100%) !important;
  --background-1-h: #bdbdbd !important;
  --background-1-item: #5c5c5c !important;
  --background-1_2: rgb(234, 234, 234) !important;
  --background-2: hsl(258, 9.8%, 96%) !important;
  --background-2_h: 258 !important;
  --background-2_l: 96% !important;
  --background-2_s: 10% !important;
  --background-3: hsl(258, 48%, 95%, 100%) !important;
  --background-4: white !important;
  --background-5: hsla(258, 88%, 66%, 90%) !important;
  --background-6: hsla(258, 88%, 66%, .2) !important;
  --background-modifier-form-field: hsl(258, 48%, 95%, 100%) !important;
  --background-modifier-form-field-hover: hsl(258, 48%, 95%, 100%) !important;
  --background-primary: hsl(258, 18.1%, 94%) !important;
  --background-secondary: hsl(258, 9.8%, 96%) !important;
  --bases-cards-background: hsl(258, 18.1%, 94%) !important;
  --bases-table-cell-background-active: hsl(258, 18.1%, 94%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-header-background: hsl(258, 18.1%, 94%) !important;
  --bases-table-summary-background: hsl(258, 18.1%, 94%) !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 18.1%, 94%) 65%, transparent) linear-gradient(hsl(258, 18.1%, 94%), color-mix(in srgb, hsl(258, 18.1%, 94%) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: hsl(258, 9.8%, 96%) !important;
  --canvas-card-label-color: hsl(258, 88%, 66%) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: hsl(258, 18.1%, 94%) !important;
  --code-background: rgb(234, 234, 234) !important;
  --code-comment: hsl(258, 88%, 66%) !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --color-base-00: hsl(258, 48%, 95%, 100%) !important;
  --color-base-50: hsl(258, 88%, 66%) !important;
  --colored-accent-1: hsl(258, 88%, 66%) !important;
  --colored-accent-2: hsla(258, 88%, 66%, 0.5) !important;
  --colored-accent-3: hsla(258, 79.2%, 79.2%, 1) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: hsl(258, 88%, 66%) !important;
  --divider-color: rgba(200, 200, 200, 0.441) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --dropdown-background: hsl(258, 88%, 66%) !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --file-header-background: hsl(258, 18.1%, 94%) !important;
  --file-header-background-focused: hsl(258, 18.1%, 94%) !important;
  --flair-background: hsl(258, 88%, 66%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%) !important;
  --frame-right-space: 100px !important;
  --graph-node-unresolved: hsl(258, 88%, 66%) !important;
  --gray: hsl(258, 88%, 66%) !important;
  --heading-formatting: hsl(258, 88%, 66%) !important;
  --highlight-1: rgba(0, 0, 0, 0.056) !important;
  --highlight-2: rgba(214, 214, 214, 0.308) !important;
  --icon-color: hsl(258, 88%, 66%) !important;
  --input-date-separator: hsl(258, 88%, 66%) !important;
  --input-placeholder-color: hsl(258, 88%, 66%) !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-normal: hsl(258, 88%, 66%) !important;
  --light: hsl(258, 18.1%, 94%) !important;
  --lightgray: hsl(258, 9.8%, 96%) !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --menu-background: hsl(258, 9.8%, 96%) !important;
  --modal-background: hsl(258, 18.1%, 94%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-tag-color: hsl(258, 88%, 66%) !important;
  --pdf-background: hsl(258, 18.1%, 94%) !important;
  --pdf-page-background: hsl(258, 18.1%, 94%) !important;
  --pdf-sidebar-background: hsl(258, 18.1%, 94%) !important;
  --pill-color-remove: hsl(258, 88%, 66%) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: hsl(258, 18.1%, 94%) !important;
  --raised-background: color-mix(in srgb, hsl(258, 18.1%, 94%) 65%, transparent) linear-gradient(hsl(258, 18.1%, 94%), color-mix(in srgb, hsl(258, 18.1%, 94%) 65%, transparent)) !important;
  --ribbon-background: hsl(258, 9.8%, 96%) !important;
  --ribbon-background-collapsed: hsl(258, 18.1%, 94%) !important;
  --search-result-background: hsl(258, 18.1%, 94%) !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --shadow-1: hsla(258, 88%, 5%, .5) !important;
  --shadow-2: rgba(0, 0, 0, 0.257) !important;
  --shadow-3: rgba(0, 0, 0, 0.227) !important;
  --shadow-4: hsla(258, 44.1%, 76%, .5) !important;
  --status-bar-background: hsl(258, 9.8%, 96%) !important;
  --status-bar-border-color: rgba(200, 200, 200, 0.441) !important;
  --suggestion-background: hsl(258, 18.1%, 94%) !important;
  --tab-background-active: hsl(258, 18.1%, 94%) !important;
  --tab-container-background: hsl(258, 9.8%, 96%) !important;
  --tab-outline-color: rgba(200, 200, 200, 0.441) !important;
  --tab-switcher-background: hsl(258, 9.8%, 96%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 9.8%, 96%), transparent) !important;
  --tab-text-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-weight: 700 !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tc: rgb(25, 25, 25) !important;
  --text-color-inverted: black !important;
  --text-faint: hsl(258, 88%, 66%) !important;
  --titlebar-background: hsl(258, 9.8%, 96%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(239, 237, 242);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(34, 34, 34);
  font-weight: 350;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(244, 244, 246);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(239, 237, 242);
  border-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .note-properties-key {
  font-weight: 350;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 246);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(200, 200, 200, 0.44);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(200, 200, 200, 0.44);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(239, 237, 242);
  color: rgb(25, 25, 25);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(25, 25, 25);
  font-weight: 700;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(25, 25, 25);
  font-weight: 700;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 350;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body p {
  font-weight: 350;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body dt {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

html[saved-theme="light"] body ol > li {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ul > li {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(244, 244, 246);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body table {
  color: rgb(25, 25, 25);
  margin-top: 15px;
  width: 204.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-width: 0px;
  color: rgb(25, 25, 25);
  font-weight: 350;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 8px;
  font-weight: 350;
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(234, 234, 234);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(234, 234, 234);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body figcaption {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(25, 25, 25);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(25, 25, 25);
  border-radius: 10px;
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(0, 0, 0, 0.25);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(0, 0, 0);
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(240, 236, 248);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(239, 237, 242);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 244, 246);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 350;
}

html[saved-theme="light"] body h1 {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body h2 {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body h3 {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body h4 {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body h5 {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body h6 {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 350;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 350;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 350;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(244, 244, 246);
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-top-color: rgba(200, 200, 200, 0.44);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: rgba(138, 92, 245, 0.2);
  border-bottom-color: rgba(0, 0, 0, 0.26);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(244, 244, 246);
}

html[saved-theme="light"] body abbr {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body sub {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body summary {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

html[saved-theme="light"] body sup {
  color: rgb(25, 25, 25);
}`,
  },
};
