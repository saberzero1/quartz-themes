import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "base2tone", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --D0-rgb: 207,136,74 !important;
  --background-accent: rgb(109, 99, 131) !important;
  --background-modifier-border: rgb(84, 75, 104) !important;
  --background-primary: rgb(41, 36, 51) !important;
  --background-primary-alt: rgb(53, 47, 66) !important;
  --background-secondary: rgb(84, 75, 104) !important;
  --background-secondary-alt: rgb(53, 47, 66) !important;
  --baseA0: rgb(41, 36, 51) !important;
  --baseA1: rgb(53, 47, 66) !important;
  --baseA2: rgb(84, 75, 104) !important;
  --baseA3: rgb(97, 87, 117) !important;
  --baseA4: rgb(109, 99, 131) !important;
  --baseA5: rgb(130, 120, 151) !important;
  --baseA6: rgb(152, 144, 167) !important;
  --baseA7: rgb(173, 167, 185) !important;
  --baseB0: rgb(131, 81, 230) !important;
  --baseB1: rgb(145, 99, 238) !important;
  --baseB2: rgb(160, 117, 245) !important;
  --baseB3: rgb(174, 134, 253) !important;
  --baseB4: rgb(191, 160, 254) !important;
  --baseB5: rgb(208, 185, 254) !important;
  --baseB6: rgb(225, 210, 254) !important;
  --baseB7: rgb(241, 235, 255) !important;
  --baseC0: rgb(122, 117, 113) !important;
  --baseC1: rgb(141, 135, 129) !important;
  --baseC2: rgb(159, 153, 147) !important;
  --baseC3: rgb(176, 171, 166) !important;
  --baseC4: rgb(194, 188, 183) !important;
  --baseC5: rgb(215, 209, 203) !important;
  --baseC6: rgb(234, 229, 225) !important;
  --baseC7: rgb(251, 250, 249) !important;
  --baseD0: rgb(207, 136, 74) !important;
  --baseD1: rgb(217, 149, 89) !important;
  --baseD2: rgb(237, 161, 94) !important;
  --baseD3: rgb(243, 169, 104) !important;
  --baseD4: rgb(248, 177, 114) !important;
  --baseD5: rgb(252, 187, 131) !important;
  --baseD6: rgb(255, 201, 153) !important;
  --baseD7: rgb(255, 214, 179) !important;
  --bases-cards-background: rgb(41, 36, 51) !important;
  --bases-cards-cover-background: rgb(53, 47, 66) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(84, 75, 104) !important;
  --bases-embed-border-color: rgb(84, 75, 104) !important;
  --bases-group-heading-property-color: rgb(225, 210, 254) !important;
  --bases-table-border-color: rgb(84, 75, 104) !important;
  --bases-table-cell-background-active: rgb(41, 36, 51) !important;
  --bases-table-cell-background-disabled: rgb(53, 47, 66) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(207, 136, 74) !important;
  --bases-table-group-background: rgb(53, 47, 66) !important;
  --bases-table-header-background: rgb(41, 36, 51) !important;
  --bases-table-header-color: rgb(225, 210, 254) !important;
  --bases-table-summary-background: rgb(41, 36, 51) !important;
  --blockquote-border-color: rgb(207, 136, 74) !important;
  --blur-background: color-mix(in srgb, rgb(41, 36, 51) 65%, transparent) linear-gradient(rgb(41, 36, 51), color-mix(in srgb, rgb(41, 36, 51) 65%, transparent)) !important;
  --bullet: rgb(207, 136, 74) !important;
  --canvas-background: rgb(41, 36, 51) !important;
  --canvas-card-label-color: rgb(208, 185, 254) !important;
  --caret-color: rgb(241, 235, 255) !important;
  --checkbox-border-color: rgb(208, 185, 254) !important;
  --checkbox-border-color-hover: rgb(225, 210, 254) !important;
  --checkbox-color: rgb(207, 136, 74) !important;
  --checkbox-color-hover: rgb(217, 149, 89) !important;
  --checkbox-marker-color: rgb(41, 36, 51) !important;
  --checklist-done-color: rgb(225, 210, 254) !important;
  --code-background: rgb(53, 47, 66) !important;
  --code-border-color: rgb(84, 75, 104) !important;
  --code-comment: rgb(208, 185, 254) !important;
  --code-normal: rgb(241, 235, 255) !important;
  --code-punctuation: rgb(225, 210, 254) !important;
  --collapse-icon-color: rgb(208, 185, 254) !important;
  --collapse-icon-color-collapsed: rgb(131, 81, 230) !important;
  --dark: rgb(241, 235, 255) !important;
  --darkgray: rgb(241, 235, 255) !important;
  --divider-color: rgb(84, 75, 104) !important;
  --divider-color-hover: rgb(207, 136, 74) !important;
  --dropdown-background: rgb(41, 36, 51) !important;
  --dropdown-background-hover: rgb(207, 136, 74) !important;
  --duo: 28 !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(84, 75, 104), inset 0 0 0 1px rgb(84, 75, 104) !important;
  --embed-border-start: 2px solid rgb(207, 136, 74) !important;
  --file-header-background: rgb(41, 36, 51) !important;
  --file-header-background-focused: rgb(41, 36, 51) !important;
  --flair-background: rgb(41, 36, 51) !important;
  --flair-color: rgb(241, 235, 255) !important;
  --footnote-divider-color: rgb(84, 75, 104) !important;
  --footnote-id-color: rgb(225, 210, 254) !important;
  --footnote-id-color-no-occurrences: rgb(208, 185, 254) !important;
  --graph-node: rgb(225, 210, 254) !important;
  --graph-node-focused: rgb(131, 81, 230) !important;
  --graph-node-unresolved: rgb(208, 185, 254) !important;
  --graph-text: rgb(241, 235, 255) !important;
  --gray: rgb(225, 210, 254) !important;
  --heading-formatting: rgb(208, 185, 254) !important;
  --highlight: rgb(207, 136, 74) !important;
  --hr-color: rgb(84, 75, 104) !important;
  --icon-color: rgb(225, 210, 254) !important;
  --icon-color-active: rgb(131, 81, 230) !important;
  --icon-color-focused: rgb(241, 235, 255) !important;
  --icon-color-hover: rgb(225, 210, 254) !important;
  --inline-code: rgb(207, 136, 74) !important;
  --input-date-separator: rgb(208, 185, 254) !important;
  --input-placeholder-color: rgb(208, 185, 254) !important;
  --interactive-accent: rgb(207, 136, 74) !important;
  --interactive-accent-hover: rgb(217, 149, 89) !important;
  --interactive-accent-rgb: 207,136,74 !important;
  --interactive-hover: rgb(207, 136, 74) !important;
  --interactive-normal: rgb(41, 36, 51) !important;
  --light: rgb(41, 36, 51) !important;
  --lightgray: rgb(84, 75, 104) !important;
  --link-color: rgb(131, 81, 230) !important;
  --link-color-hover: rgb(145, 99, 238) !important;
  --link-external: rgb(207, 136, 74) !important;
  --link-external-color: rgb(131, 81, 230) !important;
  --link-external-color-hover: rgb(145, 99, 238) !important;
  --link-internal: rgb(248, 177, 114) !important;
  --link-unresolved-color: rgb(131, 81, 230) !important;
  --list-marker-color: rgb(208, 185, 254) !important;
  --list-marker-color-collapsed: rgb(131, 81, 230) !important;
  --list-marker-color-hover: rgb(225, 210, 254) !important;
  --menu-background: rgb(84, 75, 104) !important;
  --metadata-border-color: rgb(84, 75, 104) !important;
  --metadata-divider-color: rgb(84, 75, 104) !important;
  --metadata-input-text-color: rgb(241, 235, 255) !important;
  --metadata-label-text-color: rgb(225, 210, 254) !important;
  --metadata-label-text-color-hover: rgb(225, 210, 254) !important;
  --modal-background: rgb(41, 36, 51) !important;
  --nav-collapse-icon-color: rgb(208, 185, 254) !important;
  --nav-collapse-icon-color-collapsed: rgb(208, 185, 254) !important;
  --nav-heading-color: rgb(241, 235, 255) !important;
  --nav-heading-color-collapsed: rgb(208, 185, 254) !important;
  --nav-heading-color-collapsed-hover: rgb(225, 210, 254) !important;
  --nav-heading-color-hover: rgb(241, 235, 255) !important;
  --nav-item-color: rgb(225, 210, 254) !important;
  --nav-item-color-active: rgb(241, 235, 255) !important;
  --nav-item-color-highlighted: rgb(131, 81, 230) !important;
  --nav-item-color-hover: rgb(241, 235, 255) !important;
  --nav-item-color-selected: rgb(241, 235, 255) !important;
  --nav-tag-color: rgb(208, 185, 254) !important;
  --nav-tag-color-active: rgb(225, 210, 254) !important;
  --nav-tag-color-hover: rgb(225, 210, 254) !important;
  --operators: rgb(97, 87, 117) !important;
  --pdf-background: rgb(41, 36, 51) !important;
  --pdf-page-background: rgb(41, 36, 51) !important;
  --pdf-shadow: 0 0 0 1px rgb(84, 75, 104) !important;
  --pdf-sidebar-background: rgb(41, 36, 51) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(84, 75, 104) !important;
  --pill-border-color: rgb(84, 75, 104) !important;
  --pill-color: rgb(225, 210, 254) !important;
  --pill-color-hover: rgb(241, 235, 255) !important;
  --pill-color-remove: rgb(208, 185, 254) !important;
  --pill-color-remove-hover: rgb(131, 81, 230) !important;
  --prompt-background: rgb(41, 36, 51) !important;
  --raised-background: color-mix(in srgb, rgb(41, 36, 51) 65%, transparent) linear-gradient(rgb(41, 36, 51), color-mix(in srgb, rgb(41, 36, 51) 65%, transparent)) !important;
  --ribbon-background: rgb(84, 75, 104) !important;
  --ribbon-background-collapsed: rgb(41, 36, 51) !important;
  --search-clear-button-color: rgb(225, 210, 254) !important;
  --search-icon-color: rgb(225, 210, 254) !important;
  --search-result-background: rgb(41, 36, 51) !important;
  --secondary: rgb(131, 81, 230) !important;
  --setting-group-heading-color: rgb(241, 235, 255) !important;
  --setting-items-background: rgb(53, 47, 66) !important;
  --setting-items-border-color: rgb(84, 75, 104) !important;
  --slider-track-background: rgb(84, 75, 104) !important;
  --status-bar-background: rgb(84, 75, 104) !important;
  --status-bar-border-color: rgb(84, 75, 104) !important;
  --status-bar-text-color: rgb(225, 210, 254) !important;
  --suggestion-background: rgb(41, 36, 51) !important;
  --tab-background-active: rgb(41, 36, 51) !important;
  --tab-container-background: rgb(84, 75, 104) !important;
  --tab-outline-color: rgb(84, 75, 104) !important;
  --tab-switcher-background: rgb(84, 75, 104) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(84, 75, 104), transparent) !important;
  --tab-text-color: rgb(208, 185, 254) !important;
  --tab-text-color-active: rgb(225, 210, 254) !important;
  --tab-text-color-focused: rgb(225, 210, 254) !important;
  --tab-text-color-focused-active: rgb(225, 210, 254) !important;
  --tab-text-color-focused-active-current: rgb(241, 235, 255) !important;
  --tab-text-color-focused-highlighted: rgb(131, 81, 230) !important;
  --table-add-button-border-color: rgb(84, 75, 104) !important;
  --table-border-color: rgb(84, 75, 104) !important;
  --table-drag-handle-background-active: rgb(207, 136, 74) !important;
  --table-drag-handle-color: rgb(208, 185, 254) !important;
  --table-drag-handle-color-active: rgb(251, 250, 249) !important;
  --table-header-border-color: rgb(84, 75, 104) !important;
  --table-header-color: rgb(241, 235, 255) !important;
  --table-selection-border-color: rgb(207, 136, 74) !important;
  --tag-color: rgb(131, 81, 230) !important;
  --tag-color-hover: rgb(131, 81, 230) !important;
  --tertiary: rgb(145, 99, 238) !important;
  --text-accent: rgb(131, 81, 230) !important;
  --text-accent-hover: rgb(145, 99, 238) !important;
  --text-faint: rgb(208, 185, 254) !important;
  --text-highlight-bg: rgb(207, 136, 74) !important;
  --text-muted: rgb(225, 210, 254) !important;
  --text-normal: rgb(241, 235, 255) !important;
  --text-on-accent: rgb(251, 250, 249) !important;
  --text-selection: rgba(131, 81, 230, 0.25) !important;
  --textHighlight: rgb(207, 136, 74) !important;
  --titlebar-background: rgb(84, 75, 104) !important;
  --titlebar-background-focused: rgb(53, 47, 66) !important;
  --titlebar-border-color: rgb(84, 75, 104) !important;
  --titlebar-text-color: rgb(225, 210, 254) !important;
  --titlebar-text-color-focused: rgb(241, 235, 255) !important;
  --uno: 260 !important;
  --vault-profile-color: rgb(241, 235, 255) !important;
  --vault-profile-color-hover: rgb(241, 235, 255) !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(41, 36, 51);
  color: rgb(241, 235, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(84, 75, 104);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body div#quartz-root {
  background-color: rgb(41, 36, 51);
  color: rgb(241, 235, 255);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body .page article p > em, em {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body .page article p > i, i {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body .page article p > strong, strong {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body .text-highlight {
  background-color: rgb(207, 136, 74);
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body del {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: line-through rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body p {
  color: rgb(225, 210, 254);
  outline: rgb(225, 210, 254) none 0px;
  text-decoration: rgb(225, 210, 254);
  text-decoration-color: rgb(225, 210, 254);
}`,
    links: `html body a.external, footer a {
  color: rgb(207, 136, 74);
  outline: rgb(207, 136, 74) none 0px;
  text-decoration: underline rgb(207, 136, 74);
  text-decoration-color: rgb(207, 136, 74);
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(131, 81, 230);
  outline: rgb(131, 81, 230) none 0px;
  text-decoration: underline rgb(131, 81, 230);
  text-decoration-color: rgb(131, 81, 230);
}

html body a.internal.broken {
  color: rgb(131, 81, 230);
  outline: rgb(131, 81, 230) none 0px;
}`,
    lists: `html body dd {
  color: rgb(241, 235, 255);
}

html body dt {
  color: rgb(241, 235, 255);
}

html body ol > li {
  color: rgb(241, 235, 255);
}

html body ol.overflow {
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body ul > li {
  color: rgb(241, 235, 255);
}

html body ul.overflow {
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(208, 185, 254);
  text-decoration: rgb(208, 185, 254);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body table {
  color: rgb(241, 235, 255);
}

html body td {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body th {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(207, 136, 74);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(207, 136, 74);
  border-top-color: rgb(207, 136, 74);
  color: rgb(207, 136, 74);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body pre > code, pre:has(> code) {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}

html body pre:has(> code) {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
}`,
    images: `html body audio {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body figcaption {
  color: rgb(241, 235, 255);
}

html body figure {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body img {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body video {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
}

html body .footnotes {
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .transclude {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(207, 136, 74);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(225, 210, 254);
  text-decoration: line-through rgb(225, 210, 254);
  text-decoration-color: rgb(225, 210, 254);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(208, 185, 254);
  border-left-color: rgb(208, 185, 254);
  border-right-color: rgb(208, 185, 254);
  border-top-color: rgb(208, 185, 254);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(241, 235, 255);
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(41, 36, 51);
}

html body .search > .search-container > .search-space > * {
  color: rgb(241, 235, 255);
  outline: rgb(241, 235, 255) none 0px;
  text-decoration: rgb(241, 235, 255);
  text-decoration-color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(241, 235, 255);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(241, 235, 255);
}

html body a.internal.tag-link::before {
  color: rgb(131, 81, 230);
}

html body h1 {
  color: rgb(131, 81, 230);
}

html body h2 {
  color: rgb(145, 99, 238);
}

html body h2.page-title, h2.page-title a {
  color: rgb(241, 235, 255);
}

html body h3 {
  color: rgb(160, 117, 245);
}

html body h4 {
  color: rgb(174, 134, 253);
}

html body h5 {
  color: rgb(191, 160, 254);
}

html body h6 {
  color: rgb(208, 185, 254);
}

html body hr {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}

html body ::-webkit-scrollbar-track {
  background: rgb(41, 36, 51) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(41, 36, 51);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}`,
    footer: `html body footer {
  background-color: rgb(84, 75, 104);
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(225, 210, 254);
}

html body footer ul li a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(241, 235, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(225, 210, 254);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body li.section-li > .section .meta {
  color: rgb(225, 210, 254);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(225, 210, 254);
  text-decoration: rgb(225, 210, 254);
}

html body ul.section-ul {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body .darkmode svg {
  color: rgb(225, 210, 254);
  stroke: rgb(225, 210, 254);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body .breadcrumb-element p {
  color: rgb(208, 185, 254);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body .metadata {
  border-bottom-color: rgb(84, 75, 104);
  border-left-color: rgb(84, 75, 104);
  border-right-color: rgb(84, 75, 104);
  border-top-color: rgb(84, 75, 104);
  color: rgb(225, 210, 254);
}

html body .metadata-properties {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body .navigation-progress {
  background-color: rgb(84, 75, 104);
}

html body .page-header h2.page-title {
  color: rgb(241, 235, 255);
}

html body abbr {
  color: rgb(241, 235, 255);
  text-decoration: underline dotted rgb(241, 235, 255);
}

html body details {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body input[type=text] {
  border-bottom-color: rgb(225, 210, 254);
  border-left-color: rgb(225, 210, 254);
  border-right-color: rgb(225, 210, 254);
  border-top-color: rgb(225, 210, 254);
  color: rgb(225, 210, 254);
}

html body kbd {
  background-color: rgb(53, 47, 66);
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
  color: rgb(241, 235, 255);
}

html body progress {
  border-bottom-color: rgb(241, 235, 255);
  border-left-color: rgb(241, 235, 255);
  border-right-color: rgb(241, 235, 255);
  border-top-color: rgb(241, 235, 255);
}

html body sub {
  color: rgb(241, 235, 255);
}

html body summary {
  color: rgb(241, 235, 255);
}

html body sup {
  color: rgb(241, 235, 255);
}`,
  },
  light: {},
};
