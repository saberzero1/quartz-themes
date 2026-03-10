import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dunite", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 79 !important;
  --accent-l: 40% !important;
  --accent-s: 25% !important;
  --background-modifier-active-hover: rgba(111, 128, 77, 0.1) !important;
  --background-modifier-border: #57543f !important;
  --background-modifier-border-focus: #636049 !important;
  --background-modifier-border-hover: #636049 !important;
  --background-modifier-form-field: #3f3d2f !important;
  --background-modifier-form-field-hover: #3f3d2f !important;
  --background-primary: #161511 !important;
  --background-primary-alt: #3f3d2f !important;
  --background-secondary: #302a1d !important;
  --background-secondary-alt: #57543f !important;
  --bases-cards-background: #161511 !important;
  --bases-cards-cover-background: #3f3d2f !important;
  --bases-cards-shadow: 0 0 0 1px #57543f !important;
  --bases-cards-shadow-hover: 0 0 0 1px #636049 !important;
  --bases-embed-border-color: #57543f !important;
  --bases-group-heading-property-color: #fcfbf1 !important;
  --bases-table-border-color: #57543f !important;
  --bases-table-cell-background-active: #161511 !important;
  --bases-table-cell-background-disabled: #3f3d2f !important;
  --bases-table-cell-background-selected: rgba(111, 128, 77, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #636049 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(111, 128, 77) !important;
  --bases-table-group-background: #3f3d2f !important;
  --bases-table-header-background: #161511 !important;
  --bases-table-header-color: #fcfbf1 !important;
  --bases-table-summary-background: #161511 !important;
  --blockquote-border-color: rgb(111, 128, 77) !important;
  --blur-background: color-mix(in srgb, #57543f 65%, transparent) linear-gradient(#57543f, color-mix(in srgb, #57543f 65%, transparent)) !important;
  --canvas-background: #161511 !important;
  --canvas-card-label-color: #777357 !important;
  --canvas-dot-pattern: #57543f !important;
  --caret-color: #fcfbf1 !important;
  --checkbox-border-color: #777357 !important;
  --checkbox-border-color-hover: #fcfbf1 !important;
  --checkbox-color: rgb(111, 128, 77) !important;
  --checkbox-color-hover: rgb(97, 109, 64) !important;
  --checkbox-marker-color: #161511 !important;
  --checklist-done-color: #fcfbf1 !important;
  --code-background: #3f3d2f !important;
  --code-border-color: #57543f !important;
  --code-comment: #777357 !important;
  --code-normal: #fcfbf1 !important;
  --code-punctuation: #fcfbf1 !important;
  --collapse-icon-color: #777357 !important;
  --collapse-icon-color-collapsed: rgb(97, 109, 64) !important;
  --color-accent: rgb(111, 128, 77) !important;
  --color-accent-1: rgb(97, 109, 64) !important;
  --color-accent-2: rgb(150, 164, 101) !important;
  --color-accent-hsl: 79,
			25%,
			40% !important;
  --color-base-00: #161511 !important;
  --color-base-05: #302a1d !important;
  --color-base-10: #3f3d2f !important;
  --color-base-100: #fcfbf1 !important;
  --color-base-20: #302a1d !important;
  --color-base-25: #3f3d2f !important;
  --color-base-30: #57543f !important;
  --color-base-35: #636049 !important;
  --color-base-40: #636049 !important;
  --color-base-50: #777357 !important;
  --color-base-60: #a89366 !important;
  --color-base-70: #fcfbf1 !important;
  --dark: #fcfbf1 !important;
  --darkgray: #fcfbf1 !important;
  --divider-color: #57543f !important;
  --divider-color-hover: rgb(111, 128, 77) !important;
  --dropdown-background: #57543f !important;
  --dropdown-background-hover: #636049 !important;
  --embed-block-shadow-hover: 0 0 0 1px #57543f, inset 0 0 0 1px #57543f !important;
  --embed-border-start: 2px solid rgb(111, 128, 77) !important;
  --file-header-background: #161511 !important;
  --file-header-background-focused: #161511 !important;
  --flair-background: #57543f !important;
  --flair-color: #fcfbf1 !important;
  --footnote-divider-color: #57543f !important;
  --footnote-id-color: #fcfbf1 !important;
  --footnote-id-color-no-occurrences: #777357 !important;
  --graph-line: #636049 !important;
  --graph-node: #fcfbf1 !important;
  --graph-node-focused: rgb(97, 109, 64) !important;
  --graph-node-unresolved: #777357 !important;
  --graph-text: #fcfbf1 !important;
  --gray: #fcfbf1 !important;
  --heading-formatting: #777357 !important;
  --highlight: rgba(111, 128, 77, 0.1) !important;
  --hr-color: #57543f !important;
  --icon-color: #fcfbf1 !important;
  --icon-color-active: rgb(97, 109, 64) !important;
  --icon-color-focused: #fcfbf1 !important;
  --icon-color-hover: #fcfbf1 !important;
  --input-date-separator: #777357 !important;
  --input-placeholder-color: #777357 !important;
  --interactive-accent: rgb(111, 128, 77) !important;
  --interactive-accent-hover: rgb(97, 109, 64) !important;
  --interactive-accent-hsl: 79,
			25%,
			40% !important;
  --interactive-hover: #636049 !important;
  --interactive-normal: #57543f !important;
  --light: #161511 !important;
  --lightgray: #302a1d !important;
  --link-color: rgb(97, 109, 64) !important;
  --link-color-hover: rgb(150, 164, 101) !important;
  --link-external-color: rgb(97, 109, 64) !important;
  --link-external-color-hover: rgb(150, 164, 101) !important;
  --link-unresolved-color: rgb(97, 109, 64) !important;
  --link-unresolved-decoration-color: rgba(111, 128, 77, 0.3) !important;
  --list-marker-color: #777357 !important;
  --list-marker-color-collapsed: rgb(97, 109, 64) !important;
  --list-marker-color-hover: #fcfbf1 !important;
  --menu-background: #302a1d !important;
  --menu-border-color: #636049 !important;
  --metadata-border-color: #57543f !important;
  --metadata-divider-color: #57543f !important;
  --metadata-input-text-color: #fcfbf1 !important;
  --metadata-label-text-color: #fcfbf1 !important;
  --metadata-label-text-color-hover: #fcfbf1 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #636049 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #636049 !important;
  --modal-background: #161511 !important;
  --modal-border-color: #636049 !important;
  --nav-collapse-icon-color: #777357 !important;
  --nav-collapse-icon-color-collapsed: #777357 !important;
  --nav-heading-color: #fcfbf1 !important;
  --nav-heading-color-collapsed: #777357 !important;
  --nav-heading-color-collapsed-hover: #fcfbf1 !important;
  --nav-heading-color-hover: #fcfbf1 !important;
  --nav-item-background-selected: rgba(111, 128, 77, 0.15) !important;
  --nav-item-color: #fcfbf1 !important;
  --nav-item-color-active: #fcfbf1 !important;
  --nav-item-color-highlighted: rgb(97, 109, 64) !important;
  --nav-item-color-hover: #fcfbf1 !important;
  --nav-item-color-selected: #fcfbf1 !important;
  --nav-tag-color: #777357 !important;
  --nav-tag-color-active: #fcfbf1 !important;
  --nav-tag-color-hover: #fcfbf1 !important;
  --pdf-background: #161511 !important;
  --pdf-page-background: #161511 !important;
  --pdf-shadow: 0 0 0 1px #57543f !important;
  --pdf-sidebar-background: #161511 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #57543f !important;
  --pill-border-color: #57543f !important;
  --pill-border-color-hover: #636049 !important;
  --pill-color: #fcfbf1 !important;
  --pill-color-hover: #fcfbf1 !important;
  --pill-color-remove: #777357 !important;
  --pill-color-remove-hover: rgb(97, 109, 64) !important;
  --prompt-background: #161511 !important;
  --prompt-border-color: #636049 !important;
  --raised-background: color-mix(in srgb, #57543f 65%, transparent) linear-gradient(#57543f, color-mix(in srgb, #57543f 65%, transparent)) !important;
  --ribbon-background: #302a1d !important;
  --ribbon-background-collapsed: #161511 !important;
  --search-clear-button-color: #fcfbf1 !important;
  --search-icon-color: #fcfbf1 !important;
  --search-result-background: #161511 !important;
  --secondary: rgb(97, 109, 64) !important;
  --setting-group-heading-color: #fcfbf1 !important;
  --setting-items-background: #3f3d2f !important;
  --setting-items-border-color: #57543f !important;
  --slider-thumb-border-color: #636049 !important;
  --slider-track-background: #57543f !important;
  --status-bar-background: #302a1d !important;
  --status-bar-border-color: #57543f !important;
  --status-bar-text-color: #fcfbf1 !important;
  --suggestion-background: #161511 !important;
  --tab-background-active: #161511 !important;
  --tab-container-background: #302a1d !important;
  --tab-divider-color: #636049 !important;
  --tab-outline-color: #57543f !important;
  --tab-switcher-background: #302a1d !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #302a1d, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(111, 128, 77) !important;
  --tab-text-color: #777357 !important;
  --tab-text-color-active: #fcfbf1 !important;
  --tab-text-color-focused: #fcfbf1 !important;
  --tab-text-color-focused-active: #fcfbf1 !important;
  --tab-text-color-focused-active-current: #fcfbf1 !important;
  --tab-text-color-focused-highlighted: rgb(97, 109, 64) !important;
  --table-add-button-border-color: #57543f !important;
  --table-border-color: #57543f !important;
  --table-drag-handle-background-active: rgb(111, 128, 77) !important;
  --table-drag-handle-color: #777357 !important;
  --table-drag-handle-color-active: #fcfbf1 !important;
  --table-header-border-color: #57543f !important;
  --table-header-color: #fcfbf1 !important;
  --table-selection: rgba(111, 128, 77, 0.1) !important;
  --table-selection-border-color: rgb(111, 128, 77) !important;
  --tag-background: rgba(111, 128, 77, 0.1) !important;
  --tag-background-hover: rgba(111, 128, 77, 0.2) !important;
  --tag-border-color: rgba(111, 128, 77, 0.15) !important;
  --tag-border-color-hover: rgba(111, 128, 77, 0.15) !important;
  --tag-color: rgb(97, 109, 64) !important;
  --tag-color-hover: rgb(97, 109, 64) !important;
  --tertiary: rgb(150, 164, 101) !important;
  --text-accent: rgb(97, 109, 64) !important;
  --text-accent-hover: rgb(150, 164, 101) !important;
  --text-faint: #777357 !important;
  --text-muted: #fcfbf1 !important;
  --text-normal: #fcfbf1 !important;
  --text-on-accent: #fcfbf1 !important;
  --text-on-accent-inverted: #3f3d2f !important;
  --text-selection: rgba(111, 128, 77, 0.33) !important;
  --textHighlight: rgba(111, 128, 77, 0.1) !important;
  --titlebar-background: #302a1d !important;
  --titlebar-background-focused: #57543f !important;
  --titlebar-border-color: #57543f !important;
  --titlebar-text-color: #fcfbf1 !important;
  --titlebar-text-color-focused: #fcfbf1 !important;
  --vault-profile-color: #fcfbf1 !important;
  --vault-profile-color-hover: #fcfbf1 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(48, 42, 29);
  color: rgb(252, 251, 241);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(22, 21, 17);
  color: rgb(252, 251, 241);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(48, 42, 29);
  color: rgb(252, 251, 241);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(87, 84, 63);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(48, 42, 29);
  border-left-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}

body div#quartz-root {
  background-color: rgb(22, 21, 17);
  color: rgb(252, 251, 241);
}`,
    typography: `body .page article p > b, b {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body .page article p > em, em {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body .page article p > i, i {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body .page article p > strong, strong {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body .text-highlight {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body del {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: line-through rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body p {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}`,
    links: `body a.external, footer a {
  color: rgb(97, 109, 65);
  outline: rgb(97, 109, 65) none 0px;
  text-decoration: underline rgb(97, 109, 65);
  text-decoration-color: rgb(97, 109, 65);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(97, 109, 65);
  outline: rgb(97, 109, 65) none 0px;
  text-decoration: underline rgb(97, 109, 65);
  text-decoration-color: rgb(97, 109, 65);
}

body a.internal.broken {
  color: rgb(97, 109, 65);
  outline: rgb(97, 109, 65) none 0px;
  text-decoration: underline rgba(111, 128, 77, 0.3);
  text-decoration-color: rgba(111, 128, 77, 0.3);
}`,
    lists: `body dd {
  color: rgb(252, 251, 241);
}

body dt {
  color: rgb(252, 251, 241);
}

body ol > li {
  color: rgb(252, 251, 241);
}

body ol.overflow {
  background-color: rgb(22, 21, 17);
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body ul > li {
  color: rgb(252, 251, 241);
}

body ul.overflow {
  background-color: rgb(22, 21, 17);
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(119, 115, 87);
  text-decoration: rgb(119, 115, 87);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body table {
  color: rgb(252, 251, 241);
}

body td {
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}

body th {
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}`,
    code: `body code {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}

body pre > code, pre:has(> code) {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
}

body pre:has(> code) {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
}`,
    images: `body audio {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body figcaption {
  color: rgb(252, 251, 241);
}

body figure {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body img {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body video {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}`,
    embeds: `body .file-embed {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body .footnotes {
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .transclude {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(111, 128, 77);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body .transclude-inner {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(111, 128, 77);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(252, 251, 241);
  text-decoration: line-through rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body input[type=checkbox] {
  border-bottom-color: rgb(119, 115, 87);
  border-left-color: rgb(119, 115, 87);
  border-right-color: rgb(119, 115, 87);
  border-top-color: rgb(119, 115, 87);
}

body li.task-list-item[data-task='!'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='*'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='-'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='/'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='>'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='?'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='I'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='S'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='b'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='c'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='d'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='f'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='i'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='k'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='l'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='p'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='u'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body li.task-list-item[data-task='w'] {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}`,
    search: `body .search > .search-button {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}

body .search > .search-container > .search-space {
  background-color: rgb(22, 21, 17);
  border-bottom-color: rgb(99, 96, 73);
  border-left-color: rgb(99, 96, 73);
  border-right-color: rgb(99, 96, 73);
  border-top-color: rgb(99, 96, 73);
}

body .search > .search-container > .search-space > * {
  color: rgb(252, 251, 241);
  outline: rgb(252, 251, 241) none 0px;
  text-decoration: rgb(252, 251, 241);
  text-decoration-color: rgb(252, 251, 241);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(252, 251, 241);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(252, 251, 241);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(252, 251, 241);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(99, 96, 73);
  border-left-color: rgb(99, 96, 73);
  border-right-color: rgb(99, 96, 73);
  border-top-color: rgb(99, 96, 73);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(48, 42, 29);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(252, 251, 241);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(111, 128, 77, 0.1);
  border-bottom-color: rgba(111, 128, 77, 0.15);
  border-left-color: rgba(111, 128, 77, 0.15);
  border-right-color: rgba(111, 128, 77, 0.15);
  border-top-color: rgba(111, 128, 77, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(97, 109, 65);
}

body h1 {
  color: rgb(252, 251, 241);
}

body h2 {
  color: rgb(252, 251, 241);
}

body h2.page-title, h2.page-title a {
  color: rgb(252, 251, 241);
}

body h3 {
  color: rgb(252, 251, 241);
}

body h4 {
  color: rgb(252, 251, 241);
}

body h5 {
  color: rgb(252, 251, 241);
}

body h6 {
  color: rgb(252, 251, 241);
}

body hr {
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(22, 21, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 21, 17);
}

body ::-webkit-scrollbar-corner {
  background: rgb(22, 21, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 21, 17);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(22, 21, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 21, 17);
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 21, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 21, 17);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 21, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 21, 17);
}

body ::-webkit-scrollbar-track {
  background: rgb(22, 21, 17) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 21, 17);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}`,
    footer: `body footer {
  background-color: rgb(48, 42, 29);
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}

body footer ul li a {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(252, 251, 241);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(252, 251, 241);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body li.section-li > .section .meta {
  color: rgb(252, 251, 241);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(252, 251, 241);
  text-decoration: rgb(252, 251, 241);
}

body ul.section-ul {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .darkmode svg {
  color: rgb(252, 251, 241);
  stroke: rgb(252, 251, 241);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .breadcrumb-element p {
  color: rgb(119, 115, 87);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .metadata {
  border-bottom-color: rgb(87, 84, 63);
  border-left-color: rgb(87, 84, 63);
  border-right-color: rgb(87, 84, 63);
  border-top-color: rgb(87, 84, 63);
  color: rgb(252, 251, 241);
}

body .metadata-properties {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body .navigation-progress {
  background-color: rgb(48, 42, 29);
}

body .page-header h2.page-title {
  color: rgb(252, 251, 241);
}

body abbr {
  color: rgb(252, 251, 241);
  text-decoration: underline dotted rgb(252, 251, 241);
}

body details {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body input[type=text] {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body kbd {
  background-color: rgb(63, 61, 47);
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
  color: rgb(252, 251, 241);
}

body progress {
  border-bottom-color: rgb(252, 251, 241);
  border-left-color: rgb(252, 251, 241);
  border-right-color: rgb(252, 251, 241);
  border-top-color: rgb(252, 251, 241);
}

body sub {
  color: rgb(252, 251, 241);
}

body summary {
  color: rgb(252, 251, 241);
}

body sup {
  color: rgb(252, 251, 241);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 79 !important;
  --accent-l: 67% !important;
  --accent-s: 25% !important;
  --background-modifier-active-hover: rgba(179, 192, 150, 0.1) !important;
  --background-modifier-border: #989988 !important;
  --background-modifier-border-focus: #46473f !important;
  --background-modifier-border-hover: #46473f !important;
  --background-modifier-form-field: #fcfbf1 !important;
  --background-modifier-form-field-hover: #fcfbf1 !important;
  --background-primary: #fcfbf1 !important;
  --background-primary-alt: #f5f3e0 !important;
  --background-secondary: #e2e4cc !important;
  --background-secondary-alt: #f5f3e0 !important;
  --bases-cards-background: #fcfbf1 !important;
  --bases-cards-cover-background: #f5f3e0 !important;
  --bases-cards-shadow: 0 0 0 1px #989988 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #46473f !important;
  --bases-embed-border-color: #989988 !important;
  --bases-group-heading-property-color: #2e2c29 !important;
  --bases-table-border-color: #989988 !important;
  --bases-table-cell-background-active: #fcfbf1 !important;
  --bases-table-cell-background-disabled: #f5f3e0 !important;
  --bases-table-cell-background-selected: rgba(179, 192, 150, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #46473f !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(179, 192, 150) !important;
  --bases-table-group-background: #f5f3e0 !important;
  --bases-table-header-background: #fcfbf1 !important;
  --bases-table-header-color: #2e2c29 !important;
  --bases-table-summary-background: #fcfbf1 !important;
  --blockquote-border-color: rgb(179, 192, 150) !important;
  --blur-background: color-mix(in srgb, #fcfbf1 65%, transparent) linear-gradient(#fcfbf1, color-mix(in srgb, #fcfbf1 65%, transparent)) !important;
  --canvas-background: #fcfbf1 !important;
  --canvas-card-label-color: #46473f !important;
  --canvas-dot-pattern: #989988 !important;
  --caret-color: #161511 !important;
  --checkbox-border-color: #46473f !important;
  --checkbox-border-color-hover: #2e2c29 !important;
  --checkbox-color: rgb(179, 192, 150) !important;
  --checkbox-color-hover: rgb(159, 174, 117) !important;
  --checkbox-marker-color: #fcfbf1 !important;
  --checklist-done-color: #2e2c29 !important;
  --code-background: #f5f3e0 !important;
  --code-border-color: #989988 !important;
  --code-comment: #46473f !important;
  --code-normal: #161511 !important;
  --code-punctuation: #2e2c29 !important;
  --collapse-icon-color: #46473f !important;
  --collapse-icon-color-collapsed: rgb(179, 192, 150) !important;
  --color-accent: rgb(179, 192, 150) !important;
  --color-accent-1: rgb(159, 174, 117) !important;
  --color-accent-2: rgb(224, 229, 210) !important;
  --color-accent-hsl: 79,
			  25%,
			  67% !important;
  --color-base-00: #fcfbf1 !important;
  --color-base-05: #f5f3e0 !important;
  --color-base-10: #f5f3e0 !important;
  --color-base-100: #161511 !important;
  --color-base-20: #e2e4cc !important;
  --color-base-25: #46473f !important;
  --color-base-30: #989988 !important;
  --color-base-35: #46473f !important;
  --color-base-40: #46473f !important;
  --color-base-50: #46473f !important;
  --color-base-60: #373832 !important;
  --color-base-70: #2e2c29 !important;
  --dark: #161511 !important;
  --darkgray: #161511 !important;
  --divider-color: #989988 !important;
  --divider-color-hover: rgb(179, 192, 150) !important;
  --dropdown-background: #fcfbf1 !important;
  --dropdown-background-hover: #f5f3e0 !important;
  --embed-block-shadow-hover: 0 0 0 1px #989988, inset 0 0 0 1px #989988 !important;
  --embed-border-start: 2px solid rgb(179, 192, 150) !important;
  --file-header-background: #fcfbf1 !important;
  --file-header-background-focused: #fcfbf1 !important;
  --flair-background: #fcfbf1 !important;
  --flair-color: #161511 !important;
  --footnote-divider-color: #989988 !important;
  --footnote-id-color: #2e2c29 !important;
  --footnote-id-color-no-occurrences: #46473f !important;
  --graph-line: #46473f !important;
  --graph-node: #2e2c29 !important;
  --graph-node-focused: rgb(179, 192, 150) !important;
  --graph-node-unresolved: #46473f !important;
  --graph-text: #161511 !important;
  --gray: #2e2c29 !important;
  --heading-formatting: #46473f !important;
  --highlight: rgba(179, 192, 150, 0.1) !important;
  --hr-color: #989988 !important;
  --icon-color: #2e2c29 !important;
  --icon-color-active: rgb(179, 192, 150) !important;
  --icon-color-focused: #161511 !important;
  --icon-color-hover: #2e2c29 !important;
  --input-date-separator: #46473f !important;
  --input-placeholder-color: #46473f !important;
  --interactive-accent: rgb(179, 192, 150) !important;
  --interactive-accent-hover: rgb(159, 174, 117) !important;
  --interactive-accent-hsl: 79,
			  25%,
			  67% !important;
  --interactive-hover: #f5f3e0 !important;
  --interactive-normal: #fcfbf1 !important;
  --light: #fcfbf1 !important;
  --lightgray: #e2e4cc !important;
  --link-color: rgb(179, 192, 150) !important;
  --link-color-hover: rgb(224, 229, 210) !important;
  --link-external-color: rgb(179, 192, 150) !important;
  --link-external-color-hover: rgb(224, 229, 210) !important;
  --link-unresolved-color: rgb(179, 192, 150) !important;
  --link-unresolved-decoration-color: rgba(179, 192, 150, 0.3) !important;
  --list-marker-color: #46473f !important;
  --list-marker-color-collapsed: rgb(179, 192, 150) !important;
  --list-marker-color-hover: #2e2c29 !important;
  --menu-background: #e2e4cc !important;
  --menu-border-color: #46473f !important;
  --metadata-border-color: #989988 !important;
  --metadata-divider-color: #989988 !important;
  --metadata-input-text-color: #161511 !important;
  --metadata-label-text-color: #2e2c29 !important;
  --metadata-label-text-color-hover: #2e2c29 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #46473f !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #46473f !important;
  --modal-background: #fcfbf1 !important;
  --modal-border-color: #46473f !important;
  --nav-collapse-icon-color: #46473f !important;
  --nav-collapse-icon-color-collapsed: #46473f !important;
  --nav-heading-color: #161511 !important;
  --nav-heading-color-collapsed: #46473f !important;
  --nav-heading-color-collapsed-hover: #2e2c29 !important;
  --nav-heading-color-hover: #161511 !important;
  --nav-item-background-selected: rgba(179, 192, 150, 0.15) !important;
  --nav-item-color: #2e2c29 !important;
  --nav-item-color-active: #161511 !important;
  --nav-item-color-highlighted: rgb(179, 192, 150) !important;
  --nav-item-color-hover: #161511 !important;
  --nav-item-color-selected: #161511 !important;
  --nav-tag-color: #46473f !important;
  --nav-tag-color-active: #2e2c29 !important;
  --nav-tag-color-hover: #2e2c29 !important;
  --pdf-background: #fcfbf1 !important;
  --pdf-page-background: #fcfbf1 !important;
  --pdf-sidebar-background: #fcfbf1 !important;
  --pill-border-color: #989988 !important;
  --pill-border-color-hover: #46473f !important;
  --pill-color: #2e2c29 !important;
  --pill-color-hover: #161511 !important;
  --pill-color-remove: #46473f !important;
  --pill-color-remove-hover: rgb(179, 192, 150) !important;
  --prompt-background: #fcfbf1 !important;
  --prompt-border-color: #46473f !important;
  --raised-background: color-mix(in srgb, #fcfbf1 65%, transparent) linear-gradient(#fcfbf1, color-mix(in srgb, #fcfbf1 65%, transparent)) !important;
  --ribbon-background: #e2e4cc !important;
  --ribbon-background-collapsed: #fcfbf1 !important;
  --search-clear-button-color: #2e2c29 !important;
  --search-icon-color: #2e2c29 !important;
  --search-result-background: #fcfbf1 !important;
  --secondary: rgb(179, 192, 150) !important;
  --setting-group-heading-color: #161511 !important;
  --setting-items-background: #f5f3e0 !important;
  --setting-items-border-color: #989988 !important;
  --slider-thumb-border-color: #46473f !important;
  --slider-track-background: #989988 !important;
  --status-bar-background: #e2e4cc !important;
  --status-bar-border-color: #989988 !important;
  --status-bar-text-color: #2e2c29 !important;
  --suggestion-background: #fcfbf1 !important;
  --tab-background-active: #fcfbf1 !important;
  --tab-container-background: #e2e4cc !important;
  --tab-divider-color: #46473f !important;
  --tab-outline-color: #989988 !important;
  --tab-switcher-background: #e2e4cc !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e2e4cc, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(179, 192, 150) !important;
  --tab-text-color: #46473f !important;
  --tab-text-color-active: #2e2c29 !important;
  --tab-text-color-focused: #2e2c29 !important;
  --tab-text-color-focused-active: #2e2c29 !important;
  --tab-text-color-focused-active-current: #161511 !important;
  --tab-text-color-focused-highlighted: rgb(179, 192, 150) !important;
  --table-add-button-border-color: #989988 !important;
  --table-border-color: #989988 !important;
  --table-drag-handle-background-active: rgb(179, 192, 150) !important;
  --table-drag-handle-color: #46473f !important;
  --table-drag-handle-color-active: #161511 !important;
  --table-header-border-color: #989988 !important;
  --table-header-color: #161511 !important;
  --table-selection: rgba(179, 192, 150, 0.1) !important;
  --table-selection-border-color: rgb(179, 192, 150) !important;
  --tag-background: rgba(179, 192, 150, 0.1) !important;
  --tag-background-hover: rgba(179, 192, 150, 0.2) !important;
  --tag-border-color: rgba(179, 192, 150, 0.15) !important;
  --tag-border-color-hover: rgba(179, 192, 150, 0.15) !important;
  --tag-color: rgb(179, 192, 150) !important;
  --tag-color-hover: rgb(179, 192, 150) !important;
  --tertiary: rgb(224, 229, 210) !important;
  --text-accent: rgb(179, 192, 150) !important;
  --text-accent-hover: rgb(224, 229, 210) !important;
  --text-faint: #46473f !important;
  --text-muted: #2e2c29 !important;
  --text-normal: #161511 !important;
  --text-on-accent: #161511 !important;
  --text-on-accent-inverted: #f5f3e0 !important;
  --text-selection: rgba(179, 192, 150, 0.2) !important;
  --textHighlight: rgba(179, 192, 150, 0.1) !important;
  --titlebar-background: #e2e4cc !important;
  --titlebar-background-focused: #f5f3e0 !important;
  --titlebar-border-color: #989988 !important;
  --titlebar-text-color: #2e2c29 !important;
  --titlebar-text-color-focused: #161511 !important;
  --vault-profile-color: #161511 !important;
  --vault-profile-color-hover: #161511 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(226, 228, 204);
  color: rgb(22, 21, 17);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(252, 251, 241);
  color: rgb(22, 21, 17);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(226, 228, 204);
  color: rgb(22, 21, 17);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(152, 153, 136);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(226, 228, 204);
  border-left-color: rgb(152, 153, 136);
  color: rgb(22, 21, 17);
}

body div#quartz-root {
  background-color: rgb(252, 251, 241);
  color: rgb(22, 21, 17);
}`,
    typography: `body .page article p > b, b {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body .page article p > em, em {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body .page article p > i, i {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body .page article p > strong, strong {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body .text-highlight {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body del {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: line-through rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body p {
  color: rgb(46, 44, 41);
  outline: rgb(46, 44, 41) none 0px;
  text-decoration: rgb(46, 44, 41);
  text-decoration-color: rgb(46, 44, 41);
}`,
    links: `body a.external, footer a {
  color: rgb(179, 192, 150);
  outline: rgb(179, 192, 150) none 0px;
  text-decoration: underline rgb(179, 192, 150);
  text-decoration-color: rgb(179, 192, 150);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(179, 192, 150);
  outline: rgb(179, 192, 150) none 0px;
  text-decoration: underline rgb(179, 192, 150);
  text-decoration-color: rgb(179, 192, 150);
}

body a.internal.broken {
  color: rgb(179, 192, 150);
  outline: rgb(179, 192, 150) none 0px;
  text-decoration: underline rgba(179, 192, 150, 0.3);
  text-decoration-color: rgba(179, 192, 150, 0.3);
}`,
    lists: `body dd {
  color: rgb(22, 21, 17);
}

body dt {
  color: rgb(22, 21, 17);
}

body ol > li {
  color: rgb(22, 21, 17);
}

body ol.overflow {
  background-color: rgb(252, 251, 241);
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body ul > li {
  color: rgb(22, 21, 17);
}

body ul.overflow {
  background-color: rgb(252, 251, 241);
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(70, 71, 63);
  text-decoration: rgb(70, 71, 63);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body table {
  color: rgb(22, 21, 17);
}

body td {
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
  color: rgb(22, 21, 17);
}

body th {
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
  color: rgb(22, 21, 17);
}`,
    code: `body code {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(245, 243, 224);
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(245, 243, 224);
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
  color: rgb(22, 21, 17);
}

body pre > code, pre:has(> code) {
  background-color: rgb(245, 243, 224);
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
}

body pre:has(> code) {
  background-color: rgb(245, 243, 224);
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
}`,
    images: `body audio {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body figcaption {
  color: rgb(22, 21, 17);
}

body figure {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body img {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body video {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}`,
    embeds: `body .file-embed {
  background-color: rgb(245, 243, 224);
  border-bottom-color: rgb(46, 44, 41);
  border-left-color: rgb(46, 44, 41);
  border-right-color: rgb(46, 44, 41);
  border-top-color: rgb(46, 44, 41);
}

body .footnotes {
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}

body .transclude {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(179, 192, 150);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body .transclude-inner {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(179, 192, 150);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(46, 44, 41);
  text-decoration: line-through rgb(46, 44, 41);
  text-decoration-color: rgb(46, 44, 41);
}

body input[type=checkbox] {
  border-bottom-color: rgb(70, 71, 63);
  border-left-color: rgb(70, 71, 63);
  border-right-color: rgb(70, 71, 63);
  border-top-color: rgb(70, 71, 63);
}

body li.task-list-item[data-task='!'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='*'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='-'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='/'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='>'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='?'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='I'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='S'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='b'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='c'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='d'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='f'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='i'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='k'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='l'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='p'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='u'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body li.task-list-item[data-task='w'] {
  color: rgb(22, 21, 17);
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}`,
    search: `body .search > .search-button {
  background-color: rgb(252, 251, 241);
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
  color: rgb(22, 21, 17);
}

body .search > .search-container > .search-space {
  background-color: rgb(252, 251, 241);
  border-bottom-color: rgb(70, 71, 63);
  border-left-color: rgb(70, 71, 63);
  border-right-color: rgb(70, 71, 63);
  border-top-color: rgb(70, 71, 63);
}

body .search > .search-container > .search-space > * {
  color: rgb(22, 21, 17);
  outline: rgb(22, 21, 17) none 0px;
  text-decoration: rgb(22, 21, 17);
  text-decoration-color: rgb(22, 21, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(22, 21, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(22, 21, 17);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(22, 21, 17);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(70, 71, 63);
  border-left-color: rgb(70, 71, 63);
  border-right-color: rgb(70, 71, 63);
  border-top-color: rgb(70, 71, 63);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(226, 228, 204);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(22, 21, 17);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(179, 192, 150, 0.1);
  border-bottom-color: rgba(179, 192, 150, 0.15);
  border-left-color: rgba(179, 192, 150, 0.15);
  border-right-color: rgba(179, 192, 150, 0.15);
  border-top-color: rgba(179, 192, 150, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(179, 192, 150);
}

body h1 {
  color: rgb(22, 21, 17);
}

body h2 {
  color: rgb(22, 21, 17);
}

body h2.page-title, h2.page-title a {
  color: rgb(22, 21, 17);
}

body h3 {
  color: rgb(22, 21, 17);
}

body h4 {
  color: rgb(22, 21, 17);
}

body h5 {
  color: rgb(22, 21, 17);
}

body h6 {
  color: rgb(22, 21, 17);
}

body hr {
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(252, 251, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 251, 241);
}

body ::-webkit-scrollbar-corner {
  background: rgb(252, 251, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 251, 241);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(252, 251, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 251, 241);
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(252, 251, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 251, 241);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(252, 251, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 251, 241);
}

body ::-webkit-scrollbar-track {
  background: rgb(252, 251, 241) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(252, 251, 241);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(46, 44, 41);
  text-decoration: rgb(46, 44, 41);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(46, 44, 41);
  text-decoration: rgb(46, 44, 41);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(46, 44, 41);
  text-decoration: rgb(46, 44, 41);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(46, 44, 41);
  border-left-color: rgb(46, 44, 41);
  border-right-color: rgb(46, 44, 41);
  border-top-color: rgb(46, 44, 41);
  color: rgb(46, 44, 41);
}`,
    footer: `body footer {
  background-color: rgb(226, 228, 204);
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
  color: rgb(46, 44, 41);
}

body footer ul li a {
  color: rgb(46, 44, 41);
  text-decoration: rgb(46, 44, 41);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(22, 21, 17);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(46, 44, 41);
  text-decoration: rgb(46, 44, 41);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(46, 44, 41);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body li.section-li > .section .meta {
  color: rgb(46, 44, 41);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(46, 44, 41);
  text-decoration: rgb(46, 44, 41);
}

body ul.section-ul {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(46, 44, 41);
  border-left-color: rgb(46, 44, 41);
  border-right-color: rgb(46, 44, 41);
  border-top-color: rgb(46, 44, 41);
  color: rgb(46, 44, 41);
}

body .darkmode svg {
  color: rgb(46, 44, 41);
  stroke: rgb(46, 44, 41);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(46, 44, 41);
  border-left-color: rgb(46, 44, 41);
  border-right-color: rgb(46, 44, 41);
  border-top-color: rgb(46, 44, 41);
  color: rgb(46, 44, 41);
}

body .breadcrumb-element p {
  color: rgb(70, 71, 63);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}

body .metadata {
  border-bottom-color: rgb(152, 153, 136);
  border-left-color: rgb(152, 153, 136);
  border-right-color: rgb(152, 153, 136);
  border-top-color: rgb(152, 153, 136);
  color: rgb(46, 44, 41);
}

body .metadata-properties {
  border-bottom-color: rgb(46, 44, 41);
  border-left-color: rgb(46, 44, 41);
  border-right-color: rgb(46, 44, 41);
  border-top-color: rgb(46, 44, 41);
  color: rgb(46, 44, 41);
}

body .navigation-progress {
  background-color: rgb(226, 228, 204);
}

body .page-header h2.page-title {
  color: rgb(22, 21, 17);
}

body abbr {
  color: rgb(22, 21, 17);
  text-decoration: underline dotted rgb(22, 21, 17);
}

body details {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body input[type=text] {
  border-bottom-color: rgb(46, 44, 41);
  border-left-color: rgb(46, 44, 41);
  border-right-color: rgb(46, 44, 41);
  border-top-color: rgb(46, 44, 41);
  color: rgb(46, 44, 41);
}

body kbd {
  background-color: rgb(245, 243, 224);
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
  color: rgb(22, 21, 17);
}

body progress {
  border-bottom-color: rgb(22, 21, 17);
  border-left-color: rgb(22, 21, 17);
  border-right-color: rgb(22, 21, 17);
  border-top-color: rgb(22, 21, 17);
}

body sub {
  color: rgb(22, 21, 17);
}

body summary {
  color: rgb(22, 21, 17);
}

body sup {
  color: rgb(22, 21, 17);
}`,
  },
};
