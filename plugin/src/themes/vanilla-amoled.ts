import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "vanilla-amoled", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #333;
  --background-modifier-border-focus: #4a4a4a;
  --background-modifier-border-hover: #363636;
  --background-modifier-form-field: #222;
  --background-modifier-form-field-hover: #222;
  --background-primary: #000;
  --background-primary-alt: #111;
  --background-secondary: #080808;
  --background-secondary-alt: #333;
  --bases-cards-background: #000;
  --bases-cards-cover-background: #111;
  --bases-cards-shadow: 0 0 0 1px #333;
  --bases-cards-shadow-hover: 0 0 0 1px #363636;
  --bases-embed-border-color: #333;
  --bases-group-heading-property-color: #bbb;
  --bases-table-border-color: #333;
  --bases-table-cell-background-active: #000;
  --bases-table-cell-background-disabled: #111;
  --bases-table-cell-shadow-active: 0 0 0 2px #4a4a4a;
  --bases-table-group-background: #111;
  --bases-table-header-background: #000;
  --bases-table-header-color: #bbb;
  --bases-table-summary-background: #000;
  --blur-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent));
  --canvas-background: #000;
  --canvas-card-label-color: #666;
  --canvas-dot-pattern: #333;
  --caret-color: #fff;
  --checkbox-border-color: #666;
  --checkbox-border-color-hover: #bbb;
  --checkbox-marker-color: #000;
  --checklist-done-color: #bbb;
  --code-background: #111;
  --code-border-color: #333;
  --code-comment: #666;
  --code-normal: #fff;
  --code-punctuation: #bbb;
  --collapse-icon-color: #666;
  --color-base-00: #000;
  --color-base-05: #080808;
  --color-base-10: #111;
  --color-base-100: #fff;
  --color-base-20: #1a1a1a;
  --color-base-25: #222;
  --color-base-30: #333;
  --color-base-35: #363636;
  --color-base-40: #4a4a4a;
  --color-base-50: #666;
  --color-base-60: #999;
  --color-base-70: #bbb;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #333;
  --dropdown-background: #333;
  --dropdown-background-hover: #363636;
  --embed-block-shadow-hover: 0 0 0 1px #333, inset 0 0 0 1px #333;
  --file-header-background: #000;
  --file-header-background-focused: #000;
  --flair-background: #333;
  --flair-color: #fff;
  --footnote-divider-color: #333;
  --footnote-id-color: #bbb;
  --footnote-id-color-no-occurrences: #666;
  --graph-line: #363636;
  --graph-node: #bbb;
  --graph-node-unresolved: #666;
  --graph-text: #fff;
  --gray: var(--text-muted);
  --heading-formatting: #666;
  --hr-color: #333;
  --icon-color: #bbb;
  --icon-color-focused: #fff;
  --icon-color-hover: #bbb;
  --input-date-separator: #666;
  --input-placeholder-color: #666;
  --interactive-hover: #363636;
  --interactive-normal: #333;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --list-marker-color: #666;
  --list-marker-color-hover: #bbb;
  --menu-background: #080808;
  --menu-border-color: #363636;
  --metadata-border-color: #333;
  --metadata-divider-color: #333;
  --metadata-input-text-color: #fff;
  --metadata-label-text-color: #bbb;
  --metadata-label-text-color-hover: #bbb;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4a4a4a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #363636;
  --modal-background: #000;
  --modal-border-color: #4a4a4a;
  --nav-collapse-icon-color: #666;
  --nav-collapse-icon-color-collapsed: #666;
  --nav-heading-color: #fff;
  --nav-heading-color-collapsed: #666;
  --nav-heading-color-collapsed-hover: #bbb;
  --nav-heading-color-hover: #fff;
  --nav-item-color: #bbb;
  --nav-item-color-active: #fff;
  --nav-item-color-hover: #fff;
  --nav-item-color-selected: #fff;
  --nav-tag-color: #666;
  --nav-tag-color-active: #bbb;
  --nav-tag-color-hover: #bbb;
  --pdf-background: #000;
  --pdf-page-background: #000;
  --pdf-shadow: 0 0 0 1px #333;
  --pdf-sidebar-background: #000;
  --pdf-thumbnail-shadow: 0 0 0 1px #333;
  --pill-border-color: #333;
  --pill-border-color-hover: #363636;
  --pill-color: #bbb;
  --pill-color-hover: #fff;
  --pill-color-remove: #666;
  --prompt-background: #000;
  --prompt-border-color: #4a4a4a;
  --raised-background: color-mix(in srgb, #333 65%, transparent) linear-gradient(#333, color-mix(in srgb, #333 65%, transparent));
  --ribbon-background: #080808;
  --ribbon-background-collapsed: #000;
  --search-clear-button-color: #bbb;
  --search-icon-color: #bbb;
  --search-result-background: #000;
  --setting-group-heading-color: #fff;
  --setting-items-background: #111;
  --setting-items-border-color: #333;
  --slider-thumb-border-color: #363636;
  --slider-track-background: #333;
  --status-bar-background: #080808;
  --status-bar-border-color: #333;
  --status-bar-text-color: #bbb;
  --suggestion-background: #000;
  --tab-background-active: #000;
  --tab-container-background: #080808;
  --tab-divider-color: #363636;
  --tab-outline-color: #333;
  --tab-switcher-background: #080808;
  --tab-switcher-menubar-background: linear-gradient(to top, #080808, transparent);
  --tab-text-color: #666;
  --tab-text-color-active: #bbb;
  --tab-text-color-focused: #bbb;
  --tab-text-color-focused-active: #bbb;
  --tab-text-color-focused-active-current: #fff;
  --table-add-button-border-color: #333;
  --table-border-color: #333;
  --table-drag-handle-color: #666;
  --table-header-border-color: #333;
  --table-header-color: #fff;
  --text-faint: #666;
  --text-muted: #bbb;
  --text-normal: #fff;
  --titlebar-background: #000;
  --titlebar-background-focused: #111;
  --titlebar-border-color: #333;
  --titlebar-text-color: #bbb;
  --titlebar-text-color-focused: #fff;
  --vault-profile-color: #fff;
  --vault-profile-color-hover: #fff;
  --quartz-icon-color: currentColor;
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
