import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "atom", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 219;
  --accent-l: 55%;
  --accent-s: 56%;
  --aqua: #56b6c2;
  --background-accent: #000;
  --background-modifier-active-hover: rgba(76, 121, 205, 0.1);
  --background-modifier-border: #424958;
  --background-modifier-border-focus: #353b47;
  --background-modifier-border-hover: #353b47;
  --background-modifier-cover: rgba(0, 0, 0, 0.6);
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-hover: rgba(116, 133, 164, 0.06);
  --background-modifier-message: #1a1e24;
  --background-modifier-success: #539126;
  --background-primary: #272b34;
  --background-primary-alt: #20242b;
  --background-secondary: #20242b;
  --background-secondary-alt: #1a1e24;
  --bases-cards-background: #272b34;
  --bases-cards-cover-background: #20242b;
  --bases-cards-shadow: 0 0 0 1px #424958;
  --bases-cards-shadow-hover: 0 0 0 1px #353b47;
  --bases-embed-border-color: #424958;
  --bases-group-heading-property-color: #888;
  --bases-table-border-color: #424958;
  --bases-table-cell-background-active: #272b34;
  --bases-table-cell-background-disabled: #20242b;
  --bases-table-cell-background-selected: rgba(76, 121, 205, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #353b47;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(76, 121, 205);
  --bases-table-group-background: #20242b;
  --bases-table-header-background: #272b34;
  --bases-table-header-background-hover: rgba(116, 133, 164, 0.06);
  --bases-table-header-color: #888;
  --bases-table-summary-background: #272b34;
  --bases-table-summary-background-hover: rgba(116, 133, 164, 0.06);
  --blockquote-border-color: rgb(76, 121, 205);
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --canvas-background: #272b34;
  --canvas-card-label-color: rgb(81, 86, 99);
  --caret-color: #dcddde;
  --checkbox-border-color: rgb(81, 86, 99);
  --checkbox-border-color-hover: #888;
  --checkbox-color: #61afef;
  --checkbox-color-hover: #70bdfc;
  --checkbox-marker-color: #272b34;
  --checklist-done-color: #888;
  --code-background: #20242b;
  --code-border-color: #424958;
  --code-bracket-background: rgba(116, 133, 164, 0.06);
  --code-comment: rgb(81, 86, 99);
  --code-normal: #dcddde;
  --code-punctuation: #888;
  --collapse-icon-color: rgb(81, 86, 99);
  --collapse-icon-color-collapsed: #61afef;
  --color-accent: rgb(76, 121, 205);
  --color-accent-1: rgb(107, 150, 214);
  --color-accent-2: rgb(137, 175, 225);
  --color-accent-hsl: 219, 56%, 55%;
  --divider-color: transparent;
  --divider-color-hover: #404754;
  --drag-ghost-background: #1a1e24;
  --dropdown-background: #20242b;
  --dropdown-background-hover: #353b47;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958;
  --embed-border-start: 2px solid rgb(76, 121, 205);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #272b34;
  --file-header-background-focused: #272b34;
  --flair-background: #20242b;
  --flair-color: #dcddde;
  --footnote-divider-color: #424958;
  --footnote-id-color: #888;
  --footnote-id-color-no-occurrences: rgb(81, 86, 99);
  --footnote-input-background-active: rgba(116, 133, 164, 0.06);
  --graph-node: #888;
  --graph-node-focused: #61afef;
  --graph-node-unresolved: rgb(81, 86, 99);
  --graph-text: #dcddde;
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #98c379;
  --heading-formatting: rgb(81, 86, 99);
  --hr-color: #424958;
  --icon-color: #888;
  --icon-color-active: #61afef;
  --icon-color-focused: #dcddde;
  --icon-color-hover: #888;
  --inline-title-weight: 600;
  --input-date-separator: rgb(81, 86, 99);
  --input-placeholder-color: rgb(81, 86, 99);
  --interactive-accent: rgb(76, 121, 205);
  --interactive-accent-hover: rgb(45, 94, 185);
  --interactive-accent-hsl: 219, 56%, 55%;
  --interactive-hover: #353b47;
  --interactive-normal: #20242b;
  --link-color: #61afef;
  --link-color-hover: #70bdfc;
  --link-decoration: none;
  --link-external-color: #61afef;
  --link-external-color-hover: #70bdfc;
  --link-external-decoration: none;
  --link-unresolved-color: #61afef;
  --link-unresolved-decoration-color: rgba(76, 121, 205, 0.3);
  --list-marker-color: rgb(81, 86, 99);
  --list-marker-color-collapsed: #61afef;
  --list-marker-color-hover: #888;
  --menu-background: #20242b;
  --menu-border-color: #353b47;
  --metadata-border-color: #424958;
  --metadata-divider-color: #424958;
  --metadata-input-background-active: rgba(116, 133, 164, 0.06);
  --metadata-input-text-color: #dcddde;
  --metadata-label-background-active: rgba(116, 133, 164, 0.06);
  --metadata-label-text-color: #888;
  --metadata-label-text-color-hover: #888;
  --metadata-property-background-active: rgba(116, 133, 164, 0.06);
  --metadata-property-box-shadow-focus: 0 0 0 2px #353b47;
  --metadata-property-box-shadow-hover: 0 0 0 1px #353b47;
  --modal-background: #272b34;
  --modal-border-color: #18191e;
  --nav-collapse-icon-color: rgb(81, 86, 99);
  --nav-collapse-icon-color-collapsed: rgb(81, 86, 99);
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: rgb(81, 86, 99);
  --nav-heading-color-collapsed-hover: #888;
  --nav-heading-color-hover: #dcddde;
  --nav-item-background-active: rgb(76, 121, 205);
  --nav-item-background-hover: rgba(116, 133, 164, 0.06);
  --nav-item-background-selected: rgba(76, 121, 205, 0.15);
  --nav-item-color: #888;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #61afef;
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: rgb(81, 86, 99);
  --nav-tag-color-active: #888;
  --nav-tag-color-hover: #888;
  --orange: #d19a66;
  --panel-border-color: #18191e;
  --pdf-background: #272b34;
  --pdf-page-background: #272b34;
  --pdf-shadow: 0 0 0 1px #424958;
  --pdf-sidebar-background: #272b34;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958;
  --pill-border-color: #424958;
  --pill-border-color-hover: #353b47;
  --pill-color: #888;
  --pill-color-hover: #dcddde;
  --pill-color-remove: rgb(81, 86, 99);
  --pill-color-remove-hover: #61afef;
  --prompt-background: #272b34;
  --prompt-border-color: #18191e;
  --purple: #c678dd;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --red: #e06c75;
  --ribbon-background: #272b34;
  --ribbon-background-collapsed: #272b34;
  --search-clear-button-color: #888;
  --search-icon-color: #888;
  --search-result-background: #272b34;
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #20242b;
  --setting-items-border-color: #424958;
  --slider-thumb-border-color: #353b47;
  --slider-track-background: #424958;
  --status-bar-background: #20242b;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #888;
  --suggestion-background: #272b34;
  --tab-background-active: #272b34;
  --tab-container-background: #20242b;
  --tab-divider-color: #353b47;
  --tab-outline-color: transparent;
  --tab-switcher-background: #20242b;
  --tab-switcher-menubar-background: linear-gradient(to top, #20242b, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(76, 121, 205);
  --tab-text-color: rgb(81, 86, 99);
  --tab-text-color-active: #888;
  --tab-text-color-focused: #888;
  --tab-text-color-focused-active: #888;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: #61afef;
  --table-add-button-border-color: #424958;
  --table-border-color: #424958;
  --table-drag-handle-background-active: rgb(76, 121, 205);
  --table-drag-handle-color: rgb(81, 86, 99);
  --table-drag-handle-color-active: #dcddde;
  --table-header-border-color: #424958;
  --table-header-color: #dcddde;
  --table-selection: rgba(76, 121, 205, 0.1);
  --table-selection-border-color: rgb(76, 121, 205);
  --tag-background: #20242b;
  --tag-background-hover: #20242b;
  --tag-border-color: rgba(76, 121, 205, 0.15);
  --tag-border-color-hover: rgba(76, 121, 205, 0.15);
  --tag-color: #e5c07b;
  --tag-color-hover: #e5c07b;
  --tag-padding-x: 4px;
  --tag-padding-y: 2px;
  --tag-radius: 4px;
  --text-accent: #61afef;
  --text-accent-hover: #70bdfc;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-faint: rgb(81, 86, 99);
  --text-highlight-bg: rgba(255, 255, 0, 0.4);
  --text-muted: #888;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --titlebar-background: #20242b;
  --titlebar-background-focused: #1a1e24;
  --titlebar-border-color: #424958;
  --titlebar-text-color: #888;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --yellow: #e5c07b;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(32, 36, 43);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(39, 43, 52);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(32, 36, 43);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 36, 43);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(39, 43, 52);
  color: rgb(220, 221, 222);
}`,
    typography: `body .page article p > b, b {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > em, em {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > i, i {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .page article p > strong, strong {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body del {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: line-through rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body p {
  color: rgb(136, 136, 136);
  outline: rgb(136, 136, 136) none 0px;
  text-decoration: rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgb(97, 175, 239);
  text-decoration-color: rgb(97, 175, 239);
}

body a.internal.broken {
  color: rgb(97, 175, 239);
  outline: rgb(97, 175, 239) none 0px;
  text-decoration: rgba(76, 121, 205, 0.3);
  text-decoration-color: rgba(76, 121, 205, 0.3);
}`,
    lists: `body dd {
  color: rgb(220, 221, 222);
}

body dt {
  color: rgb(220, 221, 222);
}

body ol > li {
  color: rgb(220, 221, 222);
}

body ol.overflow {
  background-color: rgb(39, 43, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(39, 43, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(81, 86, 99);
  text-decoration: rgb(81, 86, 99);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body table {
  color: rgb(220, 221, 222);
}

body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}

body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}`,
    code: `body code {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}

body pre > code > [data-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(229, 192, 123);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(229, 192, 123);
  border-left-color: rgb(229, 192, 123);
  border-right-color: rgb(229, 192, 123);
  border-top-color: rgb(229, 192, 123);
}

body pre > code, pre:has(> code) {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body figcaption {
  color: rgb(220, 221, 222);
}

body figure {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body img {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body video {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    embeds: `body .file-embed {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
}

body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .transclude {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(76, 121, 205);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .transclude-inner {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(76, 121, 205);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    checkboxes: `body .katex-display > .katex {
  text-align: left;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(81, 86, 99);
  border-left-color: rgb(81, 86, 99);
  border-right-color: rgb(81, 86, 99);
  border-top-color: rgb(81, 86, 99);
}

body li.task-list-item[data-task='!'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='*'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='-'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='/'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='>'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='?'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='I'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='S'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='b'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='c'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='d'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='f'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='i'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='k'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='l'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='p'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='u'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body li.task-list-item[data-task='w'] {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space {
  background-color: rgb(39, 43, 52);
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

body .search > .search-container > .search-space > * {
  color: rgb(220, 221, 222);
  outline: rgb(220, 221, 222) none 0px;
  text-decoration: rgb(220, 221, 222);
  text-decoration-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(24, 25, 30);
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-top-color: rgb(24, 25, 30);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 36, 43);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(116, 133, 164, 0.06);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(116, 133, 164, 0.06);
  color: rgb(220, 221, 222);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgba(76, 121, 205, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(76, 121, 205, 0.15);
  border-right-color: rgba(76, 121, 205, 0.15);
  border-top-color: rgba(76, 121, 205, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(229, 192, 123);
}

body h1 {
  color: rgb(220, 221, 222);
}

body h2 {
  color: rgb(220, 221, 222);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(220, 221, 222);
}

body h4 {
  color: rgb(220, 221, 222);
}

body h5 {
  color: rgb(220, 221, 222);
}

body h6 {
  color: rgb(220, 221, 222);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

body ::-webkit-scrollbar-corner {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}

body ::-webkit-scrollbar-track {
  background: rgb(39, 43, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(39, 43, 52);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(76, 121, 205);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `body footer {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(136, 136, 136);
}

body footer ul li a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(136, 136, 136);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(136, 136, 136);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(136, 136, 136);
  text-decoration: rgb(136, 136, 136);
}

body ul.section-ul {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .darkmode svg {
  color: rgb(136, 136, 136);
  stroke: rgb(136, 136, 136);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .breadcrumb-element p {
  color: rgb(81, 86, 99);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(136, 136, 136);
}

body .metadata-properties {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body .navigation-progress {
  background-color: rgb(32, 36, 43);
}

body .page-header h2.page-title {
  color: rgb(220, 221, 222);
}

body abbr {
  color: rgb(220, 221, 222);
  text-decoration: underline dotted rgb(220, 221, 222);
}

body details {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body input[type=text] {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}

body kbd {
  background-color: rgb(32, 36, 43);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body progress {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body sub {
  color: rgb(220, 221, 222);
}

body summary {
  color: rgb(220, 221, 222);
}

body sup {
  color: rgb(220, 221, 222);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 230;
  --accent-l: 64%;
  --accent-s: 83%;
  --aqua: #0084bc;
  --background-accent: #fff;
  --background-modifier-active-hover: rgba(87, 112, 239, 0.1);
  --background-modifier-border: #dbdbdc;
  --background-modifier-border-focus: #dbdbdc;
  --background-modifier-border-hover: #dbdbdc;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #e68787;
  --background-modifier-error-hover: #FF9494;
  --background-modifier-error-rgb: 230, 135, 135;
  --background-modifier-form-field: #fff;
  --background-modifier-form-field-highlighted: #fff;
  --background-modifier-form-field-hover: #fff;
  --background-modifier-message: #dbdbdc;
  --background-modifier-success: #A4E7C3;
  --background-primary: #fafafa;
  --background-primary-alt: #eaeaeb;
  --background-secondary: #eaeaeb;
  --background-secondary-alt: #dbdbdc;
  --bases-cards-background: #fafafa;
  --bases-cards-cover-background: #eaeaeb;
  --bases-cards-shadow: 0 0 0 1px #dbdbdc;
  --bases-cards-shadow-hover: 0 0 0 1px #dbdbdc;
  --bases-embed-border-color: #dbdbdc;
  --bases-group-heading-property-color: #8e8e90;
  --bases-table-border-color: #dbdbdc;
  --bases-table-cell-background-active: #fafafa;
  --bases-table-cell-background-disabled: #eaeaeb;
  --bases-table-cell-background-selected: rgba(87, 112, 239, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #dbdbdc;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(110, 134, 242);
  --bases-table-group-background: #eaeaeb;
  --bases-table-header-background: #fafafa;
  --bases-table-header-color: #8e8e90;
  --bases-table-summary-background: #fafafa;
  --blockquote-border-color: rgb(110, 134, 242);
  --blue: #3d74f6;
  --blur-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent));
  --canvas-background: #fafafa;
  --canvas-card-label-color: #999999;
  --caret-color: #383a42;
  --checkbox-border-color: #999999;
  --checkbox-border-color-hover: #8e8e90;
  --checkbox-color: #1592ff;
  --checkbox-color-hover: #097add;
  --checkbox-marker-color: #fafafa;
  --checklist-done-color: #8e8e90;
  --code-background: #eaeaeb;
  --code-border-color: #dbdbdc;
  --code-comment: #999999;
  --code-normal: #383a42;
  --code-punctuation: #8e8e90;
  --collapse-icon-color: #999999;
  --collapse-icon-color-collapsed: #1592ff;
  --color-accent: rgb(87, 112, 239);
  --color-accent-1: rgb(110, 134, 242);
  --color-accent-2: rgb(132, 157, 245);
  --color-accent-hsl: 230, 83%, 64%;
  --divider-color: transparent;
  --divider-color-hover: rgb(110, 134, 242);
  --drag-ghost-background: #dbdbdc;
  --dropdown-background: #eaeaeb;
  --dropdown-background-hover: #dbdbdc;
  --embed-block-shadow-hover: 0 0 0 1px #dbdbdc, inset 0 0 0 1px #dbdbdc;
  --embed-border-start: 2px solid rgb(110, 134, 242);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #fafafa;
  --file-header-background-focused: #fafafa;
  --flair-background: #eaeaeb;
  --flair-color: #383a42;
  --footnote-divider-color: #dbdbdc;
  --footnote-id-color: #8e8e90;
  --footnote-id-color-no-occurrences: #999999;
  --graph-node: #8e8e90;
  --graph-node-focused: #1592ff;
  --graph-node-unresolved: #999999;
  --graph-text: #383a42;
  --gray-1: #383a42;
  --gray-2: #383a42;
  --green: #4ea24c;
  --heading-formatting: #999999;
  --hr-color: #dbdbdc;
  --icon-color: #8e8e90;
  --icon-color-active: #1592ff;
  --icon-color-focused: #383a42;
  --icon-color-hover: #8e8e90;
  --inline-title-weight: 600;
  --input-date-separator: #999999;
  --input-placeholder-color: #999999;
  --interactive-accent: rgb(110, 134, 242);
  --interactive-accent-hover: rgb(79, 103, 227);
  --interactive-accent-hsl: 230, 83%, 64%;
  --interactive-accent-rgb: 21, 146, 255;
  --interactive-hover: #dbdbdc;
  --interactive-normal: #eaeaeb;
  --link-color: #1592ff;
  --link-color-hover: #097add;
  --link-decoration: none;
  --link-external-color: #1592ff;
  --link-external-color-hover: #097add;
  --link-external-decoration: none;
  --link-unresolved-color: #1592ff;
  --link-unresolved-decoration-color: rgba(87, 112, 239, 0.3);
  --list-marker-color: #999999;
  --list-marker-color-collapsed: #1592ff;
  --list-marker-color-hover: #8e8e90;
  --menu-background: #eaeaeb;
  --menu-border-color: #dbdbdc;
  --metadata-border-color: #dbdbdc;
  --metadata-divider-color: #dbdbdc;
  --metadata-input-text-color: #383a42;
  --metadata-label-text-color: #8e8e90;
  --metadata-label-text-color-hover: #8e8e90;
  --metadata-property-box-shadow-focus: 0 0 0 2px #dbdbdc;
  --metadata-property-box-shadow-hover: 0 0 0 1px #dbdbdc;
  --modal-background: #fafafa;
  --modal-border-color: #dbdbdc;
  --nav-collapse-icon-color: #999999;
  --nav-collapse-icon-color-collapsed: #999999;
  --nav-heading-color: #383a42;
  --nav-heading-color-collapsed: #999999;
  --nav-heading-color-collapsed-hover: #8e8e90;
  --nav-heading-color-hover: #383a42;
  --nav-item-background-active: rgb(110, 134, 242);
  --nav-item-background-selected: rgba(87, 112, 239, 0.15);
  --nav-item-color: #8e8e90;
  --nav-item-color-active: #ffffff;
  --nav-item-color-highlighted: #1592ff;
  --nav-item-color-hover: #383a42;
  --nav-item-color-selected: #383a42;
  --nav-tag-color: #999999;
  --nav-tag-color-active: #8e8e90;
  --nav-tag-color-hover: #8e8e90;
  --orange: #986800;
  --panel-border-color: #dbdbdc;
  --pdf-background: #fafafa;
  --pdf-page-background: #fafafa;
  --pdf-sidebar-background: #fafafa;
  --pill-border-color: #dbdbdc;
  --pill-border-color-hover: #dbdbdc;
  --pill-color: #8e8e90;
  --pill-color-hover: #383a42;
  --pill-color-remove: #999999;
  --pill-color-remove-hover: #1592ff;
  --prompt-background: #fafafa;
  --prompt-border-color: #dbdbdc;
  --purple: #a625a4;
  --raised-background: color-mix(in srgb, #fafafa 65%, transparent) linear-gradient(#fafafa, color-mix(in srgb, #fafafa 65%, transparent));
  --red: #e75545;
  --ribbon-background: #fafafa;
  --ribbon-background-collapsed: #fafafa;
  --search-clear-button-color: #8e8e90;
  --search-icon-color: #8e8e90;
  --search-result-background: #fafafa;
  --setting-group-heading-color: #383a42;
  --setting-items-background: #eaeaeb;
  --setting-items-border-color: #dbdbdc;
  --slider-thumb-border-color: #dbdbdc;
  --slider-track-background: #dbdbdc;
  --status-bar-background: #eaeaeb;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #8e8e90;
  --suggestion-background: #fafafa;
  --tab-background-active: #fafafa;
  --tab-container-background: #eaeaeb;
  --tab-divider-color: #dbdbdc;
  --tab-outline-color: transparent;
  --tab-switcher-background: #eaeaeb;
  --tab-switcher-menubar-background: linear-gradient(to top, #eaeaeb, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(87, 112, 239);
  --tab-text-color: #999999;
  --tab-text-color-active: #8e8e90;
  --tab-text-color-focused: #8e8e90;
  --tab-text-color-focused-active: #8e8e90;
  --tab-text-color-focused-active-current: #383a42;
  --tab-text-color-focused-highlighted: #1592ff;
  --table-add-button-border-color: #dbdbdc;
  --table-border-color: #dbdbdc;
  --table-drag-handle-background-active: rgb(110, 134, 242);
  --table-drag-handle-color: #999999;
  --table-drag-handle-color-active: #f2f2f2;
  --table-header-border-color: #dbdbdc;
  --table-header-color: #383a42;
  --table-selection: rgba(87, 112, 239, 0.1);
  --table-selection-border-color: rgb(110, 134, 242);
  --tag-background: #eaeaeb;
  --tag-background-hover: #eaeaeb;
  --tag-border-color: rgba(87, 112, 239, 0.15);
  --tag-border-color-hover: rgba(87, 112, 239, 0.15);
  --tag-color: #e35649;
  --tag-color-hover: #e35649;
  --tag-padding-x: 4px;
  --tag-padding-y: 2px;
  --tag-radius: 4px;
  --text-accent: #1592ff;
  --text-accent-hover: #097add;
  --text-error: #e75545;
  --text-error-hover: #f86959;
  --text-faint: #999999;
  --text-highlight-bg: rgba(255, 255, 0, 0.4);
  --text-muted: #8e8e90;
  --text-normal: #383a42;
  --text-on-accent: #f2f2f2;
  --text-selection: rgba(0, 122, 255, 0.15);
  --titlebar-background: #eaeaeb;
  --titlebar-background-focused: #dbdbdc;
  --titlebar-border-color: #dbdbdc;
  --titlebar-text-color: #8e8e90;
  --titlebar-text-color-focused: #383a42;
  --vault-profile-color: #383a42;
  --vault-profile-color-hover: #383a42;
  --yellow: #e35649;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(234, 234, 235);
  color: rgb(56, 58, 66);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 250, 250);
  color: rgb(56, 58, 66);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(234, 234, 235);
  color: rgb(56, 58, 66);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(234, 234, 235);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(56, 58, 66);
}

body div#quartz-root {
  background-color: rgb(250, 250, 250);
  color: rgb(56, 58, 66);
}`,
    typography: `body .page article p > b, b {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body .page article p > em, em {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body .page article p > i, i {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body .page article p > strong, strong {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body .text-highlight {
  background-color: rgba(255, 255, 0, 0.4);
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body del {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: line-through rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body p {
  color: rgb(142, 142, 144);
  outline: rgb(142, 142, 144) none 0px;
  text-decoration: rgb(142, 142, 144);
  text-decoration-color: rgb(142, 142, 144);
}`,
    links: `body a.external, footer a {
  color: rgb(21, 146, 255);
  outline: rgb(21, 146, 255) none 0px;
  text-decoration: rgb(21, 146, 255);
  text-decoration-color: rgb(21, 146, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 146, 255);
  outline: rgb(21, 146, 255) none 0px;
  text-decoration: rgb(21, 146, 255);
  text-decoration-color: rgb(21, 146, 255);
}

body a.internal.broken {
  color: rgb(21, 146, 255);
  outline: rgb(21, 146, 255) none 0px;
  text-decoration: rgba(87, 112, 239, 0.3);
  text-decoration-color: rgba(87, 112, 239, 0.3);
}`,
    lists: `body dd {
  color: rgb(56, 58, 66);
}

body dt {
  color: rgb(56, 58, 66);
}

body ol > li {
  color: rgb(56, 58, 66);
}

body ol.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body ul > li {
  color: rgb(56, 58, 66);
}

body ul.overflow {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(153, 153, 153);
  text-decoration: rgb(153, 153, 153);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body table {
  color: rgb(56, 58, 66);
}

body td {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

body th {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}`,
    code: `body code {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

body pre > code > [data-line] {
  border-left-color: rgb(227, 86, 73);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(227, 86, 73);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(227, 86, 73);
  border-left-color: rgb(227, 86, 73);
  border-right-color: rgb(227, 86, 73);
  border-top-color: rgb(227, 86, 73);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  padding-bottom: 16px;
  padding-top: 16px;
}`,
    images: `body audio {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body figcaption {
  color: rgb(56, 58, 66);
}

body figure {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body img {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body video {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    embeds: `body .file-embed {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
}

body .footnotes {
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .transclude {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(109, 133, 242);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body .transclude-inner {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(109, 133, 242);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    checkboxes: `body .katex-display > .katex {
  text-align: left;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(142, 142, 144);
  text-decoration: line-through rgb(142, 142, 144);
  text-decoration-color: rgb(142, 142, 144);
}

body input[type=checkbox] {
  border-bottom-color: rgb(153, 153, 153);
  border-left-color: rgb(153, 153, 153);
  border-right-color: rgb(153, 153, 153);
  border-top-color: rgb(153, 153, 153);
}

body li.task-list-item[data-task='!'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='*'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='-'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='/'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='>'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='?'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='I'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='S'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='b'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='c'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='d'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='f'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='i'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='k'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='l'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='p'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='u'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body li.task-list-item[data-task='w'] {
  color: rgb(56, 58, 66);
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
}

body .search > .search-container > .search-space > * {
  color: rgb(56, 58, 66);
  outline: rgb(56, 58, 66) none 0px;
  text-decoration: rgb(56, 58, 66);
  text-decoration-color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(234, 234, 235);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(56, 58, 66);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgba(87, 112, 239, 0.15);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgba(87, 112, 239, 0.15);
  border-right-color: rgba(87, 112, 239, 0.15);
  border-top-color: rgba(87, 112, 239, 0.15);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body a.internal.tag-link::before {
  color: rgb(227, 86, 73);
}

body h1 {
  color: rgb(56, 58, 66);
}

body h2 {
  color: rgb(56, 58, 66);
}

body h2.page-title, h2.page-title a {
  color: rgb(56, 58, 66);
}

body h3 {
  color: rgb(56, 58, 66);
}

body h4 {
  color: rgb(56, 58, 66);
}

body h5 {
  color: rgb(56, 58, 66);
}

body h6 {
  color: rgb(56, 58, 66);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 250, 250) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 250, 250);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(109, 133, 242);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}`,
    footer: `body footer {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgb(219, 219, 220);
  border-bottom-width: 1px;
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-right-width: 1px;
  border-top-color: rgb(219, 219, 220);
  color: rgb(142, 142, 144);
}

body footer ul li a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(56, 58, 66);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(142, 142, 144);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body li.section-li > .section .meta {
  color: rgb(142, 142, 144);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(142, 142, 144);
  text-decoration: rgb(142, 142, 144);
}

body ul.section-ul {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

body .darkmode svg {
  color: rgb(142, 142, 144);
  stroke: rgb(142, 142, 144);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

body .breadcrumb-element p {
  color: rgb(153, 153, 153);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body .metadata {
  border-bottom-color: rgb(219, 219, 220);
  border-left-color: rgb(219, 219, 220);
  border-right-color: rgb(219, 219, 220);
  border-top-color: rgb(219, 219, 220);
  color: rgb(142, 142, 144);
}

body .metadata-properties {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

body .navigation-progress {
  background-color: rgb(234, 234, 235);
}

body .page-header h2.page-title {
  color: rgb(56, 58, 66);
}

body abbr {
  color: rgb(56, 58, 66);
  text-decoration: underline dotted rgb(56, 58, 66);
}

body details {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body input[type=text] {
  border-bottom-color: rgb(142, 142, 144);
  border-left-color: rgb(142, 142, 144);
  border-right-color: rgb(142, 142, 144);
  border-top-color: rgb(142, 142, 144);
  color: rgb(142, 142, 144);
}

body kbd {
  background-color: rgb(234, 234, 235);
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
  color: rgb(56, 58, 66);
}

body progress {
  border-bottom-color: rgb(56, 58, 66);
  border-left-color: rgb(56, 58, 66);
  border-right-color: rgb(56, 58, 66);
  border-top-color: rgb(56, 58, 66);
}

body sub {
  color: rgb(56, 58, 66);
}

body summary {
  color: rgb(56, 58, 66);
}

body sup {
  color: rgb(56, 58, 66);
}`,
  },
};
