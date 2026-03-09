import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "purple-aurora", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #364ca7;
  --background-modifier-cover: #1b0f29;
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #197300;
  --background-primary: #291c45;
  --background-primary-alt: #2C0C46;
  --background-secondary: #221439;
  --background-secondary-alt: #15082b;
  --bases-cards-background: #291c45;
  --bases-cards-cover-background: #2C0C46;
  --bases-cards-shadow: 0 0 0 1px #364ca7;
  --bases-embed-border-color: #364ca7;
  --bases-group-heading-property-color: #77cecf;
  --bases-table-border-color: #364ca7;
  --bases-table-cell-background-active: #291c45;
  --bases-table-cell-background-disabled: #2C0C46;
  --bases-table-cell-shadow-focus: 0 0 0 2px #430D82;
  --bases-table-group-background: #2C0C46;
  --bases-table-header-background: #291c45;
  --bases-table-header-color: #77cecf;
  --bases-table-summary-background: #291c45;
  --blockquote-border-color: #430D82;
  --blur-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --canvas-background: #291c45;
  --canvas-card-label-color: #5a9a76;
  --caret-color: #8ff4dd;
  --checkbox-border-color: #5a9a76;
  --checkbox-border-color-hover: #77cecf;
  --checkbox-color: #430D82;
  --checkbox-color-hover: #4d3ca6;
  --checkbox-marker-color: #291c45;
  --checklist-done-color: #77cecf;
  --code-background: #2C0C46;
  --code-border-color: #364ca7;
  --code-comment: #5a9a76;
  --code-normal: #8ff4dd;
  --code-punctuation: #77cecf;
  --collapse-icon-color: #5a9a76;
  --collapse-icon-color-collapsed: #588ec7;
  --divider-color: #364ca7;
  --divider-color-hover: #430D82;
  --dropdown-background: #2a2a2a;
  --dropdown-background-hover: #303030;
  --embed-block-shadow-hover: 0 0 0 1px #364ca7, inset 0 0 0 1px #364ca7;
  --embed-border-start: 2px solid #430D82;
  --file-header-background: #291c45;
  --file-header-background-focused: #291c45;
  --flair-background: #2a2a2a;
  --flair-color: #8ff4dd;
  --footnote-divider-color: #364ca7;
  --footnote-id-color: #77cecf;
  --footnote-id-color-no-occurrences: #5a9a76;
  --graph-node: #77cecf;
  --graph-node-focused: #588ec7;
  --graph-node-unresolved: #5a9a76;
  --graph-text: #8ff4dd;
  --heading-formatting: #5a9a76;
  --hr-color: #364ca7;
  --icon-color: #77cecf;
  --icon-color-active: #588ec7;
  --icon-color-focused: #8ff4dd;
  --icon-color-hover: #77cecf;
  --input-date-separator: #5a9a76;
  --input-placeholder-color: #5a9a76;
  --interactive-accent: #430D82;
  --interactive-accent-hover: #4d3ca6;
  --interactive-accent-rgb: 72, 54, 153;
  --interactive-hover: #303030;
  --interactive-normal: #2a2a2a;
  --interactive-success: #5a9a76;
  --link-color: #588ec7;
  --link-color-hover: #5a92b2;
  --link-external-color: #588ec7;
  --link-external-color-hover: #5a92b2;
  --link-unresolved-color: #588ec7;
  --list-marker-color: #5a9a76;
  --list-marker-color-collapsed: #588ec7;
  --list-marker-color-hover: #77cecf;
  --menu-background: #221439;
  --metadata-border-color: #364ca7;
  --metadata-divider-color: #364ca7;
  --metadata-input-text-color: #8ff4dd;
  --metadata-label-text-color: #77cecf;
  --metadata-label-text-color-hover: #77cecf;
  --modal-background: #291c45;
  --nav-collapse-icon-color: #5a9a76;
  --nav-collapse-icon-color-collapsed: #5a9a76;
  --nav-heading-color: #8ff4dd;
  --nav-heading-color-collapsed: #5a9a76;
  --nav-heading-color-collapsed-hover: #77cecf;
  --nav-heading-color-hover: #8ff4dd;
  --nav-item-color: #77cecf;
  --nav-item-color-active: #8ff4dd;
  --nav-item-color-highlighted: #588ec7;
  --nav-item-color-hover: #8ff4dd;
  --nav-item-color-selected: #8ff4dd;
  --nav-tag-color: #5a9a76;
  --nav-tag-color-active: #77cecf;
  --nav-tag-color-hover: #77cecf;
  --pdf-background: #291c45;
  --pdf-page-background: #291c45;
  --pdf-shadow: 0 0 0 1px #364ca7;
  --pdf-sidebar-background: #291c45;
  --pdf-thumbnail-shadow: 0 0 0 1px #364ca7;
  --pill-border-color: #364ca7;
  --pill-color: #77cecf;
  --pill-color-hover: #8ff4dd;
  --pill-color-remove: #5a9a76;
  --pill-color-remove-hover: #588ec7;
  --prompt-background: #291c45;
  --raised-background: color-mix(in srgb, #2a2a2a 65%, transparent) linear-gradient(#2a2a2a, color-mix(in srgb, #2a2a2a 65%, transparent));
  --ribbon-background: #221439;
  --ribbon-background-collapsed: #291c45;
  --search-clear-button-color: #77cecf;
  --search-icon-color: #77cecf;
  --search-result-background: #291c45;
  --setting-group-heading-color: #8ff4dd;
  --setting-items-background: #2C0C46;
  --setting-items-border-color: #364ca7;
  --slider-track-background: #364ca7;
  --status-bar-background: #221439;
  --status-bar-border-color: #364ca7;
  --status-bar-text-color: #77cecf;
  --suggestion-background: #291c45;
  --tab-background-active: #291c45;
  --tab-container-background: #221439;
  --tab-outline-color: #364ca7;
  --tab-switcher-background: #221439;
  --tab-switcher-menubar-background: linear-gradient(to top, #221439, transparent);
  --tab-text-color: #5a9a76;
  --tab-text-color-active: #77cecf;
  --tab-text-color-focused: #77cecf;
  --tab-text-color-focused-active: #77cecf;
  --tab-text-color-focused-active-current: #8ff4dd;
  --tab-text-color-focused-highlighted: #588ec7;
  --table-add-button-border-color: #364ca7;
  --table-border-color: #364ca7;
  --table-drag-handle-background-active: #430D82;
  --table-drag-handle-color: #5a9a76;
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #364ca7;
  --table-header-color: #8ff4dd;
  --table-selection-border-color: #430D82;
  --tag-color: #588ec7;
  --tag-color-hover: #588ec7;
  --text-accent: #588ec7;
  --text-accent-hover: #5a92b2;
  --text-error: #ff3333;
  --text-error-hover: #990000;
  --text-faint: #5a9a76;
  --text-highlight-bg: rgba(101, 182, 126, 0.4);
  --text-highlight-bg-active: rgba(255, 128, 0, 0.4);
  --text-muted: #77cecf;
  --text-muted-rgb: 153, 153, 153;
  --text-normal: #8ff4dd;
  --text-on-accent: #dcddde;
  --text-selection: rgba(47, 68, 156, 0.99);
  --titlebar-background: #221439;
  --titlebar-background-focused: #15082b;
  --titlebar-border-color: #364ca7;
  --titlebar-text-color: #77cecf;
  --titlebar-text-color-focused: #8ff4dd;
  --vault-profile-color: #8ff4dd;
  --vault-profile-color-hover: #8ff4dd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 20, 57);
  color: rgb(143, 244, 221);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(41, 28, 69);
  color: rgb(143, 244, 221);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 20, 57);
  color: rgb(143, 244, 221);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(54, 76, 167);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 20, 57);
  border-left-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

body div#quartz-root {
  background-color: rgb(41, 28, 69);
  color: rgb(143, 244, 221);
}`,
    typography: `body .page article p > b, b {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body .page article p > em, em {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body .page article p > i, i {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body .page article p > strong, strong {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body .text-highlight {
  background-color: rgba(101, 182, 126, 0.4);
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body del {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: line-through rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body p {
  color: rgb(119, 206, 207);
  outline: rgb(119, 206, 207) none 0px;
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}`,
    links: `body a.external, footer a {
  color: rgb(88, 142, 199);
  outline: rgb(88, 142, 199) none 0px;
  text-decoration: underline rgb(88, 142, 199);
  text-decoration-color: rgb(88, 142, 199);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(88, 142, 199);
  outline: rgb(88, 142, 199) none 0px;
  text-decoration: underline rgb(88, 142, 199);
  text-decoration-color: rgb(88, 142, 199);
}

body a.internal.broken {
  color: rgb(88, 142, 199);
  outline: rgb(88, 142, 199) none 0px;
}`,
    lists: `body dd {
  color: rgb(143, 244, 221);
}

body dt {
  color: rgb(143, 244, 221);
}

body ol > li {
  color: rgb(143, 244, 221);
}

body ol.overflow {
  background-color: rgb(41, 28, 69);
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body ul > li {
  color: rgb(143, 244, 221);
}

body ul.overflow {
  background-color: rgb(41, 28, 69);
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(90, 154, 118);
  text-decoration: rgb(90, 154, 118);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body table {
  color: rgb(143, 244, 221);
}

body td {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

body th {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}`,
    code: `body code {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
}

body pre:has(> code) {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
}`,
    images: `body audio {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body figcaption {
  color: rgb(143, 244, 221);
}

body figure {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body img {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body video {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
}

body .footnotes {
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

body .transclude {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(67, 13, 130);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body .transclude-inner {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(67, 13, 130);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(119, 206, 207);
  text-decoration: line-through rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body input[type=checkbox] {
  border-bottom-color: rgb(90, 154, 118);
  border-left-color: rgb(90, 154, 118);
  border-right-color: rgb(90, 154, 118);
  border-top-color: rgb(90, 154, 118);
}

body li.task-list-item[data-task='!'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='*'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='-'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='/'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='>'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='?'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='I'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='S'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='b'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='c'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='d'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='f'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='i'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='k'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='l'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='p'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='u'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}

body li.task-list-item[data-task='w'] {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
  text-decoration-color: rgb(119, 206, 207);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(143, 244, 221);
}

body .search > .search-container > .search-space {
  background-color: rgb(41, 28, 69);
}

body .search > .search-container > .search-space > * {
  color: rgb(143, 244, 221);
  outline: rgb(143, 244, 221) none 0px;
  text-decoration: rgb(143, 244, 221);
  text-decoration-color: rgb(143, 244, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(143, 244, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(143, 244, 221);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(143, 244, 221);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 20, 57);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(143, 244, 221);
}

body a.internal.tag-link::before {
  color: rgb(88, 142, 199);
}

body h1 {
  color: rgb(143, 244, 221);
}

body h2 {
  color: rgb(143, 244, 221);
}

body h2.page-title, h2.page-title a {
  color: rgb(143, 244, 221);
}

body h3 {
  color: rgb(143, 244, 221);
}

body h4 {
  color: rgb(143, 244, 221);
}

body h5 {
  color: rgb(143, 244, 221);
}

body h6 {
  color: rgb(125, 242, 215);
}

body hr {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

body ::-webkit-scrollbar-corner {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}

body ::-webkit-scrollbar-track {
  background: rgb(41, 28, 69) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 28, 69);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}`,
    footer: `body footer {
  background-color: rgb(34, 20, 57);
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(119, 206, 207);
}

body footer ul li a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(143, 244, 221);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(119, 206, 207);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body li.section-li > .section .meta {
  color: rgb(119, 206, 207);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(119, 206, 207);
  text-decoration: rgb(119, 206, 207);
}

body ul.section-ul {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

body .darkmode svg {
  color: rgb(119, 206, 207);
  stroke: rgb(119, 206, 207);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

body .breadcrumb-element p {
  color: rgb(90, 154, 118);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

body .metadata {
  border-bottom-color: rgb(54, 76, 167);
  border-left-color: rgb(54, 76, 167);
  border-right-color: rgb(54, 76, 167);
  border-top-color: rgb(54, 76, 167);
  color: rgb(119, 206, 207);
}

body .metadata-properties {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

body .navigation-progress {
  background-color: rgb(34, 20, 57);
}

body .page-header h2.page-title {
  color: rgb(143, 244, 221);
}

body abbr {
  color: rgb(143, 244, 221);
  text-decoration: underline dotted rgb(143, 244, 221);
}

body details {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body input[type=text] {
  border-bottom-color: rgb(119, 206, 207);
  border-left-color: rgb(119, 206, 207);
  border-right-color: rgb(119, 206, 207);
  border-top-color: rgb(119, 206, 207);
  color: rgb(119, 206, 207);
}

body kbd {
  background-color: rgb(44, 12, 70);
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
  color: rgb(143, 244, 221);
}

body progress {
  border-bottom-color: rgb(143, 244, 221);
  border-left-color: rgb(143, 244, 221);
  border-right-color: rgb(143, 244, 221);
  border-top-color: rgb(143, 244, 221);
}

body sub {
  color: rgb(143, 244, 221);
}

body summary {
  color: rgb(143, 244, 221);
}

body sup {
  color: rgb(143, 244, 221);
}`,
  },
  light: {},
};
