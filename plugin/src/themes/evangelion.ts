import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "evangelion", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #2c1c42 !important;
  --background-modifier-cover: #151515 !important;
  --background-modifier-error: #db6088 !important;
  --background-modifier-error-hover: #db6088 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #8edf5f !important;
  --background-primary: #201430 !important;
  --background-primary-alt: #39274c !important;
  --background-secondary: #452f5c !important;
  --background-secondary-alt: #483160 !important;
  --bases-cards-background: #201430 !important;
  --bases-cards-cover-background: #39274c !important;
  --bases-cards-shadow: 0 0 0 1px #2c1c42 !important;
  --bases-embed-border-color: #2c1c42 !important;
  --bases-group-heading-property-color: #d4d4d4 !important;
  --bases-table-border-color: #483160 !important;
  --bases-table-cell-background-active: #201430 !important;
  --bases-table-cell-background-disabled: #39274c !important;
  --bases-table-cell-background-selected: #9cda7c !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #8edf5f !important;
  --bases-table-group-background: #39274c !important;
  --bases-table-header-background: #201430 !important;
  --bases-table-header-color: #d4d4d4 !important;
  --bases-table-summary-background: #201430 !important;
  --blockquote-border-color: #8edf5f !important;
  --blur-background: color-mix(in srgb, #43492a 65%, transparent) linear-gradient(#43492a, color-mix(in srgb, #43492a 65%, transparent)) !important;
  --button-radius: 0px !important;
  --callout-blend-mode: darken;
  --canvas-background: #201430 !important;
  --canvas-card-label-color: #ada4a0 !important;
  --caret-color: #e1d6f8 !important;
  --checkbox-border-color: #ada4a0 !important;
  --checkbox-border-color-hover: #d4d4d4 !important;
  --checkbox-color: #8edf5f !important;
  --checkbox-color-hover: #87ff5f !important;
  --checkbox-marker-color: #201430 !important;
  --checklist-done-color: #d4d4d4 !important;
  --code-background: #30213f !important;
  --code-border-color: #2c1c42 !important;
  --code-comment: #a1a0ad !important;
  --code-function: #9cda7c !important;
  --code-important: #8bd450 !important;
  --code-keyword: #87ff5f !important;
  --code-normal: #e1d6f8 !important;
  --code-operator: #b968fc !important;
  --code-property: #ce67f0 !important;
  --code-punctuation: #b968fc !important;
  --code-string: #ab92fc !important;
  --code-tag: #e6bb85 !important;
  --code-value: #d99145 !important;
  --collapse-icon-color: #ada4a0 !important;
  --collapse-icon-color-collapsed: #875faf !important;
  --dark: #e1d6f8 !important;
  --darkgray: #e1d6f8 !important;
  --divider-color: #452f5c !important;
  --divider-color-hover: #39274c !important;
  --dropdown-background: #39274c !important;
  --dropdown-background-hover: #444444 !important;
  --embed-block-shadow-hover: 0 0 0 1px #2c1c42, inset 0 0 0 1px #2c1c42 !important;
  --embed-border-start: 2px solid #8edf5f !important;
  --file-header-background: #201430 !important;
  --file-header-background-focused: #201430 !important;
  --flair-background: #43492a !important;
  --flair-color: #e1d6f8 !important;
  --footnote-divider-color: #2c1c42 !important;
  --footnote-id-color: #d4d4d4 !important;
  --footnote-id-color-no-occurrences: #ada4a0 !important;
  --graph-node: #d4d4d4 !important;
  --graph-node-focused: #875faf !important;
  --graph-node-unresolved: #ada4a0 !important;
  --graph-text: #e1d6f8 !important;
  --gray: #d4d4d4 !important;
  --heading-formatting: #ada4a0 !important;
  --highlight: rgba(135, 255, 95, 0.85) !important;
  --highlight-mix-blend-mode: darken !important;
  --hr-color: #2c1c42 !important;
  --icon-color: #d4d4d4 !important;
  --icon-color-active: #875faf !important;
  --icon-color-focused: #e1d6f8 !important;
  --icon-color-hover: #d4d4d4 !important;
  --input-date-separator: #ada4a0 !important;
  --input-placeholder-color: #ada4a0 !important;
  --input-radius: 0px !important;
  --interactive-accent: #8edf5f !important;
  --interactive-accent-hover: #87ff5f !important;
  --interactive-hover: #444444 !important;
  --interactive-normal: #43492a !important;
  --interactive-success: #8edf5f !important;
  --light: #201430 !important;
  --lightgray: #452f5c !important;
  --link-color: #b968fc !important;
  --link-color-hover: #ce67f0 !important;
  --link-decoration: dashed !important;
  --link-external-color: #b968fc !important;
  --link-external-color-hover: #ce67f0 !important;
  --link-external-decoration: wavy !important;
  --link-unresolved-color: #666 !important;
  --link-unresolved-decoration-color: #9f50e1 !important;
  --list-marker-color: #ada4a0 !important;
  --list-marker-color-collapsed: #875faf !important;
  --list-marker-color-hover: #d4d4d4 !important;
  --menu-background: #452f5c !important;
  --metadata-border-color: #2c1c42 !important;
  --metadata-divider-color: #2c1c42 !important;
  --metadata-input-text-color: #e1d6f8 !important;
  --metadata-label-text-color: #d4d4d4 !important;
  --metadata-label-text-color-hover: #d4d4d4 !important;
  --modal-background: #201430 !important;
  --nav-collapse-icon-color: #d99145 !important;
  --nav-collapse-icon-color-collapsed: #c88034 !important;
  --nav-heading-color: #e1d6f8 !important;
  --nav-heading-color-collapsed: #ada4a0 !important;
  --nav-heading-color-collapsed-hover: #d4d4d4 !important;
  --nav-heading-color-hover: #e1d6f8 !important;
  --nav-indentation-guide-color: #28163b !important;
  --nav-item-color: #d4d4d4 !important;
  --nav-item-color-active: #e1d6f8 !important;
  --nav-item-color-highlighted: #875faf !important;
  --nav-item-color-hover: #e1d6f8 !important;
  --nav-item-color-selected: #e1d6f8 !important;
  --nav-tag-color: #ada4a0 !important;
  --nav-tag-color-active: #d4d4d4 !important;
  --nav-tag-color-hover: #d4d4d4 !important;
  --pdf-background: #201430 !important;
  --pdf-page-background: #201430 !important;
  --pdf-shadow: 0 0 0 1px #2c1c42 !important;
  --pdf-sidebar-background: #201430 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #2c1c42 !important;
  --pill-border-color: #2c1c42 !important;
  --pill-color: #d4d4d4 !important;
  --pill-color-hover: #e1d6f8 !important;
  --pill-color-remove: #ada4a0 !important;
  --pill-color-remove-hover: #875faf !important;
  --prompt-background: #201430 !important;
  --prompt-border-color: #67478a !important;
  --raised-background: color-mix(in srgb, #43492a 65%, transparent) linear-gradient(#43492a, color-mix(in srgb, #43492a 65%, transparent)) !important;
  --ribbon-background: #483160 !important;
  --ribbon-background-collapsed: #201430 !important;
  --scrollbar-active-th: rgba(255, 255, 255, 0.2) !important;
  --search-clear-button-color: #d4d4d4 !important;
  --search-icon-color: #d4d4d4 !important;
  --search-result-background: #201430 !important;
  --secondary: #875faf !important;
  --setting-group-heading-color: #e1d6f8 !important;
  --setting-items-background: #39274c !important;
  --setting-items-border-color: #2c1c42 !important;
  --slider-track-background: #2c1c42 !important;
  --status-bar-background: #452f5c !important;
  --status-bar-border-color: #452f5c !important;
  --status-bar-text-color: #d4d4d4 !important;
  --suggestion-background: #201430 !important;
  --tab-background-active: #201430 !important;
  --tab-container-background: #452f5c !important;
  --tab-curve: 0 !important;
  --tab-gap: 5px !important;
  --tab-outline-color: #452f5c !important;
  --tab-radius: 0 !important;
  --tab-radius-active: 0 !important;
  --tab-switcher-background: #452f5c !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #452f5c, transparent) !important;
  --tab-text-color: #ada4a0 !important;
  --tab-text-color-active: #d4d4d4 !important;
  --tab-text-color-focused: #d4d4d4 !important;
  --tab-text-color-focused-active: #d4d4d4 !important;
  --tab-text-color-focused-active-current: #e1d6f8 !important;
  --tab-text-color-focused-highlighted: #875faf !important;
  --table-add-button-background: #452f5c !important;
  --table-add-button-border-color: #e1d6f8 !important;
  --table-add-button-border-width: 0 !important;
  --table-border-color: #483160 !important;
  --table-border-width: 1 !important;
  --table-column-first-border-width: 1 !important;
  --table-column-last-border-width: 1 !important;
  --table-drag-handle-background: #452f5c !important;
  --table-drag-handle-background-active: #87ff5f !important;
  --table-drag-handle-color: #e1d6f8 !important;
  --table-drag-handle-color-active: #d4d4d4 !important;
  --table-header-background: #9f50e1 !important;
  --table-header-border-color: #9f50e1 !important;
  --table-header-border-width: 1 !important;
  --table-header-color: #000000 !important;
  --table-row-last-border-width: 1 !important;
  --table-selection: #9cda7c !important;
  --table-selection-blend-mode: darken !important;
  --table-selection-border-color: #87ff5f !important;
  --table-selection-border-width: 1 !important;
  --table-text-color: #e1d6f8 !important;
  --tag-background: #67478a !important;
  --tag-color: #87ff5f !important;
  --tag-color-hover: #875faf !important;
  --tag-radius: 0px !important;
  --tertiary: #875faf !important;
  --text-accent: #875faf !important;
  --text-accent-hover: #875faf !important;
  --text-error: #db6088 !important;
  --text-error-hover: #db6088 !important;
  --text-faint: #ada4a0 !important;
  --text-highlight-bg: rgba(135, 255, 95, 0.85) !important;
  --text-highlight-bg-active: rgb(135, 255, 95) !important;
  --text-muted: #d4d4d4 !important;
  --text-muted-rgb: 153, 153, 153 !important;
  --text-normal: #e1d6f8 !important;
  --text-on-accent: #d4d4d4 !important;
  --text-selection: #9cda7c !important;
  --textHighlight: rgba(135, 255, 95, 0.85) !important;
  --titlebar-background: #452f5c !important;
  --titlebar-background-focused: #483160 !important;
  --titlebar-border-color: #2c1c42 !important;
  --titlebar-text-color: #d4d4d4 !important;
  --titlebar-text-color-focused: #e1d6f8 !important;
  --vault-profile-color: #e1d6f8 !important;
  --vault-profile-color-hover: #e1d6f8 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(69, 47, 92);
  color: rgb(225, 214, 248);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body .bases-table thead th {
  border-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html body .canvas-node {
  border-color: rgb(225, 214, 248);
}

html body .canvas-node-content {
  color: rgb(225, 214, 248);
}

html body .canvas-node-file {
  color: rgb(225, 214, 248);
}

html body .canvas-node-group {
  border-color: rgb(225, 214, 248);
}

html body .canvas-sidebar {
  background-color: rgb(69, 47, 92);
  border-color: rgb(225, 214, 248);
}

html body .note-properties {
  border-color: rgb(44, 28, 66);
}

html body .note-properties-key {
  color: rgb(212, 212, 212);
}

html body .note-properties-row {
  border-color: rgb(212, 212, 212) rgb(212, 212, 212) rgb(21, 21, 21);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  border-radius: 0px;
  color: rgb(135, 255, 95);
}

html body .note-properties-value {
  color: rgb(212, 212, 212);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(69, 47, 92);
  color: rgb(225, 214, 248);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(72, 49, 96);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(69, 47, 92);
  border-left-color: rgb(72, 49, 96);
  color: rgb(225, 214, 248);
}

html body div#quartz-root {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(119, 249, 155);
  font-weight: 700;
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .page article p > em, html em {
  color: rgb(119, 249, 155);
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .page article p > i, html i {
  color: rgb(119, 249, 155);
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .page article p > strong, html strong {
  color: rgb(119, 249, 155);
  font-weight: 700;
  outline: rgb(119, 249, 155) none 0px;
  text-decoration-color: rgb(119, 249, 155);
}

html body .text-highlight {
  background-color: rgba(135, 255, 95, 0.85);
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration-color: rgb(225, 214, 248);
}

html body del {
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration-color: rgb(225, 214, 248);
}

html body h1.article-title {
  color: rgb(225, 214, 248);
}

html body li.task-list-item input[type="checkbox"] {
  background-color: rgb(57, 39, 76);
  border-color: rgb(135, 95, 175);
  border-radius: 2px;
  border-width: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(57, 39, 76);
  border-color: rgb(135, 95, 175);
}

html body p {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration-color: rgb(212, 212, 212);
}`,
    links: `html body a.external, html footer a {
  color: rgb(185, 104, 252);
  outline: rgb(185, 104, 252) none 0px;
  text-decoration-color: rgb(185, 104, 252);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(185, 104, 252);
  outline: rgb(185, 104, 252) none 0px;
  text-decoration-color: rgb(185, 104, 252);
}

html body a.internal.broken {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(159, 80, 225);
  text-decoration-color: rgb(159, 80, 225);
}`,
    lists: `html body dd {
  color: rgb(225, 214, 248);
}

html body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

html body dt {
  color: rgb(225, 214, 248);
}

html body ol > li {
  color: rgb(225, 214, 248);
}

html body ol.overflow {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body ul > li {
  color: rgb(225, 214, 248);
}

html body ul.overflow {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(119, 249, 155);
}

html body blockquote {
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body table {
  color: rgb(225, 214, 248);
  margin-top: 10px;
  width: 814.375px;
}

html body td {
  border-bottom-color: rgb(225, 214, 248);
  border-bottom-width: 0px;
  border-left-color: rgb(225, 214, 248);
  border-left-width: 0px;
  border-right-color: rgb(225, 214, 248);
  border-right-width: 0px;
  border-top-color: rgb(225, 214, 248);
  border-top-width: 0px;
  color: rgb(225, 214, 248);
}

html body th {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  color: rgb(0, 0, 0);
}

html body thead {
  background-color: rgb(159, 80, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html body tr {
  background-color: rgb(159, 80, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `html body code {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(225, 214, 248);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(225, 214, 248);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(225, 214, 248);
}

html body pre > code > [data-line] {
  border-left-color: rgb(135, 255, 95);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(135, 255, 95);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body figcaption {
  color: rgb(225, 214, 248);
}

html body figure {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  margin-bottom: 0px;
  margin-top: 0px;
}

html body img {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body video {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html body .footnotes {
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .transclude {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(142, 223, 95);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body .transclude-inner {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(135, 95, 175);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 2px;
  border-left-color: rgb(135, 95, 175);
  border-left-width: 2px;
  border-right-color: rgb(135, 95, 175);
  border-right-width: 2px;
  border-top-color: rgb(135, 95, 175);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  color: rgb(32, 20, 48);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(32, 20, 48);
}

html body .callout[data-callout="abstract"] {
  --callout-color: #201430;
  background-color: rgb(230, 187, 133);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: #201430;
  background-color: rgb(219, 96, 136);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: #201430;
  background-color: rgb(219, 96, 136);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: #201430;
  background-color: rgb(171, 146, 252);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: #201430;
  background-color: rgb(219, 96, 136);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: #201430;
  background-color: rgb(230, 187, 133);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: #201430;
  background-color: rgb(171, 146, 252);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: #201430;
  background-color: rgb(171, 146, 252);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: #201430;
  background-color: rgb(171, 146, 252);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: #201430;
  background-color: rgb(156, 218, 124);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: #201430;
  background-color: rgb(171, 146, 252);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: #201430;
  background-color: rgb(171, 146, 252);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: #201430;
  background-color: rgb(230, 187, 133);
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(44, 28, 66);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space {
  background-color: rgb(32, 20, 48);
  border-bottom-color: rgb(103, 71, 138);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(103, 71, 138);
  border-right-color: rgb(103, 71, 138);
  border-top-color: rgb(103, 71, 138);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration-color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(225, 214, 248);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(103, 71, 138);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(103, 71, 138);
  border-right-color: rgb(103, 71, 138);
  border-top-color: rgb(103, 71, 138);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(69, 47, 92);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(225, 214, 248);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(135, 255, 95);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body a.internal.tag-link::before {
  color: rgb(135, 255, 95);
}

html body h1 {
  color: rgb(135, 255, 95);
}

html body h2 {
  color: rgb(135, 255, 95);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(225, 214, 248);
}

html body h3 {
  color: rgb(135, 255, 95);
}

html body h4 {
  color: rgb(135, 255, 95);
}

html body h5 {
  color: rgb(135, 255, 95);
}

html body h6 {
  color: rgb(135, 255, 95);
}

html body hr {
  border-bottom-color: rgb(72, 49, 96);
  border-left-color: rgb(72, 49, 96);
  border-right-color: rgb(72, 49, 96);
  border-top-color: rgb(72, 49, 96);
}`,
    scrollbars: `html body .callout {
  --callout-color: #201430;
  border-bottom-color: rgb(32, 20, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 15px;
  padding-left: 15px;
  padding-right: 15px;
  padding-top: 15px;
}

html body ::-webkit-scrollbar {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

html body ::-webkit-scrollbar-track {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}`,
    explorer: `html body .explorer {
  background-color: rgb(57, 39, 77);
}

html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(212, 212, 212);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 212, 212);
}

html body .explorer .folder-outer > ul {
  border-left-color: rgb(40, 22, 59);
  border-left-width: 2px;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(225, 214, 248);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}`,
    footer: `html body footer {
  background-color: rgb(69, 47, 92);
  border-bottom-color: rgb(40, 22, 59);
  border-left-color: rgb(40, 22, 59);
  border-right-color: rgb(40, 22, 59);
  border-top-color: rgb(40, 22, 59);
  border-top-left-radius: 0px;
  color: rgb(212, 212, 212);
}

html body footer ul li a {
  color: rgb(212, 212, 212);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(225, 214, 248);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 212, 212);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body li.section-li > .section .meta {
  color: rgb(212, 212, 212);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
}

html body ul.section-ul {
  background-color: rgb(57, 39, 77);
  border-bottom-color: rgb(40, 22, 59);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(40, 22, 59);
  border-top-style: solid;
  border-top-width: 2px;
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html body .darkmode svg {
  color: rgb(212, 212, 212);
  fill: rgb(40, 22, 59);
  stroke: rgb(135, 255, 95);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(217, 145, 69);
  border-left-color: rgb(217, 145, 69);
  border-right-color: rgb(217, 145, 69);
  border-top-color: rgb(217, 145, 69);
  color: rgb(217, 145, 69);
}

html body .breadcrumb-element p {
  color: rgb(173, 164, 160);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body .metadata {
  border-bottom-color: rgb(44, 28, 66);
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  color: rgb(212, 212, 212);
  margin-bottom: 0px;
  margin-left: 47.3125px;
  margin-right: 47.3125px;
}

html body .metadata-properties {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html body .navigation-progress {
  background-color: rgb(69, 47, 92);
}

html body .page-header h2.page-title {
  color: rgb(225, 214, 248);
}

html body abbr {
  color: rgb(225, 214, 248);
}

html body details {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body input[type=text] {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(156, 218, 124);
  border-left-color: rgb(156, 218, 124);
  border-right-color: rgb(156, 218, 124);
  border-top-color: rgb(156, 218, 124);
  color: rgb(156, 218, 124);
}

html body kbd {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

html body progress {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

html body sub {
  color: rgb(225, 214, 248);
}

html body summary {
  color: rgb(225, 214, 248);
}

html body sup {
  color: rgb(119, 249, 155);
}

html body ul.tags > li {
  background-color: rgb(103, 71, 138);
  border-bottom-color: rgb(21, 21, 21);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 4px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(135, 255, 95);
}`,
  },
  light: {},
};
