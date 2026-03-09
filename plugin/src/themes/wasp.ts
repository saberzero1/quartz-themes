import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "wasp", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #f8c537;
  --background-primary: #242424;
  --background-secondary: #191919;
  --background-secondary-alt: #3D3D3D;
  --bases-cards-background: #242424;
  --bases-cards-shadow: 0 0 0 1px #f8c537;
  --bases-embed-border-color: #f8c537;
  --bases-table-border-color: #f8c537;
  --bases-table-cell-background-active: #242424;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f8c537;
  --bases-table-header-background: #242424;
  --bases-table-summary-background: #242424;
  --blockquote-border-color: #f8c537;
  --button-bg-color: #D49335;
  --button-hover-bg-color: #DAA520;
  --button-hover-text-color: #ffffff;
  --button-text-color: #242424;
  --canvas-background: #242424;
  --canvas-card-label-color: #bdae93;
  --caret-color: #faf2d6;
  --checkbox-border-color: #bdae93;
  --checkbox-color: #f8c537;
  --checkbox-marker-color: #242424;
  --code-block: #83a598;
  --code-border-color: #f8c537;
  --code-comment: #bdae93;
  --code-normal: #faf2d6;
  --collapse-icon-color: #bdae93;
  --collapse-icon-color-collapsed: #f8c537;
  --divider-color: #f8c537;
  --divider-color-hover: #f8c537;
  --embed-block-shadow-hover: 0 0 0 1px #f8c537, inset 0 0 0 1px #f8c537;
  --embed-border-start: 2px solid #f8c537;
  --file-header-background: #242424;
  --file-header-background-focused: #242424;
  --flair-color: #faf2d6;
  --footnote-divider-color: #f8c537;
  --footnote-id-color-no-occurrences: #bdae93;
  --graph-node-focused: #f8c537;
  --graph-node-unresolved: #bdae93;
  --graph-text: #faf2d6;
  --heading-formatting: #bdae93;
  --hr-color: #f8c537;
  --icon-color-active: #f8c537;
  --icon-color-focused: #faf2d6;
  --inline-code: #83a598;
  --input-date-separator: #bdae93;
  --input-placeholder-color: #bdae93;
  --interactive-accent: #f8c537;
  --interactive-accent-rgb: #f8c537;
  --interactive-before: #7c6f64;
  --link-color: #f8c537;
  --link-color-hover: #D49335;
  --link-external-color: #f8c537;
  --link-external-color-hover: #D49335;
  --link-unresolved-color: #f8c537;
  --list-marker-color: #bdae93;
  --list-marker-color-collapsed: #f8c537;
  --menu-background: #191919;
  --metadata-border-color: #f8c537;
  --metadata-divider-color: #f8c537;
  --metadata-input-text-color: #faf2d6;
  --modal-background: #242424;
  --nav-collapse-icon-color: #bdae93;
  --nav-collapse-icon-color-collapsed: #bdae93;
  --nav-heading-color: #faf2d6;
  --nav-heading-color-collapsed: #bdae93;
  --nav-heading-color-hover: #faf2d6;
  --nav-item-color-active: #faf2d6;
  --nav-item-color-highlighted: #f8c537;
  --nav-item-color-hover: #faf2d6;
  --nav-item-color-selected: #faf2d6;
  --nav-tag-color: #bdae93;
  --pdf-background: #242424;
  --pdf-page-background: #242424;
  --pdf-shadow: 0 0 0 1px #f8c537;
  --pdf-sidebar-background: #242424;
  --pdf-thumbnail-shadow: 0 0 0 1px #f8c537;
  --pill-border-color: #f8c537;
  --pill-color-hover: #faf2d6;
  --pill-color-remove: #bdae93;
  --pill-color-remove-hover: #f8c537;
  --pre-code: #;
  --prompt-background: #242424;
  --ribbon-background: #191919;
  --ribbon-background-collapsed: #242424;
  --search-result-background: #242424;
  --setting-group-heading-color: #faf2d6;
  --setting-items-border-color: #f8c537;
  --slider-track-background: #f8c537;
  --status-bar-background: #191919;
  --status-bar-border-color: #f8c537;
  --suggestion-background: #242424;
  --tab-background-active: #242424;
  --tab-container-background: #191919;
  --tab-outline-color: #f8c537;
  --tab-switcher-background: #191919;
  --tab-switcher-menubar-background: linear-gradient(to top, #191919, transparent);
  --tab-text-color: #bdae93;
  --tab-text-color-focused-active-current: #faf2d6;
  --tab-text-color-focused-highlighted: #f8c537;
  --table-add-button-border-color: #f8c537;
  --table-border-color: #f8c537;
  --table-drag-handle-background-active: #f8c537;
  --table-drag-handle-color: #bdae93;
  --table-drag-handle-color-active: #fff;
  --table-header-border-color: #f8c537;
  --table-header-color: #faf2d6;
  --table-selection-border-color: #f8c537;
  --tag-color: #f8c537;
  --tag-color-hover: #f8c537;
  --text-a: #f8c537;
  --text-a-hover: #83a598;
  --text-accent: #f8c537;
  --text-accent-hover: #D49335;
  --text-faint: #bdae93;
  --text-highlight-bg: #640211;
  --text-link: #83a598;
  --text-normal: #faf2d6;
  --text-on-accent: #fff;
  --text-selection: #f8c537;
  --text-title-h1: #E0E0E0;
  --text-title-h2: #E0E0E0;
  --text-title-h3: #E0E0E0;
  --text-title-h4: #E0E0E0;
  --text-title-h5: #E0E0E0;
  --text-title-h6: #E0E0E0;
  --titlebar-background: #191919;
  --titlebar-background-focused: #3D3D3D;
  --titlebar-border-color: #f8c537;
  --titlebar-text-color-focused: #faf2d6;
  --vault-profile-color: #faf2d6;
  --vault-profile-color-hover: #faf2d6;
  --vim-cursor: #f8c537;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(36, 36, 36);
  color: rgb(250, 242, 214);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 25, 25);
  color: rgb(250, 242, 214);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(248, 197, 55);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 25, 25);
  border-left-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

body div#quartz-root {
  background-color: rgb(36, 36, 36);
  color: rgb(250, 242, 214);
}`,
    typography: `body .page article p > b, b {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > em, em {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > i, i {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .page article p > strong, strong {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .text-highlight {
  background-color: rgb(100, 2, 17);
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body del {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: line-through rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}`,
    links: `body a.external, footer a {
  color: rgb(248, 197, 55);
  outline: rgb(248, 197, 55) none 0px;
  text-decoration: underline rgb(248, 197, 55);
  text-decoration-color: rgb(248, 197, 55);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(248, 197, 55);
  outline: rgb(248, 197, 55) none 0px;
  text-decoration: underline rgb(248, 197, 55);
  text-decoration-color: rgb(248, 197, 55);
}

body a.internal.broken {
  color: rgb(248, 197, 55);
  outline: rgb(248, 197, 55) none 0px;
}`,
    lists: `body dd {
  color: rgb(250, 242, 214);
}

body dt {
  color: rgb(250, 242, 214);
}

body ol > li {
  color: rgb(250, 242, 214);
}

body ol.overflow {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ul > li {
  color: rgb(250, 242, 214);
}

body ul.overflow {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 174, 147);
  text-decoration: rgb(189, 174, 147);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body table {
  color: rgb(250, 242, 214);
}

body td {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

body th {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}`,
    code: `body code {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}

body pre:has(> code) {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}`,
    images: `body audio {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body figcaption {
  color: rgb(250, 242, 214);
}

body figure {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body img {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body video {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .transclude {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .transclude-inner {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
}

body li.task-list-item[data-task='!'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='*'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='-'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='/'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='>'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='?'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='I'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='S'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='b'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='c'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='d'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='f'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='i'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='k'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='l'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='p'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='u'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body li.task-list-item[data-task='w'] {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space {
  background-color: rgb(36, 36, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(250, 242, 214);
  outline: rgb(250, 242, 214) none 0px;
  text-decoration: rgb(250, 242, 214);
  text-decoration-color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(250, 242, 214);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(25, 25, 25);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(250, 242, 214);
}

body a.internal.tag-link::before {
  color: rgb(248, 197, 55);
}

body h1 {
  color: rgb(224, 224, 224);
}

body h2 {
  color: rgb(224, 224, 224);
}

body h2.page-title, h2.page-title a {
  color: rgb(250, 242, 214);
}

body h3 {
  color: rgb(224, 224, 224);
}

body h4 {
  color: rgb(224, 224, 224);
}

body h5 {
  color: rgb(224, 224, 224);
}

body h6 {
  color: rgb(224, 224, 224);
}

body hr {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(36, 36, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(36, 36, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(248, 197, 55);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(25, 25, 25);
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(250, 242, 214);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(250, 242, 214);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body li.section-li > .section .meta {
  color: rgb(250, 242, 214);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(250, 242, 214);
  text-decoration: rgb(250, 242, 214);
}

body ul.section-ul {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body .metadata {
  border-bottom-color: rgb(248, 197, 55);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(248, 197, 55);
  border-top-color: rgb(248, 197, 55);
}

body .navigation-progress {
  background-color: rgb(25, 25, 25);
}

body .page-header h2.page-title {
  color: rgb(250, 242, 214);
}

body abbr {
  color: rgb(250, 242, 214);
  text-decoration: underline dotted rgb(250, 242, 214);
}

body details {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body kbd {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
  color: rgb(250, 242, 214);
}

body progress {
  border-bottom-color: rgb(250, 242, 214);
  border-left-color: rgb(250, 242, 214);
  border-right-color: rgb(250, 242, 214);
  border-top-color: rgb(250, 242, 214);
}

body sub {
  color: rgb(250, 242, 214);
}

body summary {
  color: rgb(250, 242, 214);
}

body sup {
  color: rgb(250, 242, 214);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #D49335;
  --background-primary: #EDEDED;
  --background-primary-alt: #;
  --background-secondary: #C4C4C4;
  --background-secondary-alt: #707070;
  --bases-cards-background: #EDEDED;
  --bases-cards-cover-background: #;
  --bases-cards-shadow: 0 0 0 1px #D49335;
  --bases-embed-border-color: #D49335;
  --bases-table-border-color: #D49335;
  --bases-table-cell-background-active: #EDEDED;
  --bases-table-cell-background-disabled: #;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f8c537;
  --bases-table-group-background: #;
  --bases-table-header-background: #EDEDED;
  --bases-table-summary-background: #EDEDED;
  --blockquote-border-color: #f8c537;
  --blur-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent));
  --canvas-background: #EDEDED;
  --canvas-card-label-color: #DEDEDE;
  --caret-color: #1A2023;
  --checkbox-border-color: #DEDEDE;
  --checkbox-color: #f8c537;
  --checkbox-marker-color: #EDEDED;
  --code-background: #;
  --code-border-color: #D49335;
  --code-comment: #DEDEDE;
  --code-normal: #1A2023;
  --collapse-icon-color: #DEDEDE;
  --collapse-icon-color-collapsed: #961327;
  --divider-color: #D49335;
  --divider-color-hover: #f8c537;
  --embed-block-shadow-hover: 0 0 0 1px #D49335, inset 0 0 0 1px #D49335;
  --embed-border-start: 2px solid #f8c537;
  --file-header-background: #EDEDED;
  --file-header-background-focused: #EDEDED;
  --flair-color: #1A2023;
  --footnote-divider-color: #D49335;
  --footnote-id-color-no-occurrences: #DEDEDE;
  --graph-node-focused: #961327;
  --graph-node-unresolved: #DEDEDE;
  --graph-text: #1A2023;
  --heading-formatting: #DEDEDE;
  --hr-color: #D49335;
  --icon-color-active: #961327;
  --icon-color-focused: #1A2023;
  --inline-code: #458588;
  --input-date-separator: #DEDEDE;
  --input-placeholder-color: #DEDEDE;
  --interactive-accent: #f8c537;
  --interactive-accent-rgb: #961327;
  --interactive-before: #a89984;
  --link-color: #961327;
  --link-color-hover: #D49335;
  --link-external-color: #961327;
  --link-external-color-hover: #D49335;
  --link-unresolved-color: #961327;
  --list-marker-color: #DEDEDE;
  --list-marker-color-collapsed: #961327;
  --menu-background: #C4C4C4;
  --metadata-border-color: #D49335;
  --metadata-divider-color: #D49335;
  --metadata-input-text-color: #1A2023;
  --modal-background: #EDEDED;
  --nav-collapse-icon-color: #DEDEDE;
  --nav-collapse-icon-color-collapsed: #DEDEDE;
  --nav-heading-color: #1A2023;
  --nav-heading-color-collapsed: #DEDEDE;
  --nav-heading-color-hover: #1A2023;
  --nav-item-color-active: #1A2023;
  --nav-item-color-highlighted: #961327;
  --nav-item-color-hover: #1A2023;
  --nav-item-color-selected: #1A2023;
  --nav-tag-color: #DEDEDE;
  --pdf-background: #EDEDED;
  --pdf-page-background: #EDEDED;
  --pdf-sidebar-background: #EDEDED;
  --pill-border-color: #D49335;
  --pill-color-hover: #1A2023;
  --pill-color-remove: #DEDEDE;
  --pill-color-remove-hover: #961327;
  --pre-code: #bebebe;
  --prompt-background: #EDEDED;
  --raised-background: color-mix(in srgb, #EDEDED 65%, transparent) linear-gradient(#EDEDED, color-mix(in srgb, #EDEDED 65%, transparent));
  --ribbon-background: #C4C4C4;
  --ribbon-background-collapsed: #EDEDED;
  --search-result-background: #EDEDED;
  --setting-group-heading-color: #1A2023;
  --setting-items-background: #;
  --setting-items-border-color: #D49335;
  --slider-track-background: #D49335;
  --status-bar-background: #C4C4C4;
  --status-bar-border-color: #D49335;
  --suggestion-background: #EDEDED;
  --tab-background-active: #EDEDED;
  --tab-container-background: #C4C4C4;
  --tab-outline-color: #D49335;
  --tab-switcher-background: #C4C4C4;
  --tab-switcher-menubar-background: linear-gradient(to top, #C4C4C4, transparent);
  --tab-text-color: #DEDEDE;
  --tab-text-color-focused-active-current: #1A2023;
  --tab-text-color-focused-highlighted: #961327;
  --table-add-button-border-color: #D49335;
  --table-border-color: #D49335;
  --table-drag-handle-background-active: #f8c537;
  --table-drag-handle-color: #DEDEDE;
  --table-header-border-color: #D49335;
  --table-header-color: #1A2023;
  --table-selection-border-color: #f8c537;
  --tag-color: #961327;
  --tag-color-hover: #961327;
  --text-a: #961327;
  --text-a-hover: #D49335;
  --text-accent: #961327;
  --text-accent-hover: #D49335;
  --text-faint: #DEDEDE;
  --text-link: #D49335;
  --text-normal: #1A2023;
  --text-selection: #EDC180;
  --text-title-h1: #D49335;
  --text-title-h2: #D49335;
  --text-title-h3: #D49335;
  --text-title-h4: #D49335;
  --text-title-h5: #D49335;
  --text-white: #ffffff;
  --titlebar-background: #C4C4C4;
  --titlebar-background-focused: #707070;
  --titlebar-border-color: #D49335;
  --titlebar-text-color-focused: #1A2023;
  --vault-profile-color: #1A2023;
  --vault-profile-color-hover: #1A2023;
  --vim-cursor: #961327;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(196, 196, 196);
  color: rgb(26, 32, 35);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(212, 147, 53);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(196, 196, 196);
  border-left-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

body div#quartz-root {
  background-color: rgb(237, 237, 237);
  color: rgb(26, 32, 35);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > em, em {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > i, i {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .page article p > strong, strong {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .text-highlight {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body del {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: line-through rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}`,
    links: `body a.external, footer a {
  color: rgb(150, 19, 39);
  outline: rgb(150, 19, 39) none 0px;
  text-decoration: underline rgb(150, 19, 39);
  text-decoration-color: rgb(150, 19, 39);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(150, 19, 39);
  outline: rgb(150, 19, 39) none 0px;
  text-decoration: underline rgb(150, 19, 39);
  text-decoration-color: rgb(150, 19, 39);
}

body a.internal.broken {
  color: rgb(150, 19, 39);
  outline: rgb(150, 19, 39) none 0px;
}`,
    lists: `body dd {
  color: rgb(26, 32, 35);
}

body dt {
  color: rgb(26, 32, 35);
}

body ol > li {
  color: rgb(26, 32, 35);
}

body ol.overflow {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ul > li {
  color: rgb(26, 32, 35);
}

body ul.overflow {
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(222, 222, 222);
  text-decoration: rgb(222, 222, 222);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body table {
  color: rgb(26, 32, 35);
}

body td {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

body th {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}`,
    code: `body code {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body figcaption {
  color: rgb(26, 32, 35);
}

body figure {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body img {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body video {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    embeds: `body .file-embed {
  background-color: rgba(0, 0, 0, 0);
}

body .footnotes {
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .transclude {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(248, 197, 55);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space {
  background-color: rgb(237, 237, 237);
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 32, 35);
  outline: rgb(26, 32, 35) none 0px;
  text-decoration: rgb(26, 32, 35);
  text-decoration-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(196, 196, 196);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 32, 35);
}

body a.internal.tag-link::before {
  color: rgb(150, 19, 39);
}

body h1 {
  color: rgb(212, 147, 53);
}

body h2 {
  color: rgb(212, 147, 53);
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 32, 35);
}

body h3 {
  color: rgb(212, 147, 53);
}

body h4 {
  color: rgb(212, 147, 53);
}

body h5 {
  color: rgb(212, 147, 53);
}

body h6 {
  color: rgb(26, 32, 35);
}

body hr {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(237, 237, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(237, 237, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(212, 147, 53);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    footer: `body footer {
  background-color: rgb(196, 196, 196);
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 32, 35);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(26, 32, 35);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body li.section-li > .section .meta {
  color: rgb(26, 32, 35);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(26, 32, 35);
  text-decoration: rgb(26, 32, 35);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(222, 222, 222);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body .metadata {
  border-bottom-color: rgb(212, 147, 53);
  border-left-color: rgb(212, 147, 53);
  border-right-color: rgb(212, 147, 53);
  border-top-color: rgb(212, 147, 53);
}

body .navigation-progress {
  background-color: rgb(196, 196, 196);
}

body .page-header h2.page-title {
  color: rgb(26, 32, 35);
}

body abbr {
  color: rgb(26, 32, 35);
  text-decoration: underline dotted rgb(26, 32, 35);
}

body details {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
  color: rgb(26, 32, 35);
}

body progress {
  border-bottom-color: rgb(26, 32, 35);
  border-left-color: rgb(26, 32, 35);
  border-right-color: rgb(26, 32, 35);
  border-top-color: rgb(26, 32, 35);
}

body sub {
  color: rgb(26, 32, 35);
}

body summary {
  color: rgb(26, 32, 35);
}

body sup {
  color: rgb(26, 32, 35);
}`,
  },
};
