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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body .bases-table thead th {
  border-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body .canvas-node {
  border-color: rgb(235, 219, 178);
}

html body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html body .canvas-node-file {
  color: rgb(235, 219, 178);
}

html body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html body .canvas-sidebar {
  background-color: rgb(40, 40, 40);
  border-color: rgb(235, 219, 178);
}

html body .note-properties {
  border-color: rgb(146, 131, 116);
}

html body .note-properties-tags {
  color: rgb(69, 133, 136);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(146, 131, 116);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  border-left-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .page article p > em, html em {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .page article p > i, html i {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .page article p > strong, html strong {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .text-highlight {
  background-color: rgba(215, 153, 33, 0.4);
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body del {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body h1.article-title {
  color: rgb(235, 219, 178);
  font-weight: 700;
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(133, 146, 137);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(131, 165, 152);
  border-color: rgb(104, 157, 106);
}`,
    links: `html body a.external, html footer a {
  color: rgb(104, 157, 106);
  outline: rgb(104, 157, 106) none 0px;
  text-decoration-color: rgb(104, 157, 106);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(104, 157, 106);
  outline: rgb(104, 157, 106) none 0px;
  text-decoration-color: rgb(104, 157, 106);
}

html body a.internal.broken {
  color: rgb(104, 157, 106);
  outline: rgb(104, 157, 106) none 0px;
  text-decoration-color: rgb(104, 157, 106);
}`,
    lists: `html body dd {
  color: rgb(235, 219, 178);
}

html body dt {
  color: rgb(235, 219, 178);
}

html body ol > li {
  color: rgb(235, 219, 178);
}

html body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ul > li {
  color: rgb(235, 219, 178);
}

html body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(104, 157, 106);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body table {
  color: rgb(235, 219, 178);
}

html body td {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body th {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body thead {
  border-bottom-color: rgb(146, 131, 116);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html body tr {
  border-bottom-color: rgb(146, 131, 116);
}`,
    code: `html body code {
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

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}

html body pre:has(> code) {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}`,
    images: `html body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body figcaption {
  color: rgb(235, 219, 178);
}

html body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body img {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(40, 40, 40);
}

html body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(104, 157, 106);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  padding-left: 10px;
  padding-right: 10px;
}

html body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  margin-left: 10px;
  margin-right: 10px;
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(131, 165, 152);
  border-left-color: rgb(131, 165, 152);
  border-right-color: rgb(131, 165, 152);
  border-top-color: rgb(131, 165, 152);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
}

html body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(146, 131, 116);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(146, 131, 116);
  color: rgb(235, 219, 178);
}

html body a.internal.tag-link::before {
  color: rgb(69, 133, 136);
}

html body h1 {
  color: rgb(204, 36, 29);
}

html body h2 {
  color: rgb(214, 93, 14);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(235, 219, 178);
}

html body h3 {
  color: rgb(215, 153, 33);
}

html body h4 {
  color: rgb(152, 151, 26);
}

html body h5 {
  color: rgb(104, 157, 106);
}

html body h6 {
  color: rgb(177, 98, 134);
}

html body hr {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    footer: `html body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(40, 40, 40);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(235, 219, 178);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .metadata {
  border-bottom-color: rgb(146, 131, 116);
  border-left-color: rgb(146, 131, 116);
  border-right-color: rgb(146, 131, 116);
  border-top-color: rgb(146, 131, 116);
}

html body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

html body .page-header h2.page-title {
  color: rgb(235, 219, 178);
}

html body abbr {
  color: rgb(235, 219, 178);
}

html body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body kbd {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "Source Code Pro", "Source Code Pro", "Source Code Pro";
}

html body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body sub {
  color: rgb(235, 219, 178);
}

html body summary {
  color: rgb(235, 219, 178);
}

html body sup {
  color: rgb(235, 219, 178);
}

html body ul.tags > li {
  color: rgb(104, 157, 106);
}`,
  },
  light: {},
};
