import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "powered-by-lancer-retouched",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["arimo"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #181818;
  --background-primary-alt: #373737;
  --background-secondary: #000000;
  --background-secondary-alt: #2c2c2c;
  --bases-cards-background: #181818;
  --bases-cards-cover-background: #373737;
  --bases-table-cell-background-active: #181818;
  --bases-table-cell-background-disabled: #373737;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c76cff;
  --bases-table-group-background: #373737;
  --bases-table-header-background: #181818;
  --bases-table-summary-background: #181818;
  --blockquote-border-color: #c76cff;
  --button-bg-color: #915cb2;
  --button-hover-bg-color: #a271c0;
  --button-hover-text-color: #d8d8d8;
  --button-text-color: #d8d8d8;
  --canvas-background: #181818;
  --canvas-card-label-color: #af9edb;
  --caret-color: #e7e7e7;
  --checkbox-border-color: #af9edb;
  --checkbox-color: #c76cff;
  --checkbox-marker-color: #181818;
  --code-background: #333333;
  --code-block: #83a598;
  --code-comment: #af9edb;
  --code-normal: #e7e7e7;
  --code-size: 500;
  --collapse-icon-color: #af9edb;
  --collapse-icon-color-collapsed: #9748c9;
  --divider-color-hover: #c76cff;
  --embed-border-start: 2px solid #c76cff;
  --file-header-background: #181818;
  --file-header-background-focused: #181818;
  --file-header-font: "Arimo", sans-serif;
  --flair-color: #e7e7e7;
  --font-code-blocks: "Arimo", sans-serif;
  --font-headers: "Helvetica";
  --font-interface: "Arimo", sans-serif;
  --font-mermaid: "Arimo", sans-serif;
  --font-monospace: "Arimo", sans-serif;
  --font-text: "Arimo", sans-serif;
  --font-text-headers: "Helvetica";
  --font-text-normal: "Arimo", sans-serif;
  --footnote-id-color-no-occurrences: #af9edb;
  --graph-node-focused: #9748c9;
  --graph-node-unresolved: #af9edb;
  --graph-text: #e7e7e7;
  --h1-size: 3em;
  --h2-size: 2em;
  --h3-size: 1.5em;
  --h4-size: 1.25em;
  --h5-size: 1.125em;
  --heading-formatting: #af9edb;
  --icon-color: #d65fd4;
  --icon-color-active: #9748c9;
  --icon-color-focused: #dba0ff;
  --icon-color-hover: #e3b7ff;
  --inline-code: #83a598;
  --inline-title-font: "Helvetica";
  --inline-title-size: 3em;
  --input-date-separator: #af9edb;
  --input-placeholder-color: #af9edb;
  --interactive-accent: #c76cff;
  --interactive-accent-rgb: #c76cff;
  --interactive-before: #7c6f64;
  --link-color: #9748c9;
  --link-color-hover: #da9fff;
  --link-external-color: #9748c9;
  --link-external-color-hover: #da9fff;
  --link-unresolved-color: #9748c9;
  --list-marker-color: #af9edb;
  --list-marker-color-collapsed: #9748c9;
  --menu-background: #000000;
  --metadata-input-font: "Arimo", sans-serif;
  --metadata-input-text-color: #e7e7e7;
  --metadata-label-font: "Arimo", sans-serif;
  --modal-background: #181818;
  --nav-collapse-icon-color: #af9edb;
  --nav-collapse-icon-color-collapsed: #af9edb;
  --nav-heading-color: #e7e7e7;
  --nav-heading-color-collapsed: #af9edb;
  --nav-heading-color-hover: #e7e7e7;
  --nav-item-color-active: #d8d8d8;
  --nav-item-color-highlighted: #9748c9;
  --nav-item-color-hover: #ffeeee;
  --nav-item-color-selected: #eba2a2;
  --nav-item-weight: bold;
  --nav-tag-color: #af9edb;
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-sidebar-background: #181818;
  --pill-color-hover: #e7e7e7;
  --pill-color-remove: #af9edb;
  --pill-color-remove-hover: #9748c9;
  --pre-code: #;
  --prompt-background: #181818;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #181818;
  --search-result-background: #181818;
  --setting-group-heading-color: #e7e7e7;
  --setting-items-background: #373737;
  --status-bar-background: #000000;
  --status-bar-text-color: #ffffff;
  --suggestion-background: #181818;
  --tab-background-active: #181818;
  --tab-container-background: #000000;
  --tab-font-weight: bold;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color: #af9edb;
  --tab-text-color-focused-active-current: #e7e7e7;
  --tab-text-color-focused-highlighted: #9748c9;
  --table-drag-handle-background-active: #c76cff;
  --table-drag-handle-color: #af9edb;
  --table-drag-handle-color-active: #fff;
  --table-header-color: #e7e7e7;
  --table-selection-border-color: #c76cff;
  --tag-color: #9748c9;
  --tag-color-hover: #9748c9;
  --text-a: #c76cff;
  --text-a-hover: #83a598;
  --text-accent: #9748c9;
  --text-accent-hover: #da9fff;
  --text-faint: #af9edb;
  --text-h1-background: #991e2a;
  --text-h2-background: #771675;
  --text-h3-background: #1952a2;
  --text-h4-background: #146464;
  --text-h5-background: #126127;
  --text-h6-background: #d1920a;
  --text-highlight-bg: #e36600;
  --text-link: #83a598;
  --text-normal: #e7e7e7;
  --text-on-accent: #fff;
  --text-selection: #915cb2;
  --text-title-h1: #ffffff;
  --text-title-h2: #ffffff;
  --text-title-h3: #ffffff;
  --text-title-h4: #ffffff;
  --text-title-h5: #ffffff;
  --text-title-h6: #ffffff;
  --titlebar-background: #000000;
  --titlebar-background-focused: #2c2c2c;
  --titlebar-text-color: #ffffff;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #e7e7e7;
  --vault-profile-color-hover: #e7e7e7;
  --vim-cursor: #c76cff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(231, 231, 231);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 24, 24);
  color: rgb(231, 231, 231);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(231, 231, 231);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(231, 231, 231);
}

body div#quartz-root {
  background-color: rgb(24, 24, 24);
  color: rgb(231, 231, 231);
}`,
    typography: `body .page article p > b, b {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .page article p > em, em {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .page article p > i, i {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .page article p > strong, strong {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .text-highlight {
  background-color: rgb(227, 102, 0);
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body del {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: line-through rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body p {
  font-family: Arimo, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(151, 72, 201);
  font-family: Arimo, sans-serif;
  outline: rgb(151, 72, 201) none 0px;
  text-decoration: underline rgb(151, 72, 201);
  text-decoration-color: rgb(151, 72, 201);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(151, 72, 201);
  font-family: Arimo, sans-serif;
  outline: rgb(151, 72, 201) none 0px;
  text-decoration: underline rgb(151, 72, 201);
  text-decoration-color: rgb(151, 72, 201);
}

body a.internal.broken {
  color: rgb(151, 72, 201);
  font-family: Arimo, sans-serif;
  outline: rgb(151, 72, 201) none 0px;
}`,
    lists: `body dd {
  color: rgb(231, 231, 231);
}

body dt {
  color: rgb(231, 231, 231);
}

body ol > li {
  color: rgb(231, 231, 231);
}

body ol.overflow {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body ul > li {
  color: rgb(231, 231, 231);
}

body ul.overflow {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(175, 158, 219);
  text-decoration: rgb(175, 158, 219);
}

body blockquote {
  font-family: Arimo, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body table {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  width: 195.062px;
}

body td {
  color: rgb(231, 231, 231);
}

body th {
  color: rgb(231, 231, 231);
}`,
    code: `body code {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(51, 51, 51);
  color: rgb(231, 231, 231);
}

body pre > code, pre:has(> code) {
  background-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body figcaption {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

body figure {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body img {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body video {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    embeds: `body .file-embed {
  background-color: rgb(55, 55, 55);
}

body .footnotes {
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

body .transclude {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(199, 108, 255);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body .transclude-inner {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(199, 108, 255);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Arimo, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Arimo, sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(175, 158, 219);
  border-left-color: rgb(175, 158, 219);
  border-right-color: rgb(175, 158, 219);
  border-top-color: rgb(175, 158, 219);
}

body li.task-list-item[data-task='!'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='*'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='-'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='/'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='>'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='?'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='I'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='S'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='b'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='c'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='d'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='f'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='k'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='l'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='p'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='u'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body li.task-list-item[data-task='w'] {
  color: rgb(231, 231, 231);
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}`,
    search: `body .search > .search-button {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 24);
}

body .search > .search-container > .search-space > * {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(231, 231, 231);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Arimo, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(151, 72, 201);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

body h2.page-title, h2.page-title a {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(54, 54, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(214, 95, 212);
  border-left-color: rgb(214, 95, 212);
  border-right-color: rgb(214, 95, 212);
  border-top-color: rgb(214, 95, 212);
  color: rgb(214, 95, 212);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body ul.section-ul {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(214, 95, 212);
  border-left-color: rgb(214, 95, 212);
  border-right-color: rgb(214, 95, 212);
  border-top-color: rgb(214, 95, 212);
  color: rgb(214, 95, 212);
}

body .darkmode svg {
  color: rgb(214, 95, 212);
  stroke: rgb(214, 95, 212);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(175, 158, 219);
  font-family: Arimo, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

body .metadata {
  font-family: Arimo, sans-serif;
}

body .metadata-properties {
  font-family: Arimo, sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

body abbr {
  color: rgb(231, 231, 231);
  text-decoration: underline dotted rgb(231, 231, 231);
}

body details {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body input[type=text] {
  font-family: Arimo, sans-serif;
}

body kbd {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

body sub {
  color: rgb(231, 231, 231);
}

body summary {
  color: rgb(231, 231, 231);
}

body sup {
  color: rgb(231, 231, 231);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #af303d;
  --background-primary: #e7e7e7;
  --background-primary-alt: #707070;
  --background-secondary: #991e2a;
  --background-secondary-alt: #991e2a;
  --bases-cards-background: #e7e7e7;
  --bases-cards-cover-background: #707070;
  --bases-cards-shadow: 0 0 0 1px #af303d;
  --bases-embed-border-color: #af303d;
  --bases-table-border-color: #af303d;
  --bases-table-cell-background-active: #e7e7e7;
  --bases-table-cell-background-disabled: #707070;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff3e3e;
  --bases-table-group-background: #707070;
  --bases-table-header-background: #e7e7e7;
  --bases-table-summary-background: #e7e7e7;
  --blockquote-border-color: #ff3e3e;
  --blur-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent));
  --canvas-background: #e7e7e7;
  --canvas-card-label-color: #ff8585;
  --caret-color: #000000;
  --checkbox-border-color: #ff8585;
  --checkbox-color: #ff3e3e;
  --checkbox-marker-color: #e7e7e7;
  --code-background: #ebd9d9;
  --code-border-color: #af303d;
  --code-comment: #ff8585;
  --code-normal: #000000;
  --code-size: 500;
  --collapse-icon-color: #ff8585;
  --collapse-icon-color-collapsed: #ff3e3e;
  --divider-color: #af303d;
  --divider-color-hover: #ff3e3e;
  --embed-block-shadow-hover: 0 0 0 1px #af303d, inset 0 0 0 1px #af303d;
  --embed-border-start: 2px solid #ff3e3e;
  --file-header-background: #e7e7e7;
  --file-header-background-focused: #e7e7e7;
  --file-header-font: "Arimo", sans-serif;
  --flair-color: #000000;
  --font-code-blocks: "Arimo", sans-serif;
  --font-headers: "Helvetica";
  --font-interface: "Arimo", sans-serif;
  --font-mermaid: "Arimo", sans-serif;
  --font-monospace: "Arimo", sans-serif;
  --font-text: "Arimo", sans-serif;
  --font-text-headers: "Helvetica";
  --font-text-normal: "Arimo", sans-serif;
  --footnote-divider-color: #af303d;
  --footnote-id-color-no-occurrences: #ff8585;
  --graph-node-focused: #ff3e3e;
  --graph-node-unresolved: #ff8585;
  --graph-text: #000000;
  --h1-size: 3em;
  --h2-size: 2em;
  --h3-size: 1.5em;
  --h4-size: 1.25em;
  --h5-size: 1.125em;
  --heading-formatting: #ff8585;
  --hr-color: #af303d;
  --icon-color: #bebebe;
  --icon-color-active: #ff3e3e;
  --icon-color-focused: #d8d8d8;
  --icon-color-hover: #ffffff;
  --inline-code: #458588;
  --inline-title-font: "Helvetica";
  --inline-title-size: 3em;
  --input-date-separator: #ff8585;
  --input-placeholder-color: #ff8585;
  --interactive-accent: #ff3e3e;
  --interactive-accent-rgb: #ff3e3e;
  --interactive-before: #a89984;
  --link-color: #ff3e3e;
  --link-color-hover: #8e929b;
  --link-external-color: #ff3e3e;
  --link-external-color-hover: #8e929b;
  --link-unresolved-color: #ff3e3e;
  --list-marker-color: #ff8585;
  --list-marker-color-collapsed: #ff3e3e;
  --menu-background: #991e2a;
  --metadata-border-color: #af303d;
  --metadata-divider-color: #af303d;
  --metadata-input-font: "Arimo", sans-serif;
  --metadata-input-text-color: #000000;
  --metadata-label-font: "Arimo", sans-serif;
  --modal-background: #e7e7e7;
  --nav-collapse-icon-color: #ff8585;
  --nav-collapse-icon-color-collapsed: #ff8585;
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: #ff8585;
  --nav-heading-color-hover: #000000;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #ff3e3e;
  --nav-item-color-hover: #ffeeee;
  --nav-item-color-selected: #eba2a2;
  --nav-item-weight: bold;
  --nav-item-weight-active: bold;
  --nav-item-weight-hover: bold;
  --nav-tag-color: #ff8585;
  --pdf-background: #e7e7e7;
  --pdf-page-background: #e7e7e7;
  --pdf-sidebar-background: #e7e7e7;
  --pill-border-color: #af303d;
  --pill-color-hover: #000000;
  --pill-color-remove: #ff8585;
  --pill-color-remove-hover: #ff3e3e;
  --pre-code: #bebebe;
  --prompt-background: #e7e7e7;
  --raised-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent));
  --ribbon-background: #991e2a;
  --ribbon-background-collapsed: #e7e7e7;
  --search-result-background: #e7e7e7;
  --setting-group-heading-color: #000000;
  --setting-items-background: #707070;
  --setting-items-border-color: #af303d;
  --slider-track-background: #af303d;
  --status-bar-background: #991e2a;
  --status-bar-border-color: #af303d;
  --status-bar-text-color: #ffffff;
  --suggestion-background: #e7e7e7;
  --tab-background-active: #e7e7e7;
  --tab-container-background: #991e2a;
  --tab-font-weight: bold;
  --tab-outline-color: #af303d;
  --tab-switcher-background: #991e2a;
  --tab-switcher-menubar-background: linear-gradient(to top, #991e2a, transparent);
  --tab-text-color: #ff8585;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: #ff3e3e;
  --table-add-button-border-color: #af303d;
  --table-border-color: #af303d;
  --table-drag-handle-background-active: #ff3e3e;
  --table-drag-handle-color: #ff8585;
  --table-header-border-color: #af303d;
  --table-header-color: #000000;
  --table-selection-border-color: #ff3e3e;
  --tag-color: #ff3e3e;
  --tag-color-hover: #ff3e3e;
  --text-a: #ff3e3e;
  --text-a-hover: #8a8e96;
  --text-accent: #ff3e3e;
  --text-accent-hover: #8e929b;
  --text-faint: #ff8585;
  --text-h1-background: #C21F25;
  --text-h2-background: #e93538;
  --text-h3-background: #380a74;
  --text-h4-background: #87007f;
  --text-h5-background: #67bc45;
  --text-highlight-bg: #5ea9ff;
  --text-link: #424448;
  --text-normal: #000000;
  --text-selection: #8fc3ff;
  --text-title-h1: #e7e7e7;
  --text-title-h2: #e7e7e7;
  --text-title-h3: #e7e7e7;
  --text-title-h4: #e7e7e7;
  --text-title-h5: #e7e7e7;
  --text-title-h6: #640a0d;
  --text-white: #ffffff;
  --titlebar-background: #991e2a;
  --titlebar-background-focused: #991e2a;
  --titlebar-border-color: #af303d;
  --titlebar-text-color: #ffffff;
  --titlebar-text-color-focused: #ffffff;
  --vault-profile-color: #000000;
  --vault-profile-color-hover: #000000;
  --vim-cursor: #ff3e3e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(153, 30, 42);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(153, 30, 42);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(175, 48, 61);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(153, 30, 42);
  border-left-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgb(94, 169, 255);
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  font-family: Arimo, sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(255, 62, 62);
  font-family: Arimo, sans-serif;
  outline: rgb(255, 62, 62) none 0px;
  text-decoration: underline rgb(255, 62, 62);
  text-decoration-color: rgb(255, 62, 62);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 62, 62);
  font-family: Arimo, sans-serif;
  outline: rgb(255, 62, 62) none 0px;
  text-decoration: underline rgb(255, 62, 62);
  text-decoration-color: rgb(255, 62, 62);
}

body a.internal.broken {
  color: rgb(255, 62, 62);
  font-family: Arimo, sans-serif;
  outline: rgb(255, 62, 62) none 0px;
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(255, 133, 133);
  text-decoration: rgb(255, 133, 133);
}

body blockquote {
  font-family: Arimo, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
}

body pre:has(> code) {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(112, 112, 112);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 62, 62);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 62, 62);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Arimo, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Arimo, sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 133, 133);
  border-left-color: rgb(255, 133, 133);
  border-right-color: rgb(255, 133, 133);
  border-top-color: rgb(255, 133, 133);
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(231, 231, 231);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(153, 30, 42);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Arimo, sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 62, 62);
}

body h1 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

body h2 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: Helvetica;
}

body h3 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

body h4 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

body h5 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

body h6 {
  color: rgb(100, 10, 13);
  font-family: Helvetica;
}

body hr {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-corner {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

body ::-webkit-scrollbar-track {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
  text-decoration: rgb(255, 255, 255);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(175, 48, 61);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}`,
    footer: `body footer {
  background-color: rgb(153, 30, 42);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .darkmode svg {
  color: rgb(190, 190, 190);
  stroke: rgb(190, 190, 190);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(255, 133, 133);
  font-family: Arimo, sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  font-family: Arimo, sans-serif;
}

body .metadata-properties {
  font-family: Arimo, sans-serif;
}

body .navigation-progress {
  background-color: rgb(153, 30, 42);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  font-family: Arimo, sans-serif;
}

body kbd {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
