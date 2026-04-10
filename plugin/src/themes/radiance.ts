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
  --background-modifier-active-hover: hsla(353, 65%, 54%, 0.1) !important;
  --background-modifier-border: #383838 !important;
  --background-modifier-hover: #2a2a2a !important;
  --background-secondary: #252525 !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #383838 !important;
  --bases-embed-border-color: #383838 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #a0a0a0 !important;
  --bases-table-border-color: #383838 !important;
  --bases-table-cell-background-selected: hsla(353, 65%, 54%, 0.1) !important;
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
  --color-accent-1: hsl(350, 66.3%, 62.1%) !important;
  --color-accent-2: hsl(348, 68.25%, 69.66%) !important;
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
  --link-unresolved-decoration-color: hsla(353, 65%, 54%, 0.3) !important;
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
  --nav-item-background-selected: hsla(353, 65%, 54%, 0.15) !important;
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
  --table-selection: hsla(353, 65%, 54%, 0.1) !important;
  --table-selection-border-color: hsl(
        353,
        65%,
        54%
    ) !important;
  --tag-background: hsla(353, 65%, 54%, 0.1) !important;
  --tag-background-hover: hsla(353, 65%, 54%, 0.2) !important;
  --tag-border-color: hsla(353, 65%, 54%, 0.15) !important;
  --tag-border-color-hover: hsla(353, 65%, 54%, 0.15) !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(30, 30, 30);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(37, 37, 37);
  border-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(208, 66, 85, 0.15);
  border-radius: 5px;
  color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(37, 37, 37);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(56, 56, 56);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(30, 30, 30);
  border-left-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body div#quartz-root {
  color: rgb(224, 224, 224);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body del {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(45, 45, 45);
  border-color: rgb(56, 56, 56);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(214, 61, 79);
  border-color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body p {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  outline: rgb(160, 160, 160) none 0px;
  text-decoration-color: rgb(160, 160, 160);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration-color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration-color: rgb(214, 61, 79);
  transition: color 0.2s;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(214, 61, 79);
  outline: rgb(214, 61, 79) none 0px;
  text-decoration: rgba(214, 61, 79, 0.3);
  text-decoration-color: rgba(214, 61, 79, 0.3);
  transition: color 0.2s;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body dt {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    tables: `html[saved-theme="dark"] body .spacer {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body table {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(160, 160, 160);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(214, 61, 79);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    checkboxes: `html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(160, 160, 160);
  text-decoration: line-through;
  text-decoration-color: rgb(160, 160, 160);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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
  background-color: rgb(45, 45, 45);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
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

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(224, 224, 224);
  outline: rgb(224, 224, 224) none 0px;
  text-decoration-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(214, 61, 79);
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(56, 56, 56);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(214, 61, 79);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(214, 61, 79);
}

html[saved-theme="dark"] body h1 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h3 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h4 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h5 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body h6 {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(224, 224, 224);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(30, 30, 30);
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  border-top-left-radius: 5px;
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(160, 160, 160);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(224, 224, 224);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(160, 160, 160);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(224, 224, 224);
  stroke: rgb(224, 224, 224);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(56, 56, 56);
  border-left-color: rgb(56, 56, 56);
  border-right-color: rgb(56, 56, 56);
  border-top-color: rgb(56, 56, 56);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(160, 160, 160);
  border-left-color: rgb(160, 160, 160);
  border-right-color: rgb(160, 160, 160);
  border-top-color: rgb(160, 160, 160);
  color: rgb(160, 160, 160);
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(30, 30, 30);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body abbr {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body input[type=text] {
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

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(224, 224, 224);
  border-left-color: rgb(224, 224, 224);
  border-right-color: rgb(224, 224, 224);
  border-top-color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body sub {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body summary {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body sup {
  color: rgb(224, 224, 224);
}

html[saved-theme="dark"] body ul.tags > li {
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
  color: rgb(214, 61, 79);
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
  --background-modifier-active-hover: hsla(353, 65%, 60%, 0.1) !important;
  --background-modifier-border: #dadce0 !important;
  --background-modifier-hover: #f1f3f4 !important;
  --background-secondary: #f8f9fa !important;
  --bases-cards-radius: 5px !important;
  --bases-cards-shadow: 0 0 0 1px #dadce0 !important;
  --bases-embed-border-color: #dadce0 !important;
  --bases-embed-border-radius: 3px !important;
  --bases-group-heading-property-color: #5f6368 !important;
  --bases-table-border-color: #dadce0 !important;
  --bases-table-cell-background-selected: hsla(353, 65%, 60%, 0.1) !important;
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
  --color-accent-1: hsl(352, 65.65%, 64.5%) !important;
  --color-accent-2: hsl(350, 66.3%, 69%) !important;
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
  --link-unresolved-decoration-color: hsla(353, 65%, 60%, 0.3) !important;
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
  --nav-item-background-selected: hsla(353, 65%, 60%, 0.15) !important;
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
  --table-selection: hsla(353, 65%, 60%, 0.1) !important;
  --table-selection-border-color: hsl(
        353,
        65%,
        60%
    ) !important;
  --tag-background: hsla(353, 65%, 60%, 0.1) !important;
  --tag-background-hover: hsla(353, 65%, 60%, 0.2) !important;
  --tag-border-color: hsla(353, 65%, 60%, 0.15) !important;
  --tag-border-color-hover: hsla(353, 65%, 60%, 0.15) !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(218, 220, 224);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(208, 66, 85, 0.15);
  border-radius: 5px;
  color: rgb(219, 87, 102);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(248, 249, 250);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(218, 220, 224);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(32, 33, 36);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body del {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(255, 255, 255);
  border-color: rgb(218, 220, 224);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(219, 87, 102);
  border-color: rgb(219, 87, 102);
}

html[saved-theme="light"] body p {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
  outline: rgb(95, 99, 104) none 0px;
  text-decoration-color: rgb(95, 99, 104);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration-color: rgb(219, 87, 102);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration-color: rgb(219, 87, 102);
  transition: color 0.2s;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(219, 87, 102);
  outline: rgb(219, 87, 102) none 0px;
  text-decoration: rgba(219, 87, 102, 0.3);
  text-decoration-color: rgba(219, 87, 102, 0.3);
  transition: color 0.2s;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body dt {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ol > li {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul > li {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    tables: `html[saved-theme="light"] body .spacer {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body table {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body figcaption {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(95, 99, 104);
  border-bottom-left-radius: 5px;
  border-bottom-right-radius: 5px;
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(219, 87, 102);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(95, 99, 104);
  text-decoration: line-through;
  text-decoration-color: rgb(95, 99, 104);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
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
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(32, 33, 36);
  outline: rgb(32, 33, 36) none 0px;
  text-decoration-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(219, 87, 102);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(218, 220, 224);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(219, 87, 102);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(219, 87, 102);
}

html[saved-theme="light"] body h1 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h2 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h3 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h4 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h5 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body h6 {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(32, 33, 36);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  border-top-left-radius: 5px;
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(95, 99, 104);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(32, 33, 36);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(95, 99, 104);
  font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(32, 33, 36);
  stroke: rgb(32, 33, 36);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(218, 220, 224);
  border-left-color: rgb(218, 220, 224);
  border-right-color: rgb(218, 220, 224);
  border-top-color: rgb(218, 220, 224);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(95, 99, 104);
  border-left-color: rgb(95, 99, 104);
  border-right-color: rgb(95, 99, 104);
  border-top-color: rgb(95, 99, 104);
  color: rgb(95, 99, 104);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body abbr {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body input[type=text] {
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

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(32, 33, 36);
  border-left-color: rgb(32, 33, 36);
  border-right-color: rgb(32, 33, 36);
  border-top-color: rgb(32, 33, 36);
}

html[saved-theme="light"] body sub {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body summary {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body sup {
  color: rgb(32, 33, 36);
}

html[saved-theme="light"] body ul.tags > li {
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
  color: rgb(219, 87, 102);
}`,
  },
};
