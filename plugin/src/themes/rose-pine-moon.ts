import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "rose-pine-moon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-accent: #232136;
  --background-modifier-border: #e0def4;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #eb6f92;
  --background-modifier-error-hover: #eb6f92;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-success: #3e8fb0;
  --background-primary: #232136;
  --background-primary-alt: #2a273f;
  --background-secondary: #312f44;
  --background-secondary-alt: #393552;
  --bases-cards-background: #232136;
  --bases-cards-cover-background: #2a273f;
  --bases-cards-shadow: 0 0 0 1px #e0def4;
  --bases-embed-border-color: #e0def4;
  --bases-group-heading-property-color: #e0def4;
  --bases-table-border-color: #e0def4;
  --bases-table-cell-background-active: #232136;
  --bases-table-cell-background-disabled: #2a273f;
  --bases-table-cell-shadow-focus: 0 0 0 2px #f6c177;
  --bases-table-group-background: #2a273f;
  --bases-table-header-background: #232136;
  --bases-table-header-color: #e0def4;
  --bases-table-summary-background: #232136;
  --blockquote-border: #eb6f92;
  --blockquote-border-color: #f6c177;
  --blur-background: color-mix(in srgb, #f6c177 65%, transparent) linear-gradient(#f6c177, color-mix(in srgb, #f6c177 65%, transparent));
  --border-color: #2b2727;
  --canvas-background: #232136;
  --canvas-card-label-color: #eb6f92;
  --caret-color: #e0def4;
  --checkbox-border-color: #eb6f92;
  --checkbox-border-color-hover: #e0def4;
  --checkbox-color: #f6c177;
  --checkbox-color-hover: #ea9a97;
  --checkbox-marker-color: #232136;
  --checklist-done-color: #e0def4;
  --code-background: #2a273f;
  --code-block: #9ccfd8;
  --code-border-color: #e0def4;
  --code-comment: #eb6f92;
  --code-normal: #e0def4;
  --code-punctuation: #e0def4;
  --collapse-icon-color: #eb6f92;
  --collapse-icon-color-collapsed: #c4a7e7;
  --divider-color: #e0def4;
  --divider-color-hover: #f6c177;
  --dropdown-background: #f6c177;
  --dropdown-background-hover: #ea9a97;
  --embed-block-shadow-hover: 0 0 0 1px #e0def4, inset 0 0 0 1px #e0def4;
  --embed-border-start: 2px solid #f6c177;
  --file-header-background: #232136;
  --file-header-background-focused: #232136;
  --flair-background: #f6c177;
  --flair-color: #e0def4;
  --font-family-editor: Avenir, Avenir Next, sans-serif;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --font-size-code: 15px;
  --font-size-h1: 26px;
  --font-size-h2: 25px;
  --font-size-h3: 21px;
  --font-size-h4: 20px;
  --font-size-h5: 19px;
  --font-size-h6: 18px;
  --font-size-normal: 18px;
  --font-size-side-dock: 15px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 15px;
  --footnote-divider-color: #e0def4;
  --footnote-id-color: #e0def4;
  --footnote-id-color-no-occurrences: #eb6f92;
  --graph-node: #e0def4;
  --graph-node-focused: #c4a7e7;
  --graph-node-unresolved: #eb6f92;
  --graph-text: #e0def4;
  --heading-formatting: #eb6f92;
  --hr-color: #e0def4;
  --icon-color: #e0def4;
  --icon-color-active: #c4a7e7;
  --icon-color-focused: #e0def4;
  --icon-color-hover: #e0def4;
  --inline-code: #c4a7e7;
  --input-date-separator: #eb6f92;
  --input-placeholder-color: #eb6f92;
  --interactive-accent: #f6c177;
  --interactive-accent-hover: #ea9a97;
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #ea9a97;
  --interactive-normal: #f6c177;
  --link-color: #c4a7e7;
  --link-color-hover: #9ccfd8;
  --link-external-color: #c4a7e7;
  --link-external-color-hover: #9ccfd8;
  --link-unresolved-color: #c4a7e7;
  --list-marker-color: #eb6f92;
  --list-marker-color-collapsed: #c4a7e7;
  --list-marker-color-hover: #e0def4;
  --menu-background: #312f44;
  --metadata-border-color: #e0def4;
  --metadata-divider-color: #e0def4;
  --metadata-input-text-color: #e0def4;
  --metadata-label-text-color: #e0def4;
  --metadata-label-text-color-hover: #e0def4;
  --modal-background: #232136;
  --nav-collapse-icon-color: #eb6f92;
  --nav-collapse-icon-color-collapsed: #eb6f92;
  --nav-heading-color: #e0def4;
  --nav-heading-color-collapsed: #eb6f92;
  --nav-heading-color-collapsed-hover: #e0def4;
  --nav-heading-color-hover: #e0def4;
  --nav-item-color: #e0def4;
  --nav-item-color-active: #e0def4;
  --nav-item-color-highlighted: #c4a7e7;
  --nav-item-color-hover: #e0def4;
  --nav-item-color-selected: #e0def4;
  --nav-tag-color: #eb6f92;
  --nav-tag-color-active: #e0def4;
  --nav-tag-color-hover: #e0def4;
  --pdf-background: #232136;
  --pdf-page-background: #232136;
  --pdf-shadow: 0 0 0 1px #e0def4;
  --pdf-sidebar-background: #232136;
  --pdf-thumbnail-shadow: 0 0 0 1px #e0def4;
  --pill-border-color: #e0def4;
  --pill-color: #e0def4;
  --pill-color-hover: #e0def4;
  --pill-color-remove: #eb6f92;
  --pill-color-remove-hover: #c4a7e7;
  --pre-code: #312f44;
  --prompt-background: #232136;
  --raised-background: color-mix(in srgb, #f6c177 65%, transparent) linear-gradient(#f6c177, color-mix(in srgb, #f6c177 65%, transparent));
  --ribbon-background: #312f44;
  --ribbon-background-collapsed: #232136;
  --scrollbar-active-thumb-bg: #232136;
  --scrollbar-bg: #232136;
  --scrollbar-thumb-bg: #232136;
  --search-clear-button-color: #e0def4;
  --search-icon-color: #e0def4;
  --search-result-background: #232136;
  --setting-group-heading-color: #e0def4;
  --setting-items-background: #2a273f;
  --setting-items-border-color: #e0def4;
  --slider-track-background: #e0def4;
  --status-bar-background: #312f44;
  --status-bar-border-color: #e0def4;
  --status-bar-text-color: #e0def4;
  --suggestion-background: #232136;
  --tab-background-active: #232136;
  --tab-container-background: #312f44;
  --tab-outline-color: #e0def4;
  --tab-switcher-background: #312f44;
  --tab-switcher-menubar-background: linear-gradient(to top, #312f44, transparent);
  --tab-text-color: #eb6f92;
  --tab-text-color-active: #e0def4;
  --tab-text-color-focused: #e0def4;
  --tab-text-color-focused-active: #e0def4;
  --tab-text-color-focused-active-current: #e0def4;
  --tab-text-color-focused-highlighted: #c4a7e7;
  --table-add-button-border-color: #e0def4;
  --table-border-color: #e0def4;
  --table-drag-handle-background-active: #f6c177;
  --table-drag-handle-color: #eb6f92;
  --table-drag-handle-color-active: #c4a7e7;
  --table-header-border-color: #e0def4;
  --table-header-color: #e0def4;
  --table-selection-border-color: #f6c177;
  --tag-color: #c4a7e7;
  --tag-color-hover: #c4a7e7;
  --text-accent: #c4a7e7;
  --text-accent-hover: #9ccfd8;
  --text-error: #eb6f92;
  --text-error-hover: #eb6f92;
  --text-faint: #eb6f92;
  --text-highlight-bg: #312f44;
  --text-muted: #e0def4;
  --text-normal: #e0def4;
  --text-on-accent: #c4a7e7;
  --text-selection: #6272a4;
  --text-title-h1: #eb6f92;
  --text-title-h2: #c4a7e7;
  --text-title-h3: #ea9a97;
  --text-title-h4: #f6c177;
  --text-title-h5: #3e8fb0;
  --text-title-h6: #9ccfd8;
  --titlebar-background: #312f44;
  --titlebar-background-focused: #393552;
  --titlebar-border-color: #e0def4;
  --titlebar-text-color: #e0def4;
  --titlebar-text-color-focused: #e0def4;
  --vault-profile-color: #e0def4;
  --vault-profile-color-hover: #e0def4;
  --vim-cursor: #ea9a97;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(49, 47, 68);
  color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(35, 33, 54);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(49, 47, 68);
  color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(224, 222, 244);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(49, 47, 68);
  border-left-color: rgb(224, 222, 244);
  color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(9, 15, 35);
  color: rgb(255, 255, 255);
}`,
    typography: `body .page article p > b, b {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body .page article p > em, em {
  color: rgb(196, 167, 231);
  font-family: "Cartograph CF";
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body .page article p > i, i {
  color: rgb(196, 167, 231);
  font-family: "Cartograph CF";
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body .page article p > strong, strong {
  background-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration: rgb(235, 111, 146);
  text-decoration-color: rgb(235, 111, 146);
}

body .text-highlight {
  background-color: rgb(49, 47, 68);
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body p {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    links: `body a.external, footer a {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
  transition: 0.35s;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}

body a.internal.broken {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(196, 167, 231) none 0px;
  text-decoration: rgb(196, 167, 231);
  text-decoration-color: rgb(196, 167, 231);
}`,
    lists: `body dd {
  color: rgb(224, 222, 244);
}

body dl {
  margin-bottom: 18px;
  margin-top: 18px;
}

body dt {
  color: rgb(224, 222, 244);
}

body ol > li {
  color: rgb(224, 222, 244);
}

body ol.overflow {
  background-color: rgb(35, 33, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ul > li {
  color: rgb(224, 222, 244);
}

body ul.overflow {
  background-color: rgb(35, 33, 54);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(235, 111, 146);
  text-decoration: rgb(235, 111, 146);
}

body blockquote {
  background-color: rgb(49, 47, 68);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body table {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body th {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(224, 222, 244);
}`,
    code: `body code {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
  color: rgb(235, 111, 146);
  font-family: "Cartograph CF";
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(235, 111, 146);
}

body pre > code, pre:has(> code) {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(49, 47, 68);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body figcaption {
  color: rgb(255, 255, 255);
  font-size: 18px;
}

body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  margin-bottom: 18px;
  margin-top: 18px;
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
  background-color: rgb(42, 39, 63);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(246, 193, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(246, 193, 119);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(224, 222, 244);
  text-decoration: line-through rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body input[type=checkbox] {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(35, 33, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(224, 222, 244) none 0px;
  text-decoration: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(49, 47, 68);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 31.5px;
  border-bottom-right-radius: 31.5px;
  border-top-left-radius: 31.5px;
  border-top-right-radius: 31.5px;
}

body a.internal.tag-link::before {
  color: rgb(196, 167, 231);
}

body h1 {
  color: rgb(235, 111, 146);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(196, 167, 231);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h3 {
  color: rgb(234, 154, 151);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(246, 193, 119);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(62, 143, 176);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(156, 207, 216);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(9, 15, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 15, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(224, 222, 244);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(224, 222, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(224, 222, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}`,
    footer: `body footer {
  background-color: rgb(57, 53, 82);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  border-top-width: 0px;
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body li.section-li > .section .meta {
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(224, 222, 244);
  text-decoration: rgb(224, 222, 244);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .darkmode svg {
  color: rgb(224, 222, 244);
  stroke: rgb(224, 222, 244);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body .breadcrumb-element p {
  color: rgb(235, 111, 146);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

body .metadata {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .navigation-progress {
  background-color: rgb(57, 53, 82);
}

body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

body abbr {
  color: rgb(224, 222, 244);
  text-decoration: underline dotted rgb(224, 222, 244);
}

body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

body input[type=text] {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

body kbd {
  background-color: rgb(42, 39, 63);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
  font-size: 15.75px;
  padding-bottom: 1.575px;
  padding-left: 3.9375px;
  padding-right: 3.9375px;
  padding-top: 1.575px;
}

body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

body sub {
  color: rgb(224, 222, 244);
  font-size: 15px;
}

body summary {
  color: rgb(224, 222, 244);
}

body sup {
  color: rgb(224, 222, 244);
  font-size: 15px;
}`,
  },
  light: {},
};
