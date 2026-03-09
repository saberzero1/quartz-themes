import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "minimal-dark-coder",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-primary: #181a1b;
  --background-secondary: #181a1b;
  --background-secondary-alt: #181a1b;
  --bases-cards-background: #181a1b;
  --bases-group-heading-property-color: #CCBA8D;
  --bases-table-cell-background-active: #181a1b;
  --bases-table-header-background: #181a1b;
  --bases-table-header-color: #CCBA8D;
  --bases-table-summary-background: #181a1b;
  --canvas-background: #181a1b;
  --canvas-card-label-color: #FF1493;
  --caret-color: #CCBA8D;
  --checkbox-border-color: #FF1493;
  --checkbox-border-color-hover: #CCBA8D;
  --checkbox-marker-color: #181a1b;
  --checklist-done-color: #CCBA8D;
  --code-comment: #FF1493;
  --code-normal: #CCBA8D;
  --code-punctuation: #CCBA8D;
  --collapse-icon-color: #FF1493;
  --collapse-icon-color-collapsed: #32CD32;
  --file-header-background: #181a1b;
  --file-header-background-focused: #181a1b;
  --flair-color: #CCBA8D;
  --footnote-id-color: #CCBA8D;
  --footnote-id-color-no-occurrences: #FF1493;
  --graph-node: #CCBA8D;
  --graph-node-focused: #32CD32;
  --graph-node-unresolved: #FF1493;
  --graph-text: #CCBA8D;
  --heading-formatting: #FF1493;
  --icon-color: #CCBA8D;
  --icon-color-active: #32CD32;
  --icon-color-focused: #CCBA8D;
  --icon-color-hover: #CCBA8D;
  --input-date-separator: #FF1493;
  --input-placeholder-color: #FF1493;
  --link-color: #32CD32;
  --link-color-hover: #FF5C8F;
  --link-external-color: #32CD32;
  --link-external-color-hover: #FF5C8F;
  --link-unresolved-color: #32CD32;
  --list-marker-color: #FF1493;
  --list-marker-color-collapsed: #32CD32;
  --list-marker-color-hover: #CCBA8D;
  --menu-background: #181a1b;
  --metadata-input-text-color: #CCBA8D;
  --metadata-label-text-color: #CCBA8D;
  --metadata-label-text-color-hover: #CCBA8D;
  --modal-background: #181a1b;
  --nav-collapse-icon-color: #FF1493;
  --nav-collapse-icon-color-collapsed: #FF1493;
  --nav-heading-color: #CCBA8D;
  --nav-heading-color-collapsed: #FF1493;
  --nav-heading-color-collapsed-hover: #CCBA8D;
  --nav-heading-color-hover: #CCBA8D;
  --nav-item-color: #CCBA8D;
  --nav-item-color-active: #CCBA8D;
  --nav-item-color-highlighted: #32CD32;
  --nav-item-color-hover: #CCBA8D;
  --nav-item-color-selected: #CCBA8D;
  --nav-tag-color: #FF1493;
  --nav-tag-color-active: #CCBA8D;
  --nav-tag-color-hover: #CCBA8D;
  --pdf-background: #181a1b;
  --pdf-page-background: #181a1b;
  --pdf-sidebar-background: #181a1b;
  --pill-color: #CCBA8D;
  --pill-color-hover: #CCBA8D;
  --pill-color-remove: #FF1493;
  --pill-color-remove-hover: #32CD32;
  --prompt-background: #181a1b;
  --ribbon-background: #181a1b;
  --ribbon-background-collapsed: #181a1b;
  --search-clear-button-color: #CCBA8D;
  --search-icon-color: #CCBA8D;
  --search-result-background: #181a1b;
  --setting-group-heading-color: #CCBA8D;
  --status-bar-background: #181a1b;
  --status-bar-text-color: #CCBA8D;
  --suggestion-background: #181a1b;
  --tab-background-active: #181a1b;
  --tab-container-background: #181a1b;
  --tab-switcher-background: #181a1b;
  --tab-switcher-menubar-background: linear-gradient(to top, #181a1b, transparent);
  --tab-text-color: #FF1493;
  --tab-text-color-active: #CCBA8D;
  --tab-text-color-focused: #CCBA8D;
  --tab-text-color-focused-active: #CCBA8D;
  --tab-text-color-focused-active-current: #CCBA8D;
  --tab-text-color-focused-highlighted: #32CD32;
  --table-drag-handle-color: #FF1493;
  --table-header-color: #CCBA8D;
  --tag-color: #32CD32;
  --tag-color-hover: #32CD32;
  --text-accent: #32CD32;
  --text-accent-hover: #FF5C8F;
  --text-faint: #FF1493;
  --text-highlight-bg: #29502e;
  --text-muted: #CCBA8D;
  --text-normal: #CCBA8D;
  --text-selection: #29502e;
  --titlebar-background: #181a1b;
  --titlebar-background-focused: #181a1b;
  --titlebar-text-color: #CCBA8D;
  --titlebar-text-color-focused: #CCBA8D;
  --vault-profile-color: #CCBA8D;
  --vault-profile-color-hover: #CCBA8D;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

body div#quartz-root {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}`,
    typography: `body .page article p > b, b {
  color: rgb(149, 137, 225);
  outline: rgb(149, 137, 225) none 0px;
  text-decoration: rgb(149, 137, 225);
  text-decoration-color: rgb(149, 137, 225);
}

body .page article p > em, em {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body .page article p > i, i {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body .page article p > strong, strong {
  color: rgb(149, 137, 225);
  outline: rgb(149, 137, 225) none 0px;
  text-decoration: rgb(149, 137, 225);
  text-decoration-color: rgb(149, 137, 225);
}

body .text-highlight {
  background-color: rgb(41, 80, 46);
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body del {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration: line-through rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body p {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}`,
    links: `body a.external, footer a {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
  text-decoration: underline rgb(50, 205, 50);
  text-decoration-color: rgb(50, 205, 50);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
  text-decoration: underline rgb(50, 205, 50);
  text-decoration-color: rgb(50, 205, 50);
}

body a.internal.broken {
  color: rgb(50, 205, 50);
  outline: rgb(50, 205, 50) none 0px;
}`,
    lists: `body dd {
  color: rgb(204, 186, 141);
}

body dt {
  color: rgb(204, 186, 141);
}

body ol > li {
  color: rgb(204, 186, 141);
}

body ol.overflow {
  background-color: rgb(24, 26, 27);
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body ul > li {
  color: rgb(204, 186, 141);
}

body ul.overflow {
  background-color: rgb(24, 26, 27);
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(50, 205, 50);
  text-decoration: rgb(50, 205, 50);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body table {
  color: rgb(204, 186, 141);
}

body td {
  color: rgb(204, 186, 141);
}

body th {
  color: rgb(204, 186, 141);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  color: rgb(204, 186, 141);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body figcaption {
  color: rgb(204, 186, 141);
}

body figure {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body img {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body video {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body .footnotes {
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .transclude {
  border-bottom-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 186, 141);
  text-decoration: line-through rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 20, 147);
  border-left-color: rgb(255, 20, 147);
  border-right-color: rgb(255, 20, 147);
  border-top-color: rgb(255, 20, 147);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}`,
    search: `body .search > .search-button {
  color: rgb(204, 186, 141);
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 26, 27);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 186, 141);
  outline: rgb(204, 186, 141) none 0px;
  text-decoration: rgb(204, 186, 141);
  text-decoration-color: rgb(204, 186, 141);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 186, 141);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 186, 141);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 186, 141);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 26, 27);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 186, 141);
}

body a.internal.tag-link::before {
  color: rgb(50, 205, 50);
}

body h1 {
  color: rgb(255, 215, 0);
}

body h2 {
  color: rgb(255, 215, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(204, 186, 141);
}

body h3 {
  color: rgb(255, 215, 0);
}

body h4 {
  color: rgb(255, 215, 0);
}

body h5 {
  color: rgb(255, 215, 0);
}

body h6 {
  color: rgb(255, 215, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 26, 27) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 26, 27);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}`,
    footer: `body footer {
  background-color: rgb(24, 26, 27);
  color: rgb(204, 186, 141);
}

body footer ul li a {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 186, 141);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 186, 141);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body li.section-li > .section .meta {
  color: rgb(204, 186, 141);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 186, 141);
  text-decoration: rgb(204, 186, 141);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .darkmode svg {
  color: rgb(204, 186, 141);
  stroke: rgb(204, 186, 141);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .breadcrumb-element p {
  color: rgb(255, 20, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .metadata {
  color: rgb(204, 186, 141);
}

body .metadata-properties {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body .navigation-progress {
  background-color: rgb(24, 26, 27);
}

body .page-header h2.page-title {
  color: rgb(204, 186, 141);
}

body abbr {
  color: rgb(204, 186, 141);
  text-decoration: underline dotted rgb(204, 186, 141);
}

body details {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body input[type=text] {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body kbd {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
  color: rgb(204, 186, 141);
}

body progress {
  border-bottom-color: rgb(204, 186, 141);
  border-left-color: rgb(204, 186, 141);
  border-right-color: rgb(204, 186, 141);
  border-top-color: rgb(204, 186, 141);
}

body sub {
  color: rgb(204, 186, 141);
}

body summary {
  color: rgb(204, 186, 141);
}

body sup {
  color: rgb(204, 186, 141);
}`,
  },
  light: {},
};
