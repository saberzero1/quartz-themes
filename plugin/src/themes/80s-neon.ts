import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "80s-neon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-1: #FF00FF !important;
  --accent-1-muted: #ff79c6 !important;
  --accent-2: #00FFFF !important;
  --accent-2-muted: #8be9fd !important;
  --accent-3: #00FF00 !important;
  --accent-3-muted: #50fa7b !important;
  --accent-4: #FFFF00 !important;
  --accent-4-muted: #ffb86c !important;
  --accent-5: #FF0000 !important;
  --accent-5-muted: #ff5555 !important;
  --accent-6: #0000FF !important;
  --accent-6-muted: #bd93f9 !important;
  --background-accent: #000 !important;
  --background-modifier-border: #00FFFF !important;
  --background-primary: #2b213a !important;
  --background-primary-alt: #171520 !important;
  --background-secondary: #1a1836 !important;
  --background-secondary-alt: #242043 !important;
  --bases-cards-background: #2b213a !important;
  --bases-cards-cover-background: #171520 !important;
  --bases-cards-shadow: 0 0 0 1px #00FFFF !important;
  --bases-embed-border-color: #00FFFF !important;
  --bases-group-heading-property-color: #ff79c6 !important;
  --bases-table-border-color: #00FFFF !important;
  --bases-table-cell-background-active: #2b213a !important;
  --bases-table-cell-background-disabled: #171520 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00FFFF !important;
  --bases-table-group-background: #171520 !important;
  --bases-table-header-background: #2b213a !important;
  --bases-table-header-color: #ff79c6 !important;
  --bases-table-summary-background: #2b213a !important;
  --blockquote-border-color: #00FFFF !important;
  --blur-background: color-mix(in srgb, #00FFFF 65%, transparent) linear-gradient(#00FFFF, color-mix(in srgb, #00FFFF 65%, transparent)) !important;
  --canvas-background: #2b213a !important;
  --canvas-card-label-color: #bd93f9 !important;
  --caret-color: #FF00FF !important;
  --checkbox-border-color: #bd93f9 !important;
  --checkbox-border-color-hover: #ff79c6 !important;
  --checkbox-color: #00FFFF !important;
  --checkbox-color-hover: #8be9fd !important;
  --checkbox-marker-color: #2b213a !important;
  --checklist-done-color: #ff79c6 !important;
  --code-background: #171520 !important;
  --code-border-color: #00FFFF !important;
  --code-comment: #bd93f9 !important;
  --code-normal: #FF00FF !important;
  --code-punctuation: #ff79c6 !important;
  --collapse-icon-color: #bd93f9 !important;
  --collapse-icon-color-collapsed: #FF1690 !important;
  --dark: #FF00FF !important;
  --darkgray: #FF00FF !important;
  --divider-color: #00FFFF !important;
  --divider-color-hover: #00FFFF !important;
  --dropdown-background: #00FFFF !important;
  --dropdown-background-hover: #8be9fd !important;
  --embed-block-shadow-hover: 0 0 0 1px #00FFFF, inset 0 0 0 1px #00FFFF !important;
  --embed-border-start: 2px solid #00FFFF !important;
  --file-header-background: #2b213a !important;
  --file-header-background-focused: #2b213a !important;
  --flair-background: #00FFFF !important;
  --flair-color: #FF00FF !important;
  --footnote-divider-color: #00FFFF !important;
  --footnote-id-color: #ff79c6 !important;
  --footnote-id-color-no-occurrences: #bd93f9 !important;
  --graph-node: #ff79c6 !important;
  --graph-node-focused: #FF1690 !important;
  --graph-node-unresolved: #bd93f9 !important;
  --graph-text: #FF00FF !important;
  --gray: #ff79c6 !important;
  --heading-formatting: #bd93f9 !important;
  --highlight: #ffd319 !important;
  --hr-color: #00FFFF !important;
  --icon-color: #ff79c6 !important;
  --icon-color-active: #FF1690 !important;
  --icon-color-focused: #FF00FF !important;
  --icon-color-hover: #ff79c6 !important;
  --input-date-separator: #bd93f9 !important;
  --input-placeholder-color: #bd93f9 !important;
  --interactive-accent: #00FFFF !important;
  --interactive-accent-hover: #8be9fd !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #8be9fd !important;
  --interactive-normal: #00FFFF !important;
  --light: #2b213a !important;
  --lightgray: #1a1836 !important;
  --link-color: #FF1690 !important;
  --link-color-hover: #7a6ae6 !important;
  --link-external-color: #FF1690 !important;
  --link-external-color-hover: #7a6ae6 !important;
  --link-unresolved-color: #FF1690 !important;
  --list-marker-color: #bd93f9 !important;
  --list-marker-color-collapsed: #FF1690 !important;
  --list-marker-color-hover: #ff79c6 !important;
  --menu-background: #1a1836 !important;
  --metadata-border-color: #00FFFF !important;
  --metadata-divider-color: #00FFFF !important;
  --metadata-input-text-color: #FF00FF !important;
  --metadata-label-text-color: #ff79c6 !important;
  --metadata-label-text-color-hover: #ff79c6 !important;
  --modal-background: #2b213a !important;
  --nav-collapse-icon-color: #bd93f9 !important;
  --nav-collapse-icon-color-collapsed: #bd93f9 !important;
  --nav-heading-color: #FF00FF !important;
  --nav-heading-color-collapsed: #bd93f9 !important;
  --nav-heading-color-collapsed-hover: #ff79c6 !important;
  --nav-heading-color-hover: #FF00FF !important;
  --nav-item-color: #ff79c6 !important;
  --nav-item-color-active: #FF00FF !important;
  --nav-item-color-highlighted: #FF1690 !important;
  --nav-item-color-hover: #FF00FF !important;
  --nav-item-color-selected: #FF00FF !important;
  --nav-tag-color: #bd93f9 !important;
  --nav-tag-color-active: #ff79c6 !important;
  --nav-tag-color-hover: #ff79c6 !important;
  --pdf-background: #2b213a !important;
  --pdf-page-background: #2b213a !important;
  --pdf-shadow: 0 0 0 1px #00FFFF !important;
  --pdf-sidebar-background: #2b213a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #00FFFF !important;
  --pill-border-color: #00FFFF !important;
  --pill-color: #ff79c6 !important;
  --pill-color-hover: #FF00FF !important;
  --pill-color-remove: #bd93f9 !important;
  --pill-color-remove-hover: #FF1690 !important;
  --prompt-background: #2b213a !important;
  --raised-background: color-mix(in srgb, #00FFFF 65%, transparent) linear-gradient(#00FFFF, color-mix(in srgb, #00FFFF 65%, transparent)) !important;
  --ribbon-background: #1a1836 !important;
  --ribbon-background-collapsed: #2b213a !important;
  --search-clear-button-color: #ff79c6 !important;
  --search-icon-color: #ff79c6 !important;
  --search-result-background: #2b213a !important;
  --secondary: #FF1690 !important;
  --setting-group-heading-color: #FF00FF !important;
  --setting-items-background: #171520 !important;
  --setting-items-border-color: #00FFFF !important;
  --slider-track-background: #00FFFF !important;
  --status-bar-background: #1a1836 !important;
  --status-bar-border-color: #00FFFF !important;
  --status-bar-text-color: #ff79c6 !important;
  --suggestion-background: #2b213a !important;
  --tab-background-active: #2b213a !important;
  --tab-container-background: #1a1836 !important;
  --tab-outline-color: #00FFFF !important;
  --tab-switcher-background: #1a1836 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1836, transparent) !important;
  --tab-text-color: #bd93f9 !important;
  --tab-text-color-active: #ff79c6 !important;
  --tab-text-color-focused: #ff79c6 !important;
  --tab-text-color-focused-active: #ff79c6 !important;
  --tab-text-color-focused-active-current: #FF00FF !important;
  --tab-text-color-focused-highlighted: #FF1690 !important;
  --table-add-button-border-color: #00FFFF !important;
  --table-border-color: #00FFFF !important;
  --table-drag-handle-background-active: #00FFFF !important;
  --table-drag-handle-color: #bd93f9 !important;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8) !important;
  --table-header-border-color: #00FFFF !important;
  --table-header-color: #FF00FF !important;
  --table-selection-border-color: #00FFFF !important;
  --tag-color: #FF1690 !important;
  --tag-color-hover: #FF1690 !important;
  --tertiary: #7a6ae6 !important;
  --text-accent: #FF1690 !important;
  --text-accent-hover: #7a6ae6 !important;
  --text-faint: #bd93f9 !important;
  --text-highlight-bg: #ffd319 !important;
  --text-muted: #ff79c6 !important;
  --text-normal: #FF00FF !important;
  --text-on-accent: rgba(0, 0, 0, 0.8) !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --textHighlight: #ffd319 !important;
  --titlebar-background: #1a1836 !important;
  --titlebar-background-focused: #242043 !important;
  --titlebar-border-color: #00FFFF !important;
  --titlebar-text-color: #ff79c6 !important;
  --titlebar-text-color-focused: #FF00FF !important;
  --vault-profile-color: #FF00FF !important;
  --vault-profile-color-hover: #FF00FF !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 24, 54);
  color: rgb(255, 0, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(43, 33, 58);
  color: rgb(255, 0, 255);
}

html body .bases-table thead th {
  border-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

html body .canvas-node {
  border-color: rgb(255, 0, 255);
}

html body .canvas-node-content {
  color: rgb(255, 0, 255);
}

html body .canvas-node-file {
  color: rgba(255, 220, 255, 0.8);
}

html body .canvas-node-group {
  border-color: rgb(255, 0, 255);
}

html body .canvas-sidebar {
  background-color: rgb(26, 24, 54);
  border-color: rgb(255, 0, 255);
}

html body .note-properties {
  border-color: rgb(0, 255, 255);
}

html body .note-properties-key {
  color: rgb(255, 121, 198);
}

html body .note-properties-row {
  border-color: rgb(255, 121, 198);
}

html body .note-properties-tags {
  color: rgb(255, 22, 144);
}

html body .note-properties-value {
  color: rgb(255, 121, 198);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 24, 54);
  color: rgb(255, 0, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 24, 54);
  border-left-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

html body div#quartz-root {
  background-color: rgb(43, 33, 58);
  color: rgb(255, 0, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .page article p > em, html em {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .page article p > i, html i {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .page article p > strong, html strong {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .text-highlight {
  background-color: rgb(255, 211, 25);
  color: rgb(26, 24, 54);
  outline: rgb(26, 24, 54) none 0px;
  text-decoration-color: rgb(26, 24, 54);
}

html body del {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body h1.article-title {
  color: rgb(255, 0, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 147, 249);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 255, 255);
  border-color: rgb(0, 255, 255);
}

html body p {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration-color: rgb(255, 121, 198);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration-color: rgb(255, 22, 144);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration-color: rgb(255, 22, 144);
}

html body a.internal.broken {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
}`,
    lists: `html body dd {
  color: rgba(255, 220, 255, 0.8);
}

html body dt {
  color: rgba(255, 220, 255, 0.8);
}

html body ol > li {
  color: rgba(255, 220, 255, 0.8);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

html body ul > li {
  color: rgba(255, 220, 255, 0.8);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(255, 220, 255, 0.25);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body table {
  color: rgba(255, 220, 255, 0.8);
}

html body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgba(255, 220, 255, 0.8);
}

html body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgba(255, 220, 255, 0.8);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html body pre:has(> code) {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `html body audio {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body figcaption {
  color: rgba(255, 220, 255, 0.8);
}

html body figure {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body img {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body video {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
}

html body .footnotes {
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

html body .transclude {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  margin-right: 6.66667px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
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
  --callout-color: 2, 122, 255;
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
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(43, 33, 58);
}

html body .search > .search-container > .search-space > * {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 24, 54);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgba(255, 220, 255, 0.8);
}

html body a.internal.tag-link::before {
  color: rgb(255, 22, 144);
}

html body h1 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 0, 255) 0px 0px 12.944px;
}

html body h2 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 255, 255) 0px 0px 11.696px;
}

html body h2.page-title, html h2.page-title a {
  color: rgba(255, 220, 255, 0.8);
}

html body h3 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 255, 0) 0px 0px 10.544px;
}

html body h4 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 255, 0) 0px 0px 9.504px;
}

html body h5 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 0, 0) 0px 0px 8.608px;
}

html body h6 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 0, 255) 0px 0px 8px;
}

html body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-track {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 121, 198);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 121, 198);
}`,
    toc: `html body details.toc summary::marker {
  color: rgba(255, 220, 255, 0.8);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}`,
    footer: `html body footer {
  background-color: rgb(26, 24, 54);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 121, 198);
}

html body footer ul li a {
  color: rgb(255, 121, 198);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 0, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 121, 198);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 121, 198);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

html body li.section-li > .section .meta {
  color: rgb(255, 121, 198);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 121, 198);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body .darkmode svg {
  color: rgb(255, 121, 198);
  stroke: rgb(255, 121, 198);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

html body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 121, 198);
}

html body .metadata-properties {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body .navigation-progress {
  background-color: rgb(26, 24, 54);
}

html body .page-header h2.page-title {
  color: rgb(255, 0, 255);
}

html body abbr {
  color: rgba(255, 220, 255, 0.8);
}

html body details {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body input[type=text] {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body kbd {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

html body progress {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body sub {
  color: rgba(255, 220, 255, 0.8);
}

html body summary {
  color: rgba(255, 220, 255, 0.8);
}

html body sup {
  color: rgba(255, 220, 255, 0.8);
}

html body ul.tags > li {
  color: rgb(255, 0, 255);
}`,
  },
  light: {},
  extras: `body {
  position: relative;
}

body::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: inherit;
  width: inherit;
  background:
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  z-index: 2000;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
}

body::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: inherit;
  width: inherit;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2001;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}
@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}

body {
  text-shadow:
    0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
    -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
    0 0 3px;
  animation: textShadow 1.6s infinite;
}
body svg,
body hr {
  filter: drop-shadow(
    0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
    -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
    0 0 3px
  );
  animation: dropShadow 1.6s infinite;
}
@keyframes textShadow {
  0% {
    text-shadow:
      0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  5% {
    text-shadow:
      2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  10% {
    text-shadow:
      0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  15% {
    text-shadow:
      0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  20% {
    text-shadow:
      3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  25% {
    text-shadow:
      1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  30% {
    text-shadow:
      0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  35% {
    text-shadow:
      3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  40% {
    text-shadow:
      3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  45% {
    text-shadow:
      2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  50% {
    text-shadow:
      0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  55% {
    text-shadow:
      2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  60% {
    text-shadow:
      2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  65% {
    text-shadow:
      2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  70% {
    text-shadow:
      0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  75% {
    text-shadow:
      1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  80% {
    text-shadow:
      0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  85% {
    text-shadow:
      0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  90% {
    text-shadow:
      3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  95% {
    text-shadow:
      2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  100% {
    text-shadow:
      2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
}
@keyframes dropShadow {
  0% {
    filter: drop-shadow(
      0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  5% {
    filter: drop-shadow(
      2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  10% {
    filter: drop-shadow(
      0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  15% {
    filter: drop-shadow(
      0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  20% {
    filter: drop-shadow(
      3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  25% {
    filter: drop-shadow(
      1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  30% {
    filter: drop-shadow(
      0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  35% {
    filter: drop-shadow(
      3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  40% {
    filter: drop-shadow(
      3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  45% {
    filter: drop-shadow(
      2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  50% {
    filter: drop-shadow(
      0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  55% {
    filter: drop-shadow(
      2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  60% {
    filter: drop-shadow(
      2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  65% {
    filter: drop-shadow(
      2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  70% {
    filter: drop-shadow(
      0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  75% {
    filter: drop-shadow(
      1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  80% {
    filter: drop-shadow(
      0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  85% {
    filter: drop-shadow(
      0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  90% {
    filter: drop-shadow(
      3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  95% {
    filter: drop-shadow(
      2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  100% {
    filter: drop-shadow(
      2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
}

/* extras from _index.scss */
:root:root:root {
  body {
    --text-normal: rgba(255, 220, 255, 0.8);
    --text-faint: rgba(255, 220, 255, 0.25);
    --text-accent: var(--accent-2);
    --lightgray: var(--hr-color);
    p {
      color: var(--text-normal);
    }
  }
}

/* 6. BONUS! CRT Scanlines and flicker! 
 * It's not for everyone though, so it's disabled by default.
 * simply remove the \`/*\` below a subsection to enable it **/

/* 6.1. Pentile effect (chunky pixels) */
body {
  position: relative;
}
/* DELETE THIS LINE TO ENABLE */
body::before {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: inherit;
  width: inherit;
  background:
    linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%),
    linear-gradient(
      90deg,
      rgba(255, 0, 0, 0.06),
      rgba(0, 255, 0, 0.02),
      rgba(0, 0, 255, 0.06)
    );
  z-index: 2000;
  background-size:
    100% 2px,
    3px 100%;
  pointer-events: none;
}

/* 6.2. Screen flicker */
/* DELETE THIS LINE TO ENABLE */
body::after {
  content: " ";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: inherit;
  width: inherit;
  background: rgba(18, 16, 16, 0.1);
  opacity: 0;
  z-index: 2001;
  pointer-events: none;
  animation: flicker 0.15s infinite;
}
@keyframes flicker {
  0% {
    opacity: 0.27861;
  }
  5% {
    opacity: 0.34769;
  }
  10% {
    opacity: 0.23604;
  }
  15% {
    opacity: 0.90626;
  }
  20% {
    opacity: 0.18128;
  }
  25% {
    opacity: 0.83891;
  }
  30% {
    opacity: 0.65583;
  }
  35% {
    opacity: 0.67807;
  }
  40% {
    opacity: 0.26559;
  }
  45% {
    opacity: 0.84693;
  }
  50% {
    opacity: 0.96019;
  }
  55% {
    opacity: 0.08594;
  }
  60% {
    opacity: 0.20313;
  }
  65% {
    opacity: 0.71988;
  }
  70% {
    opacity: 0.53455;
  }
  75% {
    opacity: 0.37288;
  }
  80% {
    opacity: 0.71428;
  }
  85% {
    opacity: 0.70419;
  }
  90% {
    opacity: 0.7003;
  }
  95% {
    opacity: 0.36108;
  }
  100% {
    opacity: 0.24387;
  }
}

/* 6.3. Text blur effect */
/* DELETE THIS LINE TO ENABLE */
body {
  text-shadow:
    0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
    -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
    0 0 3px;
  animation: textShadow 1.6s infinite;
}
body svg,
body hr {
  filter: drop-shadow(
    0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
    -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
    0 0 3px
  );
  animation: dropShadow 1.6s infinite;
}
@keyframes textShadow {
  0% {
    text-shadow:
      0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  5% {
    text-shadow:
      2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  10% {
    text-shadow:
      0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  15% {
    text-shadow:
      0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  20% {
    text-shadow:
      3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  25% {
    text-shadow:
      1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  30% {
    text-shadow:
      0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  35% {
    text-shadow:
      3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  40% {
    text-shadow:
      3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  45% {
    text-shadow:
      2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  50% {
    text-shadow:
      0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  55% {
    text-shadow:
      2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  60% {
    text-shadow:
      2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  65% {
    text-shadow:
      2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  70% {
    text-shadow:
      0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  75% {
    text-shadow:
      1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  80% {
    text-shadow:
      0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  85% {
    text-shadow:
      0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  90% {
    text-shadow:
      3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  95% {
    text-shadow:
      2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
  100% {
    text-shadow:
      2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px;
  }
}
@keyframes dropShadow {
  0% {
    filter: drop-shadow(
      0.4389924193300864px 0 1px rgba(0, 30, 255, 0.5),
      -0.4389924193300864px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  5% {
    filter: drop-shadow(
      2.7928974010788217px 0 1px rgba(0, 30, 255, 0.5),
      -2.7928974010788217px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  10% {
    filter: drop-shadow(
      0.02956275843481219px 0 1px rgba(0, 30, 255, 0.5),
      -0.02956275843481219px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  15% {
    filter: drop-shadow(
      0.40218538552878136px 0 1px rgba(0, 30, 255, 0.5),
      -0.40218538552878136px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  20% {
    filter: drop-shadow(
      3.4794037899852017px 0 1px rgba(0, 30, 255, 0.5),
      -3.4794037899852017px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  25% {
    filter: drop-shadow(
      1.6125630401149584px 0 1px rgba(0, 30, 255, 0.5),
      -1.6125630401149584px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  30% {
    filter: drop-shadow(
      0.7015590085143956px 0 1px rgba(0, 30, 255, 0.5),
      -0.7015590085143956px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  35% {
    filter: drop-shadow(
      3.896914047650351px 0 1px rgba(0, 30, 255, 0.5),
      -3.896914047650351px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  40% {
    filter: drop-shadow(
      3.870905614848819px 0 1px rgba(0, 30, 255, 0.5),
      -3.870905614848819px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  45% {
    filter: drop-shadow(
      2.231056963361899px 0 1px rgba(0, 30, 255, 0.5),
      -2.231056963361899px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  50% {
    filter: drop-shadow(
      0.08084290417898504px 0 1px rgba(0, 30, 255, 0.5),
      -0.08084290417898504px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  55% {
    filter: drop-shadow(
      2.3758461067427543px 0 1px rgba(0, 30, 255, 0.5),
      -2.3758461067427543px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  60% {
    filter: drop-shadow(
      2.202193051050636px 0 1px rgba(0, 30, 255, 0.5),
      -2.202193051050636px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  65% {
    filter: drop-shadow(
      2.8638780614874975px 0 1px rgba(0, 30, 255, 0.5),
      -2.8638780614874975px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  70% {
    filter: drop-shadow(
      0.48874025155497314px 0 1px rgba(0, 30, 255, 0.5),
      -0.48874025155497314px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  75% {
    filter: drop-shadow(
      1.8948491305757957px 0 1px rgba(0, 30, 255, 0.5),
      -1.8948491305757957px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  80% {
    filter: drop-shadow(
      0.0833037308038857px 0 1px rgba(0, 30, 255, 0.5),
      -0.0833037308038857px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  85% {
    filter: drop-shadow(
      0.09769827255241735px 0 1px rgba(0, 30, 255, 0.5),
      -0.09769827255241735px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  90% {
    filter: drop-shadow(
      3.443339761481782px 0 1px rgba(0, 30, 255, 0.5),
      -3.443339761481782px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  95% {
    filter: drop-shadow(
      2.1841838852799786px 0 1px rgba(0, 30, 255, 0.5),
      -2.1841838852799786px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
  100% {
    filter: drop-shadow(
      2.6208764473832513px 0 1px rgba(0, 30, 255, 0.5),
      -2.6208764473832513px 0 1px rgba(255, 0, 80, 0.3),
      0 0 3px
    );
  }
}
/**/
`,
};
