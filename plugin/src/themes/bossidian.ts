import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "bossidian", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-primary: #22292c;
  --background-secondary: #1b2124;
  --background-secondary-alt: #0d0b12;
  --bases-cards-background: #22292c;
  --bases-table-border-color: #868686;
  --bases-table-cell-background-active: #22292c;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgba(14, 210, 247, 0.7);
  --bases-table-header-background: #22292c;
  --bases-table-summary-background: #22292c;
  --blockquote-border-color: #ff8800;
  --blockquote-border-thickness: 0.25rem;
  --canvas-background: #22292c;
  --canvas-card-label-color: #2e88b4;
  --caret-color: #bebebe;
  --checkbox-border-color: #2e88b4;
  --checkbox-color: rgba(14, 210, 247, 0.7);
  --checkbox-color-hover: #ff8800;
  --checkbox-marker-color: #22292c;
  --code-background: #1b2124;
  --code-comment: #2e88b4;
  --code-normal: #ff8800;
  --collapse-icon-color: #2e88b4;
  --collapse-icon-color-collapsed: #2faae6;
  --color-bossidian-pink: #f4569d;
  --color-bossidian-primary: #2faae6;
  --color-bossidian-primary-background: #22292c;
  --color-bossidian-secondary: #ff8800;
  --color-bossidian-secondary-background: #1b2124;
  --divider-color-hover: rgba(14, 210, 247, 0.7);
  --embed-border-start: 2px solid rgba(14, 210, 247, 0.7);
  --file-header-background: #22292c;
  --file-header-background-focused: #22292c;
  --flair-color: #bebebe;
  --footnote-id-color-no-occurrences: #2e88b4;
  --graph-node-focused: #2faae6;
  --graph-node-unresolved: #2e88b4;
  --graph-text: #bebebe;
  --h1-color: #2faae6;
  --h2-color: #2faae6;
  --h3-color: #2faae6;
  --h4-color: #2faae6;
  --h5-color: #2faae6;
  --h6-color: #2faae6;
  --heading-formatting: #2e88b4;
  --icon-color-active: #2faae6;
  --icon-color-focused: #bebebe;
  --inline-title-color: #2faae6;
  --input-date-separator: #2e88b4;
  --input-placeholder-color: #2e88b4;
  --interactive-accent: rgba(14, 210, 247, 0.7);
  --interactive-accent-hover: #ff8800;
  --link-color: #2faae6;
  --link-color-hover: #ff8800;
  --link-external-color: #2faae6;
  --link-external-color-hover: #ff8800;
  --link-unresolved-color: #2faae6;
  --list-marker-color: #2faae6;
  --list-marker-color-collapsed: #2faae6;
  --menu-background: #1b2124;
  --metadata-input-text-color: #bebebe;
  --modal-background: #22292c;
  --nav-collapse-icon-color: #2e88b4;
  --nav-collapse-icon-color-collapsed: #2e88b4;
  --nav-heading-color: #bebebe;
  --nav-heading-color-collapsed: #2e88b4;
  --nav-heading-color-hover: #bebebe;
  --nav-item-color: #2faae6;
  --nav-item-color-active: #2faae6;
  --nav-item-color-highlighted: #ff8800;
  --nav-item-color-hover: #2faae6;
  --nav-item-color-selected: #bebebe;
  --nav-item-weight-active: 800;
  --nav-tag-color: #2e88b4;
  --pdf-background: #22292c;
  --pdf-page-background: #22292c;
  --pdf-sidebar-background: #22292c;
  --pill-color-hover: #bebebe;
  --pill-color-remove: #2e88b4;
  --pill-color-remove-hover: #2faae6;
  --prompt-background: #22292c;
  --ribbon-background: #1b2124;
  --ribbon-background-collapsed: #22292c;
  --search-result-background: #22292c;
  --setting-group-heading-color: #bebebe;
  --status-bar-background: #1b2124;
  --suggestion-background: #22292c;
  --tab-background-active: #22292c;
  --tab-container-background: #1b2124;
  --tab-switcher-background: #1b2124;
  --tab-switcher-menubar-background: linear-gradient(to top, #1b2124, transparent);
  --tab-text-color: #2e88b4;
  --tab-text-color-focused-active-current: #bebebe;
  --tab-text-color-focused-highlighted: #2faae6;
  --table-border-color: #868686;
  --table-drag-handle-background-active: rgba(14, 210, 247, 0.7);
  --table-drag-handle-color: #2e88b4;
  --table-header-border-color: #868686;
  --table-header-color: #bebebe;
  --table-selection-border-color: rgba(14, 210, 247, 0.7);
  --tag-background: rgba(14, 210, 247, 0.15);
  --tag-color: #2faae6;
  --tag-color-hover: #2faae6;
  --text-accent: #2faae6;
  --text-accent-hover: #ff8800;
  --text-faint: #2e88b4;
  --text-highlight-bg: rgba(244, 86, 157, 0.25);
  --text-normal: #bebebe;
  --titlebar-background: #1b2124;
  --titlebar-background-focused: #0d0b12;
  --titlebar-text-color-focused: #bebebe;
  --vault-name-color: #2faae6;
  --vault-profile-color: #bebebe;
  --vault-profile-color-hover: #bebebe;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 41, 44);
  color: rgb(190, 190, 190);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

body div#quartz-root {
  background-color: rgb(34, 41, 44);
  color: rgb(190, 190, 190);
}`,
    typography: `body .page article p > b, b {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .page article p > em, em {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .page article p > i, i {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .page article p > strong, strong {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .text-highlight {
  background-color: rgba(244, 86, 157, 0.25);
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body del {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: line-through rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}`,
    links: `body a.external, footer a {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
  text-decoration: underline rgb(47, 170, 230);
  text-decoration-color: rgb(47, 170, 230);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
  text-decoration: underline rgb(47, 170, 230);
  text-decoration-color: rgb(47, 170, 230);
}

body a.internal.broken {
  color: rgb(47, 170, 230);
  outline: rgb(47, 170, 230) none 0px;
}`,
    lists: `body dd {
  color: rgb(190, 190, 190);
}

body dt {
  color: rgb(190, 190, 190);
}

body ol > li {
  color: rgb(190, 190, 190);
}

body ol.overflow {
  background-color: rgb(34, 41, 44);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body ul > li {
  color: rgb(190, 190, 190);
}

body ul.overflow {
  background-color: rgb(34, 41, 44);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(46, 136, 180);
  text-decoration: rgb(46, 136, 180);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body table {
  color: rgb(190, 190, 190);
}

body td {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
}

body th {
  border-bottom-color: rgb(134, 134, 134);
  border-left-color: rgb(134, 134, 134);
  border-right-color: rgb(134, 134, 134);
  border-top-color: rgb(134, 134, 134);
  color: rgb(190, 190, 190);
  font-weight: 900;
}`,
    code: `body code {
  border-bottom-color: rgb(255, 136, 0);
  border-left-color: rgb(255, 136, 0);
  border-right-color: rgb(255, 136, 0);
  border-top-color: rgb(255, 136, 0);
  color: rgb(255, 136, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(27, 33, 36);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(27, 33, 36);
  color: rgb(190, 190, 190);
}

body pre > code, pre:has(> code) {
  background-color: rgb(27, 33, 36);
}

body pre:has(> code) {
  background-color: rgb(27, 33, 36);
}`,
    images: `body audio {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body figcaption {
  color: rgb(190, 190, 190);
}

body figure {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body img {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body video {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .transclude {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.7);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .transclude-inner {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgba(14, 210, 247, 0.7);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(46, 136, 180);
  border-left-color: rgb(46, 136, 180);
  border-right-color: rgb(46, 136, 180);
  border-top-color: rgb(46, 136, 180);
}

body li.task-list-item[data-task='!'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='*'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='-'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='/'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='>'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='?'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='I'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='S'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='b'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='c'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='d'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='f'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='i'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='k'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='l'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='p'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='u'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body li.task-list-item[data-task='w'] {
  color: rgb(190, 190, 190);
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}`,
    search: `body .search > .search-button {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 41, 44);
}

body .search > .search-container > .search-space > * {
  color: rgb(190, 190, 190);
  outline: rgb(190, 190, 190) none 0px;
  text-decoration: rgb(190, 190, 190);
  text-decoration-color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(27, 33, 36);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(190, 190, 190);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(14, 210, 247, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(47, 170, 230);
}

body h1 {
  color: rgb(47, 170, 230);
}

body h2 {
  color: rgb(47, 170, 230);
}

body h2.page-title, h2.page-title a {
  color: rgb(47, 170, 230);
}

body h3 {
  color: rgb(47, 170, 230);
}

body h4 {
  color: rgb(47, 170, 230);
}

body h5 {
  color: rgb(47, 170, 230);
}

body h6 {
  color: rgb(47, 170, 230);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 41, 44) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 41, 44);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(47, 170, 230);
  text-decoration: rgb(47, 170, 230);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(47, 170, 230);
  text-decoration: rgb(47, 170, 230);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(47, 170, 230);
  text-decoration: rgb(47, 170, 230);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(47, 170, 230);
  border-left-color: rgb(47, 170, 230);
  border-right-color: rgb(47, 170, 230);
  border-top-color: rgb(47, 170, 230);
  color: rgb(47, 170, 230);
}`,
    footer: `body footer {
  background-color: rgb(27, 33, 36);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(190, 190, 190);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(47, 170, 230);
  text-decoration: rgb(47, 170, 230);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(47, 170, 230);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body li.section-li > .section .meta {
  color: rgb(47, 170, 230);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(47, 170, 230);
  text-decoration: rgb(47, 170, 230);
}

body ul.section-ul {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(46, 136, 180);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
  color: rgb(190, 190, 190);
}

body .navigation-progress {
  background-color: rgb(27, 33, 36);
}

body .page-header h2.page-title {
  color: rgb(190, 190, 190);
}

body abbr {
  color: rgb(190, 190, 190);
  text-decoration: underline dotted rgb(190, 190, 190);
}

body details {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body kbd {
  background-color: rgb(27, 33, 36);
  border-bottom-color: rgb(255, 136, 0);
  border-left-color: rgb(255, 136, 0);
  border-right-color: rgb(255, 136, 0);
  border-top-color: rgb(255, 136, 0);
  color: rgb(255, 136, 0);
}

body progress {
  border-bottom-color: rgb(190, 190, 190);
  border-left-color: rgb(190, 190, 190);
  border-right-color: rgb(190, 190, 190);
  border-top-color: rgb(190, 190, 190);
}

body sub {
  color: rgb(190, 190, 190);
}

body summary {
  color: rgb(190, 190, 190);
}

body sup {
  color: rgb(190, 190, 190);
}`,
  },
  light: {},
};
