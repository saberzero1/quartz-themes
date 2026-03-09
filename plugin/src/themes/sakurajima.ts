import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "sakurajima", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 30;
  --accent-l: 40%;
  --accent-s: 64%;
  --background-modifier-active-hover: rgba(167, 102, 37, 0.1);
  --background-primary: rgb(46, 46, 46);
  --background-primary-alt: rgb(28, 26, 25);
  --bases-cards-background: rgb(46, 46, 46);
  --bases-cards-cover-background: rgb(28, 26, 25);
  --bases-group-heading-property-color: rgb(181, 174, 165);
  --bases-table-cell-background-active: rgb(46, 46, 46);
  --bases-table-cell-background-disabled: rgb(28, 26, 25);
  --bases-table-cell-background-selected: rgba(167, 102, 37, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(167, 102, 37);
  --bases-table-group-background: rgb(28, 26, 25);
  --bases-table-header-background: rgb(46, 46, 46);
  --bases-table-header-color: rgb(181, 174, 165);
  --bases-table-summary-background: rgb(46, 46, 46);
  --blockquote-background-color: rgba(28, 26, 25, 0.6);
  --blockquote-border-color: rgb(196, 109, 10);
  --blockquote-border-thickness: 6px;
  --blockquote-color: rgb(181, 174, 165);
  --blockquote-font-style: bold;
  --button-radius: 8px;
  --canvas-background: rgb(46, 46, 46);
  --caret-color: rgb(232, 222, 209);
  --checkbox-border-color-hover: rgb(181, 174, 165);
  --checkbox-color: rgb(167, 102, 37);
  --checkbox-color-hover: rgb(194, 110, 41);
  --checkbox-marker-color: rgb(46, 46, 46);
  --checkbox-radius: 8px;
  --checklist-done-color: rgb(181, 174, 165);
  --code-background: rgb(28, 26, 25);
  --code-normal: rgb(232, 222, 209);
  --code-punctuation: rgb(181, 174, 165);
  --collapse-icon-color-collapsed: rgb(194, 110, 41);
  --color-accent: rgb(167, 102, 37);
  --color-accent-1: rgb(194, 110, 41);
  --color-accent-2: rgb(215, 119, 51);
  --color-accent-hsl: 30, 64%, 40%;
  --divider-color-hover: rgb(167, 102, 37);
  --dropdown-background-brend-mode: rgb(125, 119, 114);
  --embed-border-start: 2px solid rgb(167, 102, 37);
  --file-header-background: rgb(46, 46, 46);
  --file-header-background-focused: rgb(46, 46, 46);
  --flair-color: rgb(232, 222, 209);
  --footnote-id-color: rgb(181, 174, 165);
  --graph-node: rgb(181, 174, 165);
  --graph-node-focused: rgb(194, 110, 41);
  --graph-text: rgb(232, 222, 209);
  --icon-color: rgb(181, 174, 165);
  --icon-color-active: rgb(194, 110, 41);
  --icon-color-focused: rgb(232, 222, 209);
  --icon-color-hover: rgb(181, 174, 165);
  --input-radius: 8px;
  --interactive-accent: rgb(167, 102, 37);
  --interactive-accent-hover: rgb(194, 110, 41);
  --interactive-accent-hsl: 30, 64%, 40%;
  --link-color: rgb(194, 110, 41);
  --link-color-hover: rgb(215, 119, 51);
  --link-external-color: rgb(194, 110, 41);
  --link-external-color-hover: rgb(215, 119, 51);
  --link-unresolved-color: rgb(194, 110, 41);
  --link-unresolved-decoration-color: rgba(167, 102, 37, 0.3);
  --list-marker-color-collapsed: rgb(194, 110, 41);
  --list-marker-color-hover: rgb(181, 174, 165);
  --metadata-input-text-color: rgb(232, 222, 209);
  --metadata-label-text-color: rgb(181, 174, 165);
  --metadata-label-text-color-hover: rgb(181, 174, 165);
  --modal-background: rgb(46, 46, 46);
  --modal-radius: 8px;
  --nav-heading-color: rgb(232, 222, 209);
  --nav-heading-color-collapsed-hover: rgb(181, 174, 165);
  --nav-heading-color-hover: rgb(232, 222, 209);
  --nav-item-background-selected: rgba(167, 102, 37, 0.15);
  --nav-item-color: rgb(191, 141, 84);
  --nav-item-color-active: rgb(232, 222, 209);
  --nav-item-color-highlighted: rgb(194, 110, 41);
  --nav-item-color-hover: rgb(232, 222, 209);
  --nav-item-color-selected: rgb(232, 222, 209);
  --nav-tag-color-active: rgb(181, 174, 165);
  --nav-tag-color-hover: rgb(181, 174, 165);
  --pdf-background: rgb(46, 46, 46);
  --pdf-page-background: rgb(46, 46, 46);
  --pdf-sidebar-background: rgb(46, 46, 46);
  --pill-color: rgb(181, 174, 165);
  --pill-color-hover: rgb(232, 222, 209);
  --pill-color-remove-hover: rgb(194, 110, 41);
  --prompt-background: rgb(46, 46, 46);
  --ribbon-background: rgb(28, 26, 25);
  --ribbon-background-collapsed: rgb(46, 46, 46);
  --sakurajima-color-black-100: rgb(46, 46, 46);
  --sakurajima-color-black-200: rgb(28, 26, 25);
  --sakurajima-color-black-300: rgb(23, 22, 21);
  --sakurajima-color-blue-100: rgb(58, 64, 145);
  --sakurajima-color-blue-200: rgb(31, 39, 143);
  --sakurajima-color-blue-300: rgb(16, 26, 158);
  --sakurajima-color-gray-100: rgb(125, 119, 114);
  --sakurajima-color-gray-200: rgb(128, 125, 122);
  --sakurajima-color-gray-300: rgb(112, 112, 111);
  --sakurajima-color-light-black-100: rgba(46, 46, 46, 0.6);
  --sakurajima-color-light-black-200: rgba(28, 26, 25, 0.6);
  --sakurajima-color-light-black-300: rgba(23, 22, 21, 0.6);
  --sakurajima-color-orange-100: rgb(191, 141, 84);
  --sakurajima-color-orange-200: rgb(194, 125, 47);
  --sakurajima-color-orange-300: rgb(196, 109, 10);
  --sakurajima-color-red-100: rgb(156, 65, 54);
  --sakurajima-color-red-200: rgb(153, 53, 41);
  --sakurajima-color-red-300: rgb(133, 22, 9);
  --sakurajima-color-rust-100: rgb(117, 101, 68);
  --sakurajima-color-rust-200: rgb(105, 84, 43);
  --sakurajima-color-rust-300: rgb(82, 62, 23);
  --sakurajima-color-white-100: rgb(232, 222, 209);
  --sakurajima-color-white-200: rgb(181, 174, 165);
  --sakurajima-color-white-300: rgb(145, 140, 134);
  --search-clear-button-color: rgb(181, 174, 165);
  --search-icon-color: rgb(181, 174, 165);
  --search-result-background: rgb(46, 46, 46);
  --setting-group-heading-color: rgb(232, 222, 209);
  --setting-items-background: rgb(28, 26, 25);
  --slider-thumb-radius: 8px;
  --slider-track-background: rgb(191, 141, 84);
  --status-bar-text-color: rgb(181, 174, 165);
  --suggestion-background: rgb(46, 46, 46);
  --swatch-radius: 8px;
  --tab-background-active: rgb(46, 46, 46);
  --tab-radius: 8px;
  --tab-radius-active: 8px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(167, 102, 37);
  --tab-text-color-active: rgb(181, 174, 165);
  --tab-text-color-focused: rgb(145, 140, 134);
  --tab-text-color-focused-active: rgb(191, 141, 84);
  --tab-text-color-focused-active-current: rgb(191, 141, 84);
  --tab-text-color-focused-highlighted: rgb(194, 110, 41);
  --table-drag-handle-background-active: rgb(167, 102, 37);
  --table-header-color: rgb(232, 222, 209);
  --table-selection: rgba(167, 102, 37, 0.1);
  --table-selection-border-color: rgb(167, 102, 37);
  --tag-background: rgba(167, 102, 37, 0.1);
  --tag-background-hover: rgba(167, 102, 37, 0.2);
  --tag-border-color: rgba(167, 102, 37, 0.15);
  --tag-border-color-hover: rgba(167, 102, 37, 0.15);
  --tag-color: rgb(194, 110, 41);
  --tag-color-hover: rgb(194, 110, 41);
  --text-accent: rgb(194, 110, 41);
  --text-accent-hover: rgb(215, 119, 51);
  --text-muted: rgb(181, 174, 165);
  --text-normal: rgb(232, 222, 209);
  --text-selection: rgba(167, 102, 37, 0.33);
  --titlebar-text-color: rgb(181, 174, 165);
  --titlebar-text-color-focused: rgb(232, 222, 209);
  --toggle-radius: 8px;
  --toggle-thumb-color: rgb(191, 141, 84);
  --toggle-thumb-radius: 8px;
  --vault-profile-color: rgb(232, 222, 209);
  --vault-profile-color-hover: rgb(232, 222, 209);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(232, 222, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 46, 46);
  color: rgb(232, 222, 209);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(232, 222, 209);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(232, 222, 209);
}

body div#quartz-root {
  background-color: rgb(46, 46, 46);
  color: rgb(232, 222, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body .page article p > em, em {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body .page article p > i, i {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body .page article p > strong, strong {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body .text-highlight {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body del {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: line-through rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body p {
  color: rgb(181, 174, 165);
  outline: rgb(181, 174, 165) none 0px;
  text-decoration: rgb(181, 174, 165);
  text-decoration-color: rgb(181, 174, 165);
}`,
    links: `body a.external, footer a {
  color: rgb(194, 110, 41);
  outline: rgb(194, 110, 41) none 0px;
  text-decoration: underline rgb(194, 110, 41);
  text-decoration-color: rgb(194, 110, 41);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(194, 110, 41);
  outline: rgb(194, 110, 41) none 0px;
  text-decoration: underline rgb(194, 110, 41);
  text-decoration-color: rgb(194, 110, 41);
}

body a.internal.broken {
  color: rgb(194, 110, 41);
  outline: rgb(194, 110, 41) none 0px;
  text-decoration: underline rgba(167, 102, 37, 0.3);
  text-decoration-color: rgba(167, 102, 37, 0.3);
}`,
    lists: `body dd {
  color: rgb(232, 222, 209);
}

body dt {
  color: rgb(232, 222, 209);
}

body ol > li {
  color: rgb(232, 222, 209);
}

body ol.overflow {
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body ul > li {
  color: rgb(232, 222, 209);
}

body ul.overflow {
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(28, 26, 25, 0.6);
  padding-bottom: 20px;
  padding-top: 20px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body table {
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

body td {
  border-bottom-color: rgb(82, 62, 23);
  border-bottom-width: 2px;
  border-left-color: rgb(82, 62, 23);
  border-right-color: rgb(82, 62, 23);
  border-right-width: 2px;
  border-top-color: rgb(82, 62, 23);
  border-top-width: 2px;
  color: rgb(232, 222, 209);
}

body th {
  color: rgb(232, 222, 209);
}

body thead {
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

body tr {
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
    code: `body code {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 26, 25);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 26, 25);
  color: rgb(232, 222, 209);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 26, 25);
}

body pre:has(> code) {
  background-color: rgb(28, 26, 25);
}`,
    images: `body audio {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body figcaption {
  color: rgb(232, 222, 209);
}

body figure {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body img {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body video {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 26, 25);
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
}

body .footnotes {
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

body .transclude {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(167, 102, 37);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(167, 102, 37);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(181, 174, 165);
  text-decoration: line-through rgb(181, 174, 165);
  text-decoration-color: rgb(181, 174, 165);
}

body input[type=checkbox] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(232, 222, 209);
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(232, 222, 209);
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 46, 46);
}

body .search > .search-container > .search-space > * {
  color: rgb(232, 222, 209);
  outline: rgb(232, 222, 209) none 0px;
  text-decoration: rgb(232, 222, 209);
  text-decoration-color: rgb(232, 222, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 222, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(232, 222, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 222, 209);
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 222, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(167, 102, 37, 0.1);
  border-bottom-color: rgba(167, 102, 37, 0.15);
  border-left-color: rgba(167, 102, 37, 0.15);
  border-right-color: rgba(167, 102, 37, 0.15);
  border-top-color: rgba(167, 102, 37, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(194, 110, 41);
}

body h1 {
  color: rgb(232, 222, 209);
}

body h2 {
  color: rgb(232, 222, 209);
}

body h2.page-title, h2.page-title a {
  color: rgb(232, 222, 209);
}

body h3 {
  color: rgb(232, 222, 209);
}

body h4 {
  color: rgb(232, 222, 209);
}

body h5 {
  color: rgb(232, 222, 209);
}

body h6 {
  color: rgb(232, 222, 209);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 46, 46) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 46, 46);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(191, 141, 84);
  text-decoration: rgb(191, 141, 84);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(191, 141, 84);
  text-decoration: rgb(191, 141, 84);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(191, 141, 84);
  text-decoration: rgb(191, 141, 84);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}`,
    footer: `body footer {
  color: rgb(181, 174, 165);
}

body footer ul li a {
  color: rgb(181, 174, 165);
  text-decoration: rgb(181, 174, 165);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(232, 222, 209);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(191, 141, 84);
  text-decoration: rgb(191, 141, 84);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(191, 141, 84);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body li.section-li > .section .meta {
  color: rgb(191, 141, 84);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(191, 141, 84);
  text-decoration: rgb(191, 141, 84);
}

body ul.section-ul {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}

body .darkmode svg {
  color: rgb(181, 174, 165);
  stroke: rgb(181, 174, 165);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

body .metadata {
  color: rgb(181, 174, 165);
}

body .metadata-properties {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}

body .page-header h2.page-title {
  color: rgb(232, 222, 209);
}

body abbr {
  color: rgb(232, 222, 209);
  text-decoration: underline dotted rgb(232, 222, 209);
}

body details {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body input[type=text] {
  border-bottom-color: rgb(181, 174, 165);
  border-left-color: rgb(181, 174, 165);
  border-right-color: rgb(181, 174, 165);
  border-top-color: rgb(181, 174, 165);
  color: rgb(181, 174, 165);
}

body kbd {
  background-color: rgb(28, 26, 25);
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
  color: rgb(232, 222, 209);
}

body progress {
  border-bottom-color: rgb(232, 222, 209);
  border-left-color: rgb(232, 222, 209);
  border-right-color: rgb(232, 222, 209);
  border-top-color: rgb(232, 222, 209);
}

body sub {
  color: rgb(232, 222, 209);
}

body summary {
  color: rgb(232, 222, 209);
}

body sup {
  color: rgb(232, 222, 209);
}`,
  },
  light: {},
};
