import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "atomus", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-d: 55%;
  --accent-h: 219;
  --accent-l: 58%;
  --accent-s: 56%;
  --aqua: #56b6c2;
  --background-accent: #000;
  --background-modifier-active-hover: rgba(88, 130, 208, 0.1);
  --background-modifier-border: #424958;
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #539126;
  --background-primary: #272b34;
  --background-primary-alt: #20242b;
  --background-secondary: #20242b;
  --background-secondary-alt: #1a1e24;
  --bases-cards-background: #272b34;
  --bases-cards-cover-background: #20242b;
  --bases-cards-shadow: 0 0 0 1px #424958;
  --bases-embed-border-color: #424958;
  --bases-group-heading-property-color: #888;
  --bases-table-border-color: #5c6370;
  --bases-table-cell-background-active: #272b34;
  --bases-table-cell-background-disabled: #20242b;
  --bases-table-cell-background-selected: rgba(88, 130, 208, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(88, 130, 208);
  --bases-table-group-background: #20242b;
  --bases-table-header-background: #272b34;
  --bases-table-header-color: #888;
  --bases-table-summary-background: #272b34;
  --blockquote-border-color: rgb(88, 130, 208);
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --canvas-background: #272b34;
  --canvas-card-label-color: rgb(81, 86, 99);
  --caret-color: #dcddde;
  --checkbox-border-color: rgb(81, 86, 99);
  --checkbox-border-color-hover: #888;
  --checkbox-color: rgb(88, 130, 208);
  --checkbox-color-hover: rgb(123, 161, 219);
  --checkbox-marker-color: #272b34;
  --checklist-done-color: #888;
  --code-background: #20242b;
  --code-border-color: #424958;
  --code-comment: rgb(81, 86, 99);
  --code-normal: #dcddde;
  --code-punctuation: #888;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: rgb(81, 86, 99);
  --collapse-icon-color-collapsed: rgb(123, 161, 219);
  --color-accent: rgb(88, 130, 208);
  --color-accent-1: rgb(123, 161, 219);
  --color-accent-2: rgb(154, 186, 229);
  --color-accent-hsl: 219, 56%, 58%;
  --comment: #6272a4;
  --cyan: #8be9fd;
  --dark: var(--text-normal);
  --darker-graph-line: rgb(34, 64, 119);
  --darkgray: var(--text-normal);
  --divider-color: #424958;
  --divider-color-hover: rgb(88, 130, 208);
  --dropdown-background: #20242b;
  --dropdown-background-hover: #353b47;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958;
  --embed-border-start: 2px solid rgb(88, 130, 208);
  --file-header-background: #272b34;
  --file-header-background-focused: #272b34;
  --flair-background: #20242b;
  --flair-color: #dcddde;
  --font-monospace: "Fira Code", "Source Code Pro", monospace;
  --footnote-divider-color: #424958;
  --footnote-id-color: #888;
  --footnote-id-color-no-occurrences: rgb(81, 86, 99);
  --graph-line: rgb(34, 64, 119);
  --graph-node: #888;
  --graph-node-focused: rgb(123, 161, 219);
  --graph-node-unresolved: rgb(81, 86, 99);
  --graph-text: #dcddde;
  --gray: var(--text-muted);
  --gray-1: #5c6370;
  --gray-2: #abb2bf;
  --green: #50fa7b;
  --heading-formatting: rgb(81, 86, 99);
  --highlight: var(--text-highlight-bg);
  --hr-color: #424958;
  --icon-color: #888;
  --icon-color-active: rgb(123, 161, 219);
  --icon-color-focused: #dcddde;
  --icon-color-hover: #888;
  --input-date-separator: rgb(81, 86, 99);
  --input-placeholder-color: rgb(81, 86, 99);
  --interactive-accent: rgb(88, 130, 208);
  --interactive-accent-hover: rgb(123, 161, 219);
  --interactive-accent-hsl: 219, 56%, 58%;
  --interactive-hover: #353b47;
  --interactive-normal: #20242b;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(123, 161, 219);
  --link-color-hover: rgb(104, 186, 253);
  --link-external-color: rgb(123, 161, 219);
  --link-external-color-hover: rgb(104, 186, 253);
  --link-unresolved-color: rgb(123, 161, 219);
  --link-unresolved-decoration-color: rgba(88, 130, 208, 0.3);
  --list-marker-color: rgb(81, 86, 99);
  --list-marker-color-collapsed: rgb(123, 161, 219);
  --list-marker-color-hover: #888;
  --menu-background: #20242b;
  --metadata-border-color: #424958;
  --metadata-divider-color: #424958;
  --metadata-input-text-color: #dcddde;
  --metadata-label-text-color: #888;
  --metadata-label-text-color-hover: #888;
  --modal-background: #272b34;
  --nav-collapse-icon-color: rgb(81, 86, 99);
  --nav-collapse-icon-color-collapsed: rgb(81, 86, 99);
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: rgb(81, 86, 99);
  --nav-heading-color-collapsed-hover: #888;
  --nav-heading-color-hover: #dcddde;
  --nav-item-background-selected: rgba(88, 130, 208, 0.15);
  --nav-item-color: #888;
  --nav-item-color-active: #dcddde;
  --nav-item-color-highlighted: rgb(123, 161, 219);
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: rgb(81, 86, 99);
  --nav-tag-color-active: #888;
  --nav-tag-color-hover: #888;
  --panel-border-color: #18191e;
  --pdf-background: #272b34;
  --pdf-page-background: #272b34;
  --pdf-shadow: 0 0 0 1px #424958;
  --pdf-sidebar-background: #272b34;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958;
  --pill-border-color: #424958;
  --pill-color: #888;
  --pill-color-hover: #dcddde;
  --pill-color-remove: rgb(81, 86, 99);
  --pill-color-remove-hover: rgb(123, 161, 219);
  --pink: #ff79c6;
  --pink-two: #ff77cc;
  --prompt-background: #272b34;
  --purple: #c678dd;
  --purple-code: #bd93f9;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --red: #e06c75;
  --ribbon-background: #20242b;
  --ribbon-background-collapsed: #272b34;
  --search-clear-button-color: #888;
  --search-icon-color: #888;
  --search-result-background: #272b34;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #20242b;
  --setting-items-border-color: #424958;
  --slider-track-background: #424958;
  --status-bar-background: #20242b;
  --status-bar-border-color: #424958;
  --status-bar-text-color: #888;
  --suggestion-background: #272b34;
  --tab-background-active: #272b34;
  --tab-container-background: #20242b;
  --tab-outline-color: #424958;
  --tab-switcher-background: #20242b;
  --tab-switcher-menubar-background: linear-gradient(to top, #20242b, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(88, 130, 208);
  --tab-text-color: rgb(81, 86, 99);
  --tab-text-color-active: #888;
  --tab-text-color-focused: #888;
  --tab-text-color-focused-active: #888;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: rgb(123, 161, 219);
  --table-add-button-border-color: #424958;
  --table-border-color: #5c6370;
  --table-drag-handle-background-active: rgb(88, 130, 208);
  --table-drag-handle-color: rgb(81, 86, 99);
  --table-drag-handle-color-active: #dcddde;
  --table-header-background: #1a1e24;
  --table-header-background-hover: #1a1e24;
  --table-header-border-color: #5c6370;
  --table-header-color: #dcddde;
  --table-selection: rgba(88, 130, 208, 0.1);
  --table-selection-border-color: rgb(88, 130, 208);
  --tag-background: rgba(88, 130, 208, 0.1);
  --tag-background-hover: rgba(88, 130, 208, 0.2);
  --tag-border-color: rgba(88, 130, 208, 0.15);
  --tag-border-color-hover: rgba(88, 130, 208, 0.15);
  --tag-color: rgb(123, 161, 219);
  --tag-color-hover: rgb(123, 161, 219);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(123, 161, 219);
  --text-accent-color: rgb(97, 175, 239);
  --text-accent-h: 207;
  --text-accent-hover: rgb(104, 186, 253);
  --text-accent-hover-color: rgb(104, 186, 253);
  --text-accent-hover-h: 207;
  --text-accent-hover-l: 70%;
  --text-accent-hover-s: 97%;
  --text-accent-l: 66%;
  --text-accent-s: 82%;
  --text-error: #e16d76;
  --text-error-hover: #c9626a;
  --text-faint: rgb(81, 86, 99);
  --text-highlight-bg: rgba(189, 195, 199, 0.1);
  --text-muted: #888;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #20242b;
  --titlebar-background-focused: #1a1e24;
  --titlebar-border-color: #424958;
  --titlebar-text-color: #888;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --yellow: #e5c07b;
  --yellow-code: #f1fa8c;
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
  border-right-color: rgb(66, 73, 88);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(32, 36, 43);
  border-left-color: rgb(66, 73, 88);
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
  background-color: rgba(189, 195, 199, 0.1);
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
  color: rgb(122, 160, 219);
  outline: rgb(122, 160, 219) none 0px;
  text-decoration: underline rgb(122, 160, 219);
  text-decoration-color: rgb(122, 160, 219);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(122, 160, 219);
  outline: rgb(122, 160, 219) none 0px;
  text-decoration: rgb(122, 160, 219);
  text-decoration-color: rgb(122, 160, 219);
}

body a.internal.broken {
  color: rgb(122, 160, 219);
  outline: rgb(122, 160, 219) none 0px;
  text-decoration: rgba(88, 130, 208, 0.3);
  text-decoration-color: rgba(88, 130, 208, 0.3);
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

body tbody tr:nth-child(even) {
  background-color: rgb(32, 36, 43);
}

body td {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(220, 221, 222);
}

body th {
  border-bottom-color: rgb(92, 99, 112);
  border-left-color: rgb(92, 99, 112);
  border-right-color: rgb(92, 99, 112);
  border-top-color: rgb(92, 99, 112);
  color: rgb(220, 221, 222);
}

body tr {
  background-color: rgb(26, 30, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(200, 211, 245);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-left-color: rgb(200, 211, 245);
  border-right-color: rgb(200, 211, 245);
  border-top-color: rgb(200, 211, 245);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  color: rgb(200, 211, 245);
  font-family: "Fira Code", "Source Code Pro", monospace;
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
  border-left-color: rgb(139, 233, 253);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(139, 233, 253);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
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
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body .footnotes {
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .transclude {
  border-bottom-color: rgb(66, 73, 88);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 73, 88);
  border-left-width: 5px;
  border-right-color: rgb(66, 73, 88);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(66, 73, 88);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-left: 30px;
  margin-right: 30px;
}

body .transclude-inner {
  border-bottom-color: rgb(66, 73, 88);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(66, 73, 88);
  border-left-width: 5px;
  border-right-color: rgb(66, 73, 88);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(66, 73, 88);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-left: 30px;
  margin-right: 30px;
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(136, 136, 136);
  text-decoration: line-through rgb(136, 136, 136);
  text-decoration-color: rgb(136, 136, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(136, 136, 136);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-bottom: 2px;
  margin-right: 4px;
  width: 17.3281px;
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
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(32, 36, 43);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(220, 221, 222);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(88, 130, 208, 0.1);
  border-bottom-color: rgba(88, 130, 208, 0.15);
  border-left-color: rgba(88, 130, 208, 0.15);
  border-right-color: rgba(88, 130, 208, 0.15);
  border-top-color: rgba(88, 130, 208, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(122, 160, 219);
}

body h1 {
  color: rgb(255, 119, 204);
}

body h2 {
  color: rgb(189, 147, 249);
}

body h2.page-title, h2.page-title a {
  color: rgb(220, 221, 222);
}

body h3 {
  color: rgb(80, 250, 123);
}

body h4 {
  color: rgb(241, 250, 140);
}

body h5 {
  color: rgb(139, 233, 253);
}

body h6 {
  color: rgb(229, 192, 123);
}

body hr {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
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
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
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
  color: rgb(81, 86, 99);
}

body footer ul li a {
  color: rgb(81, 86, 99);
  text-decoration: rgb(81, 86, 99);
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
  font-family: "Fira Code", "Source Code Pro", monospace;
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
