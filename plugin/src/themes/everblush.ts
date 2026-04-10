import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "everblush", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #0f1619 !important;
  --background-primary: #0f1619 !important;
  --background-primary-alt: #1e2528 !important;
  --background-secondary: #0a1114 !important;
  --background-secondary-alt: #141b1e !important;
  --bases-cards-background: #0f1619 !important;
  --bases-cards-cover-background: #1e2528 !important;
  --bases-cards-shadow: 0 0 0 1px #0f1619 !important;
  --bases-embed-border-color: #0f1619 !important;
  --bases-group-heading-property-color: #d0d0d0 !important;
  --bases-table-border-color: #0f1619 !important;
  --bases-table-cell-background-active: #0f1619 !important;
  --bases-table-cell-background-disabled: #1e2528 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #bab3e5 !important;
  --bases-table-group-background: #1e2528 !important;
  --bases-table-header-background: #0f1619 !important;
  --bases-table-header-color: #d0d0d0 !important;
  --bases-table-summary-background: #0f1619 !important;
  --blockquote-border-color: #bab3e5 !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #0f1619 !important;
  --canvas-card-label-color: #cbcbcb !important;
  --caret-color: #d5d5d5 !important;
  --checkbox-border-color: #cbcbcb !important;
  --checkbox-border-color-hover: #d0d0d0 !important;
  --checkbox-color: #bab3e5 !important;
  --checkbox-marker-color: #0f1619 !important;
  --checklist-done-color: #d0d0d0 !important;
  --code-background: #1e2528 !important;
  --code-block: #bab3e5 !important;
  --code-border-color: #0f1619 !important;
  --code-comment: #cbcbcb !important;
  --code-normal: #d5d5d5 !important;
  --code-punctuation: #d0d0d0 !important;
  --codeFont: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #cbcbcb !important;
  --collapse-icon-color-collapsed: #9bdead !important;
  --dark: #d5d5d5 !important;
  --dark0: #0f1619 !important;
  --dark1: #141b1e !important;
  --dark2: #1e2528 !important;
  --dark3: #454c4e !important;
  --darker: #0a1114 !important;
  --darkgray: #d5d5d5 !important;
  --default-font: system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji !important;
  --divider-color: #0f1619 !important;
  --divider-color-hover: #bab3e5 !important;
  --editor-font: 'JetBrainsMono Nerd Font', 'Source Code Pro',
    ui-monospace, SFMono-Regular, SF Mono, Menlo,
    Consolas, Liberation Mono, monospace !important;
  --embed-block-shadow-hover: 0 0 0 1px #0f1619, inset 0 0 0 1px #0f1619 !important;
  --embed-border-start: 2px solid #bab3e5 !important;
  --file-header-background: #0f1619 !important;
  --file-header-background-focused: #0f1619 !important;
  --file-header-font: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #d5d5d5 !important;
  --font-interface: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #0f1619 !important;
  --footnote-id-color: #d0d0d0 !important;
  --footnote-id-color-no-occurrences: #cbcbcb !important;
  --graph-node: #d0d0d0 !important;
  --graph-node-focused: #9bdead !important;
  --graph-node-unresolved: #cbcbcb !important;
  --graph-text: #d5d5d5 !important;
  --gray: #d0d0d0 !important;
  --green: #8ccf7e !important;
  --headerFont: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #cbcbcb !important;
  --highlight: #bab3e5 !important;
  --hr-color: #0f1619 !important;
  --icon-color: #d0d0d0 !important;
  --icon-color-active: #9bdead !important;
  --icon-color-focused: #d5d5d5 !important;
  --icon-color-hover: #d0d0d0 !important;
  --inline-code: #e5c76b !important;
  --input-date-separator: #cbcbcb !important;
  --input-placeholder-color: #cbcbcb !important;
  --interactive-accent: #bab3e5 !important;
  --interactive-accent-rgb: #9bdead !important;
  --interactive-before: #1e2528 !important;
  --lavender: #bab3e5 !important;
  --light: #0f1619 !important;
  --light0: #cbcbcb !important;
  --light1: #d0d0d0 !important;
  --light2: #d5d5d5 !important;
  --light3: #dadada !important;
  --lightgray: #0a1114 !important;
  --link-color: #9bdead !important;
  --link-external-color: #9bdead !important;
  --link-unresolved-color: #9bdead !important;
  --list-marker-color: #cbcbcb !important;
  --list-marker-color-collapsed: #9bdead !important;
  --list-marker-color-hover: #d0d0d0 !important;
  --menu-background: #0a1114 !important;
  --metadata-border-color: #0f1619 !important;
  --metadata-divider-color: #0f1619 !important;
  --metadata-input-font: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #d5d5d5 !important;
  --metadata-label-font: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #d0d0d0 !important;
  --metadata-label-text-color-hover: #d0d0d0 !important;
  --modal-background: #0f1619 !important;
  --nav-collapse-icon-color: #cbcbcb !important;
  --nav-collapse-icon-color-collapsed: #cbcbcb !important;
  --nav-heading-color: #d5d5d5 !important;
  --nav-heading-color-collapsed: #cbcbcb !important;
  --nav-heading-color-collapsed-hover: #d0d0d0 !important;
  --nav-heading-color-hover: #d5d5d5 !important;
  --nav-item-color: #d0d0d0 !important;
  --nav-item-color-active: #d5d5d5 !important;
  --nav-item-color-highlighted: #9bdead !important;
  --nav-item-color-hover: #d5d5d5 !important;
  --nav-item-color-selected: #d5d5d5 !important;
  --nav-tag-color: #cbcbcb !important;
  --nav-tag-color-active: #d0d0d0 !important;
  --nav-tag-color-hover: #d0d0d0 !important;
  --orange: #f3a368 !important;
  --pdf-background: #0f1619 !important;
  --pdf-page-background: #0f1619 !important;
  --pdf-shadow: 0 0 0 1px #0f1619 !important;
  --pdf-sidebar-background: #0f1619 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f1619 !important;
  --pill-border-color: #0f1619 !important;
  --pill-color: #d0d0d0 !important;
  --pill-color-hover: #d5d5d5 !important;
  --pill-color-remove: #cbcbcb !important;
  --pill-color-remove-hover: #9bdead !important;
  --pre-code: #454c4e !important;
  --prompt-background: #0f1619 !important;
  --purple: #c47fd5 !important;
  --red: #e06e6e !important;
  --ribbon-background: #0a1114 !important;
  --ribbon-background-collapsed: #0f1619 !important;
  --search-clear-button-color: #d0d0d0 !important;
  --search-icon-color: #d0d0d0 !important;
  --search-result-background: #0f1619 !important;
  --secondary: #9bdead !important;
  --setting-group-heading-color: #d5d5d5 !important;
  --setting-items-background: #1e2528 !important;
  --setting-items-border-color: #0f1619 !important;
  --slider-track-background: #0f1619 !important;
  --status-bar-background: #0a1114 !important;
  --status-bar-border-color: #0f1619 !important;
  --status-bar-text-color: #d0d0d0 !important;
  --suggestion-background: #0f1619 !important;
  --tab-background-active: #0f1619 !important;
  --tab-container-background: #0a1114 !important;
  --tab-outline-color: #0f1619 !important;
  --tab-switcher-background: #0a1114 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0a1114, transparent) !important;
  --tab-text-color: #cbcbcb !important;
  --tab-text-color-active: #d0d0d0 !important;
  --tab-text-color-focused: #d0d0d0 !important;
  --tab-text-color-focused-active: #d0d0d0 !important;
  --tab-text-color-focused-active-current: #d5d5d5 !important;
  --tab-text-color-focused-highlighted: #9bdead !important;
  --table-add-button-border-color: #0f1619 !important;
  --table-border-color: #0f1619 !important;
  --table-drag-handle-background-active: #bab3e5 !important;
  --table-drag-handle-color: #cbcbcb !important;
  --table-header-border-color: #0f1619 !important;
  --table-header-color: #d5d5d5 !important;
  --table-selection-border-color: #bab3e5 !important;
  --tag-color: #9bdead !important;
  --tag-color-hover: #9bdead !important;
  --task-checkbox: #9bdead !important;
  --teal: #9bdead !important;
  --tertiary: #9bdead !important;
  --text-a-hover: #454c4e !important;
  --text-accent: #9bdead !important;
  --text-faint: #cbcbcb !important;
  --text-highlight-bg: #bab3e5 !important;
  --text-highlight-bg-active: #8ccf7e !important;
  --text-mark: #bab3e5 !important;
  --text-muted: #d0d0d0 !important;
  --text-normal: #d5d5d5 !important;
  --text-selection: #454c4e !important;
  --text-tag: #9bdead !important;
  --text-title-h1: #e06e6e !important;
  --text-title-h3: #e5c76b !important;
  --text-title-h4: #8ccf7e !important;
  --text-title-h5: #bab3e5 !important;
  --text-title-h6: #9bdead !important;
  --textHighlight: #bab3e5 !important;
  --titleFont: -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0a1114 !important;
  --titlebar-background-focused: #141b1e !important;
  --titlebar-border-color: #0f1619 !important;
  --titlebar-text-color: #d0d0d0 !important;
  --titlebar-text-color-focused: #d5d5d5 !important;
  --vault-profile-color: #d5d5d5 !important;
  --vault-profile-color-hover: #d5d5d5 !important;
  --vim-cursor: #f3a368 !important;
  --yellow: #e5c76b !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

html body .bases-table thead th {
  border-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

html body .canvas-node {
  border-color: rgb(213, 213, 213);
}

html body .canvas-node-content {
  color: rgb(213, 213, 213);
}

html body .canvas-node-file {
  color: rgb(213, 213, 213);
}

html body .canvas-node-group {
  border-color: rgb(213, 213, 213);
}

html body .canvas-sidebar {
  background-color: rgb(10, 17, 20);
  border-color: rgb(213, 213, 213);
}

html body .note-properties {
  border-color: rgb(15, 22, 25);
}

html body .note-properties-key {
  color: rgb(208, 208, 208);
}

html body .note-properties-row {
  border-color: rgb(208, 208, 208);
}

html body .note-properties-tags {
  color: rgb(155, 222, 173);
}

html body .note-properties-value {
  color: rgb(208, 208, 208);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 22, 25);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(10, 17, 20);
  border-left-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

html body div#quartz-root {
  background-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .page article p > em, html em {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .page article p > i, html i {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .page article p > strong, html strong {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .text-highlight {
  background-color: rgb(186, 179, 229);
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body del {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body h1.article-title {
  color: rgb(213, 213, 213);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(203, 203, 203);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(155, 222, 173);
  border-color: rgb(186, 179, 229);
}

html body p {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 208) none 0px;
  text-decoration-color: rgb(208, 208, 208);
}`,
    links: `html body a.external, html footer a {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body a.internal.broken {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}`,
    lists: `html body dd {
  color: rgb(213, 213, 213);
}

html body dt {
  color: rgb(213, 213, 213);
}

html body ol > li {
  color: rgb(213, 213, 213);
}

html body ol.overflow {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body ul > li {
  color: rgb(213, 213, 213);
}

html body ul.overflow {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(213, 213, 213);
}

html body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body table {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  width: 195.062px;
}

html body td {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

html body th {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

html body thead {
  border-bottom-color: rgb(15, 22, 25);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html body tr {
  border-bottom-color: rgb(15, 22, 25);
}`,
    code: `html body code {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(186, 179, 229);
  border-left-color: rgb(186, 179, 229);
  border-right-color: rgb(186, 179, 229);
  border-top-color: rgb(186, 179, 229);
  color: rgb(186, 179, 229);
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
}

html body pre:has(> code) {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
}`,
    images: `html body audio {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body figcaption {
  color: rgb(213, 213, 213);
}

html body figure {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body img {
  border-bottom-color: rgb(224, 110, 110);
  border-left-color: rgb(224, 110, 110);
  border-right-color: rgb(224, 110, 110);
  border-top-color: rgb(224, 110, 110);
}

html body video {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(30, 37, 40);
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
}

html body .footnotes {
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

html body .transclude {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(186, 179, 229);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(155, 222, 173);
  border-left-color: rgb(155, 222, 173);
  border-right-color: rgb(155, 222, 173);
  border-top-color: rgb(155, 222, 173);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(15, 22, 25);
}

html body .search > .search-container > .search-space > * {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(213, 213, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(213, 213, 213);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 17, 20);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(10, 17, 20);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(155, 222, 173);
}

html body h1 {
  color: rgb(224, 110, 110);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body h2 {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body h2.page-title, html h2.page-title a {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body h3 {
  color: rgb(229, 199, 107);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body h4 {
  color: rgb(140, 207, 126);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body h5 {
  color: rgb(186, 179, 229);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body h6 {
  color: rgb(155, 222, 173);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body hr {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

html body ::-webkit-scrollbar-track {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(213, 213, 213);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}`,
    footer: `html body footer {
  background-color: rgb(10, 17, 20);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(208, 208, 208);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(213, 213, 213);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body li.section-li > .section .meta {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
}

html body ul.section-ul {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

html body .darkmode svg {
  color: rgb(208, 208, 208);
  stroke: rgb(208, 208, 208);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

html body .breadcrumb-element p {
  color: rgb(203, 203, 203);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

html body .metadata {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(208, 208, 208);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body .metadata-properties {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

html body .navigation-progress {
  background-color: rgb(10, 17, 20);
}

html body .page-header h2.page-title {
  color: rgb(213, 213, 213);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(213, 213, 213);
}

html body details {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body input[type=text] {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(30, 37, 40);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

html body progress {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

html body sub {
  color: rgb(213, 213, 213);
}

html body summary {
  color: rgb(213, 213, 213);
}

html body sup {
  color: rgb(213, 213, 213);
}

html body ul.tags > li {
  background-color: rgb(20, 27, 30);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(155, 222, 173);
}`,
  },
  light: {},
};
