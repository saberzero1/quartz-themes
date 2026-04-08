import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "dark-moss", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --altblue: #0087ff !important;
  --aqua: #078480 !important;
  --aquadark: #0b4c5e !important;
  --background-accent: #000 !important;
  --background-modifier-active-hover: hsl(224deg 23% 45% / 15%) !important;
  --background-modifier-border: #424958 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #ff0f44 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #15df6b !important;
  --background-primary: #161b22 !important;
  --background-primary-alt: #13161b !important;
  --background-secondary: #11161d !important;
  --background-secondary-alt: #0d1117 !important;
  --bases-cards-background: #161b22 !important;
  --bases-cards-cover-background: #13161b !important;
  --bases-cards-shadow: 0 0 0 1px #424958 !important;
  --bases-embed-border-color: #424958 !important;
  --bases-group-heading-property-color: #bbb !important;
  --bases-table-border-color: #424958 !important;
  --bases-table-cell-background-active: #161b22 !important;
  --bases-table-cell-background-disabled: #13161b !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #4c78cc !important;
  --bases-table-group-background: #13161b !important;
  --bases-table-header-background: #161b22 !important;
  --bases-table-header-color: #bbb !important;
  --bases-table-summary-background: #161b22 !important;
  --blockquote-border-color: #4c78cc !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --bodyFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #161b22 !important;
  --caret-color: #dedede !important;
  --checkbox-border-color-hover: #bbb !important;
  --checkbox-color: #4c78cc !important;
  --checkbox-color-hover: #5082df !important;
  --checkbox-marker-color: #161b22 !important;
  --checklist-done-color: #bbb !important;
  --code-background: #13161b !important;
  --code-border-color: #424958 !important;
  --code-normal: #dedede !important;
  --code-punctuation: #bbb !important;
  --codeFont: "Consolas", "Fira Code", "Source Code Pro", "Droid Sans Mono", "Monoid", "Arial", sans-serif !important;
  --collapse-icon-color-collapsed: hsl(152, 39%, 51%) !important;
  --cyan: #0fb3ff !important;
  --dark: #dedede !important;
  --darkgray: #dedede !important;
  --default-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif !important;
  --divider-color: #424958 !important;
  --divider-color-hover: #4c78cc !important;
  --dropdown-background: #20242b !important;
  --dropdown-background-hover: #353b47 !important;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958 !important;
  --embed-border-start: 2px solid #4c78cc !important;
  --file-header-background: #161b22 !important;
  --file-header-background-focused: #161b22 !important;
  --file-header-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 1000px !important;
  --flair-background: #20242b !important;
  --flair-color: #dedede !important;
  --font-interface: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Consolas", "Fira Code", "Source Code Pro", "Droid Sans Mono", "Monoid", "Arial", sans-serif !important;
  --font-weight-title: 600 !important;
  --footnote-divider-color: #424958 !important;
  --footnote-id-color: #bbb !important;
  --graph-node: #bbb !important;
  --graph-node-focused: hsl(152, 39%, 51%) !important;
  --graph-text: #dedede !important;
  --gray: #bbb !important;
  --gray-1: #5C6370 !important;
  --green: #15df6b !important;
  --green-light: #42accd !important;
  --headerFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: rgba(190, 30, 150, 0.7) !important;
  --hr-color: #424958 !important;
  --icon-color: #bbb !important;
  --icon-color-active: hsl(152, 39%, 51%) !important;
  --icon-color-focused: #dedede !important;
  --icon-color-hover: #bbb !important;
  --interactive-accent: #4c78cc !important;
  --interactive-accent-hover: #5082df !important;
  --interactive-accent-rgb: 76, 120, 204 !important;
  --interactive-hover: #353b47 !important;
  --interactive-normal: #20242b !important;
  --light: #161b22 !important;
  --light-orange: #ff693f !important;
  --lightgray: #11161d !important;
  --lila: #c90481 !important;
  --lime: #b2f711 !important;
  --line-height-headers: 1 !important;
  --link-color: hsl(152, 39%, 51%) !important;
  --link-color-hover: hsl(152, 69%, 61%) !important;
  --link-external-color: hsl(152, 39%, 51%) !important;
  --link-external-color-hover: hsl(152, 69%, 61%) !important;
  --link-unresolved-color: hsl(152, 39%, 51%) !important;
  --list-marker-color-collapsed: hsl(152, 39%, 51%) !important;
  --list-marker-color-hover: #bbb !important;
  --magenta: #ff2857 !important;
  --menu-background: #11161d !important;
  --metadata-border-color: #424958 !important;
  --metadata-divider-color: #424958 !important;
  --metadata-input-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #dedede !important;
  --metadata-label-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #bbb !important;
  --metadata-label-text-color-hover: #bbb !important;
  --modal-background: #161b22 !important;
  --nav-heading-color: #dedede !important;
  --nav-heading-color-collapsed-hover: #bbb !important;
  --nav-heading-color-hover: #dedede !important;
  --nav-item-color: #bbb !important;
  --nav-item-color-active: #dedede !important;
  --nav-item-color-highlighted: hsl(152, 39%, 51%) !important;
  --nav-item-color-hover: #dedede !important;
  --nav-item-color-selected: #dedede !important;
  --nav-tag-color-active: #bbb !important;
  --nav-tag-color-hover: #bbb !important;
  --orange: #ffc83f !important;
  --panel-border-color: #18191e !important;
  --pdf-background: #161b22 !important;
  --pdf-page-background: #161b22 !important;
  --pdf-shadow: 0 0 0 1px #424958 !important;
  --pdf-sidebar-background: #161b22 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #424958 !important;
  --peach: #ff5555 !important;
  --pill-border-color: #424958 !important;
  --pill-color: #bbb !important;
  --pill-color-hover: #dedede !important;
  --pill-color-remove-hover: hsl(152, 39%, 51%) !important;
  --prompt-background: #161b22 !important;
  --purple: #8c44aa !important;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --red: #ff0f44 !important;
  --ribbon-background: #11161d !important;
  --ribbon-background-collapsed: #161b22 !important;
  --search-clear-button-color: #bbb !important;
  --search-icon-color: #bbb !important;
  --search-match-color: #ffff00 !important;
  --search-other-match-color: #ff9632 !important;
  --search-result-background: #161b22 !important;
  --secondary: hsl(152, 39%, 51%) !important;
  --setting-group-heading-color: #dedede !important;
  --setting-items-background: #13161b !important;
  --setting-items-border-color: #424958 !important;
  --slider-track-background: #424958 !important;
  --status-bar-background: #11161d !important;
  --status-bar-border-color: #424958 !important;
  --status-bar-text-color: #bbb !important;
  --suggestion-background: #161b22 !important;
  --tab-background-active: #161b22 !important;
  --tab-container-background: #11161d !important;
  --tab-outline-color: #424958 !important;
  --tab-switcher-background: #11161d !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #11161d, transparent) !important;
  --tab-text-color-active: #bbb !important;
  --tab-text-color-focused: #bbb !important;
  --tab-text-color-focused-active: #bbb !important;
  --tab-text-color-focused-active-current: #dedede !important;
  --tab-text-color-focused-highlighted: hsl(152, 39%, 51%) !important;
  --table-add-button-border-color: #424958 !important;
  --table-border-color: #424958 !important;
  --table-drag-handle-background-active: #4c78cc !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #424958 !important;
  --table-header-color: #dedede !important;
  --table-selection-border-color: #4c78cc !important;
  --tag-color: hsl(152, 39%, 51%) !important;
  --tag-color-hover: hsl(152, 39%, 51%) !important;
  --tertiary: hsl(152, 69%, 61%) !important;
  --text-accent: hsl(152, 39%, 51%) !important;
  --text-accent-hover: hsl(152, 69%, 61%) !important;
  --text-accent1: #61d29d !important;
  --text-accent2: #00ddff !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-highlight-bg: rgba(190, 30, 150, 0.7) !important;
  --text-muted: #bbb !important;
  --text-normal: #dedede !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --text-title-h1: #289aff !important;
  --text-title-h2: #00f56a !important;
  --text-title-h3: #0af7ff !important;
  --text-title-h4: #F9F871 !important;
  --text-title-h5: #ff5757 !important;
  --text-title-h6: #ff3cd5 !important;
  --textHighlight: rgba(190, 30, 150, 0.7) !important;
  --titleFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #11161d !important;
  --titlebar-background-focused: #0d1117 !important;
  --titlebar-border-color: #424958 !important;
  --titlebar-text-color: #bbb !important;
  --titlebar-text-color-focused: #dedede !important;
  --vault-profile-color: #dedede !important;
  --vault-profile-color-hover: #dedede !important;
  --yellow: #fccd11 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

html body .bases-table thead th {
  border-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html body .canvas-node {
  border-color: rgb(222, 222, 222);
}

html body .canvas-node-content {
  color: rgb(222, 222, 222);
}

html body .canvas-node-file {
  color: rgb(222, 222, 222);
}

html body .canvas-node-group {
  border-color: rgb(222, 222, 222);
}

html body .canvas-sidebar {
  background-color: rgb(17, 22, 29);
  border-color: rgb(222, 222, 222);
}

html body .note-properties {
  border-color: rgb(66, 73, 88);
}

html body .note-properties-key {
  color: rgb(187, 187, 187);
}

html body .note-properties-row {
  border-color: rgb(187, 187, 187);
}

html body .note-properties-tags {
  color: rgb(81, 179, 133);
}

html body .note-properties-value {
  color: rgb(187, 187, 187);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(66, 73, 88);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 22, 29);
  border-left-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html body div#quartz-root {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html body .page article p > i, html i {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgba(190, 30, 150, 0.7);
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html body del {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html body h1.article-title {
  color: rgb(222, 222, 222);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(76, 120, 204);
  border-color: rgb(76, 120, 204);
}

html body p {
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `html body a.external, html footer a {
  color: rgb(81, 179, 133);
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html body a.internal.broken {
  color: rgb(81, 179, 133);
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(222, 222, 222);
}

html body dt {
  color: rgb(222, 222, 222);
}

html body ol > li {
  color: rgb(222, 222, 222);
}

html body ol.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body ul > li {
  color: rgb(222, 222, 222);
}

html body ul.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    blockquotes: `html body blockquote {
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body table {
  color: rgb(222, 222, 222);
}

html body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}`,
    code: `html body code {
  border-bottom-color: rgb(15, 179, 255);
  border-left-color: rgb(15, 179, 255);
  border-right-color: rgb(15, 179, 255);
  border-top-color: rgb(15, 179, 255);
  color: rgb(15, 179, 255);
  font-family: Consolas, "Fira Code", "Source Code Pro", "Droid Sans Mono", Monoid, Arial, sans-serif;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}

html body pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body figcaption {
  color: rgb(222, 222, 222);
}

html body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body img {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body video {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(76, 120, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `html body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(22, 27, 34);
}

html body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 22, 29);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(81, 179, 133);
}

html body h1 {
  color: rgb(40, 154, 255);
}

html body h2 {
  color: rgb(0, 245, 106);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(222, 222, 222);
}

html body h3 {
  color: rgb(10, 247, 255);
}

html body h4 {
  color: rgb(249, 248, 113);
}

html body h5 {
  color: rgb(255, 87, 87);
}

html body h6 {
  color: rgb(255, 60, 213);
}

html body hr {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html body ::-webkit-scrollbar-track {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(222, 222, 222);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `html body footer {
  background-color: rgb(17, 22, 29);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(187, 187, 187);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .breadcrumb-element p {
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(187, 187, 187);
}

html body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html body .navigation-progress {
  background-color: rgb(17, 22, 29);
}

html body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(222, 222, 222);
}

html body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body input[type=text] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: Consolas, "Fira Code", "Source Code Pro", "Droid Sans Mono", Monoid, Arial, sans-serif;
}

html body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html body sub {
  color: rgb(222, 222, 222);
}

html body summary {
  color: rgb(222, 222, 222);
}

html body sup {
  color: rgb(222, 222, 222);
}

html body ul.tags > li {
  color: rgb(88, 166, 255);
}`,
  },
  light: {},
};
