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
  --bases-table-cell-background-selected: rgba(245, 164, 148, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 164, 148) !important;
  --bases-table-group-background: #27272a !important;
  --bases-table-header-background: #161617 !important;
  --bases-table-header-background-hover: #313134 !important;
  --bases-table-header-color: #9f9ca6 !important;
  --bases-table-row-background-hover: rgba(39, 39, 42, 0.3) !important;
  --bases-table-summary-background: #161617 !important;
  --bases-table-summary-background-hover: #313134 !important;
  --blockquote-border-color: rgb(245, 164, 148) !important;
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
  --checkbox-color: rgb(245, 164, 148) !important;
  --checkbox-color-hover: rgb(251, 209, 203) !important;
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
  --collapse-icon-color-collapsed: rgb(251, 209, 203) !important;
  --color-accent: rgb(245, 164, 148) !important;
  --color-accent-1: rgb(251, 209, 203) !important;
  --color-accent-2: rgb(255, 251, 250) !important;
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
  --divider-color-hover: rgb(245, 164, 148) !important;
  --embed-border-start: 2px solid rgb(245, 164, 148) !important;
  --file-header-background: #161617 !important;
  --file-header-background-focused: #161617 !important;
  --flair-color: #c9c7cd !important;
  --footnote-id-color: #9f9ca6 !important;
  --footnote-id-color-no-occurrences: #8b8693 !important;
  --footnote-input-background-active: #313134 !important;
  --graph-node: #9f9ca6 !important;
  --graph-node-attachment: #e6b99d !important;
  --graph-node-focused: rgb(251, 209, 203) !important;
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
  --interactive-accent: rgb(245, 164, 148) !important;
  --interactive-accent-hover: rgb(251, 209, 203) !important;
  --interactive-accent-hsl: 10, 83%, 77% !important;
  --italic-color: #e29eca !important;
  --light: #161617 !important;
  --lightgray: #131314 !important;
  --link-accent: rgb(145, 161, 212) !important;
  --link-accent-h: 226 !important;
  --link-accent-l: 70% !important;
  --link-accent-s: 44% !important;
  --link-color: rgb(145, 161, 212) !important;
  --link-color-hover: rgb(255, 251, 250) !important;
  --link-external-color: rgb(251, 209, 203) !important;
  --link-external-color-hover: rgb(255, 251, 250) !important;
  --link-unresolved-color: rgb(251, 209, 203) !important;
  --link-unresolved-decoration-color: rgba(245, 164, 148, 0.3) !important;
  --list-marker-color: #8b8693 !important;
  --list-marker-color-collapsed: rgb(251, 209, 203) !important;
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
  --nav-item-background-selected: rgba(245, 164, 148, 0.15) !important;
  --nav-item-color: #9f9ca6 !important;
  --nav-item-color-active: #f5a191 !important;
  --nav-item-color-highlighted: rgb(251, 209, 203) !important;
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
  --pill-color-remove-hover: rgb(251, 209, 203) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 164, 148) !important;
  --tab-text-color: #8b8693 !important;
  --tab-text-color-active: #9f9ca6 !important;
  --tab-text-color-focused: #9f9ca6 !important;
  --tab-text-color-focused-active: #9f9ca6 !important;
  --tab-text-color-focused-active-current: #c9c7cd !important;
  --tab-text-color-focused-highlighted: rgb(251, 209, 203) !important;
  --table-background: rgba(39, 39, 42, 0.3) !important;
  --table-column-alt-background: rgba(39, 39, 42, 0.3) !important;
  --table-drag-handle-background-active: rgb(245, 164, 148) !important;
  --table-drag-handle-color: #8b8693 !important;
  --table-header-background: rgba(39, 39, 42, 0.8) !important;
  --table-header-color: #c9c7cd !important;
  --table-row-alt-background: rgba(39, 39, 42, 0.3) !important;
  --table-row-alt-background-hover: rgba(39, 39, 42, 0.3) !important;
  --table-row-background-hover: rgba(39, 39, 42, 0.3) !important;
  --table-selection: rgba(245, 164, 148, 0.1) !important;
  --table-selection-border-color: rgb(245, 164, 148) !important;
  --tag-background: rgba(245, 164, 148, 0.1) !important;
  --tag-background-hover: rgba(245, 164, 148, 0.2) !important;
  --tag-border-color: rgba(245, 164, 148, 0.15) !important;
  --tag-border-color-hover: rgba(245, 164, 148, 0.15) !important;
  --tag-color: rgb(251, 209, 203) !important;
  --tag-color-hover: rgb(251, 209, 203) !important;
  --tertiary: rgb(255, 251, 250) !important;
  --text-accent: rgb(251, 209, 203) !important;
  --text-accent-hover: rgb(255, 251, 250) !important;
  --text-error: #ea83a5 !important;
  --text-faint: #8b8693 !important;
  --text-highlight-bg: rgba(230, 185, 157, 0.5) !important;
  --text-muted: #9f9ca6 !important;
  --text-normal: #c9c7cd !important;
  --text-selection: rgba(245, 164, 148, 0.33) !important;
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
