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
  --background-primary: #000000;
  --background-primary-alt: #000000;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #000000;
  --bases-cards-radius: 20px;
  --bases-embed-border-radius: 20px;
  --bases-group-heading-property-color: #737373;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-container-border-radius: 20px;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #000000;
  --bases-table-header-color: #737373;
  --bases-table-summary-background: #000000;
  --button-radius: 20px;
  --callout-radius: 20px;
  --canvas-background: #000000;
  --canvas-controls-radius: 20px;
  --caret-color: #d4d4d4;
  --checkbox-border-color-hover: #737373;
  --checkbox-marker-color: #000000;
  --checkbox-radius: 20px;
  --checklist-done-color: #737373;
  --clickable-icon-radius: 20px;
  --code-background: #000000;
  --code-normal: #d4d4d4;
  --code-punctuation: #737373;
  --code-radius: 20px;
  --collapse-icon-color-collapsed: rgb(138, 92, 245);
  --color-1: #ff0051;
  --color-2: #00e5ff;
  --color-3: #ff0022;
  --color-4: #00ff04;
  --color-5: #daff01;
  --color-6: #9d00ff;
  --color-bg: #000000;
  --color-bg-alt: #000000;
  --color-bg-code: #262626;
  --color-danger: #ff3b30;
  --color-muted: #737373;
  --color-muted-graph: #262626;
  --color-success: #34c759;
  --color-text: #d4d4d4;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --flair-color: #d4d4d4;
  --footnote-id-color: #737373;
  --footnote-radius: 20px;
  --graph-node: #737373;
  --graph-node-focused: rgb(138, 92, 245);
  --graph-text: #d4d4d4;
  --gray: var(--text-muted);
  --icon-color: #737373;
  --icon-color-active: rgb(138, 92, 245);
  --icon-color-focused: #d4d4d4;
  --icon-color-hover: #737373;
  --input-radius: 20px;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(138, 92, 245);
  --link-external-color: rgb(138, 92, 245);
  --link-unresolved-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: rgb(138, 92, 245);
  --list-marker-color-hover: #737373;
  --menu-background: #000000;
  --menu-radius: 20px;
  --metadata-input-text-color: #d4d4d4;
  --metadata-label-text-color: #737373;
  --metadata-label-text-color-hover: #737373;
  --modal-background: #000000;
  --modal-radius: 20px;
  --nav-heading-color: #d4d4d4;
  --nav-heading-color-collapsed-hover: #737373;
  --nav-heading-color-hover: #d4d4d4;
  --nav-item-color: #737373;
  --nav-item-color-active: #d4d4d4;
  --nav-item-color-highlighted: rgb(138, 92, 245);
  --nav-item-color-hover: #d4d4d4;
  --nav-item-color-selected: #d4d4d4;
  --nav-item-radius: 20px;
  --nav-tag-color-active: #737373;
  --nav-tag-color-hover: #737373;
  --nav-tag-radius: 20px;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color: #737373;
  --pill-color-hover: #d4d4d4;
  --pill-color-remove-hover: rgb(138, 92, 245);
  --prompt-background: #000000;
  --radius-l: 20px;
  --radius-m: 20px;
  --radius-s: 20px;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --scrollbar-active-thumb-bg: rgb(138, 92, 245);
  --scrollbar-bg: rgba(255, 255, 255, 0.03);
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: rgba(255, 255, 255, 0.08);
  --search-clear-button-color: #737373;
  --search-icon-color: #737373;
  --search-result-background: #000000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #d4d4d4;
  --setting-items-background: #000000;
  --setting-items-radius: 20px;
  --slider-thumb-radius: 20px;
  --status-bar-background: #000000;
  --status-bar-radius: 20px 0 0 0;
  --status-bar-text-color: #737373;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #000000;
  --tab-radius: 20px;
  --tab-radius-active: 8px;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color-active: #737373;
  --tab-text-color-focused: #737373;
  --tab-text-color-focused-active: #737373;
  --tab-text-color-focused-active-current: #d4d4d4;
  --tab-text-color-focused-highlighted: rgb(138, 92, 245);
  --table-drag-handle-color-active: #000;
  --table-header-color: #d4d4d4;
  --tag-color: rgb(138, 92, 245);
  --tag-color-hover: rgb(138, 92, 245);
  --tertiary: var(--text-accent);
  --text-accent: rgb(138, 92, 245);
  --text-muted: #737373;
  --text-normal: #d4d4d4;
  --text-on-accent: #000;
  --text-selection: rgba(0, 68, 255, 0.25);
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-text-color: #737373;
  --titlebar-text-color-focused: #d4d4d4;
  --toggle-radius: 20px;
  --toggle-thumb-radius: 20px;
  --vault-profile-color: #d4d4d4;
  --vault-profile-color-hover: #d4d4d4;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(128, 128, 128);
  color: rgb(212, 212, 212);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(212, 212, 212);
}`,
    typography: `body .page article p > b, b {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .page article p > em, em {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .page article p > i, i {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .page article p > strong, strong {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .text-highlight {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body del {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: line-through rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body p {
  color: rgb(115, 115, 115);
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `body a.external, footer a {
  color: rgb(138, 92, 245);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(138, 92, 245);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
  outline: rgb(138, 92, 245) none 0px;
  text-decoration: underline rgb(138, 92, 245);
  text-decoration-color: rgb(138, 92, 245);
}

body a.internal.broken {
  color: rgb(138, 92, 245);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
  outline: rgb(138, 92, 245) none 0px;
}`,
    lists: `body dd {
  color: rgb(212, 212, 212);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(212, 212, 212);
}

body ol > li {
  color: rgb(212, 212, 212);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body ul > li {
  color: rgb(212, 212, 212);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    blockquotes: `body blockquote {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body table {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  width: 194.844px;
}

body td {
  color: rgb(212, 212, 212);
}

body th {
  color: rgb(212, 212, 212);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(212, 212, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body pre:has(> code) {
  background-color: rgb(38, 38, 38);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `body audio {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body figcaption {
  color: rgb(212, 212, 212);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body video {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .transclude {
  border-bottom-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .transclude-inner {
  border-bottom-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: line-through rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

body input[type=checkbox] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='-'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > * {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 212, 212);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(212, 212, 212);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body a.internal.tag-link::before {
  color: rgb(138, 92, 245);
}

body h1 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h2 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h3 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h4 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h5 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h6 {
  color: rgb(212, 212, 212);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(212, 212, 212);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 115, 115);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body li.section-li > .section .meta {
  color: rgb(115, 115, 115);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body ul.section-ul {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `body .breadcrumb-container {
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
    misc: `body .katex-display {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .metadata {
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(212, 212, 212);
}

body abbr {
  color: rgb(212, 212, 212);
  text-decoration: underline dotted rgb(212, 212, 212);
}

body details {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body sub {
  color: rgb(212, 212, 212);
  font-size: 12.5px;
}

body summary {
  color: rgb(212, 212, 212);
}

body sup {
  color: rgb(212, 212, 212);
  font-size: 12.5px;
}`,
  },
  light: {
    base: `:root:root {
  --background-primary-alt: #ffffff;
  --background-secondary: #ffffff;
  --background-secondary-alt: #ffffff;
  --bases-cards-cover-background: #ffffff;
  --bases-cards-radius: 20px;
  --bases-embed-border-radius: 20px;
  --bases-group-heading-property-color: #737373;
  --bases-table-cell-background-disabled: #ffffff;
  --bases-table-container-border-radius: 20px;
  --bases-table-group-background: #ffffff;
  --bases-table-header-color: #737373;
  --button-radius: 20px;
  --callout-radius: 20px;
  --canvas-controls-radius: 20px;
  --caret-color: #404040;
  --checkbox-border-color-hover: #737373;
  --checkbox-radius: 20px;
  --checklist-done-color: #737373;
  --clickable-icon-radius: 20px;
  --code-background: #ffffff;
  --code-normal: #404040;
  --code-punctuation: #737373;
  --code-radius: 20px;
  --color-1: #b30038;
  --color-2: #0088a6;
  --color-3: #cc001b;
  --color-4: #008c0a;
  --color-5: #889c00;
  --color-6: #6b00b3;
  --color-bg: #ffffff;
  --color-bg-alt: #ffffff;
  --color-bg-code: #e5e5e5;
  --color-danger: #ff3b30;
  --color-muted: #737373;
  --color-muted-graph: #e5e5e5;
  --color-success: #28cd41;
  --color-text: #404040;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --flair-color: #404040;
  --footnote-id-color: #737373;
  --footnote-radius: 20px;
  --graph-node: #737373;
  --graph-text: #404040;
  --gray: var(--text-muted);
  --icon-color: #737373;
  --icon-color-focused: #404040;
  --icon-color-hover: #737373;
  --input-radius: 20px;
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --list-marker-color-hover: #737373;
  --menu-background: #ffffff;
  --menu-radius: 20px;
  --metadata-input-text-color: #404040;
  --metadata-label-text-color: #737373;
  --metadata-label-text-color-hover: #737373;
  --modal-radius: 20px;
  --nav-heading-color: #404040;
  --nav-heading-color-collapsed-hover: #737373;
  --nav-heading-color-hover: #404040;
  --nav-item-color: #737373;
  --nav-item-color-active: #404040;
  --nav-item-color-hover: #404040;
  --nav-item-color-selected: #404040;
  --nav-item-radius: 20px;
  --nav-tag-color-active: #737373;
  --nav-tag-color-hover: #737373;
  --nav-tag-radius: 20px;
  --pill-color: #737373;
  --pill-color-hover: #404040;
  --radius-l: 20px;
  --radius-m: 20px;
  --radius-s: 20px;
  --ribbon-background: #ffffff;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.15);
  --scrollbar-bg: rgba(0, 0, 0, 0.03);
  --scrollbar-radius: 20px;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.08);
  --search-clear-button-color: #737373;
  --search-icon-color: #737373;
  --setting-group-heading-color: #404040;
  --setting-items-background: #ffffff;
  --setting-items-radius: 20px;
  --slider-thumb-radius: 20px;
  --status-bar-background: #ffffff;
  --status-bar-radius: 20px 0 0 0;
  --status-bar-text-color: #737373;
  --tab-container-background: #ffffff;
  --tab-radius: 20px;
  --tab-radius-active: 8px;
  --tab-switcher-background: #ffffff;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent);
  --tab-text-color-active: #737373;
  --tab-text-color-focused: #737373;
  --tab-text-color-focused-active: #737373;
  --tab-text-color-focused-active-current: #404040;
  --table-drag-handle-color-active: #fff;
  --table-header-color: #404040;
  --text-muted: #737373;
  --text-normal: #404040;
  --text-on-accent: #fff;
  --text-selection: rgba(0, 68, 255, 0.25);
  --titlebar-background: #ffffff;
  --titlebar-background-focused: #ffffff;
  --titlebar-text-color: #737373;
  --titlebar-text-color-focused: #404040;
  --toggle-radius: 20px;
  --toggle-thumb-radius: 20px;
  --vault-profile-color: #404040;
  --vault-profile-color-hover: #404040;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(64, 64, 64);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(64, 64, 64);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(128, 128, 128);
  color: rgb(64, 64, 64);
}

body div#quartz-root {
  color: rgb(64, 64, 64);
}`,
    typography: `body .page article p > b, b {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .page article p > em, em {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .page article p > i, i {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .page article p > strong, strong {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .text-highlight {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body del {
  color: rgb(64, 64, 64);
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: line-through rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body p {
  color: rgb(115, 115, 115);
  outline: rgb(115, 115, 115) none 0px;
  text-decoration: rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}`,
    links: `body a.external, footer a {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
}

body a.internal.broken {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  font-weight: 500;
}`,
    lists: `body dd {
  color: rgb(64, 64, 64);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(64, 64, 64);
}

body ol > li {
  color: rgb(64, 64, 64);
}

body ol.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body ul > li {
  color: rgb(64, 64, 64);
}

body ul.overflow {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    blockquotes: `body blockquote {
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body table {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  width: 194.844px;
}

body td {
  color: rgb(64, 64, 64);
}

body th {
  color: rgb(64, 64, 64);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  color: rgb(64, 64, 64);
}

body pre > code, pre:has(> code) {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body pre:has(> code) {
  background-color: rgb(229, 229, 229);
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    images: `body audio {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body figcaption {
  color: rgb(64, 64, 64);
  font-size: 15px;
}

body figure {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  margin-bottom: 15px;
  margin-top: 15px;
}

body img {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body video {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    embeds: `body .file-embed {
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

body .footnotes {
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .transclude {
  border-bottom-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .transclude-inner {
  border-bottom-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(115, 115, 115);
  text-decoration: line-through rgb(115, 115, 115);
  text-decoration-color: rgb(115, 115, 115);
}

body input[type=checkbox] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='*'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='-'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='/'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='>'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='?'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='I'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='S'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='b'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='c'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='d'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='f'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='i'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='k'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='l'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='p'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='u'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='w'] {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > * {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
  outline: rgb(64, 64, 64) none 0px;
  text-decoration: rgb(64, 64, 64);
  text-decoration-color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(64, 64, 64);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  color: rgb(64, 64, 64);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 68, 255, 0.25);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(64, 64, 64);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body h1 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h2 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h3 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h4 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h5 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body h6 {
  color: rgb(64, 64, 64);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
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

body footer ul li a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(115, 115, 115);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body li.section-li > .section .meta {
  color: rgb(115, 115, 115);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(115, 115, 115);
  text-decoration: rgb(115, 115, 115);
}

body ul.section-ul {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(115, 115, 115);
  stroke: rgb(115, 115, 115);
}`,
    breadcrumbs: `body .breadcrumb-container {
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
    misc: `body .katex-display {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
  color: rgb(64, 64, 64);
}

body .metadata {
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
  font-family: Inter, "Segoe UI", system-ui, sans-serif;
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(64, 64, 64);
}

body abbr {
  color: rgb(64, 64, 64);
  text-decoration: underline dotted rgb(64, 64, 64);
}

body details {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body input[type=text] {
  border-bottom-color: rgb(115, 115, 115);
  border-left-color: rgb(115, 115, 115);
  border-right-color: rgb(115, 115, 115);
  border-top-color: rgb(115, 115, 115);
  color: rgb(115, 115, 115);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body sub {
  color: rgb(64, 64, 64);
  font-size: 12.5px;
}

body summary {
  color: rgb(64, 64, 64);
}

body sup {
  color: rgb(64, 64, 64);
  font-size: 12.5px;
}`,
  },
};
