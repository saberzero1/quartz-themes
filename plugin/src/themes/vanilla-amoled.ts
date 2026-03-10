import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "vanilla-amoled", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333 !important;
  --background-modifier-border-focus: #4a4a4a !important;
  --background-modifier-border-hover: #363636 !important;
  --background-modifier-form-field: #222 !important;
  --background-modifier-form-field-hover: #222 !important;
  --background-primary: #000 !important;
  --background-primary-alt: #111 !important;
  --background-secondary: #080808 !important;
  --background-secondary-alt: #333 !important;
  --bases-cards-background: #000 !important;
  --bases-cards-cover-background: #111 !important;
  --bases-cards-shadow: 0 0 0 1px #333 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #363636 !important;
  --bases-embed-border-color: #333 !important;
  --bases-group-heading-property-color: #bbb !important;
  --bases-table-border-color: #333 !important;
  --bases-table-cell-background-active: #000 !important;
  --bases-table-cell-background-disabled: #111 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a4a4a !important;
  --bases-table-group-background: #111 !important;
  --bases-table-header-background: #000 !important;
  --bases-table-header-color: #bbb !important;
  --bases-table-summary-background: #000 !important;
  --blur-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent)) !important;
  --canvas-background: #000 !important;
  --canvas-card-label-color: #666 !important;
  --canvas-dot-pattern: #333 !important;
  --caret-color: #fff !important;
  --checkbox-border-color: #666 !important;
  --checkbox-border-color-hover: #bbb !important;
  --checkbox-marker-color: #000 !important;
  --checklist-done-color: #bbb !important;
  --code-background: #111 !important;
  --code-border-color: #333 !important;
  --code-comment: #666 !important;
  --code-normal: #fff !important;
  --code-punctuation: #bbb !important;
  --collapse-icon-color: #666 !important;
  --color-base-00: #000 !important;
  --color-base-05: #080808 !important;
  --color-base-10: #111 !important;
  --color-base-100: #fff !important;
  --color-base-20: #1a1a1a !important;
  --color-base-25: #222 !important;
  --color-base-30: #333 !important;
  --color-base-35: #363636 !important;
  --color-base-40: #4a4a4a !important;
  --color-base-50: #666 !important;
  --color-base-60: #999 !important;
  --color-base-70: #bbb !important;
  --dark: #fff !important;
  --darkgray: #fff !important;
  --divider-color: #333 !important;
  --dropdown-background: #333 !important;
  --dropdown-background-hover: #363636 !important;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333 !important;
  --file-header-background: #000 !important;
  --file-header-background-focused: #000 !important;
  --flair-background: #333 !important;
  --flair-color: #fff !important;
  --footnote-divider-color: #333 !important;
  --footnote-id-color: #bbb !important;
  --footnote-id-color-no-occurrences: #666 !important;
  --graph-line: #363636 !important;
  --graph-node: #bbb !important;
  --graph-node-unresolved: #666 !important;
  --graph-text: #fff !important;
  --gray: #bbb !important;
  --heading-formatting: #666 !important;
  --hr-color: #333 !important;
  --icon-color: #bbb !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #bbb !important;
  --input-date-separator: #666 !important;
  --input-placeholder-color: #666 !important;
  --interactive-hover: #363636 !important;
  --interactive-normal: #333 !important;
  --light: #000 !important;
  --lightgray: #080808 !important;
  --list-marker-color: #666 !important;
  --list-marker-color-hover: #bbb !important;
  --menu-background: #080808 !important;
  --menu-border-color: #363636 !important;
  --metadata-border-color: #333 !important;
  --metadata-divider-color: #333 !important;
  --metadata-input-text-color: #fff !important;
  --metadata-label-text-color: #bbb !important;
  --metadata-label-text-color-hover: #bbb !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a4a4a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636 !important;
  --modal-background: #000 !important;
  --modal-border-color: #4a4a4a !important;
  --nav-collapse-icon-color: #666 !important;
  --nav-collapse-icon-color-collapsed: #666 !important;
  --nav-heading-color: #fff !important;
  --nav-heading-color-collapsed: #666 !important;
  --nav-heading-color-collapsed-hover: #bbb !important;
  --nav-heading-color-hover: #fff !important;
  --nav-item-color: #bbb !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-hover: #fff !important;
  --nav-item-color-selected: #fff !important;
  --nav-tag-color: #666 !important;
  --nav-tag-color-active: #bbb !important;
  --nav-tag-color-hover: #bbb !important;
  --pdf-background: #000 !important;
  --pdf-page-background: #000 !important;
  --pdf-shadow: 0 0 0 1px #333 !important;
  --pdf-sidebar-background: #000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #333 !important;
  --pill-border-color: #333 !important;
  --pill-border-color-hover: #363636 !important;
  --pill-color: #bbb !important;
  --pill-color-hover: #fff !important;
  --pill-color-remove: #666 !important;
  --prompt-background: #000 !important;
  --prompt-border-color: #4a4a4a !important;
  --raised-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent)) !important;
  --ribbon-background: #080808 !important;
  --ribbon-background-collapsed: #000 !important;
  --search-clear-button-color: #bbb !important;
  --search-icon-color: #bbb !important;
  --search-result-background: #000 !important;
  --setting-group-heading-color: #fff !important;
  --setting-items-background: #111 !important;
  --setting-items-border-color: #333 !important;
  --slider-thumb-border-color: #363636 !important;
  --slider-track-background: #333 !important;
  --status-bar-background: #080808 !important;
  --status-bar-border-color: #333 !important;
  --status-bar-text-color: #bbb !important;
  --suggestion-background: #000 !important;
  --tab-background-active: #000 !important;
  --tab-container-background: #080808 !important;
  --tab-divider-color: #363636 !important;
  --tab-outline-color: #333 !important;
  --tab-switcher-background: #080808 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent) !important;
  --tab-text-color: #666 !important;
  --tab-text-color-active: #bbb !important;
  --tab-text-color-focused: #bbb !important;
  --tab-text-color-focused-active: #bbb !important;
  --tab-text-color-focused-active-current: #fff !important;
  --table-add-button-border-color: #333 !important;
  --table-border-color: #333 !important;
  --table-drag-handle-color: #666 !important;
  --table-header-border-color: #333 !important;
  --table-header-color: #fff !important;
  --text-faint: #666 !important;
  --text-muted: #bbb !important;
  --text-normal: #fff !important;
  --titlebar-background: #000 !important;
  --titlebar-background-focused: #111 !important;
  --titlebar-border-color: #333 !important;
  --titlebar-text-color: #bbb !important;
  --titlebar-text-color-focused: #fff !important;
  --vault-profile-color: #fff !important;
  --vault-profile-color-hover: #fff !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(8, 8, 8);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(8, 8, 8);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(51, 51, 51);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(8, 8, 8);
  border-left-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > i, i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(187, 187, 187);
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    lists: `body dd {
  color: rgb(255, 255, 255);
}

body dt {
  color: rgb(255, 255, 255);
}

body ol > li {
  color: rgb(255, 255, 255);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(255, 255, 255);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(255, 255, 255);
}

body td {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body th {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body pre:has(> code) {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(187, 187, 187);
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `body .search > .search-button {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(74, 74, 74);
  border-left-color: rgb(74, 74, 74);
  border-right-color: rgb(74, 74, 74);
  border-top-color: rgb(74, 74, 74);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(255, 255, 255);
}

body h2 {
  color: rgb(255, 255, 255);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
}

body h3 {
  color: rgb(255, 255, 255);
}

body h4 {
  color: rgb(255, 255, 255);
}

body h5 {
  color: rgb(255, 255, 255);
}

body h6 {
  color: rgb(255, 255, 255);
}

body hr {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `body footer {
  background-color: rgb(8, 8, 8);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(187, 187, 187);
}

body footer ul li a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(187, 187, 187);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(187, 187, 187);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(187, 187, 187);
  text-decoration: rgb(187, 187, 187);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(187, 187, 187);
}

body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body .navigation-progress {
  background-color: rgb(8, 8, 8);
}

body .page-header h2.page-title {
  color: rgb(255, 255, 255);
}

body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body input[type=text] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

body kbd {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(255, 255, 255);
}

body summary {
  color: rgb(255, 255, 255);
}

body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
};
