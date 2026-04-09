import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sad-machine-druid",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["hack"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #525c62 !important;
  --background-primary: #2f383e !important;
  --background-primary-alt: #2f383e !important;
  --background-secondary: #2f383e !important;
  --background-secondary-alt: #2f383e !important;
  --bases-cards-background: #2f383e !important;
  --bases-cards-cover-background: #2f383e !important;
  --bases-cards-shadow: 0 0 0 1px #525c62 !important;
  --bases-embed-border-color: #525c62 !important;
  --bases-table-border-color: #525c62 !important;
  --bases-table-cell-background-active: #2f383e !important;
  --bases-table-cell-background-disabled: #2f383e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79 !important;
  --bases-table-group-background: #2f383e !important;
  --bases-table-header-background: #2f383e !important;
  --bases-table-summary-background: #2f383e !important;
  --bg-dark: #2f383e !important;
  --bg-light: #fdf6e3 !important;
  --bg0-dark: #22282c !important;
  --bg0-light: #f0edd8 !important;
  --bg1-dark: #272f34 !important;
  --bg1-light: #f6f1dd !important;
  --bg2-dark: #374247 !important;
  --bg2-light: #f3efda !important;
  --bg3-dark: #404c51 !important;
  --bg3-light: #edead5 !important;
  --bg4-dark: #4a555b !important;
  --bg4-light: #e4e1cd !important;
  --bg5-dark: #525c62 !important;
  --bg5-light: #dfdbc8 !important;
  --bg_blue: #394f5a !important;
  --bg_blue_light: #e9f0e9 !important;
  --bg_green: #404d44 !important;
  --bg_green_light: #f0f1d2 !important;
  --bg_red: #4e3e43 !important;
  --bg_red_light: #fbe3da !important;
  --bg_visual: #503946 !important;
  --bg_visual_light: #eaedc8 !important;
  --bg_yellow: #4a4940 !important;
  --bg_yellow_light: #faedcd !important;
  --blockquote-border-color: #569d79 !important;
  --canvas-background: #2f383e !important;
  --canvas-card-label-color: #859289 !important;
  --caret-color: #beb39b !important;
  --checkbox-border-color: #859289 !important;
  --checkbox-color: #569d79 !important;
  --checkbox-marker-color: #2f383e !important;
  --code-background: #2f383e !important;
  --code-block: #beb39b !important;
  --code-border-color: #525c62 !important;
  --code-comment: #859289 !important;
  --code-normal: #beb39b !important;
  --codeFont: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --collapse-icon-color: #859289 !important;
  --collapse-icon-color-collapsed: #5b928c !important;
  --dark: #beb39b !important;
  --darkgray: #beb39b !important;
  --dim-aqua: #569d79 !important;
  --dim-blue: #5b928c !important;
  --dim-green: #68925b !important;
  --dim-orange: #b98c70 !important;
  --dim-purple: #705b92 !important;
  --dim-red: #925b62 !important;
  --dim-yellow: #d3b879 !important;
  --divider-color: #525c62 !important;
  --divider-color-hover: #569d79 !important;
  --embed-block-shadow-hover: 0 0 0 1px #525c62, inset 0 0 0 1px #525c62 !important;
  --embed-border-start: 2px solid #569d79 !important;
  --faded-aqua: #83c092 !important;
  --faded-blue: #7fbbb3 !important;
  --faded-green: #a7c080 !important;
  --faded-orange: #e69875 !important;
  --faded-purple: #d699b6 !important;
  --faded-red: #e67e80 !important;
  --faded-yellow: #dbbc7f !important;
  --fg-dark: #beb39b !important;
  --fg-light: #5c6a72 !important;
  --file-header-background: #2f383e !important;
  --file-header-background-focused: #2f383e !important;
  --flair-color: #beb39b !important;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --footnote-divider-color: #525c62 !important;
  --footnote-id-color-no-occurrences: #859289 !important;
  --graph-node-focused: #5b928c !important;
  --graph-node-unresolved: #859289 !important;
  --graph-text: #beb39b !important;
  --gray: #859289 !important;
  --grey0-dark: #7f897d !important;
  --grey0-light: #a4ad9e !important;
  --grey1-dark: #859289 !important;
  --grey1-light: #939f91 !important;
  --grey2-dark: #9aa79d !important;
  --grey2-light: #879686 !important;
  --h1-color: #68925b !important;
  --h2-color: #569d79 !important;
  --h3-color: #705b92 !important;
  --h4-color: #925b62 !important;
  --h5-color: #b98c70 !important;
  --h6-color: #d3b879 !important;
  --heading-formatting: #859289 !important;
  --highlight: #404d44 !important;
  --hr-color: #525c62 !important;
  --icon-color-active: #5b928c !important;
  --icon-color-focused: #beb39b !important;
  --inline-code: #5b928c !important;
  --inline-title-color: #68925b !important;
  --input-date-separator: #859289 !important;
  --input-placeholder-color: #859289 !important;
  --interactive-accent: #569d79 !important;
  --interactive-accent-rgb: #5b928c !important;
  --interactive-before: #525c62 !important;
  --light: #2f383e !important;
  --light-aqua: #639479 !important;
  --light-blue: #67a6bd !important;
  --light-dim-aqua: #689b7f !important;
  --light-dim-blue: #64a9c2 !important;
  --light-dim-green: #829e66 !important;
  --light-dim-orange: #e04c18 !important;
  --light-dim-purple: #9e6886 !important;
  --light-dim-red: #e04340 !important;
  --light-dim-yellow: #a89f48 !important;
  --light-green: #99b87b !important;
  --light-orange: #f56126 !important;
  --light-purple: #a56e8c !important;
  --light-red: #f85552 !important;
  --light-yellow: #a7a049 !important;
  --lightgray: #2f383e !important;
  --link-color: #5b928c !important;
  --link-external-color: #5b928c !important;
  --link-unresolved-color: #5b928c !important;
  --list-marker-color: #859289 !important;
  --list-marker-color-collapsed: #5b928c !important;
  --menu-background: #2f383e !important;
  --metadata-border-color: #525c62 !important;
  --metadata-divider-color: #525c62 !important;
  --metadata-input-text-color: #beb39b !important;
  --modal-background: #2f383e !important;
  --nav-collapse-icon-color: #859289 !important;
  --nav-collapse-icon-color-collapsed: #859289 !important;
  --nav-heading-color: #beb39b !important;
  --nav-heading-color-collapsed: #859289 !important;
  --nav-heading-color-hover: #beb39b !important;
  --nav-item-color-active: #beb39b !important;
  --nav-item-color-highlighted: #5b928c !important;
  --nav-item-color-hover: #beb39b !important;
  --nav-item-color-selected: #beb39b !important;
  --nav-tag-color: #859289 !important;
  --pdf-background: #2f383e !important;
  --pdf-page-background: #2f383e !important;
  --pdf-shadow: 0 0 0 1px #525c62 !important;
  --pdf-sidebar-background: #2f383e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #525c62 !important;
  --pill-border-color: #525c62 !important;
  --pill-color-hover: #beb39b !important;
  --pill-color-remove: #859289 !important;
  --pill-color-remove-hover: #5b928c !important;
  --pre-code: #272f34 !important;
  --prompt-background: #2f383e !important;
  --ribbon-background: #2f383e !important;
  --ribbon-background-collapsed: #2f383e !important;
  --search-result-background: #2f383e !important;
  --secondary: #5b928c !important;
  --setting-group-heading-color: #beb39b !important;
  --setting-items-background: #2f383e !important;
  --setting-items-border-color: #525c62 !important;
  --shadow: #00000070 !important;
  --shadow-light: #3c474d20 !important;
  --slider-track-background: #525c62 !important;
  --status-bar-background: #2f383e !important;
  --status-bar-border-color: #525c62 !important;
  --suggestion-background: #2f383e !important;
  --tab-background-active: #2f383e !important;
  --tab-container-background: #2f383e !important;
  --tab-outline-color: #525c62 !important;
  --tab-switcher-background: #2f383e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f383e, transparent) !important;
  --tab-text-color: #859289 !important;
  --tab-text-color-focused-active-current: #beb39b !important;
  --tab-text-color-focused-highlighted: #5b928c !important;
  --table-add-button-border-color: #525c62 !important;
  --table-border-color: #525c62 !important;
  --table-drag-handle-background-active: #569d79 !important;
  --table-drag-handle-color: #859289 !important;
  --table-header-border-color: #525c62 !important;
  --table-header-color: #beb39b !important;
  --table-selection-border-color: #569d79 !important;
  --tag-color: #5b928c !important;
  --tag-color-hover: #5b928c !important;
  --tertiary: #5b928c !important;
  --text-a: #569d79 !important;
  --text-a-hover: #83c092 !important;
  --text-accent: #5b928c !important;
  --text-faint: #859289 !important;
  --text-highlight-bg: #404d44 !important;
  --text-link: #7fbbb3 !important;
  --text-normal: #beb39b !important;
  --text-selection: #525c62 !important;
  --text-title-h1: #68925b !important;
  --text-title-h2: #569d79 !important;
  --text-title-h3: #705b92 !important;
  --text-title-h4: #925b62 !important;
  --text-title-h5: #b98c70 !important;
  --text-title-h6: #d3b879 !important;
  --textHighlight: #404d44 !important;
  --titlebar-background: #2f383e !important;
  --titlebar-background-focused: #2f383e !important;
  --titlebar-border-color: #525c62 !important;
  --titlebar-text-color-focused: #beb39b !important;
  --vault-profile-color: #beb39b !important;
  --vault-profile-color-hover: #beb39b !important;
  --vim-cursor: #7fbbb3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(47, 56, 62);
  border-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 56, 62);
  border-left-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(64, 77, 68);
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body del {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(190, 179, 155);
  font-weight: 700;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(133, 146, 137);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 187, 179);
  border-color: rgb(86, 157, 121);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
  text-decoration-color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
  text-decoration-color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body dt {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(133, 146, 137);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body table {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(82, 92, 98);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(82, 92, 98);
}`,
    code: `html[saved-theme="dark"] body code {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(104, 146, 91);
  border-left-color: rgb(104, 146, 91);
  border-right-color: rgb(104, 146, 91);
  border-top-color: rgb(104, 146, 91);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  margin-left: 10px;
  margin-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
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
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 56, 62);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(82, 92, 98);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body h1 {
  color: rgb(104, 146, 91);
}

html[saved-theme="dark"] body h2 {
  color: rgb(86, 157, 121);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(104, 146, 91);
}

html[saved-theme="dark"] body h3 {
  color: rgb(112, 91, 146);
}

html[saved-theme="dark"] body h4 {
  color: rgb(146, 91, 98);
}

html[saved-theme="dark"] body h5 {
  color: rgb(185, 140, 112);
}

html[saved-theme="dark"] body h6 {
  color: rgb(211, 184, 121);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(190, 179, 155);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body abbr {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body sub {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body summary {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body sup {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(91, 146, 140);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #dfdbc8 !important;
  --background-primary: #fdf6e3 !important;
  --background-primary-alt: #fdf6e3 !important;
  --background-secondary: #fdf6e3 !important;
  --background-secondary-alt: #fdf6e3 !important;
  --bases-cards-background: #fdf6e3 !important;
  --bases-cards-cover-background: #fdf6e3 !important;
  --bases-cards-shadow: 0 0 0 1px #dfdbc8 !important;
  --bases-embed-border-color: #dfdbc8 !important;
  --bases-table-border-color: #dfdbc8 !important;
  --bases-table-cell-background-active: #fdf6e3 !important;
  --bases-table-cell-background-disabled: #fdf6e3 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dfdbc8 !important;
  --bases-table-group-background: #fdf6e3 !important;
  --bases-table-header-background: #fdf6e3 !important;
  --bases-table-summary-background: #fdf6e3 !important;
  --bg-dark: #2f383e !important;
  --bg-light: #fdf6e3 !important;
  --bg0-dark: #22282c !important;
  --bg0-light: #f0edd8 !important;
  --bg1-dark: #272f34 !important;
  --bg1-light: #f6f1dd !important;
  --bg2-dark: #374247 !important;
  --bg2-light: #f3efda !important;
  --bg3-dark: #404c51 !important;
  --bg3-light: #edead5 !important;
  --bg4-dark: #4a555b !important;
  --bg4-light: #e4e1cd !important;
  --bg5-dark: #525c62 !important;
  --bg5-light: #dfdbc8 !important;
  --bg_blue: #394f5a !important;
  --bg_blue_light: #e9f0e9 !important;
  --bg_green: #404d44 !important;
  --bg_green_light: #f0f1d2 !important;
  --bg_red: #4e3e43 !important;
  --bg_red_light: #fbe3da !important;
  --bg_visual: #503946 !important;
  --bg_visual_light: #eaedc8 !important;
  --bg_yellow: #4a4940 !important;
  --bg_yellow_light: #faedcd !important;
  --blockquote-border-color: #dfdbc8 !important;
  --blur-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent)) !important;
  --canvas-background: #fdf6e3 !important;
  --canvas-card-label-color: #939f91 !important;
  --caret-color: #5c6a72 !important;
  --checkbox-border-color: #939f91 !important;
  --checkbox-color: #dfdbc8 !important;
  --checkbox-marker-color: #fdf6e3 !important;
  --code-background: #fdf6e3 !important;
  --code-block: #5c6a72 !important;
  --code-border-color: #dfdbc8 !important;
  --code-comment: #939f91 !important;
  --code-normal: #5c6a72 !important;
  --codeFont: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --collapse-icon-color: #939f91 !important;
  --collapse-icon-color-collapsed: #829e66 !important;
  --dark: #5c6a72 !important;
  --darkgray: #5c6a72 !important;
  --dim-aqua: #569d79 !important;
  --dim-blue: #5b928c !important;
  --dim-green: #68925b !important;
  --dim-orange: #b98c70 !important;
  --dim-purple: #705b92 !important;
  --dim-red: #925b62 !important;
  --dim-yellow: #d3b879 !important;
  --divider-color: #dfdbc8 !important;
  --divider-color-hover: #dfdbc8 !important;
  --embed-block-shadow-hover: 0 0 0 1px #dfdbc8, inset 0 0 0 1px #dfdbc8 !important;
  --embed-border-start: 2px solid #dfdbc8 !important;
  --faded-aqua: #83c092 !important;
  --faded-blue: #7fbbb3 !important;
  --faded-green: #a7c080 !important;
  --faded-orange: #e69875 !important;
  --faded-purple: #d699b6 !important;
  --faded-red: #e67e80 !important;
  --faded-yellow: #dbbc7f !important;
  --fg-dark: #beb39b !important;
  --fg-light: #5c6a72 !important;
  --file-header-background: #fdf6e3 !important;
  --file-header-background-focused: #fdf6e3 !important;
  --flair-color: #5c6a72 !important;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --footnote-divider-color: #dfdbc8 !important;
  --footnote-id-color-no-occurrences: #939f91 !important;
  --graph-node-focused: #829e66 !important;
  --graph-node-unresolved: #939f91 !important;
  --graph-text: #5c6a72 !important;
  --gray: #939f91 !important;
  --grey0-dark: #7f897d !important;
  --grey0-light: #a4ad9e !important;
  --grey1-dark: #859289 !important;
  --grey1-light: #939f91 !important;
  --grey2-dark: #9aa79d !important;
  --grey2-light: #879686 !important;
  --h1-color: #f85552 !important;
  --h2-color: #f56126 !important;
  --h3-color: #a7a049 !important;
  --h4-color: #99b87b !important;
  --h5-color: #639479 !important;
  --h6-color: #a56e8c !important;
  --heading-formatting: #939f91 !important;
  --highlight: #829e66 !important;
  --hr-color: #dfdbc8 !important;
  --icon-color-active: #829e66 !important;
  --icon-color-focused: #5c6a72 !important;
  --inline-code: #67a6bd !important;
  --inline-title-color: #f85552 !important;
  --input-date-separator: #939f91 !important;
  --input-placeholder-color: #939f91 !important;
  --interactive-accent: #dfdbc8 !important;
  --interactive-accent-rgb: #829e66 !important;
  --interactive-before: #dfdbc8 !important;
  --light: #fdf6e3 !important;
  --light-aqua: #639479 !important;
  --light-blue: #67a6bd !important;
  --light-dim-aqua: #689b7f !important;
  --light-dim-blue: #64a9c2 !important;
  --light-dim-green: #829e66 !important;
  --light-dim-orange: #e04c18 !important;
  --light-dim-purple: #9e6886 !important;
  --light-dim-red: #e04340 !important;
  --light-dim-yellow: #a89f48 !important;
  --light-green: #99b87b !important;
  --light-orange: #f56126 !important;
  --light-purple: #a56e8c !important;
  --light-red: #f85552 !important;
  --light-yellow: #a7a049 !important;
  --lightgray: #fdf6e3 !important;
  --link-color: #829e66 !important;
  --link-external-color: #829e66 !important;
  --link-unresolved-color: #829e66 !important;
  --list-marker-color: #939f91 !important;
  --list-marker-color-collapsed: #829e66 !important;
  --menu-background: #fdf6e3 !important;
  --metadata-border-color: #dfdbc8 !important;
  --metadata-divider-color: #dfdbc8 !important;
  --metadata-input-text-color: #5c6a72 !important;
  --modal-background: #fdf6e3 !important;
  --nav-collapse-icon-color: #939f91 !important;
  --nav-collapse-icon-color-collapsed: #939f91 !important;
  --nav-heading-color: #5c6a72 !important;
  --nav-heading-color-collapsed: #939f91 !important;
  --nav-heading-color-hover: #5c6a72 !important;
  --nav-item-color-active: #5c6a72 !important;
  --nav-item-color-highlighted: #829e66 !important;
  --nav-item-color-hover: #5c6a72 !important;
  --nav-item-color-selected: #5c6a72 !important;
  --nav-tag-color: #939f91 !important;
  --pdf-background: #fdf6e3 !important;
  --pdf-page-background: #fdf6e3 !important;
  --pdf-sidebar-background: #fdf6e3 !important;
  --pill-border-color: #dfdbc8 !important;
  --pill-color-hover: #5c6a72 !important;
  --pill-color-remove: #939f91 !important;
  --pill-color-remove-hover: #829e66 !important;
  --pre-code: #f6f1dd !important;
  --prompt-background: #fdf6e3 !important;
  --raised-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent)) !important;
  --ribbon-background: #fdf6e3 !important;
  --ribbon-background-collapsed: #fdf6e3 !important;
  --search-result-background: #fdf6e3 !important;
  --secondary: #829e66 !important;
  --setting-group-heading-color: #5c6a72 !important;
  --setting-items-background: #fdf6e3 !important;
  --setting-items-border-color: #dfdbc8 !important;
  --shadow: #00000070 !important;
  --shadow-light: #3c474d20 !important;
  --slider-track-background: #dfdbc8 !important;
  --status-bar-background: #fdf6e3 !important;
  --status-bar-border-color: #dfdbc8 !important;
  --suggestion-background: #fdf6e3 !important;
  --tab-background-active: #fdf6e3 !important;
  --tab-container-background: #fdf6e3 !important;
  --tab-outline-color: #dfdbc8 !important;
  --tab-switcher-background: #fdf6e3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf6e3, transparent) !important;
  --tab-text-color: #939f91 !important;
  --tab-text-color-focused-active-current: #5c6a72 !important;
  --tab-text-color-focused-highlighted: #829e66 !important;
  --table-add-button-border-color: #dfdbc8 !important;
  --table-border-color: #dfdbc8 !important;
  --table-drag-handle-background-active: #dfdbc8 !important;
  --table-drag-handle-color: #939f91 !important;
  --table-header-border-color: #dfdbc8 !important;
  --table-header-color: #5c6a72 !important;
  --table-selection-border-color: #dfdbc8 !important;
  --tag-color: #829e66 !important;
  --tag-color-hover: #829e66 !important;
  --tertiary: #829e66 !important;
  --text-a: #64a9c2 !important;
  --text-a-hover: #67a6bd !important;
  --text-accent: #829e66 !important;
  --text-faint: #939f91 !important;
  --text-highlight-bg: #829e66 !important;
  --text-link: #67a6bd !important;
  --text-normal: #5c6a72 !important;
  --text-selection: rgba(189, 174, 147, 0.5) !important;
  --text-title-h1: #f85552 !important;
  --text-title-h2: #f56126 !important;
  --text-title-h3: #a7a049 !important;
  --text-title-h4: #99b87b !important;
  --text-title-h5: #639479 !important;
  --text-title-h6: #a56e8c !important;
  --textHighlight: #829e66 !important;
  --titlebar-background: #fdf6e3 !important;
  --titlebar-background-focused: #fdf6e3 !important;
  --titlebar-border-color: #dfdbc8 !important;
  --titlebar-text-color-focused: #5c6a72 !important;
  --vault-profile-color: #5c6a72 !important;
  --vault-profile-color-hover: #5c6a72 !important;
  --vim-cursor: #67a6bd !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(253, 246, 227);
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(130, 158, 102);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
  border-left-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(130, 158, 102);
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body del {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(92, 106, 114);
  font-weight: 700;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(147, 159, 145);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 187, 179);
  border-color: rgb(223, 219, 200);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
  text-decoration-color: rgb(130, 158, 102);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
  text-decoration-color: rgb(130, 158, 102);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body dt {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(147, 159, 145);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body table {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(223, 219, 200);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(223, 219, 200);
}`,
    code: `html[saved-theme="light"] body code {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
  padding-bottom: 4px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 4px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figcaption {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(248, 85, 82);
  border-left-color: rgb(248, 85, 82);
  border-right-color: rgb(248, 85, 82);
  border-top-color: rgb(248, 85, 82);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  margin-left: 10px;
  margin-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
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
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(189, 174, 147, 0.5);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(130, 158, 102);
}

html[saved-theme="light"] body h1 {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h2 {
  color: rgb(245, 97, 38);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h3 {
  color: rgb(167, 160, 73);
}

html[saved-theme="light"] body h4 {
  color: rgb(153, 184, 123);
}

html[saved-theme="light"] body h5 {
  color: rgb(99, 148, 121);
}

html[saved-theme="light"] body h6 {
  color: rgb(165, 110, 140);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(92, 106, 114);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(147, 159, 145);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body abbr {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body sub {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body summary {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body sup {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(130, 158, 102);
}`,
  },
};
