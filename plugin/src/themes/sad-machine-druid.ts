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
  --background-modifier-border: #525c62;
  --background-primary: #2f383e;
  --background-primary-alt: #2f383e;
  --background-secondary: #2f383e;
  --background-secondary-alt: #2f383e;
  --bases-cards-background: #2f383e;
  --bases-cards-cover-background: #2f383e;
  --bases-cards-shadow: 0 0 0 1px #525c62;
  --bases-embed-border-color: #525c62;
  --bases-table-border-color: #525c62;
  --bases-table-cell-background-active: #2f383e;
  --bases-table-cell-background-disabled: #2f383e;
  --bases-table-cell-shadow-focus: 0 0 0 2px #569d79;
  --bases-table-group-background: #2f383e;
  --bases-table-header-background: #2f383e;
  --bases-table-summary-background: #2f383e;
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
  --blockquote-border-color: #569d79;
  --canvas-background: #2f383e;
  --canvas-card-label-color: #859289;
  --caret-color: #beb39b;
  --checkbox-border-color: #859289;
  --checkbox-color: #569d79;
  --checkbox-marker-color: #2f383e;
  --code-background: #2f383e;
  --code-block: #beb39b;
  --code-border-color: #525c62;
  --code-comment: #859289;
  --code-normal: #beb39b;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #5b928c;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dim-aqua: #569d79;
  --dim-blue: #5b928c;
  --dim-green: #68925b;
  --dim-orange: #b98c70;
  --dim-purple: #705b92;
  --dim-red: #925b62;
  --dim-yellow: #d3b879;
  --divider-color: #525c62;
  --divider-color-hover: #569d79;
  --embed-block-shadow-hover: 0 0 0 1px #525c62, inset 0 0 0 1px #525c62;
  --embed-border-start: 2px solid #569d79;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #beb39b;
  --fg-light: #5c6a72;
  --file-header-background: #2f383e;
  --file-header-background-focused: #2f383e;
  --flair-color: #beb39b;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace;
  --footnote-divider-color: #525c62;
  --footnote-id-color-no-occurrences: #859289;
  --graph-node-focused: #5b928c;
  --graph-node-unresolved: #859289;
  --graph-text: #beb39b;
  --gray: var(--text-faint);
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --h1-color: #68925b;
  --h2-color: #569d79;
  --h3-color: #705b92;
  --h4-color: #925b62;
  --h5-color: #b98c70;
  --h6-color: #d3b879;
  --heading-formatting: #859289;
  --highlight: var(--text-highlight-bg);
  --hr-color: #525c62;
  --icon-color-active: #5b928c;
  --icon-color-focused: #beb39b;
  --inline-code: #5b928c;
  --inline-title-color: #68925b;
  --input-date-separator: #859289;
  --input-placeholder-color: #859289;
  --interactive-accent: #569d79;
  --interactive-accent-rgb: #5b928c;
  --interactive-before: #525c62;
  --light: var(--background-primary);
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
  --lightgray: var(--background-secondary);
  --link-color: #5b928c;
  --link-external-color: #5b928c;
  --link-unresolved-color: #5b928c;
  --list-marker-color: #859289;
  --list-marker-color-collapsed: #5b928c;
  --menu-background: #2f383e;
  --metadata-border-color: #525c62;
  --metadata-divider-color: #525c62;
  --metadata-input-text-color: #beb39b;
  --modal-background: #2f383e;
  --nav-collapse-icon-color: #859289;
  --nav-collapse-icon-color-collapsed: #859289;
  --nav-heading-color: #beb39b;
  --nav-heading-color-collapsed: #859289;
  --nav-heading-color-hover: #beb39b;
  --nav-item-color-active: #beb39b;
  --nav-item-color-highlighted: #5b928c;
  --nav-item-color-hover: #beb39b;
  --nav-item-color-selected: #beb39b;
  --nav-tag-color: #859289;
  --pdf-background: #2f383e;
  --pdf-page-background: #2f383e;
  --pdf-shadow: 0 0 0 1px #525c62;
  --pdf-sidebar-background: #2f383e;
  --pdf-thumbnail-shadow: 0 0 0 1px #525c62;
  --pill-border-color: #525c62;
  --pill-color-hover: #beb39b;
  --pill-color-remove: #859289;
  --pill-color-remove-hover: #5b928c;
  --pre-code: #272f34;
  --prompt-background: #2f383e;
  --ribbon-background: #2f383e;
  --ribbon-background-collapsed: #2f383e;
  --search-result-background: #2f383e;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #beb39b;
  --setting-items-background: #2f383e;
  --setting-items-border-color: #525c62;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
  --slider-track-background: #525c62;
  --status-bar-background: #2f383e;
  --status-bar-border-color: #525c62;
  --suggestion-background: #2f383e;
  --tab-background-active: #2f383e;
  --tab-container-background: #2f383e;
  --tab-outline-color: #525c62;
  --tab-switcher-background: #2f383e;
  --tab-switcher-menubar-background: linear-gradient(to top, #2f383e, transparent);
  --tab-text-color: #859289;
  --tab-text-color-focused-active-current: #beb39b;
  --tab-text-color-focused-highlighted: #5b928c;
  --table-add-button-border-color: #525c62;
  --table-border-color: #525c62;
  --table-drag-handle-background-active: #569d79;
  --table-drag-handle-color: #859289;
  --table-header-border-color: #525c62;
  --table-header-color: #beb39b;
  --table-selection-border-color: #569d79;
  --tag-color: #5b928c;
  --tag-color-hover: #5b928c;
  --tertiary: var(--text-accent);
  --text-a: #569d79;
  --text-a-hover: #83c092;
  --text-accent: #5b928c;
  --text-faint: #859289;
  --text-highlight-bg: #404d44;
  --text-link: #7fbbb3;
  --text-normal: #beb39b;
  --text-selection: #525c62;
  --text-title-h1: #68925b;
  --text-title-h2: #569d79;
  --text-title-h3: #705b92;
  --text-title-h4: #925b62;
  --text-title-h5: #b98c70;
  --text-title-h6: #d3b879;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #2f383e;
  --titlebar-background-focused: #2f383e;
  --titlebar-border-color: #525c62;
  --titlebar-text-color-focused: #beb39b;
  --vault-profile-color: #beb39b;
  --vault-profile-color-hover: #beb39b;
  --vim-cursor: #7fbbb3;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(82, 92, 98);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(47, 56, 62);
  border-left-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body div#quartz-root {
  background-color: rgb(47, 56, 62);
  color: rgb(190, 179, 155);
}`,
    typography: `body .page article p > b, b {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body .page article p > em, em {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body .page article p > i, i {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body .page article p > strong, strong {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body .text-highlight {
  background-color: rgb(64, 77, 68);
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body del {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: line-through rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}`,
    links: `body a.external, footer a {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
  text-decoration: underline rgb(91, 146, 140);
  text-decoration-color: rgb(91, 146, 140);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
  text-decoration: underline rgb(91, 146, 140);
  text-decoration-color: rgb(91, 146, 140);
}

body a.internal.broken {
  color: rgb(91, 146, 140);
  outline: rgb(91, 146, 140) none 0px;
}`,
    lists: `body dd {
  color: rgb(190, 179, 155);
}

body dt {
  color: rgb(190, 179, 155);
}

body ol > li {
  color: rgb(190, 179, 155);
}

body ol.overflow {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body ul > li {
  color: rgb(190, 179, 155);
}

body ul.overflow {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(133, 146, 137);
  text-decoration: rgb(133, 146, 137);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body table {
  color: rgb(190, 179, 155);
}

body td {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body th {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body thead {
  border-bottom-color: rgb(82, 92, 98);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(82, 92, 98);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body pre > code, pre:has(> code) {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

body pre:has(> code) {
  background-color: rgb(39, 47, 52);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    images: `body audio {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body figcaption {
  color: rgb(190, 179, 155);
}

body figure {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body img {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body video {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    embeds: `body .file-embed {
  background-color: rgb(47, 56, 62);
}

body .footnotes {
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}

body .transclude {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(86, 157, 121);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

body li.task-list-item[data-task='!'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='*'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='-'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='/'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='>'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='?'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='I'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='S'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='b'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='c'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='d'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='f'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='i'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='k'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='l'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='p'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='u'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body li.task-list-item[data-task='w'] {
  color: rgb(190, 179, 155);
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body .search > .search-container > .search-space {
  background-color: rgb(47, 56, 62);
}

body .search > .search-container > .search-space > * {
  color: rgb(190, 179, 155);
  outline: rgb(190, 179, 155) none 0px;
  text-decoration: rgb(190, 179, 155);
  text-decoration-color: rgb(190, 179, 155);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(190, 179, 155);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(190, 179, 155);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(47, 56, 62);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(82, 92, 98);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(82, 92, 98);
  color: rgb(190, 179, 155);
}

body a.internal.tag-link::before {
  color: rgb(91, 146, 140);
}

body h1 {
  color: rgb(104, 146, 91);
}

body h2 {
  color: rgb(86, 157, 121);
}

body h2.page-title, h2.page-title a {
  color: rgb(104, 146, 91);
}

body h3 {
  color: rgb(112, 91, 146);
}

body h4 {
  color: rgb(146, 91, 98);
}

body h5 {
  color: rgb(185, 140, 112);
}

body h6 {
  color: rgb(211, 184, 121);
}

body hr {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

body ::-webkit-scrollbar-corner {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}

body ::-webkit-scrollbar-track {
  background: rgb(47, 56, 62) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(47, 56, 62);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(190, 179, 155);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(190, 179, 155);
}`,
    footer: `body footer {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(190, 179, 155);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body ul.section-ul {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(133, 146, 137);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
}

body .metadata {
  border-bottom-color: rgb(82, 92, 98);
  border-left-color: rgb(82, 92, 98);
  border-right-color: rgb(82, 92, 98);
  border-top-color: rgb(82, 92, 98);
}

body .navigation-progress {
  background-color: rgb(47, 56, 62);
}

body .page-header h2.page-title {
  color: rgb(190, 179, 155);
}

body abbr {
  color: rgb(190, 179, 155);
  text-decoration: underline dotted rgb(190, 179, 155);
}

body details {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body kbd {
  background-color: rgb(47, 56, 62);
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
  color: rgb(190, 179, 155);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(190, 179, 155);
  border-left-color: rgb(190, 179, 155);
  border-right-color: rgb(190, 179, 155);
  border-top-color: rgb(190, 179, 155);
}

body sub {
  color: rgb(190, 179, 155);
}

body summary {
  color: rgb(190, 179, 155);
}

body sup {
  color: rgb(190, 179, 155);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #dfdbc8;
  --background-primary: #fdf6e3;
  --background-primary-alt: #fdf6e3;
  --background-secondary: #fdf6e3;
  --background-secondary-alt: #fdf6e3;
  --bases-cards-background: #fdf6e3;
  --bases-cards-cover-background: #fdf6e3;
  --bases-cards-shadow: 0 0 0 1px #dfdbc8;
  --bases-embed-border-color: #dfdbc8;
  --bases-table-border-color: #dfdbc8;
  --bases-table-cell-background-active: #fdf6e3;
  --bases-table-cell-background-disabled: #fdf6e3;
  --bases-table-cell-shadow-focus: 0 0 0 2px #dfdbc8;
  --bases-table-group-background: #fdf6e3;
  --bases-table-header-background: #fdf6e3;
  --bases-table-summary-background: #fdf6e3;
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
  --blockquote-border-color: #dfdbc8;
  --blur-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent));
  --canvas-background: #fdf6e3;
  --canvas-card-label-color: #939f91;
  --caret-color: #5c6a72;
  --checkbox-border-color: #939f91;
  --checkbox-color: #dfdbc8;
  --checkbox-marker-color: #fdf6e3;
  --code-background: #fdf6e3;
  --code-block: #5c6a72;
  --code-border-color: #dfdbc8;
  --code-comment: #939f91;
  --code-normal: #5c6a72;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #939f91;
  --collapse-icon-color-collapsed: #829e66;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --dim-aqua: #569d79;
  --dim-blue: #5b928c;
  --dim-green: #68925b;
  --dim-orange: #b98c70;
  --dim-purple: #705b92;
  --dim-red: #925b62;
  --dim-yellow: #d3b879;
  --divider-color: #dfdbc8;
  --divider-color-hover: #dfdbc8;
  --embed-block-shadow-hover: 0 0 0 1px #dfdbc8, inset 0 0 0 1px #dfdbc8;
  --embed-border-start: 2px solid #dfdbc8;
  --faded-aqua: #83c092;
  --faded-blue: #7fbbb3;
  --faded-green: #a7c080;
  --faded-orange: #e69875;
  --faded-purple: #d699b6;
  --faded-red: #e67e80;
  --faded-yellow: #dbbc7f;
  --fg-dark: #beb39b;
  --fg-light: #5c6a72;
  --file-header-background: #fdf6e3;
  --file-header-background-focused: #fdf6e3;
  --flair-color: #5c6a72;
  --font-monospace: "Hack Nerd Font", "Source Code Pro", monospace;
  --footnote-divider-color: #dfdbc8;
  --footnote-id-color-no-occurrences: #939f91;
  --graph-node-focused: #829e66;
  --graph-node-unresolved: #939f91;
  --graph-text: #5c6a72;
  --gray: var(--text-faint);
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --h1-color: #f85552;
  --h2-color: #f56126;
  --h3-color: #a7a049;
  --h4-color: #99b87b;
  --h5-color: #639479;
  --h6-color: #a56e8c;
  --heading-formatting: #939f91;
  --highlight: var(--text-highlight-bg);
  --hr-color: #dfdbc8;
  --icon-color-active: #829e66;
  --icon-color-focused: #5c6a72;
  --inline-code: #67a6bd;
  --inline-title-color: #f85552;
  --input-date-separator: #939f91;
  --input-placeholder-color: #939f91;
  --interactive-accent: #dfdbc8;
  --interactive-accent-rgb: #829e66;
  --interactive-before: #dfdbc8;
  --light: var(--background-primary);
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
  --lightgray: var(--background-secondary);
  --link-color: #829e66;
  --link-external-color: #829e66;
  --link-unresolved-color: #829e66;
  --list-marker-color: #939f91;
  --list-marker-color-collapsed: #829e66;
  --menu-background: #fdf6e3;
  --metadata-border-color: #dfdbc8;
  --metadata-divider-color: #dfdbc8;
  --metadata-input-text-color: #5c6a72;
  --modal-background: #fdf6e3;
  --nav-collapse-icon-color: #939f91;
  --nav-collapse-icon-color-collapsed: #939f91;
  --nav-heading-color: #5c6a72;
  --nav-heading-color-collapsed: #939f91;
  --nav-heading-color-hover: #5c6a72;
  --nav-item-color-active: #5c6a72;
  --nav-item-color-highlighted: #829e66;
  --nav-item-color-hover: #5c6a72;
  --nav-item-color-selected: #5c6a72;
  --nav-tag-color: #939f91;
  --pdf-background: #fdf6e3;
  --pdf-page-background: #fdf6e3;
  --pdf-sidebar-background: #fdf6e3;
  --pill-border-color: #dfdbc8;
  --pill-color-hover: #5c6a72;
  --pill-color-remove: #939f91;
  --pill-color-remove-hover: #829e66;
  --pre-code: #f6f1dd;
  --prompt-background: #fdf6e3;
  --raised-background: color-mix(in srgb, #fdf6e3 65%, transparent) linear-gradient(#fdf6e3, color-mix(in srgb, #fdf6e3 65%, transparent));
  --ribbon-background: #fdf6e3;
  --ribbon-background-collapsed: #fdf6e3;
  --search-result-background: #fdf6e3;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #5c6a72;
  --setting-items-background: #fdf6e3;
  --setting-items-border-color: #dfdbc8;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
  --slider-track-background: #dfdbc8;
  --status-bar-background: #fdf6e3;
  --status-bar-border-color: #dfdbc8;
  --suggestion-background: #fdf6e3;
  --tab-background-active: #fdf6e3;
  --tab-container-background: #fdf6e3;
  --tab-outline-color: #dfdbc8;
  --tab-switcher-background: #fdf6e3;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf6e3, transparent);
  --tab-text-color: #939f91;
  --tab-text-color-focused-active-current: #5c6a72;
  --tab-text-color-focused-highlighted: #829e66;
  --table-add-button-border-color: #dfdbc8;
  --table-border-color: #dfdbc8;
  --table-drag-handle-background-active: #dfdbc8;
  --table-drag-handle-color: #939f91;
  --table-header-border-color: #dfdbc8;
  --table-header-color: #5c6a72;
  --table-selection-border-color: #dfdbc8;
  --tag-color: #829e66;
  --tag-color-hover: #829e66;
  --tertiary: var(--text-accent);
  --text-a: #64a9c2;
  --text-a-hover: #67a6bd;
  --text-accent: #829e66;
  --text-faint: #939f91;
  --text-highlight-bg: #829e66;
  --text-link: #67a6bd;
  --text-normal: #5c6a72;
  --text-selection: rgba(189, 174, 147, 0.5);
  --text-title-h1: #f85552;
  --text-title-h2: #f56126;
  --text-title-h3: #a7a049;
  --text-title-h4: #99b87b;
  --text-title-h5: #639479;
  --text-title-h6: #a56e8c;
  --textHighlight: var(--text-highlight-bg);
  --titlebar-background: #fdf6e3;
  --titlebar-background-focused: #fdf6e3;
  --titlebar-border-color: #dfdbc8;
  --titlebar-text-color-focused: #5c6a72;
  --vault-profile-color: #5c6a72;
  --vault-profile-color-hover: #5c6a72;
  --vim-cursor: #67a6bd;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(223, 219, 200);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 246, 227);
  border-left-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

body div#quartz-root {
  background-color: rgb(253, 246, 227);
  color: rgb(92, 106, 114);
}`,
    typography: `body .page article p > b, b {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body .page article p > em, em {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body .page article p > i, i {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body .page article p > strong, strong {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body .text-highlight {
  background-color: rgb(130, 158, 102);
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body del {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: line-through rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}`,
    links: `body a.external, footer a {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
  text-decoration: underline rgb(130, 158, 102);
  text-decoration-color: rgb(130, 158, 102);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
  text-decoration: underline rgb(130, 158, 102);
  text-decoration-color: rgb(130, 158, 102);
}

body a.internal.broken {
  color: rgb(130, 158, 102);
  outline: rgb(130, 158, 102) none 0px;
}`,
    lists: `body dd {
  color: rgb(92, 106, 114);
}

body dt {
  color: rgb(92, 106, 114);
}

body ol > li {
  color: rgb(92, 106, 114);
}

body ol.overflow {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body ul > li {
  color: rgb(92, 106, 114);
}

body ul.overflow {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(147, 159, 145);
  text-decoration: rgb(147, 159, 145);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body table {
  color: rgb(92, 106, 114);
}

body td {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

body th {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

body thead {
  border-bottom-color: rgb(223, 219, 200);
  border-bottom-style: solid;
  border-bottom-width: 2px;
}

body tr {
  border-bottom-color: rgb(223, 219, 200);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

body pre > code, pre:has(> code) {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

body pre:has(> code) {
  background-color: rgb(246, 241, 221);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}`,
    images: `body audio {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body figcaption {
  color: rgb(92, 106, 114);
}

body figure {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body img {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body video {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    embeds: `body .file-embed {
  background-color: rgb(253, 246, 227);
}

body .footnotes {
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body .transclude {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-left: 10px;
  padding-right: 10px;
}

body .transclude-inner {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  padding-left: 10px;
  padding-right: 10px;
}`,
    checkboxes: `body input[type=checkbox] {
  border-bottom-color: rgb(127, 187, 179);
  border-left-color: rgb(127, 187, 179);
  border-right-color: rgb(127, 187, 179);
  border-top-color: rgb(127, 187, 179);
}

body li.task-list-item[data-task='!'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='*'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='-'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='/'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='>'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='?'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='I'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='S'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='b'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='c'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='d'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='f'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='i'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='k'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='l'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='p'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='u'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body li.task-list-item[data-task='w'] {
  color: rgb(92, 106, 114);
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space {
  background-color: rgb(253, 246, 227);
}

body .search > .search-container > .search-space > * {
  color: rgb(92, 106, 114);
  outline: rgb(92, 106, 114) none 0px;
  text-decoration: rgb(92, 106, 114);
  text-decoration-color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 246, 227);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(189, 174, 147, 0.5);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(189, 174, 147, 0.5);
  color: rgb(92, 106, 114);
}

body a.internal.tag-link::before {
  color: rgb(130, 158, 102);
}

body h1 {
  color: rgb(248, 85, 82);
}

body h2 {
  color: rgb(245, 97, 38);
}

body h2.page-title, h2.page-title a {
  color: rgb(248, 85, 82);
}

body h3 {
  color: rgb(167, 160, 73);
}

body h4 {
  color: rgb(153, 184, 123);
}

body h5 {
  color: rgb(99, 148, 121);
}

body h6 {
  color: rgb(165, 110, 140);
}

body hr {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-corner {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}

body ::-webkit-scrollbar-track {
  background: rgb(253, 246, 227) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(253, 246, 227);
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
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
    footer: `body footer {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(92, 106, 114);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body ul.section-ul {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(147, 159, 145);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
}

body .metadata {
  border-bottom-color: rgb(223, 219, 200);
  border-left-color: rgb(223, 219, 200);
  border-right-color: rgb(223, 219, 200);
  border-top-color: rgb(223, 219, 200);
}

body .navigation-progress {
  background-color: rgb(253, 246, 227);
}

body .page-header h2.page-title {
  color: rgb(92, 106, 114);
}

body abbr {
  color: rgb(92, 106, 114);
  text-decoration: underline dotted rgb(92, 106, 114);
}

body details {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body kbd {
  background-color: rgb(253, 246, 227);
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
  color: rgb(92, 106, 114);
  font-family: "Hack Nerd Font", "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(92, 106, 114);
  border-left-color: rgb(92, 106, 114);
  border-right-color: rgb(92, 106, 114);
  border-top-color: rgb(92, 106, 114);
}

body sub {
  color: rgb(92, 106, 114);
}

body summary {
  color: rgb(92, 106, 114);
}

body sup {
  color: rgb(92, 106, 114);
}`,
  },
};
