import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "everblush", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #0f1619;
  --background-primary: #0f1619;
  --background-primary-alt: #1e2528;
  --background-secondary: #0a1114;
  --background-secondary-alt: #141b1e;
  --bases-cards-background: #0f1619;
  --bases-cards-cover-background: #1e2528;
  --bases-cards-shadow: 0 0 0 1px #0f1619;
  --bases-embed-border-color: #0f1619;
  --bases-group-heading-property-color: #d0d0d0;
  --bases-table-border-color: #0f1619;
  --bases-table-cell-background-active: #0f1619;
  --bases-table-cell-background-disabled: #1e2528;
  --bases-table-cell-shadow-focus: 0 0 0 2px #bab3e5;
  --bases-table-group-background: #1e2528;
  --bases-table-header-background: #0f1619;
  --bases-table-header-color: #d0d0d0;
  --bases-table-summary-background: #0f1619;
  --blockquote-border-color: #bab3e5;
  --canvas-background: #0f1619;
  --canvas-card-label-color: #cbcbcb;
  --caret-color: #d5d5d5;
  --checkbox-border-color: #cbcbcb;
  --checkbox-border-color-hover: #d0d0d0;
  --checkbox-color: #bab3e5;
  --checkbox-marker-color: #0f1619;
  --checklist-done-color: #d0d0d0;
  --code-background: #1e2528;
  --code-block: #bab3e5;
  --code-border-color: #0f1619;
  --code-comment: #cbcbcb;
  --code-normal: #d5d5d5;
  --code-punctuation: #d0d0d0;
  --collapse-icon-color: #cbcbcb;
  --collapse-icon-color-collapsed: #9bdead;
  --dark0: #0f1619;
  --dark1: #141b1e;
  --dark2: #1e2528;
  --dark3: #454c4e;
  --darker: #0a1114;
  --default-font: system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji;
  --divider-color: #0f1619;
  --divider-color-hover: #bab3e5;
  --editor-font: 'JetBrainsMono Nerd Font', 'Source Code Pro',
    ui-monospace, SFMono-Regular, SF Mono, Menlo,
    Consolas, Liberation Mono, monospace;
  --embed-block-shadow-hover: 0 0 0 1px #0f1619, inset 0 0 0 1px #0f1619;
  --embed-border-start: 2px solid #bab3e5;
  --file-header-background: #0f1619;
  --file-header-background-focused: #0f1619;
  --file-header-font: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #d5d5d5;
  --font-interface: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --footnote-divider-color: #0f1619;
  --footnote-id-color: #d0d0d0;
  --footnote-id-color-no-occurrences: #cbcbcb;
  --graph-node: #d0d0d0;
  --graph-node-focused: #9bdead;
  --graph-node-unresolved: #cbcbcb;
  --graph-text: #d5d5d5;
  --green: #8ccf7e;
  --heading-formatting: #cbcbcb;
  --hr-color: #0f1619;
  --icon-color: #d0d0d0;
  --icon-color-active: #9bdead;
  --icon-color-focused: #d5d5d5;
  --icon-color-hover: #d0d0d0;
  --inline-code: #e5c76b;
  --input-date-separator: #cbcbcb;
  --input-placeholder-color: #cbcbcb;
  --interactive-accent: #bab3e5;
  --interactive-accent-rgb: #9bdead;
  --interactive-before: #1e2528;
  --lavender: #bab3e5;
  --light0: #cbcbcb;
  --light1: #d0d0d0;
  --light2: #d5d5d5;
  --light3: #dadada;
  --link-color: #9bdead;
  --link-external-color: #9bdead;
  --link-unresolved-color: #9bdead;
  --list-marker-color: #cbcbcb;
  --list-marker-color-collapsed: #9bdead;
  --list-marker-color-hover: #d0d0d0;
  --menu-background: #0a1114;
  --metadata-border-color: #0f1619;
  --metadata-divider-color: #0f1619;
  --metadata-input-font: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #d5d5d5;
  --metadata-label-font: '??', '??', -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif, Apple Color Emoji,
    Segoe UI Emoji, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #d0d0d0;
  --metadata-label-text-color-hover: #d0d0d0;
  --modal-background: #0f1619;
  --nav-collapse-icon-color: #cbcbcb;
  --nav-collapse-icon-color-collapsed: #cbcbcb;
  --nav-heading-color: #d5d5d5;
  --nav-heading-color-collapsed: #cbcbcb;
  --nav-heading-color-collapsed-hover: #d0d0d0;
  --nav-heading-color-hover: #d5d5d5;
  --nav-item-color: #d0d0d0;
  --nav-item-color-active: #d5d5d5;
  --nav-item-color-highlighted: #9bdead;
  --nav-item-color-hover: #d5d5d5;
  --nav-item-color-selected: #d5d5d5;
  --nav-tag-color: #cbcbcb;
  --nav-tag-color-active: #d0d0d0;
  --nav-tag-color-hover: #d0d0d0;
  --orange: #f3a368;
  --pdf-background: #0f1619;
  --pdf-page-background: #0f1619;
  --pdf-shadow: 0 0 0 1px #0f1619;
  --pdf-sidebar-background: #0f1619;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f1619;
  --pill-border-color: #0f1619;
  --pill-color: #d0d0d0;
  --pill-color-hover: #d5d5d5;
  --pill-color-remove: #cbcbcb;
  --pill-color-remove-hover: #9bdead;
  --pre-code: #454c4e;
  --prompt-background: #0f1619;
  --purple: #c47fd5;
  --red: #e06e6e;
  --ribbon-background: #0a1114;
  --ribbon-background-collapsed: #0f1619;
  --search-clear-button-color: #d0d0d0;
  --search-icon-color: #d0d0d0;
  --search-result-background: #0f1619;
  --setting-group-heading-color: #d5d5d5;
  --setting-items-background: #1e2528;
  --setting-items-border-color: #0f1619;
  --slider-track-background: #0f1619;
  --status-bar-background: #0a1114;
  --status-bar-border-color: #0f1619;
  --status-bar-text-color: #d0d0d0;
  --suggestion-background: #0f1619;
  --tab-background-active: #0f1619;
  --tab-container-background: #0a1114;
  --tab-outline-color: #0f1619;
  --tab-switcher-background: #0a1114;
  --tab-switcher-menubar-background: linear-gradient(to top, #0a1114, transparent);
  --tab-text-color: #cbcbcb;
  --tab-text-color-active: #d0d0d0;
  --tab-text-color-focused: #d0d0d0;
  --tab-text-color-focused-active: #d0d0d0;
  --tab-text-color-focused-active-current: #d5d5d5;
  --tab-text-color-focused-highlighted: #9bdead;
  --table-add-button-border-color: #0f1619;
  --table-border-color: #0f1619;
  --table-drag-handle-background-active: #bab3e5;
  --table-drag-handle-color: #cbcbcb;
  --table-header-border-color: #0f1619;
  --table-header-color: #d5d5d5;
  --table-selection-border-color: #bab3e5;
  --tag-color: #9bdead;
  --tag-color-hover: #9bdead;
  --task-checkbox: #9bdead;
  --teal: #9bdead;
  --text-a-hover: #454c4e;
  --text-accent: #9bdead;
  --text-faint: #cbcbcb;
  --text-highlight-bg: #bab3e5;
  --text-highlight-bg-active: #8ccf7e;
  --text-mark: #bab3e5;
  --text-muted: #d0d0d0;
  --text-normal: #d5d5d5;
  --text-selection: #454c4e;
  --text-tag: #9bdead;
  --text-title-h1: #e06e6e;
  --text-title-h3: #e5c76b;
  --text-title-h4: #8ccf7e;
  --text-title-h5: #bab3e5;
  --text-title-h6: #9bdead;
  --titlebar-background: #0a1114;
  --titlebar-background-focused: #141b1e;
  --titlebar-border-color: #0f1619;
  --titlebar-text-color: #d0d0d0;
  --titlebar-text-color-focused: #d5d5d5;
  --vault-profile-color: #d5d5d5;
  --vault-profile-color-hover: #d5d5d5;
  --vim-cursor: #f3a368;
  --yellow: #e5c76b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 22, 25);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(10, 17, 20);
  border-left-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

body div#quartz-root {
  background-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}`,
    typography: `body .page article p > b, b {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .page article p > em, em {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .page article p > i, i {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .page article p > strong, strong {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .text-highlight {
  background-color: rgb(186, 179, 229);
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body del {
  color: rgb(213, 213, 213);
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: line-through rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body p {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(208, 208, 208) none 0px;
  text-decoration: rgb(208, 208, 208);
  text-decoration-color: rgb(208, 208, 208);
}`,
    links: `body a.external, footer a {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body a.internal.broken {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}`,
    lists: `body dd {
  color: rgb(213, 213, 213);
}

body dt {
  color: rgb(213, 213, 213);
}

body ol > li {
  color: rgb(213, 213, 213);
}

body ol.overflow {
  background-color: rgb(15, 22, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body ul > li {
  color: rgb(213, 213, 213);
}

body ul.overflow {
  background-color: rgb(15, 22, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
}

body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body table {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

body th {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

body thead {
  border-bottom-color: rgb(15, 22, 25);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(15, 22, 25);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
}

body pre > code, pre:has(> code) {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
}

body pre:has(> code) {
  background-color: rgb(69, 76, 78);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
}`,
    images: `body audio {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body figcaption {
  color: rgb(213, 213, 213);
}

body figure {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body img {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body video {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    embeds: `body .file-embed {
  background-color: rgb(30, 37, 40);
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
}

body .footnotes {
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .transclude {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(186, 179, 229);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(186, 179, 229);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(208, 208, 208);
  text-decoration: line-through rgb(208, 208, 208);
  text-decoration-color: rgb(208, 208, 208);
}

body input[type=checkbox] {
  border-bottom-color: rgb(155, 222, 173);
  border-left-color: rgb(155, 222, 173);
  border-right-color: rgb(155, 222, 173);
  border-top-color: rgb(155, 222, 173);
}

body li.task-list-item[data-task='!'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='*'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='-'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='/'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='>'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='?'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='I'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='S'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='b'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='c'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='d'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='f'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='i'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='k'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='l'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='p'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='u'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body li.task-list-item[data-task='w'] {
  color: rgb(213, 213, 213);
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(213, 213, 213);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 22, 25);
}

body .search > .search-container > .search-space > * {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  outline: rgb(213, 213, 213) none 0px;
  text-decoration: rgb(213, 213, 213);
  text-decoration-color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 17, 20);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(10, 17, 20);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(10, 17, 20);
  color: rgb(213, 213, 213);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(155, 222, 173);
}

body h1 {
  color: rgb(224, 110, 110);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body h2 {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body h2.page-title, h2.page-title a {
  color: rgb(213, 213, 213);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body h3 {
  color: rgb(229, 199, 107);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body h4 {
  color: rgb(140, 207, 126);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body h5 {
  color: rgb(186, 179, 229);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body h6 {
  color: rgb(155, 222, 173);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body hr {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 22, 25) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 22, 25);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(208, 208, 208);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(208, 208, 208);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(208, 208, 208);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(213, 213, 213);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(213, 213, 213);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}`,
    footer: `body footer {
  background-color: rgb(10, 17, 20);
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(208, 208, 208);
  text-decoration: rgb(208, 208, 208);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(213, 213, 213);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
  text-decoration: rgb(208, 208, 208);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body li.section-li > .section .meta {
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(208, 208, 208);
  text-decoration: rgb(208, 208, 208);
}

body ul.section-ul {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

body .darkmode svg {
  color: rgb(208, 208, 208);
  stroke: rgb(208, 208, 208);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
}

body .breadcrumb-element p {
  color: rgb(203, 203, 203);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body .metadata {
  border-bottom-color: rgb(15, 22, 25);
  border-left-color: rgb(15, 22, 25);
  border-right-color: rgb(15, 22, 25);
  border-top-color: rgb(15, 22, 25);
  color: rgb(208, 208, 208);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body .metadata-properties {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

body .navigation-progress {
  background-color: rgb(10, 17, 20);
}

body .page-header h2.page-title {
  color: rgb(213, 213, 213);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(213, 213, 213);
  text-decoration: underline dotted rgb(213, 213, 213);
}

body details {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body input[type=text] {
  border-bottom-color: rgb(208, 208, 208);
  border-left-color: rgb(208, 208, 208);
  border-right-color: rgb(208, 208, 208);
  border-top-color: rgb(208, 208, 208);
  color: rgb(208, 208, 208);
  font-family: "??", "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(30, 37, 40);
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
  color: rgb(213, 213, 213);
}

body progress {
  border-bottom-color: rgb(213, 213, 213);
  border-left-color: rgb(213, 213, 213);
  border-right-color: rgb(213, 213, 213);
  border-top-color: rgb(213, 213, 213);
}

body sub {
  color: rgb(213, 213, 213);
}

body summary {
  color: rgb(213, 213, 213);
}

body sup {
  color: rgb(213, 213, 213);
}`,
  },
  light: {},
};
