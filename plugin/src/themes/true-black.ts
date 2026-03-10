import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "true-black", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 219;
  --accent-l: 55%;
  --accent-s: 56%;
  --aqua: #56b6c2;
  --background-accent: #200;
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
  --background-primary: #000;
  --background-primary-alt: #20242b;
  --background-secondary: #000;
  --background-secondary-alt: #1a1e24;
  --bases-cards-background: #000;
  --bases-cards-cover-background: #20242b;
  --bases-cards-shadow: 0 0 0 1px #424958;
  --bases-cards-shadow-hover: 0 0 0 1px #353b47;
  --bases-embed-border-color: #424958;
  --bases-group-heading-property-color: #888;
  --bases-table-border-color: #424958;
  --bases-table-cell-background-active: #000;
  --bases-table-cell-background-disabled: #20242b;
  --bases-table-cell-background-selected: rgba(76, 121, 205, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #353b47;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(76, 121, 205);
  --bases-table-group-background: #20242b;
  --bases-table-header-background: #000;
  --bases-table-header-background-hover: rgba(116, 133, 164, 0.06);
  --bases-table-header-color: #888;
  --bases-table-summary-background: #000;
  --bases-table-summary-background-hover: rgba(116, 133, 164, 0.06);
  --blockquote-border-color: rgb(76, 121, 205);
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --canvas-background: #000;
  --canvas-card-label-color: rgb(81, 86, 99);
  --caret-color: #dcddde;
  --checkbox-border-color: rgb(81, 86, 99);
  --checkbox-border-color-hover: #888;
  --checkbox-color: #61afef;
  --checkbox-color-hover: #70bdfc;
  --checkbox-marker-color: #000;
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
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --divider-color-hover: #404754;
  --drag-ghost-background: #1a1e24;
  --dropdown-background: #20242b;
  --dropdown-background-hover: #353b47;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958;
  --embed-border-start: 2px solid rgb(76, 121, 205);
  --embed-padding: 0 0 0 16px;
  --file-header-background: #000;
  --file-header-background-focused: #000;
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
  --gray: var(--text-muted);
  --gray-1: #5C6370;
  --gray-2: #abb2bf;
  --green: #98c379;
  --heading-formatting: rgb(81, 86, 99);
  --highlight: var(--text-highlight-bg);
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
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
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
  --menu-background: #000;
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
  --modal-background: #000;
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
  --pdf-background: #000;
  --pdf-page-background: #000;
  --pdf-shadow: 0 0 0 1px #424958;
  --pdf-sidebar-background: #000;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958;
  --pill-border-color: #424958;
  --pill-border-color-hover: #353b47;
  --pill-color: #888;
  --pill-color-hover: #dcddde;
  --pill-color-remove: rgb(81, 86, 99);
  --pill-color-remove-hover: #61afef;
  --prompt-background: #000;
  --prompt-border-color: #18191e;
  --purple: #c678dd;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --red: #e06c75;
  --ribbon-background: #000;
  --ribbon-background-collapsed: #000;
  --search-clear-button-color: #888;
  --search-icon-color: #888;
  --search-result-background: #000;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #20242b;
  --setting-items-border-color: #424958;
  --slider-thumb-border-color: #353b47;
  --slider-track-background: #424958;
  --status-bar-background: #000;
  --status-bar-border-color: transparent;
  --status-bar-text-color: #888;
  --suggestion-background: #000;
  --tab-background-active: #000;
  --tab-container-background: #000;
  --tab-divider-color: #353b47;
  --tab-outline-color: transparent;
  --tab-switcher-background: #000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000, transparent);
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
  --tertiary: var(--text-accent-hover);
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
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #000;
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
  background-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
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
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
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
  background-color: rgb(0, 0, 0);
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
  border-bottom-color: rgb(0, 0, 0);
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
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
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
  background-color: rgb(0, 0, 0);
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
  background-color: rgb(0, 0, 0);
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
  light: {},
};
