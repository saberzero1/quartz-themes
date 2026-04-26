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
  --shiki-code-background: #2f383e !important;
  --shiki-code-comment: #859289 !important;
  --shiki-gutter-border-color: #525c62 !important;
  --shiki-gutter-text-color: #859289 !important;
  --shiki-terminal-dots-color: #859289 !important;
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

html[saved-theme="dark"] body html {
  --bg-dark: #2f383e;
  --bg-light: #fdf6e3;
  --bg0-dark: #22282c;
  --bg0-light: #f0edd8;
  --bg1-dark: #272f34;
  --bg1-light: #f6f1dd;
  --bg2-dark: #374247;
  --bg2-light: #f3efda;
  --bg3-dark: #404c51;
  --bg3-light: #edead5;
  --bg4-dark: #4a555b;
  --bg4-light: #e4e1cd;
  --bg5-dark: #525c62;
  --bg5-light: #dfdbc8;
  --bg_blue: #394f5a;
  --bg_blue_light: #e9f0e9;
  --bg_green: #404d44;
  --bg_green_light: #f0f1d2;
  --bg_red: #4e3e43;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #4a4940;
  --bg_yellow_light: #faedcd;
  --dim-aqua: #569d79;
  --dim-blue: #5b928c;
  --dim-green: #68925b;
  --dim-orange: #b98c70;
  --dim-purple: #705b92;
  --dim-red: #925b62;
  --dim-yellow: #d3b879;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #beb39b;
  --fg-light: #5c6a72;
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --light-aqua: #639479;
  --light-blue: #67a6bd;
  --light-dim-aqua: #689b7f;
  --light-dim-blue: #64a9c2;
  --light-dim-green: #829e66;
  --light-dim-orange: #e04c18;
  --light-dim-purple: #9e6886;
  --light-dim-red: #e04340;
  --light-dim-yellow: #a89f48;
  --light-green: #99b87b;
  --light-orange: #f56126;
  --light-purple: #a56e8c;
  --light-red: #f85552;
  --light-yellow: #a7a049;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
}`,
    typography: `html[saved-theme="dark"] body .markdown-rendered p > b, html[saved-theme="dark"] b {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .markdown-rendered p > em, html[saved-theme="dark"] em {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .markdown-rendered p > i, html[saved-theme="dark"] i {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .markdown-rendered p > strong, html[saved-theme="dark"] strong {
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
    links: `html[saved-theme="dark"] body a.external-link, html[saved-theme="dark"] footer a {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
  text-decoration-color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body a.internal-link, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
  text-decoration-color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body a.internal-link.broken {
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
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(91, 146, 140);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(47, 56, 62);
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

html[saved-theme="dark"] body li.task-list-item[data-task="#"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] li.task-list-item[data-task="body"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task=", html[saved-theme="dark"] "] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] {
  color: rgb(190, 179, 155);
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
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(102, 102, 102);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(190, 179, 155);
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

html[saved-theme="dark"] body a.internal-link.tag-link::before {
  color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body h1 {
  color: rgb(104, 146, 91);
}

html[saved-theme="dark"] body h1.article-title {
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
    canvas: `html[saved-theme="dark"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}`,
    properties: `html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(82, 92, 98);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(91, 146, 140);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    stacked: `html[saved-theme="dark"] body .stacked-page {
  background-color: rgb(47, 56, 62);
  border-color: rgb(190, 179, 155);
}

html[saved-theme="dark"] body .stacked-page-header {
  background-color: rgb(47, 56, 62);
}

html[saved-theme="dark"] body .stacked-page.active {
  border-color: rgb(190, 179, 155);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
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
  --shiki-code-background: #fdf6e3 !important;
  --shiki-code-comment: #939f91 !important;
  --shiki-gutter-border-color: #dfdbc8 !important;
  --shiki-gutter-text-color: #939f91 !important;
  --shiki-terminal-dots-color: #939f91 !important;
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

html[saved-theme="light"] body html {
  --bg-dark: #2f383e;
  --bg-light: #fdf6e3;
  --bg0-dark: #22282c;
  --bg0-light: #f0edd8;
  --bg1-dark: #272f34;
  --bg1-light: #f6f1dd;
  --bg2-dark: #374247;
  --bg2-light: #f3efda;
  --bg3-dark: #404c51;
  --bg3-light: #edead5;
  --bg4-dark: #4a555b;
  --bg4-light: #e4e1cd;
  --bg5-dark: #525c62;
  --bg5-light: #dfdbc8;
  --bg_blue: #394f5a;
  --bg_blue_light: #e9f0e9;
  --bg_green: #404d44;
  --bg_green_light: #f0f1d2;
  --bg_red: #4e3e43;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #4a4940;
  --bg_yellow_light: #faedcd;
  --dim-aqua: #569d79;
  --dim-blue: #5b928c;
  --dim-green: #68925b;
  --dim-orange: #b98c70;
  --dim-purple: #705b92;
  --dim-red: #925b62;
  --dim-yellow: #d3b879;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #beb39b;
  --fg-light: #5c6a72;
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --light-aqua: #639479;
  --light-blue: #67a6bd;
  --light-dim-aqua: #689b7f;
  --light-dim-blue: #64a9c2;
  --light-dim-green: #829e66;
  --light-dim-orange: #e04c18;
  --light-dim-purple: #9e6886;
  --light-dim-red: #e04340;
  --light-dim-yellow: #a89f48;
  --light-green: #99b87b;
  --light-orange: #f56126;
  --light-purple: #a56e8c;
  --light-red: #f85552;
  --light-yellow: #a7a049;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
}`,
    typography: `html[saved-theme="light"] body .markdown-rendered p > b, html[saved-theme="light"] b {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .markdown-rendered p > em, html[saved-theme="light"] em {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .markdown-rendered p > i, html[saved-theme="light"] i {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .markdown-rendered p > strong, html[saved-theme="light"] strong {
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
    links: `html[saved-theme="light"] body a.external-link, html[saved-theme="light"] footer a {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
  text-decoration-color: rgb(130, 158, 102);
}

html[saved-theme="light"] body a.internal-link, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
  text-decoration-color: rgb(130, 158, 102);
}

html[saved-theme="light"] body a.internal-link.broken {
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
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(103, 166, 189);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
  padding-bottom: 2.16px;
  padding-left: 4.32px;
  padding-right: 4.32px;
  padding-top: 2.16px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(253, 246, 227);
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

html[saved-theme="light"] body li.task-list-item[data-task="#"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] li.task-list-item[data-task="body"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=", html[saved-theme="light"] "] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] {
  color: rgb(92, 106, 114);
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
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 64c0-17.7-14.3-32-32-32S32 46.3 32 64V320c0 17.7 14.3 32 32 32s32-14.3 32-32V64zM64 480c22.1 0 40-17.9 40-40s-17.9-40-40-40s-40 17.9-40 40s17.9 40 40 40z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM169.8 165.3c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M307 34.8c-11.5 5.1-19 16.6-19 29.2v64H176C78.8 128 0 206.8 0 304C0 417.3 81.5 467.9 100.2 478.1c2.5 1.4 5.3 1.9 8.1 1.9c10.9 0 19.7-8.9 19.7-19.7c0-7.5-4.3-14.4-9.8-19.5C108.8 431.9 96 414.4 96 384c0-53 43-96 96-96h96v64c0 12.6 7.4 24.1 19 29.2s25 3 34.4-5.4l160-144c6.7-6.1 10.6-14.7 10.6-23.8s-3.8-17.7-10.6-23.8l-160-144c-9.4-8.5-22.9-10.6-34.4-5.4z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 48V487.7C0 501.1 10.9 512 24.3 512c5 0 9.9-1.5 14-4.4L192 400 345.7 507.6c4.1 2.9 9 4.4 14 4.4c13.4 0 24.3-10.9 24.3-24.3V48c0-26.5-21.5-48-48-48H48C21.5 0 0 21.5 0 48z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM216 336h24V272H216c-13.3 0-24-10.7-24-24s10.7-24 24-24h48c13.3 0 24 10.7 24 24v88h8c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24s10.7-24 24-24zm40-144c-17.7 0-32-14.3-32-32s14.3-32 32-32s32 14.3 32 32s-14.3 32-32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="abstract"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="bug"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="bug"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="danger"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="danger"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="example"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="example"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="failure"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="failure"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="info"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="info"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="note"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="question"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="quote"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="quote"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="success"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="success"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="tip"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="tip"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="todo"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="todo"] > .callout-content {
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .callout[data-callout="warning"] .callout-title {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] > .callout-content {
  color: rgb(92, 106, 114);
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

html[saved-theme="light"] body a.internal-link.tag-link::before {
  color: rgb(130, 158, 102);
}

html[saved-theme="light"] body h1 {
  color: rgb(248, 85, 82);
}

html[saved-theme="light"] body h1.article-title {
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
    canvas: `html[saved-theme="light"] body .canvas-node {
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
}`,
    bases: `html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}`,
    properties: `html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(223, 219, 200);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(130, 158, 102);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    stacked: `html[saved-theme="light"] body .stacked-page {
  background-color: rgb(253, 246, 227);
  border-color: rgb(92, 106, 114);
}

html[saved-theme="light"] body .stacked-page-header {
  background-color: rgb(253, 246, 227);
}

html[saved-theme="light"] body .stacked-page.active {
  border-color: rgb(92, 106, 114);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
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
