import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sunbather",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["roboto"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #050505 !important;
  --background-secondary: #050505 !important;
  --background-secondary-alt: #050505 !important;
  --bases-cards-background: #050505 !important;
  --bases-table-cell-background-active: #050505 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81 !important;
  --bases-table-header-background: #050505 !important;
  --bases-table-summary-background: #050505 !important;
  --blockquote-border-color: #da5c81 !important;
  --canvas-background: #050505 !important;
  --canvas-card-label-color: #767676 !important;
  --caret-color: #d6d4d4 !important;
  --checkbox-border-color: #767676 !important;
  --checkbox-color: #da5c81 !important;
  --checkbox-marker-color: #050505 !important;
  --code-background: #131313 !important;
  --code-comment: #767676 !important;
  --code-constant: #d75f87 !important;
  --code-function: #d6d4d4 !important;
  --code-keyword: #767676 !important;
  --code-normal: #d6d4d4 !important;
  --code-operator: #d6d4d4 !important;
  --code-string: #da5c81 !important;
  --code-tag: #20BBFC !important;
  --code-url: #20BBFC !important;
  --code-value: #d6d4d4 !important;
  --collapse-icon-color: #767676 !important;
  --collapse-icon-color-collapsed: #d75f87 !important;
  --color-accent: #d75f87 !important;
  --dark: #d6d4d4 !important;
  --darkgray: #d6d4d4 !important;
  --divider-color-hover: #da5c81 !important;
  --embed-border-start: 2px solid #da5c81 !important;
  --file-header-background: #050505 !important;
  --file-header-background-focused: #050505 !important;
  --flair-color: #d6d4d4 !important;
  --footnote-id-color-no-occurrences: #767676 !important;
  --graph-node-focused: #d75f87 !important;
  --graph-node-unresolved: #767676 !important;
  --graph-text: #d6d4d4 !important;
  --gray: #767676 !important;
  --heading-formatting: #767676 !important;
  --icon-color-active: #d75f87 !important;
  --icon-color-focused: #d6d4d4 !important;
  --input-date-separator: #767676 !important;
  --input-placeholder-color: #767676 !important;
  --interactive-accent: #da5c81 !important;
  --interactive-before: #4E4E4E !important;
  --light: #050505 !important;
  --lightgray: #050505 !important;
  --link-color: #d75f87 !important;
  --link-external-color: #d75f87 !important;
  --link-unresolved-color: #d75f87 !important;
  --list-marker-color: #767676 !important;
  --list-marker-color-collapsed: #d75f87 !important;
  --menu-background: #050505 !important;
  --metadata-input-text-color: #d6d4d4 !important;
  --modal-background: #050505 !important;
  --nav-collapse-icon-color: #767676 !important;
  --nav-collapse-icon-color-collapsed: #767676 !important;
  --nav-heading-color: #d6d4d4 !important;
  --nav-heading-color-collapsed: #767676 !important;
  --nav-heading-color-hover: #d6d4d4 !important;
  --nav-item-background-active: #e25f86 !important;
  --nav-item-color-active: #262626 !important;
  --nav-item-color-highlighted: #d75f87 !important;
  --nav-item-color-hover: #d6d4d4 !important;
  --nav-item-color-selected: #d6d4d4 !important;
  --nav-tag-color: #767676 !important;
  --pdf-background: #050505 !important;
  --pdf-page-background: #050505 !important;
  --pdf-sidebar-background: #050505 !important;
  --pill-color-hover: #d6d4d4 !important;
  --pill-color-remove: #767676 !important;
  --pill-color-remove-hover: #d75f87 !important;
  --prompt-background: #050505 !important;
  --ribbon-background: #050505 !important;
  --ribbon-background-collapsed: #050505 !important;
  --scrollbar-bg: #0c0c0c !important;
  --search-result-background: #050505 !important;
  --secondary: #d75f87 !important;
  --setting-group-heading-color: #d6d4d4 !important;
  --status-bar-background: #050505 !important;
  --suggestion-background: #050505 !important;
  --tab-background-active: #050505 !important;
  --tab-container-background: #050505 !important;
  --tab-switcher-background: #050505 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #050505, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87 !important;
  --tab-text-color: #767676 !important;
  --tab-text-color-focused-active-current: #d6d4d4 !important;
  --tab-text-color-focused-highlighted: #d75f87 !important;
  --table-drag-handle-background-active: #da5c81 !important;
  --table-drag-handle-color: #767676 !important;
  --table-header-color: #d6d4d4 !important;
  --table-selection-border-color: #da5c81 !important;
  --tag-color: #d75f87 !important;
  --tag-color-hover: #d75f87 !important;
  --tertiary: #d75f87 !important;
  --text-accent: #d75f87 !important;
  --text-faint: #767676 !important;
  --text-normal: #d6d4d4 !important;
  --text-selection: #da5c8133 !important;
  --titlebar-background: #050505 !important;
  --titlebar-background-focused: #050505 !important;
  --titlebar-text-color-focused: #d6d4d4 !important;
  --vault-profile-color: #d6d4d4 !important;
  --vault-profile-color-hover: #d6d4d4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(5, 5, 5);
  color: rgb(214, 212, 212);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body del {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: line-through rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body p {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body dt {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(118, 118, 118);
  text-decoration: rgb(118, 118, 118);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body table {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body td {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body th {
  color: rgb(214, 212, 212);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 19, 19);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 19, 19);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(19, 19, 19);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(19, 19, 19);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 118);
  border-left-color: rgb(118, 118, 118);
  border-right-color: rgb(118, 118, 118);
  border-top-color: rgb(118, 118, 118);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(214, 212, 212);
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(5, 5, 5);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  color: rgb(214, 212, 212);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(214, 212, 212);
  outline: rgb(214, 212, 212) none 0px;
  text-decoration: rgb(214, 212, 212);
  text-decoration-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(5, 5, 5);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(215, 95, 135);
}

html[saved-theme="dark"] body h1 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h2 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h3 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h4 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h5 {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body h6 {
  color: rgb(214, 212, 212);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(5, 5, 5) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 5, 5);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(5, 5, 5);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(214, 212, 212);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(118, 118, 118);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(5, 5, 5);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body abbr {
  color: rgb(214, 212, 212);
  text-decoration: underline dotted rgb(214, 212, 212);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(214, 212, 212);
  border-left-color: rgb(214, 212, 212);
  border-right-color: rgb(214, 212, 212);
  border-top-color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body sub {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body summary {
  color: rgb(214, 212, 212);
}

html[saved-theme="dark"] body sup {
  color: rgb(214, 212, 212);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #FFFFFF !important;
  --background-secondary: #FFFFFF !important;
  --background-secondary-alt: #C6C6C6 !important;
  --bases-cards-background: #FFFFFF !important;
  --bases-table-cell-background-active: #FFFFFF !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #da5c81 !important;
  --bases-table-header-background: #FFFFFF !important;
  --bases-table-summary-background: #FFFFFF !important;
  --blockquote-border-color: #da5c81 !important;
  --blur-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --canvas-background: #FFFFFF !important;
  --canvas-card-label-color: #767676 !important;
  --caret-color: #262626 !important;
  --checkbox-border-color: #767676 !important;
  --checkbox-color: #da5c81 !important;
  --checkbox-marker-color: #FFFFFF !important;
  --code-background: #ecebeb !important;
  --code-comment: #767676 !important;
  --code-constant: #d75f87 !important;
  --code-function: #262626 !important;
  --code-keyword: #767676 !important;
  --code-normal: #262626 !important;
  --code-operator: #262626 !important;
  --code-string: #d75f87 !important;
  --code-tag: #005F87 !important;
  --code-url: #008EC4 !important;
  --code-value: #262626 !important;
  --collapse-icon-color: #767676 !important;
  --collapse-icon-color-collapsed: #d75f87 !important;
  --color-accent: #d75f87 !important;
  --dark: #262626 !important;
  --darkgray: #262626 !important;
  --divider-color-hover: #da5c81 !important;
  --embed-border-start: 2px solid #da5c81 !important;
  --file-header-background: #FFFFFF !important;
  --file-header-background-focused: #FFFFFF !important;
  --flair-color: #262626 !important;
  --footnote-id-color-no-occurrences: #767676 !important;
  --graph-node-focused: #d75f87 !important;
  --graph-node-unresolved: #767676 !important;
  --graph-text: #262626 !important;
  --gray: #767676 !important;
  --heading-formatting: #767676 !important;
  --icon-color-active: #d75f87 !important;
  --icon-color-focused: #262626 !important;
  --input-date-separator: #767676 !important;
  --input-placeholder-color: #767676 !important;
  --interactive-accent: #da5c81 !important;
  --interactive-before: #4E4E4E !important;
  --light: #FFFFFF !important;
  --lightgray: #FFFFFF !important;
  --link-color: #d75f87 !important;
  --link-external-color: #d75f87 !important;
  --link-unresolved-color: #d75f87 !important;
  --list-marker-color: #767676 !important;
  --list-marker-color-collapsed: #d75f87 !important;
  --menu-background: #FFFFFF !important;
  --metadata-input-text-color: #262626 !important;
  --modal-background: #FFFFFF !important;
  --nav-collapse-icon-color: #767676 !important;
  --nav-collapse-icon-color-collapsed: #767676 !important;
  --nav-heading-color: #262626 !important;
  --nav-heading-color-collapsed: #767676 !important;
  --nav-heading-color-hover: #262626 !important;
  --nav-item-background-active: #e25f86 !important;
  --nav-item-color-active: #EEEEEE !important;
  --nav-item-color-highlighted: #d75f87 !important;
  --nav-item-color-hover: #262626 !important;
  --nav-item-color-selected: #262626 !important;
  --nav-tag-color: #767676 !important;
  --pdf-background: #FFFFFF !important;
  --pdf-page-background: #FFFFFF !important;
  --pdf-sidebar-background: #FFFFFF !important;
  --pill-color-hover: #262626 !important;
  --pill-color-remove: #767676 !important;
  --pill-color-remove-hover: #d75f87 !important;
  --prompt-background: #FFFFFF !important;
  --raised-background: color-mix(in srgb, #FFFFFF 65%, transparent) linear-gradient(#FFFFFF, color-mix(in srgb, #FFFFFF 65%, transparent)) !important;
  --ribbon-background: #FFFFFF !important;
  --ribbon-background-collapsed: #FFFFFF !important;
  --scrollbar-bg: #EEEEEE !important;
  --search-result-background: #FFFFFF !important;
  --secondary: #d75f87 !important;
  --setting-group-heading-color: #262626 !important;
  --status-bar-background: #FFFFFF !important;
  --suggestion-background: #FFFFFF !important;
  --tab-background-active: #FFFFFF !important;
  --tab-container-background: #FFFFFF !important;
  --tab-switcher-background: #FFFFFF !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #FFFFFF, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #d75f87 !important;
  --tab-text-color: #767676 !important;
  --tab-text-color-focused-active-current: #262626 !important;
  --tab-text-color-focused-highlighted: #d75f87 !important;
  --table-drag-handle-background-active: #da5c81 !important;
  --table-drag-handle-color: #767676 !important;
  --table-header-color: #262626 !important;
  --table-selection-border-color: #da5c81 !important;
  --tag-color: #d75f87 !important;
  --tag-color-hover: #d75f87 !important;
  --tertiary: #d75f87 !important;
  --text-accent: #d75f87 !important;
  --text-faint: #767676 !important;
  --text-normal: #262626 !important;
  --text-selection: #da5c8133 !important;
  --titlebar-background: #FFFFFF !important;
  --titlebar-background-focused: #C6C6C6 !important;
  --titlebar-text-color-focused: #262626 !important;
  --vault-profile-color: #262626 !important;
  --vault-profile-color-hover: #262626 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(38, 38, 38);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body del {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: line-through rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body p {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
  text-decoration: underline rgb(215, 95, 135);
  text-decoration-color: rgb(215, 95, 135);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(215, 95, 135);
  outline: rgb(215, 95, 135) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body dt {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul > li {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(118, 118, 118);
  text-decoration: rgb(118, 118, 118);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body table {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body td {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body th {
  color: rgb(38, 38, 38);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(236, 235, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(236, 235, 235);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(236, 235, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(236, 235, 235);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figcaption {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(218, 92, 129);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(118, 118, 118);
  border-left-color: rgb(118, 118, 118);
  border-right-color: rgb(118, 118, 118);
  border-top-color: rgb(118, 118, 118);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(38, 38, 38);
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  color: rgb(38, 38, 38);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(38, 38, 38);
  outline: rgb(38, 38, 38) none 0px;
  text-decoration: rgb(38, 38, 38);
  text-decoration-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(215, 95, 135);
}

html[saved-theme="light"] body h1 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h2 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h3 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h4 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h5 {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body h6 {
  color: rgb(38, 38, 38);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(38, 38, 38);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell;
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(118, 118, 118);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body abbr {
  color: rgb(38, 38, 38);
  text-decoration: underline dotted rgb(38, 38, 38);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(236, 235, 235);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sub {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body summary {
  color: rgb(38, 38, 38);
}

html[saved-theme="light"] body sup {
  color: rgb(38, 38, 38);
}`,
  },
};
