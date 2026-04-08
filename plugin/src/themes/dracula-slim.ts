import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dracula-slim", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #282a36 !important;
  --background-primary-alt: #44475a !important;
  --background-secondary: #282a36 !important;
  --background-secondary-alt: #1a1e24 !important;
  --bases-cards-background: #282a36 !important;
  --bases-cards-cover-background: #44475a !important;
  --bases-table-cell-background-active: #282a36 !important;
  --bases-table-cell-background-disabled: #44475a !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b294bb !important;
  --bases-table-group-background: #44475a !important;
  --bases-table-header-background: #282a36 !important;
  --bases-table-summary-background: #282a36 !important;
  --blockquote-border: #b294bb !important;
  --blockquote-border-color: #b294bb !important;
  --canvas-background: #282a36 !important;
  --caret-color: #f8f8f2 !important;
  --checkbox-color: #b294bb !important;
  --checkbox-marker-color: #282a36 !important;
  --code-background: #44475a !important;
  --code-normal: #f8f8f2 !important;
  --dark: #f8f8f2 !important;
  --darkgray: #f8f8f2 !important;
  --divider-color-hover: #b294bb !important;
  --embed-border-start: 2px solid #b294bb !important;
  --file-header-background: #282a36 !important;
  --file-header-background-focused: #282a36 !important;
  --flair-color: #f8f8f2 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --graph-text: #f8f8f2 !important;
  --gray: #f8f8f2 !important;
  --icon-color-focused: #f8f8f2 !important;
  --interactive-accent: #b294bb !important;
  --interactive-accent-rgb: #f1fa8c !important;
  --light: #282a36 !important;
  --lightgray: #282a36 !important;
  --markup-code: #ffb86c !important;
  --menu-background: #282a36 !important;
  --metadata-input-text-color: #f8f8f2 !important;
  --modal-background: #282a36 !important;
  --nav-heading-color: #f8f8f2 !important;
  --nav-heading-color-hover: #f8f8f2 !important;
  --nav-item-color-active: #f8f8f2 !important;
  --nav-item-color-hover: #f8f8f2 !important;
  --nav-item-color-selected: #f8f8f2 !important;
  --pdf-background: #282a36 !important;
  --pdf-page-background: #282a36 !important;
  --pdf-sidebar-background: #282a36 !important;
  --pill-color-hover: #f8f8f2 !important;
  --prompt-background: #282a36 !important;
  --ribbon-background: #282a36 !important;
  --ribbon-background-collapsed: #282a36 !important;
  --search-result-background: #282a36 !important;
  --secondary: #b294bb !important;
  --setting-group-heading-color: #f8f8f2 !important;
  --setting-items-background: #44475a !important;
  --status-bar-background: #282a36 !important;
  --suggestion-background: #282a36 !important;
  --tab-background-active: #282a36 !important;
  --tab-container-background: #282a36 !important;
  --tab-switcher-background: #282a36 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #282a36, transparent) !important;
  --tab-text-color-focused-active-current: #f8f8f2 !important;
  --table-drag-handle-background-active: #b294bb !important;
  --table-header-color: #f8f8f2 !important;
  --table-selection-border-color: #b294bb !important;
  --text-a: #ff79c6 !important;
  --text-a-hover: #ff79c0 !important;
  --text-link: #8be9fd !important;
  --text-mark: #f1fa8c !important;
  --text-normal: #f8f8f2 !important;
  --text-tag: #50fa7b !important;
  --text-title-h1: #bd93f9 !important;
  --text-title-h2: #bd93f8 !important;
  --text-title-h3: #bd93f7 !important;
  --text-title-h4: #bd93f6 !important;
  --text-title-h5: #bd93f5 !important;
  --text-title-h6: #bd93f4 !important;
  --titlebar-background: #282a36 !important;
  --titlebar-background-focused: #1a1e24 !important;
  --titlebar-text-color-focused: #f8f8f2 !important;
  --vault-profile-color: #f8f8f2 !important;
  --vault-profile-color-hover: #f8f8f2 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body .bases-table thead th {
  color: rgb(248, 248, 242);
}

html body .canvas-node {
  border-color: rgb(248, 248, 242);
}

html body .canvas-node-content {
  color: rgb(248, 248, 242);
}

html body .canvas-node-file {
  color: rgb(248, 248, 242);
}

html body .canvas-node-group {
  border-color: rgb(248, 248, 242);
}

html body .canvas-sidebar {
  background-color: rgb(40, 42, 54);
  border-color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

html body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .page article p > em, html em {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .page article p > i, html i {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .page article p > strong, html strong {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .text-highlight {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body h1.article-title {
  color: rgb(248, 248, 242);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(178, 148, 187);
  border-color: rgb(178, 148, 187);
}`,
    links: `html body a.external, html footer a {
  color: rgb(139, 233, 253);
  outline: rgb(139, 233, 253) none 0px;
  text-decoration-color: rgb(139, 233, 253);
}`,
    lists: `html body dd {
  color: rgb(248, 248, 242);
}

html body dt {
  color: rgb(248, 248, 242);
}

html body ol > li {
  color: rgb(248, 248, 242);
}

html body ol.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul > li {
  color: rgb(248, 248, 242);
}

html body ul.overflow {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body table {
  color: rgb(248, 248, 242);
}

html body td {
  border-bottom-color: rgb(178, 148, 187);
  border-left-color: rgb(178, 148, 187);
  border-right-color: rgb(178, 148, 187);
  border-top-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body th {
  color: rgb(248, 248, 242);
}`,
    code: `html body code {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 71, 90);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(68, 71, 90);
}

html body pre:has(> code) {
  background-color: rgb(68, 71, 90);
}`,
    images: `html body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body figcaption {
  color: rgb(248, 248, 242);
}

html body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(68, 71, 90);
}

html body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(178, 148, 187);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `html body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `html body .search > .search-button {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
}

html body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 42, 54);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(178, 148, 187);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(178, 148, 187);
  color: rgb(248, 248, 242);
}

html body h1 {
  color: rgb(248, 248, 242);
}

html body h2 {
  color: rgb(248, 248, 242);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(248, 248, 242);
}

html body h3 {
  color: rgb(248, 248, 242);
}

html body h4 {
  color: rgb(248, 248, 242);
}

html body h5 {
  color: rgb(248, 248, 242);
}

html body h6 {
  color: rgb(248, 248, 242);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

html body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(248, 248, 242);
}`,
    footer: `html body footer {
  background-color: rgb(40, 42, 54);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(248, 248, 242);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

html body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

html body abbr {
  color: rgb(248, 248, 242);
}

html body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body kbd {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

html body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

html body sub {
  color: rgb(248, 248, 242);
}

html body summary {
  color: rgb(248, 248, 242);
}

html body sup {
  color: rgb(248, 248, 242);
}`,
  },
  light: {},
};
