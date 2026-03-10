import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tyrone-neon",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-cards-radius: 20px !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: #737373 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #737373 !important;
  --bases-table-summary-background: #000000 !important;
  --button-radius: 20px !important;
  --callout-radius: 20px;
  --canvas-background: #000000 !important;
  --canvas-controls-radius: 20px !important;
  --caret-color: #d4d4d4 !important;
  --checkbox-border-color-hover: #737373 !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 20px !important;
  --checklist-done-color: #737373 !important;
  --clickable-icon-radius: 20px !important;
  --code-background: #000000 !important;
  --code-normal: #d4d4d4 !important;
  --code-punctuation: #737373 !important;
  --code-radius: 20px !important;
  --collapse-icon-color-collapsed: rgb(138, 92, 245) !important;
  --color-1: #ff0051 !important;
  --color-2: #00e5ff !important;
  --color-3: #ff0022 !important;
  --color-4: #00ff04 !important;
  --color-5: #daff01 !important;
  --color-6: #9d00ff !important;
  --color-bg: #000000 !important;
  --color-bg-alt: #000000 !important;
  --color-bg-code: #262626 !important;
  --color-danger: #ff3b30 !important;
  --color-muted: #737373 !important;
  --color-muted-graph: #262626 !important;
  --color-success: #34c759 !important;
  --color-text: #d4d4d4 !important;
  --dark: #d4d4d4 !important;
  --darkgray: #d4d4d4 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-color: #d4d4d4 !important;
  --footnote-id-color: #737373 !important;
  --footnote-radius: 20px !important;
  --graph-node: #737373 !important;
  --graph-node-focused: rgb(138, 92, 245) !important;
  --graph-text: #d4d4d4 !important;
  --gray: #737373 !important;
  --icon-color: #737373 !important;
  --icon-color-active: rgb(138, 92, 245) !important;
  --icon-color-focused: #d4d4d4 !important;
  --icon-color-hover: #737373 !important;
  --input-radius: 20px !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: rgb(138, 92, 245) !important;
  --link-external-color: rgb(138, 92, 245) !important;
  --link-unresolved-color: rgb(138, 92, 245) !important;
  --list-marker-color-collapsed: rgb(138, 92, 245) !important;
  --list-marker-color-hover: #737373 !important;
  --menu-background: #000000 !important;
  --menu-radius: 20px !important;
  --metadata-input-text-color: #d4d4d4 !important;
  --metadata-label-text-color: #737373 !important;
  --metadata-label-text-color-hover: #737373 !important;
  --modal-background: #000000 !important;
  --modal-radius: 20px !important;
  --nav-heading-color: #d4d4d4 !important;
  --nav-heading-color-collapsed-hover: #737373 !important;
  --nav-heading-color-hover: #d4d4d4 !important;
  --nav-item-color: #737373 !important;
  --nav-item-color-active: #d4d4d4 !important;
  --nav-item-color-highlighted: rgb(138, 92, 245) !important;
  --nav-item-color-hover: #d4d4d4 !important;
  --nav-item-color-selected: #d4d4d4 !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color-active: #737373 !important;
  --nav-tag-color-hover: #737373 !important;
  --nav-tag-radius: 20px !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color: #737373 !important;
  --pill-color-hover: #d4d4d4 !important;
  --pill-color-remove-hover: rgb(138, 92, 245) !important;
  --prompt-background: #000000 !important;
  --radius-l: 20px !important;
  --radius-m: 20px !important;
  --radius-s: 20px !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-active-thumb-bg: rgb(138, 92, 245) !important;
  --scrollbar-bg: rgba(255, 255, 255, 0.03) !important;
  --scrollbar-radius: 20px !important;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.08) !important;
  --search-clear-button-color: #737373 !important;
  --search-icon-color: #737373 !important;
  --search-result-background: #000000 !important;
  --secondary: rgb(138, 92, 245) !important;
  --setting-group-heading-color: #d4d4d4 !important;
  --setting-items-background: #000000 !important;
  --setting-items-radius: 20px !important;
  --slider-thumb-radius: 20px !important;
  --status-bar-background: #000000 !important;
  --status-bar-radius: 20px 0 0 0 !important;
  --status-bar-text-color: #737373 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-radius: 20px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color-active: #737373 !important;
  --tab-text-color-focused: #737373 !important;
  --tab-text-color-focused-active: #737373 !important;
  --tab-text-color-focused-active-current: #d4d4d4 !important;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245) !important;
  --table-drag-handle-color-active: #000 !important;
  --table-header-color: #d4d4d4 !important;
  --tag-color: rgb(138, 92, 245) !important;
  --tag-color-hover: rgb(138, 92, 245) !important;
  --tertiary: rgb(138, 92, 245) !important;
  --text-accent: rgb(138, 92, 245) !important;
  --text-muted: #737373 !important;
  --text-normal: #d4d4d4 !important;
  --text-on-accent: #000 !important;
  --text-selection: rgba(0, 68, 255, 0.25) !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-text-color: #737373 !important;
  --titlebar-text-color-focused: #d4d4d4 !important;
  --toggle-radius: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --vault-profile-color: #d4d4d4 !important;
  --vault-profile-color-hover: #d4d4d4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(128, 128, 128);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body del {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: line-through rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body p {
  color: rgb(115, 115, 115);
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(138, 92, 245);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(138, 92, 245);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
  outline: rgb(138, 92, 245) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body dt {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body table {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  width: 194.844px;
}

html[saved-theme="dark"] body td {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body th {
  color: rgb(212, 212, 212);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(38, 38, 38);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(212, 212, 212);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(212, 212, 212);
  font-size: 15px;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: line-through rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(212, 212, 212);
  border-left-width: 0px;
  border-right-color: rgb(212, 212, 212);
  border-right-width: 0px;
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(0, 68, 255, 0.25);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

html[saved-theme="dark"] body h1 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(138, 92, 245);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(115, 115, 115);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-left-width: 0px;
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 115, 115);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(115, 115, 115);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body abbr {
  color: rgb(212, 212, 212);
  text-decoration: underline dotted rgb(212, 212, 212);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(212, 212, 212);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body sub {
  color: rgb(212, 212, 212);
  font-size: 12.5px;
}

html[saved-theme="dark"] body summary {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body sup {
  color: rgb(212, 212, 212);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --background-primary-alt: #ffffff !important;
  --background-secondary: #ffffff !important;
  --background-secondary-alt: #ffffff !important;
  --bases-cards-cover-background: #ffffff !important;
  --bases-cards-radius: 20px !important;
  --bases-embed-border-radius: 20px !important;
  --bases-group-heading-property-color: #737373 !important;
  --bases-table-cell-background-disabled: #ffffff !important;
  --bases-table-container-border-radius: 20px !important;
  --bases-table-group-background: #ffffff !important;
  --bases-table-header-color: #737373 !important;
  --button-radius: 20px !important;
  --callout-radius: 20px;
  --canvas-controls-radius: 20px !important;
  --caret-color: #404040 !important;
  --checkbox-border-color-hover: #737373 !important;
  --checkbox-radius: 20px !important;
  --checklist-done-color: #737373 !important;
  --clickable-icon-radius: 20px !important;
  --code-background: #ffffff !important;
  --code-normal: #404040 !important;
  --code-punctuation: #737373 !important;
  --code-radius: 20px !important;
  --color-1: #b30038 !important;
  --color-2: #0088a6 !important;
  --color-3: #cc001b !important;
  --color-4: #008c0a !important;
  --color-5: #889c00 !important;
  --color-6: #6b00b3 !important;
  --color-bg: #ffffff !important;
  --color-bg-alt: #ffffff !important;
  --color-bg-code: #e5e5e5 !important;
  --color-danger: #ff3b30 !important;
  --color-muted: #737373 !important;
  --color-muted-graph: #e5e5e5 !important;
  --color-success: #28cd41 !important;
  --color-text: #404040 !important;
  --dark: #404040 !important;
  --darkgray: #404040 !important;
  --flair-color: #404040 !important;
  --footnote-id-color: #737373 !important;
  --footnote-radius: 20px !important;
  --graph-node: #737373 !important;
  --graph-text: #404040 !important;
  --gray: #737373 !important;
  --icon-color: #737373 !important;
  --icon-color-focused: #404040 !important;
  --icon-color-hover: #737373 !important;
  --input-radius: 20px !important;
  --light: #ffffff !important;
  --lightgray: #ffffff !important;
  --list-marker-color-hover: #737373 !important;
  --menu-background: #ffffff !important;
  --menu-radius: 20px !important;
  --metadata-input-text-color: #404040 !important;
  --metadata-label-text-color: #737373 !important;
  --metadata-label-text-color-hover: #737373 !important;
  --modal-radius: 20px !important;
  --nav-heading-color: #404040 !important;
  --nav-heading-color-collapsed-hover: #737373 !important;
  --nav-heading-color-hover: #404040 !important;
  --nav-item-color: #737373 !important;
  --nav-item-color-active: #404040 !important;
  --nav-item-color-hover: #404040 !important;
  --nav-item-color-selected: #404040 !important;
  --nav-item-radius: 20px !important;
  --nav-tag-color-active: #737373 !important;
  --nav-tag-color-hover: #737373 !important;
  --nav-tag-radius: 20px !important;
  --pill-color: #737373 !important;
  --pill-color-hover: #404040 !important;
  --radius-l: 20px !important;
  --radius-m: 20px !important;
  --radius-s: 20px !important;
  --ribbon-background: #ffffff !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.03) !important;
  --scrollbar-radius: 20px !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08) !important;
  --search-clear-button-color: #737373 !important;
  --search-icon-color: #737373 !important;
  --setting-group-heading-color: #404040 !important;
  --setting-items-background: #ffffff !important;
  --setting-items-radius: 20px !important;
  --slider-thumb-radius: 20px !important;
  --status-bar-background: #ffffff !important;
  --status-bar-radius: 20px 0 0 0 !important;
  --status-bar-text-color: #737373 !important;
  --tab-container-background: #ffffff !important;
  --tab-radius: 20px !important;
  --tab-radius-active: 8px !important;
  --tab-switcher-background: #ffffff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent) !important;
  --tab-text-color-active: #737373 !important;
  --tab-text-color-focused: #737373 !important;
  --tab-text-color-focused-active: #737373 !important;
  --tab-text-color-focused-active-current: #404040 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-color: #404040 !important;
  --text-muted: #737373 !important;
  --text-normal: #404040 !important;
  --text-on-accent: #fff !important;
  --text-selection: rgba(0, 68, 255, 0.25) !important;
  --titlebar-background: #ffffff !important;
  --titlebar-background-focused: #ffffff !important;
  --titlebar-text-color: #737373 !important;
  --titlebar-text-color-focused: #404040 !important;
  --toggle-radius: 20px !important;
  --toggle-thumb-radius: 20px !important;
  --vault-profile-color: #404040 !important;
  --vault-profile-color-hover: #404040 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(128, 128, 128);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(64, 64, 64);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body del {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: line-through rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body p {
  color: rgb(115, 115, 115);
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body dt {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul > li {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body table {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  width: 194.844px;
}

html[saved-theme="light"] body td {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body th {
  color: rgb(64, 64, 64);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(64, 64, 64);
  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 10px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body figcaption {
  color: rgb(64, 64, 64);
  font-size: 15px;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  margin-bottom: 15px;
  margin-top: 15px;
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: line-through rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-width: 0px;
  border-left-color: rgb(64, 64, 64);
  border-left-width: 0px;
  border-right-color: rgb(64, 64, 64);
  border-right-width: 0px;
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-top-width: 0px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 68, 255, 0.25);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html[saved-theme="light"] body h1 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(138, 92, 245);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(115, 115, 115);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-left-width: 0px;
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-right-radius: 8px;
  border-top-width: 0px;
  color: rgb(115, 115, 115);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 115, 115);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(115, 115, 115);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(115, 115, 115);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(115, 115, 115);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(115, 115, 115);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body .metadata {
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body abbr {
  color: rgb(64, 64, 64);
  text-decoration: underline dotted rgb(64, 64, 64);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(64, 64, 64);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sub {
  color: rgb(64, 64, 64);
  font-size: 12.5px;
}

html[saved-theme="light"] body summary {
  color: rgb(64, 64, 64);
}

html[saved-theme="light"] body sup {
  color: rgb(64, 64, 64);
  font-size: 12.5px;
}`,
  },
};
