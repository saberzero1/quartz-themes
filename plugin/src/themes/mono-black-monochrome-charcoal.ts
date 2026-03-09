import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mono-black-monochrome-charcoal",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #272727;
  --background-modifier-border-focus: #333333;
  --background-modifier-border-hover: #272727;
  --background-modifier-form-field: #171717;
  --background-modifier-form-field-hover: #171717;
  --background-primary: #111111;
  --background-primary-alt: #131313;
  --background-secondary: #111111;
  --background-secondary-alt: #151515;
  --bases-cards-background: #111111;
  --bases-cards-cover-background: #131313;
  --bases-cards-shadow: 0 0 0 1px #272727;
  --bases-cards-shadow-hover: 0 0 0 1px #272727;
  --bases-embed-border-color: #272727;
  --bases-group-heading-property-color: #787878;
  --bases-table-border-color: #272727;
  --bases-table-cell-background-active: #111111;
  --bases-table-cell-background-disabled: #131313;
  --bases-table-cell-shadow-active: 0 0 0 2px #333333;
  --bases-table-group-background: #131313;
  --bases-table-header-background: #111111;
  --bases-table-header-color: #787878;
  --bases-table-summary-background: #111111;
  --blur-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent));
  --canvas-background: #111111;
  --canvas-card-label-color: #404040;
  --canvas-dot-pattern: #272727;
  --caret-color: #cbcbcb;
  --checkbox-border-color: #404040;
  --checkbox-border-color-hover: #787878;
  --checkbox-marker-color: #111111;
  --checklist-done-color: #787878;
  --code-background: #131313;
  --code-border-color: #272727;
  --code-comment: #404040;
  --code-normal: #cbcbcb;
  --code-punctuation: #787878;
  --collapse-icon-color: #404040;
  --color-base-00: #111111;
  --color-base-05: #111111;
  --color-base-10: #131313;
  --color-base-100: #cbcbcb;
  --color-base-20: #151515;
  --color-base-25: #171717;
  --color-base-30: #272727;
  --color-base-35: #272727;
  --color-base-40: #333333;
  --color-base-50: #404040;
  --color-base-60: #666666;
  --color-base-70: #787878;
  --divider-color: #272727;
  --dropdown-background: #272727;
  --dropdown-background-hover: #272727;
  --embed-block-shadow-hover: 0 0 0 1px #272727, inset 0 0 0 1px #272727;
  --file-header-background: #111111;
  --file-header-background-focused: #111111;
  --flair-background: #272727;
  --flair-color: #cbcbcb;
  --footnote-divider-color: #272727;
  --footnote-id-color: #787878;
  --footnote-id-color-no-occurrences: #404040;
  --graph-line: #272727;
  --graph-node: #787878;
  --graph-node-unresolved: #404040;
  --graph-text: #cbcbcb;
  --heading-formatting: #404040;
  --hr-color: #272727;
  --icon-color: #787878;
  --icon-color-focused: #cbcbcb;
  --icon-color-hover: #787878;
  --input-date-separator: #404040;
  --input-placeholder-color: #404040;
  --interactive-hover: #272727;
  --interactive-normal: #272727;
  --list-marker-color: #404040;
  --list-marker-color-hover: #787878;
  --menu-background: #111111;
  --menu-border-color: #272727;
  --metadata-border-color: #272727;
  --metadata-divider-color: #272727;
  --metadata-input-text-color: #cbcbcb;
  --metadata-label-text-color: #787878;
  --metadata-label-text-color-hover: #787878;
  --metadata-property-box-shadow-focus: 0 0 0 2px #333333;
  --metadata-property-box-shadow-hover: 0 0 0 1px #272727;
  --modal-background: #111111;
  --modal-border-color: #333333;
  --nav-collapse-icon-color: #404040;
  --nav-collapse-icon-color-collapsed: #404040;
  --nav-heading-color: #cbcbcb;
  --nav-heading-color-collapsed: #404040;
  --nav-heading-color-collapsed-hover: #787878;
  --nav-heading-color-hover: #cbcbcb;
  --nav-item-color: #787878;
  --nav-item-color-active: #cbcbcb;
  --nav-item-color-hover: #cbcbcb;
  --nav-item-color-selected: #cbcbcb;
  --nav-tag-color: #404040;
  --nav-tag-color-active: #787878;
  --nav-tag-color-hover: #787878;
  --pdf-background: #111111;
  --pdf-page-background: #111111;
  --pdf-shadow: 0 0 0 1px #272727;
  --pdf-sidebar-background: #111111;
  --pdf-thumbnail-shadow: 0 0 0 1px #272727;
  --pill-border-color: #272727;
  --pill-border-color-hover: #272727;
  --pill-color: #787878;
  --pill-color-hover: #cbcbcb;
  --pill-color-remove: #404040;
  --prompt-background: #111111;
  --prompt-border-color: #333333;
  --raised-background: color-mix(in srgb, #272727 65%, transparent) linear-gradient(#272727, color-mix(in srgb, #272727 65%, transparent));
  --ribbon-background: #111111;
  --ribbon-background-collapsed: #111111;
  --search-clear-button-color: #787878;
  --search-icon-color: #787878;
  --search-result-background: #111111;
  --setting-group-heading-color: #cbcbcb;
  --setting-items-background: #131313;
  --setting-items-border-color: #272727;
  --slider-thumb-border-color: #272727;
  --slider-track-background: #272727;
  --status-bar-background: #111111;
  --status-bar-border-color: #272727;
  --status-bar-text-color: #787878;
  --suggestion-background: #111111;
  --tab-background-active: #111111;
  --tab-container-background: #111111;
  --tab-divider-color: #272727;
  --tab-outline-color: #272727;
  --tab-switcher-background: #111111;
  --tab-switcher-menubar-background: linear-gradient(to top, #111111, transparent);
  --tab-text-color: #404040;
  --tab-text-color-active: #787878;
  --tab-text-color-focused: #787878;
  --tab-text-color-focused-active: #787878;
  --tab-text-color-focused-active-current: #cbcbcb;
  --table-add-button-border-color: #272727;
  --table-border-color: #272727;
  --table-drag-handle-color: #404040;
  --table-header-border-color: #272727;
  --table-header-color: #cbcbcb;
  --text-faint: #404040;
  --text-muted: #787878;
  --text-normal: #cbcbcb;
  --titlebar-background: #111111;
  --titlebar-background-focused: #151515;
  --titlebar-border-color: #272727;
  --titlebar-text-color: #787878;
  --titlebar-text-color-focused: #cbcbcb;
  --vault-profile-color: #cbcbcb;
  --vault-profile-color-hover: #cbcbcb;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 17, 17);
  color: rgb(203, 203, 203);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 17, 17);
  color: rgb(203, 203, 203);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 17, 17);
  color: rgb(203, 203, 203);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(39, 39, 39);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 17, 17);
  border-left-color: rgb(39, 39, 39);
  color: rgb(203, 203, 203);
}

body div#quartz-root {
  background-color: rgb(17, 17, 17);
  color: rgb(203, 203, 203);
}`,
    typography: `body .page article p > b, b {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body .page article p > em, em {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body .page article p > i, i {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body .page article p > strong, strong {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body .text-highlight {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body del {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: line-through rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body p {
  color: rgb(120, 120, 120);
  outline: rgb(120, 120, 120) none 0px;
  text-decoration: rgb(120, 120, 120);
  text-decoration-color: rgb(120, 120, 120);
}`,
    lists: `body dd {
  color: rgb(203, 203, 203);
}

body dt {
  color: rgb(203, 203, 203);
}

body ol > li {
  color: rgb(203, 203, 203);
}

body ol.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body ul > li {
  color: rgb(203, 203, 203);
}

body ul.overflow {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(64, 64, 64);
  text-decoration: rgb(64, 64, 64);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body table {
  color: rgb(203, 203, 203);
}

body td {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(203, 203, 203);
}

body th {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(203, 203, 203);
}`,
    code: `body code {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(203, 203, 203);
}

body pre > code, pre:has(> code) {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}

body pre:has(> code) {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
}`,
    images: `body audio {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body figcaption {
  color: rgb(203, 203, 203);
}

body figure {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body img {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body video {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}`,
    embeds: `body .file-embed {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(120, 120, 120);
  border-left-color: rgb(120, 120, 120);
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
}

body .footnotes {
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}

body .transclude {
  border-bottom-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body .transclude-inner {
  border-bottom-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(120, 120, 120);
  text-decoration: line-through rgb(120, 120, 120);
  text-decoration-color: rgb(120, 120, 120);
}

body input[type=checkbox] {
  border-bottom-color: rgb(64, 64, 64);
  border-left-color: rgb(64, 64, 64);
  border-right-color: rgb(64, 64, 64);
  border-top-color: rgb(64, 64, 64);
}

body li.task-list-item[data-task='!'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='*'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='-'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='/'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='>'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='?'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='I'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='S'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='b'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='c'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='d'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='f'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='i'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='k'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='l'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='p'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='u'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body li.task-list-item[data-task='w'] {
  color: rgb(203, 203, 203);
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}`,
    search: `body .search > .search-button {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(203, 203, 203);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > * {
  color: rgb(203, 203, 203);
  outline: rgb(203, 203, 203) none 0px;
  text-decoration: rgb(203, 203, 203);
  text-decoration-color: rgb(203, 203, 203);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(203, 203, 203);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(203, 203, 203);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(203, 203, 203);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 17, 17);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(203, 203, 203);
}

body h1 {
  color: rgb(203, 203, 203);
}

body h2 {
  color: rgb(203, 203, 203);
}

body h2.page-title, h2.page-title a {
  color: rgb(203, 203, 203);
}

body h3 {
  color: rgb(203, 203, 203);
}

body h4 {
  color: rgb(203, 203, 203);
}

body h5 {
  color: rgb(203, 203, 203);
}

body h6 {
  color: rgb(203, 203, 203);
}

body hr {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 17, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 17, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(120, 120, 120);
  text-decoration: rgb(120, 120, 120);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(120, 120, 120);
  text-decoration: rgb(120, 120, 120);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(120, 120, 120);
  text-decoration: rgb(120, 120, 120);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(120, 120, 120);
  border-left-color: rgb(120, 120, 120);
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  color: rgb(120, 120, 120);
}`,
    footer: `body footer {
  background-color: rgb(17, 17, 17);
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(120, 120, 120);
}

body footer ul li a {
  color: rgb(120, 120, 120);
  text-decoration: rgb(120, 120, 120);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(203, 203, 203);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(120, 120, 120);
  text-decoration: rgb(120, 120, 120);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(120, 120, 120);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body li.section-li > .section .meta {
  color: rgb(120, 120, 120);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(120, 120, 120);
  text-decoration: rgb(120, 120, 120);
}

body ul.section-ul {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(120, 120, 120);
  border-left-color: rgb(120, 120, 120);
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  color: rgb(120, 120, 120);
}

body .darkmode svg {
  color: rgb(120, 120, 120);
  stroke: rgb(120, 120, 120);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(120, 120, 120);
  border-left-color: rgb(120, 120, 120);
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  color: rgb(120, 120, 120);
}

body .breadcrumb-element p {
  color: rgb(64, 64, 64);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}

body .metadata {
  border-bottom-color: rgb(39, 39, 39);
  border-left-color: rgb(39, 39, 39);
  border-right-color: rgb(39, 39, 39);
  border-top-color: rgb(39, 39, 39);
  color: rgb(120, 120, 120);
}

body .metadata-properties {
  border-bottom-color: rgb(120, 120, 120);
  border-left-color: rgb(120, 120, 120);
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  color: rgb(120, 120, 120);
}

body .navigation-progress {
  background-color: rgb(17, 17, 17);
}

body .page-header h2.page-title {
  color: rgb(203, 203, 203);
}

body abbr {
  color: rgb(203, 203, 203);
  text-decoration: underline dotted rgb(203, 203, 203);
}

body details {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body input[type=text] {
  border-bottom-color: rgb(120, 120, 120);
  border-left-color: rgb(120, 120, 120);
  border-right-color: rgb(120, 120, 120);
  border-top-color: rgb(120, 120, 120);
  color: rgb(120, 120, 120);
}

body kbd {
  background-color: rgb(19, 19, 19);
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
  color: rgb(203, 203, 203);
}

body progress {
  border-bottom-color: rgb(203, 203, 203);
  border-left-color: rgb(203, 203, 203);
  border-right-color: rgb(203, 203, 203);
  border-top-color: rgb(203, 203, 203);
}

body sub {
  color: rgb(203, 203, 203);
}

body summary {
  color: rgb(203, 203, 203);
}

body sup {
  color: rgb(203, 203, 203);
}`,
  },
  light: {},
};
