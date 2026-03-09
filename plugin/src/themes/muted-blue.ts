import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "muted-blue", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #0f111a;
  --background-modifier-border-hover: #393e50;
  --background-modifier-form-field: #4b4f62;
  --background-modifier-form-field-hover: #4b4f62;
  --background-primary: #0f111a;
  --background-primary-alt: #0f111a;
  --background-secondary: #0f111a;
  --background-secondary-alt: #0f111a;
  --bases-cards-background: #0f111a;
  --bases-cards-cover-background: #0f111a;
  --bases-cards-shadow: 0 0 0 1px #0f111a;
  --bases-cards-shadow-hover: 0 0 0 1px #393e50;
  --bases-embed-border-color: #0f111a;
  --bases-group-heading-property-color: #bababa;
  --bases-table-border-color: #a6accd;
  --bases-table-cell-background-active: #0f111a;
  --bases-table-cell-background-disabled: #0f111a;
  --bases-table-group-background: #0f111a;
  --bases-table-header-background: #0f111a;
  --bases-table-header-color: #bababa;
  --bases-table-summary-background: #0f111a;
  --blur-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent));
  --canvas-background: #0f111a;
  --canvas-dot-pattern: #0f111a;
  --caret-color: #a6accd;
  --checkbox-border-color-hover: #bababa;
  --checkbox-marker-color: #0f111a;
  --checklist-done-color: #bababa;
  --code-background: rgba(39, 41, 49, 0.2);
  --code-border-color: #0f111a;
  --code-normal: #a6accd;
  --code-punctuation: #bababa;
  --color-base-00: #0f111a;
  --color-base-05: red;
  --color-base-10: #0f111a;
  --color-base-100: #a6accd;
  --color-base-20: #0f111a;
  --color-base-25: #4b4f62;
  --color-base-30: #0f111a;
  --color-base-35: #393e50;
  --color-base-70: #bababa;
  --divider-color: #0f111a;
  --dropdown-background: #393e50;
  --dropdown-background-hover: #393e50;
  --embed-block-shadow-hover: 0 0 0 1px #0f111a, inset 0 0 0 1px #0f111a;
  --file-header-background: #0f111a;
  --file-header-background-focused: #0f111a;
  --flair-background: #393e50;
  --flair-color: #a6accd;
  --footnote-divider-color: #0f111a;
  --footnote-id-color: #bababa;
  --graph-line: #393e50;
  --graph-node: #bababa;
  --graph-text: #a6accd;
  --hr-color: #272931;
  --icon-color: #4b4f62;
  --icon-color-focused: #a6accd;
  --icon-color-hover: #a6accd;
  --interactive-hover: #393e50;
  --interactive-normal: #393e50;
  --list-marker-color-hover: #bababa;
  --menu-background: #0f111a;
  --menu-border-color: #393e50;
  --metadata-border-color: #0f111a;
  --metadata-divider-color: #0f111a;
  --metadata-input-text-color: #a6accd;
  --metadata-label-text-color: #bababa;
  --metadata-label-text-color-hover: #bababa;
  --metadata-property-box-shadow-hover: 0 0 0 1px #393e50;
  --modal-background: #0f111a;
  --nav-heading-color: #a6accd;
  --nav-heading-color-collapsed-hover: #bababa;
  --nav-heading-color-hover: #a6accd;
  --nav-item-background-active: none;
  --nav-item-background-hover: none;
  --nav-item-color: #a6accd;
  --nav-item-color-active: #2979ff;
  --nav-item-color-hover: white;
  --nav-item-color-selected: #a6accd;
  --nav-tag-color-active: #bababa;
  --nav-tag-color-hover: #bababa;
  --pdf-background: #0f111a;
  --pdf-page-background: #0f111a;
  --pdf-shadow: 0 0 0 1px #0f111a;
  --pdf-sidebar-background: #0f111a;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f111a;
  --pill-border-color: #0f111a;
  --pill-border-color-hover: #393e50;
  --pill-color: #bababa;
  --pill-color-hover: #a6accd;
  --prompt-background: #0f111a;
  --raised-background: color-mix(in srgb, #393e50 65%, transparent) linear-gradient(#393e50, color-mix(in srgb, #393e50 65%, transparent));
  --ribbon-background: #0f111a;
  --ribbon-background-collapsed: #0f111a;
  --search-clear-button-color: #bababa;
  --search-icon-color: #bababa;
  --search-result-background: #0f111a;
  --setting-group-heading-color: #a6accd;
  --setting-items-background: #0f111a;
  --setting-items-border-color: #0f111a;
  --slider-thumb-border-color: #393e50;
  --slider-track-background: #393e50;
  --status-bar-background: #0f111a;
  --status-bar-border-color: #0f111a;
  --status-bar-text-color: #bababa;
  --suggestion-background: #0f111a;
  --tab-background-active: #0f111a;
  --tab-container-background: #0f111a;
  --tab-divider-color: #393e50;
  --tab-outline-color: #0f111a;
  --tab-switcher-background: #0f111a;
  --tab-switcher-menubar-background: linear-gradient(to top, #0f111a, transparent);
  --tab-text-color-active: #bababa;
  --tab-text-color-focused: #bababa;
  --tab-text-color-focused-active: #bababa;
  --tab-text-color-focused-active-current: #a6accd;
  --table-add-button-border-color: #0f111a;
  --table-border-color: #a6accd;
  --table-header-border-color: #a6accd;
  --table-header-color: #a6accd;
  --text-muted: #bababa;
  --text-normal: #a6accd;
  --titlebar-background: #0f111a;
  --titlebar-background-focused: #0f111a;
  --titlebar-border-color: #0f111a;
  --titlebar-text-color: #bababa;
  --titlebar-text-color-focused: #a6accd;
  --vault-profile-color: #a6accd;
  --vault-profile-color-hover: #a6accd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 17, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

body div#quartz-root {
  background-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .page article p > em, em {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .page article p > i, i {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .page article p > strong, strong {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body .text-highlight {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body del {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: line-through rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body p {
  color: rgb(186, 186, 186);
  outline: rgb(186, 186, 186) none 0px;
  text-decoration: rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}`,
    lists: `body dd {
  color: rgb(166, 172, 205);
}

body dt {
  color: rgb(166, 172, 205);
}

body ol > li {
  color: rgb(166, 172, 205);
}

body ol.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body ul > li {
  color: rgb(166, 172, 205);
}

body ul.overflow {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body table {
  color: rgb(166, 172, 205);
}

body td {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body th {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}`,
    code: `body code {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
  color: rgb(166, 172, 205);
}

body pre > code, pre:has(> code) {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
}

body pre:has(> code) {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
}`,
    images: `body audio {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body figcaption {
  color: rgb(166, 172, 205);
}

body figure {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body img {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body video {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
}

body .footnotes {
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .transclude {
  border-bottom-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body .transclude-inner {
  border-bottom-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(186, 186, 186);
  text-decoration: line-through rgb(186, 186, 186);
  text-decoration-color: rgb(186, 186, 186);
}

body li.task-list-item[data-task='!'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
}`,
    search: `body .search > .search-button {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgb(57, 62, 80);
  border-left-color: rgb(57, 62, 80);
  border-right-color: rgb(57, 62, 80);
  border-top-color: rgb(57, 62, 80);
  color: rgb(166, 172, 205);
}

body .search > .search-container > .search-space {
  background-color: rgb(15, 17, 26);
}

body .search > .search-container > .search-space > * {
  color: rgb(166, 172, 205);
  outline: rgb(166, 172, 205) none 0px;
  text-decoration: rgb(166, 172, 205);
  text-decoration-color: rgb(166, 172, 205);
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

body .search > .search-container > .search-space > input {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgb(57, 62, 80);
  border-left-color: rgb(57, 62, 80);
  border-right-color: rgb(57, 62, 80);
  border-top-color: rgb(57, 62, 80);
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
  color: rgb(166, 172, 205);
}

body h2 {
  color: rgb(166, 172, 205);
}

body h2.page-title, h2.page-title a {
  color: rgb(166, 172, 205);
}

body h3 {
  color: rgb(166, 172, 205);
}

body h4 {
  color: rgb(166, 172, 205);
}

body h5 {
  color: rgb(166, 172, 205);
}

body h6 {
  color: rgb(166, 172, 205);
}

body hr {
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-corner {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}

body ::-webkit-scrollbar-track {
  background: rgb(15, 17, 26) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 17, 26);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(41, 121, 255);
  border-left-color: rgb(41, 121, 255);
  border-right-color: rgb(41, 121, 255);
  border-top-color: rgb(41, 121, 255);
  color: rgb(41, 121, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(75, 79, 98);
  border-left-color: rgb(75, 79, 98);
  border-right-color: rgb(75, 79, 98);
  border-top-color: rgb(75, 79, 98);
  color: rgb(75, 79, 98);
}`,
    footer: `body footer {
  background-color: rgb(15, 17, 26);
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
  color: rgb(186, 186, 186);
}

body footer ul li a {
  color: rgb(186, 186, 186);
  text-decoration: rgb(186, 186, 186);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(166, 172, 205);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(166, 172, 205);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body li.section-li > .section .meta {
  color: rgb(166, 172, 205);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(166, 172, 205);
  text-decoration: rgb(166, 172, 205);
}

body ul.section-ul {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(75, 79, 98);
  border-left-color: rgb(75, 79, 98);
  border-right-color: rgb(75, 79, 98);
  border-top-color: rgb(75, 79, 98);
  color: rgb(75, 79, 98);
}

body .darkmode svg {
  color: rgb(75, 79, 98);
  stroke: rgb(75, 79, 98);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body .metadata {
  border-bottom-color: rgb(15, 17, 26);
  border-left-color: rgb(15, 17, 26);
  border-right-color: rgb(15, 17, 26);
  border-top-color: rgb(15, 17, 26);
  color: rgb(186, 186, 186);
}

body .metadata-properties {
  border-bottom-color: rgb(186, 186, 186);
  border-left-color: rgb(186, 186, 186);
  border-right-color: rgb(186, 186, 186);
  border-top-color: rgb(186, 186, 186);
  color: rgb(186, 186, 186);
}

body .navigation-progress {
  background-color: rgb(15, 17, 26);
}

body .page-header h2.page-title {
  color: rgb(166, 172, 205);
}

body abbr {
  color: rgb(166, 172, 205);
  text-decoration: underline dotted rgb(166, 172, 205);
}

body details {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body input[type=text] {
  background-color: rgba(255, 255, 255, 0);
  border-bottom-color: rgb(57, 62, 80);
  border-left-color: rgb(57, 62, 80);
  border-right-color: rgb(57, 62, 80);
  border-top-color: rgb(57, 62, 80);
  color: rgb(186, 186, 186);
}

body kbd {
  background-color: rgba(39, 41, 49, 0.2);
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
  color: rgb(166, 172, 205);
}

body progress {
  border-bottom-color: rgb(166, 172, 205);
  border-left-color: rgb(166, 172, 205);
  border-right-color: rgb(166, 172, 205);
  border-top-color: rgb(166, 172, 205);
}

body sub {
  color: rgb(166, 172, 205);
}

body summary {
  color: rgb(166, 172, 205);
}

body sup {
  color: rgb(166, 172, 205);
}`,
  },
  light: {},
};
