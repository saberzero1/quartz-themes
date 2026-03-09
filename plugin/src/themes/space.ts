import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "space",
    modes: ["dark"],
    variations: [],
    fonts: ["bai-jamjuree", "orbitron", "unbounded"],
  },
  dark: {
    base: `:root:root {
  --active-contrast-amount: 10%;
  --background-modifier-border: #242b3a;
  --background-primary: #181d27;
  --background-primary-alt: #181d27;
  --background-secondary: #181d27;
  --background-secondary-alt: #181d27;
  --bases-cards-background: #181d27;
  --bases-cards-cover-background: #181d27;
  --bases-cards-shadow: 0 0 0 1px #242b3a;
  --bases-embed-border-color: #242b3a;
  --bases-table-border-color: #242b3a;
  --bases-table-cell-background-active: #181d27;
  --bases-table-cell-background-disabled: #181d27;
  --bases-table-cell-shadow-focus: 0 0 0 2px #db5461;
  --bases-table-group-background: #181d27;
  --bases-table-header-background: #181d27;
  --bases-table-summary-background: #181d27;
  --bg-contrast-amount: 15%;
  --blockquote-border-color: #db5461;
  --blue: #4c86a8;
  --blue-faint: #6b9ab6;
  --brown: #806443;
  --canvas-background: #181d27;
  --canvas-card-label-color: #b2b2b8;
  --caret-color: #d8d7df;
  --checkbox-border-color: #b2b2b8;
  --checkbox-color: #db5461;
  --checkbox-marker-color: #181d27;
  --code-background: #181d27;
  --code-block: #beb7df;
  --code-border-color: #242b3a;
  --code-comment: #b2b2b8;
  --code-normal: #d8d7df;
  --collapse-icon-color: #b2b2b8;
  --collapse-icon-color-collapsed: #ffe699;
  --contrast-color: #fff;
  --default-text-color: #d0d0d0;
  --divider-color: #242b3a;
  --divider-color-hover: #db5461;
  --embed-block-shadow-hover: 0 0 0 1px #242b3a, inset 0 0 0 1px #242b3a;
  --embed-border-start: 2px solid #db5461;
  --fg-contrast-amount: 40%;
  --file-header-background: #181d27;
  --file-header-background-focused: #181d27;
  --flair-color: #d8d7df;
  --font-monospace: "Bai Jamjuree";
  --footnote-divider-color: #242b3a;
  --footnote-id-color-no-occurrences: #b2b2b8;
  --graph-node-focused: #ffe699;
  --graph-node-unresolved: #b2b2b8;
  --graph-text: #d8d7df;
  --grey: #c9cad9;
  --h1-color: #beb7df;
  --h2-color: #ffd85e;
  --h3-color: #ff4f00;
  --h4-color: #4c86a8;
  --h5-color: #806443;
  --h6-color: #c9cad9;
  --heading-formatting: #b2b2b8;
  --highlight: #fff;
  --hr-color: #242b3a;
  --icon-color-active: #ffe699;
  --icon-color-focused: #d8d7df;
  --inline-code: #beb7df;
  --inline-title-color: #beb7df;
  --input-date-separator: #b2b2b8;
  --input-placeholder-color: #b2b2b8;
  --interactive-accent: #db5461;
  --interactive-accent-rgb: #ffe699;
  --interactive-before: #242b3a;
  --link-color: #ffe699;
  --link-external-color: #ffe699;
  --link-unresolved-color: #ffe699;
  --list-marker-color: #b2b2b8;
  --list-marker-color-collapsed: #ffe699;
  --medium-contrast-amount: 20%;
  --menu-background: #181d27;
  --metadata-border-color: #242b3a;
  --metadata-divider-color: #242b3a;
  --metadata-input-text-color: #d8d7df;
  --modal-background: #181d27;
  --nav-collapse-icon-color: #b2b2b8;
  --nav-collapse-icon-color-collapsed: #b2b2b8;
  --nav-heading-color: #d8d7df;
  --nav-heading-color-collapsed: #b2b2b8;
  --nav-heading-color-hover: #d8d7df;
  --nav-item-color-active: #d8d7df;
  --nav-item-color-highlighted: #ffe699;
  --nav-item-color-hover: #d8d7df;
  --nav-item-color-selected: #d8d7df;
  --nav-item-weight-hover: bold;
  --nav-tag-color: #b2b2b8;
  --orange: #ff4f00;
  --pdf-background: #181d27;
  --pdf-page-background: #181d27;
  --pdf-shadow: 0 0 0 1px #242b3a;
  --pdf-sidebar-background: #181d27;
  --pdf-thumbnail-shadow: 0 0 0 1px #242b3a;
  --periwinkle: #beb7df;
  --pill-border-color: #242b3a;
  --pill-color-hover: #d8d7df;
  --pill-color-remove: #b2b2b8;
  --pill-color-remove-hover: #ffe699;
  --platinum: #d8d7df;
  --platinum-faint: #b2b2b8;
  --pre-code: #0f1218;
  --prompt-background: #181d27;
  --red: #db5461;
  --ribbon-background: #181d27;
  --ribbon-background-collapsed: #181d27;
  --search-result-background: #181d27;
  --setting-group-heading-color: #d8d7df;
  --setting-items-background: #181d27;
  --setting-items-border-color: #242b3a;
  --slider-track-background: #242b3a;
  --space-dark: #0f1218;
  --space-light: #242b3a;
  --space-new: #181d27;
  --space-old: #2b3242;
  --space-old-dark: #212531;
  --space-old-light: #3a4358;
  --status-bar-background: #181d27;
  --status-bar-border-color: #242b3a;
  --suggestion-background: #181d27;
  --tab-background-active: #181d27;
  --tab-container-background: #181d27;
  --tab-outline-color: #242b3a;
  --tab-switcher-background: #181d27;
  --tab-switcher-menubar-background: linear-gradient(to top, #181d27, transparent);
  --tab-text-color: #b2b2b8;
  --tab-text-color-focused-active-current: #d8d7df;
  --tab-text-color-focused-highlighted: #ffe699;
  --table-add-button-border-color: #242b3a;
  --table-border-color: #242b3a;
  --table-drag-handle-background-active: #db5461;
  --table-drag-handle-color: #b2b2b8;
  --table-header-border-color: #242b3a;
  --table-header-color: #d8d7df;
  --table-selection-border-color: #db5461;
  --tag-color: #ffe699;
  --tag-color-hover: #ffe699;
  --text-a: #4c86a8;
  --text-a-hover: #6b9ab6;
  --text-accent: #ffe699;
  --text-faint: #b2b2b8;
  --text-highlight-bg: #db5461;
  --text-link: #6b9ab6;
  --text-mark: rgba(215, 153, 33, 0.4);
  --text-normal: #d8d7df;
  --text-selection: #db5461;
  --text-title-h1: #beb7df;
  --text-title-h2: #ffd85e;
  --text-title-h3: #ff4f00;
  --text-title-h4: #4c86a8;
  --text-title-h5: #806443;
  --text-title-h6: #c9cad9;
  --titlebar-background: #181d27;
  --titlebar-background-focused: #181d27;
  --titlebar-border-color: #242b3a;
  --titlebar-text-color-focused: #d8d7df;
  --vault-profile-color: #d8d7df;
  --vault-profile-color-hover: #d8d7df;
  --vim-cursor: #6b9ab6;
  --yellow: #ffd85e;
  --yellow-faint: #ffe699;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 43, 58);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 29, 39);
  border-left-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

body div#quartz-root {
  background-color: rgb(24, 29, 39);
  color: rgb(216, 215, 223);
}`,
    typography: `body .page article p > b, b {
  color: rgb(216, 215, 223);
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body .page article p > em, em {
  color: rgb(216, 215, 223);
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body .page article p > i, i {
  color: rgb(216, 215, 223);
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body .page article p > strong, strong {
  color: rgb(216, 215, 223);
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body .text-highlight {
  background-color: rgb(219, 84, 97);
  color: rgb(216, 215, 223);
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body del {
  color: rgb(216, 215, 223);
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: line-through rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body p {
  font-family: "Bai Jamjuree";
}`,
    links: `body a.external, footer a {
  color: rgb(255, 230, 153);
  font-family: "Bai Jamjuree";
  outline: rgb(255, 230, 153) none 0px;
  text-decoration: underline rgb(255, 230, 153);
  text-decoration-color: rgb(255, 230, 153);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 230, 153);
  font-family: "Bai Jamjuree";
  outline: rgb(255, 230, 153) none 0px;
  text-decoration: underline rgb(255, 230, 153);
  text-decoration-color: rgb(255, 230, 153);
}

body a.internal.broken {
  color: rgb(255, 230, 153);
  font-family: "Bai Jamjuree";
  outline: rgb(255, 230, 153) none 0px;
}`,
    lists: `body dd {
  color: rgb(216, 215, 223);
}

body dt {
  color: rgb(216, 215, 223);
}

body ol > li {
  color: rgb(216, 215, 223);
}

body ol.overflow {
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body ul > li {
  color: rgb(216, 215, 223);
}

body ul.overflow {
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(178, 178, 184);
  text-decoration: rgb(178, 178, 184);
}

body blockquote {
  font-family: "Bai Jamjuree";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body table {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  width: 194.781px;
}

body td {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

body th {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

body thead {
  border-bottom-color: rgb(36, 43, 58);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(36, 43, 58);
}`,
    code: `body code {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(190, 183, 223);
  border-left-color: rgb(190, 183, 223);
  border-right-color: rgb(190, 183, 223);
  border-top-color: rgb(190, 183, 223);
  color: rgb(190, 183, 223);
  font-family: "Bai Jamjuree";
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
}

body pre > code, pre:has(> code) {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
}

body pre:has(> code) {
  background-color: rgb(15, 18, 24);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
}`,
    images: `body audio {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body figcaption {
  color: rgb(216, 215, 223);
}

body figure {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body img {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body video {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 29, 39);
}

body .footnotes {
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

body .transclude {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(219, 84, 97);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(219, 84, 97);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(107, 154, 182);
  border-left-color: rgb(107, 154, 182);
  border-right-color: rgb(107, 154, 182);
  border-top-color: rgb(107, 154, 182);
}

body li.task-list-item[data-task='!'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='*'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='-'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='/'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='>'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='?'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='I'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='S'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='b'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='c'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='d'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='f'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='i'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='k'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='l'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='p'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='u'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body li.task-list-item[data-task='w'] {
  color: rgb(216, 215, 223);
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
}

body .search > .search-container > .search-space {
  background-color: rgb(24, 29, 39);
}

body .search > .search-container > .search-space > * {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
  outline: rgb(216, 215, 223) none 0px;
  text-decoration: rgb(216, 215, 223);
  text-decoration-color: rgb(216, 215, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 215, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(216, 215, 223);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(219, 84, 97);
  color: rgb(216, 215, 223);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 29, 39);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(219, 84, 97);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(219, 84, 97);
  color: rgb(216, 215, 223);
}

body a.internal.tag-link::before {
  color: rgb(255, 230, 153);
}

body h1 {
  color: rgb(190, 183, 223);
  font-family: "Bai Jamjuree";
}

body h2 {
  color: rgb(255, 216, 94);
  font-family: "Bai Jamjuree";
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 216, 94);
  font-family: "Bai Jamjuree";
}

body h3 {
  color: rgb(255, 79, 0);
  font-family: "Bai Jamjuree";
}

body h4 {
  color: rgb(76, 134, 168);
  font-family: "Bai Jamjuree";
}

body h5 {
  color: rgb(128, 100, 67);
  font-family: "Bai Jamjuree";
}

body h6 {
  color: rgb(201, 202, 217);
  font-family: "Bai Jamjuree";
}

body hr {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(24, 29, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(24, 29, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Bai Jamjuree";
  font-weight: 700;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Bai Jamjuree";
  font-weight: 700;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "Bai Jamjuree";
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(216, 215, 223);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(216, 215, 223);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    footer: `body footer {
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  font-family: "Bai Jamjuree";
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Bai Jamjuree";
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body li.section-li > .section .meta {
  font-family: "Bai Jamjuree";
}

body ul.section-ul {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(178, 178, 184);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
}

body .metadata {
  border-bottom-color: rgb(36, 43, 58);
  border-left-color: rgb(36, 43, 58);
  border-right-color: rgb(36, 43, 58);
  border-top-color: rgb(36, 43, 58);
  font-family: "Bai Jamjuree";
}

body .metadata-properties {
  font-family: "Bai Jamjuree";
}

body .navigation-progress {
  background-color: rgb(24, 29, 39);
}

body .page-header h2.page-title {
  color: rgb(216, 215, 223);
}

body abbr {
  color: rgb(216, 215, 223);
  text-decoration: underline dotted rgb(216, 215, 223);
}

body details {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body kbd {
  background-color: rgb(24, 29, 39);
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
  color: rgb(216, 215, 223);
  font-family: "Bai Jamjuree";
}

body progress {
  border-bottom-color: rgb(216, 215, 223);
  border-left-color: rgb(216, 215, 223);
  border-right-color: rgb(216, 215, 223);
  border-top-color: rgb(216, 215, 223);
}

body sub {
  color: rgb(216, 215, 223);
}

body summary {
  color: rgb(216, 215, 223);
}

body sup {
  color: rgb(216, 215, 223);
}`,
  },
  light: {},
};
