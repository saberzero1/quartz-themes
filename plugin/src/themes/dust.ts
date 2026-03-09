import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dust",
    modes: ["dark"],
    variations: [],
    fonts: ["icons/material-icons", "fira-code"],
  },
  dark: {
    base: `:root:root {
  --accent-d: 55%;
  --accent-h: 219;
  --accent-l: 58%;
  --accent-s: 56%;
  --aqua: #56b6c2;
  --background-accent: #000;
  --background-modifier-active-hover: rgba(88, 130, 208, 0.1);
  --background-modifier-border: #434c5e;
  --background-modifier-error: #3d0000;
  --background-modifier-error-hover: #470000;
  --background-modifier-error-rgb: 61, 0, 0;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3);
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22);
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3);
  --background-modifier-success: #539126;
  --background-primary: #2e3440;
  --background-primary-alt: #272c38;
  --background-secondary: #3b4252;
  --background-secondary-alt: #434c5e;
  --bases-cards-background: #2e3440;
  --bases-cards-cover-background: #272c38;
  --bases-cards-shadow: 0 0 0 1px #434c5e;
  --bases-embed-border-color: #434c5e;
  --bases-group-heading-property-color: #888;
  --bases-table-border-color: #5c6370;
  --bases-table-cell-background-active: #2e3440;
  --bases-table-cell-background-disabled: #272c38;
  --bases-table-cell-background-selected: rgba(88, 130, 208, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(88, 130, 208);
  --bases-table-group-background: #272c38;
  --bases-table-header-background: #2e3440;
  --bases-table-header-color: #888;
  --bases-table-summary-background: #2e3440;
  --blockquote-border-color: rgb(88, 130, 208);
  --blue: #61afef;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --brighter-graph-line: rgb(116, 151, 216);
  --canvas-background: #2e3440;
  --canvas-card-label-color: rgb(150, 155, 170);
  --caret-color: #dcddde;
  --checkbox-border-color: rgb(150, 155, 170);
  --checkbox-border-color-hover: #888;
  --checkbox-color: rgb(88, 130, 208);
  --checkbox-color-hover: rgb(123, 161, 219);
  --checkbox-marker-color: #2e3440;
  --checklist-done-color: #888;
  --code-background: #272c38;
  --code-border-color: #434c5e;
  --code-comment: rgb(150, 155, 170);
  --code-normal: #dcddde;
  --code-punctuation: #888;
  --collapse-icon-color: rgb(150, 155, 170);
  --collapse-icon-color-collapsed: rgb(123, 161, 219);
  --color-accent: rgb(88, 130, 208);
  --color-accent-1: rgb(123, 161, 219);
  --color-accent-2: rgb(154, 186, 229);
  --color-accent-hsl: 219, 56%, 58%;
  --comment: #6272a4;
  --cyan: #8be9fd;
  --divider-color: #434c5e;
  --divider-color-hover: rgb(88, 130, 208);
  --dropdown-background-hover: #353b47;
  --embed-block-shadow-hover: 0 0 0 1px #434c5e, inset 0 0 0 1px #434c5e;
  --embed-border-start: 2px solid rgb(88, 130, 208);
  --file-header-background: #2e3440;
  --file-header-background-focused: #2e3440;
  --flair-background: #20242b;
  --flair-color: #dcddde;
  --font-monospace: "Fira Code", "Source Code Pro", monospace;
  --footnote-divider-color: #434c5e;
  --footnote-id-color: #888;
  --footnote-id-color-no-occurrences: rgb(150, 155, 170);
  --graph-line: rgb(116, 151, 216);
  --graph-node: #888;
  --graph-node-focused: rgb(123, 161, 219);
  --graph-node-unresolved: rgb(150, 155, 170);
  --graph-text: #dcddde;
  --gray-1: #5c6370;
  --gray-2: #abb2bf;
  --green: #50fa7b;
  --heading-formatting: rgb(150, 155, 170);
  --hr-color: #434c5e;
  --icon-color: #888;
  --icon-color-active: rgb(123, 161, 219);
  --icon-color-focused: #dcddde;
  --icon-color-hover: #888;
  --input-date-separator: rgb(150, 155, 170);
  --input-placeholder-color: rgb(150, 155, 170);
  --interactive-accent: rgb(88, 130, 208);
  --interactive-accent-hover: rgb(123, 161, 219);
  --interactive-accent-hsl: 219, 56%, 58%;
  --interactive-hover: #353b47;
  --interactive-normal: #20242b;
  --link-color: rgb(123, 161, 219);
  --link-color-hover: rgb(104, 186, 253);
  --link-external-color: rgb(123, 161, 219);
  --link-external-color-hover: rgb(104, 186, 253);
  --link-unresolved-color: rgb(123, 161, 219);
  --link-unresolved-decoration-color: rgba(88, 130, 208, 0.3);
  --list-marker-color: rgb(150, 155, 170);
  --list-marker-color-collapsed: rgb(123, 161, 219);
  --list-marker-color-hover: #888;
  --menu-background: #3b4252;
  --metadata-border-color: #434c5e;
  --metadata-divider-color: #434c5e;
  --metadata-input-text-color: #dcddde;
  --metadata-label-text-color: #888;
  --metadata-label-text-color-hover: #888;
  --modal-background: #2e3440;
  --nav-collapse-icon-color: rgb(150, 155, 170);
  --nav-collapse-icon-color-collapsed: rgb(150, 155, 170);
  --nav-heading-color: #dcddde;
  --nav-heading-color-collapsed: rgb(150, 155, 170);
  --nav-heading-color-collapsed-hover: #888;
  --nav-heading-color-hover: #dcddde;
  --nav-item-background-selected: rgba(88, 130, 208, 0.15);
  --nav-item-color: #dcddde;
  --nav-item-color-active: #dcddde;
  --nav-item-color-highlighted: rgb(123, 161, 219);
  --nav-item-color-hover: #dcddde;
  --nav-item-color-selected: #dcddde;
  --nav-tag-color: rgb(150, 155, 170);
  --nav-tag-color-active: #888;
  --nav-tag-color-hover: #888;
  --panel-border-color: #18191e;
  --pdf-background: #2e3440;
  --pdf-page-background: #2e3440;
  --pdf-shadow: 0 0 0 1px #434c5e;
  --pdf-sidebar-background: #2e3440;
  --pdf-thumbnail-shadow: 0 0 0 1px #434c5e;
  --pill-border-color: #434c5e;
  --pill-color: #888;
  --pill-color-hover: #dcddde;
  --pill-color-remove: rgb(150, 155, 170);
  --pill-color-remove-hover: rgb(123, 161, 219);
  --pink: #ff79c6;
  --pink-two: #ff77cc;
  --prompt-background: #2e3440;
  --purple: #c678dd;
  --purple-code: #bd93f9;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent));
  --red: #e06c75;
  --ribbon-background: #3b4252;
  --ribbon-background-collapsed: #2e3440;
  --search-clear-button-color: #888;
  --search-icon-color: #888;
  --search-result-background: #2e3440;
  --setting-group-heading-color: #dcddde;
  --setting-items-background: #272c38;
  --setting-items-border-color: #434c5e;
  --slider-track-background: #434c5e;
  --status-bar-background: #3b4252;
  --status-bar-border-color: #434c5e;
  --status-bar-text-color: #888;
  --suggestion-background: #2e3440;
  --tab-background-active: #2e3440;
  --tab-container-background: #3b4252;
  --tab-divider-color: rgba(255, 255, 255, 0.15);
  --tab-outline-color: #434c5e;
  --tab-switcher-background: #3b4252;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4252, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(88, 130, 208);
  --tab-text-color: rgb(150, 155, 170);
  --tab-text-color-active: #888;
  --tab-text-color-focused: #888;
  --tab-text-color-focused-active: #888;
  --tab-text-color-focused-active-current: #dcddde;
  --tab-text-color-focused-highlighted: rgb(123, 161, 219);
  --table-add-button-border-color: #434c5e;
  --table-border-color: #5c6370;
  --table-drag-handle-background-active: rgb(88, 130, 208);
  --table-drag-handle-color: rgb(150, 155, 170);
  --table-drag-handle-color-active: #dcddde;
  --table-header-background: rgb(34, 39, 47);
  --table-header-background-hover: #4c566a;
  --table-header-border-color: #5c6370;
  --table-header-color: #dcddde;
  --table-row-even-background: rgb(43, 48, 59);
  --table-selection: rgba(88, 130, 208, 0.1);
  --table-selection-border-color: rgb(88, 130, 208);
  --tag-background: rgba(88, 130, 208, 0.1);
  --tag-background-hover: rgba(88, 130, 208, 0.2);
  --tag-border-color: rgba(88, 130, 208, 0.15);
  --tag-border-color-hover: rgba(88, 130, 208, 0.15);
  --tag-color: rgb(123, 161, 219);
  --tag-color-hover: rgb(123, 161, 219);
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
  --text-faint: rgb(150, 155, 170);
  --text-highlight-bg: rgba(189, 195, 199, 0.1);
  --text-muted: #888;
  --text-normal: #dcddde;
  --text-on-accent: #dcddde;
  --text-selection: rgba(0, 122, 255, 0.2);
  --titlebar-background: #3b4252;
  --titlebar-background-focused: #434c5e;
  --titlebar-border-color: #434c5e;
  --titlebar-text-color: #888;
  --titlebar-text-color-focused: #dcddde;
  --vault-profile-color: #dcddde;
  --vault-profile-color-hover: #dcddde;
  --yellow: #e5c07b;
  --yellow-code: #f1fa8c;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(220, 221, 222);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 82);
  color: rgb(220, 221, 222);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgb(67, 76, 94);
  color: rgb(220, 221, 222);
}

body div#quartz-root {
  background-color: rgb(46, 52, 64);
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
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ul > li {
  color: rgb(220, 221, 222);
}

body ul.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(150, 155, 170);
  text-decoration: rgb(150, 155, 170);
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
  background-color: rgb(34, 39, 47);
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
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  padding-bottom: 16px;
  padding-top: 16px;
}

body pre:has(> code) {
  background-color: rgb(39, 44, 56);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(39, 44, 56);
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
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 76, 94);
  border-left-width: 5px;
  border-right-color: rgb(67, 76, 94);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(67, 76, 94);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  border-top-style: solid;
  border-top-width: 1px;
  margin-left: 30px;
  margin-right: 30px;
}

body .transclude-inner {
  border-bottom-color: rgb(67, 76, 94);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(67, 76, 94);
  border-left-width: 5px;
  border-right-color: rgb(67, 76, 94);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(67, 76, 94);
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
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(220, 221, 222);
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
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
  border-bottom-color: rgb(59, 66, 82);
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
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-corner {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}

body ::-webkit-scrollbar-track {
  background: rgb(46, 52, 64) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(46, 52, 64);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(220, 221, 222);
  font-weight: 700;
  text-decoration: rgb(220, 221, 222);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(220, 221, 222);
  font-weight: 700;
  text-decoration: rgb(220, 221, 222);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
}`,
    toc: `body li.depth-0 {
  font-weight: 700;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(136, 136, 136);
  border-left-color: rgb(136, 136, 136);
  border-right-color: rgb(136, 136, 136);
  border-top-color: rgb(136, 136, 136);
  color: rgb(136, 136, 136);
}`,
    footer: `body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(150, 155, 170);
}

body footer ul li a {
  color: rgb(150, 155, 170);
  text-decoration: rgb(150, 155, 170);
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
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(220, 221, 222);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
}

body li.section-li > .section .meta {
  color: rgb(220, 221, 222);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(220, 221, 222);
  text-decoration: rgb(220, 221, 222);
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
  color: rgb(150, 155, 170);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(220, 221, 222);
  border-left-color: rgb(220, 221, 222);
  border-right-color: rgb(220, 221, 222);
  border-top-color: rgb(220, 221, 222);
  color: rgb(220, 221, 222);
}

body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
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
  background-color: rgb(59, 66, 82);
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
  background-color: rgb(39, 44, 56);
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
