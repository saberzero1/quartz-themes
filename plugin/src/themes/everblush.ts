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
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .page article p > em, html em {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .page article p > i, html i {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .page article p > strong, html strong {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body .text-highlight {
  background-color: rgb(186, 179, 229);
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
}

html body del {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration-color: rgb(213, 213, 213);
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
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
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
  border-left-color: rgb(186, 179, 229);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(208, 208, 208);
  text-decoration-color: rgb(208, 208, 208);
}

html body input[type=checkbox] {
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
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(15, 22, 25);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
}`,
  },
  light: {},
};
