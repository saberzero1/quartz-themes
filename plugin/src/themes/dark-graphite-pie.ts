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
  --accent-mild: #3e93d8 !important;
  --accent-strong: #3e93d8 !important;
  --background-inline-code: #252626 !important;
  --background-modifier-border: #303030 !important;
  --background-modifier-box-shadow: rgba(0, 0, 0, 0.85) !important;
  --background-nav: rgb(41, 44, 46) !important;
  --background-nav-alt: rgb(58, 62, 63) !important;
  --background-nav-file-tag: rgb(116, 190, 247) !important;
  --background-nav-selected: #3e93d8 !important;
  --background-primary: #212121 !important;
  --background-primary-alt: #171717 !important;
  --background-secondary: #212121 !important;
  --background-secondary-alt: #000000 !important;
  --bases-cards-background: #212121 !important;
  --bases-cards-cover-background: #171717 !important;
  --bases-cards-shadow: 0 0 0 1px #303030 !important;
  --bases-embed-border-color: #303030 !important;
  --bases-group-heading-property-color: #999 !important;
  --bases-table-border-color: #303030 !important;
  --bases-table-cell-background-active: #212121 !important;
  --bases-table-cell-background-disabled: #171717 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(32, 171, 233) !important;
  --bases-table-group-background: #171717 !important;
  --bases-table-header-background: #212121 !important;
  --bases-table-header-color: #999 !important;
  --bases-table-summary-background: #212121 !important;
  --blockquote-border-color: rgb(32, 171, 233) !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --bodyFont: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bw: #ffffff !important;
  --canvas-background: #212121 !important;
  --canvas-card-label-color: #666 !important;
  --caret-color: #dcddde !important;
  --checkbox-border-color: #666 !important;
  --checkbox-border-color-hover: #999 !important;
  --checkbox-color: rgb(32, 171, 233) !important;
  --checkbox-color-hover: #1da3d6 !important;
  --checkbox-marker-color: #212121 !important;
  --checklist-done-color: #999 !important;
  --checklist-done-decoration: none !important;
  --code-background: #252626 !important;
  --code-border-color: #303030 !important;
  --code-comment: #666 !important;
  --code-normal: #dddddd !important;
  --code-punctuation: #999 !important;
  --codeFont: Source Code Pro, Fira Code, monospace !important;
  --collapse-icon-color: #666 !important;
  --collapse-icon-color-collapsed: #3e93d8 !important;
  --dark: #dcddde !important;
  --darkgray: #dcddde !important;
  --default-font: Source Code Pro, Fira Code, monospace !important;
  --divider-color: #303030 !important;
  --divider-color-hover: rgb(32, 171, 233) !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #303030, inset 0 0 0 1px #303030 !important;
  --embed-border-start: 2px solid rgb(32, 171, 233) !important;
  --file-header-background: #212121 !important;
  --file-header-background-focused: #212121 !important;
  --file-header-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #dcddde !important;
  --font-interface: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Source Code Pro, Fira Code, monospace !important;
  --footnote-divider-color: #303030 !important;
  --footnote-id-color: #999 !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --graph-attach: #d669bc !important;
  --graph-bg: rgb(22, 22, 22) !important;
  --graph-circle: #fcf601 !important;
  --graph-line: #26798c !important;
  --graph-node: #999 !important;
  --graph-node-focused: #3e93d8 !important;
  --graph-node-unresolved: #666 !important;
  --graph-text: #cccccc !important;
  --graph-unresolved: #9e8aff !important;
  --graphtag: #5dbcd2 !important;
  --gray: #999 !important;
  --headerFont: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #666 !important;
  --highlight: rgba(26, 73, 100, 0.66) !important;
  --hr-color: #303030 !important;
  --icon-color: #999 !important;
  --icon-color-active: #3e93d8 !important;
  --icon-color-focused: #dcddde !important;
  --icon-color-hover: #999 !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-accent: rgb(32, 171, 233) !important;
  --interactive-accent-hover: #1da3d6 !important;
  --interactive-accent-rgb: 32, 171, 233 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --light: #212121 !important;
  --lightgray: #212121 !important;
  --link-color: #3e93d8 !important;
  --link-color-hover: #2b60af !important;
  --link-external-color: #3e93d8 !important;
  --link-external-color-hover: #2b60af !important;
  --link-unresolved-color: #3e93d8 !important;
  --list-marker-color: #666 !important;
  --list-marker-color-collapsed: #3e93d8 !important;
  --list-marker-color-hover: #999 !important;
  --menu-background: #212121 !important;
  --metadata-border-color: #303030 !important;
  --metadata-divider-color: #303030 !important;
  --metadata-input-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #999 !important;
  --metadata-label-text-color-hover: #999 !important;
  --modal-background: #212121 !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color: #dcddde !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-collapsed-hover: #999 !important;
  --nav-heading-color-hover: #dcddde !important;
  --nav-item-color: #999 !important;
  --nav-item-color-active: #dcddde !important;
  --nav-item-color-highlighted: #3e93d8 !important;
  --nav-item-color-hover: #dcddde !important;
  --nav-item-color-selected: #dcddde !important;
  --nav-tag-color: #666 !important;
  --nav-tag-color-active: #999 !important;
  --nav-tag-color-hover: #999 !important;
  --pdf-background: #212121 !important;
  --pdf-page-background: #212121 !important;
  --pdf-shadow: 0 0 0 1px #303030 !important;
  --pdf-sidebar-background: #212121 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #303030 !important;
  --pill-border-color: #303030 !important;
  --pill-color: #999 !important;
  --pill-color-hover: #dcddde !important;
  --pill-color-remove: #666 !important;
  --pill-color-remove-hover: #3e93d8 !important;
  --prompt-background: #212121 !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #212121 !important;
  --ribbon-background-collapsed: #212121 !important;
  --scrollbar-bg: rgba(255, 255, 255, 0) !important;
  --scrollbar-thumb-bg: rgba(81, 144, 175, 0.36) !important;
  --search-clear-button-color: #999 !important;
  --search-icon-color: #999 !important;
  --search-result-background: #212121 !important;
  --secondary: #3e93d8 !important;
  --setting-group-heading-color: #dcddde !important;
  --setting-items-background: #171717 !important;
  --setting-items-border-color: #303030 !important;
  --slider-track-background: #303030 !important;
  --status-bar-background: #212121 !important;
  --status-bar-border-color: #303030 !important;
  --status-bar-text-color: #999 !important;
  --suggestion-background: #212121 !important;
  --tab-background-active: #212121 !important;
  --tab-container-background: #212121 !important;
  --tab-outline-color: #303030 !important;
  --tab-switcher-background: #212121 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #212121, transparent) !important;
  --tab-text-color: #666 !important;
  --tab-text-color-active: #999 !important;
  --tab-text-color-focused: #999 !important;
  --tab-text-color-focused-active: #999 !important;
  --tab-text-color-focused-active-current: #dcddde !important;
  --tab-text-color-focused-highlighted: #3e93d8 !important;
  --table-add-button-border-color: #303030 !important;
  --table-border-color: #303030 !important;
  --table-drag-handle-background-active: rgb(32, 171, 233) !important;
  --table-drag-handle-color: #666 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #303030 !important;
  --table-header-color: #dcddde !important;
  --table-selection-border-color: rgb(32, 171, 233) !important;
  --tag-color: #3e93d8 !important;
  --tag-color-hover: #3e93d8 !important;
  --tertiary: #2b60af !important;
  --text-accent: #3e93d8 !important;
  --text-accent-hover: #2b60af !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #666 !important;
  --text-highlight-bg: rgba(26, 73, 100, 0.66) !important;
  --text-inline-code: #dddddd !important;
  --text-matched: #0cf32b !important;
  --text-muted: #999 !important;
  --text-nav: rgb(190, 190, 190) !important;
  --text-nav-selected: rgb(255, 255, 255) !important;
  --text-normal: #dcddde !important;
  --text-normal-original: #dcddde !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(6, 66, 113, 0.99) !important;
  --textHighlight: rgba(26, 73, 100, 0.66) !important;
  --titleFont: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #212121 !important;
  --titlebar-background-focused: #000000 !important;
  --titlebar-border-color: #303030 !important;
  --titlebar-text-color: #999 !important;
  --titlebar-text-color-focused: #dcddde !important;
  --vault-profile-color: #dcddde !important;
  --vault-profile-color-hover: #dcddde !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(33, 33, 33);
  border-left-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(26, 73, 100, 0.66);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: line-through rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration: rgb(153, 153, 153);
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: underline rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration: underline rgb(62, 147, 216);
  text-decoration-color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(32, 171, 233);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(62, 147, 216);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(62, 147, 216);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(62, 147, 216);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body h1 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h3 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h4 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h5 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h6 {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(33, 33, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(33, 33, 33);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(62, 147, 216);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  border-top-width: 0px;
  color: rgb(62, 147, 216);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(62, 147, 216);
  text-decoration: rgb(62, 147, 216);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(220, 221, 222);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(153, 153, 153);
  stroke: rgb(153, 153, 153);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(48, 48, 48);
  border-left-color: rgb(48, 48, 48);
  border-right-color: rgb(48, 48, 48);
  border-top-color: rgb(48, 48, 48);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(41, 44, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(220, 221, 222);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(220, 221, 222);
  text-decoration: underline dotted rgb(220, 221, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(220, 221, 222);
}`,
  },
  light: {
    base: `:root:root {
  --accent-mild: #e0a330 !important;
  --accent-strong: #ff3333 !important;
  --background-accent: #fff !important;
  --background-inline-code: #252626 !important;
  --background-modifier-border: #ddd !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.8) !important;
  --background-modifier-error: #e68787 !important;
  --background-modifier-error-hover: #ff9494 !important;
  --background-modifier-error-rgb: rgb(230, 135, 135) !important;
  --background-modifier-form-field: #fff !important;
  --background-modifier-form-field-highlighted: #fff !important;
  --background-modifier-form-field-hover: #fff !important;
  --background-modifier-success: #a4e7c3 !important;
  --background-nav: rgb(41, 44, 46) !important;
  --background-nav-alt: rgb(58, 62, 63) !important;
  --background-nav-file-tag: rgb(203, 77, 73) !important;
  --background-nav-selected: rgb(203, 77, 73) !important;
  --background-primary-alt: #f0f2f5 !important;
  --background-secondary: rgb(57, 63, 63) !important;
  --background-secondary-alt: rgb(203, 77, 73) !important;
  --bases-cards-cover-background: #f0f2f5 !important;
  --bases-cards-shadow: 0 0 0 1px #ddd !important;
  --bases-embed-border-color: #ddd !important;
  --bases-group-heading-property-color: rgb(143, 147, 143) !important;
  --bases-table-border-color: #ddd !important;
  --bases-table-cell-background-disabled: #f0f2f5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(203, 77, 73) !important;
  --bases-table-group-background: #f0f2f5 !important;
  --bases-table-header-color: rgb(143, 147, 143) !important;
  --blockquote-border-color: rgb(203, 77, 73) !important;
  --bodyFont: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bw: #000000 !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: rgb(203, 77, 73) !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: rgb(143, 147, 143) !important;
  --checkbox-color: rgb(203, 77, 73) !important;
  --checkbox-color-hover: #1da3d6 !important;
  --checklist-done-color: rgb(143, 147, 143) !important;
  --checklist-done-decoration: none !important;
  --code-background: #252626 !important;
  --code-border-color: #ddd !important;
  --code-comment: #999999 !important;
  --code-normal: #dddddd !important;
  --code-punctuation: rgb(143, 147, 143) !important;
  --codeFont: Source Code Pro, Fira Code, monospace !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: rgb(203, 77, 73) !important;
  --dark: rgb(203, 77, 73) !important;
  --darkgray: rgb(203, 77, 73) !important;
  --default-font: Source Code Pro, Fira Code, monospace !important;
  --divider-color: #ddd !important;
  --divider-color-hover: rgb(203, 77, 73) !important;
  --dropdown-background: #f2f3f5 !important;
  --dropdown-background-hover: #e9e9e9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #ddd, inset 0 0 0 1px #ddd !important;
  --embed-border-start: 2px solid rgb(203, 77, 73) !important;
  --file-header-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: rgb(203, 77, 73) !important;
  --font-interface: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Source Code Pro, Fira Code, monospace !important;
  --footnote-divider-color: #ddd !important;
  --footnote-id-color: rgb(143, 147, 143) !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-attach: #83D4F4 !important;
  --graph-bg: rgb(255, 255, 255) !important;
  --graph-circle: #ec0c0c !important;
  --graph-line: #cccccc !important;
  --graph-node: rgb(143, 147, 143) !important;
  --graph-node-focused: rgb(203, 77, 73) !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #969696 !important;
  --graph-unresolved: rgb(143, 147, 143) !important;
  --graphtag: #b9ec41 !important;
  --gray: rgb(143, 147, 143) !important;
  --headerFont: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #999999 !important;
  --highlight: rgba(240, 255, 82, 0.76) !important;
  --hr-color: #ddd !important;
  --icon-color: rgb(143, 147, 143) !important;
  --icon-color-active: rgb(203, 77, 73) !important;
  --icon-color-focused: rgb(203, 77, 73) !important;
  --icon-color-hover: rgb(143, 147, 143) !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: rgb(203, 77, 73) !important;
  --interactive-accent-hover: #1da3d6 !important;
  --interactive-accent-rgb: 34, 182, 226 !important;
  --interactive-hover: #e9e9e9 !important;
  --interactive-normal: #f2f3f5 !important;
  --light: #f0f2f5 !important;
  --lightgray: rgb(57, 63, 63) !important;
  --link-color: rgb(203, 77, 73) !important;
  --link-color-hover: rgb(203, 77, 73) !important;
  --link-external-color: rgb(203, 77, 73) !important;
  --link-external-color-hover: rgb(203, 77, 73) !important;
  --link-unresolved-color: rgb(203, 77, 73) !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: rgb(203, 77, 73) !important;
  --list-marker-color-hover: rgb(143, 147, 143) !important;
  --menu-background: rgb(57, 63, 63) !important;
  --metadata-border-color: #ddd !important;
  --metadata-divider-color: #ddd !important;
  --metadata-input-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(203, 77, 73) !important;
  --metadata-label-font: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(143, 147, 143) !important;
  --metadata-label-text-color-hover: rgb(143, 147, 143) !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: rgb(203, 77, 73) !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: rgb(143, 147, 143) !important;
  --nav-heading-color-hover: rgb(203, 77, 73) !important;
  --nav-item-color: rgb(143, 147, 143) !important;
  --nav-item-color-active: rgb(203, 77, 73) !important;
  --nav-item-color-highlighted: rgb(203, 77, 73) !important;
  --nav-item-color-hover: rgb(203, 77, 73) !important;
  --nav-item-color-selected: rgb(203, 77, 73) !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: rgb(143, 147, 143) !important;
  --nav-tag-color-hover: rgb(143, 147, 143) !important;
  --pill-border-color: #ddd !important;
  --pill-color: rgb(143, 147, 143) !important;
  --pill-color-hover: rgb(203, 77, 73) !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: rgb(203, 77, 73) !important;
  --ribbon-background: rgb(57, 63, 63) !important;
  --scrollbar-active-thumb-bg: rgb(97, 170, 221) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0) !important;
  --scrollbar-thumb-bg: rgb(0, 0, 0) !important;
  --search-clear-button-color: rgb(143, 147, 143) !important;
  --search-icon-color: rgb(143, 147, 143) !important;
  --secondary: rgb(203, 77, 73) !important;
  --setting-group-heading-color: rgb(203, 77, 73) !important;
  --setting-items-background: #f0f2f5 !important;
  --setting-items-border-color: #ddd !important;
  --slider-track-background: #ddd !important;
  --status-bar-background: rgb(57, 63, 63) !important;
  --status-bar-border-color: #ddd !important;
  --status-bar-text-color: rgb(143, 147, 143) !important;
  --tab-container-background: rgb(57, 63, 63) !important;
  --tab-outline-color: #ddd !important;
  --tab-switcher-background: rgb(57, 63, 63) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(57, 63, 63), transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: rgb(143, 147, 143) !important;
  --tab-text-color-focused: rgb(143, 147, 143) !important;
  --tab-text-color-focused-active: rgb(143, 147, 143) !important;
  --tab-text-color-focused-active-current: rgb(203, 77, 73) !important;
  --tab-text-color-focused-highlighted: rgb(203, 77, 73) !important;
  --table-add-button-border-color: #ddd !important;
  --table-border-color: #ddd !important;
  --table-drag-handle-background-active: rgb(203, 77, 73) !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #f2f2f2 !important;
  --table-header-border-color: #ddd !important;
  --table-header-color: rgb(203, 77, 73) !important;
  --table-selection-border-color: rgb(203, 77, 73) !important;
  --tag-color: rgb(203, 77, 73) !important;
  --tag-color-hover: rgb(203, 77, 73) !important;
  --tertiary: rgb(203, 77, 73) !important;
  --text-accent: rgb(203, 77, 73) !important;
  --text-accent-hover: rgb(203, 77, 73) !important;
  --text-error: #ce2222 !important;
  --text-error-hover: #cb2c22 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: rgba(240, 255, 82, 0.76) !important;
  --text-inline-code: #dddddd !important;
  --text-matched: #000000 !important;
  --text-muted: rgb(143, 147, 143) !important;
  --text-nav: rgb(190, 190, 190) !important;
  --text-nav-selected: rgb(255, 255, 255) !important;
  --text-normal: rgb(203, 77, 73) !important;
  --text-normal-original: #2e3338 !important;
  --text-on-accent: #f2f2f2 !important;
  --text-selection: rgba(134, 202, 255, 0.99) !important;
  --textHighlight: rgba(240, 255, 82, 0.76) !important;
  --titleFont: '??', '??', Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(57, 63, 63) !important;
  --titlebar-background-focused: rgb(203, 77, 73) !important;
  --titlebar-border-color: #ddd !important;
  --titlebar-text-color: rgb(143, 147, 143) !important;
  --titlebar-text-color-focused: rgb(203, 77, 73) !important;
  --vault-profile-color: rgb(203, 77, 73) !important;
  --vault-profile-color-hover: rgb(203, 77, 73) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(57, 63, 63);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(57, 63, 63);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(57, 63, 63);
  border-left-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(46, 51, 56);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(240, 255, 82, 0.76);
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration: rgb(203, 77, 73);
  text-decoration-color: rgb(203, 77, 73);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: line-through rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body p {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  outline: rgb(143, 147, 143) none 0px;
  text-decoration: rgb(143, 147, 143);
  text-decoration-color: rgb(143, 147, 143);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration: underline rgb(203, 77, 73);
  text-decoration-color: rgb(203, 77, 73);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration: underline rgb(203, 77, 73);
  text-decoration-color: rgb(203, 77, 73);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body table {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(203, 77, 73);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body pre > code, pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(240, 242, 245);
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(203, 77, 73);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(203, 77, 73);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(140, 140, 140);
  text-decoration: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(46, 51, 56);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration: rgb(46, 51, 56);
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(203, 77, 73);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(57, 63, 63);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(203, 77, 73);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(203, 77, 73);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(203, 77, 73);
}

html[saved-theme="light"] body h1 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(143, 147, 143);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(143, 147, 143);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  text-decoration: rgb(143, 147, 143);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(203, 77, 73);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(41, 44, 46);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  border-top-width: 0px;
  color: rgb(203, 77, 73);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(203, 77, 73);
  text-decoration: rgb(203, 77, 73);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 51, 56);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(143, 147, 143);
  text-decoration: rgb(143, 147, 143);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(143, 147, 143);
  text-decoration: rgb(143, 147, 143);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(143, 147, 143);
  stroke: rgb(143, 147, 143);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(153, 153, 153);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(143, 147, 143);
  border-left-color: rgb(143, 147, 143);
  border-right-color: rgb(143, 147, 143);
  border-top-color: rgb(143, 147, 143);
  color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(41, 44, 46);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(203, 77, 73);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 51, 56);
  text-decoration: underline dotted rgb(46, 51, 56);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
  color: rgb(46, 51, 56);
  font-family: "??", "??", "Source Code Pro", "Fira Code", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(37, 38, 38);
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
  color: rgb(221, 221, 221);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 51, 56);
}`,
  },
};
