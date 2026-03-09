import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hulk", modes: ["dark"], variations: [], fonts: ["monaco"] },
  dark: {
    base: `:root:root {
  --background-modifier-border: rgba(146, 161, 161, 0.5);
  --background-modifier-cover: #7f5fd4;
  --background-primary: #1A1B24;
  --background-primary-alt: #282A36;
  --background-secondary: #1A1B24;
  --background-secondary-alt: #282A36;
  --bases-cards-background: #1A1B24;
  --bases-cards-cover-background: #282A36;
  --bases-cards-shadow: 0 0 0 1px rgba(146, 161, 161, 0.5);
  --bases-embed-border-color: rgba(146, 161, 161, 0.5);
  --bases-table-border-color: rgba(146, 161, 161, 0.5);
  --bases-table-cell-background-active: #1A1B24;
  --bases-table-cell-background-disabled: #282A36;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00ba00;
  --bases-table-group-background: #282A36;
  --bases-table-header-background: #1A1B24;
  --bases-table-summary-background: #1A1B24;
  --blockquote-border-color: #00ba00;
  --canvas-background: #1A1B24;
  --canvas-card-label-color: rgba(187, 192, 197, 0.4);
  --caret-color: #bbc0c5;
  --checkbox-border-color: rgba(187, 192, 197, 0.4);
  --checkbox-color: #00ba00;
  --checkbox-marker-color: #1A1B24;
  --code-background: #282A36;
  --code-border-color: rgba(146, 161, 161, 0.5);
  --code-comment: rgba(187, 192, 197, 0.4);
  --code-normal: #bbc0c5;
  --collapse-icon-color: rgba(187, 192, 197, 0.4);
  --collapse-icon-color-collapsed: rgb(0, 186, 0);
  --divider-color: rgba(146, 161, 161, 0.5);
  --divider-color-hover: #00ba00;
  --embed-block-shadow-hover: 0 0 0 1px rgba(146, 161, 161, 0.5), inset 0 0 0 1px rgba(146, 161, 161, 0.5);
  --embed-border-start: 2px solid #00ba00;
  --file-header-background: #1A1B24;
  --file-header-background-focused: #1A1B24;
  --flair-color: #bbc0c5;
  --font-family-editor: inter;
  --font-family-preview: inter;
  --footnote-divider-color: rgba(146, 161, 161, 0.5);
  --footnote-id-color-no-occurrences: rgba(187, 192, 197, 0.4);
  --graph-node-focused: rgb(0, 186, 0);
  --graph-node-unresolved: rgba(187, 192, 197, 0.4);
  --graph-text: #bbc0c5;
  --green: #0a5519;
  --green-light: #0a8c28;
  --green-pale: #A4E7C3;
  --heading-formatting: rgba(187, 192, 197, 0.4);
  --hr-color: rgba(146, 161, 161, 0.5);
  --icon-color-active: rgb(0, 186, 0);
  --icon-color-focused: #bbc0c5;
  --input-date-separator: rgba(187, 192, 197, 0.4);
  --input-placeholder-color: rgba(187, 192, 197, 0.4);
  --interactive-accent: #00ba00;
  --interactive-accent-rgb: #0a8c28;
  --interactive-before: #2ac7c7;
  --link-color: rgb(0, 186, 0);
  --link-external-color: rgb(0, 186, 0);
  --link-unresolved-color: rgb(0, 186, 0);
  --list-marker-color: rgba(187, 192, 197, 0.4);
  --list-marker-color-collapsed: rgb(0, 186, 0);
  --menu-background: #1A1B24;
  --metadata-border-color: rgba(146, 161, 161, 0.5);
  --metadata-divider-color: rgba(146, 161, 161, 0.5);
  --metadata-input-text-color: #bbc0c5;
  --modal-background: #1A1B24;
  --nav-collapse-icon-color: rgba(187, 192, 197, 0.4);
  --nav-collapse-icon-color-collapsed: rgba(187, 192, 197, 0.4);
  --nav-heading-color: #bbc0c5;
  --nav-heading-color-collapsed: rgba(187, 192, 197, 0.4);
  --nav-heading-color-hover: #bbc0c5;
  --nav-item-color-active: #bbc0c5;
  --nav-item-color-highlighted: rgb(0, 186, 0);
  --nav-item-color-hover: #bbc0c5;
  --nav-item-color-selected: #bbc0c5;
  --nav-tag-color: rgba(187, 192, 197, 0.4);
  --pdf-background: #1A1B24;
  --pdf-page-background: #1A1B24;
  --pdf-shadow: 0 0 0 1px rgba(146, 161, 161, 0.5);
  --pdf-sidebar-background: #1A1B24;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(146, 161, 161, 0.5);
  --pill-border-color: rgba(146, 161, 161, 0.5);
  --pill-color-hover: #bbc0c5;
  --pill-color-remove: rgba(187, 192, 197, 0.4);
  --pill-color-remove-hover: rgb(0, 186, 0);
  --pink: rgba(237, 160, 255, 0.73);
  --pre-code: #283136;
  --prompt-background: #1A1B24;
  --purple: #3c0a96;
  --purple-light: #4632c8;
  --purple-pale: #ac91f7;
  --purple-paley: #7f5fd4;
  --ribbon-background: #1A1B24;
  --ribbon-background-collapsed: #1A1B24;
  --search-result-background: #1A1B24;
  --setting-group-heading-color: #bbc0c5;
  --setting-items-background: #282A36;
  --setting-items-border-color: rgba(146, 161, 161, 0.5);
  --slider-track-background: rgba(146, 161, 161, 0.5);
  --status-bar-background: #1A1B24;
  --status-bar-border-color: rgba(146, 161, 161, 0.5);
  --suggestion-background: #1A1B24;
  --tab-background-active: #1A1B24;
  --tab-container-background: #1A1B24;
  --tab-outline-color: rgba(146, 161, 161, 0.5);
  --tab-switcher-background: #1A1B24;
  --tab-switcher-menubar-background: linear-gradient(to top, #1A1B24, transparent);
  --tab-text-color: rgba(187, 192, 197, 0.4);
  --tab-text-color-focused-active-current: #bbc0c5;
  --tab-text-color-focused-highlighted: rgb(0, 186, 0);
  --table-add-button-border-color: rgba(146, 161, 161, 0.5);
  --table-border-color: rgba(146, 161, 161, 0.5);
  --table-drag-handle-background-active: #00ba00;
  --table-drag-handle-color: rgba(187, 192, 197, 0.4);
  --table-header-border-color: rgba(146, 161, 161, 0.5);
  --table-header-color: #bbc0c5;
  --table-selection-border-color: #00ba00;
  --tag-color: rgb(0, 186, 0);
  --tag-color-hover: rgb(0, 186, 0);
  --text-a: #3fce4a;
  --text-a-hover: rgba(63, 206, 74, 0.6);
  --text-accent: rgb(0, 186, 0);
  --text-faint: rgba(187, 192, 197, 0.4);
  --text-highlight-bg: #7f5fd4;
  --text-link: #3fce4a;
  --text-mark: #7f5fd4;
  --text-normal: #bbc0c5;
  --text-selection: #ceef83;
  --text-title-h1: #bbc0c5;
  --text-title-h2: #bbc0c5;
  --text-title-h3: #bbc0c5;
  --text-title-h4: #bbc0c5;
  --text-title-h5: #bbc0c5;
  --text-title-h6: #ac91f7;
  --titlebar-background: #1A1B24;
  --titlebar-background-focused: #282A36;
  --titlebar-border-color: rgba(146, 161, 161, 0.5);
  --titlebar-text-color-focused: #bbc0c5;
  --vault-profile-color: #bbc0c5;
  --vault-profile-color-hover: #bbc0c5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(146, 161, 161, 0.5);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 27, 36);
  border-left-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
}

body div#quartz-root {
  background-color: rgb(26, 27, 36);
  color: rgb(187, 192, 197);
}`,
    typography: `body .page article p > b, b {
  color: rgb(172, 145, 247);
  outline: rgb(172, 145, 247) none 0px;
  text-decoration: rgb(172, 145, 247);
  text-decoration-color: rgb(172, 145, 247);
}

body .page article p > em, em {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body .page article p > i, i {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body .page article p > strong, strong {
  color: rgb(172, 145, 247);
  outline: rgb(172, 145, 247) none 0px;
  text-decoration: rgb(172, 145, 247);
  text-decoration-color: rgb(172, 145, 247);
}

body .text-highlight {
  background-color: rgb(127, 95, 212);
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body del {
  color: rgb(187, 192, 197);
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: line-through rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body p {
  font-family: inter;
}`,
    links: `body a.external, footer a {
  color: rgb(179, 179, 179);
  font-family: inter;
  outline: rgb(179, 179, 179) none 0px;
  text-decoration: underline rgb(179, 179, 179);
  text-decoration-color: rgb(179, 179, 179);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 186, 0);
  font-family: inter;
  outline: rgb(0, 186, 0) none 0px;
  text-decoration: rgb(0, 186, 0);
  text-decoration-color: rgb(0, 186, 0);
}

body a.internal.broken {
  color: rgb(0, 186, 0);
  font-family: inter;
  outline: rgb(0, 186, 0) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(187, 192, 197);
}

body dl {
  margin-bottom: 14px;
  margin-top: 14px;
}

body dt {
  color: rgb(187, 192, 197);
}

body ol > li {
  color: rgb(187, 192, 197);
}

body ol.overflow {
  background-color: rgb(26, 27, 36);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body ul > li {
  color: rgb(187, 192, 197);
}

body ul.overflow {
  background-color: rgb(26, 27, 36);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(187, 192, 197, 0.4);
  text-decoration: rgba(187, 192, 197, 0.4);
}

body blockquote {
  background-color: rgb(26, 27, 36);
  font-family: inter;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body table {
  color: rgb(187, 192, 197);
  font-family: inter;
  width: 179.109px;
}

body td {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
}

body th {
  background-color: rgb(10, 85, 25);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  border-bottom-color: rgba(146, 161, 161, 0.5);
}`,
    code: `body code {
  background-color: rgb(40, 49, 54);
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(189, 147, 249);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-family: Monaco;
}

body pre > code, pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body figcaption {
  color: rgb(187, 192, 197);
  font-size: 14px;
}

body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  margin-bottom: 14px;
  margin-top: 14px;
}

body img {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body video {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 42, 54);
}

body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(0, 186, 0);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(0, 186, 0);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgba(187, 192, 197, 0.4);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgba(187, 192, 197, 0.4);
  border-right-color: rgba(187, 192, 197, 0.4);
  border-top-color: rgba(187, 192, 197, 0.4);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 6px;
  width: 15px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='*'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='-'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='/'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='>'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='?'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='I'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='S'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='b'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='c'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='d'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='f'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='i'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='k'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='l'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='p'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='u'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body li.task-list-item[data-task='w'] {
  color: rgb(187, 192, 197);
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  color: rgb(187, 192, 197);
  font-family: inter;
}

body .search > .search-container > .search-space {
  background-color: rgb(26, 27, 36);
}

body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  font-family: inter;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(25, 115, 0);
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 27, 36);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(25, 115, 0);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(25, 115, 0);
  color: rgb(187, 192, 197);
}

body a.internal.tag-link::before {
  color: rgb(0, 186, 0);
}

body h1 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body h2 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body h2.page-title, h2.page-title a {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body h3 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body h4 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body h5 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body h6 {
  color: rgb(172, 145, 247);
  font-family: inter;
}

body hr {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

body ::-webkit-scrollbar-corner {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}

body ::-webkit-scrollbar-track {
  background: rgb(26, 27, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(26, 27, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: inter;
  font-weight: 700;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: inter;
  font-weight: 700;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: inter;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    footer: `body footer {
  background-color: rgb(26, 27, 36);
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  font-family: inter;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(187, 192, 197);
  font-family: inter;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: inter;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body li.section-li > .section .meta {
  font-family: inter;
}

body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgba(187, 192, 197, 0.4);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .metadata {
  border-bottom-color: rgba(146, 161, 161, 0.5);
  border-left-color: rgba(146, 161, 161, 0.5);
  border-right-color: rgba(146, 161, 161, 0.5);
  border-top-color: rgba(146, 161, 161, 0.5);
  font-family: inter;
}

body .metadata-properties {
  font-family: inter;
}

body .navigation-progress {
  background-color: rgb(26, 27, 36);
}

body .page-header h2.page-title {
  color: rgb(187, 192, 197);
}

body abbr {
  color: rgb(187, 192, 197);
  text-decoration: underline dotted rgb(187, 192, 197);
}

body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body kbd {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body sub {
  color: rgb(187, 192, 197);
  font-size: 14px;
}

body summary {
  color: rgb(187, 192, 197);
}

body sup {
  color: rgb(187, 192, 197);
  font-size: 14px;
}`,
  },
  light: {},
};
