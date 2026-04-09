import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "rose-pine",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #26233a !important;
  --background-primary: #191724 !important;
  --background-secondary: #1f1d2e !important;
  --base: #191724 !important;
  --bases-cards-background: #191724 !important;
  --bases-cards-shadow: 0 0 0 1px #26233a !important;
  --bases-embed-border-color: #26233a !important;
  --bases-group-heading-property-color: #6e6a86 !important;
  --bases-table-border-color: #26233a !important;
  --bases-table-cell-background-active: #191724 !important;
  --bases-table-header-background: #191724 !important;
  --bases-table-header-color: #6e6a86 !important;
  --bases-table-summary-background: #191724 !important;
  --bold-color: #908caa !important;
  --canvas-background: #191724 !important;
  --caret-color: #e0def4 !important;
  --checkbox-border-color-hover: #6e6a86 !important;
  --checkbox-marker-color: #191724 !important;
  --checklist-done-color: #6e6a86 !important;
  --code-background: #21202e !important;
  --code-border-color: #26233a !important;
  --code-normal: #908caa !important;
  --code-punctuation: #6e6a86 !important;
  --collapse-icon-color-collapsed: #eb6f92 !important;
  --dark: #e0def4 !important;
  --darkgray: #e0def4 !important;
  --divider-color: #26233a !important;
  --embed-block-shadow-hover: 0 0 0 1px #26233a, inset 0 0 0 1px #26233a !important;
  --file-header-background: #191724 !important;
  --file-header-background-focused: #191724 !important;
  --flair-color: #e0def4 !important;
  --flashing-background: rgba(235, 111, 146, 0.3) !important;
  --foam: #9ccfd8 !important;
  --footnote-divider-color: #26233a !important;
  --footnote-id-color: #6e6a86 !important;
  --gold: #f6c177 !important;
  --graph-node: #6e6a86 !important;
  --graph-node-focused: #eb6f92 !important;
  --graph-text: #e0def4 !important;
  --gray: #6e6a86 !important;
  --h1-color: #eb6f92 !important;
  --h2-color: #f6c177 !important;
  --h3-color: #31748f !important;
  --h4-color: #9ccfd8 !important;
  --h5-color: #c4a7e7 !important;
  --h6-color: #ebbcba !important;
  --highlight-high: #524f67 !important;
  --highlight-low: #21202e !important;
  --highlight-med: #403d52 !important;
  --hr-color: #26233a !important;
  --icon-color: #6e6a86 !important;
  --icon-color-active: #eb6f92 !important;
  --icon-color-focused: #e0def4 !important;
  --icon-color-hover: #6e6a86 !important;
  --inline-title-color: #eb6f92 !important;
  --iris: #c4a7e7 !important;
  --light: #191724 !important;
  --light-base: #faf4ed !important;
  --light-foam: #56949f !important;
  --light-gold: #ea9d34 !important;
  --light-highlight-high: #cecacd !important;
  --light-highlight-low: #f4ede8 !important;
  --light-highlight-med: #dfdad9 !important;
  --light-iris: #907aa9 !important;
  --light-love: #b4637a !important;
  --light-muted: #9893a5 !important;
  --light-overlay: #f2e9e1 !important;
  --light-pine: #286983 !important;
  --light-rose: #d7827e !important;
  --light-subtle: #797593 !important;
  --light-surface: #fffaf3 !important;
  --light-text: #575279 !important;
  --lightgray: #1f1d2e !important;
  --link-color: #eb6f92 !important;
  --link-color-hover: #9ccfd8 !important;
  --link-external-color: #eb6f92 !important;
  --link-external-color-hover: #9ccfd8 !important;
  --link-unresolved-color: #eb6f92 !important;
  --link-url: #31748f !important;
  --link-url-hover: #c4a7e7 !important;
  --list-marker-color-collapsed: #eb6f92 !important;
  --list-marker-color-hover: #6e6a86 !important;
  --love: #eb6f92 !important;
  --menu-background: #1f1d2e !important;
  --metadata-border-color: #26233a !important;
  --metadata-divider-color: #26233a !important;
  --metadata-input-text-color: #e0def4 !important;
  --metadata-label-text-color: #6e6a86 !important;
  --metadata-label-text-color-hover: #6e6a86 !important;
  --modal-background: #191724 !important;
  --muted: #6e6a86 !important;
  --nav-heading-color: #e0def4 !important;
  --nav-heading-color-collapsed-hover: #6e6a86 !important;
  --nav-heading-color-hover: #e0def4 !important;
  --nav-item-color: #6e6a86 !important;
  --nav-item-color-active: #e0def4 !important;
  --nav-item-color-highlighted: #eb6f92 !important;
  --nav-item-color-hover: #e0def4 !important;
  --nav-item-color-selected: #e0def4 !important;
  --nav-tag-color-active: #6e6a86 !important;
  --nav-tag-color-hover: #6e6a86 !important;
  --overlay: #26233a !important;
  --pdf-background: #191724 !important;
  --pdf-page-background: #191724 !important;
  --pdf-shadow: 0 0 0 1px #26233a !important;
  --pdf-sidebar-background: #191724 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #26233a !important;
  --pill-border-color: #26233a !important;
  --pill-color: #6e6a86 !important;
  --pill-color-hover: #e0def4 !important;
  --pill-color-remove-hover: #eb6f92 !important;
  --pine: #31748f !important;
  --prompt-background: #191724 !important;
  --ribbon-background: #1f1d2e !important;
  --ribbon-background-collapsed: #191724 !important;
  --rose: #ebbcba !important;
  --search-clear-button-color: #6e6a86 !important;
  --search-icon-color: #6e6a86 !important;
  --search-result-background: #191724 !important;
  --secondary: #eb6f92 !important;
  --setting-group-heading-color: #e0def4 !important;
  --setting-items-border-color: #26233a !important;
  --slider-track-background: #26233a !important;
  --status-bar-background: #1f1d2e !important;
  --status-bar-border-color: #26233a !important;
  --status-bar-text-color: #6e6a86 !important;
  --subtle: #908caa !important;
  --suggestion-background: #191724 !important;
  --surface: #1f1d2e !important;
  --tab-background-active: #191724 !important;
  --tab-container-background: #1f1d2e !important;
  --tab-outline-color: #26233a !important;
  --tab-switcher-background: #1f1d2e !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1f1d2e, transparent) !important;
  --tab-text-color-active: #6e6a86 !important;
  --tab-text-color-focused: #6e6a86 !important;
  --tab-text-color-focused-active: #6e6a86 !important;
  --tab-text-color-focused-active-current: #e0def4 !important;
  --tab-text-color-focused-highlighted: #eb6f92 !important;
  --table-add-button-border-color: #26233a !important;
  --table-border-color: #26233a !important;
  --table-header-border-color: #26233a !important;
  --table-header-color: #e0def4 !important;
  --tag-background: #26233a !important;
  --tag-color: #c4a7e7 !important;
  --tag-color-hover: #eb6f92 !important;
  --tertiary: #9ccfd8 !important;
  --text: #e0def4 !important;
  --text-accent: #eb6f92 !important;
  --text-accent-hover: #9ccfd8 !important;
  --text-muted: #6e6a86 !important;
  --text-normal: #e0def4 !important;
  --text-selection: rgba(49, 116, 143, 0.6) !important;
  --titlebar-background: #1f1d2e !important;
  --titlebar-border-color: #26233a !important;
  --titlebar-text-color: #6e6a86 !important;
  --titlebar-text-color-focused: #e0def4 !important;
  --vault-profile-color: #e0def4 !important;
  --vault-profile-color-hover: #e0def4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .bases-table {
  border-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(31, 29, 46);
  border-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(38, 35, 58);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(38, 35, 58);
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(31, 29, 46);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 35, 58);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(31, 29, 46);
  border-left-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(25, 23, 36);
  color: rgb(224, 222, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(144, 140, 170);
  outline: rgb(144, 140, 170) none 0px;
  text-decoration-color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(144, 140, 170);
  outline: rgb(144, 140, 170) none 0px;
  text-decoration-color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body p {
  color: rgb(110, 106, 134);
  outline: rgb(110, 106, 134) none 0px;
  text-decoration-color: rgb(110, 106, 134);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
  text-decoration-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(235, 111, 146);
  outline: rgb(235, 111, 146) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body table {
  border-bottom-color: rgb(31, 29, 46);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(31, 29, 46);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(31, 29, 46);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(31, 29, 46);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body thead {
  border-bottom-color: rgb(38, 35, 58);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(31, 29, 46);
  border-right-color: rgb(31, 29, 46);
  border-top-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body tr {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(31, 29, 46);
  border-right-color: rgb(31, 29, 46);
  border-top-color: rgb(31, 29, 46);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(235, 111, 146);
  border-left-color: rgb(235, 111, 146);
  border-right-color: rgb(235, 111, 146);
  border-top-color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(224, 222, 244);
  text-decoration-color: rgb(224, 222, 244);
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
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 222, 244);
  outline: rgb(224, 222, 244) none 0px;
  text-decoration-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(31, 29, 46);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(38, 35, 58);
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body h1 {
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body h2 {
  color: rgb(246, 193, 119);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(235, 111, 146);
}

html[saved-theme="dark"] body h3 {
  color: rgb(49, 116, 143);
}

html[saved-theme="dark"] body h4 {
  color: rgb(156, 207, 216);
}

html[saved-theme="dark"] body h5 {
  color: rgb(196, 167, 231);
}

html[saved-theme="dark"] body h6 {
  color: rgb(235, 188, 186);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(25, 23, 36) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(25, 23, 36);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(110, 106, 134);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 222, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(31, 29, 46);
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(110, 106, 134);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(110, 106, 134);
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(110, 106, 134);
  stroke: rgb(110, 106, 134);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(38, 35, 58);
  border-left-color: rgb(38, 35, 58);
  border-right-color: rgb(38, 35, 58);
  border-top-color: rgb(38, 35, 58);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(31, 29, 46);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(110, 106, 134);
  border-left-color: rgb(110, 106, 134);
  border-right-color: rgb(110, 106, 134);
  border-top-color: rgb(110, 106, 134);
  color: rgb(110, 106, 134);
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(33, 32, 46);
  border-bottom-color: rgb(144, 140, 170);
  border-left-color: rgb(144, 140, 170);
  border-right-color: rgb(144, 140, 170);
  border-top-color: rgb(144, 140, 170);
  color: rgb(144, 140, 170);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 222, 244);
  border-left-color: rgb(224, 222, 244);
  border-right-color: rgb(224, 222, 244);
  border-top-color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 222, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(38, 35, 58);
  color: rgb(196, 167, 231);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #f2e9e1 !important;
  --background-primary: #faf4ed !important;
  --background-secondary: #fffaf3 !important;
  --base: #191724 !important;
  --bases-cards-background: #faf4ed !important;
  --bases-cards-shadow: 0 0 0 1px #f2e9e1 !important;
  --bases-embed-border-color: #f2e9e1 !important;
  --bases-group-heading-property-color: #9893a5 !important;
  --bases-table-border-color: #f2e9e1 !important;
  --bases-table-cell-background-active: #faf4ed !important;
  --bases-table-header-background: #faf4ed !important;
  --bases-table-header-color: #9893a5 !important;
  --bases-table-summary-background: #faf4ed !important;
  --blur-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)) !important;
  --bold-color: #797593 !important;
  --canvas-background: #faf4ed !important;
  --caret-color: #575279 !important;
  --checkbox-border-color-hover: #9893a5 !important;
  --checkbox-marker-color: #faf4ed !important;
  --checklist-done-color: #9893a5 !important;
  --code-background: #f4ede8 !important;
  --code-border-color: #f2e9e1 !important;
  --code-normal: #797593 !important;
  --code-punctuation: #9893a5 !important;
  --collapse-icon-color-collapsed: #b4637a !important;
  --dark: #575279 !important;
  --darkgray: #575279 !important;
  --divider-color: #f2e9e1 !important;
  --embed-block-shadow-hover: 0 0 0 1px #f2e9e1, inset 0 0 0 1px #f2e9e1 !important;
  --file-header-background: #faf4ed !important;
  --file-header-background-focused: #faf4ed !important;
  --flair-color: #575279 !important;
  --flashing-background: rgba(180, 99, 122, 0.3) !important;
  --foam: #9ccfd8 !important;
  --footnote-divider-color: #f2e9e1 !important;
  --footnote-id-color: #9893a5 !important;
  --gold: #f6c177 !important;
  --graph-node: #9893a5 !important;
  --graph-node-focused: #b4637a !important;
  --graph-text: #575279 !important;
  --gray: #9893a5 !important;
  --h1-color: #b4637a !important;
  --h2-color: #ea9d34 !important;
  --h3-color: #286983 !important;
  --h4-color: #56949f !important;
  --h5-color: #907aa9 !important;
  --h6-color: #d7827e !important;
  --highlight-high: #524f67 !important;
  --highlight-low: #21202e !important;
  --highlight-med: #403d52 !important;
  --hr-color: #f2e9e1 !important;
  --icon-color: #9893a5 !important;
  --icon-color-active: #b4637a !important;
  --icon-color-focused: #575279 !important;
  --icon-color-hover: #9893a5 !important;
  --inline-title-color: #b4637a !important;
  --iris: #c4a7e7 !important;
  --light: #faf4ed !important;
  --light-base: #faf4ed !important;
  --light-foam: #56949f !important;
  --light-gold: #ea9d34 !important;
  --light-highlight-high: #cecacd !important;
  --light-highlight-low: #f4ede8 !important;
  --light-highlight-med: #dfdad9 !important;
  --light-iris: #907aa9 !important;
  --light-love: #b4637a !important;
  --light-muted: #9893a5 !important;
  --light-overlay: #f2e9e1 !important;
  --light-pine: #286983 !important;
  --light-rose: #d7827e !important;
  --light-subtle: #797593 !important;
  --light-surface: #fffaf3 !important;
  --light-text: #575279 !important;
  --lightgray: #fffaf3 !important;
  --link-color: #b4637a !important;
  --link-color-hover: #56949f !important;
  --link-external-color: #b4637a !important;
  --link-external-color-hover: #56949f !important;
  --link-unresolved-color: #b4637a !important;
  --link-url: #286983 !important;
  --link-url-hover: #907aa9 !important;
  --list-marker-color-collapsed: #b4637a !important;
  --list-marker-color-hover: #9893a5 !important;
  --love: #eb6f92 !important;
  --menu-background: #fffaf3 !important;
  --metadata-border-color: #f2e9e1 !important;
  --metadata-divider-color: #f2e9e1 !important;
  --metadata-input-text-color: #575279 !important;
  --metadata-label-text-color: #9893a5 !important;
  --metadata-label-text-color-hover: #9893a5 !important;
  --modal-background: #faf4ed !important;
  --muted: #6e6a86 !important;
  --nav-heading-color: #575279 !important;
  --nav-heading-color-collapsed-hover: #9893a5 !important;
  --nav-heading-color-hover: #575279 !important;
  --nav-item-color: #9893a5 !important;
  --nav-item-color-active: #575279 !important;
  --nav-item-color-highlighted: #b4637a !important;
  --nav-item-color-hover: #575279 !important;
  --nav-item-color-selected: #575279 !important;
  --nav-tag-color-active: #9893a5 !important;
  --nav-tag-color-hover: #9893a5 !important;
  --overlay: #26233a !important;
  --pdf-background: #faf4ed !important;
  --pdf-page-background: #faf4ed !important;
  --pdf-sidebar-background: #faf4ed !important;
  --pill-border-color: #f2e9e1 !important;
  --pill-color: #9893a5 !important;
  --pill-color-hover: #575279 !important;
  --pill-color-remove-hover: #b4637a !important;
  --pine: #31748f !important;
  --prompt-background: #faf4ed !important;
  --raised-background: color-mix(in srgb, #faf4ed 65%, transparent) linear-gradient(#faf4ed, color-mix(in srgb, #faf4ed 65%, transparent)) !important;
  --ribbon-background: #fffaf3 !important;
  --ribbon-background-collapsed: #faf4ed !important;
  --rose: #ebbcba !important;
  --search-clear-button-color: #9893a5 !important;
  --search-icon-color: #9893a5 !important;
  --search-result-background: #faf4ed !important;
  --secondary: #b4637a !important;
  --setting-group-heading-color: #575279 !important;
  --setting-items-border-color: #f2e9e1 !important;
  --slider-track-background: #f2e9e1 !important;
  --status-bar-background: #fffaf3 !important;
  --status-bar-border-color: #f2e9e1 !important;
  --status-bar-text-color: #9893a5 !important;
  --subtle: #908caa !important;
  --suggestion-background: #faf4ed !important;
  --surface: #1f1d2e !important;
  --tab-background-active: #faf4ed !important;
  --tab-container-background: #fffaf3 !important;
  --tab-outline-color: #f2e9e1 !important;
  --tab-switcher-background: #fffaf3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffaf3, transparent) !important;
  --tab-text-color-active: #9893a5 !important;
  --tab-text-color-focused: #9893a5 !important;
  --tab-text-color-focused-active: #9893a5 !important;
  --tab-text-color-focused-active-current: #575279 !important;
  --tab-text-color-focused-highlighted: #b4637a !important;
  --table-add-button-border-color: #f2e9e1 !important;
  --table-border-color: #f2e9e1 !important;
  --table-header-border-color: #f2e9e1 !important;
  --table-header-color: #575279 !important;
  --tag-background: #f2e9e1 !important;
  --tag-color: #907aa9 !important;
  --tag-color-hover: #b4637a !important;
  --tertiary: #56949f !important;
  --text: #e0def4 !important;
  --text-accent: #b4637a !important;
  --text-accent-hover: #56949f !important;
  --text-muted: #9893a5 !important;
  --text-normal: #575279 !important;
  --text-selection: rgba(40, 105, 131, 0.6) !important;
  --titlebar-background: #fffaf3 !important;
  --titlebar-border-color: #f2e9e1 !important;
  --titlebar-text-color: #9893a5 !important;
  --titlebar-text-color-focused: #575279 !important;
  --vault-profile-color: #575279 !important;
  --vault-profile-color-hover: #575279 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .bases-table {
  border-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 244, 237);
  border-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(242, 233, 225);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(242, 233, 225);
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 250, 243);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(242, 233, 225);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 250, 243);
  border-left-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 244, 237);
  color: rgb(87, 82, 121);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(121, 117, 147);
  outline: rgb(121, 117, 147) none 0px;
  text-decoration-color: rgb(121, 117, 147);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(121, 117, 147);
  outline: rgb(121, 117, 147) none 0px;
  text-decoration-color: rgb(121, 117, 147);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body del {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body p {
  color: rgb(152, 147, 165);
  outline: rgb(152, 147, 165) none 0px;
  text-decoration-color: rgb(152, 147, 165);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(180, 99, 122);
  outline: rgb(180, 99, 122) none 0px;
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(180, 99, 122);
  outline: rgb(180, 99, 122) none 0px;
  text-decoration-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(180, 99, 122);
  outline: rgb(180, 99, 122) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body dt {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul > li {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body table {
  border-bottom-color: rgb(255, 250, 243);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(255, 250, 243);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(255, 250, 243);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(255, 250, 243);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body thead {
  border-bottom-color: rgb(242, 233, 225);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgb(255, 250, 243);
  border-right-color: rgb(255, 250, 243);
  border-top-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body tr {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(255, 250, 243);
  border-right-color: rgb(255, 250, 243);
  border-top-color: rgb(255, 250, 243);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figcaption {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(180, 99, 122);
  border-left-color: rgb(180, 99, 122);
  border-right-color: rgb(180, 99, 122);
  border-top-color: rgb(180, 99, 122);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    checkboxes: `html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(87, 82, 121);
  text-decoration-color: rgb(87, 82, 121);
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
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(87, 82, 121);
  outline: rgb(87, 82, 121) none 0px;
  text-decoration-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 250, 243);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(242, 233, 225);
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body h1 {
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body h2 {
  color: rgb(234, 157, 52);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(180, 99, 122);
}

html[saved-theme="light"] body h3 {
  color: rgb(40, 105, 131);
}

html[saved-theme="light"] body h4 {
  color: rgb(86, 148, 159);
}

html[saved-theme="light"] body h5 {
  color: rgb(144, 122, 169);
}

html[saved-theme="light"] body h6 {
  color: rgb(215, 130, 126);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 244, 237) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 244, 237);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(152, 147, 165);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(87, 82, 121);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 250, 243);
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(152, 147, 165);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(152, 147, 165);
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(152, 147, 165);
  stroke: rgb(152, 147, 165);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(242, 233, 225);
  border-left-color: rgb(242, 233, 225);
  border-right-color: rgb(242, 233, 225);
  border-top-color: rgb(242, 233, 225);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 250, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body abbr {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(152, 147, 165);
  border-left-color: rgb(152, 147, 165);
  border-right-color: rgb(152, 147, 165);
  border-top-color: rgb(152, 147, 165);
  color: rgb(152, 147, 165);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(244, 237, 232);
  border-bottom-color: rgb(121, 117, 147);
  border-left-color: rgb(121, 117, 147);
  border-right-color: rgb(121, 117, 147);
  border-top-color: rgb(121, 117, 147);
  color: rgb(121, 117, 147);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(87, 82, 121);
  border-left-color: rgb(87, 82, 121);
  border-right-color: rgb(87, 82, 121);
  border-top-color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sub {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body summary {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body sup {
  color: rgb(87, 82, 121);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(242, 233, 225);
  color: rgb(144, 122, 169);
}`,
  },
};
