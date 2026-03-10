import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "desserts",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #372622;
  --background-modifier-border-focus: #62656a;
  --background-modifier-border-hover: #372622;
  --background-modifier-form-field: #372622;
  --background-modifier-form-field-hover: #372622;
  --background-primary: #110f10;
  --background-primary-alt: #040405;
  --background-secondary: #110f10;
  --background-secondary-alt: #372622;
  --bases-cards-background: #110f10;
  --bases-cards-cover-background: #040405;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #372622;
  --bases-cards-shadow-hover: 0 0 0 1px #372622;
  --bases-embed-border-color: #372622;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #a3a5aa;
  --bases-table-border-color: #372622;
  --bases-table-cell-background-active: #110f10;
  --bases-table-cell-background-disabled: #040405;
  --bases-table-cell-shadow-active: 0 0 0 2px #62656a;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #040405;
  --bases-table-header-background: #110f10;
  --bases-table-header-color: #a3a5aa;
  --bases-table-summary-background: #110f10;
  --blur-background: color-mix(in srgb, #372622 65%, transparent) linear-gradient(#372622, color-mix(in srgb, #372622 65%, transparent));
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #110f10;
  --canvas-card-label-color: #74593D;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #372622;
  --caret-color: #a3a5aa;
  --checkbox-border-color: #876642;
  --checkbox-border-color-hover: #422c17;
  --checkbox-color: #74593D;
  --checkbox-color-hover: #422c17;
  --checkbox-marker-color: #110f10;
  --checkbox-radius: 5px;
  --checklist-done-color: #a3a5aa;
  --clickable-icon-radius: 0px;
  --code-background: #7452504f;
  --code-border-color: #372622;
  --code-comment: #74593D;
  --code-normal: #a3a5aa;
  --code-punctuation: #a3a5aa;
  --code-radius: 0px;
  --collapse-icon-color: #74593D;
  --collapse-icon-color-collapsed: #74593D;
  --color-base-00: #110f10;
  --color-base-05: #372622;
  --color-base-10: #040405;
  --color-base-100: #a3a5aa;
  --color-base-20: #110f10;
  --color-base-25: #372622;
  --color-base-30: #372622;
  --color-base-35: #372622;
  --color-base-40: #62656a;
  --color-base-50: #74593D;
  --color-base-60: #a3a5aa;
  --color-base-70: #a3a5aa;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --dropdown-background: #372622;
  --dropdown-background-hover: #745250;
  --embed-block-shadow-hover: 0 0 0 1px #372622, inset 0 0 0 1px #372622;
  --file-header-background: #110f10;
  --file-header-background-focused: #110f10;
  --flair-background: #372622;
  --flair-color: #a3a5aa;
  --footnote-divider-color: #372622;
  --footnote-id-color: #a3a5aa;
  --footnote-id-color-no-occurrences: #74593D;
  --footnote-radius: 0px;
  --graph-line: #372622;
  --graph-node: #a3a5aa;
  --graph-node-focused: #74593D;
  --graph-node-unresolved: #74593D;
  --graph-text: #a3a5aa;
  --gray: var(--text-muted);
  --heading-formatting: #74593D;
  --highlight: var(--text-highlight-bg);
  --hr-color: #372622;
  --hr-thickness: 1px;
  --icon-color: #74593D;
  --icon-color-active: #74593D;
  --icon-color-focused: #74593D;
  --icon-color-hover: #B0A79E;
  --inline-title-color: #74593D;
  --inline-title-size: 2.5em;
  --inline-title-weight: 200;
  --input-date-separator: #74593D;
  --input-placeholder-color: #74593D;
  --input-radius: 0px;
  --interactive-hover: #745250;
  --interactive-normal: #372622;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #74593D;
  --link-color-hover: #9a7c5d;
  --link-external-color: #74593D;
  --link-external-color-hover: #9a7c5d;
  --link-unresolved-color: #74593D;
  --list-marker-color: #74593D;
  --list-marker-color-collapsed: #74593D;
  --list-marker-color-hover: #a3a5aa;
  --menu-background: #110f10;
  --menu-border-color: #372622;
  --menu-radius: 0px;
  --metadata-border-color: #372622;
  --metadata-divider-color: #372622;
  --metadata-input-text-color: #a3a5aa;
  --metadata-label-text-color: #a3a5aa;
  --metadata-label-text-color-hover: #a3a5aa;
  --metadata-property-box-shadow-focus: 0 0 0 2px #62656a;
  --metadata-property-box-shadow-hover: 0 0 0 1px #372622;
  --modal-background: #110f10;
  --modal-border-color: #62656a;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #74593D;
  --nav-collapse-icon-color-collapsed: #74593D;
  --nav-heading-color: #a3a5aa;
  --nav-heading-color-collapsed: #74593D;
  --nav-heading-color-collapsed-hover: #a3a5aa;
  --nav-heading-color-hover: #a3a5aa;
  --nav-item-background-active: #372622;
  --nav-item-background-hover: #2b201a69;
  --nav-item-color: #564134;
  --nav-item-color-active: #B0A79E;
  --nav-item-color-highlighted: #74593D;
  --nav-item-color-hover: #74593D;
  --nav-item-color-selected: #a3a5aa;
  --nav-item-radius: 0px;
  --nav-tag-color: #74593D;
  --nav-tag-color-active: #a3a5aa;
  --nav-tag-color-hover: #a3a5aa;
  --nav-tag-radius: 0px;
  --pdf-background: #110f10;
  --pdf-page-background: #110f10;
  --pdf-shadow: 0 0 0 1px #372622;
  --pdf-sidebar-background: #110f10;
  --pdf-thumbnail-shadow: 0 0 0 1px #372622;
  --pill-border-color: #372622;
  --pill-border-color-hover: #372622;
  --pill-color: #a3a5aa;
  --pill-color-hover: #a3a5aa;
  --pill-color-remove: #74593D;
  --pill-color-remove-hover: #74593D;
  --prompt-background: #110f10;
  --prompt-border-color: #62656a;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #372622 65%, transparent) linear-gradient(#372622, color-mix(in srgb, #372622 65%, transparent));
  --ribbon-background: #110f10;
  --ribbon-background-collapsed: #110f10;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #a3a5aa;
  --search-icon-color: #a3a5aa;
  --search-result-background: #110f10;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #a3a5aa;
  --setting-items-background: #040405;
  --setting-items-border-color: #372622;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: #372622;
  --slider-thumb-radius: 0px;
  --slider-track-background: #745250;
  --status-bar-background: #110f10;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #a3a5aa;
  --suggestion-background: #110f10;
  --tab-background-active: #110f10;
  --tab-container-background: #110f10;
  --tab-divider-color: #372622;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #110f10;
  --tab-switcher-menubar-background: linear-gradient(to top, #110f10, transparent);
  --tab-text-color: #74593D;
  --tab-text-color-active: #B0A79E;
  --tab-text-color-focused: #B0A79E;
  --tab-text-color-focused-active: #a3a5aa;
  --tab-text-color-focused-active-current: #a3a5aa;
  --tab-text-color-focused-highlighted: #74593D;
  --table-add-button-border-color: #372622;
  --table-border-color: #372622;
  --table-drag-handle-color: #74593D;
  --table-header-border-color: #372622;
  --table-header-color: #a3a5aa;
  --tag-background: transparent;
  --tag-background-hover: #372622;
  --tag-color: #74593D;
  --tag-color-hover: #B0A79E;
  --tertiary: var(--text-accent-hover);
  --text-accent: #74593D;
  --text-accent-hover: #9a7c5d;
  --text-faint: #74593D;
  --text-highlight-bg: transparent;
  --text-muted: #a3a5aa;
  --text-normal: #a3a5aa;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #110f10;
  --titlebar-background-focused: #372622;
  --titlebar-border-color: #372622;
  --titlebar-text-color: #a3a5aa;
  --titlebar-text-color-focused: #a3a5aa;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #a3a5aa;
  --vault-profile-color-hover: #a3a5aa;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 15, 16);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(163, 165, 170);
}

body div#quartz-root {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}`,
    typography: `body .page article p > b, b {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body .page article p > em, em {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: rgb(116, 89, 61);
  text-decoration-color: rgb(116, 89, 61);
}

body .page article p > i, i {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: rgb(116, 89, 61);
  text-decoration-color: rgb(116, 89, 61);
}

body .page article p > strong, strong {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body del {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: line-through rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body p {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}`,
    links: `body a.external, footer a {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: underline rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: underline rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body a.internal.broken {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
}`,
    lists: `body dd {
  color: rgb(163, 165, 170);
}

body dt {
  color: rgb(163, 165, 170);
}

body ol > li {
  color: rgb(163, 165, 170);
}

body ol.overflow {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body ul > li {
  color: rgb(163, 165, 170);
}

body ul.overflow {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(116, 89, 61);
  text-decoration: underline rgb(55, 38, 34);
}

body blockquote {
  background-color: rgba(43, 32, 26, 0.41);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body table {
  color: rgb(163, 165, 170);
  width: 227.125px;
}

body td {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(163, 165, 170);
}

body th {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(163, 165, 170);
}`,
    code: `body code {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(116, 82, 80, 0.31);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(116, 82, 80, 0.31);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgba(116, 82, 80, 0.31);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgba(116, 82, 80, 0.31);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body figcaption {
  color: rgb(163, 165, 170);
}

body figure {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body img {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(163, 165, 170);
  border-radius: 8px;
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    embeds: `body .file-embed {
  background-color: rgb(4, 4, 5);
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

body .transclude {
  border-bottom-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body .transclude-inner {
  border-bottom-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(163, 165, 170);
  text-decoration: line-through rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body input[type=checkbox] {
  border-bottom-color: rgb(135, 102, 66);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(135, 102, 66);
  border-right-color: rgb(135, 102, 66);
  border-top-color: rgb(135, 102, 66);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='*'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='-'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='/'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='>'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='?'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='I'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='S'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='b'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='c'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='d'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='f'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='i'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='k'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='l'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='p'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='u'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body li.task-list-item[data-task='w'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

body .callout[data-callout="abstract"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="bug"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="danger"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="example"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="failure"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="info"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="note"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="question"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="quote"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="success"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="tip"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="todo"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="warning"] {
  background-color: rgb(38, 26, 23);
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}`,
    search: `body .search > .search-button {
  background-color: rgb(55, 38, 34);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body .search > .search-container > .search-space {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(98, 101, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(98, 101, 106);
  border-right-color: rgb(98, 101, 106);
  border-top-color: rgb(98, 101, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(163, 165, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(163, 165, 170);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(163, 165, 170);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 101, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(98, 101, 106);
  border-right-color: rgb(98, 101, 106);
  border-top-color: rgb(98, 101, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 15, 16);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

body a.internal.tag-link::before {
  color: rgb(116, 89, 61);
}

body h1 {
  color: rgb(163, 165, 170);
}

body h2 {
  color: rgb(163, 165, 170);
}

body h2.page-title, h2.page-title a {
  color: rgb(116, 89, 61);
}

body h3 {
  color: rgb(163, 165, 170);
}

body h4 {
  color: rgb(163, 165, 170);
}

body h5 {
  color: rgb(163, 165, 170);
}

body h6 {
  color: rgb(163, 165, 170);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(116, 89, 61);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(116, 89, 61);
  border-right-style: dotted;
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body ::-webkit-scrollbar {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

body ::-webkit-scrollbar-corner {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

body ::-webkit-scrollbar-track {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(55, 38, 34);
  border-bottom-color: rgb(176, 167, 158);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(176, 167, 158);
  border-right-color: rgb(176, 167, 158);
  border-top-color: rgb(176, 167, 158);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(176, 167, 158);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 89, 61);
  border-right-color: rgb(116, 89, 61);
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(116, 89, 61);
}`,
    footer: `body footer {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(163, 165, 170);
}

body footer ul li a {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(163, 165, 170);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 65, 52);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body li.section-li > .section .meta {
  color: rgb(86, 65, 52);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body ul.section-ul {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 89, 61);
  border-right-color: rgb(116, 89, 61);
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(116, 89, 61);
}

body .darkmode svg {
  color: rgb(116, 89, 61);
  stroke: rgb(116, 89, 61);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body .breadcrumb-element p {
  color: rgb(116, 89, 61);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

body .metadata {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(163, 165, 170);
}

body .metadata-properties {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

body .navigation-progress {
  background-color: rgb(17, 15, 16);
}

body .page-header h2.page-title {
  color: rgb(163, 165, 170);
  font-family: monospace;
}

body abbr {
  color: rgb(163, 165, 170);
  text-decoration: underline dotted rgb(163, 165, 170);
}

body details {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body input[type=text] {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

body kbd {
  background-color: rgba(116, 82, 80, 0.31);
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

body progress {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

body sub {
  color: rgb(163, 165, 170);
}

body summary {
  color: rgb(163, 165, 170);
}

body sup {
  color: rgb(163, 165, 170);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #E6D8C5;
  --background-modifier-border-focus: #F5EDE3;
  --background-modifier-border-hover: #E6D8C5;
  --background-modifier-form-field: #F5EDE3;
  --background-modifier-form-field-hover: #F5EDE3;
  --background-primary: #F5EDE3;
  --background-primary-alt: #E6D8C5;
  --background-secondary: #F5EDE3;
  --background-secondary-alt: #E6D8C5;
  --bases-cards-background: #F5EDE3;
  --bases-cards-cover-background: #E6D8C5;
  --bases-cards-radius: 0px;
  --bases-cards-shadow: 0 0 0 1px #E6D8C5;
  --bases-cards-shadow-hover: 0 0 0 1px #E6D8C5;
  --bases-embed-border-color: #E6D8C5;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #372622;
  --bases-table-border-color: #E6D8C5;
  --bases-table-cell-background-active: #F5EDE3;
  --bases-table-cell-background-disabled: #E6D8C5;
  --bases-table-cell-shadow-active: 0 0 0 2px #F5EDE3;
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #E6D8C5;
  --bases-table-header-background: #F5EDE3;
  --bases-table-header-color: #372622;
  --bases-table-summary-background: #F5EDE3;
  --blur-background: color-mix(in srgb, #F5EDE3 65%, transparent) linear-gradient(#F5EDE3, color-mix(in srgb, #F5EDE3 65%, transparent));
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #F5EDE3;
  --canvas-card-label-color: #74593D;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #E6D8C5;
  --caret-color: #372622;
  --checkbox-border-color: #A2856E;
  --checkbox-border-color-hover: #ce9f9f;
  --checkbox-color: #EBC4C4;
  --checkbox-color-hover: #ce9f9f;
  --checkbox-marker-color: #F5EDE3;
  --checkbox-radius: 5px;
  --checklist-done-color: #372622;
  --clickable-icon-radius: 0px;
  --code-background: #EBC4C4;
  --code-border-color: #E6D8C5;
  --code-comment: #74593D;
  --code-normal: #372622;
  --code-punctuation: #372622;
  --code-radius: 0px;
  --collapse-icon-color: #74593D;
  --collapse-icon-color-collapsed: #A2856E;
  --color-base-00: #F5EDE3;
  --color-base-05: #E6D8C5;
  --color-base-10: #E6D8C5;
  --color-base-100: #372622;
  --color-base-20: #F5EDE3;
  --color-base-25: #E6D8C5;
  --color-base-30: #E6D8C5;
  --color-base-35: #E6D8C5;
  --color-base-40: #F5EDE3;
  --color-base-50: #74593D;
  --color-base-60: #372622;
  --color-base-70: #372622;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: transparent;
  --dropdown-background: #E6D8C5;
  --dropdown-background-hover: #EBC4C4;
  --embed-block-shadow-hover: 0 0 0 1px #E6D8C5, inset 0 0 0 1px #E6D8C5;
  --file-header-background: #F5EDE3;
  --file-header-background-focused: #F5EDE3;
  --flair-background: #E6D8C5;
  --flair-color: #372622;
  --footnote-divider-color: #E6D8C5;
  --footnote-id-color: #372622;
  --footnote-id-color-no-occurrences: #74593D;
  --footnote-radius: 0px;
  --graph-line: #E6D8C5;
  --graph-node: #372622;
  --graph-node-focused: #A2856E;
  --graph-node-unresolved: #74593D;
  --graph-text: #372622;
  --gray: var(--text-muted);
  --heading-formatting: #74593D;
  --highlight: var(--text-highlight-bg);
  --hr-color: #E6D8C5;
  --hr-thickness: 1px;
  --icon-color: #A2856E;
  --icon-color-active: #A2856E;
  --icon-color-focused: #74593D;
  --icon-color-hover: #8C6550;
  --inline-title-color: #ce9f9f;
  --inline-title-size: 2.5em;
  --inline-title-weight: 200;
  --input-date-separator: #74593D;
  --input-placeholder-color: #74593D;
  --input-radius: 0px;
  --interactive-hover: #EBC4C4;
  --interactive-normal: #E6D8C5;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #A2856E;
  --link-color-hover: #EBC4C4;
  --link-external-color: #A2856E;
  --link-external-color-hover: #EBC4C4;
  --link-unresolved-color: #A2856E;
  --list-marker-color: #74593D;
  --list-marker-color-collapsed: #A2856E;
  --list-marker-color-hover: #372622;
  --menu-background: #F5EDE3;
  --menu-border-color: #E6D8C5;
  --menu-radius: 0px;
  --metadata-border-color: #E6D8C5;
  --metadata-divider-color: #E6D8C5;
  --metadata-input-text-color: #372622;
  --metadata-label-text-color: #372622;
  --metadata-label-text-color-hover: #372622;
  --metadata-property-box-shadow-focus: 0 0 0 2px #F5EDE3;
  --metadata-property-box-shadow-hover: 0 0 0 1px #E6D8C5;
  --modal-background: #F5EDE3;
  --modal-border-color: #F5EDE3;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #74593D;
  --nav-collapse-icon-color-collapsed: #74593D;
  --nav-heading-color: #372622;
  --nav-heading-color-collapsed: #74593D;
  --nav-heading-color-collapsed-hover: #372622;
  --nav-heading-color-hover: #372622;
  --nav-item-background-active: #E6D8C5;
  --nav-item-background-hover: #ebc4c46e;
  --nav-item-color: #564134;
  --nav-item-color-active: #A35D66;
  --nav-item-color-highlighted: #A2856E;
  --nav-item-color-hover: #74593D;
  --nav-item-color-selected: #372622;
  --nav-item-radius: 0px;
  --nav-tag-color: #74593D;
  --nav-tag-color-active: #372622;
  --nav-tag-color-hover: #372622;
  --nav-tag-radius: 0px;
  --pdf-background: #F5EDE3;
  --pdf-page-background: #F5EDE3;
  --pdf-sidebar-background: #F5EDE3;
  --pill-border-color: #E6D8C5;
  --pill-border-color-hover: #E6D8C5;
  --pill-color: #372622;
  --pill-color-hover: #372622;
  --pill-color-remove: #74593D;
  --pill-color-remove-hover: #A2856E;
  --prompt-background: #F5EDE3;
  --prompt-border-color: #F5EDE3;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #F5EDE3 65%, transparent) linear-gradient(#F5EDE3, color-mix(in srgb, #F5EDE3 65%, transparent));
  --ribbon-background: #F5EDE3;
  --ribbon-background-collapsed: #F5EDE3;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #372622;
  --search-icon-color: #372622;
  --search-result-background: #F5EDE3;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #372622;
  --setting-items-background: #E6D8C5;
  --setting-items-border-color: #E6D8C5;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: #E6D8C5;
  --slider-thumb-radius: 0px;
  --slider-track-background: #745250;
  --status-bar-background: #F5EDE3;
  --status-bar-border-color: transparent;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #372622;
  --suggestion-background: #F5EDE3;
  --tab-background-active: #F5EDE3;
  --tab-container-background: #F5EDE3;
  --tab-divider-color: #E6D8C5;
  --tab-outline-color: transparent;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #F5EDE3;
  --tab-switcher-menubar-background: linear-gradient(to top, #F5EDE3, transparent);
  --tab-text-color: #74593D;
  --tab-text-color-active: #372622;
  --tab-text-color-focused: #372622;
  --tab-text-color-focused-active: #372622;
  --tab-text-color-focused-active-current: #372622;
  --tab-text-color-focused-highlighted: #A2856E;
  --table-add-button-border-color: #E6D8C5;
  --table-border-color: #E6D8C5;
  --table-drag-handle-color: #74593D;
  --table-header-border-color: #E6D8C5;
  --table-header-color: #372622;
  --tag-background: transparent;
  --tag-background-hover: #ce9f9f;
  --tag-color: #74593D;
  --tag-color-hover: #F5EDE3;
  --tertiary: var(--text-accent-hover);
  --text-accent: #A2856E;
  --text-accent-hover: #EBC4C4;
  --text-faint: #74593D;
  --text-highlight-bg: transparent;
  --text-muted: #372622;
  --text-normal: #372622;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #F5EDE3;
  --titlebar-background-focused: #E6D8C5;
  --titlebar-border-color: #E6D8C5;
  --titlebar-text-color: #372622;
  --titlebar-text-color-focused: #372622;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #372622;
  --vault-profile-color-hover: #372622;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 237, 227);
  color: rgb(55, 38, 34);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 237, 227);
  color: rgb(55, 38, 34);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 237, 227);
  color: rgb(55, 38, 34);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 237, 227);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(55, 38, 34);
}

body div#quartz-root {
  background-color: rgb(245, 237, 227);
  color: rgb(55, 38, 34);
}`,
    typography: `body .page article p > b, b {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body .page article p > em, em {
  color: rgb(138, 104, 68);
  outline: rgb(138, 104, 68) none 0px;
  text-decoration: rgb(138, 104, 68);
  text-decoration-color: rgb(138, 104, 68);
}

body .page article p > i, i {
  color: rgb(138, 104, 68);
  outline: rgb(138, 104, 68) none 0px;
  text-decoration: rgb(138, 104, 68);
  text-decoration-color: rgb(138, 104, 68);
}

body .page article p > strong, strong {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body del {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration: line-through rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body p {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}`,
    links: `body a.external, footer a {
  color: rgb(162, 133, 110);
  outline: rgb(162, 133, 110) none 0px;
  text-decoration: underline rgb(230, 216, 197);
  text-decoration-color: rgb(230, 216, 197);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(162, 133, 110);
  outline: rgb(162, 133, 110) none 0px;
  text-decoration: underline rgb(230, 216, 197);
  text-decoration-color: rgb(230, 216, 197);
}

body a.internal.broken {
  color: rgb(162, 133, 110);
  outline: rgb(162, 133, 110) none 0px;
}`,
    lists: `body dd {
  color: rgb(55, 38, 34);
}

body dt {
  color: rgb(55, 38, 34);
}

body ol > li {
  color: rgb(55, 38, 34);
}

body ol.overflow {
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body ul > li {
  color: rgb(55, 38, 34);
}

body ul.overflow {
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(116, 89, 61);
  text-decoration: underline rgb(230, 216, 197);
}

body blockquote {
  background-color: rgba(235, 196, 196, 0.373);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body table {
  color: rgb(55, 38, 34);
  width: 227.125px;
}

body td {
  border-bottom-color: rgb(230, 216, 197);
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  color: rgb(55, 38, 34);
}

body th {
  border-bottom-color: rgb(230, 216, 197);
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  color: rgb(55, 38, 34);
}`,
    code: `body code {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(235, 196, 196);
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(235, 196, 196);
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body pre > code, pre:has(> code) {
  background-color: rgb(235, 196, 196);
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(235, 196, 196);
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body figcaption {
  color: rgb(55, 38, 34);
}

body figure {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body img {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(55, 38, 34);
  border-radius: 8px;
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body video {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    embeds: `body .file-embed {
  background-color: rgb(230, 216, 197);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

body .transclude {
  border-bottom-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body .transclude-inner {
  border-bottom-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(55, 38, 34);
  text-decoration: line-through rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body input[type=checkbox] {
  border-bottom-color: rgb(162, 133, 110);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(162, 133, 110);
  border-right-color: rgb(162, 133, 110);
  border-top-color: rgb(162, 133, 110);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='*'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='-'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='/'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='>'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='?'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='I'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='S'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='b'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='c'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='d'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='f'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='i'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='k'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='l'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='p'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='u'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body li.task-list-item[data-task='w'] {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(106, 71, 55);
  border-left-color: rgb(106, 71, 55);
  border-right-color: rgb(106, 71, 55);
  border-top-color: rgb(106, 71, 55);
}

body .callout[data-callout="abstract"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="bug"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="danger"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="example"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="failure"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="info"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="note"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="question"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="quote"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="success"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="tip"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="todo"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body .callout[data-callout="warning"] {
  background-color: rgba(230, 216, 197, 0.435);
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}`,
    search: `body .search > .search-button {
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgb(230, 216, 197);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgb(245, 237, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 237, 227);
  border-right-color: rgb(245, 237, 227);
  border-top-color: rgb(245, 237, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(55, 38, 34);
  outline: rgb(55, 38, 34) none 0px;
  text-decoration: rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(55, 38, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(55, 38, 34);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(55, 38, 34);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(245, 237, 227);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(245, 237, 227);
  border-right-color: rgb(245, 237, 227);
  border-top-color: rgb(245, 237, 227);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 237, 227);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

body a.internal.tag-link::before {
  color: rgb(116, 89, 61);
}

body h1 {
  color: rgb(55, 38, 34);
}

body h2 {
  color: rgb(55, 38, 34);
}

body h2.page-title, h2.page-title a {
  color: rgb(206, 159, 159);
}

body h3 {
  color: rgb(55, 38, 34);
}

body h4 {
  color: rgb(55, 38, 34);
}

body h5 {
  color: rgb(55, 38, 34);
}

body h6 {
  color: rgb(55, 38, 34);
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(235, 196, 196);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-left-color: rgb(235, 196, 196);
  border-left-style: dotted;
  border-left-width: 5px;
  border-right-color: rgb(235, 196, 196);
  border-right-style: dotted;
  border-top-color: rgb(235, 196, 196);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
}

body ::-webkit-scrollbar {
  background: rgb(245, 237, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 237, 227);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 237, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 237, 227);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 237, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 237, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 237, 227);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 237, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 237, 227);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 237, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 237, 227);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(230, 216, 197);
  border-bottom-color: rgb(163, 93, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 93, 102);
  border-right-color: rgb(163, 93, 102);
  border-top-color: rgb(163, 93, 102);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 93, 102);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(162, 133, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 133, 110);
  border-right-color: rgb(162, 133, 110);
  border-top-color: rgb(162, 133, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(162, 133, 110);
}`,
    footer: `body footer {
  background-color: rgb(245, 237, 227);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(55, 38, 34);
}

body footer ul li a {
  color: rgb(55, 38, 34);
  text-decoration: rgb(55, 38, 34);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(55, 38, 34);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 65, 52);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body li.section-li > .section .meta {
  color: rgb(86, 65, 52);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

body ul.section-ul {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(162, 133, 110);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(162, 133, 110);
  border-right-color: rgb(162, 133, 110);
  border-top-color: rgb(162, 133, 110);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(162, 133, 110);
}

body .darkmode svg {
  color: rgb(162, 133, 110);
  stroke: rgb(162, 133, 110);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body .breadcrumb-element p {
  color: rgb(116, 89, 61);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

body .metadata {
  border-bottom-color: rgb(230, 216, 197);
  border-left-color: rgb(230, 216, 197);
  border-right-color: rgb(230, 216, 197);
  border-top-color: rgb(230, 216, 197);
  color: rgb(55, 38, 34);
}

body .metadata-properties {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

body .navigation-progress {
  background-color: rgb(245, 237, 227);
}

body .page-header h2.page-title {
  color: rgb(55, 38, 34);
  font-family: monospace;
}

body abbr {
  color: rgb(55, 38, 34);
  text-decoration: underline dotted rgb(55, 38, 34);
}

body details {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body input[type=text] {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(55, 38, 34);
}

body kbd {
  background-color: rgb(235, 196, 196);
  border-bottom-color: rgb(55, 38, 34);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(55, 38, 34);
}

body progress {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
}

body sub {
  color: rgb(55, 38, 34);
}

body summary {
  color: rgb(55, 38, 34);
}

body sup {
  color: rgb(55, 38, 34);
}`,
  },
};
