import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ink", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 0deg;
  --accent-l: 40%;
  --accent-s: 0%;
  --background-modifier-active-hover: rgba(102, 102, 102, 0.1);
  --background-modifier-border: rgb(0, 0, 0);
  --background-modifier-border-focus: rgb(0, 0, 0);
  --background-modifier-border-hover: rgb(0, 0, 0);
  --background-modifier-form-field: rgb(0, 0, 0);
  --background-modifier-form-field-hover: rgb(0, 0, 0);
  --background-primary: rgb(0, 0, 0);
  --background-primary-alt: rgb(0, 0, 0);
  --background-secondary: rgb(0, 0, 0);
  --background-secondary-alt: rgb(0, 0, 0);
  --bases-cards-background: rgb(0, 0, 0);
  --bases-cards-cover-background: rgb(0, 0, 0);
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(0, 0, 0);
  --bases-embed-border-color: rgb(0, 0, 0);
  --bases-group-heading-property-color: rgb(0, 0, 0);
  --bases-table-border-color: rgb(0, 0, 0);
  --bases-table-cell-background-active: rgb(0, 0, 0);
  --bases-table-cell-background-disabled: rgb(0, 0, 0);
  --bases-table-cell-background-selected: rgba(102, 102, 102, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-group-background: rgb(0, 0, 0);
  --bases-table-header-background: rgb(0, 0, 0);
  --bases-table-header-color: rgb(0, 0, 0);
  --bases-table-summary-background: rgb(0, 0, 0);
  --blockquote-border-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --canvas-background: rgb(0, 0, 0);
  --canvas-card-label-color: rgb(0, 0, 0);
  --canvas-dot-pattern: rgb(0, 0, 0);
  --caret-color: rgb(0, 0, 0);
  --checkbox-border-color: rgb(102, 102, 102);
  --checkbox-border-color-hover: rgb(0, 0, 0);
  --checkbox-color: rgb(102, 102, 102);
  --checkbox-color-hover: rgb(0, 0, 0);
  --checkbox-marker-color: rgb(0, 0, 0);
  --checklist-done-color: rgb(0, 0, 0);
  --code-background: rgb(0, 0, 0);
  --code-border-color: rgb(0, 0, 0);
  --code-comment: rgb(0, 0, 0);
  --code-function: rgb(0, 0, 0);
  --code-important: rgb(0, 0, 0);
  --code-keyword: rgb(0, 0, 0);
  --code-normal: rgb(0, 0, 0);
  --code-operator: rgb(0, 0, 0);
  --code-property: rgb(0, 0, 0);
  --code-punctuation: rgb(0, 0, 0);
  --code-string: rgb(0, 0, 0);
  --code-tag: rgb(0, 0, 0);
  --code-value: rgb(0, 0, 0);
  --collapse-icon-color: rgb(0, 0, 0);
  --collapse-icon-color-collapsed: rgb(102, 102, 102);
  --color-accent: rgb(102, 102, 102);
  --color-accent-1: rgb(0, 0, 0);
  --color-accent-2: rgb(0, 0, 0);
  --color-accent-hsl: 0deg,
  0%,
  40%;
  --color-base-00: rgb(0, 0, 0);
  --color-base-05: rgb(0, 0, 0);
  --color-base-10: rgb(0, 0, 0);
  --color-base-100: rgb(0, 0, 0);
  --color-base-15: rgb(0, 0, 0);
  --color-base-20: rgb(0, 0, 0);
  --color-base-25: rgb(0, 0, 0);
  --color-base-30: rgb(0, 0, 0);
  --color-base-35: rgb(0, 0, 0);
  --color-base-40: rgb(0, 0, 0);
  --color-base-45: rgb(0, 0, 0);
  --color-base-50: rgb(0, 0, 0);
  --color-base-55: rgb(0, 0, 0);
  --color-base-60: rgb(0, 0, 0);
  --color-base-65: rgb(0, 0, 0);
  --color-base-70: rgb(0, 0, 0);
  --color-base-75: rgb(0, 0, 0);
  --color-base-80: rgb(0, 0, 0);
  --color-base-85: rgb(0, 0, 0);
  --color-base-90: rgb(0, 0, 0);
  --color-base-95: rgb(0, 0, 0);
  --divider-color: rgb(0, 0, 0);
  --divider-color-hover: rgb(0, 0, 0);
  --dropdown-background: rgb(0, 0, 0);
  --dropdown-background-hover: rgb(0, 0, 0);
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0);
  --embed-border-start: 2px solid rgb(0, 0, 0);
  --file-header-background: rgb(0, 0, 0);
  --file-header-background-focused: rgb(0, 0, 0);
  --flair-background: rgb(0, 0, 0);
  --flair-color: rgb(0, 0, 0);
  --footnote-divider-color: rgb(0, 0, 0);
  --footnote-id-color: rgb(0, 0, 0);
  --footnote-id-color-no-occurrences: rgb(0, 0, 0);
  --graph-line: rgb(0, 0, 0);
  --graph-node: rgb(0, 0, 0);
  --graph-node-focused: rgb(102, 102, 102);
  --graph-node-unresolved: rgb(0, 0, 0);
  --graph-text: rgb(0, 0, 0);
  --heading-formatting: rgb(0, 0, 0);
  --hr-color: rgb(0, 0, 0);
  --icon-color: rgb(0, 0, 0);
  --icon-color-active: rgb(102, 102, 102);
  --icon-color-focused: rgb(0, 0, 0);
  --icon-color-hover: rgb(0, 0, 0);
  --input-date-separator: rgb(0, 0, 0);
  --input-placeholder-color: rgb(0, 0, 0);
  --interactive-accent: rgb(0, 0, 0);
  --interactive-accent-hover: rgb(0, 0, 0);
  --interactive-accent-hsl: 0deg,
  0%,
  40%;
  --interactive-hover: rgb(0, 0, 0);
  --interactive-normal: rgb(0, 0, 0);
  --link-color: rgb(102, 102, 102);
  --link-color-hover: rgb(0, 0, 0);
  --link-external-color: rgb(102, 102, 102);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-unresolved-color: rgb(102, 102, 102);
  --link-unresolved-decoration-color: rgba(102, 102, 102, 0.3);
  --list-marker-color: rgb(0, 0, 0);
  --list-marker-color-collapsed: rgb(102, 102, 102);
  --list-marker-color-hover: rgb(0, 0, 0);
  --menu-background: rgb(0, 0, 0);
  --menu-border-color: rgb(0, 0, 0);
  --metadata-border-color: rgb(0, 0, 0);
  --metadata-divider-color: rgb(0, 0, 0);
  --metadata-input-text-color: rgb(0, 0, 0);
  --metadata-label-text-color: rgb(0, 0, 0);
  --metadata-label-text-color-hover: rgb(0, 0, 0);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(0, 0, 0);
  --modal-background: rgb(0, 0, 0);
  --modal-border-color: rgb(0, 0, 0);
  --nav-collapse-icon-color: rgb(0, 0, 0);
  --nav-collapse-icon-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color: rgb(0, 0, 0);
  --nav-heading-color-collapsed: rgb(0, 0, 0);
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0);
  --nav-heading-color-hover: rgb(0, 0, 0);
  --nav-item-background-selected: rgba(102, 102, 102, 0.15);
  --nav-item-color: rgb(0, 0, 0);
  --nav-item-color-active: rgb(0, 0, 0);
  --nav-item-color-highlighted: rgb(102, 102, 102);
  --nav-item-color-hover: rgb(0, 0, 0);
  --nav-item-color-selected: rgb(0, 0, 0);
  --nav-tag-color: rgb(0, 0, 0);
  --nav-tag-color-active: rgb(0, 0, 0);
  --nav-tag-color-hover: rgb(0, 0, 0);
  --pdf-background: rgb(0, 0, 0);
  --pdf-page-background: rgb(0, 0, 0);
  --pdf-sidebar-background: rgb(0, 0, 0);
  --pill-border-color: rgb(0, 0, 0);
  --pill-border-color-hover: rgb(0, 0, 0);
  --pill-color: rgb(0, 0, 0);
  --pill-color-hover: rgb(0, 0, 0);
  --pill-color-remove: rgb(0, 0, 0);
  --pill-color-remove-hover: rgb(102, 102, 102);
  --prompt-background: rgb(0, 0, 0);
  --prompt-border-color: rgb(0, 0, 0);
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --ribbon-background: rgb(0, 0, 0);
  --ribbon-background-collapsed: rgb(0, 0, 0);
  --search-clear-button-color: rgb(0, 0, 0);
  --search-icon-color: rgb(0, 0, 0);
  --search-result-background: rgb(0, 0, 0);
  --setting-group-heading-color: rgb(0, 0, 0);
  --setting-items-background: rgb(0, 0, 0);
  --setting-items-border-color: rgb(0, 0, 0);
  --slider-thumb-border-color: rgb(0, 0, 0);
  --slider-track-background: rgb(0, 0, 0);
  --status-bar-background: rgb(0, 0, 0);
  --status-bar-border-color: rgb(0, 0, 0);
  --status-bar-text-color: rgb(0, 0, 0);
  --suggestion-background: rgb(0, 0, 0);
  --tab-background-active: rgb(0, 0, 0);
  --tab-container-background: rgb(0, 0, 0);
  --tab-divider-color: rgb(0, 0, 0);
  --tab-outline-color: rgb(0, 0, 0);
  --tab-switcher-background: rgb(0, 0, 0);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(102, 102, 102);
  --tab-text-color: rgb(0, 0, 0);
  --tab-text-color-active: rgb(0, 0, 0);
  --tab-text-color-focused: rgb(0, 0, 0);
  --tab-text-color-focused-active: rgb(0, 0, 0);
  --tab-text-color-focused-active-current: rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: rgb(102, 102, 102);
  --table-add-button-border-color: rgb(0, 0, 0);
  --table-border-color: rgb(0, 0, 0);
  --table-drag-handle-background-active: rgb(0, 0, 0);
  --table-drag-handle-color: rgb(0, 0, 0);
  --table-header-border-color: rgb(0, 0, 0);
  --table-header-color: rgb(0, 0, 0);
  --table-selection: rgba(102, 102, 102, 0.1);
  --table-selection-border-color: rgb(0, 0, 0);
  --tag-background: rgba(102, 102, 102, 0.1);
  --tag-background-hover: rgba(102, 102, 102, 0.2);
  --tag-border-color: rgba(102, 102, 102, 0.15);
  --tag-border-color-hover: rgba(102, 102, 102, 0.15);
  --tag-color: rgb(102, 102, 102);
  --tag-color-hover: rgb(102, 102, 102);
  --text-accent: rgb(102, 102, 102);
  --text-accent-hover: rgb(0, 0, 0);
  --text-faint: rgb(0, 0, 0);
  --text-highlight-bg: rgba(102, 102, 102, 0.3);
  --text-muted: rgb(0, 0, 0);
  --text-normal: rgb(0, 0, 0);
  --text-selection: rgba(102, 102, 102, 0.2);
  --titlebar-background: rgb(0, 0, 0);
  --titlebar-background-focused: rgb(0, 0, 0);
  --titlebar-border-color: rgb(0, 0, 0);
  --titlebar-text-color: rgb(0, 0, 0);
  --titlebar-text-color-focused: rgb(0, 0, 0);
  --vault-profile-color: rgb(0, 0, 0);
  --vault-profile-color-hover: rgb(0, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(179, 179, 179);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgba(102, 102, 102, 0.3);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(77, 77, 77);
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}`,
    links: `body a.external, footer a {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: underline rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: underline rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

body a.internal.broken {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: underline rgba(102, 102, 102, 0.3);
  text-decoration-color: rgba(102, 102, 102, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
}

body td {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(64, 64, 64);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(64, 64, 64);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body pre > code, pre:has(> code) {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

body pre:has(> code) {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

body input[type=checkbox] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(102, 102, 102, 0.1);
  border-bottom-color: rgba(102, 102, 102, 0.15);
  border-left-color: rgba(102, 102, 102, 0.15);
  border-right-color: rgba(102, 102, 102, 0.15);
  border-top-color: rgba(102, 102, 102, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(102, 102, 102);
}

body h1 {
  color: rgb(0, 0, 0);
}

body h2 {
  color: rgb(0, 0, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
}

body h3 {
  color: rgb(0, 0, 0);
}

body h4 {
  color: rgb(0, 0, 0);
}

body h5 {
  color: rgb(0, 0, 0);
}

body h6 {
  color: rgb(0, 0, 0);
}

body hr {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
}`,
    scrollbars: `body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}`,
    footer: `body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(77, 77, 77);
}

body footer ul li a {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(77, 77, 77);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(77, 77, 77);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .darkmode svg {
  color: rgb(77, 77, 77);
  stroke: rgb(77, 77, 77);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .breadcrumb-element p {
  color: rgb(128, 128, 128);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(77, 77, 77);
}

body .metadata-properties {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body kbd {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
