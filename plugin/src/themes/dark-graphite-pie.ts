import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dark-graphite-pie",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-mild: #3e93d8;
  --accent-strong: #3e93d8;
  --background-inline-code: #252626;
  --background-modifier-border: #303030;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85);
  --background-nav: rgb(41, 44, 46);
  --background-nav-alt: rgb(58, 62, 63);
  --background-nav-file-tag: rgb(116, 190, 247);
  --background-nav-selected: #3e93d8;
  --background-primary: #212121;
  --background-primary-alt: #171717;
  --background-secondary: #212121;
  --background-secondary-alt: #000000;
  --bases-cards-background: #212121;
  --bases-cards-cover-background: #171717;
  --bases-cards-shadow: 0 0 0 1px #303030;
  --bases-embed-border-color: #303030;
  --bases-group-heading-property-color: #999;
  --bases-table-border-color: #303030;
  --bases-table-cell-background-active: #212121;
  --bases-table-cell-background-disabled: #171717;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(32, 171, 233);
  --bases-table-group-background: #171717;
  --bases-table-header-background: #212121;
  --bases-table-header-color: #999;
  --bases-table-summary-background: #212121;
  --blockquote-border-color: rgb(32, 171, 233);
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --bodyFont: var(--font-interface);
  --bw: #ffffff;
  --canvas-background: #212121;
  --canvas-card-label-color: #666;
  --caret-color: #dcddde;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #999;
  --checkbox-color: rgb(32, 171, 233);
  --checkbox-color-hover: #1da3d6;
  --checkbox-marker-color: #212121;
  --checklist-done-color: #999;
  --checklist-done-decoration: none;
  --code-background: #252626;
  --code-border-color: #303030;
  --code-comment: #666;
  --code-normal: #dddddd;
  --code-punctuation: #999;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #666;
  --collapse-icon-color-collapsed: #3e93d8;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: Source Code Pro, Fira Code, monospace;
  --divider-color: #303030;
  --divider-color-hover: rgb(32, 171, 233);
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #303030, inset 0 0 0 1px #303030;
  --embed-border-start: 2px solid rgb(32, 171, 233);
  --file-header-background: #212121;
  --file-header-background-focused: #212121;
  --file-header-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #2a2a2a;
  --flair-color: #dcddde;
  --font-interface: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: Source Code Pro, Fira Code, monospace;
  --footnote-divider-color: #303030;
  --footnote-id-color: #999;
  --footnote-id-color-no-occurrences: #666;
  --graph-attach: #d669bc;
  --graph-bg: rgb(22, 22, 22);
  --graph-circle: #fcf601;
  --graph-line: #26798c;
  --graph-node: #999;
  --graph-node-focused: #3e93d8;
  --graph-node-unresolved: #666;
  --graph-text: #cccccc;
  --graph-unresolved: #9e8aff;
  --graphtag: #5dbcd2;
  --gray: var(--text-muted);
  --headerFont: var(--font-interface);
  --heading-formatting: #666;
  --highlight: var(--text-highlight-bg);
  --hr-color: #303030;
  --icon-color: #999;
  --icon-color-active: #3e93d8;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #999;
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-accent: rgb(32, 171, 233);
  --interactive-accent-hover: #1da3d6;
  --interactive-accent-rgb: 32, 171, 233;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #3e93d8;
  --link-color-hover: #2b60af;
  --link-external-color: #3e93d8;
  --link-external-color-hover: #2b60af;
  --link-unresolved-color: #3e93d8;
  --list-marker-color: #666;
  --list-marker-color-collapsed: #3e93d8;
  --list-marker-color-hover: #999;
  --menu-background: #212121;
  --metadata-border-color: #303030;
  --metadata-divider-color: #303030;
  --metadata-input-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #dcddde;
  --metadata-label-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #999;
  --metadata-label-text-color-hover: #999;
  --modal-background: #212121;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: #666;
  --nav-heading-color-collapsed-hover: #999;
  --nav-heading-color-hover: #dcddde;
  --nav-item-color: #999;
  --nav-item-color-active: #dcddde;
  --nav-item-color-highlighted: #3e93d8;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: #666;
  --nav-tag-color-active: #999;
  --nav-tag-color-hover: #999;
  --pdf-background: #212121;
  --pdf-page-background: #212121;
  --pdf-shadow: 0 0 0 1px #303030;
  --pdf-sidebar-background: #212121;
  --pdf-thumbnail-shadow: 0 0 0 1px #303030;
  --pill-border-color: #303030;
  --pill-color: #999;
  --pill-color-hover: #dcddde;
  --pill-color-remove: #666;
  --pill-color-remove-hover: #3e93d8;
  --prompt-background: #212121;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: #212121;
  --ribbon-background-collapsed: #212121;
  --scrollbar-bg: rgba(255, 255, 255, 0);
  --scrollbar-thumb-bg: rgba(81, 144, 175, 0.36);
  --search-clear-button-color: #999;
  --search-icon-color: #999;
  --search-result-background: #212121;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #171717;
  --setting-items-border-color: #303030;
  --slider-track-background: #303030;
  --status-bar-background: #212121;
  --status-bar-border-color: #303030;
  --status-bar-text-color: #999;
  --suggestion-background: #212121;
  --tab-background-active: #212121;
  --tab-container-background: #212121;
  --tab-outline-color: #303030;
  --tab-switcher-background: #212121;
  --tab-switcher-menubar-background: linear-gradient(to top, #212121, transparent);
  --tab-text-color: #666;
  --tab-text-color-active: #999;
  --tab-text-color-focused: #999;
  --tab-text-color-focused-active: #999;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #3e93d8;
  --table-add-button-border-color: #303030;
  --table-border-color: #303030;
  --table-drag-handle-background-active: rgb(32, 171, 233);
  --table-drag-handle-color: #666;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #303030;
  --table-header-color: #dcddde;
  --table-selection-border-color: rgb(32, 171, 233);
  --tag-color: #3e93d8;
  --tag-color-hover: #3e93d8;
  --tertiary: var(--text-accent-hover);
  --text-accent: #3e93d8;
  --text-accent-hover: #2b60af;
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: #666;
  --text-highlight-bg: rgba(26, 73, 100, 0.66);
  --text-inline-code: #dddddd;
  --text-matched: #0cf32b;
  --text-muted: #999;
  --text-nav: rgb(190, 190, 190);
  --text-nav-selected: rgb(255, 255, 255);
  --text-normal: #dcddde;
  --text-normal-original: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(6, 66, 113, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: #212121;
  --titlebar-background-focused: #000000;
  --titlebar-border-color: #303030;
  --titlebar-text-color: #999;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 33, 33);
  border-left-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(33, 33, 33);
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
  background-color: rgba(26, 73, 100, 0.66);
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
  font-family: "Source Code Pro", "Fira Code", monospace;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `body a.external, footer a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: underline rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: underline rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
}

body a.internal.broken {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
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
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(33, 33, 33);
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
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body th {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}`,
    code: `body code {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

body pre > code, pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

body pre:has(> code) {
  background-color: rgb(37, 38, 38);
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
  background-color: rgb(23, 23, 23);
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
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='!'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='*'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='-'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='/'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='>'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='?'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='I'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='S'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='b'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='c'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='d'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='f'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='i'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='k'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='l'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='p'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='u'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='w'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
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
  background-color: rgb(62, 147, 216);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(62, 147, 216);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(62, 147, 216);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(62, 147, 216);
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
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(153, 153, 153);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(62, 147, 216);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `body footer {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-width: 0px;
  color: rgb(62, 147, 216);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body footer ul li a {
  color: rgb(62, 147, 216);
  text-decoration: rgb(62, 147, 216);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: "Source Code Pro", "Fira Code", monospace;
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
  font-family: "Source Code Pro", "Fira Code", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
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
}

body .breadcrumb-element p {
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: rgb(41, 44, 46);
}

body .page-header h2.page-title {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
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
  light: {
    base: `:root:root {
  --accent-mild: #e0a330;
  --accent-strong: #ff3333;
  --background-accent: #fff;
  --background-inline-code: #252626;
  --background-modifier-border: #ddd;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #ff9494;
  --background-modifier-error-rgb: rgb(230, 135, 135);
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-success: #a4e7c3;
  --background-nav: rgb(41, 44, 46);
  --background-nav-alt: rgb(58, 62, 63);
  --background-nav-file-tag: rgb(203, 77, 73);
  --background-nav-selected: rgb(203, 77, 73);
  --background-primary-alt: #f0f2f5;
  --background-secondary: rgb(57, 63, 63);
  --background-secondary-alt: rgb(203, 77, 73);
  --bases-cards-cover-background: #f0f2f5;
  --bases-cards-shadow: 0 0 0 1px #ddd;
  --bases-embed-border-color: #ddd;
  --bases-group-heading-property-color: rgb(143, 147, 143);
  --bases-table-border-color: #ddd;
  --bases-table-cell-background-disabled: #f0f2f5;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(203, 77, 73);
  --bases-table-group-background: #f0f2f5;
  --bases-table-header-color: rgb(143, 147, 143);
  --blockquote-border-color: rgb(203, 77, 73);
  --bodyFont: var(--font-interface);
  --bw: #000000;
  --canvas-card-label-color: #999999;
  --caret-color: rgb(203, 77, 73);
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: rgb(143, 147, 143);
  --checkbox-color: rgb(203, 77, 73);
  --checkbox-color-hover: #1da3d6;
  --checklist-done-color: rgb(143, 147, 143);
  --checklist-done-decoration: none;
  --code-background: #252626;
  --code-border-color: #ddd;
  --code-comment: #999999;
  --code-normal: #dddddd;
  --code-punctuation: rgb(143, 147, 143);
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: rgb(203, 77, 73);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --default-font: Source Code Pro, Fira Code, monospace;
  --divider-color: #ddd;
  --divider-color-hover: rgb(203, 77, 73);
  --dropdown-background: #f2f3f5;
  --dropdown-background-hover: #e9e9e9;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd;
  --embed-border-start: 2px solid rgb(203, 77, 73);
  --file-header-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #f2f3f5;
  --flair-color: rgb(203, 77, 73);
  --font-interface: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: Source Code Pro, Fira Code, monospace;
  --footnote-divider-color: #ddd;
  --footnote-id-color: rgb(143, 147, 143);
  --footnote-id-color-no-occurrences: #999999;
  --graph-attach: #83D4F4;
  --graph-bg: rgb(255, 255, 255);
  --graph-circle: #ec0c0c;
  --graph-line: #cccccc;
  --graph-node: rgb(143, 147, 143);
  --graph-node-focused: rgb(203, 77, 73);
  --graph-node-unresolved: #999999;
  --graph-text: #969696;
  --graph-unresolved: rgb(143, 147, 143);
  --graphtag: #b9ec41;
  --gray: var(--text-muted);
  --headerFont: var(--font-interface);
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg);
  --hr-color: #ddd;
  --icon-color: rgb(143, 147, 143);
  --icon-color-active: rgb(203, 77, 73);
  --icon-color-focused: rgb(203, 77, 73);
  --icon-color-hover: rgb(143, 147, 143);
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: rgb(203, 77, 73);
  --interactive-accent-hover: #1da3d6;
  --interactive-accent-rgb: 34, 182, 226;
  --interactive-hover: #e9e9e9;
  --interactive-normal: #f2f3f5;
  --light: var(--background-primary-alt);
  --lightgray: var(--background-secondary);
  --link-color: rgb(203, 77, 73);
  --link-color-hover: rgb(203, 77, 73);
  --link-external-color: rgb(203, 77, 73);
  --link-external-color-hover: rgb(203, 77, 73);
  --link-unresolved-color: rgb(203, 77, 73);
  --list-marker-color: #999999;
  --list-marker-color-collapsed: rgb(203, 77, 73);
  --list-marker-color-hover: rgb(143, 147, 143);
  --menu-background: rgb(57, 63, 63);
  --metadata-border-color: #ddd;
  --metadata-divider-color: #ddd;
  --metadata-input-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(203, 77, 73);
  --metadata-label-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(143, 147, 143);
  --metadata-label-text-color-hover: rgb(143, 147, 143);
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: rgb(203, 77, 73);
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: rgb(143, 147, 143);
  --nav-heading-color-hover: rgb(203, 77, 73);
  --nav-item-color: rgb(143, 147, 143);
  --nav-item-color-active: rgb(203, 77, 73);
  --nav-item-color-highlighted: rgb(203, 77, 73);
  --nav-item-color-hover: rgb(203, 77, 73);
  --nav-item-color-selected: rgb(203, 77, 73);
  --nav-tag-color: #999999;
  --nav-tag-color-active: rgb(143, 147, 143);
  --nav-tag-color-hover: rgb(143, 147, 143);
  --pill-border-color: #ddd;
  --pill-color: rgb(143, 147, 143);
  --pill-color-hover: rgb(203, 77, 73);
  --pill-color-remove: #999999;
  --pill-color-remove-hover: rgb(203, 77, 73);
  --ribbon-background: rgb(57, 63, 63);
  --scrollbar-active-thumb-bg: rgb(97, 170, 221);
  --scrollbar-bg: rgba(0, 0, 0, 0);
  --scrollbar-thumb-bg: rgb(0, 0, 0);
  --search-clear-button-color: rgb(143, 147, 143);
  --search-icon-color: rgb(143, 147, 143);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(203, 77, 73);
  --setting-items-background: #f0f2f5;
  --setting-items-border-color: #ddd;
  --slider-track-background: #ddd;
  --status-bar-background: rgb(57, 63, 63);
  --status-bar-border-color: #ddd;
  --status-bar-text-color: rgb(143, 147, 143);
  --tab-container-background: rgb(57, 63, 63);
  --tab-outline-color: #ddd;
  --tab-switcher-background: rgb(57, 63, 63);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(57, 63, 63), transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: rgb(143, 147, 143);
  --tab-text-color-focused: rgb(143, 147, 143);
  --tab-text-color-focused-active: rgb(143, 147, 143);
  --tab-text-color-focused-active-current: rgb(203, 77, 73);
  --tab-text-color-focused-highlighted: rgb(203, 77, 73);
  --table-add-button-border-color: #ddd;
  --table-border-color: #ddd;
  --table-drag-handle-background-active: rgb(203, 77, 73);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #ddd;
  --table-header-color: rgb(203, 77, 73);
  --table-selection-border-color: rgb(203, 77, 73);
  --tag-color: rgb(203, 77, 73);
  --tag-color-hover: rgb(203, 77, 73);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(203, 77, 73);
  --text-accent-hover: rgb(203, 77, 73);
  --text-error: #ce2222;
  --text-error-hover: #cb2c22;
  --text-faint: #999999;
  --text-highlight-bg: rgba(240, 255, 82, 0.76);
  --text-inline-code: #dddddd;
  --text-matched: #000000;
  --text-muted: rgb(143, 147, 143);
  --text-nav: rgb(190, 190, 190);
  --text-nav-selected: rgb(255, 255, 255);
  --text-normal: rgb(203, 77, 73);
  --text-normal-original: #2e3338;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(134, 202, 255, 0.99);
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-interface);
  --titlebar-background: rgb(57, 63, 63);
  --titlebar-background-focused: rgb(203, 77, 73);
  --titlebar-border-color: #ddd;
  --titlebar-text-color: rgb(143, 147, 143);
  --titlebar-text-color-focused: rgb(203, 77, 73);
  --vault-profile-color: rgb(203, 77, 73);
  --vault-profile-color-hover: rgb(203, 77, 73);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(57, 63, 63);
  color: rgb(46, 51, 56);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(57, 63, 63);
  color: rgb(46, 51, 56);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(57, 63, 63);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `body .page article p > b, b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > em, em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > i, i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .page article p > strong, strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body .text-highlight {
  background-color: rgba(240, 255, 82, 0.76);
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration: rgb(203, 77, 73);
  text-decoration-color: rgb(203, 77, 73);
}

body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: line-through rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

body p {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  outline: rgb(143, 147, 143) none 0px;
  text-decoration: rgb(143, 147, 143);
  text-decoration-color: rgb(143, 147, 143);
}`,
    links: `body a.external, footer a {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration: underline rgb(203, 77, 73);
  text-decoration-color: rgb(203, 77, 73);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration: underline rgb(203, 77, 73);
  text-decoration-color: rgb(203, 77, 73);
}

body a.internal.broken {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
}`,
    lists: `body dd {
  color: rgb(46, 51, 56);
}

body dt {
  color: rgb(46, 51, 56);
}

body ol > li {
  color: rgb(46, 51, 56);
}

body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body ul > li {
  color: rgb(46, 51, 56);
}

body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body table {
  color: rgb(46, 51, 56);
}

body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(203, 77, 73);
}`,
    code: `body code {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

body pre > code, pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

body pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body figcaption {
  color: rgb(46, 51, 56);
}

body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
}

body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(203, 77, 73);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(203, 77, 73);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body li.task-list-item[data-task='!'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='*'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='-'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='/'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='>'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='?'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='I'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='S'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='b'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='c'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='d'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='f'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='i'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='k'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='l'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='p'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='u'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

body li.task-list-item[data-task='w'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
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
  background-color: rgb(203, 77, 73);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(57, 63, 63);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(203, 77, 73);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(203, 77, 73);
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(203, 77, 73);
}

body h1 {
  color: rgb(46, 51, 56);
}

body h2 {
  color: rgb(46, 51, 56);
}

body h2.page-title, h2.page-title a {
  color: rgb(46, 51, 56);
}

body h3 {
  color: rgb(46, 51, 56);
}

body h4 {
  color: rgb(46, 51, 56);
}

body h5 {
  color: rgb(46, 51, 56);
}

body h6 {
  color: rgb(46, 51, 56);
}

body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(143, 147, 143);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(143, 147, 143);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(143, 147, 143);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(203, 77, 73);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}`,
    footer: `body footer {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: rgb(203, 77, 73);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body footer ul li a {
  color: rgb(203, 77, 73);
  text-decoration: rgb(203, 77, 73);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(143, 147, 143);
  text-decoration: rgb(143, 147, 143);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body li.section-li > .section .meta {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(143, 147, 143);
  text-decoration: rgb(143, 147, 143);
}

body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}

body .darkmode svg {
  color: rgb(143, 147, 143);
  stroke: rgb(143, 147, 143);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(143, 147, 143);
}

body .metadata-properties {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}

body .navigation-progress {
  background-color: rgb(41, 44, 46);
}

body .page-header h2.page-title {
  color: rgb(203, 77, 73);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(46, 51, 56);
  text-decoration: underline dotted rgb(46, 51, 56);
}

body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body input[type=text] {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

body sub {
  color: rgb(46, 51, 56);
}

body summary {
  color: rgb(46, 51, 56);
}

body sup {
  color: rgb(46, 51, 56);
}`,
  },
};
