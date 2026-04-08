import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "chiaroscuroflow",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["manrope", "nunito-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: rgb(25, 18, 63) !important;
  --background-secondary: rgb(45, 45, 45) !important;
  --bases-cards-background: rgb(25, 18, 63) !important;
  --bases-table-cell-background-active: rgb(25, 18, 63) !important;
  --bases-table-header-background: rgb(25, 18, 63) !important;
  --bases-table-summary-background: rgb(25, 18, 63) !important;
  --bodyFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --canvas-background: rgb(25, 18, 63) !important;
  --caret-color: #FFFFFF !important;
  --checkbox-marker-color: rgb(25, 18, 63) !important;
  --code-background: rgb(33, 19, 19) !important;
  --code-normal: #FFFFFF !important;
  --codeFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --dark: #FFFFFF !important;
  --darkgray: #FFFFFF !important;
  --file-header-background: rgb(25, 18, 63) !important;
  --file-header-background-focused: rgb(25, 18, 63) !important;
  --flair-color: #FFFFFF !important;
  --font-header: 'Nunito Sans Bold', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --font-mermaid: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --font-text: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --graph-text: #FFFFFF !important;
  --gray: #FFFFFF !important;
  --headerFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --heading-color-dark: #DDDDDD !important;
  --heading-color-light: #0c0909 !important;
  --heading-font: 'Nunito Sans Bold', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --icon-color-focused: #FFFFFF !important;
  --light: rgb(25, 18, 63) !important;
  --lightgray: rgb(45, 45, 45) !important;
  --math-background: rgb(33, 19, 19) !important;
  --menu-background: rgb(45, 45, 45) !important;
  --metadata-input-text-color: #FFFFFF !important;
  --modal-background: rgb(25, 18, 63) !important;
  --nav-heading-color: #FFFFFF !important;
  --nav-heading-color-hover: #FFFFFF !important;
  --nav-item-color-active: #FFFFFF !important;
  --nav-item-color-hover: #FFFFFF !important;
  --nav-item-color-selected: #FFFFFF !important;
  --pdf-background: rgb(25, 18, 63) !important;
  --pdf-page-background: rgb(25, 18, 63) !important;
  --pdf-sidebar-background: rgb(25, 18, 63) !important;
  --pill-color-hover: #FFFFFF !important;
  --prompt-background: rgb(25, 18, 63) !important;
  --ribbon-background: rgb(45, 45, 45) !important;
  --ribbon-background-collapsed: rgb(25, 18, 63) !important;
  --search-result-background: rgb(25, 18, 63) !important;
  --setting-group-heading-color: #FFFFFF !important;
  --status-bar-background: rgb(45, 45, 45) !important;
  --suggestion-background: rgb(25, 18, 63) !important;
  --tab-background-active: rgb(25, 18, 63) !important;
  --tab-container-background: rgb(45, 45, 45) !important;
  --tab-switcher-background: rgb(45, 45, 45) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(45, 45, 45), transparent) !important;
  --tab-text-color-focused-active-current: #FFFFFF !important;
  --table-header-color: #FFFFFF !important;
  --text-normal: #FFFFFF !important;
  --titleFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --titlebar-background: rgb(45, 45, 45) !important;
  --titlebar-text-color-focused: #FFFFFF !important;
  --vault-profile-color: #FFFFFF !important;
  --vault-profile-color-hover: #FFFFFF !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 18, 63);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(45, 45, 45);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(45, 45, 45);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 18, 63);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  color: rgb(255, 255, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 19, 19);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 19, 19);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(33, 19, 19);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(33, 19, 19);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 18, 63);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(45, 45, 45);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  background-color: rgb(33, 19, 19);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(45, 45, 45);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 19, 19);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: rgb(255, 250, 205) !important;
  --background-secondary: rgb(240, 240, 240) !important;
  --bases-cards-background: rgb(255, 250, 205) !important;
  --bases-table-cell-background-active: rgb(255, 250, 205) !important;
  --bases-table-header-background: rgb(255, 250, 205) !important;
  --bases-table-summary-background: rgb(255, 250, 205) !important;
  --blur-background: color-mix(in srgb, rgb(255, 250, 205) 65%, transparent) linear-gradient(rgb(255, 250, 205), color-mix(in srgb, rgb(255, 250, 205) 65%, transparent)) !important;
  --bodyFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --canvas-background: rgb(255, 250, 205) !important;
  --caret-color: #0c0909 !important;
  --checkbox-marker-color: rgb(255, 250, 205) !important;
  --code-background: rgb(255, 255, 255) !important;
  --code-normal: #0c0909 !important;
  --codeFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --dark: #0c0909 !important;
  --darkgray: #0c0909 !important;
  --file-header-background: rgb(255, 250, 205) !important;
  --file-header-background-focused: rgb(255, 250, 205) !important;
  --flair-color: #0c0909 !important;
  --font-header: 'Nunito Sans Bold', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --font-mermaid: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --font-text: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --graph-text: #0c0909 !important;
  --gray: #0c0909 !important;
  --headerFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --heading-color-dark: #DDDDDD !important;
  --heading-color-light: #0c0909 !important;
  --heading-font: 'Nunito Sans Bold', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --icon-color-focused: #0c0909 !important;
  --light: rgb(255, 250, 205) !important;
  --lightgray: rgb(240, 240, 240) !important;
  --math-background: rgb(255, 255, 255) !important;
  --menu-background: rgb(240, 240, 240) !important;
  --metadata-input-text-color: #0c0909 !important;
  --modal-background: rgb(255, 250, 205) !important;
  --nav-heading-color: #0c0909 !important;
  --nav-heading-color-hover: #0c0909 !important;
  --nav-item-color-active: #0c0909 !important;
  --nav-item-color-hover: #0c0909 !important;
  --nav-item-color-selected: #0c0909 !important;
  --pdf-background: rgb(255, 250, 205) !important;
  --pdf-page-background: rgb(255, 250, 205) !important;
  --pdf-sidebar-background: rgb(255, 250, 205) !important;
  --pill-color-hover: #0c0909 !important;
  --prompt-background: rgb(255, 250, 205) !important;
  --raised-background: color-mix(in srgb, rgb(255, 250, 205) 65%, transparent) linear-gradient(rgb(255, 250, 205), color-mix(in srgb, rgb(255, 250, 205) 65%, transparent)) !important;
  --ribbon-background: rgb(240, 240, 240) !important;
  --ribbon-background-collapsed: rgb(255, 250, 205) !important;
  --search-result-background: rgb(255, 250, 205) !important;
  --setting-group-heading-color: #0c0909 !important;
  --status-bar-background: rgb(240, 240, 240) !important;
  --suggestion-background: rgb(255, 250, 205) !important;
  --tab-background-active: rgb(255, 250, 205) !important;
  --tab-container-background: rgb(240, 240, 240) !important;
  --tab-switcher-background: rgb(240, 240, 240) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(240, 240, 240), transparent) !important;
  --tab-text-color-focused-active-current: #0c0909 !important;
  --table-header-color: #0c0909 !important;
  --text-normal: #0c0909 !important;
  --titleFont: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif !important;
  --titlebar-background: rgb(240, 240, 240) !important;
  --titlebar-text-color-focused: #0c0909 !important;
  --vault-profile-color: #0c0909 !important;
  --vault-profile-color-hover: #0c0909 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 250, 205);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 250, 205);
  border-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 240, 240);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 250, 205);
  color: rgb(12, 9, 9);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body del {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body p {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body dt {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body ol > li {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body ul > li {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body table {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  width: 195.062px;
}

html[saved-theme="light"] body td {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body th {
  color: rgb(12, 9, 9);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 255, 255);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body figcaption {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 250, 205);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body h1 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

html[saved-theme="light"] body h2 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

html[saved-theme="light"] body h4 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

html[saved-theme="light"] body h5 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

html[saved-theme="light"] body h6 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(12, 9, 9);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(240, 240, 240);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body .metadata {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body abbr {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

html[saved-theme="light"] body sub {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body summary {
  color: rgb(12, 9, 9);
}

html[saved-theme="light"] body sup {
  color: rgb(12, 9, 9);
}`,
  },
};
