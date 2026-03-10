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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(69, 47, 92);
  color: rgb(225, 214, 248);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(69, 47, 92);
  color: rgb(225, 214, 248);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(72, 49, 96);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(69, 47, 92);
  border-left-color: rgb(72, 49, 96);
  color: rgb(225, 214, 248);
}

body div#quartz-root {
  background-color: rgb(32, 20, 48);
  color: rgb(225, 214, 248);
}`,
    typography: `body .page article p > b, b {
  color: rgb(119, 249, 155);
  font-weight: 700;
  outline: rgb(119, 249, 155) none 0px;
  text-decoration: rgb(119, 249, 155);
  text-decoration-color: rgb(119, 249, 155);
}

body .page article p > em, em {
  color: rgb(119, 249, 155);
  outline: rgb(119, 249, 155) none 0px;
  text-decoration: rgb(119, 249, 155);
  text-decoration-color: rgb(119, 249, 155);
}

body .page article p > i, i {
  color: rgb(119, 249, 155);
  outline: rgb(119, 249, 155) none 0px;
  text-decoration: rgb(119, 249, 155);
  text-decoration-color: rgb(119, 249, 155);
}

body .page article p > strong, strong {
  color: rgb(119, 249, 155);
  font-weight: 700;
  outline: rgb(119, 249, 155) none 0px;
  text-decoration: rgb(119, 249, 155);
  text-decoration-color: rgb(119, 249, 155);
}

body .text-highlight {
  background-color: rgba(135, 255, 95, 0.85);
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration: rgb(225, 214, 248);
  text-decoration-color: rgb(225, 214, 248);
}

body del {
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration: line-through rgb(225, 214, 248);
  text-decoration-color: rgb(225, 214, 248);
}

body p {
  color: rgb(212, 212, 212);
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    links: `body a.external, footer a {
  color: rgb(185, 104, 252);
  outline: rgb(185, 104, 252) none 0px;
  text-decoration: rgb(185, 104, 252);
  text-decoration-color: rgb(185, 104, 252);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(185, 104, 252);
  outline: rgb(185, 104, 252) none 0px;
  text-decoration: rgb(185, 104, 252);
  text-decoration-color: rgb(185, 104, 252);
}

body a.internal.broken {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration: rgb(159, 80, 225);
  text-decoration-color: rgb(159, 80, 225);
}`,
    lists: `body dd {
  color: rgb(225, 214, 248);
}

body dl {
  margin-bottom: 0px;
  margin-top: 0px;
}

body dt {
  color: rgb(225, 214, 248);
}

body ol > li {
  color: rgb(225, 214, 248);
}

body ol.overflow {
  background-color: rgb(32, 20, 48);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body ul > li {
  color: rgb(225, 214, 248);
}

body ul.overflow {
  background-color: rgb(32, 20, 48);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(119, 249, 155);
  text-decoration: rgb(119, 249, 155);
}

body blockquote {
  padding-bottom: 10px;
  padding-top: 10px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body table {
  color: rgb(225, 214, 248);
  margin-top: 10px;
  width: 814.375px;
}

body td {
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

body th {
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

body thead {
  background-color: rgb(159, 80, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body tr {
  background-color: rgb(159, 80, 225);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
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

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

body pre > code > [data-line] {
  border-left-color: rgb(135, 255, 95);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(135, 255, 95);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(135, 255, 95);
  border-left-color: rgb(135, 255, 95);
  border-right-color: rgb(135, 255, 95);
  border-top-color: rgb(135, 255, 95);
}

body pre > code, pre:has(> code) {
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

body pre:has(> code) {
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
    images: `body audio {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body figcaption {
  color: rgb(225, 214, 248);
}

body figure {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  margin-bottom: 0px;
  margin-top: 0px;
}

body img {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body video {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    embeds: `body .file-embed {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .footnotes {
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

body .transclude {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(142, 223, 95);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body .transclude-inner {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(142, 223, 95);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='*'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='-'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='/'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='>'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='?'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='I'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='S'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='b'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='c'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='d'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='f'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='i'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='k'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='l'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='p'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='u'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}

body li.task-list-item[data-task='w'] {
  color: rgb(161, 160, 173);
  text-decoration: rgb(161, 160, 173);
  text-decoration-color: rgb(161, 160, 173);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(32, 20, 48);
  border-left-color: rgb(32, 20, 48);
  border-right-color: rgb(32, 20, 48);
  border-top-color: rgb(32, 20, 48);
}

body .callout[data-callout="abstract"] {
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

body .callout[data-callout="bug"] {
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

body .callout[data-callout="danger"] {
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

body .callout[data-callout="example"] {
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

body .callout[data-callout="failure"] {
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

body .callout[data-callout="info"] {
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

body .callout[data-callout="note"] {
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

body .callout[data-callout="question"] {
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

body .callout[data-callout="quote"] {
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

body .callout[data-callout="success"] {
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

body .callout[data-callout="tip"] {
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

body .callout[data-callout="todo"] {
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

body .callout[data-callout="warning"] {
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
}`,
    search: `body .search > .search-button {
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

body .search > .search-container > .search-space {
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

body .search > .search-container > .search-space > * {
  color: rgb(225, 214, 248);
  outline: rgb(225, 214, 248) none 0px;
  text-decoration: rgb(225, 214, 248);
  text-decoration-color: rgb(225, 214, 248);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(225, 214, 248);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(225, 214, 248);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(225, 214, 248);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(103, 71, 138);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(103, 71, 138);
  border-right-color: rgb(103, 71, 138);
  border-top-color: rgb(103, 71, 138);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(69, 47, 92);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(225, 214, 248);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

body a.internal.tag-link::before {
  color: rgb(135, 255, 95);
}

body h1 {
  color: rgb(135, 255, 95);
}

body h2 {
  color: rgb(135, 255, 95);
}

body h2.page-title, h2.page-title a {
  color: rgb(225, 214, 248);
}

body h3 {
  color: rgb(135, 255, 95);
}

body h4 {
  color: rgb(135, 255, 95);
}

body h5 {
  color: rgb(135, 255, 95);
}

body h6 {
  color: rgb(135, 255, 95);
}

body hr {
  border-bottom-color: rgb(72, 49, 96);
  border-left-color: rgb(72, 49, 96);
  border-right-color: rgb(72, 49, 96);
  border-top-color: rgb(72, 49, 96);
}`,
    scrollbars: `body .callout {
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

body ::-webkit-scrollbar {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

body ::-webkit-scrollbar-corner {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}

body ::-webkit-scrollbar-track {
  background: rgb(32, 20, 48) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(32, 20, 48);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}`,
    footer: `body footer {
  background-color: rgb(69, 47, 92);
  border-bottom-color: rgb(40, 22, 59);
  border-left-color: rgb(40, 22, 59);
  border-right-color: rgb(40, 22, 59);
  border-top-color: rgb(40, 22, 59);
  border-top-left-radius: 0px;
  color: rgb(212, 212, 212);
}

body footer ul li a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(225, 214, 248);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 212, 212);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body li.section-li > .section .meta {
  color: rgb(212, 212, 212);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
}

body ul.section-ul {
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
    darkmode: `body .darkmode {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .darkmode svg {
  color: rgb(212, 212, 212);
  fill: rgb(40, 22, 59);
  stroke: rgb(135, 255, 95);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(217, 145, 69);
  border-left-color: rgb(217, 145, 69);
  border-right-color: rgb(217, 145, 69);
  border-top-color: rgb(217, 145, 69);
  color: rgb(217, 145, 69);
}

body .breadcrumb-element p {
  color: rgb(173, 164, 160);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

body .metadata {
  border-bottom-color: rgb(44, 28, 66);
  border-left-color: rgb(44, 28, 66);
  border-right-color: rgb(44, 28, 66);
  border-top-color: rgb(44, 28, 66);
  color: rgb(212, 212, 212);
  margin-bottom: 0px;
  margin-left: 47.3125px;
  margin-right: 47.3125px;
}

body .metadata-properties {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .navigation-progress {
  background-color: rgb(69, 47, 92);
}

body .page-header h2.page-title {
  color: rgb(225, 214, 248);
}

body abbr {
  color: rgb(225, 214, 248);
  text-decoration: underline dotted rgb(225, 214, 248);
}

body details {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body input[type=text] {
  background-color: rgb(57, 39, 76);
  border-bottom-color: rgb(156, 218, 124);
  border-left-color: rgb(156, 218, 124);
  border-right-color: rgb(156, 218, 124);
  border-top-color: rgb(156, 218, 124);
  color: rgb(156, 218, 124);
}

body kbd {
  background-color: rgb(48, 33, 63);
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
  color: rgb(225, 214, 248);
}

body progress {
  border-bottom-color: rgb(225, 214, 248);
  border-left-color: rgb(225, 214, 248);
  border-right-color: rgb(225, 214, 248);
  border-top-color: rgb(225, 214, 248);
}

body sub {
  color: rgb(225, 214, 248);
}

body summary {
  color: rgb(225, 214, 248);
}

body sup {
  color: rgb(225, 214, 248);
}`,
  },
  light: {},
};
