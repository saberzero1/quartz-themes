import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "neo-sploosh",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-form-field-highlighted: #2c2c2c;
  --background-modifier-success-hover: #47b8e6;
  --background-primary: #222222;
  --background-primary-alt: #1c1c1c;
  --background-primary-rgb: 34, 34, 34;
  --background-secondary: #181818;
  --background-secondary-alt: #1f1f1f;
  --background-secondary-rgb: 28, 28, 28;
  --bases-cards-background: #222222;
  --bases-cards-cover-background: #1c1c1c;
  --bases-group-heading-property-color: #7a7a7a;
  --bases-table-cell-background-active: #222222;
  --bases-table-cell-background-disabled: #1c1c1c;
  --bases-table-cell-shadow-focus: 0 0 0 2px #008dc9;
  --bases-table-group-background: #1c1c1c;
  --bases-table-header-background: #222222;
  --bases-table-header-color: #7a7a7a;
  --bases-table-summary-background: #222222;
  --blockquote-border: #0090cc;
  --blockquote-border-color: #008dc9;
  --blur-background: color-mix(in srgb, #2d2d2d 65%, transparent) linear-gradient(#2d2d2d, color-mix(in srgb, #2d2d2d 65%, transparent));
  --canvas-background: #222222;
  --canvas-card-label-color: #555555;
  --caret-color: #c6c6c6;
  --checkbox-border-color: #555555;
  --checkbox-border-color-hover: #7a7a7a;
  --checkbox-color: #008dc9;
  --checkbox-color-hover: #40aedd;
  --checkbox-marker-color: #222222;
  --checklist-done-color: #7a7a7a;
  --code-background: #1c1c1c;
  --code-comment: #555555;
  --code-normal: #c6c6c6;
  --code-punctuation: #7a7a7a;
  --collapse-icon-color: #555555;
  --collapse-icon-color-collapsed: #2f8fb5;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #2e2e2e;
  --divider-color-hover: #008dc9;
  --dropdown-background: #2d2d2d;
  --dropdown-background-hover: #2d2d2d;
  --embed-background: #1f1f1f;
  --embed-border: #2e2e2e;
  --embed-border-start: 2px solid #008dc9;
  --file-header-background: #222222;
  --file-header-background-focused: #222222;
  --flair-background: #2d2d2d;
  --flair-color: #c6c6c6;
  --footnote-id-color: #7a7a7a;
  --footnote-id-color-no-occurrences: #555555;
  --graph-node: #7a7a7a;
  --graph-node-focused: #2f8fb5;
  --graph-node-unresolved: #555555;
  --graph-text: #c6c6c6;
  --gray: var(--text-muted);
  --heading-formatting: #555555;
  --icon-color: #1a98ce;
  --icon-color-active: #47b8e6;
  --icon-color-focused: #47b8e6;
  --icon-color-hover: #47b8e6;
  --inline-title-color: #40aedd;
  --input-date-separator: #555555;
  --input-placeholder-color: #555555;
  --interactive-accent: #008dc9;
  --interactive-accent-hover: #40aedd;
  --interactive-hover: #2d2d2d;
  --interactive-muted: #2e2e2e;
  --interactive-normal: #2d2d2d;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #2f8fb5;
  --link-color-hover: #40aedd;
  --link-external-color: #2f8fb5;
  --link-external-color-hover: #40aedd;
  --link-unresolved-color: #2f8fb5;
  --list-marker-color: #555555;
  --list-marker-color-collapsed: #2f8fb5;
  --list-marker-color-hover: #7a7a7a;
  --menu-background: #181818;
  --metadata-input-text-color: #c6c6c6;
  --metadata-label-text-color: #7a7a7a;
  --metadata-label-text-color-hover: #7a7a7a;
  --modal-background: #222222;
  --modal-border: #2e2e2e;
  --nav-collapse-icon-color: #555555;
  --nav-collapse-icon-color-collapsed: #555555;
  --nav-file-title-color: #c6c6c6;
  --nav-file-title-color-active: #f2f2f2;
  --nav-folder-title-color: #c6c6c6;
  --nav-heading-color: #c6c6c6;
  --nav-heading-color-collapsed: #555555;
  --nav-heading-color-collapsed-hover: #7a7a7a;
  --nav-heading-color-hover: #c6c6c6;
  --nav-item-background-active: #1f252b;
  --nav-item-background-hover: #1d2327;
  --nav-item-background-selected: #1f252b;
  --nav-item-color: #9cb6c4;
  --nav-item-color-active: #e9f4fa;
  --nav-item-color-highlighted: #2f8fb5;
  --nav-item-color-hover: #47b8e6;
  --nav-item-color-selected: #e9f4fa;
  --nav-item-color-selected-active: #e9f4fa;
  --nav-item-icon-color: #1a98ce;
  --nav-item-icon-color-hover: #47b8e6;
  --nav-tag-color: #555555;
  --nav-tag-color-active: #7a7a7a;
  --nav-tag-color-hover: #7a7a7a;
  --outline-item-color: #7a7a7a;
  --outline-item-color-active: #c6c6c6;
  --pane-border-color: #2e2e2e;
  --pane-border-width: 1px;
  --pdf-background: #222222;
  --pdf-page-background: #222222;
  --pdf-sidebar-background: #222222;
  --pill-color: #7a7a7a;
  --pill-color-hover: #c6c6c6;
  --pill-color-remove: #555555;
  --pill-color-remove-hover: #2f8fb5;
  --prompt-background: #222222;
  --prompt-border: #2e2e2e;
  --raised-background: color-mix(in srgb, #2d2d2d 65%, transparent) linear-gradient(#2d2d2d, color-mix(in srgb, #2d2d2d 65%, transparent));
  --ribbon-background: #161616;
  --ribbon-background-collapsed: #222222;
  --ribbon-background-hover: #1f1f1f;
  --search-clear-button-color: #7a7a7a;
  --search-icon-color: #7a7a7a;
  --search-result-background: #222222;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #c6c6c6;
  --setting-items-background: #1c1c1c;
  --sidebar-background: #151b1f;
  --status-bar-background: #181818;
  --status-bar-border-color: #2e2e2e;
  --status-bar-text-color: #7a7a7a;
  --suggestion-background: #222222;
  --syntax-comment: #888888;
  --syntax-constant: #64c8f2;
  --syntax-diff-changed: #98e80f;
  --syntax-function: #6ed5ff;
  --syntax-invalid: #be0d22;
  --syntax-keyword: #cccccc;
  --syntax-keyword-secondary: #aaaaaa;
  --syntax-markup-text: #eeeeee;
  --syntax-property: #00b3ff;
  --syntax-punctuation: #cccccc;
  --syntax-string: #cbd200;
  --syntax-variable: #0090cc;
  --tab-background-active: #222222;
  --tab-container-background: #181818;
  --tab-divider-color: #2e2e2e;
  --tab-outline-color: #2e2e2e;
  --tab-switcher-background: #181818;
  --tab-switcher-menubar-background: linear-gradient(to top, #181818, transparent);
  --tab-text-color: #555555;
  --tab-text-color-active: #7a7a7a;
  --tab-text-color-focused: #7a7a7a;
  --tab-text-color-focused-active: #7a7a7a;
  --tab-text-color-focused-active-current: #c6c6c6;
  --tab-text-color-focused-highlighted: #2f8fb5;
  --table-drag-handle-background-active: #008dc9;
  --table-drag-handle-color: #555555;
  --table-drag-handle-color-active: #111111;
  --table-header-color: #c6c6c6;
  --table-selection-border-color: #008dc9;
  --tag-color: #2f8fb5;
  --tag-color-hover: #2f8fb5;
  --tertiary: var(--text-accent-hover);
  --text-accent: #2f8fb5;
  --text-accent-hover: #40aedd;
  --text-accent-visited: #2f8fb5;
  --text-accent-visited-hover: #40aedd;
  --text-faint: #555555;
  --text-heading: #e4e4e4;
  --text-muted: #7a7a7a;
  --text-normal: #c6c6c6;
  --text-normal-rgb: 198, 198, 198;
  --text-on-accent: #111111;
  --titlebar-background: #161616;
  --titlebar-background-focused: #161616;
  --titlebar-text-color: #7a7a7a;
  --titlebar-text-color-focused: #c6c6c6;
  --vault-profile-color: #c6c6c6;
  --vault-profile-color-hover: #c6c6c6;
  --view-action-active-bg: #1a98ce;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(46, 46, 46);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  border-left-color: rgb(46, 46, 46);
  color: rgb(198, 198, 198);
}

body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(198, 198, 198);
}`,
    typography: `body .page article p > b, b {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .page article p > em, em {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .page article p > i, i {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .page article p > strong, strong {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .text-highlight {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body del {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: line-through rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body p {
  color: rgb(122, 122, 122);
  outline: rgb(122, 122, 122) none 0px;
  text-decoration: rgb(122, 122, 122);
  text-decoration-color: rgb(122, 122, 122);
}`,
    links: `body a.external, footer a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration: underline rgb(47, 143, 181);
  text-decoration-color: rgb(47, 143, 181);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration: underline rgb(47, 143, 181);
  text-decoration-color: rgb(47, 143, 181);
}

body a.internal.broken {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
}`,
    lists: `body dd {
  color: rgb(198, 198, 198);
}

body dt {
  color: rgb(198, 198, 198);
}

body ol > li {
  color: rgb(198, 198, 198);
}

body ol.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body ul > li {
  color: rgb(198, 198, 198);
}

body ul.overflow {
  background-color: rgb(22, 22, 22);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(47, 143, 181);
  text-decoration: rgb(47, 143, 181);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body table {
  color: rgb(198, 198, 198);
}

body td {
  color: rgb(198, 198, 198);
}

body th {
  color: rgb(198, 198, 198);
}`,
    code: `body code {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(28, 28, 28);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(28, 28, 28);
  color: rgb(198, 198, 198);
}

body pre > code > [data-line] {
  border-left-color: rgb(110, 213, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(110, 213, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(110, 213, 255);
  border-left-color: rgb(110, 213, 255);
  border-right-color: rgb(110, 213, 255);
  border-top-color: rgb(110, 213, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(28, 28, 28);
}

body pre:has(> code) {
  background-color: rgb(28, 28, 28);
}`,
    images: `body audio {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body figcaption {
  color: rgb(198, 198, 198);
}

body figure {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body img {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body video {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
}

body .footnotes {
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body .transclude {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(0, 141, 201);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body .transclude-inner {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(0, 141, 201);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(122, 122, 122);
  text-decoration: line-through rgb(122, 122, 122);
  text-decoration-color: rgb(122, 122, 122);
}

body input[type=checkbox] {
  border-bottom-color: rgb(85, 85, 85);
  border-left-color: rgb(85, 85, 85);
  border-right-color: rgb(85, 85, 85);
  border-top-color: rgb(85, 85, 85);
}

body li.task-list-item[data-task='!'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='*'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='-'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='/'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='>'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='?'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='I'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='S'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='b'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='c'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='d'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='f'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='i'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='k'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='l'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='p'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='u'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body li.task-list-item[data-task='w'] {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}`,
    search: `body .search > .search-button {
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(198, 198, 198);
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(198, 198, 198);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 24, 24);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(198, 198, 198);
}

body a.internal.tag-link::before {
  color: rgb(47, 143, 181);
}

body h1 {
  color: rgb(228, 228, 228);
}

body h2 {
  color: rgb(228, 228, 228);
}

body h2.page-title, h2.page-title a {
  color: rgb(64, 174, 221);
}

body h3 {
  color: rgb(228, 228, 228);
}

body h4 {
  color: rgb(228, 228, 228);
}

body h5 {
  color: rgb(228, 228, 228);
}

body h6 {
  color: rgb(228, 228, 228);
}

body hr {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(31, 37, 43);
  border-bottom-color: rgb(233, 244, 250);
  border-left-color: rgb(233, 244, 250);
  border-right-color: rgb(233, 244, 250);
  border-top-color: rgb(233, 244, 250);
  color: rgb(233, 244, 250);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(26, 152, 206);
  border-left-color: rgb(26, 152, 206);
  border-right-color: rgb(26, 152, 206);
  border-top-color: rgb(26, 152, 206);
  color: rgb(26, 152, 206);
}`,
    footer: `body footer {
  background-color: rgb(24, 24, 24);
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(122, 122, 122);
}

body footer ul li a {
  color: rgb(122, 122, 122);
  text-decoration: rgb(122, 122, 122);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(198, 198, 198);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(198, 198, 198);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body li.section-li > .section .meta {
  color: rgb(198, 198, 198);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(198, 198, 198);
  text-decoration: rgb(198, 198, 198);
}

body ul.section-ul {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(26, 152, 206);
  border-left-color: rgb(26, 152, 206);
  border-right-color: rgb(26, 152, 206);
  border-top-color: rgb(26, 152, 206);
  color: rgb(26, 152, 206);
}

body .darkmode svg {
  color: rgb(26, 152, 206);
  stroke: rgb(26, 152, 206);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
  color: rgb(122, 122, 122);
}

body .breadcrumb-element p {
  color: rgb(85, 85, 85);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body .metadata {
  color: rgb(122, 122, 122);
}

body .metadata-properties {
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
  color: rgb(122, 122, 122);
}

body .navigation-progress {
  background-color: rgb(24, 24, 24);
}

body .page-header h2.page-title {
  color: rgb(198, 198, 198);
}

body abbr {
  color: rgb(198, 198, 198);
  text-decoration: underline dotted rgb(198, 198, 198);
}

body details {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body input[type=text] {
  border-bottom-color: rgb(122, 122, 122);
  border-left-color: rgb(122, 122, 122);
  border-right-color: rgb(122, 122, 122);
  border-top-color: rgb(122, 122, 122);
  color: rgb(122, 122, 122);
}

body kbd {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
  color: rgb(198, 198, 198);
}

body progress {
  border-bottom-color: rgb(198, 198, 198);
  border-left-color: rgb(198, 198, 198);
  border-right-color: rgb(198, 198, 198);
  border-top-color: rgb(198, 198, 198);
}

body sub {
  color: rgb(198, 198, 198);
}

body summary {
  color: rgb(198, 198, 198);
}

body sup {
  color: rgb(198, 198, 198);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 199;
  --accent-l: 40%;
  --accent-s: 100%;
  --background-modifier-active-hover: #d9e7f0;
  --background-modifier-border: #cdd7df;
  --background-modifier-error: #be0d22;
  --background-modifier-error-hover: #009fdb;
  --background-modifier-form-field-highlighted: #d9e7f0;
  --background-modifier-hover: #d9e7f0;
  --background-modifier-success: #00a2e7;
  --background-modifier-success-hover: #00a2e7;
  --background-primary: #f7f9fb;
  --background-primary-alt: #f0f4f7;
  --background-primary-rgb: 247, 249, 251;
  --background-secondary: #ffffff;
  --background-secondary-alt: #ffffff;
  --background-secondary-rgb: 224, 232, 240;
  --bases-cards-background: #f7f9fb;
  --bases-cards-cover-background: #f0f4f7;
  --bases-cards-shadow: 0 0 0 1px #cdd7df;
  --bases-embed-border-color: #cdd7df;
  --bases-group-heading-property-color: #5b6c78;
  --bases-table-border-color: #cdd7df;
  --bases-table-cell-background-active: #f7f9fb;
  --bases-table-cell-background-disabled: #f0f4f7;
  --bases-table-cell-background-selected: rgba(0, 139, 204, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #008dc9;
  --bases-table-group-background: #f0f4f7;
  --bases-table-header-background: #f7f9fb;
  --bases-table-header-background-hover: #d9e7f0;
  --bases-table-header-color: #5b6c78;
  --bases-table-summary-background: #f7f9fb;
  --bases-table-summary-background-hover: #d9e7f0;
  --blockquote-border: #0070a1;
  --blockquote-border-color: #008dc9;
  --blur-background: color-mix(in srgb, #f7f9fb 65%, transparent) linear-gradient(#f7f9fb, color-mix(in srgb, #f7f9fb 65%, transparent));
  --canvas-background: #f7f9fb;
  --canvas-card-label-color: #8a97a1;
  --caret-color: #10212d;
  --checkbox-border-color: #8a97a1;
  --checkbox-border-color-hover: #5b6c78;
  --checkbox-color: #008dc9;
  --checkbox-color-hover: #009fdb;
  --checkbox-marker-color: #f7f9fb;
  --checklist-done-color: #5b6c78;
  --code-background: #e2eaf0;
  --code-border-color: #cdd7df;
  --code-bracket-background: #d9e7f0;
  --code-comment: #8a97a1;
  --code-normal: #172630;
  --code-punctuation: #5b6c78;
  --collapse-icon-color: #8a97a1;
  --collapse-icon-color-collapsed: #2f8fb5;
  --color-accent: rgb(0, 139, 204);
  --color-accent-1: hsl(198, 101%, 43%);
  --color-accent-2: hsl(196, 102%, 46%);
  --color-accent-hsl: 199, 100%, 40%;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #cdd7df;
  --divider-color-hover: #008dc9;
  --dropdown-background: #e3ecf3;
  --dropdown-background-hover: #d9e7f0;
  --embed-background: #ffffff;
  --embed-block-shadow-hover: 0 0 0 1px #cdd7df, inset 0 0 0 1px #cdd7df;
  --embed-border: #cdd7df;
  --embed-border-start: 2px solid #008dc9;
  --file-header-background: #f7f9fb;
  --file-header-background-focused: #f7f9fb;
  --flair-background: #e3ecf3;
  --flair-color: #10212d;
  --footnote-divider-color: #cdd7df;
  --footnote-id-color: #5b6c78;
  --footnote-id-color-no-occurrences: #8a97a1;
  --footnote-input-background-active: #d9e7f0;
  --graph-node: #5b6c78;
  --graph-node-focused: #2f8fb5;
  --graph-node-unresolved: #8a97a1;
  --graph-text: #10212d;
  --gray: var(--text-muted);
  --heading-formatting: #8a97a1;
  --highlight: var(--text-highlight-bg);
  --hr-color: #cdd7df;
  --icon-color: #008fd8;
  --icon-color-active: #00a2e7;
  --icon-color-focused: #00a2e7;
  --icon-color-hover: #00a2e7;
  --inline-title-color: #009fdb;
  --input-date-separator: #8a97a1;
  --input-placeholder-color: #8a97a1;
  --interactive-accent: #008dc9;
  --interactive-accent-hover: #009fdb;
  --interactive-accent-hsl: 199, 100%, 40%;
  --interactive-hover: #d9e7f0;
  --interactive-muted: #cdd7df;
  --interactive-normal: #e3ecf3;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #2f8fb5;
  --link-color-hover: #54b8e0;
  --link-external-color: #2f8fb5;
  --link-external-color-hover: #54b8e0;
  --link-unresolved-color: #2f8fb5;
  --link-unresolved-decoration-color: rgba(0, 139, 204, 0.3);
  --list-marker-color-collapsed: #2f8fb5;
  --list-marker-color-hover: #5b6c78;
  --menu-background: #ffffff;
  --metadata-border-color: #cdd7df;
  --metadata-divider-color: #cdd7df;
  --metadata-input-background-active: #d9e7f0;
  --metadata-input-text-color: #10212d;
  --metadata-label-background-active: #d9e7f0;
  --metadata-label-text-color: #5b6c78;
  --metadata-label-text-color-hover: #5b6c78;
  --metadata-property-background-active: #d9e7f0;
  --modal-border: #cdd7df;
  --modal-border-color: #cdd7df;
  --nav-collapse-icon-color: #8a97a1;
  --nav-collapse-icon-color-collapsed: #8a97a1;
  --nav-file-title-color: #10212d;
  --nav-file-title-color-active: #051018;
  --nav-folder-title-color: #10212d;
  --nav-heading-color: #10212d;
  --nav-heading-color-collapsed: #8a97a1;
  --nav-heading-color-collapsed-hover: #5b6c78;
  --nav-heading-color-hover: #10212d;
  --nav-item-background-active: #cfe6f6;
  --nav-item-background-hover: #eaf2f8;
  --nav-item-background-selected: #cfe6f6;
  --nav-item-color: #6c7b87;
  --nav-item-color-active: #008fd8;
  --nav-item-color-highlighted: #2f8fb5;
  --nav-item-color-hover: #006ea6;
  --nav-item-color-selected: #008fd8;
  --nav-item-color-selected-active: #008fd8;
  --nav-item-icon-color: #008fd8;
  --nav-item-icon-color-hover: #00a2e7;
  --nav-tag-color: #8a97a1;
  --nav-tag-color-active: #5b6c78;
  --nav-tag-color-hover: #5b6c78;
  --outline-item-color: #5b6c78;
  --outline-item-color-active: #10212d;
  --pane-border-color: #cdd7df;
  --pane-border-width: 1px;
  --pdf-background: #f7f9fb;
  --pdf-page-background: #f7f9fb;
  --pdf-sidebar-background: #f7f9fb;
  --pill-border-color: #cdd7df;
  --pill-color: #5b6c78;
  --pill-color-hover: #10212d;
  --pill-color-remove: #8a97a1;
  --pill-color-remove-hover: #2f8fb5;
  --prompt-border: #cdd7df;
  --prompt-border-color: #cdd7df;
  --raised-background: color-mix(in srgb, #f7f9fb 65%, transparent) linear-gradient(#f7f9fb, color-mix(in srgb, #f7f9fb 65%, transparent));
  --ribbon-background: #ffffff;
  --ribbon-background-collapsed: #f7f9fb;
  --ribbon-background-hover: #edf2f6;
  --search-clear-button-color: #5b6c78;
  --search-icon-color: #5b6c78;
  --search-result-background: #f7f9fb;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #10212d;
  --setting-items-background: #f0f4f7;
  --setting-items-border-color: #cdd7df;
  --sidebar-background: #ffffff;
  --slider-track-background: #cdd7df;
  --status-bar-background: #ffffff;
  --status-bar-border-color: #cdd7df;
  --status-bar-text-color: #5b6c78;
  --suggestion-background: #f7f9fb;
  --syntax-comment: #6f7a82;
  --syntax-constant: #b51224;
  --syntax-diff-changed: #a18a1a;
  --syntax-function: #006ea6;
  --syntax-invalid: #c11124;
  --syntax-keyword: #005f86;
  --syntax-keyword-secondary: #0e3f5a;
  --syntax-markup-text: #172630;
  --syntax-property: #0070a1;
  --syntax-punctuation: #73818b;
  --syntax-string: #868e00;
  --syntax-variable: #004f70;
  --tab-background-active: #f7f9fb;
  --tab-container-background: #ffffff;
  --tab-divider-color: #cdd7df;
  --tab-outline-color: #cdd7df;
  --tab-switcher-background: #ffffff;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 139, 204);
  --tab-text-color: #8a97a1;
  --tab-text-color-active: #5b6c78;
  --tab-text-color-focused: #5b6c78;
  --tab-text-color-focused-active: #5b6c78;
  --tab-text-color-focused-active-current: #10212d;
  --tab-text-color-focused-highlighted: #2f8fb5;
  --table-add-button-border-color: #cdd7df;
  --table-border-color: #cdd7df;
  --table-drag-handle-background-active: #008dc9;
  --table-drag-handle-color: #8a97a1;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #cdd7df;
  --table-header-color: #10212d;
  --table-selection: rgba(0, 139, 204, 0.1);
  --table-selection-border-color: #008dc9;
  --tag-background: rgba(0, 139, 204, 0.1);
  --tag-background-hover: rgba(0, 139, 204, 0.2);
  --tag-border-color: rgba(0, 139, 204, 0.15);
  --tag-border-color-hover: rgba(0, 139, 204, 0.15);
  --tag-color: #2f8fb5;
  --tag-color-hover: #2f8fb5;
  --tertiary: var(--text-accent-hover);
  --text-accent: #2f8fb5;
  --text-accent-hover: #54b8e0;
  --text-accent-visited: #2f8fb5;
  --text-accent-visited-hover: #54b8e0;
  --text-faint: #8a97a1;
  --text-heading: #0b1a24;
  --text-highlight-bg: #d9e7f0;
  --text-muted: #5b6c78;
  --text-normal: #10212d;
  --text-normal-rgb: 16, 33, 45;
  --text-on-accent: #ffffff;
  --text-selection: #d9e7f0;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #ffffff;
  --titlebar-background-focused: #ffffff;
  --titlebar-border-color: #cdd7df;
  --titlebar-text-color: #5b6c78;
  --titlebar-text-color-focused: #10212d;
  --vault-profile-color: #10212d;
  --vault-profile-color-hover: #10212d;
  --view-action-active-bg: #006fa6;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(247, 249, 251);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(16, 33, 45);
}

body div#quartz-root {
  background-color: rgb(247, 249, 251);
  color: rgb(16, 33, 45);
}`,
    typography: `body .page article p > b, b {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body .page article p > em, em {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body .page article p > i, i {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body .page article p > strong, strong {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body .text-highlight {
  background-color: rgb(217, 231, 240);
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body del {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: line-through rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body p {
  color: rgb(91, 108, 120);
  outline: rgb(91, 108, 120) none 0px;
  text-decoration: rgb(91, 108, 120);
  text-decoration-color: rgb(91, 108, 120);
}`,
    links: `body a.external, footer a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration: underline rgb(47, 143, 181);
  text-decoration-color: rgb(47, 143, 181);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration: underline rgb(47, 143, 181);
  text-decoration-color: rgb(47, 143, 181);
}

body a.internal.broken {
  color: rgb(47, 143, 181);
  outline: rgb(47, 143, 181) none 0px;
  text-decoration: underline rgba(0, 139, 204, 0.3);
  text-decoration-color: rgba(0, 139, 204, 0.3);
}`,
    lists: `body dd {
  color: rgb(16, 33, 45);
}

body dt {
  color: rgb(16, 33, 45);
}

body ol > li {
  color: rgb(16, 33, 45);
}

body ol.overflow {
  background-color: rgb(247, 249, 251);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body ul > li {
  color: rgb(16, 33, 45);
}

body ul.overflow {
  background-color: rgb(247, 249, 251);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(47, 143, 181);
  text-decoration: rgb(47, 143, 181);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body table {
  color: rgb(16, 33, 45);
}

body td {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

body th {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 95, 134);
  border-left-color: rgb(0, 95, 134);
  border-right-color: rgb(0, 95, 134);
  border-top-color: rgb(0, 95, 134);
  color: rgb(0, 95, 134);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

body pre > code > [data-line] {
  border-left-color: rgb(0, 110, 166);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 110, 166);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 110, 166);
  border-left-color: rgb(0, 110, 166);
  border-right-color: rgb(0, 110, 166);
  border-top-color: rgb(0, 110, 166);
}

body pre > code, pre:has(> code) {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

body pre:has(> code) {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}`,
    images: `body audio {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body figcaption {
  color: rgb(16, 33, 45);
}

body figure {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body img {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body video {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 244, 247);
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
}

body .footnotes {
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

body .transclude {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(0, 141, 201);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body .transclude-inner {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(0, 141, 201);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(91, 108, 120);
  text-decoration: line-through rgb(91, 108, 120);
  text-decoration-color: rgb(91, 108, 120);
}

body input[type=checkbox] {
  border-bottom-color: rgb(138, 151, 161);
  border-left-color: rgb(138, 151, 161);
  border-right-color: rgb(138, 151, 161);
  border-top-color: rgb(138, 151, 161);
}

body li.task-list-item[data-task='!'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='*'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='-'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='/'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='>'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='?'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='I'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='S'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='b'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='c'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='d'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='f'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='i'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='k'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='l'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='p'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='u'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body li.task-list-item[data-task='w'] {
  color: rgb(16, 33, 45);
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(16, 33, 45);
}

body .search > .search-container > .search-space {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

body .search > .search-container > .search-space > * {
  color: rgb(16, 33, 45);
  outline: rgb(16, 33, 45) none 0px;
  text-decoration: rgb(16, 33, 45);
  text-decoration-color: rgb(16, 33, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(16, 33, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(16, 33, 45);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(217, 231, 240);
  color: rgb(16, 33, 45);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(217, 231, 240);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(217, 231, 240);
  color: rgb(16, 33, 45);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 139, 204, 0.1);
  border-bottom-color: rgba(0, 139, 204, 0.15);
  border-left-color: rgba(0, 139, 204, 0.15);
  border-right-color: rgba(0, 139, 204, 0.15);
  border-top-color: rgba(0, 139, 204, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(47, 143, 181);
}

body h1 {
  color: rgb(11, 26, 36);
}

body h2 {
  color: rgb(11, 26, 36);
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 159, 219);
}

body h3 {
  color: rgb(11, 26, 36);
}

body h4 {
  color: rgb(11, 26, 36);
}

body h5 {
  color: rgb(11, 26, 36);
}

body h6 {
  color: rgb(11, 26, 36);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(247, 249, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(247, 249, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 123, 135);
  text-decoration: rgb(108, 123, 135);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 123, 135);
  text-decoration: rgb(108, 123, 135);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(108, 123, 135);
  text-decoration: rgb(108, 123, 135);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(207, 230, 246);
  border-bottom-color: rgb(0, 143, 216);
  border-left-color: rgb(0, 143, 216);
  border-right-color: rgb(0, 143, 216);
  border-top-color: rgb(0, 143, 216);
  color: rgb(0, 143, 216);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(0, 143, 216);
  border-left-color: rgb(0, 143, 216);
  border-right-color: rgb(0, 143, 216);
  border-top-color: rgb(0, 143, 216);
  color: rgb(0, 143, 216);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(91, 108, 120);
}

body footer ul li a {
  color: rgb(91, 108, 120);
  text-decoration: rgb(91, 108, 120);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(16, 33, 45);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 123, 135);
  text-decoration: rgb(108, 123, 135);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 123, 135);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body li.section-li > .section .meta {
  color: rgb(108, 123, 135);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 123, 135);
  text-decoration: rgb(108, 123, 135);
}

body ul.section-ul {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(0, 143, 216);
  border-left-color: rgb(0, 143, 216);
  border-right-color: rgb(0, 143, 216);
  border-top-color: rgb(0, 143, 216);
  color: rgb(0, 143, 216);
}

body .darkmode svg {
  color: rgb(0, 143, 216);
  stroke: rgb(0, 143, 216);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
  color: rgb(91, 108, 120);
}

body .breadcrumb-element p {
  color: rgb(138, 151, 161);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
  color: rgb(16, 33, 45);
}

body .metadata {
  border-bottom-color: rgb(205, 215, 223);
  border-left-color: rgb(205, 215, 223);
  border-right-color: rgb(205, 215, 223);
  border-top-color: rgb(205, 215, 223);
  color: rgb(91, 108, 120);
}

body .metadata-properties {
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
  color: rgb(91, 108, 120);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(16, 33, 45);
}

body abbr {
  color: rgb(16, 33, 45);
  text-decoration: underline dotted rgb(16, 33, 45);
}

body details {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body input[type=text] {
  border-bottom-color: rgb(91, 108, 120);
  border-left-color: rgb(91, 108, 120);
  border-right-color: rgb(91, 108, 120);
  border-top-color: rgb(91, 108, 120);
  color: rgb(91, 108, 120);
}

body kbd {
  background-color: rgb(226, 234, 240);
  border-bottom-color: rgb(23, 38, 48);
  border-left-color: rgb(23, 38, 48);
  border-right-color: rgb(23, 38, 48);
  border-top-color: rgb(23, 38, 48);
  color: rgb(23, 38, 48);
}

body progress {
  border-bottom-color: rgb(16, 33, 45);
  border-left-color: rgb(16, 33, 45);
  border-right-color: rgb(16, 33, 45);
  border-top-color: rgb(16, 33, 45);
}

body sub {
  color: rgb(16, 33, 45);
}

body summary {
  color: rgb(16, 33, 45);
}

body sup {
  color: rgb(16, 33, 45);
}`,
  },
};
