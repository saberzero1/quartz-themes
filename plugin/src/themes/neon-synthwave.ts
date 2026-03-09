import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "neon-synthwave", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --background-accent: #000;
  --background-modifier-border: #fd8bfd;
  --background-primary: #262335;
  --background-primary-alt: #241734;
  --background-secondary: #241B2F;
  --background-secondary-alt: #241B2F;
  --bases-cards-background: #262335;
  --bases-cards-cover-background: #241734;
  --bases-cards-radius: 5px;
  --bases-cards-shadow: 0 0 0 1px #fd8bfd;
  --bases-embed-border-color: #fd8bfd;
  --bases-embed-border-radius: 5px;
  --bases-group-heading-property-color: #8be9fd;
  --bases-table-border-color: #fd8bfd;
  --bases-table-cell-background-active: #262335;
  --bases-table-cell-background-disabled: #241734;
  --bases-table-cell-shadow-focus: 0 0 0 2px #5900ff;
  --bases-table-container-border-radius: 5px;
  --bases-table-group-background: #241734;
  --bases-table-header-background: #262335;
  --bases-table-header-color: #8be9fd;
  --bases-table-summary-background: #262335;
  --blockquote-border-color: #5900ff;
  --blur-background: color-mix(in srgb, #bd93f9 65%, transparent) linear-gradient(#bd93f9, color-mix(in srgb, #bd93f9 65%, transparent));
  --callout-radius: 5px;
  --canvas-background: #262335;
  --canvas-card-label-color: #bd93f9;
  --canvas-controls-radius: 5px;
  --caret-color: #d4f5ff;
  --checkbox-border-color: #bd93f9;
  --checkbox-border-color-hover: #8be9fd;
  --checkbox-color: #5900ff;
  --checkbox-color-hover: #FF00FF;
  --checkbox-marker-color: #262335;
  --checkbox-radius: 5px;
  --checklist-done-color: #8be9fd;
  --clickable-icon-radius: 5px;
  --code-background: #241734;
  --code-border-color: #fd8bfd;
  --code-comment: #bd93f9;
  --code-normal: #d4f5ff;
  --code-punctuation: #8be9fd;
  --code-radius: 5px;
  --collapse-icon-color: #bd93f9;
  --collapse-icon-color-collapsed: #FF1690;
  --divider-color: #fd8bfd;
  --divider-color-hover: #5900ff;
  --dropdown-background: #bd93f9;
  --dropdown-background-hover: #FF00FF;
  --embed-block-shadow-hover: 0 0 0 1px #fd8bfd, inset 0 0 0 1px #fd8bfd;
  --embed-border-start: 2px solid #5900ff;
  --file-header-background: #262335;
  --file-header-background-focused: #262335;
  --flair-background: #bd93f9;
  --flair-color: #d4f5ff;
  --footnote-divider-color: #fd8bfd;
  --footnote-id-color: #8be9fd;
  --footnote-id-color-no-occurrences: #bd93f9;
  --footnote-radius: 5px;
  --graph-node: #8be9fd;
  --graph-node-focused: #FF1690;
  --graph-node-unresolved: #bd93f9;
  --graph-text: #d4f5ff;
  --heading-formatting: #bd93f9;
  --hr-color: #fd8bfd;
  --icon-color: #8be9fd;
  --icon-color-active: #FF1690;
  --icon-color-focused: #d4f5ff;
  --icon-color-hover: #8be9fd;
  --input-date-separator: #bd93f9;
  --input-placeholder-color: #bd93f9;
  --interactive-accent: #5900ff;
  --interactive-accent-hover: #FF00FF;
  --interactive-hover: #FF00FF;
  --interactive-normal: #bd93f9;
  --link-color: #FF1690;
  --link-color-hover: #7a6ae6;
  --link-external-color: #FF1690;
  --link-external-color-hover: #7a6ae6;
  --link-unresolved-color: #FF1690;
  --list-marker-color: #bd93f9;
  --list-marker-color-collapsed: #FF1690;
  --list-marker-color-hover: #8be9fd;
  --menu-background: #241B2F;
  --menu-radius: 5px;
  --metadata-border-color: #fd8bfd;
  --metadata-divider-color: #fd8bfd;
  --metadata-input-text-color: #d4f5ff;
  --metadata-label-text-color: #8be9fd;
  --metadata-label-text-color-hover: #8be9fd;
  --modal-background: #262335;
  --modal-radius: 5px;
  --nav-collapse-icon-color: #bd93f9;
  --nav-collapse-icon-color-collapsed: #bd93f9;
  --nav-heading-color: #d4f5ff;
  --nav-heading-color-collapsed: #bd93f9;
  --nav-heading-color-collapsed-hover: #8be9fd;
  --nav-heading-color-hover: #d4f5ff;
  --nav-item-color: #8be9fd;
  --nav-item-color-active: #d4f5ff;
  --nav-item-color-highlighted: #FF1690;
  --nav-item-color-hover: #d4f5ff;
  --nav-item-color-selected: #d4f5ff;
  --nav-item-radius: 5px;
  --nav-tag-color: #bd93f9;
  --nav-tag-color-active: #8be9fd;
  --nav-tag-color-hover: #8be9fd;
  --nav-tag-radius: 5px;
  --pdf-background: #262335;
  --pdf-page-background: #262335;
  --pdf-shadow: 0 0 0 1px #fd8bfd;
  --pdf-sidebar-background: #262335;
  --pdf-thumbnail-shadow: 0 0 0 1px #fd8bfd;
  --pill-border-color: #fd8bfd;
  --pill-color: #8be9fd;
  --pill-color-hover: #d4f5ff;
  --pill-color-remove: #bd93f9;
  --pill-color-remove-hover: #FF1690;
  --prompt-background: #262335;
  --radius-l: 5px;
  --radius-m: 5px;
  --radius-s: 5px;
  --raised-background: color-mix(in srgb, #bd93f9 65%, transparent) linear-gradient(#bd93f9, color-mix(in srgb, #bd93f9 65%, transparent));
  --ribbon-background: #241B2F;
  --ribbon-background-collapsed: #262335;
  --scrollbar-radius: 5px;
  --search-clear-button-color: #8be9fd;
  --search-icon-color: #8be9fd;
  --search-result-background: #262335;
  --setting-group-heading-color: #d4f5ff;
  --setting-items-background: #241734;
  --setting-items-border-color: #fd8bfd;
  --setting-items-radius: 5px;
  --slider-thumb-radius: 5px;
  --slider-track-background: #fd8bfd;
  --status-bar-background: #241B2F;
  --status-bar-border-color: #fd8bfd;
  --status-bar-radius: 5px 0 0 0;
  --status-bar-text-color: #8be9fd;
  --suggestion-background: #262335;
  --tab-background-active: #262335;
  --tab-container-background: #241B2F;
  --tab-outline-color: #fd8bfd;
  --tab-radius: 5px;
  --tab-radius-active: 5px;
  --tab-switcher-background: #241B2F;
  --tab-switcher-menubar-background: linear-gradient(to top, #241B2F, transparent);
  --tab-text-color: #bd93f9;
  --tab-text-color-active: #8be9fd;
  --tab-text-color-focused: #8be9fd;
  --tab-text-color-focused-active: #8be9fd;
  --tab-text-color-focused-active-current: #d4f5ff;
  --tab-text-color-focused-highlighted: #FF1690;
  --table-add-button-border-color: #fd8bfd;
  --table-border-color: #fd8bfd;
  --table-drag-handle-background-active: #5900ff;
  --table-drag-handle-color: #bd93f9;
  --table-header-border-color: #fd8bfd;
  --table-header-color: #d4f5ff;
  --table-selection-border-color: #5900ff;
  --tag-color: #FF1690;
  --tag-color-hover: #FF1690;
  --text-accent: #FF1690;
  --text-accent-hover: #7a6ae6;
  --text-faint: #bd93f9;
  --text-highlight-bg: #ffd319;
  --text-muted: #8be9fd;
  --text-normal: #d4f5ff;
  --titlebar-background: #241B2F;
  --titlebar-background-focused: #241B2F;
  --titlebar-border-color: #fd8bfd;
  --titlebar-text-color: #8be9fd;
  --titlebar-text-color-focused: #d4f5ff;
  --toggle-radius: 5px;
  --toggle-thumb-radius: 5px;
  --vault-profile-color: #d4f5ff;
  --vault-profile-color-hover: #d4f5ff;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 27, 47);
  color: rgb(212, 245, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 35, 53);
  color: rgb(212, 245, 255);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 27, 47);
  color: rgb(212, 245, 255);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(253, 139, 253);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 27, 47);
  border-left-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

body div#quartz-root {
  background-color: rgb(38, 35, 53);
  color: rgb(212, 245, 255);
}`,
    typography: `body .page article p > b, b {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body .page article p > em, em {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body .page article p > i, i {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body .page article p > strong, strong {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body .text-highlight {
  background-color: rgb(255, 211, 25);
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body del {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: line-through rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body p {
  color: rgb(139, 233, 253);
  outline: rgb(139, 233, 253) none 0px;
  text-decoration: rgb(139, 233, 253);
  text-decoration-color: rgb(139, 233, 253);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration: underline rgb(255, 22, 144);
  text-decoration-color: rgb(255, 22, 144);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
  text-decoration: underline rgb(255, 22, 144);
  text-decoration-color: rgb(255, 22, 144);
}

body a.internal.broken {
  color: rgb(255, 22, 144);
  outline: rgb(255, 22, 144) none 0px;
}`,
    lists: `body dd {
  color: rgb(212, 245, 255);
}

body dt {
  color: rgb(212, 245, 255);
}

body ol > li {
  color: rgb(212, 245, 255);
}

body ol.overflow {
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body ul > li {
  color: rgb(212, 245, 255);
}

body ul.overflow {
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 147, 249);
  text-decoration: rgb(189, 147, 249);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body table {
  color: rgb(212, 245, 255);
}

body td {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

body th {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}`,
    code: `body code {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

body pre > code, pre:has(> code) {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body pre:has(> code) {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(253, 139, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    images: `body audio {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body figcaption {
  color: rgb(212, 245, 255);
}

body figure {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body img {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body video {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    embeds: `body .file-embed {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(212, 245, 255);
  color: rgb(212, 245, 255);
}

body .transclude {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(89, 0, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body .transclude-inner {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(89, 0, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(139, 233, 253);
  text-decoration: line-through rgb(139, 233, 253);
  text-decoration-color: rgb(139, 233, 253);
}

body input[type=checkbox] {
  border-bottom-color: rgb(189, 147, 249);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(189, 147, 249);
  border-right-color: rgb(189, 147, 249);
  border-top-color: rgb(189, 147, 249);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='*'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='-'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='/'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='>'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='?'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='I'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='S'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='b'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='c'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='d'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='f'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='i'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='k'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='l'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='p'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='u'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body li.task-list-item[data-task='w'] {
  color: rgb(212, 245, 255);
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(212, 245, 255);
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 35, 53);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > * {
  color: rgb(212, 245, 255);
  outline: rgb(212, 245, 255) none 0px;
  text-decoration: rgb(212, 245, 255);
  text-decoration-color: rgb(212, 245, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 245, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(212, 245, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(212, 245, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 27, 47);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

body a.internal.tag-link::before {
  color: rgb(255, 22, 144);
}

body h1 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(255, 0, 255) 0px 0px 12.944px;
}

body h2 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(56, 232, 255) 0px 0px 11.696px;
}

body h2.page-title, h2.page-title a {
  color: rgb(212, 245, 255);
}

body h3 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(0, 255, 0) 0px 0px 10.544px;
}

body h4 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(255, 255, 0) 0px 0px 9.504px;
}

body h5 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(255, 0, 0) 0px 0px 8.608px;
}

body h6 {
  color: rgb(212, 245, 255);
  text-shadow: rgb(0, 0, 255) 0px 0px 8px;
}

body hr {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body ::-webkit-scrollbar {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 35, 53) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 35, 53);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(139, 233, 253);
  text-decoration: rgb(139, 233, 253);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(139, 233, 253);
  text-decoration: rgb(139, 233, 253);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(139, 233, 253);
  text-decoration: rgb(139, 233, 253);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(139, 233, 253);
}`,
    footer: `body footer {
  background-color: rgb(36, 27, 47);
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  border-top-left-radius: 5px;
  color: rgb(139, 233, 253);
}

body footer ul li a {
  color: rgb(139, 233, 253);
  text-decoration: rgb(139, 233, 253);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(212, 245, 255);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  color: rgb(212, 245, 255);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(139, 233, 253);
  text-decoration: rgb(139, 233, 253);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(139, 233, 253);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body li.section-li > .section .meta {
  color: rgb(139, 233, 253);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(139, 233, 253);
  text-decoration: rgb(139, 233, 253);
}

body ul.section-ul {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(139, 233, 253);
}

body .darkmode svg {
  color: rgb(139, 233, 253);
  stroke: rgb(139, 233, 253);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(139, 233, 253);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(139, 233, 253);
}

body .breadcrumb-element p {
  color: rgb(189, 147, 249);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  color: rgb(212, 245, 255);
}

body .metadata {
  border-bottom-color: rgb(253, 139, 253);
  border-left-color: rgb(253, 139, 253);
  border-right-color: rgb(253, 139, 253);
  border-top-color: rgb(253, 139, 253);
  color: rgb(139, 233, 253);
}

body .metadata-properties {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  color: rgb(139, 233, 253);
}

body .navigation-progress {
  background-color: rgb(36, 27, 47);
}

body .page-header h2.page-title {
  color: rgb(212, 245, 255);
}

body abbr {
  color: rgb(212, 245, 255);
  text-decoration: underline dotted rgb(212, 245, 255);
}

body details {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body input[type=text] {
  border-bottom-color: rgb(139, 233, 253);
  border-left-color: rgb(139, 233, 253);
  border-right-color: rgb(139, 233, 253);
  border-top-color: rgb(139, 233, 253);
  color: rgb(139, 233, 253);
}

body kbd {
  background-color: rgb(36, 23, 52);
  border-bottom-color: rgb(212, 245, 255);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  color: rgb(212, 245, 255);
}

body progress {
  border-bottom-color: rgb(212, 245, 255);
  border-left-color: rgb(212, 245, 255);
  border-right-color: rgb(212, 245, 255);
  border-top-color: rgb(212, 245, 255);
}

body sub {
  color: rgb(212, 245, 255);
}

body summary {
  color: rgb(212, 245, 255);
}

body sup {
  color: rgb(212, 245, 255);
}`,
  },
  light: {},
};
