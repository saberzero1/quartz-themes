import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "blackbird", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #000000;
  --background-primary-alt: #000000;
  --background-secondary: #000000;
  --background-secondary-alt: #000000;
  --bases-cards-background: #000000;
  --bases-cards-cover-background: #000000;
  --bases-group-heading-property-color: #E1DC3F;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-background-disabled: #000000;
  --bases-table-group-background: #000000;
  --bases-table-header-background: #000000;
  --bases-table-header-color: #E1DC3F;
  --bases-table-summary-background: #000000;
  --canvas-background: #000000;
  --caret-color: #FDF7CD;
  --checkbox-border-color-hover: #E1DC3F;
  --checkbox-marker-color: #000000;
  --checklist-done-color: #E1DC3F;
  --code-background: #000000;
  --code-normal: #FDF7CD;
  --code-punctuation: #E1DC3F;
  --collapse-icon-color-collapsed: #E92741;
  --color-1: #FDF7CD;
  --color-2: #00ECD8;
  --color-3: #E92741;
  --color-4: #3EC840;
  --color-5: #E1DC3F;
  --color-6: #418FDD;
  --color-7: #FF9900;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --flair-color: #FDF7CD;
  --footnote-id-color: #E1DC3F;
  --graph-node: #E1DC3F;
  --graph-node-focused: #E92741;
  --graph-text: #FDF7CD;
  --icon-color: #E1DC3F;
  --icon-color-active: #E92741;
  --icon-color-focused: #FDF7CD;
  --icon-color-hover: #E1DC3F;
  --interactive-accent-rgb: 72, 54, 153;
  --link-color: #E92741;
  --link-external-color: #E92741;
  --link-unresolved-color: #E92741;
  --list-marker-color-collapsed: #E92741;
  --list-marker-color-hover: #E1DC3F;
  --menu-background: #000000;
  --metadata-input-text-color: #FDF7CD;
  --metadata-label-text-color: #E1DC3F;
  --metadata-label-text-color-hover: #E1DC3F;
  --modal-background: #000000;
  --nav-heading-color: #FDF7CD;
  --nav-heading-color-collapsed-hover: #E1DC3F;
  --nav-heading-color-hover: #FDF7CD;
  --nav-item-color: #E1DC3F;
  --nav-item-color-active: #FDF7CD;
  --nav-item-color-highlighted: #E92741;
  --nav-item-color-hover: #FDF7CD;
  --nav-item-color-selected: #FDF7CD;
  --nav-tag-color-active: #E1DC3F;
  --nav-tag-color-hover: #E1DC3F;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-sidebar-background: #000000;
  --pill-color: #E1DC3F;
  --pill-color-hover: #FDF7CD;
  --pill-color-remove-hover: #E92741;
  --prompt-background: #000000;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --search-clear-button-color: #E1DC3F;
  --search-icon-color: #E1DC3F;
  --search-result-background: #000000;
  --setting-group-heading-color: #FDF7CD;
  --setting-items-background: #000000;
  --status-bar-background: #000000;
  --status-bar-text-color: #E1DC3F;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #000000;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color-active: #E1DC3F;
  --tab-text-color-focused: #E1DC3F;
  --tab-text-color-focused-active: #E1DC3F;
  --tab-text-color-focused-active-current: #FDF7CD;
  --tab-text-color-focused-highlighted: #E92741;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8);
  --table-header-color: #FDF7CD;
  --tag-color: #E92741;
  --tag-color-hover: #E92741;
  --text-accent: #E92741;
  --text-muted: #E1DC3F;
  --text-normal: #FDF7CD;
  --text-on-accent: rgba(0, 0, 0, 0.8);
  --text-selection: rgba(0, 122, 255, 0.2);
  --titlebar-background: #000000;
  --titlebar-background-focused: #000000;
  --titlebar-text-color: #E1DC3F;
  --titlebar-text-color-focused: #FDF7CD;
  --vault-profile-color: #FDF7CD;
  --vault-profile-color-hover: #FDF7CD;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body .page article p > em, em {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body .page article p > i, i {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body .page article p > strong, strong {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body .text-highlight {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body del {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: line-through rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body p {
  color: rgb(225, 220, 63);
  outline: rgb(225, 220, 63) none 0px;
  text-decoration: rgb(225, 220, 63);
  text-decoration-color: rgb(225, 220, 63);
}`,
    links: `body a.external, footer a {
  color: rgb(233, 39, 65);
  outline: rgb(233, 39, 65) none 0px;
  text-decoration: underline rgb(233, 39, 65);
  text-decoration-color: rgb(233, 39, 65);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(233, 39, 65);
  outline: rgb(233, 39, 65) none 0px;
  text-decoration: underline rgb(233, 39, 65);
  text-decoration-color: rgb(233, 39, 65);
}

body a.internal.broken {
  color: rgb(233, 39, 65);
  outline: rgb(233, 39, 65) none 0px;
}`,
    lists: `body dd {
  color: rgb(253, 247, 205);
}

body dt {
  color: rgb(253, 247, 205);
}

body ol > li {
  color: rgb(253, 247, 205);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body ul > li {
  color: rgb(253, 247, 205);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body table {
  color: rgb(253, 247, 205);
}

body td {
  color: rgb(253, 247, 205);
}

body th {
  color: rgb(253, 247, 205);
}`,
    code: `body code {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(0, 0, 0);
  color: rgb(253, 247, 205);
}

body pre > code, pre:has(> code) {
  background-color: rgb(0, 0, 0);
}

body pre:has(> code) {
  background-color: rgb(0, 0, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body figcaption {
  color: rgb(253, 247, 205);
}

body figure {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body img {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body video {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
}

body .footnotes {
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

body .transclude {
  border-bottom-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body .transclude-inner {
  border-bottom-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(225, 220, 63);
  text-decoration: line-through rgb(225, 220, 63);
  text-decoration-color: rgb(225, 220, 63);
}

body li.task-list-item[data-task='!'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(253, 247, 205);
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}`,
    search: `body .search > .search-button {
  color: rgb(253, 247, 205);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(253, 247, 205);
  outline: rgb(253, 247, 205) none 0px;
  text-decoration: rgb(253, 247, 205);
  text-decoration-color: rgb(253, 247, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(253, 247, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(253, 247, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 122, 255, 0.2);
  color: rgb(253, 247, 205);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 122, 255, 0.2);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 122, 255, 0.2);
  color: rgb(253, 247, 205);
}

body a.internal.tag-link::before {
  color: rgb(233, 39, 65);
}

body h1 {
  color: rgb(253, 247, 205);
}

body h2 {
  color: rgb(253, 247, 205);
}

body h2.page-title, h2.page-title a {
  color: rgb(253, 247, 205);
}

body h3 {
  color: rgb(253, 247, 205);
}

body h4 {
  color: rgb(253, 247, 205);
}

body h5 {
  color: rgb(253, 247, 205);
}

body h6 {
  color: rgb(233, 39, 65);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(225, 220, 63);
}

body footer ul li a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(253, 247, 205);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(225, 220, 63);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body li.section-li > .section .meta {
  color: rgb(225, 220, 63);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(225, 220, 63);
  text-decoration: rgb(225, 220, 63);
}

body ul.section-ul {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}

body .darkmode svg {
  color: rgb(225, 220, 63);
  stroke: rgb(225, 220, 63);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

body .metadata {
  color: rgb(225, 220, 63);
}

body .metadata-properties {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(253, 247, 205);
}

body abbr {
  color: rgb(253, 247, 205);
  text-decoration: underline dotted rgb(253, 247, 205);
}

body details {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body input[type=text] {
  border-bottom-color: rgb(225, 220, 63);
  border-left-color: rgb(225, 220, 63);
  border-right-color: rgb(225, 220, 63);
  border-top-color: rgb(225, 220, 63);
  color: rgb(225, 220, 63);
}

body kbd {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
  color: rgb(253, 247, 205);
}

body progress {
  border-bottom-color: rgb(253, 247, 205);
  border-left-color: rgb(253, 247, 205);
  border-right-color: rgb(253, 247, 205);
  border-top-color: rgb(253, 247, 205);
}

body sub {
  color: rgb(253, 247, 205);
}

body summary {
  color: rgb(253, 247, 205);
}

body sup {
  color: rgb(253, 247, 205);
}`,
  },
  light: {},
};
