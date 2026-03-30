import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "pisum", modes: ["dark"], variations: [], fonts: ["monaco"] },
  dark: {
    base: `:root:root {
  --background-accent: #fff !important;
  --background-modifier-border: #f2e5bc !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #470000 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.2) !important;
  --background-modifier-success: #197300 !important;
  --background-primary: #364549 !important;
  --background-primary-alt: #2C383A !important;
  --background-secondary: #415358 !important;
  --background-secondary-alt: #2C383A !important;
  --bases-cards-background: #364549 !important;
  --bases-cards-cover-background: #2C383A !important;
  --bases-cards-shadow: 0 0 0 1px #f2e5bc !important;
  --bases-embed-border-color: #f2e5bc !important;
  --bases-group-heading-property-color: #d5c4a1 !important;
  --bases-table-border-color: #f2e5bc !important;
  --bases-table-cell-background-active: #364549 !important;
  --bases-table-cell-background-disabled: #2C383A !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #b57614 !important;
  --bases-table-group-background: #2C383A !important;
  --bases-table-header-background: #364549 !important;
  --bases-table-header-color: #d5c4a1 !important;
  --bases-table-summary-background: #364549 !important;
  --blockquote-border: #b57614 !important;
  --blockquote-border-color: #b57614 !important;
  --blur-background: color-mix(in srgb, #b57614 65%, transparent) linear-gradient(#b57614, color-mix(in srgb, #b57614 65%, transparent)) !important;
  --border-color: #504945 !important;
  --canvas-background: #364549 !important;
  --canvas-card-label-color: #bdae93 !important;
  --caret-color: #fbf1c7 !important;
  --checkbox-border-color: #bdae93 !important;
  --checkbox-border-color-hover: #d5c4a1 !important;
  --checkbox-color: #b57614 !important;
  --checkbox-color-hover: #fe8019 !important;
  --checkbox-marker-color: #364549 !important;
  --checklist-done-color: #d5c4a1 !important;
  --code-background: #2C383A !important;
  --code-block: #b48ead !important;
  --code-border-color: #f2e5bc !important;
  --code-comment: #bdae93 !important;
  --code-normal: #fbf1c7 !important;
  --code-punctuation: #d5c4a1 !important;
  --collapse-icon-color: #bdae93 !important;
  --collapse-icon-color-collapsed: #fe8019 !important;
  --dark: #fbf1c7 !important;
  --darkgray: #fbf1c7 !important;
  --divider-color: #f2e5bc !important;
  --divider-color-hover: #b57614 !important;
  --dropdown-background: #b57614 !important;
  --dropdown-background-hover: #fe8019 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f2e5bc, inset 0 0 0 1px #f2e5bc !important;
  --embed-border-start: 2px solid #b57614 !important;
  --file-header-background: #364549 !important;
  --file-header-background-focused: #364549 !important;
  --flair-background: #b57614 !important;
  --flair-color: #fbf1c7 !important;
  --font-family-editor: Avenir, Avenir Next, sans-serif !important;
  --font-family-preview: Avenir, Avenir Next, sans-serif !important;
  --font-size-code: 13.5px !important;
  --font-size-h1: 23px !important;
  --font-size-h2: 22px !important;
  --font-size-h3: 21px !important;
  --font-size-h4: 20px !important;
  --font-size-h5: 19px !important;
  --font-size-h6: 18px !important;
  --font-size-normal: 15px !important;
  --font-size-side-dock: 13.5px !important;
  --font-size-side-dock-title: 15px !important;
  --font-size-status-bar: 12px !important;
  --footnote-divider-color: #f2e5bc !important;
  --footnote-id-color: #d5c4a1 !important;
  --footnote-id-color-no-occurrences: #bdae93 !important;
  --graph-node: #d5c4a1 !important;
  --graph-node-focused: #fe8019 !important;
  --graph-node-unresolved: #bdae93 !important;
  --graph-text: #fbf1c7 !important;
  --gray: #d5c4a1 !important;
  --heading-formatting: #bdae93 !important;
  --highlight: rgba(181, 118, 20, 0.5) !important;
  --hover-bg: rgba(0, 0, 0, 0.5) !important;
  --hr-color: #f2e5bc !important;
  --icon-color: #d5c4a1 !important;
  --icon-color-active: #fe8019 !important;
  --icon-color-focused: #fbf1c7 !important;
  --icon-color-hover: #d5c4a1 !important;
  --inline-code: #b48ead !important;
  --input-date-separator: #bdae93 !important;
  --input-placeholder-color: #bdae93 !important;
  --interactive-accent: #b57614 !important;
  --interactive-accent-hover: #fe8019 !important;
  --interactive-accent-rgb: 123, 108, 217 !important;
  --interactive-hover: #fe8019 !important;
  --interactive-normal: #b57614 !important;
  --light: #364549 !important;
  --lightgray: #415358 !important;
  --link-color: #fe8019 !important;
  --link-color-hover: #83a598 !important;
  --link-external-color: #fe8019 !important;
  --link-external-color-hover: #83a598 !important;
  --link-unresolved-color: #fe8019 !important;
  --list-marker-color: #bdae93 !important;
  --list-marker-color-collapsed: #fe8019 !important;
  --list-marker-color-hover: #d5c4a1 !important;
  --menu-background: #415358 !important;
  --metadata-border-color: #f2e5bc !important;
  --metadata-divider-color: #f2e5bc !important;
  --metadata-input-text-color: #fbf1c7 !important;
  --metadata-label-text-color: #d5c4a1 !important;
  --metadata-label-text-color-hover: #d5c4a1 !important;
  --modal-background: #364549 !important;
  --nav-collapse-icon-color: #bdae93 !important;
  --nav-collapse-icon-color-collapsed: #bdae93 !important;
  --nav-heading-color: #fbf1c7 !important;
  --nav-heading-color-collapsed: #bdae93 !important;
  --nav-heading-color-collapsed-hover: #d5c4a1 !important;
  --nav-heading-color-hover: #fbf1c7 !important;
  --nav-item-color: #d5c4a1 !important;
  --nav-item-color-active: #fbf1c7 !important;
  --nav-item-color-highlighted: #fe8019 !important;
  --nav-item-color-hover: #fbf1c7 !important;
  --nav-item-color-selected: #fbf1c7 !important;
  --nav-tag-color: #bdae93 !important;
  --nav-tag-color-active: #d5c4a1 !important;
  --nav-tag-color-hover: #d5c4a1 !important;
  --pdf-background: #364549 !important;
  --pdf-page-background: #364549 !important;
  --pdf-shadow: 0 0 0 1px #f2e5bc !important;
  --pdf-sidebar-background: #364549 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #f2e5bc !important;
  --pill-border-color: #f2e5bc !important;
  --pill-color: #d5c4a1 !important;
  --pill-color-hover: #fbf1c7 !important;
  --pill-color-remove: #bdae93 !important;
  --pill-color-remove-hover: #fe8019 !important;
  --pre-code-bg: rgba(0, 0, 0, 0.2) !important;
  --prompt-background: #364549 !important;
  --raised-background: color-mix(in srgb, #b57614 65%, transparent) linear-gradient(#b57614, color-mix(in srgb, #b57614 65%, transparent)) !important;
  --ribbon-background: #415358 !important;
  --ribbon-background-collapsed: #364549 !important;
  --scrollbar-active-thumb-bg: rgba(0, 0, 0, 0.4) !important;
  --scrollbar-bg: rgba(0, 0, 0, 0.05) !important;
  --scrollbar-thumb-bg: rgba(0, 0, 0, 0.2) !important;
  --search-clear-button-color: #d5c4a1 !important;
  --search-icon-color: #d5c4a1 !important;
  --search-result-background: #364549 !important;
  --secondary: #fe8019 !important;
  --setting-group-heading-color: #fbf1c7 !important;
  --setting-items-background: #2C383A !important;
  --setting-items-border-color: #f2e5bc !important;
  --slider-track-background: #f2e5bc !important;
  --status-bar-background: #415358 !important;
  --status-bar-border-color: #f2e5bc !important;
  --status-bar-text-color: #d5c4a1 !important;
  --suggestion-background: #364549 !important;
  --tab-background-active: #364549 !important;
  --tab-container-background: #415358 !important;
  --tab-outline-color: #f2e5bc !important;
  --tab-switcher-background: #415358 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #415358, transparent) !important;
  --tab-text-color: #bdae93 !important;
  --tab-text-color-active: #d5c4a1 !important;
  --tab-text-color-focused: #d5c4a1 !important;
  --tab-text-color-focused-active: #d5c4a1 !important;
  --tab-text-color-focused-active-current: #fbf1c7 !important;
  --tab-text-color-focused-highlighted: #fe8019 !important;
  --table-add-button-border-color: #f2e5bc !important;
  --table-border-color: #f2e5bc !important;
  --table-drag-handle-background-active: #b57614 !important;
  --table-drag-handle-color: #bdae93 !important;
  --table-drag-handle-color-active: #fbf1c7 !important;
  --table-header-border-color: #f2e5bc !important;
  --table-header-color: #fbf1c7 !important;
  --table-selection-border-color: #b57614 !important;
  --tag-color: #fe8019 !important;
  --tag-color-hover: #fe8019 !important;
  --tertiary: #83a598 !important;
  --text-accent: #fe8019 !important;
  --text-accent-hover: #83a598 !important;
  --text-error: #800000 !important;
  --text-error-hover: #990000 !important;
  --text-faint: #bdae93 !important;
  --text-highlight-bg: rgba(181, 118, 20, 0.5) !important;
  --text-muted: #d5c4a1 !important;
  --text-normal: #fbf1c7 !important;
  --text-on-accent: #fbf1c7 !important;
  --text-selection: rgba(89, 75, 95, 0.99) !important;
  --text-title-h1: #d65d0e !important;
  --text-title-h2: #d79921 !important;
  --text-title-h3: #98971a !important;
  --text-title-h4: #689d6a !important;
  --text-title-h5: #458588 !important;
  --text-title-h6: #b16286 !important;
  --textHighlight: rgba(181, 118, 20, 0.5) !important;
  --titlebar-background: #415358 !important;
  --titlebar-background-focused: #2C383A !important;
  --titlebar-border-color: #f2e5bc !important;
  --titlebar-text-color: #d5c4a1 !important;
  --titlebar-text-color-focused: #fbf1c7 !important;
  --vault-profile-color: #fbf1c7 !important;
  --vault-profile-color-hover: #fbf1c7 !important;
  --vim-cursor: #d65d0e !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(65, 83, 88);
  color: rgb(251, 241, 199);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(54, 69, 73);
  color: rgb(251, 241, 199);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(65, 83, 88);
  color: rgb(251, 241, 199);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(242, 229, 188);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(65, 83, 88);
  border-left-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
}

html body div#quartz-root {
  background-color: rgb(54, 69, 73);
  color: rgb(251, 241, 199);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html body .page article p > em, html em {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}

html body .page article p > i, html i {
  color: rgb(213, 196, 161);
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}

html body .page article p > strong, html strong {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html body .text-highlight {
  background-color: rgba(181, 118, 20, 0.5);
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html body del {
  color: rgb(251, 241, 199);
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html body p {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `html body a.external, html footer a {
  color: rgb(254, 128, 25);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(254, 128, 25) none 0px;
  text-decoration-color: rgb(254, 128, 25);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(254, 128, 25);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(254, 128, 25) none 0px;
  text-decoration-color: rgb(254, 128, 25);
}

html body a.internal.broken {
  color: rgb(254, 128, 25);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(254, 128, 25) none 0px;
  text-decoration-color: rgb(254, 128, 25);
}`,
    lists: `html body dd {
  color: rgb(251, 241, 199);
}

html body dl {
  margin-bottom: 15px;
  margin-top: 15px;
}

html body dt {
  color: rgb(251, 241, 199);
}

html body ol > li {
  color: rgb(251, 241, 199);
}

html body ol.overflow {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body ul > li {
  color: rgb(251, 241, 199);
}

html body ul.overflow {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(189, 174, 147);
}

html body blockquote {
  background-color: rgba(0, 0, 0, 0.2);
  font-family: Avenir, "Avenir Next", sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body table {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
  width: 195.062px;
}

html body td {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
}

html body th {
  background-color: rgb(65, 83, 88);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
  font-weight: 800;
}

html body thead {
  border-bottom-color: rgb(242, 229, 188);
  border-bottom-style: solid;
  border-bottom-width: 3px;
}

html body tr {
  border-bottom-color: rgb(242, 229, 188);
}`,
    code: `html body code {
  border-bottom-color: rgb(189, 174, 147);
  border-left-color: rgb(189, 174, 147);
  border-right-color: rgb(189, 174, 147);
  border-top-color: rgb(189, 174, 147);
  color: rgb(189, 174, 147);
  font-family: monaco;
  padding-bottom: 6px;
  padding-left: 6px;
  padding-right: 6px;
  padding-top: 6px;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(189, 174, 147);
}

html body pre > code > [data-line] {
  border-left-color: rgb(221, 74, 104);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(221, 74, 104);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(221, 74, 104);
  border-left-color: rgb(221, 74, 104);
  border-right-color: rgb(221, 74, 104);
  border-top-color: rgb(221, 74, 104);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

html body pre:has(> code) {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body figcaption {
  color: rgb(251, 241, 199);
  font-size: 15px;
}

html body figure {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  margin-bottom: 15px;
  margin-top: 15px;
}

html body img {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body video {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

html body .footnotes {
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html body .transclude {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(181, 118, 20);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body .transclude-inner {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(181, 118, 20);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  margin-right: 0px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(251, 241, 199);
  text-decoration-color: rgb(251, 241, 199);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(54, 69, 73);
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.2);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(54, 69, 73);
}

html body .search > .search-container > .search-space > * {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
  outline: rgb(251, 241, 199) none 0px;
  text-decoration-color: rgb(251, 241, 199);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(251, 241, 199);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(251, 241, 199);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(65, 83, 88);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(251, 241, 199);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  border-bottom-left-radius: 26.25px;
  border-bottom-right-radius: 26.25px;
  border-top-left-radius: 26.25px;
  border-top-right-radius: 26.25px;
}

html body a.internal.tag-link::before {
  color: rgb(254, 128, 25);
}

html body h1 {
  color: rgb(214, 93, 14);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2 {
  color: rgb(215, 153, 33);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h3 {
  color: rgb(152, 151, 26);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h4 {
  color: rgb(104, 157, 106);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h5 {
  color: rgb(69, 133, 136);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body h6 {
  color: rgb(177, 98, 134);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body hr {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}

html body ::-webkit-scrollbar-track {
  background: rgb(54, 69, 73) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(54, 69, 73);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `html body footer {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(213, 196, 161);
  border-top-width: 0px;
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body footer ul li a {
  color: rgb(213, 196, 161);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(251, 241, 199);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
}

html body ul.section-ul {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body .breadcrumb-element p {
  color: rgb(189, 174, 147);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
}

html body .metadata {
  border-bottom-color: rgb(242, 229, 188);
  border-left-color: rgb(242, 229, 188);
  border-right-color: rgb(242, 229, 188);
  border-top-color: rgb(242, 229, 188);
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: Avenir, "Avenir Next", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(44, 56, 58);
}

html body .page-header h2.page-title {
  color: rgb(251, 241, 199);
}

html body abbr {
  color: rgb(251, 241, 199);
}

html body details {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

html body kbd {
  background-color: rgb(44, 56, 58);
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
  color: rgb(251, 241, 199);
  font-size: 13.125px;
  padding-bottom: 1.3125px;
  padding-left: 3.28125px;
  padding-right: 3.28125px;
  padding-top: 1.3125px;
}

html body progress {
  border-bottom-color: rgb(251, 241, 199);
  border-left-color: rgb(251, 241, 199);
  border-right-color: rgb(251, 241, 199);
  border-top-color: rgb(251, 241, 199);
}

html body sub {
  color: rgb(251, 241, 199);
  font-size: 12.5px;
}

html body summary {
  color: rgb(251, 241, 199);
}

html body sup {
  color: rgb(251, 241, 199);
  font-size: 12.5px;
}`,
  },
  light: {},
};
