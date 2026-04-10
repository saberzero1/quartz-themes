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
  --bodyFont: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --file-header-font: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #dcddde !important;
  --font-interface: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #dcddde !important;
  --metadata-label-font: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(33, 33, 33);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(48, 48, 48);
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(33, 33, 33);
  border-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(48, 48, 48);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(153, 153, 153);
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
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(26, 73, 100, 0.66);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(220, 221, 222);
  font-size: 15.2px;
  font-weight: 600;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(32, 171, 233);
  border-color: rgb(32, 171, 233);
}

html[saved-theme="dark"] body p {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
  outline: rgb(153, 153, 153) none 0px;
  text-decoration-color: rgb(153, 153, 153);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
  text-decoration-color: rgb(62, 147, 216);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(62, 147, 216);
  outline: rgb(62, 147, 216) none 0px;
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
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body ul.overflow {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(62, 147, 216);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(33, 33, 33);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(62, 147, 216);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(62, 147, 216);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
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
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
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
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(153, 153, 153);
  font-family: "Source Code Pro", "Fira Code", monospace;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(220, 221, 222);
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
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 255, 255);
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
  --bodyFont: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --file-header-font: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #f2f3f5 !important;
  --flair-color: rgb(203, 77, 73) !important;
  --font-interface: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(203, 77, 73) !important;
  --metadata-label-font: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: Source Code Pro, Fira Code, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(57, 63, 63);
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(221, 221, 221);
  color: rgb(203, 77, 73);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(221, 221, 221);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(143, 147, 143);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(203, 77, 73);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(143, 147, 143);
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
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(240, 255, 82, 0.76);
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration-color: rgb(203, 77, 73);
}

html[saved-theme="light"] body del {
  color: rgb(46, 51, 56);
  outline: rgb(46, 51, 56) none 0px;
  text-decoration-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(203, 77, 73);
  font-size: 15.2px;
  font-weight: 600;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(203, 77, 73);
  border-color: rgb(203, 77, 73);
}

html[saved-theme="light"] body p {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
  outline: rgb(143, 147, 143) none 0px;
  text-decoration-color: rgb(143, 147, 143);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
  text-decoration-color: rgb(203, 77, 73);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(203, 77, 73);
  outline: rgb(203, 77, 73) none 0px;
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(140, 140, 140);
  text-decoration-color: rgb(140, 140, 140);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(203, 77, 73);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(57, 63, 63);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(203, 77, 73);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(203, 77, 73);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
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
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(46, 51, 56);
  border-left-color: rgb(46, 51, 56);
  border-right-color: rgb(46, 51, 56);
  border-top-color: rgb(46, 51, 56);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(143, 147, 143);
  font-family: "Source Code Pro", "Fira Code", monospace;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 51, 56);
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
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(255, 255, 255);
}`,
  },
};
