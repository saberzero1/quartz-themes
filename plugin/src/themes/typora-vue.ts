import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "typora-vue",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 153 !important;
  --accent-l: 49% !important;
  --accent-s: 47% !important;
  --background-modifier-active-hover: rgba(66, 184, 131, 0.1) !important;
  --background-modifier-hover: rgba(66, 184, 131, 0.05) !important;
  --background-modifier-message: rgb(66, 184, 131) !important;
  --bases-table-cell-background-selected: rgba(66, 184, 131, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(66, 184, 131) !important;
  --bases-table-header-background-hover: rgba(66, 184, 131, 0.05) !important;
  --bases-table-row-background-hover: #171717 !important;
  --bases-table-summary-background-hover: rgba(66, 184, 131, 0.05) !important;
  --blockquote-border-color: rgb(66, 184, 131) !important;
  --caret-color: #EEEEEE !important;
  --checkbox-color: rgb(66, 184, 131) !important;
  --checkbox-color-hover: rgb(89, 197, 143) !important;
  --code-background: #1a1a1a !important;
  --code-bracket-background: rgba(66, 184, 131, 0.05) !important;
  --code-normal: #EEEEEE !important;
  --collapse-icon-color-collapsed: rgb(89, 197, 143) !important;
  --color-accent: rgb(66, 184, 131) !important;
  --color-accent-1: rgb(89, 197, 143) !important;
  --color-accent-2: rgb(114, 207, 158) !important;
  --color-accent-hsl: 153, 47%, 49% !important;
  --cus-code-block-border: #1c1c1c !important;
  --cus-highlight-cursor-line: rgba(225, 225, 225, 0.12) !important;
  --cus-inline-code-text: #f3b37f !important;
  --cus-table-gap-tr: #1a1a1a !important;
  --cus-table-header: #171717 !important;
  --dark: #EEEEEE !important;
  --darkgray: #EEEEEE !important;
  --divider-color-hover: rgb(66, 184, 131) !important;
  --embed-border-start: 2px solid rgb(66, 184, 131) !important;
  --flair-color: #EEEEEE !important;
  --footnote-input-background-active: rgba(66, 184, 131, 0.05) !important;
  --graph-node-focused: rgb(89, 197, 143) !important;
  --graph-text: #EEEEEE !important;
  --gray: #EEEEEE !important;
  --h1-size: 2.2em !important;
  --h2-size: 1.75em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1em !important;
  --highlight: rgba(66, 184, 131, 0.05) !important;
  --icon-color-active: rgb(89, 197, 143) !important;
  --icon-color-focused: #EEEEEE !important;
  --icon-color-hover: rgb(66, 184, 131) !important;
  --inline-title-size: 2.2em !important;
  --interactive-accent: rgb(66, 184, 131) !important;
  --interactive-accent-hover: rgb(89, 197, 143) !important;
  --interactive-accent-hsl: 153, 47%, 49% !important;
  --link-color: rgb(89, 197, 143) !important;
  --link-color-hover: rgb(114, 207, 158) !important;
  --link-external-color: rgb(89, 197, 143) !important;
  --link-external-color-hover: rgb(114, 207, 158) !important;
  --link-unresolved-color: rgb(89, 197, 143) !important;
  --link-unresolved-decoration-color: rgba(66, 184, 131, 0.3) !important;
  --list-marker-color-collapsed: rgb(89, 197, 143) !important;
  --metadata-input-background-active: rgba(66, 184, 131, 0.05) !important;
  --metadata-input-text-color: #EEEEEE !important;
  --metadata-label-background-active: rgba(66, 184, 131, 0.05) !important;
  --metadata-property-background-active: rgba(66, 184, 131, 0.05) !important;
  --nav-heading-color: #EEEEEE !important;
  --nav-heading-color-hover: #EEEEEE !important;
  --nav-item-background-active: rgba(66, 184, 131, 0.05) !important;
  --nav-item-background-hover: rgba(66, 184, 131, 0.05) !important;
  --nav-item-background-selected: rgba(66, 184, 131, 0.15) !important;
  --nav-item-color-active: rgb(66, 184, 131) !important;
  --nav-item-color-highlighted: rgb(89, 197, 143) !important;
  --nav-item-color-hover: rgb(66, 184, 131) !important;
  --nav-item-color-selected: #EEEEEE !important;
  --pill-color-hover: #EEEEEE !important;
  --pill-color-remove-hover: rgb(89, 197, 143) !important;
  --secondary: rgb(89, 197, 143) !important;
  --setting-group-heading-color: #EEEEEE !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(66, 184, 131) !important;
  --tab-text-color-focused-active-current: #EEEEEE !important;
  --tab-text-color-focused-highlighted: rgb(89, 197, 143) !important;
  --table-drag-handle-background-active: rgb(66, 184, 131) !important;
  --table-header-color: #EEEEEE !important;
  --table-row-background-hover: #171717 !important;
  --table-selection: rgba(66, 184, 131, 0.1) !important;
  --table-selection-border-color: rgb(66, 184, 131) !important;
  --tag-background: rgba(66, 184, 131, 0.1) !important;
  --tag-background-hover: rgba(66, 184, 131, 0.2) !important;
  --tag-border-color: rgba(66, 184, 131, 0.15) !important;
  --tag-border-color-hover: rgba(66, 184, 131, 0.15) !important;
  --tag-color: rgb(89, 197, 143) !important;
  --tag-color-hover: rgb(89, 197, 143) !important;
  --tertiary: rgb(114, 207, 158) !important;
  --text-accent: rgb(89, 197, 143) !important;
  --text-accent-hover: rgb(114, 207, 158) !important;
  --text-normal: #EEEEEE !important;
  --text-selection: rgba(66, 184, 131, 0.33) !important;
  --textHighlight: rgba(66, 184, 131, 0.05) !important;
  --titlebar-text-color-focused: #EEEEEE !important;
  --vault-profile-color: #EEEEEE !important;
  --vault-profile-color-hover: #EEEEEE !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(238, 238, 238);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: line-through rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration: underline rgb(90, 197, 144);
  text-decoration-color: rgb(90, 197, 144);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration: underline rgb(90, 197, 144);
  text-decoration-color: rgb(90, 197, 144);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration: underline rgba(66, 184, 131, 0.3);
  text-decoration-color: rgba(66, 184, 131, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body dt {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgba(66, 184, 131, 0.1);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body table {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body td {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body th {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body thead {
  background-color: rgb(23, 23, 23);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(66, 184, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(66, 184, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(66, 184, 131, 0.1);
  border-bottom-color: rgba(66, 184, 131, 0.15);
  border-left-color: rgba(66, 184, 131, 0.15);
  border-right-color: rgba(66, 184, 131, 0.15);
  border-top-color: rgba(66, 184, 131, 0.15);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(90, 197, 144);
}

html[saved-theme="dark"] body h1 {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h2 {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h3 {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h4 {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h5 {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h6 {
  color: rgb(238, 238, 238);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body abbr {
  color: rgb(238, 238, 238);
  text-decoration: underline dotted rgb(238, 238, 238);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body sub {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body summary {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body sup {
  color: rgb(238, 238, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 153 !important;
  --accent-l: 49% !important;
  --accent-s: 47% !important;
  --background-modifier-active-hover: rgba(66, 184, 131, 0.1) !important;
  --background-modifier-hover: rgba(66, 184, 131, 0.05) !important;
  --background-modifier-message: rgb(66, 184, 131) !important;
  --background-secondary: #ffffff !important;
  --bases-table-cell-background-selected: rgba(66, 184, 131, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(79, 191, 139) !important;
  --bases-table-header-background-hover: rgba(66, 184, 131, 0.05) !important;
  --bases-table-row-background-hover: #f2f2f2 !important;
  --bases-table-summary-background-hover: rgba(66, 184, 131, 0.05) !important;
  --blockquote-border-color: rgb(79, 191, 139) !important;
  --caret-color: #34495e !important;
  --checkbox-color: rgb(79, 191, 139) !important;
  --checkbox-color-hover: rgb(89, 197, 143) !important;
  --code-background: #f8f8f8 !important;
  --code-bracket-background: rgba(66, 184, 131, 0.05) !important;
  --code-normal: #34495e !important;
  --collapse-icon-color-collapsed: rgb(66, 184, 131) !important;
  --color-accent: rgb(66, 184, 131) !important;
  --color-accent-1: rgb(79, 191, 139) !important;
  --color-accent-2: rgb(89, 197, 143) !important;
  --color-accent-hsl: 153, 47%, 49% !important;
  --cus-code-block-border: #f4f4f4 !important;
  --cus-highlight-cursor-line: rgba(245, 204, 142, 0.12) !important;
  --cus-inline-code-text: #e96900 !important;
  --cus-table-gap-tr: #fafafa !important;
  --cus-table-header: #f2f2f2 !important;
  --dark: #34495e !important;
  --darkgray: #34495e !important;
  --divider-color-hover: rgb(79, 191, 139) !important;
  --embed-border-start: 2px solid rgb(79, 191, 139) !important;
  --flair-color: #34495e !important;
  --footnote-input-background-active: rgba(66, 184, 131, 0.05) !important;
  --graph-node-focused: rgb(66, 184, 131) !important;
  --graph-text: #34495e !important;
  --gray: #34495e !important;
  --h1-size: 2.2em !important;
  --h2-size: 1.75em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1em !important;
  --highlight: rgba(66, 184, 131, 0.05) !important;
  --icon-color-active: rgb(66, 184, 131) !important;
  --icon-color-focused: #34495e !important;
  --icon-color-hover: rgb(66, 184, 131) !important;
  --inline-title-size: 2.2em !important;
  --interactive-accent: rgb(79, 191, 139) !important;
  --interactive-accent-hover: rgb(89, 197, 143) !important;
  --interactive-accent-hsl: 153, 47%, 49% !important;
  --lightgray: #ffffff !important;
  --link-color: rgb(66, 184, 131) !important;
  --link-color-hover: rgb(89, 197, 143) !important;
  --link-external-color: rgb(66, 184, 131) !important;
  --link-external-color-hover: rgb(89, 197, 143) !important;
  --link-unresolved-color: rgb(66, 184, 131) !important;
  --link-unresolved-decoration-color: rgba(66, 184, 131, 0.3) !important;
  --list-marker-color-collapsed: rgb(66, 184, 131) !important;
  --menu-background: #ffffff !important;
  --metadata-input-background-active: rgba(66, 184, 131, 0.05) !important;
  --metadata-input-text-color: #34495e !important;
  --metadata-label-background-active: rgba(66, 184, 131, 0.05) !important;
  --metadata-property-background-active: rgba(66, 184, 131, 0.05) !important;
  --nav-heading-color: #34495e !important;
  --nav-heading-color-hover: #34495e !important;
  --nav-item-background-active: rgba(66, 184, 131, 0.05) !important;
  --nav-item-background-hover: rgba(66, 184, 131, 0.05) !important;
  --nav-item-background-selected: rgba(66, 184, 131, 0.15) !important;
  --nav-item-color-active: rgb(66, 184, 131) !important;
  --nav-item-color-highlighted: rgb(66, 184, 131) !important;
  --nav-item-color-hover: rgb(66, 184, 131) !important;
  --nav-item-color-selected: #34495e !important;
  --pill-color-hover: #34495e !important;
  --pill-color-remove-hover: rgb(66, 184, 131) !important;
  --ribbon-background: #ffffff !important;
  --secondary: rgb(66, 184, 131) !important;
  --setting-group-heading-color: #34495e !important;
  --status-bar-background: #ffffff !important;
  --tab-container-background: #ffffff !important;
  --tab-switcher-background: #ffffff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(66, 184, 131) !important;
  --tab-text-color-focused-active-current: #34495e !important;
  --tab-text-color-focused-highlighted: rgb(66, 184, 131) !important;
  --table-drag-handle-background-active: rgb(79, 191, 139) !important;
  --table-header-color: #34495e !important;
  --table-row-background-hover: #f2f2f2 !important;
  --table-selection: rgba(66, 184, 131, 0.1) !important;
  --table-selection-border-color: rgb(79, 191, 139) !important;
  --tag-background: rgba(66, 184, 131, 0.1) !important;
  --tag-background-hover: rgba(66, 184, 131, 0.2) !important;
  --tag-border-color: rgba(66, 184, 131, 0.15) !important;
  --tag-border-color-hover: rgba(66, 184, 131, 0.15) !important;
  --tag-color: rgb(66, 184, 131) !important;
  --tag-color-hover: rgb(66, 184, 131) !important;
  --tertiary: rgb(89, 197, 143) !important;
  --text-accent: rgb(66, 184, 131) !important;
  --text-accent-hover: rgb(89, 197, 143) !important;
  --text-normal: #34495e !important;
  --text-selection: rgba(66, 184, 131, 0.2) !important;
  --textHighlight: rgba(66, 184, 131, 0.05) !important;
  --titlebar-background: #ffffff !important;
  --titlebar-text-color-focused: #34495e !important;
  --vault-profile-color: #34495e !important;
  --vault-profile-color-hover: #34495e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(52, 73, 94);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body del {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: line-through rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration: underline rgb(66, 184, 131);
  text-decoration-color: rgb(66, 184, 131);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration: underline rgb(66, 184, 131);
  text-decoration-color: rgb(66, 184, 131);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration: underline rgba(66, 184, 131, 0.3);
  text-decoration-color: rgba(66, 184, 131, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body dt {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body ol > li {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body ul > li {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgba(66, 184, 131, 0.1);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body table {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body td {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body th {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body thead {
  background-color: rgb(242, 242, 242);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body figcaption {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(77, 192, 138);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(77, 192, 138);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(66, 184, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(66, 184, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(66, 184, 131, 0.1);
  border-bottom-color: rgba(66, 184, 131, 0.15);
  border-left-color: rgba(66, 184, 131, 0.15);
  border-right-color: rgba(66, 184, 131, 0.15);
  border-top-color: rgba(66, 184, 131, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(66, 184, 131);
}

html[saved-theme="light"] body h1 {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h2 {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h3 {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h4 {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h5 {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h6 {
  color: rgb(52, 73, 94);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body abbr {
  color: rgb(52, 73, 94);
  text-decoration: underline dotted rgb(52, 73, 94);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body sub {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body summary {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body sup {
  color: rgb(52, 73, 94);
}`,
  },
};
