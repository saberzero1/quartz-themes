import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "violet-evening", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #121025 !important;
  --background-modifier-cover: #171532 !important;
  --background-modifier-error: #c80000bf !important;
  --background-modifier-error-hover: #ff0000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: #2a2458 !important;
  --background-modifier-form-field-highlighted: #2d285e !important;
  --background-modifier-form-field-hover: #2a2458 !important;
  --background-modifier-success: #79f269 !important;
  --background-primary: #2b2751 !important;
  --background-primary-alt: #1e1d3d !important;
  --background-secondary: #201e42 !important;
  --background-secondary-alt: #2d2355 !important;
  --bases-cards-background: #2b2751 !important;
  --bases-cards-cover-background: #1e1d3d !important;
  --bases-cards-shadow: 0 0 0 1px #121025 !important;
  --bases-embed-border-color: #121025 !important;
  --bases-group-heading-property-color: #c5b5ff !important;
  --bases-table-border-color: #121025 !important;
  --bases-table-cell-background-active: #2b2751 !important;
  --bases-table-cell-background-disabled: #1e1d3d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ddaa03 !important;
  --bases-table-group-background: #1e1d3d !important;
  --bases-table-header-background: #2b2751 !important;
  --bases-table-header-color: #c5b5ff !important;
  --bases-table-summary-background: #2b2751 !important;
  --blockquote-border-color: #ddaa03 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --canvas-background: #2b2751 !important;
  --canvas-card-label-color: #c5b5ff !important;
  --caret-color: #fff !important;
  --checkbox-border-color: #c5b5ff !important;
  --checkbox-border-color-hover: #c5b5ff !important;
  --checkbox-color: #ddaa03 !important;
  --checkbox-color-hover: #ae3afc !important;
  --checkbox-marker-color: #2b2751 !important;
  --checklist-done-color: #c5b5ff !important;
  --code-background: #1e1d3d !important;
  --code-border-color: #121025 !important;
  --code-comment: #c5b5ff !important;
  --code-normal: #fff !important;
  --code-punctuation: #c5b5ff !important;
  --collapse-icon-color: #c5b5ff !important;
  --collapse-icon-color-collapsed: #bd6af5 !important;
  --dark: #fff !important;
  --darkgray: #fff !important;
  --divider-color: #121025 !important;
  --divider-color-hover: #ddaa03 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #121025, inset 0 0 0 1px #121025 !important;
  --embed-border-start: 2px solid #ddaa03 !important;
  --file-header-background: #2b2751 !important;
  --file-header-background-focused: #2b2751 !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #fff !important;
  --footnote-divider-color: #121025 !important;
  --footnote-id-color: #c5b5ff !important;
  --footnote-id-color-no-occurrences: #c5b5ff !important;
  --graph-node: #c5b5ff !important;
  --graph-node-focused: #bd6af5 !important;
  --graph-node-unresolved: #c5b5ff !important;
  --graph-text: #fff !important;
  --gray: #c5b5ff !important;
  --heading-formatting: #c5b5ff !important;
  --highlight: #662ca5 !important;
  --hr-color: #121025 !important;
  --icon-color: #c5b5ff !important;
  --icon-color-active: #bd6af5 !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #c5b5ff !important;
  --input-date-separator: #c5b5ff !important;
  --input-placeholder-color: #c5b5ff !important;
  --interactive-accent: #ddaa03 !important;
  --interactive-accent-hover: #ae3afc !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: #79f269 !important;
  --light: #2b2751 !important;
  --lightgray: #201e42 !important;
  --link-color: #bd6af5 !important;
  --link-color-hover: #fdc307 !important;
  --link-external-color: #bd6af5 !important;
  --link-external-color-hover: #fdc307 !important;
  --link-unresolved-color: #bd6af5 !important;
  --list-marker-color: #c5b5ff !important;
  --list-marker-color-collapsed: #bd6af5 !important;
  --list-marker-color-hover: #c5b5ff !important;
  --menu-background: #201e42 !important;
  --metadata-border-color: #121025 !important;
  --metadata-divider-color: #121025 !important;
  --metadata-input-text-color: #fff !important;
  --metadata-label-text-color: #c5b5ff !important;
  --metadata-label-text-color-hover: #c5b5ff !important;
  --modal-background: #2b2751 !important;
  --nav-collapse-icon-color: #c5b5ff !important;
  --nav-collapse-icon-color-collapsed: #c5b5ff !important;
  --nav-heading-color: #fff !important;
  --nav-heading-color-collapsed: #c5b5ff !important;
  --nav-heading-color-collapsed-hover: #c5b5ff !important;
  --nav-heading-color-hover: #fff !important;
  --nav-item-color: #c5b5ff !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-highlighted: #bd6af5 !important;
  --nav-item-color-hover: #fff !important;
  --nav-item-color-selected: #fff !important;
  --nav-tag-color: #c5b5ff !important;
  --nav-tag-color-active: #c5b5ff !important;
  --nav-tag-color-hover: #c5b5ff !important;
  --pdf-background: #2b2751 !important;
  --pdf-page-background: #2b2751 !important;
  --pdf-shadow: 0 0 0 1px #121025 !important;
  --pdf-sidebar-background: #2b2751 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #121025 !important;
  --pill-border-color: #121025 !important;
  --pill-color: #c5b5ff !important;
  --pill-color-hover: #fff !important;
  --pill-color-remove: #c5b5ff !important;
  --pill-color-remove-hover: #bd6af5 !important;
  --prompt-background: #2b2751 !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #201e42 !important;
  --ribbon-background-collapsed: #2b2751 !important;
  --search-clear-button-color: #c5b5ff !important;
  --search-icon-color: #c5b5ff !important;
  --search-result-background: #2b2751 !important;
  --secondary: #bd6af5 !important;
  --setting-group-heading-color: #fff !important;
  --setting-items-background: #1e1d3d !important;
  --setting-items-border-color: #121025 !important;
  --slider-track-background: #121025 !important;
  --status-bar-background: #201e42 !important;
  --status-bar-border-color: #121025 !important;
  --status-bar-text-color: #c5b5ff !important;
  --suggestion-background: #2b2751 !important;
  --tab-background-active: #2b2751 !important;
  --tab-container-background: #201e42 !important;
  --tab-outline-color: #121025 !important;
  --tab-switcher-background: #201e42 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #201e42, transparent) !important;
  --tab-text-color: #c5b5ff !important;
  --tab-text-color-active: #c5b5ff !important;
  --tab-text-color-focused: #c5b5ff !important;
  --tab-text-color-focused-active: #c5b5ff !important;
  --tab-text-color-focused-active-current: #fff !important;
  --tab-text-color-focused-highlighted: #bd6af5 !important;
  --table-add-button-border-color: #121025 !important;
  --table-border-color: #121025 !important;
  --table-drag-handle-background-active: #ddaa03 !important;
  --table-drag-handle-color: #c5b5ff !important;
  --table-drag-handle-color-active: #202020 !important;
  --table-header-border-color: #121025 !important;
  --table-header-color: #fff !important;
  --table-selection-border-color: #ddaa03 !important;
  --tag-color: #bd6af5 !important;
  --tag-color-hover: #bd6af5 !important;
  --tertiary: #fdc307 !important;
  --text-accent: #bd6af5 !important;
  --text-accent-hover: #fdc307 !important;
  --text-error: #ff3737bf !important;
  --text-error-hover: #990000 !important;
  --text-faint: #c5b5ff !important;
  --text-highlight-bg: #662ca5 !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #c5b5ff !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #fff !important;
  --text-on-accent: #202020 !important;
  --text-selection: #8f2bd2 !important;
  --textHighlight: #662ca5 !important;
  --titlebar-background: #201e42 !important;
  --titlebar-background-focused: #2d2355 !important;
  --titlebar-border-color: #121025 !important;
  --titlebar-text-color: #c5b5ff !important;
  --titlebar-text-color-focused: #fff !important;
  --vault-profile-color: #fff !important;
  --vault-profile-color-hover: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 30, 66);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(43, 39, 81);
  color: rgb(255, 255, 255);
}

html body .bases-table thead th {
  border-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

html body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html body .canvas-sidebar {
  background-color: rgb(32, 30, 66);
  border-color: rgb(255, 255, 255);
}

html body .note-properties {
  border-color: rgb(18, 16, 37);
}

html body .note-properties-key {
  color: rgb(197, 181, 255);
}

html body .note-properties-row {
  border-color: rgb(197, 181, 255);
}

html body .note-properties-tags {
  color: rgb(189, 106, 245);
}

html body .note-properties-value {
  color: rgb(197, 181, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 30, 66);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(18, 16, 37);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 30, 66);
  border-left-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(43, 39, 81);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(121, 242, 105);
  font-weight: 700;
  outline: rgb(121, 242, 105) none 0px;
  text-decoration-color: rgb(121, 242, 105);
}

html body .page article p > em, html em {
  color: rgb(2, 254, 254);
  outline: rgb(2, 254, 254) none 0px;
  text-decoration-color: rgb(2, 254, 254);
}

html body .page article p > i, html i {
  color: rgb(2, 254, 254);
  outline: rgb(2, 254, 254) none 0px;
  text-decoration-color: rgb(2, 254, 254);
}

html body .page article p > strong, html strong {
  color: rgb(121, 242, 105);
  font-weight: 700;
  outline: rgb(121, 242, 105) none 0px;
  text-decoration-color: rgb(121, 242, 105);
}

html body .text-highlight {
  background-color: rgb(102, 44, 165);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body h1.article-title {
  color: rgb(255, 255, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(197, 181, 255);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(221, 170, 3);
  border-color: rgb(221, 170, 3);
}

html body p {
  color: rgb(197, 181, 255);
  outline: rgb(197, 181, 255) none 0px;
  text-decoration-color: rgb(197, 181, 255);
}`,
    links: `html body a.external, html footer a {
  color: rgb(189, 106, 245);
  outline: rgb(189, 106, 245) none 0px;
  text-decoration-color: rgb(189, 106, 245);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(189, 106, 245);
  outline: rgb(189, 106, 245) none 0px;
  text-decoration-color: rgb(189, 106, 245);
}

html body a.internal.broken {
  color: rgb(189, 106, 245);
  outline: rgb(189, 106, 245) none 0px;
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(197, 181, 255);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
}

html body td {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

html body th {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(250, 156, 42);
  border-left-color: rgb(250, 156, 42);
  border-right-color: rgb(250, 156, 42);
  border-top-color: rgb(250, 156, 42);
  color: rgb(250, 156, 42);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
}

html body pre:has(> code) {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(221, 170, 3);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(254, 197, 9);
  border-left-color: rgb(254, 197, 9);
  border-right-color: rgb(254, 197, 9);
  border-top-color: rgb(254, 197, 9);
  color: rgb(254, 197, 9);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(254, 197, 9);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 254, 197, 9;
  background-color: rgba(254, 197, 9, 0.1);
  border-bottom-color: rgba(254, 197, 9, 0.25);
  border-left-color: rgba(254, 197, 9, 0.25);
  border-right-color: rgba(254, 197, 9, 0.25);
  border-top-color: rgba(254, 197, 9, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  background-color: rgb(42, 36, 88);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(43, 39, 81);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 30, 66);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body a.internal.tag-link::before {
  color: rgb(189, 106, 245);
}

html body h1 {
  color: rgb(255, 255, 255);
}

html body h2 {
  color: rgb(255, 255, 255);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
}

html body h3 {
  color: rgb(255, 255, 255);
}

html body h4 {
  color: rgb(255, 255, 255);
}

html body h5 {
  color: rgb(255, 255, 255);
}

html body h6 {
  color: rgb(2, 254, 254);
}

html body hr {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
}`,
    scrollbars: `html body .callout {
  --callout-color: 254, 197, 9;
  border-bottom-color: rgba(254, 197, 9, 0.25);
  border-left-color: rgba(254, 197, 9, 0.25);
  border-right-color: rgba(254, 197, 9, 0.25);
  border-top-color: rgba(254, 197, 9, 0.25);
}

html body ::-webkit-scrollbar {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}

html body ::-webkit-scrollbar-track {
  background: rgb(43, 39, 81) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 39, 81);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(197, 181, 255);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(197, 181, 255);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}`,
    footer: `html body footer {
  background-color: rgb(32, 30, 66);
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(197, 181, 255);
}

html body footer ul li a {
  color: rgb(197, 181, 255);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(197, 181, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(197, 181, 255);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgb(197, 181, 255);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(197, 181, 255);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

html body .darkmode svg {
  color: rgb(197, 181, 255);
  stroke: rgb(197, 181, 255);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

html body .breadcrumb-element p {
  color: rgb(197, 181, 255);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata {
  border-bottom-color: rgb(18, 16, 37);
  border-left-color: rgb(18, 16, 37);
  border-right-color: rgb(18, 16, 37);
  border-top-color: rgb(18, 16, 37);
  color: rgb(197, 181, 255);
}

html body .metadata-properties {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

html body .navigation-progress {
  background-color: rgb(32, 30, 66);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

html body abbr {
  color: rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(197, 181, 255);
  border-left-color: rgb(197, 181, 255);
  border-right-color: rgb(197, 181, 255);
  border-top-color: rgb(197, 181, 255);
  color: rgb(197, 181, 255);
}

html body kbd {
  background-color: rgb(30, 29, 61);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}

html body ul.tags > li {
  color: rgb(189, 106, 245);
}`,
  },
  light: {},
};
