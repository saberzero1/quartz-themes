import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "absolutegruv", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-modifier-border: #928374;
  --background-primary: #282828;
  --background-primary-alt: #282828;
  --background-secondary: #282828;
  --background-secondary-alt: #282828;
  --bases-cards-background: #282828;
  --bases-cards-cover-background: #282828;
  --bases-cards-shadow: 0 0 0 1px #928374;
  --bases-embed-border-color: #928374;
  --bases-table-border-color: #928374;
  --bases-table-cell-background-active: #282828;
  --bases-table-cell-background-disabled: #282828;
  --bases-table-cell-shadow-focus: 0 0 0 2px #689d6a;
  --bases-table-group-background: #282828;
  --bases-table-header-background: #282828;
  --bases-table-summary-background: #282828;
  --bg-dark: #282828;
  --bg-light: #fdf6e3;
  --bg0-dark: #1d2021;
  --bg0-light: #f0edd8;
  --bg1-dark: #3c3836;
  --bg1-light: #f6f1dd;
  --bg2-dark: #504945;
  --bg2-light: #f3efda;
  --bg3-dark: #665c54;
  --bg3-light: #edead5;
  --bg4-dark: #7c6f64;
  --bg4-light: #e4e1cd;
  --bg5-dark: #928374;
  --bg5-light: #dfdbc8;
  --bg_blue: #458588;
  --bg_blue_light: #e9f0e9;
  --bg_green: #98971a;
  --bg_green_light: #f0f1d2;
  --bg_red: #cc241d;
  --bg_red_light: #fbe3da;
  --bg_visual: #503946;
  --bg_visual_light: #eaedc8;
  --bg_yellow: #d79921;
  --bg_yellow_light: #faedcd;
  --blockquote-border-color: #689d6a;
  --canvas-background: #282828;
  --canvas-card-label-color: #859289;
  --caret-color: #ebdbb2;
  --checkbox-border-color: #859289;
  --checkbox-color: #689d6a;
  --checkbox-marker-color: #282828;
  --code-background: #282828;
  --code-block: #ebdbb2;
  --code-border-color: #928374;
  --code-comment: #859289;
  --code-normal: #ebdbb2;
  --collapse-icon-color: #859289;
  --collapse-icon-color-collapsed: #458588;
  --dim-aqua: #689d6a;
  --dim-blue: #458588;
  --dim-green: #98971a;
  --dim-orange: #d65d0e;
  --dim-purple: #b16286;
  --dim-red: #cc241d;
  --dim-yellow: #d79921;
  --divider-color: #928374;
  --divider-color-hover: #689d6a;
  --embed-block-shadow-hover: 0 0 0 1px #928374, inset 0 0 0 1px #928374;
  --embed-border-start: 2px solid #689d6a;
  --faded-aqua: #8ec07c;
  --faded-blue: #83a598;
  --faded-green: #b8bb26;
  --faded-orange: #fe8019;
  --faded-purple: #d3869b;
  --faded-red: #fb4934;
  --faded-yellow: #fabd2f;
  --fg-dark: #ebdbb2;
  --fg-light: #5c6a72;
  --file-header-background: #282828;
  --file-header-background-focused: #282828;
  --flair-color: #ebdbb2;
  --font-monospace: "Source Code Pro", "Source Code Pro", "Source Code Pro";
  --footnote-divider-color: #928374;
  --footnote-id-color-no-occurrences: #859289;
  --graph-node-focused: #458588;
  --graph-node-unresolved: #859289;
  --graph-text: #ebdbb2;
  --grey0-dark: #7f897d;
  --grey0-light: #a4ad9e;
  --grey1-dark: #859289;
  --grey1-light: #939f91;
  --grey2-dark: #9aa79d;
  --grey2-light: #879686;
  --heading-formatting: #859289;
  --hr-color: #928374;
  --icon-color-active: #458588;
  --icon-color-focused: #ebdbb2;
  --inline-code: #458588;
  --input-date-separator: #859289;
  --input-placeholder-color: #859289;
  --interactive-accent: #689d6a;
  --interactive-accent-rgb: #458588;
  --interactive-before: #928374;
  --light-aqua: #569d79;
  --light-blue: #5a93a2;
  --light-dim-aqua: #6ec398;
  --light-dim-blue: #6cb3c6;
  --light-dim-green: #a4bb4a;
  --light-dim-orange: #f39459;
  --light-dim-purple: #e092be;
  --light-dim-red: #f1706f;
  --light-dim-yellow: #e4b649;
  --light-green: #899c40;
  --light-orange: #f57d26;
  --light-purple: #b87b9d;
  --light-red: #f85552;
  --light-yellow: #bf983d;
  --link-color: #458588;
  --link-external-color: #458588;
  --link-unresolved-color: #458588;
  --list-marker-color: #859289;
  --list-marker-color-collapsed: #458588;
  --menu-background: #282828;
  --metadata-border-color: #928374;
  --metadata-divider-color: #928374;
  --metadata-input-text-color: #ebdbb2;
  --modal-background: #282828;
  --nav-collapse-icon-color: #859289;
  --nav-collapse-icon-color-collapsed: #859289;
  --nav-heading-color: #ebdbb2;
  --nav-heading-color-collapsed: #859289;
  --nav-heading-color-hover: #ebdbb2;
  --nav-item-color-active: #ebdbb2;
  --nav-item-color-highlighted: #458588;
  --nav-item-color-hover: #ebdbb2;
  --nav-item-color-selected: #ebdbb2;
  --nav-tag-color: #859289;
  --pdf-background: #282828;
  --pdf-page-background: #282828;
  --pdf-shadow: 0 0 0 1px #928374;
  --pdf-sidebar-background: #282828;
  --pdf-thumbnail-shadow: 0 0 0 1px #928374;
  --pill-border-color: #928374;
  --pill-color-hover: #ebdbb2;
  --pill-color-remove: #859289;
  --pill-color-remove-hover: #458588;
  --pre-code: #3c3836;
  --prompt-background: #282828;
  --ribbon-background: #282828;
  --ribbon-background-collapsed: #282828;
  --search-result-background: #282828;
  --setting-group-heading-color: #ebdbb2;
  --setting-items-background: #282828;
  --setting-items-border-color: #928374;
  --shadow: #00000070;
  --shadow-light: #3c474d20;
  --slider-track-background: #928374;
  --status-bar-background: #282828;
  --status-bar-border-color: #928374;
  --suggestion-background: #282828;
  --tab-background-active: #282828;
  --tab-container-background: #282828;
  --tab-outline-color: #928374;
  --tab-switcher-background: #282828;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent);
  --tab-text-color: #859289;
  --tab-text-color-focused-active-current: #ebdbb2;
  --tab-text-color-focused-highlighted: #458588;
  --table-add-button-border-color: #928374;
  --table-border-color: #928374;
  --table-drag-handle-background-active: #689d6a;
  --table-drag-handle-color: #859289;
  --table-header-border-color: #928374;
  --table-header-color: #ebdbb2;
  --table-selection-border-color: #689d6a;
  --tag-color: #458588;
  --tag-color-hover: #458588;
  --text-a: #689d6a;
  --text-a-hover: #8ec07c;
  --text-accent: #458588;
  --text-faint: #859289;
  --text-highlight-bg: #98971a;
  --text-link: #83a598;
  --text-mark: rgba(215, 153, 33, 0.4);
  --text-normal: #ebdbb2;
  --text-selection: #928374;
  --text-title-h1: #cc241d;
  --text-title-h2: #d65d0e;
  --text-title-h3: #d79921;
  --text-title-h4: #98971a;
  --text-title-h5: #689d6a;
  --text-title-h6: #b16286;
  --titlebar-background: #282828;
  --titlebar-background-focused: #282828;
  --titlebar-border-color: #928374;
  --titlebar-text-color-focused: #ebdbb2;
  --vault-profile-color: #ebdbb2;
  --vault-profile-color-hover: #ebdbb2;
  --vim-cursor: #83a598;
  --quartz-icon-color: currentColor;
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
