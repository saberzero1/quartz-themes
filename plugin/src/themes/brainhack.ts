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
  --background-1: #171717;
  --background-1-h: rgb(138, 92, 245);
  --background-1-item: #b3b3b3;
  --background-2: rgb(30, 30, 31);
  --background-2_h: 258;
  --background-2_l: 10%;
  --background-2_s: 0%;
  --background-3: rgb(33, 33, 33);
  --background-3-1: rgb(70, 70, 70);
  --background-3-2: rgba(70, 70, 70, 0.27);
  --background-4: rgb(12, 12, 12);
  --background-5: rgba(138, 92, 245, 0.3);
  --background-6: rgba(165, 160, 176, 0.2);
  --background-7: rgb(53, 53, 53);
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-primary: rgb(33, 33, 33);
  --background-secondary: rgb(30, 30, 31);
  --bases-cards-background: rgb(33, 33, 33);
  --bases-cards-radius: 1em;
  --bases-table-cell-background-active: rgb(33, 33, 33);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-header-background: rgb(33, 33, 33);
  --bases-table-summary-background: rgb(33, 33, 33);
  --blockquote-border-color: rgb(138, 92, 245);
  --bold-modifier: 300;
  --bold-weight: 700;
  --callout-title-weight: 700;
  --canvas-background: rgb(30, 30, 31);
  --canvas-card-label-color: rgb(138, 92, 245);
  --canvas-dot-pattern: rgb(70, 70, 70);
  --checkbox-border-color: rgb(138, 92, 245);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: rgb(33, 33, 33);
  --code-background: rgb(33, 33, 33);
  --code-comment: rgb(138, 92, 245);
  --collapse-icon-color: rgb(138, 92, 245);
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-base-00: rgb(33, 33, 33);
  --color-base-50: rgb(138, 92, 245);
  --colored-accent-1: rgb(138, 92, 245);
  --colored-accent-2: rgba(138, 92, 245, 0.5);
  --colored-accent-3: rgba(138, 92, 245, 0.3);
  --colored-accent-4: rgba(138, 92, 245, 0.1);
  --colored-accent-5: rgba(138, 92, 245, 0.05);
  --colored-accent-i1: hsl(258, 88%, -1700%);
  --colored-accent-i2: hsl(258, 88%, -4600%);
  --custom-accent-bold: rgb(138, 92, 245);
  --divider-color: rgba(105, 105, 105, 0.441);
  --divider-color-hover: rgb(138, 92, 245);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --file-header-background: rgb(33, 33, 33);
  --file-header-background-focused: rgb(33, 33, 33);
  --footnote-id-color-no-occurrences: rgb(138, 92, 245);
  --graph-node-focused: rgb(166, 139, 249);
  --graph-node-unresolved: rgb(138, 92, 245);
  --gray: var(--text-faint);
  --heading-formatting: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --highlight-1: rgba(255, 255, 255, 0.075);
  --highlight-2: rgba(255, 255, 255, 0.075);
  --icon-color-active: rgb(166, 139, 249);
  --input-date-separator: rgb(138, 92, 245);
  --input-placeholder-color: rgb(138, 92, 245);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --italic-color: rgb(97, 97, 97);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --main-color: white;
  --main-color-05: rgba(255, 255, 255, 0.116);
  --main-color-2: rgb(224, 224, 224);
  --main-color-inverted: black;
  --main-color-inverted-2: rgb(44, 44, 44);
  --menu-background: rgb(30, 30, 31);
  --menu-radius: 1em;
  --metadata-input-height: 28px;
  --modal-background: rgb(33, 33, 33);
  --nav-collapse-icon-color: rgb(138, 92, 245);
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245);
  --nav-heading-color-collapsed: rgb(138, 92, 245);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-tag-color: rgb(138, 92, 245);
  --pdf-background: rgb(33, 33, 33);
  --pdf-page-background: rgb(33, 33, 33);
  --pdf-sidebar-background: rgb(33, 33, 33);
  --pill-color-remove: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(166, 139, 249);
  --popover-height: 1250px;
  --popover-width: 1050px;
  --prompt-background: rgb(33, 33, 33);
  --radius-m: 1em;
  --ribbon-background: rgb(30, 30, 31);
  --ribbon-background-collapsed: rgb(33, 33, 33);
  --search-result-background: rgb(33, 33, 33);
  --secondary: var(--text-accent);
  --shadow-1: rgba(8, 2, 24, 0.5);
  --shadow-2: rgba(18, 18, 18, 0.4);
  --shadow-3: rgba(0, 0, 0, 0.26);
  --shadow-4: hsla(258, 44.1%, -10%, .5);
  --sidebar-markdown-font-size: 14.4px;
  --status-bar-background: rgb(30, 30, 31);
  --status-bar-border-color: rgba(105, 105, 105, 0.441);
  --status-bar-radius: 1em 0 0 0;
  --suggestion-background: rgb(33, 33, 33);
  --tab-background-active: rgb(33, 33, 33);
  --tab-container-background: rgb(30, 30, 31);
  --tab-outline-color: rgba(105, 105, 105, 0.441);
  --tab-switcher-background: rgb(30, 30, 31);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(30, 30, 31), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: rgb(138, 92, 245);
  --table-header-weight: 700;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --tc: rgb(194, 194, 194);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-color-inverted: rgb(223, 223, 223);
  --text-faint: rgb(138, 92, 245);
  --text-selection: rgba(138, 92, 245, 0.33);
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: rgb(30, 30, 31);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(194, 194, 194);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(194, 194, 194);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(30, 30, 31);
  color: rgb(194, 194, 194);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(105, 105, 105, 0.44);
  border-right-style: dashed;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(105, 105, 105, 0.44);
  color: rgb(194, 194, 194);
}

body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(194, 194, 194);
}`,
    typography: `body .page article p > b, b {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .page article p > em, em {
  color: rgb(97, 97, 97);
  outline: rgb(97, 97, 97) none 0px;
  text-decoration: rgb(97, 97, 97);
  text-decoration-color: rgb(97, 97, 97);
}

body .page article p > i, i {
  color: rgb(97, 97, 97);
  outline: rgb(97, 97, 97) none 0px;
  text-decoration: rgb(97, 97, 97);
  text-decoration-color: rgb(97, 97, 97);
}

body .page article p > strong, strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .text-highlight {
  background-color: rgb(53, 53, 53);
  color: rgb(194, 194, 194);
  font-weight: 600;
  outline: rgb(194, 194, 194) none 0px;
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body del {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration: line-through rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}`,
    lists: `body dd {
  color: rgb(194, 194, 194);
}

body dt {
  color: rgb(194, 194, 194);
}

body ol > li {
  color: rgb(194, 194, 194);
}

body ol.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body ul > li {
  color: rgb(194, 194, 194);
}

body ul.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  background-color: rgb(33, 33, 33);
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body table {
  color: rgb(194, 194, 194);
  margin-top: 15px;
  width: 204.844px;
}

body td {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  border-top-width: 0px;
  color: rgb(194, 194, 194);
}

body th {
  border-bottom-color: rgb(218, 218, 218);
  border-left-color: rgb(218, 218, 218);
  border-right-color: rgb(218, 218, 218);
  border-top-color: rgb(218, 218, 218);
  border-top-left-radius: 8px;
  font-weight: 400;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 33, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 33, 33);
  color: rgb(194, 194, 194);
}

body pre > code, pre:has(> code) {
  background-color: rgb(33, 33, 33);
}

body pre:has(> code) {
  background-color: rgb(33, 33, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body figcaption {
  color: rgb(194, 194, 194);
}

body figure {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body img {
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

body video {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

body .footnotes {
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

body .transclude {
  border-bottom-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body .transclude-inner {
  border-bottom-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body li.task-list-item[data-task='!'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='*'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='-'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='/'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='>'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='?'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='I'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='S'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='b'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='c'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='d'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='f'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='i'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='k'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='l'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='p'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='u'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body li.task-list-item[data-task='w'] {
  color: rgb(194, 194, 194);
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(68, 138, 255, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(68, 138, 255, 0.5);
  border-right-color: rgba(68, 138, 255, 0.5);
  border-top-color: rgba(68, 138, 255, 0.5);
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(255, 6, 93, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="example"] {
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="note"] {
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="question"] {
  background-color: rgba(255, 160, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > * {
  color: rgb(194, 194, 194);
  outline: rgb(194, 194, 194) none 0px;
  text-decoration: rgb(194, 194, 194);
  text-decoration-color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(194, 194, 194);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(30, 30, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(194, 194, 194);
}

body h1 {
  color: rgb(224, 224, 224);
}

body h2 {
  color: rgb(224, 224, 224);
}

body h2.page-title, h2.page-title a {
  color: rgb(194, 194, 194);
}

body h3 {
  color: rgb(194, 194, 194);
}

body h4 {
  color: rgb(194, 194, 194);
}

body h5 {
  color: rgb(194, 194, 194);
}

body h6 {
  color: rgb(194, 194, 194);
}

body hr {
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-right-style: dashed;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 900;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-weight: 900;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 900;
}`,
    footer: `body footer {
  background-color: rgb(30, 30, 31);
  border-bottom-color: rgba(105, 105, 105, 0.44);
  border-left-color: rgba(105, 105, 105, 0.44);
  border-right-color: rgba(105, 105, 105, 0.44);
  border-top-color: rgba(105, 105, 105, 0.44);
  border-top-left-radius: 12px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(194, 194, 194);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body ul.section-ul {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
  color: rgb(194, 194, 194);
}

body .navigation-progress {
  background-color: rgb(30, 30, 31);
}

body abbr {
  color: rgb(194, 194, 194);
  text-decoration: underline dotted rgb(194, 194, 194);
}

body details {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body kbd {
  background-color: rgb(33, 33, 33);
}

body progress {
  border-bottom-color: rgb(194, 194, 194);
  border-left-color: rgb(194, 194, 194);
  border-right-color: rgb(194, 194, 194);
  border-top-color: rgb(194, 194, 194);
}

body sub {
  color: rgb(194, 194, 194);
}

body summary {
  color: rgb(194, 194, 194);
}

body sup {
  color: rgb(194, 194, 194);
}`,
  },
  light: {
    base: `:root:root {
  --background-1: rgb(223, 212, 247);
  --background-1-h: #bdbdbd;
  --background-1-item: #5c5c5c;
  --background-1_2: rgb(234, 234, 234);
  --background-2: rgb(255, 255, 255);
  --background-2_h: 258;
  --background-2_l: 99%;
  --background-2_s: 10%;
  --background-3: rgb(250, 250, 250);
  --background-3-1: rgb(197, 197, 197);
  --background-3-2: rgba(197, 197, 197, 0.288);
  --background-4: white;
  --background-5: rgba(138, 92, 245, 0.9);
  --background-6: rgba(138, 92, 245, 0.2);
  --background-7: rgb(221, 221, 221);
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-form-field: rgb(250, 250, 250);
  --background-modifier-form-field-hover: rgb(250, 250, 250);
  --background-primary: rgb(245, 245, 245);
  --background-secondary: rgb(255, 255, 255);
  --bases-cards-background: rgb(245, 245, 245);
  --bases-cards-radius: 1em;
  --bases-table-cell-background-active: rgb(245, 245, 245);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-header-background: rgb(245, 245, 245);
  --bases-table-summary-background: rgb(245, 245, 245);
  --blockquote-border-color: rgb(138, 92, 245);
  --blur-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent));
  --bold-modifier: 300;
  --bold-weight: 700;
  --callout-title-weight: 700;
  --canvas-background: rgb(255, 255, 255);
  --canvas-card-label-color: rgb(138, 92, 245);
  --canvas-dot-pattern: rgb(197, 197, 197);
  --checkbox-border-color: rgb(138, 92, 245);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: rgb(245, 245, 245);
  --code-background: rgb(234, 234, 234);
  --code-comment: rgb(138, 92, 245);
  --collapse-icon-color: rgb(138, 92, 245);
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(153, 115, 247);
  --color-accent-2: rgb(166, 139, 249);
  --color-base-00: rgb(250, 250, 250);
  --color-base-50: rgb(138, 92, 245);
  --colored-accent-1: rgb(138, 92, 245);
  --colored-accent-2: rgba(138, 92, 245, 0.5);
  --colored-accent-3: rgba(138, 92, 245, 0.3);
  --colored-accent-4: rgba(138, 92, 245, 0.1);
  --colored-accent-5: rgba(138, 92, 245, 0.05);
  --colored-accent-i1: hsl(258, 88%, -1700%);
  --colored-accent-i2: hsl(258, 88%, -4600%);
  --custom-accent-bold: rgb(138, 92, 245);
  --divider-color: rgba(200, 200, 200, 0.441);
  --divider-color-hover: rgb(138, 92, 245);
  --dropdown-background: rgb(250, 250, 250);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --file-header-background: rgb(245, 245, 245);
  --file-header-background-focused: rgb(245, 245, 245);
  --flair-background: rgb(250, 250, 250);
  --footnote-id-color-no-occurrences: rgb(138, 92, 245);
  --graph-node-focused: rgb(138, 92, 245);
  --graph-node-unresolved: rgb(138, 92, 245);
  --gray: var(--text-faint);
  --heading-formatting: rgb(138, 92, 245);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-active-hover);
  --highlight-1: rgba(0, 0, 0, 0.056);
  --highlight-2: rgba(214, 214, 214, 0.308);
  --icon-color-active: rgb(138, 92, 245);
  --input-date-separator: rgb(138, 92, 245);
  --input-placeholder-color: rgb(138, 92, 245);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --interactive-normal: rgb(250, 250, 250);
  --italic-color: rgb(154, 154, 154);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(138, 92, 245);
  --link-color-hover: rgb(166, 139, 249);
  --link-external-color: rgb(138, 92, 245);
  --link-external-color-hover: rgb(166, 139, 249);
  --link-unresolved-color: rgb(138, 92, 245);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --main-color: black;
  --main-color-05: rgba(0, 0, 0, 0.116);
  --main-color-2: rgb(56, 56, 56);
  --main-color-inverted: white;
  --main-color-inverted-2: rgb(252, 252, 252);
  --menu-background: rgb(255, 255, 255);
  --menu-radius: 1em;
  --metadata-input-height: 28px;
  --modal-background: rgb(245, 245, 245);
  --nav-collapse-icon-color: rgb(138, 92, 245);
  --nav-collapse-icon-color-collapsed: rgb(138, 92, 245);
  --nav-heading-color-collapsed: rgb(138, 92, 245);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-tag-color: rgb(138, 92, 245);
  --pdf-background: rgb(245, 245, 245);
  --pdf-page-background: rgb(245, 245, 245);
  --pdf-sidebar-background: rgb(245, 245, 245);
  --pill-color-remove: rgb(138, 92, 245);
  --pill-color-remove-hover: rgb(138, 92, 245);
  --popover-height: 1250px;
  --popover-width: 1050px;
  --prompt-background: rgb(245, 245, 245);
  --radius-m: 1em;
  --raised-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent));
  --ribbon-background: rgb(255, 255, 255);
  --ribbon-background-collapsed: rgb(245, 245, 245);
  --search-result-background: rgb(245, 245, 245);
  --secondary: var(--text-accent);
  --shadow-1: rgba(8, 2, 24, 0.5);
  --shadow-2: rgba(0, 0, 0, 0.257);
  --shadow-3: rgba(0, 0, 0, 0.08);
  --shadow-4: rgba(192, 178, 225, 0.2);
  --sidebar-markdown-font-size: 14.4px;
  --status-bar-background: rgb(255, 255, 255);
  --status-bar-border-color: rgba(200, 200, 200, 0.441);
  --status-bar-radius: 1em 0 0 0;
  --suggestion-background: rgb(245, 245, 245);
  --tab-background-active: rgb(245, 245, 245);
  --tab-container-background: rgb(255, 255, 255);
  --tab-outline-color: rgba(200, 200, 200, 0.441);
  --tab-switcher-background: rgb(255, 255, 255);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color: rgb(138, 92, 245);
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: rgb(138, 92, 245);
  --table-header-weight: 700;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tc: rgb(67, 67, 67);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(138, 92, 245);
  --text-accent-hover: rgb(166, 139, 249);
  --text-color-inverted: black;
  --text-faint: rgb(138, 92, 245);
  --text-selection: rgba(138, 92, 245, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: rgb(255, 255, 255);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(67, 67, 67);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
  color: rgb(67, 67, 67);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(67, 67, 67);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(200, 200, 200, 0.44);
  border-right-style: dashed;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(200, 200, 200, 0.44);
  color: rgb(67, 67, 67);
}

body div#quartz-root {
  background-color: rgb(245, 245, 245);
  color: rgb(67, 67, 67);
}`,
    typography: `body .page article p > b, b {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .page article p > em, em {
  color: rgb(154, 154, 154);
  outline: rgb(154, 154, 154) none 0px;
  text-decoration: rgb(154, 154, 154);
  text-decoration-color: rgb(154, 154, 154);
}

body .page article p > i, i {
  color: rgb(154, 154, 154);
  outline: rgb(154, 154, 154) none 0px;
  text-decoration: rgb(154, 154, 154);
  text-decoration-color: rgb(154, 154, 154);
}

body .page article p > strong, strong {
  background-color: rgba(138, 92, 245, 0.1);
  color: rgb(138, 92, 245);
  font-weight: 900;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body .text-highlight {
  background-color: rgb(221, 221, 221);
  color: rgb(67, 67, 67);
  font-weight: 600;
  outline: rgb(67, 67, 67) none 0px;
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body del {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration: line-through rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}`,
    lists: `body dd {
  color: rgb(67, 67, 67);
}

body dt {
  color: rgb(67, 67, 67);
}

body ol > li {
  color: rgb(67, 67, 67);
}

body ol.overflow {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body ul > li {
  color: rgb(67, 67, 67);
}

body ul.overflow {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(138, 92, 245);
  text-decoration: rgb(138, 92, 245);
}

body blockquote {
  background-color: rgb(250, 250, 250);
  padding-bottom: 12.8px;
  padding-top: 12.8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body table {
  color: rgb(67, 67, 67);
  margin-top: 15px;
  width: 204.844px;
}

body td {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  border-top-width: 0px;
  color: rgb(67, 67, 67);
}

body th {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  border-top-left-radius: 8px;
  font-weight: 400;
}`,
    code: `body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(234, 234, 234);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(234, 234, 234);
  color: rgb(67, 67, 67);
}

body pre > code, pre:has(> code) {
  background-color: rgb(234, 234, 234);
}

body pre:has(> code) {
  background-color: rgb(234, 234, 234);
}`,
    images: `body audio {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body figcaption {
  color: rgb(67, 67, 67);
}

body figure {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body img {
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

body video {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 14px;
  border-bottom-right-radius: 14px;
  border-top-left-radius: 14px;
  border-top-right-radius: 14px;
}

body .footnotes {
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

body .transclude {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body .transclude-inner {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
}

body li.task-list-item[data-task='!'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='*'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='-'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='/'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='>'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='?'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='I'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='S'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='b'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='c'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='d'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='f'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='i'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='k'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='l'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='p'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='u'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body li.task-list-item[data-task='w'] {
  color: rgb(67, 67, 67);
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(68, 138, 255, 0.5);
  border-bottom-style: dashed;
  border-bottom-width: 2px;
  border-left-color: rgba(68, 138, 255, 0.5);
  border-right-color: rgba(68, 138, 255, 0.5);
  border-top-color: rgba(68, 138, 255, 0.5);
  padding-bottom: 3.12px;
  padding-top: 6.24px;
}

body .callout .callout-title > .callout-title-inner > p {
  font-weight: 700;
}

body .callout > .callout-content {
  padding-bottom: 12.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 176, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(255, 6, 93, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="example"] {
  background-color: rgba(124, 77, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(255, 82, 82, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="note"] {
  background-color: rgba(68, 138, 255, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="question"] {
  background-color: rgba(255, 160, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 200, 83, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 191, 165, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 184, 212, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(255, 145, 0, 0.1);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(250, 250, 250);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > * {
  color: rgb(67, 67, 67);
  outline: rgb(67, 67, 67) none 0px;
  text-decoration: rgb(67, 67, 67);
  text-decoration-color: rgb(67, 67, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(67, 67, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(67, 67, 67);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(67, 67, 67);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(67, 67, 67);
}

body h1 {
  color: rgb(56, 56, 56);
}

body h2 {
  color: rgb(56, 56, 56);
}

body h2.page-title, h2.page-title a {
  color: rgb(67, 67, 67);
}

body h3 {
  color: rgb(67, 67, 67);
}

body h4 {
  color: rgb(67, 67, 67);
}

body h5 {
  color: rgb(67, 67, 67);
}

body h6 {
  color: rgb(67, 67, 67);
}

body hr {
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-right-style: dashed;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 900;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-weight: 900;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `body li.depth-0 {
  font-weight: 900;
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgba(200, 200, 200, 0.44);
  border-left-color: rgba(200, 200, 200, 0.44);
  border-right-color: rgba(200, 200, 200, 0.44);
  border-top-color: rgba(200, 200, 200, 0.44);
  border-top-left-radius: 12px;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(67, 67, 67);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body ul.section-ul {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(138, 92, 245);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
  color: rgb(67, 67, 67);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(67, 67, 67);
  text-decoration: underline dotted rgb(67, 67, 67);
}

body details {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body kbd {
  background-color: rgb(234, 234, 234);
}

body progress {
  border-bottom-color: rgb(67, 67, 67);
  border-left-color: rgb(67, 67, 67);
  border-right-color: rgb(67, 67, 67);
  border-top-color: rgb(67, 67, 67);
}

body sub {
  color: rgb(67, 67, 67);
}

body summary {
  color: rgb(67, 67, 67);
}

body sup {
  color: rgb(67, 67, 67);
}`,
  },
};
