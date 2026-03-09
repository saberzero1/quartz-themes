import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "typora-vue",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 153;
  --accent-l: 49%;
  --accent-s: 47%;
  --background-modifier-active-hover: rgba(66, 184, 131, 0.1);
  --background-modifier-hover: rgba(66, 184, 131, 0.05);
  --background-modifier-message: rgb(66, 184, 131);
  --bases-table-cell-background-selected: rgba(66, 184, 131, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(66, 184, 131);
  --bases-table-header-background-hover: rgba(66, 184, 131, 0.05);
  --bases-table-row-background-hover: #171717;
  --bases-table-summary-background-hover: rgba(66, 184, 131, 0.05);
  --blockquote-border-color: rgb(66, 184, 131);
  --caret-color: #EEEEEE;
  --checkbox-color: rgb(66, 184, 131);
  --checkbox-color-hover: rgb(89, 197, 143);
  --code-background: #1a1a1a;
  --code-bracket-background: rgba(66, 184, 131, 0.05);
  --code-normal: #EEEEEE;
  --collapse-icon-color-collapsed: rgb(89, 197, 143);
  --color-accent: rgb(66, 184, 131);
  --color-accent-1: rgb(89, 197, 143);
  --color-accent-2: rgb(114, 207, 158);
  --color-accent-hsl: 153, 47%, 49%;
  --cus-code-block-border: #1c1c1c;
  --cus-highlight-cursor-line: rgba(225, 225, 225, 0.12);
  --cus-inline-code-text: #f3b37f;
  --cus-table-gap-tr: #1a1a1a;
  --cus-table-header: #171717;
  --divider-color-hover: rgb(66, 184, 131);
  --embed-border-start: 2px solid rgb(66, 184, 131);
  --flair-color: #EEEEEE;
  --footnote-input-background-active: rgba(66, 184, 131, 0.05);
  --graph-node-focused: rgb(89, 197, 143);
  --graph-text: #EEEEEE;
  --h1-size: 2.2em;
  --h2-size: 1.75em;
  --h3-size: 1.4em;
  --h4-size: 1.2em;
  --h5-size: 1em;
  --icon-color-active: rgb(89, 197, 143);
  --icon-color-focused: #EEEEEE;
  --icon-color-hover: rgb(66, 184, 131);
  --inline-title-size: 2.2em;
  --interactive-accent: rgb(66, 184, 131);
  --interactive-accent-hover: rgb(89, 197, 143);
  --interactive-accent-hsl: 153, 47%, 49%;
  --link-color: rgb(89, 197, 143);
  --link-color-hover: rgb(114, 207, 158);
  --link-external-color: rgb(89, 197, 143);
  --link-external-color-hover: rgb(114, 207, 158);
  --link-unresolved-color: rgb(89, 197, 143);
  --link-unresolved-decoration-color: rgba(66, 184, 131, 0.3);
  --list-marker-color-collapsed: rgb(89, 197, 143);
  --metadata-input-background-active: rgba(66, 184, 131, 0.05);
  --metadata-input-text-color: #EEEEEE;
  --metadata-label-background-active: rgba(66, 184, 131, 0.05);
  --metadata-property-background-active: rgba(66, 184, 131, 0.05);
  --nav-heading-color: #EEEEEE;
  --nav-heading-color-hover: #EEEEEE;
  --nav-item-background-active: rgba(66, 184, 131, 0.05);
  --nav-item-background-hover: rgba(66, 184, 131, 0.05);
  --nav-item-background-selected: rgba(66, 184, 131, 0.15);
  --nav-item-color-active: rgb(66, 184, 131);
  --nav-item-color-highlighted: rgb(89, 197, 143);
  --nav-item-color-hover: rgb(66, 184, 131);
  --nav-item-color-selected: #EEEEEE;
  --pill-color-hover: #EEEEEE;
  --pill-color-remove-hover: rgb(89, 197, 143);
  --setting-group-heading-color: #EEEEEE;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(66, 184, 131);
  --tab-text-color-focused-active-current: #EEEEEE;
  --tab-text-color-focused-highlighted: rgb(89, 197, 143);
  --table-drag-handle-background-active: rgb(66, 184, 131);
  --table-header-color: #EEEEEE;
  --table-row-background-hover: #171717;
  --table-selection: rgba(66, 184, 131, 0.1);
  --table-selection-border-color: rgb(66, 184, 131);
  --tag-background: rgba(66, 184, 131, 0.1);
  --tag-background-hover: rgba(66, 184, 131, 0.2);
  --tag-border-color: rgba(66, 184, 131, 0.15);
  --tag-border-color-hover: rgba(66, 184, 131, 0.15);
  --tag-color: rgb(89, 197, 143);
  --tag-color-hover: rgb(89, 197, 143);
  --text-accent: rgb(89, 197, 143);
  --text-accent-hover: rgb(114, 207, 158);
  --text-normal: #EEEEEE;
  --text-selection: rgba(66, 184, 131, 0.33);
  --titlebar-text-color-focused: #EEEEEE;
  --vault-profile-color: #EEEEEE;
  --vault-profile-color-hover: #EEEEEE;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(238, 238, 238);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(238, 238, 238);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(238, 238, 238);
}

body div#quartz-root {
  color: rgb(238, 238, 238);
}`,
    typography: `body .page article p > b, b {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .page article p > em, em {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .page article p > i, i {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .page article p > strong, strong {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .text-highlight {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body del {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: line-through rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    links: `body a.external, footer a {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration: underline rgb(90, 197, 144);
  text-decoration-color: rgb(90, 197, 144);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration: underline rgb(90, 197, 144);
  text-decoration-color: rgb(90, 197, 144);
}

body a.internal.broken {
  color: rgb(90, 197, 144);
  outline: rgb(90, 197, 144) none 0px;
  text-decoration: underline rgba(66, 184, 131, 0.3);
  text-decoration-color: rgba(66, 184, 131, 0.3);
}`,
    lists: `body dd {
  color: rgb(238, 238, 238);
}

body dt {
  color: rgb(238, 238, 238);
}

body ol > li {
  color: rgb(238, 238, 238);
}

body ol.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body ul > li {
  color: rgb(238, 238, 238);
}

body ul.overflow {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(66, 184, 131, 0.1);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body table {
  color: rgb(238, 238, 238);
}

body tbody tr:nth-child(even) {
  background-color: rgb(26, 26, 26);
}

body td {
  color: rgb(238, 238, 238);
}

body th {
  color: rgb(238, 238, 238);
}

body thead {
  background-color: rgb(23, 23, 23);
}`,
    code: `body code {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
  color: rgb(238, 238, 238);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(28, 28, 28);
  border-bottom-width: 1px;
  border-left-color: rgb(28, 28, 28);
  border-left-width: 1px;
  border-right-color: rgb(28, 28, 28);
  border-right-width: 1px;
  border-top-color: rgb(28, 28, 28);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body figcaption {
  color: rgb(238, 238, 238);
}

body figure {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body img {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body video {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .transclude {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .transclude-inner {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='*'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='-'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='/'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='>'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='?'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='I'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='S'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='b'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='c'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='d'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='f'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='i'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='k'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='l'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='p'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='u'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body li.task-list-item[data-task='w'] {
  color: rgb(238, 238, 238);
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}`,
    search: `body .search > .search-button {
  color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > * {
  color: rgb(238, 238, 238);
  outline: rgb(238, 238, 238) none 0px;
  text-decoration: rgb(238, 238, 238);
  text-decoration-color: rgb(238, 238, 238);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > input {
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(66, 184, 131, 0.1);
  border-bottom-color: rgba(66, 184, 131, 0.15);
  border-left-color: rgba(66, 184, 131, 0.15);
  border-right-color: rgba(66, 184, 131, 0.15);
  border-top-color: rgba(66, 184, 131, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(90, 197, 144);
}

body h1 {
  color: rgb(238, 238, 238);
}

body h2 {
  color: rgb(238, 238, 238);
}

body h2.page-title, h2.page-title a {
  color: rgb(238, 238, 238);
}

body h3 {
  color: rgb(238, 238, 238);
}

body h4 {
  color: rgb(238, 238, 238);
}

body h5 {
  color: rgb(238, 238, 238);
}

body h6 {
  color: rgb(238, 238, 238);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(238, 238, 238);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body ul.section-ul {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body .page-header h2.page-title {
  color: rgb(238, 238, 238);
}

body abbr {
  color: rgb(238, 238, 238);
  text-decoration: underline dotted rgb(238, 238, 238);
}

body details {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body kbd {
  background-color: rgb(26, 26, 26);
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
  color: rgb(238, 238, 238);
}

body progress {
  border-bottom-color: rgb(238, 238, 238);
  border-left-color: rgb(238, 238, 238);
  border-right-color: rgb(238, 238, 238);
  border-top-color: rgb(238, 238, 238);
}

body sub {
  color: rgb(238, 238, 238);
}

body summary {
  color: rgb(238, 238, 238);
}

body sup {
  color: rgb(238, 238, 238);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 153;
  --accent-l: 49%;
  --accent-s: 47%;
  --background-modifier-active-hover: rgba(66, 184, 131, 0.1);
  --background-modifier-hover: rgba(66, 184, 131, 0.05);
  --background-modifier-message: rgb(66, 184, 131);
  --background-secondary: #ffffff;
  --bases-table-cell-background-selected: rgba(66, 184, 131, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(79, 191, 139);
  --bases-table-header-background-hover: rgba(66, 184, 131, 0.05);
  --bases-table-row-background-hover: #f2f2f2;
  --bases-table-summary-background-hover: rgba(66, 184, 131, 0.05);
  --blockquote-border-color: rgb(79, 191, 139);
  --caret-color: #34495e;
  --checkbox-color: rgb(79, 191, 139);
  --checkbox-color-hover: rgb(89, 197, 143);
  --code-background: #f8f8f8;
  --code-bracket-background: rgba(66, 184, 131, 0.05);
  --code-normal: #34495e;
  --collapse-icon-color-collapsed: rgb(66, 184, 131);
  --color-accent: rgb(66, 184, 131);
  --color-accent-1: rgb(79, 191, 139);
  --color-accent-2: rgb(89, 197, 143);
  --color-accent-hsl: 153, 47%, 49%;
  --cus-code-block-border: #f4f4f4;
  --cus-highlight-cursor-line: rgba(245, 204, 142, 0.12);
  --cus-inline-code-text: #e96900;
  --cus-table-gap-tr: #fafafa;
  --cus-table-header: #f2f2f2;
  --divider-color-hover: rgb(79, 191, 139);
  --embed-border-start: 2px solid rgb(79, 191, 139);
  --flair-color: #34495e;
  --footnote-input-background-active: rgba(66, 184, 131, 0.05);
  --graph-node-focused: rgb(66, 184, 131);
  --graph-text: #34495e;
  --h1-size: 2.2em;
  --h2-size: 1.75em;
  --h3-size: 1.4em;
  --h4-size: 1.2em;
  --h5-size: 1em;
  --icon-color-active: rgb(66, 184, 131);
  --icon-color-focused: #34495e;
  --icon-color-hover: rgb(66, 184, 131);
  --inline-title-size: 2.2em;
  --interactive-accent: rgb(79, 191, 139);
  --interactive-accent-hover: rgb(89, 197, 143);
  --interactive-accent-hsl: 153, 47%, 49%;
  --link-color: rgb(66, 184, 131);
  --link-color-hover: rgb(89, 197, 143);
  --link-external-color: rgb(66, 184, 131);
  --link-external-color-hover: rgb(89, 197, 143);
  --link-unresolved-color: rgb(66, 184, 131);
  --link-unresolved-decoration-color: rgba(66, 184, 131, 0.3);
  --list-marker-color-collapsed: rgb(66, 184, 131);
  --menu-background: #ffffff;
  --metadata-input-background-active: rgba(66, 184, 131, 0.05);
  --metadata-input-text-color: #34495e;
  --metadata-label-background-active: rgba(66, 184, 131, 0.05);
  --metadata-property-background-active: rgba(66, 184, 131, 0.05);
  --nav-heading-color: #34495e;
  --nav-heading-color-hover: #34495e;
  --nav-item-background-active: rgba(66, 184, 131, 0.05);
  --nav-item-background-hover: rgba(66, 184, 131, 0.05);
  --nav-item-background-selected: rgba(66, 184, 131, 0.15);
  --nav-item-color-active: rgb(66, 184, 131);
  --nav-item-color-highlighted: rgb(66, 184, 131);
  --nav-item-color-hover: rgb(66, 184, 131);
  --nav-item-color-selected: #34495e;
  --pill-color-hover: #34495e;
  --pill-color-remove-hover: rgb(66, 184, 131);
  --ribbon-background: #ffffff;
  --setting-group-heading-color: #34495e;
  --status-bar-background: #ffffff;
  --tab-container-background: #ffffff;
  --tab-switcher-background: #ffffff;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(66, 184, 131);
  --tab-text-color-focused-active-current: #34495e;
  --tab-text-color-focused-highlighted: rgb(66, 184, 131);
  --table-drag-handle-background-active: rgb(79, 191, 139);
  --table-header-color: #34495e;
  --table-row-background-hover: #f2f2f2;
  --table-selection: rgba(66, 184, 131, 0.1);
  --table-selection-border-color: rgb(79, 191, 139);
  --tag-background: rgba(66, 184, 131, 0.1);
  --tag-background-hover: rgba(66, 184, 131, 0.2);
  --tag-border-color: rgba(66, 184, 131, 0.15);
  --tag-border-color-hover: rgba(66, 184, 131, 0.15);
  --tag-color: rgb(66, 184, 131);
  --tag-color-hover: rgb(66, 184, 131);
  --text-accent: rgb(66, 184, 131);
  --text-accent-hover: rgb(89, 197, 143);
  --text-normal: #34495e;
  --text-selection: rgba(66, 184, 131, 0.2);
  --titlebar-background: #ffffff;
  --titlebar-text-color-focused: #34495e;
  --vault-profile-color: #34495e;
  --vault-profile-color-hover: #34495e;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(52, 73, 94);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(52, 73, 94);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(52, 73, 94);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(52, 73, 94);
}

body div#quartz-root {
  color: rgb(52, 73, 94);
}`,
    typography: `body .page article p > b, b {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body .page article p > em, em {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body .page article p > i, i {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body .page article p > strong, strong {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body .text-highlight {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body del {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: line-through rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}`,
    links: `body a.external, footer a {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration: underline rgb(66, 184, 131);
  text-decoration-color: rgb(66, 184, 131);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration: underline rgb(66, 184, 131);
  text-decoration-color: rgb(66, 184, 131);
}

body a.internal.broken {
  color: rgb(66, 184, 131);
  outline: rgb(66, 184, 131) none 0px;
  text-decoration: underline rgba(66, 184, 131, 0.3);
  text-decoration-color: rgba(66, 184, 131, 0.3);
}`,
    lists: `body dd {
  color: rgb(52, 73, 94);
}

body dt {
  color: rgb(52, 73, 94);
}

body ol > li {
  color: rgb(52, 73, 94);
}

body ol.overflow {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body ul > li {
  color: rgb(52, 73, 94);
}

body ul.overflow {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    blockquotes: `body blockquote {
  background-color: rgba(66, 184, 131, 0.1);
  padding-bottom: 8px;
  padding-top: 8px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body table {
  color: rgb(52, 73, 94);
}

body tbody tr:nth-child(even) {
  background-color: rgb(250, 250, 250);
}

body td {
  color: rgb(52, 73, 94);
}

body th {
  color: rgb(52, 73, 94);
}

body thead {
  background-color: rgb(242, 242, 242);
}`,
    code: `body code {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
  color: rgb(52, 73, 94);
}

body pre > code, pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(244, 244, 244);
  border-bottom-width: 1px;
  border-left-color: rgb(244, 244, 244);
  border-left-width: 1px;
  border-right-color: rgb(244, 244, 244);
  border-right-width: 1px;
  border-top-color: rgb(244, 244, 244);
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body figcaption {
  color: rgb(52, 73, 94);
}

body figure {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body img {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body video {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

body .transclude {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(77, 192, 138);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body .transclude-inner {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(77, 192, 138);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    checkboxes: `body li.task-list-item[data-task='!'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='*'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='-'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='/'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='>'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='?'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='I'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='S'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='b'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='c'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='d'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='f'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='i'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='k'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='l'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='p'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='u'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body li.task-list-item[data-task='w'] {
  color: rgb(52, 73, 94);
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}`,
    search: `body .search > .search-button {
  color: rgb(52, 73, 94);
}

body .search > .search-container > .search-space > * {
  color: rgb(52, 73, 94);
  outline: rgb(52, 73, 94) none 0px;
  text-decoration: rgb(52, 73, 94);
  text-decoration-color: rgb(52, 73, 94);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(66, 184, 131, 0.05);
  color: rgb(66, 184, 131);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(66, 184, 131, 0.1);
  border-bottom-color: rgba(66, 184, 131, 0.15);
  border-left-color: rgba(66, 184, 131, 0.15);
  border-right-color: rgba(66, 184, 131, 0.15);
  border-top-color: rgba(66, 184, 131, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(66, 184, 131);
}

body h1 {
  color: rgb(52, 73, 94);
}

body h2 {
  color: rgb(52, 73, 94);
}

body h2.page-title, h2.page-title a {
  color: rgb(52, 73, 94);
}

body h3 {
  color: rgb(52, 73, 94);
}

body h4 {
  color: rgb(52, 73, 94);
}

body h5 {
  color: rgb(52, 73, 94);
}

body h6 {
  color: rgb(52, 73, 94);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(66, 184, 131, 0.05);
  border-bottom-color: rgb(66, 184, 131);
  border-left-color: rgb(66, 184, 131);
  border-right-color: rgb(66, 184, 131);
  border-top-color: rgb(66, 184, 131);
  color: rgb(66, 184, 131);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(52, 73, 94);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body ul.section-ul {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(52, 73, 94);
}

body abbr {
  color: rgb(52, 73, 94);
  text-decoration: underline dotted rgb(52, 73, 94);
}

body details {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body kbd {
  background-color: rgb(248, 248, 248);
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
  color: rgb(52, 73, 94);
}

body progress {
  border-bottom-color: rgb(52, 73, 94);
  border-left-color: rgb(52, 73, 94);
  border-right-color: rgb(52, 73, 94);
  border-top-color: rgb(52, 73, 94);
}

body sub {
  color: rgb(52, 73, 94);
}

body summary {
  color: rgb(52, 73, 94);
}

body sup {
  color: rgb(52, 73, 94);
}`,
  },
};
