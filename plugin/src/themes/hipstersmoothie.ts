import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "hipstersmoothie", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #3c383b;
  --background-modifier-border-focus: #7a0041;
  --background-modifier-cover: #181517;
  --background-modifier-form-field: #0c0c0c;
  --background-modifier-form-field-highlighted: #181517;
  --background-modifier-form-field-hover: #0c0c0c;
  --background-modifier-message: #3c383b;
  --background-primary: #0c0c0c;
  --background-primary-alt: #181517;
  --background-secondary: #0c0c0c;
  --background-secondary-alt: #181517;
  --bases-cards-background: #0c0c0c;
  --bases-cards-cover-background: #181517;
  --bases-cards-shadow: 0 0 0 1px #3c383b;
  --bases-embed-border-color: #3c383b;
  --bases-group-heading-property-color: #706a69;
  --bases-table-border-color: #3c383b;
  --bases-table-cell-background-active: #0c0c0c;
  --bases-table-cell-background-disabled: #181517;
  --bases-table-cell-shadow-active: 0 0 0 2px #7a0041;
  --bases-table-cell-shadow-focus: 0 0 0 2px #870048;
  --bases-table-group-background: #181517;
  --bases-table-header-background: #0c0c0c;
  --bases-table-header-color: #706a69;
  --bases-table-row-background-hover: #2e2c2f;
  --bases-table-summary-background: #0c0c0c;
  --blockquote-border-color: #870048;
  --canvas-background: #0c0c0c;
  --canvas-card-label-color: #9f9697;
  --caret-color: #dcd5d4;
  --checkbox-border-color: #9f9697;
  --checkbox-border-color-hover: #706a69;
  --checkbox-color: #870048;
  --checkbox-color-hover: #ab4d7f;
  --checkbox-marker-color: #0c0c0c;
  --checklist-done-color: #706a69;
  --code-background: #181517;
  --code-border-color: #3c383b;
  --code-comment: #9f9697;
  --code-normal: #dcd5d4;
  --code-punctuation: #706a69;
  --collapse-icon-color: #9f9697;
  --collapse-icon-color-collapsed: #ab4d7f;
  --divider-color: #2e2c2f;
  --divider-color-hover: #870048;
  --dropdown-background-hover: #3d0020;
  --embed-block-shadow-hover: 0 0 0 1px #3c383b, inset 0 0 0 1px #3c383b;
  --embed-border-start: 2px solid #870048;
  --file-header-background: #0c0c0c;
  --file-header-background-focused: #0c0c0c;
  --flair-color: #dcd5d4;
  --footnote-divider-color: #3c383b;
  --footnote-id-color: #706a69;
  --footnote-id-color-no-occurrences: #9f9697;
  --graph-node: #706a69;
  --graph-node-focused: #ab4d7f;
  --graph-node-unresolved: #9f9697;
  --graph-text: #dcd5d4;
  --gray-100: #f6f7f5;
  --gray-1000: #181517;
  --gray-1100: #0c0c0c;
  --gray-200: #eaeae7;
  --gray-300: #dcd5d4;
  --gray-400: #c2bdbd;
  --gray-500: #9f9697;
  --gray-600: #706a69;
  --gray-700: #534e4f;
  --gray-800: #3c383b;
  --gray-900: #2e2c2f;
  --heading-formatting: #9f9697;
  --hr-color: #3c383b;
  --icon-color: #706a69;
  --icon-color-active: #ab4d7f;
  --icon-color-focused: #dcd5d4;
  --icon-color-hover: #706a69;
  --input-date-separator: #9f9697;
  --input-placeholder-color: #9f9697;
  --interactive-accent: #870048;
  --interactive-accent-hover: #ab4d7f;
  --interactive-accent-rgb: 135 0
    72;
  --interactive-hover: #3d0020;
  --link-color: #ab4d7f;
  --link-color-hover: #ab4d7f;
  --link-external-color: #ab4d7f;
  --link-external-color-hover: #ab4d7f;
  --link-unresolved-color: #ab4d7f;
  --list-marker-color: #9f9697;
  --list-marker-color-collapsed: #ab4d7f;
  --list-marker-color-hover: #706a69;
  --menu-background: #0c0c0c;
  --metadata-border-color: #3c383b;
  --metadata-divider-color: #3c383b;
  --metadata-input-text-color: #dcd5d4;
  --metadata-label-text-color: #706a69;
  --metadata-label-text-color-hover: #706a69;
  --metadata-property-box-shadow-focus: 0 0 0 2px #7a0041;
  --modal-background: #0c0c0c;
  --nav-collapse-icon-color: #9f9697;
  --nav-collapse-icon-color-collapsed: #9f9697;
  --nav-heading-color: #dcd5d4;
  --nav-heading-color-collapsed: #9f9697;
  --nav-heading-color-collapsed-hover: #706a69;
  --nav-heading-color-hover: #dcd5d4;
  --nav-item-color: #706a69;
  --nav-item-color-active: #dcd5d4;
  --nav-item-color-highlighted: #ab4d7f;
  --nav-item-color-hover: #dcd5d4;
  --nav-item-color-selected: #dcd5d4;
  --nav-tag-color: #9f9697;
  --nav-tag-color-active: #706a69;
  --nav-tag-color-hover: #706a69;
  --pdf-background: #0c0c0c;
  --pdf-page-background: #0c0c0c;
  --pdf-shadow: 0 0 0 1px #3c383b;
  --pdf-sidebar-background: #0c0c0c;
  --pdf-thumbnail-shadow: 0 0 0 1px #3c383b;
  --pill-border-color: #3c383b;
  --pill-color: #706a69;
  --pill-color-hover: #dcd5d4;
  --pill-color-remove: #9f9697;
  --pill-color-remove-hover: #ab4d7f;
  --primary-100: #f3e6ed;
  --primary-200: #e1bfd1;
  --primary-300: #cf99b6;
  --primary-400: #ab4d7f;
  --primary-450: #ab4d7f;
  --primary-500: #870048;
  --primary-500-B: 72;
  --primary-500-G: 0;
  --primary-500-H: 328;
  --primary-500-L: 26.5;
  --primary-500-R: 135;
  --primary-500-S: 100;
  --primary-600: #7a0041;
  --primary-700: #51002b;
  --primary-800: #3d0020;
  --primary-900: #290016;
  --prompt-background: #0c0c0c;
  --red-100: #f2b5b6;
  --red-200: #e98485;
  --red-300: #e05354;
  --red-400: #d72223;
  --red-500: #d3090b;
  --red-600: #be080a;
  --red-700: #940608;
  --red-800: #6a0506;
  --red-900: #3f0303;
  --ribbon-background: #0c0c0c;
  --ribbon-background-collapsed: #0c0c0c;
  --scrollbar-active-thumb-bg: #51002b;
  --search-clear-button-color: #706a69;
  --search-icon-color: #706a69;
  --search-result-background: #0c0c0c;
  --setting-group-heading-color: #dcd5d4;
  --setting-items-background: #181517;
  --setting-items-border-color: #3c383b;
  --slider-track-background: #3c383b;
  --status-bar-background: #0c0c0c;
  --status-bar-border-color: #2e2c2f;
  --status-bar-text-color: #706a69;
  --suggestion-background: #0c0c0c;
  --tab-background-active: #0c0c0c;
  --tab-container-background: #0c0c0c;
  --tab-outline-color: #2e2c2f;
  --tab-switcher-background: #0c0c0c;
  --tab-switcher-menubar-background: linear-gradient(to top, #0c0c0c, transparent);
  --tab-text-color: #9f9697;
  --tab-text-color-active: #706a69;
  --tab-text-color-focused: #706a69;
  --tab-text-color-focused-active: #706a69;
  --tab-text-color-focused-active-current: #dcd5d4;
  --tab-text-color-focused-highlighted: #ab4d7f;
  --table-add-button-border-color: #3c383b;
  --table-border-color: #3c383b;
  --table-border-radius: 8px;
  --table-drag-handle-background-active: #870048;
  --table-drag-handle-color: #9f9697;
  --table-drag-handle-color-active: #f6f7f5;
  --table-header-background-hover: #3d0020;
  --table-header-border-color: #3c383b;
  --table-header-color: #eaeae7;
  --table-row-background-hover: #2e2c2f;
  --table-selection-border-color: #870048;
  --tag-color: #ab4d7f;
  --tag-color-hover: #ab4d7f;
  --text-accent: #ab4d7f;
  --text-accent-hover: #ab4d7f;
  --text-error: #d72223;
  --text-faint: #9f9697;
  --text-highlight-bg: #7b5a07;
  --text-muted: #706a69;
  --text-muted-rgb: 112, 106, 105;
  --text-normal: #dcd5d4;
  --text-on-accent: #f6f7f5;
  --text-selection: rgba(245, 180, 13, 0.5);
  --titlebar-background: #0c0c0c;
  --titlebar-background-focused: #181517;
  --titlebar-border-color: #3c383b;
  --titlebar-text-color: #706a69;
  --titlebar-text-color-focused: #dcd5d4;
  --vault-profile-color: #dcd5d4;
  --vault-profile-color-hover: #dcd5d4;
  --yellow-100: #fce9b6;
  --yellow-200: #fada86;
  --yellow-300: #f8cb56;
  --yellow-400: #f6bc25;
  --yellow-500: #f5b40d;
  --yellow-500-B: 13;
  --yellow-500-G: 180;
  --yellow-500-R: 245;
  --yellow-600: #dda20c;
  --yellow-700: #ac7e09;
  --yellow-800: #7b5a07;
  --yellow-900: #4a3604;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(46, 44, 47);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(12, 12, 12);
  border-left-color: rgb(46, 44, 47);
  color: rgb(220, 213, 212);
}

body div#quartz-root {
  background-color: rgb(12, 12, 12);
  color: rgb(220, 213, 212);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body .page article p > em, em {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body .page article p > i, i {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body .page article p > strong, strong {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body .text-highlight {
  background-color: rgb(123, 90, 7);
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body del {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: line-through rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body p {
  color: rgb(112, 106, 105);
  outline: rgb(112, 106, 105) none 0px;
  text-decoration: rgb(112, 106, 105);
  text-decoration-color: rgb(112, 106, 105);
}`,
    links: `body a.external, footer a {
  color: rgb(221, 162, 12);
  outline: rgb(221, 162, 12) none 0px;
  text-decoration: underline rgb(221, 162, 12);
  text-decoration-color: rgb(221, 162, 12);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(171, 77, 127);
  outline: rgb(171, 77, 127) none 0px;
  text-decoration: underline rgb(171, 77, 127);
  text-decoration-color: rgb(171, 77, 127);
}

body a.internal.broken {
  color: rgb(171, 77, 127);
  outline: rgb(171, 77, 127) none 0px;
}`,
    lists: `body dd {
  color: rgb(220, 213, 212);
}

body dt {
  color: rgb(220, 213, 212);
}

body ol > li {
  color: rgb(220, 213, 212);
}

body ol.overflow {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body ul > li {
  color: rgb(220, 213, 212);
}

body ul.overflow {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(221, 162, 12);
  text-decoration: rgb(221, 162, 12);
}

body blockquote {
  background-color: rgb(24, 21, 23);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body table {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(220, 213, 212);
  margin-top: 40px;
  width: 662px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(24, 21, 23);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(35, 31, 33);
}

body td {
  border-bottom-color: rgb(220, 213, 212);
  border-bottom-width: 0px;
  border-left-color: rgb(220, 213, 212);
  border-left-width: 0px;
  border-right-color: rgb(220, 213, 212);
  border-right-width: 0px;
  border-top-color: rgb(220, 213, 212);
  border-top-width: 0px;
  color: rgb(220, 213, 212);
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
}

body th {
  border-bottom-color: rgb(234, 234, 231);
  border-bottom-width: 0px;
  border-left-color: rgb(234, 234, 231);
  border-left-width: 0px;
  border-right-color: rgb(234, 234, 231);
  border-right-width: 0px;
  border-top-color: rgb(234, 234, 231);
  border-top-left-radius: 8px;
  border-top-width: 0px;
  color: rgb(234, 234, 231);
  padding-bottom: 8px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 8px;
}

body thead {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}

body tr {
  background-color: rgb(81, 0, 43);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(171, 77, 127);
  border-left-color: rgb(171, 77, 127);
  border-right-color: rgb(171, 77, 127);
  border-top-color: rgb(171, 77, 127);
  color: rgb(171, 77, 127);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
  color: rgb(220, 213, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

body pre:has(> code) {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body figcaption {
  color: rgb(220, 213, 212);
}

body figure {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body img {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body video {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    embeds: `body .file-embed {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
}

body .footnotes {
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

body .transclude {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(135, 0, 72);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(135, 0, 72);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 106, 105);
  text-decoration: line-through rgb(112, 106, 105);
  text-decoration-color: rgb(112, 106, 105);
}

body input[type=checkbox] {
  border-bottom-color: rgb(159, 150, 151);
  border-left-color: rgb(159, 150, 151);
  border-right-color: rgb(159, 150, 151);
  border-top-color: rgb(159, 150, 151);
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 213, 212);
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}`,
    search: `body .search > .search-button {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
  color: rgb(220, 213, 212);
}

body .search > .search-container > .search-space {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 213, 212);
  outline: rgb(220, 213, 212) none 0px;
  text-decoration: rgb(220, 213, 212);
  text-decoration-color: rgb(220, 213, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 213, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 213, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(122, 0, 65);
  color: rgb(220, 213, 212);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(12, 12, 12);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(122, 0, 65);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(122, 0, 65);
  color: rgb(220, 213, 212);
}

body a.internal.tag-link::before {
  color: rgb(171, 77, 127);
}

body h1 {
  color: rgb(220, 213, 212);
}

body h2 {
  color: rgb(220, 213, 212);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 213, 212);
}

body h3 {
  color: rgb(220, 213, 212);
}

body h4 {
  color: rgb(220, 213, 212);
}

body h5 {
  color: rgb(220, 213, 212);
}

body h6 {
  color: rgb(220, 213, 212);
}

body hr {
  border-bottom-color: rgb(46, 44, 47);
  border-left-color: rgb(46, 44, 47);
  border-right-color: rgb(46, 44, 47);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-corner {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}

body ::-webkit-scrollbar-track {
  background: rgb(12, 12, 12) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 12, 12);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(112, 106, 105);
  text-decoration: rgb(112, 106, 105);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(112, 106, 105);
  text-decoration: rgb(112, 106, 105);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(112, 106, 105);
  text-decoration: rgb(112, 106, 105);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(81, 0, 43);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}`,
    footer: `body footer {
  background-color: rgb(12, 12, 12);
  border-bottom-color: rgb(46, 44, 47);
  border-left-color: rgb(46, 44, 47);
  border-right-color: rgb(46, 44, 47);
  border-top-color: rgb(46, 44, 47);
  color: rgb(112, 106, 105);
}

body footer ul li a {
  color: rgb(112, 106, 105);
  text-decoration: rgb(112, 106, 105);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 213, 212);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(112, 106, 105);
  text-decoration: rgb(112, 106, 105);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(112, 106, 105);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body li.section-li > .section .meta {
  color: rgb(112, 106, 105);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(112, 106, 105);
  text-decoration: rgb(112, 106, 105);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

body .darkmode svg {
  color: rgb(112, 106, 105);
  stroke: rgb(112, 106, 105);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

body .breadcrumb-element p {
  color: rgb(159, 150, 151);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

body .metadata {
  border-bottom-color: rgb(60, 56, 59);
  border-left-color: rgb(60, 56, 59);
  border-right-color: rgb(60, 56, 59);
  border-top-color: rgb(60, 56, 59);
  color: rgb(112, 106, 105);
}

body .metadata-properties {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

body .navigation-progress {
  background-color: rgb(12, 12, 12);
}

body .page-header h2.page-title {
  color: rgb(220, 213, 212);
}

body abbr {
  color: rgb(220, 213, 212);
  text-decoration: underline dotted rgb(220, 213, 212);
}

body details {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body input[type=text] {
  border-bottom-color: rgb(112, 106, 105);
  border-left-color: rgb(112, 106, 105);
  border-right-color: rgb(112, 106, 105);
  border-top-color: rgb(112, 106, 105);
  color: rgb(112, 106, 105);
}

body kbd {
  background-color: rgb(24, 21, 23);
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
  color: rgb(220, 213, 212);
}

body progress {
  border-bottom-color: rgb(220, 213, 212);
  border-left-color: rgb(220, 213, 212);
  border-right-color: rgb(220, 213, 212);
  border-top-color: rgb(220, 213, 212);
}

body sub {
  color: rgb(220, 213, 212);
}

body summary {
  color: rgb(220, 213, 212);
}

body sup {
  color: rgb(220, 213, 212);
}`,
  },
  light: {},
};
