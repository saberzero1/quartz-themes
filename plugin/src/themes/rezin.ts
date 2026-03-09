import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rezin", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #181824;
  --background-secondary: #0f0f18;
  --background-secondary-alt: #181824;
  --bases-cards-background: #181824;
  --bases-table-cell-background-active: #181824;
  --bases-table-header-background: #181824;
  --bases-table-summary-background: #181824;
  --canvas-background: #181824;
  --caret-color: #4baaa8;
  --checkbox-marker-color: #181824;
  --code-normal: #4baaa8;
  --file-header-background: #181824;
  --file-header-background-focused: #181824;
  --flair-color: #4baaa8;
  --font-family-editor: Avenir, Avenir Next, sans-serif;
  --graph-text: #4baaa8;
  --icon-color-focused: #4baaa8;
  --menu-background: #0f0f18;
  --metadata-input-text-color: #4baaa8;
  --modal-background: #181824;
  --nav-heading-color: #4baaa8;
  --nav-heading-color-hover: #4baaa8;
  --nav-item-color-active: #4baaa8;
  --nav-item-color-hover: #4baaa8;
  --nav-item-color-selected: #4baaa8;
  --pdf-background: #181824;
  --pdf-page-background: #181824;
  --pdf-sidebar-background: #181824;
  --pill-color-hover: #4baaa8;
  --prompt-background: #181824;
  --ribbon-background: #0f0f18;
  --ribbon-background-collapsed: #181824;
  --search-result-background: #181824;
  --setting-group-heading-color: #4baaa8;
  --status-bar-background: #0f0f18;
  --suggestion-background: #181824;
  --tab-background-active: #181824;
  --tab-container-background: #0f0f18;
  --tab-switcher-background: #0f0f18;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f0f18, transparent);
  --tab-text-color-focused-active-current: #4baaa8;
  --table-header-color: #4baaa8;
  --text-a: #bea63a;
  --text-italic: #b37ceb;
  --text-normal: #4baaa8;
  --text-strong: #af3943;
  --text-title-h1: #af3943;
  --text-title-h2: #fcf601;
  --text-title-h3: #0d9668;
  --text-title-h4: #7f5cc0;
  --text-title-h5: #b42478;
  --text-title-h6: #6171ff;
  --titlebar-background: #0f0f18;
  --titlebar-background-focused: #181824;
  --titlebar-text-color-focused: #4baaa8;
  --vault-profile-color: #4baaa8;
  --vault-profile-color-hover: #4baaa8;
  --vim-cursor: #fcf601;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 24, 36);
  color: rgb(75, 170, 168);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 15, 24);
  color: rgb(75, 170, 168);
}

body div#quartz-root {
  background-color: rgb(24, 24, 36);
  color: rgb(75, 170, 168);
}`,
    typography: `body .page article p > b, b {
  color: rgb(175, 57, 67);
  outline: rgb(175, 57, 67) none 0px;
  text-decoration: rgb(175, 57, 67);
  text-decoration-color: rgb(175, 57, 67);
}

body .page article p > em, em {
  color: rgb(179, 124, 235);
  outline: rgb(179, 124, 235) none 0px;
  text-decoration: rgb(179, 124, 235);
  text-decoration-color: rgb(179, 124, 235);
}

body .page article p > i, i {
  color: rgb(179, 124, 235);
  outline: rgb(179, 124, 235) none 0px;
  text-decoration: rgb(179, 124, 235);
  text-decoration-color: rgb(179, 124, 235);
}

body .page article p > strong, strong {
  color: rgb(175, 57, 67);
  outline: rgb(175, 57, 67) none 0px;
  text-decoration: rgb(175, 57, 67);
  text-decoration-color: rgb(175, 57, 67);
}

body .text-highlight {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body del {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration: line-through rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}`,
    links: `body a.external, footer a {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
  text-decoration: underline rgb(190, 166, 58);
  text-decoration-color: rgb(190, 166, 58);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
  text-decoration: underline rgb(190, 166, 58);
  text-decoration-color: rgb(190, 166, 58);
}

body a.internal.broken {
  color: rgb(190, 166, 58);
  outline: rgb(190, 166, 58) none 0px;
}`,
    lists: `body dd {
  color: rgb(75, 170, 168);
}

body dt {
  color: rgb(75, 170, 168);
}

body ol > li {
  color: rgb(75, 170, 168);
}

body ol.overflow {
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body ul > li {
  color: rgb(75, 170, 168);
}

body ul.overflow {
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(190, 166, 58);
  text-decoration: rgb(190, 166, 58);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body table {
  color: rgb(75, 170, 168);
}

body td {
  color: rgb(75, 170, 168);
}

body th {
  background-color: rgb(15, 15, 26);
  color: rgb(175, 57, 67);
}`,
    code: `body code {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(75, 170, 168);
}`,
    images: `body audio {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body figcaption {
  color: rgb(75, 170, 168);
}

body figure {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body img {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body video {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

body .transclude {
  border-bottom-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body .transclude-inner {
  border-bottom-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    checkboxes: `body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='*'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='-'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='/'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='>'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='?'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='I'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='S'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='b'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='c'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='d'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='f'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='i'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='k'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='l'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='p'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='u'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body li.task-list-item[data-task='w'] {
  color: rgb(75, 170, 168);
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}`,
    search: `body .search > .search-button {
  color: rgb(75, 170, 168);
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(75, 170, 168);
  outline: rgb(75, 170, 168) none 0px;
  text-decoration: rgb(75, 170, 168);
  text-decoration-color: rgb(75, 170, 168);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(75, 170, 168);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(75, 170, 168);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(75, 170, 168);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(15, 15, 24);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(75, 170, 168);
}

body h1 {
  color: rgb(175, 57, 67);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(252, 246, 1);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(175, 57, 67);
}

body h3 {
  color: rgb(13, 150, 104);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(127, 92, 192);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(180, 36, 120);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(97, 113, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-top-color: rgb(13, 150, 104);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 36);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    footer: `body footer {
  background-color: rgb(15, 15, 24);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(75, 170, 168);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body ul.section-ul {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

body .navigation-progress {
  background-color: rgb(15, 15, 24);
}

body .page-header h2.page-title {
  color: rgb(75, 170, 168);
}

body abbr {
  color: rgb(75, 170, 168);
  text-decoration: underline dotted rgb(75, 170, 168);
}

body details {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body kbd {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
  color: rgb(75, 170, 168);
}

body progress {
  border-bottom-color: rgb(75, 170, 168);
  border-left-color: rgb(75, 170, 168);
  border-right-color: rgb(75, 170, 168);
  border-top-color: rgb(75, 170, 168);
}

body sub {
  color: rgb(75, 170, 168);
}

body summary {
  color: rgb(75, 170, 168);
}

body sup {
  color: rgb(75, 170, 168);
}`,
  },
  light: {},
};
