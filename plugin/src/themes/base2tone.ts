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
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
}

html body del {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration-color: rgb(241, 235, 255);
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
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(225, 210, 254);
  text-decoration-color: rgb(225, 210, 254);
}

html body input[type=checkbox] {
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
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(41, 36, 51);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
}`,
  },
  light: {},
};
