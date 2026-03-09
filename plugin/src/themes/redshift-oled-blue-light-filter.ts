import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "redshift-oled-blue-light-filter",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --accent-h: 0;
  --background-modifier-active-hover: rgba(245, 92, 92, 0.1);
  --background-modifier-border: rgb(130, 0, 0);
  --background-modifier-border-focus: rgb(68, 0, 0);
  --background-modifier-border-hover: rgb(58, 0, 0);
  --background-modifier-form-field: rgb(41, 0, 0);
  --background-modifier-form-field-hover: rgb(41, 0, 0);
  --background-modifier-hover: rgba(255, 0, 0, 0.2);
  --background-primary: black;
  --background-primary-alt: rgb(26, 0, 0);
  --background-secondary: black;
  --background-secondary-alt: rgb(0, 0, 0);
  --bases-cards-background: black;
  --bases-cards-cover-background: rgb(26, 0, 0);
  --bases-cards-shadow: 0 0 0 1px rgb(130, 0, 0);
  --bases-cards-shadow-hover: 0 0 0 1px rgb(58, 0, 0);
  --bases-embed-border-color: rgb(130, 0, 0);
  --bases-group-heading-property-color: rgb(204, 0, 0);
  --bases-table-border-color: rgb(130, 0, 0);
  --bases-table-cell-background-active: black;
  --bases-table-cell-background-disabled: rgb(26, 0, 0);
  --bases-table-cell-background-selected: rgba(245, 92, 92, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(68, 0, 0);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(30, 0, 0);
  --bases-table-group-background: rgb(26, 0, 0);
  --bases-table-header-background: black;
  --bases-table-header-background-hover: rgba(255, 0, 0, 0.2);
  --bases-table-header-color: rgb(204, 0, 0);
  --bases-table-summary-background: black;
  --bases-table-summary-background-hover: rgba(255, 0, 0, 0.2);
  --blockquote-border-color: rgb(30, 0, 0);
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --canvas-background: black;
  --canvas-card-label-color: rgb(153, 0, 0);
  --canvas-dot-pattern: rgb(0, 0, 0);
  --caret-color: rgb(255, 0, 0);
  --checkbox-border-color: rgb(153, 0, 0);
  --checkbox-border-color-hover: rgb(204, 0, 0);
  --checkbox-color: rgb(30, 0, 0);
  --checkbox-color-hover: rgb(80, 0, 0);
  --checkbox-marker-color: black;
  --checklist-done-color: rgb(204, 0, 0);
  --code-background: rgb(26, 0, 0);
  --code-border-color: rgb(130, 0, 0);
  --code-bracket-background: rgba(255, 0, 0, 0.2);
  --code-comment: rgb(153, 0, 0);
  --code-normal: rgb(255, 0, 0);
  --code-punctuation: rgb(204, 0, 0);
  --collapse-icon-color: rgb(153, 0, 0);
  --collapse-icon-color-collapsed: red;
  --color-accent: rgb(255, 3, 3);
  --color-accent-1: rgb(249, 139, 144);
  --color-accent-2: rgb(252, 182, 187);
  --color-accent-hsl: 0, 88%, 66%;
  --color-base-00: rgb(0, 0, 0);
  --color-base-05: rgb(23, 0, 0);
  --color-base-10: rgb(26, 0, 0);
  --color-base-100: rgb(0, 0, 0);
  --color-base-20: rgb(34, 0, 0);
  --color-base-25: rgb(41, 0, 0);
  --color-base-30: rgb(0, 0, 0);
  --color-base-35: rgb(58, 0, 0);
  --color-base-40: rgb(68, 0, 0);
  --color-base-50: rgb(85, 0, 0);
  --color-base-60: rgb(102, 0, 0);
  --color-base-70: rgb(0, 0, 0);
  --divider-color: rgb(130, 0, 0);
  --divider-color-hover: rgb(30, 0, 0);
  --dropdown-background: rgb(0, 0, 0);
  --dropdown-background-hover: rgb(58, 0, 0);
  --embed-block-shadow-hover: 0 0 0 1px rgb(130, 0, 0), inset 0 0 0 1px rgb(130, 0, 0);
  --embed-border-start: 2px solid rgb(30, 0, 0);
  --file-header-background: black;
  --file-header-background-focused: black;
  --flair-background: rgb(0, 0, 0);
  --flair-color: rgb(255, 0, 0);
  --footnote-divider-color: rgb(130, 0, 0);
  --footnote-id-color: rgb(204, 0, 0);
  --footnote-id-color-no-occurrences: rgb(153, 0, 0);
  --footnote-input-background-active: rgba(255, 0, 0, 0.2);
  --graph-line: rgb(58, 0, 0);
  --graph-node: rgb(204, 0, 0);
  --graph-node-focused: red;
  --graph-node-unresolved: rgb(153, 0, 0);
  --graph-text: rgb(255, 0, 0);
  --heading-formatting: rgb(153, 0, 0);
  --hr-color: rgb(130, 0, 0);
  --icon-color: rgb(204, 0, 0);
  --icon-color-active: red;
  --icon-color-focused: rgb(255, 0, 0);
  --icon-color-hover: rgb(204, 0, 0);
  --input-date-separator: rgb(153, 0, 0);
  --input-hover-border-color: red;
  --input-placeholder-color: rgb(153, 0, 0);
  --input-shadow: 0 0 0 1px rgba(255, 0, 0, 0.5);
  --input-shadow-hover: 0 0 0 1px rgba(255, 0, 0, 0.5);
  --interactive-accent: rgb(30, 0, 0);
  --interactive-accent-hover: rgb(80, 0, 0);
  --interactive-accent-hsl: 0, 88%, 66%;
  --interactive-hover: rgb(58, 0, 0);
  --interactive-normal: rgb(0, 0, 0);
  --link-color: red;
  --link-color-hover: rgb(255, 0, 0);
  --link-external-color: red;
  --link-external-color-hover: rgb(255, 0, 0);
  --link-unresolved-color: red;
  --link-unresolved-decoration-color: rgba(245, 92, 92, 0.3);
  --list-marker-color: rgb(153, 0, 0);
  --list-marker-color-collapsed: red;
  --list-marker-color-hover: rgb(204, 0, 0);
  --menu-background: black;
  --menu-border-color: rgb(58, 0, 0);
  --metadata-border-color: rgb(130, 0, 0);
  --metadata-divider-color: rgb(130, 0, 0);
  --metadata-input-background-active: rgba(255, 0, 0, 0.2);
  --metadata-input-text-color: rgb(255, 0, 0);
  --metadata-label-background-active: rgba(255, 0, 0, 0.2);
  --metadata-label-text-color: rgb(204, 0, 0);
  --metadata-label-text-color-hover: rgb(204, 0, 0);
  --metadata-property-background-active: rgba(255, 0, 0, 0.2);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(68, 0, 0);
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(58, 0, 0);
  --modal-background: black;
  --modal-border-color: rgb(68, 0, 0);
  --nav-collapse-icon-color: rgb(153, 0, 0);
  --nav-collapse-icon-color-collapsed: rgb(153, 0, 0);
  --nav-heading-color: rgb(255, 0, 0);
  --nav-heading-color-collapsed: rgb(153, 0, 0);
  --nav-heading-color-collapsed-hover: rgb(204, 0, 0);
  --nav-heading-color-hover: rgb(255, 0, 0);
  --nav-item-background-active: rgba(255, 0, 0, 0.2);
  --nav-item-background-hover: rgba(255, 0, 0, 0.2);
  --nav-item-background-selected: rgba(245, 92, 92, 0.15);
  --nav-item-color: rgb(204, 0, 0);
  --nav-item-color-active: rgb(255, 0, 0);
  --nav-item-color-highlighted: red;
  --nav-item-color-hover: rgb(255, 0, 0);
  --nav-item-color-selected: rgb(255, 0, 0);
  --nav-tag-color: rgb(153, 0, 0);
  --nav-tag-color-active: rgb(204, 0, 0);
  --nav-tag-color-hover: rgb(204, 0, 0);
  --pdf-background: black;
  --pdf-page-background: black;
  --pdf-shadow: 0 0 0 1px rgb(130, 0, 0);
  --pdf-sidebar-background: black;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(130, 0, 0);
  --pill-border-color: rgb(130, 0, 0);
  --pill-border-color-hover: rgb(58, 0, 0);
  --pill-color: rgb(204, 0, 0);
  --pill-color-hover: rgb(255, 0, 0);
  --pill-color-remove: rgb(153, 0, 0);
  --pill-color-remove-hover: red;
  --prompt-background: black;
  --prompt-border-color: rgb(68, 0, 0);
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent));
  --ribbon-background: black;
  --ribbon-background-collapsed: black;
  --search-clear-button-color: rgb(204, 0, 0);
  --search-icon-color: rgb(204, 0, 0);
  --search-result-background: black;
  --setting-group-heading-color: rgb(255, 0, 0);
  --setting-items-background: rgb(26, 0, 0);
  --setting-items-border-color: rgb(130, 0, 0);
  --slider-thumb-border-color: rgb(58, 0, 0);
  --slider-track-background: rgb(130, 0, 0);
  --status-bar-background: black;
  --status-bar-border-color: rgb(130, 0, 0);
  --status-bar-text-color: rgb(204, 0, 0);
  --suggestion-background: black;
  --tab-background-active: black;
  --tab-container-background: black;
  --tab-divider-color: rgb(58, 0, 0);
  --tab-outline-color: rgb(130, 0, 0);
  --tab-switcher-background: black;
  --tab-switcher-menubar-background: linear-gradient(to top, black, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 3, 3);
  --tab-text-color: rgb(153, 0, 0);
  --tab-text-color-active: rgb(204, 0, 0);
  --tab-text-color-focused: rgb(204, 0, 0);
  --tab-text-color-focused-active: rgb(204, 0, 0);
  --tab-text-color-focused-active-current: rgb(255, 0, 0);
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: rgb(130, 0, 0);
  --table-border-color: rgb(130, 0, 0);
  --table-drag-handle-background-active: rgb(30, 0, 0);
  --table-drag-handle-color: rgb(153, 0, 0);
  --table-drag-handle-color-active: rgb(255, 0, 0);
  --table-header-border-color: rgb(130, 0, 0);
  --table-header-color: rgb(255, 0, 0);
  --table-selection: rgba(245, 92, 92, 0.1);
  --table-selection-border-color: rgb(30, 0, 0);
  --tag-background: rgba(245, 92, 92, 0.1);
  --tag-background-hover: rgba(245, 92, 92, 0.2);
  --tag-border-color: rgba(245, 92, 92, 0.15);
  --tag-border-color-hover: rgba(245, 92, 92, 0.15);
  --tag-color: red;
  --tag-color-hover: red;
  --text-accent: red;
  --text-accent-hover: rgb(255, 0, 0);
  --text-error: rgb(179, 0, 0);
  --text-faint: rgb(153, 0, 0);
  --text-muted: rgb(204, 0, 0);
  --text-normal: rgb(255, 0, 0);
  --text-on-accent: rgb(255, 0, 0);
  --text-on-accent-inverted: rgb(255, 0, 0);
  --text-selection: rgba(245, 92, 92, 0.33);
  --text-success: rgb(255, 0, 0);
  --text-warning: rgb(255, 0, 0);
  --titlebar-background: black;
  --titlebar-background-focused: rgb(0, 0, 0);
  --titlebar-border-color: rgb(130, 0, 0);
  --titlebar-text-color: rgb(204, 0, 0);
  --titlebar-text-color-focused: rgb(255, 0, 0);
  --vault-profile-color: rgb(255, 0, 0);
  --vault-profile-color-hover: rgb(255, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(130, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgb(130, 0, 0);
  color: rgb(255, 0, 0);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .page article p > em, em {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .page article p > i, i {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .text-highlight {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body del {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: line-through rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body p {
  color: rgb(204, 0, 0);
  outline: rgb(204, 0, 0) none 0px;
  text-decoration: rgb(204, 0, 0);
  text-decoration-color: rgb(204, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body a.internal.broken {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: underline rgba(245, 92, 92, 0.3);
  text-decoration-color: rgba(245, 92, 92, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 0, 0);
}

body dt {
  color: rgb(255, 0, 0);
}

body ol > li {
  color: rgb(255, 0, 0);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body ul > li {
  color: rgb(255, 0, 0);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 0, 0);
  text-decoration: rgb(153, 0, 0);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body table {
  color: rgb(255, 0, 0);
}

body td {
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
  color: rgb(255, 0, 0);
}

body th {
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
  color: rgb(255, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(26, 0, 0);
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(26, 0, 0);
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
  color: rgb(255, 0, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(26, 0, 0);
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
}

body pre:has(> code) {
  background-color: rgb(26, 0, 0);
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body figcaption {
  color: rgb(255, 0, 0);
}

body figure {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body img {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  filter: grayscale(1) brightness(0.2) sepia(1) hue-rotate(-50deg) saturate(10) contrast(1);
}

body video {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(26, 0, 0);
  border-bottom-color: rgb(204, 0, 0);
  border-left-color: rgb(204, 0, 0);
  border-right-color: rgb(204, 0, 0);
  border-top-color: rgb(204, 0, 0);
}

body .footnotes {
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(30, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(30, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 0, 0);
  text-decoration: line-through rgb(204, 0, 0);
  text-decoration-color: rgb(204, 0, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 0, 0);
  border-left-color: rgb(153, 0, 0);
  border-right-color: rgb(153, 0, 0);
  border-top-color: rgb(153, 0, 0);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 0, 0);
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}`,
    search: `body .search > .search-button {
  background-color: rgb(41, 0, 0);
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
  color: rgb(255, 0, 0);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(68, 0, 0);
  border-left-color: rgb(68, 0, 0);
  border-right-color: rgb(68, 0, 0);
  border-top-color: rgb(68, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 0, 0);
  outline: rgb(255, 0, 0) none 0px;
  text-decoration: rgb(255, 0, 0);
  text-decoration-color: rgb(255, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 0, 0, 0.2);
  color: rgb(255, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(68, 0, 0);
  border-left-color: rgb(68, 0, 0);
  border-right-color: rgb(68, 0, 0);
  border-top-color: rgb(68, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 0, 0, 0.2);
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 0, 0, 0.2);
  color: rgb(255, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 92, 92, 0.1);
  border-bottom-color: rgba(245, 92, 92, 0.15);
  border-left-color: rgba(245, 92, 92, 0.15);
  border-right-color: rgba(245, 92, 92, 0.15);
  border-top-color: rgba(245, 92, 92, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(255, 0, 0);
}

body h1 {
  color: rgb(255, 0, 0);
}

body h2 {
  color: rgb(255, 0, 0);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 0, 0);
}

body h3 {
  color: rgb(255, 0, 0);
}

body h4 {
  color: rgb(255, 0, 0);
}

body h5 {
  color: rgb(255, 0, 0);
}

body h6 {
  color: rgb(255, 0, 0);
}

body hr {
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(204, 0, 0);
  text-decoration: rgb(204, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(204, 0, 0);
  text-decoration: rgb(204, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(204, 0, 0);
  text-decoration: rgb(204, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 0, 0, 0.2);
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 0, 0);
  border-left-color: rgb(204, 0, 0);
  border-right-color: rgb(204, 0, 0);
  border-top-color: rgb(204, 0, 0);
  color: rgb(204, 0, 0);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
  color: rgb(204, 0, 0);
}

body footer ul li a {
  color: rgb(204, 0, 0);
  text-decoration: rgb(204, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 0, 0);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(204, 0, 0);
  text-decoration: rgb(204, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(204, 0, 0);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(204, 0, 0);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(204, 0, 0);
  text-decoration: rgb(204, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(204, 0, 0);
  border-left-color: rgb(204, 0, 0);
  border-right-color: rgb(204, 0, 0);
  border-top-color: rgb(204, 0, 0);
  color: rgb(204, 0, 0);
}

body .darkmode svg {
  color: rgb(204, 0, 0);
  stroke: rgb(204, 0, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(204, 0, 0);
  border-left-color: rgb(204, 0, 0);
  border-right-color: rgb(204, 0, 0);
  border-top-color: rgb(204, 0, 0);
  color: rgb(204, 0, 0);
}

body .breadcrumb-element p {
  color: rgb(153, 0, 0);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(130, 0, 0);
  border-left-color: rgb(130, 0, 0);
  border-right-color: rgb(130, 0, 0);
  border-top-color: rgb(130, 0, 0);
  color: rgb(204, 0, 0);
}

body .metadata-properties {
  border-bottom-color: rgb(204, 0, 0);
  border-left-color: rgb(204, 0, 0);
  border-right-color: rgb(204, 0, 0);
  border-top-color: rgb(204, 0, 0);
  color: rgb(204, 0, 0);
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(255, 0, 0);
}

body abbr {
  color: rgb(255, 0, 0);
  text-decoration: underline dotted rgb(255, 0, 0);
}

body details {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(204, 0, 0);
  border-left-color: rgb(204, 0, 0);
  border-right-color: rgb(204, 0, 0);
  border-top-color: rgb(204, 0, 0);
  color: rgb(204, 0, 0);
}

body kbd {
  background-color: rgb(26, 0, 0);
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
  color: rgb(255, 0, 0);
}

body progress {
  border-bottom-color: rgb(255, 0, 0);
  border-left-color: rgb(255, 0, 0);
  border-right-color: rgb(255, 0, 0);
  border-top-color: rgb(255, 0, 0);
}

body sub {
  color: rgb(255, 0, 0);
}

body summary {
  color: rgb(255, 0, 0);
}

body sup {
  color: rgb(255, 0, 0);
}`,
  },
  light: {},
};
