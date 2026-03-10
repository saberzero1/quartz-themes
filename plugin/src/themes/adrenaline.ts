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
  --background-1-h: rgb(138, 92, 245) !important;
  --background-1-item: #b3b3b3 !important;
  --background-2: rgb(38, 38, 39) !important;
  --background-2_h: 258 !important;
  --background-2_l: 15% !important;
  --background-2_s: 0% !important;
  --background-3: hsl(258, -7%, 10%, 100%) !important;
  --background-4: rgb(12, 12, 12) !important;
  --background-5: rgba(138, 92, 245, 0.3) !important;
  --background-6: rgba(165, 160, 176, 0.2) !important;
  --background-primary: rgb(25, 25, 26) !important;
  --background-secondary: rgb(38, 38, 39) !important;
  --bases-cards-background: rgb(25, 25, 26) !important;
  --bases-table-cell-background-active: rgb(25, 25, 26) !important;
  --bases-table-header-background: rgb(25, 25, 26) !important;
  --bases-table-summary-background: rgb(25, 25, 26) !important;
  --blur-background: color-mix(in srgb, rgb(138, 92, 245) 65%, transparent) linear-gradient(rgb(138, 92, 245), color-mix(in srgb, rgb(138, 92, 245) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: rgb(38, 38, 39) !important;
  --canvas-card-label-color: rgb(138, 92, 245) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-marker-color: rgb(25, 25, 26) !important;
  --code-background: hsl(258, -7%, 10%, 100%) !important;
  --code-comment: rgb(138, 92, 245) !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --color-base-00: hsl(258, -7%, 10%, 100%) !important;
  --color-base-50: rgb(138, 92, 245) !important;
  --colored-accent-1: rgb(138, 92, 245) !important;
  --colored-accent-2: rgba(138, 92, 245, 0.5) !important;
  --colored-accent-3: rgb(88, 66, 138) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: rgb(138, 92, 245) !important;
  --divider-color: rgba(105, 105, 105, 0.441) !important;
  --dropdown-background: rgb(138, 92, 245) !important;
  --file-header-background: rgb(25, 25, 26) !important;
  --file-header-background-focused: rgb(25, 25, 26) !important;
  --flair-background: rgb(138, 92, 245) !important;
  --footnote-id-color-no-occurrences: rgb(138, 92, 245) !important;
  --frame-right-space: 100px !important;
  --graph-node-unresolved: rgb(138, 92, 245) !important;
  --gray: rgb(138, 92, 245) !important;
  --heading-formatting: rgb(138, 92, 245) !important;
  --highlight-1: rgba(255, 255, 255, 0.075) !important;
  --highlight-2: rgba(255, 255, 255, 0.075) !important;
  --input-date-separator: rgb(138, 92, 245) !important;
  --input-placeholder-color: rgb(138, 92, 245) !important;
  --interactive-normal: rgb(138, 92, 245) !important;
  --light: rgb(25, 25, 26) !important;
  --lightgray: rgb(38, 38, 39) !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --menu-background: rgb(38, 38, 39) !important;
  --modal-background: rgb(25, 25, 26) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color-collapsed: rgb(138, 92, 245) !important;
  --nav-tag-color: rgb(138, 92, 245) !important;
  --pdf-background: rgb(25, 25, 26) !important;
  --pdf-page-background: rgb(25, 25, 26) !important;
  --pdf-sidebar-background: rgb(25, 25, 26) !important;
  --pill-color-remove: rgb(138, 92, 245) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: rgb(25, 25, 26) !important;
  --raised-background: color-mix(in srgb, rgb(138, 92, 245) 65%, transparent) linear-gradient(rgb(138, 92, 245), color-mix(in srgb, rgb(138, 92, 245) 65%, transparent)) !important;
  --ribbon-background: rgb(38, 38, 39) !important;
  --ribbon-background-collapsed: rgb(25, 25, 26) !important;
  --search-result-background: rgb(25, 25, 26) !important;
  --shadow-1: rgba(8, 2, 24, 0.5) !important;
  --shadow-2: rgba(18, 18, 18, 0.4) !important;
  --shadow-3: rgba(0, 0, 0, 0.47) !important;
  --shadow-4: hsla(258, 44.1%, -5%, .5) !important;
  --status-bar-background: rgb(38, 38, 39) !important;
  --status-bar-border-color: rgba(105, 105, 105, 0.441) !important;
  --suggestion-background: rgb(25, 25, 26) !important;
  --tab-background-active: rgb(25, 25, 26) !important;
  --tab-container-background: rgb(38, 38, 39) !important;
  --tab-outline-color: rgba(105, 105, 105, 0.441) !important;
  --tab-switcher-background: rgb(38, 38, 39) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(38, 38, 39), transparent) !important;
  --tab-text-color: rgb(138, 92, 245) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-weight: 700 !important;
  --tc: rgb(209, 209, 209) !important;
  --text-color-inverted: white !important;
  --text-faint: rgb(138, 92, 245) !important;
  --titlebar-background: rgb(38, 38, 39) !important;
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
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(209, 209, 209);
  font-weight: 700;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 350;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: line-through rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
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
  background-color: rgb(25, 25, 26);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(25, 25, 26);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
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
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
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
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
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
  text-decoration: rgb(209, 209, 209);
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
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  font-weight: 350;
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(87, 65, 137);
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
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
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
  text-decoration: underline dotted rgb(209, 209, 209);
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
  --background-1: rgb(223, 212, 247) !important;
  --background-1-h: #bdbdbd !important;
  --background-1-item: #5c5c5c !important;
  --background-1_2: rgb(234, 234, 234) !important;
  --background-2: rgb(244, 244, 246) !important;
  --background-2_h: 258 !important;
  --background-2_l: 96% !important;
  --background-2_s: 10% !important;
  --background-3: rgb(240, 236, 248) !important;
  --background-4: white !important;
  --background-5: rgba(138, 92, 245, 0.9) !important;
  --background-6: rgba(138, 92, 245, 0.2) !important;
  --background-modifier-form-field: rgb(240, 236, 248) !important;
  --background-modifier-form-field-hover: rgb(240, 236, 248) !important;
  --background-primary: rgb(239, 237, 242) !important;
  --background-secondary: rgb(244, 244, 246) !important;
  --bases-cards-background: rgb(239, 237, 242) !important;
  --bases-table-cell-background-active: rgb(239, 237, 242) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-header-background: rgb(239, 237, 242) !important;
  --bases-table-summary-background: rgb(239, 237, 242) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --blur-background: color-mix(in srgb, rgb(239, 237, 242) 65%, transparent) linear-gradient(rgb(239, 237, 242), color-mix(in srgb, rgb(239, 237, 242) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: rgb(244, 244, 246) !important;
  --canvas-card-label-color: rgb(138, 92, 245) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-marker-color: rgb(239, 237, 242) !important;
  --code-background: rgb(234, 234, 234) !important;
  --code-comment: rgb(138, 92, 245) !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --color-base-00: rgb(240, 236, 248) !important;
  --color-base-50: rgb(138, 92, 245) !important;
  --colored-accent-1: rgb(138, 92, 245) !important;
  --colored-accent-2: rgba(138, 92, 245, 0.5) !important;
  --colored-accent-3: rgb(185, 159, 244) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: rgb(138, 92, 245) !important;
  --divider-color: rgba(200, 200, 200, 0.441) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --dropdown-background: rgb(138, 92, 245) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --file-header-background: rgb(239, 237, 242) !important;
  --file-header-background-focused: rgb(239, 237, 242) !important;
  --flair-background: rgb(138, 92, 245) !important;
  --footnote-id-color-no-occurrences: rgb(138, 92, 245) !important;
  --frame-right-space: 100px !important;
  --graph-node-unresolved: rgb(138, 92, 245) !important;
  --gray: rgb(138, 92, 245) !important;
  --heading-formatting: rgb(138, 92, 245) !important;
  --highlight-1: rgba(0, 0, 0, 0.056) !important;
  --highlight-2: rgba(214, 214, 214, 0.308) !important;
  --icon-color: rgb(138, 92, 245) !important;
  --input-date-separator: rgb(138, 92, 245) !important;
  --input-placeholder-color: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-normal: rgb(138, 92, 245) !important;
  --light: rgb(239, 237, 242) !important;
  --lightgray: rgb(244, 244, 246) !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --menu-background: rgb(244, 244, 246) !important;
  --modal-background: rgb(239, 237, 242) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color-collapsed: rgb(138, 92, 245) !important;
  --nav-tag-color: rgb(138, 92, 245) !important;
  --pdf-background: rgb(239, 237, 242) !important;
  --pdf-page-background: rgb(239, 237, 242) !important;
  --pdf-sidebar-background: rgb(239, 237, 242) !important;
  --pill-color-remove: rgb(138, 92, 245) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: rgb(239, 237, 242) !important;
  --raised-background: color-mix(in srgb, rgb(239, 237, 242) 65%, transparent) linear-gradient(rgb(239, 237, 242), color-mix(in srgb, rgb(239, 237, 242) 65%, transparent)) !important;
  --ribbon-background: rgb(244, 244, 246) !important;
  --ribbon-background-collapsed: rgb(239, 237, 242) !important;
  --search-result-background: rgb(239, 237, 242) !important;
  --secondary: rgb(138, 92, 245) !important;
  --shadow-1: rgba(8, 2, 24, 0.5) !important;
  --shadow-2: rgba(0, 0, 0, 0.257) !important;
  --shadow-3: rgba(0, 0, 0, 0.227) !important;
  --shadow-4: rgba(183, 167, 221, 0.5) !important;
  --status-bar-background: rgb(244, 244, 246) !important;
  --status-bar-border-color: rgba(200, 200, 200, 0.441) !important;
  --suggestion-background: rgb(239, 237, 242) !important;
  --tab-background-active: rgb(239, 237, 242) !important;
  --tab-container-background: rgb(244, 244, 246) !important;
  --tab-outline-color: rgba(200, 200, 200, 0.441) !important;
  --tab-switcher-background: rgb(244, 244, 246) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(244, 244, 246), transparent) !important;
  --tab-text-color: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-weight: 700 !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tc: rgb(25, 25, 25) !important;
  --text-color-inverted: black !important;
  --text-faint: rgb(138, 92, 245) !important;
  --titlebar-background: rgb(244, 244, 246) !important;
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
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(25, 25, 25);
  font-weight: 700;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 350;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: line-through rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
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
  background-color: rgb(239, 237, 242);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ul > li {
  color: rgb(25, 25, 25);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(239, 237, 242);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
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
  border-left-color: rgb(138, 92, 245);
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
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
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
  padding-bottom: 6px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 6px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
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
  text-decoration: rgb(25, 25, 25);
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
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  font-weight: 350;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(185, 160, 244);
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
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
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
  text-decoration: underline dotted rgb(25, 25, 25);
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
