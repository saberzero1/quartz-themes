import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cybertron-shifted",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #595959;
  --background-modifier-error: #36393f;
  --background-modifier-form-field: #2f3136;
  --background-modifier-form-field-highlighted: #2f3136;
  --background-modifier-form-field-hover: #2f3136;
  --background-modifier-success: #36393f;
  --background-primary: #2f3136;
  --background-primary-alt: #36393f;
  --background-secondary: #141414;
  --background-secondary-alt: #222222;
  --bases-cards-background: #2f3136;
  --bases-cards-cover-background: #36393f;
  --bases-cards-shadow: 0 0 0 1px #595959;
  --bases-embed-border-color: #595959;
  --bases-group-heading-property-color: #aaaaaa;
  --bases-table-border-color: #595959;
  --bases-table-cell-background-active: #2f3136;
  --bases-table-cell-background-disabled: #36393f;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(252, 246, 1, 0.95);
  --bases-table-group-background: #36393f;
  --bases-table-header-background: #2f3136;
  --bases-table-header-color: #aaaaaa;
  --bases-table-summary-background: #2f3136;
  --blockquote-border: #9e8aff;
  --blockquote-border-color: rgb(252, 246, 1, 0.95);
  --canvas-background: #2f3136;
  --canvas-card-label-color: #999999;
  --caret-color: #E6EEE7;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #aaaaaa;
  --checkbox-color: rgb(252, 246, 1, 0.95);
  --checkbox-color-hover: #9e8aff;
  --checkbox-marker-color: #2f3136;
  --checklist-done-color: #aaaaaa;
  --code-background: #36393f;
  --code-border-color: #595959;
  --code-comment: #999999;
  --code-normal: #E6EEE7;
  --code-punctuation: #aaaaaa;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #319cb4;
  --custom-black: #000000;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #595959;
  --divider-color-hover: rgb(252, 246, 1, 0.95);
  --dropdown-background-hover: #36393f;
  --embed-block-shadow-hover: 0 0 0 1px #595959, inset 0 0 0 1px #595959;
  --embed-border-start: 2px solid rgb(252, 246, 1, 0.95);
  --file-header-background: #2f3136;
  --file-header-background-focused: #2f3136;
  --flair-color: #E6EEE7;
  --footnote-divider-color: #595959;
  --footnote-id-color: #aaaaaa;
  --footnote-id-color-no-occurrences: #999999;
  --glow-color-class-green: #E6F355;
  --glow-color-const-blue: #6C99BB;
  --glow-color-escape-cyan: #89DDFF;
  --glow-color-orange-param: #E87D3E;
  --glow-color-tag-salmon: #FC929E;
  --glow-color-variable-mint: #E6EEE7;
  --graph-node: #aaaaaa;
  --graph-node-focused: #319cb4;
  --graph-node-unresolved: #999999;
  --graph-text: #E6EEE7;
  --gray: var(--text-muted);
  --heading-formatting: #999999;
  --highlight: var(--text-highlight-bg);
  --hr-color: #595959;
  --icon-color: #aaaaaa;
  --icon-color-active: #319cb4;
  --icon-color-focused: #E6EEE7;
  --icon-color-hover: #aaaaaa;
  --inline-pre-code: #131315;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: rgb(252, 246, 1, 0.95);
  --interactive-accent-hover: #9e8aff;
  --interactive-accent-muted: rgb(252, 246, 1, 0.55);
  --interactive-accent-rgb: #fe8019;
  --interactive-before: #5e6565;
  --interactive-hover: #36393f;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #319cb4;
  --link-external-color: #319cb4;
  --link-unresolved-color: #319cb4;
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #319cb4;
  --list-marker-color-hover: #aaaaaa;
  --menu-background: #141414;
  --metadata-border-color: #595959;
  --metadata-divider-color: #595959;
  --metadata-input-text-color: #E6EEE7;
  --metadata-label-text-color: #aaaaaa;
  --metadata-label-text-color-hover: #aaaaaa;
  --modal-background: #2f3136;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #E6EEE7;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #aaaaaa;
  --nav-heading-color-hover: #E6EEE7;
  --nav-item-color: #aaaaaa;
  --nav-item-color-active: #E6EEE7;
  --nav-item-color-highlighted: #319cb4;
  --nav-item-color-hover: #E6EEE7;
  --nav-item-color-selected: #E6EEE7;
  --nav-items-space: 4px 8px;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #aaaaaa;
  --nav-tag-color-hover: #aaaaaa;
  --pdf-background: #2f3136;
  --pdf-page-background: #2f3136;
  --pdf-shadow: 0 0 0 1px #595959;
  --pdf-sidebar-background: #2f3136;
  --pdf-thumbnail-shadow: 0 0 0 1px #595959;
  --pill-border-color: #595959;
  --pill-color: #aaaaaa;
  --pill-color-hover: #E6EEE7;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #319cb4;
  --pre-code: #40444d;
  --prompt-background: #2f3136;
  --ribbon-background: #141414;
  --ribbon-background-collapsed: #2f3136;
  --scrollbar-bg: rgb(20, 20, 20, 0.0);
  --scrollbar-thumb-bg: #595959;
  --search-clear-button-color: #aaaaaa;
  --search-icon-color: #aaaaaa;
  --search-result-background: #2f3136;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #E6EEE7;
  --setting-items-background: #36393f;
  --setting-items-border-color: #595959;
  --slider-track-background: #595959;
  --status-bar-background: #141414;
  --status-bar-border-color: #595959;
  --status-bar-text-color: #aaaaaa;
  --suggestion-background: #2f3136;
  --tab-background-active: #2f3136;
  --tab-container-background: #141414;
  --tab-outline-color: #595959;
  --tab-switcher-background: #141414;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent);
  --tab-text-color: #999999;
  --tab-text-color-active: #aaaaaa;
  --tab-text-color-focused: #aaaaaa;
  --tab-text-color-focused-active: #aaaaaa;
  --tab-text-color-focused-active-current: #E6EEE7;
  --tab-text-color-focused-highlighted: #319cb4;
  --table-add-button-border-color: #595959;
  --table-border-color: #595959;
  --table-drag-handle-background-active: rgb(252, 246, 1, 0.95);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #5dbcd2;
  --table-header-border-color: #595959;
  --table-header-color: #E6EEE7;
  --table-selection-border-color: rgb(252, 246, 1, 0.95);
  --tag-color: #319cb4;
  --tag-color-hover: #319cb4;
  --tertiary: var(--interactive-accent-hover);
  --text-a: #d669bc;
  --text-a-hover: #ec9ad9;
  --text-accent: #319cb4;
  --text-faint: #999999;
  --text-highlight-bg: rgba(252, 246, 1, 0.4);
  --text-inline-code: #FC929E;
  --text-link: #99ff99;
  --text-mark: transparent;
  --text-muted: #aaaaaa;
  --text-normal: #E6EEE7;
  --text-on-accent: #5dbcd2;
  --text-selection: #164f92;
  --text-title-h1: #e3e005;
  --text-title-h2: #b9adff;
  --text-title-h3: #52c1da;
  --text-title-h4: #67c073;
  --text-title-h5: #de87ca;
  --text-title-h6: #b4b4b4;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #141414;
  --titlebar-background-focused: #222222;
  --titlebar-border-color: #595959;
  --titlebar-text-color: #aaaaaa;
  --titlebar-text-color-focused: #E6EEE7;
  --vault-profile-color: #E6EEE7;
  --vault-profile-color-hover: #E6EEE7;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(230, 238, 231);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(230, 238, 231);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(230, 238, 231);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(89, 89, 89);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(230, 238, 231);
}`,
    typography: `body .page article p > b, b {
  color: rgb(158, 138, 255);
  font-weight: 700;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration: rgb(158, 138, 255);
  text-decoration-color: rgb(158, 138, 255);
}

body .page article p > em, em {
  color: rgb(186, 192, 79);
  outline: rgb(186, 192, 79) none 0px;
  text-decoration: rgb(186, 192, 79);
  text-decoration-color: rgb(186, 192, 79);
}

body .page article p > i, i {
  color: rgb(186, 192, 79);
  outline: rgb(186, 192, 79) none 0px;
  text-decoration: rgb(186, 192, 79);
  text-decoration-color: rgb(186, 192, 79);
}

body .page article p > strong, strong {
  color: rgb(158, 138, 255);
  font-weight: 700;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration: rgb(158, 138, 255);
  text-decoration-color: rgb(158, 138, 255);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(230, 238, 231);
  outline: rgb(230, 238, 231) none 0px;
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body del {
  color: rgb(230, 238, 231);
  outline: rgb(230, 238, 231) none 0px;
  text-decoration: line-through rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}

body a.internal.broken {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}`,
    lists: `body dd {
  color: rgb(230, 238, 231);
}

body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

body dt {
  color: rgb(230, 238, 231);
}

body ol > li {
  color: rgb(230, 238, 231);
}

body ol.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body ul > li {
  color: rgb(230, 238, 231);
}

body ul.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(214, 105, 188);
  text-decoration: rgb(214, 105, 188);
}

body blockquote {
  background-color: rgb(34, 34, 41);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body table {
  color: rgb(230, 238, 231);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body td {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

body th {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(137, 221, 255);
  font-weight: 700;
}

body thead {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

body tr {
  border-bottom-color: rgb(89, 89, 89);
}`,
    code: `body code {
  background-color: rgb(64, 68, 77);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

body pre > code, pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body figcaption {
  color: rgb(230, 238, 231);
}

body figure {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body img {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body video {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}`,
    embeds: `body .file-embed {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

body .footnotes {
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

body .transclude {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgba(252, 246, 1, 0.95);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  padding-right: 5px;
}

body .transclude-inner {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgba(252, 246, 1, 0.95);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  padding-right: 5px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(170, 170, 170);
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  margin-right: 9.33333px;
  width: 13.3281px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='*'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='-'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='/'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='>'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='?'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='I'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='S'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='b'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='c'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='d'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='f'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='i'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='k'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='l'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='p'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='u'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body li.task-list-item[data-task='w'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(230, 243, 85);
  border-left-color: rgb(230, 243, 85);
  border-right-color: rgb(230, 243, 85);
  border-top-color: rgb(230, 243, 85);
}

body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="example"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="info"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="question"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="quote"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="success"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="tip"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="todo"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(230, 238, 231);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 238, 231) none 0px;
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(230, 238, 231);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(230, 238, 231);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(230, 238, 231);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

body a.internal.tag-link::before {
  color: rgb(49, 156, 180);
}

body h1 {
  color: rgb(227, 224, 5);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(185, 173, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(230, 238, 231);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(82, 193, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(103, 192, 115);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(222, 135, 202);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(180, 180, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(214, 105, 188);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

body ::-webkit-scrollbar {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(170, 170, 170);
  cursor: pointer;
  font-weight: 500;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  cursor: pointer;
  font-weight: 500;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 170, 170);
  cursor: pointer;
  text-decoration: rgb(170, 170, 170);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(230, 243, 85);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(230, 243, 85);
  border-right-color: rgb(230, 243, 85);
  border-top-color: rgb(230, 243, 85);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(230, 243, 85);
  cursor: pointer;
}`,
    toc: `body li.depth-0 {
  font-weight: 500;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(170, 170, 170);
}

body footer ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(230, 238, 231);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

body ul.section-ul {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

body .metadata {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(170, 170, 170);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

body .page-header h2.page-title {
  color: rgb(230, 238, 231);
}

body abbr {
  color: rgb(230, 238, 231);
  text-decoration: underline dotted rgb(230, 238, 231);
}

body details {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body input[type=text] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

body kbd {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

body progress {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

body sub {
  color: rgb(230, 238, 231);
  font-size: 12.5px;
}

body summary {
  color: rgb(230, 238, 231);
}

body sup {
  color: rgb(230, 238, 231);
  font-size: 12.5px;
}`,
  },
  light: {},
};
