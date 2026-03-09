import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "mammoth", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #dd99bb;
  --background-modifier-error-hover: #f1a6cc;
  --background-modifier-error-rgb: 221, 153, 187;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #bfffbc;
  --background-primary: #171b1f;
  --background-primary-alt: #20252a;
  --background-secondary: #171e24;
  --background-secondary-alt: #242f38;
  --bases-cards-background: #171b1f;
  --bases-cards-cover-background: #20252a;
  --bases-cards-shadow: 0 0 0 1px #333;
  --bases-embed-border-color: #333;
  --bases-group-heading-property-color: #999;
  --bases-table-border-color: #333;
  --bases-table-cell-background-active: #171b1f;
  --bases-table-cell-background-disabled: #20252a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0ad1ed;
  --bases-table-group-background: #20252a;
  --bases-table-header-background: #171b1f;
  --bases-table-header-color: #999;
  --bases-table-summary-background: #171b1f;
  --blockquote-border-color: #0ad1ed;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --canvas-background: #171b1f;
  --canvas-card-label-color: #666;
  --caret-color: #dcddde;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #999;
  --checkbox-color: #0ad1ed;
  --checkbox-color-hover: #64d9e9;
  --checkbox-marker-color: #171b1f;
  --checklist-done-color: #999;
  --code-background: #20252a;
  --code-border-color: #333;
  --code-comment: #666;
  --code-normal: #dcddde;
  --code-punctuation: #999;
  --collapse-icon-color: #666;
  --collapse-icon-color-collapsed: #0ad1ed;
  --divider-color: #333;
  --divider-color-hover: #0ad1ed;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333;
  --embed-border-start: 2px solid #0ad1ed;
  --english-violet: #544261;
  --file-header-background: #171b1f;
  --file-header-background-focused: #171b1f;
  --flair-background: #2a2a2a;
  --flair-color: #dcddde;
  --footnote-divider-color: #333;
  --footnote-id-color: #999;
  --footnote-id-color-no-occurrences: #666;
  --granny-smith-apple: #bfffbc;
  --graph-node: #999;
  --graph-node-focused: #0ad1ed;
  --graph-node-unresolved: #666;
  --graph-text: #dcddde;
  --heading-formatting: #666;
  --hr-color: #333;
  --icon-color: #999;
  --icon-color-active: #0ad1ed;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #999;
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-accent: #0ad1ed;
  --interactive-accent-hover: #64d9e9;
  --interactive-accent-rgb: 10, 209, 237;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --kobi: #dd99bb;
  --kobi-dark: #DC3B8C;
  --link-color: #0ad1ed;
  --link-color-hover: #48e5fa;
  --link-external-color: #0ad1ed;
  --link-external-color-hover: #48e5fa;
  --link-unresolved-color: #0ad1ed;
  --list-marker-color: #666;
  --list-marker-color-collapsed: #0ad1ed;
  --list-marker-color-hover: #999;
  --menu-background: #171e24;
  --metadata-border-color: #333;
  --metadata-divider-color: #333;
  --metadata-input-text-color: #dcddde;
  --metadata-label-text-color: #999;
  --metadata-label-text-color-hover: #999;
  --modal-background: #171b1f;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: #666;
  --nav-heading-color-collapsed-hover: #999;
  --nav-heading-color-hover: #dcddde;
  --nav-item-color: #999;
  --nav-item-color-active: #dcddde;
  --nav-item-color-highlighted: #0ad1ed;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: #666;
  --nav-tag-color-active: #999;
  --nav-tag-color-hover: #999;
  --orange-yellow: #f5b700;
  --pdf-background: #171b1f;
  --pdf-page-background: #171b1f;
  --pdf-shadow: 0 0 0 1px #333;
  --pdf-sidebar-background: #171b1f;
  --pdf-thumbnail-shadow: 0 0 0 1px #333;
  --pill-border-color: #333;
  --pill-color: #999;
  --pill-color-hover: #dcddde;
  --pill-color-remove: #666;
  --pill-color-remove-hover: #0ad1ed;
  --prompt-background: #171b1f;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: #171e24;
  --ribbon-background-collapsed: #171b1f;
  --search-clear-button-color: #999;
  --search-icon-color: #999;
  --search-result-background: #171b1f;
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #20252a;
  --setting-items-border-color: #333;
  --sky-blue-crayola: #0ad1ed;
  --slate-gray: #647d90;
  --slider-track-background: #333;
  --status-bar-background: #171e24;
  --status-bar-border-color: #333;
  --status-bar-text-color: #999;
  --suggestion-background: #171b1f;
  --tab-background-active: #171b1f;
  --tab-container-background: #171e24;
  --tab-outline-color: #333;
  --tab-switcher-background: #171e24;
  --tab-switcher-menubar-background: linear-gradient(to top, #171e24, transparent);
  --tab-text-color: #666;
  --tab-text-color-active: #999;
  --tab-text-color-focused: #999;
  --tab-text-color-focused-active: #999;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #0ad1ed;
  --table-add-button-border-color: #333;
  --table-border-color: #333;
  --table-drag-handle-background-active: #0ad1ed;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #333;
  --table-header-color: #dcddde;
  --table-selection-border-color: #0ad1ed;
  --tag-color: #0ad1ed;
  --tag-color-hover: #0ad1ed;
  --text-accent: #0ad1ed;
  --text-accent-hover: #48e5fa;
  --text-error: #dd99bb;
  --text-error-hover: #c55d91;
  --text-faint: #666;
  --text-highlight-bg: rgba(245, 184, 0, 0.397);
  --text-highlight-bg-active: rgba(243, 195, 49, 0.459);
  --text-muted: #999;
  --text-muted-rgb: 153, 153, 153;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(100, 125, 144, 0.99);
  --titlebar-background: #171e24;
  --titlebar-background-focused: #242f38;
  --titlebar-border-color: #333;
  --titlebar-text-color: #999;
  --titlebar-text-color-focused: #dcddde;
  --todoist-blue: #5297ff;
  --todoist-blue-background: rgba(82, 151, 255, 0.1);
  --todoist-green: #25b84c;
  --todoist-orange: #ff9a14;
  --todoist-orange-background: rgba(255, 154, 20, 0.1);
  --todoist-red: #ff7066;
  --todoist-red-background: rgba(255, 112, 102, 0.1);
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(23, 30, 36);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 27, 31);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(23, 30, 36);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(23, 30, 36);
  border-left-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(23, 27, 31);
  color: rgb(220, 221, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > em, em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > i, i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > strong, strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .text-highlight {
  background-color: rgba(245, 184, 0, 0.396);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: line-through rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body p {
  color: rgb(153, 153, 153);
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(10, 209, 237);
  outline: rgb(10, 209, 237) none 0px;
  text-decoration: underline rgb(10, 209, 237);
  text-decoration-color: rgb(10, 209, 237);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(10, 209, 237);
  outline: rgb(10, 209, 237) none 0px;
  text-decoration: underline rgb(10, 209, 237);
  text-decoration-color: rgb(10, 209, 237);
}

body a.internal.broken {
  color: rgb(10, 209, 237);
  outline: rgb(10, 209, 237) none 0px;
}`,
    lists: `body dd {
  color: rgb(220, 221, 222);
}

body dt {
  color: rgb(220, 221, 222);
}

body ol > li {
  color: rgb(220, 221, 222);
}

body ol.overflow {
  background-color: rgb(23, 27, 31);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(23, 27, 31);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body table {
  color: rgb(220, 221, 222);
}

body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}`,
    code: `body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body figcaption {
  color: rgb(220, 221, 222);
}

body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(10, 209, 237);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(10, 209, 237);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body input[type=checkbox] {
  border-bottom-color: rgb(220, 221, 222);
  border-bottom-left-radius: 10%;
  border-bottom-right-radius: 10%;
  border-bottom-width: 2px;
  border-left-color: rgb(220, 221, 222);
  border-left-width: 2px;
  border-right-color: rgb(220, 221, 222);
  border-right-width: 2px;
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 10%;
  border-top-right-radius: 10%;
  border-top-width: 2px;
  margin-left: -6px;
  margin-right: 5px;
  padding-bottom: 5px;
  width: 18px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='*'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='-'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='/'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='>'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='?'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='I'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='S'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='b'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='c'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='d'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='f'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='i'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='k'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='l'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='p'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='u'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}

body li.task-list-item[data-task='w'] {
  color: rgb(191, 255, 188);
  text-decoration: line-through rgb(191, 255, 188);
  text-decoration-color: rgb(191, 255, 188);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space {
  background-color: rgb(23, 27, 31);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(23, 27, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(23, 27, 31);
  border-left-color: rgb(23, 27, 31);
  border-right-color: rgb(23, 27, 31);
  border-top-color: rgb(23, 27, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(23, 27, 31);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 183, 0);
  color: rgb(23, 27, 31);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(23, 30, 36);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(245, 183, 0);
  border-bottom-color: rgb(23, 27, 31);
  border-left-color: rgb(23, 27, 31);
  border-right-color: rgb(23, 27, 31);
  border-top-color: rgb(23, 27, 31);
  color: rgb(23, 27, 31);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 183, 0);
  color: rgb(23, 27, 31);
}

body a.internal.tag-link::before {
  color: rgb(10, 209, 237);
}

body h1 {
  color: rgb(220, 221, 222);
}

body h2 {
  color: rgb(191, 255, 188);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(245, 183, 0);
}

body h4 {
  color: rgb(221, 153, 187);
}

body h5 {
  color: rgb(100, 125, 144);
}

body h6 {
  color: rgb(153, 153, 153);
}

body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 27, 31) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 27, 31);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  background-color: rgb(23, 30, 36);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(153, 153, 153);
}

body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(153, 153, 153);
}

body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body .navigation-progress {
  background-color: rgb(23, 30, 36);
}

body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

body abbr {
  color: rgb(220, 221, 222);
  text-decoration: underline dotted rgb(220, 221, 222);
}

body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body input[type=text] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

body kbd {
  background-color: rgb(32, 37, 42);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body sub {
  color: rgb(220, 221, 222);
}

body summary {
  color: rgb(220, 221, 222);
}

body sup {
  color: rgb(220, 221, 222);
}`,
  },
  light: {},
};
