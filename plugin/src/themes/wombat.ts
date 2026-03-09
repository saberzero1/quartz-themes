import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "wombat", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40;
  --accent-l: 73%;
  --accent-s: 71%;
  --almost-black: #1c1c1c;
  --background-modifier-active-hover: rgba(235, 202, 137, 0.1);
  --background-modifier-border: #242424;
  --background-primary: #1c1c1c;
  --background-primary-alt: #1c1c1c;
  --background-secondary: #242424;
  --background-secondary-alt: #242424;
  --bases-cards-background: #1c1c1c;
  --bases-cards-cover-background: #1c1c1c;
  --bases-cards-shadow: 0 0 0 1px #242424;
  --bases-embed-border-color: #242424;
  --bases-group-heading-property-color: #cebd9e;
  --bases-table-border-color: #242424;
  --bases-table-cell-background-active: #1c1c1c;
  --bases-table-cell-background-disabled: #1c1c1c;
  --bases-table-cell-background-selected: rgba(235, 202, 137, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 202, 137);
  --bases-table-group-background: #1c1c1c;
  --bases-table-header-background: #1c1c1c;
  --bases-table-header-color: #cebd9e;
  --bases-table-row-background-hover: #ebcb8b30;
  --bases-table-summary-background: #1c1c1c;
  --blockquote-border-color: rgb(235, 202, 137);
  --bold-color: #ebcb8b;
  --canvas-background: #1c1c1c;
  --canvas-card-label-color: #87afff;
  --caret-color: #cccccc;
  --carolina-blue: #87afff;
  --charcoal-grey: #585858;
  --checkbox-border-color: #ebcb8b;
  --checkbox-border-color-hover: #ebcb8b;
  --checkbox-color: #ebcb8b;
  --checkbox-color-hover: #ebcb8b;
  --checkbox-marker-color: #1c1c1c;
  --checklist-done-color: #cccccc;
  --clay: #d08770;
  --code-border-color: #242424;
  --code-comment: #87afff;
  --code-normal: #ebcb8b;
  --code-punctuation: #cebd9e;
  --collapse-icon-color: #87afff;
  --collapse-icon-color-collapsed: #d08770;
  --color-accent: rgb(235, 202, 137);
  --color-accent-1: rgb(244, 221, 185);
  --color-accent-2: rgb(251, 242, 228);
  --color-accent-hsl: 40, 71%, 73%;
  --cursor-line-background: #585858;
  --dark-grey: #242424;
  --divider-color: #242424;
  --divider-color-hover: rgb(235, 202, 137);
  --eggshell: #ffffd7;
  --embed-block-shadow-hover: 0 0 0 1px #242424, inset 0 0 0 1px #242424;
  --embed-border-start: 2px solid rgb(235, 202, 137);
  --file-header-background: #1c1c1c;
  --file-header-background-focused: #1c1c1c;
  --flair-color: #cccccc;
  --footnote-divider-color: #242424;
  --footnote-id-color: #cebd9e;
  --footnote-id-color-no-occurrences: #87afff;
  --graph-line: #585858;
  --graph-node: #ebcb8b;
  --graph-node-attachment: #87afff;
  --graph-node-focused: #d08770;
  --graph-node-tag: #bf616a;
  --graph-node-unresolved: #87afff;
  --graph-text: #cccccc;
  --h1-color: #ffffd7;
  --h2-color: #ffffd7;
  --h3-color: #ffffd7;
  --h4-color: #ffffd7;
  --h5-color: #ffffd7;
  --h6-color: #ffffd7;
  --heading-formatting: #87afff;
  --hr-color: #242424;
  --icon-color: #cebd9e;
  --icon-color-active: #d08770;
  --icon-color-focused: #ffffd7;
  --icon-color-hover: #bf616a;
  --inline-title-color: #ebcb8b;
  --input-date-separator: #87afff;
  --input-placeholder-color: #87afff;
  --interactive-accent: rgb(235, 202, 137);
  --interactive-accent-hover: rgb(244, 221, 185);
  --interactive-accent-hsl: 40, 71%, 73%;
  --italic-color: #ebcb8b;
  --light-maroon: #bf616a;
  --link-color: #d08770;
  --link-color-hover: #ffffd7;
  --link-decoration: none;
  --link-decoration-hover: none;
  --link-external-color: #d08770;
  --link-external-color-hover: #ffffd7;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #d08770;
  --link-unresolved-decoration-color: rgba(235, 202, 137, 0.3);
  --list-marker-color: #87afff;
  --list-marker-color-collapsed: #d08770;
  --list-marker-color-hover: #cebd9e;
  --menu-background: #242424;
  --metadata-border-color: #242424;
  --metadata-divider-color: #242424;
  --metadata-input-text-color: #cccccc;
  --metadata-label-text-color: #cebd9e;
  --metadata-label-text-color-hover: #cebd9e;
  --modal-background: #1c1c1c;
  --nav-collapse-icon-color: #87afff;
  --nav-collapse-icon-color-collapsed: #87afff;
  --nav-heading-color: #cccccc;
  --nav-heading-color-collapsed: #87afff;
  --nav-heading-color-collapsed-hover: #cebd9e;
  --nav-heading-color-hover: #cccccc;
  --nav-item-background-selected: rgba(235, 202, 137, 0.15);
  --nav-item-color: #cebd9e;
  --nav-item-color-active: #ffffd7;
  --nav-item-color-highlighted: #d08770;
  --nav-item-color-hover: #bf616a;
  --nav-item-color-selected: #cccccc;
  --nav-tag-color: #87afff;
  --nav-tag-color-active: #cebd9e;
  --nav-tag-color-hover: #cebd9e;
  --pdf-background: #1c1c1c;
  --pdf-page-background: #1c1c1c;
  --pdf-shadow: 0 0 0 1px #242424;
  --pdf-sidebar-background: #1c1c1c;
  --pdf-thumbnail-shadow: 0 0 0 1px #242424;
  --peach-pale: #ebcb8b;
  --peach-pale_10: #ebcb8b10;
  --peach-pale_30: #ebcb8b30;
  --pill-border-color: #242424;
  --pill-color: #cebd9e;
  --pill-color-hover: #cccccc;
  --pill-color-remove: #87afff;
  --pill-color-remove-hover: #d08770;
  --prompt-background: #1c1c1c;
  --putty: #cebd9e;
  --ribbon-background: #242424;
  --ribbon-background-collapsed: #1c1c1c;
  --search-clear-button-color: #cebd9e;
  --search-icon-color: #cebd9e;
  --search-result-background: #1c1c1c;
  --setting-group-heading-color: #cccccc;
  --setting-items-background: #1c1c1c;
  --setting-items-border-color: #242424;
  --silver: #cccccc;
  --slider-track-background: #242424;
  --status-bar-background: #242424;
  --status-bar-border-color: #242424;
  --status-bar-text-color: #cebd9e;
  --suggestion-background: #1c1c1c;
  --tab-background-active: #1c1c1c;
  --tab-container-background: #242424;
  --tab-outline-color: #242424;
  --tab-switcher-background: #242424;
  --tab-switcher-menubar-background: linear-gradient(to top, #242424, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 202, 137);
  --tab-text-color: #87afff;
  --tab-text-color-active: #cebd9e;
  --tab-text-color-focused: #cebd9e;
  --tab-text-color-focused-active: #ffffd7;
  --tab-text-color-focused-active-current: #bf616a;
  --tab-text-color-focused-highlighted: #d08770;
  --table-add-button-border-color: #242424;
  --table-border-color: #242424;
  --table-drag-handle-background-active: rgb(235, 202, 137);
  --table-drag-handle-color: #87afff;
  --table-header-background: #ebcb8b10;
  --table-header-background-hover: #ebcb8b30;
  --table-header-border-color: #242424;
  --table-header-color: #cccccc;
  --table-row-background: #242424;
  --table-row-background-hover: #ebcb8b30;
  --table-selection: rgba(235, 202, 137, 0.1);
  --table-selection-border-color: rgb(235, 202, 137);
  --tag-background: #242424;
  --tag-background-hover: #242424;
  --tag-border-color: rgba(235, 202, 137, 0.15);
  --tag-border-color-hover: rgba(235, 202, 137, 0.15);
  --tag-color: #ffffd7;
  --tag-color-hover: #d08770;
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .5em;
  --text-accent: #d08770;
  --text-accent-hover: #ffffd7;
  --text-faint: #87afff;
  --text-highlight-bg: #ebcb8b30;
  --text-highlight-fg: #ffffd7;
  --text-muted: #cebd9e;
  --text-normal: #cccccc;
  --text-selection: #ebcb8b30;
  --titlebar-background: #242424;
  --titlebar-background-focused: #242424;
  --titlebar-border-color: #242424;
  --titlebar-text-color: #cebd9e;
  --titlebar-text-color-focused: #bf616a;
  --vault-profile-color: #cccccc;
  --vault-profile-color-hover: #cccccc;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 36, 36);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .page article p > em, em {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .page article p > i, i {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .page article p > strong, strong {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .text-highlight {
  background-color: rgba(235, 203, 139, 0.19);
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  color: rgb(206, 189, 158);
  outline: rgb(206, 189, 158) none 0px;
  text-decoration: rgb(206, 189, 158);
  text-decoration-color: rgb(206, 189, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body a.internal.broken {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgba(235, 202, 137, 0.3);
  text-decoration-color: rgba(235, 202, 137, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(135, 175, 255);
  text-decoration: rgb(135, 175, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
}

body td {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body th {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body tr {
  background-color: rgba(235, 203, 139, 0.063);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
  color: rgb(235, 203, 139);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body pre:has(> code) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(235, 202, 137);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(235, 202, 137);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 204, 204);
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body input[type=checkbox] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgba(235, 202, 137, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(235, 202, 137, 0.15);
  border-right-color: rgba(235, 202, 137, 0.15);
  border-top-color: rgba(235, 202, 137, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 215);
}

body h1 {
  color: rgb(255, 255, 215);
}

body h2 {
  color: rgb(255, 255, 215);
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 203, 139);
}

body h3 {
  color: rgb(255, 255, 215);
}

body h4 {
  color: rgb(255, 255, 215);
}

body h5 {
  color: rgb(255, 255, 215);
}

body h6 {
  color: rgb(255, 255, 215);
}

body hr {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 215);
  border-left-color: rgb(255, 255, 215);
  border-right-color: rgb(255, 255, 215);
  border-top-color: rgb(255, 255, 215);
  color: rgb(255, 255, 215);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}`,
    footer: `body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(206, 189, 158);
}

body footer ul li a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(206, 189, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(206, 189, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body .darkmode svg {
  color: rgb(206, 189, 158);
  stroke: rgb(206, 189, 158);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body .breadcrumb-element p {
  color: rgb(135, 175, 255);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(206, 189, 158);
}

body .metadata-properties {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body kbd {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
  color: rgb(235, 203, 139);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {},
};
