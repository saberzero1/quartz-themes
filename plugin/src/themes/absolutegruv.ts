import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "absolutegruv", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #928374 !important;
  --background-primary: #282828 !important;
  --background-primary-alt: #282828 !important;
  --background-secondary: #282828 !important;
  --background-secondary-alt: #282828 !important;
  --bases-cards-background: #282828 !important;
  --bases-cards-cover-background: #282828 !important;
  --bases-cards-shadow: 0 0 0 1px #928374 !important;
  --bases-embed-border-color: #928374 !important;
  --bases-table-border-color: #928374 !important;
  --bases-table-cell-background-active: #282828 !important;
  --bases-table-cell-background-disabled: #282828 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #689d6a !important;
  --bases-table-group-background: #282828 !important;
  --bases-table-header-background: #282828 !important;
  --bases-table-summary-background: #282828 !important;
  --bg-dark: #282828 !important;
  --bg-light: #fdf6e3 !important;
  --bg0-dark: #1d2021 !important;
  --bg0-light: #f0edd8 !important;
  --bg1-dark: #3c3836 !important;
  --bg1-light: #f6f1dd !important;
  --bg2-dark: #504945 !important;
  --bg2-light: #f3efda !important;
  --bg3-dark: #665c54 !important;
  --bg3-light: #edead5 !important;
  --bg4-dark: #7c6f64 !important;
  --bg4-light: #e4e1cd !important;
  --bg5-dark: #928374 !important;
  --bg5-light: #dfdbc8 !important;
  --bg_blue: #458588 !important;
  --bg_blue_light: #e9f0e9 !important;
  --bg_green: #98971a !important;
  --bg_green_light: #f0f1d2 !important;
  --bg_red: #cc241d !important;
  --bg_red_light: #fbe3da !important;
  --bg_visual: #503946 !important;
  --bg_visual_light: #eaedc8 !important;
  --bg_yellow: #d79921 !important;
  --bg_yellow_light: #faedcd !important;
  --blockquote-border-color: #689d6a !important;
  --canvas-background: #282828 !important;
  --canvas-card-label-color: #859289 !important;
  --caret-color: #ebdbb2 !important;
  --checkbox-border-color: #859289 !important;
  --checkbox-color: #689d6a !important;
  --checkbox-marker-color: #282828 !important;
  --code-background: #282828 !important;
  --code-block: #ebdbb2 !important;
  --code-border-color: #928374 !important;
  --code-comment: #859289 !important;
  --code-normal: #ebdbb2 !important;
  --codeFont: "Source Code Pro", "Source Code Pro", "Source Code Pro" !important;
  --collapse-icon-color: #859289 !important;
  --collapse-icon-color-collapsed: #458588 !important;
  --dark: #ebdbb2 !important;
  --darkgray: #ebdbb2 !important;
  --dim-aqua: #689d6a !important;
  --dim-blue: #458588 !important;
  --dim-green: #98971a !important;
  --dim-orange: #d65d0e !important;
  --dim-purple: #b16286 !important;
  --dim-red: #cc241d !important;
  --dim-yellow: #d79921 !important;
  --divider-color: #928374 !important;
  --divider-color-hover: #689d6a !important;
  --embed-block-shadow-hover: 0 0 0 1px #928374, inset 0 0 0 1px #928374 !important;
  --embed-border-start: 2px solid #689d6a !important;
  --faded-aqua: #8ec07c !important;
  --faded-blue: #83a598 !important;
  --faded-green: #b8bb26 !important;
  --faded-orange: #fe8019 !important;
  --faded-purple: #d3869b !important;
  --faded-red: #fb4934 !important;
  --faded-yellow: #fabd2f !important;
  --fg-dark: #ebdbb2 !important;
  --fg-light: #5c6a72 !important;
  --file-header-background: #282828 !important;
  --file-header-background-focused: #282828 !important;
  --flair-color: #ebdbb2 !important;
  --font-monospace: "Source Code Pro", "Source Code Pro", "Source Code Pro" !important;
  --footnote-divider-color: #928374 !important;
  --footnote-id-color-no-occurrences: #859289 !important;
  --graph-node-focused: #458588 !important;
  --graph-node-unresolved: #859289 !important;
  --graph-text: #ebdbb2 !important;
  --gray: #859289 !important;
  --grey0-dark: #7f897d !important;
  --grey0-light: #a4ad9e !important;
  --grey1-dark: #859289 !important;
  --grey1-light: #939f91 !important;
  --grey2-dark: #9aa79d !important;
  --grey2-light: #879686 !important;
  --heading-formatting: #859289 !important;
  --highlight: #98971a !important;
  --hr-color: #928374 !important;
  --icon-color-active: #458588 !important;
  --icon-color-focused: #ebdbb2 !important;
  --inline-code: #458588 !important;
  --input-date-separator: #859289 !important;
  --input-placeholder-color: #859289 !important;
  --interactive-accent: #689d6a !important;
  --interactive-accent-rgb: #458588 !important;
  --interactive-before: #928374 !important;
  --light: #282828 !important;
  --light-aqua: #569d79 !important;
  --light-blue: #5a93a2 !important;
  --light-dim-aqua: #6ec398 !important;
  --light-dim-blue: #6cb3c6 !important;
  --light-dim-green: #a4bb4a !important;
  --light-dim-orange: #f39459 !important;
  --light-dim-purple: #e092be !important;
  --light-dim-red: #f1706f !important;
  --light-dim-yellow: #e4b649 !important;
  --light-green: #899c40 !important;
  --light-orange: #f57d26 !important;
  --light-purple: #b87b9d !important;
  --light-red: #f85552 !important;
  --light-yellow: #bf983d !important;
  --lightgray: #282828 !important;
  --link-color: #458588 !important;
  --link-external-color: #458588 !important;
  --link-unresolved-color: #458588 !important;
  --list-marker-color: #859289 !important;
  --list-marker-color-collapsed: #458588 !important;
  --menu-background: #282828 !important;
  --metadata-border-color: #928374 !important;
  --metadata-divider-color: #928374 !important;
  --metadata-input-text-color: #ebdbb2 !important;
  --modal-background: #282828 !important;
  --nav-collapse-icon-color: #859289 !important;
  --nav-collapse-icon-color-collapsed: #859289 !important;
  --nav-heading-color: #ebdbb2 !important;
  --nav-heading-color-collapsed: #859289 !important;
  --nav-heading-color-hover: #ebdbb2 !important;
  --nav-item-color-active: #ebdbb2 !important;
  --nav-item-color-highlighted: #458588 !important;
  --nav-item-color-hover: #ebdbb2 !important;
  --nav-item-color-selected: #ebdbb2 !important;
  --nav-tag-color: #859289 !important;
  --pdf-background: #282828 !important;
  --pdf-page-background: #282828 !important;
  --pdf-shadow: 0 0 0 1px #928374 !important;
  --pdf-sidebar-background: #282828 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #928374 !important;
  --pill-border-color: #928374 !important;
  --pill-color-hover: #ebdbb2 !important;
  --pill-color-remove: #859289 !important;
  --pill-color-remove-hover: #458588 !important;
  --pre-code: #3c3836 !important;
  --prompt-background: #282828 !important;
  --ribbon-background: #282828 !important;
  --ribbon-background-collapsed: #282828 !important;
  --search-result-background: #282828 !important;
  --secondary: #458588 !important;
  --setting-group-heading-color: #ebdbb2 !important;
  --setting-items-background: #282828 !important;
  --setting-items-border-color: #928374 !important;
  --shadow: #00000070 !important;
  --shadow-light: #3c474d20 !important;
  --slider-track-background: #928374 !important;
  --status-bar-background: #282828 !important;
  --status-bar-border-color: #928374 !important;
  --suggestion-background: #282828 !important;
  --tab-background-active: #282828 !important;
  --tab-container-background: #282828 !important;
  --tab-outline-color: #928374 !important;
  --tab-switcher-background: #282828 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent) !important;
  --tab-text-color: #859289 !important;
  --tab-text-color-focused-active-current: #ebdbb2 !important;
  --tab-text-color-focused-highlighted: #458588 !important;
  --table-add-button-border-color: #928374 !important;
  --table-border-color: #928374 !important;
  --table-drag-handle-background-active: #689d6a !important;
  --table-drag-handle-color: #859289 !important;
  --table-header-border-color: #928374 !important;
  --table-header-color: #ebdbb2 !important;
  --table-selection-border-color: #689d6a !important;
  --tag-color: #458588 !important;
  --tag-color-hover: #458588 !important;
  --tertiary: #458588 !important;
  --text-a: #689d6a !important;
  --text-a-hover: #8ec07c !important;
  --text-accent: #458588 !important;
  --text-faint: #859289 !important;
  --text-highlight-bg: #98971a !important;
  --text-link: #83a598 !important;
  --text-mark: rgba(215, 153, 33, 0.4) !important;
  --text-normal: #ebdbb2 !important;
  --text-selection: #928374 !important;
  --text-title-h1: #cc241d !important;
  --text-title-h2: #d65d0e !important;
  --text-title-h3: #d79921 !important;
  --text-title-h4: #98971a !important;
  --text-title-h5: #689d6a !important;
  --text-title-h6: #b16286 !important;
  --textHighlight: #98971a !important;
  --titlebar-background: #282828 !important;
  --titlebar-background-focused: #282828 !important;
  --titlebar-border-color: #928374 !important;
  --titlebar-text-color-focused: #ebdbb2 !important;
  --vault-profile-color: #ebdbb2 !important;
  --vault-profile-color-hover: #ebdbb2 !important;
  --vim-cursor: #83a598 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(146, 131, 116);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  border-left-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > em, em {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > i, i {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > strong, strong {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .text-highlight {
  background-color: rgba(215, 153, 33, 0.4);
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body del {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: line-through rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}`,
    links: `body a.external, footer a {
  color: rgb(104, 157, 106);
  outline: rgb(104, 157, 106) none 0px;
  text-decoration: rgb(104, 157, 106);
  text-decoration-color: rgb(104, 157, 106);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(104, 157, 106);
  outline: rgb(104, 157, 106) none 0px;
  text-decoration: rgb(104, 157, 106);
  text-decoration-color: rgb(104, 157, 106);
}

body a.internal.broken {
  color: rgb(104, 157, 106);
  outline: rgb(104, 157, 106) none 0px;
  text-decoration: rgb(104, 157, 106);
  text-decoration-color: rgb(104, 157, 106);
}`,
    lists: `body dd {
  color: rgb(235, 219, 178);
}

body dt {
  color: rgb(235, 219, 178);
}

body ol > li {
  color: rgb(235, 219, 178);
}

body ol.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ul > li {
  color: rgb(235, 219, 178);
}

body ul.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(104, 157, 106);
  text-decoration: rgb(104, 157, 106);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body table {
  color: rgb(235, 219, 178);
}

body td {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body th {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body thead {
  border-bottom-color: rgb(146, 131, 116);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(146, 131, 116);
}`,
    code: `body code {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "Source Code Pro", "Source Code Pro", "Source Code Pro";
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body pre > code, pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}

body pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}`,
    images: `body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body figcaption {
  color: rgb(235, 219, 178);
}

body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body img {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `body .file-embed {
  background-color: rgb(40, 40, 40);
}

body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(104, 157, 106);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(104, 157, 106);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
}

body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
}

body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(146, 131, 116);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

body a.internal.tag-link::before {
  color: rgb(69, 133, 136);
}

body h1 {
  color: rgb(204, 36, 29);
}

body h2 {
  color: rgb(214, 93, 14);
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 219, 178);
}

body h3 {
  color: rgb(215, 153, 33);
}

body h4 {
  color: rgb(152, 151, 26);
}

body h5 {
  color: rgb(104, 157, 106);
}

body h6 {
  color: rgb(177, 98, 134);
}

body hr {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}`,
    footer: `body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(40, 40, 40);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(235, 219, 178);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .metadata {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}

body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

body .page-header h2.page-title {
  color: rgb(235, 219, 178);
}

body abbr {
  color: rgb(235, 219, 178);
  text-decoration: underline dotted rgb(235, 219, 178);
}

body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body kbd {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "Source Code Pro", "Source Code Pro", "Source Code Pro";
}

body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body sub {
  color: rgb(235, 219, 178);
}

body summary {
  color: rgb(235, 219, 178);
}

body sup {
  color: rgb(235, 219, 178);
}`,
  },
  light: {},
};
