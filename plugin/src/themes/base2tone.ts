import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "base2tone", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --D0-rgb: 207,136,74;
  --background-accent: rgb(109, 99, 131);
  --background-modifier-border: rgb(84, 75, 104);
  --background-primary: rgb(41, 36, 51);
  --background-primary-alt: rgb(53, 47, 66);
  --background-secondary: rgb(84, 75, 104);
  --background-secondary-alt: rgb(53, 47, 66);
  --baseA0: rgb(41, 36, 51);
  --baseA1: rgb(53, 47, 66);
  --baseA2: rgb(84, 75, 104);
  --baseA3: rgb(97, 87, 117);
  --baseA4: rgb(109, 99, 131);
  --baseA5: rgb(130, 120, 151);
  --baseA6: rgb(152, 144, 167);
  --baseA7: rgb(173, 167, 185);
  --baseB0: rgb(131, 81, 230);
  --baseB1: rgb(145, 99, 238);
  --baseB2: rgb(160, 117, 245);
  --baseB3: rgb(174, 134, 253);
  --baseB4: rgb(191, 160, 254);
  --baseB5: rgb(208, 185, 254);
  --baseB6: rgb(225, 210, 254);
  --baseB7: rgb(241, 235, 255);
  --baseC0: rgb(122, 117, 113);
  --baseC1: rgb(141, 135, 129);
  --baseC2: rgb(159, 153, 147);
  --baseC3: rgb(176, 171, 166);
  --baseC4: rgb(194, 188, 183);
  --baseC5: rgb(215, 209, 203);
  --baseC6: rgb(234, 229, 225);
  --baseC7: rgb(251, 250, 249);
  --baseD0: rgb(207, 136, 74);
  --baseD1: rgb(217, 149, 89);
  --baseD2: rgb(237, 161, 94);
  --baseD3: rgb(243, 169, 104);
  --baseD4: rgb(248, 177, 114);
  --baseD5: rgb(252, 187, 131);
  --baseD6: rgb(255, 201, 153);
  --baseD7: rgb(255, 214, 179);
  --bases-cards-background: rgb(41, 36, 51);
  --bases-cards-cover-background: rgb(53, 47, 66);
  --bases-cards-shadow: 0 0 0 1px rgb(84, 75, 104);
  --bases-embed-border-color: rgb(84, 75, 104);
  --bases-group-heading-property-color: rgb(225, 210, 254);
  --bases-table-border-color: rgb(84, 75, 104);
  --bases-table-cell-background-active: rgb(41, 36, 51);
  --bases-table-cell-background-disabled: rgb(53, 47, 66);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(207, 136, 74);
  --bases-table-group-background: rgb(53, 47, 66);
  --bases-table-header-background: rgb(41, 36, 51);
  --bases-table-header-color: rgb(225, 210, 254);
  --bases-table-summary-background: rgb(41, 36, 51);
  --blockquote-border-color: rgb(207, 136, 74);
  --blur-background: color-mix(in srgb, rgb(41, 36, 51) 65%, transparent) linear-gradient(rgb(41, 36, 51), color-mix(in srgb, rgb(41, 36, 51) 65%, transparent));
  --bullet: rgb(207, 136, 74);
  --canvas-background: rgb(41, 36, 51);
  --canvas-card-label-color: rgb(208, 185, 254);
  --caret-color: rgb(241, 235, 255);
  --checkbox-border-color: rgb(208, 185, 254);
  --checkbox-border-color-hover: rgb(225, 210, 254);
  --checkbox-color: rgb(207, 136, 74);
  --checkbox-color-hover: rgb(217, 149, 89);
  --checkbox-marker-color: rgb(41, 36, 51);
  --checklist-done-color: rgb(225, 210, 254);
  --code-background: rgb(53, 47, 66);
  --code-border-color: rgb(84, 75, 104);
  --code-comment: rgb(208, 185, 254);
  --code-normal: rgb(241, 235, 255);
  --code-punctuation: rgb(225, 210, 254);
  --collapse-icon-color: rgb(208, 185, 254);
  --collapse-icon-color-collapsed: rgb(131, 81, 230);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgb(84, 75, 104);
  --divider-color-hover: rgb(207, 136, 74);
  --dropdown-background: rgb(41, 36, 51);
  --dropdown-background-hover: rgb(207, 136, 74);
  --duo: 28;
  --embed-block-shadow-hover: 0 0 0 1px rgb(84, 75, 104), inset 0 0 0 1px rgb(84, 75, 104);
  --embed-border-start: 2px solid rgb(207, 136, 74);
  --file-header-background: rgb(41, 36, 51);
  --file-header-background-focused: rgb(41, 36, 51);
  --flair-background: rgb(41, 36, 51);
  --flair-color: rgb(241, 235, 255);
  --footnote-divider-color: rgb(84, 75, 104);
  --footnote-id-color: rgb(225, 210, 254);
  --footnote-id-color-no-occurrences: rgb(208, 185, 254);
  --graph-node: rgb(225, 210, 254);
  --graph-node-focused: rgb(131, 81, 230);
  --graph-node-unresolved: rgb(208, 185, 254);
  --graph-text: rgb(241, 235, 255);
  --gray: var(--text-muted);
  --heading-formatting: rgb(208, 185, 254);
  --highlight: var(--text-highlight-bg);
  --hr-color: rgb(84, 75, 104);
  --icon-color: rgb(225, 210, 254);
  --icon-color-active: rgb(131, 81, 230);
  --icon-color-focused: rgb(241, 235, 255);
  --icon-color-hover: rgb(225, 210, 254);
  --inline-code: rgb(207, 136, 74);
  --input-date-separator: rgb(208, 185, 254);
  --input-placeholder-color: rgb(208, 185, 254);
  --interactive-accent: rgb(207, 136, 74);
  --interactive-accent-hover: rgb(217, 149, 89);
  --interactive-accent-rgb: 207,136,74;
  --interactive-hover: rgb(207, 136, 74);
  --interactive-normal: rgb(41, 36, 51);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(131, 81, 230);
  --link-color-hover: rgb(145, 99, 238);
  --link-external: rgb(207, 136, 74);
  --link-external-color: rgb(131, 81, 230);
  --link-external-color-hover: rgb(145, 99, 238);
  --link-internal: rgb(248, 177, 114);
  --link-unresolved-color: rgb(131, 81, 230);
  --list-marker-color: rgb(208, 185, 254);
  --list-marker-color-collapsed: rgb(131, 81, 230);
  --list-marker-color-hover: rgb(225, 210, 254);
  --menu-background: rgb(84, 75, 104);
  --metadata-border-color: rgb(84, 75, 104);
  --metadata-divider-color: rgb(84, 75, 104);
  --metadata-input-text-color: rgb(241, 235, 255);
  --metadata-label-text-color: rgb(225, 210, 254);
  --metadata-label-text-color-hover: rgb(225, 210, 254);
  --modal-background: rgb(41, 36, 51);
  --nav-collapse-icon-color: rgb(208, 185, 254);
  --nav-collapse-icon-color-collapsed: rgb(208, 185, 254);
  --nav-heading-color: rgb(241, 235, 255);
  --nav-heading-color-collapsed: rgb(208, 185, 254);
  --nav-heading-color-collapsed-hover: rgb(225, 210, 254);
  --nav-heading-color-hover: rgb(241, 235, 255);
  --nav-item-color: rgb(225, 210, 254);
  --nav-item-color-active: rgb(241, 235, 255);
  --nav-item-color-highlighted: rgb(131, 81, 230);
  --nav-item-color-hover: rgb(241, 235, 255);
  --nav-item-color-selected: rgb(241, 235, 255);
  --nav-tag-color: rgb(208, 185, 254);
  --nav-tag-color-active: rgb(225, 210, 254);
  --nav-tag-color-hover: rgb(225, 210, 254);
  --operators: rgb(97, 87, 117);
  --pdf-background: rgb(41, 36, 51);
  --pdf-page-background: rgb(41, 36, 51);
  --pdf-shadow: 0 0 0 1px rgb(84, 75, 104);
  --pdf-sidebar-background: rgb(41, 36, 51);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(84, 75, 104);
  --pill-border-color: rgb(84, 75, 104);
  --pill-color: rgb(225, 210, 254);
  --pill-color-hover: rgb(241, 235, 255);
  --pill-color-remove: rgb(208, 185, 254);
  --pill-color-remove-hover: rgb(131, 81, 230);
  --prompt-background: rgb(41, 36, 51);
  --raised-background: color-mix(in srgb, rgb(41, 36, 51) 65%, transparent) linear-gradient(rgb(41, 36, 51), color-mix(in srgb, rgb(41, 36, 51) 65%, transparent));
  --ribbon-background: rgb(84, 75, 104);
  --ribbon-background-collapsed: rgb(41, 36, 51);
  --search-clear-button-color: rgb(225, 210, 254);
  --search-icon-color: rgb(225, 210, 254);
  --search-result-background: rgb(41, 36, 51);
  --secondary: var(--text-accent);
  --setting-group-heading-color: rgb(241, 235, 255);
  --setting-items-background: rgb(53, 47, 66);
  --setting-items-border-color: rgb(84, 75, 104);
  --slider-track-background: rgb(84, 75, 104);
  --status-bar-background: rgb(84, 75, 104);
  --status-bar-border-color: rgb(84, 75, 104);
  --status-bar-text-color: rgb(225, 210, 254);
  --suggestion-background: rgb(41, 36, 51);
  --tab-background-active: rgb(41, 36, 51);
  --tab-container-background: rgb(84, 75, 104);
  --tab-outline-color: rgb(84, 75, 104);
  --tab-switcher-background: rgb(84, 75, 104);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(84, 75, 104), transparent);
  --tab-text-color: rgb(208, 185, 254);
  --tab-text-color-active: rgb(225, 210, 254);
  --tab-text-color-focused: rgb(225, 210, 254);
  --tab-text-color-focused-active: rgb(225, 210, 254);
  --tab-text-color-focused-active-current: rgb(241, 235, 255);
  --tab-text-color-focused-highlighted: rgb(131, 81, 230);
  --table-add-button-border-color: rgb(84, 75, 104);
  --table-border-color: rgb(84, 75, 104);
  --table-drag-handle-background-active: rgb(207, 136, 74);
  --table-drag-handle-color: rgb(208, 185, 254);
  --table-drag-handle-color-active: rgb(251, 250, 249);
  --table-header-border-color: rgb(84, 75, 104);
  --table-header-color: rgb(241, 235, 255);
  --table-selection-border-color: rgb(207, 136, 74);
  --tag-color: rgb(131, 81, 230);
  --tag-color-hover: rgb(131, 81, 230);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(131, 81, 230);
  --text-accent-hover: rgb(145, 99, 238);
  --text-faint: rgb(208, 185, 254);
  --text-highlight-bg: rgb(207, 136, 74);
  --text-muted: rgb(225, 210, 254);
  --text-normal: rgb(241, 235, 255);
  --text-on-accent: rgb(251, 250, 249);
  --text-selection: rgba(131, 81, 230, 0.25);
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: rgb(84, 75, 104);
  --titlebar-background-focused: rgb(53, 47, 66);
  --titlebar-border-color: rgb(84, 75, 104);
  --titlebar-text-color: rgb(225, 210, 254);
  --titlebar-text-color-focused: rgb(241, 235, 255);
  --uno: 260;
  --vault-profile-color: rgb(241, 235, 255);
  --vault-profile-color-hover: rgb(241, 235, 255);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(41, 36, 51);
  color: rgb(241, 235, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(84, 75, 104);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

body div#quartz-root {
  background-color: rgb(41, 36, 51);
  color: rgb(241, 235, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body .page article p > em, em {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body .page article p > i, i {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body .page article p > strong, strong {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body .text-highlight {
  background-color: rgb(207, 136, 74);
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body del {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: line-through rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body p {
  color: rgb(225, 210, 254);
  outline: rgb(225, 210, 254) none 0px;
  text-decoration: rgb(225, 210, 254);
  text-decoration-color: rgb(225, 210, 254);
}`,
    links: `body a.external, footer a {
  color: rgb(207, 136, 74);
  outline: rgb(207, 136, 74) none 0px;
  text-decoration: underline rgb(207, 136, 74);
  text-decoration-color: rgb(207, 136, 74);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(131, 81, 230);
  outline: rgb(131, 81, 230) none 0px;
  text-decoration: underline rgb(131, 81, 230);
  text-decoration-color: rgb(131, 81, 230);
}

body a.internal.broken {
  color: rgb(131, 81, 230);
  outline: rgb(131, 81, 230) none 0px;
}`,
    lists: `body dd {
  color: rgb(241, 235, 255);
}

body dt {
  color: rgb(241, 235, 255);
}

body ol > li {
  color: rgb(241, 235, 255);
}

body ol.overflow {
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body ul > li {
  color: rgb(241, 235, 255);
}

body ul.overflow {
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(208, 185, 254);
  text-decoration: rgb(208, 185, 254);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body table {
  color: rgb(241, 235, 255);
}

body td {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

body th {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(207, 136, 74);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(207, 136, 74);
  border-top-color: rgb(207, 136, 74);
  color: rgb(207, 136, 74);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}

body pre:has(> code) {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}`,
    images: `body audio {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body figcaption {
  color: rgb(241, 235, 255);
}

body figure {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body img {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body video {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
}

body .footnotes {
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

body .transclude {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(225, 210, 254);
  text-decoration: line-through rgb(225, 210, 254);
  text-decoration-color: rgb(225, 210, 254);
}

body input[type=checkbox] {
  border-bottom-color: rgb(208, 185, 254);
  border-left-color: rgb(208, 185, 254);
  border-right-color: rgb(208, 185, 254);
  border-top-color: rgb(208, 185, 254);
}

body li.task-list-item[data-task='!'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(41, 36, 51);
}

body .search > .search-container > .search-space > * {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(241, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(241, 235, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(241, 235, 255);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(241, 235, 255);
}

body a.internal.tag-link::before {
  color: rgb(131, 81, 230);
}

body h1 {
  color: rgb(131, 81, 230);
}

body h2 {
  color: rgb(145, 99, 238);
}

body h2.page-title, h2.page-title a {
  color: rgb(241, 235, 255);
}

body h3 {
  color: rgb(160, 117, 245);
}

body h4 {
  color: rgb(174, 134, 253);
}

body h5 {
  color: rgb(191, 160, 254);
}

body h6 {
  color: rgb(208, 185, 254);
}

body hr {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

body ::-webkit-scrollbar-corner {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

body ::-webkit-scrollbar-track {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}`,
    footer: `body footer {
  background-color: rgb(84, 75, 104);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(225, 210, 254);
}

body footer ul li a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(241, 235, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(225, 210, 254);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body li.section-li > .section .meta {
  color: rgb(225, 210, 254);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

body ul.section-ul {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

body .darkmode svg {
  color: rgb(225, 210, 254);
  stroke: rgb(225, 210, 254);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

body .breadcrumb-element p {
  color: rgb(208, 185, 254);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

body .metadata {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(225, 210, 254);
}

body .metadata-properties {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

body .navigation-progress {
  background-color: rgb(84, 75, 104);
}

body .page-header h2.page-title {
  color: rgb(241, 235, 255);
}

body abbr {
  color: rgb(241, 235, 255);
  text-decoration: underline dotted rgb(241, 235, 255);
}

body details {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body input[type=text] {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

body kbd {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

body progress {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

body sub {
  color: rgb(241, 235, 255);
}

body summary {
  color: rgb(241, 235, 255);
}

body sup {
  color: rgb(241, 235, 255);
}`,
  },
  light: {},
};
