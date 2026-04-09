import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ink", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 0deg !important;
  --accent-l: 40% !important;
  --accent-s: 0% !important;
  --background-modifier-active-hover: hsla(0deg,
  0%,
  40%, 0.1) !important;
  --background-modifier-border: hsl(0deg 0% 70%) !important;
  --background-modifier-border-focus: hsl(0deg 0% 60%) !important;
  --background-modifier-border-hover: hsl(0deg 0% 65%) !important;
  --background-modifier-form-field: hsl(0deg 0% 100%) !important;
  --background-modifier-form-field-hover: hsl(0deg 0% 100%) !important;
  --background-primary: hsl(0deg 0% 100%) !important;
  --background-primary-alt: hsl(0deg 0% 95%) !important;
  --background-secondary: hsl(0deg 0% 95%) !important;
  --background-secondary-alt: hsl(0deg 0% 90%) !important;
  --bases-cards-background: hsl(0deg 0% 100%) !important;
  --bases-cards-cover-background: hsl(0deg 0% 95%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(0deg 0% 70%) !important;
  --bases-cards-shadow-hover: 0 0 0 1px hsl(0deg 0% 65%) !important;
  --bases-embed-border-color: hsl(0deg 0% 70%) !important;
  --bases-group-heading-property-color: hsl(0deg 0% 30%) !important;
  --bases-table-border-color: hsl(0deg 0% 70%) !important;
  --bases-table-cell-background-active: hsl(0deg 0% 100%) !important;
  --bases-table-cell-background-disabled: hsl(0deg 0% 95%) !important;
  --bases-table-cell-background-selected: hsla(0deg,
  0%,
  40%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(0deg 0% 60%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(0deg 0% 30%) !important;
  --bases-table-group-background: hsl(0deg 0% 95%) !important;
  --bases-table-header-background: hsl(0deg 0% 100%) !important;
  --bases-table-header-color: hsl(0deg 0% 30%) !important;
  --bases-table-summary-background: hsl(0deg 0% 100%) !important;
  --blockquote-border-color: hsl(0deg 0% 30%) !important;
  --blur-background: color-mix(in srgb, hsl(0deg 0% 100%) 65%, transparent) linear-gradient(hsl(0deg 0% 100%), color-mix(in srgb, hsl(0deg 0% 100%) 65%, transparent)) !important;
  --canvas-background: hsl(0deg 0% 100%) !important;
  --canvas-card-label-color: hsl(0deg 0% 50%) !important;
  --canvas-dot-pattern: hsl(0deg 0% 70%) !important;
  --caret-color: hsl(0deg 0% 30%) !important;
  --checkbox-border-color: hsl(0deg,
  0%,
  40%) !important;
  --checkbox-border-color-hover: hsl(0deg 0% 20%) !important;
  --checkbox-color: hsl(0deg,
  0%,
  40%) !important;
  --checkbox-color-hover: hsl(0deg 0% 20%) !important;
  --checkbox-marker-color: hsl(0deg 0% 100%) !important;
  --checklist-done-color: hsl(0deg 0% 30%) !important;
  --code-background: hsl(0deg 0% 95%) !important;
  --code-border-color: hsl(0deg 0% 70%) !important;
  --code-comment: hsl(0deg 0% 50%) !important;
  --code-function: hsl(0deg 0% 25%) !important;
  --code-important: hsl(0deg 0% 20%) !important;
  --code-keyword: hsl(0deg 0% 25%) !important;
  --code-normal: hsl(0deg 0% 30%) !important;
  --code-operator: hsl(0deg 0% 10%) !important;
  --code-property: hsl(0deg 0% 5%) !important;
  --code-punctuation: hsl(0deg 0% 30%) !important;
  --code-string: hsl(0deg 0% 40%) !important;
  --code-tag: hsl(0deg 0% 0%) !important;
  --code-value: hsl(0deg 0% 35%) !important;
  --collapse-icon-color: hsl(0deg 0% 50%) !important;
  --collapse-icon-color-collapsed: hsl(0deg,
  0%,
  40%) !important;
  --color-accent: hsl(0deg,
  0%,
  40%) !important;
  --color-accent-1: hsl(0deg 0% 30%) !important;
  --color-accent-2: hsl(0deg 0% 20%) !important;
  --color-accent-hsl: 0deg,
  0%,
  40% !important;
  --color-base-00: hsl(0deg 0% 100%) !important;
  --color-base-05: hsl(0deg 0% 95%) !important;
  --color-base-10: hsl(0deg 0% 90%) !important;
  --color-base-100: hsl(0deg 0% 0%) !important;
  --color-base-15: hsl(0deg 0% 85%) !important;
  --color-base-20: hsl(0deg 0% 80%) !important;
  --color-base-25: hsl(0deg 0% 75%) !important;
  --color-base-30: hsl(0deg 0% 70%) !important;
  --color-base-35: hsl(0deg 0% 65%) !important;
  --color-base-40: hsl(0deg 0% 60%) !important;
  --color-base-45: hsl(0deg 0% 55%) !important;
  --color-base-50: hsl(0deg 0% 50%) !important;
  --color-base-55: hsl(0deg 0% 45%) !important;
  --color-base-60: hsl(0deg 0% 40%) !important;
  --color-base-65: hsl(0deg 0% 35%) !important;
  --color-base-70: hsl(0deg 0% 30%) !important;
  --color-base-75: hsl(0deg 0% 25%) !important;
  --color-base-80: hsl(0deg 0% 20%) !important;
  --color-base-85: hsl(0deg 0% 15%) !important;
  --color-base-90: hsl(0deg 0% 10%) !important;
  --color-base-95: hsl(0deg 0% 5%) !important;
  --dark: hsl(0deg 0% 0%) !important;
  --darkgray: hsl(0deg 0% 0%) !important;
  --divider-color: hsl(0deg 0% 70%) !important;
  --divider-color-hover: hsl(0deg 0% 30%) !important;
  --dropdown-background: hsl(0deg 0% 100%) !important;
  --dropdown-background-hover: hsl(0deg 0% 90%) !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(0deg 0% 70%), inset 0 0 0 1px hsl(0deg 0% 70%) !important;
  --embed-border-start: 2px solid hsl(0deg 0% 30%) !important;
  --file-header-background: hsl(0deg 0% 100%) !important;
  --file-header-background-focused: hsl(0deg 0% 100%) !important;
  --flair-background: hsl(0deg 0% 100%) !important;
  --flair-color: hsl(0deg 0% 0%) !important;
  --footnote-divider-color: hsl(0deg 0% 70%) !important;
  --footnote-id-color: hsl(0deg 0% 30%) !important;
  --footnote-id-color-no-occurrences: hsl(0deg 0% 50%) !important;
  --graph-line: hsl(0deg 0% 65%) !important;
  --graph-node: hsl(0deg 0% 30%) !important;
  --graph-node-focused: hsl(0deg,
  0%,
  40%) !important;
  --graph-node-unresolved: hsl(0deg 0% 50%) !important;
  --graph-text: hsl(0deg 0% 0%) !important;
  --gray: hsl(0deg 0% 30%) !important;
  --heading-formatting: hsl(0deg 0% 50%) !important;
  --highlight: hsla(0deg,
  0%,
  40%, 0.3) !important;
  --hr-color: hsl(0deg 0% 70%) !important;
  --icon-color: hsl(0deg 0% 30%) !important;
  --icon-color-active: hsl(0deg,
  0%,
  40%) !important;
  --icon-color-focused: hsl(0deg 0% 0%) !important;
  --icon-color-hover: hsl(0deg 0% 30%) !important;
  --input-date-separator: hsl(0deg 0% 50%) !important;
  --input-placeholder-color: hsl(0deg 0% 50%) !important;
  --interactive-accent: hsl(0deg 0% 30%) !important;
  --interactive-accent-hover: hsl(0deg 0% 20%) !important;
  --interactive-accent-hsl: 0deg,
  0%,
  40% !important;
  --interactive-hover: hsl(0deg 0% 90%) !important;
  --interactive-normal: hsl(0deg 0% 100%) !important;
  --light: hsl(0deg 0% 100%) !important;
  --lightgray: hsl(0deg 0% 95%) !important;
  --link-color: hsl(0deg,
  0%,
  40%) !important;
  --link-color-hover: hsl(0deg 0% 20%) !important;
  --link-external-color: hsl(0deg,
  0%,
  40%) !important;
  --link-external-color-hover: hsl(0deg 0% 20%) !important;
  --link-unresolved-color: hsl(0deg,
  0%,
  40%) !important;
  --link-unresolved-decoration-color: hsla(0deg,
  0%,
  40%, 0.3) !important;
  --list-marker-color: hsl(0deg 0% 50%) !important;
  --list-marker-color-collapsed: hsl(0deg,
  0%,
  40%) !important;
  --list-marker-color-hover: hsl(0deg 0% 30%) !important;
  --menu-background: hsl(0deg 0% 95%) !important;
  --menu-border-color: hsl(0deg 0% 65%) !important;
  --metadata-border-color: hsl(0deg 0% 70%) !important;
  --metadata-divider-color: hsl(0deg 0% 70%) !important;
  --metadata-input-text-color: hsl(0deg 0% 0%) !important;
  --metadata-label-text-color: hsl(0deg 0% 30%) !important;
  --metadata-label-text-color-hover: hsl(0deg 0% 30%) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(0deg 0% 60%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px hsl(0deg 0% 65%) !important;
  --modal-background: hsl(0deg 0% 100%) !important;
  --modal-border-color: hsl(0deg 0% 60%) !important;
  --nav-collapse-icon-color: hsl(0deg 0% 50%) !important;
  --nav-collapse-icon-color-collapsed: hsl(0deg 0% 50%) !important;
  --nav-heading-color: hsl(0deg 0% 0%) !important;
  --nav-heading-color-collapsed: hsl(0deg 0% 50%) !important;
  --nav-heading-color-collapsed-hover: hsl(0deg 0% 30%) !important;
  --nav-heading-color-hover: hsl(0deg 0% 0%) !important;
  --nav-item-background-selected: hsla(0deg,
  0%,
  40%, 0.15) !important;
  --nav-item-color: hsl(0deg 0% 30%) !important;
  --nav-item-color-active: hsl(0deg 0% 0%) !important;
  --nav-item-color-highlighted: hsl(0deg,
  0%,
  40%) !important;
  --nav-item-color-hover: hsl(0deg 0% 0%) !important;
  --nav-item-color-selected: hsl(0deg 0% 0%) !important;
  --nav-tag-color: hsl(0deg 0% 50%) !important;
  --nav-tag-color-active: hsl(0deg 0% 30%) !important;
  --nav-tag-color-hover: hsl(0deg 0% 30%) !important;
  --pdf-background: hsl(0deg 0% 100%) !important;
  --pdf-page-background: hsl(0deg 0% 100%) !important;
  --pdf-sidebar-background: hsl(0deg 0% 100%) !important;
  --pill-border-color: hsl(0deg 0% 70%) !important;
  --pill-border-color-hover: hsl(0deg 0% 65%) !important;
  --pill-color: hsl(0deg 0% 30%) !important;
  --pill-color-hover: hsl(0deg 0% 0%) !important;
  --pill-color-remove: hsl(0deg 0% 50%) !important;
  --pill-color-remove-hover: hsl(0deg,
  0%,
  40%) !important;
  --prompt-background: hsl(0deg 0% 100%) !important;
  --prompt-border-color: hsl(0deg 0% 60%) !important;
  --raised-background: color-mix(in srgb, hsl(0deg 0% 100%) 65%, transparent) linear-gradient(hsl(0deg 0% 100%), color-mix(in srgb, hsl(0deg 0% 100%) 65%, transparent)) !important;
  --ribbon-background: hsl(0deg 0% 95%) !important;
  --ribbon-background-collapsed: hsl(0deg 0% 100%) !important;
  --search-clear-button-color: hsl(0deg 0% 30%) !important;
  --search-icon-color: hsl(0deg 0% 30%) !important;
  --search-result-background: hsl(0deg 0% 100%) !important;
  --secondary: hsl(0deg,
  0%,
  40%) !important;
  --setting-group-heading-color: hsl(0deg 0% 0%) !important;
  --setting-items-background: hsl(0deg 0% 95%) !important;
  --setting-items-border-color: hsl(0deg 0% 70%) !important;
  --slider-thumb-border-color: hsl(0deg 0% 65%) !important;
  --slider-track-background: hsl(0deg 0% 70%) !important;
  --status-bar-background: hsl(0deg 0% 95%) !important;
  --status-bar-border-color: hsl(0deg 0% 70%) !important;
  --status-bar-text-color: hsl(0deg 0% 30%) !important;
  --suggestion-background: hsl(0deg 0% 100%) !important;
  --tab-background-active: hsl(0deg 0% 100%) !important;
  --tab-container-background: hsl(0deg 0% 95%) !important;
  --tab-divider-color: hsl(0deg 0% 65%) !important;
  --tab-outline-color: hsl(0deg 0% 70%) !important;
  --tab-switcher-background: hsl(0deg 0% 95%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(0deg 0% 95%), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(0deg,
  0%,
  40%) !important;
  --tab-text-color: hsl(0deg 0% 50%) !important;
  --tab-text-color-active: hsl(0deg 0% 30%) !important;
  --tab-text-color-focused: hsl(0deg 0% 30%) !important;
  --tab-text-color-focused-active: hsl(0deg 0% 30%) !important;
  --tab-text-color-focused-active-current: hsl(0deg 0% 0%) !important;
  --tab-text-color-focused-highlighted: hsl(0deg,
  0%,
  40%) !important;
  --table-add-button-border-color: hsl(0deg 0% 70%) !important;
  --table-border-color: hsl(0deg 0% 70%) !important;
  --table-drag-handle-background-active: hsl(0deg 0% 30%) !important;
  --table-drag-handle-color: hsl(0deg 0% 50%) !important;
  --table-header-border-color: hsl(0deg 0% 70%) !important;
  --table-header-color: hsl(0deg 0% 0%) !important;
  --table-selection: hsla(0deg,
  0%,
  40%, 0.1) !important;
  --table-selection-border-color: hsl(0deg 0% 30%) !important;
  --tag-background: hsla(0deg,
  0%,
  40%, 0.1) !important;
  --tag-background-hover: hsla(0deg,
  0%,
  40%, 0.2) !important;
  --tag-border-color: hsla(0deg,
  0%,
  40%, 0.15) !important;
  --tag-border-color-hover: hsla(0deg,
  0%,
  40%, 0.15) !important;
  --tag-color: hsl(0deg,
  0%,
  40%) !important;
  --tag-color-hover: hsl(0deg,
  0%,
  40%) !important;
  --tertiary: hsl(0deg 0% 20%) !important;
  --text-accent: hsl(0deg,
  0%,
  40%) !important;
  --text-accent-hover: hsl(0deg 0% 20%) !important;
  --text-faint: hsl(0deg 0% 50%) !important;
  --text-highlight-bg: hsla(0deg,
  0%,
  40%, 0.3) !important;
  --text-muted: hsl(0deg 0% 30%) !important;
  --text-normal: hsl(0deg 0% 0%) !important;
  --text-selection: hsla(0deg,
  0%,
  40%, 0.2) !important;
  --textHighlight: hsla(0deg,
  0%,
  40%, 0.3) !important;
  --titlebar-background: hsl(0deg 0% 95%) !important;
  --titlebar-background-focused: hsl(0deg 0% 90%) !important;
  --titlebar-border-color: hsl(0deg 0% 70%) !important;
  --titlebar-text-color: hsl(0deg 0% 30%) !important;
  --titlebar-text-color-focused: hsl(0deg 0% 0%) !important;
  --vault-profile-color: hsl(0deg 0% 0%) !important;
  --vault-profile-color-hover: hsl(0deg 0% 0%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  color: rgb(0, 0, 0);
}

html body .bases-table thead th {
  border-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

html body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html body .canvas-sidebar {
  border-color: rgb(0, 0, 0);
}

html body .note-properties {
  border-color: rgb(179, 179, 179);
}

html body .note-properties-key {
  color: rgb(77, 77, 77);
}

html body .note-properties-row {
  border-color: rgb(77, 77, 77);
}

html body .note-properties-tags {
  background-color: rgba(102, 102, 102, 0.1);
  color: rgb(102, 102, 102);
}

html body .note-properties-value {
  color: rgb(77, 77, 77);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(242, 242, 242);
  color: rgb(0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(179, 179, 179);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(242, 242, 242);
  border-left-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

html body div#quartz-root {
  color: rgb(0, 0, 0);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > em, html em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > i, html i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > strong, html strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .text-highlight {
  background-color: rgba(102, 102, 102, 0.3);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body h1.article-title {
  color: rgb(0, 0, 0);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(102, 102, 102);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(102, 102, 102);
  border-color: rgb(102, 102, 102);
}

html body p {
  color: rgb(77, 77, 77);
  outline: rgb(77, 77, 77) none 0px;
  text-decoration-color: rgb(77, 77, 77);
}`,
    links: `html body a.external, html footer a {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body a.internal.broken {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: underline rgba(102, 102, 102, 0.3);
  text-decoration-color: rgba(102, 102, 102, 0.3);
}`,
    lists: `html body dd {
  color: rgb(0, 0, 0);
}

html body dt {
  color: rgb(0, 0, 0);
}

html body ol > li {
  color: rgb(0, 0, 0);
}

html body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body ul > li {
  color: rgb(0, 0, 0);
}

html body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(128, 128, 128);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body table {
  color: rgb(0, 0, 0);
}

html body td {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

html body th {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}`,
    code: `html body code {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

html body pre > code > [data-line] {
  border-left-color: rgb(64, 64, 64);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(64, 64, 64);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}

html body pre:has(> code) {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
}`,
    images: `html body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body figcaption {
  color: rgb(0, 0, 0);
}

html body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
}

html body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
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
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(242, 242, 242);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(102, 102, 102, 0.1);
  border-bottom-color: rgba(102, 102, 102, 0.15);
  border-left-color: rgba(102, 102, 102, 0.15);
  border-right-color: rgba(102, 102, 102, 0.15);
  border-top-color: rgba(102, 102, 102, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(102, 102, 102);
}

html body h1 {
  color: rgb(0, 0, 0);
}

html body h2 {
  color: rgb(0, 0, 0);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(0, 0, 0);
}

html body h3 {
  color: rgb(0, 0, 0);
}

html body h4 {
  color: rgb(0, 0, 0);
}

html body h5 {
  color: rgb(0, 0, 0);
}

html body h6 {
  color: rgb(0, 0, 0);
}

html body hr {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
}

html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(77, 77, 77);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(77, 77, 77);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}`,
    footer: `html body footer {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(77, 77, 77);
}

html body footer ul li a {
  color: rgb(77, 77, 77);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(0, 0, 0);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(77, 77, 77);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(77, 77, 77);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body li.section-li > .section .meta {
  color: rgb(77, 77, 77);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(77, 77, 77);
}

html body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html body .darkmode svg {
  color: rgb(77, 77, 77);
  stroke: rgb(77, 77, 77);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html body .breadcrumb-element p {
  color: rgb(128, 128, 128);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .metadata {
  border-bottom-color: rgb(179, 179, 179);
  border-left-color: rgb(179, 179, 179);
  border-right-color: rgb(179, 179, 179);
  border-top-color: rgb(179, 179, 179);
  color: rgb(77, 77, 77);
}

html body .metadata-properties {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html body .navigation-progress {
  background-color: rgb(242, 242, 242);
}

html body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html body abbr {
  color: rgb(0, 0, 0);
}

html body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body input[type=text] {
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html body kbd {
  background-color: rgb(242, 242, 242);
  border-bottom-color: rgb(77, 77, 77);
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  color: rgb(77, 77, 77);
}

html body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body sub {
  color: rgb(0, 0, 0);
}

html body summary {
  color: rgb(0, 0, 0);
}

html body sup {
  color: rgb(0, 0, 0);
}

html body ul.tags > li {
  background-color: rgba(102, 102, 102, 0.1);
  border-bottom-color: rgba(102, 102, 102, 0.15);
  border-left-color: rgba(102, 102, 102, 0.15);
  border-right-color: rgba(102, 102, 102, 0.15);
  border-top-color: rgba(102, 102, 102, 0.15);
  color: rgb(102, 102, 102);
}`,
  },
};
