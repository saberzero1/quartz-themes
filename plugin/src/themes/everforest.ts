import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "everforest",
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
  --caret-color: #d3c6aa !important;
  --checkbox-border-color: #859289 !important;
  --checkbox-color: #569d79 !important;
  --checkbox-marker-color: #2f383e !important;
  --code-background: #2f383e !important;
  --code-block: #d3c6aa !important;
  --code-border-color: #525c62 !important;
  --code-comment: #859289 !important;
  --code-normal: #d3c6aa !important;
  --codeFont: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --collapse-icon-color: #859289 !important;
  --collapse-icon-color-collapsed: #5a93a2 !important;
  --dark: #d3c6aa !important;
  --darkgray: #d3c6aa !important;
  --dim-aqua: #569d79 !important;
  --dim-blue: #5a93a2 !important;
  --dim-green: #899c40 !important;
  --dim-orange: #d77f48 !important;
  --dim-purple: #b87b9d !important;
  --dim-red: #da6362 !important;
  --dim-yellow: #bf983d !important;
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
  --fg-dark: #d3c6aa !important;
  --fg-light: #5c6a72 !important;
  --file-header-background: #2f383e !important;
  --file-header-background-focused: #2f383e !important;
  --flair-color: #d3c6aa !important;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --footnote-divider-color: #525c62 !important;
  --footnote-id-color-no-occurrences: #859289 !important;
  --graph-node-focused: #5a93a2 !important;
  --graph-node-unresolved: #859289 !important;
  --graph-text: #d3c6aa !important;
  --gray: #859289 !important;
  --grey0-dark: #7f897d !important;
  --grey0-light: #a4ad9e !important;
  --grey1-dark: #859289 !important;
  --grey1-light: #939f91 !important;
  --grey2-dark: #9aa79d !important;
  --grey2-light: #879686 !important;
  --h1-color: #da6362 !important;
  --h2-color: #d77f48 !important;
  --h3-color: #bf983d !important;
  --h4-color: #899c40 !important;
  --h5-color: #569d79 !important;
  --h6-color: #b87b9d !important;
  --heading-formatting: #859289 !important;
  --highlight: #404d44 !important;
  --hr-color: #525c62 !important;
  --icon-color-active: #5a93a2 !important;
  --icon-color-focused: #d3c6aa !important;
  --inline-code: #5a93a2 !important;
  --inline-title-color: #da6362 !important;
  --input-date-separator: #859289 !important;
  --input-placeholder-color: #859289 !important;
  --interactive-accent: #569d79 !important;
  --interactive-accent-rgb: #5a93a2 !important;
  --interactive-before: #525c62 !important;
  --light: #2f383e !important;
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
  --lightgray: #2f383e !important;
  --link-color: #5a93a2 !important;
  --link-external-color: #5a93a2 !important;
  --link-unresolved-color: #5a93a2 !important;
  --list-marker-color: #859289 !important;
  --list-marker-color-collapsed: #5a93a2 !important;
  --menu-background: #2f383e !important;
  --metadata-border-color: #525c62 !important;
  --metadata-divider-color: #525c62 !important;
  --metadata-input-text-color: #d3c6aa !important;
  --modal-background: #2f383e !important;
  --nav-collapse-icon-color: #859289 !important;
  --nav-collapse-icon-color-collapsed: #859289 !important;
  --nav-heading-color: #d3c6aa !important;
  --nav-heading-color-collapsed: #859289 !important;
  --nav-heading-color-hover: #d3c6aa !important;
  --nav-item-color-active: #d3c6aa !important;
  --nav-item-color-highlighted: #5a93a2 !important;
  --nav-item-color-hover: #d3c6aa !important;
  --nav-item-color-selected: #d3c6aa !important;
  --nav-tag-color: #859289 !important;
  --pdf-background: #2f383e !important;
  --pdf-page-background: #2f383e !important;
  --pdf-shadow: 0 0 0 1px #525c62 !important;
  --pdf-sidebar-background: #2f383e !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #525c62 !important;
  --pill-border-color: #525c62 !important;
  --pill-color-hover: #d3c6aa !important;
  --pill-color-remove: #859289 !important;
  --pill-color-remove-hover: #5a93a2 !important;
  --pre-code: #272f34 !important;
  --prompt-background: #2f383e !important;
  --ribbon-background: #2f383e !important;
  --ribbon-background-collapsed: #2f383e !important;
  --search-result-background: #2f383e !important;
  --secondary: #5a93a2 !important;
  --setting-group-heading-color: #d3c6aa !important;
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
  --tab-text-color-focused-active-current: #d3c6aa !important;
  --tab-text-color-focused-highlighted: #5a93a2 !important;
  --table-add-button-border-color: #525c62 !important;
  --table-border-color: #525c62 !important;
  --table-drag-handle-background-active: #569d79 !important;
  --table-drag-handle-color: #859289 !important;
  --table-header-border-color: #525c62 !important;
  --table-header-color: #d3c6aa !important;
  --table-selection-border-color: #569d79 !important;
  --tag-color: #5a93a2 !important;
  --tag-color-hover: #5a93a2 !important;
  --tertiary: #5a93a2 !important;
  --text-a: #569d79 !important;
  --text-a-hover: #83c092 !important;
  --text-accent: #5a93a2 !important;
  --text-faint: #859289 !important;
  --text-highlight-bg: #404d44 !important;
  --text-link: #7fbbb3 !important;
  --text-mark: rgba(215, 153, 33, 0.4) !important;
  --text-normal: #d3c6aa !important;
  --text-selection: #525c62 !important;
  --text-title-h1: #da6362 !important;
  --text-title-h2: #d77f48 !important;
  --text-title-h3: #bf983d !important;
  --text-title-h4: #899c40 !important;
  --text-title-h5: #569d79 !important;
  --text-title-h6: #b87b9d !important;
  --textHighlight: #404d44 !important;
  --titlebar-background: #2f383e !important;
  --titlebar-background-focused: #2f383e !important;
  --titlebar-border-color: #525c62 !important;
  --titlebar-text-color-focused: #d3c6aa !important;
  --vault-profile-color: #d3c6aa !important;
  --vault-profile-color-hover: #d3c6aa !important;
  --vim-cursor: #7fbbb3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 56, 62);
  border-left-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 56, 62);
  color: rgb(211, 198, 170);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, b {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page article p > em, em {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page article p > i, i {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .page article p > strong, strong {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgb(64, 77, 68);
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body del {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: line-through rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}`,
    links: `html[saved-theme="dark"] body a.external, footer a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline rgb(90, 147, 162);
  text-decoration-color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
  text-decoration: underline rgb(90, 147, 162);
  text-decoration-color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(90, 147, 162);
  outline: rgb(90, 147, 162) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body dt {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ol.overflow {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.overflow {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(133, 146, 137);
  text-decoration: rgb(133, 146, 137);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body table {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
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
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
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
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  padding-left: 10px;
  padding-right: 10px;
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(211, 198, 170);
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(211, 198, 170);
  outline: rgb(211, 198, 170) none 0px;
  text-decoration: rgb(211, 198, 170);
  text-decoration-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 56, 62);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(82, 92, 98);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(90, 147, 162);
}

html[saved-theme="dark"] body h1 {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h2 {
  color: rgb(215, 127, 72);
}

html[saved-theme="dark"] body h2.page-title, h2.page-title a {
  color: rgb(218, 99, 98);
}

html[saved-theme="dark"] body h3 {
  color: rgb(191, 152, 61);
}

html[saved-theme="dark"] body h4 {
  color: rgb(137, 156, 64);
}

html[saved-theme="dark"] body h5 {
  color: rgb(86, 157, 121);
}

html[saved-theme="dark"] body h6 {
  color: rgb(184, 123, 157);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
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
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
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
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(211, 198, 170);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(211, 198, 170);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
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
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body abbr {
  color: rgb(211, 198, 170);
  text-decoration: underline dotted rgb(211, 198, 170);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
  color: rgb(211, 198, 170);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(211, 198, 170);
  border-left-color: rgb(211, 198, 170);
  border-right-color: rgb(211, 198, 170);
  border-top-color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sub {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body summary {
  color: rgb(211, 198, 170);
}

html[saved-theme="dark"] body sup {
  color: rgb(211, 198, 170);
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
  --collapse-icon-color-collapsed: #a4bb4a !important;
  --dark: #5c6a72 !important;
  --darkgray: #5c6a72 !important;
  --dim-aqua: #569d79 !important;
  --dim-blue: #5a93a2 !important;
  --dim-green: #899c40 !important;
  --dim-orange: #d77f48 !important;
  --dim-purple: #b87b9d !important;
  --dim-red: #da6362 !important;
  --dim-yellow: #bf983d !important;
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
  --fg-dark: #d3c6aa !important;
  --fg-light: #5c6a72 !important;
  --file-header-background: #fdf6e3 !important;
  --file-header-background-focused: #fdf6e3 !important;
  --flair-color: #5c6a72 !important;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace !important;
  --footnote-divider-color: #dfdbc8 !important;
  --footnote-id-color-no-occurrences: #939f91 !important;
  --graph-node-focused: #a4bb4a !important;
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
  --h2-color: #f57d26 !important;
  --h3-color: #bf983d !important;
  --h4-color: #899c40 !important;
  --h5-color: #569d79 !important;
  --h6-color: #b87b9d !important;
  --heading-formatting: #939f91 !important;
  --highlight: #a4bb4a !important;
  --hr-color: #dfdbc8 !important;
  --icon-color-active: #a4bb4a !important;
  --icon-color-focused: #5c6a72 !important;
  --inline-code: #5a93a2 !important;
  --inline-title-color: #f85552 !important;
  --input-date-separator: #939f91 !important;
  --input-placeholder-color: #939f91 !important;
  --interactive-accent: #dfdbc8 !important;
  --interactive-accent-rgb: #a4bb4a !important;
  --interactive-before: #dfdbc8 !important;
  --light: #fdf6e3 !important;
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
  --lightgray: #fdf6e3 !important;
  --link-color: #a4bb4a !important;
  --link-external-color: #a4bb4a !important;
  --link-unresolved-color: #a4bb4a !important;
  --list-marker-color: #939f91 !important;
  --list-marker-color-collapsed: #a4bb4a !important;
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
  --nav-item-color-highlighted: #a4bb4a !important;
  --nav-item-color-hover: #5c6a72 !important;
  --nav-item-color-selected: #5c6a72 !important;
  --nav-tag-color: #939f91 !important;
  --pdf-background: #fdf6e3 !important;
  --pdf-page-background: #fdf6e3 !important;
  --pdf-sidebar-background: #fdf6e3 !important;
  --pill-border-color: #dfdbc8 !important;
  --pill-color-hover: #5c6a72 !important;
  --pill-color-remove: #939f91 !important;
  --pill-color-remove-hover: #a4bb4a !important;
  --pre-code: #f6f1dd !important;
  --prompt-background: #fdf6e3 !important;
  --raised-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent)) !important;
  --ribbon-background: #fdf6e3 !important;
  --ribbon-background-collapsed: #fdf6e3 !important;
  --search-result-background: #fdf6e3 !important;
  --secondary: #a4bb4a !important;
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
  --tab-text-color-focused-highlighted: #a4bb4a !important;
  --table-add-button-border-color: #dfdbc8 !important;
  --table-border-color: #dfdbc8 !important;
  --table-drag-handle-background-active: #dfdbc8 !important;
  --table-drag-handle-color: #939f91 !important;
  --table-header-border-color: #dfdbc8 !important;
  --table-header-color: #5c6a72 !important;
  --table-selection-border-color: #dfdbc8 !important;
  --tag-color: #a4bb4a !important;
  --tag-color-hover: #a4bb4a !important;
  --tertiary: #a4bb4a !important;
  --text-a: #6cb3c6 !important;
  --text-a-hover: #5a93a2 !important;
  --text-accent: #a4bb4a !important;
  --text-faint: #939f91 !important;
  --text-highlight-bg: #a4bb4a !important;
  --text-link: #5a93a2 !important;
  --text-mark: rgba(215, 153, 33, 0.4) !important;
  --text-normal: #5c6a72 !important;
  --text-selection: rgba(189, 174, 147, 0.5) !important;
  --text-title-h1: #f85552 !important;
  --text-title-h2: #f57d26 !important;
  --text-title-h3: #bf983d !important;
  --text-title-h4: #899c40 !important;
  --text-title-h5: #569d79 !important;
  --text-title-h6: #b87b9d !important;
  --textHighlight: #a4bb4a !important;
  --titlebar-background: #fdf6e3 !important;
  --titlebar-background-focused: #fdf6e3 !important;
  --titlebar-border-color: #dfdbc8 !important;
  --titlebar-text-color-focused: #5c6a72 !important;
  --vault-profile-color: #5c6a72 !important;
  --vault-profile-color-hover: #5c6a72 !important;
  --vim-cursor: #5a93a2 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
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
    typography: `html[saved-theme="light"] body .page article p > b, b {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page article p > em, em {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page article p > i, i {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .page article p > strong, strong {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(164, 187, 74);
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body del {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: line-through rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}`,
    links: `html[saved-theme="light"] body a.external, footer a {
  color: rgb(164, 187, 74);
  outline: rgb(164, 187, 74) none 0px;
  text-decoration: underline rgb(164, 187, 74);
  text-decoration-color: rgb(164, 187, 74);
}

html[saved-theme="light"] body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(164, 187, 74);
  outline: rgb(164, 187, 74) none 0px;
  text-decoration: underline rgb(164, 187, 74);
  text-decoration-color: rgb(164, 187, 74);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(164, 187, 74);
  outline: rgb(164, 187, 74) none 0px;
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
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul > li {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ul.overflow {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(147, 159, 145);
  text-decoration: rgb(147, 159, 145);
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

html[saved-theme="light"] body pre > code, pre:has(> code) {
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
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
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
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
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
  text-decoration: rgb(92, 106, 114);
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

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(189, 174, 147, 0.5);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(164, 187, 74);
}

html[saved-theme="light"] body h1 {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h2 {
  color: rgb(245, 125, 38);
}

html[saved-theme="light"] body h2.page-title, h2.page-title a {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h3 {
  color: rgb(191, 152, 61);
}

html[saved-theme="light"] body h4 {
  color: rgb(137, 156, 64);
}

html[saved-theme="light"] body h5 {
  color: rgb(86, 157, 121);
}

html[saved-theme="light"] body h6 {
  color: rgb(184, 123, 157);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
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
    explorer: `html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(92, 106, 114);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  text-decoration: underline dotted rgb(92, 106, 114);
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
}`,
  },
};
