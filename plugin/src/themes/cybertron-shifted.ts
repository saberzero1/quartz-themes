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
  --background-modifier-border: #595959 !important;
  --background-modifier-error: #36393f !important;
  --background-modifier-form-field: #2f3136 !important;
  --background-modifier-form-field-highlighted: #2f3136 !important;
  --background-modifier-form-field-hover: #2f3136 !important;
  --background-modifier-success: #36393f !important;
  --background-primary: #2f3136 !important;
  --background-primary-alt: #36393f !important;
  --background-secondary: #141414 !important;
  --background-secondary-alt: #222222 !important;
  --bases-cards-background: #2f3136 !important;
  --bases-cards-cover-background: #36393f !important;
  --bases-cards-shadow: 0 0 0 1px #595959 !important;
  --bases-embed-border-color: #595959 !important;
  --bases-group-heading-property-color: #aaaaaa !important;
  --bases-table-border-color: #595959 !important;
  --bases-table-cell-background-active: #2f3136 !important;
  --bases-table-cell-background-disabled: #36393f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(252, 246, 1, 0.95) !important;
  --bases-table-group-background: #36393f !important;
  --bases-table-header-background: #2f3136 !important;
  --bases-table-header-color: #aaaaaa !important;
  --bases-table-summary-background: #2f3136 !important;
  --blockquote-border: #9e8aff !important;
  --blockquote-border-color: rgb(252, 246, 1, 0.95) !important;
  --canvas-background: #2f3136 !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #E6EEE7 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #aaaaaa !important;
  --checkbox-color: rgb(252, 246, 1, 0.95) !important;
  --checkbox-color-hover: #9e8aff !important;
  --checkbox-marker-color: #2f3136 !important;
  --checklist-done-color: #aaaaaa !important;
  --code-background: #36393f !important;
  --code-border-color: #595959 !important;
  --code-comment: #999999 !important;
  --code-normal: #E6EEE7 !important;
  --code-punctuation: #aaaaaa !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #319cb4 !important;
  --custom-black: #000000 !important;
  --dark: #E6EEE7 !important;
  --darkgray: #E6EEE7 !important;
  --divider-color: #595959 !important;
  --divider-color-hover: rgb(252, 246, 1, 0.95) !important;
  --dropdown-background-hover: #36393f !important;
  --embed-block-shadow-hover: 0 0 0 1px #595959, inset 0 0 0 1px #595959 !important;
  --embed-border-start: 2px solid rgb(252, 246, 1, 0.95) !important;
  --file-header-background: #2f3136 !important;
  --file-header-background-focused: #2f3136 !important;
  --flair-color: #E6EEE7 !important;
  --footnote-divider-color: #595959 !important;
  --footnote-id-color: #aaaaaa !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --glow-color-class-green: #E6F355 !important;
  --glow-color-const-blue: #6C99BB !important;
  --glow-color-escape-cyan: #89DDFF !important;
  --glow-color-orange-param: #E87D3E !important;
  --glow-color-tag-salmon: #FC929E !important;
  --glow-color-variable-mint: #E6EEE7 !important;
  --graph-node: #aaaaaa !important;
  --graph-node-focused: #319cb4 !important;
  --graph-node-unresolved: #999999 !important;
  --graph-text: #E6EEE7 !important;
  --gray: #aaaaaa !important;
  --heading-formatting: #999999 !important;
  --highlight: rgba(252, 246, 1, 0.4) !important;
  --hr-color: #595959 !important;
  --icon-color: #aaaaaa !important;
  --icon-color-active: #319cb4 !important;
  --icon-color-focused: #E6EEE7 !important;
  --icon-color-hover: #aaaaaa !important;
  --inline-pre-code: #131315 !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: rgb(252, 246, 1, 0.95) !important;
  --interactive-accent-hover: #9e8aff !important;
  --interactive-accent-muted: rgb(252, 246, 1, 0.55) !important;
  --interactive-accent-rgb: #fe8019 !important;
  --interactive-before: #5e6565 !important;
  --interactive-hover: #36393f !important;
  --light: #2f3136 !important;
  --lightgray: #141414 !important;
  --link-color: #319cb4 !important;
  --link-external-color: #319cb4 !important;
  --link-unresolved-color: #319cb4 !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #319cb4 !important;
  --list-marker-color-hover: #aaaaaa !important;
  --menu-background: #141414 !important;
  --metadata-border-color: #595959 !important;
  --metadata-divider-color: #595959 !important;
  --metadata-input-text-color: #E6EEE7 !important;
  --metadata-label-text-color: #aaaaaa !important;
  --metadata-label-text-color-hover: #aaaaaa !important;
  --modal-background: #2f3136 !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #E6EEE7 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #aaaaaa !important;
  --nav-heading-color-hover: #E6EEE7 !important;
  --nav-item-color: #aaaaaa !important;
  --nav-item-color-active: #E6EEE7 !important;
  --nav-item-color-highlighted: #319cb4 !important;
  --nav-item-color-hover: #E6EEE7 !important;
  --nav-item-color-selected: #E6EEE7 !important;
  --nav-items-space: 4px 8px !important;
  --nav-tag-color: #999999 !important;
  --nav-tag-color-active: #aaaaaa !important;
  --nav-tag-color-hover: #aaaaaa !important;
  --pdf-background: #2f3136 !important;
  --pdf-page-background: #2f3136 !important;
  --pdf-shadow: 0 0 0 1px #595959 !important;
  --pdf-sidebar-background: #2f3136 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #595959 !important;
  --pill-border-color: #595959 !important;
  --pill-color: #aaaaaa !important;
  --pill-color-hover: #E6EEE7 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #319cb4 !important;
  --pre-code: #40444d !important;
  --prompt-background: #2f3136 !important;
  --ribbon-background: #141414 !important;
  --ribbon-background-collapsed: #2f3136 !important;
  --scrollbar-bg: rgb(20, 20, 20, 0.0) !important;
  --scrollbar-thumb-bg: #595959 !important;
  --search-clear-button-color: #aaaaaa !important;
  --search-icon-color: #aaaaaa !important;
  --search-result-background: #2f3136 !important;
  --secondary: #319cb4 !important;
  --setting-group-heading-color: #E6EEE7 !important;
  --setting-items-background: #36393f !important;
  --setting-items-border-color: #595959 !important;
  --slider-track-background: #595959 !important;
  --status-bar-background: #141414 !important;
  --status-bar-border-color: #595959 !important;
  --status-bar-text-color: #aaaaaa !important;
  --suggestion-background: #2f3136 !important;
  --tab-background-active: #2f3136 !important;
  --tab-container-background: #141414 !important;
  --tab-outline-color: #595959 !important;
  --tab-switcher-background: #141414 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #141414, transparent) !important;
  --tab-text-color: #999999 !important;
  --tab-text-color-active: #aaaaaa !important;
  --tab-text-color-focused: #aaaaaa !important;
  --tab-text-color-focused-active: #aaaaaa !important;
  --tab-text-color-focused-active-current: #E6EEE7 !important;
  --tab-text-color-focused-highlighted: #319cb4 !important;
  --table-add-button-border-color: #595959 !important;
  --table-border-color: #595959 !important;
  --table-drag-handle-background-active: rgb(252, 246, 1, 0.95) !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #5dbcd2 !important;
  --table-header-border-color: #595959 !important;
  --table-header-color: #E6EEE7 !important;
  --table-selection-border-color: rgb(252, 246, 1, 0.95) !important;
  --tag-color: #319cb4 !important;
  --tag-color-hover: #319cb4 !important;
  --tertiary: #9e8aff !important;
  --text-a: #d669bc !important;
  --text-a-hover: #ec9ad9 !important;
  --text-accent: #319cb4 !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: rgba(252, 246, 1, 0.4) !important;
  --text-inline-code: #FC929E !important;
  --text-link: #99ff99 !important;
  --text-mark: transparent !important;
  --text-muted: #aaaaaa !important;
  --text-normal: #E6EEE7 !important;
  --text-on-accent: #5dbcd2 !important;
  --text-selection: #164f92 !important;
  --text-title-h1: #e3e005 !important;
  --text-title-h2: #b9adff !important;
  --text-title-h3: #52c1da !important;
  --text-title-h4: #67c073 !important;
  --text-title-h5: #de87ca !important;
  --text-title-h6: #b4b4b4 !important;
  --textHighlight: rgba(252, 246, 1, 0.4) !important;
  --titlebar-background: #141414 !important;
  --titlebar-background-focused: #222222 !important;
  --titlebar-border-color: #595959 !important;
  --titlebar-text-color: #aaaaaa !important;
  --titlebar-text-color-focused: #E6EEE7 !important;
  --vault-profile-color: #E6EEE7 !important;
  --vault-profile-color-hover: #E6EEE7 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(230, 238, 231);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(230, 238, 231);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(230, 238, 231);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(89, 89, 89);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

html body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(230, 238, 231);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(158, 138, 255);
  font-weight: 700;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration: rgb(158, 138, 255);
  text-decoration-color: rgb(158, 138, 255);
}

html body .page article p > em, em {
  color: rgb(186, 192, 79);
  outline: rgb(186, 192, 79) none 0px;
  text-decoration: rgb(186, 192, 79);
  text-decoration-color: rgb(186, 192, 79);
}

html body .page article p > i, i {
  color: rgb(186, 192, 79);
  outline: rgb(186, 192, 79) none 0px;
  text-decoration: rgb(186, 192, 79);
  text-decoration-color: rgb(186, 192, 79);
}

html body .page article p > strong, strong {
  color: rgb(158, 138, 255);
  font-weight: 700;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration: rgb(158, 138, 255);
  text-decoration-color: rgb(158, 138, 255);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(230, 238, 231);
  outline: rgb(230, 238, 231) none 0px;
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body del {
  color: rgb(230, 238, 231);
  outline: rgb(230, 238, 231) none 0px;
  text-decoration: line-through rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration: rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `html body a.external, footer a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}

html body a.internal.broken {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration: rgb(214, 105, 188);
  text-decoration-color: rgb(214, 105, 188);
}`,
    lists: `html body dd {
  color: rgb(230, 238, 231);
}

html body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html body dt {
  color: rgb(230, 238, 231);
}

html body ol > li {
  color: rgb(230, 238, 231);
}

html body ol.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body ul > li {
  color: rgb(230, 238, 231);
}

html body ul.overflow {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(214, 105, 188);
  text-decoration: rgb(214, 105, 188);
}

html body blockquote {
  background-color: rgb(34, 34, 41);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body table {
  color: rgb(230, 238, 231);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body td {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

html body th {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(137, 221, 255);
  font-weight: 700;
}

html body thead {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  border-bottom-color: rgb(89, 89, 89);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

html body pre > code, pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body figcaption {
  color: rgb(230, 238, 231);
}

html body figure {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body img {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body video {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html body .footnotes {
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

html body .transclude {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgba(252, 246, 1, 0.95);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  padding-right: 5px;
}

html body .transclude-inner {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgba(252, 246, 1, 0.95);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  padding-right: 5px;
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(170, 170, 170);
  text-decoration: line-through rgb(170, 170, 170);
  text-decoration-color: rgb(170, 170, 170);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  margin-right: 9.33333px;
  width: 13.3281px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(230, 238, 231);
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(230, 243, 85);
  border-left-color: rgb(230, 243, 85);
  border-right-color: rgb(230, 243, 85);
  border-top-color: rgb(230, 243, 85);
}

html body .callout[data-callout="abstract"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="bug"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="danger"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="example"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="failure"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="info"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="note"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="question"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="quote"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="success"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="tip"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="todo"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body .callout[data-callout="warning"] {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}`,
    search: `html body .search > .search-button {
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(230, 238, 231);
}

html body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(230, 238, 231);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 238, 231) none 0px;
  text-decoration: rgb(230, 238, 231);
  text-decoration-color: rgb(230, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(230, 238, 231);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(230, 238, 231);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(230, 238, 231);
}

html body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html body a.internal.tag-link::before {
  color: rgb(49, 156, 180);
}

html body h1 {
  color: rgb(227, 224, 5);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(185, 173, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, h2.page-title a {
  color: rgb(230, 238, 231);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(82, 193, 218);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(103, 192, 115);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(222, 135, 202);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(180, 180, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(214, 105, 188);
}`,
    scrollbars: `html body .callout {
  border-bottom-color: rgb(108, 153, 187);
  border-bottom-width: 2px;
  border-left-color: rgb(108, 153, 187);
  border-left-width: 2px;
  border-right-color: rgb(108, 153, 187);
  border-right-width: 2px;
  border-top-color: rgb(108, 153, 187);
  border-top-width: 2px;
}

html body ::-webkit-scrollbar {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}

html body ::-webkit-scrollbar-track {
  background: rgb(47, 49, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 49, 54);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(170, 170, 170);
  cursor: pointer;
  font-weight: 500;
  text-decoration: rgb(170, 170, 170);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  cursor: pointer;
  font-weight: 500;
  text-decoration: rgb(170, 170, 170);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(170, 170, 170);
  cursor: pointer;
  text-decoration: rgb(170, 170, 170);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    toc: `html body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  cursor: pointer;
}`,
    footer: `html body footer {
  background-color: rgb(20, 20, 20);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(170, 170, 170);
}

html body footer ul li a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(230, 238, 231);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
  text-decoration: rgb(170, 170, 170);
}

html body ul.section-ul {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  cursor: pointer;
}

html body .darkmode svg {
  color: rgb(170, 170, 170);
  stroke: rgb(170, 170, 170);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
  color: rgb(230, 238, 231);
}

html body .metadata {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(170, 170, 170);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(20, 20, 20);
}

html body .page-header h2.page-title {
  color: rgb(230, 238, 231);
}

html body abbr {
  color: rgb(230, 238, 231);
  text-decoration: underline dotted rgb(230, 238, 231);
}

html body details {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body input[type=text] {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(230, 238, 231);
  border-left-color: rgb(230, 238, 231);
  border-right-color: rgb(230, 238, 231);
  border-top-color: rgb(230, 238, 231);
}

html body sub {
  color: rgb(230, 238, 231);
  font-size: 12.5px;
}

html body summary {
  color: rgb(230, 238, 231);
}

html body sup {
  color: rgb(230, 238, 231);
  font-size: 12.5px;
}`,
  },
  light: {},
};
