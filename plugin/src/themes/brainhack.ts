import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "brainhack",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cascadia-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-1: #171717 !important;
  --background-1-h: hsl(258, 88%, 66%) !important;
  --background-1-item: #b3b3b3 !important;
  --background-2: hsl(258, 0.98%, 12%) !important;
  --background-2_h: 258 !important;
  --background-2_l: 10% !important;
  --background-2_s: 0% !important;
  --background-3: rgb(33, 33, 33) !important;
  --background-3-1: rgb(70, 70, 70) !important;
  --background-3-2: rgba(70, 70, 70, 0.27) !important;
  --background-3-3: hsla(0, 0%, 26%, 0.326) !important;
  --background-4: rgb(12, 12, 12) !important;
  --background-5: hsla(258, 88%, 66%, 30%) !important;
  --background-6: hsla(258, 8.8%, 66%, 0.2) !important;
  --background-7: rgb(53, 53, 53) !important;
  --background-primary: rgb(33, 33, 33) !important;
  --background-secondary: hsl(258, 0.98%, 12%) !important;
  --bases-cards-background: rgb(33, 33, 33) !important;
  --bases-cards-radius: 1em !important;
  --bases-table-cell-background-active: rgb(33, 33, 33) !important;
  --bases-table-header-background: rgb(33, 33, 33) !important;
  --bases-table-summary-background: rgb(33, 33, 33) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: hsl(258, 0.98%, 12%) !important;
  --canvas-card-label-color: hsl(258, 88%, 66%) !important;
  --canvas-dot-pattern: rgb(70, 70, 70) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: rgb(33, 33, 33) !important;
  --code-background: rgb(33, 33, 33) !important;
  --code-comment: hsl(258, 88%, 66%) !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --color-base-00: rgb(33, 33, 33) !important;
  --color-base-50: hsl(258, 88%, 66%) !important;
  --colored-accent-1: hsl(258, 88%, 66%) !important;
  --colored-accent-2: hsla(258, 88%, 66%, 0.5) !important;
  --colored-accent-3: hsla(258, 88%, 66%, 0.3) !important;
  --colored-accent-4: hsla(258, 88%, 66%, 0.1) !important;
  --colored-accent-5: hsla(258, 88%, 66%, 0.05) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: hsl(258, 88%, 66%) !important;
  --divider-color: rgba(105, 105, 105, 0.441) !important;
  --file-header-background: rgb(33, 33, 33) !important;
  --file-header-background-focused: rgb(33, 33, 33) !important;
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%) !important;
  --graph-node-unresolved: hsl(258, 88%, 66%) !important;
  --gray: hsl(258, 88%, 66%) !important;
  --heading-formatting: hsl(258, 88%, 66%) !important;
  --highlight-1: rgba(255, 255, 255, 0.075) !important;
  --highlight-2: rgba(255, 255, 255, 0.075) !important;
  --input-date-separator: hsl(258, 88%, 66%) !important;
  --input-placeholder-color: hsl(258, 88%, 66%) !important;
  --italic-color: rgb(97, 97, 97) !important;
  --light: rgb(33, 33, 33) !important;
  --lightgray: hsl(258, 0.98%, 12%) !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --main-color: white !important;
  --main-color-05: rgba(255, 255, 255, 0.116) !important;
  --main-color-2: rgb(224, 224, 224) !important;
  --main-color-inverted: black !important;
  --main-color-inverted-2: rgb(44, 44, 44) !important;
  --menu-background: hsl(258, 0.98%, 12%) !important;
  --menu-radius: 1em !important;
  --modal-background: rgb(33, 33, 33) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-tag-color: hsl(258, 88%, 66%) !important;
  --pdf-background: rgb(33, 33, 33) !important;
  --pdf-page-background: rgb(33, 33, 33) !important;
  --pdf-sidebar-background: rgb(33, 33, 33) !important;
  --pill-color-remove: hsl(258, 88%, 66%) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: rgb(33, 33, 33) !important;
  --radius-m: 1em !important;
  --ribbon-background: hsl(258, 0.98%, 12%) !important;
  --ribbon-background-collapsed: rgb(33, 33, 33) !important;
  --search-result-background: rgb(33, 33, 33) !important;
  --shadow-1: hsla(258, 88%, 5%, .5) !important;
  --shadow-2: hsla(258, 0%, 6.6%, .4) !important;
  --shadow-3: rgba(0, 0, 0, 0.26) !important;
  --shadow-4: hsla(258, 44.1%, -10%, .5) !important;
  --status-bar-background: hsl(258, 0.98%, 12%) !important;
  --status-bar-border-color: rgba(105, 105, 105, 0.441) !important;
  --status-bar-radius: 1em 0 0 0 !important;
  --suggestion-background: rgb(33, 33, 33) !important;
  --tab-background-active: rgb(33, 33, 33) !important;
  --tab-container-background: hsl(258, 0.98%, 12%) !important;
  --tab-outline-color: rgba(105, 105, 105, 0.441) !important;
  --tab-switcher-background: hsl(258, 0.98%, 12%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(258, 0.98%, 12%), transparent) !important;
  --tab-text-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-weight: 700 !important;
  --tc: rgb(194, 194, 194) !important;
  --text-color-inverted: rgb(223, 223, 223) !important;
  --text-faint: hsl(258, 88%, 66%) !important;
  --titlebar-background: hsl(258, 0.98%, 12%) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(218, 218, 218);
  font-weight: 400;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(30, 30, 31);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(30, 30, 31);
  border-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 31);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(105, 105, 105, 0.44);
  border-right-style: dashed;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(105, 105, 105, 0.44);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(194, 194, 194);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(97, 97, 97);
  outline: rgb(97, 97, 97) none 0px;
  text-decoration-color: rgb(97, 97, 97);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(97, 97, 97);
  outline: rgb(97, 97, 97) none 0px;
  text-decoration-color: rgb(97, 97, 97);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(53, 53, 53);
  color: rgb(194, 194, 194);
  font-weight: 600;
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body del {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body dt {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(33, 33, 33);
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body table {
  color: rgb(194, 194, 194);
  margin-top: 15px;
  width: 204.844px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  border-top-width: 0px;
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  font-weight: 400;
}`,
    code: `html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 33, 33);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(33, 33, 33);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(194, 194, 194);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(194, 194, 194);
  border-radius: 10px;
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: rgb(223, 223, 223);
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(223, 223, 223);
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(255, 6, 93, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(255, 160, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="brainhack"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 31);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body h3 {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body h4 {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body h5 {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body h6 {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-right-style: dashed;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 900;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 900;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 900;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(30, 30, 31);
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-top-color: rgba(105, 105, 105, 0.44);
  border-top-left-radius: 12px;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(30, 30, 31);
}

html[saved-theme="dark"] body abbr {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body sub {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body summary {
  color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body sup {
  color: rgb(194, 194, 194);
}`,
  },
  light: {
    base: `:root:root {
  --background-1: hsl(258, 68%, 90%, 100%) !important;
  --background-1-h: #bdbdbd !important;
  --background-1-item: #5c5c5c !important;
  --background-1_2: rgb(234, 234, 234) !important;
  --background-2: rgb(255, 255, 255) !important;
  --background-2_h: 258 !important;
  --background-2_l: 99% !important;
  --background-2_s: 10% !important;
  --background-3: hsl(0, 0%, 98%) !important;
  --background-3-1: rgb(197, 197, 197) !important;
  --background-3-2: rgba(197, 197, 197, 0.288) !important;
  --background-3-3: hsla(0, 0%, 73%, 0.112) !important;
  --background-4: white !important;
  --background-5: hsla(258, 88%, 66%, 90%) !important;
  --background-6: hsla(258, 88%, 66%, .2) !important;
  --background-7: rgb(221, 221, 221) !important;
  --background-modifier-form-field: hsl(0, 0%, 98%) !important;
  --background-modifier-form-field-hover: hsl(0, 0%, 98%) !important;
  --background-primary: hsl(258, 0.5%, 96%) !important;
  --background-secondary: rgb(255, 255, 255) !important;
  --bases-cards-background: hsl(258, 0.5%, 96%) !important;
  --bases-cards-radius: 1em !important;
  --bases-table-cell-background-active: hsl(258, 0.5%, 96%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-header-background: hsl(258, 0.5%, 96%) !important;
  --bases-table-summary-background: hsl(258, 0.5%, 96%) !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blur-background: color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent) linear-gradient(hsl(258, 0.5%, 96%), color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: hsl(258, 88%, 66%) !important;
  --canvas-dot-pattern: rgb(197, 197, 197) !important;
  --checkbox-border-color: hsl(258, 88%, 66%) !important;
  --checkbox-color: hsl(258, 88%, 66%) !important;
  --checkbox-marker-color: hsl(258, 0.5%, 96%) !important;
  --code-background: rgb(234, 234, 234) !important;
  --code-comment: hsl(258, 88%, 66%) !important;
  --collapse-icon-color: hsl(258, 88%, 66%) !important;
  --color-base-00: hsl(0, 0%, 98%) !important;
  --color-base-50: hsl(258, 88%, 66%) !important;
  --colored-accent-1: hsl(258, 88%, 66%) !important;
  --colored-accent-2: hsla(258, 88%, 66%, 0.5) !important;
  --colored-accent-3: hsla(258, 88%, 66%, 0.3) !important;
  --colored-accent-4: hsla(258, 88%, 66%, 0.1) !important;
  --colored-accent-5: hsla(258, 88%, 66%, 0.05) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: hsl(258, 88%, 66%) !important;
  --divider-color: rgba(200, 200, 200, 0.441) !important;
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --dropdown-background: hsl(0, 0%, 98%) !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --file-header-background: hsl(258, 0.5%, 96%) !important;
  --file-header-background-focused: hsl(258, 0.5%, 96%) !important;
  --flair-background: hsl(0, 0%, 98%) !important;
  --footnote-id-color-no-occurrences: hsl(258, 88%, 66%) !important;
  --graph-node-unresolved: hsl(258, 88%, 66%) !important;
  --gray: hsl(258, 88%, 66%) !important;
  --heading-formatting: hsl(258, 88%, 66%) !important;
  --highlight-1: rgba(0, 0, 0, 0.056) !important;
  --highlight-2: rgba(214, 214, 214, 0.308) !important;
  --input-date-separator: hsl(258, 88%, 66%) !important;
  --input-placeholder-color: hsl(258, 88%, 66%) !important;
  --interactive-accent: hsl(258, 88%, 66%) !important;
  --interactive-normal: hsl(0, 0%, 98%) !important;
  --italic-color: rgb(154, 154, 154) !important;
  --light: hsl(258, 0.5%, 96%) !important;
  --lightgray: rgb(255, 255, 255) !important;
  --list-marker-color: hsl(258, 88%, 66%) !important;
  --main-color: black !important;
  --main-color-05: rgba(0, 0, 0, 0.116) !important;
  --main-color-2: rgb(56, 56, 56) !important;
  --main-color-inverted: white !important;
  --main-color-inverted-2: rgb(252, 252, 252) !important;
  --menu-background: rgb(255, 255, 255) !important;
  --menu-radius: 1em !important;
  --modal-background: hsl(258, 0.5%, 96%) !important;
  --nav-collapse-icon-color: hsl(258, 88%, 66%) !important;
  --nav-collapse-icon-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-heading-color-collapsed: hsl(258, 88%, 66%) !important;
  --nav-tag-color: hsl(258, 88%, 66%) !important;
  --pdf-background: hsl(258, 0.5%, 96%) !important;
  --pdf-page-background: hsl(258, 0.5%, 96%) !important;
  --pdf-sidebar-background: hsl(258, 0.5%, 96%) !important;
  --pill-color-remove: hsl(258, 88%, 66%) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: hsl(258, 0.5%, 96%) !important;
  --radius-m: 1em !important;
  --raised-background: color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent) linear-gradient(hsl(258, 0.5%, 96%), color-mix(in srgb, hsl(258, 0.5%, 96%) 65%, transparent)) !important;
  --ribbon-background: rgb(255, 255, 255) !important;
  --ribbon-background-collapsed: hsl(258, 0.5%, 96%) !important;
  --search-result-background: hsl(258, 0.5%, 96%) !important;
  --secondary: hsl(258, 88%, 66%) !important;
  --shadow-1: hsla(258, 88%, 5%, .5) !important;
  --shadow-2: rgba(0, 0, 0, 0.257) !important;
  --shadow-3: rgba(0, 0, 0, 0.08) !important;
  --shadow-4: hsla(258, 44.1%, 79%, .2) !important;
  --status-bar-background: rgb(255, 255, 255) !important;
  --status-bar-border-color: rgba(200, 200, 200, 0.441) !important;
  --status-bar-radius: 1em 0 0 0 !important;
  --suggestion-background: hsl(258, 0.5%, 96%) !important;
  --tab-background-active: hsl(258, 0.5%, 96%) !important;
  --tab-container-background: rgb(255, 255, 255) !important;
  --tab-outline-color: rgba(200, 200, 200, 0.441) !important;
  --tab-switcher-background: rgb(255, 255, 255) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent) !important;
  --tab-text-color: hsl(258, 88%, 66%) !important;
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: hsl(258, 88%, 66%) !important;
  --table-header-weight: 700 !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --tc: rgb(67, 67, 67) !important;
  --text-color-inverted: black !important;
  --text-faint: hsl(258, 88%, 66%) !important;
  --titlebar-background: rgb(255, 255, 255) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(34, 34, 34);
  font-weight: 400;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(255, 255, 255);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 245, 245);
  border-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(200, 200, 200, 0.44);
  border-right-style: dashed;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(200, 200, 200, 0.44);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 245, 245);
  color: rgb(67, 67, 67);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(154, 154, 154);
  outline: rgb(154, 154, 154) none 0px;
  text-decoration-color: rgb(154, 154, 154);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(154, 154, 154);
  outline: rgb(154, 154, 154) none 0px;
  text-decoration-color: rgb(154, 154, 154);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(221, 221, 221);
  color: rgb(67, 67, 67);
  font-weight: 600;
  outline: rgb(67, 67, 67) none 0px;
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body del {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(138, 92, 245);
  border-color: rgb(138, 92, 245);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body dt {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ol > li {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ul > li {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(138, 92, 245);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(250, 250, 250);
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body table {
  color: rgb(67, 67, 67);
  margin-top: 15px;
  width: 204.844px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  border-top-width: 0px;
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 8px;
  font-weight: 400;
}`,
    code: `html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(234, 234, 234);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(234, 234, 234);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body figcaption {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(67, 67, 67);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(67, 67, 67);
  border-radius: 10px;
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(138, 92, 245, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(138, 92, 245, 0.5);
  border-right-color: rgba(138, 92, 245, 0.5);
  border-top-color: rgba(138, 92, 245, 0.5);
  color: rgb(0, 0, 0);
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(0, 0, 0);
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(255, 6, 93, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(255, 160, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="brainhack"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body h1 {
  color: rgb(56, 56, 56);
}

html[saved-theme="light"] body h2 {
  color: rgb(56, 56, 56);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body h3 {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body h4 {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body h5 {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body h6 {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-right-style: dashed;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 900;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 900;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 900;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-top-color: rgba(200, 200, 200, 0.44);
  border-top-left-radius: 12px;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body abbr {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(234, 234, 234);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body sub {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body summary {
  color: rgb(67, 67, 67);
}

html[saved-theme="light"] body sup {
  color: rgb(67, 67, 67);
}`,
  },
  extras: `/* Screen/multiply blending for translucent layering effect */
.workspace-leaf-content {
  mix-blend-mode: screen;
}

.theme-light .workspace-leaf-content {
  mix-blend-mode: multiply;
}
`,
};
