import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "cocoa", modes: ["dark"], variations: [], fonts: ["palatino"] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #372622 !important;
  --background-modifier-border-focus: #62656a !important;
  --background-modifier-border-hover: #372622 !important;
  --background-modifier-form-field: #372622 !important;
  --background-modifier-form-field-hover: #372622 !important;
  --background-primary: #110f10 !important;
  --background-primary-alt: #040405 !important;
  --background-secondary: #110f10 !important;
  --background-secondary-alt: #372622 !important;
  --bases-cards-background: #110f10 !important;
  --bases-cards-cover-background: #040405 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow: 0 0 0 1px #372622 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #372622 !important;
  --bases-embed-border-color: #372622 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #a3a5aa !important;
  --bases-table-border-color: #372622 !important;
  --bases-table-cell-background-active: #110f10 !important;
  --bases-table-cell-background-disabled: #040405 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #62656a !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #040405 !important;
  --bases-table-header-background: #110f10 !important;
  --bases-table-header-color: #a3a5aa !important;
  --bases-table-summary-background: #110f10 !important;
  --blur-background: color-mix(in srgb, #372622 65%, transparent) linear-gradient(#372622, color-mix(in srgb, #372622 65%, transparent)) !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #110f10 !important;
  --canvas-card-label-color: #74593D !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #372622 !important;
  --caret-color: #a3a5aa !important;
  --checkbox-border-color: #74593D !important;
  --checkbox-border-color-hover: #a3a5aa !important;
  --checkbox-marker-color: #110f10 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #a3a5aa !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #7452504f !important;
  --code-border-color: #372622 !important;
  --code-comment: #74593D !important;
  --code-normal: #a3a5aa !important;
  --code-punctuation: #a3a5aa !important;
  --code-radius: 0px !important;
  --collapse-icon-color: #74593D !important;
  --collapse-icon-color-collapsed: #74593D !important;
  --color-base-00: #110f10 !important;
  --color-base-05: #372622 !important;
  --color-base-10: #040405 !important;
  --color-base-100: #a3a5aa !important;
  --color-base-20: #110f10 !important;
  --color-base-25: #372622 !important;
  --color-base-30: #372622 !important;
  --color-base-35: #372622 !important;
  --color-base-40: #62656a !important;
  --color-base-50: #74593D !important;
  --color-base-60: #a3a5aa !important;
  --color-base-70: #a3a5aa !important;
  --dark: #a3a5aa !important;
  --darkgray: #a3a5aa !important;
  --divider-color: transparent !important;
  --dropdown-background: #372622 !important;
  --dropdown-background-hover: #745250 !important;
  --embed-block-shadow-hover: 0 0 0 1px #372622, inset 0 0 0 1px #372622 !important;
  --file-header-background: #110f10 !important;
  --file-header-background-focused: #110f10 !important;
  --file-line-width: 600px !important;
  --flair-background: #372622 !important;
  --flair-color: #a3a5aa !important;
  --footnote-divider-color: #372622 !important;
  --footnote-id-color: #a3a5aa !important;
  --footnote-id-color-no-occurrences: #74593D !important;
  --footnote-radius: 0px !important;
  --graph-line: #372622 !important;
  --graph-node: #a3a5aa !important;
  --graph-node-focused: #74593D !important;
  --graph-node-unresolved: #74593D !important;
  --graph-text: #a3a5aa !important;
  --gray: #a3a5aa !important;
  --heading-formatting: #74593D !important;
  --highlight: transparent !important;
  --hr-color: #110f10 !important;
  --hr-thickness: 1px !important;
  --icon-color: #74593D !important;
  --icon-color-active: #74593D !important;
  --icon-color-focused: #74593D !important;
  --icon-color-hover: #B0A79E !important;
  --inline-title-color: #74593D !important;
  --inline-title-size: 2.5em !important;
  --inline-title-weight: 200 !important;
  --input-date-separator: #74593D !important;
  --input-placeholder-color: #74593D !important;
  --input-radius: 0px !important;
  --interactive-hover: #745250 !important;
  --interactive-normal: #372622 !important;
  --light: #110f10 !important;
  --lightgray: #110f10 !important;
  --link-color: #74593D !important;
  --link-color-hover: #9a7c5d !important;
  --link-external-color: #74593D !important;
  --link-external-color-hover: #9a7c5d !important;
  --link-unresolved-color: #74593D !important;
  --list-marker-color: #74593D !important;
  --list-marker-color-collapsed: #74593D !important;
  --list-marker-color-hover: #a3a5aa !important;
  --menu-background: #110f10 !important;
  --menu-border-color: #372622 !important;
  --menu-radius: 0px !important;
  --metadata-border-color: #372622 !important;
  --metadata-divider-color: #372622 !important;
  --metadata-input-text-color: #a3a5aa !important;
  --metadata-label-text-color: #a3a5aa !important;
  --metadata-label-text-color-hover: #a3a5aa !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #62656a !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #372622 !important;
  --modal-background: #110f10 !important;
  --modal-border-color: #62656a !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #74593D !important;
  --nav-collapse-icon-color-collapsed: #74593D !important;
  --nav-heading-color: #a3a5aa !important;
  --nav-heading-color-collapsed: #74593D !important;
  --nav-heading-color-collapsed-hover: #a3a5aa !important;
  --nav-heading-color-hover: #a3a5aa !important;
  --nav-item-background-active: #372622 !important;
  --nav-item-background-hover: transparent !important;
  --nav-item-color: #564134 !important;
  --nav-item-color-active: #B0A79E !important;
  --nav-item-color-highlighted: #74593D !important;
  --nav-item-color-hover: #74593D !important;
  --nav-item-color-selected: #a3a5aa !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #74593D !important;
  --nav-tag-color-active: #a3a5aa !important;
  --nav-tag-color-hover: #a3a5aa !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #110f10 !important;
  --pdf-page-background: #110f10 !important;
  --pdf-shadow: 0 0 0 1px #372622 !important;
  --pdf-sidebar-background: #110f10 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #372622 !important;
  --pill-border-color: #372622 !important;
  --pill-border-color-hover: #372622 !important;
  --pill-color: #a3a5aa !important;
  --pill-color-hover: #a3a5aa !important;
  --pill-color-remove: #74593D !important;
  --pill-color-remove-hover: #74593D !important;
  --prompt-background: #110f10 !important;
  --prompt-border-color: #62656a !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #372622 65%, transparent) linear-gradient(#372622, color-mix(in srgb, #372622 65%, transparent)) !important;
  --ribbon-background: #110f10 !important;
  --ribbon-background-collapsed: #110f10 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #a3a5aa !important;
  --search-icon-color: #a3a5aa !important;
  --search-result-background: #110f10 !important;
  --secondary: #74593D !important;
  --setting-group-heading-color: #a3a5aa !important;
  --setting-items-background: #040405 !important;
  --setting-items-border-color: #372622 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: #372622 !important;
  --slider-thumb-radius: 0px !important;
  --slider-track-background: #745250 !important;
  --status-bar-background: #110f10 !important;
  --status-bar-border-color: transparent !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #a3a5aa !important;
  --suggestion-background: #110f10 !important;
  --tab-background-active: #110f10 !important;
  --tab-container-background: #110f10 !important;
  --tab-divider-color: #372622 !important;
  --tab-outline-color: transparent !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 4px !important;
  --tab-switcher-background: #110f10 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #110f10, transparent) !important;
  --tab-text-color: #74593D !important;
  --tab-text-color-active: #B0A79E !important;
  --tab-text-color-focused: #B0A79E !important;
  --tab-text-color-focused-active: #a3a5aa !important;
  --tab-text-color-focused-active-current: #a3a5aa !important;
  --tab-text-color-focused-highlighted: #74593D !important;
  --table-add-button-border-color: #372622 !important;
  --table-border-color: #372622 !important;
  --table-drag-handle-color: #74593D !important;
  --table-header-border-color: #372622 !important;
  --table-header-color: #a3a5aa !important;
  --tag-background: transparent !important;
  --tag-background-hover: #372622 !important;
  --tag-color: #74593D !important;
  --tag-color-hover: #B0A79E !important;
  --tertiary: #9a7c5d !important;
  --text-accent: #74593D !important;
  --text-accent-hover: #9a7c5d !important;
  --text-faint: #74593D !important;
  --text-highlight-bg: transparent !important;
  --text-muted: #a3a5aa !important;
  --text-normal: #a3a5aa !important;
  --textHighlight: transparent !important;
  --titlebar-background: #110f10 !important;
  --titlebar-background-focused: #372622 !important;
  --titlebar-border-color: #372622 !important;
  --titlebar-text-color: #a3a5aa !important;
  --titlebar-text-color-focused: #a3a5aa !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #a3a5aa !important;
  --vault-profile-color-hover: #a3a5aa !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 15, 16);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(163, 165, 170);
}

html body div#quartz-root {
  background-color: rgb(17, 15, 16);
  color: rgb(163, 165, 170);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body .page article p > em, html em {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: rgb(116, 89, 61);
  text-decoration-color: rgb(116, 89, 61);
}

html body .page article p > i, html i {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: rgb(116, 89, 61);
  text-decoration-color: rgb(116, 89, 61);
}

html body .page article p > strong, html strong {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body .text-highlight {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body del {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: line-through rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body p {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}`,
    links: `html body a.external, html footer a {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: underline rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
  text-decoration: underline rgb(55, 38, 34);
  text-decoration-color: rgb(55, 38, 34);
}

html body a.internal.broken {
  color: rgb(116, 89, 61);
  outline: rgb(116, 89, 61) none 0px;
}`,
    lists: `html body dd {
  color: rgb(163, 165, 170);
}

html body dt {
  color: rgb(163, 165, 170);
}

html body ol > li {
  color: rgb(163, 165, 170);
}

html body ol.overflow {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body ul > li {
  color: rgb(163, 165, 170);
}

html body ul.overflow {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(116, 89, 61);
  text-decoration: rgb(116, 89, 61);
}

html body blockquote {
  background-color: rgba(176, 167, 158, 0.035);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body table {
  color: rgb(163, 165, 170);
  width: 227.125px;
}

html body td {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(163, 165, 170);
}

html body th {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(163, 165, 170);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
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

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html body pre > code, html pre:has(> code) {
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

html body pre:has(> code) {
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
    images: `html body audio {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body figcaption {
  color: rgb(163, 165, 170);
}

html body figure {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body img {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body video {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    embeds: `html body .file-embed {
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

html body .footnotes {
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html body .transclude {
  border-bottom-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body .transclude-inner {
  border-bottom-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(163, 165, 170);
  text-decoration: line-through rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(116, 89, 61);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(116, 89, 61);
  border-right-color: rgb(116, 89, 61);
  border-top-color: rgb(116, 89, 61);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}`,
    callouts: `html body .callout .callout-title {
  border-bottom-color: rgb(116, 89, 61);
  border-left-color: rgb(116, 89, 61);
  border-right-color: rgb(116, 89, 61);
  border-top-color: rgb(116, 89, 61);
}

html body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}`,
    search: `html body .search > .search-button {
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

html body .search > .search-container > .search-space {
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

html body .search > .search-container > .search-space > * {
  color: rgb(163, 165, 170);
  outline: rgb(163, 165, 170) none 0px;
  text-decoration: rgb(163, 165, 170);
  text-decoration-color: rgb(163, 165, 170);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(163, 165, 170);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(163, 165, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(163, 165, 170);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(163, 165, 170);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(98, 101, 106);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(98, 101, 106);
  border-right-color: rgb(98, 101, 106);
  border-top-color: rgb(98, 101, 106);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 15, 16);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
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

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(163, 165, 170);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0);
}

html body a.internal.tag-link::before {
  color: rgb(116, 89, 61);
}

html body h1 {
  color: rgb(163, 165, 170);
}

html body h2 {
  color: rgb(163, 165, 170);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(116, 89, 61);
}

html body h3 {
  color: rgb(163, 165, 170);
}

html body h4 {
  color: rgb(163, 165, 170);
}

html body h5 {
  color: rgb(163, 165, 170);
}

html body h6 {
  color: rgb(163, 165, 170);
}

html body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html body .callout {
  border-bottom-color: rgba(55, 38, 34, 0.553);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  border-bottom-style: dotted;
  border-bottom-width: 1px;
  border-left-color: rgba(55, 38, 34, 0.553);
  border-left-style: dotted;
  border-left-width: 1px;
  border-right-color: rgba(55, 38, 34, 0.553);
  border-right-style: dotted;
  border-right-width: 1px;
  border-top-color: rgba(55, 38, 34, 0.553);
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-top-style: dotted;
  border-top-width: 1px;
}

html body ::-webkit-scrollbar {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}

html body ::-webkit-scrollbar-track {
  background: rgb(17, 15, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(17, 15, 16);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    graph: `html body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html body footer {
  background-color: rgb(17, 15, 16);
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
  border-top-color: rgba(0, 0, 0, 0);
  border-top-left-radius: 0px;
  color: rgb(163, 165, 170);
}

html body footer ul li a {
  color: rgb(163, 165, 170);
  text-decoration: rgb(163, 165, 170);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(163, 165, 170);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(86, 65, 52);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body li.section-li > .section .meta {
  color: rgb(86, 65, 52);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(86, 65, 52);
  text-decoration: rgb(86, 65, 52);
}

html body ul.section-ul {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}`,
    darkmode: `html body .darkmode {
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

html body .darkmode svg {
  color: rgb(116, 89, 61);
  stroke: rgb(116, 89, 61);
}`,
    breadcrumbs: `html body .breadcrumb-container {
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

html body .breadcrumb-element p {
  color: rgb(116, 89, 61);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html body .metadata {
  border-bottom-color: rgb(55, 38, 34);
  border-left-color: rgb(55, 38, 34);
  border-right-color: rgb(55, 38, 34);
  border-top-color: rgb(55, 38, 34);
  color: rgb(163, 165, 170);
}

html body .metadata-properties {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html body .navigation-progress {
  background-color: rgb(17, 15, 16);
}

html body .page-header h2.page-title {
  color: rgb(163, 165, 170);
}

html body abbr {
  color: rgb(163, 165, 170);
  text-decoration: underline dotted rgb(163, 165, 170);
}

html body details {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body input[type=text] {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
  color: rgb(163, 165, 170);
}

html body kbd {
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

html body progress {
  border-bottom-color: rgb(163, 165, 170);
  border-left-color: rgb(163, 165, 170);
  border-right-color: rgb(163, 165, 170);
  border-top-color: rgb(163, 165, 170);
}

html body sub {
  color: rgb(163, 165, 170);
}

html body summary {
  color: rgb(163, 165, 170);
}

html body sup {
  color: rgb(163, 165, 170);
}`,
  },
  light: {},
};
