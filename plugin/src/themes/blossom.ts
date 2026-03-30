import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "blossom", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-glow: rgba(255, 5, 141, 0.4) !important;
  --background-primary: #13141f !important;
  --background-primary-alt: #181924 !important;
  --background-secondary: #0d0e16 !important;
  --background-secondary-alt: #0d0e16 !important;
  --bases-cards-background: #13141f !important;
  --bases-cards-cover-background: #181924 !important;
  --bases-group-heading-property-color: #8e8e9e !important;
  --bases-table-cell-background-active: #13141f !important;
  --bases-table-cell-background-disabled: #181924 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff058d !important;
  --bases-table-group-background: #181924 !important;
  --bases-table-header-background: #13141f !important;
  --bases-table-header-color: #8e8e9e !important;
  --bases-table-summary-background: #13141f !important;
  --blockquote-border-color: #ff058d !important;
  --blossom-cyan: #00d4ff !important;
  --blossom-mint: #00ff7d !important;
  --blossom-orange: #ff5555 !important;
  --blossom-pink: #ff058d !important;
  --blossom-purple: #9200ff !important;
  --blossom-salmon: #ea748f !important;
  --blossom-yellow: #f5ac00 !important;
  --canvas-background: #13141f !important;
  --canvas-card-label-color: #5c5c66 !important;
  --caret-color: #ececec !important;
  --checkbox-border-color: #5c5c66 !important;
  --checkbox-border-color-hover: #8e8e9e !important;
  --checkbox-color: #ff058d !important;
  --checkbox-marker-color: #13141f !important;
  --checklist-done-color: #8e8e9e !important;
  --code-background: #181924 !important;
  --code-comment: #5c5c66 !important;
  --code-normal: #ececec !important;
  --code-punctuation: #8e8e9e !important;
  --collapse-icon-color: #5c5c66 !important;
  --dark: #ececec !important;
  --darkgray: #ececec !important;
  --divider-color: transparent !important;
  --divider-color-hover: #ff058d !important;
  --divider-width: 0px !important;
  --dropdown-background-hover: rgba(255, 255, 255, 0.05) !important;
  --embed-border-start: 2px solid #ff058d !important;
  --file-header-background: #13141f !important;
  --file-header-background-focused: #13141f !important;
  --flair-color: #ececec !important;
  --font-headings: "Playfair Display", "Merriweather", "Georgia", serif !important;
  --footnote-id-color: #8e8e9e !important;
  --footnote-id-color-no-occurrences: #5c5c66 !important;
  --glass-bg: rgba(16, 17, 22, 0.85) !important;
  --glass-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5) !important;
  --graph-node: #8e8e9e !important;
  --graph-node-unresolved: #5c5c66 !important;
  --graph-text: #ececec !important;
  --gray: #8e8e9e !important;
  --header-line-height: 1.2 !important;
  --heading-formatting: #5c5c66 !important;
  --icon-color: #8e8e9e !important;
  --icon-color-focused: #ececec !important;
  --icon-color-hover: #8e8e9e !important;
  --input-date-separator: #5c5c66 !important;
  --input-placeholder-color: #5c5c66 !important;
  --interactive-accent: #ff058d !important;
  --interactive-hover: rgba(255, 255, 255, 0.05) !important;
  --light: #13141f !important;
  --lightgray: #0d0e16 !important;
  --list-marker-color: #5c5c66 !important;
  --list-marker-color-hover: #8e8e9e !important;
  --menu-background: #0d0e16 !important;
  --metadata-input-text-color: #ececec !important;
  --metadata-label-text-color: #8e8e9e !important;
  --metadata-label-text-color-hover: #8e8e9e !important;
  --modal-background: #13141f !important;
  --nav-collapse-icon-color: #5c5c66 !important;
  --nav-collapse-icon-color-collapsed: #5c5c66 !important;
  --nav-heading-color: #ececec !important;
  --nav-heading-color-collapsed: #5c5c66 !important;
  --nav-heading-color-collapsed-hover: #8e8e9e !important;
  --nav-heading-color-hover: #ececec !important;
  --nav-item-color: #8e8e9e !important;
  --nav-item-color-active: #ececec !important;
  --nav-item-color-hover: #ececec !important;
  --nav-item-color-selected: #ececec !important;
  --nav-tag-color: #5c5c66 !important;
  --nav-tag-color-active: #8e8e9e !important;
  --nav-tag-color-hover: #8e8e9e !important;
  --pdf-background: #13141f !important;
  --pdf-page-background: #13141f !important;
  --pdf-sidebar-background: #13141f !important;
  --pill-color: #8e8e9e !important;
  --pill-color-hover: #ececec !important;
  --pill-color-remove: #5c5c66 !important;
  --prompt-background: #13141f !important;
  --ribbon-background: #0d0e16 !important;
  --ribbon-background-collapsed: #13141f !important;
  --search-clear-button-color: #8e8e9e !important;
  --search-icon-color: #8e8e9e !important;
  --search-result-background: #13141f !important;
  --secondary: #ff058d !important;
  --selection-color: rgba(255, 5, 141, 0.25) !important;
  --setting-group-heading-color: #ececec !important;
  --setting-items-background: #181924 !important;
  --status-bar-background: #0d0e16 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-text-color: #8e8e9e !important;
  --suggestion-background: #13141f !important;
  --tab-background-active: #13141f !important;
  --tab-container-background: #0d0e16 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-switcher-background: #0d0e16 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0d0e16, transparent) !important;
  --tab-text-color: #5c5c66 !important;
  --tab-text-color-active: #8e8e9e !important;
  --tab-text-color-focused: #8e8e9e !important;
  --tab-text-color-focused-active: #8e8e9e !important;
  --tab-text-color-focused-active-current: #ececec !important;
  --table-drag-handle-background-active: #ff058d !important;
  --table-drag-handle-color: #5c5c66 !important;
  --table-header-color: #ececec !important;
  --table-selection-border-color: #ff058d !important;
  --text-faint: #5c5c66 !important;
  --text-muted: #8e8e9e !important;
  --text-normal: #ececec !important;
  --titlebar-background: #0d0e16 !important;
  --titlebar-background-focused: #0d0e16 !important;
  --titlebar-text-color: #8e8e9e !important;
  --titlebar-text-color-focused: #ececec !important;
  --vault-profile-color: #ececec !important;
  --vault-profile-color-hover: #ececec !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(13, 14, 22);
  color: rgb(236, 236, 236);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(19, 20, 31);
  color: rgb(236, 236, 236);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(13, 14, 22);
  color: rgb(236, 236, 236);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(13, 14, 22);
  border-left-color: rgb(128, 128, 128);
  color: rgb(236, 236, 236);
}

html body div#quartz-root {
  background-color: rgb(19, 20, 31);
  color: rgb(236, 236, 236);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 5, 141);
  font-weight: 700;
  outline: rgb(255, 5, 141) none 0px;
  text-decoration-color: rgb(255, 5, 141);
}

html body .page article p > em, html em {
  color: rgb(0, 212, 255);
  outline: rgb(0, 212, 255) none 0px;
  text-decoration-color: rgb(0, 212, 255);
}

html body .page article p > i, html i {
  color: rgb(0, 212, 255);
  outline: rgb(0, 212, 255) none 0px;
  text-decoration-color: rgb(0, 212, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 5, 141);
  font-weight: 700;
  outline: rgb(255, 5, 141) none 0px;
  text-decoration-color: rgb(255, 5, 141);
}

html body .text-highlight {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration-color: rgb(236, 236, 236);
}

html body del {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration-color: rgb(236, 236, 236);
}

html body p {
  color: rgb(142, 142, 158);
  outline: rgb(142, 142, 158) none 0px;
  text-decoration-color: rgb(142, 142, 158);
}`,
    links: `html body a.internal.broken {
  text-decoration-color: rgb(166, 138, 249);
}`,
    lists: `html body dd {
  color: rgb(236, 236, 236);
}

html body dt {
  color: rgb(236, 236, 236);
}

html body ol > li {
  color: rgb(236, 236, 236);
}

html body ol.overflow {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body ul > li {
  color: rgb(236, 236, 236);
}

html body ul.overflow {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(92, 92, 102);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body table {
  color: rgb(236, 236, 236);
  width: 230.922px;
}

html body td {
  color: rgb(236, 236, 236);
}

html body th {
  color: rgb(236, 236, 236);
}`,
    code: `html body code {
  border-bottom-color: rgb(0, 255, 125);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(0, 255, 125);
  border-right-color: rgb(0, 255, 125);
  border-top-color: rgb(0, 255, 125);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(0, 255, 125);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  color: rgb(236, 236, 236);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}

html body pre:has(> code) {
  background-color: rgb(8, 8, 10);
  border-bottom-color: rgb(236, 236, 236);
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  padding-bottom: 20px;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 20px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body figcaption {
  color: rgb(236, 236, 236);
}

html body figure {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body img {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body video {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(24, 25, 36);
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
}

html body .footnotes {
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .transclude {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(255, 5, 141);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body .transclude-inner {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(255, 5, 141);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(142, 142, 158);
  text-decoration-color: rgb(142, 142, 158);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  border-top-width: 0px;
  transition: 0.2s;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(19, 20, 31);
}`,
    search: `html body .search > .search-button {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space {
  background-color: rgb(19, 20, 31);
}

html body .search > .search-container > .search-space > * {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration-color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 236, 236);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(13, 14, 22);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(236, 236, 236);
}

html body h1 {
  color: rgb(146, 0, 255);
}

html body h2 {
  color: rgb(0, 255, 125);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(236, 236, 236);
}

html body h3 {
  color: rgb(0, 212, 255);
}

html body h4 {
  color: rgb(245, 172, 0);
}

html body h5 {
  color: rgb(255, 85, 85);
}

html body h6 {
  color: rgb(234, 116, 143);
}

html body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

html body ::-webkit-scrollbar-track {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 158);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 158);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}`,
    footer: `html body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(142, 142, 158);
  border-top-width: 0px;
  color: rgb(142, 142, 158);
}

html body footer ul li a {
  color: rgb(142, 142, 158);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(236, 236, 236);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 158);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 158);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body li.section-li > .section .meta {
  color: rgb(142, 142, 158);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 158);
}

html body ul.section-ul {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body .darkmode svg {
  color: rgb(142, 142, 158);
  stroke: rgb(142, 142, 158);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body .breadcrumb-element p {
  color: rgb(92, 92, 102);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body .metadata {
  color: rgb(142, 142, 158);
}

html body .metadata-properties {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

html body .page-header h2.page-title {
  color: rgb(236, 236, 236);
}

html body abbr {
  color: rgb(236, 236, 236);
}

html body details {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body input[type=text] {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

html body kbd {
  background-color: rgb(24, 25, 36);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

html body progress {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

html body sub {
  color: rgb(236, 236, 236);
}

html body summary {
  color: rgb(236, 236, 236);
}

html body sup {
  color: rgb(236, 236, 236);
}`,
  },
  light: {},
};
