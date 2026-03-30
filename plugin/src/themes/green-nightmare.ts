import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "green-nightmare", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-group-heading-property-color: #cccccc !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #39ff14 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #cccccc !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-border-color: #39ff14 !important;
  --bold-color: #ffffff !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #cccccc !important;
  --caret-color: #eeeeee !important;
  --checkbox-border-color: #cccccc !important;
  --checkbox-border-color-hover: #cccccc !important;
  --checkbox-color: #39ff14 !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #cccccc !important;
  --code-background: #000000 !important;
  --code-comment: #cccccc !important;
  --code-normal: #a8c090 !important;
  --code-punctuation: #cccccc !important;
  --collapse-icon-color: #cccccc !important;
  --collapse-icon-color-collapsed: #39ff14 !important;
  --dark: #eeeeee !important;
  --darkgray: #eeeeee !important;
  --divider-color-hover: #39ff14 !important;
  --embed-border-start: 2px solid #39ff14 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-color: #eeeeee !important;
  --footnote-id-color: #cccccc !important;
  --footnote-id-color-no-occurrences: #cccccc !important;
  --graph-node: #cccccc !important;
  --graph-node-focused: #39ff14 !important;
  --graph-node-unresolved: #cccccc !important;
  --graph-text: #eeeeee !important;
  --gray: #cccccc !important;
  --h1-color: #98fb98 !important;
  --h2-color: #50c878 !important;
  --h3-color: #a8e4a0 !important;
  --h4-color: #a9ba9d !important;
  --h5-color: #9dc183 !important;
  --h6-color: #486e02 !important;
  --heading-formatting: #cccccc !important;
  --icon-color: #cccccc !important;
  --icon-color-active: #39ff14 !important;
  --icon-color-focused: #39ff14 !important;
  --icon-color-hover: #39ff14 !important;
  --indentation-guide-color: #39ff14 !important;
  --indentation-guide-color-active: #39ff14 !important;
  --inline-title-color: #39ff14 !important;
  --input-date-separator: #cccccc !important;
  --input-placeholder-color: #cccccc !important;
  --interactive-accent: #39ff14 !important;
  --italic-color: #dddddd !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #ace1af !important;
  --link-decoration-thickness: 1px !important;
  --link-external-color: #568203 !important;
  --link-unresolved-color: #39ff14 !important;
  --list-marker-color: #cccccc !important;
  --list-marker-color-collapsed: #39ff14 !important;
  --list-marker-color-hover: #cccccc !important;
  --menu-background: #000000 !important;
  --metadata-input-text-color: #eeeeee !important;
  --metadata-label-text-color: #cccccc !important;
  --metadata-label-text-color-hover: #cccccc !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #cccccc !important;
  --nav-collapse-icon-color-collapsed: #cccccc !important;
  --nav-file-tag: #f4ec9e !important;
  --nav-heading-color: #eeeeee !important;
  --nav-heading-color-collapsed: #cccccc !important;
  --nav-heading-color-collapsed-hover: #cccccc !important;
  --nav-heading-color-hover: #eeeeee !important;
  --nav-indentation-guide-color: #5f6148 !important;
  --nav-item-background-active: #000000 !important;
  --nav-item-color: #cccccc !important;
  --nav-item-color-active: #39ff14 !important;
  --nav-item-color-highlighted: #39ff14 !important;
  --nav-item-color-hover: #39ff14 !important;
  --nav-item-color-selected: #eeeeee !important;
  --nav-item-size: 15px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-active: 900 !important;
  --nav-tag-color: #cccccc !important;
  --nav-tag-color-active: #cccccc !important;
  --nav-tag-color-hover: #cccccc !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color: #cccccc !important;
  --pill-color-hover: #eeeeee !important;
  --pill-color-remove: #cccccc !important;
  --pill-color-remove-hover: #39ff14 !important;
  --prompt-background: #000000 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --scrollbar-thumb-bg: #39ff14 !important;
  --search-clear-button-color: #cccccc !important;
  --search-icon-color: #cccccc !important;
  --search-result-background: #000000 !important;
  --secondary: #39ff14 !important;
  --setting-group-heading-color: #eeeeee !important;
  --setting-items-background: #000000 !important;
  --status-bar-background: #000000 !important;
  --status-bar-text-color: #cccccc !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-font-weight: 900 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #cccccc !important;
  --tab-text-color-active: #cccccc !important;
  --tab-text-color-focused: #cccccc !important;
  --tab-text-color-focused-active: #cccccc !important;
  --tab-text-color-focused-active-current: #39ff14 !important;
  --tab-text-color-focused-highlighted: #39ff14 !important;
  --tab-text-weight-focused-active-current: 900 !important;
  --table-drag-handle-background-active: #39ff14 !important;
  --table-drag-handle-color: #cccccc !important;
  --table-drag-handle-color-active: #000000 !important;
  --table-header-background: #2a2a2a !important;
  --table-header-color: #eeeeee !important;
  --table-row-alt-background: #141414 !important;
  --table-selection-border-color: #39ff14 !important;
  --tag-color: #74c365 !important;
  --tag-color-hover: #39ff14 !important;
  --tertiary: #39ff14 !important;
  --text-accent: #39ff14 !important;
  --text-faint: #cccccc !important;
  --text-muted: #cccccc !important;
  --text-normal: #eeeeee !important;
  --text-on-accent: #000000 !important;
  --text-selection: #486e02 !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-text-color: #cccccc !important;
  --titlebar-text-color-focused: #eeeeee !important;
  --vault-profile-color: #eeeeee !important;
  --vault-profile-color-hover: #eeeeee !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(221, 221, 221);
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html body .page article p > i, html i {
  color: rgb(221, 221, 221);
  outline: rgb(221, 221, 221) none 0px;
  text-decoration-color: rgb(221, 221, 221);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html body del {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html body p {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}`,
    links: `html body a.external, html footer a {
  color: rgb(86, 130, 3);
  outline: rgb(86, 130, 3) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(86, 130, 3);
  text-decoration-thickness: 1px;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(172, 225, 175);
  outline: rgb(172, 225, 175) none 0px;
  text-decoration: underline 1px;
  text-decoration-color: rgb(172, 225, 175);
  text-decoration-thickness: 1px;
}

html body a.internal.broken {
  color: rgb(57, 255, 20);
  outline: rgb(57, 255, 20) none 0px;
  text-decoration: underline 1px rgba(138, 92, 245, 0.3);
  text-decoration-thickness: 1px;
}`,
    lists: `html body dd {
  color: rgb(238, 238, 238);
}

html body dt {
  color: rgb(238, 238, 238);
}

html body ol > li {
  color: rgb(238, 238, 238);
}

html body ol.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body ul > li {
  color: rgb(238, 238, 238);
}

html body ul.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(204, 204, 204);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body table {
  color: rgb(238, 238, 238);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(20, 20, 20);
}

html body td {
  color: rgb(238, 238, 238);
}

html body th {
  color: rgb(238, 238, 238);
}

html body tr {
  background-color: rgb(42, 42, 42);
}`,
    code: `html body code {
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(238, 238, 238);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `html body audio {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body figcaption {
  color: rgb(238, 238, 238);
}

html body figure {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body img {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body video {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body .footnotes {
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html body .transclude {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(57, 255, 20);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body .transclude-inner {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(57, 255, 20);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
}`,
    search: `html body .search > .search-button {
  color: rgb(238, 238, 238);
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration-color: rgb(238, 238, 238);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(238, 238, 238);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(238, 238, 238);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(238, 238, 238);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(238, 238, 238);
}

html body a.internal.tag-link::before {
  color: rgb(116, 195, 101);
}

html body h1 {
  color: rgb(152, 251, 152);
}

html body h2 {
  color: rgb(80, 200, 120);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(57, 255, 20);
}

html body h3 {
  color: rgb(168, 228, 160);
}

html body h4 {
  color: rgb(169, 186, 157);
}

html body h5 {
  color: rgb(157, 193, 131);
}

html body h6 {
  color: rgb(72, 110, 2);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 204, 204);
  font-weight: 500;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 204, 204);
  font-weight: 500;
}`,
    toc: `html body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(204, 204, 204);
}

html body footer ul li a {
  color: rgb(204, 204, 204);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(238, 238, 238);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 204, 204);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body li.section-li > .section .meta {
  color: rgb(204, 204, 204);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 204, 204);
}

html body ul.section-ul {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .darkmode svg {
  color: rgb(204, 204, 204);
  stroke: rgb(204, 204, 204);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .breadcrumb-element p {
  color: rgb(204, 204, 204);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

html body .metadata {
  color: rgb(204, 204, 204);
}

html body .metadata-properties {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(238, 238, 238);
}

html body abbr {
  color: rgb(238, 238, 238);
}

html body details {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body input[type=text] {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(168, 192, 144);
  border-left-color: rgb(168, 192, 144);
  border-right-color: rgb(168, 192, 144);
  border-top-color: rgb(168, 192, 144);
  color: rgb(168, 192, 144);
}

html body progress {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

html body sub {
  color: rgb(238, 238, 238);
}

html body summary {
  color: rgb(238, 238, 238);
}

html body sup {
  color: rgb(238, 238, 238);
}`,
  },
  light: {},
};
