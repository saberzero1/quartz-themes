import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "blur", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-code: transparent !important;
  --background-editor: transparent !important;
  --background-modifier-border: rgba(255, 255, 255, 0.05) !important;
  --background-modifier-cover: transparent !important;
  --background-primary: transparent !important;
  --background-primary-alt: transparent !important;
  --background-secondary: transparent !important;
  --background-secondary-alt: transparent !important;
  --bases-cards-background: transparent !important;
  --bases-cards-cover-background: transparent !important;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --bases-embed-border-color: rgba(255, 255, 255, 0.05) !important;
  --bases-group-heading-property-color: #ffffff !important;
  --bases-table-border-color: rgba(255, 255, 255, 0.05) !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: transparent !important;
  --bases-table-header-color: #ffffff !important;
  --bases-table-summary-background: transparent !important;
  --canvas-background: transparent !important;
  --canvas-card-label-color: #ffffff !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #ffffff !important;
  --checkbox-border-color-hover: #ffffff !important;
  --checkbox-marker-color: transparent !important;
  --checklist-done-color: #ffffff !important;
  --code-background: transparent !important;
  --code-border-color: rgba(255, 255, 255, 0.05) !important;
  --code-comment: #ffffff !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #ffffff !important;
  --collapse-icon-color: #ffffff !important;
  --collapse-icon-color-collapsed: #ffffff !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: rgba(255, 255, 255, 0.05) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: transparent !important;
  --flair-color: #ffffff !important;
  --footnote-divider-color: rgba(255, 255, 255, 0.05) !important;
  --footnote-id-color: #ffffff !important;
  --footnote-id-color-no-occurrences: #ffffff !important;
  --graph-node: #ffffff !important;
  --graph-node-focused: #ffffff !important;
  --graph-node-unresolved: #ffffff !important;
  --graph-text: #ffffff !important;
  --gray: #ffffff !important;
  --heading-formatting: #ffffff !important;
  --highlight: rgba(255, 255, 255, 0.15) !important;
  --hr-color: rgba(255, 255, 255, 0.05) !important;
  --icon-color: #ffffff !important;
  --icon-color-active: #ffffff !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #ffffff !important;
  --input-date-separator: #ffffff !important;
  --input-placeholder-color: #ffffff !important;
  --light: transparent !important;
  --lightgray: transparent !important;
  --link-color: #ffffff !important;
  --link-external-color: #ffffff !important;
  --link-unresolved-color: #ffffff !important;
  --list-marker-color: #ffffff !important;
  --list-marker-color-collapsed: #ffffff !important;
  --list-marker-color-hover: #ffffff !important;
  --menu-background: transparent !important;
  --metadata-border-color: rgba(255, 255, 255, 0.05) !important;
  --metadata-divider-color: rgba(255, 255, 255, 0.05) !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-text-color: #ffffff !important;
  --metadata-label-text-color-hover: #ffffff !important;
  --modal-background: transparent !important;
  --nav-collapse-icon-color: #ffffff !important;
  --nav-collapse-icon-color-collapsed: #ffffff !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #ffffff !important;
  --nav-heading-color-collapsed-hover: #ffffff !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #ffffff !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #ffffff !important;
  --nav-tag-color-active: #ffffff !important;
  --nav-tag-color-hover: #ffffff !important;
  --pdf-background: transparent !important;
  --pdf-page-background: transparent !important;
  --pdf-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --pdf-sidebar-background: transparent !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --pill-border-color: rgba(255, 255, 255, 0.05) !important;
  --pill-color: #ffffff !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #ffffff !important;
  --pill-color-remove-hover: #ffffff !important;
  --prompt-background: transparent !important;
  --prompt-input-height: 2.4em !important;
  --prompt-max-height: 600px !important;
  --prompt-max-width: 720px !important;
  --prompt-width: 100% !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --search-clear-button-color: #ffffff !important;
  --search-icon-color: #ffffff !important;
  --search-result-background: transparent !important;
  --secondary: #ffffff !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: rgba(255, 255, 255, 0.05) !important;
  --slider-track-background: rgba(255, 255, 255, 0.05) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.05) !important;
  --status-bar-text-color: #ffffff !important;
  --suggestion-background: transparent !important;
  --tab-background-active: transparent !important;
  --tab-container-background: transparent !important;
  --tab-outline-color: rgba(255, 255, 255, 0.05) !important;
  --tab-switcher-background: transparent !important;
  --tab-switcher-menubar-background: linear-gradient(to top, transparent, transparent) !important;
  --tab-text-color: #ffffff !important;
  --tab-text-color-active: #ffffff !important;
  --tab-text-color-focused: #ffffff !important;
  --tab-text-color-focused-active: #ffffff !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #ffffff !important;
  --table-add-button-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-drag-handle-color: #ffffff !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-header-color: #ffffff !important;
  --tag-color: #ffffff !important;
  --tag-color-hover: #ffffff !important;
  --tertiary: #ffffff !important;
  --text-accent: #ffffff !important;
  --text-faint: #ffffff !important;
  --text-highlight-bg: rgba(255, 255, 255, 0.15) !important;
  --text-muted: #ffffff !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #ffffff !important;
  --textHighlight: rgba(255, 255, 255, 0.15) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgba(255, 255, 255, 0.05) !important;
  --titlebar-text-color: #ffffff !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
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
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgba(176, 176, 176, 0.3);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 255, 255, 0.15);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
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
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(255, 255, 255);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgba(176, 176, 176, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(176, 176, 176, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(176, 176, 176, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(176, 176, 176, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  margin-top: 18.24px;
  width: 664px;
}

html[saved-theme="dark"] body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.016);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgba(176, 176, 176, 0.2);
  border-left-color: rgba(176, 176, 176, 0.2);
  border-right-color: rgba(176, 176, 176, 0.2);
  border-top-color: rgba(176, 176, 176, 0.2);
  color: rgb(255, 255, 255);
  padding-bottom: 8.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8.8px;
  text-align: left;
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 9.6px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 9.6px;
  text-align: center;
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgba(176, 176, 176, 0.3);
  border-left-color: rgba(176, 176, 176, 0.3);
  border-right-color: rgba(176, 176, 176, 0.3);
  border-top-color: rgba(176, 176, 176, 0.3);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgba(176, 176, 176, 0.3);
  border-left-color: rgba(176, 176, 176, 0.3);
  border-right-color: rgba(176, 176, 176, 0.3);
  border-top-color: rgba(176, 176, 176, 0.3);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 255, 255);
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
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  backdrop-filter: blur(50px);
  color: rgb(255, 255, 255);
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-color: rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(255, 255, 255, 0.12);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.12);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.12);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 6px 18px 0px, rgba(255, 255, 255, 0.02) 0px 1px 0px 0px inset;
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
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

html[saved-theme="dark"] body input[type=text] {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-color: rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.12);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.12);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.12);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="dark"] body kbd {
  background-color: rgba(0, 0, 0, 0);
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
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 255, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-code: transparent !important;
  --background-editor: transparent !important;
  --background-modifier-border: rgba(255, 255, 255, 0.05) !important;
  --background-modifier-cover: transparent !important;
  --background-primary: transparent !important;
  --background-primary-alt: transparent !important;
  --background-secondary: transparent !important;
  --background-secondary-alt: transparent !important;
  --bases-cards-background: transparent !important;
  --bases-cards-cover-background: transparent !important;
  --bases-cards-shadow: 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --bases-embed-border-color: rgba(255, 255, 255, 0.05) !important;
  --bases-group-heading-property-color: #ffffff !important;
  --bases-table-border-color: rgba(255, 255, 255, 0.05) !important;
  --bases-table-cell-background-active: transparent !important;
  --bases-table-cell-background-disabled: transparent !important;
  --bases-table-group-background: transparent !important;
  --bases-table-header-background: transparent !important;
  --bases-table-header-color: #ffffff !important;
  --bases-table-summary-background: transparent !important;
  --blur-background: color-mix(in srgb, transparent 65%, transparent) linear-gradient(transparent, color-mix(in srgb, transparent 65%, transparent)) !important;
  --canvas-background: transparent !important;
  --canvas-card-label-color: #ffffff !important;
  --caret-color: #ffffff !important;
  --checkbox-border-color: #ffffff !important;
  --checkbox-border-color-hover: #ffffff !important;
  --checkbox-marker-color: transparent !important;
  --checklist-done-color: #ffffff !important;
  --code-background: transparent !important;
  --code-border-color: rgba(255, 255, 255, 0.05) !important;
  --code-comment: #ffffff !important;
  --code-normal: #ffffff !important;
  --code-punctuation: #ffffff !important;
  --collapse-icon-color: #ffffff !important;
  --collapse-icon-color-collapsed: #ffffff !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --divider-color: rgba(255, 255, 255, 0.05) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(255, 255, 255, 0.05), inset 0 0 0 1px rgba(255, 255, 255, 0.05) !important;
  --file-header-background: transparent !important;
  --file-header-background-focused: transparent !important;
  --flair-color: #ffffff !important;
  --footnote-divider-color: rgba(255, 255, 255, 0.05) !important;
  --footnote-id-color: #ffffff !important;
  --footnote-id-color-no-occurrences: #ffffff !important;
  --graph-node: #ffffff !important;
  --graph-node-focused: #ffffff !important;
  --graph-node-unresolved: #ffffff !important;
  --graph-text: #ffffff !important;
  --gray: #ffffff !important;
  --heading-formatting: #ffffff !important;
  --highlight: rgba(255, 255, 255, 0.15) !important;
  --hr-color: rgba(255, 255, 255, 0.05) !important;
  --icon-color: #ffffff !important;
  --icon-color-active: #ffffff !important;
  --icon-color-focused: #ffffff !important;
  --icon-color-hover: #ffffff !important;
  --input-date-separator: #ffffff !important;
  --input-placeholder-color: #ffffff !important;
  --light: transparent !important;
  --lightgray: transparent !important;
  --link-color: #ffffff !important;
  --link-external-color: #ffffff !important;
  --link-unresolved-color: #ffffff !important;
  --list-marker-color: #ffffff !important;
  --list-marker-color-collapsed: #ffffff !important;
  --list-marker-color-hover: #ffffff !important;
  --menu-background: transparent !important;
  --metadata-border-color: rgba(255, 255, 255, 0.05) !important;
  --metadata-divider-color: rgba(255, 255, 255, 0.05) !important;
  --metadata-input-text-color: #ffffff !important;
  --metadata-label-text-color: #ffffff !important;
  --metadata-label-text-color-hover: #ffffff !important;
  --modal-background: transparent !important;
  --nav-collapse-icon-color: #ffffff !important;
  --nav-collapse-icon-color-collapsed: #ffffff !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-collapsed: #ffffff !important;
  --nav-heading-color-collapsed-hover: #ffffff !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color: #ffffff !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-highlighted: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --nav-tag-color: #ffffff !important;
  --nav-tag-color-active: #ffffff !important;
  --nav-tag-color-hover: #ffffff !important;
  --pdf-background: transparent !important;
  --pdf-page-background: transparent !important;
  --pdf-sidebar-background: transparent !important;
  --pill-border-color: rgba(255, 255, 255, 0.05) !important;
  --pill-color: #ffffff !important;
  --pill-color-hover: #ffffff !important;
  --pill-color-remove: #ffffff !important;
  --pill-color-remove-hover: #ffffff !important;
  --prompt-background: transparent !important;
  --prompt-input-height: 2.4em !important;
  --prompt-max-height: 600px !important;
  --prompt-max-width: 720px !important;
  --prompt-width: 100% !important;
  --raised-background: color-mix(in srgb, transparent 65%, transparent) linear-gradient(transparent, color-mix(in srgb, transparent 65%, transparent)) !important;
  --ribbon-background: transparent !important;
  --ribbon-background-collapsed: transparent !important;
  --search-clear-button-color: #ffffff !important;
  --search-icon-color: #ffffff !important;
  --search-result-background: transparent !important;
  --secondary: #ffffff !important;
  --setting-group-heading-color: #ffffff !important;
  --setting-items-background: transparent !important;
  --setting-items-border-color: rgba(255, 255, 255, 0.05) !important;
  --slider-track-background: rgba(255, 255, 255, 0.05) !important;
  --status-bar-background: transparent !important;
  --status-bar-border-color: rgba(255, 255, 255, 0.05) !important;
  --status-bar-text-color: #ffffff !important;
  --suggestion-background: transparent !important;
  --tab-background-active: transparent !important;
  --tab-container-background: transparent !important;
  --tab-outline-color: rgba(255, 255, 255, 0.05) !important;
  --tab-switcher-background: transparent !important;
  --tab-switcher-menubar-background: linear-gradient(to top, transparent, transparent) !important;
  --tab-text-color: #ffffff !important;
  --tab-text-color-active: #ffffff !important;
  --tab-text-color-focused: #ffffff !important;
  --tab-text-color-focused-active: #ffffff !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --tab-text-color-focused-highlighted: #ffffff !important;
  --table-add-button-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-drag-handle-color: #ffffff !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: rgba(255, 255, 255, 0.05) !important;
  --table-header-color: #ffffff !important;
  --tag-color: #ffffff !important;
  --tag-color-hover: #ffffff !important;
  --tertiary: #ffffff !important;
  --text-accent: #ffffff !important;
  --text-faint: #ffffff !important;
  --text-highlight-bg: rgba(255, 255, 255, 0.15) !important;
  --text-muted: #ffffff !important;
  --text-normal: #ffffff !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #ffffff !important;
  --textHighlight: rgba(255, 255, 255, 0.15) !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: rgba(255, 255, 255, 0.05) !important;
  --titlebar-text-color: #ffffff !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgba(176, 176, 176, 0.3);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgba(0, 0, 0, 0.1);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(255, 255, 255, 0.15);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body p {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body dt {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ol > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul > li {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(255, 255, 255);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgba(0, 0, 0, 0.1);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgba(176, 176, 176, 0.3);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(176, 176, 176, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(176, 176, 176, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(176, 176, 176, 0.3);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  margin-top: 18.24px;
  width: 664px;
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.016);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgba(176, 176, 176, 0.2);
  border-left-color: rgba(176, 176, 176, 0.2);
  border-right-color: rgba(176, 176, 176, 0.2);
  border-top-color: rgba(176, 176, 176, 0.2);
  color: rgb(255, 255, 255);
  padding-bottom: 8.8px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 8.8px;
  text-align: left;
}

html[saved-theme="light"] body th {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
  font-weight: 700;
  padding-bottom: 9.6px;
  padding-left: 12.8px;
  padding-right: 12.8px;
  padding-top: 9.6px;
  text-align: center;
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgba(176, 176, 176, 0.3);
  border-left-color: rgba(176, 176, 176, 0.3);
  border-right-color: rgba(176, 176, 176, 0.3);
  border-top-color: rgba(176, 176, 176, 0.3);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgba(176, 176, 176, 0.3);
  border-left-color: rgba(176, 176, 176, 0.3);
  border-right-color: rgba(176, 176, 176, 0.3);
  border-top-color: rgba(176, 176, 176, 0.3);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figcaption {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
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
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  backdrop-filter: blur(50px);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 18px;
  border-bottom-right-radius: 18px;
  border-top-left-radius: 18px;
  border-top-right-radius: 18px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-color: rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgba(255, 255, 255, 0.12);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.12);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.12);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-style: solid;
  border-top-width: 1px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 6px 18px 0px, rgba(255, 255, 255, 0.02) 0px 1px 0px 0px inset;
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h2 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h5 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h6 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0) none repeat fixed 50% 50% / cover padding-box border-box;
  background-color: rgba(0, 0, 0, 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(255, 255, 255);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgba(255, 255, 255, 0.05);
  border-left-color: rgba(255, 255, 255, 0.05);
  border-right-color: rgba(255, 255, 255, 0.05);
  border-top-color: rgba(255, 255, 255, 0.05);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body abbr {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgba(255, 255, 255, 0.04);
  border-bottom-color: rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 255, 255, 0.12);
  border-left-width: 1px;
  border-right-color: rgba(255, 255, 255, 0.12);
  border-right-width: 1px;
  border-top-color: rgba(255, 255, 255, 0.12);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  border-top-width: 1px;
  color: rgb(255, 255, 255);
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

html[saved-theme="light"] body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body sub {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body summary {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body sup {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(255, 255, 255);
}`,
  },
};
