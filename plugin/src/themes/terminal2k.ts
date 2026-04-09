import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "terminal2k",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #111111 !important;
  --background-primary-alt: #141715 !important;
  --background-secondary: #141715 !important;
  --background-secondary-alt: #141715 !important;
  --bar-color: #002922 !important;
  --bases-cards-background: #111111 !important;
  --bases-cards-cover-background: #141715 !important;
  --bases-table-cell-background-active: #111111 !important;
  --bases-table-cell-background-disabled: #141715 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00e077 !important;
  --bases-table-group-background: #141715 !important;
  --bases-table-header-background: #111111 !important;
  --bases-table-summary-background: #111111 !important;
  --black: #111111 !important;
  --black-light: #131a16 !important;
  --black-light-light: #1f1f1f !important;
  --black-mid: #141715 !important;
  --blockquote-border-color: #00e077 !important;
  --blockquote-border-thickness: 5px !important;
  --bold-color: #00ad65 !important;
  --canvas-background: #111111 !important;
  --caret-color: #FFFFFF !important;
  --checkbox-color: #00e077 !important;
  --checkbox-marker-color: #111111 !important;
  --checklist-done-color: #7f7f7f !important;
  --checklist-done-decoration: none !important;
  --code-background: #141715 !important;
  --code-builtin-color: #00e077 !important;
  --code-comment-color: #004c29 !important;
  --code-function-color: #00ad65 !important;
  --code-normal: #FFFFFF !important;
  --code-operator-color: #00e077 !important;
  --code-string-color: #00ad65 !important;
  --code-text-size: 0.9rem !important;
  --code-text-size-header: 0.9em !important;
  --code-variable-color: #FFFFFF !important;
  --codeblock-background: #131a16 !important;
  --codeblock-color: #F5F5F5 !important;
  --collapse-icon-color-collapsed: #00e077 !important;
  --color-accent: #00ff80 !important;
  --dark: #FFFFFF !important;
  --darkgray: #FFFFFF !important;
  --divider-color: #002922 !important;
  --divider-color-hover: #00e077 !important;
  --embed-border-start: 2px solid #00e077 !important;
  --file-header-background: #111111 !important;
  --file-header-background-focused: #111111 !important;
  --file-line-width: 800px !important;
  --file-title-color: #EBEBEB !important;
  --flair-color: #FFFFFF !important;
  --folder-filter: invert(52%) sepia(95%) saturate(856%) hue-rotate(67deg) brightness(118%) contrast(117%) !important;
  --folder-title-color: #EBEBEB !important;
  --graph-node-focused: #00e077 !important;
  --graph-text: #FFFFFF !important;
  --gray: #FFFFFF !important;
  --green-bright: #00e077 !important;
  --green-bright-bright: #00ff80 !important;
  --green-bright-dark: #00af6c !important;
  --green-dark: #004c29 !important;
  --green-darker: #002922 !important;
  --green-forest: #00ad65 !important;
  --green-light: #e4fff6 !important;
  --green-mid: #c9ffe6 !important;
  --green-mid-mid: #99cca7 !important;
  --grey: #EBEBEB !important;
  --grey-dark: #7f7f7f !important;
  --grey-light: #FAFAFA !important;
  --grey-mid: #F5F5F5 !important;
  --h1-color: #00ad65 !important;
  --h2-color: #00ad65 !important;
  --h3-color: #00ad65 !important;
  --h4-color: #00ad65 !important;
  --h5-color: #00ad65 !important;
  --h6-color: #00ad65 !important;
  --hashtag-background: #002922 !important;
  --hashtag-color: #00e077 !important;
  --highlight-color: #00ad65 !important;
  --hr-height: 0.15em !important;
  --hr-thickness: 0.15em !important;
  --icon-color-active: #00e077 !important;
  --icon-color-focused: #FFFFFF !important;
  --inline-code-background: #131A16 !important;
  --inline-code-color: #00e077 !important;
  --inline-title-color: #00ad65 !important;
  --interactive-accent: #00e077 !important;
  --light: #111111 !important;
  --lightgray: #141715 !important;
  --line-width: 800px !important;
  --link-color: #00e077 !important;
  --link-external-color: #00e077 !important;
  --link-unresolved-color: #00e077 !important;
  --links-color: #00e077 !important;
  --list-marker-color-collapsed: #00e077 !important;
  --menu-background: #141715 !important;
  --metadata-input-text-color: #FFFFFF !important;
  --modal-background: #111111 !important;
  --nav-heading-color: #FFFFFF !important;
  --nav-heading-color-hover: #FFFFFF !important;
  --nav-item-color-active: #FFFFFF !important;
  --nav-item-color-highlighted: #00e077 !important;
  --nav-item-color-hover: #FFFFFF !important;
  --nav-item-color-selected: #FFFFFF !important;
  --pdf-background: #111111 !important;
  --pdf-page-background: #111111 !important;
  --pdf-sidebar-background: #111111 !important;
  --pill-color-hover: #FFFFFF !important;
  --pill-color-remove-hover: #00e077 !important;
  --prompt-background: #111111 !important;
  --quote-background: #131a16 !important;
  --ribbon-background: #141715 !important;
  --ribbon-background-collapsed: #111111 !important;
  --search-result-background: #111111 !important;
  --secondary: #00e077 !important;
  --setting-group-heading-color: #FFFFFF !important;
  --setting-items-background: #141715 !important;
  --status-bar-background: #141715 !important;
  --status-bar-border-color: #002922 !important;
  --suggestion-background: #111111 !important;
  --tab-background-active: #111111 !important;
  --tab-container-background: #141715 !important;
  --tab-divider-color: #002922 !important;
  --tab-outline-color: #002922 !important;
  --tab-switcher-background: #141715 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141715, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #00ff80 !important;
  --tab-text-color-focused-active-current: #FFFFFF !important;
  --tab-text-color-focused-highlighted: #00e077 !important;
  --table-drag-handle-background-active: #00e077 !important;
  --table-header-color: #FFFFFF !important;
  --table-selection-border-color: #00e077 !important;
  --tag-color: #00e077 !important;
  --tag-color-hover: #00e077 !important;
  --tertiary: #00e077 !important;
  --text-accent: #00e077 !important;
  --text-normal: #FFFFFF !important;
  --titlebar-background: #141715 !important;
  --titlebar-background-focused: #141715 !important;
  --titlebar-text-color-focused: #FFFFFF !important;
  --underline-line-color: #00e077 !important;
  --vault-profile-color: #FFFFFF !important;
  --vault-profile-color-hover: #FFFFFF !important;
  --white: #FFFFFF !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 23, 21);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(20, 23, 21);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(0, 224, 119);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 23, 21);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 41, 34);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 23, 21);
  border-left-color: rgb(0, 41, 34);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(255, 255, 255);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration-color: rgb(0, 173, 101);
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
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration-color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(0, 173, 101);
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

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 224, 119);
  border-color: rgb(0, 224, 119);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 224, 119);
  outline: rgb(0, 224, 119) none 0px;
  text-decoration-color: rgb(0, 224, 119);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
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
    blockquotes: `html[saved-theme="dark"] body blockquote {
  background-color: rgb(19, 26, 22);
  padding-bottom: 6.08px;
  padding-top: 4.56px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 255, 255);
  margin-left: 268.391px;
  margin-right: 268.391px;
}

html[saved-theme="dark"] body td {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body th {
  color: rgb(255, 255, 255);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(19, 26, 22);
  border-bottom-color: rgb(19, 26, 22);
  border-bottom-left-radius: 4.32px;
  border-bottom-right-radius: 4.32px;
  border-left-color: rgb(19, 26, 22);
  border-right-color: rgb(19, 26, 22);
  border-top-color: rgb(19, 26, 22);
  border-top-left-radius: 4.32px;
  border-top-right-radius: 4.32px;
  color: rgb(245, 245, 245);
  padding-bottom: 0.8px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 0.8px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 26, 22);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 26, 22);
  color: rgb(245, 245, 245);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 173, 101);
  border-left-color: rgb(0, 173, 101);
  border-right-color: rgb(0, 173, 101);
  border-top-color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(19, 26, 22);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(19, 26, 22);
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
  border-bottom-color: rgb(0, 173, 101);
  border-left-color: rgb(0, 173, 101);
  border-right-color: rgb(0, 173, 101);
  border-top-color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(20, 23, 21);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(0, 224, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
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
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 23, 21);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
  color: rgb(0, 224, 119);
}

html[saved-theme="dark"] body h1 {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body h2 {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body h3 {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body h4 {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body h5 {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body h6 {
  color: rgb(0, 173, 101);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(0, 41, 34);
  border-left-color: rgb(0, 41, 34);
  border-right-color: rgb(0, 41, 34);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 255, 255);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(20, 23, 21);
  border-bottom-color: rgb(0, 41, 34);
  border-left-color: rgb(0, 41, 34);
  border-right-color: rgb(0, 41, 34);
  border-top-color: rgb(0, 41, 34);
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

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 235, 235);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(235, 235, 235);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(20, 23, 21);
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

html[saved-theme="dark"] body kbd {
  background-color: rgb(20, 23, 21);
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
  background-color: rgb(0, 41, 34);
  color: rgb(0, 224, 119);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #FAFAFA !important;
  --background-primary-alt: #F5F5F5 !important;
  --background-secondary: #F5F5F5 !important;
  --background-secondary-alt: #F5F5F5 !important;
  --bar-color: #99cca7 !important;
  --bases-cards-background: #FAFAFA !important;
  --bases-cards-cover-background: #F5F5F5 !important;
  --bases-table-cell-background-active: #FAFAFA !important;
  --bases-table-cell-background-disabled: #F5F5F5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00e077 !important;
  --bases-table-group-background: #F5F5F5 !important;
  --bases-table-header-background: #FAFAFA !important;
  --bases-table-summary-background: #FAFAFA !important;
  --black: #111111 !important;
  --black-light: #131a16 !important;
  --black-light-light: #1f1f1f !important;
  --black-mid: #141715 !important;
  --blockquote-border-color: #00e077 !important;
  --blockquote-border-thickness: 5px !important;
  --blur-background: color-mix(in srgb, #FAFAFA 65%, transparent) linear-gradient(#FAFAFA, color-mix(in srgb, #FAFAFA 65%, transparent)) !important;
  --bold-color: #00ad65 !important;
  --canvas-background: #FAFAFA !important;
  --caret-color: #1f1f1f !important;
  --checkbox-color: #00e077 !important;
  --checkbox-marker-color: #FAFAFA !important;
  --checklist-done-color: #7f7f7f !important;
  --checklist-done-decoration: none !important;
  --code-background: #F5F5F5 !important;
  --code-builtin-color: #00ad65 !important;
  --code-comment-color: #7f7f7f !important;
  --code-function-color: #00ad65 !important;
  --code-normal: #1f1f1f !important;
  --code-operator-color: #00ad65 !important;
  --code-string-color: #7f7f7f !important;
  --code-text-size: 0.9rem !important;
  --code-text-size-header: 0.9em !important;
  --code-variable-color: #1f1f1f !important;
  --codeblock-background: #EBEBEB !important;
  --codeblock-color: #131a16 !important;
  --collapse-icon-color-collapsed: #00e077 !important;
  --color-accent: #00e077 !important;
  --dark: #1f1f1f !important;
  --darkgray: #1f1f1f !important;
  --divider-color: #99cca7 !important;
  --divider-color-hover: #00e077 !important;
  --embed-border-start: 2px solid #00e077 !important;
  --file-header-background: #FAFAFA !important;
  --file-header-background-focused: #FAFAFA !important;
  --file-line-width: 800px !important;
  --file-title-color: #1f1f1f !important;
  --flair-color: #1f1f1f !important;
  --folder-filter: invert(52%) sepia(95%) saturate(856%) hue-rotate(67deg) brightness(118%) contrast(117%) !important;
  --folder-title-color: #1f1f1f !important;
  --graph-node-focused: #00e077 !important;
  --graph-text: #1f1f1f !important;
  --gray: #1f1f1f !important;
  --green-bright: #00e077 !important;
  --green-bright-bright: #00ff80 !important;
  --green-bright-dark: #00af6c !important;
  --green-dark: #004c29 !important;
  --green-darker: #002922 !important;
  --green-forest: #00ad65 !important;
  --green-light: #e4fff6 !important;
  --green-mid: #c9ffe6 !important;
  --green-mid-mid: #99cca7 !important;
  --grey: #EBEBEB !important;
  --grey-dark: #7f7f7f !important;
  --grey-light: #FAFAFA !important;
  --grey-mid: #F5F5F5 !important;
  --h1-color: #00ad65 !important;
  --h2-color: #00ad65 !important;
  --h3-color: #00ad65 !important;
  --h4-color: #00ad65 !important;
  --h5-color: #00ad65 !important;
  --h6-color: #00ad65 !important;
  --hashtag-background: #EBEBEB !important;
  --hashtag-color: #00ad65 !important;
  --highlight-color: #c9ffe6 !important;
  --hr-height: 0.15em !important;
  --hr-thickness: 0.15em !important;
  --icon-color-active: #00e077 !important;
  --icon-color-focused: #1f1f1f !important;
  --inline-code-background: #EBEBEB !important;
  --inline-code-color: #00ad65 !important;
  --inline-title-color: #00ad65 !important;
  --interactive-accent: #00e077 !important;
  --light: #FAFAFA !important;
  --lightgray: #F5F5F5 !important;
  --line-width: 800px !important;
  --link-color: #00ad65 !important;
  --link-external-color: #00e077 !important;
  --link-unresolved-color: #00e077 !important;
  --links-color: #00ad65 !important;
  --list-marker-color-collapsed: #00e077 !important;
  --menu-background: #F5F5F5 !important;
  --metadata-input-text-color: #1f1f1f !important;
  --modal-background: #FAFAFA !important;
  --nav-heading-color: #1f1f1f !important;
  --nav-heading-color-hover: #1f1f1f !important;
  --nav-item-color-active: #1f1f1f !important;
  --nav-item-color-highlighted: #00e077 !important;
  --nav-item-color-hover: #1f1f1f !important;
  --nav-item-color-selected: #1f1f1f !important;
  --pdf-background: #FAFAFA !important;
  --pdf-page-background: #FAFAFA !important;
  --pdf-sidebar-background: #FAFAFA !important;
  --pill-color-hover: #1f1f1f !important;
  --pill-color-remove-hover: #00e077 !important;
  --prompt-background: #FAFAFA !important;
  --quote-background: #EBEBEB !important;
  --raised-background: color-mix(in srgb, #FAFAFA 65%, transparent) linear-gradient(#FAFAFA, color-mix(in srgb, #FAFAFA 65%, transparent)) !important;
  --ribbon-background: #F5F5F5 !important;
  --ribbon-background-collapsed: #FAFAFA !important;
  --search-result-background: #FAFAFA !important;
  --secondary: #00e077 !important;
  --setting-group-heading-color: #1f1f1f !important;
  --setting-items-background: #F5F5F5 !important;
  --status-bar-background: #F5F5F5 !important;
  --status-bar-border-color: #99cca7 !important;
  --suggestion-background: #FAFAFA !important;
  --tab-background-active: #FAFAFA !important;
  --tab-container-background: #F5F5F5 !important;
  --tab-divider-color: #99cca7 !important;
  --tab-outline-color: #99cca7 !important;
  --tab-switcher-background: #F5F5F5 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F5F5F5, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #00e077 !important;
  --tab-text-color-focused-active-current: #1f1f1f !important;
  --tab-text-color-focused-highlighted: #00e077 !important;
  --table-drag-handle-background-active: #00e077 !important;
  --table-header-color: #1f1f1f !important;
  --table-selection-border-color: #00e077 !important;
  --tag-color: #00e077 !important;
  --tag-color-hover: #00e077 !important;
  --tertiary: #00e077 !important;
  --text-accent: #00e077 !important;
  --text-normal: #1f1f1f !important;
  --titlebar-background: #F5F5F5 !important;
  --titlebar-background-focused: #F5F5F5 !important;
  --titlebar-text-color-focused: #1f1f1f !important;
  --underline-line-color: #00e077 !important;
  --vault-profile-color: #1f1f1f !important;
  --vault-profile-color-hover: #1f1f1f !important;
  --white: #FFFFFF !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 250, 250);
  border-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(0, 224, 119);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(153, 204, 167);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(153, 204, 167);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(31, 31, 31);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(201, 255, 230);
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body del {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 224, 119);
  border-color: rgb(0, 224, 119);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body dt {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ol > li {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ul > li {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  background-color: rgb(235, 235, 235);
  padding-bottom: 6.08px;
  padding-top: 4.56px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body table {
  color: rgb(31, 31, 31);
  margin-left: 268.391px;
  margin-right: 268.391px;
}

html[saved-theme="light"] body td {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body th {
  color: rgb(31, 31, 31);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(235, 235, 235);
  border-bottom-color: rgb(235, 235, 235);
  border-bottom-left-radius: 4.32px;
  border-bottom-right-radius: 4.32px;
  border-left-color: rgb(235, 235, 235);
  border-right-color: rgb(235, 235, 235);
  border-top-color: rgb(235, 235, 235);
  border-top-left-radius: 4.32px;
  border-top-right-radius: 4.32px;
  color: rgb(19, 26, 22);
  padding-bottom: 0.8px;
  padding-left: 3.2px;
  padding-right: 3.2px;
  padding-top: 0.8px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 235, 235);
  color: rgb(19, 26, 22);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 173, 101);
  border-left-color: rgb(0, 173, 101);
  border-right-color: rgb(0, 173, 101);
  border-top-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(235, 235, 235);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(235, 235, 235);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body figcaption {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 173, 101);
  border-left-color: rgb(0, 173, 101);
  border-right-color: rgb(0, 173, 101);
  border-top-color: rgb(0, 173, 101);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(0, 224, 119);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
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
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(0, 224, 119);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 173, 101);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(153, 204, 167);
  border-left-color: rgb(153, 204, 167);
  border-right-color: rgb(153, 204, 167);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(31, 31, 31);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(153, 204, 167);
  border-left-color: rgb(153, 204, 167);
  border-right-color: rgb(153, 204, 167);
  border-top-color: rgb(153, 204, 167);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(31, 31, 31);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body abbr {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="light"] body sub {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body summary {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body sup {
  color: rgb(31, 31, 31);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(235, 235, 235);
  color: rgb(0, 173, 101);
}`,
  },
};
