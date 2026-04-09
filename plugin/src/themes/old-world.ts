import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "old-world", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 10 !important;
  --accent-l: 77% !important;
  --accent-s: 83% !important;
  --background-modifier-active-hover: #313134 !important;
  --background-modifier-error: #ea83a5 !important;
  --background-modifier-error-hover: #ea83a5 !important;
  --background-modifier-error-rgb: 234, 131, 165 !important;
  --background-modifier-hover: #313134 !important;
  --background-modifier-success: #90b99f !important;
  --background-modifier-success-rgb: 144, 185, 159 !important;
  --background-primary: #161617 !important;
  --background-primary-alt: #27272a !important;
  --background-secondary: #131314 !important;
  --background-secondary-alt: #27272a !important;
  --bases-cards-background: #161617 !important;
  --bases-cards-cover-background: #27272a !important;
  --bases-group-heading-property-color: #9f9ca6 !important;
  --bases-table-cell-background-active: #161617 !important;
  --bases-table-cell-background-disabled: #27272a !important;
  --bases-table-cell-background-selected: hsla(10, 83%, 77%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(10, 83%, 77%) !important;
  --bases-table-group-background: #27272a !important;
  --bases-table-header-background: #161617 !important;
  --bases-table-header-background-hover: #313134 !important;
  --bases-table-header-color: #9f9ca6 !important;
  --bases-table-row-background-hover: rgba(39, 39, 42, 0.3) !important;
  --bases-table-summary-background: #161617 !important;
  --bases-table-summary-background-hover: #313134 !important;
  --blockquote-border-color: hsl(10, 83%, 77%) !important;
  --bold-color: #e29eca !important;
  --button-radius: 4px !important;
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
  --canvas-background: #161617 !important;
  --canvas-card-label-color: #8b8693 !important;
  --canvas-color-1: 234, 131, 165 !important;
  --canvas-color-2: 245, 161, 145 !important;
  --canvas-color-3: 230, 185, 157 !important;
  --canvas-color-4: 144, 185, 159 !important;
  --canvas-color-5: 133, 181, 186 !important;
  --canvas-color-6: 172, 161, 207 !important;
  --caret-color: #e6b99d !important;
  --checkbox-border-color: #8b8693 !important;
  --checkbox-border-color-hover: #9f9ca6 !important;
  --checkbox-color: hsl(10, 83%, 77%) !important;
  --checkbox-color-hover: hsl(7, 84.66%, 88.55%) !important;
  --checkbox-marker-color: #161617 !important;
  --checkbox-radius: 2px !important;
  --checklist-done-color: #9f9ca6 !important;
  --code-background: rgba(39, 39, 42, 0.3) !important;
  --code-bracket-background: #313134 !important;
  --code-comment: #8b8693 !important;
  --code-function: #e6b99d !important;
  --code-important: #f5a191 !important;
  --code-keyword: #e29eca !important;
  --code-normal: #c9c7cd !important;
  --code-operator: #f5a191 !important;
  --code-property: #92a2d5 !important;
  --code-punctuation: #9f9ca6 !important;
  --code-string: #90b99f !important;
  --code-tag: #ea83a5 !important;
  --code-value: #aca1cf !important;
  --collapse-icon-color: #8b8693 !important;
  --collapse-icon-color-collapsed: hsl(7, 84.66%, 88.55%) !important;
  --color-accent: hsl(10, 83%, 77%) !important;
  --color-accent-1: hsl(7, 84.66%, 88.55%) !important;
  --color-accent-2: hsl(5, 87.15%, 99.33%) !important;
  --color-accent-hsl: 10, 83%, 77% !important;
  --color-blue: #92a2d5 !important;
  --color-blue-rgb: 146, 162, 213 !important;
  --color-cyan: #85b5ba !important;
  --color-cyan-rgb: 133, 181, 186 !important;
  --color-green: #90b99f !important;
  --color-green-rgb: 144, 185, 159 !important;
  --color-orange: #f5a191 !important;
  --color-orange-rgb: 245, 161, 145 !important;
  --color-pink: #e29eca !important;
  --color-pink-rgb: 226, 158, 202 !important;
  --color-purple: #aca1cf !important;
  --color-purple-rgb: 172, 161, 207 !important;
  --color-red: #ea83a5 !important;
  --color-red-rgb: 234, 131, 165 !important;
  --color-yellow: #e6b99d !important;
  --color-yellow-rgb: 230, 185, 157 !important;
  --dark: #c9c7cd !important;
  --darkgray: #c9c7cd !important;
  --divider-color-hover: hsl(10, 83%, 77%) !important;
  --embed-border-start: 2px solid hsl(10, 83%, 77%) !important;
  --file-header-background: #161617 !important;
  --file-header-background-focused: #161617 !important;
  --flair-color: #c9c7cd !important;
  --footnote-id-color: #9f9ca6 !important;
  --footnote-id-color-no-occurrences: #8b8693 !important;
  --footnote-input-background-active: #313134 !important;
  --graph-node: #9f9ca6 !important;
  --graph-node-attachment: #e6b99d !important;
  --graph-node-focused: hsl(7, 84.66%, 88.55%) !important;
  --graph-node-tag: #90b99f !important;
  --graph-node-unresolved: #8b8693 !important;
  --graph-text: #c9c7cd !important;
  --gray: #9f9ca6 !important;
  --h1-color: #e6b99d !important;
  --h2-color: #92a2d5 !important;
  --h3-color: #e29eca !important;
  --h4-color: #f5a191 !important;
  --h5-color: #90b99f !important;
  --h6-color: #ea83a5 !important;
  --heading-formatting: #8b8693 !important;
  --highlight: rgba(230, 185, 157, 0.5) !important;
  --hr-thickness: 3px !important;
  --icon-color: #9f9ca6 !important;
  --icon-color-active: #92a2d5 !important;
  --icon-color-focused: #92a2d5 !important;
  --icon-color-hover: #92a2d5 !important;
  --inline-title-color: #e6b99d !important;
  --input-date-separator: #8b8693 !important;
  --input-placeholder-color: #8b8693 !important;
  --input-radius: 4px !important;
  --interactive-accent: hsl(10, 83%, 77%) !important;
  --interactive-accent-hover: hsl(7, 84.66%, 88.55%) !important;
  --interactive-accent-hsl: 10, 83%, 77% !important;
  --italic-color: #e29eca !important;
  --light: #161617 !important;
  --lightgray: #131314 !important;
  --link-accent: hsl(226, 44%, 70%) !important;
  --link-accent-h: 226 !important;
  --link-accent-l: 70% !important;
  --link-accent-s: 44% !important;
  --link-color: hsl(226, 44%, 70%) !important;
  --link-color-hover: hsl(5, 87.15%, 99.33%) !important;
  --link-external-color: hsl(7, 84.66%, 88.55%) !important;
  --link-external-color-hover: hsl(5, 87.15%, 99.33%) !important;
  --link-unresolved-color: hsl(7, 84.66%, 88.55%) !important;
  --link-unresolved-decoration-color: hsla(10, 83%, 77%, 0.3) !important;
  --list-marker-color: #8b8693 !important;
  --list-marker-color-collapsed: hsl(7, 84.66%, 88.55%) !important;
  --list-marker-color-hover: #9f9ca6 !important;
  --menu-background: #131314 !important;
  --metadata-input-background-active: #313134 !important;
  --metadata-input-text-color: #c9c7cd !important;
  --metadata-label-background-active: #313134 !important;
  --metadata-label-text-color: #9f9ca6 !important;
  --metadata-label-text-color-hover: #9f9ca6 !important;
  --metadata-property-background-active: #313134 !important;
  --modal-background: #161617 !important;
  --modifier-active-hover: #313134 !important;
  --modifier-active-hover-rgb: 39, 39, 42 !important;
  --modifier-hover: #313134 !important;
  --modifier-hover-rgb: 39, 39, 42 !important;
  --nav-collapse-icon-color: #8b8693 !important;
  --nav-collapse-icon-color-collapsed: #8b8693 !important;
  --nav-heading-color: #c9c7cd !important;
  --nav-heading-color-collapsed: #8b8693 !important;
  --nav-heading-color-collapsed-hover: #9f9ca6 !important;
  --nav-heading-color-hover: #c9c7cd !important;
  --nav-item-background-active: #313134 !important;
  --nav-item-background-hover: #313134 !important;
  --nav-item-background-selected: hsla(10, 83%, 77%, 0.15) !important;
  --nav-item-color: #9f9ca6 !important;
  --nav-item-color-active: #f5a191 !important;
  --nav-item-color-highlighted: hsl(7, 84.66%, 88.55%) !important;
  --nav-item-color-hover: #f5a191 !important;
  --nav-item-color-selected: #f5a191 !important;
  --nav-tag-color: #8b8693 !important;
  --nav-tag-color-active: #9f9ca6 !important;
  --nav-tag-color-hover: #9f9ca6 !important;
  --pdf-background: #161617 !important;
  --pdf-page-background: #161617 !important;
  --pdf-sidebar-background: #161617 !important;
  --pill-color: #9f9ca6 !important;
  --pill-color-hover: #c9c7cd !important;
  --pill-color-remove: #8b8693 !important;
  --pill-color-remove-hover: hsl(7, 84.66%, 88.55%) !important;
  --primary: #161617 !important;
  --primary-alt: #27272a !important;
  --primary-alt-rgb: 39, 39, 42 !important;
  --primary-rgb: 22, 22, 23 !important;
  --prompt-background: #161617 !important;
  --ribbon-background: #131314 !important;
  --ribbon-background-collapsed: #161617 !important;
  --search-clear-button-color: #9f9ca6 !important;
  --search-icon-color: #9f9ca6 !important;
  --search-result-background: #161617 !important;
  --secondary: #131314 !important;
  --secondary-alt: #27272a !important;
  --secondary-alt-rgb: 39, 39, 42 !important;
  --secondary-rgb: 19, 19, 20 !important;
  --setting-group-heading-color: #c9c7cd !important;
  --setting-items-background: #27272a !important;
  --slider-thumb-radius: 16px !important;
  --status-bar-background: #131314 !important;
  --status-bar-text-color: #9f9ca6 !important;
  --suggestion-background: #161617 !important;
  --sync-avatar-color-1: #ea83a5 !important;
  --sync-avatar-color-2: #f5a191 !important;
  --sync-avatar-color-3: #e6b99d !important;
  --sync-avatar-color-4: #90b99f !important;
  --sync-avatar-color-5: #85b5ba !important;
  --sync-avatar-color-6: #92a2d5 !important;
  --sync-avatar-color-7: #aca1cf !important;
  --sync-avatar-color-8: #e29eca !important;
  --tab-background-active: #161617 !important;
  --tab-container-background: #131314 !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #131314 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #131314, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(10, 83%, 77%) !important;
  --tab-text-color: #8b8693 !important;
  --tab-text-color-active: #9f9ca6 !important;
  --tab-text-color-focused: #9f9ca6 !important;
  --tab-text-color-focused-active: #9f9ca6 !important;
  --tab-text-color-focused-active-current: #c9c7cd !important;
  --tab-text-color-focused-highlighted: hsl(7, 84.66%, 88.55%) !important;
  --table-background: rgba(39, 39, 42, 0.3) !important;
  --table-column-alt-background: rgba(39, 39, 42, 0.3) !important;
  --table-drag-handle-background-active: hsl(10, 83%, 77%) !important;
  --table-drag-handle-color: #8b8693 !important;
  --table-header-background: rgba(39, 39, 42, 0.8) !important;
  --table-header-color: #c9c7cd !important;
  --table-row-alt-background: rgba(39, 39, 42, 0.3) !important;
  --table-row-alt-background-hover: rgba(39, 39, 42, 0.3) !important;
  --table-row-background-hover: rgba(39, 39, 42, 0.3) !important;
  --table-selection: hsla(10, 83%, 77%, 0.1) !important;
  --table-selection-border-color: hsl(10, 83%, 77%) !important;
  --tag-background: hsla(10, 83%, 77%, 0.1) !important;
  --tag-background-hover: hsla(10, 83%, 77%, 0.2) !important;
  --tag-border-color: hsla(10, 83%, 77%, 0.15) !important;
  --tag-border-color-hover: hsla(10, 83%, 77%, 0.15) !important;
  --tag-color: hsl(7, 84.66%, 88.55%) !important;
  --tag-color-hover: hsl(7, 84.66%, 88.55%) !important;
  --tertiary: hsl(5, 87.15%, 99.33%) !important;
  --text-accent: hsl(7, 84.66%, 88.55%) !important;
  --text-accent-hover: hsl(5, 87.15%, 99.33%) !important;
  --text-error: #ea83a5 !important;
  --text-faint: #8b8693 !important;
  --text-highlight-bg: rgba(230, 185, 157, 0.5) !important;
  --text-muted: #9f9ca6 !important;
  --text-normal: #c9c7cd !important;
  --text-selection: hsla(10, 83%, 77%, 0.33) !important;
  --text-success: #90b99f !important;
  --text-warning: #e6b99d !important;
  --textHighlight: rgba(230, 185, 157, 0.5) !important;
  --titlebar-background: #131314 !important;
  --titlebar-background-focused: #27272a !important;
  --titlebar-text-color: #9f9ca6 !important;
  --titlebar-text-color-focused: #c9c7cd !important;
  --toggle-radius: 16px !important;
  --toggle-thumb-radius: 16px !important;
  --vault-profile-color: #c9c7cd !important;
  --vault-profile-color-hover: #c9c7cd !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(19, 19, 20);
  color: rgb(201, 199, 205);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(22, 22, 23);
  color: rgb(201, 199, 205);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgba(39, 39, 42, 0.3);
}

html body .bases-table thead th {
  color: rgb(201, 199, 205);
}

html body .canvas-node {
  border-color: rgb(201, 199, 205);
}

html body .canvas-node-content {
  color: rgb(201, 199, 205);
}

html body .canvas-node-file {
  color: rgb(201, 199, 205);
}

html body .canvas-node-group {
  border-color: rgb(201, 199, 205);
}

html body .canvas-sidebar {
  background-color: rgb(19, 19, 20);
  border-color: rgb(201, 199, 205);
}

html body .note-properties-key {
  color: rgb(159, 156, 166);
}

html body .note-properties-row {
  border-color: rgb(159, 156, 166);
}

html body .note-properties-tags {
  background-color: rgba(245, 164, 148, 0.1);
  color: rgb(251, 207, 201);
}

html body .note-properties-value {
  color: rgb(159, 156, 166);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(19, 19, 20);
  color: rgb(201, 199, 205);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(19, 19, 20);
  color: rgb(201, 199, 205);
}

html body div#quartz-root {
  background-color: rgb(22, 22, 23);
  color: rgb(201, 199, 205);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration-color: rgb(226, 158, 202);
}

html body .page article p > em, html em {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration-color: rgb(226, 158, 202);
}

html body .page article p > i, html i {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration-color: rgb(226, 158, 202);
}

html body .page article p > strong, html strong {
  color: rgb(226, 158, 202);
  outline: rgb(226, 158, 202) none 0px;
  text-decoration-color: rgb(226, 158, 202);
}

html body .text-highlight {
  background-color: rgba(230, 185, 157, 0.5);
  color: rgb(201, 199, 205);
  outline: rgb(201, 199, 205) none 0px;
  text-decoration-color: rgb(201, 199, 205);
}

html body del {
  color: rgb(201, 199, 205);
  outline: rgb(201, 199, 205) none 0px;
  text-decoration-color: rgb(201, 199, 205);
}

html body h1.article-title {
  color: rgb(201, 199, 205);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(139, 134, 147);
  border-radius: 2px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 164, 148);
  border-color: rgb(245, 164, 148);
}

html body p {
  color: rgb(159, 156, 166);
  outline: rgb(159, 156, 166) none 0px;
  text-decoration-color: rgb(159, 156, 166);
}`,
    links: `html body a.external, html footer a {
  color: rgb(251, 207, 201);
  outline: rgb(251, 207, 201) none 0px;
  text-decoration-color: rgb(251, 207, 201);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 161, 212);
  outline: rgb(145, 161, 212) none 0px;
  text-decoration-color: rgb(145, 161, 212);
}

html body a.internal.broken {
  color: rgb(251, 207, 201);
  outline: rgb(251, 207, 201) none 0px;
  text-decoration: underline rgba(245, 164, 148, 0.3);
  text-decoration-color: rgba(245, 164, 148, 0.3);
}`,
    lists: `html body dd {
  color: rgb(201, 199, 205);
}

html body dt {
  color: rgb(201, 199, 205);
}

html body ol > li {
  color: rgb(201, 199, 205);
}

html body ol.overflow {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body ul > li {
  color: rgb(201, 199, 205);
}

html body ul.overflow {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(139, 134, 147);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body table {
  color: rgb(201, 199, 205);
}

html body tbody tr:nth-child(even) {
  background-color: rgba(39, 39, 42, 0.3);
}

html body tbody tr:nth-child(odd) {
  background-color: rgba(39, 39, 42, 0.3);
}

html body td {
  color: rgb(201, 199, 205);
}

html body th {
  color: rgb(201, 199, 205);
}

html body tr {
  background-color: rgba(39, 39, 42, 0.8);
}`,
    code: `html body code {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(39, 39, 42, 0.3);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(39, 39, 42, 0.3);
  color: rgb(201, 199, 205);
}

html body pre > code > [data-line] {
  border-left-color: rgb(230, 185, 157);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(230, 185, 157);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(230, 185, 157);
  border-left-color: rgb(230, 185, 157);
  border-right-color: rgb(230, 185, 157);
  border-top-color: rgb(230, 185, 157);
}

html body pre > code, html pre:has(> code) {
  background-color: rgba(39, 39, 42, 0.3);
}

html body pre:has(> code) {
  background-color: rgba(39, 39, 42, 0.3);
}`,
    images: `html body audio {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body figcaption {
  color: rgb(201, 199, 205);
}

html body figure {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body img {
  border-bottom-color: rgb(230, 185, 157);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(230, 185, 157);
  border-radius: 4px;
  border-right-color: rgb(230, 185, 157);
  border-top-color: rgb(230, 185, 157);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

html body video {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(39, 39, 42);
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
}

html body .footnotes {
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

html body .transclude {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(245, 164, 148);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body .transclude-inner {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(139, 134, 147);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(139, 134, 147);
  border-right-color: rgb(139, 134, 147);
  border-top-color: rgb(139, 134, 147);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(201, 199, 205);
  text-decoration-color: rgb(201, 199, 205);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(146, 162, 213);
  border-left-color: rgb(146, 162, 213);
  border-right-color: rgb(146, 162, 213);
  border-top-color: rgb(146, 162, 213);
  color: rgb(146, 162, 213);
}

html body .callout .callout-title > .callout-title-inner > p {
  color: rgb(146, 162, 213);
}

html body .callout[data-callout="abstract"] {
  --callout-color: 133, 181, 186;
  background-color: rgba(133, 181, 186, 0.1);
  border-bottom-color: rgba(133, 181, 186, 0.25);
  border-left-color: rgba(133, 181, 186, 0.25);
  border-right-color: rgba(133, 181, 186, 0.25);
  border-top-color: rgba(133, 181, 186, 0.25);
}

html body .callout[data-callout="bug"] {
  --callout-color: 234, 131, 165;
  background-color: rgba(234, 131, 165, 0.1);
  border-bottom-color: rgba(234, 131, 165, 0.25);
  border-left-color: rgba(234, 131, 165, 0.25);
  border-right-color: rgba(234, 131, 165, 0.25);
  border-top-color: rgba(234, 131, 165, 0.25);
}

html body .callout[data-callout="danger"] {
  --callout-color: 234, 131, 165;
  background-color: rgba(234, 131, 165, 0.1);
  border-bottom-color: rgba(234, 131, 165, 0.25);
  border-left-color: rgba(234, 131, 165, 0.25);
  border-right-color: rgba(234, 131, 165, 0.25);
  border-top-color: rgba(234, 131, 165, 0.25);
}

html body .callout[data-callout="example"] {
  --callout-color: 172, 161, 207;
  background-color: rgba(172, 161, 207, 0.1);
  border-bottom-color: rgba(172, 161, 207, 0.25);
  border-left-color: rgba(172, 161, 207, 0.25);
  border-right-color: rgba(172, 161, 207, 0.25);
  border-top-color: rgba(172, 161, 207, 0.25);
}

html body .callout[data-callout="failure"] {
  --callout-color: 234, 131, 165;
  background-color: rgba(234, 131, 165, 0.1);
  border-bottom-color: rgba(234, 131, 165, 0.25);
  border-left-color: rgba(234, 131, 165, 0.25);
  border-right-color: rgba(234, 131, 165, 0.25);
  border-top-color: rgba(234, 131, 165, 0.25);
}

html body .callout[data-callout="info"] {
  --callout-color: 146, 162, 213;
  background-color: rgba(146, 162, 213, 0.1);
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-color: 146, 162, 213;
  background-color: rgba(146, 162, 213, 0.1);
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

html body .callout[data-callout="question"] {
  --callout-color: 245, 161, 145;
  background-color: rgba(245, 161, 145, 0.1);
  border-bottom-color: rgba(245, 161, 145, 0.25);
  border-left-color: rgba(245, 161, 145, 0.25);
  border-right-color: rgba(245, 161, 145, 0.25);
  border-top-color: rgba(245, 161, 145, 0.25);
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 144, 185, 159;
  background-color: rgba(144, 185, 159, 0.1);
  border-bottom-color: rgba(144, 185, 159, 0.25);
  border-left-color: rgba(144, 185, 159, 0.25);
  border-right-color: rgba(144, 185, 159, 0.25);
  border-top-color: rgba(144, 185, 159, 0.25);
}

html body .callout[data-callout="tip"] {
  --callout-color: 133, 181, 186;
  background-color: rgba(133, 181, 186, 0.1);
  border-bottom-color: rgba(133, 181, 186, 0.25);
  border-left-color: rgba(133, 181, 186, 0.25);
  border-right-color: rgba(133, 181, 186, 0.25);
  border-top-color: rgba(133, 181, 186, 0.25);
}

html body .callout[data-callout="todo"] {
  --callout-color: 146, 162, 213;
  background-color: rgba(146, 162, 213, 0.1);
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

html body .callout[data-callout="warning"] {
  --callout-color: 245, 161, 145;
  background-color: rgba(245, 161, 145, 0.1);
  border-bottom-color: rgba(245, 161, 145, 0.25);
  border-left-color: rgba(245, 161, 145, 0.25);
  border-right-color: rgba(245, 161, 145, 0.25);
  border-top-color: rgba(245, 161, 145, 0.25);
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(201, 199, 205);
}

html body .search > .search-container > .search-space {
  background-color: rgb(22, 22, 23);
}

html body .search > .search-container > .search-space > * {
  color: rgb(201, 199, 205);
  outline: rgb(201, 199, 205) none 0px;
  text-decoration-color: rgb(201, 199, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(201, 199, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(201, 199, 205);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(49, 49, 52);
  color: rgb(201, 199, 205);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(19, 19, 20);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(49, 49, 52);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(49, 49, 52);
  color: rgb(201, 199, 205);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 164, 148, 0.1);
  border-bottom-color: rgba(245, 164, 148, 0.15);
  border-left-color: rgba(245, 164, 148, 0.15);
  border-right-color: rgba(245, 164, 148, 0.15);
  border-top-color: rgba(245, 164, 148, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(251, 207, 201);
}

html body h1 {
  color: rgb(230, 185, 157);
}

html body h2 {
  color: rgb(146, 162, 213);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(230, 185, 157);
}

html body h3 {
  color: rgb(226, 158, 202);
}

html body h4 {
  color: rgb(245, 161, 145);
}

html body h5 {
  color: rgb(144, 185, 159);
}

html body h6 {
  color: rgb(234, 131, 165);
}`,
    scrollbars: `html body .callout {
  --callout-color: 146, 162, 213;
  border-bottom-color: rgba(146, 162, 213, 0.25);
  border-left-color: rgba(146, 162, 213, 0.25);
  border-right-color: rgba(146, 162, 213, 0.25);
  border-top-color: rgba(146, 162, 213, 0.25);
}

html body ::-webkit-scrollbar {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}

html body ::-webkit-scrollbar-track {
  background: rgb(22, 22, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 22, 23);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(159, 156, 166);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(159, 156, 166);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(201, 199, 205);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}`,
    footer: `html body footer {
  background-color: rgb(19, 19, 20);
  color: rgb(159, 156, 166);
}

html body footer ul li a {
  color: rgb(159, 156, 166);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(201, 199, 205);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(159, 156, 166);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(159, 156, 166);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body li.section-li > .section .meta {
  color: rgb(159, 156, 166);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(159, 156, 166);
}

html body ul.section-ul {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

html body .darkmode svg {
  color: rgb(159, 156, 166);
  stroke: rgb(159, 156, 166);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

html body .breadcrumb-element p {
  color: rgb(139, 134, 147);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

html body .metadata {
  color: rgb(159, 156, 166);
}

html body .metadata-properties {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

html body .navigation-progress {
  background-color: rgb(19, 19, 20);
}

html body .page-header h2.page-title {
  color: rgb(201, 199, 205);
}

html body abbr {
  color: rgb(201, 199, 205);
}

html body details {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body input[type=text] {
  border-bottom-color: rgb(159, 156, 166);
  border-left-color: rgb(159, 156, 166);
  border-right-color: rgb(159, 156, 166);
  border-top-color: rgb(159, 156, 166);
  color: rgb(159, 156, 166);
}

html body kbd {
  background-color: rgba(39, 39, 42, 0.3);
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
  color: rgb(201, 199, 205);
}

html body progress {
  border-bottom-color: rgb(201, 199, 205);
  border-left-color: rgb(201, 199, 205);
  border-right-color: rgb(201, 199, 205);
  border-top-color: rgb(201, 199, 205);
}

html body sub {
  color: rgb(201, 199, 205);
}

html body summary {
  color: rgb(201, 199, 205);
}

html body sup {
  color: rgb(201, 199, 205);
}

html body ul.tags > li {
  background-color: rgba(245, 164, 148, 0.1);
  border-bottom-color: rgba(245, 164, 148, 0.15);
  border-left-color: rgba(245, 164, 148, 0.15);
  border-right-color: rgba(245, 164, 148, 0.15);
  border-top-color: rgba(245, 164, 148, 0.15);
  color: rgb(251, 207, 201);
}`,
  },
  light: {},
};
