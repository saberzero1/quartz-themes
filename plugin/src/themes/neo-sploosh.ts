import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neo-sploosh",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-form-field-highlighted: #2c2c2c !important;
  --background-modifier-success-hover: #47b8e6 !important;
  --background-primary: #222222 !important;
  --background-primary-alt: #1c1c1c !important;
  --background-primary-rgb: 34, 34, 34 !important;
  --background-secondary: #181818 !important;
  --background-secondary-alt: #1f1f1f !important;
  --background-secondary-rgb: 28, 28, 28 !important;
  --bases-cards-background: #222222 !important;
  --bases-cards-cover-background: #1c1c1c !important;
  --bases-group-heading-property-color: #7a7a7a !important;
  --bases-table-cell-background-active: #222222 !important;
  --bases-table-cell-background-disabled: #1c1c1c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #008dc9 !important;
  --bases-table-group-background: #1c1c1c !important;
  --bases-table-header-background: #222222 !important;
  --bases-table-header-color: #7a7a7a !important;
  --bases-table-summary-background: #222222 !important;
  --blockquote-border: #0090cc !important;
  --blockquote-border-color: #008dc9 !important;
  --blur-background: color-mix(in srgb, #2d2d2d 65%, transparent) linear-gradient(#2d2d2d, color-mix(in srgb, #2d2d2d 65%, transparent)) !important;
  --canvas-background: #222222 !important;
  --canvas-card-label-color: #555555 !important;
  --caret-color: #c6c6c6 !important;
  --checkbox-border-color: #555555 !important;
  --checkbox-border-color-hover: #7a7a7a !important;
  --checkbox-color: #008dc9 !important;
  --checkbox-color-hover: #40aedd !important;
  --checkbox-marker-color: #222222 !important;
  --checklist-done-color: #7a7a7a !important;
  --code-background: #1c1c1c !important;
  --code-comment: #555555 !important;
  --code-normal: #c6c6c6 !important;
  --code-punctuation: #7a7a7a !important;
  --collapse-icon-color: #555555 !important;
  --collapse-icon-color-collapsed: #2f8fb5 !important;
  --dark: #c6c6c6 !important;
  --darkgray: #c6c6c6 !important;
  --divider-color: #2e2e2e !important;
  --divider-color-hover: #008dc9 !important;
  --dropdown-background: #2d2d2d !important;
  --dropdown-background-hover: #2d2d2d !important;
  --embed-background: #1f1f1f !important;
  --embed-border: #2e2e2e !important;
  --embed-border-start: 2px solid #008dc9 !important;
  --file-header-background: #222222 !important;
  --file-header-background-focused: #222222 !important;
  --flair-background: #2d2d2d !important;
  --flair-color: #c6c6c6 !important;
  --footnote-id-color: #7a7a7a !important;
  --footnote-id-color-no-occurrences: #555555 !important;
  --graph-node: #7a7a7a !important;
  --graph-node-focused: #2f8fb5 !important;
  --graph-node-unresolved: #555555 !important;
  --graph-text: #c6c6c6 !important;
  --gray: #7a7a7a !important;
  --heading-formatting: #555555 !important;
  --icon-color: #1a98ce !important;
  --icon-color-active: #47b8e6 !important;
  --icon-color-focused: #47b8e6 !important;
  --icon-color-hover: #47b8e6 !important;
  --inline-title-color: #40aedd !important;
  --input-date-separator: #555555 !important;
  --input-placeholder-color: #555555 !important;
  --interactive-accent: #008dc9 !important;
  --interactive-accent-hover: #40aedd !important;
  --interactive-hover: #2d2d2d !important;
  --interactive-muted: #2e2e2e !important;
  --interactive-normal: #2d2d2d !important;
  --light: #222222 !important;
  --lightgray: #181818 !important;
  --link-color: #2f8fb5 !important;
  --link-color-hover: #40aedd !important;
  --link-external-color: #2f8fb5 !important;
  --link-external-color-hover: #40aedd !important;
  --link-unresolved-color: #2f8fb5 !important;
  --list-marker-color: #555555 !important;
  --list-marker-color-collapsed: #2f8fb5 !important;
  --list-marker-color-hover: #7a7a7a !important;
  --menu-background: #181818 !important;
  --metadata-input-text-color: #c6c6c6 !important;
  --metadata-label-text-color: #7a7a7a !important;
  --metadata-label-text-color-hover: #7a7a7a !important;
  --modal-background: #222222 !important;
  --modal-border: #2e2e2e !important;
  --nav-collapse-icon-color: #555555 !important;
  --nav-collapse-icon-color-collapsed: #555555 !important;
  --nav-file-title-color: #c6c6c6 !important;
  --nav-file-title-color-active: #f2f2f2 !important;
  --nav-folder-title-color: #c6c6c6 !important;
  --nav-heading-color: #c6c6c6 !important;
  --nav-heading-color-collapsed: #555555 !important;
  --nav-heading-color-collapsed-hover: #7a7a7a !important;
  --nav-heading-color-hover: #c6c6c6 !important;
  --nav-item-background-active: #1f252b !important;
  --nav-item-background-hover: #1d2327 !important;
  --nav-item-background-selected: #1f252b !important;
  --nav-item-color: #9cb6c4 !important;
  --nav-item-color-active: #e9f4fa !important;
  --nav-item-color-highlighted: #2f8fb5 !important;
  --nav-item-color-hover: #47b8e6 !important;
  --nav-item-color-selected: #e9f4fa !important;
  --nav-item-color-selected-active: #e9f4fa !important;
  --nav-item-icon-color: #1a98ce !important;
  --nav-item-icon-color-hover: #47b8e6 !important;
  --nav-tag-color: #555555 !important;
  --nav-tag-color-active: #7a7a7a !important;
  --nav-tag-color-hover: #7a7a7a !important;
  --outline-item-color: #7a7a7a !important;
  --outline-item-color-active: #c6c6c6 !important;
  --pane-border-color: #2e2e2e !important;
  --pane-border-width: 1px !important;
  --pdf-background: #222222 !important;
  --pdf-page-background: #222222 !important;
  --pdf-sidebar-background: #222222 !important;
  --pill-color: #7a7a7a !important;
  --pill-color-hover: #c6c6c6 !important;
  --pill-color-remove: #555555 !important;
  --pill-color-remove-hover: #2f8fb5 !important;
  --prompt-background: #222222 !important;
  --prompt-border: #2e2e2e !important;
  --raised-background: color-mix(in srgb, #2d2d2d 65%, transparent) linear-gradient(#2d2d2d, color-mix(in srgb, #2d2d2d 65%, transparent)) !important;
  --ribbon-background: #161616 !important;
  --ribbon-background-collapsed: #222222 !important;
  --ribbon-background-hover: #1f1f1f !important;
  --search-clear-button-color: #7a7a7a !important;
  --search-icon-color: #7a7a7a !important;
  --search-result-background: #222222 !important;
  --secondary: #2f8fb5 !important;
  --setting-group-heading-color: #c6c6c6 !important;
  --setting-items-background: #1c1c1c !important;
  --sidebar-background: #151b1f !important;
  --status-bar-background: #181818 !important;
  --status-bar-border-color: #2e2e2e !important;
  --status-bar-text-color: #7a7a7a !important;
  --suggestion-background: #222222 !important;
  --syntax-comment: #888888 !important;
  --syntax-constant: #64c8f2 !important;
  --syntax-diff-changed: #98e80f !important;
  --syntax-function: #6ed5ff !important;
  --syntax-invalid: #be0d22 !important;
  --syntax-keyword: #cccccc !important;
  --syntax-keyword-secondary: #aaaaaa !important;
  --syntax-markup-text: #eeeeee !important;
  --syntax-property: #00b3ff !important;
  --syntax-punctuation: #cccccc !important;
  --syntax-string: #cbd200 !important;
  --syntax-variable: #0090cc !important;
  --tab-background-active: #222222 !important;
  --tab-container-background: #181818 !important;
  --tab-divider-color: #2e2e2e !important;
  --tab-outline-color: #2e2e2e !important;
  --tab-switcher-background: #181818 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent) !important;
  --tab-text-color: #555555 !important;
  --tab-text-color-active: #7a7a7a !important;
  --tab-text-color-focused: #7a7a7a !important;
  --tab-text-color-focused-active: #7a7a7a !important;
  --tab-text-color-focused-active-current: #c6c6c6 !important;
  --tab-text-color-focused-highlighted: #2f8fb5 !important;
  --table-drag-handle-background-active: #008dc9 !important;
  --table-drag-handle-color: #555555 !important;
  --table-drag-handle-color-active: #111111 !important;
  --table-header-color: #c6c6c6 !important;
  --table-selection-border-color: #008dc9 !important;
  --tag-color: #2f8fb5 !important;
  --tag-color-hover: #2f8fb5 !important;
  --tertiary: #40aedd !important;
  --text-accent: #2f8fb5 !important;
  --text-accent-hover: #40aedd !important;
  --text-accent-visited: #2f8fb5 !important;
  --text-accent-visited-hover: #40aedd !important;
  --text-faint: #555555 !important;
  --text-heading: #e4e4e4 !important;
  --text-muted: #7a7a7a !important;
  --text-normal: #c6c6c6 !important;
  --text-normal-rgb: 198, 198, 198 !important;
  --text-on-accent: #111111 !important;
  --titlebar-background: #161616 !important;
  --titlebar-background-focused: #161616 !important;
  --titlebar-text-color: #7a7a7a !important;
  --titlebar-text-color-focused: #c6c6c6 !important;
  --vault-profile-color: #c6c6c6 !important;
  --vault-profile-color-hover: #c6c6c6 !important;
  --view-action-active-bg: #1a98ce !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-file {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(24, 24, 24);
  border-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(47, 143, 181);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(46, 46, 46);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  border-left-color: rgb(46, 46, 46);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body del {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 141, 201);
  border-color: rgb(0, 141, 201);
}

html[saved-theme="dark"] body p {
  color: rgb(122, 122, 122);
  outline: rgb(122, 122, 122) none 0px;
  text-decoration-color: rgb(122, 122, 122);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration-color: rgb(47, 143, 181);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration-color: rgb(47, 143, 181);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body dt {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(47, 143, 181);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body table {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body td {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body th {
  color: rgb(198, 198, 198);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 28, 28);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(110, 213, 255);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(110, 213, 255);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(110, 213, 255);
  border-left-color: rgb(110, 213, 255);
  border-right-color: rgb(110, 213, 255);
  border-top-color: rgb(110, 213, 255);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(28, 28, 28);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(0, 141, 201);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
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
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(47, 143, 181);
}

html[saved-theme="dark"] body h1 {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body h2 {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(64, 174, 221);
}

html[saved-theme="dark"] body h3 {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body h4 {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body h5 {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body h6 {
  color: rgb(228, 228, 228);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 198, 198);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(198, 198, 198);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(26, 152, 206);
  border-left-color: rgb(26, 152, 206);
  border-right-color: rgb(26, 152, 206);
  border-top-color: rgb(26, 152, 206);
  color: rgb(26, 152, 206);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(122, 122, 122);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 198, 198);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(26, 152, 206);
  border-left-color: rgb(26, 152, 206);
  border-right-color: rgb(26, 152, 206);
  border-top-color: rgb(26, 152, 206);
  color: rgb(26, 152, 206);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(26, 152, 206);
  stroke: rgb(26, 152, 206);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(85, 85, 85);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body abbr {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
  color: rgb(122, 122, 122);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body sub {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body summary {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body sup {
  color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(47, 143, 181);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 199 !important;
  --accent-l: 40% !important;
  --accent-s: 100% !important;
  --background-modifier-active-hover: #d9e7f0 !important;
  --background-modifier-border: #cdd7df !important;
  --background-modifier-error: #be0d22 !important;
  --background-modifier-error-hover: #009fdb !important;
  --background-modifier-form-field-highlighted: #d9e7f0 !important;
  --background-modifier-hover: #d9e7f0 !important;
  --background-modifier-success: #00a2e7 !important;
  --background-modifier-success-hover: #00a2e7 !important;
  --background-primary: #f7f9fb !important;
  --background-primary-alt: #f0f4f7 !important;
  --background-primary-rgb: 247, 249, 251 !important;
  --background-secondary: #ffffff !important;
  --background-secondary-alt: #ffffff !important;
  --background-secondary-rgb: 224, 232, 240 !important;
  --bases-cards-background: #f7f9fb !important;
  --bases-cards-cover-background: #f0f4f7 !important;
  --bases-cards-shadow: 0 0 0 1px #cdd7df !important;
  --bases-embed-border-color: #cdd7df !important;
  --bases-group-heading-property-color: #5b6c78 !important;
  --bases-table-border-color: #cdd7df !important;
  --bases-table-cell-background-active: #f7f9fb !important;
  --bases-table-cell-background-disabled: #f0f4f7 !important;
  --bases-table-cell-background-selected: hsla(199, 100%, 40%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #008dc9 !important;
  --bases-table-group-background: #f0f4f7 !important;
  --bases-table-header-background: #f7f9fb !important;
  --bases-table-header-background-hover: #d9e7f0 !important;
  --bases-table-header-color: #5b6c78 !important;
  --bases-table-summary-background: #f7f9fb !important;
  --bases-table-summary-background-hover: #d9e7f0 !important;
  --blockquote-border: #0070a1 !important;
  --blockquote-border-color: #008dc9 !important;
  --blur-background: color-mix(in srgb, #f7f9fb 65%, transparent) linear-gradient(#f7f9fb, color-mix(in srgb, #f7f9fb 65%, transparent)) !important;
  --canvas-background: #f7f9fb !important;
  --canvas-card-label-color: #8a97a1 !important;
  --caret-color: #10212d !important;
  --checkbox-border-color: #8a97a1 !important;
  --checkbox-border-color-hover: #5b6c78 !important;
  --checkbox-color: #008dc9 !important;
  --checkbox-color-hover: #009fdb !important;
  --checkbox-marker-color: #f7f9fb !important;
  --checklist-done-color: #5b6c78 !important;
  --code-background: #e2eaf0 !important;
  --code-border-color: #cdd7df !important;
  --code-bracket-background: #d9e7f0 !important;
  --code-comment: #8a97a1 !important;
  --code-normal: #172630 !important;
  --code-punctuation: #5b6c78 !important;
  --collapse-icon-color: #8a97a1 !important;
  --collapse-icon-color-collapsed: #2f8fb5 !important;
  --color-accent: hsl(199, 100%, 40%) !important;
  --color-accent-1: hsl(198, 101%, 43%) !important;
  --color-accent-2: hsl(196, 102%, 46%) !important;
  --color-accent-hsl: 199, 100%, 40% !important;
  --dark: #10212d !important;
  --darkgray: #10212d !important;
  --divider-color: #cdd7df !important;
  --divider-color-hover: #008dc9 !important;
  --dropdown-background: #e3ecf3 !important;
  --dropdown-background-hover: #d9e7f0 !important;
  --embed-background: #ffffff !important;
  --embed-block-shadow-hover: 0 0 0 1px #cdd7df, inset 0 0 0 1px #cdd7df !important;
  --embed-border: #cdd7df !important;
  --embed-border-start: 2px solid #008dc9 !important;
  --file-header-background: #f7f9fb !important;
  --file-header-background-focused: #f7f9fb !important;
  --flair-background: #e3ecf3 !important;
  --flair-color: #10212d !important;
  --footnote-divider-color: #cdd7df !important;
  --footnote-id-color: #5b6c78 !important;
  --footnote-id-color-no-occurrences: #8a97a1 !important;
  --footnote-input-background-active: #d9e7f0 !important;
  --graph-node: #5b6c78 !important;
  --graph-node-focused: #2f8fb5 !important;
  --graph-node-unresolved: #8a97a1 !important;
  --graph-text: #10212d !important;
  --gray: #5b6c78 !important;
  --heading-formatting: #8a97a1 !important;
  --highlight: #d9e7f0 !important;
  --hr-color: #cdd7df !important;
  --icon-color: #008fd8 !important;
  --icon-color-active: #00a2e7 !important;
  --icon-color-focused: #00a2e7 !important;
  --icon-color-hover: #00a2e7 !important;
  --inline-title-color: #009fdb !important;
  --input-date-separator: #8a97a1 !important;
  --input-placeholder-color: #8a97a1 !important;
  --interactive-accent: #008dc9 !important;
  --interactive-accent-hover: #009fdb !important;
  --interactive-accent-hsl: 199, 100%, 40% !important;
  --interactive-hover: #d9e7f0 !important;
  --interactive-muted: #cdd7df !important;
  --interactive-normal: #e3ecf3 !important;
  --light: #f7f9fb !important;
  --lightgray: #ffffff !important;
  --link-color: #2f8fb5 !important;
  --link-color-hover: #54b8e0 !important;
  --link-external-color: #2f8fb5 !important;
  --link-external-color-hover: #54b8e0 !important;
  --link-unresolved-color: #2f8fb5 !important;
  --link-unresolved-decoration-color: hsla(199, 100%, 40%, 0.3) !important;
  --list-marker-color-collapsed: #2f8fb5 !important;
  --list-marker-color-hover: #5b6c78 !important;
  --menu-background: #ffffff !important;
  --metadata-border-color: #cdd7df !important;
  --metadata-divider-color: #cdd7df !important;
  --metadata-input-background-active: #d9e7f0 !important;
  --metadata-input-text-color: #10212d !important;
  --metadata-label-background-active: #d9e7f0 !important;
  --metadata-label-text-color: #5b6c78 !important;
  --metadata-label-text-color-hover: #5b6c78 !important;
  --metadata-property-background-active: #d9e7f0 !important;
  --modal-border: #cdd7df !important;
  --modal-border-color: #cdd7df !important;
  --nav-collapse-icon-color: #8a97a1 !important;
  --nav-collapse-icon-color-collapsed: #8a97a1 !important;
  --nav-file-title-color: #10212d !important;
  --nav-file-title-color-active: #051018 !important;
  --nav-folder-title-color: #10212d !important;
  --nav-heading-color: #10212d !important;
  --nav-heading-color-collapsed: #8a97a1 !important;
  --nav-heading-color-collapsed-hover: #5b6c78 !important;
  --nav-heading-color-hover: #10212d !important;
  --nav-item-background-active: #cfe6f6 !important;
  --nav-item-background-hover: #eaf2f8 !important;
  --nav-item-background-selected: #cfe6f6 !important;
  --nav-item-color: #6c7b87 !important;
  --nav-item-color-active: #008fd8 !important;
  --nav-item-color-highlighted: #2f8fb5 !important;
  --nav-item-color-hover: #006ea6 !important;
  --nav-item-color-selected: #008fd8 !important;
  --nav-item-color-selected-active: #008fd8 !important;
  --nav-item-icon-color: #008fd8 !important;
  --nav-item-icon-color-hover: #00a2e7 !important;
  --nav-tag-color: #8a97a1 !important;
  --nav-tag-color-active: #5b6c78 !important;
  --nav-tag-color-hover: #5b6c78 !important;
  --outline-item-color: #5b6c78 !important;
  --outline-item-color-active: #10212d !important;
  --pane-border-color: #cdd7df !important;
  --pane-border-width: 1px !important;
  --pdf-background: #f7f9fb !important;
  --pdf-page-background: #f7f9fb !important;
  --pdf-sidebar-background: #f7f9fb !important;
  --pill-border-color: #cdd7df !important;
  --pill-color: #5b6c78 !important;
  --pill-color-hover: #10212d !important;
  --pill-color-remove: #8a97a1 !important;
  --pill-color-remove-hover: #2f8fb5 !important;
  --prompt-border: #cdd7df !important;
  --prompt-border-color: #cdd7df !important;
  --raised-background: color-mix(in srgb, #f7f9fb 65%, transparent) linear-gradient(#f7f9fb, color-mix(in srgb, #f7f9fb 65%, transparent)) !important;
  --ribbon-background: #ffffff !important;
  --ribbon-background-collapsed: #f7f9fb !important;
  --ribbon-background-hover: #edf2f6 !important;
  --search-clear-button-color: #5b6c78 !important;
  --search-icon-color: #5b6c78 !important;
  --search-result-background: #f7f9fb !important;
  --secondary: #2f8fb5 !important;
  --setting-group-heading-color: #10212d !important;
  --setting-items-background: #f0f4f7 !important;
  --setting-items-border-color: #cdd7df !important;
  --sidebar-background: #ffffff !important;
  --slider-track-background: #cdd7df !important;
  --status-bar-background: #ffffff !important;
  --status-bar-border-color: #cdd7df !important;
  --status-bar-text-color: #5b6c78 !important;
  --suggestion-background: #f7f9fb !important;
  --syntax-comment: #6f7a82 !important;
  --syntax-constant: #b51224 !important;
  --syntax-diff-changed: #a18a1a !important;
  --syntax-function: #006ea6 !important;
  --syntax-invalid: #c11124 !important;
  --syntax-keyword: #005f86 !important;
  --syntax-keyword-secondary: #0e3f5a !important;
  --syntax-markup-text: #172630 !important;
  --syntax-property: #0070a1 !important;
  --syntax-punctuation: #73818b !important;
  --syntax-string: #868e00 !important;
  --syntax-variable: #004f70 !important;
  --tab-background-active: #f7f9fb !important;
  --tab-container-background: #ffffff !important;
  --tab-divider-color: #cdd7df !important;
  --tab-outline-color: #cdd7df !important;
  --tab-switcher-background: #ffffff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(199, 100%, 40%) !important;
  --tab-text-color: #8a97a1 !important;
  --tab-text-color-active: #5b6c78 !important;
  --tab-text-color-focused: #5b6c78 !important;
  --tab-text-color-focused-active: #5b6c78 !important;
  --tab-text-color-focused-active-current: #10212d !important;
  --tab-text-color-focused-highlighted: #2f8fb5 !important;
  --table-add-button-border-color: #cdd7df !important;
  --table-border-color: #cdd7df !important;
  --table-drag-handle-background-active: #008dc9 !important;
  --table-drag-handle-color: #8a97a1 !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #cdd7df !important;
  --table-header-color: #10212d !important;
  --table-selection: hsla(199, 100%, 40%, 0.1) !important;
  --table-selection-border-color: #008dc9 !important;
  --tag-background: hsla(199, 100%, 40%, 0.1) !important;
  --tag-background-hover: hsla(199, 100%, 40%, 0.2) !important;
  --tag-border-color: hsla(199, 100%, 40%, 0.15) !important;
  --tag-border-color-hover: hsla(199, 100%, 40%, 0.15) !important;
  --tag-color: #2f8fb5 !important;
  --tag-color-hover: #2f8fb5 !important;
  --tertiary: #54b8e0 !important;
  --text-accent: #2f8fb5 !important;
  --text-accent-hover: #54b8e0 !important;
  --text-accent-visited: #2f8fb5 !important;
  --text-accent-visited-hover: #54b8e0 !important;
  --text-faint: #8a97a1 !important;
  --text-heading: #0b1a24 !important;
  --text-highlight-bg: #d9e7f0 !important;
  --text-muted: #5b6c78 !important;
  --text-normal: #10212d !important;
  --text-normal-rgb: 16, 33, 45 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #d9e7f0 !important;
  --textHighlight: #d9e7f0 !important;
  --titlebar-background: #ffffff !important;
  --titlebar-background-focused: #ffffff !important;
  --titlebar-border-color: #cdd7df !important;
  --titlebar-text-color: #5b6c78 !important;
  --titlebar-text-color-focused: #10212d !important;
  --vault-profile-color: #10212d !important;
  --vault-profile-color-hover: #10212d !important;
  --view-action-active-bg: #006fa6 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .canvas-node-file {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(247, 249, 251);
  border-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(205, 215, 223);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(0, 139, 204, 0.1);
  color: rgb(47, 143, 181);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 249, 251);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(217, 231, 240);
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body del {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(138, 151, 161);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 141, 201);
  border-color: rgb(0, 141, 201);
}

html[saved-theme="light"] body p {
  color: rgb(91, 108, 120);
  outline: rgb(91, 108, 120) none 0px;
  text-decoration-color: rgb(91, 108, 120);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration-color: rgb(47, 143, 181);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration-color: rgb(47, 143, 181);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration: underline rgba(0, 139, 204, 0.3);
  text-decoration-color: rgba(0, 139, 204, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body dt {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body ol > li {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body ul > li {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(47, 143, 181);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body table {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 95, 134);
  border-left-color: rgb(0, 95, 134);
  border-right-color: rgb(0, 95, 134);
  border-top-color: rgb(0, 95, 134);
  color: rgb(0, 95, 134);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(0, 110, 166);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 110, 166);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 110, 166);
  border-left-color: rgb(0, 110, 166);
  border-right-color: rgb(0, 110, 166);
  border-top-color: rgb(0, 110, 166);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body figcaption {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 244, 247);
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(0, 141, 201);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(138, 151, 161);
  border-left-color: rgb(138, 151, 161);
  border-right-color: rgb(138, 151, 161);
  border-top-color: rgb(138, 151, 161);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
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
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(217, 231, 240);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(217, 231, 240);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(217, 231, 240);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 139, 204, 0.1);
  border-bottom-color: rgba(0, 139, 204, 0.15);
  border-left-color: rgba(0, 139, 204, 0.15);
  border-right-color: rgba(0, 139, 204, 0.15);
  border-top-color: rgba(0, 139, 204, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(47, 143, 181);
}

html[saved-theme="light"] body h1 {
  color: rgb(11, 26, 36);
}

html[saved-theme="light"] body h2 {
  color: rgb(11, 26, 36);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 159, 219);
}

html[saved-theme="light"] body h3 {
  color: rgb(11, 26, 36);
}

html[saved-theme="light"] body h4 {
  color: rgb(11, 26, 36);
}

html[saved-theme="light"] body h5 {
  color: rgb(11, 26, 36);
}

html[saved-theme="light"] body h6 {
  color: rgb(11, 26, 36);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 123, 135);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 123, 135);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(16, 33, 45);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 143, 216);
  border-left-color: rgb(0, 143, 216);
  border-right-color: rgb(0, 143, 216);
  border-top-color: rgb(0, 143, 216);
  color: rgb(0, 143, 216);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(91, 108, 120);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 123, 135);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 123, 135);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(108, 123, 135);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 123, 135);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(0, 143, 216);
  border-left-color: rgb(0, 143, 216);
  border-right-color: rgb(0, 143, 216);
  border-top-color: rgb(0, 143, 216);
  color: rgb(0, 143, 216);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(0, 143, 216);
  stroke: rgb(0, 143, 216);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(138, 151, 161);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body abbr {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
  color: rgb(91, 108, 120);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(23, 38, 48);
  border-left-color: rgb(23, 38, 48);
  border-right-color: rgb(23, 38, 48);
  border-top-color: rgb(23, 38, 48);
  color: rgb(23, 38, 48);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

html[saved-theme="light"] body sub {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body summary {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body sup {
  color: rgb(16, 33, 45);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(0, 139, 204, 0.1);
  border-bottom-color: rgba(0, 139, 204, 0.15);
  border-left-color: rgba(0, 139, 204, 0.15);
  border-right-color: rgba(0, 139, 204, 0.15);
  border-top-color: rgba(0, 139, 204, 0.15);
  color: rgb(47, 143, 181);
}`,
  },
};
