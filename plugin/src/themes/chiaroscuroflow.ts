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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(25, 18, 63);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(45, 45, 45);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(25, 18, 63);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body a.internal.broken {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(25, 18, 63);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(25, 18, 63);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body blockquote {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  width: 195.062px;
}

body td {
  color: rgb(255, 255, 255);
}

body th {
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 19, 19);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 19, 19);
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(33, 19, 19);
}

body pre:has(> code) {
  background-color: rgb(33, 19, 19);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(25, 18, 63);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

body h2 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

body h4 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

body h5 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}

body h6 {
  color: rgb(221, 221, 221);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

body ::-webkit-scrollbar-corner {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}

body ::-webkit-scrollbar-track {
  background: rgb(25, 18, 63) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 18, 63);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(45, 45, 45);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    misc: `body .katex-display {
  background-color: rgb(33, 19, 19);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(45, 45, 45);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body kbd {
  background-color: rgb(33, 19, 19);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(12, 9, 9);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 250, 205);
  color: rgb(12, 9, 9);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(240, 240, 240);
  color: rgb(12, 9, 9);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(12, 9, 9);
}

body div#quartz-root {
  background-color: rgb(255, 250, 205);
  color: rgb(12, 9, 9);
}`,
    typography: `body .page article p > b, b {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body .page article p > em, em {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body .page article p > i, i {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body .page article p > strong, strong {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body .text-highlight {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body del {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: line-through rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body p {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body a.internal.broken {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    lists: `body dd {
  color: rgb(12, 9, 9);
}

body dt {
  color: rgb(12, 9, 9);
}

body ol > li {
  color: rgb(12, 9, 9);
}

body ol.overflow {
  background-color: rgb(255, 250, 205);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body ul > li {
  color: rgb(12, 9, 9);
}

body ul.overflow {
  background-color: rgb(255, 250, 205);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    blockquotes: `body blockquote {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body table {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  width: 195.062px;
}

body td {
  color: rgb(12, 9, 9);
}

body th {
  color: rgb(12, 9, 9);
}`,
    code: `body code {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  color: rgb(12, 9, 9);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
}`,
    images: `body audio {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body figcaption {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body figure {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body img {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body video {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

body .transclude {
  border-bottom-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body .transclude-inner {
  border-bottom-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body li.task-list-item[data-task='!'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='*'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='-'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='/'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='>'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='?'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='I'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='S'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='b'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='c'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='d'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='f'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='i'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='k'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='l'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='p'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='u'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body li.task-list-item[data-task='w'] {
  color: rgb(12, 9, 9);
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}`,
    search: `body .search > .search-button {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 250, 205);
}

body .search > .search-container > .search-space > * {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  outline: rgb(12, 9, 9) none 0px;
  text-decoration: rgb(12, 9, 9);
  text-decoration-color: rgb(12, 9, 9);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(12, 9, 9);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(12, 9, 9);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(12, 9, 9);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(240, 240, 240);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(12, 9, 9);
}

body h1 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

body h2 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

body h2.page-title, h2.page-title a {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body h3 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

body h4 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

body h5 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}

body h6 {
  color: rgb(12, 9, 9);
  font-family: "Nunito Sans Bold", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
  text-shadow: rgba(0, 0, 0, 0.1) 1px 1px 2px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 250, 205) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 250, 205);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}`,
    footer: `body footer {
  background-color: rgb(240, 240, 240);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(12, 9, 9);
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body li.section-li > .section .meta {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}`,
    misc: `body .katex-display {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

body .metadata {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .metadata-properties {
  font-family: Manrope, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

body .navigation-progress {
  background-color: rgb(240, 240, 240);
}

body .page-header h2.page-title {
  color: rgb(12, 9, 9);
}

body abbr {
  color: rgb(12, 9, 9);
  text-decoration: underline dotted rgb(12, 9, 9);
}

body details {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
  color: rgb(12, 9, 9);
}

body progress {
  border-bottom-color: rgb(12, 9, 9);
  border-left-color: rgb(12, 9, 9);
  border-right-color: rgb(12, 9, 9);
  border-top-color: rgb(12, 9, 9);
}

body sub {
  color: rgb(12, 9, 9);
}

body summary {
  color: rgb(12, 9, 9);
}

body sup {
  color: rgb(12, 9, 9);
}`,
  },
};
