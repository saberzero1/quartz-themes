import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dracula-for-obsidian",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-accent: #f8f8f2;
  --background-modifier-border: #f8f8f2;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2);
  --background-modifier-success: #50fa7b;
  --background-primary: #282a36;
  --background-primary-alt: #44475a;
  --background-secondary: #44475a;
  --background-secondary-alt: #282a36;
  --bases-cards-background: #282a36;
  --bases-cards-cover-background: #44475a;
  --bases-cards-shadow: 0 0 0 1px #f8f8f2;
  --bases-embed-border-color: #f8f8f2;
  --bases-group-heading-property-color: #f8f8f2;
  --bases-table-border-color: #f8f8f2;
  --bases-table-cell-background-active: #282a36;
  --bases-table-cell-background-disabled: #44475a;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ffb86c;
  --bases-table-group-background: #44475a;
  --bases-table-header-background: #282a36;
  --bases-table-header-color: #f8f8f2;
  --bases-table-summary-background: #282a36;
  --blockquote-border: #ffb86c;
  --blockquote-border-color: #ffb86c;
  --blur-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --border-color: #2b2727;
  --canvas-background: #282a36;
  --canvas-card-label-color: #bd93f9;
  --caret-color: #f8f8f2;
  --checkbox-border-color: #bd93f9;
  --checkbox-border-color-hover: #f8f8f2;
  --checkbox-color: #ffb86c;
  --checkbox-color-hover: #ff5555;
  --checkbox-marker-color: #282a36;
  --checklist-done-color: #f8f8f2;
  --code-background: #44475a;
  --code-block: #8be9fd;
  --code-border-color: #f8f8f2;
  --code-comment: #bd93f9;
  --code-normal: #f8f8f2;
  --code-punctuation: #f8f8f2;
  --collapse-icon-color: #bd93f9;
  --collapse-icon-color-collapsed: #ffb86c;
  --divider-color: #f8f8f2;
  --divider-color-hover: #ffb86c;
  --dropdown-background: #ffb86c;
  --dropdown-background-hover: #ff5555;
  --embed-block-shadow-hover: 0 0 0 1px #f8f8f2, inset 0 0 0 1px #f8f8f2;
  --embed-border-start: 2px solid #ffb86c;
  --file-header-background: #282a36;
  --file-header-background-focused: #282a36;
  --flair-background: #ffb86c;
  --flair-color: #f8f8f2;
  --font-family-editor: Avenir, Avenir Next, sans-serif;
  --font-family-preview: Avenir, Avenir Next, sans-serif;
  --font-size-code: 16px;
  --font-size-h1: 24px;
  --font-size-h2: 23px;
  --font-size-h3: 22px;
  --font-size-h4: 21px;
  --font-size-h5: 20px;
  --font-size-h6: 19px;
  --font-size-normal: 19px;
  --font-size-side-dock: 16px;
  --font-size-side-dock-title: 18px;
  --font-size-status-bar: 16px;
  --footnote-divider-color: #f8f8f2;
  --footnote-id-color: #f8f8f2;
  --footnote-id-color-no-occurrences: #bd93f9;
  --graph-node: #f8f8f2;
  --graph-node-focused: #ffb86c;
  --graph-node-unresolved: #bd93f9;
  --graph-text: #f8f8f2;
  --heading-formatting: #bd93f9;
  --hr-color: #f8f8f2;
  --icon-color: #f8f8f2;
  --icon-color-active: #ffb86c;
  --icon-color-focused: #f8f8f2;
  --icon-color-hover: #f8f8f2;
  --inline-code: #bd93f9;
  --input-date-separator: #bd93f9;
  --input-placeholder-color: #bd93f9;
  --interactive-accent: #ffb86c;
  --interactive-accent-hover: #ff5555;
  --interactive-accent-rgb: 123, 108, 217;
  --interactive-hover: #ff5555;
  --interactive-normal: #ffb86c;
  --link-color: #ffb86c;
  --link-color-hover: #8be9fd;
  --link-external-color: #ffb86c;
  --link-external-color-hover: #8be9fd;
  --link-unresolved-color: #ffb86c;
  --list-marker-color: #bd93f9;
  --list-marker-color-collapsed: #ffb86c;
  --list-marker-color-hover: #f8f8f2;
  --menu-background: #44475a;
  --metadata-border-color: #f8f8f2;
  --metadata-divider-color: #f8f8f2;
  --metadata-input-text-color: #f8f8f2;
  --metadata-label-text-color: #f8f8f2;
  --metadata-label-text-color-hover: #f8f8f2;
  --modal-background: #282a36;
  --nav-collapse-icon-color: #bd93f9;
  --nav-collapse-icon-color-collapsed: #bd93f9;
  --nav-heading-color: #f8f8f2;
  --nav-heading-color-collapsed: #bd93f9;
  --nav-heading-color-collapsed-hover: #f8f8f2;
  --nav-heading-color-hover: #f8f8f2;
  --nav-item-color: #f8f8f2;
  --nav-item-color-active: #f8f8f2;
  --nav-item-color-highlighted: #ffb86c;
  --nav-item-color-hover: #f8f8f2;
  --nav-item-color-selected: #f8f8f2;
  --nav-tag-color: #bd93f9;
  --nav-tag-color-active: #f8f8f2;
  --nav-tag-color-hover: #f8f8f2;
  --pdf-background: #282a36;
  --pdf-page-background: #282a36;
  --pdf-shadow: 0 0 0 1px #f8f8f2;
  --pdf-sidebar-background: #282a36;
  --pdf-thumbnail-shadow: 0 0 0 1px #f8f8f2;
  --pill-border-color: #f8f8f2;
  --pill-color: #f8f8f2;
  --pill-color-hover: #f8f8f2;
  --pill-color-remove: #bd93f9;
  --pill-color-remove-hover: #ffb86c;
  --pre-code: #44475a;
  --prompt-background: #282a36;
  --raised-background: color-mix(in srgb, #ffb86c 65%, transparent) linear-gradient(#ffb86c, color-mix(in srgb, #ffb86c 65%, transparent));
  --ribbon-background: #44475a;
  --ribbon-background-collapsed: #282a36;
  --search-clear-button-color: #f8f8f2;
  --search-icon-color: #f8f8f2;
  --search-result-background: #282a36;
  --setting-group-heading-color: #f8f8f2;
  --setting-items-background: #44475a;
  --setting-items-border-color: #f8f8f2;
  --slider-track-background: #f8f8f2;
  --status-bar-background: #44475a;
  --status-bar-border-color: #f8f8f2;
  --status-bar-text-color: #f8f8f2;
  --suggestion-background: #282a36;
  --tab-background-active: #282a36;
  --tab-container-background: #44475a;
  --tab-outline-color: #f8f8f2;
  --tab-switcher-background: #44475a;
  --tab-switcher-menubar-background: linear-gradient(to top, #44475a, transparent);
  --tab-text-color: #bd93f9;
  --tab-text-color-active: #f8f8f2;
  --tab-text-color-focused: #f8f8f2;
  --tab-text-color-focused-active: #f8f8f2;
  --tab-text-color-focused-active-current: #f8f8f2;
  --tab-text-color-focused-highlighted: #ffb86c;
  --table-add-button-border-color: #f8f8f2;
  --table-border-color: #f8f8f2;
  --table-drag-handle-background-active: #ffb86c;
  --table-drag-handle-color: #bd93f9;
  --table-drag-handle-color-active: #bd93f9;
  --table-header-border-color: #f8f8f2;
  --table-header-color: #f8f8f2;
  --table-selection-border-color: #ffb86c;
  --tag-color: #ffb86c;
  --tag-color-hover: #ffb86c;
  --text-accent: #ffb86c;
  --text-accent-hover: #8be9fd;
  --text-error: #ff79c6;
  --text-error-hover: #ff79c6;
  --text-faint: #bd93f9;
  --text-highlight-bg: #ff5555;
  --text-muted: #f8f8f2;
  --text-normal: #f8f8f2;
  --text-on-accent: #bd93f9;
  --text-selection: #6272a4;
  --text-title-h1: #ff79c6;
  --text-title-h2: #bd93f9;
  --text-title-h3: #ff5555;
  --text-title-h4: #ffb86c;
  --text-title-h5: #50fa7b;
  --text-title-h6: #8be9fd;
  --titlebar-background: #44475a;
  --titlebar-background-focused: #282a36;
  --titlebar-border-color: #f8f8f2;
  --titlebar-text-color: #f8f8f2;
  --titlebar-text-color-focused: #f8f8f2;
  --vault-profile-color: #f8f8f2;
  --vault-profile-color-hover: #f8f8f2;
  --vim-cursor: #ff5555;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(68, 71, 90);
  color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(248, 248, 242);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(68, 71, 90);
  border-left-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body div#quartz-root {
  background-color: rgb(40, 42, 54);
  color: rgb(248, 248, 242);
}`,
    typography: `body .page article p > b, b {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .page article p > em, em {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > i, i {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .page article p > strong, strong {
  color: rgb(80, 250, 123);
  outline: rgb(80, 250, 123) none 0px;
  text-decoration: rgb(80, 250, 123);
  text-decoration-color: rgb(80, 250, 123);
}

body .text-highlight {
  background-color: rgb(255, 85, 85);
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body del {
  color: rgb(248, 248, 242);
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body p {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}

body a.internal.broken {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(255, 184, 108) none 0px;
  text-decoration: rgb(255, 184, 108);
  text-decoration-color: rgb(255, 184, 108);
}`,
    lists: `body dd {
  color: rgb(248, 248, 242);
}

body dl {
  margin-bottom: 19px;
  margin-top: 19px;
}

body dt {
  color: rgb(248, 248, 242);
}

body ol > li {
  color: rgb(248, 248, 242);
}

body ol.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ul > li {
  color: rgb(248, 248, 242);
}

body ul.overflow {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
}

body blockquote {
  background-color: rgb(68, 71, 90);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body table {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body th {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-weight: 800;
}

body thead {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

body tr {
  border-bottom-color: rgb(248, 248, 242);
}`,
    code: `body code {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(189, 147, 249);
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
  color: rgb(189, 147, 249);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(189, 147, 249);
}

body pre > code, pre:has(> code) {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body figcaption {
  color: rgb(248, 248, 242);
  font-size: 19px;
}

body figure {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-bottom: 19px;
  margin-top: 19px;
}

body img {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body video {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    embeds: `body .file-embed {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .footnotes {
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .transclude {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .transclude-inner {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(255, 184, 108);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(248, 248, 242);
  text-decoration: line-through rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body input[type=checkbox] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  margin-right: 0px;
  width: 16.6562px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='*'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='-'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='/'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='>'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='?'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='I'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='S'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='b'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='c'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='d'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='f'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='i'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='k'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='l'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='p'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='u'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body li.task-list-item[data-task='w'] {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 42, 54);
}

body .search > .search-container > .search-space > * {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(248, 248, 242) none 0px;
  text-decoration: rgb(248, 248, 242);
  text-decoration-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(68, 71, 90);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(248, 248, 242);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 33.25px;
  border-bottom-right-radius: 33.25px;
  border-top-left-radius: 33.25px;
  border-top-right-radius: 33.25px;
}

body a.internal.tag-link::before {
  color: rgb(255, 184, 108);
}

body h1 {
  color: rgb(255, 121, 198);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2 {
  color: rgb(189, 147, 249);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h3 {
  color: rgb(255, 85, 85);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h4 {
  color: rgb(255, 184, 108);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h5 {
  color: rgb(80, 250, 123);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body h6 {
  color: rgb(139, 233, 253);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body hr {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 42, 54) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 42, 54);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
  text-decoration: rgb(248, 248, 242);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(248, 248, 242);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(248, 248, 242);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}`,
    footer: `body footer {
  background-color: rgb(40, 42, 54);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  border-top-width: 0px;
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body footer ul li a {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body li.section-li > .section .meta {
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(248, 248, 242);
  text-decoration: rgb(248, 248, 242);
}

body ul.section-ul {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .darkmode svg {
  color: rgb(248, 248, 242);
  stroke: rgb(248, 248, 242);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body .metadata {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-family: Avenir, "Avenir Next", sans-serif;
}

body .navigation-progress {
  background-color: rgb(40, 42, 54);
}

body .page-header h2.page-title {
  color: rgb(248, 248, 242);
}

body abbr {
  color: rgb(248, 248, 242);
  text-decoration: underline dotted rgb(248, 248, 242);
}

body details {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body input[type=text] {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
}

body kbd {
  background-color: rgb(68, 71, 90);
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
  color: rgb(248, 248, 242);
  font-size: 16.625px;
  padding-bottom: 1.6625px;
  padding-left: 4.15625px;
  padding-right: 4.15625px;
  padding-top: 1.6625px;
}

body progress {
  border-bottom-color: rgb(248, 248, 242);
  border-left-color: rgb(248, 248, 242);
  border-right-color: rgb(248, 248, 242);
  border-top-color: rgb(248, 248, 242);
}

body sub {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}

body summary {
  color: rgb(248, 248, 242);
}

body sup {
  color: rgb(248, 248, 242);
  font-size: 15.8333px;
}`,
  },
  light: {},
};
