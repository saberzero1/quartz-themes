import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hulk", modes: ["dark"], variations: [], fonts: ["monaco"] },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgba(146, 161, 161, 0.5) !important;
  --background-modifier-cover: #7f5fd4 !important;
  --background-primary: #1A1B24 !important;
  --background-primary-alt: #282A36 !important;
  --background-secondary: #1A1B24 !important;
  --background-secondary-alt: #282A36 !important;
  --bases-cards-background: #1A1B24 !important;
  --bases-cards-cover-background: #282A36 !important;
  --bases-cards-shadow: 0 0 0 1px rgba(146, 161, 161, 0.5) !important;
  --bases-embed-border-color: rgba(146, 161, 161, 0.5) !important;
  --bases-table-border-color: rgba(146, 161, 161, 0.5) !important;
  --bases-table-cell-background-active: #1A1B24 !important;
  --bases-table-cell-background-disabled: #282A36 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00ba00 !important;
  --bases-table-group-background: #282A36 !important;
  --bases-table-header-background: #1A1B24 !important;
  --bases-table-summary-background: #1A1B24 !important;
  --blockquote-border-color: #00ba00 !important;
  --canvas-background: #1A1B24 !important;
  --canvas-card-label-color: rgba(187, 192, 197, 0.4) !important;
  --caret-color: #bbc0c5 !important;
  --checkbox-border-color: rgba(187, 192, 197, 0.4) !important;
  --checkbox-color: #00ba00 !important;
  --checkbox-marker-color: #1A1B24 !important;
  --code-background: #282A36 !important;
  --code-border-color: rgba(146, 161, 161, 0.5) !important;
  --code-comment: rgba(187, 192, 197, 0.4) !important;
  --code-normal: #bbc0c5 !important;
  --collapse-icon-color: rgba(187, 192, 197, 0.4) !important;
  --collapse-icon-color-collapsed: rgb(0, 186, 0) !important;
  --dark: #bbc0c5 !important;
  --darkgray: #bbc0c5 !important;
  --divider-color: rgba(146, 161, 161, 0.5) !important;
  --divider-color-hover: #00ba00 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgba(146, 161, 161, 0.5), inset 0 0 0 1px rgba(146, 161, 161, 0.5) !important;
  --embed-border-start: 2px solid #00ba00 !important;
  --file-header-background: #1A1B24 !important;
  --file-header-background-focused: #1A1B24 !important;
  --flair-color: #bbc0c5 !important;
  --font-family-editor: inter !important;
  --font-family-preview: inter !important;
  --footnote-divider-color: rgba(146, 161, 161, 0.5) !important;
  --footnote-id-color-no-occurrences: rgba(187, 192, 197, 0.4) !important;
  --graph-node-focused: rgb(0, 186, 0) !important;
  --graph-node-unresolved: rgba(187, 192, 197, 0.4) !important;
  --graph-text: #bbc0c5 !important;
  --gray: rgba(187, 192, 197, 0.4) !important;
  --green: #0a5519 !important;
  --green-light: #0a8c28 !important;
  --green-pale: #A4E7C3 !important;
  --heading-formatting: rgba(187, 192, 197, 0.4) !important;
  --highlight: #7f5fd4 !important;
  --hr-color: rgba(146, 161, 161, 0.5) !important;
  --icon-color-active: rgb(0, 186, 0) !important;
  --icon-color-focused: #bbc0c5 !important;
  --input-date-separator: rgba(187, 192, 197, 0.4) !important;
  --input-placeholder-color: rgba(187, 192, 197, 0.4) !important;
  --interactive-accent: #00ba00 !important;
  --interactive-accent-rgb: #0a8c28 !important;
  --interactive-before: #2ac7c7 !important;
  --light: #1A1B24 !important;
  --lightgray: #1A1B24 !important;
  --link-color: rgb(0, 186, 0) !important;
  --link-external-color: rgb(0, 186, 0) !important;
  --link-unresolved-color: rgb(0, 186, 0) !important;
  --list-marker-color: rgba(187, 192, 197, 0.4) !important;
  --list-marker-color-collapsed: rgb(0, 186, 0) !important;
  --menu-background: #1A1B24 !important;
  --metadata-border-color: rgba(146, 161, 161, 0.5) !important;
  --metadata-divider-color: rgba(146, 161, 161, 0.5) !important;
  --metadata-input-text-color: #bbc0c5 !important;
  --modal-background: #1A1B24 !important;
  --nav-collapse-icon-color: rgba(187, 192, 197, 0.4) !important;
  --nav-collapse-icon-color-collapsed: rgba(187, 192, 197, 0.4) !important;
  --nav-heading-color: #bbc0c5 !important;
  --nav-heading-color-collapsed: rgba(187, 192, 197, 0.4) !important;
  --nav-heading-color-hover: #bbc0c5 !important;
  --nav-item-color-active: #bbc0c5 !important;
  --nav-item-color-highlighted: rgb(0, 186, 0) !important;
  --nav-item-color-hover: #bbc0c5 !important;
  --nav-item-color-selected: #bbc0c5 !important;
  --nav-tag-color: rgba(187, 192, 197, 0.4) !important;
  --pdf-background: #1A1B24 !important;
  --pdf-page-background: #1A1B24 !important;
  --pdf-shadow: 0 0 0 1px rgba(146, 161, 161, 0.5) !important;
  --pdf-sidebar-background: #1A1B24 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(146, 161, 161, 0.5) !important;
  --pill-border-color: rgba(146, 161, 161, 0.5) !important;
  --pill-color-hover: #bbc0c5 !important;
  --pill-color-remove: rgba(187, 192, 197, 0.4) !important;
  --pill-color-remove-hover: rgb(0, 186, 0) !important;
  --pink: rgba(237, 160, 255, 0.73) !important;
  --pre-code: #283136 !important;
  --prompt-background: #1A1B24 !important;
  --purple: #3c0a96 !important;
  --purple-light: #4632c8 !important;
  --purple-pale: #ac91f7 !important;
  --purple-paley: #7f5fd4 !important;
  --ribbon-background: #1A1B24 !important;
  --ribbon-background-collapsed: #1A1B24 !important;
  --search-result-background: #1A1B24 !important;
  --secondary: rgb(0, 186, 0) !important;
  --setting-group-heading-color: #bbc0c5 !important;
  --setting-items-background: #282A36 !important;
  --setting-items-border-color: rgba(146, 161, 161, 0.5) !important;
  --slider-track-background: rgba(146, 161, 161, 0.5) !important;
  --status-bar-background: #1A1B24 !important;
  --status-bar-border-color: rgba(146, 161, 161, 0.5) !important;
  --suggestion-background: #1A1B24 !important;
  --tab-background-active: #1A1B24 !important;
  --tab-container-background: #1A1B24 !important;
  --tab-outline-color: rgba(146, 161, 161, 0.5) !important;
  --tab-switcher-background: #1A1B24 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1A1B24, transparent) !important;
  --tab-text-color: rgba(187, 192, 197, 0.4) !important;
  --tab-text-color-focused-active-current: #bbc0c5 !important;
  --tab-text-color-focused-highlighted: rgb(0, 186, 0) !important;
  --table-add-button-border-color: rgba(146, 161, 161, 0.5) !important;
  --table-border-color: rgba(146, 161, 161, 0.5) !important;
  --table-drag-handle-background-active: #00ba00 !important;
  --table-drag-handle-color: rgba(187, 192, 197, 0.4) !important;
  --table-header-border-color: rgba(146, 161, 161, 0.5) !important;
  --table-header-color: #bbc0c5 !important;
  --table-selection-border-color: #00ba00 !important;
  --tag-color: rgb(0, 186, 0) !important;
  --tag-color-hover: rgb(0, 186, 0) !important;
  --tertiary: rgb(0, 186, 0) !important;
  --text-a: #3fce4a !important;
  --text-a-hover: rgba(63, 206, 74, 0.6) !important;
  --text-accent: rgb(0, 186, 0) !important;
  --text-faint: rgba(187, 192, 197, 0.4) !important;
  --text-highlight-bg: #7f5fd4 !important;
  --text-link: #3fce4a !important;
  --text-mark: #7f5fd4 !important;
  --text-normal: #bbc0c5 !important;
  --text-selection: #ceef83 !important;
  --text-title-h1: #bbc0c5 !important;
  --text-title-h2: #bbc0c5 !important;
  --text-title-h3: #bbc0c5 !important;
  --text-title-h4: #bbc0c5 !important;
  --text-title-h5: #bbc0c5 !important;
  --text-title-h6: #ac91f7 !important;
  --textHighlight: #7f5fd4 !important;
  --titlebar-background: #1A1B24 !important;
  --titlebar-background-focused: #282A36 !important;
  --titlebar-border-color: rgba(146, 161, 161, 0.5) !important;
  --titlebar-text-color-focused: #bbc0c5 !important;
  --vault-profile-color: #bbc0c5 !important;
  --vault-profile-color-hover: #bbc0c5 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}

html body .bases-table thead th {
  background-color: rgb(10, 85, 25);
  border-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(187, 192, 197);
}

html body .canvas-node-content {
  color: rgb(187, 192, 197);
}

html body .canvas-node-file {
  color: rgb(187, 192, 197);
}

html body .canvas-node-group {
  border-color: rgb(187, 192, 197);
}

html body .canvas-sidebar {
  background-color: rgb(26, 27, 36);
  border-color: rgb(187, 192, 197);
}

html body .note-properties {
  border-color: rgba(146, 161, 161, 0.5);
}

html body .note-properties-tags {
  color: rgb(0, 186, 0);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.5);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 36);
  border-left-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
}

html body div#quartz-root {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(172, 145, 247);
  font-family: inter;
  outline: rgb(172, 145, 247) none 0px;
  text-decoration-color: rgb(172, 145, 247);
}

html body .page article p > em, html em {
  color: rgb(187, 192, 197);
  font-family: inter;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body .page article p > i, html i {
  color: rgb(187, 192, 197);
  font-family: inter;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body .page article p > strong, html strong {
  color: rgb(172, 145, 247);
  font-family: inter;
  outline: rgb(172, 145, 247) none 0px;
  text-decoration-color: rgb(172, 145, 247);
}

html body .text-highlight {
  background-color: rgb(127, 95, 212);
  color: rgb(187, 192, 197);
  font-family: inter;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body del {
  color: rgb(187, 192, 197);
  font-family: inter;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body h1.article-title {
  color: rgb(187, 192, 197);
  font-size: 14px;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgba(187, 192, 197, 0.4);
  border-radius: 50%;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(197, 182, 252);
  border-color: rgb(197, 182, 252);
}

html body p {
  font-family: inter;
}`,
    links: `html body a.external, html footer a {
  color: rgb(179, 179, 179);
  font-family: inter;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration-color: rgb(179, 179, 179);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 186, 0);
  font-family: inter;
  outline: rgb(0, 186, 0) none 0px;
  text-decoration-color: rgb(0, 186, 0);
}

html body a.internal.broken {
  color: rgb(0, 186, 0);
  font-family: inter;
  outline: rgb(0, 186, 0) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(187, 192, 197);
}

html body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

html body dt {
  color: rgb(187, 192, 197);
}

html body ol > li {
  color: rgb(187, 192, 197);
}

html body ol.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body ul > li {
  color: rgb(187, 192, 197);
}

html body ul.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(187, 192, 197, 0.4);
}

html body blockquote {
  background-color: rgb(26, 27, 36);
  font-family: inter;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body table {
  color: rgb(187, 192, 197);
  font-family: inter;
  width: 179.109px;
}

html body td {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
}

html body th {
  background-color: rgb(10, 85, 25);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  border-bottom-color: rgba(146, 161, 161, 0.5);
}`,
    code: `html body code {
  background-color: rgb(40, 49, 54);
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(189, 147, 249);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-family: Monaco;
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body figcaption {
  color: rgb(187, 192, 197);
  font-size: 14px;
}

html body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  margin-bottom: 14px;
  margin-top: 14px;
}

html body img {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body video {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(40, 42, 54);
}

html body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(0, 186, 0);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgba(187, 192, 197, 0.4);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgba(187, 192, 197, 0.4);
  border-right-color: rgba(187, 192, 197, 0.4);
  border-top-color: rgba(187, 192, 197, 0.4);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 6px;
  width: 15px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 36);
}

html body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  font-family: inter;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration-color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(25, 115, 0);
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 27, 36);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(25, 115, 0);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(25, 115, 0);
  color: rgb(187, 192, 197);
}

html body a.internal.tag-link::before {
  color: rgb(0, 186, 0);
}

html body h1 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body h2 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body h3 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body h4 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body h5 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body h6 {
  color: rgb(172, 145, 247);
  font-family: inter;
}

html body hr {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

html body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: inter;
  font-weight: 700;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: inter;
  font-weight: 700;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(187, 192, 197);
}

html body li.depth-0 {
  font-weight: 700;
}`,
    footer: `html body footer {
  background-color: rgb(26, 27, 36);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  font-family: inter;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: inter;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body li.section-li > .section .meta {
  font-family: inter;
}

html body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgba(187, 192, 197, 0.4);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  font-family: inter;
}

html body .metadata-properties {
  font-family: inter;
}

html body .navigation-progress {
  background-color: rgb(26, 27, 36);
}

html body .page-header h2.page-title {
  color: rgb(187, 192, 197);
}

html body abbr {
  color: rgb(187, 192, 197);
}

html body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body sub {
  color: rgb(187, 192, 197);
  font-size: 14px;
}

html body summary {
  color: rgb(187, 192, 197);
}

html body sup {
  color: rgb(187, 192, 197);
  font-size: 14px;
}

html body ul.tags > li {
  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top-left-radius: 28px;
  border-top-right-radius: 28px;
  color: rgb(97, 109, 109);
}`,
  },
  light: {},
};
