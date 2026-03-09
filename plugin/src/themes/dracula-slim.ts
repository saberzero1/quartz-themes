import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dracula-slim", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #282a36;
  --background-primary-alt: #44475a;
  --background-secondary: #282a36;
  --background-secondary-alt: #1a1e24;
  --bases-cards-background: #282a36;
  --bases-cards-cover-background: #44475a;
  --bases-table-cell-background-active: #282a36;
  --bases-table-cell-background-disabled: #44475a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b294bb;
  --bases-table-group-background: #44475a;
  --bases-table-header-background: #282a36;
  --bases-table-summary-background: #282a36;
  --blockquote-border: #b294bb;
  --blockquote-border-color: #b294bb;
  --canvas-background: #282a36;
  --caret-color: #f8f8f2;
  --checkbox-color: #b294bb;
  --checkbox-marker-color: #282a36;
  --code-background: #44475a;
  --code-normal: #f8f8f2;
  --divider-color-hover: #b294bb;
  --embed-border-start: 2px solid #b294bb;
  --file-header-background: #282a36;
  --file-header-background-focused: #282a36;
  --flair-color: #f8f8f2;
  --font-family-editor: Avenir, Avenir Next, sans-serif;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --graph-text: #f8f8f2;
  --icon-color-focused: #f8f8f2;
  --interactive-accent: #b294bb;
  --interactive-accent-rgb: #f1fa8c;
  --markup-code: #ffb86c;
  --menu-background: #282a36;
  --metadata-input-text-color: #f8f8f2;
  --modal-background: #282a36;
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --pdf-background: #282a36;
  --pdf-page-background: #282a36;
  --pdf-sidebar-background: #282a36;
  --pill-color-hover: #f8f8f2;
  --prompt-background: #282a36;
  --ribbon-background: #282a36;
  --ribbon-background-collapsed: #282a36;
  --search-result-background: #282a36;
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #44475a;
  --status-bar-background: #282a36;
  --suggestion-background: #282a36;
  --tab-background-active: #282a36;
  --tab-container-background: #282a36;
  --tab-switcher-background: #282a36;
  --tab-switcher-menubar-background: linear-gradient(to top, #282a36, transparent);
  --tab-text-color-focused-active-current: #f8f8f2;
  --table-drag-handle-background-active: #b294bb;
  --table-header-color: #f8f8f2;
  --table-selection-border-color: #b294bb;
  --text-a: #ff79c6;
  --text-a-hover: #ff79c0;
  --text-link: #8be9fd;
  --text-mark: #f1fa8c;
  --text-normal: #f8f8f2;
  --text-tag: #50fa7b;
  --text-title-h1: #bd93f9;
  --text-title-h2: #bd93f8;
  --text-title-h3: #bd93f7;
  --text-title-h4: #bd93f6;
  --text-title-h5: #bd93f5;
  --text-title-h6: #bd93f4;
  --titlebar-background: #282a36;
  --titlebar-background-focused: #1a1e24;
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > em, em {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > i, i {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > strong, strong {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `body a.external, footer a {
  color: rgb(139, 233, 253);
  outline: rgb(139, 233, 253) none 0px;
  text-decoration: underline rgb(139, 233, 253);
  text-decoration-color: rgb(139, 233, 253);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
}

body td {
  border-bottom-color: rgb(178, 148, 187);
  border-left-color: rgb(178, 148, 187);
  border-right-color: rgb(178, 148, 187);
  border-top-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

body th {
  color: rgb(248, 248, 242);
}`,
    code: `body code {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 71, 90);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

body pre > code, pre:has(> code) {
  background-color: rgb(68, 71, 90);
}

body pre:has(> code) {
  background-color: rgb(68, 71, 90);
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(68, 71, 90);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(178, 148, 187);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(178, 148, 187);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `body .search > .search-button {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 42, 54);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(178, 148, 187);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

body h1 {
  color: rgb(248, 248, 242);
}

body h2 {
  color: rgb(248, 248, 242);
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
}

body h3 {
  color: rgb(248, 248, 242);
}

body h4 {
  color: rgb(248, 248, 242);
}

body h5 {
  color: rgb(248, 248, 242);
}

body h6 {
  color: rgb(248, 248, 242);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 54);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body kbd {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {},
};
