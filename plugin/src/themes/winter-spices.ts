import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "winter-spices",
    modes: ["light"],
    variations: [],
    fonts: ["myriad-apple"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --background-modifier-border: #A48783 !important;
  --background-modifier-border-focus: #202430 !important;
  --background-modifier-border-hover: #202430 !important;
  --background-modifier-form-field: #FCFEF3 !important;
  --background-modifier-form-field-hover: #FCFEF3 !important;
  --background-primary: #FCFEF3 !important;
  --background-primary-alt: #a48783 !important;
  --background-secondary: #4B2139 !important;
  --background-secondary-alt: #A48783 !important;
  --bases-cards-background: #FCFEF3 !important;
  --bases-cards-cover-background: #a48783 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #A48783 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #202430 !important;
  --bases-embed-border-color: #A48783 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #c1aeac !important;
  --bases-table-border-color: transparent !important;
  --bases-table-cell-background-active: #FCFEF3 !important;
  --bases-table-cell-background-disabled: #a48783 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #202430 !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #a48783 !important;
  --bases-table-header-background: #FCFEF3 !important;
  --bases-table-header-color: #c1aeac !important;
  --bases-table-summary-background: #FCFEF3 !important;
  --blur-background: color-mix(in srgb, #FCFEF3 65%, transparent) linear-gradient(#FCFEF3, color-mix(in srgb, #FCFEF3 65%, transparent)) !important;
  --button-radius: 0px !important;
  --callout-blend-mode: normal;
  --callout-radius: 0px;
  --canvas-background: #FCFEF3 !important;
  --canvas-card-label-color: #A48783 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #A48783 !important;
  --caret-color: #666666 !important;
  --checkbox-border-color: #A48783 !important;
  --checkbox-border-color-hover: #c1aeac !important;
  --checkbox-color: #7F6C5E !important;
  --checkbox-marker-color: #FCFEF3 !important;
  --checkbox-radius: 10px !important;
  --checklist-done-color: #c1aeac !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #4b213909 !important;
  --code-border-color: #A48783 !important;
  --code-comment: #A48783 !important;
  --code-normal: #666666 !important;
  --code-punctuation: #c1aeac !important;
  --code-radius: 0px !important;
  --collapse-icon-color: #A48783 !important;
  --collapse-icon-color-collapsed: #527a98 !important;
  --color-base-00: #FCFEF3 !important;
  --color-base-05: #A48783 !important;
  --color-base-10: #a48783 !important;
  --color-base-100: #666666 !important;
  --color-base-20: #4B2139 !important;
  --color-base-25: #A48783 !important;
  --color-base-30: #A48783 !important;
  --color-base-35: #202430 !important;
  --color-base-40: #202430 !important;
  --color-base-50: #A48783 !important;
  --color-base-60: #A48783 !important;
  --color-base-70: #c1aeac !important;
  --dark: #666666 !important;
  --darkgray: #666666 !important;
  --divider-color: transparent !important;
  --dropdown-background: #E5DFD3 !important;
  --dropdown-background-hover: #7f6c5e1f !important;
  --embed-block-shadow-hover: 0 0 0 1px #A48783, inset 0 0 0 1px #A48783 !important;
  --file-header-background: #FCFEF3 !important;
  --file-header-background-focused: #FCFEF3 !important;
  --flair-background: #E5DFD3 !important;
  --flair-color: #666666 !important;
  --footnote-divider-color: #A48783 !important;
  --footnote-id-color: #c1aeac !important;
  --footnote-id-color-no-occurrences: #A48783 !important;
  --footnote-radius: 0px !important;
  --graph-line: #202430 !important;
  --graph-node: #c1aeac !important;
  --graph-node-focused: #527a98 !important;
  --graph-node-unresolved: #A48783 !important;
  --graph-text: #666666 !important;
  --gray: #c1aeac !important;
  --heading-formatting: #A48783 !important;
  --hr-color: #f1f1f1 !important;
  --hr-thickness: 1px !important;
  --icon-color: #C8BCAC !important;
  --icon-color-active: #527a98 !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #41250C !important;
  --inline-title-color: #A48783 !important;
  --inline-title-font: 'georgia', serif !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #A48783 !important;
  --input-placeholder-color: #A48783 !important;
  --input-radius: 0px !important;
  --interactive-hover: #7f6c5e1f !important;
  --interactive-normal: #E5DFD3 !important;
  --light: #FCFEF3 !important;
  --lightgray: #4B2139 !important;
  --link-color: #527a98 !important;
  --link-color-hover: #A48783 !important;
  --link-external-color: #527a98 !important;
  --link-external-color-hover: #A48783 !important;
  --link-unresolved-color: #527a98 !important;
  --list-marker-color: #A48783 !important;
  --list-marker-color-collapsed: #527a98 !important;
  --list-marker-color-hover: #c1aeac !important;
  --menu-background: #4B2139 !important;
  --menu-border-color: #202430 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #A48783 !important;
  --metadata-divider-color: #A48783 !important;
  --metadata-input-text-color: #666666 !important;
  --metadata-label-text-color: #c1aeac !important;
  --metadata-label-text-color-hover: #c1aeac !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #202430 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #202430 !important;
  --modal-background: #FCFEF3 !important;
  --modal-border-color: #202430 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #A48783 !important;
  --nav-collapse-icon-color-collapsed: #A48783 !important;
  --nav-heading-color: #666666 !important;
  --nav-heading-color-collapsed: #A48783 !important;
  --nav-heading-color-collapsed-hover: #c1aeac !important;
  --nav-heading-color-hover: #666666 !important;
  --nav-item-background-active: none !important;
  --nav-item-background-hover: #A48783 !important;
  --nav-item-color: #fff !important;
  --nav-item-color-active: #7F6C5E !important;
  --nav-item-color-highlighted: #527a98 !important;
  --nav-item-color-hover: #41250C !important;
  --nav-item-color-selected: #666666 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #A48783 !important;
  --nav-tag-color-active: #c1aeac !important;
  --nav-tag-color-hover: #c1aeac !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #FCFEF3 !important;
  --pdf-page-background: #FCFEF3 !important;
  --pdf-sidebar-background: #FCFEF3 !important;
  --pill-border-color: #A48783 !important;
  --pill-border-color-hover: #202430 !important;
  --pill-color: #c1aeac !important;
  --pill-color-hover: #666666 !important;
  --pill-color-remove: #A48783 !important;
  --pill-color-remove-hover: #527a98 !important;
  --prompt-background: #FCFEF3 !important;
  --prompt-border-color: #202430 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #FCFEF3 65%, transparent) linear-gradient(#FCFEF3, color-mix(in srgb, #FCFEF3 65%, transparent)) !important;
  --ribbon-background: #4B2139 !important;
  --ribbon-background-collapsed: #FCFEF3 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #c1aeac !important;
  --search-icon-color: #c1aeac !important;
  --search-result-background: #FCFEF3 !important;
  --secondary: #527a98 !important;
  --setting-group-heading-color: #666666 !important;
  --setting-items-background: #a48783 !important;
  --setting-items-border-color: #A48783 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: #202430 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #E5DFD3 !important;
  --status-bar-background: #4B2139 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #c1aeac !important;
  --suggestion-background: #FCFEF3 !important;
  --tab-background-active: #FCFEF3 !important;
  --tab-container-background: #4B2139 !important;
  --tab-divider-color: transparent !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #4B2139 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #4B2139, transparent) !important;
  --tab-text-color: #A48783 !important;
  --tab-text-color-active: #c1aeac !important;
  --tab-text-color-focused: #c1aeac !important;
  --tab-text-color-focused-active: #c1aeac !important;
  --tab-text-color-focused-active-current: #666666 !important;
  --tab-text-color-focused-highlighted: #527a98 !important;
  --table-add-button-border-color: #A48783 !important;
  --table-border-color: transparent !important;
  --table-drag-handle-color: #A48783 !important;
  --table-header-border-color: transparent !important;
  --table-header-color: #666666 !important;
  --tag-background: transparent !important;
  --tag-background-hover: transparent !important;
  --tag-color: #A48783 !important;
  --tag-color-hover: #E5DFD3 !important;
  --tertiary: #A48783 !important;
  --text-accent: #527a98 !important;
  --text-accent-hover: #A48783 !important;
  --text-faint: #A48783 !important;
  --text-muted: #c1aeac !important;
  --text-normal: #666666 !important;
  --titlebar-background: #4B2139 !important;
  --titlebar-background-focused: #A48783 !important;
  --titlebar-border-color: #A48783 !important;
  --titlebar-text-color: #c1aeac !important;
  --titlebar-text-color-focused: #666666 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #666666 !important;
  --vault-profile-color-hover: #666666 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(75, 33, 57);
  color: rgb(102, 102, 102);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(252, 254, 243);
  color: rgb(102, 102, 102);
}

html body .bases-table thead th {
  border-color: rgba(0, 0, 0, 0);
  color: rgb(102, 102, 102);
}

html body .canvas-node {
  border-color: rgb(102, 102, 102);
}

html body .canvas-node-content {
  color: rgb(102, 102, 102);
}

html body .canvas-node-file {
  color: rgb(102, 102, 102);
}

html body .canvas-node-group {
  border-color: rgb(102, 102, 102);
}

html body .canvas-sidebar {
  background-color: rgb(252, 254, 243);
  border-color: rgb(102, 102, 102);
}

html body .note-properties {
  border-color: rgb(164, 135, 131);
}

html body .note-properties-key {
  color: rgb(193, 174, 172);
}

html body .note-properties-row {
  border-color: rgb(193, 174, 172);
}

html body .note-properties-tags {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(164, 135, 131);
}

html body .note-properties-value {
  color: rgb(193, 174, 172);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(75, 33, 57);
  color: rgb(102, 102, 102);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(75, 33, 57);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(102, 102, 102);
}

html body div#quartz-root {
  background-color: rgb(252, 254, 243);
  color: rgb(102, 102, 102);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body .page article p > em, html em {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body .page article p > i, html i {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body .page article p > strong, html strong {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body .text-highlight {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body del {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body h1.article-title {
  color: rgb(102, 102, 102);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(164, 135, 131);
  border-radius: 10px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 108, 94);
  border-color: rgb(127, 108, 94);
}

html body p {
  color: rgb(193, 174, 172);
  outline: rgb(193, 174, 172) none 0px;
  text-decoration-color: rgb(193, 174, 172);
}`,
    links: `html body a.external, html footer a {
  color: rgb(82, 122, 152);
  outline: rgb(82, 122, 152) none 0px;
  text-decoration-color: rgb(82, 122, 152);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(82, 122, 152);
  outline: rgb(82, 122, 152) none 0px;
  text-decoration-color: rgb(82, 122, 152);
}

html body a.internal.broken {
  color: rgb(82, 122, 152);
  outline: rgb(82, 122, 152) none 0px;
}`,
    lists: `html body dd {
  color: rgb(102, 102, 102);
}

html body dt {
  color: rgb(102, 102, 102);
}

html body ol > li {
  color: rgb(102, 102, 102);
}

html body ol.overflow {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body ul > li {
  color: rgb(102, 102, 102);
}

html body ul.overflow {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(164, 135, 131);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body table {
  color: rgb(102, 102, 102);
}

html body td {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(102, 102, 102);
}

html body th {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  color: rgb(102, 102, 102);
}`,
    code: `html body code {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 102, 102);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(75, 33, 57, 0.035);
  border-bottom-color: rgb(164, 135, 131);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(75, 33, 57, 0.035);
  border-bottom-color: rgb(164, 135, 131);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 102, 102);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(75, 33, 57, 0.035);
  border-bottom-color: rgb(164, 135, 131);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  background-color: rgba(75, 33, 57, 0.035);
  border-bottom-color: rgb(164, 135, 131);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body figcaption {
  color: rgb(102, 102, 102);
}

html body figure {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body img {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body video {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(164, 135, 131);
  border-bottom-color: rgb(193, 174, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(193, 174, 172);
  border-right-color: rgb(193, 174, 172);
  border-top-color: rgb(193, 174, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .footnotes {
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html body .transclude {
  border-bottom-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body .transclude-inner {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(164, 135, 131);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(164, 135, 131);
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  color: rgb(164, 135, 131);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(164, 135, 131);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
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
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(164, 135, 131);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 102, 102);
}

html body .search > .search-container > .search-space {
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(102, 102, 102);
  outline: rgb(102, 102, 102) none 0px;
  text-decoration-color: rgb(102, 102, 102);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(102, 102, 102);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(102, 102, 102);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(102, 102, 102);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(32, 36, 48);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(32, 36, 48);
  border-right-color: rgb(32, 36, 48);
  border-top-color: rgb(32, 36, 48);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(75, 33, 57);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 102, 102);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 102, 102);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

html body a.internal.tag-link::before {
  color: rgb(164, 135, 131);
}

html body h1 {
  color: rgb(164, 135, 131);
  font-family: Georgia, serif;
}

html body h2 {
  color: rgb(164, 135, 131);
  font-family: Georgia, serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(164, 135, 131);
  font-family: georgia, serif;
}

html body h3 {
  color: rgb(164, 135, 131);
  font-family: Georgia, serif;
}

html body h4 {
  color: rgb(164, 135, 131);
  font-family: Georgia, serif;
}

html body h5 {
  color: rgb(164, 135, 131);
  font-family: Georgia, serif;
}

html body h6 {
  color: rgb(164, 135, 131);
  font-family: Georgia, serif;
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 2px;
  border-left-color: rgba(0, 0, 0, 0);
  border-left-width: 2px;
  border-right-color: rgba(0, 0, 0, 0);
  border-right-width: 2px;
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 2px;
}

html body ::-webkit-scrollbar {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}

html body ::-webkit-scrollbar-track {
  background: rgb(252, 254, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 254, 243);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: georgia, serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 255, 255);
  font-family: georgia, serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(102, 102, 102);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}`,
    footer: `html body footer {
  background-color: rgb(75, 33, 57);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(193, 174, 172);
}

html body footer ul li a {
  color: rgb(193, 174, 172);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(102, 102, 102);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 255, 255);
  font-family: georgia, serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body li.section-li > .section .meta {
  color: rgb(255, 255, 255);
  font-family: georgia, serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 255, 255);
}

html body ul.section-ul {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(200, 188, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(200, 188, 172);
  border-right-color: rgb(200, 188, 172);
  border-top-color: rgb(200, 188, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(200, 188, 172);
}

html body .darkmode svg {
  color: rgb(200, 188, 172);
  stroke: rgb(200, 188, 172);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(193, 174, 172);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(193, 174, 172);
  border-right-color: rgb(193, 174, 172);
  border-top-color: rgb(193, 174, 172);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(193, 174, 172);
}

html body .breadcrumb-element p {
  color: rgb(164, 135, 131);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  color: rgb(102, 102, 102);
}

html body .metadata {
  border-bottom-color: rgb(164, 135, 131);
  border-left-color: rgb(164, 135, 131);
  border-right-color: rgb(164, 135, 131);
  border-top-color: rgb(164, 135, 131);
  color: rgb(193, 174, 172);
}

html body .metadata-properties {
  border-bottom-color: rgb(193, 174, 172);
  border-left-color: rgb(193, 174, 172);
  border-right-color: rgb(193, 174, 172);
  border-top-color: rgb(193, 174, 172);
  color: rgb(193, 174, 172);
}

html body .navigation-progress {
  background-color: rgb(75, 33, 57);
}

html body .page-header h2.page-title {
  color: rgb(102, 102, 102);
}

html body abbr {
  color: rgb(102, 102, 102);
}

html body details {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body input[type=text] {
  border-bottom-color: rgb(193, 174, 172);
  border-left-color: rgb(193, 174, 172);
  border-right-color: rgb(193, 174, 172);
  border-top-color: rgb(193, 174, 172);
  color: rgb(193, 174, 172);
}

html body kbd {
  background-color: rgba(75, 33, 57, 0.035);
  border-bottom-color: rgb(102, 102, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(102, 102, 102);
}

html body progress {
  border-bottom-color: rgb(102, 102, 102);
  border-left-color: rgb(102, 102, 102);
  border-right-color: rgb(102, 102, 102);
  border-top-color: rgb(102, 102, 102);
}

html body sub {
  color: rgb(102, 102, 102);
}

html body summary {
  color: rgb(102, 102, 102);
}

html body sup {
  color: rgb(102, 102, 102);
}

html body ul.tags > li {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(164, 135, 131);
}`,
  },
};
