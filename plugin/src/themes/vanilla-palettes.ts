import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "vanilla-palettes",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: rgb(129, 161, 193);
  --accent-color-dark: #81a1c1;
  --accent-color-hover: #88c0d0;
  --accent-color-light: #8fbcbb;
  --accent-h: 210;
  --accent-l: 63%;
  --accent-s: 34%;
  --background-modifier-active-hover: red;
  --background-modifier-border: #434c5e;
  --background-modifier-border-focus: #4c566a;
  --background-modifier-border-hover: #4c566a;
  --background-modifier-error: #bf616a;
  --background-modifier-error-hover: #bf616a;
  --background-modifier-form-field: #3b4252;
  --background-modifier-form-field-hover: #3b4252;
  --background-modifier-hover: #4c566a;
  --background-modifier-success: #a3be8c;
  --background-primary: #2e3440;
  --background-secondary: #3b4252;
  --bases-cards-background: #2e3440;
  --bases-cards-shadow: 0 0 0 1px #434c5e;
  --bases-cards-shadow-hover: 0 0 0 1px #4c566a;
  --bases-embed-border-color: #434c5e;
  --bases-group-heading-property-color: #d8dee9;
  --bases-table-border-color: #434c5e;
  --bases-table-cell-background-active: #2e3440;
  --bases-table-cell-background-selected: #4c566a;
  --bases-table-cell-shadow-active: 0 0 0 2px #4c566a;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(129, 161, 193);
  --bases-table-header-background: #2e3440;
  --bases-table-header-background-hover: #4c566a;
  --bases-table-header-color: #d8dee9;
  --bases-table-summary-background: #2e3440;
  --bases-table-summary-background-hover: #4c566a;
  --black: #2e3440;
  --blockquote-border-color: #81a1c1;
  --blur-background: color-mix(in srgb, #3b4252 65%, transparent) linear-gradient(#3b4252, color-mix(in srgb, #3b4252 65%, transparent));
  --bold-color: #8fbcbb;
  --border-color: #434c5e;
  --border-color-primary: #434c5e;
  --border-color-secondary: #4c566a;
  --canvas-background: #2e3440;
  --canvas-card-label-color: #616e88;
  --canvas-color: 129, 161, 193;
  --caret-color: #d8dee9;
  --checkbox-border-color: #616e88;
  --checkbox-border-color-hover: #88c0d0;
  --checkbox-color: #81a1c1;
  --checkbox-color-hover: #88c0d0;
  --checkbox-marker-color: #2e3440;
  --checklist-done-color: #616e88;
  --code-background: #3b4252;
  --code-boolean: #81a1c1;
  --code-border-color: #434c5e;
  --code-bracket-background: #4c566a;
  --code-builtin: #88c0d0;
  --code-comment: #616e88;
  --code-definition: #88c0d0;
  --code-function: #ebcb8b;
  --code-important: #ebcb8b;
  --code-keyword: #81a1c1;
  --code-normal: #d8dee9;
  --code-operator: #81a1c1;
  --code-parentheses: #8fbcbb;
  --code-property: #88c0d0;
  --code-punctuation: #d8dee9;
  --code-string: #a3be8c;
  --code-tag: #bf616a;
  --code-value: #b48ead;
  --code-variable: #d8dee9;
  --collapse-icon-color: #616e88;
  --collapse-icon-color-collapsed: rgb(129, 161, 193);
  --color-accent: rgb(129, 161, 193);
  --color-accent-1: rgb(159, 186, 209);
  --color-accent-2: rgb(189, 209, 224);
  --color-accent-hsl: 210, 34%, 63%;
  --color-blue: #5e81ac;
  --color-cyan: #88c0d0;
  --color-green: #a3be8c;
  --color-orange: #d08770;
  --color-pink: pink;
  --color-purple: #b48ead;
  --color-red: #bf616a;
  --color-yellow: #ebcb8b;
  --dark-gray: #3b4252;
  --darker-white: #e5e9f0;
  --darkest-white: #d8dee9;
  --divider-color: #434c5e;
  --divider-color-hover: rgb(129, 161, 193);
  --dropdown-background: #3b4252;
  --dropdown-background-hover: #434c5e;
  --embed-block-shadow-hover: 0 0 0 1px #434c5e, inset 0 0 0 1px #434c5e;
  --embed-border-start: 2px solid rgb(129, 161, 193);
  --file-header-background: #2e3440;
  --file-header-background-focused: #2e3440;
  --flair-background: #3b4252;
  --flair-color: #d8dee9;
  --footnote-divider-color: #434c5e;
  --footnote-id-color: #d8dee9;
  --footnote-id-color-no-occurrences: #616e88;
  --footnote-input-background-active: #4c566a;
  --glacier: #81a1c1;
  --graph-line: #4c566a;
  --graph-node: rgb(129, 161, 193);
  --graph-node-attachment: #81a1c1;
  --graph-node-focused: #88c0d0;
  --graph-node-tag: #8fbcbb;
  --graph-node-unresolved: #434c5e;
  --graph-text: #d8dee9;
  --gray: #434c5e;
  --h1-color: #b48ead;
  --h2-color: #5e81ac;
  --h3-color: #a3be8c;
  --h4-color: #ebcb8b;
  --h5-color: #d08770;
  --h6-color: #bf616a;
  --heading-formatting: #616e88;
  --hr-color: #3b4252;
  --icon-color: #d8dee9;
  --icon-color-active: rgb(129, 161, 193);
  --icon-color-focused: #d8dee9;
  --icon-color-hover: #d8dee9;
  --indentation-guide-color: #3b4252;
  --indentation-guide-color-active: #616e88;
  --inline-title-color: #d8dee9;
  --input-date-separator: #616e88;
  --input-placeholder-color: #616e88;
  --interactive-accent: rgb(129, 161, 193);
  --interactive-accent-hover: rgb(159, 186, 209);
  --interactive-accent-hsl: 210, 34%, 63%;
  --interactive-hover: #434c5e;
  --interactive-normal: #3b4252;
  --italic-color: #8fbcbb;
  --light-gray: #4c566a;
  --light-gray-bright: #616e88;
  --link-color: #81a1c1;
  --link-color-hover: #88c0d0;
  --link-external-color: #81a1c1;
  --link-external-color-hover: #88c0d0;
  --link-unresolved-decoration-color: rgba(129, 161, 193, 0.3);
  --list-marker-color: #81a1c1;
  --list-marker-color-collapsed: rgb(129, 161, 193);
  --list-marker-color-hover: #d8dee9;
  --menu-background: #3b4252;
  --menu-border-color: #4c566a;
  --metadata-border-color: #434c5e;
  --metadata-divider-color: #434c5e;
  --metadata-input-background-active: #4c566a;
  --metadata-input-text-color: #d8dee9;
  --metadata-label-background-active: #4c566a;
  --metadata-label-text-color: #d8dee9;
  --metadata-label-text-color-hover: #d8dee9;
  --metadata-property-background-active: #4c566a;
  --metadata-property-box-shadow-focus: 0 0 0 2px #4c566a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4c566a;
  --modal-background: #3b4252;
  --modal-border-color: #434c5e;
  --nav-collapse-icon-color: #4c566a;
  --nav-collapse-icon-color-collapsed: #4c566a;
  --nav-heading-color: #d8dee9;
  --nav-heading-color-collapsed: #616e88;
  --nav-heading-color-collapsed-hover: #d8dee9;
  --nav-heading-color-hover: #d8dee9;
  --nav-indentation-guide-color: #4c566a;
  --nav-item-background-active: #81a1c1;
  --nav-item-background-hover: #4c566a;
  --nav-item-background-selected: red;
  --nav-item-color: #d8dee9;
  --nav-item-color-active: #eceff4;
  --nav-item-color-highlighted: #8fbcbb;
  --nav-item-color-hover: #eceff4;
  --nav-item-color-selected: red;
  --nav-tag-color: #616e88;
  --nav-tag-color-active: #d8dee9;
  --nav-tag-color-hover: #d8dee9;
  --off-blue: #88c0d0;
  --pdf-background: #2e3440;
  --pdf-page-background: #2e3440;
  --pdf-shadow: 0 0 0 1px #434c5e;
  --pdf-sidebar-background: #2e3440;
  --pdf-thumbnail-shadow: 0 0 0 1px #434c5e;
  --pill-border-color: #434c5e;
  --pill-border-color-hover: #4c566a;
  --pill-color: #d8dee9;
  --pill-color-hover: #d8dee9;
  --pill-color-remove: #616e88;
  --pill-color-remove-hover: rgb(129, 161, 193);
  --prompt-background: #2e3440;
  --prompt-border-color: #434c5e;
  --raised-background: color-mix(in srgb, #3b4252 65%, transparent) linear-gradient(#3b4252, color-mix(in srgb, #3b4252 65%, transparent));
  --ribbon-background: #3b4252;
  --ribbon-background-collapsed: #2e3440;
  --search-clear-button-color: #d8dee9;
  --search-icon-color: #d8dee9;
  --search-result-background: #2e3440;
  --selection-background-color: #4c566a;
  --selection-border-color: #88c0d0;
  --setting-group-heading-color: #d8dee9;
  --setting-items-border-color: #434c5e;
  --slider-thumb-border-color: #2e3440;
  --slider-track-background: #3b4252;
  --status-bar-background: #3b4252;
  --status-bar-border-color: #434c5e;
  --status-bar-text-color: #d8dee9;
  --suggestion-background: #2e3440;
  --sync-avatar-color-1: #bf616a;
  --sync-avatar-color-2: #d08770;
  --sync-avatar-color-3: #ebcb8b;
  --sync-avatar-color-4: #a3be8c;
  --sync-avatar-color-5: #88c0d0;
  --sync-avatar-color-6: #5e81ac;
  --sync-avatar-color-7: #b48ead;
  --sync-avatar-color-8: pink;
  --tab-background-active: #2e3440;
  --tab-container-background: #3b4252;
  --tab-divider-color: #4c566a;
  --tab-outline-color: #434c5e;
  --tab-switcher-background: #3b4252;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4252, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(129, 161, 193);
  --tab-text-color: #434c5e;
  --tab-text-color-active: #d8dee9;
  --tab-text-color-focused: #d8dee9;
  --tab-text-color-focused-active: #d8dee9;
  --tab-text-color-focused-active-current: #eceff4;
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: #434c5e;
  --table-border-color: #434c5e;
  --table-drag-handle-background-active: #88c0d0;
  --table-drag-handle-color: #4c566a;
  --table-drag-handle-color-active: #4c566a;
  --table-header-border-color: #434c5e;
  --table-header-color: #d8dee9;
  --table-selection: #4c566a;
  --table-selection-border-color: #88c0d0;
  --tag-background: #3b4252;
  --tag-background-hover: #616e88;
  --tag-border-color: rgba(129, 161, 193, 0.15);
  --tag-border-color-hover: rgba(129, 161, 193, 0.15);
  --tag-color: #81a1c1;
  --tag-color-hover: #81a1c1;
  --teal: #8fbcbb;
  --text-accent: rgb(129, 161, 193);
  --text-accent-hover: red;
  --text-color: #d8dee9;
  --text-color-accent: #eceff4;
  --text-color-muted-dark: #3b4252;
  --text-color-muted-light: #616e88;
  --text-error: #bf616a;
  --text-faint: #616e88;
  --text-highlight-bg: rgb(129, 161, 193);
  --text-muted: #d8dee9;
  --text-normal: #d8dee9;
  --text-on-accent: #eceff4;
  --text-on-accent-inverted: #2e3440;
  --text-selection: #4c566a;
  --text-success: #a3be8c;
  --text-warning: #ebcb8b;
  --titlebar-background: #3b4252;
  --titlebar-background-focused: #434c5e;
  --titlebar-border-color: #434c5e;
  --titlebar-text-color: #d8dee9;
  --titlebar-text-color-focused: #d8dee9;
  --toggle-thumb-color: #eceff4;
  --vault-profile-color: #d8dee9;
  --vault-profile-color-hover: #d8dee9;
  --white: #eceff4;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 82);
  color: rgb(216, 222, 233);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(46, 52, 64);
  color: rgb(216, 222, 233);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 82);
  color: rgb(216, 222, 233);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(67, 76, 94);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 82);
  border-left-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body div#quartz-root {
  background-color: rgb(46, 52, 64);
  color: rgb(216, 222, 233);
}`,
    typography: `body .page article p > b, b {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > em, em {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > i, i {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .page article p > strong, strong {
  color: rgb(143, 188, 187);
  outline: rgb(143, 188, 187) none 0px;
  text-decoration: rgb(143, 188, 187);
  text-decoration-color: rgb(143, 188, 187);
}

body .text-highlight {
  background-color: rgb(129, 161, 193);
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body del {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: line-through rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body p {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}`,
    links: `body a.external, footer a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(129, 161, 193);
  outline: rgb(129, 161, 193) none 0px;
  text-decoration: underline rgb(129, 161, 193);
  text-decoration-color: rgb(129, 161, 193);
}

body a.internal.broken {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: underline rgba(129, 161, 193, 0.3);
  text-decoration-color: rgba(129, 161, 193, 0.3);
}`,
    lists: `body dd {
  color: rgb(216, 222, 233);
}

body dt {
  color: rgb(216, 222, 233);
}

body ol > li {
  color: rgb(216, 222, 233);
}

body ol.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body ul > li {
  color: rgb(216, 222, 233);
}

body ul.overflow {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(97, 110, 136);
  text-decoration: rgb(97, 110, 136);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body table {
  color: rgb(216, 222, 233);
}

body td {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body th {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}`,
    code: `body code {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body pre > code > [data-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(235, 203, 139);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body pre > code, pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body pre:has(> code) {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}`,
    images: `body audio {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body figcaption {
  color: rgb(216, 222, 233);
}

body figure {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body img {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body video {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .footnotes {
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .transclude {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .transclude-inner {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(129, 161, 193);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(97, 110, 136);
  text-decoration: line-through rgb(97, 110, 136);
  text-decoration-color: rgb(97, 110, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(97, 110, 136);
  border-left-color: rgb(97, 110, 136);
  border-right-color: rgb(97, 110, 136);
  border-top-color: rgb(97, 110, 136);
}

body li.task-list-item[data-task='!'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='*'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='-'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='/'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='>'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='?'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='I'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='S'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='b'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='c'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='d'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='f'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='i'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='k'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='l'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='p'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='u'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body li.task-list-item[data-task='w'] {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}`,
    search: `body .search > .search-button {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space {
  background-color: rgb(46, 52, 64);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body .search > .search-container > .search-space > * {
  color: rgb(216, 222, 233);
  outline: rgb(216, 222, 233) none 0px;
  text-decoration: rgb(216, 222, 233);
  text-decoration-color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(76, 86, 106);
  color: rgb(216, 222, 233);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 82);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(76, 86, 106);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(76, 86, 106);
  color: rgb(216, 222, 233);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgba(129, 161, 193, 0.15);
  border-left-color: rgba(129, 161, 193, 0.15);
  border-right-color: rgba(129, 161, 193, 0.15);
  border-top-color: rgba(129, 161, 193, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(129, 161, 193);
}

body h1 {
  color: rgb(180, 142, 173);
}

body h2 {
  color: rgb(94, 129, 172);
}

body h2.page-title, h2.page-title a {
  color: rgb(216, 222, 233);
}

body h3 {
  color: rgb(163, 190, 140);
}

body h4 {
  color: rgb(235, 203, 139);
}

body h5 {
  color: rgb(208, 135, 112);
}

body h6 {
  color: rgb(191, 97, 106);
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
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
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
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(129, 161, 193);
  border-bottom-color: rgb(236, 239, 244);
  border-left-color: rgb(236, 239, 244);
  border-right-color: rgb(236, 239, 244);
  border-top-color: rgb(236, 239, 244);
  color: rgb(236, 239, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}`,
    footer: `body footer {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body footer ul li a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(216, 222, 233);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 222, 233);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body li.section-li > .section .meta {
  color: rgb(216, 222, 233);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(216, 222, 233);
  text-decoration: rgb(216, 222, 233);
}

body ul.section-ul {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .darkmode svg {
  color: rgb(216, 222, 233);
  stroke: rgb(216, 222, 233);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .breadcrumb-element p {
  color: rgb(97, 110, 136);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .metadata {
  border-bottom-color: rgb(67, 76, 94);
  border-left-color: rgb(67, 76, 94);
  border-right-color: rgb(67, 76, 94);
  border-top-color: rgb(67, 76, 94);
  color: rgb(216, 222, 233);
}

body .metadata-properties {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body .navigation-progress {
  background-color: rgb(59, 66, 82);
}

body .page-header h2.page-title {
  color: rgb(216, 222, 233);
}

body abbr {
  color: rgb(216, 222, 233);
  text-decoration: underline dotted rgb(216, 222, 233);
}

body details {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body input[type=text] {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body kbd {
  background-color: rgb(59, 66, 82);
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
  color: rgb(216, 222, 233);
}

body progress {
  border-bottom-color: rgb(216, 222, 233);
  border-left-color: rgb(216, 222, 233);
  border-right-color: rgb(216, 222, 233);
  border-top-color: rgb(216, 222, 233);
}

body sub {
  color: rgb(216, 222, 233);
}

body summary {
  color: rgb(216, 222, 233);
}

body sup {
  color: rgb(216, 222, 233);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(215, 131, 126);
  --accent-color-dark: #286983;
  --accent-color-hover: #907aa9;
  --accent-color-light: #d7827e;
  --accent-h: 3;
  --accent-l: 67%;
  --accent-s: 53%;
  --background-modifier-active-hover: red;
  --background-modifier-border: #dfdad9;
  --background-modifier-border-focus: #cecacd;
  --background-modifier-border-hover: #cecacd;
  --background-modifier-error: #b4637a;
  --background-modifier-error-hover: #b4637a;
  --background-modifier-form-field: #fffaf3;
  --background-modifier-form-field-hover: #fffaf3;
  --background-modifier-hover: #f2e9e1;
  --background-modifier-success: #56949f;
  --background-primary: #faf4ed;
  --background-secondary: #fffaf3;
  --base: #faf4ed;
  --bases-cards-background: #faf4ed;
  --bases-cards-shadow: 0 0 0 1px #dfdad9;
  --bases-cards-shadow-hover: 0 0 0 1px #cecacd;
  --bases-embed-border-color: #dfdad9;
  --bases-group-heading-property-color: #575279;
  --bases-table-border-color: #dfdad9;
  --bases-table-cell-background-active: #faf4ed;
  --bases-table-cell-background-selected: #f2e9e1;
  --bases-table-cell-shadow-active: 0 0 0 2px #cecacd;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(215, 131, 126);
  --bases-table-header-background: #faf4ed;
  --bases-table-header-background-hover: #f2e9e1;
  --bases-table-header-color: #575279;
  --bases-table-summary-background: #faf4ed;
  --bases-table-summary-background-hover: #f2e9e1;
  --blockquote-border-color: #286983;
  --blur-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent));
  --bold-color: #d7827e;
  --border-color: #dfdad9;
  --border-color-primary: #dfdad9;
  --border-color-secondary: #cecacd;
  --canvas-background: #faf4ed;
  --canvas-card-label-color: #9893a5;
  --canvas-color: 215, 130, 126;
  --caret-color: #575279;
  --checkbox-border-color: #9893a5;
  --checkbox-border-color-hover: #907aa9;
  --checkbox-color: #286983;
  --checkbox-color-hover: #907aa9;
  --checkbox-marker-color: #faf4ed;
  --checklist-done-color: #9893a5;
  --code-background: #fffaf3;
  --code-boolean: #d7827e;
  --code-border-color: #dfdad9;
  --code-bracket-background: #f2e9e1;
  --code-builtin: #b4637a;
  --code-comment: #9893a5;
  --code-definition: #d7827e;
  --code-function: #ea9d34;
  --code-important: #ea9d34;
  --code-keyword: #286983;
  --code-normal: #575279;
  --code-operator: #286983;
  --code-parentheses: #797593;
  --code-property: #56949f;
  --code-punctuation: #575279;
  --code-string: #ea9d34;
  --code-tag: #b4637a;
  --code-value: #d7827e;
  --code-variable: #575279;
  --collapse-icon-color: #9893a5;
  --collapse-icon-color-collapsed: rgb(215, 131, 126);
  --color-accent: rgb(215, 131, 126);
  --color-accent-1: rgb(222, 148, 145);
  --color-accent-2: rgb(228, 165, 165);
  --color-accent-hsl: 3, 53%, 67%;
  --color-blue: #286983;
  --color-cyan: #56949f;
  --color-green: #56949f;
  --color-orange: #d7827e;
  --color-pink: pink;
  --color-purple: #907aa9;
  --color-red: #b4637a;
  --color-yellow: #ea9d34;
  --divider-color: #dfdad9;
  --divider-color-hover: rgb(215, 131, 126);
  --dropdown-background: #fffaf3;
  --dropdown-background-hover: #dfdad9;
  --embed-block-shadow-hover: 0 0 0 1px #dfdad9, inset 0 0 0 1px #dfdad9;
  --embed-border-start: 2px solid rgb(215, 131, 126);
  --file-header-background: #faf4ed;
  --file-header-background-focused: #faf4ed;
  --flair-background: #fffaf3;
  --flair-color: #575279;
  --foam: #56949f;
  --footnote-divider-color: #dfdad9;
  --footnote-id-color: #575279;
  --footnote-id-color-no-occurrences: #9893a5;
  --footnote-input-background-active: #f2e9e1;
  --gold: #ea9d34;
  --graph-line: #cecacd;
  --graph-node: rgb(215, 131, 126);
  --graph-node-attachment: #286983;
  --graph-node-focused: #907aa9;
  --graph-node-tag: #d7827e;
  --graph-node-unresolved: #dfdad9;
  --graph-text: #575279;
  --h1-color: #907aa9;
  --h2-color: #286983;
  --h3-color: #56949f;
  --h4-color: #ea9d34;
  --h5-color: #d7827e;
  --h6-color: #b4637a;
  --heading-formatting: #9893a5;
  --highlight-high: #cecacd;
  --highlight-low: #f4ede8;
  --highlight-med: #dfdad9;
  --hr-color: #f2e9e1;
  --icon-color: #575279;
  --icon-color-active: rgb(215, 131, 126);
  --icon-color-focused: #575279;
  --icon-color-hover: #575279;
  --indentation-guide-color: #f2e9e1;
  --indentation-guide-color-active: #9893a5;
  --inline-title-color: #575279;
  --input-date-separator: #9893a5;
  --input-placeholder-color: #9893a5;
  --interactive-accent: rgb(215, 131, 126);
  --interactive-accent-hover: rgb(228, 165, 165);
  --interactive-accent-hsl: 3, 53%, 67%;
  --interactive-hover: #dfdad9;
  --interactive-normal: #fffaf3;
  --iris: #907aa9;
  --italic-color: #d7827e;
  --link-color: #286983;
  --link-color-hover: #907aa9;
  --link-external-color: #286983;
  --link-external-color-hover: #907aa9;
  --link-unresolved-decoration-color: rgba(215, 131, 126, 0.3);
  --list-marker-color: #286983;
  --list-marker-color-collapsed: rgb(215, 131, 126);
  --list-marker-color-hover: #575279;
  --love: #b4637a;
  --menu-background: #fffaf3;
  --menu-border-color: #cecacd;
  --metadata-border-color: #dfdad9;
  --metadata-divider-color: #dfdad9;
  --metadata-input-background-active: #f2e9e1;
  --metadata-input-text-color: #575279;
  --metadata-label-background-active: #f2e9e1;
  --metadata-label-text-color: #575279;
  --metadata-label-text-color-hover: #575279;
  --metadata-property-background-active: #f2e9e1;
  --metadata-property-box-shadow-focus: 0 0 0 2px #cecacd;
  --metadata-property-box-shadow-hover: 0 0 0 1px #cecacd;
  --modal-background: #fffaf3;
  --modal-border-color: #dfdad9;
  --muted: #9893a5;
  --nav-collapse-icon-color: #cecacd;
  --nav-collapse-icon-color-collapsed: #cecacd;
  --nav-heading-color: #575279;
  --nav-heading-color-collapsed: #9893a5;
  --nav-heading-color-collapsed-hover: #575279;
  --nav-heading-color-hover: #575279;
  --nav-indentation-guide-color: #cecacd;
  --nav-item-background-active: #286983;
  --nav-item-background-hover: #f2e9e1;
  --nav-item-background-selected: red;
  --nav-item-color: #575279;
  --nav-item-color-active: #575279;
  --nav-item-color-highlighted: #d7827e;
  --nav-item-color-hover: #575279;
  --nav-item-color-selected: red;
  --nav-tag-color: #9893a5;
  --nav-tag-color-active: #575279;
  --nav-tag-color-hover: #575279;
  --nc: #f8f0e7;
  --overlay: #f2e9e1;
  --pdf-background: #faf4ed;
  --pdf-page-background: #faf4ed;
  --pdf-sidebar-background: #faf4ed;
  --pill-border-color: #dfdad9;
  --pill-border-color-hover: #cecacd;
  --pill-color: #575279;
  --pill-color-hover: #575279;
  --pill-color-remove: #9893a5;
  --pill-color-remove-hover: rgb(215, 131, 126);
  --pine: #286983;
  --prompt-background: #faf4ed;
  --prompt-border-color: #dfdad9;
  --raised-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent));
  --ribbon-background: #fffaf3;
  --ribbon-background-collapsed: #faf4ed;
  --rose: #d7827e;
  --search-clear-button-color: #575279;
  --search-icon-color: #575279;
  --search-result-background: #faf4ed;
  --selection-background-color: #f2e9e1;
  --selection-border-color: #907aa9;
  --setting-group-heading-color: #575279;
  --setting-items-border-color: #dfdad9;
  --slider-track-background: #fffaf3;
  --status-bar-background: #fffaf3;
  --status-bar-border-color: #dfdad9;
  --status-bar-text-color: #575279;
  --subtle: #797593;
  --suggestion-background: #faf4ed;
  --surface: #fffaf3;
  --sync-avatar-color-1: #b4637a;
  --sync-avatar-color-2: #d7827e;
  --sync-avatar-color-3: #ea9d34;
  --sync-avatar-color-4: #56949f;
  --sync-avatar-color-5: #56949f;
  --sync-avatar-color-6: #286983;
  --sync-avatar-color-7: #907aa9;
  --sync-avatar-color-8: pink;
  --tab-background-active: #faf4ed;
  --tab-container-background: #fffaf3;
  --tab-divider-color: #f2e9e1;
  --tab-outline-color: #dfdad9;
  --tab-switcher-background: #fffaf3;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffaf3, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(215, 131, 126);
  --tab-text-color: #dfdad9;
  --tab-text-color-active: #575279;
  --tab-text-color-focused: #575279;
  --tab-text-color-focused-active: #575279;
  --tab-text-color-focused-active-current: #575279;
  --tab-text-color-focused-highlighted: red;
  --table-add-button-border-color: #dfdad9;
  --table-border-color: #dfdad9;
  --table-drag-handle-background-active: #907aa9;
  --table-drag-handle-color: #f2e9e1;
  --table-drag-handle-color-active: #f2e9e1;
  --table-header-border-color: #dfdad9;
  --table-header-color: #575279;
  --table-selection: #f2e9e1;
  --table-selection-border-color: #907aa9;
  --tag-background: #f2e9e1;
  --tag-background-hover: #9893a5;
  --tag-border-color: rgba(215, 131, 126, 0.15);
  --tag-border-color-hover: rgba(215, 131, 126, 0.15);
  --tag-color: #286983;
  --tag-color-hover: #286983;
  --text: #575279;
  --text-accent: rgb(215, 131, 126);
  --text-accent-hover: red;
  --text-color: #575279;
  --text-color-accent: #575279;
  --text-color-muted-dark: #f2e9e1;
  --text-color-muted-light: #9893a5;
  --text-error: #b4637a;
  --text-faint: #9893a5;
  --text-highlight-bg: rgb(215, 131, 126);
  --text-muted: #575279;
  --text-normal: #575279;
  --text-on-accent: #575279;
  --text-on-accent-inverted: #faf4ed;
  --text-selection: #f2e9e1;
  --text-success: #56949f;
  --text-warning: #ea9d34;
  --titlebar-background: #fffaf3;
  --titlebar-background-focused: #dfdad9;
  --titlebar-border-color: #dfdad9;
  --titlebar-text-color: #575279;
  --titlebar-text-color-focused: #575279;
  --toggle-thumb-color: #575279;
  --vault-profile-color: #575279;
  --vault-profile-color-hover: #575279;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 218, 217);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 250, 243);
  border-left-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `body .page article p > b, b {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .page article p > em, em {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .page article p > i, i {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .page article p > strong, strong {
  color: rgb(215, 130, 126);
  outline: rgb(215, 130, 126) none 0px;
  text-decoration: rgb(215, 130, 126);
  text-decoration-color: rgb(215, 130, 126);
}

body .text-highlight {
  background-color: rgb(215, 131, 126);
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: line-through rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body p {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    links: `body a.external, footer a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration: underline rgb(40, 105, 131);
  text-decoration-color: rgb(40, 105, 131);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(40, 105, 131);
  outline: rgb(40, 105, 131) none 0px;
  text-decoration: underline rgb(40, 105, 131);
  text-decoration-color: rgb(40, 105, 131);
}

body a.internal.broken {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: underline rgba(215, 131, 126, 0.3);
  text-decoration-color: rgba(215, 131, 126, 0.3);
}`,
    lists: `body dd {
  color: rgb(87, 82, 121);
}

body dt {
  color: rgb(87, 82, 121);
}

body ol > li {
  color: rgb(87, 82, 121);
}

body ol.overflow {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ul > li {
  color: rgb(87, 82, 121);
}

body ul.overflow {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(152, 147, 165);
  text-decoration: rgb(152, 147, 165);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body table {
  color: rgb(87, 82, 121);
}

body td {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body th {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}`,
    code: `body code {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body pre > code > [data-line] {
  border-left-color: rgb(234, 157, 52);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 157, 52);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 157, 52);
  border-left-color: rgb(234, 157, 52);
  border-right-color: rgb(234, 157, 52);
  border-top-color: rgb(234, 157, 52);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body pre:has(> code) {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}`,
    images: `body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body figcaption {
  color: rgb(87, 82, 121);
}

body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body img {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(215, 131, 126);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(152, 147, 165);
  text-decoration: line-through rgb(152, 147, 165);
  text-decoration-color: rgb(152, 147, 165);
}

body input[type=checkbox] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(242, 233, 225);
  border-bottom-color: rgba(215, 131, 126, 0.15);
  border-left-color: rgba(215, 131, 126, 0.15);
  border-right-color: rgba(215, 131, 126, 0.15);
  border-top-color: rgba(215, 131, 126, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(40, 105, 131);
}

body h1 {
  color: rgb(144, 122, 169);
}

body h2 {
  color: rgb(40, 105, 131);
}

body h2.page-title, h2.page-title a {
  color: rgb(87, 82, 121);
}

body h3 {
  color: rgb(86, 148, 159);
}

body h4 {
  color: rgb(234, 157, 52);
}

body h5 {
  color: rgb(215, 130, 126);
}

body h6 {
  color: rgb(180, 99, 122);
}

body hr {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(40, 105, 131);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}`,
    footer: `body footer {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body footer ul li a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(87, 82, 121);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body li.section-li > .section .meta {
  color: rgb(87, 82, 121);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(87, 82, 121);
  text-decoration: rgb(87, 82, 121);
}

body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .darkmode svg {
  color: rgb(87, 82, 121);
  stroke: rgb(87, 82, 121);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .breadcrumb-element p {
  color: rgb(152, 147, 165);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .metadata {
  border-bottom-color: rgb(223, 218, 217);
  border-left-color: rgb(223, 218, 217);
  border-right-color: rgb(223, 218, 217);
  border-top-color: rgb(223, 218, 217);
  color: rgb(87, 82, 121);
}

body .metadata-properties {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body .navigation-progress {
  background-color: rgb(255, 250, 243);
}

body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

body abbr {
  color: rgb(87, 82, 121);
  text-decoration: underline dotted rgb(87, 82, 121);
}

body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body input[type=text] {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body kbd {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

body sub {
  color: rgb(87, 82, 121);
}

body summary {
  color: rgb(87, 82, 121);
}

body sup {
  color: rgb(87, 82, 121);
}`,
  },
};
