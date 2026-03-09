import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "80s-neon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-1: #FF00FF;
  --accent-1-muted: #ff79c6;
  --accent-2: #00FFFF;
  --accent-2-muted: #8be9fd;
  --accent-3: #00FF00;
  --accent-3-muted: #50fa7b;
  --accent-4: #FFFF00;
  --accent-4-muted: #ffb86c;
  --accent-5: #FF0000;
  --accent-5-muted: #ff5555;
  --accent-6: #0000FF;
  --accent-6-muted: #bd93f9;
  --background-accent: #000;
  --background-modifier-border: #00FFFF;
  --background-primary: #2b213a;
  --background-primary-alt: #171520;
  --background-secondary: #1a1836;
  --background-secondary-alt: #242043;
  --bases-cards-background: #2b213a;
  --bases-cards-cover-background: #171520;
  --bases-cards-shadow: 0 0 0 1px #00FFFF;
  --bases-embed-border-color: #00FFFF;
  --bases-group-heading-property-color: #ff79c6;
  --bases-table-border-color: #00FFFF;
  --bases-table-cell-background-active: #2b213a;
  --bases-table-cell-background-disabled: #171520;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00FFFF;
  --bases-table-group-background: #171520;
  --bases-table-header-background: #2b213a;
  --bases-table-header-color: #ff79c6;
  --bases-table-summary-background: #2b213a;
  --blockquote-border-color: #00FFFF;
  --blur-background: color-mix(in srgb, #00FFFF 65%, transparent) linear-gradient(#00FFFF, color-mix(in srgb, #00FFFF 65%, transparent));
  --canvas-background: #2b213a;
  --canvas-card-label-color: #bd93f9;
  --caret-color: #FF00FF;
  --checkbox-border-color: #bd93f9;
  --checkbox-border-color-hover: #ff79c6;
  --checkbox-color: #00FFFF;
  --checkbox-color-hover: #8be9fd;
  --checkbox-marker-color: #2b213a;
  --checklist-done-color: #ff79c6;
  --code-background: #171520;
  --code-border-color: #00FFFF;
  --code-comment: #bd93f9;
  --code-normal: #FF00FF;
  --code-punctuation: #ff79c6;
  --collapse-icon-color: #bd93f9;
  --collapse-icon-color-collapsed: #FF1690;
  --divider-color: #00FFFF;
  --divider-color-hover: #00FFFF;
  --dropdown-background: #00FFFF;
  --dropdown-background-hover: #8be9fd;
  --embed-block-shadow-hover: 0 0 0 1px #00FFFF, inset 0 0 0 1px #00FFFF;
  --embed-border-start: 2px solid #00FFFF;
  --file-header-background: #2b213a;
  --file-header-background-focused: #2b213a;
  --flair-background: #00FFFF;
  --flair-color: #FF00FF;
  --footnote-divider-color: #00FFFF;
  --footnote-id-color: #ff79c6;
  --footnote-id-color-no-occurrences: #bd93f9;
  --graph-node: #ff79c6;
  --graph-node-focused: #FF1690;
  --graph-node-unresolved: #bd93f9;
  --graph-text: #FF00FF;
  --heading-formatting: #bd93f9;
  --hr-color: #00FFFF;
  --icon-color: #ff79c6;
  --icon-color-active: #FF1690;
  --icon-color-focused: #FF00FF;
  --icon-color-hover: #ff79c6;
  --input-date-separator: #bd93f9;
  --input-placeholder-color: #bd93f9;
  --interactive-accent: #00FFFF;
  --interactive-accent-hover: #8be9fd;
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: #8be9fd;
  --interactive-normal: #00FFFF;
  --link-color: #FF1690;
  --link-color-hover: #7a6ae6;
  --link-external-color: #FF1690;
  --link-external-color-hover: #7a6ae6;
  --link-unresolved-color: #FF1690;
  --list-marker-color: #bd93f9;
  --list-marker-color-collapsed: #FF1690;
  --list-marker-color-hover: #ff79c6;
  --menu-background: #1a1836;
  --metadata-border-color: #00FFFF;
  --metadata-divider-color: #00FFFF;
  --metadata-input-text-color: #FF00FF;
  --metadata-label-text-color: #ff79c6;
  --metadata-label-text-color-hover: #ff79c6;
  --modal-background: #2b213a;
  --nav-collapse-icon-color: #bd93f9;
  --nav-collapse-icon-color-collapsed: #bd93f9;
  --nav-heading-color: #FF00FF;
  --nav-heading-color-collapsed: #bd93f9;
  --nav-heading-color-collapsed-hover: #ff79c6;
  --nav-heading-color-hover: #FF00FF;
  --nav-item-color: #ff79c6;
  --nav-item-color-active: #FF00FF;
  --nav-item-color-highlighted: #FF1690;
  --nav-item-color-hover: #FF00FF;
  --nav-item-color-selected: #FF00FF;
  --nav-tag-color: #bd93f9;
  --nav-tag-color-active: #ff79c6;
  --nav-tag-color-hover: #ff79c6;
  --pdf-background: #2b213a;
  --pdf-page-background: #2b213a;
  --pdf-shadow: 0 0 0 1px #00FFFF;
  --pdf-sidebar-background: #2b213a;
  --pdf-thumbnail-shadow: 0 0 0 1px #00FFFF;
  --pill-border-color: #00FFFF;
  --pill-color: #ff79c6;
  --pill-color-hover: #FF00FF;
  --pill-color-remove: #bd93f9;
  --pill-color-remove-hover: #FF1690;
  --prompt-background: #2b213a;
  --raised-background: color-mix(in srgb, #00FFFF 65%, transparent) linear-gradient(#00FFFF, color-mix(in srgb, #00FFFF 65%, transparent));
  --ribbon-background: #1a1836;
  --ribbon-background-collapsed: #2b213a;
  --search-clear-button-color: #ff79c6;
  --search-icon-color: #ff79c6;
  --search-result-background: #2b213a;
  --setting-group-heading-color: #FF00FF;
  --setting-items-background: #171520;
  --setting-items-border-color: #00FFFF;
  --slider-track-background: #00FFFF;
  --status-bar-background: #1a1836;
  --status-bar-border-color: #00FFFF;
  --status-bar-text-color: #ff79c6;
  --suggestion-background: #2b213a;
  --tab-background-active: #2b213a;
  --tab-container-background: #1a1836;
  --tab-outline-color: #00FFFF;
  --tab-switcher-background: #1a1836;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1836, transparent);
  --tab-text-color: #bd93f9;
  --tab-text-color-active: #ff79c6;
  --tab-text-color-focused: #ff79c6;
  --tab-text-color-focused-active: #ff79c6;
  --tab-text-color-focused-active-current: #FF00FF;
  --tab-text-color-focused-highlighted: #FF1690;
  --table-add-button-border-color: #00FFFF;
  --table-border-color: #00FFFF;
  --table-drag-handle-background-active: #00FFFF;
  --table-drag-handle-color: #bd93f9;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8);
  --table-header-border-color: #00FFFF;
  --table-header-color: #FF00FF;
  --table-selection-border-color: #00FFFF;
  --tag-color: #FF1690;
  --tag-color-hover: #FF1690;
  --text-accent: #FF1690;
  --text-accent-hover: #7a6ae6;
  --text-faint: #bd93f9;
  --text-highlight-bg: #ffd319;
  --text-muted: #ff79c6;
  --text-normal: #FF00FF;
  --text-on-accent: rgba(0, 0, 0, 0.8);
  --text-selection: rgba(0, 122, 255, 0.2);
  --titlebar-background: #1a1836;
  --titlebar-background-focused: #242043;
  --titlebar-border-color: #00FFFF;
  --titlebar-text-color: #ff79c6;
  --titlebar-text-color-focused: #FF00FF;
  --vault-profile-color: #FF00FF;
  --vault-profile-color-hover: #FF00FF;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 24, 54);
  color: rgb(255, 0, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(43, 33, 58);
  color: rgb(255, 0, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 24, 54);
  color: rgb(255, 0, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 24, 54);
  border-left-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

body div#quartz-root {
  background-color: rgb(43, 33, 58);
  color: rgb(255, 0, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body .page article p > em, em {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body .page article p > i, i {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body .page article p > strong, strong {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body .text-highlight {
  background-color: rgb(255, 211, 25);
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body del {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: line-through rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body p {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration: rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration: underline rgb(255, 22, 144);
  text-decoration-color: rgb(255, 22, 144);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration: underline rgb(255, 22, 144);
  text-decoration-color: rgb(255, 22, 144);
}

body a.internal.broken {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
}`,
    lists: `body dd {
  color: rgba(255, 220, 255, 0.8);
}

body dt {
  color: rgba(255, 220, 255, 0.8);
}

body ol > li {
  color: rgba(255, 220, 255, 0.8);
}

body ol.overflow {
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

body ul > li {
  color: rgba(255, 220, 255, 0.8);
}

body ul.overflow {
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgba(255, 220, 255, 0.25);
  text-decoration: rgba(255, 220, 255, 0.25);
}`,
    tables: `body .table-container {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body table {
  color: rgba(255, 220, 255, 0.8);
}

body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgba(255, 220, 255, 0.8);
}

body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgba(255, 220, 255, 0.8);
}

body pre > code, pre:has(> code) {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

body pre:has(> code) {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `body audio {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body figcaption {
  color: rgba(255, 220, 255, 0.8);
}

body figure {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body img {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body video {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}`,
    embeds: `body .file-embed {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
}

body .footnotes {
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

body .transclude {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body .transclude-inner {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 121, 198);
  text-decoration: line-through rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  margin-right: 6.66667px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='*'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='-'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='/'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='>'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='?'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='I'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='S'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='b'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='c'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='d'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='f'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='i'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='k'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='l'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='p'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='u'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body li.task-list-item[data-task='w'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(43, 33, 58);
}

body .search > .search-container > .search-space > * {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 220, 255, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgba(255, 220, 255, 0.8);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgba(255, 220, 255, 0.8);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 24, 54);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgba(255, 220, 255, 0.8);
}

body a.internal.tag-link::before {
  color: rgb(255, 22, 144);
}

body h1 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 0, 255) 0px 0px 12.944px;
}

body h2 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 255, 255) 0px 0px 11.696px;
}

body h2.page-title, h2.page-title a {
  color: rgba(255, 220, 255, 0.8);
}

body h3 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 255, 0) 0px 0px 10.544px;
}

body h4 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 255, 0) 0px 0px 9.504px;
}

body h5 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 0, 0) 0px 0px 8.608px;
}

body h6 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 0, 255) 0px 0px 8px;
}

body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

body ::-webkit-scrollbar-corner {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

body ::-webkit-scrollbar-track {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}`,
    footer: `body footer {
  background-color: rgb(26, 24, 54);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 121, 198);
}

body footer ul li a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 0, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 121, 198);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

body li.section-li > .section .meta {
  color: rgb(255, 121, 198);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

body .darkmode svg {
  color: rgb(255, 121, 198);
  stroke: rgb(255, 121, 198);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 121, 198);
}

body .metadata-properties {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

body .navigation-progress {
  background-color: rgb(26, 24, 54);
}

body .page-header h2.page-title {
  color: rgb(255, 0, 255);
}

body abbr {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: underline dotted rgba(255, 220, 255, 0.8);
}

body details {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body input[type=text] {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

body kbd {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

body progress {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

body sub {
  color: rgba(255, 220, 255, 0.8);
}

body summary {
  color: rgba(255, 220, 255, 0.8);
}

body sup {
  color: rgba(255, 220, 255, 0.8);
}`,
  },
  light: {},
};
