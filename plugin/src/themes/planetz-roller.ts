import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "planetz-roller",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-form-field-highlighted: #3d4148;
  --background-modifier-success-hover: #79e8bc;
  --background-primary: #33363c;
  --background-primary-alt: #383c42;
  --background-primary-rgb: 58, 62, 69;
  --background-secondary: #2f3237;
  --background-secondary-alt: #36393f;
  --background-secondary-rgb: 67, 70, 76;
  --bases-cards-background: #33363c;
  --bases-cards-cover-background: #383c42;
  --bases-group-heading-property-color: #818c84;
  --bases-table-cell-background-active: #33363c;
  --bases-table-cell-background-disabled: #383c42;
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff6678;
  --bases-table-group-background: #383c42;
  --bases-table-header-background: #33363c;
  --bases-table-header-color: #818c84;
  --bases-table-summary-background: #33363c;
  --blockquote-border: #88ddc1;
  --blockquote-border-color: #ff6678;
  --blur-background: color-mix(in srgb, #484c53 65%, transparent) linear-gradient(#484c53, color-mix(in srgb, #484c53 65%, transparent));
  --canvas-background: #33363c;
  --canvas-card-label-color: #5e6861;
  --caret-color: #d2d9d4;
  --checkbox-border-color: #5e6861;
  --checkbox-border-color-hover: #818c84;
  --checkbox-color: #ff6678;
  --checkbox-color-hover: #ff7a8a;
  --checkbox-marker-color: #33363c;
  --checklist-done-color: #818c84;
  --code-background: #383c42;
  --code-comment: #5e6861;
  --code-normal: #d2d9d4;
  --code-punctuation: #818c84;
  --collapse-icon-color: #5e6861;
  --collapse-icon-color-collapsed: #88ddc1;
  --divider-color: #494d55;
  --divider-color-hover: #ff6678;
  --dropdown-background: #484c53;
  --dropdown-background-hover: #474b52;
  --embed-background: #36393f;
  --embed-border: #494d55;
  --embed-border-start: 2px solid #ff6678;
  --file-header-background: #33363c;
  --file-header-background-focused: #33363c;
  --flair-background: #484c53;
  --flair-color: #d2d9d4;
  --footnote-id-color: #818c84;
  --footnote-id-color-no-occurrences: #5e6861;
  --graph-node: #818c84;
  --graph-node-focused: #88ddc1;
  --graph-node-unresolved: #5e6861;
  --graph-text: #d2d9d4;
  --heading-formatting: #5e6861;
  --icon-color: #ff6678;
  --icon-color-active: #ff6678;
  --icon-color-focused: #ff7a8a;
  --icon-color-hover: #ff7a8a;
  --inline-title-color: #ff7a8a;
  --input-date-separator: #5e6861;
  --input-placeholder-color: #5e6861;
  --interactive-accent: #ff6678;
  --interactive-accent-hover: #ff7a8a;
  --interactive-hover: #474b52;
  --interactive-muted: #494d55;
  --interactive-normal: #484c53;
  --link-color: #88ddc1;
  --link-color-hover: #a9f8df;
  --link-external-color: #88ddc1;
  --link-external-color-hover: #a9f8df;
  --link-unresolved-color: #88ddc1;
  --list-marker-color: #5e6861;
  --list-marker-color-collapsed: #88ddc1;
  --list-marker-color-hover: #818c84;
  --menu-background: #2f3237;
  --metadata-input-text-color: #d2d9d4;
  --metadata-label-text-color: #818c84;
  --metadata-label-text-color-hover: #818c84;
  --modal-background: #33363c;
  --modal-border: #494d55;
  --nav-collapse-icon-color: #5e6861;
  --nav-collapse-icon-color-collapsed: #5e6861;
  --nav-file-title-color: #d2d9d4;
  --nav-file-title-color-active: #f2f6f3;
  --nav-folder-title-color: #d2d9d4;
  --nav-heading-color: #d2d9d4;
  --nav-heading-color-collapsed: #5e6861;
  --nav-heading-color-collapsed-hover: #818c84;
  --nav-heading-color-hover: #d2d9d4;
  --nav-item-background-active: #3e4147;
  --nav-item-background-hover: #34373c;
  --nav-item-background-selected: #3e4147;
  --nav-item-color: #c45766;
  --nav-item-color-active: #84ebc9;
  --nav-item-color-highlighted: #88ddc1;
  --nav-item-color-hover: #ff6678;
  --nav-item-color-selected: #84ebc9;
  --nav-item-color-selected-active: #84ebc9;
  --nav-item-icon-color: #ff6678;
  --nav-item-icon-color-hover: #ff7a8a;
  --nav-tag-color: #5e6861;
  --nav-tag-color-active: #818c84;
  --nav-tag-color-hover: #818c84;
  --outline-item-color: #818c84;
  --outline-item-color-active: #d2d9d4;
  --pane-border-color: #494d55;
  --pane-border-width: 1px;
  --pdf-background: #33363c;
  --pdf-page-background: #33363c;
  --pdf-sidebar-background: #33363c;
  --pill-color: #818c84;
  --pill-color-hover: #d2d9d4;
  --pill-color-remove: #5e6861;
  --pill-color-remove-hover: #88ddc1;
  --prompt-background: #33363c;
  --prompt-border: #494d55;
  --raised-background: color-mix(in srgb, #484c53 65%, transparent) linear-gradient(#484c53, color-mix(in srgb, #484c53 65%, transparent));
  --ribbon-action-active-bg: #ff6678;
  --ribbon-background: #32353b;
  --ribbon-background-collapsed: #33363c;
  --ribbon-background-hover: #3a3e45;
  --search-clear-button-color: #818c84;
  --search-icon-color: #818c84;
  --search-result-background: #33363c;
  --setting-group-heading-color: #d2d9d4;
  --setting-items-background: #383c42;
  --sidebar-background: #2b2d31;
  --status-bar-background: #2f3237;
  --status-bar-border-color: #494d55;
  --status-bar-text-color: #818c84;
  --suggestion-background: #33363c;
  --syntax-comment: #67736b;
  --syntax-constant: #9c82ff;
  --syntax-diff-changed: #f2c16f;
  --syntax-function: #d0c1ff;
  --syntax-invalid: #ff2f6f;
  --syntax-keyword: #ff6678;
  --syntax-keyword-secondary: #ff7a8a;
  --syntax-markup-list-bullet: #ff6678;
  --syntax-markup-text: #d2d9d4;
  --syntax-property: #75e4c0;
  --syntax-punctuation: #818c84;
  --syntax-string: #cff075;
  --syntax-variable: #88ddc1;
  --tab-background-active: #33363c;
  --tab-container-background: #2f3237;
  --tab-divider-color: #494d55;
  --tab-outline-color: #494d55;
  --tab-switcher-background: #2f3237;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f3237, transparent);
  --tab-text-color: #5e6861;
  --tab-text-color-active: #818c84;
  --tab-text-color-focused: #818c84;
  --tab-text-color-focused-active: #818c84;
  --tab-text-color-focused-active-current: #d2d9d4;
  --tab-text-color-focused-highlighted: #88ddc1;
  --table-drag-handle-background-active: #ff6678;
  --table-drag-handle-color: #5e6861;
  --table-drag-handle-color-active: #101212;
  --table-header-color: #d2d9d4;
  --table-selection-border-color: #ff6678;
  --tag-color: #88ddc1;
  --tag-color-hover: #88ddc1;
  --text-accent: #88ddc1;
  --text-accent-hover: #a9f8df;
  --text-accent-visited: #88ddc1;
  --text-accent-visited-hover: #a9f8df;
  --text-faint: #5e6861;
  --text-heading: #e4ebe6;
  --text-muted: #818c84;
  --text-normal: #d2d9d4;
  --text-normal-rgb: 210, 217, 212;
  --text-on-accent: #101212;
  --titlebar-background: #32353b;
  --titlebar-background-focused: #32353b;
  --titlebar-text-color: #818c84;
  --titlebar-text-color-focused: #d2d9d4;
  --vault-profile-color: #d2d9d4;
  --vault-profile-color-hover: #d2d9d4;
  --view-action-active-bg: #ff6678;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(73, 77, 85);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(51, 54, 60);
  border-left-color: rgb(73, 77, 85);
  color: rgb(210, 217, 212);
}

body div#quartz-root {
  background-color: rgb(51, 54, 60);
  color: rgb(210, 217, 212);
}`,
    typography: `body .page article p > b, b {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body .page article p > em, em {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body .page article p > i, i {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body .page article p > strong, strong {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body .text-highlight {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body del {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: line-through rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body p {
  color: rgb(129, 140, 132);
  outline: rgb(129, 140, 132) none 0px;
  text-decoration: rgb(129, 140, 132);
  text-decoration-color: rgb(129, 140, 132);
}`,
    links: `body a.external, footer a {
  color: rgb(136, 221, 193);
  outline: rgb(136, 221, 193) none 0px;
  text-decoration: underline rgb(136, 221, 193);
  text-decoration-color: rgb(136, 221, 193);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(136, 221, 193);
  outline: rgb(136, 221, 193) none 0px;
  text-decoration: underline rgb(136, 221, 193);
  text-decoration-color: rgb(136, 221, 193);
}

body a.internal.broken {
  color: rgb(136, 221, 193);
  outline: rgb(136, 221, 193) none 0px;
}`,
    lists: `body dd {
  color: rgb(210, 217, 212);
}

body dt {
  color: rgb(210, 217, 212);
}

body ol > li {
  color: rgb(210, 217, 212);
}

body ol.overflow {
  background-color: rgb(50, 53, 59);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body ul > li {
  color: rgb(210, 217, 212);
}

body ul.overflow {
  background-color: rgb(50, 53, 59);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(136, 221, 193);
  text-decoration: rgb(136, 221, 193);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body table {
  color: rgb(210, 217, 212);
}

body td {
  color: rgb(210, 217, 212);
}

body th {
  color: rgb(210, 217, 212);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 102, 120);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(255, 102, 120);
  border-top-color: rgb(255, 102, 120);
  color: rgb(255, 102, 120);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 60, 66);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 60, 66);
  color: rgb(210, 217, 212);
}

body pre > code > [data-line] {
  border-left-color: rgb(208, 193, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(208, 193, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(208, 193, 255);
  border-left-color: rgb(208, 193, 255);
  border-right-color: rgb(208, 193, 255);
  border-top-color: rgb(208, 193, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(56, 60, 66);
}

body pre:has(> code) {
  background-color: rgb(56, 60, 66);
}`,
    images: `body audio {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body figcaption {
  color: rgb(210, 217, 212);
}

body figure {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body img {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body video {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    embeds: `body .file-embed {
  background-color: rgb(56, 60, 66);
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
}

body .footnotes {
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

body .transclude {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body .transclude-inner {
  background-color: rgb(54, 57, 63);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(129, 140, 132);
  text-decoration: line-through rgb(129, 140, 132);
  text-decoration-color: rgb(129, 140, 132);
}

body input[type=checkbox] {
  border-bottom-color: rgb(94, 104, 97);
  border-left-color: rgb(94, 104, 97);
  border-right-color: rgb(94, 104, 97);
  border-top-color: rgb(94, 104, 97);
}

body li.task-list-item[data-task='!'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='*'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='-'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='/'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='>'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='?'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='I'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='b'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='c'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='d'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='i'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='k'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='l'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='p'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='u'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body li.task-list-item[data-task='w'] {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}`,
    search: `body .search > .search-button {
  color: rgb(210, 217, 212);
}

body .search > .search-container > .search-space {
  background-color: rgb(51, 54, 60);
}

body .search > .search-container > .search-space > * {
  color: rgb(210, 217, 212);
  outline: rgb(210, 217, 212) none 0px;
  text-decoration: rgb(210, 217, 212);
  text-decoration-color: rgb(210, 217, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(210, 217, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(210, 217, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(210, 217, 212);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 50, 55);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(210, 217, 212);
}

body a.internal.tag-link::before {
  color: rgb(136, 221, 193);
}

body h1 {
  color: rgb(228, 235, 230);
}

body h2 {
  color: rgb(228, 235, 230);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 122, 138);
}

body h3 {
  color: rgb(228, 235, 230);
}

body h4 {
  color: rgb(228, 235, 230);
}

body h5 {
  color: rgb(228, 235, 230);
}

body h6 {
  color: rgb(228, 235, 230);
}

body hr {
  border-bottom-color: rgb(73, 77, 85);
  border-left-color: rgb(73, 77, 85);
  border-right-color: rgb(73, 77, 85);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

body ::-webkit-scrollbar-corner {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}

body ::-webkit-scrollbar-track {
  background: rgb(51, 54, 60) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(51, 54, 60);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(62, 65, 71);
  border-bottom-color: rgb(132, 235, 201);
  border-left-color: rgb(132, 235, 201);
  border-right-color: rgb(132, 235, 201);
  border-top-color: rgb(132, 235, 201);
  color: rgb(132, 235, 201);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 102, 120);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(255, 102, 120);
  border-top-color: rgb(255, 102, 120);
  color: rgb(255, 102, 120);
}`,
    footer: `body footer {
  background-color: rgb(47, 50, 55);
  border-bottom-color: rgb(73, 77, 85);
  border-left-color: rgb(73, 77, 85);
  border-right-color: rgb(73, 77, 85);
  border-top-color: rgb(73, 77, 85);
  color: rgb(129, 140, 132);
}

body footer ul li a {
  color: rgb(129, 140, 132);
  text-decoration: rgb(129, 140, 132);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(210, 217, 212);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(210, 217, 212);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body li.section-li > .section .meta {
  color: rgb(210, 217, 212);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(210, 217, 212);
  text-decoration: rgb(210, 217, 212);
}

body ul.section-ul {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 102, 120);
  border-left-color: rgb(255, 102, 120);
  border-right-color: rgb(255, 102, 120);
  border-top-color: rgb(255, 102, 120);
  color: rgb(255, 102, 120);
}

body .darkmode svg {
  color: rgb(255, 102, 120);
  stroke: rgb(255, 102, 120);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
  color: rgb(129, 140, 132);
}

body .breadcrumb-element p {
  color: rgb(94, 104, 97);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

body .metadata {
  color: rgb(129, 140, 132);
}

body .metadata-properties {
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
  color: rgb(129, 140, 132);
}

body .navigation-progress {
  background-color: rgb(47, 50, 55);
}

body .page-header h2.page-title {
  color: rgb(210, 217, 212);
}

body abbr {
  color: rgb(210, 217, 212);
  text-decoration: underline dotted rgb(210, 217, 212);
}

body details {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body input[type=text] {
  border-bottom-color: rgb(129, 140, 132);
  border-left-color: rgb(129, 140, 132);
  border-right-color: rgb(129, 140, 132);
  border-top-color: rgb(129, 140, 132);
  color: rgb(129, 140, 132);
}

body kbd {
  background-color: rgb(56, 60, 66);
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
  color: rgb(210, 217, 212);
}

body progress {
  border-bottom-color: rgb(210, 217, 212);
  border-left-color: rgb(210, 217, 212);
  border-right-color: rgb(210, 217, 212);
  border-top-color: rgb(210, 217, 212);
}

body sub {
  color: rgb(210, 217, 212);
}

body summary {
  color: rgb(210, 217, 212);
}

body sup {
  color: rgb(210, 217, 212);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 353;
  --accent-l: 62%;
  --accent-s: 65%;
  --background-modifier-active-hover: #e7f2ee;
  --background-modifier-border: #c5d5c9;
  --background-modifier-error: #ff5d70;
  --background-modifier-error-hover: #ff7a8a;
  --background-modifier-form-field: #f6fbf7;
  --background-modifier-form-field-highlighted: #e7f2ee;
  --background-modifier-form-field-hover: #f6fbf7;
  --background-modifier-hover: #e7f2ee;
  --background-modifier-success: #79e8bc;
  --background-modifier-success-hover: #79e8bc;
  --background-primary: #f6fbf7;
  --background-primary-alt: #f0f7f5;
  --background-primary-rgb: 237, 250, 241;
  --background-secondary: #f6fbf7;
  --background-secondary-alt: #f0f7f5;
  --background-secondary-rgb: 228, 243, 234;
  --bases-cards-background: #f6fbf7;
  --bases-cards-cover-background: #f0f7f5;
  --bases-cards-shadow: 0 0 0 1px #c5d5c9;
  --bases-embed-border-color: #c5d5c9;
  --bases-group-heading-property-color: #6e7972;
  --bases-table-border-color: #c5d5c9;
  --bases-table-cell-background-active: #f6fbf7;
  --bases-table-cell-background-disabled: #f0f7f5;
  --bases-table-cell-background-selected: rgba(221, 95, 110, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px #ff5d70;
  --bases-table-group-background: #f0f7f5;
  --bases-table-header-background: #f6fbf7;
  --bases-table-header-background-hover: #e7f2ee;
  --bases-table-header-color: #6e7972;
  --bases-table-summary-background: #f6fbf7;
  --bases-table-summary-background-hover: #e7f2ee;
  --blockquote-border: #20c093;
  --blockquote-border-color: #ff5d70;
  --blur-background: color-mix(in srgb, #f6fbf7 65%, transparent) linear-gradient(#f6fbf7, color-mix(in srgb, #f6fbf7 65%, transparent));
  --canvas-background: #f6fbf7;
  --canvas-card-label-color: #8b978f;
  --caret-color: #3f4642;
  --checkbox-border-color: #8b978f;
  --checkbox-border-color-hover: #6e7972;
  --checkbox-color: #ff5d70;
  --checkbox-color-hover: #ff7a8a;
  --checkbox-marker-color: #f6fbf7;
  --checklist-done-color: #6e7972;
  --code-background: #e7f2ee;
  --code-border-color: #c5d5c9;
  --code-bracket-background: #e7f2ee;
  --code-comment: #8b978f;
  --code-normal: #3f4642;
  --code-punctuation: #6e7972;
  --collapse-icon-color: #8b978f;
  --collapse-icon-color-collapsed: #3cb68c;
  --color-accent: rgb(221, 95, 110);
  --color-accent-1: rgb(226, 115, 130);
  --color-accent-2: rgb(230, 132, 149);
  --color-accent-hsl: 353, 65%, 62%;
  --divider-color: #c5d5c9;
  --divider-color-hover: #ff5d70;
  --dropdown-background: #e2efe6;
  --dropdown-background-hover: #e7f2ee;
  --embed-background: #f0f7f5;
  --embed-block-shadow-hover: 0 0 0 1px #c5d5c9, inset 0 0 0 1px #c5d5c9;
  --embed-border: #c5d5c9;
  --embed-border-start: 2px solid #ff5d70;
  --file-header-background: #f6fbf7;
  --file-header-background-focused: #f6fbf7;
  --flair-background: #e2efe6;
  --flair-color: #3f4642;
  --footnote-divider-color: #c5d5c9;
  --footnote-id-color: #6e7972;
  --footnote-id-color-no-occurrences: #8b978f;
  --footnote-input-background-active: #e7f2ee;
  --graph-node: #6e7972;
  --graph-node-focused: #3cb68c;
  --graph-node-unresolved: #8b978f;
  --graph-text: #3f4642;
  --heading-formatting: #8b978f;
  --hr-color: #c5d5c9;
  --icon-color: #ff5d70;
  --icon-color-active: #ff5d70;
  --icon-color-focused: #ff7a8a;
  --icon-color-hover: #ff7a8a;
  --inline-title-color: #ff7a8a;
  --input-date-separator: #8b978f;
  --input-placeholder-color: #8b978f;
  --interactive-accent: #ff5d70;
  --interactive-accent-hover: #ff7a8a;
  --interactive-accent-hsl: 353, 65%, 62%;
  --interactive-hover: #e7f2ee;
  --interactive-muted: #c5d5c9;
  --interactive-normal: #e2efe6;
  --link-color: #3cb68c;
  --link-color-hover: #82e0c4;
  --link-external-color: #3cb68c;
  --link-external-color-hover: #82e0c4;
  --link-unresolved-color: #3cb68c;
  --link-unresolved-decoration-color: rgba(221, 95, 110, 0.3);
  --list-marker-color-collapsed: #3cb68c;
  --list-marker-color-hover: #6e7972;
  --menu-background: #f6fbf7;
  --metadata-border-color: #c5d5c9;
  --metadata-divider-color: #c5d5c9;
  --metadata-input-background-active: #e7f2ee;
  --metadata-input-text-color: #3f4642;
  --metadata-label-background-active: #e7f2ee;
  --metadata-label-text-color: #6e7972;
  --metadata-label-text-color-hover: #6e7972;
  --metadata-property-background-active: #e7f2ee;
  --modal-background: #f0f7f5;
  --modal-border: #c5d5c9;
  --modal-border-color: #c5d5c9;
  --nav-collapse-icon-color: #8b978f;
  --nav-collapse-icon-color-collapsed: #8b978f;
  --nav-file-title-color: #3f4642;
  --nav-file-title-color-active: #101411;
  --nav-folder-title-color: #3f4642;
  --nav-heading-color: #3f4642;
  --nav-heading-color-collapsed: #8b978f;
  --nav-heading-color-collapsed-hover: #6e7972;
  --nav-heading-color-hover: #3f4642;
  --nav-item-background-active: #f0f7f5;
  --nav-item-background-hover: #f0f7f5;
  --nav-item-background-selected: #f0f7f5;
  --nav-item-color: #3f4642;
  --nav-item-color-active: #20c093;
  --nav-item-color-highlighted: #3cb68c;
  --nav-item-color-hover: #ff5d70;
  --nav-item-color-selected: #20c093;
  --nav-item-color-selected-active: #20c093;
  --nav-item-icon-color: #ff5d70;
  --nav-item-icon-color-hover: #ff7a8a;
  --nav-tag-color: #8b978f;
  --nav-tag-color-active: #6e7972;
  --nav-tag-color-hover: #6e7972;
  --outline-item-color: #6e7972;
  --outline-item-color-active: #3f4642;
  --pane-border-color: #c5d5c9;
  --pane-border-width: 1px;
  --pdf-background: #f6fbf7;
  --pdf-page-background: #f6fbf7;
  --pdf-sidebar-background: #f6fbf7;
  --pill-border-color: #c5d5c9;
  --pill-color: #6e7972;
  --pill-color-hover: #3f4642;
  --pill-color-remove: #8b978f;
  --pill-color-remove-hover: #3cb68c;
  --prompt-background: #f0f7f5;
  --prompt-border: #c5d5c9;
  --prompt-border-color: #c5d5c9;
  --raised-background: color-mix(in srgb, #f6fbf7 65%, transparent) linear-gradient(#f6fbf7, color-mix(in srgb, #f6fbf7 65%, transparent));
  --ribbon-action-active-bg: #17c7a4;
  --ribbon-background: #f6fbf7;
  --ribbon-background-collapsed: #f6fbf7;
  --ribbon-background-hover: #f0f7f5;
  --search-clear-button-color: #6e7972;
  --search-icon-color: #6e7972;
  --search-result-background: #f6fbf7;
  --setting-group-heading-color: #3f4642;
  --setting-items-background: #f0f7f5;
  --setting-items-border-color: #c5d5c9;
  --sidebar-background: #f6fbf7;
  --slider-track-background: #c5d5c9;
  --status-bar-background: #f6fbf7;
  --status-bar-border-color: #c5d5c9;
  --status-bar-text-color: #6e7972;
  --suggestion-background: #f6fbf7;
  --syntax-comment: #8d9990;
  --syntax-constant: #6e59f8;
  --syntax-diff-changed: #d1df52;
  --syntax-function: #9278ff;
  --syntax-invalid: #b3184c;
  --syntax-keyword: #ff6b82;
  --syntax-keyword-secondary: #e9556b;
  --syntax-markup-list-bullet: #ff6678;
  --syntax-markup-text: #3f4642;
  --syntax-property: #20c093;
  --syntax-punctuation: #738077;
  --syntax-string: #6aba0e;
  --syntax-variable: #20c093;
  --tab-background-active: #f6fbf7;
  --tab-container-background: #f6fbf7;
  --tab-divider-color: #c5d5c9;
  --tab-outline-color: #c5d5c9;
  --tab-switcher-background: #f6fbf7;
  --tab-switcher-menubar-background: linear-gradient(to top, #f6fbf7, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(221, 95, 110);
  --tab-text-color: #8b978f;
  --tab-text-color-active: #6e7972;
  --tab-text-color-focused: #6e7972;
  --tab-text-color-focused-active: #6e7972;
  --tab-text-color-focused-active-current: #3f4642;
  --tab-text-color-focused-highlighted: #3cb68c;
  --table-add-button-border-color: #c5d5c9;
  --table-border-color: #c5d5c9;
  --table-drag-handle-background-active: #ff5d70;
  --table-drag-handle-color: #8b978f;
  --table-drag-handle-color-active: #ffffff;
  --table-header-border-color: #c5d5c9;
  --table-header-color: #3f4642;
  --table-selection: rgba(221, 95, 110, 0.1);
  --table-selection-border-color: #ff5d70;
  --tag-background: rgba(221, 95, 110, 0.1);
  --tag-background-hover: rgba(221, 95, 110, 0.2);
  --tag-border-color: rgba(221, 95, 110, 0.15);
  --tag-border-color-hover: rgba(221, 95, 110, 0.15);
  --tag-color: #3cb68c;
  --tag-color-hover: #3cb68c;
  --text-accent: #3cb68c;
  --text-accent-hover: #82e0c4;
  --text-accent-visited: #3cb68c;
  --text-accent-visited-hover: #82e0c4;
  --text-faint: #8b978f;
  --text-heading: #1f2521;
  --text-highlight-bg: #e7f2ee;
  --text-muted: #6e7972;
  --text-normal: #3f4642;
  --text-normal-rgb: 63, 70, 66;
  --text-on-accent: #ffffff;
  --text-selection: #e7f2ee;
  --titlebar-background: #f6fbf7;
  --titlebar-background-focused: #f6fbf7;
  --titlebar-border-color: #c5d5c9;
  --titlebar-text-color: #6e7972;
  --titlebar-text-color-focused: #3f4642;
  --vault-profile-color: #3f4642;
  --vault-profile-color-hover: #3f4642;
  --view-action-active-bg: #ff5d70;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(246, 251, 247);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(63, 70, 66);
}

body div#quartz-root {
  background-color: rgb(246, 251, 247);
  color: rgb(63, 70, 66);
}`,
    typography: `body .page article p > b, b {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body .page article p > em, em {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body .page article p > i, i {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body .page article p > strong, strong {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body .text-highlight {
  background-color: rgb(231, 242, 238);
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body del {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: line-through rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body p {
  color: rgb(110, 121, 114);
  outline: rgb(110, 121, 114) none 0px;
  text-decoration: rgb(110, 121, 114);
  text-decoration-color: rgb(110, 121, 114);
}`,
    links: `body a.external, footer a {
  color: rgb(60, 182, 140);
  outline: rgb(60, 182, 140) none 0px;
  text-decoration: underline rgb(60, 182, 140);
  text-decoration-color: rgb(60, 182, 140);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(60, 182, 140);
  outline: rgb(60, 182, 140) none 0px;
  text-decoration: underline rgb(60, 182, 140);
  text-decoration-color: rgb(60, 182, 140);
}

body a.internal.broken {
  color: rgb(60, 182, 140);
  outline: rgb(60, 182, 140) none 0px;
  text-decoration: underline rgba(221, 95, 110, 0.3);
  text-decoration-color: rgba(221, 95, 110, 0.3);
}`,
    lists: `body dd {
  color: rgb(63, 70, 66);
}

body dt {
  color: rgb(63, 70, 66);
}

body ol > li {
  color: rgb(63, 70, 66);
}

body ol.overflow {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body ul > li {
  color: rgb(63, 70, 66);
}

body ul.overflow {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(60, 182, 140);
  text-decoration: rgb(60, 182, 140);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body table {
  color: rgb(63, 70, 66);
}

body td {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}

body th {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 107, 130);
  border-left-color: rgb(255, 107, 130);
  border-right-color: rgb(255, 107, 130);
  border-top-color: rgb(255, 107, 130);
  color: rgb(255, 107, 130);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}

body pre > code > [data-line] {
  border-left-color: rgb(146, 120, 255);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(146, 120, 255);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(146, 120, 255);
  border-left-color: rgb(146, 120, 255);
  border-right-color: rgb(146, 120, 255);
  border-top-color: rgb(146, 120, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

body pre:has(> code) {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}`,
    images: `body audio {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body figcaption {
  color: rgb(63, 70, 66);
}

body figure {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body img {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body video {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    embeds: `body .file-embed {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
}

body .footnotes {
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

body .transclude {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body .transclude-inner {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(110, 121, 114);
  text-decoration: line-through rgb(110, 121, 114);
  text-decoration-color: rgb(110, 121, 114);
}

body input[type=checkbox] {
  border-bottom-color: rgb(139, 151, 143);
  border-left-color: rgb(139, 151, 143);
  border-right-color: rgb(139, 151, 143);
  border-top-color: rgb(139, 151, 143);
}

body li.task-list-item[data-task='!'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='*'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='-'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='/'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='>'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='?'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='I'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='S'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='b'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='c'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='d'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='f'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='i'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='k'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='l'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='p'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='u'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body li.task-list-item[data-task='w'] {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}`,
    search: `body .search > .search-button {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(63, 70, 66);
}

body .search > .search-container > .search-space {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

body .search > .search-container > .search-space > * {
  color: rgb(63, 70, 66);
  outline: rgb(63, 70, 66) none 0px;
  text-decoration: rgb(63, 70, 66);
  text-decoration-color: rgb(63, 70, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(63, 70, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(63, 70, 66);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(231, 242, 238);
  color: rgb(63, 70, 66);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(246, 251, 247);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(231, 242, 238);
  color: rgb(63, 70, 66);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(221, 95, 110, 0.1);
  border-bottom-color: rgba(221, 95, 110, 0.15);
  border-left-color: rgba(221, 95, 110, 0.15);
  border-right-color: rgba(221, 95, 110, 0.15);
  border-top-color: rgba(221, 95, 110, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(60, 182, 140);
}

body h1 {
  color: rgb(31, 37, 33);
}

body h2 {
  color: rgb(31, 37, 33);
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 122, 138);
}

body h3 {
  color: rgb(31, 37, 33);
}

body h4 {
  color: rgb(31, 37, 33);
}

body h5 {
  color: rgb(31, 37, 33);
}

body h6 {
  color: rgb(31, 37, 33);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(246, 251, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(246, 251, 247);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(240, 247, 245);
  border-bottom-color: rgb(32, 192, 147);
  border-left-color: rgb(32, 192, 147);
  border-right-color: rgb(32, 192, 147);
  border-top-color: rgb(32, 192, 147);
  color: rgb(32, 192, 147);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 93, 112);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(255, 93, 112);
  border-top-color: rgb(255, 93, 112);
  color: rgb(255, 93, 112);
}`,
    footer: `body footer {
  background-color: rgb(246, 251, 247);
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(110, 121, 114);
}

body footer ul li a {
  color: rgb(110, 121, 114);
  text-decoration: rgb(110, 121, 114);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(63, 70, 66);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(63, 70, 66);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body li.section-li > .section .meta {
  color: rgb(63, 70, 66);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(63, 70, 66);
  text-decoration: rgb(63, 70, 66);
}

body ul.section-ul {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 93, 112);
  border-left-color: rgb(255, 93, 112);
  border-right-color: rgb(255, 93, 112);
  border-top-color: rgb(255, 93, 112);
  color: rgb(255, 93, 112);
}

body .darkmode svg {
  color: rgb(255, 93, 112);
  stroke: rgb(255, 93, 112);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
  color: rgb(110, 121, 114);
}

body .breadcrumb-element p {
  color: rgb(139, 151, 143);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

body .metadata {
  border-bottom-color: rgb(197, 213, 201);
  border-left-color: rgb(197, 213, 201);
  border-right-color: rgb(197, 213, 201);
  border-top-color: rgb(197, 213, 201);
  color: rgb(110, 121, 114);
}

body .metadata-properties {
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
  color: rgb(110, 121, 114);
}

body .navigation-progress {
  background-color: rgb(246, 251, 247);
}

body .page-header h2.page-title {
  color: rgb(63, 70, 66);
}

body abbr {
  color: rgb(63, 70, 66);
  text-decoration: underline dotted rgb(63, 70, 66);
}

body details {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body input[type=text] {
  border-bottom-color: rgb(110, 121, 114);
  border-left-color: rgb(110, 121, 114);
  border-right-color: rgb(110, 121, 114);
  border-top-color: rgb(110, 121, 114);
  color: rgb(110, 121, 114);
}

body kbd {
  background-color: rgb(231, 242, 238);
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
  color: rgb(63, 70, 66);
}

body progress {
  border-bottom-color: rgb(63, 70, 66);
  border-left-color: rgb(63, 70, 66);
  border-right-color: rgb(63, 70, 66);
  border-top-color: rgb(63, 70, 66);
}

body sub {
  color: rgb(63, 70, 66);
}

body summary {
  color: rgb(63, 70, 66);
}

body sup {
  color: rgb(63, 70, 66);
}`,
  },
};
