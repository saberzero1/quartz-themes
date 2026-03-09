import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hydra-pressure", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-form-field-highlighted: #2a2925;
  --background-modifier-success-hover: #61cd70;
  --background-primary: #181818;
  --background-primary-alt: #1f1f1f;
  --background-primary-rgb: 24, 24, 24;
  --background-secondary: #161615;
  --background-secondary-alt: #1a1a1a;
  --background-secondary-rgb: 32, 32, 32;
  --bases-cards-background: #181818;
  --bases-cards-cover-background: #1f1f1f;
  --bases-group-heading-property-color: #5d5c55;
  --bases-table-cell-background-active: #181818;
  --bases-table-cell-background-disabled: #1f1f1f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #d25227;
  --bases-table-group-background: #1f1f1f;
  --bases-table-header-background: #181818;
  --bases-table-header-color: #5d5c55;
  --bases-table-summary-background: #181818;
  --blockquote-border: #2fc0c5;
  --blockquote-border-color: #d25227;
  --blur-background: color-mix(in srgb, #2a2928 65%, transparent) linear-gradient(#2a2928, color-mix(in srgb, #2a2928 65%, transparent));
  --canvas-background: #181818;
  --canvas-card-label-color: #4b493d;
  --caret-color: #c2c0b4;
  --checkbox-border-color: #4b493d;
  --checkbox-border-color-hover: #5d5c55;
  --checkbox-color: #d25227;
  --checkbox-color-hover: #da5e45;
  --checkbox-marker-color: #181818;
  --checklist-done-color: #5d5c55;
  --code-background: #1f1f1f;
  --code-comment: #4b493d;
  --code-normal: #c2c0b4;
  --code-punctuation: #5d5c55;
  --collapse-icon-color: #4b493d;
  --collapse-icon-color-collapsed: #419b9a;
  --divider-color: #222222;
  --divider-color-hover: #d25227;
  --dropdown-background: #2a2928;
  --dropdown-background-hover: #202020;
  --embed-background: #1a1a1a;
  --embed-border: #222222;
  --embed-border-start: 2px solid #d25227;
  --file-header-background: #181818;
  --file-header-background-focused: #181818;
  --flair-background: #2a2928;
  --flair-color: #c2c0b4;
  --footnote-id-color: #5d5c55;
  --footnote-id-color-no-occurrences: #4b493d;
  --graph-node: #5d5c55;
  --graph-node-focused: #419b9a;
  --graph-node-unresolved: #4b493d;
  --graph-text: #c2c0b4;
  --heading-formatting: #4b493d;
  --icon-color: #2c7a48;
  --icon-color-active: #61cd70;
  --icon-color-focused: #61cd70;
  --icon-color-hover: #61cd70;
  --inline-title-color: #da5e45;
  --input-date-separator: #4b493d;
  --input-placeholder-color: #4b493d;
  --interactive-accent: #d25227;
  --interactive-accent-hover: #da5e45;
  --interactive-hover: #202020;
  --interactive-muted: #222222;
  --interactive-normal: #2a2928;
  --link-color: #419b9a;
  --link-color-hover: #52b4b3;
  --link-external-color: #419b9a;
  --link-external-color-hover: #52b4b3;
  --link-unresolved-color: #419b9a;
  --list-marker-color: #4b493d;
  --list-marker-color-collapsed: #419b9a;
  --list-marker-color-hover: #5d5c55;
  --menu-background: #161615;
  --metadata-input-text-color: #c2c0b4;
  --metadata-label-text-color: #5d5c55;
  --metadata-label-text-color-hover: #5d5c55;
  --modal-background: #181818;
  --modal-border: #222222;
  --nav-collapse-icon-color: #4b493d;
  --nav-collapse-icon-color-collapsed: #4b493d;
  --nav-file-title-color: #c2c0b4;
  --nav-file-title-color-active: #e8e7e2;
  --nav-folder-title-color: #c2c0b4;
  --nav-heading-color: #c2c0b4;
  --nav-heading-color-collapsed: #4b493d;
  --nav-heading-color-collapsed-hover: #5d5c55;
  --nav-heading-color-hover: #c2c0b4;
  --nav-item-background-active: #1e1e1e;
  --nav-item-background-hover: #202020;
  --nav-item-background-selected: #1e1e1e;
  --nav-item-color: #5d5c55;
  --nav-item-color-active: #e8e7e2;
  --nav-item-color-highlighted: #419b9a;
  --nav-item-color-hover: #81dfdf;
  --nav-item-color-selected: #e8e7e2;
  --nav-item-color-selected-active: #e8e7e2;
  --nav-item-icon-color: #2c7a48;
  --nav-item-icon-color-hover: #61cd70;
  --nav-tag-color: #4b493d;
  --nav-tag-color-active: #5d5c55;
  --nav-tag-color-hover: #5d5c55;
  --outline-item-color: #5d5c55;
  --outline-item-color-active: #c2c0b4;
  --pane-border-color: #222222;
  --pane-border-width: 1px;
  --pdf-background: #181818;
  --pdf-page-background: #181818;
  --pdf-sidebar-background: #181818;
  --pill-color: #5d5c55;
  --pill-color-hover: #c2c0b4;
  --pill-color-remove: #4b493d;
  --pill-color-remove-hover: #419b9a;
  --prompt-background: #181818;
  --prompt-border: #222222;
  --raised-background: color-mix(in srgb, #2a2928 65%, transparent) linear-gradient(#2a2928, color-mix(in srgb, #2a2928 65%, transparent));
  --ribbon-background: #141111;
  --ribbon-background-collapsed: #181818;
  --ribbon-background-hover: #1c1818;
  --search-clear-button-color: #5d5c55;
  --search-icon-color: #5d5c55;
  --search-result-background: #181818;
  --setting-group-heading-color: #c2c0b4;
  --setting-items-background: #1f1f1f;
  --sidebar-background: #141414;
  --status-bar-background: #161615;
  --status-bar-border-color: #222222;
  --status-bar-text-color: #5d5c55;
  --suggestion-background: #181818;
  --syntax-comment: #706d5c;
  --syntax-constant: #b98bec;
  --syntax-diff-changed: #e3b77d;
  --syntax-function: #81dfdf;
  --syntax-invalid: #cc0000;
  --syntax-keyword: #ff7b63;
  --syntax-keyword-secondary: #f25636;
  --syntax-markup-text: #c2c0b4;
  --syntax-property: #64cbcf;
  --syntax-punctuation: #a3a08f;
  --syntax-string: #61cd70;
  --syntax-variable: #2fc0c5;
  --tab-background-active: #181818;
  --tab-container-background: #161615;
  --tab-divider-color: #222222;
  --tab-outline-color: #222222;
  --tab-switcher-background: #161615;
  --tab-switcher-menubar-background: linear-gradient(to top, #161615, transparent);
  --tab-text-color: #4b493d;
  --tab-text-color-active: #5d5c55;
  --tab-text-color-focused: #5d5c55;
  --tab-text-color-focused-active: #5d5c55;
  --tab-text-color-focused-active-current: #c2c0b4;
  --tab-text-color-focused-highlighted: #419b9a;
  --table-drag-handle-background-active: #d25227;
  --table-drag-handle-color: #4b493d;
  --table-drag-handle-color-active: #181818;
  --table-header-color: #c2c0b4;
  --table-selection-border-color: #d25227;
  --tag-color: #419b9a;
  --tag-color-hover: #419b9a;
  --text-accent: #419b9a;
  --text-accent-hover: #52b4b3;
  --text-accent-visited: #419b9a;
  --text-accent-visited-hover: #52b4b3;
  --text-faint: #4b493d;
  --text-heading: #d6d3c6;
  --text-muted: #5d5c55;
  --text-normal: #c2c0b4;
  --text-normal-rgb: 194, 192, 180;
  --text-on-accent: #181818;
  --titlebar-background: #141111;
  --titlebar-background-focused: #141111;
  --titlebar-text-color: #5d5c55;
  --titlebar-text-color-focused: #c2c0b4;
  --vault-profile-color: #c2c0b4;
  --vault-profile-color-hover: #c2c0b4;
  --view-action-active-bg: #2c7a48;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(34, 34, 34);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 24, 24);
  border-left-color: rgb(34, 34, 34);
  color: rgb(194, 192, 180);
}

body div#quartz-root {
  background-color: rgb(24, 24, 24);
  color: rgb(194, 192, 180);
}`,
    typography: `body .page article p > b, b {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body .page article p > em, em {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body .page article p > i, i {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body .page article p > strong, strong {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body .text-highlight {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body del {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: line-through rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body p {
  color: rgb(93, 92, 85);
  outline: rgb(93, 92, 85) none 0px;
  text-decoration: rgb(93, 92, 85);
  text-decoration-color: rgb(93, 92, 85);
}`,
    links: `body a.external, footer a {
  color: rgb(65, 155, 154);
  outline: rgb(65, 155, 154) none 0px;
  text-decoration: underline rgb(65, 155, 154);
  text-decoration-color: rgb(65, 155, 154);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(65, 155, 154);
  outline: rgb(65, 155, 154) none 0px;
  text-decoration: underline rgb(65, 155, 154);
  text-decoration-color: rgb(65, 155, 154);
}

body a.internal.broken {
  color: rgb(65, 155, 154);
  outline: rgb(65, 155, 154) none 0px;
}`,
    lists: `body dd {
  color: rgb(194, 192, 180);
}

body dt {
  color: rgb(194, 192, 180);
}

body ol > li {
  color: rgb(194, 192, 180);
}

body ol.overflow {
  background-color: rgb(20, 17, 17);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body ul > li {
  color: rgb(194, 192, 180);
}

body ul.overflow {
  background-color: rgb(20, 17, 17);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(65, 155, 154);
  text-decoration: rgb(65, 155, 154);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body table {
  color: rgb(194, 192, 180);
}

body td {
  color: rgb(194, 192, 180);
}

body th {
  color: rgb(194, 192, 180);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 123, 99);
  border-left-color: rgb(255, 123, 99);
  border-right-color: rgb(255, 123, 99);
  border-top-color: rgb(255, 123, 99);
  color: rgb(255, 123, 99);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(31, 31, 31);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(31, 31, 31);
  color: rgb(194, 192, 180);
}

body pre > code > [data-line] {
  border-left-color: rgb(129, 223, 223);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(129, 223, 223);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(129, 223, 223);
  border-left-color: rgb(129, 223, 223);
  border-right-color: rgb(129, 223, 223);
  border-top-color: rgb(129, 223, 223);
}

body pre > code, pre:has(> code) {
  background-color: rgb(31, 31, 31);
}

body pre:has(> code) {
  background-color: rgb(31, 31, 31);
}`,
    images: `body audio {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body figcaption {
  color: rgb(194, 192, 180);
}

body figure {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body img {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body video {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    embeds: `body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
}

body .footnotes {
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

body .transclude {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(210, 82, 39);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body .transclude-inner {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(210, 82, 39);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(93, 92, 85);
  text-decoration: line-through rgb(93, 92, 85);
  text-decoration-color: rgb(93, 92, 85);
}

body input[type=checkbox] {
  border-bottom-color: rgb(75, 73, 61);
  border-left-color: rgb(75, 73, 61);
  border-right-color: rgb(75, 73, 61);
  border-top-color: rgb(75, 73, 61);
}

body li.task-list-item[data-task='!'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='*'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='-'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='/'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='>'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='?'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='I'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='S'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='b'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='c'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='d'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='f'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='i'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='k'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='l'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='p'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='u'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body li.task-list-item[data-task='w'] {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}`,
    search: `body .search > .search-button {
  color: rgb(194, 192, 180);
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 24, 24);
}

body .search > .search-container > .search-space > * {
  color: rgb(194, 192, 180);
  outline: rgb(194, 192, 180) none 0px;
  text-decoration: rgb(194, 192, 180);
  text-decoration-color: rgb(194, 192, 180);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(194, 192, 180);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(194, 192, 180);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(194, 192, 180);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(22, 22, 21);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(194, 192, 180);
}

body a.internal.tag-link::before {
  color: rgb(65, 155, 154);
}

body h1 {
  color: rgb(214, 211, 198);
}

body h2 {
  color: rgb(214, 211, 198);
}

body h2.page-title, h2.page-title a {
  color: rgb(218, 94, 69);
}

body h3 {
  color: rgb(214, 211, 198);
}

body h4 {
  color: rgb(214, 211, 198);
}

body h5 {
  color: rgb(214, 211, 198);
}

body h6 {
  color: rgb(214, 211, 198);
}

body hr {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 24, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 24, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(232, 231, 226);
  border-left-color: rgb(232, 231, 226);
  border-right-color: rgb(232, 231, 226);
  border-top-color: rgb(232, 231, 226);
  color: rgb(232, 231, 226);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(44, 122, 72);
  border-left-color: rgb(44, 122, 72);
  border-right-color: rgb(44, 122, 72);
  border-top-color: rgb(44, 122, 72);
  color: rgb(44, 122, 72);
}`,
    footer: `body footer {
  background-color: rgb(22, 22, 21);
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(34, 34, 34);
  border-right-color: rgb(34, 34, 34);
  border-top-color: rgb(34, 34, 34);
  color: rgb(93, 92, 85);
}

body footer ul li a {
  color: rgb(93, 92, 85);
  text-decoration: rgb(93, 92, 85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(194, 192, 180);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(194, 192, 180);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body li.section-li > .section .meta {
  color: rgb(194, 192, 180);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(194, 192, 180);
  text-decoration: rgb(194, 192, 180);
}

body ul.section-ul {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(44, 122, 72);
  border-left-color: rgb(44, 122, 72);
  border-right-color: rgb(44, 122, 72);
  border-top-color: rgb(44, 122, 72);
  color: rgb(44, 122, 72);
}

body .darkmode svg {
  color: rgb(44, 122, 72);
  stroke: rgb(44, 122, 72);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
  color: rgb(93, 92, 85);
}

body .breadcrumb-element p {
  color: rgb(75, 73, 61);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

body .metadata {
  color: rgb(93, 92, 85);
}

body .metadata-properties {
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
  color: rgb(93, 92, 85);
}

body .navigation-progress {
  background-color: rgb(22, 22, 21);
}

body .page-header h2.page-title {
  color: rgb(194, 192, 180);
}

body abbr {
  color: rgb(194, 192, 180);
  text-decoration: underline dotted rgb(194, 192, 180);
}

body details {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body input[type=text] {
  border-bottom-color: rgb(93, 92, 85);
  border-left-color: rgb(93, 92, 85);
  border-right-color: rgb(93, 92, 85);
  border-top-color: rgb(93, 92, 85);
  color: rgb(93, 92, 85);
}

body kbd {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
  color: rgb(194, 192, 180);
}

body progress {
  border-bottom-color: rgb(194, 192, 180);
  border-left-color: rgb(194, 192, 180);
  border-right-color: rgb(194, 192, 180);
  border-top-color: rgb(194, 192, 180);
}

body sub {
  color: rgb(194, 192, 180);
}

body summary {
  color: rgb(194, 192, 180);
}

body sup {
  color: rgb(194, 192, 180);
}`,
  },
  light: {},
};
