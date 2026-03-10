import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "planetz-roller",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-form-field-highlighted: #3d4148 !important;
  --background-modifier-success-hover: #79e8bc !important;
  --background-primary: #33363c !important;
  --background-primary-alt: #383c42 !important;
  --background-primary-rgb: 58, 62, 69 !important;
  --background-secondary: #2f3237 !important;
  --background-secondary-alt: #36393f !important;
  --background-secondary-rgb: 67, 70, 76 !important;
  --bases-cards-background: #33363c !important;
  --bases-cards-cover-background: #383c42 !important;
  --bases-group-heading-property-color: #818c84 !important;
  --bases-table-cell-background-active: #33363c !important;
  --bases-table-cell-background-disabled: #383c42 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff6678 !important;
  --bases-table-group-background: #383c42 !important;
  --bases-table-header-background: #33363c !important;
  --bases-table-header-color: #818c84 !important;
  --bases-table-summary-background: #33363c !important;
  --blockquote-border: #88ddc1 !important;
  --blockquote-border-color: #ff6678 !important;
  --blur-background: color-mix(in srgb, #484c53 65%, transparent) linear-gradient(#484c53, color-mix(in srgb, #484c53 65%, transparent)) !important;
  --canvas-background: #33363c !important;
  --canvas-card-label-color: #5e6861 !important;
  --caret-color: #d2d9d4 !important;
  --checkbox-border-color: #5e6861 !important;
  --checkbox-border-color-hover: #818c84 !important;
  --checkbox-color: #ff6678 !important;
  --checkbox-color-hover: #ff7a8a !important;
  --checkbox-marker-color: #33363c !important;
  --checklist-done-color: #818c84 !important;
  --code-background: #383c42 !important;
  --code-comment: #5e6861 !important;
  --code-normal: #d2d9d4 !important;
  --code-punctuation: #818c84 !important;
  --collapse-icon-color: #5e6861 !important;
  --collapse-icon-color-collapsed: #88ddc1 !important;
  --dark: #d2d9d4 !important;
  --darkgray: #d2d9d4 !important;
  --divider-color: #494d55 !important;
  --divider-color-hover: #ff6678 !important;
  --dropdown-background: #484c53 !important;
  --dropdown-background-hover: #474b52 !important;
  --embed-background: #36393f !important;
  --embed-border: #494d55 !important;
  --embed-border-start: 2px solid #ff6678 !important;
  --file-header-background: #33363c !important;
  --file-header-background-focused: #33363c !important;
  --flair-background: #484c53 !important;
  --flair-color: #d2d9d4 !important;
  --footnote-id-color: #818c84 !important;
  --footnote-id-color-no-occurrences: #5e6861 !important;
  --graph-node: #818c84 !important;
  --graph-node-focused: #88ddc1 !important;
  --graph-node-unresolved: #5e6861 !important;
  --graph-text: #d2d9d4 !important;
  --gray: #818c84 !important;
  --heading-formatting: #5e6861 !important;
  --icon-color: #ff6678 !important;
  --icon-color-active: #ff6678 !important;
  --icon-color-focused: #ff7a8a !important;
  --icon-color-hover: #ff7a8a !important;
  --inline-title-color: #ff7a8a !important;
  --input-date-separator: #5e6861 !important;
  --input-placeholder-color: #5e6861 !important;
  --interactive-accent: #ff6678 !important;
  --interactive-accent-hover: #ff7a8a !important;
  --interactive-hover: #474b52 !important;
  --interactive-muted: #494d55 !important;
  --interactive-normal: #484c53 !important;
  --light: #33363c !important;
  --lightgray: #2f3237 !important;
  --link-color: #88ddc1 !important;
  --link-color-hover: #a9f8df !important;
  --link-external-color: #88ddc1 !important;
  --link-external-color-hover: #a9f8df !important;
  --link-unresolved-color: #88ddc1 !important;
  --list-marker-color: #5e6861 !important;
  --list-marker-color-collapsed: #88ddc1 !important;
  --list-marker-color-hover: #818c84 !important;
  --menu-background: #2f3237 !important;
  --metadata-input-text-color: #d2d9d4 !important;
  --metadata-label-text-color: #818c84 !important;
  --metadata-label-text-color-hover: #818c84 !important;
  --modal-background: #33363c !important;
  --modal-border: #494d55 !important;
  --nav-collapse-icon-color: #5e6861 !important;
  --nav-collapse-icon-color-collapsed: #5e6861 !important;
  --nav-file-title-color: #d2d9d4 !important;
  --nav-file-title-color-active: #f2f6f3 !important;
  --nav-folder-title-color: #d2d9d4 !important;
  --nav-heading-color: #d2d9d4 !important;
  --nav-heading-color-collapsed: #5e6861 !important;
  --nav-heading-color-collapsed-hover: #818c84 !important;
  --nav-heading-color-hover: #d2d9d4 !important;
  --nav-item-background-active: #3e4147 !important;
  --nav-item-background-hover: #34373c !important;
  --nav-item-background-selected: #3e4147 !important;
  --nav-item-color: #c45766 !important;
  --nav-item-color-active: #84ebc9 !important;
  --nav-item-color-highlighted: #88ddc1 !important;
  --nav-item-color-hover: #ff6678 !important;
  --nav-item-color-selected: #84ebc9 !important;
  --nav-item-color-selected-active: #84ebc9 !important;
  --nav-item-icon-color: #ff6678 !important;
  --nav-item-icon-color-hover: #ff7a8a !important;
  --nav-tag-color: #5e6861 !important;
  --nav-tag-color-active: #818c84 !important;
  --nav-tag-color-hover: #818c84 !important;
  --outline-item-color: #818c84 !important;
  --outline-item-color-active: #d2d9d4 !important;
  --pane-border-color: #494d55 !important;
  --pane-border-width: 1px !important;
  --pdf-background: #33363c !important;
  --pdf-page-background: #33363c !important;
  --pdf-sidebar-background: #33363c !important;
  --pill-color: #818c84 !important;
  --pill-color-hover: #d2d9d4 !important;
  --pill-color-remove: #5e6861 !important;
  --pill-color-remove-hover: #88ddc1 !important;
  --prompt-background: #33363c !important;
  --prompt-border: #494d55 !important;
  --raised-background: color-mix(in srgb, #484c53 65%, transparent) linear-gradient(#484c53, color-mix(in srgb, #484c53 65%, transparent)) !important;
  --ribbon-action-active-bg: #ff6678 !important;
  --ribbon-background: #32353b !important;
  --ribbon-background-collapsed: #33363c !important;
  --ribbon-background-hover: #3a3e45 !important;
  --search-clear-button-color: #818c84 !important;
  --search-icon-color: #818c84 !important;
  --search-result-background: #33363c !important;
  --secondary: #88ddc1 !important;
  --setting-group-heading-color: #d2d9d4 !important;
  --setting-items-background: #383c42 !important;
  --sidebar-background: #2b2d31 !important;
  --status-bar-background: #2f3237 !important;
  --status-bar-border-color: #494d55 !important;
  --status-bar-text-color: #818c84 !important;
  --suggestion-background: #33363c !important;
  --syntax-comment: #67736b !important;
  --syntax-constant: #9c82ff !important;
  --syntax-diff-changed: #f2c16f !important;
  --syntax-function: #d0c1ff !important;
  --syntax-invalid: #ff2f6f !important;
  --syntax-keyword: #ff6678 !important;
  --syntax-keyword-secondary: #ff7a8a !important;
  --syntax-markup-list-bullet: #ff6678 !important;
  --syntax-markup-text: #d2d9d4 !important;
  --syntax-property: #75e4c0 !important;
  --syntax-punctuation: #818c84 !important;
  --syntax-string: #cff075 !important;
  --syntax-variable: #88ddc1 !important;
  --tab-background-active: #33363c !important;
  --tab-container-background: #2f3237 !important;
  --tab-divider-color: #494d55 !important;
  --tab-outline-color: #494d55 !important;
  --tab-switcher-background: #2f3237 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f3237, transparent) !important;
  --tab-text-color: #5e6861 !important;
  --tab-text-color-active: #818c84 !important;
  --tab-text-color-focused: #818c84 !important;
  --tab-text-color-focused-active: #818c84 !important;
  --tab-text-color-focused-active-current: #d2d9d4 !important;
  --tab-text-color-focused-highlighted: #88ddc1 !important;
  --table-drag-handle-background-active: #ff6678 !important;
  --table-drag-handle-color: #5e6861 !important;
  --table-drag-handle-color-active: #101212 !important;
  --table-header-color: #d2d9d4 !important;
  --table-selection-border-color: #ff6678 !important;
  --tag-color: #88ddc1 !important;
  --tag-color-hover: #88ddc1 !important;
  --tertiary: #a9f8df !important;
  --text-accent: #88ddc1 !important;
  --text-accent-hover: #a9f8df !important;
  --text-accent-visited: #88ddc1 !important;
  --text-accent-visited-hover: #a9f8df !important;
  --text-faint: #5e6861 !important;
  --text-heading: #e4ebe6 !important;
  --text-muted: #818c84 !important;
  --text-normal: #d2d9d4 !important;
  --text-normal-rgb: 210, 217, 212 !important;
  --text-on-accent: #101212 !important;
  --titlebar-background: #32353b !important;
  --titlebar-background-focused: #32353b !important;
  --titlebar-text-color: #818c84 !important;
  --titlebar-text-color-focused: #d2d9d4 !important;
  --vault-profile-color: #d2d9d4 !important;
  --vault-profile-color-hover: #d2d9d4 !important;
  --view-action-active-bg: #ff6678 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(73, 77, 85);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 54, 60);
  border-left-color: rgb(73, 77, 85);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body del {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: line-through rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body p {
  color: rgb(129, 140, 132);
  outline: rgb(129, 140, 132) none 0px;
  text-decoration: rgb(129, 140, 132);
  text-decoration-color: rgb(129, 140, 132);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(136, 221, 193);
  outline: rgb(136, 221, 193) none 0px;
  text-decoration: underline rgb(136, 221, 193);
  text-decoration-color: rgb(136, 221, 193);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 221, 193);
  outline: rgb(136, 221, 193) none 0px;
  text-decoration: underline rgb(136, 221, 193);
  text-decoration-color: rgb(136, 221, 193);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(136, 221, 193);
  outline: rgb(136, 221, 193) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body dt {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(50, 53, 59);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(50, 53, 59);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(136, 221, 193);
  text-decoration: rgb(136, 221, 193);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body table {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body td {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body th {
  color: rgb(210, 217, 212);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 102, 120);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(255, 102, 120);
  border-top-color: rgb(255, 102, 120);
  color: rgb(255, 102, 120);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 60, 66);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 60, 66);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(208, 193, 255);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(208, 193, 255);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(208, 193, 255);
  border-left-color: rgb(208, 193, 255);
  border-right-color: rgb(208, 193, 255);
  border-top-color: rgb(208, 193, 255);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: rgb(56, 60, 66);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(56, 60, 66);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(56, 60, 66);
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .transclude {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .transclude-inner {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(129, 140, 132);
  text-decoration: line-through rgb(129, 140, 132);
  text-decoration-color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(94, 104, 97);
  border-left-color: rgb(94, 104, 97);
  border-right-color: rgb(94, 104, 97);
  border-top-color: rgb(94, 104, 97);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(51, 54, 60);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 50, 55);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(136, 221, 193);
}

html[saved-theme="dark"] body h1 {
  color: rgb(228, 235, 230);
}

html[saved-theme="dark"] body h2 {
  color: rgb(228, 235, 230);
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(255, 122, 138);
}

html[saved-theme="dark"] body h3 {
  color: rgb(228, 235, 230);
}

html[saved-theme="dark"] body h4 {
  color: rgb(228, 235, 230);
}

html[saved-theme="dark"] body h5 {
  color: rgb(228, 235, 230);
}

html[saved-theme="dark"] body h6 {
  color: rgb(228, 235, 230);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(73, 77, 85);
  border-left-color: rgb(73, 77, 85);
  border-right-color: rgb(73, 77, 85);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(62, 65, 71);
  border-bottom-color: rgb(132, 235, 201);
  border-left-color: rgb(132, 235, 201);
  border-right-color: rgb(132, 235, 201);
  border-top-color: rgb(132, 235, 201);
  color: rgb(132, 235, 201);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 102, 120);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(255, 102, 120);
  border-top-color: rgb(255, 102, 120);
  color: rgb(255, 102, 120);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(47, 50, 55);
  border-bottom-color: rgb(73, 77, 85);
  border-left-color: rgb(73, 77, 85);
  border-right-color: rgb(73, 77, 85);
  border-top-color: rgb(73, 77, 85);
  color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(129, 140, 132);
  text-decoration: rgb(129, 140, 132);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 217, 212);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(255, 102, 120);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(255, 102, 120);
  border-top-color: rgb(255, 102, 120);
  color: rgb(255, 102, 120);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 102, 120);
  stroke: rgb(255, 102, 120);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
  color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(94, 104, 97);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
  color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(47, 50, 55);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body abbr {
  color: rgb(210, 217, 212);
  text-decoration: underline dotted rgb(210, 217, 212);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
  color: rgb(129, 140, 132);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(56, 60, 66);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body sub {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body summary {
  color: rgb(210, 217, 212);
}

html[saved-theme="dark"] body sup {
  color: rgb(210, 217, 212);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 353 !important;
  --accent-l: 62% !important;
  --accent-s: 65% !important;
  --background-modifier-active-hover: #e7f2ee !important;
  --background-modifier-border: #c5d5c9 !important;
  --background-modifier-error: #ff5d70 !important;
  --background-modifier-error-hover: #ff7a8a !important;
  --background-modifier-form-field: #f6fbf7 !important;
  --background-modifier-form-field-highlighted: #e7f2ee !important;
  --background-modifier-form-field-hover: #f6fbf7 !important;
  --background-modifier-hover: #e7f2ee !important;
  --background-modifier-success: #79e8bc !important;
  --background-modifier-success-hover: #79e8bc !important;
  --background-primary: #f6fbf7 !important;
  --background-primary-alt: #f0f7f5 !important;
  --background-primary-rgb: 237, 250, 241 !important;
  --background-secondary: #f6fbf7 !important;
  --background-secondary-alt: #f0f7f5 !important;
  --background-secondary-rgb: 228, 243, 234 !important;
  --bases-cards-background: #f6fbf7 !important;
  --bases-cards-cover-background: #f0f7f5 !important;
  --bases-cards-shadow: 0 0 0 1px #c5d5c9 !important;
  --bases-embed-border-color: #c5d5c9 !important;
  --bases-group-heading-property-color: #6e7972 !important;
  --bases-table-border-color: #c5d5c9 !important;
  --bases-table-cell-background-active: #f6fbf7 !important;
  --bases-table-cell-background-disabled: #f0f7f5 !important;
  --bases-table-cell-background-selected: rgba(221, 95, 110, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff5d70 !important;
  --bases-table-group-background: #f0f7f5 !important;
  --bases-table-header-background: #f6fbf7 !important;
  --bases-table-header-background-hover: #e7f2ee !important;
  --bases-table-header-color: #6e7972 !important;
  --bases-table-summary-background: #f6fbf7 !important;
  --bases-table-summary-background-hover: #e7f2ee !important;
  --blockquote-border: #20c093 !important;
  --blockquote-border-color: #ff5d70 !important;
  --blur-background: color-mix(in srgb, #f6fbf7 65%, transparent) linear-gradient(#f6fbf7, color-mix(in srgb, #f6fbf7 65%, transparent)) !important;
  --canvas-background: #f6fbf7 !important;
  --canvas-card-label-color: #8b978f !important;
  --caret-color: #3f4642 !important;
  --checkbox-border-color: #8b978f !important;
  --checkbox-border-color-hover: #6e7972 !important;
  --checkbox-color: #ff5d70 !important;
  --checkbox-color-hover: #ff7a8a !important;
  --checkbox-marker-color: #f6fbf7 !important;
  --checklist-done-color: #6e7972 !important;
  --code-background: #e7f2ee !important;
  --code-border-color: #c5d5c9 !important;
  --code-bracket-background: #e7f2ee !important;
  --code-comment: #8b978f !important;
  --code-normal: #3f4642 !important;
  --code-punctuation: #6e7972 !important;
  --collapse-icon-color: #8b978f !important;
  --collapse-icon-color-collapsed: #3cb68c !important;
  --color-accent: rgb(221, 95, 110) !important;
  --color-accent-1: rgb(226, 115, 130) !important;
  --color-accent-2: rgb(230, 132, 149) !important;
  --color-accent-hsl: 353, 65%, 62% !important;
  --dark: #3f4642 !important;
  --darkgray: #3f4642 !important;
  --divider-color: #c5d5c9 !important;
  --divider-color-hover: #ff5d70 !important;
  --dropdown-background: #e2efe6 !important;
  --dropdown-background-hover: #e7f2ee !important;
  --embed-background: #f0f7f5 !important;
  --embed-block-shadow-hover: 0 0 0 1px #c5d5c9, inset 0 0 0 1px #c5d5c9 !important;
  --embed-border: #c5d5c9 !important;
  --embed-border-start: 2px solid #ff5d70 !important;
  --file-header-background: #f6fbf7 !important;
  --file-header-background-focused: #f6fbf7 !important;
  --flair-background: #e2efe6 !important;
  --flair-color: #3f4642 !important;
  --footnote-divider-color: #c5d5c9 !important;
  --footnote-id-color: #6e7972 !important;
  --footnote-id-color-no-occurrences: #8b978f !important;
  --footnote-input-background-active: #e7f2ee !important;
  --graph-node: #6e7972 !important;
  --graph-node-focused: #3cb68c !important;
  --graph-node-unresolved: #8b978f !important;
  --graph-text: #3f4642 !important;
  --gray: #6e7972 !important;
  --heading-formatting: #8b978f !important;
  --highlight: #e7f2ee !important;
  --hr-color: #c5d5c9 !important;
  --icon-color: #ff5d70 !important;
  --icon-color-active: #ff5d70 !important;
  --icon-color-focused: #ff7a8a !important;
  --icon-color-hover: #ff7a8a !important;
  --inline-title-color: #ff7a8a !important;
  --input-date-separator: #8b978f !important;
  --input-placeholder-color: #8b978f !important;
  --interactive-accent: #ff5d70 !important;
  --interactive-accent-hover: #ff7a8a !important;
  --interactive-accent-hsl: 353, 65%, 62% !important;
  --interactive-hover: #e7f2ee !important;
  --interactive-muted: #c5d5c9 !important;
  --interactive-normal: #e2efe6 !important;
  --light: #f6fbf7 !important;
  --lightgray: #f6fbf7 !important;
  --link-color: #3cb68c !important;
  --link-color-hover: #82e0c4 !important;
  --link-external-color: #3cb68c !important;
  --link-external-color-hover: #82e0c4 !important;
  --link-unresolved-color: #3cb68c !important;
  --link-unresolved-decoration-color: rgba(221, 95, 110, 0.3) !important;
  --list-marker-color-collapsed: #3cb68c !important;
  --list-marker-color-hover: #6e7972 !important;
  --menu-background: #f6fbf7 !important;
  --metadata-border-color: #c5d5c9 !important;
  --metadata-divider-color: #c5d5c9 !important;
  --metadata-input-background-active: #e7f2ee !important;
  --metadata-input-text-color: #3f4642 !important;
  --metadata-label-background-active: #e7f2ee !important;
  --metadata-label-text-color: #6e7972 !important;
  --metadata-label-text-color-hover: #6e7972 !important;
  --metadata-property-background-active: #e7f2ee !important;
  --modal-background: #f0f7f5 !important;
  --modal-border: #c5d5c9 !important;
  --modal-border-color: #c5d5c9 !important;
  --nav-collapse-icon-color: #8b978f !important;
  --nav-collapse-icon-color-collapsed: #8b978f !important;
  --nav-file-title-color: #3f4642 !important;
  --nav-file-title-color-active: #101411 !important;
  --nav-folder-title-color: #3f4642 !important;
  --nav-heading-color: #3f4642 !important;
  --nav-heading-color-collapsed: #8b978f !important;
  --nav-heading-color-collapsed-hover: #6e7972 !important;
  --nav-heading-color-hover: #3f4642 !important;
  --nav-item-background-active: #f0f7f5 !important;
  --nav-item-background-hover: #f0f7f5 !important;
  --nav-item-background-selected: #f0f7f5 !important;
  --nav-item-color: #3f4642 !important;
  --nav-item-color-active: #20c093 !important;
  --nav-item-color-highlighted: #3cb68c !important;
  --nav-item-color-hover: #ff5d70 !important;
  --nav-item-color-selected: #20c093 !important;
  --nav-item-color-selected-active: #20c093 !important;
  --nav-item-icon-color: #ff5d70 !important;
  --nav-item-icon-color-hover: #ff7a8a !important;
  --nav-tag-color: #8b978f !important;
  --nav-tag-color-active: #6e7972 !important;
  --nav-tag-color-hover: #6e7972 !important;
  --outline-item-color: #6e7972 !important;
  --outline-item-color-active: #3f4642 !important;
  --pane-border-color: #c5d5c9 !important;
  --pane-border-width: 1px !important;
  --pdf-background: #f6fbf7 !important;
  --pdf-page-background: #f6fbf7 !important;
  --pdf-sidebar-background: #f6fbf7 !important;
  --pill-border-color: #c5d5c9 !important;
  --pill-color: #6e7972 !important;
  --pill-color-hover: #3f4642 !important;
  --pill-color-remove: #8b978f !important;
  --pill-color-remove-hover: #3cb68c !important;
  --prompt-background: #f0f7f5 !important;
  --prompt-border: #c5d5c9 !important;
  --prompt-border-color: #c5d5c9 !important;
  --raised-background: color-mix(in srgb, #f6fbf7 65%, transparent) linear-gradient(#f6fbf7, color-mix(in srgb, #f6fbf7 65%, transparent)) !important;
  --ribbon-action-active-bg: #17c7a4 !important;
  --ribbon-background: #f6fbf7 !important;
  --ribbon-background-collapsed: #f6fbf7 !important;
  --ribbon-background-hover: #f0f7f5 !important;
  --search-clear-button-color: #6e7972 !important;
  --search-icon-color: #6e7972 !important;
  --search-result-background: #f6fbf7 !important;
  --secondary: #3cb68c !important;
  --setting-group-heading-color: #3f4642 !important;
  --setting-items-background: #f0f7f5 !important;
  --setting-items-border-color: #c5d5c9 !important;
  --sidebar-background: #f6fbf7 !important;
  --slider-track-background: #c5d5c9 !important;
  --status-bar-background: #f6fbf7 !important;
  --status-bar-border-color: #c5d5c9 !important;
  --status-bar-text-color: #6e7972 !important;
  --suggestion-background: #f6fbf7 !important;
  --syntax-comment: #8d9990 !important;
  --syntax-constant: #6e59f8 !important;
  --syntax-diff-changed: #d1df52 !important;
  --syntax-function: #9278ff !important;
  --syntax-invalid: #b3184c !important;
  --syntax-keyword: #ff6b82 !important;
  --syntax-keyword-secondary: #e9556b !important;
  --syntax-markup-list-bullet: #ff6678 !important;
  --syntax-markup-text: #3f4642 !important;
  --syntax-property: #20c093 !important;
  --syntax-punctuation: #738077 !important;
  --syntax-string: #6aba0e !important;
  --syntax-variable: #20c093 !important;
  --tab-background-active: #f6fbf7 !important;
  --tab-container-background: #f6fbf7 !important;
  --tab-divider-color: #c5d5c9 !important;
  --tab-outline-color: #c5d5c9 !important;
  --tab-switcher-background: #f6fbf7 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6fbf7, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(221, 95, 110) !important;
  --tab-text-color: #8b978f !important;
  --tab-text-color-active: #6e7972 !important;
  --tab-text-color-focused: #6e7972 !important;
  --tab-text-color-focused-active: #6e7972 !important;
  --tab-text-color-focused-active-current: #3f4642 !important;
  --tab-text-color-focused-highlighted: #3cb68c !important;
  --table-add-button-border-color: #c5d5c9 !important;
  --table-border-color: #c5d5c9 !important;
  --table-drag-handle-background-active: #ff5d70 !important;
  --table-drag-handle-color: #8b978f !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #c5d5c9 !important;
  --table-header-color: #3f4642 !important;
  --table-selection: rgba(221, 95, 110, 0.1) !important;
  --table-selection-border-color: #ff5d70 !important;
  --tag-background: rgba(221, 95, 110, 0.1) !important;
  --tag-background-hover: rgba(221, 95, 110, 0.2) !important;
  --tag-border-color: rgba(221, 95, 110, 0.15) !important;
  --tag-border-color-hover: rgba(221, 95, 110, 0.15) !important;
  --tag-color: #3cb68c !important;
  --tag-color-hover: #3cb68c !important;
  --tertiary: #82e0c4 !important;
  --text-accent: #3cb68c !important;
  --text-accent-hover: #82e0c4 !important;
  --text-accent-visited: #3cb68c !important;
  --text-accent-visited-hover: #82e0c4 !important;
  --text-faint: #8b978f !important;
  --text-heading: #1f2521 !important;
  --text-highlight-bg: #e7f2ee !important;
  --text-muted: #6e7972 !important;
  --text-normal: #3f4642 !important;
  --text-normal-rgb: 63, 70, 66 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #e7f2ee !important;
  --textHighlight: #e7f2ee !important;
  --titlebar-background: #f6fbf7 !important;
  --titlebar-background-focused: #f6fbf7 !important;
  --titlebar-border-color: #c5d5c9 !important;
  --titlebar-text-color: #6e7972 !important;
  --titlebar-text-color-focused: #3f4642 !important;
  --vault-profile-color: #3f4642 !important;
  --vault-profile-color-hover: #3f4642 !important;
  --view-action-active-bg: #ff5d70 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 251, 247);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(231, 242, 238);
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body del {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: line-through rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body p {
  color: rgb(110, 121, 114);
  outline: rgb(110, 121, 114) none 0px;
  text-decoration: rgb(110, 121, 114);
  text-decoration-color: rgb(110, 121, 114);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(60, 182, 140);
  outline: rgb(60, 182, 140) none 0px;
  text-decoration: underline rgb(60, 182, 140);
  text-decoration-color: rgb(60, 182, 140);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(60, 182, 140);
  outline: rgb(60, 182, 140) none 0px;
  text-decoration: underline rgb(60, 182, 140);
  text-decoration-color: rgb(60, 182, 140);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(60, 182, 140);
  outline: rgb(60, 182, 140) none 0px;
  text-decoration: underline rgba(221, 95, 110, 0.3);
  text-decoration-color: rgba(221, 95, 110, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body dt {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body ol > li {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body ol.overflow {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body ul > li {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(60, 182, 140);
  text-decoration: rgb(60, 182, 140);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body table {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(255, 107, 130);
  border-left-color: rgb(255, 107, 130);
  border-right-color: rgb(255, 107, 130);
  border-top-color: rgb(255, 107, 130);
  color: rgb(255, 107, 130);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(146, 120, 255);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(146, 120, 255);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(146, 120, 255);
  border-left-color: rgb(146, 120, 255);
  border-right-color: rgb(146, 120, 255);
  border-top-color: rgb(146, 120, 255);
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body figcaption {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .transclude {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .transclude-inner {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 121, 114);
  text-decoration: line-through rgb(110, 121, 114);
  text-decoration-color: rgb(110, 121, 114);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(139, 151, 143);
  border-left-color: rgb(139, 151, 143);
  border-right-color: rgb(139, 151, 143);
  border-top-color: rgb(139, 151, 143);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(231, 242, 238);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 251, 247);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(231, 242, 238);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(221, 95, 110, 0.1);
  border-bottom-color: rgba(221, 95, 110, 0.15);
  border-left-color: rgba(221, 95, 110, 0.15);
  border-right-color: rgba(221, 95, 110, 0.15);
  border-top-color: rgba(221, 95, 110, 0.15);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(60, 182, 140);
}

html[saved-theme="light"] body h1 {
  color: rgb(31, 37, 33);
}

html[saved-theme="light"] body h2 {
  color: rgb(31, 37, 33);
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(255, 122, 138);
}

html[saved-theme="light"] body h3 {
  color: rgb(31, 37, 33);
}

html[saved-theme="light"] body h4 {
  color: rgb(31, 37, 33);
}

html[saved-theme="light"] body h5 {
  color: rgb(31, 37, 33);
}

html[saved-theme="light"] body h6 {
  color: rgb(31, 37, 33);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(32, 192, 147);
  border-left-color: rgb(32, 192, 147);
  border-right-color: rgb(32, 192, 147);
  border-top-color: rgb(32, 192, 147);
  color: rgb(32, 192, 147);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 93, 112);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(255, 93, 112);
  border-top-color: rgb(255, 93, 112);
  color: rgb(255, 93, 112);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(110, 121, 114);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(110, 121, 114);
  text-decoration: rgb(110, 121, 114);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 70, 66);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(255, 93, 112);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(255, 93, 112);
  border-top-color: rgb(255, 93, 112);
  color: rgb(255, 93, 112);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(255, 93, 112);
  stroke: rgb(255, 93, 112);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
  color: rgb(110, 121, 114);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(139, 151, 143);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(110, 121, 114);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
  color: rgb(110, 121, 114);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(246, 251, 247);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body abbr {
  color: rgb(63, 70, 66);
  text-decoration: underline dotted rgb(63, 70, 66);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
  color: rgb(110, 121, 114);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

html[saved-theme="light"] body sub {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body summary {
  color: rgb(63, 70, 66);
}

html[saved-theme="light"] body sup {
  color: rgb(63, 70, 66);
}`,
  },
};
