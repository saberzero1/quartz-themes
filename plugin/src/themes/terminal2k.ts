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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 23, 21);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 23, 21);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 41, 34);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 23, 21);
  border-left-color: rgb(0, 41, 34);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration: rgb(0, 173, 101);
  text-decoration-color: rgb(0, 173, 101);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration: rgb(0, 173, 101);
  text-decoration-color: rgb(0, 173, 101);
}

body .text-highlight {
  background-color: rgb(0, 173, 101);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 224, 119);
  outline: rgb(0, 224, 119) none 0px;
  text-decoration: rgb(0, 224, 119);
  text-decoration-color: rgb(0, 224, 119);
}

body a.internal.broken {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(19, 26, 22);
  padding-bottom: 6.08px;
  padding-top: 4.56px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
  margin-left: 268.391px;
  margin-right: 268.391px;
}

body td {
  color: rgb(255, 255, 255);
}

body th {
  color: rgb(255, 255, 255);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 26, 22);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 26, 22);
  color: rgb(245, 245, 245);
}

body pre > code > [data-line] {
  border-left-color: rgb(0, 173, 101);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 173, 101);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 173, 101);
  border-left-color: rgb(0, 173, 101);
  border-right-color: rgb(0, 173, 101);
  border-top-color: rgb(0, 173, 101);
}

body pre > code, pre:has(> code) {
  background-color: rgb(19, 26, 22);
}

body pre:has(> code) {
  background-color: rgb(19, 26, 22);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(20, 23, 21);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(0, 224, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(0, 224, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 23, 21);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body a.internal.tag-link::before {
  color: rgb(0, 224, 119);
}

body h1 {
  color: rgb(0, 173, 101);
}

body h2 {
  color: rgb(0, 173, 101);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 173, 101);
}

body h3 {
  color: rgb(0, 173, 101);
}

body h4 {
  color: rgb(0, 173, 101);
}

body h5 {
  color: rgb(0, 173, 101);
}

body h6 {
  color: rgb(0, 173, 101);
}

body hr {
  border-bottom-color: rgb(0, 41, 34);
  border-left-color: rgb(0, 41, 34);
  border-right-color: rgb(0, 41, 34);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(20, 23, 21);
  border-bottom-color: rgb(0, 41, 34);
  border-left-color: rgb(0, 41, 34);
  border-right-color: rgb(0, 41, 34);
  border-top-color: rgb(0, 41, 34);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(235, 235, 235);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(235, 235, 235);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .navigation-progress {
  background-color: rgb(20, 23, 21);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body kbd {
  background-color: rgb(20, 23, 21);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(31, 31, 31);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(31, 31, 31);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(153, 204, 167);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(153, 204, 167);
  color: rgb(31, 31, 31);
}

body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(31, 31, 31);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration: rgb(0, 173, 101);
  text-decoration-color: rgb(0, 173, 101);
}

body .page article p > em, em {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .page article p > i, i {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .page article p > strong, strong {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration: rgb(0, 173, 101);
  text-decoration-color: rgb(0, 173, 101);
}

body .text-highlight {
  background-color: rgb(201, 255, 230);
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body del {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: line-through rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}`,
    links: `body a.external, footer a {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 173, 101);
  outline: rgb(0, 173, 101) none 0px;
  text-decoration: rgb(0, 173, 101);
  text-decoration-color: rgb(0, 173, 101);
}

body a.internal.broken {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}`,
    lists: `body dd {
  color: rgb(31, 31, 31);
}

body dt {
  color: rgb(31, 31, 31);
}

body ol > li {
  color: rgb(31, 31, 31);
}

body ol.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body ul > li {
  color: rgb(31, 31, 31);
}

body ul.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(235, 235, 235);
  padding-bottom: 6.08px;
  padding-top: 4.56px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body table {
  color: rgb(31, 31, 31);
  margin-left: 268.391px;
  margin-right: 268.391px;
}

body td {
  color: rgb(31, 31, 31);
}

body th {
  color: rgb(31, 31, 31);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 235, 235);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 235, 235);
  color: rgb(19, 26, 22);
}

body pre > code > [data-line] {
  border-left-color: rgb(0, 173, 101);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 173, 101);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 173, 101);
  border-left-color: rgb(0, 173, 101);
  border-right-color: rgb(0, 173, 101);
  border-top-color: rgb(0, 173, 101);
}

body pre > code, pre:has(> code) {
  background-color: rgb(235, 235, 235);
}

body pre:has(> code) {
  background-color: rgb(235, 235, 235);
}`,
    images: `body audio {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body figcaption {
  color: rgb(31, 31, 31);
}

body figure {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body img {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body video {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 245, 245);
}

body .footnotes {
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .transclude {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(0, 224, 119);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .transclude-inner {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(0, 224, 119);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(127, 127, 127);
  text-decoration: rgb(127, 127, 127);
  text-decoration-color: rgb(127, 127, 127);
}

body li.task-list-item[data-task='!'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='*'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='-'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='/'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='>'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='?'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='I'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='S'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='b'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='c'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='d'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='f'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='i'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='k'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='l'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='p'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='u'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body li.task-list-item[data-task='w'] {
  color: rgb(31, 31, 31);
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}`,
    search: `body .search > .search-button {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
}

body .search > .search-container > .search-space > * {
  color: rgb(31, 31, 31);
  outline: rgb(31, 31, 31) none 0px;
  text-decoration: rgb(31, 31, 31);
  text-decoration-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(31, 31, 31);
}

body a.internal.tag-link::before {
  color: rgb(0, 224, 119);
}

body h1 {
  color: rgb(0, 173, 101);
}

body h2 {
  color: rgb(0, 173, 101);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 173, 101);
}

body h3 {
  color: rgb(0, 173, 101);
}

body h4 {
  color: rgb(0, 173, 101);
}

body h5 {
  color: rgb(0, 173, 101);
}

body h6 {
  color: rgb(0, 173, 101);
}

body hr {
  border-bottom-color: rgb(153, 204, 167);
  border-left-color: rgb(153, 204, 167);
  border-right-color: rgb(153, 204, 167);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}`,
    footer: `body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(153, 204, 167);
  border-left-color: rgb(153, 204, 167);
  border-right-color: rgb(153, 204, 167);
  border-top-color: rgb(153, 204, 167);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(31, 31, 31);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(31, 31, 31);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body li.section-li > .section .meta {
  color: rgb(31, 31, 31);
}

body ul.section-ul {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

body .page-header h2.page-title {
  color: rgb(31, 31, 31);
}

body abbr {
  color: rgb(31, 31, 31);
  text-decoration: underline dotted rgb(31, 31, 31);
}

body details {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body kbd {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(31, 31, 31);
}

body progress {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body sub {
  color: rgb(31, 31, 31);
}

body summary {
  color: rgb(31, 31, 31);
}

body sup {
  color: rgb(31, 31, 31);
}`,
  },
};
