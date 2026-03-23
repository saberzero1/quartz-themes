import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "venom", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --altblue: #0087ff !important;
  --aqua: #078480 !important;
  --aquadark: #0b4c5e !important;
  --background-accent: #ff0000 !important;
  --background-modifier-active-hover: rgb(0, 0, 0) !important;
  --background-modifier-border: #fff !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.6) !important;
  --background-modifier-error: #3d0000 !important;
  --background-modifier-error-hover: #ff0f44 !important;
  --background-modifier-error-rgb: 61, 0, 0 !important;
  --background-modifier-form-field: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-form-field-highlighted: rgba(0, 0, 0, 0.22) !important;
  --background-modifier-form-field-hover: rgba(0, 0, 0, 0.3) !important;
  --background-modifier-success: #15df6b !important;
  --background-primary: #1e303a !important;
  --background-primary-alt: #0c1520 !important;
  --background-secondary: #0c1520 !important;
  --background-secondary-alt: #0c1520 !important;
  --bases-cards-background: #1e303a !important;
  --bases-cards-cover-background: #0c1520 !important;
  --bases-cards-shadow: 0 0 0 1px #fff !important;
  --bases-embed-border-color: #fff !important;
  --bases-group-heading-property-color: #bbb !important;
  --bases-table-border-color: #fff !important;
  --bases-table-cell-background-active: #1e303a !important;
  --bases-table-cell-background-disabled: #0c1520 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #7f01fe !important;
  --bases-table-group-background: #0c1520 !important;
  --bases-table-header-background: #1e303a !important;
  --bases-table-header-color: #bbb !important;
  --bases-table-summary-background: #1e303a !important;
  --blockquote-border-color: #7f01fe !important;
  --blue: #61afef !important;
  --blur-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --bodyFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #1e303a !important;
  --caret-color: #fff !important;
  --checkbox-border-color-hover: #bbb !important;
  --checkbox-color: #7f01fe !important;
  --checkbox-color-hover: #5082df !important;
  --checkbox-marker-color: #1e303a !important;
  --checklist-done-color: #bbb !important;
  --code-background: #0c1520 !important;
  --code-border-color: #fff !important;
  --code-normal: #fff !important;
  --code-punctuation: #bbb !important;
  --codeFont: "Consolas", "Fira Code", "Source Code Pro", "Droid Sans Mono", "Monoid",
    "Arial", sans-serif !important;
  --collapse-icon-color-collapsed: #fff !important;
  --cyan: #0fb3ff !important;
  --dark: #fff !important;
  --darkgray: #fff !important;
  --default-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif !important;
  --divider-color: #fff !important;
  --divider-color-hover: #7f01fe !important;
  --dropdown-background: #20242b !important;
  --dropdown-background-hover: #353b47 !important;
  --embed-block-shadow-hover: 0 0 0 1px #fff, inset 0 0 0 1px #fff !important;
  --embed-border-start: 2px solid #7f01fe !important;
  --file-header-background: #1e303a !important;
  --file-header-background-focused: #1e303a !important;
  --file-header-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 1200px !important;
  --flair-background: #20242b !important;
  --flair-color: #fff !important;
  --font-interface: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Consolas", "Fira Code", "Source Code Pro", "Droid Sans Mono", "Monoid",
    "Arial", sans-serif !important;
  --font-weight-title: 600px !important;
  --footnote-divider-color: #fff !important;
  --footnote-id-color: #bbb !important;
  --graph-node: #bbb !important;
  --graph-node-focused: #fff !important;
  --graph-text: #fff !important;
  --gray: #bbb !important;
  --gray-1: #5c6370 !important;
  --green: #15df6b !important;
  --green-light: #42accd !important;
  --headerFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: #0c1520 !important;
  --hr-color: #fff !important;
  --icon-color: #bbb !important;
  --icon-color-active: #fff !important;
  --icon-color-focused: #fff !important;
  --icon-color-hover: #bbb !important;
  --interactive-accent: #7f01fe !important;
  --interactive-accent-hover: #5082df !important;
  --interactive-accent-rgb: 76, 120, 204 !important;
  --interactive-hover: #353b47 !important;
  --interactive-normal: #20242b !important;
  --light: #1e303a !important;
  --light-orange: #ff693f !important;
  --lightgray: #0c1520 !important;
  --lila: #c90481 !important;
  --lime: #b2f711 !important;
  --line-height-headers: 1 !important;
  --link-color: #fff !important;
  --link-color-hover: #b13d4c !important;
  --link-external-color: #fff !important;
  --link-external-color-hover: #b13d4c !important;
  --link-unresolved-color: #fff !important;
  --link_venom_bg_1: url("https://imgur.com/9OXj9sV.jpg") !important;
  --list-marker-color-collapsed: #fff !important;
  --list-marker-color-hover: #bbb !important;
  --magenta: #ff2857 !important;
  --menu-background: #0c1520 !important;
  --metadata-border-color: #fff !important;
  --metadata-divider-color: #fff !important;
  --metadata-input-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #fff !important;
  --metadata-label-font: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #bbb !important;
  --metadata-label-text-color-hover: #bbb !important;
  --modal-background: #1e303a !important;
  --nav-heading-color: #fff !important;
  --nav-heading-color-collapsed-hover: #bbb !important;
  --nav-heading-color-hover: #fff !important;
  --nav-item-color: #bbb !important;
  --nav-item-color-active: #fff !important;
  --nav-item-color-highlighted: #fff !important;
  --nav-item-color-hover: #fff !important;
  --nav-item-color-selected: #fff !important;
  --nav-tag-color-active: #bbb !important;
  --nav-tag-color-hover: #bbb !important;
  --orange: #ffc83f !important;
  --panel-border-color: #752126 !important;
  --pdf-background: #1e303a !important;
  --pdf-page-background: #1e303a !important;
  --pdf-shadow: 0 0 0 1px #fff !important;
  --pdf-sidebar-background: #1e303a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #fff !important;
  --peach: #ff5555 !important;
  --pill-border-color: #fff !important;
  --pill-color: #bbb !important;
  --pill-color-hover: #fff !important;
  --pill-color-remove-hover: #fff !important;
  --prompt-background: #1e303a !important;
  --purple: #8c44aa !important;
  --raised-background: color-mix(in srgb, #20242b 65%, transparent) linear-gradient(#20242b, color-mix(in srgb, #20242b 65%, transparent)) !important;
  --red: #ff0f44 !important;
  --ribbon-background: #0c1520 !important;
  --ribbon-background-collapsed: #1e303a !important;
  --scrollbar-active-thumb-bg: #7f01fe !important;
  --scrollbar-thumb-bg: #8e9599 !important;
  --search-clear-button-color: #bbb !important;
  --search-icon-color: #bbb !important;
  --search-match-color: #ffff00 !important;
  --search-other-match-color: #ff9632 !important;
  --search-result-background: #1e303a !important;
  --secondary: #fff !important;
  --setting-group-heading-color: #fff !important;
  --setting-items-background: #0c1520 !important;
  --setting-items-border-color: #fff !important;
  --slider-track-background: #fff !important;
  --status-bar-background: #0c1520 !important;
  --status-bar-border-color: #fff !important;
  --status-bar-text-color: #bbb !important;
  --suggestion-background: #1e303a !important;
  --tab-background-active: #1e303a !important;
  --tab-container-background: #0c1520 !important;
  --tab-outline-color: #fff !important;
  --tab-switcher-background: #0c1520 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0c1520, transparent) !important;
  --tab-text-color-active: #bbb !important;
  --tab-text-color-focused: #bbb !important;
  --tab-text-color-focused-active: #bbb !important;
  --tab-text-color-focused-active-current: #fff !important;
  --tab-text-color-focused-highlighted: #fff !important;
  --table-add-button-border-color: #fff !important;
  --table-border-color: #fff !important;
  --table-drag-handle-background-active: #7f01fe !important;
  --table-drag-handle-color-active: #dcddde !important;
  --table-header-border-color: #fff !important;
  --table-header-color: #fff !important;
  --table-selection-border-color: #7f01fe !important;
  --tag-color: #fff !important;
  --tag-color-hover: #fff !important;
  --tertiary: #b13d4c !important;
  --text-accent: #fff !important;
  --text-accent-hover: #b13d4c !important;
  --text-accent1: #61d29d !important;
  --text-accent2: #00ddff !important;
  --text-error: #e16d76 !important;
  --text-error-hover: #c9626a !important;
  --text-highlight-bg: #0c1520 !important;
  --text-muted: #bbb !important;
  --text-normal: #fff !important;
  --text-on-accent: #dcddde !important;
  --text-selection: #7f01fe !important;
  --text-title-h1: #ff0f44 !important;
  --text-title-h2: #ff8126 !important;
  --text-title-h3: #fccd11 !important;
  --text-title-h4: lightgreen !important;
  --text-title-h5: skyblue !important;
  --text-title-h6: #8c44aa !important;
  --textHighlight: #0c1520 !important;
  --titleFont: "Segoe UI", "Arial", "Tahoma", "Helvetica", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0c1520 !important;
  --titlebar-background-focused: #0c1520 !important;
  --titlebar-border-color: #fff !important;
  --titlebar-text-color: #bbb !important;
  --titlebar-text-color-focused: #fff !important;
  --vault-profile-color: #fff !important;
  --vault-profile-color-hover: #fff !important;
  --venom_dark_navy: #0c1520 !important;
  --venom_dark_red: #752126 !important;
  --venom_gray: #8e9599 !important;
  --venom_navy: #1e303a !important;
  --venom_pink: #b13d4c !important;
  --venom_purple: #7f01fe !important;
  --venom_white: #fff !important;
  --yellow: #fccd11 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(12, 21, 32);
  color: rgb(255, 255, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(30, 48, 58);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(12, 21, 32);
  color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(255, 255, 255);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(12, 21, 32);
  border-left-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body div#quartz-root {
  background-color: rgb(30, 48, 58);
  color: rgb(255, 255, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > em, html em {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > i, html i {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .page article p > strong, html strong {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .text-highlight {
  background-color: rgb(177, 61, 76);
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body del {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: line-through rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body p {
  color: rgb(187, 187, 187);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 187, 187) none 0px;
  text-decoration: rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body a.internal.broken {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(255, 255, 255);
}

html body dt {
  color: rgb(255, 255, 255);
}

html body ol > li {
  color: rgb(255, 255, 255);
}

html body ol.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ul > li {
  color: rgb(255, 255, 255);
}

html body ul.overflow {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    blockquotes: `html body blockquote {
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body table {
  color: rgb(255, 255, 255);
}

html body td {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body th {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(177, 61, 76);
  border-left-color: rgb(177, 61, 76);
  border-right-color: rgb(177, 61, 76);
  border-top-color: rgb(177, 61, 76);
  color: rgb(177, 61, 76);
  font-family: Consolas, "Fira Code", "Source Code Pro", "Droid Sans Mono", Monoid, Arial, sans-serif;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}

html body pre:has(> code) {
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  overflow-x: hidden;
  padding-left: 12px;
  padding-right: 12px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body figcaption {
  color: rgb(255, 255, 255);
}

html body figure {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body img {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body video {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
}

html body .footnotes {
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .transclude {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(127, 1, 254);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .transclude-inner {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(127, 1, 254);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(187, 187, 187);
  text-decoration: line-through rgb(187, 187, 187);
  text-decoration-color: rgb(187, 187, 187);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(255, 255, 255);
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}`,
    search: `html body .search > .search-button {
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(30, 48, 58);
}

html body .search > .search-container > .search-space > * {
  color: rgb(255, 255, 255);
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(12, 21, 32);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(255, 255, 255);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(255, 255, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(127, 1, 254);
}

html body h1 {
  color: rgb(255, 15, 68);
}

html body h2 {
  color: rgb(255, 129, 38);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(255, 255, 255);
}

html body h3 {
  color: rgb(252, 205, 17);
}

html body h4 {
  color: rgb(144, 238, 144);
}

html body h5 {
  color: rgb(135, 206, 235);
}

html body h6 {
  color: rgb(140, 68, 170);
}

html body hr {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(30, 48, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 48, 58);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(30, 48, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 48, 58);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(30, 48, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 48, 58);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(30, 48, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 48, 58);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(30, 48, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 48, 58);
}

html body ::-webkit-scrollbar-track {
  background: rgb(30, 48, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(30, 48, 58);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(117, 126, 138);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(117, 126, 138);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(117, 126, 138);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(127, 1, 254);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  color: rgb(33, 41, 51);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(187, 187, 187);
  border-left-color: rgb(187, 187, 187);
  border-right-color: rgb(187, 187, 187);
  border-top-color: rgb(187, 187, 187);
  color: rgb(187, 187, 187);
}`,
    footer: `html body footer {
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(177, 61, 76);
  border-bottom-width: 1px;
  border-left-color: rgb(177, 61, 76);
  border-right-color: rgb(177, 61, 76);
  border-right-width: 1px;
  border-top-color: rgb(177, 61, 76);
  color: rgb(177, 61, 76);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(177, 61, 76);
  text-decoration: rgb(177, 61, 76);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 255, 255);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
  text-decoration: rgb(117, 126, 138);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body li.section-li > .section .meta {
  color: rgb(117, 126, 138);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(117, 126, 138);
  text-decoration: rgb(117, 126, 138);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
}

html body .metadata {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
  background-color: rgb(12, 21, 32);
}

html body .page-header h2.page-title {
  color: rgb(122, 127, 133);
  font-family: "??", "??", "Segoe UI", Arial, Tahoma, Helvetica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(185, 116, 254) 0px 0px 2px, rgb(185, 116, 254) 0px 0px 2px, rgb(197, 140, 255) 0px 0px 3px, rgb(197, 140, 255) 0px 0px 3px, rgb(197, 140, 255) 0px 0px 3px, rgb(197, 140, 255) 0px 0px 3px, rgb(197, 140, 255) 0px 0px 3px;
}

html body abbr {
  color: rgb(255, 255, 255);
  text-decoration: underline dotted rgb(255, 255, 255);
}

html body details {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
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
  background-color: rgb(12, 21, 32);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: Consolas, "Fira Code", "Source Code Pro", "Droid Sans Mono", Monoid, Arial, sans-serif;
}

html body progress {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
}

html body sub {
  color: rgb(255, 255, 255);
}

html body summary {
  color: rgb(255, 255, 255);
}

html body sup {
  color: rgb(255, 255, 255);
}`,
  },
  light: {},
  extras: `/* Fade-in effect */
@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 0.8;
  }
}

/* Glow pulsation for titles */
@keyframes glow {
  from {
    text-shadow:
      0 0 10px var(--text-normal),
      0 0 20px var(--text-normal),
      0 0 30px var(--color-purple),
      0 0 40px var(--color-purple);
  }
  to {
    text-shadow:
      0 0 20px var(--text-normal),
      0 0 30px var(--color-purple),
      0 0 40px var(--color-purple),
      0 0 50px var(--color-purple);
  }
}

/* Pulsating text shadow */
@keyframes pulsate {
  from {
    text-shadow:
      0 0 10px #fff,
      0 0 20px #fff,
      0 0 30px #5271ff,
      0 0 40px #5271ff;
  }
  to {
    text-shadow:
      0 0 5px #fff,
      0 0 10px #fff,
      0 0 15px #5271ff,
      0 0 20px #5271ff;
  }
}

.view-header-title {
  animation: fadein 2s ease-in;
}

.nav-file-title.is-active {
  animation: glow 2s ease-in-out infinite alternate;
}
`,
};
