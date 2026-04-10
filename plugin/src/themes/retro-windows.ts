import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "retro-windows",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-secondary: #2d2d2d !important;
  --background-secondary-alt: #3a3a3a !important;
  --background-tertiary: #444444 !important;
  --bases-group-heading-property-color: #b0b0b0 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4f6fb0 !important;
  --bases-table-header-color: #b0b0b0 !important;
  --blockquote-border-color: #4f6fb0 !important;
  --blur-background: color-mix(in srgb, #3a3a3a 65%, transparent) linear-gradient(#3a3a3a, color-mix(in srgb, #3a3a3a 65%, transparent)) !important;
  --bold-color: #7fc9a0 !important;
  --button-background: #3a3a3a !important;
  --button-text: #e0e0e0 !important;
  --canvas-card-label-color: #888888 !important;
  --caret-color: #e0e0e0 !important;
  --checkbox-border-color: #888888 !important;
  --checkbox-border-color-hover: #b0b0b0 !important;
  --checkbox-color: #4f6fb0 !important;
  --checkbox-color-hover: #6989d0 !important;
  --checklist-done-color: #b0b0b0 !important;
  --code-comment: #888888 !important;
  --code-normal: #e0e0e0 !important;
  --code-punctuation: #b0b0b0 !important;
  --collapse-icon-color: #888888 !important;
  --collapse-icon-color-collapsed: #8cb4ff !important;
  --dark: #e0e0e0 !important;
  --darkgray: #e0e0e0 !important;
  --divider-color-hover: #4f6fb0 !important;
  --dropdown-background: #3a3a3a !important;
  --dropdown-background-hover: #505050 !important;
  --embed-border-start: 2px solid #4f6fb0 !important;
  --flair-background: #3a3a3a !important;
  --flair-color: #e0e0e0 !important;
  --folder-color-1: #c78080 !important;
  --folder-color-10: #b3a68f !important;
  --folder-color-11: #b38da8 !important;
  --folder-color-12: #8eabc0 !important;
  --folder-color-2: #a992d0 !important;
  --folder-color-3: #7aa3c9 !important;
  --folder-color-4: #7fb59a !important;
  --folder-color-5: #c9c48e !important;
  --folder-color-6: #d19e7d !important;
  --folder-color-7: #c093a6 !important;
  --folder-color-8: #7db3c9 !important;
  --folder-color-9: #8eb98e !important;
  --footnote-id-color: #b0b0b0 !important;
  --footnote-id-color-no-occurrences: #888888 !important;
  --graph-node: #b0b0b0 !important;
  --graph-node-focused: #8cb4ff !important;
  --graph-node-unresolved: #888888 !important;
  --graph-text: #e0e0e0 !important;
  --gray: #b0b0b0 !important;
  --h1-color: #8470A6 !important;
  --h2-color: #507A9E !important;
  --h3-color: #5A8D76 !important;
  --h4-color: #A67A5B !important;
  --h5-color: #A19C6C !important;
  --h6-color: #6C8299 !important;
  --heading-formatting: #888888 !important;
  --highlight: #5a4820 !important;
  --icon-color: #b0b0b0 !important;
  --icon-color-active: #8cb4ff !important;
  --icon-color-focused: #e0e0e0 !important;
  --icon-color-hover: #b0b0b0 !important;
  --inline-title-color: #8470A6 !important;
  --input-date-separator: #888888 !important;
  --input-placeholder-color: #888888 !important;
  --interactive-accent: #4f6fb0 !important;
  --interactive-accent-hover: #6989d0 !important;
  --interactive-hover: #505050 !important;
  --interactive-normal: #3a3a3a !important;
  --italic-color: #7fb0e0 !important;
  --lightgray: #2d2d2d !important;
  --link-color: #8cb4ff !important;
  --link-external-color: #8cb4ff !important;
  --link-unresolved-color: #8cb4ff !important;
  --list-marker-color: #888888 !important;
  --list-marker-color-collapsed: #8cb4ff !important;
  --list-marker-color-hover: #b0b0b0 !important;
  --menu-background: #2d2d2d !important;
  --metadata-input-text-color: #e0e0e0 !important;
  --metadata-label-text-color: #b0b0b0 !important;
  --metadata-label-text-color-hover: #b0b0b0 !important;
  --nav-collapse-icon-color: #888888 !important;
  --nav-collapse-icon-color-collapsed: #888888 !important;
  --nav-heading-color: #e0e0e0 !important;
  --nav-heading-color-collapsed: #888888 !important;
  --nav-heading-color-collapsed-hover: #b0b0b0 !important;
  --nav-heading-color-hover: #e0e0e0 !important;
  --nav-item-color: #b0b0b0 !important;
  --nav-item-color-active: #e0e0e0 !important;
  --nav-item-color-highlighted: #8cb4ff !important;
  --nav-item-color-hover: #e0e0e0 !important;
  --nav-item-color-selected: #e0e0e0 !important;
  --nav-tag-color: #888888 !important;
  --nav-tag-color-active: #b0b0b0 !important;
  --nav-tag-color-hover: #b0b0b0 !important;
  --pill-color: #b0b0b0 !important;
  --pill-color-hover: #e0e0e0 !important;
  --pill-color-remove: #888888 !important;
  --pill-color-remove-hover: #8cb4ff !important;
  --raised-background: color-mix(in srgb, #3a3a3a 65%, transparent) linear-gradient(#3a3a3a, color-mix(in srgb, #3a3a3a 65%, transparent)) !important;
  --ribbon-background: #2d2d2d !important;
  --search-clear-button-color: #b0b0b0 !important;
  --search-icon-color: #b0b0b0 !important;
  --secondary: #8cb4ff !important;
  --setting-group-heading-color: #e0e0e0 !important;
  --status-bar-background: #2d2d2d !important;
  --status-bar-text-color: #b0b0b0 !important;
  --tab-container-background: #2d2d2d !important;
  --tab-switcher-background: #2d2d2d !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2d2d2d, transparent) !important;
  --tab-text-color: #888888 !important;
  --tab-text-color-active: #b0b0b0 !important;
  --tab-text-color-focused: #b0b0b0 !important;
  --tab-text-color-focused-active: #b0b0b0 !important;
  --tab-text-color-focused-active-current: #e0e0e0 !important;
  --tab-text-color-focused-highlighted: #8cb4ff !important;
  --table-drag-handle-background-active: #4f6fb0 !important;
  --table-drag-handle-color: #888888 !important;
  --table-header-color: #e0e0e0 !important;
  --table-selection-border-color: #4f6fb0 !important;
  --tag-color: #8cb4ff !important;
  --tag-color-hover: #8cb4ff !important;
  --tertiary: #6989d0 !important;
  --text-accent: #8cb4ff !important;
  --text-faint: #888888 !important;
  --text-highlight-bg: #5a4820 !important;
  --text-muted: #b0b0b0 !important;
  --text-normal: #e0e0e0 !important;
  --textHighlight: #5a4820 !important;
  --titlebar-background: #2d2d2d !important;
  --titlebar-background-focused: #3a3a3a !important;
  --titlebar-text: #ffffff !important;
  --titlebar-text-color: #b0b0b0 !important;
  --titlebar-text-color-focused: #e0e0e0 !important;
  --vault-profile-color: #e0e0e0 !important;
  --vault-profile-color-hover: #e0e0e0 !important;
  --window-border: 2px solid #000 !important;
  --window-shadow: inset -1px -1px #3a3a3a, inset 1px 1px #888888, inset -2px -2px #555, inset 2px 2px #666 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(45, 45, 45);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(68, 68, 68);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(45, 45, 45);
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .note-properties {
  background-color: rgb(58, 58, 58);
  border-color: rgb(102, 102, 102);
  border-radius: 5px;
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(140, 180, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(45, 45, 45);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(45, 45, 45);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(224, 224, 224);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(127, 201, 160);
  outline: rgb(127, 201, 160) none 0px;
  text-decoration-color: rgb(127, 201, 160);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(127, 176, 224);
  outline: rgb(127, 176, 224) none 0px;
  text-decoration-color: rgb(127, 176, 224);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(127, 176, 224);
  outline: rgb(127, 176, 224) none 0px;
  text-decoration-color: rgb(127, 176, 224);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(127, 201, 160);
  outline: rgb(127, 201, 160) none 0px;
  text-decoration-color: rgb(127, 201, 160);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(90, 72, 32);
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(79, 111, 176);
  border-color: rgb(79, 111, 176);
}

html[saved-theme="dark"] body p {
  color: rgb(176, 176, 176);
  outline: rgb(176, 176, 176) none 0px;
  text-decoration-color: rgb(176, 176, 176);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(140, 180, 255);
  outline: rgb(140, 180, 255) none 0px;
  text-decoration-color: rgb(140, 180, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(140, 180, 255);
  outline: rgb(140, 180, 255) none 0px;
  text-decoration-color: rgb(140, 180, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(140, 180, 255);
  outline: rgb(140, 180, 255) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(136, 136, 136);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(68, 68, 68);
  border-left-color: rgb(68, 68, 68);
  border-right-color: rgb(68, 68, 68);
  border-top-color: rgb(68, 68, 68);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(68, 68, 68);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(68, 68, 68);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(111, 207, 159);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(111, 207, 159);
  border-right-color: rgb(111, 207, 159);
  border-top-color: rgb(111, 207, 159);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(111, 207, 159);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(111, 207, 159);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(85, 85, 85);
  border-left-width: 1px;
  border-right-color: rgb(85, 85, 85);
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(132, 112, 166);
  border-left-color: rgb(132, 112, 166);
  border-right-color: rgb(132, 112, 166);
  border-top-color: rgb(132, 112, 166);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(79, 111, 176);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
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
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(45, 45, 45);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(140, 180, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(132, 112, 166);
}

html[saved-theme="dark"] body h2 {
  color: rgb(80, 122, 158);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(132, 112, 166);
}

html[saved-theme="dark"] body h3 {
  color: rgb(90, 141, 118);
}

html[saved-theme="dark"] body h4 {
  color: rgb(166, 122, 91);
}

html[saved-theme="dark"] body h5 {
  color: rgb(161, 156, 108);
}

html[saved-theme="dark"] body h6 {
  color: rgb(108, 130, 153);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(169, 146, 208);
  font-weight: 700;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(169, 146, 208);
  font-weight: 700;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(58, 58, 58);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(68, 68, 68);
  border-top-color: rgb(128, 128, 128);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(224, 224, 224);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(169, 146, 208);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(176, 176, 176);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(169, 146, 208);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(85, 85, 85);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  background-color: rgb(58, 58, 58);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 224, 224);
  stroke: rgb(224, 224, 224);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(136, 136, 136);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .metadata {
  background-color: rgb(58, 58, 58);
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(102, 102, 102);
  border-left-width: 1px;
  border-right-color: rgb(102, 102, 102);
  border-right-width: 1px;
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(176, 176, 176);
  padding-left: 32px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(68, 68, 68);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(176, 176, 176);
  border-left-color: rgb(176, 176, 176);
  border-right-color: rgb(176, 176, 176);
  border-top-color: rgb(176, 176, 176);
  color: rgb(176, 176, 176);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(140, 180, 255);
}`,
  },
  light: {
    base: `:root:root {
  --background-secondary: #ececec !important;
  --background-secondary-alt: #d4d0c8 !important;
  --background-tertiary: #c0c0c0 !important;
  --bases-group-heading-property-color: #333333 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #000080 !important;
  --bases-table-header-color: #333333 !important;
  --blockquote-border-color: #000080 !important;
  --bold-color: #61a181 !important;
  --button-background: #d4d0c8 !important;
  --button-text: #000000 !important;
  --canvas-card-label-color: #666666 !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: #666666 !important;
  --checkbox-border-color-hover: #333333 !important;
  --checkbox-color: #000080 !important;
  --checkbox-color-hover: #0000aa !important;
  --checklist-done-color: #333333 !important;
  --code-comment: #666666 !important;
  --code-normal: #000000 !important;
  --code-punctuation: #333333 !important;
  --collapse-icon-color: #666666 !important;
  --collapse-icon-color-collapsed: #008015 !important;
  --dark: #000000 !important;
  --darkgray: #000000 !important;
  --divider-color-hover: #000080 !important;
  --dropdown-background: #d4d0c8 !important;
  --dropdown-background-hover: #e6e6e6 !important;
  --embed-border-start: 2px solid #000080 !important;
  --flair-background: #d4d0c8 !important;
  --flair-color: #000000 !important;
  --folder-color-1: #965D5D !important;
  --folder-color-10: #8B7E6D !important;
  --folder-color-11: #8D6B83 !important;
  --folder-color-12: #6C8299 !important;
  --folder-color-2: #8470A6 !important;
  --folder-color-3: #507A9E !important;
  --folder-color-4: #5A8D76 !important;
  --folder-color-5: #A19C6C !important;
  --folder-color-6: #A67A5B !important;
  --folder-color-7: #96707E !important;
  --folder-color-8: #5B8B9E !important;
  --folder-color-9: #6B8C6B !important;
  --footnote-id-color: #333333 !important;
  --footnote-id-color-no-occurrences: #666666 !important;
  --graph-node: #333333 !important;
  --graph-node-focused: #008015 !important;
  --graph-node-unresolved: #666666 !important;
  --graph-text: #000000 !important;
  --gray: #333333 !important;
  --h1-color: #8470A6 !important;
  --h2-color: #507A9E !important;
  --h3-color: #5A8D76 !important;
  --h4-color: #A67A5B !important;
  --h5-color: #A19C6C !important;
  --h6-color: #6C8299 !important;
  --heading-formatting: #666666 !important;
  --highlight: #746119 !important;
  --icon-color: #333333 !important;
  --icon-color-active: #008015 !important;
  --icon-color-focused: #000000 !important;
  --icon-color-hover: #333333 !important;
  --inline-title-color: #8470A6 !important;
  --input-date-separator: #666666 !important;
  --input-placeholder-color: #666666 !important;
  --interactive-accent: #000080 !important;
  --interactive-accent-hover: #0000aa !important;
  --interactive-hover: #e6e6e6 !important;
  --interactive-normal: #d4d0c8 !important;
  --italic-color: #95c2f0 !important;
  --lightgray: #ececec !important;
  --link-color: #008015 !important;
  --link-external-color: #008015 !important;
  --link-unresolved-color: #008015 !important;
  --list-marker-color: #666666 !important;
  --list-marker-color-collapsed: #008015 !important;
  --list-marker-color-hover: #333333 !important;
  --menu-background: #ececec !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-text-color: #333333 !important;
  --metadata-label-text-color-hover: #333333 !important;
  --nav-collapse-icon-color: #666666 !important;
  --nav-collapse-icon-color-collapsed: #666666 !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: #666666 !important;
  --nav-heading-color-collapsed-hover: #333333 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-item-color: #333333 !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-highlighted: #008015 !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #000000 !important;
  --nav-tag-color: #666666 !important;
  --nav-tag-color-active: #333333 !important;
  --nav-tag-color-hover: #333333 !important;
  --pill-color: #333333 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: #666666 !important;
  --pill-color-remove-hover: #008015 !important;
  --ribbon-background: #ececec !important;
  --search-clear-button-color: #333333 !important;
  --search-icon-color: #333333 !important;
  --secondary: #008015 !important;
  --setting-group-heading-color: #000000 !important;
  --status-bar-background: #ececec !important;
  --status-bar-text-color: #333333 !important;
  --tab-container-background: #ececec !important;
  --tab-switcher-background: #ececec !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ececec, transparent) !important;
  --tab-text-color: #666666 !important;
  --tab-text-color-active: #333333 !important;
  --tab-text-color-focused: #333333 !important;
  --tab-text-color-focused-active: #333333 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: #008015 !important;
  --table-drag-handle-background-active: #000080 !important;
  --table-drag-handle-color: #666666 !important;
  --table-header-color: #000000 !important;
  --table-selection-border-color: #000080 !important;
  --tag-color: #008015 !important;
  --tag-color-hover: #008015 !important;
  --tertiary: #0000aa !important;
  --text-accent: #008015 !important;
  --text-faint: #666666 !important;
  --text-highlight-bg: #746119 !important;
  --text-muted: #333333 !important;
  --text-normal: #000000 !important;
  --textHighlight: #746119 !important;
  --titlebar-background: #ececec !important;
  --titlebar-background-focused: #d4d0c8 !important;
  --titlebar-text: #ffffff !important;
  --titlebar-text-color: #333333 !important;
  --titlebar-text-color-focused: #000000 !important;
  --vault-profile-color: #000000 !important;
  --vault-profile-color-hover: #000000 !important;
  --window-border: 2px solid #000 !important;
  --window-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf, inset -2px -2px grey, inset 2px 2px #fff !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(236, 236, 236);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(192, 192, 192);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  background-color: rgb(212, 208, 200);
  border-color: rgb(0, 0, 0);
  border-radius: 5px;
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(0, 128, 21);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(236, 236, 236);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(236, 236, 236);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(97, 161, 129);
  outline: rgb(97, 161, 129) none 0px;
  text-decoration-color: rgb(97, 161, 129);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(149, 194, 240);
  outline: rgb(149, 194, 240) none 0px;
  text-decoration-color: rgb(149, 194, 240);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(149, 194, 240);
  outline: rgb(149, 194, 240) none 0px;
  text-decoration-color: rgb(149, 194, 240);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(97, 161, 129);
  outline: rgb(97, 161, 129) none 0px;
  text-decoration-color: rgb(97, 161, 129);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(116, 97, 25);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(102, 102, 102);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 0, 128);
  border-color: rgb(0, 0, 128);
}

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 128, 21);
  outline: rgb(0, 128, 21) none 0px;
  text-decoration-color: rgb(0, 128, 21);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 128, 21);
  outline: rgb(0, 128, 21) none 0px;
  text-decoration-color: rgb(0, 128, 21);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 128, 21);
  outline: rgb(0, 128, 21) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(102, 102, 102);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(192, 192, 192);
  border-left-color: rgb(192, 192, 192);
  border-right-color: rgb(192, 192, 192);
  border-top-color: rgb(192, 192, 192);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(192, 192, 192);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(11, 110, 79);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(11, 110, 79);
  border-right-color: rgb(11, 110, 79);
  border-top-color: rgb(11, 110, 79);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(11, 110, 79);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(192, 192, 192);
  border-left-width: 1px;
  border-right-color: rgb(192, 192, 192);
  border-right-width: 1px;
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(192, 192, 192);
  border-left-width: 1px;
  border-right-color: rgb(192, 192, 192);
  border-right-width: 1px;
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(11, 110, 79);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(192, 192, 192);
  border-left-width: 1px;
  border-right-color: rgb(192, 192, 192);
  border-right-width: 1px;
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(192, 192, 192);
  border-left-width: 1px;
  border-right-color: rgb(192, 192, 192);
  border-right-width: 1px;
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(132, 112, 166);
  border-left-color: rgb(132, 112, 166);
  border-right-color: rgb(132, 112, 166);
  border-top-color: rgb(132, 112, 166);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 128);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
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
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 128, 21);
}

html[saved-theme="light"] body h1 {
  color: rgb(132, 112, 166);
}

html[saved-theme="light"] body h2 {
  color: rgb(80, 122, 158);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(132, 112, 166);
}

html[saved-theme="light"] body h3 {
  color: rgb(90, 141, 118);
}

html[saved-theme="light"] body h4 {
  color: rgb(166, 122, 91);
}

html[saved-theme="light"] body h5 {
  color: rgb(161, 156, 108);
}

html[saved-theme="light"] body h6 {
  color: rgb(108, 130, 153);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(132, 112, 166);
  font-weight: 700;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(132, 112, 166);
  font-weight: 700;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 700;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(212, 208, 200);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(192, 192, 192);
  border-top-color: rgb(128, 128, 128);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(132, 112, 166);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(51, 51, 51);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(192, 192, 192);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(132, 112, 166);
  border-left-style: solid;
  border-left-width: 4px;
  border-right-color: rgb(192, 192, 192);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(192, 192, 192);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  background-color: rgb(212, 208, 200);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 0, 0);
  stroke: rgb(0, 0, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(102, 102, 102);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  background-color: rgb(212, 208, 200);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 1px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 1px;
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(51, 51, 51);
  padding-left: 32px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(192, 192, 192);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(0, 128, 21);
}`,
  },
};
