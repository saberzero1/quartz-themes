import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "ink", modes: ["light"], variations: [], fonts: [] },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 0deg !important;
  --accent-l: 40% !important;
  --accent-s: 0% !important;
  --background-modifier-active-hover: rgba(102, 102, 102, 0.1) !important;
  --background-modifier-border: rgb(0, 0, 0) !important;
  --background-modifier-border-focus: rgb(0, 0, 0) !important;
  --background-modifier-border-hover: rgb(0, 0, 0) !important;
  --background-modifier-form-field: rgb(0, 0, 0) !important;
  --background-modifier-form-field-hover: rgb(0, 0, 0) !important;
  --background-primary: rgb(0, 0, 0) !important;
  --background-primary-alt: rgb(0, 0, 0) !important;
  --background-secondary: rgb(0, 0, 0) !important;
  --background-secondary-alt: rgb(0, 0, 0) !important;
  --bases-cards-background: rgb(0, 0, 0) !important;
  --bases-cards-cover-background: rgb(0, 0, 0) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-cards-shadow-hover: 0 0 0 1px rgb(0, 0, 0) !important;
  --bases-embed-border-color: rgb(0, 0, 0) !important;
  --bases-group-heading-property-color: rgb(0, 0, 0) !important;
  --bases-table-border-color: rgb(0, 0, 0) !important;
  --bases-table-cell-background-active: rgb(0, 0, 0) !important;
  --bases-table-cell-background-disabled: rgb(0, 0, 0) !important;
  --bases-table-cell-background-selected: rgba(102, 102, 102, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(0, 0, 0) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0) !important;
  --bases-table-group-background: rgb(0, 0, 0) !important;
  --bases-table-header-background: rgb(0, 0, 0) !important;
  --bases-table-header-color: rgb(0, 0, 0) !important;
  --bases-table-summary-background: rgb(0, 0, 0) !important;
  --blockquote-border-color: rgb(0, 0, 0) !important;
  --blur-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent)) !important;
  --canvas-background: rgb(0, 0, 0) !important;
  --canvas-card-label-color: rgb(0, 0, 0) !important;
  --canvas-dot-pattern: rgb(0, 0, 0) !important;
  --caret-color: rgb(0, 0, 0) !important;
  --checkbox-border-color: rgb(102, 102, 102) !important;
  --checkbox-border-color-hover: rgb(0, 0, 0) !important;
  --checkbox-color: rgb(102, 102, 102) !important;
  --checkbox-color-hover: rgb(0, 0, 0) !important;
  --checkbox-marker-color: rgb(0, 0, 0) !important;
  --checklist-done-color: rgb(0, 0, 0) !important;
  --code-background: rgb(0, 0, 0) !important;
  --code-border-color: rgb(0, 0, 0) !important;
  --code-comment: rgb(0, 0, 0) !important;
  --code-function: rgb(0, 0, 0) !important;
  --code-important: rgb(0, 0, 0) !important;
  --code-keyword: rgb(0, 0, 0) !important;
  --code-normal: rgb(0, 0, 0) !important;
  --code-operator: rgb(0, 0, 0) !important;
  --code-property: rgb(0, 0, 0) !important;
  --code-punctuation: rgb(0, 0, 0) !important;
  --code-string: rgb(0, 0, 0) !important;
  --code-tag: rgb(0, 0, 0) !important;
  --code-value: rgb(0, 0, 0) !important;
  --collapse-icon-color: rgb(0, 0, 0) !important;
  --collapse-icon-color-collapsed: rgb(102, 102, 102) !important;
  --color-accent: rgb(102, 102, 102) !important;
  --color-accent-1: rgb(0, 0, 0) !important;
  --color-accent-2: rgb(0, 0, 0) !important;
  --color-accent-hsl: 0deg,
  0%,
  40% !important;
  --color-base-00: rgb(0, 0, 0) !important;
  --color-base-05: rgb(0, 0, 0) !important;
  --color-base-10: rgb(0, 0, 0) !important;
  --color-base-100: rgb(0, 0, 0) !important;
  --color-base-15: rgb(0, 0, 0) !important;
  --color-base-20: rgb(0, 0, 0) !important;
  --color-base-25: rgb(0, 0, 0) !important;
  --color-base-30: rgb(0, 0, 0) !important;
  --color-base-35: rgb(0, 0, 0) !important;
  --color-base-40: rgb(0, 0, 0) !important;
  --color-base-45: rgb(0, 0, 0) !important;
  --color-base-50: rgb(0, 0, 0) !important;
  --color-base-55: rgb(0, 0, 0) !important;
  --color-base-60: rgb(0, 0, 0) !important;
  --color-base-65: rgb(0, 0, 0) !important;
  --color-base-70: rgb(0, 0, 0) !important;
  --color-base-75: rgb(0, 0, 0) !important;
  --color-base-80: rgb(0, 0, 0) !important;
  --color-base-85: rgb(0, 0, 0) !important;
  --color-base-90: rgb(0, 0, 0) !important;
  --color-base-95: rgb(0, 0, 0) !important;
  --dark: rgb(0, 0, 0) !important;
  --darkgray: rgb(0, 0, 0) !important;
  --divider-color: rgb(0, 0, 0) !important;
  --divider-color-hover: rgb(0, 0, 0) !important;
  --dropdown-background: rgb(0, 0, 0) !important;
  --dropdown-background-hover: rgb(0, 0, 0) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(0, 0, 0), inset 0 0 0 1px rgb(0, 0, 0) !important;
  --embed-border-start: 2px solid rgb(0, 0, 0) !important;
  --file-header-background: rgb(0, 0, 0) !important;
  --file-header-background-focused: rgb(0, 0, 0) !important;
  --flair-background: rgb(0, 0, 0) !important;
  --flair-color: rgb(0, 0, 0) !important;
  --footnote-divider-color: rgb(0, 0, 0) !important;
  --footnote-id-color: rgb(0, 0, 0) !important;
  --footnote-id-color-no-occurrences: rgb(0, 0, 0) !important;
  --graph-line: rgb(0, 0, 0) !important;
  --graph-node: rgb(0, 0, 0) !important;
  --graph-node-focused: rgb(102, 102, 102) !important;
  --graph-node-unresolved: rgb(0, 0, 0) !important;
  --graph-text: rgb(0, 0, 0) !important;
  --gray: rgb(0, 0, 0) !important;
  --heading-formatting: rgb(0, 0, 0) !important;
  --highlight: rgba(102, 102, 102, 0.3) !important;
  --hr-color: rgb(0, 0, 0) !important;
  --icon-color: rgb(0, 0, 0) !important;
  --icon-color-active: rgb(102, 102, 102) !important;
  --icon-color-focused: rgb(0, 0, 0) !important;
  --icon-color-hover: rgb(0, 0, 0) !important;
  --input-date-separator: rgb(0, 0, 0) !important;
  --input-placeholder-color: rgb(0, 0, 0) !important;
  --interactive-accent: rgb(0, 0, 0) !important;
  --interactive-accent-hover: rgb(0, 0, 0) !important;
  --interactive-accent-hsl: 0deg,
  0%,
  40% !important;
  --interactive-hover: rgb(0, 0, 0) !important;
  --interactive-normal: rgb(0, 0, 0) !important;
  --light: rgb(0, 0, 0) !important;
  --lightgray: rgb(0, 0, 0) !important;
  --link-color: rgb(102, 102, 102) !important;
  --link-color-hover: rgb(0, 0, 0) !important;
  --link-external-color: rgb(102, 102, 102) !important;
  --link-external-color-hover: rgb(0, 0, 0) !important;
  --link-unresolved-color: rgb(102, 102, 102) !important;
  --link-unresolved-decoration-color: rgba(102, 102, 102, 0.3) !important;
  --list-marker-color: rgb(0, 0, 0) !important;
  --list-marker-color-collapsed: rgb(102, 102, 102) !important;
  --list-marker-color-hover: rgb(0, 0, 0) !important;
  --menu-background: rgb(0, 0, 0) !important;
  --menu-border-color: rgb(0, 0, 0) !important;
  --metadata-border-color: rgb(0, 0, 0) !important;
  --metadata-divider-color: rgb(0, 0, 0) !important;
  --metadata-input-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color: rgb(0, 0, 0) !important;
  --metadata-label-text-color-hover: rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(0, 0, 0) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgb(0, 0, 0) !important;
  --modal-background: rgb(0, 0, 0) !important;
  --modal-border-color: rgb(0, 0, 0) !important;
  --nav-collapse-icon-color: rgb(0, 0, 0) !important;
  --nav-collapse-icon-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed-hover: rgb(0, 0, 0) !important;
  --nav-heading-color-hover: rgb(0, 0, 0) !important;
  --nav-item-background-selected: rgba(102, 102, 102, 0.15) !important;
  --nav-item-color: rgb(0, 0, 0) !important;
  --nav-item-color-active: rgb(0, 0, 0) !important;
  --nav-item-color-highlighted: rgb(102, 102, 102) !important;
  --nav-item-color-hover: rgb(0, 0, 0) !important;
  --nav-item-color-selected: rgb(0, 0, 0) !important;
  --nav-tag-color: rgb(0, 0, 0) !important;
  --nav-tag-color-active: rgb(0, 0, 0) !important;
  --nav-tag-color-hover: rgb(0, 0, 0) !important;
  --pdf-background: rgb(0, 0, 0) !important;
  --pdf-page-background: rgb(0, 0, 0) !important;
  --pdf-sidebar-background: rgb(0, 0, 0) !important;
  --pill-border-color: rgb(0, 0, 0) !important;
  --pill-border-color-hover: rgb(0, 0, 0) !important;
  --pill-color: rgb(0, 0, 0) !important;
  --pill-color-hover: rgb(0, 0, 0) !important;
  --pill-color-remove: rgb(0, 0, 0) !important;
  --pill-color-remove-hover: rgb(102, 102, 102) !important;
  --prompt-background: rgb(0, 0, 0) !important;
  --prompt-border-color: rgb(0, 0, 0) !important;
  --raised-background: color-mix(in srgb, rgb(0, 0, 0) 65%, transparent) linear-gradient(rgb(0, 0, 0), color-mix(in srgb, rgb(0, 0, 0) 65%, transparent)) !important;
  --ribbon-background: rgb(0, 0, 0) !important;
  --ribbon-background-collapsed: rgb(0, 0, 0) !important;
  --search-clear-button-color: rgb(0, 0, 0) !important;
  --search-icon-color: rgb(0, 0, 0) !important;
  --search-result-background: rgb(0, 0, 0) !important;
  --secondary: rgb(102, 102, 102) !important;
  --setting-group-heading-color: rgb(0, 0, 0) !important;
  --setting-items-background: rgb(0, 0, 0) !important;
  --setting-items-border-color: rgb(0, 0, 0) !important;
  --slider-thumb-border-color: rgb(0, 0, 0) !important;
  --slider-track-background: rgb(0, 0, 0) !important;
  --status-bar-background: rgb(0, 0, 0) !important;
  --status-bar-border-color: rgb(0, 0, 0) !important;
  --status-bar-text-color: rgb(0, 0, 0) !important;
  --suggestion-background: rgb(0, 0, 0) !important;
  --tab-background-active: rgb(0, 0, 0) !important;
  --tab-container-background: rgb(0, 0, 0) !important;
  --tab-divider-color: rgb(0, 0, 0) !important;
  --tab-outline-color: rgb(0, 0, 0) !important;
  --tab-switcher-background: rgb(0, 0, 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(102, 102, 102) !important;
  --tab-text-color: rgb(0, 0, 0) !important;
  --tab-text-color-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active: rgb(0, 0, 0) !important;
  --tab-text-color-focused-active-current: rgb(0, 0, 0) !important;
  --tab-text-color-focused-highlighted: rgb(102, 102, 102) !important;
  --table-add-button-border-color: rgb(0, 0, 0) !important;
  --table-border-color: rgb(0, 0, 0) !important;
  --table-drag-handle-background-active: rgb(0, 0, 0) !important;
  --table-drag-handle-color: rgb(0, 0, 0) !important;
  --table-header-border-color: rgb(0, 0, 0) !important;
  --table-header-color: rgb(0, 0, 0) !important;
  --table-selection: rgba(102, 102, 102, 0.1) !important;
  --table-selection-border-color: rgb(0, 0, 0) !important;
  --tag-background: rgba(102, 102, 102, 0.1) !important;
  --tag-background-hover: rgba(102, 102, 102, 0.2) !important;
  --tag-border-color: rgba(102, 102, 102, 0.15) !important;
  --tag-border-color-hover: rgba(102, 102, 102, 0.15) !important;
  --tag-color: rgb(102, 102, 102) !important;
  --tag-color-hover: rgb(102, 102, 102) !important;
  --tertiary: rgb(0, 0, 0) !important;
  --text-accent: rgb(102, 102, 102) !important;
  --text-accent-hover: rgb(0, 0, 0) !important;
  --text-faint: rgb(0, 0, 0) !important;
  --text-highlight-bg: rgba(102, 102, 102, 0.3) !important;
  --text-muted: rgb(0, 0, 0) !important;
  --text-normal: rgb(0, 0, 0) !important;
  --text-selection: rgba(102, 102, 102, 0.2) !important;
  --textHighlight: rgba(102, 102, 102, 0.3) !important;
  --titlebar-background: rgb(0, 0, 0) !important;
  --titlebar-background-focused: rgb(0, 0, 0) !important;
  --titlebar-border-color: rgb(0, 0, 0) !important;
  --titlebar-text-color: rgb(0, 0, 0) !important;
  --titlebar-text-color-focused: rgb(0, 0, 0) !important;
  --vault-profile-color: rgb(0, 0, 0) !important;
  --vault-profile-color-hover: rgb(0, 0, 0) !important;
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
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > em, html em {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > i, html i {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .page article p > strong, html strong {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body .text-highlight {
  background-color: rgba(102, 102, 102, 0.3);
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body del {
  color: rgb(0, 0, 0);
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body p {
  color: rgb(77, 77, 77);
  outline: rgb(77, 77, 77) none 0px;
  text-decoration: rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}`,
    links: `html body a.external, html footer a {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: underline rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: underline rgb(102, 102, 102);
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
  text-decoration: rgb(128, 128, 128);
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
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(77, 77, 77);
  text-decoration: line-through rgb(77, 77, 77);
  text-decoration-color: rgb(77, 77, 77);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
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
  text-decoration: rgb(0, 0, 0);
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
    scrollbars: `html body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
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
  text-decoration: rgb(77, 77, 77);
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
  text-decoration: rgb(77, 77, 77);
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
  text-decoration: rgb(77, 77, 77);
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
  text-decoration: underline dotted rgb(0, 0, 0);
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
}`,
  },
};
