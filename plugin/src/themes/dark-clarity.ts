import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "dark-clarity",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["noto-sans", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
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
  --canvas-background: #161b22 !important;
  --caret-color: #dedede !important;
  --checkbox-border-color-hover: #bbb !important;
  --checkbox-color: #4c78cc !important;
  --checkbox-color-hover: #5082df !important;
  --checkbox-marker-color: #161b22 !important;
  --checklist-done-color: #bbb !important;
  --code-background: #13161b !important;
  --code-border-color: #424958 !important;
  --code-function: #BCBEC4 !important;
  --code-keyword: #CF8E6D !important;
  --code-normal: #dedede !important;
  --code-property: #BCBEC4 !important;
  --code-punctuation: #bbb !important;
  --code-string: #72b67b !important;
  --code-tag: #c5bf6a !important;
  --code-value: #4a88cf !important;
  --collapse-icon-color-collapsed: #51b385 !important;
  --cyan: #0fb3ff !important;
  --dark: #dedede !important;
  --darkgray: #dedede !important;
  --divider-color: #424958 !important;
  --divider-color-hover: #4c78cc !important;
  --dropdown-background: #20242b !important;
  --dropdown-background-hover: #353b47 !important;
  --embed-block-shadow-hover: 0 0 0 1px #424958, inset 0 0 0 1px #424958 !important;
  --embed-border-start: 2px solid #4c78cc !important;
  --file-header-background: #161b22 !important;
  --file-header-background-focused: #161b22 !important;
  --flair-background: #20242b !important;
  --flair-color: #dedede !important;
  --folder-alpha: 0.2 !important;
  --folder-color0: hsl( 214 21% 31% / 0.2) !important;
  --folder-color1: hsl( 246 87% 69% / 0.2) !important;
  --folder-color2: hsl( 245 75% 70% / 0.2) !important;
  --folder-color3: hsl( 240 35% 73% / 0.2) !important;
  --folder-color4: hsl( 13 84% 89%  / 0.2) !important;
  --folder-color5: hsl( 17 51% 66%  / 0.2) !important;
  --folder-color6: hsl( 11 59% 54%  / 0.2) !important;
  --font-weight-title: 600 !important;
  --footnote-divider-color: #424958 !important;
  --footnote-id-color: #bbb !important;
  --graph-node: #bbb !important;
  --graph-node-focused: #51b385 !important;
  --graph-text: #dedede !important;
  --gray: #bbb !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --green: #15df6b !important;
  --green-light: #42accd !important;
  --highlight: hsl(245,75%,63%,0.5) !important;
  --hr-color: #424958 !important;
  --icon-color: #bbb !important;
  --icon-color-active: #51b385 !important;
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
  --link-color: #51b385 !important;
  --link-color-hover: hsl(152, 69%, 61%) !important;
  --link-external-color: #51b385 !important;
  --link-external-color-hover: hsl(152, 69%, 61%) !important;
  --link-unresolved-color: #51b385 !important;
  --list-marker-color-collapsed: #51b385 !important;
  --list-marker-color-hover: #bbb !important;
  --magenta: #ff2857 !important;
  --menu-background: #11161d !important;
  --metadata-border-color: #424958 !important;
  --metadata-divider-color: #424958 !important;
  --metadata-input-text-color: #dedede !important;
  --metadata-label-text-color: #bbb !important;
  --metadata-label-text-color-hover: #bbb !important;
  --modal-background: #161b22 !important;
  --nav-heading-color: #dedede !important;
  --nav-heading-color-collapsed-hover: #bbb !important;
  --nav-heading-color-hover: #dedede !important;
  --nav-item-color: #bbb !important;
  --nav-item-color-active: #dedede !important;
  --nav-item-color-highlighted: #51b385 !important;
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
  --pill-color-remove-hover: #51b385 !important;
  --prompt-background: #161b22 !important;
  --purple: #8c44aa !important;
  --quote-color: rgb(61, 154, 216) !important;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --red: #ff0f44 !important;
  --ribbon-background: #11161d !important;
  --ribbon-background-collapsed: #161b22 !important;
  --search-clear-button-color: #bbb !important;
  --search-icon-color: #bbb !important;
  --search-match-color: #ffff00 !important;
  --search-other-match-color: #ff9632 !important;
  --search-result-background: #161b22 !important;
  --secondary: #51b385 !important;
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
  --tab-text-color-focused-highlighted: #51b385 !important;
  --table-add-button-border-color: #424958 !important;
  --table-border-color: #424958 !important;
  --table-drag-handle-background-active: #4c78cc !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #424958 !important;
  --table-header-color: #dedede !important;
  --table-selection-border-color: #4c78cc !important;
  --tag-color: #58a6ff !important;
  --tag-color-hover: #449bff !important;
  --tertiary: hsl(152, 69%, 61%) !important;
  --text-accent: #51b385 !important;
  --text-accent-hover: hsl(152, 69%, 61%) !important;
  --text-accent1: #61d29d !important;
  --text-accent2: #00ddff !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-highlight-bg: hsl(245,75%,63%,0.5) !important;
  --text-muted: #bbb !important;
  --text-normal: #dedede !important;
  --text-on-accent: #dcddde !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --text-title-h1: hsl(246 87% 69%) !important;
  --text-title-h2: hsl(245 75% 70%) !important;
  --text-title-h3: hsl(240 35% 73%) !important;
  --text-title-h4: hsl(13 84% 89%) !important;
  --text-title-h5: hsl(17 51% 66%) !important;
  --text-title-h6: hsl(11 59% 54%) !important;
  --textHighlight: hsl(245,75%,63%,0.5) !important;
  --theme-color: hsl(245 75% 63%) !important;
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

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(17, 22, 29);
  border-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(88, 166, 255);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(17, 22, 29);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(17, 22, 29);
  border-left-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(22, 27, 34);
  color: rgb(222, 222, 222);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  font-weight: 800;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  font-weight: 800;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(102, 90, 231, 0.5);
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body del {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(76, 120, 204);
  border-color: rgb(76, 120, 204);
}

html[saved-theme="dark"] body p {
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(187, 187, 187) none 0px;
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body dt {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body table {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  width: 194.5px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(222, 222, 222);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(222, 222, 222);
  border-radius: 5px;
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: rgba(128, 128, 128, 0.3) 1px 1px 1px 0px;
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(76, 120, 204);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(222, 222, 222);
  text-decoration-color: rgb(222, 222, 222);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="folder"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(222, 222, 222) none 0px;
  text-decoration-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(17, 22, 29);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(88, 166, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(121, 107, 245);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(131, 121, 236);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(162, 162, 210);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(251, 214, 203);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(213, 149, 124);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(207, 94, 68);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(22, 27, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(22, 27, 34);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(222, 222, 222);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(17, 22, 29);
  border-bottom-color: rgb(24, 25, 30);
  border-bottom-width: 1px;
  border-left-color: rgb(24, 25, 30);
  border-right-color: rgb(24, 25, 30);
  border-right-width: 1px;
  border-top-color: rgb(24, 25, 30);
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(187, 187, 187);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(187, 187, 187);
  stroke: rgb(187, 187, 187);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(66, 73, 88);
  border-left-color: rgb(66, 73, 88);
  border-right-color: rgb(66, 73, 88);
  border-top-color: rgb(66, 73, 88);
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(17, 22, 29);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(222, 222, 222);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(19, 22, 27);
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
  color: rgb(222, 222, 222);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(222, 222, 222);
  border-left-color: rgb(222, 222, 222);
  border-right-color: rgb(222, 222, 222);
  border-top-color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sub {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body summary {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body sup {
  color: rgb(222, 222, 222);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(88, 166, 255);
}`,
  },
  light: {
    base: `:root:root {
  --altblue: #0087ff !important;
  --aqua: #078480 !important;
  --aquadark: #0b4c5e !important;
  --blue: #61afef !important;
  --code-function: #000000 !important;
  --code-keyword: #0033b3 !important;
  --code-normal: #080808 !important;
  --code-property: #871094 !important;
  --code-string: #067d17 !important;
  --code-tag: #0033b3 !important;
  --code-value: #1750eb !important;
  --collapse-icon-color-collapsed: #51b385 !important;
  --cyan: #0fb3ff !important;
  --folder-alpha: 0.2 !important;
  --folder-color0: hsl( 214 21% 31% / 0.2) !important;
  --folder-color1: hsl( 246 87% 69%  / 0.2) !important;
  --folder-color2: hsl( 245 89% 75%  / 0.2) !important;
  --folder-color3: hsl( 240 99% 84%  / 0.2) !important;
  --folder-color4: hsl( 14  99% 83%  / 0.2) !important;
  --folder-color5: hsl( 17  91% 77%  / 0.2) !important;
  --folder-color6: hsl( 11  89% 63%  / 0.2) !important;
  --font-weight-title: 700 !important;
  --graph-node-focused: #51b385 !important;
  --gray-1: #5C6370 !important;
  --gray-2: #abb2bf !important;
  --green: #15df6b !important;
  --green-light: #42accd !important;
  --highlight: hsl(245,100%,78%,0.52) !important;
  --icon-color-active: #51b385 !important;
  --light-orange: #ff693f !important;
  --lila: #c90481 !important;
  --lime: #b2f711 !important;
  --line-height-headers: 2 !important;
  --link-color: #51b385 !important;
  --link-color-hover: hsl(152, 69%, 61%) !important;
  --link-external-color: #51b385 !important;
  --link-external-color-hover: hsl(152, 69%, 61%) !important;
  --link-unresolved-color: #51b385 !important;
  --list-marker-color-collapsed: #51b385 !important;
  --magenta: #ff2857 !important;
  --nav-item-color-highlighted: #51b385 !important;
  --orange: #ffc83f !important;
  --peach: #ff5555 !important;
  --pill-color-remove-hover: #51b385 !important;
  --purple: #8c44aa !important;
  --quote-color: rgb(61, 154, 216) !important;
  --red: #ff0f44 !important;
  --search-match-color: #ffff00 !important;
  --search-other-match-color: #ff9632 !important;
  --secondary: #51b385 !important;
  --tab-text-color-focused-highlighted: #51b385 !important;
  --tag-color: #58a6ff !important;
  --tag-color-hover: #449bff !important;
  --tertiary: hsl(152, 69%, 61%) !important;
  --text-accent: #51b385 !important;
  --text-accent-hover: hsl(152, 69%, 61%) !important;
  --text-accent1: #61d29d !important;
  --text-accent2: #00ddff !important;
  --text-highlight-bg: hsl(245,100%,78%,0.52) !important;
  --text-title-h1: hsl(246 87% 69%) !important;
  --text-title-h2: hsl(245 89% 75%) !important;
  --text-title-h3: hsl(240 99% 84%) !important;
  --text-title-h4: hsl(14  99% 83%) !important;
  --text-title-h5: hsl(17  91% 77%) !important;
  --text-title-h6: hsl(11  89% 63%) !important;
  --textHighlight: hsl(245,100%,78%,0.52) !important;
  --theme-color: hsl(245 75% 63%) !important;
  --yellow: #fccd11 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(88, 166, 255);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(152, 143, 255, 0.52);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration-color: rgb(81, 179, 133);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(81, 179, 133);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  outline: rgb(81, 179, 133) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
  width: 194.5px;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}

html[saved-theme="light"] body pre:has(> code) {
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body img {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  box-shadow: rgba(128, 128, 128, 0.3) 1px 1px 1px 0px;
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="folder"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(88, 166, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(121, 107, 245);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(144, 135, 248);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(174, 174, 255);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(255, 189, 169);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(250, 173, 143);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(245, 107, 77);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  border-bottom-color: rgb(92, 92, 92);
  border-bottom-width: 1px;
  border-left-color: rgb(92, 92, 92);
  border-right-color: rgb(92, 92, 92);
  border-right-width: 1px;
  border-top-color: rgb(92, 92, 92);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "Zhudou Sans Normal SS02", 微软雅黑, "Segoe UI", OpenSans-Medium, sans-serif;
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(8, 8, 8);
  border-left-color: rgb(8, 8, 8);
  border-right-color: rgb(8, 8, 8);
  border-top-color: rgb(8, 8, 8);
  color: rgb(8, 8, 8);
  font-family: "JetBrains Mono NL", "JetBrains Mono", Consolas, Monaco, "等距更纱黑体 SC", monospace;
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(88, 166, 255);
}`,
  },
};
