import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "80s-neon", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-1: #FF00FF !important;
  --accent-1-muted: #ff79c6 !important;
  --accent-2: #00FFFF !important;
  --accent-2-muted: #8be9fd !important;
  --accent-3: #00FF00 !important;
  --accent-3-muted: #50fa7b !important;
  --accent-4: #FFFF00 !important;
  --accent-4-muted: #ffb86c !important;
  --accent-5: #FF0000 !important;
  --accent-5-muted: #ff5555 !important;
  --accent-6: #0000FF !important;
  --accent-6-muted: #bd93f9 !important;
  --background-accent: #000 !important;
  --background-modifier-border: #00FFFF !important;
  --background-primary: #2b213a !important;
  --background-primary-alt: #171520 !important;
  --background-secondary: #1a1836 !important;
  --background-secondary-alt: #242043 !important;
  --bases-cards-background: #2b213a !important;
  --bases-cards-cover-background: #171520 !important;
  --bases-cards-shadow: 0 0 0 1px #00FFFF !important;
  --bases-embed-border-color: #00FFFF !important;
  --bases-group-heading-property-color: #ff79c6 !important;
  --bases-table-border-color: #00FFFF !important;
  --bases-table-cell-background-active: #2b213a !important;
  --bases-table-cell-background-disabled: #171520 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #00FFFF !important;
  --bases-table-group-background: #171520 !important;
  --bases-table-header-background: #2b213a !important;
  --bases-table-header-color: #ff79c6 !important;
  --bases-table-summary-background: #2b213a !important;
  --blockquote-border-color: #00FFFF !important;
  --blur-background: color-mix(in srgb, #00FFFF 65%, transparent) linear-gradient(#00FFFF, color-mix(in srgb, #00FFFF 65%, transparent)) !important;
  --canvas-background: #2b213a !important;
  --canvas-card-label-color: #bd93f9 !important;
  --caret-color: #FF00FF !important;
  --checkbox-border-color: #bd93f9 !important;
  --checkbox-border-color-hover: #ff79c6 !important;
  --checkbox-color: #00FFFF !important;
  --checkbox-color-hover: #8be9fd !important;
  --checkbox-marker-color: #2b213a !important;
  --checklist-done-color: #ff79c6 !important;
  --code-background: #171520 !important;
  --code-border-color: #00FFFF !important;
  --code-comment: #bd93f9 !important;
  --code-normal: #FF00FF !important;
  --code-punctuation: #ff79c6 !important;
  --collapse-icon-color: #bd93f9 !important;
  --collapse-icon-color-collapsed: #FF1690 !important;
  --dark: #FF00FF !important;
  --darkgray: #FF00FF !important;
  --divider-color: #00FFFF !important;
  --divider-color-hover: #00FFFF !important;
  --dropdown-background: #00FFFF !important;
  --dropdown-background-hover: #8be9fd !important;
  --embed-block-shadow-hover: 0 0 0 1px #00FFFF, inset 0 0 0 1px #00FFFF !important;
  --embed-border-start: 2px solid #00FFFF !important;
  --file-header-background: #2b213a !important;
  --file-header-background-focused: #2b213a !important;
  --flair-background: #00FFFF !important;
  --flair-color: #FF00FF !important;
  --footnote-divider-color: #00FFFF !important;
  --footnote-id-color: #ff79c6 !important;
  --footnote-id-color-no-occurrences: #bd93f9 !important;
  --graph-node: #ff79c6 !important;
  --graph-node-focused: #FF1690 !important;
  --graph-node-unresolved: #bd93f9 !important;
  --graph-text: #FF00FF !important;
  --gray: #ff79c6 !important;
  --heading-formatting: #bd93f9 !important;
  --highlight: #ffd319 !important;
  --hr-color: #00FFFF !important;
  --icon-color: #ff79c6 !important;
  --icon-color-active: #FF1690 !important;
  --icon-color-focused: #FF00FF !important;
  --icon-color-hover: #ff79c6 !important;
  --input-date-separator: #bd93f9 !important;
  --input-placeholder-color: #bd93f9 !important;
  --interactive-accent: #00FFFF !important;
  --interactive-accent-hover: #8be9fd !important;
  --interactive-accent-rgb: 72, 54, 153 !important;
  --interactive-hover: #8be9fd !important;
  --interactive-normal: #00FFFF !important;
  --light: #2b213a !important;
  --lightgray: #1a1836 !important;
  --link-color: #FF1690 !important;
  --link-color-hover: #7a6ae6 !important;
  --link-external-color: #FF1690 !important;
  --link-external-color-hover: #7a6ae6 !important;
  --link-unresolved-color: #FF1690 !important;
  --list-marker-color: #bd93f9 !important;
  --list-marker-color-collapsed: #FF1690 !important;
  --list-marker-color-hover: #ff79c6 !important;
  --menu-background: #1a1836 !important;
  --metadata-border-color: #00FFFF !important;
  --metadata-divider-color: #00FFFF !important;
  --metadata-input-text-color: #FF00FF !important;
  --metadata-label-text-color: #ff79c6 !important;
  --metadata-label-text-color-hover: #ff79c6 !important;
  --modal-background: #2b213a !important;
  --nav-collapse-icon-color: #bd93f9 !important;
  --nav-collapse-icon-color-collapsed: #bd93f9 !important;
  --nav-heading-color: #FF00FF !important;
  --nav-heading-color-collapsed: #bd93f9 !important;
  --nav-heading-color-collapsed-hover: #ff79c6 !important;
  --nav-heading-color-hover: #FF00FF !important;
  --nav-item-color: #ff79c6 !important;
  --nav-item-color-active: #FF00FF !important;
  --nav-item-color-highlighted: #FF1690 !important;
  --nav-item-color-hover: #FF00FF !important;
  --nav-item-color-selected: #FF00FF !important;
  --nav-tag-color: #bd93f9 !important;
  --nav-tag-color-active: #ff79c6 !important;
  --nav-tag-color-hover: #ff79c6 !important;
  --pdf-background: #2b213a !important;
  --pdf-page-background: #2b213a !important;
  --pdf-shadow: 0 0 0 1px #00FFFF !important;
  --pdf-sidebar-background: #2b213a !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #00FFFF !important;
  --pill-border-color: #00FFFF !important;
  --pill-color: #ff79c6 !important;
  --pill-color-hover: #FF00FF !important;
  --pill-color-remove: #bd93f9 !important;
  --pill-color-remove-hover: #FF1690 !important;
  --prompt-background: #2b213a !important;
  --raised-background: color-mix(in srgb, #00FFFF 65%, transparent) linear-gradient(#00FFFF, color-mix(in srgb, #00FFFF 65%, transparent)) !important;
  --ribbon-background: #1a1836 !important;
  --ribbon-background-collapsed: #2b213a !important;
  --search-clear-button-color: #ff79c6 !important;
  --search-icon-color: #ff79c6 !important;
  --search-result-background: #2b213a !important;
  --secondary: #FF1690 !important;
  --setting-group-heading-color: #FF00FF !important;
  --setting-items-background: #171520 !important;
  --setting-items-border-color: #00FFFF !important;
  --slider-track-background: #00FFFF !important;
  --status-bar-background: #1a1836 !important;
  --status-bar-border-color: #00FFFF !important;
  --status-bar-text-color: #ff79c6 !important;
  --suggestion-background: #2b213a !important;
  --tab-background-active: #2b213a !important;
  --tab-container-background: #1a1836 !important;
  --tab-outline-color: #00FFFF !important;
  --tab-switcher-background: #1a1836 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1836, transparent) !important;
  --tab-text-color: #bd93f9 !important;
  --tab-text-color-active: #ff79c6 !important;
  --tab-text-color-focused: #ff79c6 !important;
  --tab-text-color-focused-active: #ff79c6 !important;
  --tab-text-color-focused-active-current: #FF00FF !important;
  --tab-text-color-focused-highlighted: #FF1690 !important;
  --table-add-button-border-color: #00FFFF !important;
  --table-border-color: #00FFFF !important;
  --table-drag-handle-background-active: #00FFFF !important;
  --table-drag-handle-color: #bd93f9 !important;
  --table-drag-handle-color-active: rgba(0, 0, 0, 0.8) !important;
  --table-header-border-color: #00FFFF !important;
  --table-header-color: #FF00FF !important;
  --table-selection-border-color: #00FFFF !important;
  --tag-color: #FF1690 !important;
  --tag-color-hover: #FF1690 !important;
  --tertiary: #7a6ae6 !important;
  --text-accent: #FF1690 !important;
  --text-accent-hover: #7a6ae6 !important;
  --text-faint: #bd93f9 !important;
  --text-highlight-bg: #ffd319 !important;
  --text-muted: #ff79c6 !important;
  --text-normal: #FF00FF !important;
  --text-on-accent: rgba(0, 0, 0, 0.8) !important;
  --text-selection: rgba(0, 122, 255, 0.2) !important;
  --textHighlight: #ffd319 !important;
  --titlebar-background: #1a1836 !important;
  --titlebar-background-focused: #242043 !important;
  --titlebar-border-color: #00FFFF !important;
  --titlebar-text-color: #ff79c6 !important;
  --titlebar-text-color-focused: #FF00FF !important;
  --vault-profile-color: #FF00FF !important;
  --vault-profile-color-hover: #FF00FF !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 24, 54);
  color: rgb(255, 0, 255);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(43, 33, 58);
  color: rgb(255, 0, 255);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 24, 54);
  color: rgb(255, 0, 255);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(0, 255, 255);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 24, 54);
  border-left-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

html body div#quartz-root {
  background-color: rgb(43, 33, 58);
  color: rgb(255, 0, 255);
}`,
    typography: `html body .page article p > b, html b {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .page article p > em, html em {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .page article p > i, html i {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .page article p > strong, html strong {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .text-highlight {
  background-color: rgb(255, 211, 25);
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body del {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: line-through rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body p {
  color: rgb(255, 121, 198);
  outline: rgb(255, 121, 198) none 0px;
  text-decoration: rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}`,
    links: `html body a.external, html footer a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration: underline rgb(255, 22, 144);
  text-decoration-color: rgb(255, 22, 144);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration: underline rgb(255, 22, 144);
  text-decoration-color: rgb(255, 22, 144);
}

html body a.internal.broken {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
}`,
    lists: `html body dd {
  color: rgba(255, 220, 255, 0.8);
}

html body dt {
  color: rgba(255, 220, 255, 0.8);
}

html body ol > li {
  color: rgba(255, 220, 255, 0.8);
}

html body ol.overflow {
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

html body ul > li {
  color: rgba(255, 220, 255, 0.8);
}

html body ul.overflow {
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgba(255, 220, 255, 0.25);
  text-decoration: rgba(255, 220, 255, 0.25);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body table {
  color: rgba(255, 220, 255, 0.8);
}

html body td {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgba(255, 220, 255, 0.8);
}

html body th {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}`,
    code: `html body code {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgba(255, 220, 255, 0.8);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}

html body pre:has(> code) {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
}`,
    images: `html body audio {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body figcaption {
  color: rgba(255, 220, 255, 0.8);
}

html body figure {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body img {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body video {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
}

html body .footnotes {
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

html body .transclude {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body .transclude-inner {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}`,
    checkboxes: `html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 121, 198);
  text-decoration: line-through rgb(255, 121, 198);
  text-decoration-color: rgb(255, 121, 198);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  margin-right: 6.66667px;
  width: 16.6562px;
}

html body li.task-list-item[data-task='!'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='*'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='-'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='/'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='>'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='?'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='I'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='S'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='b'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='c'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='d'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='f'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='i'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='k'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='l'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='p'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='u'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body li.task-list-item[data-task='w'] {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}`,
    search: `html body .search > .search-button {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 0, 255);
}

html body .search > .search-container > .search-space {
  background-color: rgb(43, 33, 58);
}

html body .search > .search-container > .search-space > * {
  color: rgba(255, 220, 255, 0.8);
  outline: rgba(255, 220, 255, 0.8) none 0px;
  text-decoration: rgba(255, 220, 255, 0.8);
  text-decoration-color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgba(255, 220, 255, 0.8);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 24, 54);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgba(255, 220, 255, 0.8);
}

html body a.internal.tag-link::before {
  color: rgb(255, 22, 144);
}

html body h1 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 0, 255) 0px 0px 12.944px;
}

html body h2 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 255, 255) 0px 0px 11.696px;
}

html body h2.page-title, html h2.page-title a {
  color: rgba(255, 220, 255, 0.8);
}

html body h3 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 255, 0) 0px 0px 10.544px;
}

html body h4 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 255, 0) 0px 0px 9.504px;
}

html body h5 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(255, 0, 0) 0px 0px 8.608px;
}

html body h6 {
  color: rgba(255, 220, 255, 0.8);
  text-shadow: rgb(0, 0, 255) 0px 0px 8px;
}

html body hr {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}

html body ::-webkit-scrollbar-track {
  background: rgb(43, 33, 58) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(43, 33, 58);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}`,
    footer: `html body footer {
  background-color: rgb(26, 24, 54);
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 121, 198);
}

html body footer ul li a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(255, 0, 255);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 121, 198);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}

html body li.section-li > .section .meta {
  color: rgb(255, 121, 198);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 121, 198);
  text-decoration: rgb(255, 121, 198);
}

html body ul.section-ul {
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body .darkmode svg {
  color: rgb(255, 121, 198);
  stroke: rgb(255, 121, 198);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
  color: rgba(255, 220, 255, 0.8);
}

html body .metadata {
  border-bottom-color: rgb(0, 255, 255);
  border-left-color: rgb(0, 255, 255);
  border-right-color: rgb(0, 255, 255);
  border-top-color: rgb(0, 255, 255);
  color: rgb(255, 121, 198);
}

html body .metadata-properties {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body .navigation-progress {
  background-color: rgb(26, 24, 54);
}

html body .page-header h2.page-title {
  color: rgb(255, 0, 255);
}

html body abbr {
  color: rgba(255, 220, 255, 0.8);
  text-decoration: underline dotted rgba(255, 220, 255, 0.8);
}

html body details {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body input[type=text] {
  border-bottom-color: rgb(255, 121, 198);
  border-left-color: rgb(255, 121, 198);
  border-right-color: rgb(255, 121, 198);
  border-top-color: rgb(255, 121, 198);
  color: rgb(255, 121, 198);
}

html body kbd {
  background-color: rgb(23, 21, 32);
  border-bottom-color: rgb(255, 0, 255);
  border-left-color: rgb(255, 0, 255);
  border-right-color: rgb(255, 0, 255);
  border-top-color: rgb(255, 0, 255);
  color: rgb(255, 0, 255);
}

html body progress {
  border-bottom-color: rgba(255, 220, 255, 0.8);
  border-left-color: rgba(255, 220, 255, 0.8);
  border-right-color: rgba(255, 220, 255, 0.8);
  border-top-color: rgba(255, 220, 255, 0.8);
}

html body sub {
  color: rgba(255, 220, 255, 0.8);
}

html body summary {
  color: rgba(255, 220, 255, 0.8);
}

html body sup {
  color: rgba(255, 220, 255, 0.8);
}`,
  },
  light: {},
};
