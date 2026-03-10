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
  --background-primary: #181818 !important;
  --background-primary-alt: #373737 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #2c2c2c !important;
  --bases-cards-background: #181818 !important;
  --bases-cards-cover-background: #373737 !important;
  --bases-table-cell-background-active: #181818 !important;
  --bases-table-cell-background-disabled: #373737 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c76cff !important;
  --bases-table-group-background: #373737 !important;
  --bases-table-header-background: #181818 !important;
  --bases-table-summary-background: #181818 !important;
  --blockquote-border-color: #c76cff !important;
  --bodyFont: "Arimo", sans-serif !important;
  --button-bg-color: #915cb2 !important;
  --button-hover-bg-color: #a271c0 !important;
  --button-hover-text-color: #d8d8d8 !important;
  --button-text-color: #d8d8d8 !important;
  --canvas-background: #181818 !important;
  --canvas-card-label-color: #af9edb !important;
  --caret-color: #e7e7e7 !important;
  --checkbox-border-color: #af9edb !important;
  --checkbox-color: #c76cff !important;
  --checkbox-marker-color: #181818 !important;
  --code-background: #333333 !important;
  --code-block: #83a598 !important;
  --code-comment: #af9edb !important;
  --code-normal: #e7e7e7 !important;
  --code-size: 500 !important;
  --codeFont: "Arimo", sans-serif !important;
  --collapse-icon-color: #af9edb !important;
  --collapse-icon-color-collapsed: #9748c9 !important;
  --dark: #e7e7e7 !important;
  --darkgray: #e7e7e7 !important;
  --divider-color-hover: #c76cff !important;
  --embed-border-start: 2px solid #c76cff !important;
  --file-header-background: #181818 !important;
  --file-header-background-focused: #181818 !important;
  --file-header-font: "Arimo", sans-serif !important;
  --flair-color: #e7e7e7 !important;
  --font-code-blocks: "Arimo", sans-serif !important;
  --font-headers: "Helvetica" !important;
  --font-interface: "Arimo", sans-serif !important;
  --font-mermaid: "Arimo", sans-serif !important;
  --font-monospace: "Arimo", sans-serif !important;
  --font-text: "Arimo", sans-serif !important;
  --font-text-headers: "Helvetica" !important;
  --font-text-normal: "Arimo", sans-serif !important;
  --footnote-id-color-no-occurrences: #af9edb !important;
  --graph-node-focused: #9748c9 !important;
  --graph-node-unresolved: #af9edb !important;
  --graph-text: #e7e7e7 !important;
  --gray: #af9edb !important;
  --h1-size: 3em !important;
  --h2-size: 2em !important;
  --h3-size: 1.5em !important;
  --h4-size: 1.25em !important;
  --h5-size: 1.125em !important;
  --headerFont: "Arimo", sans-serif !important;
  --heading-formatting: #af9edb !important;
  --highlight: #e36600 !important;
  --icon-color: #d65fd4 !important;
  --icon-color-active: #9748c9 !important;
  --icon-color-focused: #dba0ff !important;
  --icon-color-hover: #e3b7ff !important;
  --inline-code: #83a598 !important;
  --inline-title-font: "Helvetica" !important;
  --inline-title-size: 3em !important;
  --input-date-separator: #af9edb !important;
  --input-placeholder-color: #af9edb !important;
  --interactive-accent: #c76cff !important;
  --interactive-accent-rgb: #c76cff !important;
  --interactive-before: #7c6f64 !important;
  --light: #181818 !important;
  --lightgray: #000000 !important;
  --link-color: #9748c9 !important;
  --link-color-hover: #da9fff !important;
  --link-external-color: #9748c9 !important;
  --link-external-color-hover: #da9fff !important;
  --link-unresolved-color: #9748c9 !important;
  --list-marker-color: #af9edb !important;
  --list-marker-color-collapsed: #9748c9 !important;
  --menu-background: #000000 !important;
  --metadata-input-font: "Arimo", sans-serif !important;
  --metadata-input-text-color: #e7e7e7 !important;
  --metadata-label-font: "Arimo", sans-serif !important;
  --modal-background: #181818 !important;
  --nav-collapse-icon-color: #af9edb !important;
  --nav-collapse-icon-color-collapsed: #af9edb !important;
  --nav-heading-color: #e7e7e7 !important;
  --nav-heading-color-collapsed: #af9edb !important;
  --nav-heading-color-hover: #e7e7e7 !important;
  --nav-item-color-active: #d8d8d8 !important;
  --nav-item-color-highlighted: #9748c9 !important;
  --nav-item-color-hover: #ffeeee !important;
  --nav-item-color-selected: #eba2a2 !important;
  --nav-item-weight: bold !important;
  --nav-tag-color: #af9edb !important;
  --pdf-background: #181818 !important;
  --pdf-page-background: #181818 !important;
  --pdf-sidebar-background: #181818 !important;
  --pill-color-hover: #e7e7e7 !important;
  --pill-color-remove: #af9edb !important;
  --pill-color-remove-hover: #9748c9 !important;
  --pre-code: # !important;
  --prompt-background: #181818 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #181818 !important;
  --search-result-background: #181818 !important;
  --secondary: #9748c9 !important;
  --setting-group-heading-color: #e7e7e7 !important;
  --setting-items-background: #373737 !important;
  --status-bar-background: #000000 !important;
  --status-bar-text-color: #ffffff !important;
  --suggestion-background: #181818 !important;
  --tab-background-active: #181818 !important;
  --tab-container-background: #000000 !important;
  --tab-font-weight: bold !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #af9edb !important;
  --tab-text-color-focused-active-current: #e7e7e7 !important;
  --tab-text-color-focused-highlighted: #9748c9 !important;
  --table-drag-handle-background-active: #c76cff !important;
  --table-drag-handle-color: #af9edb !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-color: #e7e7e7 !important;
  --table-selection-border-color: #c76cff !important;
  --tag-color: #9748c9 !important;
  --tag-color-hover: #9748c9 !important;
  --tertiary: #da9fff !important;
  --text-a: #c76cff !important;
  --text-a-hover: #83a598 !important;
  --text-accent: #9748c9 !important;
  --text-accent-hover: #da9fff !important;
  --text-faint: #af9edb !important;
  --text-h1-background: #991e2a !important;
  --text-h2-background: #771675 !important;
  --text-h3-background: #1952a2 !important;
  --text-h4-background: #146464 !important;
  --text-h5-background: #126127 !important;
  --text-h6-background: #d1920a !important;
  --text-highlight-bg: #e36600 !important;
  --text-link: #83a598 !important;
  --text-normal: #e7e7e7 !important;
  --text-on-accent: #fff !important;
  --text-selection: #915cb2 !important;
  --text-title-h1: #ffffff !important;
  --text-title-h2: #ffffff !important;
  --text-title-h3: #ffffff !important;
  --text-title-h4: #ffffff !important;
  --text-title-h5: #ffffff !important;
  --text-title-h6: #ffffff !important;
  --textHighlight: #e36600 !important;
  --titleFont: "Arimo", sans-serif !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #2c2c2c !important;
  --titlebar-text-color: #ffffff !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #e7e7e7 !important;
  --vault-profile-color-hover: #e7e7e7 !important;
  --vim-cursor: #c76cff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
  --background-modifier-border: #af303d !important;
  --background-primary: #e7e7e7 !important;
  --background-primary-alt: #707070 !important;
  --background-secondary: #991e2a !important;
  --background-secondary-alt: #991e2a !important;
  --bases-cards-background: #e7e7e7 !important;
  --bases-cards-cover-background: #707070 !important;
  --bases-cards-shadow: 0 0 0 1px #af303d !important;
  --bases-embed-border-color: #af303d !important;
  --bases-table-border-color: #af303d !important;
  --bases-table-cell-background-active: #e7e7e7 !important;
  --bases-table-cell-background-disabled: #707070 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff3e3e !important;
  --bases-table-group-background: #707070 !important;
  --bases-table-header-background: #e7e7e7 !important;
  --bases-table-summary-background: #e7e7e7 !important;
  --blockquote-border-color: #ff3e3e !important;
  --blur-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent)) !important;
  --bodyFont: "Arimo", sans-serif !important;
  --canvas-background: #e7e7e7 !important;
  --canvas-card-label-color: #ff8585 !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: #ff8585 !important;
  --checkbox-color: #ff3e3e !important;
  --checkbox-marker-color: #e7e7e7 !important;
  --code-background: #ebd9d9 !important;
  --code-border-color: #af303d !important;
  --code-comment: #ff8585 !important;
  --code-normal: #000000 !important;
  --code-size: 500 !important;
  --codeFont: "Arimo", sans-serif !important;
  --collapse-icon-color: #ff8585 !important;
  --collapse-icon-color-collapsed: #ff3e3e !important;
  --dark: #000000 !important;
  --darkgray: #000000 !important;
  --divider-color: #af303d !important;
  --divider-color-hover: #ff3e3e !important;
  --embed-block-shadow-hover: 0 0 0 1px #af303d, inset 0 0 0 1px #af303d !important;
  --embed-border-start: 2px solid #ff3e3e !important;
  --file-header-background: #e7e7e7 !important;
  --file-header-background-focused: #e7e7e7 !important;
  --file-header-font: "Arimo", sans-serif !important;
  --flair-color: #000000 !important;
  --font-code-blocks: "Arimo", sans-serif !important;
  --font-headers: "Helvetica" !important;
  --font-interface: "Arimo", sans-serif !important;
  --font-mermaid: "Arimo", sans-serif !important;
  --font-monospace: "Arimo", sans-serif !important;
  --font-text: "Arimo", sans-serif !important;
  --font-text-headers: "Helvetica" !important;
  --font-text-normal: "Arimo", sans-serif !important;
  --footnote-divider-color: #af303d !important;
  --footnote-id-color-no-occurrences: #ff8585 !important;
  --graph-node-focused: #ff3e3e !important;
  --graph-node-unresolved: #ff8585 !important;
  --graph-text: #000000 !important;
  --gray: #ff8585 !important;
  --h1-size: 3em !important;
  --h2-size: 2em !important;
  --h3-size: 1.5em !important;
  --h4-size: 1.25em !important;
  --h5-size: 1.125em !important;
  --headerFont: "Arimo", sans-serif !important;
  --heading-formatting: #ff8585 !important;
  --highlight: #5ea9ff !important;
  --hr-color: #af303d !important;
  --icon-color: #bebebe !important;
  --icon-color-active: #ff3e3e !important;
  --icon-color-focused: #d8d8d8 !important;
  --icon-color-hover: #ffffff !important;
  --inline-code: #458588 !important;
  --inline-title-font: "Helvetica" !important;
  --inline-title-size: 3em !important;
  --input-date-separator: #ff8585 !important;
  --input-placeholder-color: #ff8585 !important;
  --interactive-accent: #ff3e3e !important;
  --interactive-accent-rgb: #ff3e3e !important;
  --interactive-before: #a89984 !important;
  --light: #e7e7e7 !important;
  --lightgray: #991e2a !important;
  --link-color: #ff3e3e !important;
  --link-color-hover: #8e929b !important;
  --link-external-color: #ff3e3e !important;
  --link-external-color-hover: #8e929b !important;
  --link-unresolved-color: #ff3e3e !important;
  --list-marker-color: #ff8585 !important;
  --list-marker-color-collapsed: #ff3e3e !important;
  --menu-background: #991e2a !important;
  --metadata-border-color: #af303d !important;
  --metadata-divider-color: #af303d !important;
  --metadata-input-font: "Arimo", sans-serif !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-font: "Arimo", sans-serif !important;
  --modal-background: #e7e7e7 !important;
  --nav-collapse-icon-color: #ff8585 !important;
  --nav-collapse-icon-color-collapsed: #ff8585 !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: #ff8585 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #ff3e3e !important;
  --nav-item-color-hover: #ffeeee !important;
  --nav-item-color-selected: #eba2a2 !important;
  --nav-item-weight: bold !important;
  --nav-item-weight-active: bold !important;
  --nav-item-weight-hover: bold !important;
  --nav-tag-color: #ff8585 !important;
  --pdf-background: #e7e7e7 !important;
  --pdf-page-background: #e7e7e7 !important;
  --pdf-sidebar-background: #e7e7e7 !important;
  --pill-border-color: #af303d !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: #ff8585 !important;
  --pill-color-remove-hover: #ff3e3e !important;
  --pre-code: #bebebe !important;
  --prompt-background: #e7e7e7 !important;
  --raised-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent)) !important;
  --ribbon-background: #991e2a !important;
  --ribbon-background-collapsed: #e7e7e7 !important;
  --search-result-background: #e7e7e7 !important;
  --secondary: #ff3e3e !important;
  --setting-group-heading-color: #000000 !important;
  --setting-items-background: #707070 !important;
  --setting-items-border-color: #af303d !important;
  --slider-track-background: #af303d !important;
  --status-bar-background: #991e2a !important;
  --status-bar-border-color: #af303d !important;
  --status-bar-text-color: #ffffff !important;
  --suggestion-background: #e7e7e7 !important;
  --tab-background-active: #e7e7e7 !important;
  --tab-container-background: #991e2a !important;
  --tab-font-weight: bold !important;
  --tab-outline-color: #af303d !important;
  --tab-switcher-background: #991e2a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #991e2a, transparent) !important;
  --tab-text-color: #ff8585 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: #ff3e3e !important;
  --table-add-button-border-color: #af303d !important;
  --table-border-color: #af303d !important;
  --table-drag-handle-background-active: #ff3e3e !important;
  --table-drag-handle-color: #ff8585 !important;
  --table-header-border-color: #af303d !important;
  --table-header-color: #000000 !important;
  --table-selection-border-color: #ff3e3e !important;
  --tag-color: #ff3e3e !important;
  --tag-color-hover: #ff3e3e !important;
  --tertiary: #8e929b !important;
  --text-a: #ff3e3e !important;
  --text-a-hover: #8a8e96 !important;
  --text-accent: #ff3e3e !important;
  --text-accent-hover: #8e929b !important;
  --text-faint: #ff8585 !important;
  --text-h1-background: #C21F25 !important;
  --text-h2-background: #e93538 !important;
  --text-h3-background: #380a74 !important;
  --text-h4-background: #87007f !important;
  --text-h5-background: #67bc45 !important;
  --text-highlight-bg: #5ea9ff !important;
  --text-link: #424448 !important;
  --text-normal: #000000 !important;
  --text-selection: #8fc3ff !important;
  --text-title-h1: #e7e7e7 !important;
  --text-title-h2: #e7e7e7 !important;
  --text-title-h3: #e7e7e7 !important;
  --text-title-h4: #e7e7e7 !important;
  --text-title-h5: #e7e7e7 !important;
  --text-title-h6: #640a0d !important;
  --text-white: #ffffff !important;
  --textHighlight: #5ea9ff !important;
  --titleFont: "Arimo", sans-serif !important;
  --titlebar-background: #991e2a !important;
  --titlebar-background-focused: #991e2a !important;
  --titlebar-border-color: #af303d !important;
  --titlebar-text-color: #ffffff !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #000000 !important;
  --vault-profile-color-hover: #000000 !important;
  --vim-cursor: #ff3e3e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
