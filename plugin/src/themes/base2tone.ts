import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "base2tone", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --D0-rgb: 207,136,74 !important;
  --background-accent: hsl(260, 14%, 45%) !important;
  --background-modifier-border: hsl(260, 16%, 35%) !important;
  --background-primary: hsl(260, 18%, 17%) !important;
  --background-primary-alt: hsl(260, 17%, 22%) !important;
  --background-secondary: hsl(260, 16%, 35%) !important;
  --background-secondary-alt: hsl(260, 17%, 22%) !important;
  --baseA0: hsl(260, 18%, 17%) !important;
  --baseA1: hsl(260, 17%, 22%) !important;
  --baseA2: hsl(260, 16%, 35%) !important;
  --baseA3: hsl(260, 15%, 40%) !important;
  --baseA4: hsl(260, 14%, 45%) !important;
  --baseA5: hsl(260, 13%, 53%) !important;
  --baseA6: hsl(260, 12%, 61%) !important;
  --baseA7: hsl(260, 11%, 69%) !important;
  --baseB0: hsl(260, 75%, 61%) !important;
  --baseB1: hsl(260, 80%, 66%) !important;
  --baseB2: hsl(260, 87%, 71%) !important;
  --baseB3: hsl(260, 97%, 76%) !important;
  --baseB4: hsl(260, 97%, 81%) !important;
  --baseB5: hsl(260, 97%, 86%) !important;
  --baseB6: hsl(260, 97%, 91%) !important;
  --baseB7: hsl(260, 100%, 96%) !important;
  --baseC0: hsl(28, 4%, 46%) !important;
  --baseC1: hsl(28, 5%, 53%) !important;
  --baseC2: hsl(28, 6%, 60%) !important;
  --baseC3: hsl(28, 6%, 67%) !important;
  --baseC4: hsl(28, 8%, 74%) !important;
  --baseC5: hsl(28, 13%, 82%) !important;
  --baseC6: hsl(28, 18%, 90%) !important;
  --baseC7: hsl(28, 23%, 98%) !important;
  --baseD0: hsl(28, 58%, 55%) !important;
  --baseD1: hsl(28, 63%, 60%) !important;
  --baseD2: hsl(28, 80%, 65%) !important;
  --baseD3: hsl(28, 85%, 68%) !important;
  --baseD4: hsl(28, 90%, 71%) !important;
  --baseD5: hsl(28, 95%, 75%) !important;
  --baseD6: hsl(28, 100%, 80%) !important;
  --baseD7: hsl(28, 100%, 85%) !important;
  --bases-cards-background: hsl(260, 18%, 17%) !important;
  --bases-cards-cover-background: hsl(260, 17%, 22%) !important;
  --bases-cards-shadow: 0 0 0 1px hsl(260, 16%, 35%) !important;
  --bases-embed-border-color: hsl(260, 16%, 35%) !important;
  --bases-group-heading-property-color: hsl(260, 97%, 91%) !important;
  --bases-table-border-color: hsl(260, 16%, 35%) !important;
  --bases-table-cell-background-active: hsl(260, 18%, 17%) !important;
  --bases-table-cell-background-disabled: hsl(260, 17%, 22%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(28, 58%, 55%) !important;
  --bases-table-group-background: hsl(260, 17%, 22%) !important;
  --bases-table-header-background: hsl(260, 18%, 17%) !important;
  --bases-table-header-color: hsl(260, 97%, 91%) !important;
  --bases-table-summary-background: hsl(260, 18%, 17%) !important;
  --blockquote-border-color: hsl(28, 58%, 55%) !important;
  --blur-background: color-mix(in srgb, hsl(260, 18%, 17%) 65%, transparent) linear-gradient(hsl(260, 18%, 17%), color-mix(in srgb, hsl(260, 18%, 17%) 65%, transparent)) !important;
  --bullet: hsl(28, 58%, 55%) !important;
  --canvas-background: hsl(260, 18%, 17%) !important;
  --canvas-card-label-color: hsl(260, 97%, 86%) !important;
  --caret-color: hsl(260, 100%, 96%) !important;
  --checkbox-border-color: hsl(260, 97%, 86%) !important;
  --checkbox-border-color-hover: hsl(260, 97%, 91%) !important;
  --checkbox-color: hsl(28, 58%, 55%) !important;
  --checkbox-color-hover: hsl(28, 63%, 60%) !important;
  --checkbox-marker-color: hsl(260, 18%, 17%) !important;
  --checklist-done-color: hsl(260, 97%, 91%) !important;
  --code-background: hsl(260, 17%, 22%) !important;
  --code-border-color: hsl(260, 16%, 35%) !important;
  --code-comment: hsl(260, 97%, 86%) !important;
  --code-normal: hsl(260, 100%, 96%) !important;
  --code-punctuation: hsl(260, 97%, 91%) !important;
  --collapse-icon-color: hsl(260, 97%, 86%) !important;
  --collapse-icon-color-collapsed: hsl(260, 75%, 61%) !important;
  --dark: hsl(260, 100%, 96%) !important;
  --darkgray: hsl(260, 100%, 96%) !important;
  --divider-color: hsl(260, 16%, 35%) !important;
  --divider-color-hover: hsl(28, 58%, 55%) !important;
  --dropdown-background: hsl(260, 18%, 17%) !important;
  --dropdown-background-hover: hsl(28, 58%, 55%) !important;
  --duo: 28 !important;
  --embed-block-shadow-hover: 0 0 0 1px hsl(260, 16%, 35%), inset 0 0 0 1px hsl(260, 16%, 35%) !important;
  --embed-border-start: 2px solid hsl(28, 58%, 55%) !important;
  --file-header-background: hsl(260, 18%, 17%) !important;
  --file-header-background-focused: hsl(260, 18%, 17%) !important;
  --flair-background: hsl(260, 18%, 17%) !important;
  --flair-color: hsl(260, 100%, 96%) !important;
  --footnote-divider-color: hsl(260, 16%, 35%) !important;
  --footnote-id-color: hsl(260, 97%, 91%) !important;
  --footnote-id-color-no-occurrences: hsl(260, 97%, 86%) !important;
  --graph-node: hsl(260, 97%, 91%) !important;
  --graph-node-focused: hsl(260, 75%, 61%) !important;
  --graph-node-unresolved: hsl(260, 97%, 86%) !important;
  --graph-text: hsl(260, 100%, 96%) !important;
  --gray: hsl(260, 97%, 91%) !important;
  --heading-formatting: hsl(260, 97%, 86%) !important;
  --highlight: hsl(28, 58%, 55%) !important;
  --hr-color: hsl(260, 16%, 35%) !important;
  --icon-color: hsl(260, 97%, 91%) !important;
  --icon-color-active: hsl(260, 75%, 61%) !important;
  --icon-color-focused: hsl(260, 100%, 96%) !important;
  --icon-color-hover: hsl(260, 97%, 91%) !important;
  --inline-code: hsl(28, 58%, 55%) !important;
  --input-date-separator: hsl(260, 97%, 86%) !important;
  --input-placeholder-color: hsl(260, 97%, 86%) !important;
  --interactive-accent: hsl(28, 58%, 55%) !important;
  --interactive-accent-hover: hsl(28, 63%, 60%) !important;
  --interactive-accent-rgb: 207,136,74 !important;
  --interactive-hover: hsl(28, 58%, 55%) !important;
  --interactive-normal: hsl(260, 18%, 17%) !important;
  --light: hsl(260, 18%, 17%) !important;
  --lightgray: hsl(260, 16%, 35%) !important;
  --link-color: hsl(260, 75%, 61%) !important;
  --link-color-hover: hsl(260, 80%, 66%) !important;
  --link-external: hsl(28, 58%, 55%) !important;
  --link-external-color: hsl(260, 75%, 61%) !important;
  --link-external-color-hover: hsl(260, 80%, 66%) !important;
  --link-internal: hsl(28, 90%, 71%) !important;
  --link-unresolved-color: hsl(260, 75%, 61%) !important;
  --list-marker-color: hsl(260, 97%, 86%) !important;
  --list-marker-color-collapsed: hsl(260, 75%, 61%) !important;
  --list-marker-color-hover: hsl(260, 97%, 91%) !important;
  --menu-background: hsl(260, 16%, 35%) !important;
  --metadata-border-color: hsl(260, 16%, 35%) !important;
  --metadata-divider-color: hsl(260, 16%, 35%) !important;
  --metadata-input-text-color: hsl(260, 100%, 96%) !important;
  --metadata-label-text-color: hsl(260, 97%, 91%) !important;
  --metadata-label-text-color-hover: hsl(260, 97%, 91%) !important;
  --modal-background: hsl(260, 18%, 17%) !important;
  --nav-collapse-icon-color: hsl(260, 97%, 86%) !important;
  --nav-collapse-icon-color-collapsed: hsl(260, 97%, 86%) !important;
  --nav-heading-color: hsl(260, 100%, 96%) !important;
  --nav-heading-color-collapsed: hsl(260, 97%, 86%) !important;
  --nav-heading-color-collapsed-hover: hsl(260, 97%, 91%) !important;
  --nav-heading-color-hover: hsl(260, 100%, 96%) !important;
  --nav-item-color: hsl(260, 97%, 91%) !important;
  --nav-item-color-active: hsl(260, 100%, 96%) !important;
  --nav-item-color-highlighted: hsl(260, 75%, 61%) !important;
  --nav-item-color-hover: hsl(260, 100%, 96%) !important;
  --nav-item-color-selected: hsl(260, 100%, 96%) !important;
  --nav-tag-color: hsl(260, 97%, 86%) !important;
  --nav-tag-color-active: hsl(260, 97%, 91%) !important;
  --nav-tag-color-hover: hsl(260, 97%, 91%) !important;
  --operators: hsl(260, 15%, 40%) !important;
  --pdf-background: hsl(260, 18%, 17%) !important;
  --pdf-page-background: hsl(260, 18%, 17%) !important;
  --pdf-shadow: 0 0 0 1px hsl(260, 16%, 35%) !important;
  --pdf-sidebar-background: hsl(260, 18%, 17%) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px hsl(260, 16%, 35%) !important;
  --pill-border-color: hsl(260, 16%, 35%) !important;
  --pill-color: hsl(260, 97%, 91%) !important;
  --pill-color-hover: hsl(260, 100%, 96%) !important;
  --pill-color-remove: hsl(260, 97%, 86%) !important;
  --pill-color-remove-hover: hsl(260, 75%, 61%) !important;
  --prompt-background: hsl(260, 18%, 17%) !important;
  --raised-background: color-mix(in srgb, hsl(260, 18%, 17%) 65%, transparent) linear-gradient(hsl(260, 18%, 17%), color-mix(in srgb, hsl(260, 18%, 17%) 65%, transparent)) !important;
  --ribbon-background: hsl(260, 16%, 35%) !important;
  --ribbon-background-collapsed: hsl(260, 18%, 17%) !important;
  --search-clear-button-color: hsl(260, 97%, 91%) !important;
  --search-icon-color: hsl(260, 97%, 91%) !important;
  --search-result-background: hsl(260, 18%, 17%) !important;
  --secondary: hsl(260, 75%, 61%) !important;
  --setting-group-heading-color: hsl(260, 100%, 96%) !important;
  --setting-items-background: hsl(260, 17%, 22%) !important;
  --setting-items-border-color: hsl(260, 16%, 35%) !important;
  --slider-track-background: hsl(260, 16%, 35%) !important;
  --status-bar-background: hsl(260, 16%, 35%) !important;
  --status-bar-border-color: hsl(260, 16%, 35%) !important;
  --status-bar-text-color: hsl(260, 97%, 91%) !important;
  --suggestion-background: hsl(260, 18%, 17%) !important;
  --tab-background-active: hsl(260, 18%, 17%) !important;
  --tab-container-background: hsl(260, 16%, 35%) !important;
  --tab-outline-color: hsl(260, 16%, 35%) !important;
  --tab-switcher-background: hsl(260, 16%, 35%) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, hsl(260, 16%, 35%), transparent) !important;
  --tab-text-color: hsl(260, 97%, 86%) !important;
  --tab-text-color-active: hsl(260, 97%, 91%) !important;
  --tab-text-color-focused: hsl(260, 97%, 91%) !important;
  --tab-text-color-focused-active: hsl(260, 97%, 91%) !important;
  --tab-text-color-focused-active-current: hsl(260, 100%, 96%) !important;
  --tab-text-color-focused-highlighted: hsl(260, 75%, 61%) !important;
  --table-add-button-border-color: hsl(260, 16%, 35%) !important;
  --table-border-color: hsl(260, 16%, 35%) !important;
  --table-drag-handle-background-active: hsl(28, 58%, 55%) !important;
  --table-drag-handle-color: hsl(260, 97%, 86%) !important;
  --table-drag-handle-color-active: hsl(28, 23%, 98%) !important;
  --table-header-border-color: hsl(260, 16%, 35%) !important;
  --table-header-color: hsl(260, 100%, 96%) !important;
  --table-selection-border-color: hsl(28, 58%, 55%) !important;
  --tag-color: hsl(260, 75%, 61%) !important;
  --tag-color-hover: hsl(260, 75%, 61%) !important;
  --tertiary: hsl(260, 80%, 66%) !important;
  --text-accent: hsl(260, 75%, 61%) !important;
  --text-accent-hover: hsl(260, 80%, 66%) !important;
  --text-faint: hsl(260, 97%, 86%) !important;
  --text-highlight-bg: hsl(28, 58%, 55%) !important;
  --text-muted: hsl(260, 97%, 91%) !important;
  --text-normal: hsl(260, 100%, 96%) !important;
  --text-on-accent: hsl(28, 23%, 98%) !important;
  --text-selection: hsla(260, 75%, 61%, 0.25) !important;
  --textHighlight: hsl(28, 58%, 55%) !important;
  --titlebar-background: hsl(260, 16%, 35%) !important;
  --titlebar-background-focused: hsl(260, 17%, 22%) !important;
  --titlebar-border-color: hsl(260, 16%, 35%) !important;
  --titlebar-text-color: hsl(260, 97%, 91%) !important;
  --titlebar-text-color-focused: hsl(260, 100%, 96%) !important;
  --uno: 260 !important;
  --vault-profile-color: hsl(260, 100%, 96%) !important;
  --vault-profile-color-hover: hsl(260, 100%, 96%) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(41, 36, 51);
  color: rgb(241, 235, 255);
}

html body .bases-table thead th {
  border-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body .canvas-node {
  border-color: rgb(241, 235, 255);
}

html body .canvas-node-content {
  color: rgb(241, 235, 255);
}

html body .canvas-node-file {
  color: rgb(241, 235, 255);
}

html body .canvas-node-group {
  border-color: rgb(241, 235, 255);
}

html body .canvas-sidebar {
  background-color: rgb(84, 75, 104);
  border-color: rgb(241, 235, 255);
}

html body .note-properties {
  border-color: rgb(84, 75, 104);
}

html body .note-properties-key {
  color: rgb(225, 210, 254);
}

html body .note-properties-row {
  border-color: rgb(225, 210, 254);
}

html body .note-properties-tags {
  color: rgb(131, 81, 230);
}

html body .note-properties-value {
  color: rgb(225, 210, 254);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(84, 75, 104);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body div#quartz-root {
  background-color: rgb(41, 36, 51);
  color: rgb(241, 235, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body .page article p > em, html em {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body .page article p > i, html i {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body .page article p > strong, html strong {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body .text-highlight {
  background-color: rgb(207, 136, 74);
  color: rgb(41, 36, 51);
  outline: rgb(41, 36, 51) none 0px;
  text-decoration-color: rgb(41, 36, 51);
}

html body del {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body h1.article-title {
  color: rgb(241, 235, 255);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(208, 185, 254);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(207, 136, 74);
  border-color: rgb(207, 136, 74);
}

html body p {
  color: rgb(225, 210, 254);
  outline: rgb(225, 210, 254) none 0px;
  text-decoration-color: rgb(225, 210, 254);
}`,
    links: `html body a.external, html footer a {
  color: rgb(207, 136, 74);
  outline: rgb(207, 136, 74) none 0px;
  text-decoration-color: rgb(207, 136, 74);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(131, 81, 230);
  outline: rgb(131, 81, 230) none 0px;
  text-decoration-color: rgb(131, 81, 230);
}

html body a.internal.broken {
  color: rgb(131, 81, 230);
  outline: rgb(131, 81, 230) none 0px;
}`,
    lists: `html body dd {
  color: rgb(241, 235, 255);
}

html body dt {
  color: rgb(241, 235, 255);
}

html body ol > li {
  color: rgb(241, 235, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body ul > li {
  color: rgb(241, 235, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(208, 185, 254);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body table {
  color: rgb(241, 235, 255);
}

html body td {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body th {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(207, 136, 74);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(207, 136, 74);
  border-top-color: rgb(207, 136, 74);
  color: rgb(207, 136, 74);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}

html body pre:has(> code) {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}`,
    images: `html body audio {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body figcaption {
  color: rgb(241, 235, 255);
}

html body figure {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body img {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body video {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
}

html body .footnotes {
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .transclude {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(208, 185, 254);
  border-left-color: rgb(208, 185, 254);
  border-right-color: rgb(208, 185, 254);
  border-top-color: rgb(208, 185, 254);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(41, 36, 51);
}

html body .search > .search-container > .search-space > * {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(241, 235, 255);
}

html body a.internal.tag-link::before {
  color: rgb(131, 81, 230);
}

html body h1 {
  color: rgb(131, 81, 230);
}

html body h2 {
  color: rgb(145, 99, 238);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(241, 235, 255);
}

html body h3 {
  color: rgb(160, 117, 245);
}

html body h4 {
  color: rgb(174, 134, 253);
}

html body h5 {
  color: rgb(191, 160, 254);
}

html body h6 {
  color: rgb(208, 185, 254);
}

html body hr {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-track {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(225, 210, 254);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(225, 210, 254);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(241, 235, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}`,
    footer: `html body footer {
  background-color: rgb(84, 75, 104);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(225, 210, 254);
}

html body footer ul li a {
  color: rgb(225, 210, 254);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(241, 235, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(225, 210, 254);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(225, 210, 254);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body li.section-li > .section .meta {
  color: rgb(225, 210, 254);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(225, 210, 254);
}

html body ul.section-ul {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body .darkmode svg {
  color: rgb(225, 210, 254);
  stroke: rgb(225, 210, 254);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body .breadcrumb-element p {
  color: rgb(208, 185, 254);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .metadata {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(225, 210, 254);
}

html body .metadata-properties {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body .navigation-progress {
  background-color: rgb(84, 75, 104);
}

html body .page-header h2.page-title {
  color: rgb(241, 235, 255);
}

html body abbr {
  color: rgb(241, 235, 255);
}

html body details {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body kbd {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body progress {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body sub {
  color: rgb(241, 235, 255);
}

html body summary {
  color: rgb(241, 235, 255);
}

html body sup {
  color: rgb(241, 235, 255);
}

html body ul.tags > li {
  color: rgb(248, 177, 114);
}`,
  },
  light: {},
};
