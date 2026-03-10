import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "radiance",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --accent-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --accent-color-rgb: 208, 66, 85 !important;
  --accent-h: 353 !important;
  --accent-l: 54% !important;
  --accent-s: 65% !important;
  --background-modifier-active: #303030 !important;
  --background-modifier-active-hover: rgba(214, 61, 79, 0.1) !important;
  --background-modifier-border: #383838 !important;
  --background-modifier-hover: #2a2a2a !important;
  --background-secondary: #252525 !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #383838 !important;
  --bases-embed-border-color: #383838 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #a0a0a0 !important;
  --bases-table-border-color: #383838 !important;
  --bases-table-cell-background-selected: rgba(214, 61, 79, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
        353,
        65%,
        54%
    ) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-header-background-hover: #2a2a2a !important;
  --bases-table-header-color: #a0a0a0 !important;
  --bases-table-summary-background-hover: #2a2a2a !important;
  --blockquote-border-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --callout-radius: 3px;
  --canvas-controls-radius: 3px !important;
  --caret-color: #e0e0e0 !important;
  --checkbox-border-color-hover: #a0a0a0 !important;
  --checkbox-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --checkbox-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #a0a0a0 !important;
  --clickable-icon-radius: 3px !important;
  --code-border-color: #383838 !important;
  --code-bracket-background: #2a2a2a !important;
  --code-normal: #e0e0e0 !important;
  --code-punctuation: #a0a0a0 !important;
  --code-radius: 3px !important;
  --collapse-icon-color-collapsed: hsl(
        353,
        65%,
        54%
    ) !important;
  --color-accent: hsl(
        353,
        65%,
        54%
    ) !important;
  --color-accent-1: rgb(222, 94, 115) !important;
  --color-accent-2: rgb(231, 126, 147) !important;
  --color-accent-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --color-accent-hsl: 353, 65%, 54% !important;
  --color-accent-rgb: 208, 66, 85 !important;
  --dark: #e0e0e0 !important;
  --darkgray: #e0e0e0 !important;
  --divider-color: #383838 !important;
  --divider-color-hover: hsl(
        353,
        65%,
        54%
    ) !important;
  --embed-block-shadow-hover: 0 0 0 1px #383838, inset 0 0 0 1px #383838 !important;
  --embed-border-start: 2px solid hsl(
        353,
        65%,
        54%
    ) !important;
  --flair-color: #e0e0e0 !important;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif !important;
  --footnote-divider-color: #383838 !important;
  --footnote-id-color: #a0a0a0 !important;
  --footnote-input-background-active: #2a2a2a !important;
  --footnote-radius: 3px !important;
  --graph-node: #a0a0a0 !important;
  --graph-node-focused: hsl(
        353,
        65%,
        54%
    ) !important;
  --graph-text: #e0e0e0 !important;
  --gray: #a0a0a0 !important;
  --highlight: #2a2a2a !important;
  --hr-color: #383838 !important;
  --icon-color: #a0a0a0 !important;
  --icon-color-active: hsl(
        353,
        65%,
        54%
    ) !important;
  --icon-color-focused: #e0e0e0 !important;
  --icon-color-hover: #a0a0a0 !important;
  --input-background: #2d2d2d !important;
  --input-border-color: #383838 !important;
  --input-focus-border-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --input-text-color: #e0e0e0 !important;
  --interactive-accent: hsl(
        353,
        65%,
        54%
    ) !important;
  --interactive-accent-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --interactive-accent-hsl: 353, 65%, 54% !important;
  --interactive-accent-rgb: 208, 66, 85 !important;
  --lightgray: #252525 !important;
  --link-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --link-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --link-external-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --link-external-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --link-unresolved-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --link-unresolved-decoration-color: rgba(214, 61, 79, 0.3) !important;
  --list-marker-color-collapsed: hsl(
        353,
        65%,
        54%
    ) !important;
  --list-marker-color-hover: #a0a0a0 !important;
  --menu-background: #252525 !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #383838 !important;
  --metadata-divider-color: #383838 !important;
  --metadata-input-background-active: #2a2a2a !important;
  --metadata-input-text-color: #e0e0e0 !important;
  --metadata-label-background-active: #2a2a2a !important;
  --metadata-label-text-color: #a0a0a0 !important;
  --metadata-label-text-color-hover: #a0a0a0 !important;
  --metadata-property-background-active: #2a2a2a !important;
  --modal-radius: 8px !important;
  --nav-heading-color: #e0e0e0 !important;
  --nav-heading-color-collapsed-hover: #a0a0a0 !important;
  --nav-heading-color-hover: #e0e0e0 !important;
  --nav-item-background-active: #2a2a2a !important;
  --nav-item-background-hover: #2a2a2a !important;
  --nav-item-background-selected: rgba(214, 61, 79, 0.15) !important;
  --nav-item-color: #a0a0a0 !important;
  --nav-item-color-active: #e0e0e0 !important;
  --nav-item-color-highlighted: hsl(
        353,
        65%,
        54%
    ) !important;
  --nav-item-color-hover: #e0e0e0 !important;
  --nav-item-color-selected: #e0e0e0 !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color-active: #a0a0a0 !important;
  --nav-tag-color-hover: #a0a0a0 !important;
  --nav-tag-radius: 3px !important;
  --pdf-shadow: 0 0 0 1px #383838 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #383838 !important;
  --pill-border-color: #383838 !important;
  --pill-color: #a0a0a0 !important;
  --pill-color-hover: #e0e0e0 !important;
  --pill-color-remove-hover: hsl(
        353,
        65%,
        54%
    ) !important;
  --radius-l: 8px !important;
  --radius-m: 5px !important;
  --radius-s: 3px !important;
  --ribbon-background: #252525 !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #a0a0a0 !important;
  --search-icon-color: #a0a0a0 !important;
  --secondary: hsl(
        353,
        65%,
        54%
    ) !important;
  --setting-group-heading-color: #e0e0e0 !important;
  --setting-items-border-color: #383838 !important;
  --setting-items-radius: 8px !important;
  --sidebar-background: #1e1e1e !important;
  --sidebar-border-color: #383838 !important;
  --slider-track-background: #383838 !important;
  --spacing-l: 16px !important;
  --spacing-m: 12px !important;
  --spacing-s: 8px !important;
  --spacing-xl: 24px !important;
  --spacing-xs: 4px !important;
  --status-bar-background: #252525 !important;
  --status-bar-border-color: #383838 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #a0a0a0 !important;
  --tab-container-background: #252525 !important;
  --tab-outline-color: #383838 !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: #252525 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #252525, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(
        353,
        65%,
        54%
    ) !important;
  --tab-text-color-active: #a0a0a0 !important;
  --tab-text-color-focused: #a0a0a0 !important;
  --tab-text-color-focused-active: #a0a0a0 !important;
  --tab-text-color-focused-active-current: #e0e0e0 !important;
  --tab-text-color-focused-highlighted: hsl(
        353,
        65%,
        54%
    ) !important;
  --table-add-button-border-color: #383838 !important;
  --table-border-color: #383838 !important;
  --table-drag-handle-background-active: hsl(
        353,
        65%,
        54%
    ) !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #383838 !important;
  --table-header-color: #e0e0e0 !important;
  --table-selection: rgba(214, 61, 79, 0.1) !important;
  --table-selection-border-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --tag-background: rgba(214, 61, 79, 0.1) !important;
  --tag-background-hover: rgba(214, 61, 79, 0.2) !important;
  --tag-border-color: rgba(214, 61, 79, 0.15) !important;
  --tag-border-color-hover: rgba(214, 61, 79, 0.15) !important;
  --tag-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --tag-color-hover: hsl(
        353,
        65%,
        54%
    ) !important;
  --tertiary: hsl(
        353,
        65%,
        48% 
    ) !important;
  --text-accent: hsl(
        353,
        65%,
        54%
    ) !important;
  --text-accent-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --text-accent-rgb: 208, 66, 85 !important;
  --text-muted: #a0a0a0 !important;
  --text-normal: #e0e0e0 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: rgba(
        208,
        66,
        85,
        0.3
    ) !important;
  --textHighlight: #2a2a2a !important;
  --titlebar-background: #1e1e1e !important;
  --titlebar-background-focused: #252525 !important;
  --titlebar-border-color: #383838 !important;
  --titlebar-text-color: #a0a0a0 !important;
  --titlebar-text-color-focused: #e0e0e0 !important;
  --vault-profile-color: #e0e0e0 !important;
  --vault-profile-color-hover: #e0e0e0 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
  color: rgb(224, 224, 224);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(224, 224, 224);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(37, 37, 37);
  color: rgb(224, 224, 224);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
  border-left-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

body div#quartz-root {
  color: rgb(224, 224, 224);
}`,
    typography: `body .page article p > b, b {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .page article p > em, em {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .page article p > i, i {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .page article p > strong, strong {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .text-highlight {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: line-through rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body p {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration: rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `body a.external, footer a {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration: underline rgb(214, 61, 79);
  text-decoration-color: rgb(214, 61, 79);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration: rgb(214, 61, 79);
  text-decoration-color: rgb(214, 61, 79);
  transition: color 0.2s;
}

body a.internal.broken {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration: rgba(214, 61, 79, 0.3);
  text-decoration-color: rgba(214, 61, 79, 0.3);
  transition: color 0.2s;
}`,
    lists: `body dd {
  color: rgb(224, 224, 224);
}

body dt {
  color: rgb(224, 224, 224);
}

body ol > li {
  color: rgb(224, 224, 224);
}

body ol.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body ul > li {
  color: rgb(224, 224, 224);
}

body ul.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    tables: `body .spacer {
  background-color: rgb(30, 30, 30);
}

body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body table {
  color: rgb(224, 224, 224);
}

body td {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

body th {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}`,
    code: `body code {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body figcaption {
  color: rgb(224, 224, 224);
}

body figure {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body img {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body video {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(214, 61, 79);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(214, 61, 79);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body input[type=checkbox] {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='*'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='/'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='>'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='?'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='I'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='S'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='b'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='c'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='d'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='f'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='i'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='k'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='l'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='p'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='u'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}

body li.task-list-item[data-task='w'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through rgb(160, 160, 160);
  text-decoration-color: rgb(160, 160, 160);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 32px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration: rgb(224, 224, 224);
  text-decoration-color: rgb(224, 224, 224);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(214, 61, 79);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(214, 61, 79);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(214, 61, 79);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(208, 66, 85, 0.15);
  border-bottom-color: rgba(208, 66, 85, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 66, 85, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(208, 66, 85, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(208, 66, 85, 0.4);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(214, 61, 79);
}

body h1 {
  color: rgb(224, 224, 224);
}

body h2 {
  color: rgb(224, 224, 224);
}

body h2.page-title, h2.page-title a {
  color: rgb(224, 224, 224);
}

body h3 {
  color: rgb(224, 224, 224);
}

body h4 {
  color: rgb(224, 224, 224);
}

body h5 {
  color: rgb(224, 224, 224);
}

body h6 {
  color: rgb(224, 224, 224);
}

body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(160, 160, 160);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(48, 48, 48);
  border-bottom-color: rgb(214, 61, 79);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(214, 61, 79);
  border-right-color: rgb(214, 61, 79);
  border-top-color: rgb(214, 61, 79);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(214, 61, 79);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
  text-decoration: rgb(160, 160, 160);
}

body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    darkmode: `body .darkmode {
  background-color: rgb(37, 37, 37);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 56, 56);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(224, 224, 224);
  stroke: rgb(224, 224, 224);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(160, 160, 160);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(160, 160, 160);
}

body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

body .page-header h2.page-title {
  color: rgb(224, 224, 224);
}

body abbr {
  color: rgb(224, 224, 224);
  text-decoration: underline dotted rgb(224, 224, 224);
}

body details {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body input[type=text] {
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(56, 56, 56);
  border-left-width: 1px;
  border-right-color: rgb(56, 56, 56);
  border-right-width: 1px;
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body kbd {
  border-bottom-color: rgb(224, 224, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(224, 224, 224);
}

body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

body sub {
  color: rgb(224, 224, 224);
}

body summary {
  color: rgb(224, 224, 224);
}

body sup {
  color: rgb(224, 224, 224);
}`,
  },
  light: {
    base: `:root:root {
  --accent-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --accent-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --accent-color-rgb: 208, 66, 85 !important;
  --accent-h: 353 !important;
  --accent-l: 60% !important;
  --accent-s: 65% !important;
  --background-modifier-active: #e8eaed !important;
  --background-modifier-active-hover: rgba(219, 87, 102, 0.1) !important;
  --background-modifier-border: #dadce0 !important;
  --background-modifier-hover: #f1f3f4 !important;
  --background-secondary: #f8f9fa !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #dadce0 !important;
  --bases-embed-border-color: #dadce0 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #5f6368 !important;
  --bases-table-border-color: #dadce0 !important;
  --bases-table-cell-background-selected: rgba(219, 87, 102, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(
        353,
        65%,
        60%
    ) !important;
  --bases-table-container-border-radius: 3px !important;
  --bases-table-header-background-hover: #f1f3f4 !important;
  --bases-table-header-color: #5f6368 !important;
  --bases-table-summary-background-hover: #f1f3f4 !important;
  --blockquote-border-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --callout-radius: 3px;
  --canvas-controls-radius: 3px !important;
  --caret-color: #202124 !important;
  --checkbox-border-color-hover: #5f6368 !important;
  --checkbox-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --checkbox-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #5f6368 !important;
  --clickable-icon-radius: 3px !important;
  --code-border-color: #dadce0 !important;
  --code-bracket-background: #f1f3f4 !important;
  --code-normal: #202124 !important;
  --code-punctuation: #5f6368 !important;
  --code-radius: 3px !important;
  --collapse-icon-color-collapsed: hsl(
        353,
        65%,
        60%
    ) !important;
  --color-accent: hsl(
        353,
        65%,
        60%
    ) !important;
  --color-accent-1: rgb(225, 107, 123) !important;
  --color-accent-2: rgb(228, 124, 141) !important;
  --color-accent-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --color-accent-hsl: 353, 65%, 60% !important;
  --color-accent-rgb: 208, 66, 85 !important;
  --dark: #202124 !important;
  --darkgray: #202124 !important;
  --divider-color: #dadce0 !important;
  --divider-color-hover: hsl(
        353,
        65%,
        60%
    ) !important;
  --embed-block-shadow-hover: 0 0 0 1px #dadce0, inset 0 0 0 1px #dadce0 !important;
  --embed-border-start: 2px solid hsl(
        353,
        65%,
        60%
    ) !important;
  --flair-color: #202124 !important;
  --font-family-monospace: "SFMono-Regular", Consolas, "Liberation Mono", Menlo, Courier, monospace !important;
  --font-family-sans: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
        Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue",
        sans-serif !important;
  --footnote-divider-color: #dadce0 !important;
  --footnote-id-color: #5f6368 !important;
  --footnote-input-background-active: #f1f3f4 !important;
  --footnote-radius: 3px !important;
  --graph-node: #5f6368 !important;
  --graph-node-focused: hsl(
        353,
        65%,
        60%
    ) !important;
  --graph-text: #202124 !important;
  --gray: #5f6368 !important;
  --highlight: #f1f3f4 !important;
  --hr-color: #dadce0 !important;
  --icon-color: #5f6368 !important;
  --icon-color-active: hsl(
        353,
        65%,
        60%
    ) !important;
  --icon-color-focused: #202124 !important;
  --icon-color-hover: #5f6368 !important;
  --input-background: #ffffff !important;
  --input-border-color: #dadce0 !important;
  --input-focus-border-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --input-text-color: #202124 !important;
  --interactive-accent: hsl(
        353,
        65%,
        60%
    ) !important;
  --interactive-accent-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --interactive-accent-hsl: 353, 65%, 60% !important;
  --interactive-accent-rgb: 208, 66, 85 !important;
  --lightgray: #f8f9fa !important;
  --link-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --link-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --link-external-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --link-external-color-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --link-unresolved-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --link-unresolved-decoration-color: rgba(219, 87, 102, 0.3) !important;
  --list-marker-color-collapsed: hsl(
        353,
        65%,
        60%
    ) !important;
  --list-marker-color-hover: #5f6368 !important;
  --menu-background: #f8f9fa !important;
  --menu-radius: 5px !important;
  --metadata-border-color: #dadce0 !important;
  --metadata-divider-color: #dadce0 !important;
  --metadata-input-background-active: #f1f3f4 !important;
  --metadata-input-text-color: #202124 !important;
  --metadata-label-background-active: #f1f3f4 !important;
  --metadata-label-text-color: #5f6368 !important;
  --metadata-label-text-color-hover: #5f6368 !important;
  --metadata-property-background-active: #f1f3f4 !important;
  --modal-radius: 8px !important;
  --nav-heading-color: #202124 !important;
  --nav-heading-color-collapsed-hover: #5f6368 !important;
  --nav-heading-color-hover: #202124 !important;
  --nav-item-background-active: #f1f3f4 !important;
  --nav-item-background-hover: #f1f3f4 !important;
  --nav-item-background-selected: rgba(219, 87, 102, 0.15) !important;
  --nav-item-color: #5f6368 !important;
  --nav-item-color-active: #202124 !important;
  --nav-item-color-highlighted: hsl(
        353,
        65%,
        60%
    ) !important;
  --nav-item-color-hover: #202124 !important;
  --nav-item-color-selected: #202124 !important;
  --nav-item-radius: 3px !important;
  --nav-tag-color-active: #5f6368 !important;
  --nav-tag-color-hover: #5f6368 !important;
  --nav-tag-radius: 3px !important;
  --pill-border-color: #dadce0 !important;
  --pill-color: #5f6368 !important;
  --pill-color-hover: #202124 !important;
  --pill-color-remove-hover: hsl(
        353,
        65%,
        60%
    ) !important;
  --radius-l: 8px !important;
  --radius-m: 5px !important;
  --radius-s: 3px !important;
  --ribbon-background: #f8f9fa !important;
  --scrollbar-radius: 8px !important;
  --search-clear-button-color: #5f6368 !important;
  --search-icon-color: #5f6368 !important;
  --secondary: hsl(
        353,
        65%,
        60%
    ) !important;
  --setting-group-heading-color: #202124 !important;
  --setting-items-border-color: #dadce0 !important;
  --setting-items-radius: 8px !important;
  --sidebar-background: #ffffff !important;
  --sidebar-border-color: #dadce0 !important;
  --slider-track-background: #dadce0 !important;
  --spacing-l: 16px !important;
  --spacing-m: 12px !important;
  --spacing-s: 8px !important;
  --spacing-xl: 24px !important;
  --spacing-xs: 4px !important;
  --status-bar-background: #f8f9fa !important;
  --status-bar-border-color: #dadce0 !important;
  --status-bar-radius: 5px 0 0 0 !important;
  --status-bar-text-color: #5f6368 !important;
  --tab-container-background: #f8f9fa !important;
  --tab-outline-color: #dadce0 !important;
  --tab-radius: 3px !important;
  --tab-switcher-background: #f8f9fa !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f8f9fa, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(
        353,
        65%,
        60%
    ) !important;
  --tab-text-color-active: #5f6368 !important;
  --tab-text-color-focused: #5f6368 !important;
  --tab-text-color-focused-active: #5f6368 !important;
  --tab-text-color-focused-active-current: #202124 !important;
  --tab-text-color-focused-highlighted: hsl(
        353,
        65%,
        60%
    ) !important;
  --table-add-button-border-color: #dadce0 !important;
  --table-border-color: #dadce0 !important;
  --table-drag-handle-background-active: hsl(
        353,
        65%,
        60%
    ) !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-border-color: #dadce0 !important;
  --table-header-color: #202124 !important;
  --table-selection: rgba(219, 87, 102, 0.1) !important;
  --table-selection-border-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --tag-background: rgba(219, 87, 102, 0.1) !important;
  --tag-background-hover: rgba(219, 87, 102, 0.2) !important;
  --tag-border-color: rgba(219, 87, 102, 0.15) !important;
  --tag-border-color-hover: rgba(219, 87, 102, 0.15) !important;
  --tag-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --tag-color-hover: hsl(
        353,
        65%,
        60%
    ) !important;
  --tertiary: hsl(
        353,
        65%,
        48% 
    ) !important;
  --text-accent: hsl(
        353,
        65%,
        60%
    ) !important;
  --text-accent-hover: hsl(
        353,
        65%,
        48% 
    ) !important;
  --text-accent-rgb: 208, 66, 85 !important;
  --text-muted: #5f6368 !important;
  --text-normal: #202124 !important;
  --text-on-accent: #ffffff !important;
  --text-selection: rgba(
        208,
        66,
        85,
        0.2
    ) !important;
  --textHighlight: #f1f3f4 !important;
  --titlebar-background: #ffffff !important;
  --titlebar-background-focused: #f8f9fa !important;
  --titlebar-border-color: #dadce0 !important;
  --titlebar-text-color: #5f6368 !important;
  --titlebar-text-color-focused: #202124 !important;
  --vault-profile-color: #202124 !important;
  --vault-profile-color-hover: #202124 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(32, 33, 36);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 249, 250);
  color: rgb(32, 33, 36);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(218, 220, 224);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

body div#quartz-root {
  color: rgb(32, 33, 36);
}`,
    typography: `body .page article p > b, b {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .page article p > em, em {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .page article p > i, i {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .page article p > strong, strong {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .text-highlight {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body del {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: line-through rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body p {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  outline: rgb(95, 99, 104) none 0px;
  text-decoration: rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}`,
    links: `body a.external, footer a {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration: underline rgb(219, 87, 102);
  text-decoration-color: rgb(219, 87, 102);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration: rgb(219, 87, 102);
  text-decoration-color: rgb(219, 87, 102);
  transition: color 0.2s;
}

body a.internal.broken {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration: rgba(219, 87, 102, 0.3);
  text-decoration-color: rgba(219, 87, 102, 0.3);
  transition: color 0.2s;
}`,
    lists: `body dd {
  color: rgb(32, 33, 36);
}

body dt {
  color: rgb(32, 33, 36);
}

body ol > li {
  color: rgb(32, 33, 36);
}

body ol.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body ul > li {
  color: rgb(32, 33, 36);
}

body ul.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    tables: `body .spacer {
  background-color: rgb(255, 255, 255);
}

body .table-container {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body table {
  color: rgb(32, 33, 36);
}

body td {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

body th {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}`,
    code: `body code {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
  font-family: SFMono-Regular, Consolas, "Liberation Mono", Menlo, Courier, monospace;
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body pre:has(> code) {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `body audio {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body figcaption {
  color: rgb(32, 33, 36);
}

body figure {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body img {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body video {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

body .footnotes {
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

body .transclude {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(219, 87, 102);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body .transclude-inner {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(219, 87, 102);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    checkboxes: `body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body input[type=checkbox] {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 4px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='*'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='-'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='/'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='>'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='?'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='I'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='S'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='b'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='c'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='d'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='f'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='i'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='k'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='l'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='p'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='u'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}

body li.task-list-item[data-task='w'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through rgb(95, 99, 104);
  text-decoration-color: rgb(95, 99, 104);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 32px 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration: rgb(32, 33, 36);
  text-decoration-color: rgb(32, 33, 36);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(219, 87, 102);
  color: rgb(255, 255, 255);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > input {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(218, 220, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(219, 87, 102);
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(219, 87, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(208, 66, 85, 0.15);
  border-bottom-color: rgba(208, 66, 85, 0.4);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgba(208, 66, 85, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(208, 66, 85, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(208, 66, 85, 0.4);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  font-weight: 500;
}

body a.internal.tag-link::before {
  color: rgb(219, 87, 102);
}

body h1 {
  color: rgb(32, 33, 36);
}

body h2 {
  color: rgb(32, 33, 36);
}

body h2.page-title, h2.page-title a {
  color: rgb(32, 33, 36);
}

body h3 {
  color: rgb(32, 33, 36);
}

body h4 {
  color: rgb(32, 33, 36);
}

body h5 {
  color: rgb(32, 33, 36);
}

body h6 {
  color: rgb(32, 33, 36);
}

body hr {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  text-decoration: rgb(95, 99, 104);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(232, 234, 237);
  border-bottom-color: rgb(219, 87, 102);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(219, 87, 102);
  border-right-color: rgb(219, 87, 102);
  border-top-color: rgb(219, 87, 102);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(219, 87, 102);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 220, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  cursor: pointer;
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body footer ul li a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
  text-decoration: rgb(95, 99, 104);
}

body ul.section-ul {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    darkmode: `body .darkmode {
  background-color: rgb(248, 249, 250);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 220, 224);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  cursor: pointer;
}

body .darkmode svg {
  color: rgb(32, 33, 36);
  stroke: rgb(32, 33, 36);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(95, 99, 104);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

body .metadata {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
}

body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(32, 33, 36);
}

body abbr {
  color: rgb(32, 33, 36);
  text-decoration: underline dotted rgb(32, 33, 36);
}

body details {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body input[type=text] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-bottom-width: 1px;
  border-left-color: rgb(218, 220, 224);
  border-left-width: 1px;
  border-right-color: rgb(218, 220, 224);
  border-right-width: 1px;
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-top-width: 1px;
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  padding-bottom: 8px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 8px;
}

body kbd {
  border-bottom-color: rgb(32, 33, 36);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  color: rgb(32, 33, 36);
}

body progress {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

body sub {
  color: rgb(32, 33, 36);
}

body summary {
  color: rgb(32, 33, 36);
}

body sup {
  color: rgb(32, 33, 36);
}`,
  },
};
