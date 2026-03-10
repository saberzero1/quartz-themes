import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "purple-aurora", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #364ca7 !important;
  --background-modifier-cover: #1b0f29 !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: #291c45 !important;
  --background-primary-alt: #2C0C46 !important;
  --background-secondary: #221439 !important;
  --background-secondary-alt: #15082b !important;
  --bases-cards-background: #291c45 !important;
  --bases-cards-cover-background: #2C0C46 !important;
  --bases-cards-shadow: 0 0 0 1px #364ca7 !important;
  --bases-embed-border-color: #364ca7 !important;
  --bases-group-heading-property-color: #77cecf !important;
  --bases-table-border-color: #364ca7 !important;
  --bases-table-cell-background-active: #291c45 !important;
  --bases-table-cell-background-disabled: #2C0C46 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #430D82 !important;
  --bases-table-group-background: #2C0C46 !important;
  --bases-table-header-background: #291c45 !important;
  --bases-table-header-color: #77cecf !important;
  --bases-table-summary-background: #291c45 !important;
  --blockquote-border-color: #430D82 !important;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --canvas-background: #291c45 !important;
  --canvas-card-label-color: #5a9a76 !important;
  --caret-color: #8ff4dd !important;
  --checkbox-border-color: #5a9a76 !important;
  --checkbox-border-color-hover: #77cecf !important;
  --checkbox-color: #430D82 !important;
  --checkbox-color-hover: #4d3ca6 !important;
  --checkbox-marker-color: #291c45 !important;
  --checklist-done-color: #77cecf !important;
  --code-background: #2C0C46 !important;
  --code-border-color: #364ca7 !important;
  --code-comment: #5a9a76 !important;
  --code-normal: #8ff4dd !important;
  --code-punctuation: #77cecf !important;
  --collapse-icon-color: #5a9a76 !important;
  --collapse-icon-color-collapsed: #588ec7 !important;
  --dark: #8ff4dd !important;
  --darkgray: #8ff4dd !important;
  --divider-color: #364ca7 !important;
  --divider-color-hover: #430D82 !important;
  --dropdown-background: #2a2a2a !important;
  --dropdown-background-hover: #303030 !important;
  --embed-block-shadow-hover: 0 0 0 1px #364ca7, inset 0 0 0 1px #364ca7 !important;
  --embed-border-start: 2px solid #430D82 !important;
  --file-header-background: #291c45 !important;
  --file-header-background-focused: #291c45 !important;
  --flair-background: #2a2a2a !important;
  --flair-color: #8ff4dd !important;
  --footnote-divider-color: #364ca7 !important;
  --footnote-id-color: #77cecf !important;
  --footnote-id-color-no-occurrences: #5a9a76 !important;
  --graph-node: #77cecf !important;
  --graph-node-focused: #588ec7 !important;
  --graph-node-unresolved: #5a9a76 !important;
  --graph-text: #8ff4dd !important;
  --gray: #77cecf !important;
  --heading-formatting: #5a9a76 !important;
  --highlight: rgba(101, 182, 126, 0.4) !important;
  --hr-color: #364ca7 !important;
  --icon-color: #77cecf !important;
  --icon-color-active: #588ec7 !important;
  --icon-color-focused: #8ff4dd !important;
  --icon-color-hover: #77cecf !important;
  --input-date-separator: #5a9a76 !important;
  --input-placeholder-color: #5a9a76 !important;
  --interactive-accent: #430D82 !important;
  --interactive-accent-hover: #4d3ca6 !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #303030 !important;
  --interactive-normal: #2a2a2a !important;
  --interactive-success: #5a9a76 !important;
  --light: #291c45 !important;
  --lightgray: #221439 !important;
  --link-color: #588ec7 !important;
  --link-color-hover: #5a92b2 !important;
  --link-external-color: #588ec7 !important;
  --link-external-color-hover: #5a92b2 !important;
  --link-unresolved-color: #588ec7 !important;
  --list-marker-color: #5a9a76 !important;
  --list-marker-color-collapsed: #588ec7 !important;
  --list-marker-color-hover: #77cecf !important;
  --menu-background: #221439 !important;
  --metadata-border-color: #364ca7 !important;
  --metadata-divider-color: #364ca7 !important;
  --metadata-input-text-color: #8ff4dd !important;
  --metadata-label-text-color: #77cecf !important;
  --metadata-label-text-color-hover: #77cecf !important;
  --modal-background: #291c45 !important;
  --nav-collapse-icon-color: #5a9a76 !important;
  --nav-collapse-icon-color-collapsed: #5a9a76 !important;
  --nav-heading-color: #8ff4dd !important;
  --nav-heading-color-collapsed: #5a9a76 !important;
  --nav-heading-color-collapsed-hover: #77cecf !important;
  --nav-heading-color-hover: #8ff4dd !important;
  --nav-item-color: #77cecf !important;
  --nav-item-color-active: #8ff4dd !important;
  --nav-item-color-highlighted: #588ec7 !important;
  --nav-item-color-hover: #8ff4dd !important;
  --nav-item-color-selected: #8ff4dd !important;
  --nav-tag-color: #5a9a76 !important;
  --nav-tag-color-active: #77cecf !important;
  --nav-tag-color-hover: #77cecf !important;
  --pdf-background: #291c45 !important;
  --pdf-page-background: #291c45 !important;
  --pdf-shadow: 0 0 0 1px #364ca7 !important;
  --pdf-sidebar-background: #291c45 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #364ca7 !important;
  --pill-border-color: #364ca7 !important;
  --pill-color: #77cecf !important;
  --pill-color-hover: #8ff4dd !important;
  --pill-color-remove: #5a9a76 !important;
  --pill-color-remove-hover: #588ec7 !important;
  --prompt-background: #291c45 !important;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent)) !important;
  --ribbon-background: #221439 !important;
  --ribbon-background-collapsed: #291c45 !important;
  --search-clear-button-color: #77cecf !important;
  --search-icon-color: #77cecf !important;
  --search-result-background: #291c45 !important;
  --secondary: #588ec7 !important;
  --setting-group-heading-color: #8ff4dd !important;
  --setting-items-background: #2C0C46 !important;
  --setting-items-border-color: #364ca7 !important;
  --slider-track-background: #364ca7 !important;
  --status-bar-background: #221439 !important;
  --status-bar-border-color: #364ca7 !important;
  --status-bar-text-color: #77cecf !important;
  --suggestion-background: #291c45 !important;
  --tab-background-active: #291c45 !important;
  --tab-container-background: #221439 !important;
  --tab-outline-color: #364ca7 !important;
  --tab-switcher-background: #221439 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #221439, transparent) !important;
  --tab-text-color: #5a9a76 !important;
  --tab-text-color-active: #77cecf !important;
  --tab-text-color-focused: #77cecf !important;
  --tab-text-color-focused-active: #77cecf !important;
  --tab-text-color-focused-active-current: #8ff4dd !important;
  --tab-text-color-focused-highlighted: #588ec7 !important;
  --table-add-button-border-color: #364ca7 !important;
  --table-border-color: #364ca7 !important;
  --table-drag-handle-background-active: #430D82 !important;
  --table-drag-handle-color: #5a9a76 !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #364ca7 !important;
  --table-header-color: #8ff4dd !important;
  --table-selection-border-color: #430D82 !important;
  --tag-color: #588ec7 !important;
  --tag-color-hover: #588ec7 !important;
  --tertiary: #5a92b2 !important;
  --text-accent: #588ec7 !important;
  --text-accent-hover: #5a92b2 !important;
  --text-error: #ff3333 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #5a9a76 !important;
  --text-highlight-bg: rgba(101, 182, 126, 0.4) !important;
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4) !important;
  --text-muted: #77cecf !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #8ff4dd !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(47, 68, 156, 0.99) !important;
  --textHighlight: rgba(101, 182, 126, 0.4) !important;
  --titlebar-background: #221439 !important;
  --titlebar-background-focused: #15082b !important;
  --titlebar-border-color: #364ca7 !important;
  --titlebar-text-color: #77cecf !important;
  --titlebar-text-color-focused: #8ff4dd !important;
  --vault-profile-color: #8ff4dd !important;
  --vault-profile-color-hover: #8ff4dd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 20, 57);
  color: rgb(143, 244, 221);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(41, 28, 69);
  color: rgb(143, 244, 221);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 20, 57);
  color: rgb(143, 244, 221);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 76, 167);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 20, 57);
  border-left-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

html body div#quartz-root {
  background-color: rgb(41, 28, 69);
  color: rgb(143, 244, 221);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body .page article p > em, html em {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body .page article p > i, html i {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body .page article p > strong, html strong {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body .text-highlight {
  background-color: rgba(101, 182, 126, 0.4);
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body del {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: line-through rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body p {
  color: rgb(119, 206, 207);
  outline: rgb(119, 206, 207) none 0px;
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}`,
    links: `html body a.external, html footer a {
  color: rgb(88, 142, 199);
  outline: rgb(88, 142, 199) none 0px;
  text-decoration: underline rgb(88, 142, 199);
  text-decoration-color: rgb(88, 142, 199);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(88, 142, 199);
  outline: rgb(88, 142, 199) none 0px;
  text-decoration: underline rgb(88, 142, 199);
  text-decoration-color: rgb(88, 142, 199);
}

html body a.internal.broken {
  color: rgb(88, 142, 199);
  outline: rgb(88, 142, 199) none 0px;
}`,
    lists: `html body dd {
  color: rgb(143, 244, 221);
}

html body dt {
  color: rgb(143, 244, 221);
}

html body ol > li {
  color: rgb(143, 244, 221);
}

html body ol.overflow {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body ul > li {
  color: rgb(143, 244, 221);
}

html body ul.overflow {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(90, 154, 118);
  text-decoration: rgb(90, 154, 118);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body table {
  color: rgb(143, 244, 221);
}

html body td {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

html body th {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}`,
    code: `html body code {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
}

html body pre:has(> code) {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
}`,
    images: `html body audio {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body figcaption {
  color: rgb(143, 244, 221);
}

html body figure {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body img {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body video {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
}

html body .footnotes {
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

html body .transclude {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(67, 13, 130);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body .transclude-inner {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(67, 13, 130);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(119, 206, 207);
  text-decoration: line-through rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(90, 154, 118);
  border-left-color: rgb(90, 154, 118);
  border-right-color: rgb(90, 154, 118);
  border-top-color: rgb(90, 154, 118);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

html body .search > .search-container > .search-space {
  background-color: rgb(41, 28, 69);
}

html body .search > .search-container > .search-space > * {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(143, 244, 221);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(143, 244, 221);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(143, 244, 221);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 20, 57);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(143, 244, 221);
}

html body a.internal.tag-link::before {
  color: rgb(88, 142, 199);
}

html body h1 {
  color: rgb(143, 244, 221);
}

html body h2 {
  color: rgb(143, 244, 221);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(143, 244, 221);
}

html body h3 {
  color: rgb(143, 244, 221);
}

html body h4 {
  color: rgb(143, 244, 221);
}

html body h5 {
  color: rgb(143, 244, 221);
}

html body h6 {
  color: rgb(125, 242, 215);
}

html body hr {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

html body ::-webkit-scrollbar-track {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}`,
    footer: `html body footer {
  background-color: rgb(34, 20, 57);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(119, 206, 207);
}

html body footer ul li a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(143, 244, 221);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 206, 207);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body li.section-li > .section .meta {
  color: rgb(119, 206, 207);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

html body ul.section-ul {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

html body .darkmode svg {
  color: rgb(119, 206, 207);
  stroke: rgb(119, 206, 207);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

html body .breadcrumb-element p {
  color: rgb(90, 154, 118);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

html body .metadata {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(119, 206, 207);
}

html body .metadata-properties {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

html body .navigation-progress {
  background-color: rgb(34, 20, 57);
}

html body .page-header h2.page-title {
  color: rgb(143, 244, 221);
}

html body abbr {
  color: rgb(143, 244, 221);
  text-decoration: underline dotted rgb(143, 244, 221);
}

html body details {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body input[type=text] {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

html body kbd {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

html body progress {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

html body sub {
  color: rgb(143, 244, 221);
}

html body summary {
  color: rgb(143, 244, 221);
}

html body sup {
  color: rgb(143, 244, 221);
}`,
  },
  light: {},
};
