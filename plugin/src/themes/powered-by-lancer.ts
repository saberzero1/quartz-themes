import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "powered-by-lancer",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["arimo", "anonymous-pro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #009200 !important;
  --background-primary: #2b2b2b !important;
  --background-primary-alt: #373737 !important;
  --background-secondary: #126127 !important;
  --background-secondary-alt: #134d22 !important;
  --bases-cards-background: #2b2b2b !important;
  --bases-cards-cover-background: #373737 !important;
  --bases-cards-shadow: 0 0 0 1px #009200 !important;
  --bases-embed-border-color: #009200 !important;
  --bases-table-border-color: #009200 !important;
  --bases-table-cell-background-active: #2b2b2b !important;
  --bases-table-cell-background-disabled: #373737 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c76cff !important;
  --bases-table-group-background: #373737 !important;
  --bases-table-header-background: #2b2b2b !important;
  --bases-table-summary-background: #2b2b2b !important;
  --blockquote-border-color: #c76cff !important;
  --bodyFont: "Arimo", sans-serif !important;
  --button-bg-color: #915cb2 !important;
  --button-hover-bg-color: #a271c0 !important;
  --button-hover-text-color: #d8d8d8 !important;
  --button-text-color: #d8d8d8 !important;
  --canvas-background: #2b2b2b !important;
  --canvas-card-label-color: #b6ceb2 !important;
  --caret-color: #e7e7e7 !important;
  --checkbox-border-color: #b6ceb2 !important;
  --checkbox-color: #c76cff !important;
  --checkbox-marker-color: #2b2b2b !important;
  --code-background: #333333 !important;
  --code-block: #83a598 !important;
  --code-border-color: #009200 !important;
  --code-comment: #b6ceb2 !important;
  --code-normal: #e7e7e7 !important;
  --code-size: 500 !important;
  --codeFont: "Anonymous-Pro-Regular", monospace !important;
  --collapse-icon-color: #b6ceb2 !important;
  --collapse-icon-color-collapsed: #c76cff !important;
  --dark: #e7e7e7 !important;
  --darkgray: #e7e7e7 !important;
  --divider-color: #009200 !important;
  --divider-color-hover: #c76cff !important;
  --dropdown-background-color: #c5c5c5 !important;
  --embed-block-shadow-hover: 0 0 0 1px #009200, inset 0 0 0 1px #009200 !important;
  --embed-border-start: 2px solid #c76cff !important;
  --file-header-background: #2b2b2b !important;
  --file-header-background-focused: #2b2b2b !important;
  --file-header-font: "Arimo", sans-serif !important;
  --flair-color: #e7e7e7 !important;
  --font-code-blocks: "Anonymous-Pro-Regular", monospace !important;
  --font-headers: "Helvetica" !important;
  --font-interface: "Arimo", sans-serif !important;
  --font-mermaid: "Arimo", sans-serif !important;
  --font-monospace: "Anonymous-Pro-Regular", monospace !important;
  --font-text: "Arimo", sans-serif !important;
  --font-text-headers: "Helvetica" !important;
  --font-text-normal: "Arimo", sans-serif !important;
  --footnote-divider-color: #009200 !important;
  --footnote-id-color-no-occurrences: #b6ceb2 !important;
  --graph-node-focused: #c76cff !important;
  --graph-node-unresolved: #b6ceb2 !important;
  --graph-text: #e7e7e7 !important;
  --gray: #b6ceb2 !important;
  --h1-size: 3em !important;
  --h2-size: 1.6em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.25em !important;
  --h5-size: 1.125em !important;
  --headerFont: "Arimo", sans-serif !important;
  --heading-formatting: #b6ceb2 !important;
  --highlight: #9400a1 !important;
  --hr-color: #009200 !important;
  --icon-color: #9aff9f !important;
  --icon-color-active: #c76cff !important;
  --icon-color-focused: #dba0ff !important;
  --icon-color-hover: #e3b7ff !important;
  --inline-code: #83a598 !important;
  --inline-title-font: "Helvetica" !important;
  --inline-title-size: 3em !important;
  --input-date-separator: #b6ceb2 !important;
  --input-placeholder-color: #b6ceb2 !important;
  --interactive-accent: #c76cff !important;
  --interactive-accent-rgb: #c76cff !important;
  --interactive-before: #7c6f64 !important;
  --light: #2b2b2b !important;
  --lightgray: #126127 !important;
  --link-color: #c76cff !important;
  --link-color-hover: #da9fff !important;
  --link-external-color: #c76cff !important;
  --link-external-color-hover: #da9fff !important;
  --link-unresolved-color: #c76cff !important;
  --list-marker-color: #b6ceb2 !important;
  --list-marker-color-collapsed: #c76cff !important;
  --menu-background: #126127 !important;
  --metadata-border-color: #009200 !important;
  --metadata-divider-color: #009200 !important;
  --metadata-input-font: "Arimo", sans-serif !important;
  --metadata-input-text-color: #e7e7e7 !important;
  --metadata-label-font: "Arimo", sans-serif !important;
  --modal-background: #2b2b2b !important;
  --nav-collapse-icon-color: #b6ceb2 !important;
  --nav-collapse-icon-color-collapsed: #b6ceb2 !important;
  --nav-heading-color: #e7e7e7 !important;
  --nav-heading-color-collapsed: #b6ceb2 !important;
  --nav-heading-color-hover: #e7e7e7 !important;
  --nav-item-color-active: #d8d8d8 !important;
  --nav-item-color-highlighted: #c76cff !important;
  --nav-item-color-hover: #ffeeee !important;
  --nav-item-color-selected: #eba2a2 !important;
  --nav-item-weight: normal !important;
  --nav-item-weight-active: bold !important;
  --nav-item-weight-hover: bold !important;
  --nav-tag-color: #b6ceb2 !important;
  --pdf-background: #2b2b2b !important;
  --pdf-page-background: #2b2b2b !important;
  --pdf-shadow: 0 0 0 1px #009200 !important;
  --pdf-sidebar-background: #2b2b2b !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #009200 !important;
  --pill-border-color: #009200 !important;
  --pill-color-hover: #e7e7e7 !important;
  --pill-color-remove: #b6ceb2 !important;
  --pill-color-remove-hover: #c76cff !important;
  --pre-code: # !important;
  --prompt-background: #2b2b2b !important;
  --ribbon-background: #126127 !important;
  --ribbon-background-collapsed: #2b2b2b !important;
  --search-result-background: #2b2b2b !important;
  --secondary: #c76cff !important;
  --setting-group-heading-color: #e7e7e7 !important;
  --setting-items-background: #373737 !important;
  --setting-items-border-color: #009200 !important;
  --slider-track-background: #009200 !important;
  --status-bar-background: #126127 !important;
  --status-bar-border-color: #009200 !important;
  --status-bar-text-color: #ffffff !important;
  --suggestion-background: #2b2b2b !important;
  --tab-background-active: #2b2b2b !important;
  --tab-container-background: #126127 !important;
  --tab-font-weight: bold !important;
  --tab-outline-color: #009200 !important;
  --tab-switcher-background: #126127 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #126127, transparent) !important;
  --tab-text-color: #b6ceb2 !important;
  --tab-text-color-focused-active-current: #e7e7e7 !important;
  --tab-text-color-focused-highlighted: #c76cff !important;
  --table-add-button-border-color: #009200 !important;
  --table-border-color: #009200 !important;
  --table-drag-handle-background-active: #c76cff !important;
  --table-drag-handle-color: #b6ceb2 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-border-color: #009200 !important;
  --table-header-color: #e7e7e7 !important;
  --table-selection-border-color: #c76cff !important;
  --tag-color: #c76cff !important;
  --tag-color-hover: #c76cff !important;
  --tertiary: #da9fff !important;
  --text-a: #c76cff !important;
  --text-a-hover: #83a598 !important;
  --text-accent: #c76cff !important;
  --text-accent-hover: #da9fff !important;
  --text-faint: #b6ceb2 !important;
  --text-h1-background: #36ad26 !important;
  --text-h2-background: #269e16 !important;
  --text-h3-background: #221e1f !important;
  --text-h4-background: #8848b1 !important;
  --text-h5-background: #bc4545 !important;
  --text-highlight-bg: #9400a1 !important;
  --text-link: #83a598 !important;
  --text-normal: #e7e7e7 !important;
  --text-on-accent: #fff !important;
  --text-selection: #915cb2 !important;
  --text-title-h1: #e7e7e7 !important;
  --text-title-h2: #e7e7e7 !important;
  --text-title-h3: #e7e7e7 !important;
  --text-title-h4: #e7e7e7 !important;
  --text-title-h5: #d8d8d8 !important;
  --text-title-h6: #c7e7c7 !important;
  --textHighlight: #9400a1 !important;
  --titleFont: "Arimo", sans-serif !important;
  --titlebar-background: #126127 !important;
  --titlebar-background-focused: #134d22 !important;
  --titlebar-border-color: #009200 !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(18, 97, 39);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(43, 43, 43);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(0, 146, 0);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(18, 97, 39);
  border-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(0, 146, 0);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(199, 108, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(18, 97, 39);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 146, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(18, 97, 39);
  border-left-color: rgb(0, 146, 0);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(43, 43, 43);
  color: rgb(231, 231, 231);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(148, 0, 161);
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body del {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(231, 231, 231);
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(182, 206, 178);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(199, 108, 255);
  border-color: rgb(199, 108, 255);
}

html[saved-theme="dark"] body p {
  font-family: Arimo, sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(199, 108, 255);
  font-family: Arimo, sans-serif;
  outline: rgb(199, 108, 255) none 0px;
  text-decoration-color: rgb(199, 108, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(199, 108, 255);
  font-family: Arimo, sans-serif;
  outline: rgb(199, 108, 255) none 0px;
  text-decoration-color: rgb(199, 108, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(199, 108, 255);
  font-family: Arimo, sans-serif;
  outline: rgb(199, 108, 255) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body dt {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(182, 206, 178);
}

html[saved-theme="dark"] body blockquote {
  font-family: Arimo, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body table {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  width: 195.062px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
  color: rgb(231, 231, 231);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
  font-family: Anonymous-Pro-Regular, monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(55, 55, 55);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(199, 108, 255);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(182, 206, 178);
  border-left-color: rgb(182, 206, 178);
  border-right-color: rgb(182, 206, 178);
  border-top-color: rgb(182, 206, 178);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(231, 231, 231);
  text-decoration-color: rgb(231, 231, 231);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
  outline: rgb(231, 231, 231) none 0px;
  text-decoration-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(18, 97, 39);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(199, 108, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

html[saved-theme="dark"] body h2 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

html[saved-theme="dark"] body h3 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

html[saved-theme="dark"] body h4 {
  color: rgb(231, 231, 231);
  font-family: Helvetica;
}

html[saved-theme="dark"] body h5 {
  color: rgb(216, 216, 216);
  font-family: Helvetica;
}

html[saved-theme="dark"] body h6 {
  color: rgb(199, 231, 199);
  font-family: Helvetica;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(43, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(43, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(43, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 43, 43);
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 43, 43);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(43, 43, 43) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 43, 43);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(231, 231, 231);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(154, 255, 159);
  border-left-color: rgb(154, 255, 159);
  border-right-color: rgb(154, 255, 159);
  border-top-color: rgb(154, 255, 159);
  color: rgb(154, 255, 159);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(18, 97, 39);
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(154, 255, 159);
  border-left-color: rgb(154, 255, 159);
  border-right-color: rgb(154, 255, 159);
  border-top-color: rgb(154, 255, 159);
  color: rgb(154, 255, 159);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(154, 255, 159);
  stroke: rgb(154, 255, 159);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(121, 121, 121);
  border-left-color: rgb(121, 121, 121);
  border-right-color: rgb(121, 121, 121);
  border-top-color: rgb(121, 121, 121);
  color: rgb(121, 121, 121);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(182, 206, 178);
  font-family: Arimo, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(0, 146, 0);
  border-left-color: rgb(0, 146, 0);
  border-right-color: rgb(0, 146, 0);
  border-top-color: rgb(0, 146, 0);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(18, 97, 39);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(231, 231, 231);
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body input[type=text] {
  font-family: Arimo, sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
  color: rgb(231, 231, 231);
  font-family: Anonymous-Pro-Regular, monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(231, 231, 231);
  border-left-color: rgb(231, 231, 231);
  border-right-color: rgb(231, 231, 231);
  border-top-color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body sub {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body summary {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body sup {
  color: rgb(231, 231, 231);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(199, 108, 255);
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
  --bases-group-heading-property-color: #e46975 !important;
  --bases-table-border-color: #af303d !important;
  --bases-table-cell-background-active: #e7e7e7 !important;
  --bases-table-cell-background-disabled: #707070 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff3e3e !important;
  --bases-table-group-background: #707070 !important;
  --bases-table-header-background: #e7e7e7 !important;
  --bases-table-header-color: #e46975 !important;
  --bases-table-summary-background: #e7e7e7 !important;
  --blockquote-border-color: #ff3e3e !important;
  --blur-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent)) !important;
  --bodyFont: "Arimo", sans-serif !important;
  --canvas-background: #e7e7e7 !important;
  --canvas-card-label-color: #e46975 !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: #e46975 !important;
  --checkbox-border-color-hover: #e46975 !important;
  --checkbox-color: #ff3e3e !important;
  --checkbox-marker-color: #e7e7e7 !important;
  --checklist-done-color: #e46975 !important;
  --code-background: #ebd9d9 !important;
  --code-border-color: #af303d !important;
  --code-comment: #e46975 !important;
  --code-normal: #000000 !important;
  --code-punctuation: #e46975 !important;
  --code-size: 500 !important;
  --codeFont: "Anonymous-Pro-Regular", monospace !important;
  --collapse-icon-color: #e46975 !important;
  --collapse-icon-color-collapsed: #234bff !important;
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
  --font-code-blocks: "Anonymous-Pro-Regular", monospace !important;
  --font-headers: "Helvetica" !important;
  --font-interface: "Arimo", sans-serif !important;
  --font-mermaid: "Arimo", sans-serif !important;
  --font-monospace: "Anonymous-Pro-Regular", monospace !important;
  --font-text: "Arimo", sans-serif !important;
  --font-text-headers: "Helvetica" !important;
  --font-text-normal: "Arimo", sans-serif !important;
  --footnote-divider-color: #af303d !important;
  --footnote-id-color: #e46975 !important;
  --footnote-id-color-no-occurrences: #e46975 !important;
  --graph-node: #e46975 !important;
  --graph-node-focused: #234bff !important;
  --graph-node-unresolved: #e46975 !important;
  --graph-text: #000000 !important;
  --gray: #e46975 !important;
  --h1-size: 3em !important;
  --h2-size: 1.6em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.25em !important;
  --h5-size: 1.125em !important;
  --headerFont: "Arimo", sans-serif !important;
  --heading-formatting: #e46975 !important;
  --highlight: #5ea9ff !important;
  --hr-color: #af303d !important;
  --icon-color: #bebebe !important;
  --icon-color-active: #234bff !important;
  --icon-color-focused: #d8d8d8 !important;
  --icon-color-hover: #ffffff !important;
  --inline-code: #458588 !important;
  --inline-title-font: "Helvetica" !important;
  --inline-title-size: 3em !important;
  --input-date-separator: #e46975 !important;
  --input-placeholder-color: #e46975 !important;
  --interactive-accent: #ff3e3e !important;
  --interactive-accent-rgb: #ff3e3e !important;
  --interactive-before: #a89984 !important;
  --light: #e7e7e7 !important;
  --lightgray: #991e2a !important;
  --link-color: #234bff !important;
  --link-color-hover: #234bfff6 !important;
  --link-external-color: #234bff !important;
  --link-external-color-hover: #234bfff6 !important;
  --link-unresolved-color: #234bff !important;
  --list-marker-color: #e46975 !important;
  --list-marker-color-collapsed: #234bff !important;
  --list-marker-color-hover: #e46975 !important;
  --menu-background: #991e2a !important;
  --metadata-border-color: #af303d !important;
  --metadata-divider-color: #af303d !important;
  --metadata-input-font: "Arimo", sans-serif !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-font: "Arimo", sans-serif !important;
  --metadata-label-text-color: #e46975 !important;
  --metadata-label-text-color-hover: #e46975 !important;
  --modal-background: #e7e7e7 !important;
  --nav-collapse-icon-color: #e46975 !important;
  --nav-collapse-icon-color-collapsed: #e46975 !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: #e46975 !important;
  --nav-heading-color-collapsed-hover: #e46975 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-item-color: #e46975 !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #234bff !important;
  --nav-item-color-hover: #ffeeee !important;
  --nav-item-color-selected: #eba2a2 !important;
  --nav-item-weight: bold !important;
  --nav-item-weight-active: bold !important;
  --nav-item-weight-hover: bold !important;
  --nav-tag-color: #e46975 !important;
  --nav-tag-color-active: #e46975 !important;
  --nav-tag-color-hover: #e46975 !important;
  --pdf-background: #e7e7e7 !important;
  --pdf-page-background: #e7e7e7 !important;
  --pdf-sidebar-background: #e7e7e7 !important;
  --pill-border-color: #af303d !important;
  --pill-color: #e46975 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: #e46975 !important;
  --pill-color-remove-hover: #234bff !important;
  --pre-code: #bebebe !important;
  --prompt-background: #e7e7e7 !important;
  --raised-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent)) !important;
  --ribbon-background: #991e2a !important;
  --ribbon-background-collapsed: #721922 !important;
  --search-clear-button-color: #e46975 !important;
  --search-icon-color: #e46975 !important;
  --search-result-background: #e7e7e7 !important;
  --secondary: #234bff !important;
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
  --tab-text-color: #e46975 !important;
  --tab-text-color-active: #e46975 !important;
  --tab-text-color-focused: #e46975 !important;
  --tab-text-color-focused-active: #e46975 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: #234bff !important;
  --table-add-button-border-color: #af303d !important;
  --table-border-color: #af303d !important;
  --table-drag-handle-background-active: #ff3e3e !important;
  --table-drag-handle-color: #e46975 !important;
  --table-header-border-color: #af303d !important;
  --table-header-color: #000000 !important;
  --table-selection-border-color: #ff3e3e !important;
  --tag-color: #234bff !important;
  --tag-color-hover: #234bff !important;
  --tertiary: #8e929b !important;
  --text-a: #ff3e3e !important;
  --text-a-hover: #8a8e96 !important;
  --text-accent: #234bff !important;
  --text-accent-hover: #8e929b !important;
  --text-faint: #e46975 !important;
  --text-h1-background: #c11f25 !important;
  --text-h2-background: #e93538 !important;
  --text-h3-background: #221e1f !important;
  --text-h4-background: #87007f !important;
  --text-h5-background: #67bc45 !important;
  --text-highlight-bg: #5ea9ff !important;
  --text-link: #424448 !important;
  --text-muted: #e46975 !important;
  --text-normal: #000000 !important;
  --text-selection: #ffa98f !important;
  --text-title-h1: #ffffff !important;
  --text-title-h2: #ffffff !important;
  --text-title-h3: #ffffff !important;
  --text-title-h4: #ffffff !important;
  --text-title-h5: #ffffff !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(153, 30, 42);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(231, 231, 231);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(175, 48, 61);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(228, 105, 117);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(228, 105, 117);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(35, 75, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(228, 105, 117);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(153, 30, 42);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(175, 48, 61);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(153, 30, 42);
  border-left-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(231, 231, 231);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(94, 169, 255);
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(228, 105, 117);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 62, 62);
  border-color: rgb(255, 62, 62);
}

html[saved-theme="light"] body p {
  color: rgb(228, 105, 117);
  font-family: Arimo, sans-serif;
  outline: rgb(228, 105, 117) none 0px;
  text-decoration-color: rgb(228, 105, 117);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(35, 75, 255);
  font-family: Arimo, sans-serif;
  outline: rgb(35, 75, 255) none 0px;
  text-decoration-color: rgb(35, 75, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(35, 75, 255);
  font-family: Arimo, sans-serif;
  outline: rgb(35, 75, 255) none 0px;
  text-decoration-color: rgb(35, 75, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(35, 75, 255);
  font-family: Arimo, sans-serif;
  outline: rgb(35, 75, 255) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(228, 105, 117);
}

html[saved-theme="light"] body blockquote {
  font-family: Arimo, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  width: 195.062px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Anonymous-Pro-Regular, monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(112, 112, 112);
  border-bottom-color: rgb(228, 105, 117);
  border-left-color: rgb(228, 105, 117);
  border-right-color: rgb(228, 105, 117);
  border-top-color: rgb(228, 105, 117);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 62, 62);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(228, 105, 117);
  border-left-color: rgb(228, 105, 117);
  border-right-color: rgb(228, 105, 117);
  border-top-color: rgb(228, 105, 117);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(153, 30, 42);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(35, 75, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

html[saved-theme="light"] body h2 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: Helvetica;
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

html[saved-theme="light"] body h5 {
  color: rgb(255, 255, 255);
  font-family: Helvetica;
}

html[saved-theme="light"] body h6 {
  color: rgb(100, 10, 13);
  font-family: Helvetica;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(231, 231, 231) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 231, 231);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
  font-weight: 700;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(153, 30, 42);
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(190, 190, 190);
  stroke: rgb(190, 190, 190);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(121, 121, 121);
  border-left-color: rgb(121, 121, 121);
  border-right-color: rgb(121, 121, 121);
  border-top-color: rgb(121, 121, 121);
  color: rgb(121, 121, 121);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(228, 105, 117);
  font-family: Arimo, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(175, 48, 61);
  border-left-color: rgb(175, 48, 61);
  border-right-color: rgb(175, 48, 61);
  border-top-color: rgb(175, 48, 61);
  color: rgb(228, 105, 117);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(228, 105, 117);
  border-left-color: rgb(228, 105, 117);
  border-right-color: rgb(228, 105, 117);
  border-top-color: rgb(228, 105, 117);
  color: rgb(228, 105, 117);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(153, 30, 42);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(228, 105, 117);
  border-left-color: rgb(228, 105, 117);
  border-right-color: rgb(228, 105, 117);
  border-top-color: rgb(228, 105, 117);
  color: rgb(228, 105, 117);
  font-family: Arimo, sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(235, 217, 217);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: Anonymous-Pro-Regular, monospace;
  font-size: 16px;
  padding-bottom: 1.6px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 1.6px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(35, 75, 255);
}`,
  },
};
