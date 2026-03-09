import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "blossom", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-glow: rgba(255, 5, 141, 0.4);
  --background-primary: #13141f;
  --background-primary-alt: #181924;
  --background-secondary: #0d0e16;
  --background-secondary-alt: #0d0e16;
  --bases-cards-background: #13141f;
  --bases-cards-cover-background: #181924;
  --bases-group-heading-property-color: #8e8e9e;
  --bases-table-cell-background-active: #13141f;
  --bases-table-cell-background-disabled: #181924;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff058d;
  --bases-table-group-background: #181924;
  --bases-table-header-background: #13141f;
  --bases-table-header-color: #8e8e9e;
  --bases-table-summary-background: #13141f;
  --blockquote-border-color: #ff058d;
  --blossom-cyan: #00d4ff;
  --blossom-mint: #00ff7d;
  --blossom-orange: #ff5555;
  --blossom-pink: #ff058d;
  --blossom-purple: #9200ff;
  --blossom-salmon: #ea748f;
  --blossom-yellow: #f5ac00;
  --canvas-background: #13141f;
  --canvas-card-label-color: #5c5c66;
  --caret-color: #ececec;
  --checkbox-border-color: #5c5c66;
  --checkbox-border-color-hover: #8e8e9e;
  --checkbox-color: #ff058d;
  --checkbox-marker-color: #13141f;
  --checklist-done-color: #8e8e9e;
  --code-background: #181924;
  --code-comment: #5c5c66;
  --code-normal: #ececec;
  --code-punctuation: #8e8e9e;
  --collapse-icon-color: #5c5c66;
  --divider-color: transparent;
  --divider-color-hover: #ff058d;
  --divider-width: 0px;
  --dropdown-background-hover: rgba(255, 255, 255, 0.05);
  --embed-border-start: 2px solid #ff058d;
  --file-header-background: #13141f;
  --file-header-background-focused: #13141f;
  --flair-color: #ececec;
  --font-headings: "Playfair Display", "Merriweather", "Georgia", serif;
  --footnote-id-color: #8e8e9e;
  --footnote-id-color-no-occurrences: #5c5c66;
  --glass-bg: rgba(16, 17, 22, 0.85);
  --glass-shadow: 0 10px 40px -10px rgba(0, 0, 0, 0.5);
  --graph-node: #8e8e9e;
  --graph-node-unresolved: #5c5c66;
  --graph-text: #ececec;
  --header-line-height: 1.2;
  --heading-formatting: #5c5c66;
  --icon-color: #8e8e9e;
  --icon-color-focused: #ececec;
  --icon-color-hover: #8e8e9e;
  --input-date-separator: #5c5c66;
  --input-placeholder-color: #5c5c66;
  --interactive-accent: #ff058d;
  --interactive-hover: rgba(255, 255, 255, 0.05);
  --list-marker-color: #5c5c66;
  --list-marker-color-hover: #8e8e9e;
  --menu-background: #0d0e16;
  --metadata-input-text-color: #ececec;
  --metadata-label-text-color: #8e8e9e;
  --metadata-label-text-color-hover: #8e8e9e;
  --modal-background: #13141f;
  --nav-collapse-icon-color: #5c5c66;
  --nav-collapse-icon-color-collapsed: #5c5c66;
  --nav-heading-color: #ececec;
  --nav-heading-color-collapsed: #5c5c66;
  --nav-heading-color-collapsed-hover: #8e8e9e;
  --nav-heading-color-hover: #ececec;
  --nav-item-color: #8e8e9e;
  --nav-item-color-active: #ececec;
  --nav-item-color-hover: #ececec;
  --nav-item-color-selected: #ececec;
  --nav-tag-color: #5c5c66;
  --nav-tag-color-active: #8e8e9e;
  --nav-tag-color-hover: #8e8e9e;
  --pdf-background: #13141f;
  --pdf-page-background: #13141f;
  --pdf-sidebar-background: #13141f;
  --pill-color: #8e8e9e;
  --pill-color-hover: #ececec;
  --pill-color-remove: #5c5c66;
  --prompt-background: #13141f;
  --ribbon-background: #0d0e16;
  --ribbon-background-collapsed: #13141f;
  --search-clear-button-color: #8e8e9e;
  --search-icon-color: #8e8e9e;
  --search-result-background: #13141f;
  --selection-color: rgba(255, 5, 141, 0.25);
  --setting-group-heading-color: #ececec;
  --setting-items-background: #181924;
  --status-bar-background: #0d0e16;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #8e8e9e;
  --suggestion-background: #13141f;
  --tab-background-active: #13141f;
  --tab-container-background: #0d0e16;
  --tab-divider-color: transparent;
  --tab-outline-color: transparent;
  --tab-switcher-background: #0d0e16;
  --tab-switcher-menubar-background: linear-gradient(to top, #0d0e16, transparent);
  --tab-text-color: #5c5c66;
  --tab-text-color-active: #8e8e9e;
  --tab-text-color-focused: #8e8e9e;
  --tab-text-color-focused-active: #8e8e9e;
  --tab-text-color-focused-active-current: #ececec;
  --table-drag-handle-background-active: #ff058d;
  --table-drag-handle-color: #5c5c66;
  --table-header-color: #ececec;
  --table-selection-border-color: #ff058d;
  --text-faint: #5c5c66;
  --text-muted: #8e8e9e;
  --text-normal: #ececec;
  --titlebar-background: #0d0e16;
  --titlebar-background-focused: #0d0e16;
  --titlebar-text-color: #8e8e9e;
  --titlebar-text-color-focused: #ececec;
  --vault-profile-color: #ececec;
  --vault-profile-color-hover: #ececec;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(13, 14, 22);
  color: rgb(236, 236, 236);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(19, 20, 31);
  color: rgb(236, 236, 236);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(13, 14, 22);
  color: rgb(236, 236, 236);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(13, 14, 22);
  border-left-color: rgb(128, 128, 128);
  color: rgb(236, 236, 236);
}

body div#quartz-root {
  background-color: rgb(19, 20, 31);
  color: rgb(236, 236, 236);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 5, 141);
  font-weight: 700;
  outline: rgb(255, 5, 141) none 0px;
  text-decoration: rgb(255, 5, 141);
  text-decoration-color: rgb(255, 5, 141);
}

body .page article p > em, em {
  color: rgb(0, 212, 255);
  outline: rgb(0, 212, 255) none 0px;
  text-decoration: rgb(0, 212, 255);
  text-decoration-color: rgb(0, 212, 255);
}

body .page article p > i, i {
  color: rgb(0, 212, 255);
  outline: rgb(0, 212, 255) none 0px;
  text-decoration: rgb(0, 212, 255);
  text-decoration-color: rgb(0, 212, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 5, 141);
  font-weight: 700;
  outline: rgb(255, 5, 141) none 0px;
  text-decoration: rgb(255, 5, 141);
  text-decoration-color: rgb(255, 5, 141);
}

body .text-highlight {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body del {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration: line-through rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body p {
  color: rgb(142, 142, 158);
  outline: rgb(142, 142, 158) none 0px;
  text-decoration: rgb(142, 142, 158);
  text-decoration-color: rgb(142, 142, 158);
}`,
    links: `body a.external, footer a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  text-decoration: rgb(166, 138, 249);
}

body a.internal.broken {
  text-decoration: rgb(166, 138, 249);
  text-decoration-color: rgb(166, 138, 249);
}`,
    lists: `body dd {
  color: rgb(236, 236, 236);
}

body dt {
  color: rgb(236, 236, 236);
}

body ol > li {
  color: rgb(236, 236, 236);
}

body ol.overflow {
  background-color: rgb(19, 20, 31);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body ul > li {
  color: rgb(236, 236, 236);
}

body ul.overflow {
  background-color: rgb(19, 20, 31);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(92, 92, 102);
  text-decoration: rgb(92, 92, 102);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body table {
  color: rgb(236, 236, 236);
  width: 230.922px;
}

body td {
  color: rgb(236, 236, 236);
}

body th {
  color: rgb(236, 236, 236);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body figcaption {
  color: rgb(236, 236, 236);
}

body figure {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body img {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body video {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 25, 36);
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
}

body .footnotes {
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

body .transclude {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(255, 5, 141);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body .transclude-inner {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(255, 5, 141);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(142, 142, 158);
  text-decoration: line-through rgb(142, 142, 158);
  text-decoration-color: rgb(142, 142, 158);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='*'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='-'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='/'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='>'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='?'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='I'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='S'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='b'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='c'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='d'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='f'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='i'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='k'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='l'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='p'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='u'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body li.task-list-item[data-task='w'] {
  color: rgb(236, 236, 236);
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}`,
    search: `body .search > .search-button {
  color: rgb(236, 236, 236);
}

body .search > .search-container > .search-space {
  background-color: rgb(19, 20, 31);
}

body .search > .search-container > .search-space > * {
  color: rgb(236, 236, 236);
  outline: rgb(236, 236, 236) none 0px;
  text-decoration: rgb(236, 236, 236);
  text-decoration-color: rgb(236, 236, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(236, 236, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(236, 236, 236);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(236, 236, 236);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(13, 14, 22);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(236, 236, 236);
}

body h1 {
  color: rgb(146, 0, 255);
}

body h2 {
  color: rgb(0, 255, 125);
}

body h2.page-title, h2.page-title a {
  color: rgb(236, 236, 236);
}

body h3 {
  color: rgb(0, 212, 255);
}

body h4 {
  color: rgb(245, 172, 0);
}

body h5 {
  color: rgb(255, 85, 85);
}

body h6 {
  color: rgb(234, 116, 143);
}

body hr {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-right-width: 0px;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

body ::-webkit-scrollbar-corner {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}

body ::-webkit-scrollbar-track {
  background: rgb(19, 20, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(19, 20, 31);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 158);
  text-decoration: rgb(142, 142, 158);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 158);
  text-decoration: rgb(142, 142, 158);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(142, 142, 158);
  text-decoration: rgb(142, 142, 158);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 5, 141);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(255, 5, 141);
  border-right-color: rgb(255, 5, 141);
  border-top-color: rgb(255, 5, 141);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(255, 5, 141);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}`,
    footer: `body footer {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgb(142, 142, 158);
  border-top-width: 0px;
  color: rgb(142, 142, 158);
}

body footer ul li a {
  color: rgb(142, 142, 158);
  text-decoration: rgb(142, 142, 158);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(236, 236, 236);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 158);
  text-decoration: rgb(142, 142, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body li.section-li > .section .meta {
  color: rgb(142, 142, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 158);
  text-decoration: rgb(142, 142, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

body .darkmode svg {
  color: rgb(142, 142, 158);
  stroke: rgb(142, 142, 158);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

body .breadcrumb-element p {
  color: rgb(92, 92, 102);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

body .metadata {
  color: rgb(142, 142, 158);
}

body .metadata-properties {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

body .navigation-progress {
  background-color: rgba(0, 0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(236, 236, 236);
}

body abbr {
  color: rgb(236, 236, 236);
  text-decoration: underline dotted rgb(236, 236, 236);
}

body details {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body input[type=text] {
  border-bottom-color: rgb(142, 142, 158);
  border-left-color: rgb(142, 142, 158);
  border-right-color: rgb(142, 142, 158);
  border-top-color: rgb(142, 142, 158);
  color: rgb(142, 142, 158);
}

body kbd {
  background-color: rgb(24, 25, 36);
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
  color: rgb(236, 236, 236);
}

body progress {
  border-bottom-color: rgb(236, 236, 236);
  border-left-color: rgb(236, 236, 236);
  border-right-color: rgb(236, 236, 236);
  border-top-color: rgb(236, 236, 236);
}

body sub {
  color: rgb(236, 236, 236);
}

body summary {
  color: rgb(236, 236, 236);
}

body sup {
  color: rgb(236, 236, 236);
}`,
  },
  light: {},
};
