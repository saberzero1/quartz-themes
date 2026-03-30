import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pxld", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #080808 !important;
  --background-secondary: #080808 !important;
  --bases-cards-background: #080808 !important;
  --bases-table-cell-background-active: #080808 !important;
  --bases-table-header-background: #080808 !important;
  --bases-table-summary-background: #080808 !important;
  --bodyFont: 'pixel_squareregular' !important;
  --canvas-background: #080808 !important;
  --caret-color: #f5f7fa !important;
  --checkbox-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --checkbox-marker-color: #080808 !important;
  --code-background: #111112 !important;
  --code-comment: #a4b9db !important;
  --code-keyword: #fb464c !important;
  --code-normal: #f5f7fa !important;
  --code-operator: #53dfdd !important;
  --code-property: #fa99cd !important;
  --code-string: #4682e3 !important;
  --codeFont: 'pixel_squareregular' !important;
  --collapse-icon-color-collapsed: hsl(253, 92.4%, 85.14%) !important;
  --dark: #f5f7fa !important;
  --darkgray: #f5f7fa !important;
  --file-header-background: #080808 !important;
  --file-header-background-focused: #080808 !important;
  --flair-color: #f5f7fa !important;
  --font-mermaid: 'pixel_squareregular' !important;
  --font-text: 'pixel_squareregular' !important;
  --graph-node-focused: hsl(253, 92.4%, 85.14%) !important;
  --graph-text: #f5f7fa !important;
  --gray: #f5f7fa !important;
  --headerFont: 'pixel_squareregular' !important;
  --icon-color-active: hsl(253, 92.4%, 85.14%) !important;
  --icon-color-focused: #f5f7fa !important;
  --light: #080808 !important;
  --lightgray: #080808 !important;
  --link-color: hsl(253, 92.4%, 85.14%) !important;
  --link-external-color: hsl(253, 92.4%, 85.14%) !important;
  --link-unresolved-color: hsl(253, 92.4%, 85.14%) !important;
  --list-marker-color-collapsed: hsl(253, 92.4%, 85.14%) !important;
  --menu-background: #080808 !important;
  --metadata-input-text-color: #f5f7fa !important;
  --modal-background: #080808 !important;
  --nav-heading-color: #f5f7fa !important;
  --nav-heading-color-hover: #f5f7fa !important;
  --nav-item-color-active: #f5f7fa !important;
  --nav-item-color-highlighted: hsl(253, 92.4%, 85.14%) !important;
  --nav-item-color-hover: #f5f7fa !important;
  --nav-item-color-selected: #f5f7fa !important;
  --pdf-background: #080808 !important;
  --pdf-page-background: #080808 !important;
  --pdf-sidebar-background: #080808 !important;
  --pill-color-hover: #f5f7fa !important;
  --pill-color-remove-hover: hsl(253, 92.4%, 85.14%) !important;
  --prompt-background: #080808 !important;
  --ribbon-background: #080808 !important;
  --ribbon-background-collapsed: #080808 !important;
  --search-result-background: #080808 !important;
  --secondary: hsl(253, 92.4%, 85.14%) !important;
  --selection-color: #f5f7fa !important;
  --setting-group-heading-color: #f5f7fa !important;
  --status-bar-background: #080808 !important;
  --suggestion-background: #080808 !important;
  --tab-background-active: #080808 !important;
  --tab-container-background: #080808 !important;
  --tab-switcher-background: #080808 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent) !important;
  --tab-text-color-focused-active-current: #f5f7fa !important;
  --tab-text-color-focused-highlighted: hsl(253, 92.4%, 85.14%) !important;
  --table-header-color: #f5f7fa !important;
  --tag-color: hsl(253, 92.4%, 85.14%) !important;
  --tag-color-hover: hsl(253, 92.4%, 85.14%) !important;
  --tertiary: hsl(253, 92.4%, 85.14%) !important;
  --text-accent: hsl(253, 92.4%, 85.14%) !important;
  --text-normal: #f5f7fa !important;
  --text-selection: hsl(253, 92.4%, 85.14%) !important;
  --titleFont: 'pixel_squareregular' !important;
  --titlebar-background: #080808 !important;
  --titlebar-text-color-focused: #f5f7fa !important;
  --vault-profile-color: #f5f7fa !important;
  --vault-profile-color-hover: #f5f7fa !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body del {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body p {
  font-family: pixel_squareregular;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
  text-decoration-color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
  text-decoration-color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(197, 182, 252);
  font-family: pixel_squareregular;
  outline: rgb(197, 182, 252) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body dt {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: pixel_squareregular;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body table {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  width: 231.75px;
}

html[saved-theme="dark"] body td {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body th {
  color: rgb(245, 247, 250);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 18);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 18);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(17, 17, 18);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(17, 17, 18);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    embeds: `html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-left-width: 0px;
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(245, 247, 250);
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(8, 8, 8);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
  outline: rgb(245, 247, 250) none 0px;
  text-decoration-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(197, 182, 252);
}

html[saved-theme="dark"] body h1 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h2 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h3 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h4 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h5 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body h6 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(8, 8, 8) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(8, 8, 8);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: pixel_squareregular;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(8, 8, 8);
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(245, 247, 250);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(245, 247, 250);
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: pixel_squareregular;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body ul.section-ul {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body .metadata {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: pixel_squareregular;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(8, 8, 8);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body abbr {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body input[type=text] {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(17, 17, 18);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(245, 247, 250);
  border-right-color: rgb(245, 247, 250);
  border-top-color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body sub {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body summary {
  color: rgb(245, 247, 250);
}

html[saved-theme="dark"] body sup {
  color: rgb(245, 247, 250);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #f5f7fa !important;
  --background-secondary: #f5f7fa !important;
  --bases-cards-background: #f5f7fa !important;
  --bases-table-cell-background-active: #f5f7fa !important;
  --bases-table-header-background: #f5f7fa !important;
  --bases-table-summary-background: #f5f7fa !important;
  --blur-background: color-mix(in srgb, #f5f7fa 65%, transparent) linear-gradient(#f5f7fa, color-mix(in srgb, #f5f7fa 65%, transparent)) !important;
  --bodyFont: 'pixel_squareregular' !important;
  --canvas-background: #f5f7fa !important;
  --caret-color: #080808 !important;
  --checkbox-marker-color: #f5f7fa !important;
  --code-normal: #080808 !important;
  --code-string: #4682e3 !important;
  --codeFont: 'pixel_squareregular' !important;
  --collapse-icon-color-collapsed: hsl(257, 88.88%, 70.95%) !important;
  --color-accent: hsl(257, 88.88%, 70.95%) !important;
  --dark: #080808 !important;
  --darkgray: #080808 !important;
  --file-header-background: #f5f7fa !important;
  --file-header-background-focused: #f5f7fa !important;
  --flair-color: #080808 !important;
  --font-mermaid: 'pixel_squareregular' !important;
  --font-text: 'pixel_squareregular' !important;
  --graph-node-focused: hsl(257, 88.88%, 70.95%) !important;
  --graph-text: #080808 !important;
  --gray: #080808 !important;
  --headerFont: 'pixel_squareregular' !important;
  --icon-color-active: hsl(257, 88.88%, 70.95%) !important;
  --icon-color-focused: #080808 !important;
  --light: #f5f7fa !important;
  --lightgray: #f5f7fa !important;
  --link-color: hsl(257, 88.88%, 70.95%) !important;
  --link-external-color: hsl(257, 88.88%, 70.95%) !important;
  --link-unresolved-color: hsl(257, 88.88%, 70.95%) !important;
  --list-marker-color-collapsed: hsl(257, 88.88%, 70.95%) !important;
  --menu-background: #f5f7fa !important;
  --metadata-input-text-color: #080808 !important;
  --modal-background: #f5f7fa !important;
  --nav-heading-color: #080808 !important;
  --nav-heading-color-hover: #080808 !important;
  --nav-item-color-active: #080808 !important;
  --nav-item-color-highlighted: hsl(257, 88.88%, 70.95%) !important;
  --nav-item-color-hover: #080808 !important;
  --nav-item-color-selected: #080808 !important;
  --pdf-background: #f5f7fa !important;
  --pdf-page-background: #f5f7fa !important;
  --pdf-sidebar-background: #f5f7fa !important;
  --pill-color-hover: #080808 !important;
  --pill-color-remove-hover: hsl(257, 88.88%, 70.95%) !important;
  --prompt-background: #f5f7fa !important;
  --raised-background: color-mix(in srgb, #f5f7fa 65%, transparent) linear-gradient(#f5f7fa, color-mix(in srgb, #f5f7fa 65%, transparent)) !important;
  --ribbon-background: #f5f7fa !important;
  --ribbon-background-collapsed: #f5f7fa !important;
  --search-result-background: #f5f7fa !important;
  --secondary: hsl(257, 88.88%, 70.95%) !important;
  --selection-color: #f5f7fa !important;
  --setting-group-heading-color: #080808 !important;
  --status-bar-background: #f5f7fa !important;
  --suggestion-background: #f5f7fa !important;
  --tab-background-active: #f5f7fa !important;
  --tab-container-background: #f5f7fa !important;
  --tab-switcher-background: #f5f7fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f5f7fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(257, 88.88%, 70.95%) !important;
  --tab-text-color-focused-active-current: #080808 !important;
  --tab-text-color-focused-highlighted: hsl(257, 88.88%, 70.95%) !important;
  --table-header-color: #080808 !important;
  --tag-color: hsl(257, 88.88%, 70.95%) !important;
  --tag-color-hover: hsl(257, 88.88%, 70.95%) !important;
  --tertiary: hsl(257, 88.88%, 70.95%) !important;
  --text-accent: hsl(257, 88.88%, 70.95%) !important;
  --text-normal: #080808 !important;
  --text-selection: hsl(255, 89.76%, 75.9%) !important;
  --titleFont: 'pixel_squareregular' !important;
  --titlebar-background: #f5f7fa !important;
  --titlebar-text-color-focused: #080808 !important;
  --vault-profile-color: #080808 !important;
  --vault-profile-color-hover: #080808 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body del {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body p {
  font-family: pixel_squareregular;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
  text-decoration-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
  text-decoration-color: rgb(152, 115, 247);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(152, 115, 247);
  font-family: pixel_squareregular;
  outline: rgb(152, 115, 247) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body dt {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul > li {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: pixel_squareregular;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body table {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  width: 231.75px;
}

html[saved-theme="light"] body td {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body th {
  color: rgb(8, 8, 8);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(8, 8, 8);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body figcaption {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    embeds: `html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(8, 8, 8);
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(245, 247, 250);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
  outline: rgb(8, 8, 8) none 0px;
  text-decoration-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(245, 247, 250);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(152, 115, 247);
}

html[saved-theme="light"] body h1 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h2 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h3 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h4 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h5 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body h6 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 247, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 247, 250);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: pixel_squareregular;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 247, 250);
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(8, 8, 8);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(8, 8, 8);
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: pixel_squareregular;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body ul.section-ul {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body .metadata {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: pixel_squareregular;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 247, 250);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body abbr {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body input[type=text] {
  background-color: rgb(245, 247, 250);
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sub {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body summary {
  color: rgb(8, 8, 8);
}

html[saved-theme="light"] body sup {
  color: rgb(8, 8, 8);
}`,
  },
};
