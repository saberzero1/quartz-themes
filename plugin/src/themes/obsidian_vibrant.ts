import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "obsidian_vibrant",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --accent-color-borders: #ffffff !important;
  --accent-color-text: #ffff00 !important;
  --accent-color-text-inverted: #000000 !important;
  --background-primary: #222222 !important;
  --background-secondary: #333333 !important;
  --background-third: #444444 !important;
  --bases-cards-background: #222222 !important;
  --bases-table-cell-background-active: #222222 !important;
  --bases-table-header-background: #222222 !important;
  --bases-table-summary-background: #222222 !important;
  --canvas-background: #222222 !important;
  --caret-color: #ffffff !important;
  --checkbox-marker-color: #222222 !important;
  --code-normal: #ffffff !important;
  --color-icon: #ffffff !important;
  --dark: #ffffff !important;
  --darkgray: #ffffff !important;
  --file-header-background: #222222 !important;
  --file-header-background-focused: #222222 !important;
  --flair-color: #ffffff !important;
  --graph-text: #ffffff !important;
  --gray: #ffffff !important;
  --gray-color: #585858 !important;
  --icon-color-focused: #ffffff !important;
  --light: #222222 !important;
  --lightgray: #333333 !important;
  --menu-background: #333333 !important;
  --metadata-input-text-color: #ffffff !important;
  --modal-background: #222222 !important;
  --nav-heading-color: #ffffff !important;
  --nav-heading-color-hover: #ffffff !important;
  --nav-item-color-active: #ffffff !important;
  --nav-item-color-hover: #ffffff !important;
  --nav-item-color-selected: #ffffff !important;
  --pdf-background: #222222 !important;
  --pdf-page-background: #222222 !important;
  --pdf-sidebar-background: #222222 !important;
  --pdf-title-h1: #810000 !important;
  --pdf-title-h2: #008100 !important;
  --pdf-title-h3: #1d00c0 !important;
  --pdf-title-h4: #008181 !important;
  --pdf-title-h5: #915e00 !important;
  --pdf-title-h6: #6c00be !important;
  --pill-color-hover: #ffffff !important;
  --prompt-background: #222222 !important;
  --ribbon-background: #333333 !important;
  --ribbon-background-collapsed: #222222 !important;
  --search-result-background: #222222 !important;
  --setting-group-heading-color: #ffffff !important;
  --status-bar-background: #333333 !important;
  --suggestion-background: #222222 !important;
  --tab-background-active: #222222 !important;
  --tab-container-background: #333333 !important;
  --tab-switcher-background: #333333 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #333333, transparent) !important;
  --tab-text-color-focused-active-current: #ffffff !important;
  --table-header-color: #ffffff !important;
  --text-bold: #ff0000 !important;
  --text-highlight: #ffff00 !important;
  --text-italics: #00ffff !important;
  --text-link: #00ff00 !important;
  --text-normal: #ffffff !important;
  --text-strikethrough: #ff00ff !important;
  --text-title-h1: #ff0000 !important;
  --text-title-h2: #00ff00 !important;
  --text-title-h3: #ffff00 !important;
  --text-title-h4: #00ffff !important;
  --text-title-h5: #ffa500 !important;
  --text-title-h6: #ff00aa !important;
  --titlebar-background: #333333 !important;
  --titlebar-text-color-focused: #ffffff !important;
  --vault-profile-color: #ffffff !important;
  --vault-profile-color-hover: #ffffff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 51, 51);
  color: rgb(34, 34, 34);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 51, 51);
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

html body .page article p > em, html em {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(0, 255, 255);
  outline: rgb(0, 255, 255) none 0px;
  text-decoration: rgb(0, 255, 255);
  text-decoration-color: rgb(0, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(255, 255, 0);
  outline: rgb(255, 255, 0) none 0px;
  text-decoration: rgb(255, 255, 0);
  text-decoration-color: rgb(255, 255, 0);
}

html body del {
  color: rgb(255, 0, 255);
  outline: rgb(255, 0, 255) none 0px;
  text-decoration: rgb(255, 0, 255);
  text-decoration-color: rgb(255, 0, 255);
}`,
    links: `html body a.external, html footer a {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}

html body a.internal.broken {
  color: rgb(0, 255, 0);
  outline: rgb(0, 255, 0) none 0px;
  text-decoration: rgb(0, 255, 0);
  text-decoration-color: rgb(0, 255, 0);
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    tables: `html body .spacer {
  background-color: rgb(34, 34, 34);
}

html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
  width: 231.219px;
}

html body td {
  color: rgb(255, 255, 255);
}

html body th {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(88, 88, 88);
  border-bottom-width: 3px;
  border-left-color: rgb(88, 88, 88);
  border-left-width: 3px;
  border-right-color: rgb(88, 88, 88);
  border-right-width: 3px;
  border-top-color: rgb(88, 88, 88);
  border-top-width: 3px;
  color: rgb(255, 255, 0);
}`,
    code: `html body code {
  background-color: rgb(68, 68, 68);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 68, 68);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 68, 68);
  color: rgb(255, 255, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(68, 68, 68);
}

html body pre:has(> code) {
  background-color: rgb(68, 68, 68);
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 0px;
  transition: 0.3s;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(65, 135, 255);
  border-left-color: rgb(65, 135, 255);
  border-right-color: rgb(65, 135, 255);
  border-top-color: rgb(65, 135, 255);
}

html body .callout[data-callout="abstract"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(157, 225, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(157, 225, 255);
  border-left-width: 2px;
  border-right-color: rgb(157, 225, 255);
  border-right-width: 2px;
  border-top-color: rgb(157, 225, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="bug"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 93);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 93);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 93);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 93);
  border-top-width: 2px;
}

html body .callout[data-callout="danger"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 51);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 51);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 51);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 51);
  border-top-width: 2px;
}

html body .callout[data-callout="example"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(158, 119, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(158, 119, 255);
  border-left-width: 2px;
  border-right-color: rgb(158, 119, 255);
  border-right-width: 2px;
  border-top-color: rgb(158, 119, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="failure"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 0, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 0, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 0, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 0, 0);
  border-top-width: 2px;
}

html body .callout[data-callout="info"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 221, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="note"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(65, 135, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 135, 255);
  border-left-width: 2px;
  border-right-color: rgb(65, 135, 255);
  border-right-width: 2px;
  border-top-color: rgb(65, 135, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="question"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(98, 255, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(98, 255, 0);
  border-left-width: 2px;
  border-right-color: rgb(98, 255, 0);
  border-right-width: 2px;
  border-top-color: rgb(98, 255, 0);
  border-top-width: 2px;
}

html body .callout[data-callout="quote"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="success"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 255, 98);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 98);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 98);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 98);
  border-top-width: 2px;
}

html body .callout[data-callout="tip"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 255, 229);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 255, 229);
  border-left-width: 2px;
  border-right-color: rgb(0, 255, 229);
  border-right-width: 2px;
  border-top-color: rgb(0, 255, 229);
  border-top-width: 2px;
}

html body .callout[data-callout="todo"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(0, 221, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(0, 221, 255);
  border-left-width: 2px;
  border-right-color: rgb(0, 221, 255);
  border-right-width: 2px;
  border-top-color: rgb(0, 221, 255);
  border-top-width: 2px;
}

html body .callout[data-callout="warning"] {
  background-color: rgb(51, 51, 51);
  border-bottom-color: rgb(255, 149, 0);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 149, 0);
  border-left-width: 2px;
  border-right-color: rgb(255, 149, 0);
  border-right-width: 2px;
  border-top-color: rgb(255, 149, 0);
  border-top-width: 2px;
}`,
    search: `html body .search > .search-button {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 2px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(255, 0, 0);
}

html body h2 {
  color: rgb(0, 255, 0);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
}

html body h3 {
  color: rgb(255, 255, 0);
}

html body h4 {
  color: rgb(0, 255, 255);
}

html body h5 {
  color: rgb(255, 165, 0);
}

html body h6 {
  color: rgb(255, 0, 170);
}

html body hr {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    scrollbars: `html body .callout {
  border-bottom-color: rgb(65, 135, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(65, 135, 255);
  border-left-width: 2px;
  border-right-color: rgb(65, 135, 255);
  border-right-width: 2px;
  border-top-color: rgb(65, 135, 255);
  border-top-width: 2px;
}

html body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `html body footer {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 1px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-right-width: 1px;
  border-top-color: rgb(255, 255, 255);
}

html body footer ul li a {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(34, 34, 34);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(34, 34, 34);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}

html body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
}

html body ul.section-ul {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .darkmode svg {
  color: rgb(255, 255, 255);
  stroke: rgb(255, 255, 255);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .breadcrumb-element p {
  color: rgb(255, 255, 255);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-bottom-left-radius: 7.55906px;
  border-bottom-right-radius: 7.55906px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(51, 51, 51);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgb(51, 51, 51);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgb(51, 51, 51);
  border-top-left-radius: 7.55906px;
  border-top-right-radius: 7.55906px;
  border-top-style: solid;
  border-top-width: 2px;
}

html body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

html body .page-header h2.page-title {
  color: rgb(255, 255, 0);
}

html body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body input[type=text] {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 2px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 2px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 2px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 2px;
}

html body kbd {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
