import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "cybertron",
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
  --bases-table-cell-shadow-focus: 0 0 0 2px #fe8019 !important;
  --bases-table-group-background: #36393f !important;
  --bases-table-header-background: #2f3136 !important;
  --bases-table-header-color: #aaaaaa !important;
  --bases-table-row-background-hover: #222222 !important;
  --bases-table-summary-background: #2f3136 !important;
  --blockquote-border-color: rgb(130, 114, 208) !important;
  --blockquote-color: rgb(93, 188, 210) !important;
  --bold-color: rgb(158, 138, 255) !important;
  --bold-weight: 700 !important;
  --callout-background-alpha: 20%;
  --callout-padding: 4px;
  --callout-radius: 8px;
  --canvas-background: #2f3136 !important;
  --canvas-card-label-color: #999999 !important;
  --caret-color: #5dbcd2 !important;
  --checkbox-border-color: #999999 !important;
  --checkbox-border-color-hover: #aaaaaa !important;
  --checkbox-color: #fe8019 !important;
  --checkbox-color-hover: #9e8aff !important;
  --checkbox-marker-color: #2f3136 !important;
  --checklist-done-color: #aaaaaa !important;
  --code-background: rgb(54, 57, 63) !important;
  --code-border-color: #595959 !important;
  --code-comment: #999999 !important;
  --code-normal: rgb(170, 170, 170) !important;
  --code-punctuation: rgb(49, 156, 180) !important;
  --code-size: 13.125px !important;
  --code-tag: rgb(49, 156, 180) !important;
  --codeFont: "JetBrains Mono", Menlo, SFMono-Regular, Consolas,
    "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #999999 !important;
  --collapse-icon-color-collapsed: #319cb4 !important;
  --dark: #5dbcd2 !important;
  --darkgray: #5dbcd2 !important;
  --divider-color: #595959 !important;
  --divider-color-hover: #fe8019 !important;
  --dropdown-background-hover: #36393f !important;
  --embed-block-shadow-hover: 0 0 0 1px #595959, inset 0 0 0 1px #595959 !important;
  --embed-border-start: 2px solid #fe8019 !important;
  --file-header-background: #2f3136 !important;
  --file-header-background-focused: #2f3136 !important;
  --flair-color: #5dbcd2 !important;
  --font-monospace: "JetBrains Mono", Menlo, SFMono-Regular, Consolas,
    "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", Menlo, SFMono-Regular, Consolas,
    "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace !important;
  --footnote-divider-color: #595959 !important;
  --footnote-id-color: #aaaaaa !important;
  --footnote-id-color-no-occurrences: #999999 !important;
  --graph-line: rgb(38, 121, 140) !important;
  --graph-node: rgb(252, 246, 1) !important;
  --graph-node-attachment: rgb(214, 105, 188) !important;
  --graph-node-focused: rgb(38, 121, 140) !important;
  --graph-node-tag: rgb(93, 188, 210) !important;
  --graph-node-unresolved: rgb(158, 138, 255) !important;
  --graph-text: rgb(204, 204, 204) !important;
  --gray: #aaaaaa !important;
  --h1-color: #c7c400 !important;
  --h2-color: #b9adff !important;
  --h3-color: #52c1da !important;
  --h4-color: #67c073 !important;
  --h5-color: #de87ca !important;
  --h6-color: #b4b4b4 !important;
  --heading-formatting: #999999 !important;
  --highlight: rgba(252, 246, 1, 0.4) !important;
  --hr-color: #5dbcd2 !important;
  --icon-color: #aaaaaa !important;
  --icon-color-active: #319cb4 !important;
  --icon-color-focused: #5dbcd2 !important;
  --icon-color-hover: #aaaaaa !important;
  --inline-title-color: rgb(93, 188, 210) !important;
  --input-date-separator: #999999 !important;
  --input-placeholder-color: #999999 !important;
  --interactive-accent: #fe8019 !important;
  --interactive-accent-hover: #9e8aff !important;
  --interactive-accent-muted: rgba(252, 246, 1, 0.55) !important;
  --interactive-before: #5e6565 !important;
  --interactive-hover: #36393f !important;
  --italic-color: rgb(186, 192, 79) !important;
  --light: #2f3136 !important;
  --lightgray: #141414 !important;
  --link-color: rgb(214, 105, 188) !important;
  --link-external-color: rgb(214, 105, 188) !important;
  --link-external-color-hover: rgb(236, 154, 217) !important;
  --link-unresolved-color: #319cb4 !important;
  --list-marker-color: #999999 !important;
  --list-marker-color-collapsed: #319cb4 !important;
  --list-marker-color-hover: #aaaaaa !important;
  --menu-background: #141414 !important;
  --metadata-border-color: #595959 !important;
  --metadata-divider-color: #595959 !important;
  --metadata-input-text-color: #5dbcd2 !important;
  --metadata-label-text-color: #aaaaaa !important;
  --metadata-label-text-color-hover: #aaaaaa !important;
  --modal-background: #2f3136 !important;
  --nav-collapse-icon-color: #999999 !important;
  --nav-collapse-icon-color-collapsed: #999999 !important;
  --nav-heading-color: #5dbcd2 !important;
  --nav-heading-color-collapsed: #999999 !important;
  --nav-heading-color-collapsed-hover: #aaaaaa !important;
  --nav-heading-color-hover: #5dbcd2 !important;
  --nav-item-color: #aaaaaa !important;
  --nav-item-color-active: #5dbcd2 !important;
  --nav-item-color-highlighted: #319cb4 !important;
  --nav-item-color-hover: #5dbcd2 !important;
  --nav-item-color-selected: #5dbcd2 !important;
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
  --pill-color-hover: #5dbcd2 !important;
  --pill-color-remove: #999999 !important;
  --pill-color-remove-hover: #319cb4 !important;
  --pre-code: rgb(64, 68, 77) !important;
  --prompt-background: #2f3136 !important;
  --ribbon-background: rgb(20, 20, 20) !important;
  --ribbon-background-collapsed: rgb(20, 20, 20) !important;
  --scrollbar-bg: rgba(20, 20, 20, 0) !important;
  --scrollbar-thumb-bg: #595959 !important;
  --search-clear-button-color: #aaaaaa !important;
  --search-icon-color: #aaaaaa !important;
  --search-result-background: #2f3136 !important;
  --secondary: #319cb4 !important;
  --setting-group-heading-color: #5dbcd2 !important;
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
  --tab-text-color-focused-active-current: #5dbcd2 !important;
  --tab-text-color-focused-highlighted: #319cb4 !important;
  --table-add-button-border-color: #595959 !important;
  --table-background: #222222 !important;
  --table-border-color: #595959 !important;
  --table-column-alt-background: #222222 !important;
  --table-drag-handle-background-active: #fe8019 !important;
  --table-drag-handle-color: #999999 !important;
  --table-drag-handle-color-active: #5dbcd2 !important;
  --table-header-background: #222222 !important;
  --table-header-border-color: #595959 !important;
  --table-header-color: #5dbcd2 !important;
  --table-header-weight: 800 !important;
  --table-row-alt-background: #222222 !important;
  --table-row-alt-background-hover: #222222 !important;
  --table-row-background-hover: #222222 !important;
  --table-selection-border-color: #fe8019 !important;
  --tag-color: rgb(252, 246, 1) !important;
  --tag-color-hover: #319cb4 !important;
  --tertiary: #9e8aff !important;
  --text-accent: #319cb4 !important;
  --text-error: rgb(244, 105, 188) !important;
  --text-faint: #999999 !important;
  --text-highlight-bg: rgba(252, 246, 1, 0.4) !important;
  --text-mark: transparent !important;
  --text-muted: #aaaaaa !important;
  --text-normal: #5dbcd2 !important;
  --text-on-accent: #5dbcd2 !important;
  --text-selection: #164f92 !important;
  --textHighlight: rgba(252, 246, 1, 0.4) !important;
  --titlebar-background: #141414 !important;
  --titlebar-background-focused: #222222 !important;
  --titlebar-border-color: #595959 !important;
  --titlebar-text-color: #aaaaaa !important;
  --titlebar-text-color-focused: #5dbcd2 !important;
  --vault-profile-color: #5dbcd2 !important;
  --vault-profile-color-hover: #5dbcd2 !important;
  --window-border: 1px solid #222222 !important;
  --window-border-color: #222222 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(20, 20, 20);
  color: rgb(93, 188, 210);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(47, 49, 54);
  color: rgb(93, 188, 210);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(34, 34, 34);
}

html body .bases-table thead th {
  border-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
  font-weight: 800;
}

html body .canvas-node {
  border-color: rgb(93, 188, 210);
}

html body .canvas-node-content {
  color: rgb(93, 188, 210);
}

html body .canvas-node-file {
  color: rgb(93, 188, 210);
}

html body .canvas-node-group {
  border-color: rgb(93, 188, 210);
}

html body .canvas-sidebar {
  background-color: rgb(20, 20, 20);
  border-color: rgb(93, 188, 210);
}

html body .note-properties {
  border-color: rgb(89, 89, 89);
}

html body .note-properties-key {
  color: rgb(170, 170, 170);
}

html body .note-properties-row {
  border-color: rgb(170, 170, 170);
}

html body .note-properties-tags {
  color: rgb(252, 246, 1);
}

html body .note-properties-value {
  color: rgb(170, 170, 170);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(20, 20, 20);
  color: rgb(93, 188, 210);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(89, 89, 89);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(20, 20, 20);
  border-left-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

html body div#quartz-root {
  background-color: rgb(47, 49, 54);
  color: rgb(93, 188, 210);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(158, 138, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration-color: rgb(158, 138, 255);
}

html body .page article p > em, html em {
  color: rgb(186, 192, 79);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 192, 79) none 0px;
  text-decoration-color: rgb(186, 192, 79);
}

html body .page article p > i, html i {
  color: rgb(186, 192, 79);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(186, 192, 79) none 0px;
  text-decoration-color: rgb(186, 192, 79);
}

html body .page article p > strong, html strong {
  color: rgb(158, 138, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(158, 138, 255) none 0px;
  text-decoration-color: rgb(158, 138, 255);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(108, 228, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 500;
  outline: rgb(108, 228, 255) none 0px;
  text-decoration-color: rgb(108, 228, 255);
}

html body del {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 188, 210) none 0px;
  text-decoration-color: rgb(93, 188, 210);
}

html body h1.article-title {
  color: rgb(93, 188, 210);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(153, 153, 153);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(254, 128, 25);
  border-color: rgb(254, 128, 25);
}

html body p {
  color: rgb(170, 170, 170);
  outline: rgb(170, 170, 170) none 0px;
  text-decoration-color: rgb(170, 170, 170);
}`,
    links: `html body a.external, html footer a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration-color: rgb(214, 105, 188);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 105, 188);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(214, 105, 188) none 0px;
  text-decoration-color: rgb(214, 105, 188);
}

html body a.internal.broken {
  color: rgb(49, 156, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(49, 156, 180) none 0px;
}`,
    lists: `html body dd {
  color: rgb(93, 188, 210);
}

html body dt {
  color: rgb(93, 188, 210);
}

html body ol > li {
  color: rgb(93, 188, 210);
}

html body ol.overflow {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body ul > li {
  color: rgb(93, 188, 210);
}

html body ul.overflow {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(153, 153, 153);
}

html body blockquote {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body table {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(34, 34, 34);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(34, 34, 34);
}

html body td {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

html body th {
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(89, 89, 89);
  border-bottom-style: solid;
  border-bottom-width: 4px;
}

html body tr {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(89, 89, 89);
}`,
    code: `html body code {
  background-color: rgb(64, 68, 77);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
  color: rgb(93, 188, 210);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}

html body pre:has(> code) {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
}`,
    images: `html body audio {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body figcaption {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: 15px;
}

html body figure {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  margin-bottom: 15px;
  margin-top: 15px;
}

html body img {
  border-bottom-color: rgb(199, 196, 0);
  border-left-color: rgb(199, 196, 0);
  border-right-color: rgb(199, 196, 0);
  border-top-color: rgb(199, 196, 0);
}

html body video {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
}

html body .footnotes {
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

html body .transclude {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(254, 128, 25);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body .transclude-inner {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(93, 188, 210);
  text-decoration-color: rgb(93, 188, 210);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-style: solid;
  border-left-width: 2px;
  border-right-style: solid;
  border-right-width: 2px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-style: solid;
  border-top-width: 2px;
}

html body .callout > .callout-content {
  padding-bottom: 4px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 20px;
}

html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(47, 49, 54);
  border-bottom-color: rgb(89, 89, 89);
  border-left-color: rgb(89, 89, 89);
  border-right-color: rgb(89, 89, 89);
  border-top-color: rgb(89, 89, 89);
  color: rgb(93, 188, 210);
}

html body .search > .search-container > .search-space {
  background-color: rgb(47, 49, 54);
  box-shadow: rgba(0, 0, 0, 0.2) 0px 20px 30px 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(93, 188, 210);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(93, 188, 210) none 0px;
  text-decoration-color: rgb(93, 188, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(93, 188, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(93, 188, 210);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(93, 188, 210);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(20, 20, 20);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(93, 188, 210);
}

html body a.internal.tag-link::before {
  color: rgb(252, 246, 1);
}

html body h1 {
  color: rgb(199, 196, 0);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(185, 173, 255);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(93, 188, 210);
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
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
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
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
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
  font-weight: 500;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(170, 170, 170);
  font-weight: 500;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(93, 188, 210);
}

html body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
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
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(93, 188, 210);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(170, 170, 170);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body li.section-li > .section .meta {
  color: rgb(170, 170, 170);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(170, 170, 170);
}

html body ul.section-ul {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
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
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
  color: rgb(93, 188, 210);
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
  color: rgb(93, 188, 210);
}

html body abbr {
  color: rgb(93, 188, 210);
}

html body details {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
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
  border-bottom-color: rgb(170, 170, 170);
  border-left-color: rgb(170, 170, 170);
  border-right-color: rgb(170, 170, 170);
  border-top-color: rgb(170, 170, 170);
  color: rgb(170, 170, 170);
  font-family: "??", "JetBrains Mono", Menlo, SFMono-Regular, Consolas, "Fira Coda", SFMono-Regular, "Roboto Mono", "Source Code Pro", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html body progress {
  border-bottom-color: rgb(93, 188, 210);
  border-left-color: rgb(93, 188, 210);
  border-right-color: rgb(93, 188, 210);
  border-top-color: rgb(93, 188, 210);
}

html body sub {
  color: rgb(93, 188, 210);
}

html body summary {
  color: rgb(93, 188, 210);
}

html body sup {
  color: rgb(93, 188, 210);
}

html body ul.tags > li {
  color: rgb(252, 246, 1);
}`,
  },
  light: {},
};
