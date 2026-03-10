import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "old-world", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 10;
  --accent-l: 77%;
  --accent-s: 83%;
  --background-modifier-active-hover: #313134;
  --background-modifier-error: #ea83a5;
  --background-modifier-error-hover: #ea83a5;
  --background-modifier-error-rgb: 234, 131, 165;
  --background-modifier-hover: #313134;
  --background-modifier-success: #90b99f;
  --background-modifier-success-rgb: 144, 185, 159;
  --background-primary: #161617;
  --background-primary-alt: #27272a;
  --background-secondary: #131314;
  --background-secondary-alt: #27272a;
  --bases-cards-background: #161617;
  --bases-cards-cover-background: #27272a;
  --bases-group-heading-property-color: #9f9ca6;
  --bases-table-cell-background-active: #161617;
  --bases-table-cell-background-disabled: #27272a;
  --bases-table-cell-background-selected: rgba(245, 164, 148, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 164, 148);
  --bases-table-group-background: #27272a;
  --bases-table-header-background: #161617;
  --bases-table-header-background-hover: #313134;
  --bases-table-header-color: #9f9ca6;
  --bases-table-row-background-hover: rgba(39, 39, 42, 0.3);
  --bases-table-summary-background: #161617;
  --bases-table-summary-background-hover: #313134;
  --blockquote-border-color: rgb(245, 164, 148);
  --bold-color: #e29eca;
  --button-radius: 4px;
  --callout-bug: 234, 131, 165;
  --callout-default: 146, 162, 213;
  --callout-error: 234, 131, 165;
  --callout-example: 172, 161, 207;
  --callout-fail: 234, 131, 165;
  --callout-important: 133, 181, 186;
  --callout-info: 146, 162, 213;
  --callout-question: 245, 161, 145;
  --callout-success: 144, 185, 159;
  --callout-summary: 133, 181, 186;
  --callout-tip: 133, 181, 186;
  --callout-todo: 146, 162, 213;
  --callout-warning: 245, 161, 145;
  --canvas-background: #161617;
  --canvas-card-label-color: #8b8693;
  --canvas-color-1: 234, 131, 165;
  --canvas-color-2: 245, 161, 145;
  --canvas-color-3: 230, 185, 157;
  --canvas-color-4: 144, 185, 159;
  --canvas-color-5: 133, 181, 186;
  --canvas-color-6: 172, 161, 207;
  --caret-color: #e6b99d;
  --checkbox-border-color: #8b8693;
  --checkbox-border-color-hover: #9f9ca6;
  --checkbox-color: rgb(245, 164, 148);
  --checkbox-color-hover: rgb(251, 209, 203);
  --checkbox-marker-color: #161617;
  --checkbox-radius: 2px;
  --checklist-done-color: #9f9ca6;
  --code-background: rgba(39, 39, 42, 0.3);
  --code-bracket-background: #313134;
  --code-comment: #8b8693;
  --code-function: #e6b99d;
  --code-important: #f5a191;
  --code-keyword: #e29eca;
  --code-normal: #c9c7cd;
  --code-operator: #f5a191;
  --code-property: #92a2d5;
  --code-punctuation: #9f9ca6;
  --code-string: #90b99f;
  --code-tag: #ea83a5;
  --code-value: #aca1cf;
  --collapse-icon-color: #8b8693;
  --collapse-icon-color-collapsed: rgb(251, 209, 203);
  --color-accent: rgb(245, 164, 148);
  --color-accent-1: rgb(251, 209, 203);
  --color-accent-2: rgb(255, 251, 250);
  --color-accent-hsl: 10, 83%, 77%;
  --color-blue: #92a2d5;
  --color-blue-rgb: 146, 162, 213;
  --color-cyan: #85b5ba;
  --color-cyan-rgb: 133, 181, 186;
  --color-green: #90b99f;
  --color-green-rgb: 144, 185, 159;
  --color-orange: #f5a191;
  --color-orange-rgb: 245, 161, 145;
  --color-pink: #e29eca;
  --color-pink-rgb: 226, 158, 202;
  --color-purple: #aca1cf;
  --color-purple-rgb: 172, 161, 207;
  --color-red: #ea83a5;
  --color-red-rgb: 234, 131, 165;
  --color-yellow: #e6b99d;
  --color-yellow-rgb: 230, 185, 157;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: rgb(245, 164, 148);
  --embed-border-start: 2px solid rgb(245, 164, 148);
  --file-header-background: #161617;
  --file-header-background-focused: #161617;
  --flair-color: #c9c7cd;
  --footnote-id-color: #9f9ca6;
  --footnote-id-color-no-occurrences: #8b8693;
  --footnote-input-background-active: #313134;
  --graph-node: #9f9ca6;
  --graph-node-attachment: #e6b99d;
  --graph-node-focused: rgb(251, 209, 203);
  --graph-node-tag: #90b99f;
  --graph-node-unresolved: #8b8693;
  --graph-text: #c9c7cd;
  --gray: var(--text-muted);
  --h1-color: #e6b99d;
  --h2-color: #92a2d5;
  --h3-color: #e29eca;
  --h4-color: #f5a191;
  --h5-color: #90b99f;
  --h6-color: #ea83a5;
  --heading-formatting: #8b8693;
  --highlight: var(--text-highlight-bg);
  --hr-thickness: 3px;
  --icon-color: #9f9ca6;
  --icon-color-active: #92a2d5;
  --icon-color-focused: #92a2d5;
  --icon-color-hover: #92a2d5;
  --inline-title-color: #e6b99d;
  --input-date-separator: #8b8693;
  --input-placeholder-color: #8b8693;
  --input-radius: 4px;
  --interactive-accent: rgb(245, 164, 148);
  --interactive-accent-hover: rgb(251, 209, 203);
  --interactive-accent-hsl: 10, 83%, 77%;
  --italic-color: #e29eca;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-accent: rgb(145, 161, 212);
  --link-accent-h: 226;
  --link-accent-l: 70%;
  --link-accent-s: 44%;
  --link-color: rgb(145, 161, 212);
  --link-color-hover: rgb(255, 251, 250);
  --link-external-color: rgb(251, 209, 203);
  --link-external-color-hover: rgb(255, 251, 250);
  --link-unresolved-color: rgb(251, 209, 203);
  --link-unresolved-decoration-color: rgba(245, 164, 148, 0.3);
  --list-marker-color: #8b8693;
  --list-marker-color-collapsed: rgb(251, 209, 203);
  --list-marker-color-hover: #9f9ca6;
  --menu-background: #131314;
  --metadata-input-background-active: #313134;
  --metadata-input-text-color: #c9c7cd;
  --metadata-label-background-active: #313134;
  --metadata-label-text-color: #9f9ca6;
  --metadata-label-text-color-hover: #9f9ca6;
  --metadata-property-background-active: #313134;
  --modal-background: #161617;
  --modifier-active-hover: #313134;
  --modifier-active-hover-rgb: 39, 39, 42;
  --modifier-hover: #313134;
  --modifier-hover-rgb: 39, 39, 42;
  --nav-collapse-icon-color: #8b8693;
  --nav-collapse-icon-color-collapsed: #8b8693;
  --nav-heading-color: #c9c7cd;
  --nav-heading-color-collapsed: #8b8693;
  --nav-heading-color-collapsed-hover: #9f9ca6;
  --nav-heading-color-hover: #c9c7cd;
  --nav-item-background-active: #313134;
  --nav-item-background-hover: #313134;
  --nav-item-background-selected: rgba(245, 164, 148, 0.15);
  --nav-item-color: #9f9ca6;
  --nav-item-color-active: #f5a191;
  --nav-item-color-highlighted: rgb(251, 209, 203);
  --nav-item-color-hover: #f5a191;
  --nav-item-color-selected: #f5a191;
  --nav-tag-color: #8b8693;
  --nav-tag-color-active: #9f9ca6;
  --nav-tag-color-hover: #9f9ca6;
  --pdf-background: #161617;
  --pdf-page-background: #161617;
  --pdf-sidebar-background: #161617;
  --pill-color: #9f9ca6;
  --pill-color-hover: #c9c7cd;
  --pill-color-remove: #8b8693;
  --pill-color-remove-hover: rgb(251, 209, 203);
  --primary: #161617;
  --primary-alt: #27272a;
  --primary-alt-rgb: 39, 39, 42;
  --primary-rgb: 22, 22, 23;
  --prompt-background: #161617;
  --ribbon-background: #131314;
  --ribbon-background-collapsed: #161617;
  --search-clear-button-color: #9f9ca6;
  --search-icon-color: #9f9ca6;
  --search-result-background: #161617;
  --secondary: #131314;
  --secondary-alt: #27272a;
  --secondary-alt-rgb: 39, 39, 42;
  --secondary-rgb: 19, 19, 20;
  --setting-group-heading-color: #c9c7cd;
  --setting-items-background: #27272a;
  --slider-thumb-radius: 16px;
  --status-bar-background: #131314;
  --status-bar-text-color: #9f9ca6;
  --suggestion-background: #161617;
  --sync-avatar-color-1: #ea83a5;
  --sync-avatar-color-2: #f5a191;
  --sync-avatar-color-3: #e6b99d;
  --sync-avatar-color-4: #90b99f;
  --sync-avatar-color-5: #85b5ba;
  --sync-avatar-color-6: #92a2d5;
  --sync-avatar-color-7: #aca1cf;
  --sync-avatar-color-8: #e29eca;
  --tab-background-active: #161617;
  --tab-container-background: #131314;
  --tab-radius-active: 4px;
  --tab-switcher-background: #131314;
  --tab-switcher-menubar-background: linear-gradient(to top, #131314, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 164, 148);
  --tab-text-color: #8b8693;
  --tab-text-color-active: #9f9ca6;
  --tab-text-color-focused: #9f9ca6;
  --tab-text-color-focused-active: #9f9ca6;
  --tab-text-color-focused-active-current: #c9c7cd;
  --tab-text-color-focused-highlighted: rgb(251, 209, 203);
  --table-background: rgba(39, 39, 42, 0.3);
  --table-column-alt-background: rgba(39, 39, 42, 0.3);
  --table-drag-handle-background-active: rgb(245, 164, 148);
  --table-drag-handle-color: #8b8693;
  --table-header-background: rgba(39, 39, 42, 0.8);
  --table-header-color: #c9c7cd;
  --table-row-alt-background: rgba(39, 39, 42, 0.3);
  --table-row-alt-background-hover: rgba(39, 39, 42, 0.3);
  --table-row-background-hover: rgba(39, 39, 42, 0.3);
  --table-selection: rgba(245, 164, 148, 0.1);
  --table-selection-border-color: rgb(245, 164, 148);
  --tag-background: rgba(245, 164, 148, 0.1);
  --tag-background-hover: rgba(245, 164, 148, 0.2);
  --tag-border-color: rgba(245, 164, 148, 0.15);
  --tag-border-color-hover: rgba(245, 164, 148, 0.15);
  --tag-color: rgb(251, 209, 203);
  --tag-color-hover: rgb(251, 209, 203);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(251, 209, 203);
  --text-accent-hover: rgb(255, 251, 250);
  --text-error: #ea83a5;
  --text-faint: #8b8693;
  --text-highlight-bg: rgba(230, 185, 157, 0.5);
  --text-muted: #9f9ca6;
  --text-normal: #c9c7cd;
  --text-selection: rgba(245, 164, 148, 0.33);
  --text-success: #90b99f;
  --text-warning: #e6b99d;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #131314;
  --titlebar-background-focused: #27272a;
  --titlebar-text-color: #9f9ca6;
  --titlebar-text-color-focused: #c9c7cd;
  --toggle-radius: 16px;
  --toggle-thumb-radius: 16px;
  --vault-profile-color: #c9c7cd;
  --vault-profile-color-hover: #c9c7cd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 19, 20);
  color: rgb(201, 199, 205);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 22, 23);
  color: rgb(201, 199, 205);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 19, 20);
  color: rgb(201, 199, 205);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 19, 20);
  color: rgb(201, 199, 205);
}

body div#quartz-root {
  background-color: rgb(22, 22, 23);
  color: rgb(201, 199, 205);
}`,
    typography: `body .page article p > b, b {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration: rgb(226, 158, 202);
  text-decoration-color: rgb(226, 158, 202);
}

body .page article p > em, em {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration: rgb(226, 158, 202);
  text-decoration-color: rgb(226, 158, 202);
}

body .page article p > i, i {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration: rgb(226, 158, 202);
  text-decoration-color: rgb(226, 158, 202);
}

body .page article p > strong, strong {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration: rgb(226, 158, 202);
  text-decoration-color: rgb(226, 158, 202);
}

body .text-highlight {
  background-color: rgba(230, 185, 157, 0.5);
  color: rgb(201, 199, 205);
  outline: rgb(201, 199, 205) none 0px;
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body del {
  color: rgb(201, 199, 205);
  outline: rgb(201, 199, 205) none 0px;
  text-decoration: line-through rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body p {
  color: rgb(159, 156, 166);
  outline: rgb(159, 156, 166) none 0px;
  text-decoration: rgb(159, 156, 166);
  text-decoration-color: rgb(159, 156, 166);
}`,
    links: `body a.external, footer a {
  color: rgb(251, 207, 201);
  outline: rgb(251, 207, 201) none 0px;
  text-decoration: underline rgb(251, 207, 201);
  text-decoration-color: rgb(251, 207, 201);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 161, 212);
  outline: rgb(145, 161, 212) none 0px;
  text-decoration: underline rgb(145, 161, 212);
  text-decoration-color: rgb(145, 161, 212);
}

body a.internal.broken {
  color: rgb(251, 207, 201);
  outline: rgb(251, 207, 201) none 0px;
  text-decoration: underline rgba(245, 164, 148, 0.3);
  text-decoration-color: rgba(245, 164, 148, 0.3);
}`,
    lists: `body dd {
  color: rgb(201, 199, 205);
}

body dt {
  color: rgb(201, 199, 205);
}

body ol > li {
  color: rgb(201, 199, 205);
}

body ol.overflow {
  background-color: rgb(22, 22, 23);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body ul > li {
  color: rgb(201, 199, 205);
}

body ul.overflow {
  background-color: rgb(22, 22, 23);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(139, 134, 147);
  text-decoration: rgb(139, 134, 147);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body table {
  color: rgb(201, 199, 205);
}

body tbody tr:nth-child(even) {
  background-color: rgba(39, 39, 42, 0.3);
}

body tbody tr:nth-child(odd) {
  background-color: rgba(39, 39, 42, 0.3);
}

body td {
  color: rgb(201, 199, 205);
}

body th {
  color: rgb(201, 199, 205);
}

body tr {
  background-color: rgba(39, 39, 42, 0.8);
}`,
    code: `body code {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(39, 39, 42, 0.3);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(39, 39, 42, 0.3);
  color: rgb(201, 199, 205);
}

body pre > code > [data-line] {
  border-left-color: rgb(230, 185, 157);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 185, 157);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 185, 157);
  border-left-color: rgb(230, 185, 157);
  border-right-color: rgb(230, 185, 157);
  border-top-color: rgb(230, 185, 157);
}

body pre > code, pre:has(> code) {
  background-color: rgba(39, 39, 42, 0.3);
}

body pre:has(> code) {
  background-color: rgba(39, 39, 42, 0.3);
}`,
    images: `body audio {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body figcaption {
  color: rgb(201, 199, 205);
}

body figure {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body img {
  border-bottom-color: rgb(201, 199, 205);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(201, 199, 205);
  border-radius: 4px;
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

body video {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    embeds: `body .file-embed {
  background-color: rgb(39, 39, 42);
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
}

body .footnotes {
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

body .transclude {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(245, 164, 148);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body .transclude-inner {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(245, 164, 148);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(159, 156, 166);
  text-decoration: line-through rgb(159, 156, 166);
  text-decoration-color: rgb(159, 156, 166);
}

body input[type=checkbox] {
  border-bottom-color: rgb(139, 134, 147);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(139, 134, 147);
  border-right-color: rgb(139, 134, 147);
  border-top-color: rgb(139, 134, 147);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='*'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='-'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='/'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='>'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='?'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='I'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='S'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='b'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='c'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='d'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='f'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='i'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='k'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='l'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='p'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='u'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body li.task-list-item[data-task='w'] {
  color: rgb(201, 199, 205);
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(146, 162, 213);
  border-left-color: rgb(146, 162, 213);
  border-right-color: rgb(146, 162, 213);
  border-top-color: rgb(146, 162, 213);
}

body .callout[data-callout="abstract"] {
  --callout-color: 133, 181, 186;
  background-color: rgba(133, 181, 186, 0.1);
  border-bottom-color: rgba(133, 181, 186, 0.25);
  border-left-color: rgba(133, 181, 186, 0.25);
  border-right-color: rgba(133, 181, 186, 0.25);
  border-top-color: rgba(133, 181, 186, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 234, 131, 165;
  background-color: rgba(234, 131, 165, 0.1);
  border-bottom-color: rgba(234, 131, 165, 0.25);
  border-left-color: rgba(234, 131, 165, 0.25);
  border-right-color: rgba(234, 131, 165, 0.25);
  border-top-color: rgba(234, 131, 165, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 234, 131, 165;
  background-color: rgba(234, 131, 165, 0.1);
  border-bottom-color: rgba(234, 131, 165, 0.25);
  border-left-color: rgba(234, 131, 165, 0.25);
  border-right-color: rgba(234, 131, 165, 0.25);
  border-top-color: rgba(234, 131, 165, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 172, 161, 207;
  background-color: rgba(172, 161, 207, 0.1);
  border-bottom-color: rgba(172, 161, 207, 0.25);
  border-left-color: rgba(172, 161, 207, 0.25);
  border-right-color: rgba(172, 161, 207, 0.25);
  border-top-color: rgba(172, 161, 207, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 234, 131, 165;
  background-color: rgba(234, 131, 165, 0.1);
  border-bottom-color: rgba(234, 131, 165, 0.25);
  border-left-color: rgba(234, 131, 165, 0.25);
  border-right-color: rgba(234, 131, 165, 0.25);
  border-top-color: rgba(234, 131, 165, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 146, 162, 213;
  background-color: rgba(146, 162, 213, 0.1);
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 146, 162, 213;
  background-color: rgba(146, 162, 213, 0.1);
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 245, 161, 145;
  background-color: rgba(245, 161, 145, 0.1);
  border-bottom-color: rgba(245, 161, 145, 0.25);
  border-left-color: rgba(245, 161, 145, 0.25);
  border-right-color: rgba(245, 161, 145, 0.25);
  border-top-color: rgba(245, 161, 145, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 144, 185, 159;
  background-color: rgba(144, 185, 159, 0.1);
  border-bottom-color: rgba(144, 185, 159, 0.25);
  border-left-color: rgba(144, 185, 159, 0.25);
  border-right-color: rgba(144, 185, 159, 0.25);
  border-top-color: rgba(144, 185, 159, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 133, 181, 186;
  background-color: rgba(133, 181, 186, 0.1);
  border-bottom-color: rgba(133, 181, 186, 0.25);
  border-left-color: rgba(133, 181, 186, 0.25);
  border-right-color: rgba(133, 181, 186, 0.25);
  border-top-color: rgba(133, 181, 186, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 146, 162, 213;
  background-color: rgba(146, 162, 213, 0.1);
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 245, 161, 145;
  background-color: rgba(245, 161, 145, 0.1);
  border-bottom-color: rgba(245, 161, 145, 0.25);
  border-left-color: rgba(245, 161, 145, 0.25);
  border-right-color: rgba(245, 161, 145, 0.25);
  border-top-color: rgba(245, 161, 145, 0.25);
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(201, 199, 205);
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 23);
}

body .search > .search-container > .search-space > * {
  color: rgb(201, 199, 205);
  outline: rgb(201, 199, 205) none 0px;
  text-decoration: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 199, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(201, 199, 205);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(49, 49, 52);
  color: rgb(201, 199, 205);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 19, 20);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(49, 49, 52);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(49, 49, 52);
  color: rgb(201, 199, 205);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 164, 148, 0.1);
  border-bottom-color: rgba(245, 164, 148, 0.15);
  border-left-color: rgba(245, 164, 148, 0.15);
  border-right-color: rgba(245, 164, 148, 0.15);
  border-top-color: rgba(245, 164, 148, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(251, 207, 201);
}

body h1 {
  color: rgb(230, 185, 157);
}

body h2 {
  color: rgb(146, 162, 213);
}

body h2.page-title, h2.page-title a {
  color: rgb(230, 185, 157);
}

body h3 {
  color: rgb(226, 158, 202);
}

body h4 {
  color: rgb(245, 161, 145);
}

body h5 {
  color: rgb(144, 185, 159);
}

body h6 {
  color: rgb(234, 131, 165);
}`,
    scrollbars: `body .callout {
  --callout-color: 146, 162, 213;
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(159, 156, 166);
  text-decoration: rgb(159, 156, 166);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(159, 156, 166);
  text-decoration: rgb(159, 156, 166);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(159, 156, 166);
  text-decoration: rgb(159, 156, 166);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(49, 49, 52);
  border-bottom-color: rgb(245, 161, 145);
  border-left-color: rgb(245, 161, 145);
  border-right-color: rgb(245, 161, 145);
  border-top-color: rgb(245, 161, 145);
  color: rgb(245, 161, 145);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}`,
    footer: `body footer {
  background-color: rgb(19, 19, 20);
  color: rgb(159, 156, 166);
}

body footer ul li a {
  color: rgb(159, 156, 166);
  text-decoration: rgb(159, 156, 166);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(201, 199, 205);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(159, 156, 166);
  text-decoration: rgb(159, 156, 166);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(159, 156, 166);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body li.section-li > .section .meta {
  color: rgb(159, 156, 166);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(159, 156, 166);
  text-decoration: rgb(159, 156, 166);
}

body ul.section-ul {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

body .darkmode svg {
  color: rgb(159, 156, 166);
  stroke: rgb(159, 156, 166);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

body .breadcrumb-element p {
  color: rgb(139, 134, 147);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

body .metadata {
  color: rgb(159, 156, 166);
}

body .metadata-properties {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

body .navigation-progress {
  background-color: rgb(19, 19, 20);
}

body .page-header h2.page-title {
  color: rgb(201, 199, 205);
}

body abbr {
  color: rgb(201, 199, 205);
  text-decoration: underline dotted rgb(201, 199, 205);
}

body details {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body input[type=text] {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

body kbd {
  background-color: rgba(39, 39, 42, 0.3);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

body progress {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

body sub {
  color: rgb(201, 199, 205);
}

body summary {
  color: rgb(201, 199, 205);
}

body sup {
  color: rgb(201, 199, 205);
}`,
  },
  light: {},
};
