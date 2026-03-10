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
  --background-1-h: rgb(138, 92, 245) !important;
  --background-1-item: #b3b3b3 !important;
  --background-2: rgb(30, 30, 31) !important;
  --background-2_h: 258 !important;
  --background-2_l: 10% !important;
  --background-2_s: 0% !important;
  --background-3: rgb(33, 33, 33) !important;
  --background-3-1: rgb(70, 70, 70) !important;
  --background-3-2: rgba(70, 70, 70, 0.27) !important;
  --background-4: rgb(12, 12, 12) !important;
  --background-5: rgba(138, 92, 245, 0.3) !important;
  --background-6: rgba(165, 160, 176, 0.2) !important;
  --background-7: rgb(53, 53, 53) !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-primary: rgb(33, 33, 33) !important;
  --background-secondary: rgb(30, 30, 31) !important;
  --bases-cards-background: rgb(33, 33, 33) !important;
  --bases-cards-radius: 1em !important;
  --bases-table-cell-background-active: rgb(33, 33, 33) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-header-background: rgb(33, 33, 33) !important;
  --bases-table-summary-background: rgb(33, 33, 33) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: rgb(30, 30, 31) !important;
  --canvas-card-label-color: rgb(138, 92, 245) !important;
  --canvas-dot-pattern: rgb(70, 70, 70) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: rgb(33, 33, 33) !important;
  --code-background: rgb(33, 33, 33) !important;
  --code-comment: rgb(138, 92, 245) !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-base-00: rgb(33, 33, 33) !important;
  --color-base-50: rgb(138, 92, 245) !important;
  --colored-accent-1: rgb(138, 92, 245) !important;
  --colored-accent-2: rgba(138, 92, 245, 0.5) !important;
  --colored-accent-3: rgba(138, 92, 245, 0.3) !important;
  --colored-accent-4: rgba(138, 92, 245, 0.1) !important;
  --colored-accent-5: rgba(138, 92, 245, 0.05) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: rgb(138, 92, 245) !important;
  --divider-color: rgba(105, 105, 105, 0.441) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --file-header-background: rgb(33, 33, 33) !important;
  --file-header-background-focused: rgb(33, 33, 33) !important;
  --footnote-id-color-no-occurrences: rgb(138, 92, 245) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --graph-node-unresolved: rgb(138, 92, 245) !important;
  --gray: rgb(138, 92, 245) !important;
  --heading-formatting: rgb(138, 92, 245) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --highlight-1: rgba(255, 255, 255, 0.075) !important;
  --highlight-2: rgba(255, 255, 255, 0.075) !important;
  --icon-color-active: rgb(166, 139, 249) !important;
  --input-date-separator: rgb(138, 92, 245) !important;
  --input-placeholder-color: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --italic-color: rgb(97, 97, 97) !important;
  --light: rgb(33, 33, 33) !important;
  --lightgray: rgb(30, 30, 31) !important;
  --link-color: rgb(166, 139, 249) !important;
  --link-color-hover: rgb(197, 182, 252) !important;
  --link-external-color: rgb(166, 139, 249) !important;
  --link-external-color-hover: rgb(197, 182, 252) !important;
  --link-unresolved-color: rgb(166, 139, 249) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --main-color: white !important;
  --main-color-05: rgba(255, 255, 255, 0.116) !important;
  --main-color-2: rgb(224, 224, 224) !important;
  --main-color-inverted: black !important;
  --main-color-inverted-2: rgb(44, 44, 44) !important;
  --menu-background: rgb(30, 30, 31) !important;
  --menu-radius: 1em !important;
  --metadata-input-height: 28px !important;
  --modal-background: rgb(33, 33, 33) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color-collapsed: rgb(138, 92, 245) !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(166, 139, 249) !important;
  --nav-tag-color: rgb(138, 92, 245) !important;
  --pdf-background: rgb(33, 33, 33) !important;
  --pdf-page-background: rgb(33, 33, 33) !important;
  --pdf-sidebar-background: rgb(33, 33, 33) !important;
  --pill-color-remove: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: rgb(33, 33, 33) !important;
  --radius-m: 1em !important;
  --ribbon-background: rgb(30, 30, 31) !important;
  --ribbon-background-collapsed: rgb(33, 33, 33) !important;
  --search-result-background: rgb(33, 33, 33) !important;
  --secondary: rgb(166, 139, 249) !important;
  --shadow-1: rgba(8, 2, 24, 0.5) !important;
  --shadow-2: rgba(18, 18, 18, 0.4) !important;
  --shadow-3: rgba(0, 0, 0, 0.26) !important;
  --shadow-4: hsla(258, 44.1%, -10%, .5) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --status-bar-background: rgb(30, 30, 31) !important;
  --status-bar-border-color: rgba(105, 105, 105, 0.441) !important;
  --status-bar-radius: 1em 0 0 0 !important;
  --suggestion-background: rgb(33, 33, 33) !important;
  --tab-background-active: rgb(33, 33, 33) !important;
  --tab-container-background: rgb(30, 30, 31) !important;
  --tab-outline-color: rgba(105, 105, 105, 0.441) !important;
  --tab-switcher-background: rgb(30, 30, 31) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 30, 31), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(166, 139, 249) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tc: rgb(194, 194, 194) !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-color-inverted: rgb(223, 223, 223) !important;
  --text-faint: rgb(138, 92, 245) !important;
  --text-selection: rgba(138, 92, 245, 0.33) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --titlebar-background: rgb(30, 30, 31) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(97, 97, 97);
  outline: rgb(97, 97, 97) none 0px;
  text-decoration: rgb(97, 97, 97);
  text-decoration-color: rgb(97, 97, 97);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(97, 97, 97);
  outline: rgb(97, 97, 97) none 0px;
  text-decoration: rgb(97, 97, 97);
  text-decoration-color: rgb(97, 97, 97);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(53, 53, 53);
  color: rgb(194, 194, 194);
  font-weight: 600;
  outline: rgb(194, 194, 194) none 0px;
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body del {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration: line-through rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
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
  text-decoration: rgb(138, 92, 245);
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
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-color: rgba(68, 138, 255, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(68, 138, 255, 0.5);
  border-right-color: rgba(68, 138, 255, 0.5);
  border-top-color: rgba(68, 138, 255, 0.5);
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="dark"] body .callout > .callout-content {
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  background-color: rgba(255, 6, 93, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  background-color: rgba(255, 160, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration: rgb(194, 194, 194);
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
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 900;
  text-decoration: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10.4px;
  border-bottom-right-radius: 10.4px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10.4px;
  border-top-right-radius: 10.4px;
  color: rgb(255, 255, 255);
}`,
    toc: `html[saved-theme="dark"] body li.depth-0 {
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
  text-decoration: underline dotted rgb(194, 194, 194);
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
  --background-1: rgb(223, 212, 247) !important;
  --background-1-h: #bdbdbd !important;
  --background-1-item: #5c5c5c !important;
  --background-1_2: rgb(234, 234, 234) !important;
  --background-2: rgb(255, 255, 255) !important;
  --background-2_h: 258 !important;
  --background-2_l: 99% !important;
  --background-2_s: 10% !important;
  --background-3: rgb(250, 250, 250) !important;
  --background-3-1: rgb(197, 197, 197) !important;
  --background-3-2: rgba(197, 197, 197, 0.288) !important;
  --background-4: white !important;
  --background-5: rgba(138, 92, 245, 0.9) !important;
  --background-6: rgba(138, 92, 245, 0.2) !important;
  --background-7: rgb(221, 221, 221) !important;
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-modifier-form-field: rgb(250, 250, 250) !important;
  --background-modifier-form-field-hover: rgb(250, 250, 250) !important;
  --background-primary: rgb(245, 245, 245) !important;
  --background-secondary: rgb(255, 255, 255) !important;
  --bases-cards-background: rgb(245, 245, 245) !important;
  --bases-cards-radius: 1em !important;
  --bases-table-cell-background-active: rgb(245, 245, 245) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-header-background: rgb(245, 245, 245) !important;
  --bases-table-summary-background: rgb(245, 245, 245) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --blur-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent)) !important;
  --bold-modifier: 300 !important;
  --bold-weight: 700 !important;
  --callout-title-weight: 700;
  --canvas-background: rgb(255, 255, 255) !important;
  --canvas-card-label-color: rgb(138, 92, 245) !important;
  --canvas-dot-pattern: rgb(197, 197, 197) !important;
  --checkbox-border-color: rgb(138, 92, 245) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: rgb(245, 245, 245) !important;
  --code-background: rgb(234, 234, 234) !important;
  --code-comment: rgb(138, 92, 245) !important;
  --collapse-icon-color: rgb(138, 92, 245) !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(153, 115, 247) !important;
  --color-accent-2: rgb(166, 139, 249) !important;
  --color-base-00: rgb(250, 250, 250) !important;
  --color-base-50: rgb(138, 92, 245) !important;
  --colored-accent-1: rgb(138, 92, 245) !important;
  --colored-accent-2: rgba(138, 92, 245, 0.5) !important;
  --colored-accent-3: rgba(138, 92, 245, 0.3) !important;
  --colored-accent-4: rgba(138, 92, 245, 0.1) !important;
  --colored-accent-5: rgba(138, 92, 245, 0.05) !important;
  --colored-accent-i1: hsl(258, 88%, -1700%) !important;
  --colored-accent-i2: hsl(258, 88%, -4600%) !important;
  --custom-accent-bold: rgb(138, 92, 245) !important;
  --divider-color: rgba(200, 200, 200, 0.441) !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --dropdown-background: rgb(250, 250, 250) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --file-header-background: rgb(245, 245, 245) !important;
  --file-header-background-focused: rgb(245, 245, 245) !important;
  --flair-background: rgb(250, 250, 250) !important;
  --footnote-id-color-no-occurrences: rgb(138, 92, 245) !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-node-unresolved: rgb(138, 92, 245) !important;
  --gray: rgb(138, 92, 245) !important;
  --heading-formatting: rgb(138, 92, 245) !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgba(138, 92, 245, 0.1) !important;
  --highlight-1: rgba(0, 0, 0, 0.056) !important;
  --highlight-2: rgba(214, 214, 214, 0.308) !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --input-date-separator: rgb(138, 92, 245) !important;
  --input-placeholder-color: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --interactive-normal: rgb(250, 250, 250) !important;
  --italic-color: rgb(154, 154, 154) !important;
  --light: rgb(245, 245, 245) !important;
  --lightgray: rgb(255, 255, 255) !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-color-hover: rgb(166, 139, 249) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-external-color-hover: rgb(166, 139, 249) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --main-color: black !important;
  --main-color-05: rgba(0, 0, 0, 0.116) !important;
  --main-color-2: rgb(56, 56, 56) !important;
  --main-color-inverted: white !important;
  --main-color-inverted-2: rgb(252, 252, 252) !important;
  --menu-background: rgb(255, 255, 255) !important;
  --menu-radius: 1em !important;
  --metadata-input-height: 28px !important;
  --modal-background: rgb(245, 245, 245) !important;
  --nav-collapse-icon-color: rgb(138, 92, 245) !important;
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --nav-heading-color-collapsed: rgb(138, 92, 245) !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --nav-tag-color: rgb(138, 92, 245) !important;
  --pdf-background: rgb(245, 245, 245) !important;
  --pdf-page-background: rgb(245, 245, 245) !important;
  --pdf-sidebar-background: rgb(245, 245, 245) !important;
  --pill-color-remove: rgb(138, 92, 245) !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --popover-height: 1250px !important;
  --popover-width: 1050px !important;
  --prompt-background: rgb(245, 245, 245) !important;
  --radius-m: 1em !important;
  --raised-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent)) !important;
  --ribbon-background: rgb(255, 255, 255) !important;
  --ribbon-background-collapsed: rgb(245, 245, 245) !important;
  --search-result-background: rgb(245, 245, 245) !important;
  --secondary: rgb(138, 92, 245) !important;
  --shadow-1: rgba(8, 2, 24, 0.5) !important;
  --shadow-2: rgba(0, 0, 0, 0.257) !important;
  --shadow-3: rgba(0, 0, 0, 0.08) !important;
  --shadow-4: rgba(192, 178, 225, 0.2) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --status-bar-background: rgb(255, 255, 255) !important;
  --status-bar-border-color: rgba(200, 200, 200, 0.441) !important;
  --status-bar-radius: 1em 0 0 0 !important;
  --suggestion-background: rgb(245, 245, 245) !important;
  --tab-background-active: rgb(245, 245, 245) !important;
  --tab-container-background: rgb(255, 255, 255) !important;
  --tab-outline-color: rgba(200, 200, 200, 0.441) !important;
  --tab-switcher-background: rgb(255, 255, 255) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color: rgb(138, 92, 245) !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: rgb(138, 92, 245) !important;
  --table-header-weight: 700 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tc: rgb(67, 67, 67) !important;
  --tertiary: rgb(166, 139, 249) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-accent-hover: rgb(166, 139, 249) !important;
  --text-color-inverted: black !important;
  --text-faint: rgb(138, 92, 245) !important;
  --text-selection: rgba(138, 92, 245, 0.2) !important;
  --textHighlight: rgba(138, 92, 245, 0.1) !important;
  --titlebar-background: rgb(255, 255, 255) !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
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
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(154, 154, 154);
  outline: rgb(154, 154, 154) none 0px;
  text-decoration: rgb(154, 154, 154);
  text-decoration-color: rgb(154, 154, 154);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(154, 154, 154);
  outline: rgb(154, 154, 154) none 0px;
  text-decoration: rgb(154, 154, 154);
  text-decoration-color: rgb(154, 154, 154);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(221, 221, 221);
  color: rgb(67, 67, 67);
  font-weight: 600;
  outline: rgb(67, 67, 67) none 0px;
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body del {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration: line-through rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
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
  text-decoration: rgb(138, 92, 245);
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
  border-left-color: rgb(138, 92, 245);
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
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgba(68, 138, 255, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(68, 138, 255, 0.5);
  border-right-color: rgba(68, 138, 255, 0.5);
  border-top-color: rgba(68, 138, 255, 0.5);
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  background-color: rgba(255, 6, 93, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  background-color: rgba(255, 160, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
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
  text-decoration: rgb(67, 67, 67);
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
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 900;
  text-decoration: rgb(0, 0, 0);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10.4px;
  border-bottom-right-radius: 10.4px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10.4px;
  border-top-right-radius: 10.4px;
  color: rgb(0, 0, 0);
}`,
    toc: `html[saved-theme="light"] body li.depth-0 {
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
  text-decoration: underline dotted rgb(67, 67, 67);
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
};
