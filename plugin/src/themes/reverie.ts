import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "reverie",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #95c1bb !important;
  --background-primary: #1A2023 !important;
  --background-primary-alt: #1A2023 !important;
  --background-secondary: #222B2F !important;
  --background-secondary-alt: #073334 !important;
  --bases-cards-background: #1A2023 !important;
  --bases-cards-cover-background: #1A2023 !important;
  --bases-cards-shadow: 0 0 0 1px #95c1bb !important;
  --bases-embed-border-color: #95c1bb !important;
  --bases-table-border-color: #95c1bb !important;
  --bases-table-cell-background-active: #1A2023 !important;
  --bases-table-cell-background-disabled: #1A2023 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0b797d !important;
  --bases-table-group-background: #1A2023 !important;
  --bases-table-header-background: #1A2023 !important;
  --bases-table-summary-background: #1A2023 !important;
  --blockquote-border-color: #0b797d !important;
  --canvas-background: #1A2023 !important;
  --canvas-card-label-color: #bdae93 !important;
  --caret-color: #faf2d6 !important;
  --checkbox-border-color: #bdae93 !important;
  --checkbox-color: #0b797d !important;
  --checkbox-marker-color: #1A2023 !important;
  --code-background: #1A2023 !important;
  --code-block: #83a598 !important;
  --code-border-color: #95c1bb !important;
  --code-comment: #bdae93 !important;
  --code-normal: #faf2d6 !important;
  --collapse-icon-color: #bdae93 !important;
  --collapse-icon-color-collapsed: #2ccab7 !important;
  --dark: #faf2d6 !important;
  --darkgray: #faf2d6 !important;
  --divider-color: #95c1bb !important;
  --divider-color-hover: #0b797d !important;
  --embed-block-shadow-hover: 0 0 0 1px #95c1bb, inset 0 0 0 1px #95c1bb !important;
  --embed-border-start: 2px solid #0b797d !important;
  --file-header-background: #1A2023 !important;
  --file-header-background-focused: #1A2023 !important;
  --flair-color: #faf2d6 !important;
  --footnote-divider-color: #95c1bb !important;
  --footnote-id-color-no-occurrences: #bdae93 !important;
  --graph-node-focused: #2ccab7 !important;
  --graph-node-unresolved: #bdae93 !important;
  --graph-text: #faf2d6 !important;
  --gray: #bdae93 !important;
  --heading-formatting: #bdae93 !important;
  --highlight: #22a578 !important;
  --hr-color: #95c1bb !important;
  --icon-color-active: #2ccab7 !important;
  --icon-color-focused: #faf2d6 !important;
  --inline-code: #83a598 !important;
  --input-date-separator: #bdae93 !important;
  --input-placeholder-color: #bdae93 !important;
  --interactive-accent: #0b797d !important;
  --interactive-accent-rgb: #2ccab7 !important;
  --interactive-before: #7c6f64 !important;
  --light: #1A2023 !important;
  --lightgray: #222B2F !important;
  --link-color: #2ccab7 !important;
  --link-external-color: #2ccab7 !important;
  --link-unresolved-color: #2ccab7 !important;
  --list-marker-color: #bdae93 !important;
  --list-marker-color-collapsed: #2ccab7 !important;
  --menu-background: #222B2F !important;
  --metadata-border-color: #95c1bb !important;
  --metadata-divider-color: #95c1bb !important;
  --metadata-input-text-color: #faf2d6 !important;
  --modal-background: #1A2023 !important;
  --nav-collapse-icon-color: #bdae93 !important;
  --nav-collapse-icon-color-collapsed: #bdae93 !important;
  --nav-heading-color: #faf2d6 !important;
  --nav-heading-color-collapsed: #bdae93 !important;
  --nav-heading-color-hover: #faf2d6 !important;
  --nav-item-color-active: #faf2d6 !important;
  --nav-item-color-highlighted: #2ccab7 !important;
  --nav-item-color-hover: #faf2d6 !important;
  --nav-item-color-selected: #faf2d6 !important;
  --nav-tag-color: #bdae93 !important;
  --pdf-background: #1A2023 !important;
  --pdf-page-background: #1A2023 !important;
  --pdf-shadow: 0 0 0 1px #95c1bb !important;
  --pdf-sidebar-background: #1A2023 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #95c1bb !important;
  --pill-border-color: #95c1bb !important;
  --pill-color-hover: #faf2d6 !important;
  --pill-color-remove: #bdae93 !important;
  --pill-color-remove-hover: #2ccab7 !important;
  --pre-code: #073334 !important;
  --prompt-background: #1A2023 !important;
  --ribbon-background: #222B2F !important;
  --ribbon-background-collapsed: #1A2023 !important;
  --search-result-background: #1A2023 !important;
  --secondary: #2ccab7 !important;
  --setting-group-heading-color: #faf2d6 !important;
  --setting-items-background: #1A2023 !important;
  --setting-items-border-color: #95c1bb !important;
  --slider-track-background: #95c1bb !important;
  --status-bar-background: #222B2F !important;
  --status-bar-border-color: #95c1bb !important;
  --suggestion-background: #1A2023 !important;
  --tab-background-active: #1A2023 !important;
  --tab-container-background: #222B2F !important;
  --tab-outline-color: #95c1bb !important;
  --tab-switcher-background: #222B2F !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #222B2F, transparent) !important;
  --tab-text-color: #bdae93 !important;
  --tab-text-color-focused-active-current: #faf2d6 !important;
  --tab-text-color-focused-highlighted: #2ccab7 !important;
  --table-add-button-border-color: #95c1bb !important;
  --table-border-color: #95c1bb !important;
  --table-drag-handle-background-active: #0b797d !important;
  --table-drag-handle-color: #bdae93 !important;
  --table-drag-handle-color-active: #fff !important;
  --table-header-border-color: #95c1bb !important;
  --table-header-color: #faf2d6 !important;
  --table-selection-border-color: #0b797d !important;
  --tag-color: #2ccab7 !important;
  --tag-color-hover: #2ccab7 !important;
  --tertiary: #2ccab7 !important;
  --text-a: #2ccab7 !important;
  --text-a-hover: #83a598 !important;
  --text-accent: #2ccab7 !important;
  --text-faint: #bdae93 !important;
  --text-highlight-bg: #22a578 !important;
  --text-link: #83a598 !important;
  --text-normal: #faf2d6 !important;
  --text-on-accent: #fff !important;
  --text-selection: #16304D !important;
  --text-title-h1: #c1dde1 !important;
  --text-title-h2: #8ab8bd !important;
  --text-title-h3: #56a7b0 !important;
  --text-title-h4: #309093 !important;
  --text-title-h5: #0b797d !important;
  --text-title-h6: #0b797d !important;
  --textHighlight: #22a578 !important;
  --titlebar-background: #222B2F !important;
  --titlebar-background-focused: #073334 !important;
  --titlebar-border-color: #95c1bb !important;
  --titlebar-text-color-focused: #faf2d6 !important;
  --vault-profile-color: #faf2d6 !important;
  --vault-profile-color-hover: #faf2d6 !important;
  --vim-cursor: #2ccab7 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(26, 32, 35);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(34, 43, 47);
  border-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(149, 193, 187);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(44, 202, 183);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(149, 193, 187);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 43, 47);
  border-left-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(26, 32, 35);
  color: rgb(250, 242, 214);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 162, 0);
  outline: rgb(229, 162, 0) none 0px;
  text-decoration-color: rgb(229, 162, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(189, 174, 147);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(124, 111, 100);
  border-color: rgb(11, 121, 125);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(44, 202, 183);
  outline: rgb(44, 202, 183) none 0px;
  text-decoration-color: rgb(44, 202, 183);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(44, 202, 183);
  outline: rgb(44, 202, 183) none 0px;
  text-decoration-color: rgb(44, 202, 183);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(44, 202, 183);
  outline: rgb(44, 202, 183) none 0px;
  text-decoration-color: rgb(44, 202, 183);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body dt {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(44, 202, 183);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body table {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(149, 193, 187);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(149, 193, 187);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
  color: rgb(131, 165, 152);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(7, 51, 52);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(26, 32, 35);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(11, 121, 125);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(124, 111, 100);
  border-left-color: rgb(124, 111, 100);
  border-right-color: rgb(124, 111, 100);
  border-top-color: rgb(124, 111, 100);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
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
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(26, 32, 35);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 43, 47);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(34, 43, 47);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(34, 43, 47);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(44, 202, 183);
}

html[saved-theme="dark"] body h1 {
  color: rgb(193, 221, 225);
}

html[saved-theme="dark"] body h2 {
  color: rgb(138, 184, 189);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body h3 {
  color: rgb(86, 167, 176);
}

html[saved-theme="dark"] body h4 {
  color: rgb(48, 144, 147);
}

html[saved-theme="dark"] body h5 {
  color: rgb(11, 121, 125);
}

html[saved-theme="dark"] body h6 {
  color: rgb(11, 121, 125);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(26, 32, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 32, 35);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(250, 242, 214);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(34, 43, 47);
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(149, 193, 187);
  border-left-color: rgb(149, 193, 187);
  border-right-color: rgb(149, 193, 187);
  border-top-color: rgb(149, 193, 187);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(34, 43, 47);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body abbr {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(26, 32, 35);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body sub {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body summary {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body sup {
  color: rgb(250, 242, 214);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(44, 202, 183);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #1bb0b6 !important;
  --background-primary: #e7e7e7 !important;
  --background-primary-alt: #e7e7e7 !important;
  --background-secondary: #e3e3e3 !important;
  --background-secondary-alt: #bebebe !important;
  --bases-cards-background: #e7e7e7 !important;
  --bases-cards-cover-background: #e7e7e7 !important;
  --bases-cards-shadow: 0 0 0 1px #1bb0b6 !important;
  --bases-embed-border-color: #1bb0b6 !important;
  --bases-table-border-color: #1bb0b6 !important;
  --bases-table-cell-background-active: #e7e7e7 !important;
  --bases-table-cell-background-disabled: #e7e7e7 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #22a578 !important;
  --bases-table-group-background: #e7e7e7 !important;
  --bases-table-header-background: #e7e7e7 !important;
  --bases-table-summary-background: #e7e7e7 !important;
  --blockquote-border-color: #22a578 !important;
  --blur-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent)) !important;
  --canvas-background: #e7e7e7 !important;
  --canvas-card-label-color: #665c54 !important;
  --caret-color: #1A2023 !important;
  --checkbox-border-color: #665c54 !important;
  --checkbox-color: #22a578 !important;
  --checkbox-marker-color: #e7e7e7 !important;
  --code-background: #e7e7e7 !important;
  --code-border-color: #1bb0b6 !important;
  --code-comment: #665c54 !important;
  --code-normal: #1A2023 !important;
  --collapse-icon-color: #665c54 !important;
  --collapse-icon-color-collapsed: #22a578 !important;
  --dark: #1A2023 !important;
  --darkgray: #1A2023 !important;
  --divider-color: #1bb0b6 !important;
  --divider-color-hover: #22a578 !important;
  --embed-block-shadow-hover: 0 0 0 1px #1bb0b6, inset 0 0 0 1px #1bb0b6 !important;
  --embed-border-start: 2px solid #22a578 !important;
  --file-header-background: #e7e7e7 !important;
  --file-header-background-focused: #e7e7e7 !important;
  --flair-color: #1A2023 !important;
  --footnote-divider-color: #1bb0b6 !important;
  --footnote-id-color-no-occurrences: #665c54 !important;
  --graph-node-focused: #22a578 !important;
  --graph-node-unresolved: #665c54 !important;
  --graph-text: #1A2023 !important;
  --gray: #665c54 !important;
  --heading-formatting: #665c54 !important;
  --hr-color: #1bb0b6 !important;
  --icon-color-active: #22a578 !important;
  --icon-color-focused: #1A2023 !important;
  --inline-code: #458588 !important;
  --input-date-separator: #665c54 !important;
  --input-placeholder-color: #665c54 !important;
  --interactive-accent: #22a578 !important;
  --interactive-accent-rgb: #22a578 !important;
  --interactive-before: #a89984 !important;
  --light: #e7e7e7 !important;
  --lightgray: #e3e3e3 !important;
  --link-color: #22a578 !important;
  --link-external-color: #22a578 !important;
  --link-unresolved-color: #22a578 !important;
  --list-marker-color: #665c54 !important;
  --list-marker-color-collapsed: #22a578 !important;
  --menu-background: #e3e3e3 !important;
  --metadata-border-color: #1bb0b6 !important;
  --metadata-divider-color: #1bb0b6 !important;
  --metadata-input-text-color: #1A2023 !important;
  --modal-background: #e7e7e7 !important;
  --nav-collapse-icon-color: #665c54 !important;
  --nav-collapse-icon-color-collapsed: #665c54 !important;
  --nav-heading-color: #1A2023 !important;
  --nav-heading-color-collapsed: #665c54 !important;
  --nav-heading-color-hover: #1A2023 !important;
  --nav-item-color-active: #1A2023 !important;
  --nav-item-color-highlighted: #22a578 !important;
  --nav-item-color-hover: #1A2023 !important;
  --nav-item-color-selected: #1A2023 !important;
  --nav-tag-color: #665c54 !important;
  --pdf-background: #e7e7e7 !important;
  --pdf-page-background: #e7e7e7 !important;
  --pdf-sidebar-background: #e7e7e7 !important;
  --pill-border-color: #1bb0b6 !important;
  --pill-color-hover: #1A2023 !important;
  --pill-color-remove: #665c54 !important;
  --pill-color-remove-hover: #22a578 !important;
  --pre-code: #bebebe !important;
  --prompt-background: #e7e7e7 !important;
  --raised-background: color-mix(in srgb, #e7e7e7 65%, transparent) linear-gradient(#e7e7e7, color-mix(in srgb, #e7e7e7 65%, transparent)) !important;
  --ribbon-background: #e3e3e3 !important;
  --ribbon-background-collapsed: #e7e7e7 !important;
  --search-result-background: #e7e7e7 !important;
  --secondary: #22a578 !important;
  --setting-group-heading-color: #1A2023 !important;
  --setting-items-background: #e7e7e7 !important;
  --setting-items-border-color: #1bb0b6 !important;
  --slider-track-background: #1bb0b6 !important;
  --status-bar-background: #e3e3e3 !important;
  --status-bar-border-color: #1bb0b6 !important;
  --suggestion-background: #e7e7e7 !important;
  --tab-background-active: #e7e7e7 !important;
  --tab-container-background: #e3e3e3 !important;
  --tab-outline-color: #1bb0b6 !important;
  --tab-switcher-background: #e3e3e3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e3e3e3, transparent) !important;
  --tab-text-color: #665c54 !important;
  --tab-text-color-focused-active-current: #1A2023 !important;
  --tab-text-color-focused-highlighted: #22a578 !important;
  --table-add-button-border-color: #1bb0b6 !important;
  --table-border-color: #1bb0b6 !important;
  --table-drag-handle-background-active: #22a578 !important;
  --table-drag-handle-color: #665c54 !important;
  --table-header-border-color: #1bb0b6 !important;
  --table-header-color: #1A2023 !important;
  --table-selection-border-color: #22a578 !important;
  --tag-color: #22a578 !important;
  --tag-color-hover: #22a578 !important;
  --tertiary: #22a578 !important;
  --text-a: #22a578 !important;
  --text-a-hover: #458588 !important;
  --text-accent: #22a578 !important;
  --text-faint: #665c54 !important;
  --text-link: #458588 !important;
  --text-normal: #1A2023 !important;
  --text-title-h1: #1bb0b6 !important;
  --text-title-h2: #3fa7ab !important;
  --text-title-h3: #458588 !important;
  --text-title-h4: #4b6667 !important;
  --text-title-h5: #3b4646 !important;
  --titlebar-background: #e3e3e3 !important;
  --titlebar-background-focused: #bebebe !important;
  --titlebar-border-color: #1bb0b6 !important;
  --titlebar-text-color-focused: #1A2023 !important;
  --vault-profile-color: #1A2023 !important;
  --vault-profile-color-hover: #1A2023 !important;
  --vim-cursor: #22a578 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(231, 231, 231);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(231, 231, 231);
  border-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(27, 176, 182);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(34, 165, 120);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(27, 176, 182);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(227, 227, 227);
  border-left-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(231, 231, 231);
  color: rgb(26, 32, 35);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(229, 162, 0);
  outline: rgb(229, 162, 0) none 0px;
  text-decoration-color: rgb(229, 162, 0);
}

html[saved-theme="light"] body del {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(102, 92, 84);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(124, 111, 100);
  border-color: rgb(34, 165, 120);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(34, 165, 120);
  outline: rgb(34, 165, 120) none 0px;
  text-decoration-color: rgb(34, 165, 120);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 165, 120);
  outline: rgb(34, 165, 120) none 0px;
  text-decoration-color: rgb(34, 165, 120);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(34, 165, 120);
  outline: rgb(34, 165, 120) none 0px;
  text-decoration-color: rgb(34, 165, 120);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body dt {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol > li {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul > li {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(34, 165, 120);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body table {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(27, 176, 182);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(27, 176, 182);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(190, 190, 190);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figcaption {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(34, 165, 120);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(124, 111, 100);
  border-left-color: rgb(124, 111, 100);
  border-right-color: rgb(124, 111, 100);
  border-top-color: rgb(124, 111, 100);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
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
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(231, 231, 231);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(227, 227, 227);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(227, 227, 227);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(227, 227, 227);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(34, 165, 120);
}

html[saved-theme="light"] body h1 {
  color: rgb(27, 176, 182);
}

html[saved-theme="light"] body h2 {
  color: rgb(63, 167, 171);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body h3 {
  color: rgb(69, 133, 136);
}

html[saved-theme="light"] body h4 {
  color: rgb(75, 102, 103);
}

html[saved-theme="light"] body h5 {
  color: rgb(59, 70, 70);
}

html[saved-theme="light"] body h6 {
  color: rgb(59, 70, 70);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
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
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
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
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(26, 32, 35);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(227, 227, 227);
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(102, 92, 84);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(27, 176, 182);
  border-left-color: rgb(27, 176, 182);
  border-right-color: rgb(27, 176, 182);
  border-top-color: rgb(27, 176, 182);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(227, 227, 227);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body abbr {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 231, 231);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

html[saved-theme="light"] body sub {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body summary {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body sup {
  color: rgb(26, 32, 35);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(34, 165, 120);
}`,
  },
};
