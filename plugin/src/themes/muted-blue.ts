import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "muted-blue", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #0f111a !important;
  --background-modifier-border-hover: #393e50 !important;
  --background-modifier-form-field: #4b4f62 !important;
  --background-modifier-form-field-hover: #4b4f62 !important;
  --background-primary: #0f111a !important;
  --background-primary-alt: #0f111a !important;
  --background-secondary: #0f111a !important;
  --background-secondary-alt: #0f111a !important;
  --bases-cards-background: #0f111a !important;
  --bases-cards-cover-background: #0f111a !important;
  --bases-cards-shadow: 0 0 0 1px #0f111a !important;
  --bases-cards-shadow-hover: 0 0 0 1px #393e50 !important;
  --bases-embed-border-color: #0f111a !important;
  --bases-group-heading-property-color: #bababa !important;
  --bases-table-border-color: #a6accd !important;
  --bases-table-cell-background-active: #0f111a !important;
  --bases-table-cell-background-disabled: #0f111a !important;
  --bases-table-group-background: #0f111a !important;
  --bases-table-header-background: #0f111a !important;
  --bases-table-header-color: #bababa !important;
  --bases-table-summary-background: #0f111a !important;
  --blur-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent)) !important;
  --canvas-background: #0f111a !important;
  --canvas-dot-pattern: #0f111a !important;
  --caret-color: #a6accd !important;
  --checkbox-border-color-hover: #bababa !important;
  --checkbox-marker-color: #0f111a !important;
  --checklist-done-color: #bababa !important;
  --code-background: rgba(39, 41, 49, 0.2) !important;
  --code-border-color: #0f111a !important;
  --code-normal: #a6accd !important;
  --code-punctuation: #bababa !important;
  --color-base-00: #0f111a !important;
  --color-base-05: red !important;
  --color-base-10: #0f111a !important;
  --color-base-100: #a6accd !important;
  --color-base-20: #0f111a !important;
  --color-base-25: #4b4f62 !important;
  --color-base-30: #0f111a !important;
  --color-base-35: #393e50 !important;
  --color-base-70: #bababa !important;
  --dark: #a6accd !important;
  --darkgray: #a6accd !important;
  --divider-color: #0f111a !important;
  --dropdown-background: #393e50 !important;
  --dropdown-background-hover: #393e50 !important;
  --embed-block-shadow-hover: 0 0 0 1px #0f111a, inset 0 0 0 1px #0f111a !important;
  --file-header-background: #0f111a !important;
  --file-header-background-focused: #0f111a !important;
  --flair-background: #393e50 !important;
  --flair-color: #a6accd !important;
  --footnote-divider-color: #0f111a !important;
  --footnote-id-color: #bababa !important;
  --graph-line: #393e50 !important;
  --graph-node: #bababa !important;
  --graph-text: #a6accd !important;
  --gray: #bababa !important;
  --hr-color: #272931 !important;
  --icon-color: #4b4f62 !important;
  --icon-color-focused: #a6accd !important;
  --icon-color-hover: #a6accd !important;
  --interactive-hover: #393e50 !important;
  --interactive-normal: #393e50 !important;
  --light: #0f111a !important;
  --lightgray: #0f111a !important;
  --list-marker-color-hover: #bababa !important;
  --menu-background: #0f111a !important;
  --menu-border-color: #393e50 !important;
  --metadata-border-color: #0f111a !important;
  --metadata-divider-color: #0f111a !important;
  --metadata-input-text-color: #a6accd !important;
  --metadata-label-text-color: #bababa !important;
  --metadata-label-text-color-hover: #bababa !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #393e50 !important;
  --modal-background: #0f111a !important;
  --nav-heading-color: #a6accd !important;
  --nav-heading-color-collapsed-hover: #bababa !important;
  --nav-heading-color-hover: #a6accd !important;
  --nav-item-background-active: none !important;
  --nav-item-background-hover: none !important;
  --nav-item-color: #a6accd !important;
  --nav-item-color-active: #2979ff !important;
  --nav-item-color-hover: white !important;
  --nav-item-color-selected: #a6accd !important;
  --nav-tag-color-active: #bababa !important;
  --nav-tag-color-hover: #bababa !important;
  --pdf-background: #0f111a !important;
  --pdf-page-background: #0f111a !important;
  --pdf-shadow: 0 0 0 1px #0f111a !important;
  --pdf-sidebar-background: #0f111a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f111a !important;
  --pill-border-color: #0f111a !important;
  --pill-border-color-hover: #393e50 !important;
  --pill-color: #bababa !important;
  --pill-color-hover: #a6accd !important;
  --prompt-background: #0f111a !important;
  --raised-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent)) !important;
  --ribbon-background: #0f111a !important;
  --ribbon-background-collapsed: #0f111a !important;
  --search-clear-button-color: #bababa !important;
  --search-icon-color: #bababa !important;
  --search-result-background: #0f111a !important;
  --setting-group-heading-color: #a6accd !important;
  --setting-items-background: #0f111a !important;
  --setting-items-border-color: #0f111a !important;
  --slider-thumb-border-color: #393e50 !important;
  --slider-track-background: #393e50 !important;
  --status-bar-background: #0f111a !important;
  --status-bar-border-color: #0f111a !important;
  --status-bar-text-color: #bababa !important;
  --suggestion-background: #0f111a !important;
  --tab-background-active: #0f111a !important;
  --tab-container-background: #0f111a !important;
  --tab-divider-color: #393e50 !important;
  --tab-outline-color: #0f111a !important;
  --tab-switcher-background: #0f111a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f111a, transparent) !important;
  --tab-text-color-active: #bababa !important;
  --tab-text-color-focused: #bababa !important;
  --tab-text-color-focused-active: #bababa !important;
  --tab-text-color-focused-active-current: #a6accd !important;
  --table-add-button-border-color: #0f111a !important;
  --table-border-color: #a6accd !important;
  --table-header-border-color: #a6accd !important;
  --table-header-color: #a6accd !important;
  --text-muted: #bababa !important;
  --text-normal: #a6accd !important;
  --titlebar-background: #0f111a !important;
  --titlebar-background-focused: #0f111a !important;
  --titlebar-border-color: #0f111a !important;
  --titlebar-text-color: #bababa !important;
  --titlebar-text-color-focused: #a6accd !important;
  --vault-profile-color: #a6accd !important;
  --vault-profile-color-hover: #a6accd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 17, 26);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

html body div#quartz-root {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body .page article p > em, html em {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body .page article p > i, html i {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body .page article p > strong, html strong {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body .text-highlight {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body del {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: line-through rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}`,
    lists: `html body dd {
  color: rgb(166, 172, 205);
}

html body dt {
  color: rgb(166, 172, 205);
}

html body ol > li {
  color: rgb(166, 172, 205);
}

html body ol.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body ul > li {
  color: rgb(166, 172, 205);
}

html body ul.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body table {
  color: rgb(166, 172, 205);
}

html body td {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html body th {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}`,
    code: `html body code {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
}

html body pre:has(> code) {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
}`,
    images: `html body audio {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body figcaption {
  color: rgb(166, 172, 205);
}

html body figure {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body img {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body video {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

html body .footnotes {
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html body .transclude {
  border-bottom-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body .transclude-inner {
  border-bottom-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 186, 186);
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}`,
    search: `html body .search > .search-button {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgb(57, 62, 80);
  border-left-color: rgb(57, 62, 80);
  border-right-color: rgb(57, 62, 80);
  border-top-color: rgb(57, 62, 80);
  color: rgb(166, 172, 205);
}

html body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 26);
}

html body .search > .search-container > .search-space > * {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgb(57, 62, 80);
  border-left-color: rgb(57, 62, 80);
  border-right-color: rgb(57, 62, 80);
  border-top-color: rgb(57, 62, 80);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body h1 {
  color: rgb(166, 172, 205);
}

html body h2 {
  color: rgb(166, 172, 205);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(166, 172, 205);
}

html body h3 {
  color: rgb(166, 172, 205);
}

html body h4 {
  color: rgb(166, 172, 205);
}

html body h5 {
  color: rgb(166, 172, 205);
}

html body h6 {
  color: rgb(166, 172, 205);
}

html body hr {
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

html body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(41, 121, 255);
  border-left-color: rgb(41, 121, 255);
  border-right-color: rgb(41, 121, 255);
  border-top-color: rgb(41, 121, 255);
  color: rgb(41, 121, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(75, 79, 98);
  border-left-color: rgb(75, 79, 98);
  border-right-color: rgb(75, 79, 98);
  border-top-color: rgb(75, 79, 98);
  color: rgb(75, 79, 98);
}`,
    footer: `html body footer {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
  color: rgb(186, 186, 186);
}

html body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(166, 172, 205);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(166, 172, 205);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body li.section-li > .section .meta {
  color: rgb(166, 172, 205);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

html body ul.section-ul {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(75, 79, 98);
  border-left-color: rgb(75, 79, 98);
  border-right-color: rgb(75, 79, 98);
  border-top-color: rgb(75, 79, 98);
  color: rgb(75, 79, 98);
}

html body .darkmode svg {
  color: rgb(75, 79, 98);
  stroke: rgb(75, 79, 98);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html body .metadata {
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
  color: rgb(186, 186, 186);
}

html body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

html body .navigation-progress {
  background-color: rgb(15, 17, 26);
}

html body .page-header h2.page-title {
  color: rgb(166, 172, 205);
}

html body abbr {
  color: rgb(166, 172, 205);
  text-decoration: underline dotted rgb(166, 172, 205);
}

html body details {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body input[type=text] {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgb(57, 62, 80);
  border-left-color: rgb(57, 62, 80);
  border-right-color: rgb(57, 62, 80);
  border-top-color: rgb(57, 62, 80);
  color: rgb(186, 186, 186);
}

html body kbd {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

html body progress {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

html body sub {
  color: rgb(166, 172, 205);
}

html body summary {
  color: rgb(166, 172, 205);
}

html body sup {
  color: rgb(166, 172, 205);
}`,
  },
  light: {},
};
