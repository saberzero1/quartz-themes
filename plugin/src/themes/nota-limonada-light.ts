import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nota-limonada-light",
    modes: ["light"],
    variations: [],
    fonts: [],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent-h: 120 !important;
  --accent-l: 34% !important;
  --accent-s: 61% !important;
  --background-modifier-active-hover: hsla(120, 61%, 34%, 0.1) !important;
  --background-primary: #fefdf6 !important;
  --background-secondary: #fbfbe0 !important;
  --bases-cards-background: #fefdf6 !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #3b5e40 !important;
  --bases-table-cell-background-active: #fefdf6 !important;
  --bases-table-cell-background-selected: hsla(120, 61%, 34%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(119, 61.61%, 36.55%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-background: #fefdf6 !important;
  --bases-table-header-color: #3b5e40 !important;
  --bases-table-summary-background: #fefdf6 !important;
  --blockquote-border-color: hsl(119, 61.61%, 36.55%) !important;
  --blur-background: color-mix(in srgb, #fefdf6 65%, transparent) linear-gradient(#fefdf6, color-mix(in srgb, #fefdf6 65%, transparent)) !important;
  --bodyFont: Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 0px !important;
  --callout-radius: 0px;
  --canvas-background: #fefdf6 !important;
  --canvas-controls-radius: 0px !important;
  --caret-color: #1a1a1a !important;
  --checkbox-border-color-hover: #3b5e40 !important;
  --checkbox-color: hsl(119, 61.61%, 36.55%) !important;
  --checkbox-color-hover: hsl(117, 62.22%, 39.1%) !important;
  --checkbox-marker-color: #fefdf6 !important;
  --checkbox-radius: 0px !important;
  --checklist-done-color: #3b5e40 !important;
  --clickable-icon-radius: 0px !important;
  --code-normal: #1a1a1a !important;
  --code-punctuation: #3b5e40 !important;
  --code-radius: 0px !important;
  --codeFont: Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: hsl(120, 61%, 34%) !important;
  --color-accent: hsl(120, 61%, 34%) !important;
  --color-accent-1: hsl(119, 61.61%, 36.55%) !important;
  --color-accent-2: hsl(117, 62.22%, 39.1%) !important;
  --color-accent-hsl: 120, 61%, 34% !important;
  --color-base-100: #1a1a1a !important;
  --color-base-70: #3b5e40 !important;
  --dark: #1a1a1a !important;
  --darkgray: #1a1a1a !important;
  --divider-color-hover: hsl(119, 61.61%, 36.55%) !important;
  --embed-border-start: 2px solid hsl(119, 61.61%, 36.55%) !important;
  --file-header-background: #fefdf6 !important;
  --file-header-background-focused: #fefdf6 !important;
  --flair-color: #1a1a1a !important;
  --font-mermaid: Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Garamond, Georgia, serif, Arial' !important;
  --font-text: Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Garamond, Georgia, serif !important;
  --footnote-id-color: #3b5e40 !important;
  --footnote-radius: 0px !important;
  --graph-node: #3b5e40 !important;
  --graph-node-focused: hsl(120, 61%, 34%) !important;
  --graph-text: #1a1a1a !important;
  --gray: #3b5e40 !important;
  --headerFont: Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: hsla(120, 61%, 34%, 0.1) !important;
  --icon-color: #3b5e40 !important;
  --icon-color-active: hsl(120, 61%, 34%) !important;
  --icon-color-focused: #1a1a1a !important;
  --icon-color-hover: #3b5e40 !important;
  --input-radius: 0px !important;
  --interactive-accent: hsl(119, 61.61%, 36.55%) !important;
  --interactive-accent-hover: hsl(117, 62.22%, 39.1%) !important;
  --interactive-accent-hsl: 120, 61%, 34% !important;
  --light: #fefdf6 !important;
  --lightgray: #fbfbe0 !important;
  --link-color: hsl(120, 61%, 34%) !important;
  --link-color-hover: hsl(117, 62.22%, 39.1%) !important;
  --link-external-color: hsl(120, 61%, 34%) !important;
  --link-external-color-hover: hsl(117, 62.22%, 39.1%) !important;
  --link-unresolved-color: hsl(120, 61%, 34%) !important;
  --link-unresolved-decoration-color: hsla(120, 61%, 34%, 0.3) !important;
  --list-marker-color-collapsed: hsl(120, 61%, 34%) !important;
  --list-marker-color-hover: #3b5e40 !important;
  --menu-background: #fbfbe0 !important;
  --menu-radius: 0px !important;
  --metadata-input-text-color: #1a1a1a !important;
  --metadata-label-text-color: #3b5e40 !important;
  --metadata-label-text-color-hover: #3b5e40 !important;
  --modal-background: #fefdf6 !important;
  --modal-radius: 0px !important;
  --nav-heading-color: #1a1a1a !important;
  --nav-heading-color-collapsed-hover: #3b5e40 !important;
  --nav-heading-color-hover: #1a1a1a !important;
  --nav-item-background-selected: hsla(120, 61%, 34%, 0.15) !important;
  --nav-item-color: #3b5e40 !important;
  --nav-item-color-active: #1a1a1a !important;
  --nav-item-color-highlighted: hsl(120, 61%, 34%) !important;
  --nav-item-color-hover: #1a1a1a !important;
  --nav-item-color-selected: #1a1a1a !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color-active: #3b5e40 !important;
  --nav-tag-color-hover: #3b5e40 !important;
  --nav-tag-radius: 0px !important;
  --pdf-background: #fefdf6 !important;
  --pdf-page-background: #fefdf6 !important;
  --pdf-sidebar-background: #fefdf6 !important;
  --pill-color: #3b5e40 !important;
  --pill-color-hover: #1a1a1a !important;
  --pill-color-remove-hover: hsl(120, 61%, 34%) !important;
  --prompt-background: #fefdf6 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #fefdf6 65%, transparent) linear-gradient(#fefdf6, color-mix(in srgb, #fefdf6 65%, transparent)) !important;
  --ribbon-background: #fbfbe0 !important;
  --ribbon-background-collapsed: #fefdf6 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #3b5e40 !important;
  --search-icon-color: #3b5e40 !important;
  --search-result-background: #fefdf6 !important;
  --secondary: hsl(120, 61%, 34%) !important;
  --setting-group-heading-color: #1a1a1a !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-background: #fbfbe0 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #3b5e40 !important;
  --suggestion-background: #fefdf6 !important;
  --tab-background-active: #fefdf6 !important;
  --tab-container-background: #fbfbe0 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #fbfbe0 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fbfbe0, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(120, 61%, 34%) !important;
  --tab-text-color-active: #3b5e40 !important;
  --tab-text-color-focused: #3b5e40 !important;
  --tab-text-color-focused-active: #3b5e40 !important;
  --tab-text-color-focused-active-current: #1a1a1a !important;
  --tab-text-color-focused-highlighted: hsl(120, 61%, 34%) !important;
  --table-drag-handle-background-active: hsl(119, 61.61%, 36.55%) !important;
  --table-header-color: #1a1a1a !important;
  --table-selection: hsla(120, 61%, 34%, 0.1) !important;
  --table-selection-border-color: hsl(119, 61.61%, 36.55%) !important;
  --tag-background: hsla(120, 61%, 34%, 0.1) !important;
  --tag-background-hover: hsla(120, 61%, 34%, 0.2) !important;
  --tag-border-color: hsla(120, 61%, 34%, 0.15) !important;
  --tag-border-color-hover: hsla(120, 61%, 34%, 0.15) !important;
  --tag-color: hsl(120, 61%, 34%) !important;
  --tag-color-hover: hsl(120, 61%, 34%) !important;
  --tertiary: hsl(117, 62.22%, 39.1%) !important;
  --text-accent: hsl(120, 61%, 34%) !important;
  --text-accent-hover: hsl(117, 62.22%, 39.1%) !important;
  --text-muted: #3b5e40 !important;
  --text-normal: #1a1a1a !important;
  --text-selection: hsla(120, 61%, 34%, 0.2) !important;
  --textHighlight: hsla(120, 61%, 34%, 0.1) !important;
  --titleFont: Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #fbfbe0 !important;
  --titlebar-background-focused: #fbfbe0 !important;
  --titlebar-text-color: #3b5e40 !important;
  --titlebar-text-color-focused: #1a1a1a !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --vault-profile-color: #1a1a1a !important;
  --vault-profile-color-hover: #1a1a1a !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 251, 224);
  color: rgb(26, 26, 26);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(254, 253, 246);
  color: rgb(26, 26, 26);
}

html body .bases-table thead th {
  color: rgb(26, 26, 26);
}

html body .canvas-node {
  border-color: rgb(26, 26, 26);
}

html body .canvas-node-content {
  color: rgb(26, 26, 26);
}

html body .canvas-node-file {
  color: rgb(26, 26, 26);
}

html body .canvas-node-group {
  border-color: rgb(26, 26, 26);
}

html body .canvas-sidebar {
  background-color: rgb(254, 253, 246);
  border-color: rgb(26, 26, 26);
}

html body .note-properties-key {
  color: rgb(59, 94, 64);
}

html body .note-properties-row {
  border-color: rgb(59, 94, 64);
}

html body .note-properties-tags {
  background-color: rgba(34, 140, 34, 0.1);
  color: rgb(34, 140, 34);
}

html body .note-properties-value {
  color: rgb(59, 94, 64);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 251, 224);
  color: rgb(26, 26, 26);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 251, 224);
  color: rgb(26, 26, 26);
}

html body div#quartz-root {
  background-color: rgb(254, 253, 246);
  color: rgb(26, 26, 26);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body .page article p > em, html em {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body .page article p > i, html i {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body .page article p > strong, html strong {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body .text-highlight {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body del {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body h1.article-title {
  color: rgb(26, 26, 26);
}

html body li.task-list-item input[type="checkbox"] {
  border-radius: 0px;
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(38, 151, 36);
  border-color: rgb(38, 151, 36);
}

html body p {
  color: rgb(59, 94, 64);
  outline: rgb(59, 94, 64) none 0px;
  text-decoration-color: rgb(59, 94, 64);
}`,
    links: `html body a.external, html footer a {
  color: rgb(34, 140, 34);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 140, 34) none 0px;
  text-decoration-color: rgb(34, 140, 34);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 140, 34);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 140, 34) none 0px;
  text-decoration-color: rgb(34, 140, 34);
}

html body a.internal.broken {
  color: rgb(34, 140, 34);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 140, 34) none 0px;
  text-decoration: underline rgba(34, 140, 34, 0.3);
  text-decoration-color: rgba(34, 140, 34, 0.3);
}`,
    lists: `html body dd {
  color: rgb(26, 26, 26);
}

html body dt {
  color: rgb(26, 26, 26);
}

html body ol > li {
  color: rgb(26, 26, 26);
}

html body ol.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body ul > li {
  color: rgb(26, 26, 26);
}

html body ul.overflow {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body table {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.766px;
}

html body td {
  color: rgb(26, 26, 26);
}

html body th {
  color: rgb(26, 26, 26);
}`,
    code: `html body code {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

html body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

html body pre > code, html pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body figcaption {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `html body .file-embed {
  border-bottom-color: rgb(59, 94, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(38, 151, 36);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

html body .search > .search-container > .search-space {
  background-color: rgb(254, 253, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration-color: rgb(26, 26, 26);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 251, 224);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 140, 34, 0.1);
  border-bottom-color: rgba(34, 140, 34, 0.15);
  border-left-color: rgba(34, 140, 34, 0.15);
  border-right-color: rgba(34, 140, 34, 0.15);
  border-top-color: rgba(34, 140, 34, 0.15);
}

html body a.internal.tag-link::before {
  color: rgb(34, 140, 34);
}

html body h1 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body .callout {
  --callout-color: 8, 109, 221;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html body ::-webkit-scrollbar {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

html body ::-webkit-scrollbar-track {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 94, 64);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 94, 64);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(26, 26, 26);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(59, 94, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(59, 94, 64);
}`,
    footer: `html body footer {
  background-color: rgb(251, 251, 224);
  border-top-left-radius: 0px;
  color: rgb(59, 94, 64);
}

html body footer ul li a {
  color: rgb(59, 94, 64);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 94, 64);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 94, 64);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body li.section-li > .section .meta {
  color: rgb(59, 94, 64);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 94, 64);
}

html body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(59, 94, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(59, 94, 64);
}

html body .darkmode svg {
  color: rgb(59, 94, 64);
  stroke: rgb(59, 94, 64);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(59, 94, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(59, 94, 64);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

html body .metadata {
  color: rgb(59, 94, 64);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(59, 94, 64);
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  color: rgb(59, 94, 64);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(251, 251, 224);
}

html body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

html body abbr {
  color: rgb(26, 26, 26);
}

html body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body input[type=text] {
  border-bottom-color: rgb(59, 94, 64);
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  color: rgb(59, 94, 64);
}

html body kbd {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

html body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

html body sub {
  color: rgb(26, 26, 26);
}

html body summary {
  color: rgb(26, 26, 26);
}

html body sup {
  color: rgb(26, 26, 26);
}

html body ul.tags > li {
  background-color: rgba(34, 140, 34, 0.1);
  border-bottom-color: rgba(34, 140, 34, 0.15);
  border-left-color: rgba(34, 140, 34, 0.15);
  border-right-color: rgba(34, 140, 34, 0.15);
  border-top-color: rgba(34, 140, 34, 0.15);
  color: rgb(34, 140, 34);
}`,
  },
};
