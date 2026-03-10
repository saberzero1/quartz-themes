import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "fusion",
    modes: ["light", "light"],
    variations: [],
    fonts: [],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 228;
  --accent-l: 60%;
  --background-modifier-active-hover: #b9c3de;
  --background-modifier-border: #848ca1;
  --background-modifier-border-focus: #737a8d;
  --background-modifier-border-hover: #7c8397;
  --background-modifier-form-field: #b9c3de;
  --background-modifier-form-field-hover: #b9c3de;
  --background-primary: #b9c3de;
  --background-primary-alt: #b9c3de;
  --background-secondary: #b9c3de;
  --background-secondary-alt: #b0b9d3;
  --bases-cards-background: #b9c3de;
  --bases-cards-cover-background: #b9c3de;
  --bases-cards-shadow: 0 0 0 1px #848ca1;
  --bases-cards-shadow-hover: 0 0 0 1px #7c8397;
  --bases-embed-border-color: #848ca1;
  --bases-group-heading-property-color: #3f4450;
  --bases-table-border-color: #848ca1;
  --bases-table-cell-background-active: #b9c3de;
  --bases-table-cell-background-disabled: #b9c3de;
  --bases-table-cell-background-selected: rgba(63, 99, 243, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #737a8d;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(86, 121, 245);
  --bases-table-group-background: #b9c3de;
  --bases-table-header-background: #b9c3de;
  --bases-table-header-color: #3f4450;
  --bases-table-summary-background: #b9c3de;
  --blockquote-border-color: rgb(86, 121, 245);
  --blur-background: color-mix(in srgb, #b9c3de 65%, transparent) linear-gradient(#b9c3de, color-mix(in srgb, #b9c3de 65%, transparent));
  --canvas-background: #b9c3de;
  --canvas-card-label-color: #626879;
  --canvas-color-3: 190, 146, 0;
  --canvas-dot-pattern: #848ca1;
  --caret-color: #0b0e14;
  --checkbox-border-color: #626879;
  --checkbox-border-color-hover: #3f4450;
  --checkbox-color: rgb(86, 121, 245);
  --checkbox-color-hover: rgb(105, 140, 247);
  --checkbox-marker-color: #b9c3de;
  --checklist-done-color: #3f4450;
  --code-background: #b9c3de;
  --code-border-color: #848ca1;
  --code-comment: #626879;
  --code-function: rgb(190, 146, 0);
  --code-normal: #0b0e14;
  --code-punctuation: #3f4450;
  --collapse-icon-color: #626879;
  --collapse-icon-color-collapsed: rgb(63, 99, 243);
  --color-accent: rgb(63, 99, 243);
  --color-accent-1: rgb(86, 121, 245);
  --color-accent-2: rgb(105, 140, 247);
  --color-accent-hsl: 228, 88%, 60%;
  --color-base-00: #b9c3de;
  --color-base-05: #b0b9d3;
  --color-base-10: #a7b0c9;
  --color-base-100: #0b0e14;
  --color-base-20: #969eb5;
  --color-base-25: #8d95ab;
  --color-base-30: #848ca1;
  --color-base-35: #7c8397;
  --color-base-40: #737a8d;
  --color-base-50: #626879;
  --color-base-60: #505664;
  --color-base-70: #3f4450;
  --color-yellow: rgb(190, 146, 0);
  --color-yellow-rgb: 190, 146, 0;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #b9c3de;
  --divider-color-hover: rgb(86, 121, 245);
  --dropdown-background: #b9c3de;
  --dropdown-background-hover: #a7b0c9;
  --embed-block-shadow-hover: 0 0 0 1px #848ca1, inset 0 0 0 1px #848ca1;
  --embed-border-start: 2px solid rgb(86, 121, 245);
  --file-header-background: #b9c3de;
  --file-header-background-focused: #b9c3de;
  --flair-background: #b9c3de;
  --flair-color: #0b0e14;
  --footnote-divider-color: #848ca1;
  --footnote-id-color: #3f4450;
  --footnote-id-color-no-occurrences: #626879;
  --graph-line: #7c8397;
  --graph-node: #3f4450;
  --graph-node-attachment: rgb(190, 146, 0);
  --graph-node-focused: rgb(63, 99, 243);
  --graph-node-unresolved: #626879;
  --graph-text: #0b0e14;
  --gray: var(--text-muted);
  --heading-formatting: #626879;
  --highlight: var(--background-modifier-active-hover);
  --hr-color: rgb(63, 99, 243);
  --icon-color: #626879;
  --icon-color-active: rgb(63, 99, 243);
  --icon-color-focused: #0b0e14;
  --icon-color-hover: #3f4450;
  --input-date-separator: #626879;
  --input-placeholder-color: #626879;
  --interactive-accent: rgb(86, 121, 245);
  --interactive-accent-hover: rgb(105, 140, 247);
  --interactive-accent-hsl: 228, 88%, 60%;
  --interactive-hover: #a7b0c9;
  --interactive-normal: #b9c3de;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(63, 99, 243);
  --link-color-hover: rgb(105, 140, 247);
  --link-external-color: rgb(63, 99, 243);
  --link-external-color-hover: rgb(105, 140, 247);
  --link-unresolved-color: rgb(63, 99, 243);
  --link-unresolved-decoration-color: rgba(63, 99, 243, 0.3);
  --list-marker-color: #626879;
  --list-marker-color-collapsed: rgb(63, 99, 243);
  --list-marker-color-hover: #3f4450;
  --menu-background: #b9c3de;
  --menu-border-color: #7c8397;
  --metadata-border-color: #848ca1;
  --metadata-divider-color: #848ca1;
  --metadata-input-text-color: #0b0e14;
  --metadata-label-text-color: #3f4450;
  --metadata-label-text-color-hover: #3f4450;
  --metadata-property-box-shadow-focus: 0 0 0 2px #737a8d;
  --metadata-property-box-shadow-hover: 0 0 0 1px #7c8397;
  --modal-background: #b9c3de;
  --modal-border-color: #737a8d;
  --nav-collapse-icon-color: #626879;
  --nav-collapse-icon-color-collapsed: #626879;
  --nav-heading-color: #0b0e14;
  --nav-heading-color-collapsed: #626879;
  --nav-heading-color-collapsed-hover: #3f4450;
  --nav-heading-color-hover: #0b0e14;
  --nav-item-background-selected: rgba(63, 99, 243, 0.15);
  --nav-item-color: #3f4450;
  --nav-item-color-active: #0b0e14;
  --nav-item-color-highlighted: rgb(63, 99, 243);
  --nav-item-color-hover: #0b0e14;
  --nav-item-color-selected: #0b0e14;
  --nav-tag-color: #626879;
  --nav-tag-color-active: #3f4450;
  --nav-tag-color-hover: #3f4450;
  --pdf-background: #b9c3de;
  --pdf-page-background: #b9c3de;
  --pdf-sidebar-background: #b9c3de;
  --pill-border-color: #848ca1;
  --pill-border-color-hover: #7c8397;
  --pill-color: #3f4450;
  --pill-color-hover: #0b0e14;
  --pill-color-remove: #626879;
  --pill-color-remove-hover: rgb(63, 99, 243);
  --prompt-background: #b9c3de;
  --prompt-border-color: #737a8d;
  --raised-background: color-mix(in srgb, #b9c3de 65%, transparent) linear-gradient(#b9c3de, color-mix(in srgb, #b9c3de 65%, transparent));
  --ribbon-background: #b9c3de;
  --ribbon-background-collapsed: #b9c3de;
  --search-clear-button-color: #3f4450;
  --search-icon-color: #3f4450;
  --search-result-background: #b9c3de;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #0b0e14;
  --setting-items-background: #b9c3de;
  --setting-items-border-color: #848ca1;
  --slider-thumb-border-color: #7c8397;
  --slider-track-background: #848ca1;
  --status-bar-background: #b9c3de;
  --status-bar-border-color: #b9c3de;
  --status-bar-text-color: #3f4450;
  --suggestion-background: #b9c3de;
  --sync-avatar-color-3: rgb(190, 146, 0);
  --tab-background-active: #b9c3de;
  --tab-container-background: #b9c3de;
  --tab-divider-color: #b9c3de;
  --tab-outline-color: #b9c3de;
  --tab-switcher-background: #b9c3de;
  --tab-switcher-menubar-background: linear-gradient(to top, #b9c3de, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(63, 99, 243);
  --tab-text-color: #626879;
  --tab-text-color-active: #3f4450;
  --tab-text-color-focused: #3f4450;
  --tab-text-color-focused-active: #3f4450;
  --tab-text-color-focused-active-current: #0b0e14;
  --tab-text-color-focused-highlighted: rgb(63, 99, 243);
  --table-add-button-border-color: #848ca1;
  --table-border-color: #848ca1;
  --table-drag-handle-background-active: rgb(86, 121, 245);
  --table-drag-handle-color: #626879;
  --table-header-border-color: #848ca1;
  --table-header-color: #0b0e14;
  --table-selection: rgba(63, 99, 243, 0.1);
  --table-selection-border-color: rgb(86, 121, 245);
  --tag-background: rgba(63, 99, 243, 0.1);
  --tag-background-hover: rgba(63, 99, 243, 0.2);
  --tag-border-color: rgba(63, 99, 243, 0.15);
  --tag-border-color-hover: rgba(63, 99, 243, 0.15);
  --tag-color: rgb(63, 99, 243);
  --tag-color-hover: rgb(63, 99, 243);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(63, 99, 243);
  --text-accent-hover: rgb(105, 140, 247);
  --text-faint: #626879;
  --text-muted: #3f4450;
  --text-normal: #0b0e14;
  --text-selection: rgba(63, 99, 243, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --titlebar-background: #b9c3de;
  --titlebar-background-focused: #b9c3de;
  --titlebar-border-color: #848ca1;
  --titlebar-text-color: #3f4450;
  --titlebar-text-color-focused: #0b0e14;
  --vault-profile-color: #0b0e14;
  --vault-profile-color-hover: #0b0e14;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(185, 195, 222);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(185, 195, 222);
  border-left-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

body div#quartz-root {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}`,
    typography: `body .page article p > b, b {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body .page article p > em, em {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body .page article p > i, i {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body .page article p > strong, strong {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body .text-highlight {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body del {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: line-through rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body p {
  color: rgb(63, 68, 80);
  outline: rgb(63, 68, 80) none 0px;
  text-decoration: rgb(63, 68, 80);
  text-decoration-color: rgb(63, 68, 80);
}`,
    links: `body a.external, footer a {
  color: rgb(63, 99, 243);
  outline: rgb(63, 99, 243) none 0px;
  text-decoration: underline rgb(63, 99, 243);
  text-decoration-color: rgb(63, 99, 243);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 99, 243);
  outline: rgb(63, 99, 243) none 0px;
  text-decoration: underline rgb(63, 99, 243);
  text-decoration-color: rgb(63, 99, 243);
}

body a.internal.broken {
  color: rgb(63, 99, 243);
  outline: rgb(63, 99, 243) none 0px;
  text-decoration: underline rgba(63, 99, 243, 0.3);
  text-decoration-color: rgba(63, 99, 243, 0.3);
}`,
    lists: `body dd {
  color: rgb(11, 14, 20);
}

body dt {
  color: rgb(11, 14, 20);
}

body ol > li {
  color: rgb(11, 14, 20);
}

body ol.overflow {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body ul > li {
  color: rgb(11, 14, 20);
}

body ul.overflow {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(98, 104, 121);
  text-decoration: rgb(98, 104, 121);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body table {
  color: rgb(11, 14, 20);
}

body td {
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

body th {
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}`,
    code: `body code {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

body pre > code > [data-line] {
  border-left-color: rgb(190, 146, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(190, 146, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(190, 146, 0);
  border-left-color: rgb(190, 146, 0);
  border-right-color: rgb(190, 146, 0);
  border-top-color: rgb(190, 146, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
}

body pre:has(> code) {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
}`,
    images: `body audio {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body figcaption {
  color: rgb(11, 14, 20);
}

body figure {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body img {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body video {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    embeds: `body .file-embed {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
}

body .footnotes {
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

body .transclude {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(84, 119, 245);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body .transclude-inner {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(84, 119, 245);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(63, 68, 80);
  text-decoration: line-through rgb(63, 68, 80);
  text-decoration-color: rgb(63, 68, 80);
}

body input[type=checkbox] {
  border-bottom-color: rgb(98, 104, 121);
  border-left-color: rgb(98, 104, 121);
  border-right-color: rgb(98, 104, 121);
  border-top-color: rgb(98, 104, 121);
}

body li.task-list-item[data-task='!'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='*'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='-'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='/'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='>'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='?'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='I'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='S'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='b'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='c'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='d'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='f'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='i'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='k'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='l'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='p'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='u'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body li.task-list-item[data-task='w'] {
  color: rgb(11, 14, 20);
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}`,
    search: `body .search > .search-button {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

body .search > .search-container > .search-space {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(115, 122, 141);
  border-left-color: rgb(115, 122, 141);
  border-right-color: rgb(115, 122, 141);
  border-top-color: rgb(115, 122, 141);
}

body .search > .search-container > .search-space > * {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(11, 14, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(11, 14, 20);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(11, 14, 20);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(115, 122, 141);
  border-left-color: rgb(115, 122, 141);
  border-right-color: rgb(115, 122, 141);
  border-top-color: rgb(115, 122, 141);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(185, 195, 222);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(11, 14, 20);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(63, 99, 243, 0.1);
  border-bottom-color: rgba(63, 99, 243, 0.15);
  border-left-color: rgba(63, 99, 243, 0.15);
  border-right-color: rgba(63, 99, 243, 0.15);
  border-top-color: rgba(63, 99, 243, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(63, 99, 243);
}

body h1 {
  color: rgb(11, 14, 20);
}

body h2 {
  color: rgb(11, 14, 20);
}

body h2.page-title, h2.page-title a {
  color: rgb(11, 14, 20);
}

body h3 {
  color: rgb(11, 14, 20);
}

body h4 {
  color: rgb(11, 14, 20);
}

body h5 {
  color: rgb(11, 14, 20);
}

body h6 {
  color: rgb(11, 14, 20);
}

body hr {
  border-bottom-color: rgb(185, 195, 222);
  border-left-color: rgb(185, 195, 222);
  border-right-color: rgb(185, 195, 222);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

body ::-webkit-scrollbar-corner {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

body ::-webkit-scrollbar-track {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 68, 80);
  text-decoration: rgb(63, 68, 80);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 68, 80);
  text-decoration: rgb(63, 68, 80);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 68, 80);
  text-decoration: rgb(63, 68, 80);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(98, 104, 121);
  border-left-color: rgb(98, 104, 121);
  border-right-color: rgb(98, 104, 121);
  border-top-color: rgb(98, 104, 121);
  color: rgb(98, 104, 121);
}`,
    footer: `body footer {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(185, 195, 222);
  border-left-color: rgb(185, 195, 222);
  border-right-color: rgb(185, 195, 222);
  border-top-color: rgb(185, 195, 222);
  color: rgb(63, 68, 80);
}

body footer ul li a {
  color: rgb(63, 68, 80);
  text-decoration: rgb(63, 68, 80);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(11, 14, 20);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 68, 80);
  text-decoration: rgb(63, 68, 80);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 68, 80);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body li.section-li > .section .meta {
  color: rgb(63, 68, 80);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 68, 80);
  text-decoration: rgb(63, 68, 80);
}

body ul.section-ul {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(98, 104, 121);
  border-left-color: rgb(98, 104, 121);
  border-right-color: rgb(98, 104, 121);
  border-top-color: rgb(98, 104, 121);
  color: rgb(98, 104, 121);
}

body .darkmode svg {
  color: rgb(98, 104, 121);
  stroke: rgb(98, 104, 121);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
  color: rgb(63, 68, 80);
}

body .breadcrumb-element p {
  color: rgb(98, 104, 121);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

body .metadata {
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(63, 68, 80);
}

body .metadata-properties {
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
  color: rgb(63, 68, 80);
}

body .navigation-progress {
  background-color: rgb(185, 195, 222);
}

body .page-header h2.page-title {
  color: rgb(11, 14, 20);
}

body abbr {
  color: rgb(11, 14, 20);
  text-decoration: underline dotted rgb(11, 14, 20);
}

body details {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body input[type=text] {
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
  color: rgb(63, 68, 80);
}

body kbd {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

body progress {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

body sub {
  color: rgb(11, 14, 20);
}

body summary {
  color: rgb(11, 14, 20);
}

body sup {
  color: rgb(11, 14, 20);
}`,
  },
};
