import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "apex", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: transparent !important;
  --background-secondary: #141414 !important;
  --bases-cards-background: transparent !important;
  --bases-group-heading-property-color: #707070 !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-header-background: transparent !important;
  --bases-table-header-color: #707070 !important;
  --bases-table-summary-background: transparent !important;
  --bodyFont: "Geist Mono", ui-monospace, monospace !important;
  --canvas-background: transparent !important;
  --caret-color: #ccc !important;
  --checkbox-border-color-hover: #707070 !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-marker-color: transparent !important;
  --checklist-done-color: rgb(60, 152, 60) !important;
  --checklist-done-decoration: none !important;
  --code-normal: #ccc !important;
  --code-punctuation: #707070 !important;
  --codeFont: "Geist Mono", ui-monospace, monospace !important;
  --dark: #ccc !important;
  --darkgray: #ccc !important;
  --divider-color: transparent !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: transparent !important;
  --flair-color: #ccc !important;
  --font-mermaid: "Geist Mono", ui-monospace, monospace !important;
  --font-text: "Geist Mono", ui-monospace, monospace !important;
  --footnote-id-color: #707070 !important;
  --footnote-line-height: 1.7 !important;
  --graph-node: #707070 !important;
  --graph-text: #ccc !important;
  --gray: #707070 !important;
  --h1-font: "Geist", system-ui, sans-serif !important;
  --h1-line-height: 1.7 !important;
  --h1-size: 25.6px !important;
  --h2-font: "Geist", system-ui, sans-serif !important;
  --h2-line-height: 1.7 !important;
  --h2-size: 22.4px !important;
  --h3-font: "Geist", system-ui, sans-serif !important;
  --h3-line-height: 1.7 !important;
  --h3-size: 19.2px !important;
  --h4-line-height: 1.7 !important;
  --h4-size: 16px !important;
  --h5-line-height: 1.7 !important;
  --h5-size: 16px !important;
  --h6-line-height: 1.7 !important;
  --h6-size: 16px !important;
  --headerFont: "Geist Mono", ui-monospace, monospace !important;
  --icon-color: #707070 !important;
  --icon-color-focused: #ccc !important;
  --icon-color-hover: #707070 !important;
  --inline-title-font: "Geist", system-ui, sans-serif !important;
  --inline-title-line-height: 1.7 !important;
  --inline-title-size: 25.6px !important;
  --light: transparent !important;
  --lightgray: #141414 !important;
  --line-height-normal: 1.7 !important;
  --link-external-decoration-color: #707070 !important;
  --link-unresolved-decoration-color: #707070 !important;
  --list-marker-color: #ccc !important;
  --list-marker-color-hover: #707070 !important;
  --menu-background: #141414 !important;
  --metadata-input-text-color: #ccc !important;
  --metadata-label-text-color: #707070 !important;
  --metadata-label-text-color-hover: #707070 !important;
  --modal-background: #141414 !important;
  --nav-heading-color: #ccc !important;
  --nav-heading-color-collapsed-hover: #707070 !important;
  --nav-heading-color-hover: #ccc !important;
  --nav-item-color: #707070 !important;
  --nav-item-color-active: #ccc !important;
  --nav-item-color-hover: #ccc !important;
  --nav-item-color-selected: #ccc !important;
  --nav-tag-color-active: #707070 !important;
  --nav-tag-color-hover: #707070 !important;
  --pdf-background: transparent !important;
  --pdf-page-background: transparent !important;
  --pdf-sidebar-background: transparent !important;
  --pill-color: #707070 !important;
  --pill-color-hover: #ccc !important;
  --prompt-background: transparent !important;
  --ribbon-background: #141414 !important;
  --ribbon-background-collapsed: transparent !important;
  --search-clear-button-color: #707070 !important;
  --search-icon-color: #707070 !important;
  --search-result-background: transparent !important;
  --setting-group-heading-color: #ccc !important;
  --status-bar-background: #141414 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #707070 !important;
  --suggestion-background: transparent !important;
  --tab-background-active: transparent !important;
  --tab-container-background: #141414 !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #141414 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent) !important;
  --tab-text-color-active: #707070 !important;
  --tab-text-color-focused: #707070 !important;
  --tab-text-color-focused-active: #707070 !important;
  --tab-text-color-focused-active-current: #ccc !important;
  --table-header-color: #ccc !important;
  --text-muted: #707070 !important;
  --text-normal: #ccc !important;
  --titleFont: "Geist Mono", ui-monospace, monospace !important;
  --titlebar-background: #141414 !important;
  --titlebar-text-color: #707070 !important;
  --titlebar-text-color-focused: #ccc !important;
  --vault-profile-color: #ccc !important;
  --vault-profile-color-hover: #ccc !important;
  --workspace-background-translucent: rgba(0, 0, 0, 0.4) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > em, em {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > i, i {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .page article p > strong, strong {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .text-highlight {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  color: rgb(112, 112, 112);
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    links: `body a.external, footer a {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body a.internal.broken {
  font-family: "Geist Mono", ui-monospace, monospace;
  text-decoration: underline rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body blockquote {
  font-family: "Geist Mono", ui-monospace, monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  width: 217.422px;
}

body td {
  color: rgb(204, 204, 204);
}

body th {
  color: rgb(204, 204, 204);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(204, 204, 204);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(60, 152, 60);
  text-decoration: rgb(60, 152, 60);
  text-decoration-color: rgb(60, 152, 60);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    search: `body .search > .search-button {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space {
  background-color: rgb(20, 20, 20);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body h1 {
  color: rgb(204, 204, 204);
  font-family: Geist, system-ui, sans-serif;
}

body h2 {
  color: rgb(204, 204, 204);
  font-family: Geist, system-ui, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 204, 204);
  font-family: Geist, system-ui, sans-serif;
}

body h3 {
  color: rgb(204, 204, 204);
  font-family: Geist, system-ui, sans-serif;
}

body h4 {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body h5 {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body h6 {
  color: rgb(204, 204, 204);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-left-width: 0px;
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  border-top-width: 0px;
  color: rgb(112, 112, 112);
}

body footer ul li a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(112, 112, 112);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(112, 112, 112);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

body .darkmode svg {
  color: rgb(112, 112, 112);
  stroke: rgb(112, 112, 112);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  color: rgb(112, 112, 112);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  border-bottom-color: rgb(112, 112, 112);
  border-left-color: rgb(112, 112, 112);
  border-right-color: rgb(112, 112, 112);
  border-top-color: rgb(112, 112, 112);
  color: rgb(112, 112, 112);
}

body kbd {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #f7f7f7 !important;
  --background-secondary: #fcfcfc !important;
  --bases-cards-background: #f7f7f7 !important;
  --bases-group-heading-property-color: #b5b3b1 !important;
  --bases-table-cell-background-active: #f7f7f7 !important;
  --bases-table-header-background: #f7f7f7 !important;
  --bases-table-header-color: #b5b3b1 !important;
  --bases-table-summary-background: #f7f7f7 !important;
  --blur-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent)) !important;
  --bodyFont: "Geist Mono", ui-monospace, monospace !important;
  --canvas-background: #f7f7f7 !important;
  --caret-color: #1a1a1a !important;
  --checkbox-border-color-hover: #b5b3b1 !important;
  --checkbox-color: transparent !important;
  --checkbox-color-hover: transparent !important;
  --checkbox-marker-color: transparent !important;
  --checklist-done-color: rgb(60, 152, 60) !important;
  --checklist-done-decoration: none !important;
  --code-normal: #1a1a1a !important;
  --code-punctuation: #b5b3b1 !important;
  --codeFont: "Geist Mono", ui-monospace, monospace !important;
  --dark: #1a1a1a !important;
  --darkgray: #1a1a1a !important;
  --divider-color: transparent !important;
  --file-header-background: #f7f7f7 !important;
  --file-header-background-focused: #f7f7f7 !important;
  --flair-color: #1a1a1a !important;
  --font-mermaid: "Geist Mono", ui-monospace, monospace !important;
  --font-text: "Geist Mono", ui-monospace, monospace !important;
  --footnote-id-color: #b5b3b1 !important;
  --footnote-line-height: 1.7 !important;
  --graph-node: #b5b3b1 !important;
  --graph-text: #1a1a1a !important;
  --gray: #b5b3b1 !important;
  --h1-font: "Geist", system-ui, sans-serif !important;
  --h1-line-height: 1.7 !important;
  --h1-size: 25.6px !important;
  --h2-font: "Geist", system-ui, sans-serif !important;
  --h2-line-height: 1.7 !important;
  --h2-size: 22.4px !important;
  --h3-font: "Geist", system-ui, sans-serif !important;
  --h3-line-height: 1.7 !important;
  --h3-size: 19.2px !important;
  --h4-line-height: 1.7 !important;
  --h4-size: 16px !important;
  --h5-line-height: 1.7 !important;
  --h5-size: 16px !important;
  --h6-line-height: 1.7 !important;
  --h6-size: 16px !important;
  --headerFont: "Geist Mono", ui-monospace, monospace !important;
  --icon-color: #b5b3b1 !important;
  --icon-color-focused: #1a1a1a !important;
  --icon-color-hover: #b5b3b1 !important;
  --inline-title-font: "Geist", system-ui, sans-serif !important;
  --inline-title-line-height: 1.7 !important;
  --inline-title-size: 25.6px !important;
  --light: #f7f7f7 !important;
  --lightgray: #fcfcfc !important;
  --line-height-normal: 1.7 !important;
  --link-external-decoration-color: #b5b3b1 !important;
  --link-unresolved-decoration-color: #b5b3b1 !important;
  --list-marker-color: #1a1a1a !important;
  --list-marker-color-hover: #b5b3b1 !important;
  --menu-background: #fcfcfc !important;
  --metadata-input-text-color: #1a1a1a !important;
  --metadata-label-text-color: #b5b3b1 !important;
  --metadata-label-text-color-hover: #b5b3b1 !important;
  --modal-background: #fcfcfc !important;
  --nav-heading-color: #1a1a1a !important;
  --nav-heading-color-collapsed-hover: #b5b3b1 !important;
  --nav-heading-color-hover: #1a1a1a !important;
  --nav-item-color: #b5b3b1 !important;
  --nav-item-color-active: #1a1a1a !important;
  --nav-item-color-hover: #1a1a1a !important;
  --nav-item-color-selected: #1a1a1a !important;
  --nav-tag-color-active: #b5b3b1 !important;
  --nav-tag-color-hover: #b5b3b1 !important;
  --pdf-background: #f7f7f7 !important;
  --pdf-page-background: #f7f7f7 !important;
  --pdf-sidebar-background: #f7f7f7 !important;
  --pill-color: #b5b3b1 !important;
  --pill-color-hover: #1a1a1a !important;
  --prompt-background: #f7f7f7 !important;
  --raised-background: color-mix(in srgb, #f7f7f7 65%, transparent) linear-gradient(#f7f7f7, color-mix(in srgb, #f7f7f7 65%, transparent)) !important;
  --ribbon-background: #fcfcfc !important;
  --ribbon-background-collapsed: #f7f7f7 !important;
  --search-clear-button-color: #b5b3b1 !important;
  --search-icon-color: #b5b3b1 !important;
  --search-result-background: #f7f7f7 !important;
  --setting-group-heading-color: #1a1a1a !important;
  --status-bar-background: #fcfcfc !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #b5b3b1 !important;
  --suggestion-background: #f7f7f7 !important;
  --tab-background-active: #f7f7f7 !important;
  --tab-container-background: #fcfcfc !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #fcfcfc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fcfcfc, transparent) !important;
  --tab-text-color-active: #b5b3b1 !important;
  --tab-text-color-focused: #b5b3b1 !important;
  --tab-text-color-focused-active: #b5b3b1 !important;
  --tab-text-color-focused-active-current: #1a1a1a !important;
  --table-header-color: #1a1a1a !important;
  --text-muted: #b5b3b1 !important;
  --text-normal: #1a1a1a !important;
  --titleFont: "Geist Mono", ui-monospace, monospace !important;
  --titlebar-background: #fcfcfc !important;
  --titlebar-text-color: #b5b3b1 !important;
  --titlebar-text-color-focused: #1a1a1a !important;
  --vault-profile-color: #1a1a1a !important;
  --vault-profile-color-hover: #1a1a1a !important;
  --workspace-background-translucent: rgba(255, 255, 255, 0.4) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(252, 252, 252);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(252, 252, 252);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(26, 26, 26);
}

body div#quartz-root {
  background-color: rgb(247, 247, 247);
  color: rgb(26, 26, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > em, em {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > i, i {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > strong, strong {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .text-highlight {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body p {
  color: rgb(181, 179, 177);
  outline: rgb(181, 179, 177) none 0px;
  text-decoration: rgb(181, 179, 177);
  text-decoration-color: rgb(181, 179, 177);
}`,
    links: `body a.external, footer a {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body a.internal.broken {
  font-family: "Geist Mono", ui-monospace, monospace;
  text-decoration: underline rgb(181, 179, 177);
  text-decoration-color: rgb(181, 179, 177);
}`,
    lists: `body dd {
  color: rgb(26, 26, 26);
}

body dt {
  color: rgb(26, 26, 26);
}

body ol > li {
  color: rgb(26, 26, 26);
}

body ol.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ul > li {
  color: rgb(26, 26, 26);
}

body ul.overflow {
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `body blockquote {
  font-family: "Geist Mono", ui-monospace, monospace;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body table {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  width: 217.422px;
}

body td {
  color: rgb(26, 26, 26);
}

body th {
  color: rgb(26, 26, 26);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(26, 26, 26);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body figcaption {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
}

body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .katex-display > .katex > .katex-html {
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(60, 152, 60);
  text-decoration: rgb(60, 152, 60);
  text-decoration-color: rgb(60, 152, 60);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    search: `body .search > .search-button {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 252, 252);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(252, 252, 252);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body h1 {
  color: rgb(26, 26, 26);
  font-family: Geist, system-ui, sans-serif;
}

body h2 {
  color: rgb(26, 26, 26);
  font-family: Geist, system-ui, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: Geist, system-ui, sans-serif;
}

body h3 {
  color: rgb(26, 26, 26);
  font-family: Geist, system-ui, sans-serif;
}

body h4 {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body h5 {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body h6 {
  color: rgb(26, 26, 26);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 247, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 247, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}`,
    footer: `body footer {
  background-color: rgb(252, 252, 252);
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-left-width: 0px;
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  border-top-width: 0px;
  color: rgb(181, 179, 177);
}

body footer ul li a {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(181, 179, 177);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body li.section-li > .section .meta {
  color: rgb(181, 179, 177);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(181, 179, 177);
  text-decoration: rgb(181, 179, 177);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

body .darkmode svg {
  color: rgb(181, 179, 177);
  stroke: rgb(181, 179, 177);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .metadata {
  color: rgb(181, 179, 177);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .metadata-properties {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
  font-family: "Geist Mono", ui-monospace, monospace;
}

body .navigation-progress {
  background-color: rgb(252, 252, 252);
}

body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

body abbr {
  color: rgb(26, 26, 26);
  text-decoration: underline dotted rgb(26, 26, 26);
}

body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body input[type=text] {
  border-bottom-color: rgb(181, 179, 177);
  border-left-color: rgb(181, 179, 177);
  border-right-color: rgb(181, 179, 177);
  border-top-color: rgb(181, 179, 177);
  color: rgb(181, 179, 177);
}

body kbd {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body sub {
  color: rgb(26, 26, 26);
}

body summary {
  color: rgb(26, 26, 26);
}

body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
