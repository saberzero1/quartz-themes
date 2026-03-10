import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rezin", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #181824 !important;
  --background-secondary: #0f0f18 !important;
  --background-secondary-alt: #181824 !important;
  --bases-cards-background: #181824 !important;
  --bases-table-cell-background-active: #181824 !important;
  --bases-table-header-background: #181824 !important;
  --bases-table-summary-background: #181824 !important;
  --canvas-background: #181824 !important;
  --caret-color: #4baaa8 !important;
  --checkbox-marker-color: #181824 !important;
  --code-normal: #4baaa8 !important;
  --dark: #4baaa8 !important;
  --darkgray: #4baaa8 !important;
  --file-header-background: #181824 !important;
  --file-header-background-focused: #181824 !important;
  --flair-color: #4baaa8 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --graph-text: #4baaa8 !important;
  --gray: #4baaa8 !important;
  --icon-color-focused: #4baaa8 !important;
  --light: #181824 !important;
  --lightgray: #0f0f18 !important;
  --menu-background: #0f0f18 !important;
  --metadata-input-text-color: #4baaa8 !important;
  --modal-background: #181824 !important;
  --nav-heading-color: #4baaa8 !important;
  --nav-heading-color-hover: #4baaa8 !important;
  --nav-item-color-active: #4baaa8 !important;
  --nav-item-color-hover: #4baaa8 !important;
  --nav-item-color-selected: #4baaa8 !important;
  --pdf-background: #181824 !important;
  --pdf-page-background: #181824 !important;
  --pdf-sidebar-background: #181824 !important;
  --pill-color-hover: #4baaa8 !important;
  --prompt-background: #181824 !important;
  --ribbon-background: #0f0f18 !important;
  --ribbon-background-collapsed: #181824 !important;
  --search-result-background: #181824 !important;
  --setting-group-heading-color: #4baaa8 !important;
  --status-bar-background: #0f0f18 !important;
  --suggestion-background: #181824 !important;
  --tab-background-active: #181824 !important;
  --tab-container-background: #0f0f18 !important;
  --tab-switcher-background: #0f0f18 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f0f18, transparent) !important;
  --tab-text-color-focused-active-current: #4baaa8 !important;
  --table-header-color: #4baaa8 !important;
  --text-a: #bea63a !important;
  --text-italic: #b37ceb !important;
  --text-normal: #4baaa8 !important;
  --text-strong: #af3943 !important;
  --text-title-h1: #af3943 !important;
  --text-title-h2: #fcf601 !important;
  --text-title-h3: #0d9668 !important;
  --text-title-h4: #7f5cc0 !important;
  --text-title-h5: #b42478 !important;
  --text-title-h6: #6171ff !important;
  --titlebar-background: #0f0f18 !important;
  --titlebar-background-focused: #181824 !important;
  --titlebar-text-color-focused: #4baaa8 !important;
  --vault-profile-color: #4baaa8 !important;
  --vault-profile-color-hover: #4baaa8 !important;
  --vim-cursor: #fcf601 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(24, 24, 36);
  color: rgb(75, 170, 168);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

html body div#quartz-root {
  background-color: rgb(24, 24, 36);
  color: rgb(75, 170, 168);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(175, 57, 67);
  outline: rgb(175, 57, 67) none 0px;
  text-decoration: rgb(175, 57, 67);
  text-decoration-color: rgb(175, 57, 67);
}

html body .page article p > em, html em {
  color: rgb(179, 124, 235);
  outline: rgb(179, 124, 235) none 0px;
  text-decoration: rgb(179, 124, 235);
  text-decoration-color: rgb(179, 124, 235);
}

html body .page article p > i, html i {
  color: rgb(179, 124, 235);
  outline: rgb(179, 124, 235) none 0px;
  text-decoration: rgb(179, 124, 235);
  text-decoration-color: rgb(179, 124, 235);
}

html body .page article p > strong, html strong {
  color: rgb(175, 57, 67);
  outline: rgb(175, 57, 67) none 0px;
  text-decoration: rgb(175, 57, 67);
  text-decoration-color: rgb(175, 57, 67);
}

html body .text-highlight {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body del {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration: line-through rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}`,
    links: `html body a.external, html footer a {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
  text-decoration: underline rgb(190, 166, 58);
  text-decoration-color: rgb(190, 166, 58);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
  text-decoration: underline rgb(190, 166, 58);
  text-decoration-color: rgb(190, 166, 58);
}

html body a.internal.broken {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
}`,
    lists: `html body dd {
  color: rgb(75, 170, 168);
}

html body dt {
  color: rgb(75, 170, 168);
}

html body ol > li {
  color: rgb(75, 170, 168);
}

html body ol.overflow {
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body ul > li {
  color: rgb(75, 170, 168);
}

html body ul.overflow {
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(190, 166, 58);
  text-decoration: rgb(190, 166, 58);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body table {
  color: rgb(75, 170, 168);
}

html body td {
  color: rgb(75, 170, 168);
}

html body th {
  background-color: rgb(15, 15, 26);
  color: rgb(175, 57, 67);
}`,
    code: `html body code {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(75, 170, 168);
}`,
    images: `html body audio {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body figcaption {
  color: rgb(75, 170, 168);
}

html body figure {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body img {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body video {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body .transclude {
  border-bottom-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body .transclude-inner {
  border-bottom-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(196, 37, 50);
  border-bottom-left-radius: 30%;
  border-bottom-right-radius: 30%;
  border-bottom-width: 2px;
  border-left-color: rgb(196, 37, 50);
  border-left-width: 2px;
  border-right-color: rgb(196, 37, 50);
  border-right-width: 2px;
  border-top-color: rgb(196, 37, 50);
  border-top-left-radius: 30%;
  border-top-right-radius: 30%;
  border-top-width: 2px;
  margin-right: 6px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}`,
    search: `html body .search > .search-button {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 36);
}

html body .search > .search-container > .search-space > * {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(75, 170, 168);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 15, 24);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(75, 170, 168);
}

html body h1 {
  color: rgb(175, 57, 67);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2 {
  color: rgb(252, 246, 1);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(175, 57, 67);
}

html body h3 {
  color: rgb(13, 150, 104);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h4 {
  color: rgb(127, 92, 192);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h5 {
  color: rgb(180, 36, 120);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h6 {
  color: rgb(97, 113, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body hr {
  border-top-color: rgb(13, 150, 104);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(31, 46, 46);
  border-bottom-color: rgb(75, 170, 168);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: outset;
  border-bottom-width: 3px;
  border-left-color: rgb(75, 170, 168);
  border-left-style: outset;
  border-left-width: 3px;
  border-right-color: rgb(75, 170, 168);
  border-right-style: outset;
  border-right-width: 3px;
  border-top-color: rgb(75, 170, 168);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: outset;
  border-top-width: 3px;
  color: rgb(175, 57, 67);
}`,
    footer: `html body footer {
  background-color: rgb(15, 15, 24);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(75, 170, 168);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body ul.section-ul {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body .navigation-progress {
  background-color: rgb(15, 15, 24);
}

html body .page-header h2.page-title {
  color: rgb(75, 170, 168);
}

html body abbr {
  color: rgb(75, 170, 168);
  text-decoration: underline dotted rgb(75, 170, 168);
}

html body details {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body kbd {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

html body progress {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

html body sub {
  color: rgb(75, 170, 168);
}

html body summary {
  color: rgb(75, 170, 168);
}

html body sup {
  color: rgb(75, 170, 168);
}`,
  },
  light: {},
};
