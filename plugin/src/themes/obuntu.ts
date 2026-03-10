import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "obuntu", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-mild: #e6b64f;
  --accent-strong: #ec0d0d;
  --background-modifier-border: #303030;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85);
  --background-modifier-form-field: #343434;
  --background-modifier-form-field-hover: #343434;
  --background-primary: #343434;
  --background-primary-alt: #2c2c2c;
  --background-secondary: #2c2c2c;
  --background-secondary-alt: #2c2c2c;
  --bases-cards-background: #343434;
  --bases-cards-cover-background: #2c2c2c;
  --bases-cards-shadow: 0 0 0 1px #303030;
  --bases-embed-border-color: #303030;
  --bases-group-heading-property-color: #999;
  --bases-table-border-color: #303030;
  --bases-table-cell-background-active: #343434;
  --bases-table-cell-background-disabled: #2c2c2c;
  --bases-table-cell-shadow-focus: 0 0 0 2px #df4a16;
  --bases-table-group-background: #2c2c2c;
  --bases-table-header-background: #343434;
  --bases-table-header-color: #999;
  --bases-table-summary-background: #343434;
  --blockquote-border-color: #df4a16;
  --blur-background: color-mix(in srgb, #343434 65%, transparent) linear-gradient(#343434, color-mix(in srgb, #343434 65%, transparent));
  --bw: #ffffff;
  --canvas-background: #343434;
  --canvas-card-label-color: #666;
  --caret-color: #dcddde;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #999;
  --checkbox-color: #df4a16;
  --checkbox-color-hover: #df7a16;
  --checkbox-marker-color: #343434;
  --checklist-done-color: #999;
  --code-background: #2c2c2c;
  --code-border-color: #303030;
  --code-comment: #666;
  --code-normal: #dcddde;
  --code-punctuation: #999;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #666;
  --collapse-icon-color-collapsed: #df4a16;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #303030;
  --divider-color-hover: #df4a16;
  --dropdown-background: #343434;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #303030, inset 0 0 0 1px #303030;
  --embed-border-start: 2px solid #df4a16;
  --file-header-background: #343434;
  --file-header-background-focused: #343434;
  --flair-background: #343434;
  --flair-color: #dcddde;
  --font-monospace: "Fira Code", "Source Code Pro", monospace;
  --footnote-divider-color: #303030;
  --footnote-id-color: #999;
  --footnote-id-color-no-occurrences: #666;
  --graph-node: #999;
  --graph-node-focused: #df4a16;
  --graph-node-unresolved: #666;
  --graph-text: #dcddde;
  --gray: var(--text-muted);
  --heading-formatting: #666;
  --highlight: var(--text-highlight-bg);
  --hr-color: #303030;
  --icon-color: #999;
  --icon-color-active: #df4a16;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #999;
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-accent: #df4a16;
  --interactive-accent-hover: #df7a16;
  --interactive-accent-rgb: #df7a16;
  --interactive-hover: #303030;
  --interactive-normal: #343434;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --lines-identation: #535353;
  --link-color: #df4a16;
  --link-color-hover: #df7a16;
  --link-external-color: #df4a16;
  --link-external-color-hover: #df7a16;
  --link-unresolved-color: #df4a16;
  --list-marker-color: #666;
  --list-marker-color-collapsed: #df4a16;
  --list-marker-color-hover: #999;
  --menu-background: #2c2c2c;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --metadata-border-color: #303030;
  --metadata-divider-color: #303030;
  --metadata-input-text-color: #dcddde;
  --metadata-label-text-color: #999;
  --metadata-label-text-color-hover: #999;
  --modal-background: #343434;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: #666;
  --nav-heading-color-collapsed-hover: #999;
  --nav-heading-color-hover: #dcddde;
  --nav-item-color: #999;
  --nav-item-color-active: #dcddde;
  --nav-item-color-highlighted: #df4a16;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: #666;
  --nav-tag-color-active: #999;
  --nav-tag-color-hover: #999;
  --pdf-background: #343434;
  --pdf-page-background: #343434;
  --pdf-shadow: 0 0 0 1px #303030;
  --pdf-sidebar-background: #343434;
  --pdf-thumbnail-shadow: 0 0 0 1px #303030;
  --pill-border-color: #303030;
  --pill-color: #999;
  --pill-color-hover: #dcddde;
  --pill-color-remove: #666;
  --pill-color-remove-hover: #df4a16;
  --prompt-background: #343434;
  --raised-background: color-mix(in srgb, #343434 65%, transparent) linear-gradient(#343434, color-mix(in srgb, #343434 65%, transparent));
  --ribbon-background: #2c2c2c;
  --ribbon-background-collapsed: #343434;
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --search-clear-button-color: #999;
  --search-icon-color: #999;
  --search-result-background: #343434;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #2c2c2c;
  --setting-items-border-color: #303030;
  --slider-track-background: #303030;
  --status-bar-background: #2c2c2c;
  --status-bar-border-color: #303030;
  --status-bar-text-color: #999;
  --suggestion-background: #343434;
  --tab-background-active: #343434;
  --tab-container-background: #2c2c2c;
  --tab-outline-color: #303030;
  --tab-switcher-background: #2c2c2c;
  --tab-switcher-menubar-background: linear-gradient(to top, #2c2c2c, transparent);
  --tab-text-color: #666;
  --tab-text-color-active: #999;
  --tab-text-color-focused: #999;
  --tab-text-color-focused-active: #999;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #df4a16;
  --table-add-button-border-color: #303030;
  --table-border-color: #303030;
  --table-drag-handle-background-active: #df4a16;
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #303030;
  --table-header-color: #dcddde;
  --table-selection-border-color: #df4a16;
  --tag-color: #df4a16;
  --tag-color-hover: #df4a16;
  --tertiary: var(--text-accent-hover);
  --text-accent: #df4a16;
  --text-accent-hover: #df7a16;
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: #666;
  --text-highlight-bg: #df4a16;
  --text-matched: #dcddde;
  --text-muted: #999;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(223, 74, 22, 0.8);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #2c2c2c;
  --titlebar-background-focused: #2c2c2c;
  --titlebar-border-color: #303030;
  --titlebar-text-color: #999;
  --titlebar-text-color-focused: #dcddde;
  --tooltip-bg: rgba(223, 74, 22, 0.9);
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --workspace-leaf-resize: #494949;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 44, 44);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(52, 52, 52);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 44, 44);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 44, 44);
  border-left-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(52, 52, 52);
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
  background-color: rgb(223, 74, 22);
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
  font-family: Roboto, sans-serif;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal.broken {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
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
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(44, 44, 44);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body table {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(102, 102, 102);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(102, 102, 102);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(102, 102, 102);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(220, 221, 222);
}

body tbody tr:nth-child(even) {
  background-color: rgba(255, 255, 255, 0.03);
}

body td {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(220, 221, 222);
}

body th {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body thead {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body tr {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    code: `body code {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(184, 43, 78);
  border-left-color: rgb(184, 43, 78);
  border-right-color: rgb(184, 43, 78);
  border-top-color: rgb(184, 43, 78);
  color: rgb(184, 43, 78);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(184, 43, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

body pre:has(> code) {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
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
  background-color: rgb(44, 44, 44);
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
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(153, 153, 153);
  text-decoration: line-through rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}

body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    search: `body .search > .search-button {
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
  font-family: Roboto, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(52, 52, 52);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(44, 44, 44);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(223, 74, 22);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(220, 221, 222);
}

body a.internal.tag-link::before {
  color: rgb(223, 74, 22);
}

body h1 {
  color: rgb(220, 221, 222);
}

body h2 {
  color: rgb(220, 221, 222);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(220, 221, 222);
}

body h4 {
  color: rgb(220, 221, 222);
}

body h5 {
  color: rgb(220, 221, 222);
}

body h6 {
  color: rgb(220, 221, 222);
}

body hr {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-corner {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}

body ::-webkit-scrollbar-track {
  background: rgb(52, 52, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(52, 52, 52);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
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
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-width: 0px;
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
}

body footer ul li a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: Roboto, sans-serif;
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
  font-family: Roboto, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: Roboto, sans-serif;
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
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
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
  background-color: rgb(44, 44, 44);
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(153, 153, 153);
  padding-bottom: 5px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(44, 44, 44);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body sub {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: bottom;
}

body summary {
  color: rgb(220, 221, 222);
}

body sup {
  color: rgb(220, 221, 222);
  font-size: 11px;
  vertical-align: top;
}`,
  },
  light: {
    base: `:root:root {
  --accent-mild: #e6b64f;
  --accent-strong: #ec0d0d;
  --background-modifier-border: #f7f7f7;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85);
  --background-primary: #fff;
  --background-primary-alt: #dedede;
  --background-secondary: #dedede;
  --background-secondary-alt: #dedede;
  --bases-cards-background: #fff;
  --bases-cards-cover-background: #dedede;
  --bases-cards-shadow: 0 0 0 1px #f7f7f7;
  --bases-embed-border-color: #f7f7f7;
  --bases-group-heading-property-color: #555;
  --bases-table-border-color: #f7f7f7;
  --bases-table-cell-background-active: #fff;
  --bases-table-cell-background-disabled: #dedede;
  --bases-table-cell-shadow-focus: 0 0 0 2px #df4a16;
  --bases-table-group-background: #dedede;
  --bases-table-header-background: #fff;
  --bases-table-header-color: #555;
  --bases-table-summary-background: #fff;
  --blockquote-border-color: #df4a16;
  --blur-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --bw: #03050b;
  --canvas-background: #fff;
  --caret-color: #03050b;
  --checkbox-border-color-hover: #555;
  --checkbox-color: #df4a16;
  --checkbox-color-hover: #df7a16;
  --checkbox-marker-color: #fff;
  --checklist-done-color: #555;
  --code-background: #dedede;
  --code-border-color: #f7f7f7;
  --code-normal: #03050b;
  --code-punctuation: #555;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: #df4a16;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #f7f7f7;
  --divider-color-hover: #df4a16;
  --embed-block-shadow-hover: 0 0 0 1px #f7f7f7, inset 0 0 0 1px #f7f7f7;
  --embed-border-start: 2px solid #df4a16;
  --file-header-background: #fff;
  --file-header-background-focused: #fff;
  --flair-color: #03050b;
  --font-monospace: "Fira Code", "Source Code Pro", monospace;
  --footnote-divider-color: #f7f7f7;
  --footnote-id-color: #555;
  --graph-node: #555;
  --graph-node-focused: #df4a16;
  --graph-text: #03050b;
  --gray: var(--text-muted);
  --highlight: var(--text-highlight-bg);
  --hr-color: #f7f7f7;
  --icon-color: #555;
  --icon-color-active: #df4a16;
  --icon-color-focused: #03050b;
  --icon-color-hover: #555;
  --interactive-accent: #df4a16;
  --interactive-accent-hover: #df7a16;
  --interactive-accent-rgb: #df7a16;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --lines-identation: #dad8d8;
  --link-color: #df4a16;
  --link-color-hover: #df7a16;
  --link-external-color: #df4a16;
  --link-external-color-hover: #df7a16;
  --link-unresolved-color: #df4a16;
  --list-marker-color-collapsed: #df4a16;
  --list-marker-color-hover: #555;
  --menu-background: #dedede;
  --mermaid-font-family: "Comic Sans MS", "Comic Sans", cursive;
  --metadata-border-color: #f7f7f7;
  --metadata-divider-color: #f7f7f7;
  --metadata-input-text-color: #03050b;
  --metadata-label-text-color: #555;
  --metadata-label-text-color-hover: #555;
  --modal-background: #fff;
  --nav-heading-color: #03050b;
  --nav-heading-color-collapsed-hover: #555;
  --nav-heading-color-hover: #03050b;
  --nav-item-color: #555;
  --nav-item-color-active: #03050b;
  --nav-item-color-highlighted: #df4a16;
  --nav-item-color-hover: #03050b;
  --nav-item-color-selected: #03050b;
  --nav-tag-color-active: #555;
  --nav-tag-color-hover: #555;
  --pdf-background: #fff;
  --pdf-page-background: #fff;
  --pdf-sidebar-background: #fff;
  --pill-border-color: #f7f7f7;
  --pill-color: #555;
  --pill-color-hover: #03050b;
  --pill-color-remove-hover: #df4a16;
  --prompt-background: #fff;
  --raised-background: color-mix(in srgb, #fff 65%, transparent) linear-gradient(#fff, color-mix(in srgb, #fff 65%, transparent));
  --ribbon-background: #dedede;
  --ribbon-background-collapsed: #fff;
  --search-clear-button-color: #555;
  --search-icon-color: #555;
  --search-result-background: #fff;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #03050b;
  --setting-items-background: #dedede;
  --setting-items-border-color: #f7f7f7;
  --slider-track-background: #f7f7f7;
  --status-bar-background: #dedede;
  --status-bar-border-color: #f7f7f7;
  --status-bar-text-color: #555;
  --suggestion-background: #fff;
  --tab-background-active: #fff;
  --tab-container-background: #dedede;
  --tab-outline-color: #f7f7f7;
  --tab-switcher-background: #dedede;
  --tab-switcher-menubar-background: linear-gradient(to top, #dedede, transparent);
  --tab-text-color-active: #555;
  --tab-text-color-focused: #555;
  --tab-text-color-focused-active: #555;
  --tab-text-color-focused-active-current: #03050b;
  --tab-text-color-focused-highlighted: #df4a16;
  --table-add-button-border-color: #f7f7f7;
  --table-border-color: #f7f7f7;
  --table-drag-handle-background-active: #df4a16;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #f7f7f7;
  --table-header-color: #03050b;
  --table-selection-border-color: #df4a16;
  --tag-color: #df4a16;
  --tag-color-hover: #df4a16;
  --tertiary: var(--text-accent-hover);
  --text-accent: #df4a16;
  --text-accent-hover: #df7a16;
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-highlight-bg: #df4a16;
  --text-matched: #dcddde;
  --text-muted: #555;
  --text-normal: #03050b;
  --text-on-accent: #dcddde;
  --text-selection: rgba(223, 74, 22, 0.8);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #dedede;
  --titlebar-background-focused: #dedede;
  --titlebar-border-color: #f7f7f7;
  --titlebar-text-color: #555;
  --titlebar-text-color-focused: #03050b;
  --tooltip-bg: rgba(223, 74, 22, 0.9);
  --vault-profile-color: #03050b;
  --vault-profile-color-hover: #03050b;
  --workspace-leaf-resize: #c1c1c1;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(222, 222, 222);
  color: rgb(3, 5, 11);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(3, 5, 11);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(222, 222, 222);
  color: rgb(3, 5, 11);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(247, 247, 247);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(222, 222, 222);
  border-left-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

body div#quartz-root {
  color: rgb(3, 5, 11);
}`,
    typography: `body .page article p > b, b {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .page article p > em, em {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .page article p > i, i {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .page article p > strong, strong {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .text-highlight {
  background-color: rgb(223, 74, 22);
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body del {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: line-through rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body p {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  outline: rgb(85, 85, 85) none 0px;
  text-decoration: rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}`,
    links: `body a.external, footer a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
  text-decoration: underline rgb(223, 74, 22);
  text-decoration-color: rgb(223, 74, 22);
}

body a.internal.broken {
  color: rgb(223, 74, 22);
  outline: rgb(223, 74, 22) none 0px;
}`,
    lists: `body dd {
  color: rgb(3, 5, 11);
}

body dt {
  color: rgb(3, 5, 11);
}

body ol > li {
  color: rgb(3, 5, 11);
}

body ol.overflow {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body ul > li {
  color: rgb(3, 5, 11);
}

body ul.overflow {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(222, 222, 222);
  padding-bottom: 10px;
  padding-top: 14px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body table {
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(171, 171, 171);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(171, 171, 171);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(171, 171, 171);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(3, 5, 11);
}

body tbody tr:nth-child(even) {
  background-color: rgba(0, 0, 0, 0.05);
}

body td {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(3, 5, 11);
}

body th {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
}

body thead {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

body tr {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}`,
    code: `body code {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(184, 43, 78);
  border-left-color: rgb(184, 43, 78);
  border-right-color: rgb(184, 43, 78);
  border-top-color: rgb(184, 43, 78);
  color: rgb(184, 43, 78);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(184, 43, 78);
}

body pre > code, pre:has(> code) {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}

body pre:has(> code) {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
}`,
    images: `body audio {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body figcaption {
  color: rgb(3, 5, 11);
}

body figure {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body img {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body video {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    embeds: `body .file-embed {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body .footnotes {
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

body .transclude {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body .transclude-inner {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(223, 74, 22);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(85, 85, 85);
  text-decoration: line-through rgb(85, 85, 85);
  text-decoration-color: rgb(85, 85, 85);
}

body input[type=checkbox] {
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='*'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='-'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='/'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='>'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='?'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='I'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='S'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='b'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='c'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='d'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='f'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='i'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='k'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='l'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='p'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='u'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body li.task-list-item[data-task='w'] {
  color: rgb(3, 5, 11);
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(3, 5, 11);
  font-family: Roboto, sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(3, 5, 11);
  outline: rgb(3, 5, 11) none 0px;
  text-decoration: rgb(3, 5, 11);
  text-decoration-color: rgb(3, 5, 11);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(223, 74, 22);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(223, 74, 22);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link::before {
  color: rgb(223, 74, 22);
}

body h1 {
  color: rgb(3, 5, 11);
}

body h2 {
  color: rgb(3, 5, 11);
}

body h2.page-title, h2.page-title a {
  color: rgb(3, 5, 11);
}

body h3 {
  color: rgb(3, 5, 11);
}

body h4 {
  color: rgb(3, 5, 11);
}

body h5 {
  color: rgb(3, 5, 11);
}

body h6 {
  color: rgb(3, 5, 11);
}

body hr {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
  text-decoration: rgb(85, 85, 85);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}`,
    footer: `body footer {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  border-top-width: 0px;
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

body footer ul li a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(3, 5, 11);
  font-family: Roboto, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body li.section-li > .section .meta {
  color: rgb(85, 85, 85);
  font-family: Roboto, sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(85, 85, 85);
  text-decoration: rgb(85, 85, 85);
}

body ul.section-ul {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

body .darkmode svg {
  color: rgb(85, 85, 85);
  stroke: rgb(85, 85, 85);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
}

body .metadata {
  border-bottom-color: rgb(247, 247, 247);
  border-left-color: rgb(247, 247, 247);
  border-right-color: rgb(247, 247, 247);
  border-top-color: rgb(247, 247, 247);
  color: rgb(85, 85, 85);
}

body .metadata-properties {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  color: rgb(85, 85, 85);
}

body .navigation-progress {
  background-color: rgb(222, 222, 222);
}

body .page-header h2.page-title {
  color: rgb(3, 5, 11);
}

body abbr {
  color: rgb(3, 5, 11);
  text-decoration: underline dotted rgb(3, 5, 11);
}

body details {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body input[type=text] {
  border-bottom-color: rgb(85, 85, 85);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(85, 85, 85);
  padding-bottom: 5px;
  padding-top: 5px;
}

body kbd {
  background-color: rgb(222, 222, 222);
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
  color: rgb(3, 5, 11);
  font-family: "Fira Code", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(3, 5, 11);
  border-left-color: rgb(3, 5, 11);
  border-right-color: rgb(3, 5, 11);
  border-top-color: rgb(3, 5, 11);
}

body sub {
  color: rgb(3, 5, 11);
  font-size: 11px;
  vertical-align: bottom;
}

body summary {
  color: rgb(3, 5, 11);
}

body sup {
  color: rgb(3, 5, 11);
  font-size: 11px;
  vertical-align: top;
}`,
  },
};
