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
  --accent-h: 228 !important;
  --accent-l: 60% !important;
  --background-modifier-active-hover: #b9c3de !important;
  --background-modifier-border: #848ca1 !important;
  --background-modifier-border-focus: #737a8d !important;
  --background-modifier-border-hover: #7c8397 !important;
  --background-modifier-form-field: #b9c3de !important;
  --background-modifier-form-field-hover: #b9c3de !important;
  --background-primary: #b9c3de !important;
  --background-primary-alt: #b9c3de !important;
  --background-secondary: #b9c3de !important;
  --background-secondary-alt: #b0b9d3 !important;
  --bases-cards-background: #b9c3de !important;
  --bases-cards-cover-background: #b9c3de !important;
  --bases-cards-shadow: 0 0 0 1px #848ca1 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #7c8397 !important;
  --bases-embed-border-color: #848ca1 !important;
  --bases-group-heading-property-color: #3f4450 !important;
  --bases-table-border-color: #848ca1 !important;
  --bases-table-cell-background-active: #b9c3de !important;
  --bases-table-cell-background-disabled: #b9c3de !important;
  --bases-table-cell-background-selected: hsla(228, 88%, 60%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #737a8d !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(227, 88.88%, 64.5%) !important;
  --bases-table-group-background: #b9c3de !important;
  --bases-table-header-background: #b9c3de !important;
  --bases-table-header-color: #3f4450 !important;
  --bases-table-summary-background: #b9c3de !important;
  --blockquote-border-color: hsl(227, 88.88%, 64.5%) !important;
  --blur-background: color-mix(in srgb, #b9c3de 65%, transparent) linear-gradient(#b9c3de, color-mix(in srgb, #b9c3de 65%, transparent)) !important;
  --canvas-background: #b9c3de !important;
  --canvas-card-label-color: #626879 !important;
  --canvas-color-3: 190, 146, 0 !important;
  --canvas-dot-pattern: #848ca1 !important;
  --caret-color: #0b0e14 !important;
  --checkbox-border-color: #626879 !important;
  --checkbox-border-color-hover: #3f4450 !important;
  --checkbox-color: hsl(227, 88.88%, 64.5%) !important;
  --checkbox-color-hover: hsl(225, 89.76%, 69%) !important;
  --checkbox-marker-color: #b9c3de !important;
  --checklist-done-color: #3f4450 !important;
  --code-background: #b9c3de !important;
  --code-border-color: #848ca1 !important;
  --code-comment: #626879 !important;
  --code-function: rgb(190, 146, 0) !important;
  --code-normal: #0b0e14 !important;
  --code-punctuation: #3f4450 !important;
  --collapse-icon-color: #626879 !important;
  --collapse-icon-color-collapsed: hsl(228, 88%, 60%) !important;
  --color-accent: hsl(228, 88%, 60%) !important;
  --color-accent-1: hsl(227, 88.88%, 64.5%) !important;
  --color-accent-2: hsl(225, 89.76%, 69%) !important;
  --color-accent-hsl: 228, 88%, 60% !important;
  --color-base-00: #b9c3de !important;
  --color-base-05: #b0b9d3 !important;
  --color-base-10: #a7b0c9 !important;
  --color-base-100: #0b0e14 !important;
  --color-base-20: #969eb5 !important;
  --color-base-25: #8d95ab !important;
  --color-base-30: #848ca1 !important;
  --color-base-35: #7c8397 !important;
  --color-base-40: #737a8d !important;
  --color-base-50: #626879 !important;
  --color-base-60: #505664 !important;
  --color-base-70: #3f4450 !important;
  --color-yellow: rgb(190, 146, 0) !important;
  --color-yellow-rgb: 190, 146, 0 !important;
  --dark: #0b0e14 !important;
  --darkgray: #0b0e14 !important;
  --divider-color: #b9c3de !important;
  --divider-color-hover: hsl(227, 88.88%, 64.5%) !important;
  --dropdown-background: #b9c3de !important;
  --dropdown-background-hover: #a7b0c9 !important;
  --embed-block-shadow-hover: 0 0 0 1px #848ca1, inset 0 0 0 1px #848ca1 !important;
  --embed-border-start: 2px solid hsl(227, 88.88%, 64.5%) !important;
  --file-header-background: #b9c3de !important;
  --file-header-background-focused: #b9c3de !important;
  --flair-background: #b9c3de !important;
  --flair-color: #0b0e14 !important;
  --footnote-divider-color: #848ca1 !important;
  --footnote-id-color: #3f4450 !important;
  --footnote-id-color-no-occurrences: #626879 !important;
  --graph-line: #7c8397 !important;
  --graph-node: #3f4450 !important;
  --graph-node-attachment: rgb(190, 146, 0) !important;
  --graph-node-focused: hsl(228, 88%, 60%) !important;
  --graph-node-unresolved: #626879 !important;
  --graph-text: #0b0e14 !important;
  --gray: #3f4450 !important;
  --heading-formatting: #626879 !important;
  --highlight: #b9c3de !important;
  --hr-color: hsl(228, 88%, 60%) !important;
  --icon-color: #626879 !important;
  --icon-color-active: hsl(228, 88%, 60%) !important;
  --icon-color-focused: #0b0e14 !important;
  --icon-color-hover: #3f4450 !important;
  --input-date-separator: #626879 !important;
  --input-placeholder-color: #626879 !important;
  --interactive-accent: hsl(227, 88.88%, 64.5%) !important;
  --interactive-accent-hover: hsl(225, 89.76%, 69%) !important;
  --interactive-accent-hsl: 228, 88%, 60% !important;
  --interactive-hover: #a7b0c9 !important;
  --interactive-normal: #b9c3de !important;
  --light: #b9c3de !important;
  --lightgray: #b9c3de !important;
  --link-color: hsl(228, 88%, 60%) !important;
  --link-color-hover: hsl(225, 89.76%, 69%) !important;
  --link-external-color: hsl(228, 88%, 60%) !important;
  --link-external-color-hover: hsl(225, 89.76%, 69%) !important;
  --link-unresolved-color: hsl(228, 88%, 60%) !important;
  --link-unresolved-decoration-color: hsla(228, 88%, 60%, 0.3) !important;
  --list-marker-color: #626879 !important;
  --list-marker-color-collapsed: hsl(228, 88%, 60%) !important;
  --list-marker-color-hover: #3f4450 !important;
  --menu-background: #b9c3de !important;
  --menu-border-color: #7c8397 !important;
  --metadata-border-color: #848ca1 !important;
  --metadata-divider-color: #848ca1 !important;
  --metadata-input-text-color: #0b0e14 !important;
  --metadata-label-text-color: #3f4450 !important;
  --metadata-label-text-color-hover: #3f4450 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #737a8d !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #7c8397 !important;
  --modal-background: #b9c3de !important;
  --modal-border-color: #737a8d !important;
  --nav-collapse-icon-color: #626879 !important;
  --nav-collapse-icon-color-collapsed: #626879 !important;
  --nav-heading-color: #0b0e14 !important;
  --nav-heading-color-collapsed: #626879 !important;
  --nav-heading-color-collapsed-hover: #3f4450 !important;
  --nav-heading-color-hover: #0b0e14 !important;
  --nav-item-background-selected: hsla(228, 88%, 60%, 0.15) !important;
  --nav-item-color: #3f4450 !important;
  --nav-item-color-active: #0b0e14 !important;
  --nav-item-color-highlighted: hsl(228, 88%, 60%) !important;
  --nav-item-color-hover: #0b0e14 !important;
  --nav-item-color-selected: #0b0e14 !important;
  --nav-tag-color: #626879 !important;
  --nav-tag-color-active: #3f4450 !important;
  --nav-tag-color-hover: #3f4450 !important;
  --pdf-background: #b9c3de !important;
  --pdf-page-background: #b9c3de !important;
  --pdf-sidebar-background: #b9c3de !important;
  --pill-border-color: #848ca1 !important;
  --pill-border-color-hover: #7c8397 !important;
  --pill-color: #3f4450 !important;
  --pill-color-hover: #0b0e14 !important;
  --pill-color-remove: #626879 !important;
  --pill-color-remove-hover: hsl(228, 88%, 60%) !important;
  --prompt-background: #b9c3de !important;
  --prompt-border-color: #737a8d !important;
  --raised-background: color-mix(in srgb, #b9c3de 65%, transparent) linear-gradient(#b9c3de, color-mix(in srgb, #b9c3de 65%, transparent)) !important;
  --ribbon-background: #b9c3de !important;
  --ribbon-background-collapsed: #b9c3de !important;
  --search-clear-button-color: #3f4450 !important;
  --search-icon-color: #3f4450 !important;
  --search-result-background: #b9c3de !important;
  --secondary: hsl(228, 88%, 60%) !important;
  --setting-group-heading-color: #0b0e14 !important;
  --setting-items-background: #b9c3de !important;
  --setting-items-border-color: #848ca1 !important;
  --slider-thumb-border-color: #7c8397 !important;
  --slider-track-background: #848ca1 !important;
  --status-bar-background: #b9c3de !important;
  --status-bar-border-color: #b9c3de !important;
  --status-bar-text-color: #3f4450 !important;
  --suggestion-background: #b9c3de !important;
  --sync-avatar-color-3: rgb(190, 146, 0) !important;
  --tab-background-active: #b9c3de !important;
  --tab-container-background: #b9c3de !important;
  --tab-divider-color: #b9c3de !important;
  --tab-outline-color: #b9c3de !important;
  --tab-switcher-background: #b9c3de !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #b9c3de, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(228, 88%, 60%) !important;
  --tab-text-color: #626879 !important;
  --tab-text-color-active: #3f4450 !important;
  --tab-text-color-focused: #3f4450 !important;
  --tab-text-color-focused-active: #3f4450 !important;
  --tab-text-color-focused-active-current: #0b0e14 !important;
  --tab-text-color-focused-highlighted: hsl(228, 88%, 60%) !important;
  --table-add-button-border-color: #848ca1 !important;
  --table-border-color: #848ca1 !important;
  --table-drag-handle-background-active: hsl(227, 88.88%, 64.5%) !important;
  --table-drag-handle-color: #626879 !important;
  --table-header-border-color: #848ca1 !important;
  --table-header-color: #0b0e14 !important;
  --table-selection: hsla(228, 88%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(227, 88.88%, 64.5%) !important;
  --tag-background: hsla(228, 88%, 60%, 0.1) !important;
  --tag-background-hover: hsla(228, 88%, 60%, 0.2) !important;
  --tag-border-color: hsla(228, 88%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(228, 88%, 60%, 0.15) !important;
  --tag-color: hsl(228, 88%, 60%) !important;
  --tag-color-hover: hsl(228, 88%, 60%) !important;
  --tertiary: hsl(225, 89.76%, 69%) !important;
  --text-accent: hsl(228, 88%, 60%) !important;
  --text-accent-hover: hsl(225, 89.76%, 69%) !important;
  --text-faint: #626879 !important;
  --text-muted: #3f4450 !important;
  --text-normal: #0b0e14 !important;
  --text-selection: hsla(228, 88%, 60%, 0.2) !important;
  --textHighlight: #b9c3de !important;
  --titlebar-background: #b9c3de !important;
  --titlebar-background-focused: #b9c3de !important;
  --titlebar-border-color: #848ca1 !important;
  --titlebar-text-color: #3f4450 !important;
  --titlebar-text-color-focused: #0b0e14 !important;
  --vault-profile-color: #0b0e14 !important;
  --vault-profile-color-hover: #0b0e14 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

html body .bases-table thead th {
  border-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

html body .canvas-node {
  border-color: rgb(11, 14, 20);
}

html body .canvas-node-content {
  color: rgb(11, 14, 20);
}

html body .canvas-node-file {
  color: rgb(11, 14, 20);
}

html body .canvas-node-group {
  border-color: rgb(11, 14, 20);
}

html body .canvas-sidebar {
  background-color: rgb(185, 195, 222);
  border-color: rgb(11, 14, 20);
}

html body .note-properties {
  border-color: rgb(132, 140, 161);
}

html body .note-properties-key {
  color: rgb(63, 68, 80);
}

html body .note-properties-row {
  border-color: rgb(63, 68, 80);
}

html body .note-properties-tags {
  background-color: rgba(63, 99, 243, 0.1);
  color: rgb(63, 99, 243);
}

html body .note-properties-value {
  color: rgb(63, 68, 80);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(185, 195, 222);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(185, 195, 222);
  border-left-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}

html body div#quartz-root {
  background-color: rgb(185, 195, 222);
  color: rgb(11, 14, 20);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body .page article p > em, html em {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body .page article p > i, html i {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body .page article p > strong, html strong {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body .text-highlight {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body del {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body h1.article-title {
  color: rgb(11, 14, 20);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(98, 104, 121);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(84, 119, 245);
  border-color: rgb(84, 119, 245);
}

html body p {
  color: rgb(63, 68, 80);
  outline: rgb(63, 68, 80) none 0px;
  text-decoration-color: rgb(63, 68, 80);
}`,
    links: `html body a.external, html footer a {
  color: rgb(63, 99, 243);
  outline: rgb(63, 99, 243) none 0px;
  text-decoration-color: rgb(63, 99, 243);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(63, 99, 243);
  outline: rgb(63, 99, 243) none 0px;
  text-decoration-color: rgb(63, 99, 243);
}

html body a.internal.broken {
  color: rgb(63, 99, 243);
  outline: rgb(63, 99, 243) none 0px;
  text-decoration: underline rgba(63, 99, 243, 0.3);
  text-decoration-color: rgba(63, 99, 243, 0.3);
}`,
    lists: `html body dd {
  color: rgb(11, 14, 20);
}

html body dt {
  color: rgb(11, 14, 20);
}

html body ol > li {
  color: rgb(11, 14, 20);
}

html body ol.overflow {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body ul > li {
  color: rgb(11, 14, 20);
}

html body ul.overflow {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(98, 104, 121);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body table {
  color: rgb(11, 14, 20);
}

html body td {
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

html body th {
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}`,
    code: `html body code {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

html body pre > code > [data-line] {
  border-left-color: rgb(190, 146, 0);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(190, 146, 0);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(190, 146, 0);
  border-left-color: rgb(190, 146, 0);
  border-right-color: rgb(190, 146, 0);
  border-top-color: rgb(190, 146, 0);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
}

html body pre:has(> code) {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
}`,
    images: `html body audio {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body figcaption {
  color: rgb(11, 14, 20);
}

html body figure {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body img {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body video {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
}

html body .footnotes {
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

html body .transclude {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(84, 119, 245);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body .transclude-inner {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(98, 104, 121);
  border-left-color: rgb(98, 104, 121);
  border-right-color: rgb(98, 104, 121);
  border-top-color: rgb(98, 104, 121);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(11, 14, 20);
  text-decoration-color: rgb(11, 14, 20);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(11, 14, 20);
}

html body .search > .search-container > .search-space {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(115, 122, 141);
  border-left-color: rgb(115, 122, 141);
  border-right-color: rgb(115, 122, 141);
  border-top-color: rgb(115, 122, 141);
}

html body .search > .search-container > .search-space > * {
  color: rgb(11, 14, 20);
  outline: rgb(11, 14, 20) none 0px;
  text-decoration-color: rgb(11, 14, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(11, 14, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(11, 14, 20);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(11, 14, 20);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(115, 122, 141);
  border-left-color: rgb(115, 122, 141);
  border-right-color: rgb(115, 122, 141);
  border-top-color: rgb(115, 122, 141);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(185, 195, 222);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(11, 14, 20);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(63, 99, 243, 0.1);
  border-bottom-color: rgba(63, 99, 243, 0.15);
  border-left-color: rgba(63, 99, 243, 0.15);
  border-right-color: rgba(63, 99, 243, 0.15);
  border-top-color: rgba(63, 99, 243, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(63, 99, 243);
}

html body h1 {
  color: rgb(11, 14, 20);
}

html body h2 {
  color: rgb(11, 14, 20);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(11, 14, 20);
}

html body h3 {
  color: rgb(11, 14, 20);
}

html body h4 {
  color: rgb(11, 14, 20);
}

html body h5 {
  color: rgb(11, 14, 20);
}

html body h6 {
  color: rgb(11, 14, 20);
}

html body hr {
  border-bottom-color: rgb(185, 195, 222);
  border-left-color: rgb(185, 195, 222);
  border-right-color: rgb(185, 195, 222);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
}

html body ::-webkit-scrollbar {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}

html body ::-webkit-scrollbar-track {
  background: rgb(185, 195, 222) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(185, 195, 222);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 68, 80);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 68, 80);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(11, 14, 20);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(98, 104, 121);
  border-left-color: rgb(98, 104, 121);
  border-right-color: rgb(98, 104, 121);
  border-top-color: rgb(98, 104, 121);
  color: rgb(98, 104, 121);
}`,
    footer: `html body footer {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(185, 195, 222);
  border-left-color: rgb(185, 195, 222);
  border-right-color: rgb(185, 195, 222);
  border-top-color: rgb(185, 195, 222);
  color: rgb(63, 68, 80);
}

html body footer ul li a {
  color: rgb(63, 68, 80);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(11, 14, 20);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 68, 80);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 68, 80);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body li.section-li > .section .meta {
  color: rgb(63, 68, 80);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 68, 80);
}

html body ul.section-ul {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(98, 104, 121);
  border-left-color: rgb(98, 104, 121);
  border-right-color: rgb(98, 104, 121);
  border-top-color: rgb(98, 104, 121);
  color: rgb(98, 104, 121);
}

html body .darkmode svg {
  color: rgb(98, 104, 121);
  stroke: rgb(98, 104, 121);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
  color: rgb(63, 68, 80);
}

html body .breadcrumb-element p {
  color: rgb(98, 104, 121);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

html body .metadata {
  border-bottom-color: rgb(132, 140, 161);
  border-left-color: rgb(132, 140, 161);
  border-right-color: rgb(132, 140, 161);
  border-top-color: rgb(132, 140, 161);
  color: rgb(63, 68, 80);
}

html body .metadata-properties {
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
  color: rgb(63, 68, 80);
}

html body .navigation-progress {
  background-color: rgb(185, 195, 222);
}

html body .page-header h2.page-title {
  color: rgb(11, 14, 20);
}

html body abbr {
  color: rgb(11, 14, 20);
}

html body details {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body input[type=text] {
  border-bottom-color: rgb(63, 68, 80);
  border-left-color: rgb(63, 68, 80);
  border-right-color: rgb(63, 68, 80);
  border-top-color: rgb(63, 68, 80);
  color: rgb(63, 68, 80);
}

html body kbd {
  background-color: rgb(185, 195, 222);
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
  color: rgb(11, 14, 20);
}

html body progress {
  border-bottom-color: rgb(11, 14, 20);
  border-left-color: rgb(11, 14, 20);
  border-right-color: rgb(11, 14, 20);
  border-top-color: rgb(11, 14, 20);
}

html body sub {
  color: rgb(11, 14, 20);
}

html body summary {
  color: rgb(11, 14, 20);
}

html body sup {
  color: rgb(11, 14, 20);
}

html body ul.tags > li {
  background-color: rgba(63, 99, 243, 0.1);
  border-bottom-color: rgba(63, 99, 243, 0.15);
  border-left-color: rgba(63, 99, 243, 0.15);
  border-right-color: rgba(63, 99, 243, 0.15);
  border-top-color: rgba(63, 99, 243, 0.15);
  color: rgb(63, 99, 243);
}`,
  },
};
