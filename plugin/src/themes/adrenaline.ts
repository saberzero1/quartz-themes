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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(209, 209, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 25, 26);
  color: rgb(209, 209, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 38, 39);
  color: rgb(209, 209, 209);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(105, 105, 105, 0.44);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(105, 105, 105, 0.44);
  color: rgb(209, 209, 209);
}

body div#quartz-root {
  background-color: rgb(25, 25, 26);
  color: rgb(209, 209, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(209, 209, 209);
  font-weight: 700;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .page article p > em, em {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .page article p > i, i {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .page article p > strong, strong {
  color: rgb(209, 209, 209);
  font-weight: 700;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 350;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: line-through rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body p {
  font-weight: 350;
}`,
    lists: `body dd {
  color: rgb(209, 209, 209);
}

body dt {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

body ol > li {
  color: rgb(209, 209, 209);
}

body ol.overflow {
  background-color: rgb(25, 25, 26);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ul > li {
  color: rgb(209, 209, 209);
}

body ul.overflow {
  background-color: rgb(25, 25, 26);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  background-color: rgb(38, 38, 39);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body table {
  color: rgb(209, 209, 209);
  margin-top: 15px;
  width: 204.844px;
}

body td {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  border-top-width: 0px;
  color: rgb(209, 209, 209);
  font-weight: 350;
}

body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  font-weight: 350;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  color: rgb(209, 209, 209);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
}`,
    images: `body audio {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body figcaption {
  color: rgb(209, 209, 209);
}

body figure {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body img {
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

body video {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .transclude {
  border-bottom-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body li.task-list-item[data-task='!'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(209, 209, 209);
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}`,
    callouts: `body .callout .callout-title {
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

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(38, 38, 39);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(25, 25, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(209, 209, 209);
  font-weight: 350;
  outline: rgb(209, 209, 209) none 0px;
  text-decoration: rgb(209, 209, 209);
  text-decoration-color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(209, 209, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 38, 39);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(209, 209, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 350;
}

body h1 {
  color: rgb(209, 209, 209);
}

body h2 {
  color: rgb(209, 209, 209);
}

body h2.page-title, h2.page-title a {
  color: rgb(209, 209, 209);
}

body h3 {
  color: rgb(209, 209, 209);
}

body h4 {
  color: rgb(209, 209, 209);
}

body h5 {
  color: rgb(209, 209, 209);
}

body h6 {
  color: rgb(209, 209, 209);
}

body hr {
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 25, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 25, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 350;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 350;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-weight: 350;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 350;
}`,
    footer: `body footer {
  background-color: rgb(38, 38, 39);
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-top-color: rgba(105, 105, 105, 0.44);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body ul.section-ul {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
  color: rgb(209, 209, 209);
}

body .navigation-progress {
  background-color: rgb(38, 38, 39);
}

body abbr {
  color: rgb(209, 209, 209);
  text-decoration: underline dotted rgb(209, 209, 209);
}

body details {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body kbd {
  background-color: rgb(26, 26, 26);
}

body progress {
  border-bottom-color: rgb(209, 209, 209);
  border-left-color: rgb(209, 209, 209);
  border-right-color: rgb(209, 209, 209);
  border-top-color: rgb(209, 209, 209);
}

body sub {
  color: rgb(209, 209, 209);
}

body summary {
  color: rgb(209, 209, 209);
  font-weight: 350;
}

body sup {
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(25, 25, 25);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(239, 237, 242);
  color: rgb(25, 25, 25);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 244, 246);
  color: rgb(25, 25, 25);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(200, 200, 200, 0.44);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(200, 200, 200, 0.44);
  color: rgb(25, 25, 25);
}

body div#quartz-root {
  background-color: rgb(239, 237, 242);
  color: rgb(25, 25, 25);
}`,
    typography: `body .page article p > b, b {
  color: rgb(25, 25, 25);
  font-weight: 700;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .page article p > em, em {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .page article p > i, i {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .page article p > strong, strong {
  color: rgb(25, 25, 25);
  font-weight: 700;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .text-highlight {
  background-color: rgb(138, 92, 245);
  color: rgb(0, 0, 0);
  font-weight: 350;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: line-through rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body p {
  font-weight: 350;
}`,
    lists: `body dd {
  color: rgb(25, 25, 25);
}

body dt {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

body ol > li {
  color: rgb(25, 25, 25);
}

body ol.overflow {
  background-color: rgb(239, 237, 242);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body ul > li {
  color: rgb(25, 25, 25);
}

body ul.overflow {
  background-color: rgb(239, 237, 242);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  background-color: rgb(244, 244, 246);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body table {
  color: rgb(25, 25, 25);
  margin-top: 15px;
  width: 204.844px;
}

body td {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  border-top-width: 0px;
  color: rgb(25, 25, 25);
  font-weight: 350;
}

body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 8px;
  font-weight: 350;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(234, 234, 234);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(234, 234, 234);
  color: rgb(25, 25, 25);
}

body pre > code, pre:has(> code) {
  background-color: rgb(234, 234, 234);
}

body pre:has(> code) {
  background-color: rgb(234, 234, 234);
}`,
    images: `body audio {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body figcaption {
  color: rgb(25, 25, 25);
}

body figure {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body img {
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

body video {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body .transclude {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body .transclude-inner {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body li.task-list-item[data-task='!'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='*'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='-'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='/'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='>'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='?'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='I'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='S'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='b'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='c'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='d'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='f'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='i'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='k'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='l'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='p'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='u'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body li.task-list-item[data-task='w'] {
  color: rgb(25, 25, 25);
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}`,
    callouts: `body .callout .callout-title {
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

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
}

body .callout[data-callout="abstract"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  background-color: rgb(244, 244, 246);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(240, 236, 248);
}

body .search > .search-container > .search-space {
  background-color: rgb(239, 237, 242);
}

body .search > .search-container > .search-space > * {
  color: rgb(25, 25, 25);
  font-weight: 350;
  outline: rgb(25, 25, 25) none 0px;
  text-decoration: rgb(25, 25, 25);
  text-decoration-color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(25, 25, 25);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 244, 246);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(25, 25, 25);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-weight: 350;
}

body h1 {
  color: rgb(25, 25, 25);
}

body h2 {
  color: rgb(25, 25, 25);
}

body h2.page-title, h2.page-title a {
  color: rgb(25, 25, 25);
}

body h3 {
  color: rgb(25, 25, 25);
}

body h4 {
  color: rgb(25, 25, 25);
}

body h5 {
  color: rgb(25, 25, 25);
}

body h6 {
  color: rgb(25, 25, 25);
}

body hr {
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

body ::-webkit-scrollbar-corner {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}

body ::-webkit-scrollbar-track {
  background: rgb(239, 237, 242) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(239, 237, 242);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-weight: 350;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-weight: 350;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-weight: 350;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 350;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    footer: `body footer {
  background-color: rgb(244, 244, 246);
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-top-color: rgba(200, 200, 200, 0.44);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body ul.section-ul {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgba(0, 0, 0, 0);
  stroke: rgba(0, 0, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
  color: rgb(25, 25, 25);
}

body .navigation-progress {
  background-color: rgb(244, 244, 246);
}

body abbr {
  color: rgb(25, 25, 25);
  text-decoration: underline dotted rgb(25, 25, 25);
}

body details {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body kbd {
  background-color: rgb(234, 234, 234);
}

body progress {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(25, 25, 25);
  border-right-color: rgb(25, 25, 25);
  border-top-color: rgb(25, 25, 25);
}

body sub {
  color: rgb(25, 25, 25);
}

body summary {
  color: rgb(25, 25, 25);
  font-weight: 350;
}

body sup {
  color: rgb(25, 25, 25);
}`,
  },
};
