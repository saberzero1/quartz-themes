import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "wombat", modes: ["dark"], variations: [], fonts: [] },
  dark: {
    base: `:root:root {
  --accent-h: 40 !important;
  --accent-l: 73% !important;
  --accent-s: 71% !important;
  --almost-black: #1c1c1c !important;
  --background-modifier-active-hover: hsla(40, 71%, 73%, 0.1) !important;
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
  --bases-table-cell-background-selected: hsla(40, 71%, 73%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(40, 71%, 73%) !important;
  --bases-table-group-background: #1c1c1c !important;
  --bases-table-header-background: #1c1c1c !important;
  --bases-table-header-color: #cebd9e !important;
  --bases-table-row-background-hover: #ebcb8b30 !important;
  --bases-table-summary-background: #1c1c1c !important;
  --blockquote-border-color: hsl(40, 71%, 73%) !important;
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
  --color-accent: hsl(40, 71%, 73%) !important;
  --color-accent-1: hsl(37, 72.42%, 83.95%) !important;
  --color-accent-2: hsl(35, 74.55%, 94.17%) !important;
  --color-accent-hsl: 40, 71%, 73% !important;
  --cursor-line-background: #585858 !important;
  --dark: #cccccc !important;
  --dark-grey: #242424 !important;
  --darkgray: #cccccc !important;
  --divider-color: #242424 !important;
  --divider-color-hover: hsl(40, 71%, 73%) !important;
  --eggshell: #ffffd7 !important;
  --embed-block-shadow-hover: 0 0 0 1px #242424, inset 0 0 0 1px #242424 !important;
  --embed-border-start: 2px solid hsl(40, 71%, 73%) !important;
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
  --interactive-accent: hsl(40, 71%, 73%) !important;
  --interactive-accent-hover: hsl(37, 72.42%, 83.95%) !important;
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
  --link-unresolved-decoration-color: hsla(40, 71%, 73%, 0.3) !important;
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
  --nav-item-background-selected: hsla(40, 71%, 73%, 0.15) !important;
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
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 71%, 73%) !important;
  --tab-text-color: #87afff !important;
  --tab-text-color-active: #cebd9e !important;
  --tab-text-color-focused: #cebd9e !important;
  --tab-text-color-focused-active: #ffffd7 !important;
  --tab-text-color-focused-active-current: #bf616a !important;
  --tab-text-color-focused-highlighted: #d08770 !important;
  --table-add-button-border-color: #242424 !important;
  --table-border-color: #242424 !important;
  --table-drag-handle-background-active: hsl(40, 71%, 73%) !important;
  --table-drag-handle-color: #87afff !important;
  --table-header-background: #ebcb8b10 !important;
  --table-header-background-hover: #ebcb8b30 !important;
  --table-header-border-color: #242424 !important;
  --table-header-color: #cccccc !important;
  --table-row-background: #242424 !important;
  --table-row-background-hover: #ebcb8b30 !important;
  --table-selection: hsla(40, 71%, 73%, 0.1) !important;
  --table-selection-border-color: hsl(40, 71%, 73%) !important;
  --tag-background: #242424 !important;
  --tag-background-hover: #242424 !important;
  --tag-border-color: hsla(40, 71%, 73%, 0.15) !important;
  --tag-border-color-hover: hsla(40, 71%, 73%, 0.15) !important;
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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(204, 204, 204);
}

html body .bases-table thead th {
  border-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body .canvas-node {
  border-color: rgb(204, 204, 204);
}

html body .canvas-node-content {
  color: rgb(204, 204, 204);
}

html body .canvas-node-file {
  color: rgb(204, 204, 204);
}

html body .canvas-node-group {
  border-color: rgb(204, 204, 204);
}

html body .canvas-sidebar {
  background-color: rgb(36, 36, 36);
  border-color: rgb(204, 204, 204);
}

html body .note-properties {
  border-color: rgb(36, 36, 36);
}

html body .note-properties-key {
  color: rgb(206, 189, 158);
}

html body .note-properties-row {
  border-color: rgb(206, 189, 158);
}

html body .note-properties-tags {
  background-color: rgb(36, 36, 36);
  border-radius: 7px;
  color: rgb(255, 255, 215);
}

html body .note-properties-value {
  color: rgb(206, 189, 158);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(36, 36, 36);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(204, 204, 204);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration-color: rgb(235, 203, 139);
}

html body .page article p > em, html em {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration-color: rgb(235, 203, 139);
}

html body .page article p > i, html i {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration-color: rgb(235, 203, 139);
}

html body .page article p > strong, html strong {
  color: rgb(235, 203, 139);
  outline: rgb(235, 203, 139) none 0px;
  text-decoration-color: rgb(235, 203, 139);
}

html body .text-highlight {
  background-color: rgba(235, 203, 139, 0.19);
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html body del {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html body h1.article-title {
  color: rgb(204, 204, 204);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(235, 203, 139);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(235, 203, 139);
  border-color: rgb(235, 203, 139);
}

html body p {
  color: rgb(206, 189, 158);
  outline: rgb(206, 189, 158) none 0px;
  text-decoration-color: rgb(206, 189, 158);
}`,
    links: `html body a.external, html footer a {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration-color: rgb(208, 135, 112);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration-color: rgb(208, 135, 112);
}

html body a.internal.broken {
  color: rgb(208, 135, 112);
  outline: rgb(208, 135, 112) none 0px;
  text-decoration: rgba(235, 202, 137, 0.3);
  text-decoration-color: rgba(235, 202, 137, 0.3);
}`,
    lists: `html body dd {
  color: rgb(204, 204, 204);
}

html body dt {
  color: rgb(204, 204, 204);
}

html body ol > li {
  color: rgb(204, 204, 204);
}

html body ol.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body ul > li {
  color: rgb(204, 204, 204);
}

html body ul.overflow {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(135, 175, 255);
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body table {
  color: rgb(204, 204, 204);
}

html body td {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body th {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body tr {
  background-color: rgba(235, 203, 139, 0.063);
}`,
    code: `html body code {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
  color: rgb(235, 203, 139);
}

html body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body pre > code, html pre:has(> code) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}

html body pre:has(> code) {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
}`,
    images: `html body audio {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body figcaption {
  color: rgb(204, 204, 204);
}

html body figure {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body img {
  border-bottom-color: rgb(255, 255, 215);
  border-left-color: rgb(255, 255, 215);
  border-right-color: rgb(255, 255, 215);
  border-top-color: rgb(255, 255, 215);
}

html body video {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
}

html body .footnotes {
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .transclude {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(235, 202, 137);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body .transclude-inner {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    checkboxes: `html body input[type=checkbox] {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(204, 204, 204);
  text-decoration-color: rgb(204, 204, 204);
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
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(204, 204, 204);
}

html body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

html body .search > .search-container > .search-space > * {
  color: rgb(204, 204, 204);
  outline: rgb(204, 204, 204) none 0px;
  text-decoration-color: rgb(204, 204, 204);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(204, 204, 204);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(204, 204, 204);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(204, 204, 204);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html body a.internal.tag-link::before {
  color: rgb(255, 255, 215);
}

html body h1 {
  color: rgb(255, 255, 215);
}

html body h2 {
  color: rgb(255, 255, 215);
}

html body h2.page-title, html h2.page-title a {
  color: rgb(235, 203, 139);
}

html body h3 {
  color: rgb(255, 255, 215);
}

html body h4 {
  color: rgb(255, 255, 215);
}

html body h5 {
  color: rgb(255, 255, 215);
}

html body h6 {
  color: rgb(255, 255, 215);
}

html body hr {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(206, 189, 158);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(206, 189, 158);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(204, 204, 204);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}`,
    footer: `html body footer {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(206, 189, 158);
}

html body footer ul li a {
  color: rgb(206, 189, 158);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(204, 204, 204);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(206, 189, 158);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(206, 189, 158);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body li.section-li > .section .meta {
  color: rgb(206, 189, 158);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(206, 189, 158);
}

html body ul.section-ul {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

html body .darkmode svg {
  color: rgb(206, 189, 158);
  stroke: rgb(206, 189, 158);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

html body .breadcrumb-element p {
  color: rgb(135, 175, 255);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
  color: rgb(204, 204, 204);
}

html body .metadata {
  border-bottom-color: rgb(36, 36, 36);
  border-left-color: rgb(36, 36, 36);
  border-right-color: rgb(36, 36, 36);
  border-top-color: rgb(36, 36, 36);
  color: rgb(206, 189, 158);
}

html body .metadata-properties {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

html body .navigation-progress {
  background-color: rgb(36, 36, 36);
}

html body .page-header h2.page-title {
  color: rgb(204, 204, 204);
}

html body abbr {
  color: rgb(204, 204, 204);
}

html body details {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body input[type=text] {
  border-bottom-color: rgb(206, 189, 158);
  border-left-color: rgb(206, 189, 158);
  border-right-color: rgb(206, 189, 158);
  border-top-color: rgb(206, 189, 158);
  color: rgb(206, 189, 158);
}

html body kbd {
  border-bottom-color: rgb(235, 203, 139);
  border-left-color: rgb(235, 203, 139);
  border-right-color: rgb(235, 203, 139);
  border-top-color: rgb(235, 203, 139);
  color: rgb(235, 203, 139);
}

html body progress {
  border-bottom-color: rgb(204, 204, 204);
  border-left-color: rgb(204, 204, 204);
  border-right-color: rgb(204, 204, 204);
  border-top-color: rgb(204, 204, 204);
}

html body sub {
  color: rgb(204, 204, 204);
}

html body summary {
  color: rgb(204, 204, 204);
}

html body sup {
  color: rgb(204, 204, 204);
}

html body ul.tags > li {
  background-color: rgb(36, 36, 36);
  border-bottom-color: rgba(235, 202, 137, 0.15);
  border-bottom-left-radius: 6.125px;
  border-bottom-right-radius: 6.125px;
  border-left-color: rgba(235, 202, 137, 0.15);
  border-right-color: rgba(235, 202, 137, 0.15);
  border-top-color: rgba(235, 202, 137, 0.15);
  border-top-left-radius: 6.125px;
  border-top-right-radius: 6.125px;
  color: rgb(255, 255, 215);
}`,
  },
  light: {},
};
