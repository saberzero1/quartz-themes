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
  --background-modifier-active-hover: hsla(153, 47%, 49%, 0.1) !important;
  --background-modifier-hover: hsla(153, 47%, 49%, 0.05) !important;
  --background-modifier-message: hsl(153, 47%, 49%) !important;
  --bases-table-cell-background-selected: hsla(153, 47%, 49%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(153, 47%, 49%) !important;
  --bases-table-header-background-hover: hsla(153, 47%, 49%, 0.05) !important;
  --bases-table-row-background-hover: #171717 !important;
  --bases-table-summary-background-hover: hsla(153, 47%, 49%, 0.05) !important;
  --blockquote-border-color: hsl(153, 47%, 49%) !important;
  --caret-color: #EEEEEE !important;
  --checkbox-color: hsl(153, 47%, 49%) !important;
  --checkbox-color-hover: hsl(150, 47.94%, 56.35%) !important;
  --code-background: #1a1a1a !important;
  --code-bracket-background: hsla(153, 47%, 49%, 0.05) !important;
  --code-normal: #EEEEEE !important;
  --collapse-icon-color-collapsed: hsl(150, 47.94%, 56.35%) !important;
  --color-accent: hsl(153, 47%, 49%) !important;
  --color-accent-1: hsl(150, 47.94%, 56.35%) !important;
  --color-accent-2: hsl(148, 49.35%, 63.21%) !important;
  --color-accent-hsl: 153, 47%, 49% !important;
  --cus-code-block-border: #1c1c1c !important;
  --cus-highlight-cursor-line: rgba(225, 225, 225, 0.12) !important;
  --cus-inline-code-text: #f3b37f !important;
  --cus-table-gap-tr: #1a1a1a !important;
  --cus-table-header: #171717 !important;
  --dark: #EEEEEE !important;
  --darkgray: #EEEEEE !important;
  --divider-color-hover: hsl(153, 47%, 49%) !important;
  --embed-border-start: 2px solid hsl(153, 47%, 49%) !important;
  --flair-color: #EEEEEE !important;
  --footnote-input-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --graph-node-focused: hsl(150, 47.94%, 56.35%) !important;
  --graph-text: #EEEEEE !important;
  --gray: #EEEEEE !important;
  --h1-size: 2.2em !important;
  --h2-size: 1.75em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1em !important;
  --highlight: hsla(153, 47%, 49%, 0.05) !important;
  --icon-color-active: hsl(150, 47.94%, 56.35%) !important;
  --icon-color-focused: #EEEEEE !important;
  --icon-color-hover: hsl(153, 47%, 49%) !important;
  --inline-title-size: 2.2em !important;
  --interactive-accent: hsl(153, 47%, 49%) !important;
  --interactive-accent-hover: hsl(150, 47.94%, 56.35%) !important;
  --interactive-accent-hsl: 153, 47%, 49% !important;
  --link-color: hsl(150, 47.94%, 56.35%) !important;
  --link-color-hover: hsl(148, 49.35%, 63.21%) !important;
  --link-external-color: hsl(150, 47.94%, 56.35%) !important;
  --link-external-color-hover: hsl(148, 49.35%, 63.21%) !important;
  --link-unresolved-color: hsl(150, 47.94%, 56.35%) !important;
  --link-unresolved-decoration-color: hsla(153, 47%, 49%, 0.3) !important;
  --list-marker-color-collapsed: hsl(150, 47.94%, 56.35%) !important;
  --metadata-input-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --metadata-input-text-color: #EEEEEE !important;
  --metadata-label-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --metadata-property-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --nav-heading-color: #EEEEEE !important;
  --nav-heading-color-hover: #EEEEEE !important;
  --nav-item-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --nav-item-background-hover: hsla(153, 47%, 49%, 0.05) !important;
  --nav-item-background-selected: hsla(153, 47%, 49%, 0.15) !important;
  --nav-item-color-active: hsl(153, 47%, 49%) !important;
  --nav-item-color-highlighted: hsl(150, 47.94%, 56.35%) !important;
  --nav-item-color-hover: hsl(153, 47%, 49%) !important;
  --nav-item-color-selected: #EEEEEE !important;
  --pill-color-hover: #EEEEEE !important;
  --pill-color-remove-hover: hsl(150, 47.94%, 56.35%) !important;
  --secondary: hsl(150, 47.94%, 56.35%) !important;
  --setting-group-heading-color: #EEEEEE !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(153, 47%, 49%) !important;
  --tab-text-color-focused-active-current: #EEEEEE !important;
  --tab-text-color-focused-highlighted: hsl(150, 47.94%, 56.35%) !important;
  --table-drag-handle-background-active: hsl(153, 47%, 49%) !important;
  --table-header-color: #EEEEEE !important;
  --table-row-background-hover: #171717 !important;
  --table-selection: hsla(153, 47%, 49%, 0.1) !important;
  --table-selection-border-color: hsl(153, 47%, 49%) !important;
  --tag-background: hsla(153, 47%, 49%, 0.1) !important;
  --tag-background-hover: hsla(153, 47%, 49%, 0.2) !important;
  --tag-border-color: hsla(153, 47%, 49%, 0.15) !important;
  --tag-border-color-hover: hsla(153, 47%, 49%, 0.15) !important;
  --tag-color: hsl(150, 47.94%, 56.35%) !important;
  --tag-color-hover: hsl(150, 47.94%, 56.35%) !important;
  --tertiary: hsl(148, 49.35%, 63.21%) !important;
  --text-accent: hsl(150, 47.94%, 56.35%) !important;
  --text-accent-hover: hsl(148, 49.35%, 63.21%) !important;
  --text-normal: #EEEEEE !important;
  --text-selection: hsla(153, 47%, 49%, 0.33) !important;
  --textHighlight: hsla(153, 47%, 49%, 0.05) !important;
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

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .canvas-sidebar {
  border-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(66, 184, 131, 0.1);
  color: rgb(90, 197, 144);
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
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body del {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(66, 184, 131);
  border-color: rgb(66, 184, 131);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration-color: rgb(90, 197, 144);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
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
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
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
  color: rgb(238, 238, 238);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(238, 238, 238);
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
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(66, 184, 131, 0.1);
  border-bottom-color: rgba(66, 184, 131, 0.15);
  border-left-color: rgba(66, 184, 131, 0.15);
  border-right-color: rgba(66, 184, 131, 0.15);
  border-top-color: rgba(66, 184, 131, 0.15);
  color: rgb(90, 197, 144);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 153 !important;
  --accent-l: 49% !important;
  --accent-s: 47% !important;
  --background-modifier-active-hover: hsla(153, 47%, 49%, 0.1) !important;
  --background-modifier-hover: hsla(153, 47%, 49%, 0.05) !important;
  --background-modifier-message: hsl(153, 47%, 49%) !important;
  --background-secondary: #ffffff !important;
  --bases-table-cell-background-selected: hsla(153, 47%, 49%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(152, 47.47%, 52.675%) !important;
  --bases-table-header-background-hover: hsla(153, 47%, 49%, 0.05) !important;
  --bases-table-row-background-hover: #f2f2f2 !important;
  --bases-table-summary-background-hover: hsla(153, 47%, 49%, 0.05) !important;
  --blockquote-border-color: hsl(152, 47.47%, 52.675%) !important;
  --caret-color: #34495e !important;
  --checkbox-color: hsl(152, 47.47%, 52.675%) !important;
  --checkbox-color-hover: hsl(150, 47.94%, 56.35%) !important;
  --code-background: #f8f8f8 !important;
  --code-bracket-background: hsla(153, 47%, 49%, 0.05) !important;
  --code-normal: #34495e !important;
  --collapse-icon-color-collapsed: hsl(153, 47%, 49%) !important;
  --color-accent: hsl(153, 47%, 49%) !important;
  --color-accent-1: hsl(152, 47.47%, 52.675%) !important;
  --color-accent-2: hsl(150, 47.94%, 56.35%) !important;
  --color-accent-hsl: 153, 47%, 49% !important;
  --cus-code-block-border: #f4f4f4 !important;
  --cus-highlight-cursor-line: rgba(245, 204, 142, 0.12) !important;
  --cus-inline-code-text: #e96900 !important;
  --cus-table-gap-tr: #fafafa !important;
  --cus-table-header: #f2f2f2 !important;
  --dark: #34495e !important;
  --darkgray: #34495e !important;
  --divider-color-hover: hsl(152, 47.47%, 52.675%) !important;
  --embed-border-start: 2px solid hsl(152, 47.47%, 52.675%) !important;
  --flair-color: #34495e !important;
  --footnote-input-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --graph-node-focused: hsl(153, 47%, 49%) !important;
  --graph-text: #34495e !important;
  --gray: #34495e !important;
  --h1-size: 2.2em !important;
  --h2-size: 1.75em !important;
  --h3-size: 1.4em !important;
  --h4-size: 1.2em !important;
  --h5-size: 1em !important;
  --highlight: hsla(153, 47%, 49%, 0.05) !important;
  --icon-color-active: hsl(153, 47%, 49%) !important;
  --icon-color-focused: #34495e !important;
  --icon-color-hover: hsl(153, 47%, 49%) !important;
  --inline-title-size: 2.2em !important;
  --interactive-accent: hsl(152, 47.47%, 52.675%) !important;
  --interactive-accent-hover: hsl(150, 47.94%, 56.35%) !important;
  --interactive-accent-hsl: 153, 47%, 49% !important;
  --lightgray: #ffffff !important;
  --link-color: hsl(153, 47%, 49%) !important;
  --link-color-hover: hsl(150, 47.94%, 56.35%) !important;
  --link-external-color: hsl(153, 47%, 49%) !important;
  --link-external-color-hover: hsl(150, 47.94%, 56.35%) !important;
  --link-unresolved-color: hsl(153, 47%, 49%) !important;
  --link-unresolved-decoration-color: hsla(153, 47%, 49%, 0.3) !important;
  --list-marker-color-collapsed: hsl(153, 47%, 49%) !important;
  --menu-background: #ffffff !important;
  --metadata-input-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --metadata-input-text-color: #34495e !important;
  --metadata-label-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --metadata-property-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --nav-heading-color: #34495e !important;
  --nav-heading-color-hover: #34495e !important;
  --nav-item-background-active: hsla(153, 47%, 49%, 0.05) !important;
  --nav-item-background-hover: hsla(153, 47%, 49%, 0.05) !important;
  --nav-item-background-selected: hsla(153, 47%, 49%, 0.15) !important;
  --nav-item-color-active: hsl(153, 47%, 49%) !important;
  --nav-item-color-highlighted: hsl(153, 47%, 49%) !important;
  --nav-item-color-hover: hsl(153, 47%, 49%) !important;
  --nav-item-color-selected: #34495e !important;
  --pill-color-hover: #34495e !important;
  --pill-color-remove-hover: hsl(153, 47%, 49%) !important;
  --ribbon-background: #ffffff !important;
  --secondary: hsl(153, 47%, 49%) !important;
  --setting-group-heading-color: #34495e !important;
  --status-bar-background: #ffffff !important;
  --tab-container-background: #ffffff !important;
  --tab-switcher-background: #ffffff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(153, 47%, 49%) !important;
  --tab-text-color-focused-active-current: #34495e !important;
  --tab-text-color-focused-highlighted: hsl(153, 47%, 49%) !important;
  --table-drag-handle-background-active: hsl(152, 47.47%, 52.675%) !important;
  --table-header-color: #34495e !important;
  --table-row-background-hover: #f2f2f2 !important;
  --table-selection: hsla(153, 47%, 49%, 0.1) !important;
  --table-selection-border-color: hsl(152, 47.47%, 52.675%) !important;
  --tag-background: hsla(153, 47%, 49%, 0.1) !important;
  --tag-background-hover: hsla(153, 47%, 49%, 0.2) !important;
  --tag-border-color: hsla(153, 47%, 49%, 0.15) !important;
  --tag-border-color-hover: hsla(153, 47%, 49%, 0.15) !important;
  --tag-color: hsl(153, 47%, 49%) !important;
  --tag-color-hover: hsl(153, 47%, 49%) !important;
  --tertiary: hsl(150, 47.94%, 56.35%) !important;
  --text-accent: hsl(153, 47%, 49%) !important;
  --text-accent-hover: hsl(150, 47.94%, 56.35%) !important;
  --text-normal: #34495e !important;
  --text-selection: hsla(153, 47%, 49%, 0.2) !important;
  --textHighlight: hsla(153, 47%, 49%, 0.05) !important;
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

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(66, 184, 131, 0.1);
  color: rgb(66, 184, 131);
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
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body del {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(77, 192, 138);
  border-color: rgb(77, 192, 138);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration-color: rgb(66, 184, 131);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
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
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
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
  color: rgb(52, 73, 94);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(52, 73, 94);
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
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(66, 184, 131, 0.1);
  border-bottom-color: rgba(66, 184, 131, 0.15);
  border-left-color: rgba(66, 184, 131, 0.15);
  border-right-color: rgba(66, 184, 131, 0.15);
  border-top-color: rgba(66, 184, 131, 0.15);
  color: rgb(66, 184, 131);
}`,
  },
};
