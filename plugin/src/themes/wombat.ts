import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "wombat", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40 !important;
  --accent-l: 73% !important;
  --accent-s: 71% !important;
  --almost-black: #1c1c1c !important;
  --background-modifier-active-hover: rgba(235, 202, 137, 0.1) !important;
  --background-modifier-border: #242424 !important;
  --background-primary: #1c1c1c !important;
  --background-primary-alt: #1c1c1c !important;
  --background-secondary: #242424 !important;
  --background-secondary-alt: #242424 !important;
  --bases-cards-background: #1c1c1c !important;
  --bases-cards-cover-background: #1c1c1c !important;
  --bases-cards-shadow: 0 0 0 1px #242424 !important;
  --bases-embed-border-color: #242424 !important;
  --bases-group-heading-property-color: #cebd9e !important;
  --bases-table-border-color: #242424 !important;
  --bases-table-cell-background-active: #1c1c1c !important;
  --bases-table-cell-background-disabled: #1c1c1c !important;
  --bases-table-cell-background-selected: rgba(235, 202, 137, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 202, 137) !important;
  --bases-table-group-background: #1c1c1c !important;
  --bases-table-header-background: #1c1c1c !important;
  --bases-table-header-color: #cebd9e !important;
  --bases-table-row-background-hover: #ebcb8b30 !important;
  --bases-table-summary-background: #1c1c1c !important;
  --blockquote-border-color: rgb(235, 202, 137) !important;
  --bold-color: #ebcb8b !important;
  --canvas-background: #1c1c1c !important;
  --canvas-card-label-color: #87afff !important;
  --caret-color: #cccccc !important;
  --carolina-blue: #87afff !important;
  --charcoal-grey: #585858 !important;
  --checkbox-border-color: #ebcb8b !important;
  --checkbox-border-color-hover: #ebcb8b !important;
  --checkbox-color: #ebcb8b !important;
  --checkbox-color-hover: #ebcb8b !important;
  --checkbox-marker-color: #1c1c1c !important;
  --checklist-done-color: #cccccc !important;
  --clay: #d08770 !important;
  --code-border-color: #242424 !important;
  --code-comment: #87afff !important;
  --code-normal: #ebcb8b !important;
  --code-punctuation: #cebd9e !important;
  --collapse-icon-color: #87afff !important;
  --collapse-icon-color-collapsed: #d08770 !important;
  --color-accent: rgb(235, 202, 137) !important;
  --color-accent-1: rgb(244, 221, 185) !important;
  --color-accent-2: rgb(251, 242, 228) !important;
  --color-accent-hsl: 40, 71%, 73% !important;
  --cursor-line-background: #585858 !important;
  --dark: #cccccc !important;
  --dark-grey: #242424 !important;
  --darkgray: #cccccc !important;
  --divider-color: #242424 !important;
  --divider-color-hover: rgb(235, 202, 137) !important;
  --eggshell: #ffffd7 !important;
  --embed-block-shadow-hover: 0 0 0 1px #242424, inset 0 0 0 1px #242424 !important;
  --embed-border-start: 2px solid rgb(235, 202, 137) !important;
  --file-header-background: #1c1c1c !important;
  --file-header-background-focused: #1c1c1c !important;
  --flair-color: #cccccc !important;
  --footnote-divider-color: #242424 !important;
  --footnote-id-color: #cebd9e !important;
  --footnote-id-color-no-occurrences: #87afff !important;
  --graph-line: #585858 !important;
  --graph-node: #ebcb8b !important;
  --graph-node-attachment: #87afff !important;
  --graph-node-focused: #d08770 !important;
  --graph-node-tag: #bf616a !important;
  --graph-node-unresolved: #87afff !important;
  --graph-text: #cccccc !important;
  --gray: #cebd9e !important;
  --h1-color: #ffffd7 !important;
  --h2-color: #ffffd7 !important;
  --h3-color: #ffffd7 !important;
  --h4-color: #ffffd7 !important;
  --h5-color: #ffffd7 !important;
  --h6-color: #ffffd7 !important;
  --heading-formatting: #87afff !important;
  --highlight: #ebcb8b30 !important;
  --hr-color: #242424 !important;
  --icon-color: #cebd9e !important;
  --icon-color-active: #d08770 !important;
  --icon-color-focused: #ffffd7 !important;
  --icon-color-hover: #bf616a !important;
  --inline-title-color: #ebcb8b !important;
  --input-date-separator: #87afff !important;
  --input-placeholder-color: #87afff !important;
  --interactive-accent: rgb(235, 202, 137) !important;
  --interactive-accent-hover: rgb(244, 221, 185) !important;
  --interactive-accent-hsl: 40, 71%, 73% !important;
  --italic-color: #ebcb8b !important;
  --light: #1c1c1c !important;
  --light-maroon: #bf616a !important;
  --lightgray: #242424 !important;
  --link-color: #d08770 !important;
  --link-color-hover: #ffffd7 !important;
  --link-decoration: none !important;
  --link-decoration-hover: none !important;
  --link-external-color: #d08770 !important;
  --link-external-color-hover: #ffffd7 !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #d08770 !important;
  --link-unresolved-decoration-color: rgba(235, 202, 137, 0.3) !important;
  --list-marker-color: #87afff !important;
  --list-marker-color-collapsed: #d08770 !important;
  --list-marker-color-hover: #cebd9e !important;
  --menu-background: #242424 !important;
  --metadata-border-color: #242424 !important;
  --metadata-divider-color: #242424 !important;
  --metadata-input-text-color: #cccccc !important;
  --metadata-label-text-color: #cebd9e !important;
  --metadata-label-text-color-hover: #cebd9e !important;
  --modal-background: #1c1c1c !important;
  --nav-collapse-icon-color: #87afff !important;
  --nav-collapse-icon-color-collapsed: #87afff !important;
  --nav-heading-color: #cccccc !important;
  --nav-heading-color-collapsed: #87afff !important;
  --nav-heading-color-collapsed-hover: #cebd9e !important;
  --nav-heading-color-hover: #cccccc !important;
  --nav-item-background-selected: rgba(235, 202, 137, 0.15) !important;
  --nav-item-color: #cebd9e !important;
  --nav-item-color-active: #ffffd7 !important;
  --nav-item-color-highlighted: #d08770 !important;
  --nav-item-color-hover: #bf616a !important;
  --nav-item-color-selected: #cccccc !important;
  --nav-tag-color: #87afff !important;
  --nav-tag-color-active: #cebd9e !important;
  --nav-tag-color-hover: #cebd9e !important;
  --pdf-background: #1c1c1c !important;
  --pdf-page-background: #1c1c1c !important;
  --pdf-shadow: 0 0 0 1px #242424 !important;
  --pdf-sidebar-background: #1c1c1c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #242424 !important;
  --peach-pale: #ebcb8b !important;
  --peach-pale_10: #ebcb8b10 !important;
  --peach-pale_30: #ebcb8b30 !important;
  --pill-border-color: #242424 !important;
  --pill-color: #cebd9e !important;
  --pill-color-hover: #cccccc !important;
  --pill-color-remove: #87afff !important;
  --pill-color-remove-hover: #d08770 !important;
  --prompt-background: #1c1c1c !important;
  --putty: #cebd9e !important;
  --ribbon-background: #242424 !important;
  --ribbon-background-collapsed: #1c1c1c !important;
  --search-clear-button-color: #cebd9e !important;
  --search-icon-color: #cebd9e !important;
  --search-result-background: #1c1c1c !important;
  --secondary: #d08770 !important;
  --setting-group-heading-color: #cccccc !important;
  --setting-items-background: #1c1c1c !important;
  --setting-items-border-color: #242424 !important;
  --silver: #cccccc !important;
  --slider-track-background: #242424 !important;
  --status-bar-background: #242424 !important;
  --status-bar-border-color: #242424 !important;
  --status-bar-text-color: #cebd9e !important;
  --suggestion-background: #1c1c1c !important;
  --tab-background-active: #1c1c1c !important;
  --tab-container-background: #242424 !important;
  --tab-outline-color: #242424 !important;
  --tab-switcher-background: #242424 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #242424, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(235, 202, 137) !important;
  --tab-text-color: #87afff !important;
  --tab-text-color-active: #cebd9e !important;
  --tab-text-color-focused: #cebd9e !important;
  --tab-text-color-focused-active: #ffffd7 !important;
  --tab-text-color-focused-active-current: #bf616a !important;
  --tab-text-color-focused-highlighted: #d08770 !important;
  --table-add-button-border-color: #242424 !important;
  --table-border-color: #242424 !important;
  --table-drag-handle-background-active: rgb(235, 202, 137) !important;
  --table-drag-handle-color: #87afff !important;
  --table-header-background: #ebcb8b10 !important;
  --table-header-background-hover: #ebcb8b30 !important;
  --table-header-border-color: #242424 !important;
  --table-header-color: #cccccc !important;
  --table-row-background: #242424 !important;
  --table-row-background-hover: #ebcb8b30 !important;
  --table-selection: rgba(235, 202, 137, 0.1) !important;
  --table-selection-border-color: rgb(235, 202, 137) !important;
  --tag-background: #242424 !important;
  --tag-background-hover: #242424 !important;
  --tag-border-color: rgba(235, 202, 137, 0.15) !important;
  --tag-border-color-hover: rgba(235, 202, 137, 0.15) !important;
  --tag-color: #ffffd7 !important;
  --tag-color-hover: #d08770 !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .5em !important;
  --tertiary: #ffffd7 !important;
  --text-accent: #d08770 !important;
  --text-accent-hover: #ffffd7 !important;
  --text-faint: #87afff !important;
  --text-highlight-bg: #ebcb8b30 !important;
  --text-highlight-fg: #ffffd7 !important;
  --text-muted: #cebd9e !important;
  --text-normal: #cccccc !important;
  --text-selection: #ebcb8b30 !important;
  --textHighlight: #ebcb8b30 !important;
  --titlebar-background: #242424 !important;
  --titlebar-background-focused: #242424 !important;
  --titlebar-border-color: #242424 !important;
  --titlebar-text-color: #cebd9e !important;
  --titlebar-text-color-focused: #bf616a !important;
  --vault-profile-color: #cccccc !important;
  --vault-profile-color-hover: #cccccc !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 36, 36);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(204, 204, 204);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .page article p > em, em {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .page article p > i, i {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .page article p > strong, strong {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration: rgb(235, 203, 139);
  text-decoration-color: rgb(235, 203, 139);
}

body .text-highlight {
  background-color: rgba(235, 203, 139, 0.19);
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body p {
  color: rgb(206, 189, 158);
  outline: rgb(206, 189, 158) none 0px;
  text-decoration: rgb(206, 189, 158);
  text-decoration-color: rgb(206, 189, 158);
}`,
    links: `body a.external, footer a {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgb(208, 135, 112);
  text-decoration-color: rgb(208, 135, 112);
}

body a.internal.broken {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgba(235, 202, 137, 0.3);
  text-decoration-color: rgba(235, 202, 137, 0.3);
}`,
    lists: `body dd {
  color: rgb(204, 204, 204);
}

body dt {
  color: rgb(204, 204, 204);
}

body ol > li {
  color: rgb(204, 204, 204);
}

body ol.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ul > li {
  color: rgb(204, 204, 204);
}

body ul.overflow {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(135, 175, 255);
  text-decoration: rgb(135, 175, 255);
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body table {
  color: rgb(204, 204, 204);
}

body td {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body th {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body tr {
  background-color: rgba(235, 203, 139, 0.063);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
  color: rgb(235, 203, 139);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

body pre:has(> code) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    images: `body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body figcaption {
  color: rgb(204, 204, 204);
}

body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body img {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `body .file-embed {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
}

body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(235, 202, 137);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(235, 202, 137);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 204, 204);
  text-decoration: line-through rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body input[type=checkbox] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgba(235, 202, 137, 0.15);
  border-bottom-left-radius: 7px;
  border-bottom-right-radius: 7px;
  border-left-color: rgba(235, 202, 137, 0.15);
  border-right-color: rgba(235, 202, 137, 0.15);
  border-top-color: rgba(235, 202, 137, 0.15);
  border-top-left-radius: 7px;
  border-top-right-radius: 7px;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 215);
}

body h1 {
  color: rgb(255, 255, 215);
}

body h2 {
  color: rgb(255, 255, 215);
}

body h2.page-title, h2.page-title a {
  color: rgb(235, 203, 139);
}

body h3 {
  color: rgb(255, 255, 215);
}

body h4 {
  color: rgb(255, 255, 215);
}

body h5 {
  color: rgb(255, 255, 215);
}

body h6 {
  color: rgb(255, 255, 215);
}

body hr {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 255, 215);
  border-left-color: rgb(255, 255, 215);
  border-right-color: rgb(255, 255, 215);
  border-top-color: rgb(255, 255, 215);
  color: rgb(255, 255, 215);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}`,
    footer: `body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(206, 189, 158);
}

body footer ul li a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(206, 189, 158);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body li.section-li > .section .meta {
  color: rgb(206, 189, 158);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(206, 189, 158);
  text-decoration: rgb(206, 189, 158);
}

body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body .darkmode svg {
  color: rgb(206, 189, 158);
  stroke: rgb(206, 189, 158);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body .breadcrumb-element p {
  color: rgb(135, 175, 255);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

body .metadata {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(206, 189, 158);
}

body .metadata-properties {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

body abbr {
  color: rgb(204, 204, 204);
  text-decoration: underline dotted rgb(204, 204, 204);
}

body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body input[type=text] {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

body kbd {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
  color: rgb(235, 203, 139);
}

body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

body sub {
  color: rgb(204, 204, 204);
}

body summary {
  color: rgb(204, 204, 204);
}

body sup {
  color: rgb(204, 204, 204);
}`,
  },
  light: {},
};
