import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dunite", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 79;
  --accent-l: 40%;
  --accent-s: 25%;
  --background-modifier-active-hover: rgba(111, 128, 77, 0.1);
  --background-modifier-border: #57543f;
  --background-modifier-border-focus: #636049;
  --background-modifier-border-hover: #636049;
  --background-modifier-form-field: #3f3d2f;
  --background-modifier-form-field-hover: #3f3d2f;
  --background-primary: #161511;
  --background-primary-alt: #3f3d2f;
  --background-secondary: #302a1d;
  --background-secondary-alt: #57543f;
  --bases-cards-background: #161511;
  --bases-cards-cover-background: #3f3d2f;
  --bases-cards-shadow: 0 0 0 1px #57543f;
  --bases-cards-shadow-hover: 0 0 0 1px #636049;
  --bases-embed-border-color: #57543f;
  --bases-group-heading-property-color: #fcfbf1;
  --bases-table-border-color: #57543f;
  --bases-table-cell-background-active: #161511;
  --bases-table-cell-background-disabled: #3f3d2f;
  --bases-table-cell-background-selected: rgba(111, 128, 77, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #636049;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(111, 128, 77);
  --bases-table-group-background: #3f3d2f;
  --bases-table-header-background: #161511;
  --bases-table-header-color: #fcfbf1;
  --bases-table-summary-background: #161511;
  --blockquote-border-color: rgb(111, 128, 77);
  --blur-background: color-mix(in srgb, #57543f 65%, transparent) linear-gradient(#57543f, color-mix(in srgb, #57543f 65%, transparent));
  --canvas-background: #161511;
  --canvas-card-label-color: #777357;
  --canvas-dot-pattern: #57543f;
  --caret-color: #fcfbf1;
  --checkbox-border-color: #777357;
  --checkbox-border-color-hover: #fcfbf1;
  --checkbox-color: rgb(111, 128, 77);
  --checkbox-color-hover: rgb(97, 109, 64);
  --checkbox-marker-color: #161511;
  --checklist-done-color: #fcfbf1;
  --code-background: #3f3d2f;
  --code-border-color: #57543f;
  --code-comment: #777357;
  --code-normal: #fcfbf1;
  --code-punctuation: #fcfbf1;
  --collapse-icon-color: #777357;
  --collapse-icon-color-collapsed: rgb(97, 109, 64);
  --color-accent: rgb(111, 128, 77);
  --color-accent-1: rgb(97, 109, 64);
  --color-accent-2: rgb(150, 164, 101);
  --color-accent-hsl: 79,
			25%,
			40%;
  --color-base-00: #161511;
  --color-base-05: #302a1d;
  --color-base-10: #3f3d2f;
  --color-base-100: #fcfbf1;
  --color-base-20: #302a1d;
  --color-base-25: #3f3d2f;
  --color-base-30: #57543f;
  --color-base-35: #636049;
  --color-base-40: #636049;
  --color-base-50: #777357;
  --color-base-60: #a89366;
  --color-base-70: #fcfbf1;
  --divider-color: #57543f;
  --divider-color-hover: rgb(111, 128, 77);
  --dropdown-background: #57543f;
  --dropdown-background-hover: #636049;
  --embed-block-shadow-hover: 0 0 0 1px #57543f, inset 0 0 0 1px #57543f;
  --embed-border-start: 2px solid rgb(111, 128, 77);
  --file-header-background: #161511;
  --file-header-background-focused: #161511;
  --flair-background: #57543f;
  --flair-color: #fcfbf1;
  --footnote-divider-color: #57543f;
  --footnote-id-color: #fcfbf1;
  --footnote-id-color-no-occurrences: #777357;
  --graph-line: #636049;
  --graph-node: #fcfbf1;
  --graph-node-focused: rgb(97, 109, 64);
  --graph-node-unresolved: #777357;
  --graph-text: #fcfbf1;
  --heading-formatting: #777357;
  --hr-color: #57543f;
  --icon-color: #fcfbf1;
  --icon-color-active: rgb(97, 109, 64);
  --icon-color-focused: #fcfbf1;
  --icon-color-hover: #fcfbf1;
  --input-date-separator: #777357;
  --input-placeholder-color: #777357;
  --interactive-accent: rgb(111, 128, 77);
  --interactive-accent-hover: rgb(97, 109, 64);
  --interactive-accent-hsl: 79,
			25%,
			40%;
  --interactive-hover: #636049;
  --interactive-normal: #57543f;
  --link-color: rgb(97, 109, 64);
  --link-color-hover: rgb(150, 164, 101);
  --link-external-color: rgb(97, 109, 64);
  --link-external-color-hover: rgb(150, 164, 101);
  --link-unresolved-color: rgb(97, 109, 64);
  --link-unresolved-decoration-color: rgba(111, 128, 77, 0.3);
  --list-marker-color: #777357;
  --list-marker-color-collapsed: rgb(97, 109, 64);
  --list-marker-color-hover: #fcfbf1;
  --menu-background: #302a1d;
  --menu-border-color: #636049;
  --metadata-border-color: #57543f;
  --metadata-divider-color: #57543f;
  --metadata-input-text-color: #fcfbf1;
  --metadata-label-text-color: #fcfbf1;
  --metadata-label-text-color-hover: #fcfbf1;
  --metadata-property-box-shadow-focus: 0 0 0 2px #636049;
  --metadata-property-box-shadow-hover: 0 0 0 1px #636049;
  --modal-background: #161511;
  --modal-border-color: #636049;
  --nav-collapse-icon-color: #777357;
  --nav-collapse-icon-color-collapsed: #777357;
  --nav-heading-color: #fcfbf1;
  --nav-heading-color-collapsed: #777357;
  --nav-heading-color-collapsed-hover: #fcfbf1;
  --nav-heading-color-hover: #fcfbf1;
  --nav-item-background-selected: rgba(111, 128, 77, 0.15);
  --nav-item-color: #fcfbf1;
  --nav-item-color-active: #fcfbf1;
  --nav-item-color-highlighted: rgb(97, 109, 64);
  --nav-item-color-hover: #fcfbf1;
  --nav-item-color-selected: #fcfbf1;
  --nav-tag-color: #777357;
  --nav-tag-color-active: #fcfbf1;
  --nav-tag-color-hover: #fcfbf1;
  --pdf-background: #161511;
  --pdf-page-background: #161511;
  --pdf-shadow: 0 0 0 1px #57543f;
  --pdf-sidebar-background: #161511;
  --pdf-thumbnail-shadow: 0 0 0 1px #57543f;
  --pill-border-color: #57543f;
  --pill-border-color-hover: #636049;
  --pill-color: #fcfbf1;
  --pill-color-hover: #fcfbf1;
  --pill-color-remove: #777357;
  --pill-color-remove-hover: rgb(97, 109, 64);
  --prompt-background: #161511;
  --prompt-border-color: #636049;
  --raised-background: color-mix(in srgb, #57543f 65%, transparent) linear-gradient(#57543f, color-mix(in srgb, #57543f 65%, transparent));
  --ribbon-background: #302a1d;
  --ribbon-background-collapsed: #161511;
  --search-clear-button-color: #fcfbf1;
  --search-icon-color: #fcfbf1;
  --search-result-background: #161511;
  --setting-group-heading-color: #fcfbf1;
  --setting-items-background: #3f3d2f;
  --setting-items-border-color: #57543f;
  --slider-thumb-border-color: #636049;
  --slider-track-background: #57543f;
  --status-bar-background: #302a1d;
  --status-bar-border-color: #57543f;
  --status-bar-text-color: #fcfbf1;
  --suggestion-background: #161511;
  --tab-background-active: #161511;
  --tab-container-background: #302a1d;
  --tab-divider-color: #636049;
  --tab-outline-color: #57543f;
  --tab-switcher-background: #302a1d;
  --tab-switcher-menubar-background: linear-gradient(to top, #302a1d, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(111, 128, 77);
  --tab-text-color: #777357;
  --tab-text-color-active: #fcfbf1;
  --tab-text-color-focused: #fcfbf1;
  --tab-text-color-focused-active: #fcfbf1;
  --tab-text-color-focused-active-current: #fcfbf1;
  --tab-text-color-focused-highlighted: rgb(97, 109, 64);
  --table-add-button-border-color: #57543f;
  --table-border-color: #57543f;
  --table-drag-handle-background-active: rgb(111, 128, 77);
  --table-drag-handle-color: #777357;
  --table-drag-handle-color-active: #fcfbf1;
  --table-header-border-color: #57543f;
  --table-header-color: #fcfbf1;
  --table-selection: rgba(111, 128, 77, 0.1);
  --table-selection-border-color: rgb(111, 128, 77);
  --tag-background: rgba(111, 128, 77, 0.1);
  --tag-background-hover: rgba(111, 128, 77, 0.2);
  --tag-border-color: rgba(111, 128, 77, 0.15);
  --tag-border-color-hover: rgba(111, 128, 77, 0.15);
  --tag-color: rgb(97, 109, 64);
  --tag-color-hover: rgb(97, 109, 64);
  --text-accent: rgb(97, 109, 64);
  --text-accent-hover: rgb(150, 164, 101);
  --text-faint: #777357;
  --text-muted: #fcfbf1;
  --text-normal: #fcfbf1;
  --text-on-accent: #fcfbf1;
  --text-on-accent-inverted: #3f3d2f;
  --text-selection: rgba(111, 128, 77, 0.33);
  --titlebar-background: #302a1d;
  --titlebar-background-focused: #57543f;
  --titlebar-border-color: #57543f;
  --titlebar-text-color: #fcfbf1;
  --titlebar-text-color-focused: #fcfbf1;
  --vault-profile-color: #fcfbf1;
  --vault-profile-color-hover: #fcfbf1;
  --quartz-icon-color: currentColor;
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
  --accent-h: 79;
  --accent-l: 67%;
  --accent-s: 25%;
  --background-modifier-active-hover: rgba(179, 192, 150, 0.1);
  --background-modifier-border: #989988;
  --background-modifier-border-focus: #46473f;
  --background-modifier-border-hover: #46473f;
  --background-modifier-form-field: #fcfbf1;
  --background-modifier-form-field-hover: #fcfbf1;
  --background-primary: #fcfbf1;
  --background-primary-alt: #f5f3e0;
  --background-secondary: #e2e4cc;
  --background-secondary-alt: #f5f3e0;
  --bases-cards-background: #fcfbf1;
  --bases-cards-cover-background: #f5f3e0;
  --bases-cards-shadow: 0 0 0 1px #989988;
  --bases-cards-shadow-hover: 0 0 0 1px #46473f;
  --bases-embed-border-color: #989988;
  --bases-group-heading-property-color: #2e2c29;
  --bases-table-border-color: #989988;
  --bases-table-cell-background-active: #fcfbf1;
  --bases-table-cell-background-disabled: #f5f3e0;
  --bases-table-cell-background-selected: rgba(179, 192, 150, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #46473f;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(179, 192, 150);
  --bases-table-group-background: #f5f3e0;
  --bases-table-header-background: #fcfbf1;
  --bases-table-header-color: #2e2c29;
  --bases-table-summary-background: #fcfbf1;
  --blockquote-border-color: rgb(179, 192, 150);
  --blur-background: color-mix(in srgb, #fcfbf1 65%, transparent) linear-gradient(#fcfbf1, color-mix(in srgb, #fcfbf1 65%, transparent));
  --canvas-background: #fcfbf1;
  --canvas-card-label-color: #46473f;
  --canvas-dot-pattern: #989988;
  --caret-color: #161511;
  --checkbox-border-color: #46473f;
  --checkbox-border-color-hover: #2e2c29;
  --checkbox-color: rgb(179, 192, 150);
  --checkbox-color-hover: rgb(159, 174, 117);
  --checkbox-marker-color: #fcfbf1;
  --checklist-done-color: #2e2c29;
  --code-background: #f5f3e0;
  --code-border-color: #989988;
  --code-comment: #46473f;
  --code-normal: #161511;
  --code-punctuation: #2e2c29;
  --collapse-icon-color: #46473f;
  --collapse-icon-color-collapsed: rgb(179, 192, 150);
  --color-accent: rgb(179, 192, 150);
  --color-accent-1: rgb(159, 174, 117);
  --color-accent-2: rgb(224, 229, 210);
  --color-accent-hsl: 79,
			  25%,
			  67%;
  --color-base-00: #fcfbf1;
  --color-base-05: #f5f3e0;
  --color-base-10: #f5f3e0;
  --color-base-100: #161511;
  --color-base-20: #e2e4cc;
  --color-base-25: #46473f;
  --color-base-30: #989988;
  --color-base-35: #46473f;
  --color-base-40: #46473f;
  --color-base-50: #46473f;
  --color-base-60: #373832;
  --color-base-70: #2e2c29;
  --divider-color: #989988;
  --divider-color-hover: rgb(179, 192, 150);
  --dropdown-background: #fcfbf1;
  --dropdown-background-hover: #f5f3e0;
  --embed-block-shadow-hover: 0 0 0 1px #989988, inset 0 0 0 1px #989988;
  --embed-border-start: 2px solid rgb(179, 192, 150);
  --file-header-background: #fcfbf1;
  --file-header-background-focused: #fcfbf1;
  --flair-background: #fcfbf1;
  --flair-color: #161511;
  --footnote-divider-color: #989988;
  --footnote-id-color: #2e2c29;
  --footnote-id-color-no-occurrences: #46473f;
  --graph-line: #46473f;
  --graph-node: #2e2c29;
  --graph-node-focused: rgb(179, 192, 150);
  --graph-node-unresolved: #46473f;
  --graph-text: #161511;
  --heading-formatting: #46473f;
  --hr-color: #989988;
  --icon-color: #2e2c29;
  --icon-color-active: rgb(179, 192, 150);
  --icon-color-focused: #161511;
  --icon-color-hover: #2e2c29;
  --input-date-separator: #46473f;
  --input-placeholder-color: #46473f;
  --interactive-accent: rgb(179, 192, 150);
  --interactive-accent-hover: rgb(159, 174, 117);
  --interactive-accent-hsl: 79,
			  25%,
			  67%;
  --interactive-hover: #f5f3e0;
  --interactive-normal: #fcfbf1;
  --link-color: rgb(179, 192, 150);
  --link-color-hover: rgb(224, 229, 210);
  --link-external-color: rgb(179, 192, 150);
  --link-external-color-hover: rgb(224, 229, 210);
  --link-unresolved-color: rgb(179, 192, 150);
  --link-unresolved-decoration-color: rgba(179, 192, 150, 0.3);
  --list-marker-color: #46473f;
  --list-marker-color-collapsed: rgb(179, 192, 150);
  --list-marker-color-hover: #2e2c29;
  --menu-background: #e2e4cc;
  --menu-border-color: #46473f;
  --metadata-border-color: #989988;
  --metadata-divider-color: #989988;
  --metadata-input-text-color: #161511;
  --metadata-label-text-color: #2e2c29;
  --metadata-label-text-color-hover: #2e2c29;
  --metadata-property-box-shadow-focus: 0 0 0 2px #46473f;
  --metadata-property-box-shadow-hover: 0 0 0 1px #46473f;
  --modal-background: #fcfbf1;
  --modal-border-color: #46473f;
  --nav-collapse-icon-color: #46473f;
  --nav-collapse-icon-color-collapsed: #46473f;
  --nav-heading-color: #161511;
  --nav-heading-color-collapsed: #46473f;
  --nav-heading-color-collapsed-hover: #2e2c29;
  --nav-heading-color-hover: #161511;
  --nav-item-background-selected: rgba(179, 192, 150, 0.15);
  --nav-item-color: #2e2c29;
  --nav-item-color-active: #161511;
  --nav-item-color-highlighted: rgb(179, 192, 150);
  --nav-item-color-hover: #161511;
  --nav-item-color-selected: #161511;
  --nav-tag-color: #46473f;
  --nav-tag-color-active: #2e2c29;
  --nav-tag-color-hover: #2e2c29;
  --pdf-background: #fcfbf1;
  --pdf-page-background: #fcfbf1;
  --pdf-sidebar-background: #fcfbf1;
  --pill-border-color: #989988;
  --pill-border-color-hover: #46473f;
  --pill-color: #2e2c29;
  --pill-color-hover: #161511;
  --pill-color-remove: #46473f;
  --pill-color-remove-hover: rgb(179, 192, 150);
  --prompt-background: #fcfbf1;
  --prompt-border-color: #46473f;
  --raised-background: color-mix(in srgb, #fcfbf1 65%, transparent) linear-gradient(#fcfbf1, color-mix(in srgb, #fcfbf1 65%, transparent));
  --ribbon-background: #e2e4cc;
  --ribbon-background-collapsed: #fcfbf1;
  --search-clear-button-color: #2e2c29;
  --search-icon-color: #2e2c29;
  --search-result-background: #fcfbf1;
  --setting-group-heading-color: #161511;
  --setting-items-background: #f5f3e0;
  --setting-items-border-color: #989988;
  --slider-thumb-border-color: #46473f;
  --slider-track-background: #989988;
  --status-bar-background: #e2e4cc;
  --status-bar-border-color: #989988;
  --status-bar-text-color: #2e2c29;
  --suggestion-background: #fcfbf1;
  --tab-background-active: #fcfbf1;
  --tab-container-background: #e2e4cc;
  --tab-divider-color: #46473f;
  --tab-outline-color: #989988;
  --tab-switcher-background: #e2e4cc;
  --tab-switcher-menubar-background: linear-gradient(to top, #e2e4cc, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(179, 192, 150);
  --tab-text-color: #46473f;
  --tab-text-color-active: #2e2c29;
  --tab-text-color-focused: #2e2c29;
  --tab-text-color-focused-active: #2e2c29;
  --tab-text-color-focused-active-current: #161511;
  --tab-text-color-focused-highlighted: rgb(179, 192, 150);
  --table-add-button-border-color: #989988;
  --table-border-color: #989988;
  --table-drag-handle-background-active: rgb(179, 192, 150);
  --table-drag-handle-color: #46473f;
  --table-drag-handle-color-active: #161511;
  --table-header-border-color: #989988;
  --table-header-color: #161511;
  --table-selection: rgba(179, 192, 150, 0.1);
  --table-selection-border-color: rgb(179, 192, 150);
  --tag-background: rgba(179, 192, 150, 0.1);
  --tag-background-hover: rgba(179, 192, 150, 0.2);
  --tag-border-color: rgba(179, 192, 150, 0.15);
  --tag-border-color-hover: rgba(179, 192, 150, 0.15);
  --tag-color: rgb(179, 192, 150);
  --tag-color-hover: rgb(179, 192, 150);
  --text-accent: rgb(179, 192, 150);
  --text-accent-hover: rgb(224, 229, 210);
  --text-faint: #46473f;
  --text-muted: #2e2c29;
  --text-normal: #161511;
  --text-on-accent: #161511;
  --text-on-accent-inverted: #f5f3e0;
  --text-selection: rgba(179, 192, 150, 0.2);
  --titlebar-background: #e2e4cc;
  --titlebar-background-focused: #f5f3e0;
  --titlebar-border-color: #989988;
  --titlebar-text-color: #2e2c29;
  --titlebar-text-color-focused: #161511;
  --vault-profile-color: #161511;
  --vault-profile-color-hover: #161511;
  --quartz-icon-color: currentColor;
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
