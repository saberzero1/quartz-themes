import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "ravenloft",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["literata", "open-sans", "ruslan-display", "vollkorn"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: #c0564b !important;
  --accent-h: #da6a5c !important;
  --accent-hover: #da6a5c !important;
  --background-modifier-active-hover: hsla(10 60% 45%, 0.1) !important;
  --background-primary: #1b1412 !important;
  --background-secondary: #261b1a !important;
  --background-tertiary: #332423 !important;
  --bases-cards-background: #1b1412 !important;
  --bases-group-heading-property-color: #c8b4aa !important;
  --bases-table-cell-background-active: #1b1412 !important;
  --bases-table-cell-background-selected: hsla(#da6a5c, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #c0564b !important;
  --bases-table-header-background: #1b1412 !important;
  --bases-table-header-color: #c8b4aa !important;
  --bases-table-summary-background: #1b1412 !important;
  --bg-pri: #1b1412 !important;
  --bg-sec: #261b1a !important;
  --bg-ter: #332423 !important;
  --blockquote-border-color: #c0564b !important;
  --canvas-background: #1b1412 !important;
  --canvas-card-label-color: #a2928c !important;
  --caret-color: #f0eae2 !important;
  --checkbox-border-color: #a2928c !important;
  --checkbox-border-color-hover: #c8b4aa !important;
  --checkbox-color: #c0564b !important;
  --checkbox-color-hover: #da6a5c !important;
  --checkbox-marker-color: #1b1412 !important;
  --checklist-done-color: #c8b4aa !important;
  --code-bg: #2a1f1e !important;
  --code-comment: #a2928c !important;
  --code-normal: #f0eae2 !important;
  --code-punctuation: #c8b4aa !important;
  --code-txt: #d3c6bd !important;
  --collapse-icon-color: #a2928c !important;
  --collapse-icon-color-collapsed: #c0564b !important;
  --color-accent: hsl(#da6a5c, 88%, 66%) !important;
  --color-accent-1: hsl(calc(#da6a5c - 3), calc(88% * 1.02), calc(66% * 1.15)) !important;
  --color-accent-2: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29)) !important;
  --color-accent-hsl: #da6a5c, 88%, 66% !important;
  --dark: #f0eae2 !important;
  --darkgray: #f0eae2 !important;
  --divider-color-hover: #c0564b !important;
  --embed-border-start: 2px solid #c0564b !important;
  --file-header-background: #1b1412 !important;
  --file-header-background-focused: #1b1412 !important;
  --flair-color: #f0eae2 !important;
  --font-body: "Literata", serif !important;
  --font-heading: "Vollkorn SC", serif !important;
  --font-title: "Ruslan Display", serif !important;
  --font-ui: "Open Sans", sans-serif !important;
  --footnote-id-color: #c8b4aa !important;
  --footnote-id-color-no-occurrences: #a2928c !important;
  --fs-base: 16px !important;
  --fs-inline-title: 3rem !important;
  --graph-node: #c8b4aa !important;
  --graph-node-focused: #c0564b !important;
  --graph-node-unresolved: #a2928c !important;
  --graph-text: #f0eae2 !important;
  --gray: #c8b4aa !important;
  --h1-col: #c0564b !important;
  --h2-col: #b16a5c !important;
  --h3-col: #a78478 !important;
  --h4-col: #958176 !important;
  --h5-col: #85736b !important;
  --h6-col: #776760 !important;
  --heading-formatting: #a2928c !important;
  --hi-bg: #3e2c29 !important;
  --highlight: hsla(10 60% 45%, 0.1) !important;
  --icon-color: #c8b4aa !important;
  --icon-color-active: #c0564b !important;
  --icon-color-focused: #f0eae2 !important;
  --icon-color-hover: #c8b4aa !important;
  --input-date-separator: #a2928c !important;
  --input-placeholder-color: #a2928c !important;
  --interactive-accent: #c0564b !important;
  --interactive-accent-hover: #da6a5c !important;
  --interactive-accent-hsl: 10 60% 45% !important;
  --lh-base: 1.6 !important;
  --light: #1b1412 !important;
  --lightgray: #261b1a !important;
  --link-color: #c0564b !important;
  --link-color-hover: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29)) !important;
  --link-external-color: #c0564b !important;
  --link-external-color-hover: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29)) !important;
  --link-unresolved-color: #c0564b !important;
  --link-unresolved-decoration-color: hsla(10 60% 45%, 0.3) !important;
  --list-marker-color: #a2928c !important;
  --list-marker-color-collapsed: #c0564b !important;
  --list-marker-color-hover: #c8b4aa !important;
  --ls-title: 0.01em !important;
  --menu-background: #261b1a !important;
  --metadata-input-text-color: #f0eae2 !important;
  --metadata-label-text-color: #c8b4aa !important;
  --metadata-label-text-color-hover: #c8b4aa !important;
  --modal-background: #1b1412 !important;
  --nav-collapse-icon-color: #a2928c !important;
  --nav-collapse-icon-color-collapsed: #a2928c !important;
  --nav-heading-color: #f0eae2 !important;
  --nav-heading-color-collapsed: #a2928c !important;
  --nav-heading-color-collapsed-hover: #c8b4aa !important;
  --nav-heading-color-hover: #f0eae2 !important;
  --nav-item-background-selected: hsla(#da6a5c, 88%, 66%, 0.15) !important;
  --nav-item-color: #c8b4aa !important;
  --nav-item-color-active: #f0eae2 !important;
  --nav-item-color-highlighted: #c0564b !important;
  --nav-item-color-hover: #f0eae2 !important;
  --nav-item-color-selected: #f0eae2 !important;
  --nav-tag-color: #a2928c !important;
  --nav-tag-color-active: #c8b4aa !important;
  --nav-tag-color-hover: #c8b4aa !important;
  --pad-code-h: 0.25em !important;
  --pad-code-v: 0.15em !important;
  --pdf-background: #1b1412 !important;
  --pdf-page-background: #1b1412 !important;
  --pdf-sidebar-background: #1b1412 !important;
  --pill-color: #c8b4aa !important;
  --pill-color-hover: #f0eae2 !important;
  --pill-color-remove: #a2928c !important;
  --pill-color-remove-hover: #c0564b !important;
  --prompt-background: #1b1412 !important;
  --ribbon-background: #261b1a !important;
  --ribbon-background-collapsed: #1b1412 !important;
  --search-clear-button-color: #c8b4aa !important;
  --search-icon-color: #c8b4aa !important;
  --search-result-background: #1b1412 !important;
  --secondary: #c0564b !important;
  --setting-group-heading-color: #f0eae2 !important;
  --sp-head-bottom: 0.4em !important;
  --sp-head-top: 1.2em !important;
  --status-bar-background: #261b1a !important;
  --status-bar-text-color: #c8b4aa !important;
  --suggestion-background: #1b1412 !important;
  --tab-background-active: #1b1412 !important;
  --tab-container-background: #261b1a !important;
  --tab-switcher-background: #261b1a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #261b1a, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#da6a5c, 88%, 66%) !important;
  --tab-text-color: #a2928c !important;
  --tab-text-color-active: #c8b4aa !important;
  --tab-text-color-focused: #c8b4aa !important;
  --tab-text-color-focused-active: #c8b4aa !important;
  --tab-text-color-focused-active-current: #f0eae2 !important;
  --tab-text-color-focused-highlighted: #c0564b !important;
  --table-drag-handle-background-active: #c0564b !important;
  --table-drag-handle-color: #a2928c !important;
  --table-header-color: #f0eae2 !important;
  --table-selection: hsla(#da6a5c, 88%, 66%, 0.1) !important;
  --table-selection-border-color: #c0564b !important;
  --tag-background: hsla(10 60% 45%, 0.1) !important;
  --tag-background-hover: hsla(10 60% 45%, 0.2) !important;
  --tag-border-color: hsla(10 60% 45%, 0.15) !important;
  --tag-border-color-hover: hsla(10 60% 45%, 0.15) !important;
  --tag-color: #c0564b !important;
  --tag-color-hover: #c0564b !important;
  --tertiary: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29)) !important;
  --text-accent: #c0564b !important;
  --text-accent-hover: hsl(calc(#da6a5c - 5), calc(88% * 1.05), calc(66% * 1.29)) !important;
  --text-faint: #a2928c !important;
  --text-muted: #c8b4aa !important;
  --text-normal: #f0eae2 !important;
  --text-selection: rgb(192 86 75 / 35%) !important;
  --textHighlight: hsla(10 60% 45%, 0.1) !important;
  --title-col: #7e2f2a !important;
  --titlebar-background: #261b1a !important;
  --titlebar-text-color: #c8b4aa !important;
  --titlebar-text-color-focused: #f0eae2 !important;
  --txt-bold: #c0564b !important;
  --txt-em: #b88a82 !important;
  --txt-faint: #a2928c !important;
  --txt-muted: #c8b4aa !important;
  --txt-norm: #f0eae2 !important;
  --vault-profile-color: #f0eae2 !important;
  --vault-profile-color-hover: #f0eae2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(38, 27, 26);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(27, 20, 18);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(38, 27, 26);
  border-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(38, 27, 26);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(38, 27, 26);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(27, 20, 18);
  color: rgb(240, 234, 226);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  font-weight: 700;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration-color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(184, 138, 130);
  font-family: Literata, serif;
  outline: rgb(184, 138, 130) none 0px;
  text-decoration-color: rgb(184, 138, 130);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(184, 138, 130);
  font-family: Literata, serif;
  outline: rgb(184, 138, 130) none 0px;
  text-decoration-color: rgb(184, 138, 130);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  font-weight: 700;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration-color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body del {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(162, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(192, 86, 75);
  border-color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body p {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
  outline: rgb(200, 180, 170) none 0px;
  text-decoration-color: rgb(200, 180, 170);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration-color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration-color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(192, 86, 75);
  font-family: Literata, serif;
  outline: rgb(192, 86, 75) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(192, 86, 75);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body dt {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(162, 146, 140);
}

html[saved-theme="dark"] body blockquote {
  font-family: Literata, serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body table {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  width: 205.438px;
}

html[saved-theme="dark"] body td {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body th {
  color: rgb(240, 234, 226);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(211, 198, 189);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(211, 198, 189);
  border-right-color: rgb(211, 198, 189);
  border-top-color: rgb(211, 198, 189);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(211, 198, 189);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(240, 234, 226);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(192, 86, 75);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: Literata, serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: Literata, serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 146, 140);
  border-left-color: rgb(162, 146, 140);
  border-right-color: rgb(162, 146, 140);
  border-top-color: rgb(162, 146, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(240, 234, 226);
  text-decoration-color: rgb(240, 234, 226);
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
  color: rgb(240, 234, 226);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(27, 20, 18);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(240, 234, 226);
  font-family: Literata, serif;
  outline: rgb(240, 234, 226) none 0px;
  text-decoration-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(38, 27, 26);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(192, 86, 75);
  border-left-color: rgb(192, 86, 75);
  border-right-color: rgb(192, 86, 75);
  border-top-color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(192, 86, 75);
}

html[saved-theme="dark"] body h1 {
  color: rgb(192, 86, 75);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(177, 106, 92);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(126, 47, 42);
  font-family: "Ruslan Display", serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(167, 132, 120);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(149, 129, 118);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(133, 115, 107);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(119, 103, 96);
  font-family: "Vollkorn SC", serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(27, 20, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(27, 20, 18);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(240, 234, 226);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(38, 27, 26);
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(200, 180, 170);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(240, 234, 226);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(200, 180, 170);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(200, 180, 170);
  stroke: rgb(200, 180, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(162, 146, 140);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(200, 180, 170);
  font-family: Literata, serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
  font-family: Literata, serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(38, 27, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body abbr {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(200, 180, 170);
  border-left-color: rgb(200, 180, 170);
  border-right-color: rgb(200, 180, 170);
  border-top-color: rgb(200, 180, 170);
  color: rgb(200, 180, 170);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(240, 234, 226);
  border-left-color: rgb(240, 234, 226);
  border-right-color: rgb(240, 234, 226);
  border-top-color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body sub {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body summary {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body sup {
  color: rgb(240, 234, 226);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(192, 86, 75);
  border-left-color: rgb(192, 86, 75);
  border-right-color: rgb(192, 86, 75);
  border-top-color: rgb(192, 86, 75);
  color: rgb(192, 86, 75);
}`,
  },
  light: {
    base: `:root:root {
  --accent: #92342c !important;
  --accent-h: #a9473e !important;
  --accent-hover: #a9473e !important;
  --background-modifier-active-hover: hsla(10 60% 45%, 0.1) !important;
  --background-primary: #f3eee6 !important;
  --background-secondary: #e8dfd6 !important;
  --background-tertiary: #ddd2c8 !important;
  --bases-cards-background: #f3eee6 !important;
  --bases-group-heading-property-color: #6f5f5a !important;
  --bases-table-cell-background-active: #f3eee6 !important;
  --bases-table-cell-background-selected: hsla(#a9473e, 88%, 66%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #92342c !important;
  --bases-table-header-background: #f3eee6 !important;
  --bases-table-header-color: #6f5f5a !important;
  --bases-table-summary-background: #f3eee6 !important;
  --bg-pri: #f3eee6 !important;
  --bg-sec: #e8dfd6 !important;
  --bg-ter: #ddd2c8 !important;
  --blockquote-border-color: #92342c !important;
  --blur-background: color-mix(in srgb, #f3eee6 65%, transparent) linear-gradient(#f3eee6, color-mix(in srgb, #f3eee6 65%, transparent)) !important;
  --canvas-background: #f3eee6 !important;
  --canvas-card-label-color: #a2928a !important;
  --caret-color: #362a27 !important;
  --checkbox-border-color: #a2928a !important;
  --checkbox-border-color-hover: #6f5f5a !important;
  --checkbox-color: #92342c !important;
  --checkbox-color-hover: #a9473e !important;
  --checkbox-marker-color: #f3eee6 !important;
  --checklist-done-color: #6f5f5a !important;
  --code-bg: #eae1d7 !important;
  --code-comment: #a2928a !important;
  --code-normal: #362a27 !important;
  --code-punctuation: #6f5f5a !important;
  --code-txt: #57423d !important;
  --collapse-icon-color: #a2928a !important;
  --collapse-icon-color-collapsed: #92342c !important;
  --color-accent: hsl(#a9473e, 88%, 66%) !important;
  --color-accent-1: hsl(calc(#a9473e - 1), calc(88% * 1.01), calc(66% * 1.075)) !important;
  --color-accent-2: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15)) !important;
  --color-accent-hsl: #a9473e, 88%, 66% !important;
  --dark: #362a27 !important;
  --darkgray: #362a27 !important;
  --divider-color-hover: #92342c !important;
  --embed-border-start: 2px solid #92342c !important;
  --file-header-background: #f3eee6 !important;
  --file-header-background-focused: #f3eee6 !important;
  --flair-color: #362a27 !important;
  --font-body: "Literata", serif !important;
  --font-heading: "Vollkorn SC", serif !important;
  --font-title: "Ruslan Display", serif !important;
  --font-ui: "Open Sans", sans-serif !important;
  --footnote-id-color: #6f5f5a !important;
  --footnote-id-color-no-occurrences: #a2928a !important;
  --fs-base: 16px !important;
  --fs-inline-title: 3rem !important;
  --graph-node: #6f5f5a !important;
  --graph-node-focused: #92342c !important;
  --graph-node-unresolved: #a2928a !important;
  --graph-text: #362a27 !important;
  --gray: #6f5f5a !important;
  --h1-col: #7e2f2a !important;
  --h2-col: #874338 !important;
  --h3-col: #926054 !important;
  --h4-col: #9c7467 !important;
  --h5-col: #a7897d !important;
  --h6-col: #b19991 !important;
  --heading-formatting: #a2928a !important;
  --hi-bg: #cfc2b4 !important;
  --highlight: hsla(10 60% 45%, 0.1) !important;
  --icon-color: #6f5f5a !important;
  --icon-color-active: #92342c !important;
  --icon-color-focused: #362a27 !important;
  --icon-color-hover: #6f5f5a !important;
  --input-date-separator: #a2928a !important;
  --input-placeholder-color: #a2928a !important;
  --interactive-accent: #92342c !important;
  --interactive-accent-hover: #a9473e !important;
  --interactive-accent-hsl: 10 60% 45% !important;
  --lh-base: 1.6 !important;
  --light: #f3eee6 !important;
  --lightgray: #e8dfd6 !important;
  --link-color: #92342c !important;
  --link-color-hover: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15)) !important;
  --link-external-color: #92342c !important;
  --link-external-color-hover: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15)) !important;
  --link-unresolved-color: #92342c !important;
  --link-unresolved-decoration-color: hsla(10 60% 45%, 0.3) !important;
  --list-marker-color: #a2928a !important;
  --list-marker-color-collapsed: #92342c !important;
  --list-marker-color-hover: #6f5f5a !important;
  --ls-title: 0.01em !important;
  --menu-background: #e8dfd6 !important;
  --metadata-input-text-color: #362a27 !important;
  --metadata-label-text-color: #6f5f5a !important;
  --metadata-label-text-color-hover: #6f5f5a !important;
  --modal-background: #f3eee6 !important;
  --nav-collapse-icon-color: #a2928a !important;
  --nav-collapse-icon-color-collapsed: #a2928a !important;
  --nav-heading-color: #362a27 !important;
  --nav-heading-color-collapsed: #a2928a !important;
  --nav-heading-color-collapsed-hover: #6f5f5a !important;
  --nav-heading-color-hover: #362a27 !important;
  --nav-item-background-selected: hsla(#a9473e, 88%, 66%, 0.15) !important;
  --nav-item-color: #6f5f5a !important;
  --nav-item-color-active: #362a27 !important;
  --nav-item-color-highlighted: #92342c !important;
  --nav-item-color-hover: #362a27 !important;
  --nav-item-color-selected: #362a27 !important;
  --nav-tag-color: #a2928a !important;
  --nav-tag-color-active: #6f5f5a !important;
  --nav-tag-color-hover: #6f5f5a !important;
  --pad-code-h: 0.25em !important;
  --pad-code-v: 0.15em !important;
  --pdf-background: #f3eee6 !important;
  --pdf-page-background: #f3eee6 !important;
  --pdf-sidebar-background: #f3eee6 !important;
  --pill-color: #6f5f5a !important;
  --pill-color-hover: #362a27 !important;
  --pill-color-remove: #a2928a !important;
  --pill-color-remove-hover: #92342c !important;
  --prompt-background: #f3eee6 !important;
  --raised-background: color-mix(in srgb, #f3eee6 65%, transparent) linear-gradient(#f3eee6, color-mix(in srgb, #f3eee6 65%, transparent)) !important;
  --ribbon-background: #e8dfd6 !important;
  --ribbon-background-collapsed: #f3eee6 !important;
  --search-clear-button-color: #6f5f5a !important;
  --search-icon-color: #6f5f5a !important;
  --search-result-background: #f3eee6 !important;
  --secondary: #92342c !important;
  --setting-group-heading-color: #362a27 !important;
  --sp-head-bottom: 0.4em !important;
  --sp-head-top: 1.2em !important;
  --status-bar-background: #e8dfd6 !important;
  --status-bar-text-color: #6f5f5a !important;
  --suggestion-background: #f3eee6 !important;
  --tab-background-active: #f3eee6 !important;
  --tab-container-background: #e8dfd6 !important;
  --tab-switcher-background: #e8dfd6 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e8dfd6, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(#a9473e, 88%, 66%) !important;
  --tab-text-color: #a2928a !important;
  --tab-text-color-active: #6f5f5a !important;
  --tab-text-color-focused: #6f5f5a !important;
  --tab-text-color-focused-active: #6f5f5a !important;
  --tab-text-color-focused-active-current: #362a27 !important;
  --tab-text-color-focused-highlighted: #92342c !important;
  --table-drag-handle-background-active: #92342c !important;
  --table-drag-handle-color: #a2928a !important;
  --table-header-color: #362a27 !important;
  --table-selection: hsla(#a9473e, 88%, 66%, 0.1) !important;
  --table-selection-border-color: #92342c !important;
  --tag-background: hsla(10 60% 45%, 0.1) !important;
  --tag-background-hover: hsla(10 60% 45%, 0.2) !important;
  --tag-border-color: hsla(10 60% 45%, 0.15) !important;
  --tag-border-color-hover: hsla(10 60% 45%, 0.15) !important;
  --tag-color: #92342c !important;
  --tag-color-hover: #92342c !important;
  --tertiary: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15)) !important;
  --text-accent: #92342c !important;
  --text-accent-hover: hsl(calc(#a9473e - 3), calc(88% * 1.02), calc(66% * 1.15)) !important;
  --text-faint: #a2928a !important;
  --text-muted: #6f5f5a !important;
  --text-normal: #362a27 !important;
  --text-selection: rgb(192 86 75 / 35%) !important;
  --textHighlight: hsla(10 60% 45%, 0.1) !important;
  --title-col: #7e2f2a !important;
  --titlebar-background: #e8dfd6 !important;
  --titlebar-text-color: #6f5f5a !important;
  --titlebar-text-color-focused: #362a27 !important;
  --txt-bold: #92342c !important;
  --txt-em: #8f6059 !important;
  --txt-faint: #a2928a !important;
  --txt-muted: #6f5f5a !important;
  --txt-norm: #362a27 !important;
  --vault-profile-color: #362a27 !important;
  --vault-profile-color-hover: #362a27 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(232, 223, 214);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(243, 238, 230);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(243, 238, 230);
  border-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(146, 52, 44);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(232, 223, 214);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(232, 223, 214);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(243, 238, 230);
  color: rgb(54, 42, 39);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  font-weight: 700;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration-color: rgb(146, 52, 44);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(143, 96, 89);
  font-family: Literata, serif;
  outline: rgb(143, 96, 89) none 0px;
  text-decoration-color: rgb(143, 96, 89);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(143, 96, 89);
  font-family: Literata, serif;
  outline: rgb(143, 96, 89) none 0px;
  text-decoration-color: rgb(143, 96, 89);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  font-weight: 700;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration-color: rgb(146, 52, 44);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body del {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(162, 146, 138);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(146, 52, 44);
  border-color: rgb(146, 52, 44);
}

html[saved-theme="light"] body p {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
  outline: rgb(111, 95, 90) none 0px;
  text-decoration-color: rgb(111, 95, 90);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration-color: rgb(146, 52, 44);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration-color: rgb(146, 52, 44);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(146, 52, 44);
  font-family: Literata, serif;
  outline: rgb(146, 52, 44) none 0px;
  text-decoration: underline;
  text-decoration-color: rgb(146, 52, 44);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body dt {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body ol > li {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body ul > li {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(162, 146, 138);
}

html[saved-theme="light"] body blockquote {
  font-family: Literata, serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body table {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  width: 205.438px;
}

html[saved-theme="light"] body td {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body th {
  color: rgb(54, 42, 39);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(87, 66, 61);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(87, 66, 61);
  border-right-color: rgb(87, 66, 61);
  border-top-color: rgb(87, 66, 61);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(87, 66, 61);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(54, 42, 39);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body figcaption {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(146, 52, 44);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: Literata, serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: Literata, serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(162, 146, 138);
  border-left-color: rgb(162, 146, 138);
  border-right-color: rgb(162, 146, 138);
  border-top-color: rgb(162, 146, 138);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(54, 42, 39);
  text-decoration-color: rgb(54, 42, 39);
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
  color: rgb(54, 42, 39);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(243, 238, 230);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(54, 42, 39);
  font-family: Literata, serif;
  outline: rgb(54, 42, 39) none 0px;
  text-decoration-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 223, 214);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(146, 52, 44);
  border-left-color: rgb(146, 52, 44);
  border-right-color: rgb(146, 52, 44);
  border-top-color: rgb(146, 52, 44);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(146, 52, 44);
}

html[saved-theme="light"] body h1 {
  color: rgb(126, 47, 42);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(135, 67, 56);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(126, 47, 42);
  font-family: "Ruslan Display", serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(146, 96, 84);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(156, 116, 103);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(167, 137, 125);
  font-family: "Vollkorn SC", serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(177, 153, 145);
  font-family: "Vollkorn SC", serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(243, 238, 230) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(243, 238, 230);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(54, 42, 39);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(232, 223, 214);
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(111, 95, 90);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(54, 42, 39);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(111, 95, 90);
  font-family: "Open Sans", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(111, 95, 90);
  stroke: rgb(111, 95, 90);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(162, 146, 138);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body .metadata {
  color: rgb(111, 95, 90);
  font-family: Literata, serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
  font-family: Literata, serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(232, 223, 214);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body abbr {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(111, 95, 90);
  border-left-color: rgb(111, 95, 90);
  border-right-color: rgb(111, 95, 90);
  border-top-color: rgb(111, 95, 90);
  color: rgb(111, 95, 90);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(54, 42, 39);
  border-left-color: rgb(54, 42, 39);
  border-right-color: rgb(54, 42, 39);
  border-top-color: rgb(54, 42, 39);
}

html[saved-theme="light"] body sub {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body summary {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body sup {
  color: rgb(54, 42, 39);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(146, 52, 44);
  border-left-color: rgb(146, 52, 44);
  border-right-color: rgb(146, 52, 44);
  border-top-color: rgb(146, 52, 44);
  color: rgb(146, 52, 44);
}`,
  },
};
