import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "tomorrow-night-bright",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-primary: #000000 !important;
  --background-primary-alt: #000000 !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-cover-background: #000000 !important;
  --bases-group-heading-property-color: #7aa6da !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-background-disabled: #000000 !important;
  --bases-table-group-background: #000000 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #7aa6da !important;
  --bases-table-summary-background: #000000 !important;
  --canvas-background: #000000 !important;
  --caret-color: #eaeaea !important;
  --checkbox-border-color-hover: #7aa6da !important;
  --checkbox-marker-color: #000000 !important;
  --checklist-done-color: #7aa6da !important;
  --code-background: #000000 !important;
  --code-normal: #eaeaea !important;
  --code-punctuation: #7aa6da !important;
  --collapse-icon-color-collapsed: #d54e53 !important;
  --color-0: #000000 !important;
  --color-1: #eaeaea !important;
  --color-10: #424242 !important;
  --color-11: #2a2a2a !important;
  --color-2: #b9ca4a !important;
  --color-3: #d54e53 !important;
  --color-4: #e7c547 !important;
  --color-5: #7aa6da !important;
  --color-6: #70c0b1 !important;
  --color-7: #e78c45 !important;
  --color-8: #c397d8 !important;
  --color-9: #969896 !important;
  --color-w: #ffffff !important;
  --dark: #eaeaea !important;
  --darkgray: #eaeaea !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-color: #eaeaea !important;
  --footnote-id-color: #7aa6da !important;
  --graph-node: #7aa6da !important;
  --graph-node-focused: #d54e53 !important;
  --graph-text: #eaeaea !important;
  --gray: #7aa6da !important;
  --icon-color: #7aa6da !important;
  --icon-color-active: #d54e53 !important;
  --icon-color-focused: #eaeaea !important;
  --icon-color-hover: #7aa6da !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --light: #000000 !important;
  --lightgray: #000000 !important;
  --link-color: #d54e53 !important;
  --link-external-color: #d54e53 !important;
  --link-unresolved-color: #d54e53 !important;
  --list-marker-color-collapsed: #d54e53 !important;
  --list-marker-color-hover: #7aa6da !important;
  --menu-background: #000000 !important;
  --metadata-input-text-color: #eaeaea !important;
  --metadata-label-text-color: #7aa6da !important;
  --metadata-label-text-color-hover: #7aa6da !important;
  --modal-background: #000000 !important;
  --nav-heading-color: #eaeaea !important;
  --nav-heading-color-collapsed-hover: #7aa6da !important;
  --nav-heading-color-hover: #eaeaea !important;
  --nav-item-color: #7aa6da !important;
  --nav-item-color-active: #eaeaea !important;
  --nav-item-color-highlighted: #d54e53 !important;
  --nav-item-color-hover: #eaeaea !important;
  --nav-item-color-selected: #eaeaea !important;
  --nav-tag-color-active: #7aa6da !important;
  --nav-tag-color-hover: #7aa6da !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-sidebar-background: #000000 !important;
  --pill-color: #7aa6da !important;
  --pill-color-hover: #eaeaea !important;
  --pill-color-remove-hover: #d54e53 !important;
  --prompt-background: #000000 !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #000000 !important;
  --search-clear-button-color: #7aa6da !important;
  --search-icon-color: #7aa6da !important;
  --search-result-background: #000000 !important;
  --secondary: #d54e53 !important;
  --setting-group-heading-color: #eaeaea !important;
  --setting-items-background: #000000 !important;
  --status-bar-background: #000000 !important;
  --status-bar-text-color: #7aa6da !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #000000 !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color-active: #7aa6da !important;
  --tab-text-color-focused: #7aa6da !important;
  --tab-text-color-focused-active: #7aa6da !important;
  --tab-text-color-focused-active-current: #eaeaea !important;
  --tab-text-color-focused-highlighted: #d54e53 !important;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8) !important;
  --table-header-color: #eaeaea !important;
  --tag-color: #d54e53 !important;
  --tag-color-hover: #d54e53 !important;
  --tertiary: #d54e53 !important;
  --text-accent: #d54e53 !important;
  --text-muted: #7aa6da !important;
  --text-normal: #eaeaea !important;
  --text-on-accent: rgba(0, 0, 0, 0.8) !important;
  --text-selection: #424242 !important;
  --titlebar-background: #000000 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-text-color: #7aa6da !important;
  --titlebar-text-color-focused: #eaeaea !important;
  --vault-profile-color: #eaeaea !important;
  --vault-profile-color-hover: #eaeaea !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

html body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body .page article p > em, html em {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body .page article p > i, html i {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body .page article p > strong, html strong {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body .text-highlight {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body del {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body p {
  color: rgb(122, 166, 218);
  outline: rgb(122, 166, 218) none 0px;
  text-decoration-color: rgb(122, 166, 218);
}`,
    links: `html body a.external, html footer a {
  color: rgb(213, 78, 83);
  outline: rgb(213, 78, 83) none 0px;
  text-decoration-color: rgb(213, 78, 83);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 78, 83);
  outline: rgb(213, 78, 83) none 0px;
  text-decoration-color: rgb(213, 78, 83);
}

html body a.internal.broken {
  color: rgb(213, 78, 83);
  outline: rgb(213, 78, 83) none 0px;
}`,
    lists: `html body dd {
  color: rgb(234, 234, 234);
}

html body dt {
  color: rgb(234, 234, 234);
}

html body ol > li {
  color: rgb(234, 234, 234);
}

html body ol.overflow {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body ul > li {
  color: rgb(234, 234, 234);
}

html body ul.overflow {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body table {
  color: rgb(234, 234, 234);
}

html body td {
  color: rgb(234, 234, 234);
}

html body th {
  color: rgb(234, 234, 234);
}`,
    code: `html body code {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(234, 234, 234);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

html body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `html body audio {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body figcaption {
  color: rgb(234, 234, 234);
}

html body figure {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body img {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body video {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
}

html body .footnotes {
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

html body .transclude {
  border-bottom-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body .transclude-inner {
  border-bottom-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(122, 166, 218);
  text-decoration-color: rgb(122, 166, 218);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(234, 234, 234);
  text-decoration-color: rgb(234, 234, 234);
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
  color: rgb(234, 234, 234);
}

html body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > * {
  color: rgb(234, 234, 234);
  outline: rgb(234, 234, 234) none 0px;
  text-decoration-color: rgb(234, 234, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(234, 234, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(234, 234, 234);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(66, 66, 66);
  color: rgb(234, 234, 234);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(66, 66, 66);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(66, 66, 66);
  color: rgb(234, 234, 234);
}

html body a.internal.tag-link::before {
  color: rgb(213, 78, 83);
}

html body h1 {
  color: rgb(234, 234, 234);
}

html body h2 {
  color: rgb(234, 234, 234);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(234, 234, 234);
}

html body h3 {
  color: rgb(234, 234, 234);
}

html body h4 {
  color: rgb(234, 234, 234);
}

html body h5 {
  color: rgb(234, 234, 234);
}

html body h6 {
  color: rgb(213, 78, 83);
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
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
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
  color: rgb(122, 166, 218);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(122, 166, 218);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}`,
    footer: `html body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(122, 166, 218);
}

html body footer ul li a {
  color: rgb(122, 166, 218);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(234, 234, 234);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(122, 166, 218);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(122, 166, 218);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body li.section-li > .section .meta {
  color: rgb(122, 166, 218);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(122, 166, 218);
}

html body ul.section-ul {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}

html body .darkmode svg {
  color: rgb(122, 166, 218);
  stroke: rgb(122, 166, 218);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

html body .metadata {
  color: rgb(122, 166, 218);
}

html body .metadata-properties {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}

html body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(234, 234, 234);
}

html body abbr {
  color: rgb(234, 234, 234);
}

html body details {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body input[type=text] {
  border-bottom-color: rgb(122, 166, 218);
  border-left-color: rgb(122, 166, 218);
  border-right-color: rgb(122, 166, 218);
  border-top-color: rgb(122, 166, 218);
  color: rgb(122, 166, 218);
}

html body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
  color: rgb(234, 234, 234);
}

html body progress {
  border-bottom-color: rgb(234, 234, 234);
  border-left-color: rgb(234, 234, 234);
  border-right-color: rgb(234, 234, 234);
  border-top-color: rgb(234, 234, 234);
}

html body sub {
  color: rgb(234, 234, 234);
}

html body summary {
  color: rgb(234, 234, 234);
}

html body sup {
  color: rgb(234, 234, 234);
}`,
  },
  light: {},
};
