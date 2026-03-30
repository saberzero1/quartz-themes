import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "bossidian", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #22292c !important;
  --background-secondary: #1b2124 !important;
  --background-secondary-alt: #0d0b12 !important;
  --bases-cards-background: #22292c !important;
  --bases-table-border-color: #868686 !important;
  --bases-table-cell-background-active: #22292c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(14, 210, 247, 0.7) !important;
  --bases-table-header-background: #22292c !important;
  --bases-table-summary-background: #22292c !important;
  --blockquote-border-color: #ff8800 !important;
  --blockquote-border-thickness: 0.25rem !important;
  --canvas-background: #22292c !important;
  --canvas-card-label-color: #2e88b4 !important;
  --caret-color: #bebebe !important;
  --checkbox-border-color: #2e88b4 !important;
  --checkbox-color: rgba(14, 210, 247, 0.7) !important;
  --checkbox-color-hover: #ff8800 !important;
  --checkbox-marker-color: #22292c !important;
  --code-background: #1b2124 !important;
  --code-comment: #2e88b4 !important;
  --code-normal: #ff8800 !important;
  --collapse-icon-color: #2e88b4 !important;
  --collapse-icon-color-collapsed: #2faae6 !important;
  --color-bossidian-pink: #f4569d !important;
  --color-bossidian-primary: #2faae6 !important;
  --color-bossidian-primary-background: #22292c !important;
  --color-bossidian-secondary: #ff8800 !important;
  --color-bossidian-secondary-background: #1b2124 !important;
  --dark: #bebebe !important;
  --darkgray: #bebebe !important;
  --divider-color-hover: rgba(14, 210, 247, 0.7) !important;
  --embed-border-start: 2px solid rgba(14, 210, 247, 0.7) !important;
  --file-header-background: #22292c !important;
  --file-header-background-focused: #22292c !important;
  --flair-color: #bebebe !important;
  --footnote-id-color-no-occurrences: #2e88b4 !important;
  --graph-node-focused: #2faae6 !important;
  --graph-node-unresolved: #2e88b4 !important;
  --graph-text: #bebebe !important;
  --gray: #2e88b4 !important;
  --h1-color: #2faae6 !important;
  --h2-color: #2faae6 !important;
  --h3-color: #2faae6 !important;
  --h4-color: #2faae6 !important;
  --h5-color: #2faae6 !important;
  --h6-color: #2faae6 !important;
  --heading-formatting: #2e88b4 !important;
  --highlight: rgba(244, 86, 157, 0.25) !important;
  --icon-color-active: #2faae6 !important;
  --icon-color-focused: #bebebe !important;
  --inline-title-color: #2faae6 !important;
  --input-date-separator: #2e88b4 !important;
  --input-placeholder-color: #2e88b4 !important;
  --interactive-accent: rgba(14, 210, 247, 0.7) !important;
  --interactive-accent-hover: #ff8800 !important;
  --light: #22292c !important;
  --lightgray: #1b2124 !important;
  --link-color: #2faae6 !important;
  --link-color-hover: #ff8800 !important;
  --link-external-color: #2faae6 !important;
  --link-external-color-hover: #ff8800 !important;
  --link-unresolved-color: #2faae6 !important;
  --list-marker-color: #2faae6 !important;
  --list-marker-color-collapsed: #2faae6 !important;
  --menu-background: #1b2124 !important;
  --metadata-input-text-color: #bebebe !important;
  --modal-background: #22292c !important;
  --nav-collapse-icon-color: #2e88b4 !important;
  --nav-collapse-icon-color-collapsed: #2e88b4 !important;
  --nav-heading-color: #bebebe !important;
  --nav-heading-color-collapsed: #2e88b4 !important;
  --nav-heading-color-hover: #bebebe !important;
  --nav-item-color: #2faae6 !important;
  --nav-item-color-active: #2faae6 !important;
  --nav-item-color-highlighted: #ff8800 !important;
  --nav-item-color-hover: #2faae6 !important;
  --nav-item-color-selected: #bebebe !important;
  --nav-item-weight-active: 800 !important;
  --nav-tag-color: #2e88b4 !important;
  --pdf-background: #22292c !important;
  --pdf-page-background: #22292c !important;
  --pdf-sidebar-background: #22292c !important;
  --pill-color-hover: #bebebe !important;
  --pill-color-remove: #2e88b4 !important;
  --pill-color-remove-hover: #2faae6 !important;
  --prompt-background: #22292c !important;
  --ribbon-background: #1b2124 !important;
  --ribbon-background-collapsed: #22292c !important;
  --search-result-background: #22292c !important;
  --secondary: #2faae6 !important;
  --setting-group-heading-color: #bebebe !important;
  --status-bar-background: #1b2124 !important;
  --suggestion-background: #22292c !important;
  --tab-background-active: #22292c !important;
  --tab-container-background: #1b2124 !important;
  --tab-switcher-background: #1b2124 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1b2124, transparent) !important;
  --tab-text-color: #2e88b4 !important;
  --tab-text-color-focused-active-current: #bebebe !important;
  --tab-text-color-focused-highlighted: #2faae6 !important;
  --table-border-color: #868686 !important;
  --table-drag-handle-background-active: rgba(14, 210, 247, 0.7) !important;
  --table-drag-handle-color: #2e88b4 !important;
  --table-header-border-color: #868686 !important;
  --table-header-color: #bebebe !important;
  --table-selection-border-color: rgba(14, 210, 247, 0.7) !important;
  --tag-background: rgba(14, 210, 247, 0.15) !important;
  --tag-color: #2faae6 !important;
  --tag-color-hover: #2faae6 !important;
  --tertiary: #ff8800 !important;
  --text-accent: #2faae6 !important;
  --text-accent-hover: #ff8800 !important;
  --text-faint: #2e88b4 !important;
  --text-highlight-bg: rgba(244, 86, 157, 0.25) !important;
  --text-normal: #bebebe !important;
  --textHighlight: rgba(244, 86, 157, 0.25) !important;
  --titlebar-background: #1b2124 !important;
  --titlebar-background-focused: #0d0b12 !important;
  --titlebar-text-color-focused: #bebebe !important;
  --vault-name-color: #2faae6 !important;
  --vault-profile-color: #bebebe !important;
  --vault-profile-color-hover: #bebebe !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 41, 44);
  color: rgb(190, 190, 190);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body div#quartz-root {
  background-color: rgb(34, 41, 44);
  color: rgb(190, 190, 190);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .page article p > em, html em {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .page article p > i, html i {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .page article p > strong, html strong {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .text-highlight {
  background-color: rgba(244, 86, 157, 0.25);
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body del {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}`,
    links: `html body a.external, html footer a {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
  text-decoration-color: rgb(47, 170, 230);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
  text-decoration-color: rgb(47, 170, 230);
}

html body a.internal.broken {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
}`,
    lists: `html body dd {
  color: rgb(190, 190, 190);
}

html body dt {
  color: rgb(190, 190, 190);
}

html body ol > li {
  color: rgb(190, 190, 190);
}

html body ol.overflow {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body ul > li {
  color: rgb(190, 190, 190);
}

html body ul.overflow {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(46, 136, 180);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body table {
  color: rgb(190, 190, 190);
}

html body td {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
}

html body th {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
  font-weight: 900;
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 136, 0);
  border-left-color: rgb(255, 136, 0);
  border-right-color: rgb(255, 136, 0);
  border-top-color: rgb(255, 136, 0);
  color: rgb(255, 136, 0);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 33, 36);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(27, 33, 36);
}

html body pre:has(> code) {
  background-color: rgb(27, 33, 36);
}`,
    images: `html body audio {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body figcaption {
  color: rgb(190, 190, 190);
}

html body figure {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body img {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body video {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .transclude {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.7);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .transclude-inner {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.7);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(46, 136, 180);
  border-left-color: rgb(46, 136, 180);
  border-right-color: rgb(46, 136, 180);
  border-top-color: rgb(46, 136, 180);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(34, 41, 44);
}`,
    search: `html body .search > .search-button {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 41, 44);
}

html body .search > .search-container > .search-space > * {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration-color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 33, 36);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(14, 210, 247, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(47, 170, 230);
}

html body h1 {
  color: rgb(47, 170, 230);
}

html body h2 {
  color: rgb(47, 170, 230);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(47, 170, 230);
}

html body h3 {
  color: rgb(47, 170, 230);
}

html body h4 {
  color: rgb(47, 170, 230);
}

html body h5 {
  color: rgb(47, 170, 230);
}

html body h6 {
  color: rgb(47, 170, 230);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(47, 170, 230);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(47, 170, 230);
}`,
    footer: `html body footer {
  background-color: rgb(27, 33, 36);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(190, 190, 190);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(47, 170, 230);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(47, 170, 230);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body li.section-li > .section .meta {
  color: rgb(47, 170, 230);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(47, 170, 230);
}

html body ul.section-ul {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(46, 136, 180);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

html body .navigation-progress {
  background-color: rgb(27, 33, 36);
}

html body .page-header h2.page-title {
  color: rgb(190, 190, 190);
}

html body abbr {
  color: rgb(190, 190, 190);
}

html body details {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body kbd {
  background-color: rgb(27, 33, 36);
  border-bottom-color: rgb(255, 136, 0);
  border-left-color: rgb(255, 136, 0);
  border-right-color: rgb(255, 136, 0);
  border-top-color: rgb(255, 136, 0);
  color: rgb(255, 136, 0);
}

html body progress {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

html body sub {
  color: rgb(190, 190, 190);
}

html body summary {
  color: rgb(190, 190, 190);
}

html body sup {
  color: rgb(190, 190, 190);
}`,
  },
  light: {},
};
