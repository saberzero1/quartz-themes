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
  --background-primary: #111111;
  --background-primary-alt: #141715;
  --background-secondary: #141715;
  --background-secondary-alt: #141715;
  --bar-color: #002922;
  --bases-cards-background: #111111;
  --bases-cards-cover-background: #141715;
  --bases-table-cell-background-active: #111111;
  --bases-table-cell-background-disabled: #141715;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00e077;
  --bases-table-group-background: #141715;
  --bases-table-header-background: #111111;
  --bases-table-summary-background: #111111;
  --black: #111111;
  --black-light: #131a16;
  --black-light-light: #1f1f1f;
  --black-mid: #141715;
  --blockquote-border-color: #00e077;
  --blockquote-border-thickness: 5px;
  --bold-color: #00ad65;
  --canvas-background: #111111;
  --caret-color: #FFFFFF;
  --checkbox-color: #00e077;
  --checkbox-marker-color: #111111;
  --checklist-done-color: #7f7f7f;
  --checklist-done-decoration: none;
  --code-background: #141715;
  --code-builtin-color: #00e077;
  --code-comment-color: #004c29;
  --code-function-color: #00ad65;
  --code-normal: #FFFFFF;
  --code-operator-color: #00e077;
  --code-string-color: #00ad65;
  --code-text-size: 0.9rem;
  --code-text-size-header: 0.9em;
  --code-variable-color: #FFFFFF;
  --codeblock-background: #131a16;
  --codeblock-color: #F5F5F5;
  --collapse-icon-color-collapsed: #00e077;
  --color-accent: #00ff80;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #002922;
  --divider-color-hover: #00e077;
  --embed-border-start: 2px solid #00e077;
  --file-header-background: #111111;
  --file-header-background-focused: #111111;
  --file-line-width: 800px;
  --file-title-color: #EBEBEB;
  --flair-color: #FFFFFF;
  --folder-filter: invert(52%) sepia(95%) saturate(856%) hue-rotate(67deg) brightness(118%) contrast(117%);
  --folder-title-color: #EBEBEB;
  --graph-node-focused: #00e077;
  --graph-text: #FFFFFF;
  --gray: var(--text-normal);
  --green-bright: #00e077;
  --green-bright-bright: #00ff80;
  --green-bright-dark: #00af6c;
  --green-dark: #004c29;
  --green-darker: #002922;
  --green-forest: #00ad65;
  --green-light: #e4fff6;
  --green-mid: #c9ffe6;
  --green-mid-mid: #99cca7;
  --grey: #EBEBEB;
  --grey-dark: #7f7f7f;
  --grey-light: #FAFAFA;
  --grey-mid: #F5F5F5;
  --h1-color: #00ad65;
  --h2-color: #00ad65;
  --h3-color: #00ad65;
  --h4-color: #00ad65;
  --h5-color: #00ad65;
  --h6-color: #00ad65;
  --hashtag-background: #002922;
  --hashtag-color: #00e077;
  --highlight-color: #00ad65;
  --hr-height: 0.15em;
  --hr-thickness: 0.15em;
  --icon-color-active: #00e077;
  --icon-color-focused: #FFFFFF;
  --inline-code-background: #131A16;
  --inline-code-color: #00e077;
  --inline-title-color: #00ad65;
  --interactive-accent: #00e077;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-width: 800px;
  --link-color: #00e077;
  --link-external-color: #00e077;
  --link-unresolved-color: #00e077;
  --links-color: #00e077;
  --list-marker-color-collapsed: #00e077;
  --menu-background: #141715;
  --metadata-input-text-color: #FFFFFF;
  --modal-background: #111111;
  --nav-heading-color: #FFFFFF;
  --nav-heading-color-hover: #FFFFFF;
  --nav-item-color-active: #FFFFFF;
  --nav-item-color-highlighted: #00e077;
  --nav-item-color-hover: #FFFFFF;
  --nav-item-color-selected: #FFFFFF;
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-sidebar-background: #111111;
  --pill-color-hover: #FFFFFF;
  --pill-color-remove-hover: #00e077;
  --prompt-background: #111111;
  --quote-background: #131a16;
  --ribbon-background: #141715;
  --ribbon-background-collapsed: #111111;
  --search-result-background: #111111;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #FFFFFF;
  --setting-items-background: #141715;
  --status-bar-background: #141715;
  --status-bar-border-color: #002922;
  --suggestion-background: #111111;
  --tab-background-active: #111111;
  --tab-container-background: #141715;
  --tab-divider-color: #002922;
  --tab-outline-color: #002922;
  --tab-switcher-background: #141715;
  --tab-switcher-menubar-background: linear-gradient(to top, #141715, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #00ff80;
  --tab-text-color-focused-active-current: #FFFFFF;
  --tab-text-color-focused-highlighted: #00e077;
  --table-drag-handle-background-active: #00e077;
  --table-header-color: #FFFFFF;
  --table-selection-border-color: #00e077;
  --tag-color: #00e077;
  --tag-color-hover: #00e077;
  --tertiary: var(--text-accent);
  --text-accent: #00e077;
  --text-normal: #FFFFFF;
  --titlebar-background: #141715;
  --titlebar-background-focused: #141715;
  --titlebar-text-color-focused: #FFFFFF;
  --underline-line-color: #00e077;
  --vault-profile-color: #FFFFFF;
  --vault-profile-color-hover: #FFFFFF;
  --white: #FFFFFF;
  --quartz-icon-color: currentColor;
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
  --background-primary: #FAFAFA;
  --background-primary-alt: #F5F5F5;
  --background-secondary: #F5F5F5;
  --background-secondary-alt: #F5F5F5;
  --bar-color: #99cca7;
  --bases-cards-background: #FAFAFA;
  --bases-cards-cover-background: #F5F5F5;
  --bases-table-cell-background-active: #FAFAFA;
  --bases-table-cell-background-disabled: #F5F5F5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00e077;
  --bases-table-group-background: #F5F5F5;
  --bases-table-header-background: #FAFAFA;
  --bases-table-summary-background: #FAFAFA;
  --black: #111111;
  --black-light: #131a16;
  --black-light-light: #1f1f1f;
  --black-mid: #141715;
  --blockquote-border-color: #00e077;
  --blockquote-border-thickness: 5px;
  --blur-background: color-mix(in srgb, #FAFAFA 65%, transparent) linear-gradient(#FAFAFA, color-mix(in srgb, #FAFAFA 65%, transparent));
  --bold-color: #00ad65;
  --canvas-background: #FAFAFA;
  --caret-color: #1f1f1f;
  --checkbox-color: #00e077;
  --checkbox-marker-color: #FAFAFA;
  --checklist-done-color: #7f7f7f;
  --checklist-done-decoration: none;
  --code-background: #F5F5F5;
  --code-builtin-color: #00ad65;
  --code-comment-color: #7f7f7f;
  --code-function-color: #00ad65;
  --code-normal: #1f1f1f;
  --code-operator-color: #00ad65;
  --code-string-color: #7f7f7f;
  --code-text-size: 0.9rem;
  --code-text-size-header: 0.9em;
  --code-variable-color: #1f1f1f;
  --codeblock-background: #EBEBEB;
  --codeblock-color: #131a16;
  --collapse-icon-color-collapsed: #00e077;
  --color-accent: #00e077;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #99cca7;
  --divider-color-hover: #00e077;
  --embed-border-start: 2px solid #00e077;
  --file-header-background: #FAFAFA;
  --file-header-background-focused: #FAFAFA;
  --file-line-width: 800px;
  --file-title-color: #1f1f1f;
  --flair-color: #1f1f1f;
  --folder-filter: invert(52%) sepia(95%) saturate(856%) hue-rotate(67deg) brightness(118%) contrast(117%);
  --folder-title-color: #1f1f1f;
  --graph-node-focused: #00e077;
  --graph-text: #1f1f1f;
  --gray: var(--text-normal);
  --green-bright: #00e077;
  --green-bright-bright: #00ff80;
  --green-bright-dark: #00af6c;
  --green-dark: #004c29;
  --green-darker: #002922;
  --green-forest: #00ad65;
  --green-light: #e4fff6;
  --green-mid: #c9ffe6;
  --green-mid-mid: #99cca7;
  --grey: #EBEBEB;
  --grey-dark: #7f7f7f;
  --grey-light: #FAFAFA;
  --grey-mid: #F5F5F5;
  --h1-color: #00ad65;
  --h2-color: #00ad65;
  --h3-color: #00ad65;
  --h4-color: #00ad65;
  --h5-color: #00ad65;
  --h6-color: #00ad65;
  --hashtag-background: #EBEBEB;
  --hashtag-color: #00ad65;
  --highlight-color: #c9ffe6;
  --hr-height: 0.15em;
  --hr-thickness: 0.15em;
  --icon-color-active: #00e077;
  --icon-color-focused: #1f1f1f;
  --inline-code-background: #EBEBEB;
  --inline-code-color: #00ad65;
  --inline-title-color: #00ad65;
  --interactive-accent: #00e077;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-width: 800px;
  --link-color: #00ad65;
  --link-external-color: #00e077;
  --link-unresolved-color: #00e077;
  --links-color: #00ad65;
  --list-marker-color-collapsed: #00e077;
  --menu-background: #F5F5F5;
  --metadata-input-text-color: #1f1f1f;
  --modal-background: #FAFAFA;
  --nav-heading-color: #1f1f1f;
  --nav-heading-color-hover: #1f1f1f;
  --nav-item-color-active: #1f1f1f;
  --nav-item-color-highlighted: #00e077;
  --nav-item-color-hover: #1f1f1f;
  --nav-item-color-selected: #1f1f1f;
  --pdf-background: #FAFAFA;
  --pdf-page-background: #FAFAFA;
  --pdf-sidebar-background: #FAFAFA;
  --pill-color-hover: #1f1f1f;
  --pill-color-remove-hover: #00e077;
  --prompt-background: #FAFAFA;
  --quote-background: #EBEBEB;
  --raised-background: color-mix(in srgb, #FAFAFA 65%, transparent) linear-gradient(#FAFAFA, color-mix(in srgb, #FAFAFA 65%, transparent));
  --ribbon-background: #F5F5F5;
  --ribbon-background-collapsed: #FAFAFA;
  --search-result-background: #FAFAFA;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1f1f1f;
  --setting-items-background: #F5F5F5;
  --status-bar-background: #F5F5F5;
  --status-bar-border-color: #99cca7;
  --suggestion-background: #FAFAFA;
  --tab-background-active: #FAFAFA;
  --tab-container-background: #F5F5F5;
  --tab-divider-color: #99cca7;
  --tab-outline-color: #99cca7;
  --tab-switcher-background: #F5F5F5;
  --tab-switcher-menubar-background: linear-gradient(to top, #F5F5F5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px #00e077;
  --tab-text-color-focused-active-current: #1f1f1f;
  --tab-text-color-focused-highlighted: #00e077;
  --table-drag-handle-background-active: #00e077;
  --table-header-color: #1f1f1f;
  --table-selection-border-color: #00e077;
  --tag-color: #00e077;
  --tag-color-hover: #00e077;
  --tertiary: var(--text-accent);
  --text-accent: #00e077;
  --text-normal: #1f1f1f;
  --titlebar-background: #F5F5F5;
  --titlebar-background-focused: #F5F5F5;
  --titlebar-text-color-focused: #1f1f1f;
  --underline-line-color: #00e077;
  --vault-profile-color: #1f1f1f;
  --vault-profile-color-hover: #1f1f1f;
  --white: #FFFFFF;
  --quartz-icon-color: currentColor;
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
