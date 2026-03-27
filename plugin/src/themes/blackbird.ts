import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "blackbird", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-group-heading-property-color: #E1DC3F !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #E1DC3F !important;
  --bases-table-summary-background: #000000 !important;
  --canvas-background: #000000 !important;
  --caret-color: #FDF7CD !important;
  --checkbox-border-color-hover: #E1DC3F !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #E1DC3F !important;
  --code-background: #000000 !important;
  --code-normal: #FDF7CD !important;
  --code-punctuation: #E1DC3F !important;
  --collapse-icon-color-collapsed: #E92741 !important;
  --color-1: #FDF7CD !important;
  --color-2: #00ECD8 !important;
  --color-3: #E92741 !important;
  --color-4: #3EC840 !important;
  --color-5: #E1DC3F !important;
  --color-6: #418FDD !important;
  --color-7: #FF9900 !important;
  --dark: #FDF7CD !important;
  --darkgray: #FDF7CD !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-color: #FDF7CD !important;
  --footnote-id-color: #E1DC3F !important;
  --graph-node: #E1DC3F !important;
  --graph-node-focused: #E92741 !important;
  --graph-text: #FDF7CD !important;
  --gray: #E1DC3F !important;
  --icon-color: #E1DC3F !important;
  --icon-color-active: #E92741 !important;
  --icon-color-focused: #FDF7CD !important;
  --icon-color-hover: #E1DC3F !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #E92741 !important;
  --link-external-color: #E92741 !important;
  --link-unresolved-color: #E92741 !important;
  --list-marker-color-collapsed: #E92741 !important;
  --list-marker-color-hover: #E1DC3F !important;
  --menu-background: #000000 !important;
  --metadata-input-text-color: #FDF7CD !important;
  --metadata-label-text-color: #E1DC3F !important;
  --metadata-label-text-color-hover: #E1DC3F !important;
  --modal-background: #000000 !important;
  --nav-heading-color: #FDF7CD !important;
  --nav-heading-color-collapsed-hover: #E1DC3F !important;
  --nav-heading-color-hover: #FDF7CD !important;
  --nav-item-color: #E1DC3F !important;
  --nav-item-color-active: #FDF7CD !important;
  --nav-item-color-highlighted: #E92741 !important;
  --nav-item-color-hover: #FDF7CD !important;
  --nav-item-color-selected: #FDF7CD !important;
  --nav-tag-color-active: #E1DC3F !important;
  --nav-tag-color-hover: #E1DC3F !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color: #E1DC3F !important;
  --pill-color-hover: #FDF7CD !important;
  --pill-color-remove-hover: #E92741 !important;
  --prompt-background: #000000 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --search-clear-button-color: #E1DC3F !important;
  --search-icon-color: #E1DC3F !important;
  --search-result-background: #000000 !important;
  --secondary: #E92741 !important;
  --setting-group-heading-color: #FDF7CD !important;
  --setting-items-background: #000000 !important;
  --status-bar-background: #000000 !important;
  --status-bar-text-color: #E1DC3F !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color-active: #E1DC3F !important;
  --tab-text-color-focused: #E1DC3F !important;
  --tab-text-color-focused-active: #E1DC3F !important;
  --tab-text-color-focused-active-current: #FDF7CD !important;
  --tab-text-color-focused-highlighted: #E92741 !important;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8) !important;
  --table-header-color: #FDF7CD !important;
  --tag-color: #E92741 !important;
  --tag-color-hover: #E92741 !important;
  --tertiary: #E92741 !important;
  --text-accent: #E92741 !important;
  --text-muted: #E1DC3F !important;
  --text-normal: #FDF7CD !important;
  --text-on-accent: rgba(0, 0, 0, 0.8) !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-text-color: #E1DC3F !important;
  --titlebar-text-color-focused: #FDF7CD !important;
  --vault-profile-color: #FDF7CD !important;
  --vault-profile-color-hover: #FDF7CD !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body .page article p > em, html em {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body .page article p > i, html i {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body .page article p > strong, html strong {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body .text-highlight {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body del {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: line-through rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body p {
  color: rgb(225, 220, 63);
  outline: rgb(225, 220, 63) none 0px;
  text-decoration: rgb(225, 220, 63);
  text-decoration-color: rgb(225, 220, 63);
}`,
    links: `html body a.external, html footer a {
  color: rgb(233, 39, 65);
  outline: rgb(233, 39, 65) none 0px;
  text-decoration: underline rgb(233, 39, 65);
  text-decoration-color: rgb(233, 39, 65);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 39, 65);
  outline: rgb(233, 39, 65) none 0px;
  text-decoration: underline rgb(233, 39, 65);
  text-decoration-color: rgb(233, 39, 65);
}

html body a.internal.broken {
  color: rgb(233, 39, 65);
  outline: rgb(233, 39, 65) none 0px;
}`,
    lists: `html body dd {
  color: rgb(253, 247, 205);
}

html body dt {
  color: rgb(253, 247, 205);
}

html body ol > li {
  color: rgb(253, 247, 205);
}

html body ol.overflow {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body ul > li {
  color: rgb(253, 247, 205);
}

html body ul.overflow {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body table {
  color: rgb(253, 247, 205);
}

html body td {
  color: rgb(253, 247, 205);
}

html body th {
  color: rgb(253, 247, 205);
}`,
    code: `html body code {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `html body audio {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body figcaption {
  color: rgb(253, 247, 205);
}

html body figure {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body img {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body video {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
}

html body .footnotes {
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

html body .transclude {
  border-bottom-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body .transclude-inner {
  border-bottom-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(225, 220, 63);
  text-decoration: line-through rgb(225, 220, 63);
  text-decoration-color: rgb(225, 220, 63);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
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
  color: rgb(253, 247, 205);
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(253, 247, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(253, 247, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(0, 122, 255, 0.2);
  color: rgb(253, 247, 205);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgba(0, 122, 255, 0.2);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgba(0, 122, 255, 0.2);
  color: rgb(253, 247, 205);
}

html body a.internal.tag-link::before {
  color: rgb(233, 39, 65);
}

html body h1 {
  color: rgb(253, 247, 205);
}

html body h2 {
  color: rgb(253, 247, 205);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(253, 247, 205);
}

html body h3 {
  color: rgb(253, 247, 205);
}

html body h4 {
  color: rgb(253, 247, 205);
}

html body h5 {
  color: rgb(253, 247, 205);
}

html body h6 {
  color: rgb(233, 39, 65);
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
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
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
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(225, 220, 63);
}

html body footer ul li a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(253, 247, 205);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(225, 220, 63);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body li.section-li > .section .meta {
  color: rgb(225, 220, 63);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

html body ul.section-ul {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}

html body .darkmode svg {
  color: rgb(225, 220, 63);
  stroke: rgb(225, 220, 63);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

html body .metadata {
  color: rgb(225, 220, 63);
}

html body .metadata-properties {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(253, 247, 205);
}

html body abbr {
  color: rgb(253, 247, 205);
  text-decoration: underline dotted rgb(253, 247, 205);
}

html body details {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body input[type=text] {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

html body progress {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

html body sub {
  color: rgb(253, 247, 205);
}

html body summary {
  color: rgb(253, 247, 205);
}

html body sup {
  color: rgb(253, 247, 205);
}`,
  },
  light: {},
};
