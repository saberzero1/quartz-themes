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
  --accent-h: 120;
  --accent-l: 34%;
  --accent-s: 61%;
  --background-modifier-active-hover: rgba(34, 140, 34, 0.1);
  --background-primary: #fefdf6;
  --background-secondary: #fbfbe0;
  --bases-cards-background: #fefdf6;
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #3b5e40;
  --bases-table-cell-background-active: #fefdf6;
  --bases-table-cell-background-selected: rgba(34, 140, 34, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(38, 153, 36);
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #fefdf6;
  --bases-table-header-color: #3b5e40;
  --bases-table-summary-background: #fefdf6;
  --blockquote-border-color: rgb(38, 153, 36);
  --blur-background: color-mix(in srgb, #fefdf6 65%, transparent) linear-gradient(#fefdf6, color-mix(in srgb, #fefdf6 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-background: #fefdf6;
  --canvas-controls-radius: 0px;
  --caret-color: #1a1a1a;
  --checkbox-border-color-hover: #3b5e40;
  --checkbox-color: rgb(38, 153, 36);
  --checkbox-color-hover: rgb(44, 161, 38);
  --checkbox-marker-color: #fefdf6;
  --checkbox-radius: 0px;
  --checklist-done-color: #3b5e40;
  --clickable-icon-radius: 0px;
  --code-normal: #1a1a1a;
  --code-punctuation: #3b5e40;
  --code-radius: 0px;
  --codeFont: var(--font-text);
  --collapse-icon-color-collapsed: rgb(34, 140, 34);
  --color-accent: rgb(34, 140, 34);
  --color-accent-1: rgb(38, 153, 36);
  --color-accent-2: rgb(44, 161, 38);
  --color-accent-hsl: 120, 61%, 34%;
  --color-base-100: #1a1a1a;
  --color-base-70: #3b5e40;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color-hover: rgb(38, 153, 36);
  --embed-border-start: 2px solid rgb(38, 153, 36);
  --file-header-background: #fefdf6;
  --file-header-background-focused: #fefdf6;
  --flair-color: #1a1a1a;
  --font-mermaid: '??', Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', Garamond, Georgia, serif, 'Arial';
  --font-text: '??', Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Garamond, Georgia, serif;
  --footnote-id-color: #3b5e40;
  --footnote-radius: 0px;
  --graph-node: #3b5e40;
  --graph-node-focused: rgb(34, 140, 34);
  --graph-text: #1a1a1a;
  --gray: var(--text-muted);
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color: #3b5e40;
  --icon-color-active: rgb(34, 140, 34);
  --icon-color-focused: #1a1a1a;
  --icon-color-hover: #3b5e40;
  --input-radius: 0px;
  --interactive-accent: rgb(38, 153, 36);
  --interactive-accent-hover: rgb(44, 161, 38);
  --interactive-accent-hsl: 120, 61%, 34%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(34, 140, 34);
  --link-color-hover: rgb(44, 161, 38);
  --link-external-color: rgb(34, 140, 34);
  --link-external-color-hover: rgb(44, 161, 38);
  --link-unresolved-color: rgb(34, 140, 34);
  --link-unresolved-decoration-color: rgba(34, 140, 34, 0.3);
  --list-marker-color-collapsed: rgb(34, 140, 34);
  --list-marker-color-hover: #3b5e40;
  --menu-background: #fbfbe0;
  --menu-radius: 0px;
  --metadata-input-text-color: #1a1a1a;
  --metadata-label-text-color: #3b5e40;
  --metadata-label-text-color-hover: #3b5e40;
  --modal-background: #fefdf6;
  --modal-radius: 0px;
  --nav-heading-color: #1a1a1a;
  --nav-heading-color-collapsed-hover: #3b5e40;
  --nav-heading-color-hover: #1a1a1a;
  --nav-item-background-selected: rgba(34, 140, 34, 0.15);
  --nav-item-color: #3b5e40;
  --nav-item-color-active: #1a1a1a;
  --nav-item-color-highlighted: rgb(34, 140, 34);
  --nav-item-color-hover: #1a1a1a;
  --nav-item-color-selected: #1a1a1a;
  --nav-item-radius: 0px;
  --nav-tag-color-active: #3b5e40;
  --nav-tag-color-hover: #3b5e40;
  --nav-tag-radius: 0px;
  --pdf-background: #fefdf6;
  --pdf-page-background: #fefdf6;
  --pdf-sidebar-background: #fefdf6;
  --pill-color: #3b5e40;
  --pill-color-hover: #1a1a1a;
  --pill-color-remove-hover: rgb(34, 140, 34);
  --prompt-background: #fefdf6;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #fefdf6 65%, transparent) linear-gradient(#fefdf6, color-mix(in srgb, #fefdf6 65%, transparent));
  --ribbon-background: #fbfbe0;
  --ribbon-background-collapsed: #fefdf6;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #3b5e40;
  --search-icon-color: #3b5e40;
  --search-result-background: #fefdf6;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #1a1a1a;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-background: #fbfbe0;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #3b5e40;
  --suggestion-background: #fefdf6;
  --tab-background-active: #fefdf6;
  --tab-container-background: #fbfbe0;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #fbfbe0;
  --tab-switcher-menubar-background: linear-gradient(to top, #fbfbe0, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(34, 140, 34);
  --tab-text-color-active: #3b5e40;
  --tab-text-color-focused: #3b5e40;
  --tab-text-color-focused-active: #3b5e40;
  --tab-text-color-focused-active-current: #1a1a1a;
  --tab-text-color-focused-highlighted: rgb(34, 140, 34);
  --table-drag-handle-background-active: rgb(38, 153, 36);
  --table-header-color: #1a1a1a;
  --table-selection: rgba(34, 140, 34, 0.1);
  --table-selection-border-color: rgb(38, 153, 36);
  --tag-background: rgba(34, 140, 34, 0.1);
  --tag-background-hover: rgba(34, 140, 34, 0.2);
  --tag-border-color: rgba(34, 140, 34, 0.15);
  --tag-border-color-hover: rgba(34, 140, 34, 0.15);
  --tag-color: rgb(34, 140, 34);
  --tag-color-hover: rgb(34, 140, 34);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(34, 140, 34);
  --text-accent-hover: rgb(44, 161, 38);
  --text-muted: #3b5e40;
  --text-normal: #1a1a1a;
  --text-selection: rgba(34, 140, 34, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #fbfbe0;
  --titlebar-background-focused: #fbfbe0;
  --titlebar-text-color: #3b5e40;
  --titlebar-text-color-focused: #1a1a1a;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --vault-profile-color: #1a1a1a;
  --vault-profile-color-hover: #1a1a1a;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(251, 251, 224);
  color: rgb(26, 26, 26);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(254, 253, 246);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(251, 251, 224);
  color: rgb(26, 26, 26);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(251, 251, 224);
  color: rgb(26, 26, 26);
}

body div#quartz-root {
  background-color: rgb(254, 253, 246);
  color: rgb(26, 26, 26);
}`,
    typography: `body .page article p > b, b {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > em, em {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > i, i {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .page article p > strong, strong {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .text-highlight {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body del {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: line-through rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body p {
  color: rgb(59, 94, 64);
  outline: rgb(59, 94, 64) none 0px;
  text-decoration: rgb(59, 94, 64);
  text-decoration-color: rgb(59, 94, 64);
}`,
    links: `body a.external, footer a {
  color: rgb(34, 140, 34);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 140, 34) none 0px;
  text-decoration: underline rgb(34, 140, 34);
  text-decoration-color: rgb(34, 140, 34);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(34, 140, 34);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 140, 34) none 0px;
  text-decoration: underline rgb(34, 140, 34);
  text-decoration-color: rgb(34, 140, 34);
}

body a.internal.broken {
  color: rgb(34, 140, 34);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(34, 140, 34) none 0px;
  text-decoration: underline rgba(34, 140, 34, 0.3);
  text-decoration-color: rgba(34, 140, 34, 0.3);
}`,
    lists: `body dd {
  color: rgb(26, 26, 26);
}

body dt {
  color: rgb(26, 26, 26);
}

body ol > li {
  color: rgb(26, 26, 26);
}

body ol.overflow {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ul > li {
  color: rgb(26, 26, 26);
}

body ul.overflow {
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body table {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.766px;
}

body td {
  color: rgb(26, 26, 26);
}

body th {
  color: rgb(26, 26, 26);
}`,
    code: `body code {
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

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body figcaption {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body img {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body video {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(59, 94, 64);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .transclude {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(38, 151, 36);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .transclude-inner {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(38, 151, 36);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(59, 94, 64);
  text-decoration: line-through rgb(59, 94, 64);
  text-decoration-color: rgb(59, 94, 64);
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='*'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='-'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='/'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='>'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='?'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='I'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='S'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='b'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='c'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='d'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='f'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='i'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='k'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='l'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='p'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='u'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body li.task-list-item[data-task='w'] {
  color: rgb(26, 26, 26);
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space {
  background-color: rgb(254, 253, 246);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(26, 26, 26) none 0px;
  text-decoration: rgb(26, 26, 26);
  text-decoration-color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(26, 26, 26);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(251, 251, 224);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
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

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(34, 140, 34, 0.1);
  border-bottom-color: rgba(34, 140, 34, 0.15);
  border-left-color: rgba(34, 140, 34, 0.15);
  border-right-color: rgba(34, 140, 34, 0.15);
  border-top-color: rgba(34, 140, 34, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(34, 140, 34);
}

body h1 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(26, 26, 26);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

body ::-webkit-scrollbar-corner {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}

body ::-webkit-scrollbar-track {
  background: rgb(254, 253, 246) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(254, 253, 246);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(59, 94, 64);
  text-decoration: rgb(59, 94, 64);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(59, 94, 64);
  text-decoration: rgb(59, 94, 64);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(59, 94, 64);
  text-decoration: rgb(59, 94, 64);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(26, 26, 26);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(26, 26, 26);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
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
    footer: `body footer {
  background-color: rgb(251, 251, 224);
  border-top-left-radius: 0px;
  color: rgb(59, 94, 64);
}

body footer ul li a {
  color: rgb(59, 94, 64);
  text-decoration: rgb(59, 94, 64);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(59, 94, 64);
  text-decoration: rgb(59, 94, 64);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(59, 94, 64);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body li.section-li > .section .meta {
  color: rgb(59, 94, 64);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(59, 94, 64);
  text-decoration: rgb(59, 94, 64);
}

body ul.section-ul {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}`,
    darkmode: `body .darkmode {
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

body .darkmode svg {
  color: rgb(59, 94, 64);
  stroke: rgb(59, 94, 64);
}`,
    breadcrumbs: `body .breadcrumb-container {
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
    misc: `body .katex-display {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
  color: rgb(26, 26, 26);
}

body .metadata {
  color: rgb(59, 94, 64);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(59, 94, 64);
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  color: rgb(59, 94, 64);
  font-family: "??", Garamond, Georgia, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(251, 251, 224);
}

body .page-header h2.page-title {
  color: rgb(26, 26, 26);
}

body abbr {
  color: rgb(26, 26, 26);
  text-decoration: underline dotted rgb(26, 26, 26);
}

body details {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body input[type=text] {
  border-bottom-color: rgb(59, 94, 64);
  border-left-color: rgb(59, 94, 64);
  border-right-color: rgb(59, 94, 64);
  border-top-color: rgb(59, 94, 64);
  color: rgb(59, 94, 64);
}

body kbd {
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

body progress {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(26, 26, 26);
  border-right-color: rgb(26, 26, 26);
  border-top-color: rgb(26, 26, 26);
}

body sub {
  color: rgb(26, 26, 26);
}

body summary {
  color: rgb(26, 26, 26);
}

body sup {
  color: rgb(26, 26, 26);
}`,
  },
};
