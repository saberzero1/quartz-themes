import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sakurajima", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 30 !important;
  --accent-l: 40% !important;
  --accent-s: 64% !important;
  --background-modifier-active-hover: hsla(30, 64%, 40%, 0.1) !important;
  --background-primary: rgb(46, 46, 46) !important;
  --background-primary-alt: rgb(28, 26, 25) !important;
  --bases-cards-background: rgb(46, 46, 46) !important;
  --bases-cards-cover-background: rgb(28, 26, 25) !important;
  --bases-group-heading-property-color: rgb(181, 174, 165) !important;
  --bases-table-cell-background-active: rgb(46, 46, 46) !important;
  --bases-table-cell-background-disabled: rgb(28, 26, 25) !important;
  --bases-table-cell-background-selected: hsla(30, 64%, 40%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(30, 64%, 40%) !important;
  --bases-table-group-background: rgb(28, 26, 25) !important;
  --bases-table-header-background: rgb(46, 46, 46) !important;
  --bases-table-header-color: rgb(181, 174, 165) !important;
  --bases-table-summary-background: rgb(46, 46, 46) !important;
  --blockquote-background-color: rgba(28, 26, 25, 0.6) !important;
  --blockquote-border-color: rgb(196, 109, 10) !important;
  --blockquote-border-thickness: 6px !important;
  --blockquote-color: rgb(181, 174, 165) !important;
  --blockquote-font-style: bold !important;
  --button-radius: 8px !important;
  --canvas-background: rgb(46, 46, 46) !important;
  --caret-color: rgb(232, 222, 209) !important;
  --checkbox-border-color-hover: rgb(181, 174, 165) !important;
  --checkbox-color: hsl(30, 64%, 40%) !important;
  --checkbox-color-hover: hsl(27, 65.28%, 46%) !important;
  --checkbox-marker-color: rgb(46, 46, 46) !important;
  --checkbox-radius: 8px !important;
  --checklist-done-color: rgb(181, 174, 165) !important;
  --code-background: rgb(28, 26, 25) !important;
  --code-normal: rgb(232, 222, 209) !important;
  --code-punctuation: rgb(181, 174, 165) !important;
  --collapse-icon-color-collapsed: hsl(27, 65.28%, 46%) !important;
  --color-accent: hsl(30, 64%, 40%) !important;
  --color-accent-1: hsl(27, 65.28%, 46%) !important;
  --color-accent-2: hsl(25, 67.2%, 51.6%) !important;
  --color-accent-hsl: 30, 64%, 40% !important;
  --dark: rgb(232, 222, 209) !important;
  --darkgray: rgb(232, 222, 209) !important;
  --divider-color-hover: hsl(30, 64%, 40%) !important;
  --dropdown-background-brend-mode: rgb(125, 119, 114) !important;
  --embed-border-start: 2px solid hsl(30, 64%, 40%) !important;
  --file-header-background: rgb(46, 46, 46) !important;
  --file-header-background-focused: rgb(46, 46, 46) !important;
  --flair-color: rgb(232, 222, 209) !important;
  --footnote-id-color: rgb(181, 174, 165) !important;
  --graph-node: rgb(181, 174, 165) !important;
  --graph-node-focused: hsl(27, 65.28%, 46%) !important;
  --graph-text: rgb(232, 222, 209) !important;
  --gray: rgb(181, 174, 165) !important;
  --highlight: hsla(30, 64%, 40%, 0.1) !important;
  --icon-color: rgb(181, 174, 165) !important;
  --icon-color-active: hsl(27, 65.28%, 46%) !important;
  --icon-color-focused: rgb(232, 222, 209) !important;
  --icon-color-hover: rgb(181, 174, 165) !important;
  --input-radius: 8px !important;
  --interactive-accent: hsl(30, 64%, 40%) !important;
  --interactive-accent-hover: hsl(27, 65.28%, 46%) !important;
  --interactive-accent-hsl: 30, 64%, 40% !important;
  --light: rgb(46, 46, 46) !important;
  --link-color: hsl(27, 65.28%, 46%) !important;
  --link-color-hover: hsl(25, 67.2%, 51.6%) !important;
  --link-external-color: hsl(27, 65.28%, 46%) !important;
  --link-external-color-hover: hsl(25, 67.2%, 51.6%) !important;
  --link-unresolved-color: hsl(27, 65.28%, 46%) !important;
  --link-unresolved-decoration-color: hsla(30, 64%, 40%, 0.3) !important;
  --list-marker-color-collapsed: hsl(27, 65.28%, 46%) !important;
  --list-marker-color-hover: rgb(181, 174, 165) !important;
  --metadata-input-text-color: rgb(232, 222, 209) !important;
  --metadata-label-text-color: rgb(181, 174, 165) !important;
  --metadata-label-text-color-hover: rgb(181, 174, 165) !important;
  --modal-background: rgb(46, 46, 46) !important;
  --modal-radius: 8px !important;
  --nav-heading-color: rgb(232, 222, 209) !important;
  --nav-heading-color-collapsed-hover: rgb(181, 174, 165) !important;
  --nav-heading-color-hover: rgb(232, 222, 209) !important;
  --nav-item-background-selected: hsla(30, 64%, 40%, 0.15) !important;
  --nav-item-color: rgb(191, 141, 84) !important;
  --nav-item-color-active: rgb(232, 222, 209) !important;
  --nav-item-color-highlighted: hsl(27, 65.28%, 46%) !important;
  --nav-item-color-hover: rgb(232, 222, 209) !important;
  --nav-item-color-selected: rgb(232, 222, 209) !important;
  --nav-tag-color-active: rgb(181, 174, 165) !important;
  --nav-tag-color-hover: rgb(181, 174, 165) !important;
  --pdf-background: rgb(46, 46, 46) !important;
  --pdf-page-background: rgb(46, 46, 46) !important;
  --pdf-sidebar-background: rgb(46, 46, 46) !important;
  --pill-color: rgb(181, 174, 165) !important;
  --pill-color-hover: rgb(232, 222, 209) !important;
  --pill-color-remove-hover: hsl(27, 65.28%, 46%) !important;
  --prompt-background: rgb(46, 46, 46) !important;
  --ribbon-background: rgb(28, 26, 25) !important;
  --ribbon-background-collapsed: rgb(46, 46, 46) !important;
  --sakurajima-color-black-100: rgb(46, 46, 46) !important;
  --sakurajima-color-black-200: rgb(28, 26, 25) !important;
  --sakurajima-color-black-300: rgb(23, 22, 21) !important;
  --sakurajima-color-blue-100: rgb(58, 64, 145) !important;
  --sakurajima-color-blue-200: rgb(31, 39, 143) !important;
  --sakurajima-color-blue-300: rgb(16, 26, 158) !important;
  --sakurajima-color-gray-100: rgb(125, 119, 114) !important;
  --sakurajima-color-gray-200: rgb(128, 125, 122) !important;
  --sakurajima-color-gray-300: rgb(112, 112, 111) !important;
  --sakurajima-color-light-black-100: rgba(46, 46, 46, 0.6) !important;
  --sakurajima-color-light-black-200: rgba(28, 26, 25, 0.6) !important;
  --sakurajima-color-light-black-300: rgba(23, 22, 21, 0.6) !important;
  --sakurajima-color-orange-100: rgb(191, 141, 84) !important;
  --sakurajima-color-orange-200: rgb(194, 125, 47) !important;
  --sakurajima-color-orange-300: rgb(196, 109, 10) !important;
  --sakurajima-color-red-100: rgb(156, 65, 54) !important;
  --sakurajima-color-red-200: rgb(153, 53, 41) !important;
  --sakurajima-color-red-300: rgb(133, 22, 9) !important;
  --sakurajima-color-rust-100: rgb(117, 101, 68) !important;
  --sakurajima-color-rust-200: rgb(105, 84, 43) !important;
  --sakurajima-color-rust-300: rgb(82, 62, 23) !important;
  --sakurajima-color-white-100: rgb(232, 222, 209) !important;
  --sakurajima-color-white-200: rgb(181, 174, 165) !important;
  --sakurajima-color-white-300: rgb(145, 140, 134) !important;
  --search-clear-button-color: rgb(181, 174, 165) !important;
  --search-icon-color: rgb(181, 174, 165) !important;
  --search-result-background: rgb(46, 46, 46) !important;
  --secondary: hsl(27, 65.28%, 46%) !important;
  --setting-group-heading-color: rgb(232, 222, 209) !important;
  --setting-items-background: rgb(28, 26, 25) !important;
  --slider-thumb-radius: 8px !important;
  --slider-track-background: rgb(191, 141, 84) !important;
  --status-bar-text-color: rgb(181, 174, 165) !important;
  --suggestion-background: rgb(46, 46, 46) !important;
  --swatch-radius: 8px !important;
  --tab-background-active: rgb(46, 46, 46) !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(30, 64%, 40%) !important;
  --tab-text-color-active: rgb(181, 174, 165) !important;
  --tab-text-color-focused: rgb(145, 140, 134) !important;
  --tab-text-color-focused-active: rgb(191, 141, 84) !important;
  --tab-text-color-focused-active-current: rgb(191, 141, 84) !important;
  --tab-text-color-focused-highlighted: hsl(27, 65.28%, 46%) !important;
  --table-drag-handle-background-active: hsl(30, 64%, 40%) !important;
  --table-header-color: rgb(232, 222, 209) !important;
  --table-selection: hsla(30, 64%, 40%, 0.1) !important;
  --table-selection-border-color: hsl(30, 64%, 40%) !important;
  --tag-background: hsla(30, 64%, 40%, 0.1) !important;
  --tag-background-hover: hsla(30, 64%, 40%, 0.2) !important;
  --tag-border-color: hsla(30, 64%, 40%, 0.15) !important;
  --tag-border-color-hover: hsla(30, 64%, 40%, 0.15) !important;
  --tag-color: hsl(27, 65.28%, 46%) !important;
  --tag-color-hover: hsl(27, 65.28%, 46%) !important;
  --tertiary: hsl(25, 67.2%, 51.6%) !important;
  --text-accent: hsl(27, 65.28%, 46%) !important;
  --text-accent-hover: hsl(25, 67.2%, 51.6%) !important;
  --text-muted: rgb(181, 174, 165) !important;
  --text-normal: rgb(232, 222, 209) !important;
  --text-selection: hsla(30, 64%, 40%, 0.33) !important;
  --textHighlight: hsla(30, 64%, 40%, 0.1) !important;
  --titlebar-text-color: rgb(181, 174, 165) !important;
  --titlebar-text-color-focused: rgb(232, 222, 209) !important;
  --toggle-radius: 8px !important;
  --toggle-thumb-color: rgb(191, 141, 84) !important;
  --toggle-thumb-radius: 8px !important;
  --vault-profile-color: rgb(232, 222, 209) !important;
  --vault-profile-color-hover: rgb(232, 222, 209) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(232, 222, 209);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(46, 46, 46);
  color: rgb(232, 222, 209);
}

html body .bases-table {
  border-color: rgb(82, 62, 23);
}

html body .bases-table thead th {
  color: rgb(232, 222, 209);
}

html body .canvas-node {
  border-color: rgb(232, 222, 209);
}

html body .canvas-node-content {
  color: rgb(232, 222, 209);
}

html body .canvas-node-file {
  color: rgb(232, 222, 209);
}

html body .canvas-node-group {
  border-color: rgb(232, 222, 209);
}

html body .canvas-sidebar {
  border-color: rgb(232, 222, 209);
}

html body .note-properties-key {
  color: rgb(181, 174, 165);
}

html body .note-properties-row {
  border-color: rgb(181, 174, 165);
}

html body .note-properties-tags {
  background-color: rgba(167, 102, 37, 0.1);
  color: rgb(194, 110, 41);
}

html body .note-properties-value {
  color: rgb(181, 174, 165);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(232, 222, 209);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(232, 222, 209);
}

html body div#quartz-root {
  background-color: rgb(46, 46, 46);
  color: rgb(232, 222, 209);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body .page article p > em, html em {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body .page article p > i, html i {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body .page article p > strong, html strong {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body .text-highlight {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body del {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body h1.article-title {
  color: rgb(232, 222, 209);
}

html body li.task-list-item input[type="checkbox"] {
  border-radius: 8px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(167, 102, 37);
  border-color: rgb(167, 102, 37);
}

html body p {
  color: rgb(181, 174, 165);
  outline: rgb(181, 174, 165) none 0px;
  text-decoration-color: rgb(181, 174, 165);
}`,
    links: `html body a.external, html footer a {
  color: rgb(194, 110, 41);
  outline: rgb(194, 110, 41) none 0px;
  text-decoration-color: rgb(194, 110, 41);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(194, 110, 41);
  outline: rgb(194, 110, 41) none 0px;
  text-decoration-color: rgb(194, 110, 41);
}

html body a.internal.broken {
  color: rgb(194, 110, 41);
  outline: rgb(194, 110, 41) none 0px;
  text-decoration: underline rgba(167, 102, 37, 0.3);
  text-decoration-color: rgba(167, 102, 37, 0.3);
}`,
    lists: `html body dd {
  color: rgb(232, 222, 209);
}

html body dt {
  color: rgb(232, 222, 209);
}

html body ol > li {
  color: rgb(232, 222, 209);
}

html body ol.overflow {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body ul > li {
  color: rgb(232, 222, 209);
}

html body ul.overflow {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    blockquotes: `html body blockquote {
  background-color: rgba(28, 26, 25, 0.6);
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body table {
  border-bottom-color: rgb(82, 62, 23);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(82, 62, 23);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(82, 62, 23);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(82, 62, 23);
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(232, 222, 209);
  width: 227.219px;
}

html body td {
  border-bottom-color: rgb(82, 62, 23);
  border-bottom-width: 2px;
  border-left-color: rgb(82, 62, 23);
  border-right-color: rgb(82, 62, 23);
  border-right-width: 2px;
  border-top-color: rgb(82, 62, 23);
  border-top-width: 2px;
  color: rgb(232, 222, 209);
}

html body th {
  color: rgb(232, 222, 209);
}

html body thead {
  background-color: rgba(28, 26, 25, 0.6);
  border-bottom-color: rgb(82, 62, 23);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(82, 62, 23);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(82, 62, 23);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(82, 62, 23);
  border-top-style: solid;
  border-top-width: 2px;
}

html body tr {
  border-bottom-color: rgb(82, 62, 23);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(82, 62, 23);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(82, 62, 23);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(82, 62, 23);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    code: `html body code {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 26, 25);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 26, 25);
  color: rgb(232, 222, 209);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(28, 26, 25);
}

html body pre:has(> code) {
  background-color: rgb(28, 26, 25);
}`,
    images: `html body audio {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body figcaption {
  color: rgb(232, 222, 209);
}

html body figure {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body img {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body video {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(28, 26, 25);
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
}

html body .footnotes {
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

html body .transclude {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(167, 102, 37);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body .transclude-inner {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(232, 222, 209);
}

html body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 46);
}

html body .search > .search-container > .search-space > * {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration-color: rgb(232, 222, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 222, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(232, 222, 209);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(232, 222, 209);
}

html body .search > .search-container > .search-space > input {
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(232, 222, 209);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(167, 102, 37, 0.1);
  border-bottom-color: rgba(167, 102, 37, 0.15);
  border-left-color: rgba(167, 102, 37, 0.15);
  border-right-color: rgba(167, 102, 37, 0.15);
  border-top-color: rgba(167, 102, 37, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(194, 110, 41);
}

html body h1 {
  color: rgb(232, 222, 209);
}

html body h2 {
  color: rgb(232, 222, 209);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(232, 222, 209);
}

html body h3 {
  color: rgb(232, 222, 209);
}

html body h4 {
  color: rgb(232, 222, 209);
}

html body h5 {
  color: rgb(232, 222, 209);
}

html body h6 {
  color: rgb(232, 222, 209);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

html body ::-webkit-scrollbar-track {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(191, 141, 84);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(191, 141, 84);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(232, 222, 209);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}`,
    footer: `html body footer {
  color: rgb(181, 174, 165);
}

html body footer ul li a {
  color: rgb(181, 174, 165);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(232, 222, 209);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(191, 141, 84);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(191, 141, 84);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body li.section-li > .section .meta {
  color: rgb(191, 141, 84);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(191, 141, 84);
}

html body ul.section-ul {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}

html body .darkmode svg {
  color: rgb(181, 174, 165);
  stroke: rgb(181, 174, 165);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

html body .metadata {
  color: rgb(181, 174, 165);
}

html body .metadata-properties {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}

html body .page-header h2.page-title {
  color: rgb(232, 222, 209);
}

html body abbr {
  color: rgb(232, 222, 209);
}

html body details {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body input[type=text] {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}

html body kbd {
  background-color: rgb(28, 26, 25);
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

html body progress {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

html body sub {
  color: rgb(232, 222, 209);
}

html body summary {
  color: rgb(232, 222, 209);
}

html body sup {
  color: rgb(232, 222, 209);
}

html body ul.tags > li {
  background-color: rgba(167, 102, 37, 0.1);
  border-bottom-color: rgba(167, 102, 37, 0.15);
  border-left-color: rgba(167, 102, 37, 0.15);
  border-right-color: rgba(167, 102, 37, 0.15);
  border-top-color: rgba(167, 102, 37, 0.15);
  color: rgb(194, 110, 41);
}`,
  },
  light: {},
};
