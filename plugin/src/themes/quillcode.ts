import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "quillcode",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #121212 !important;
  --background-secondary: #1a1a1a !important;
  --background-tertiary: #232323 !important;
  --bases-cards-background: #121212 !important;
  --bases-group-heading-property-color: #bfb8ae !important;
  --bases-table-cell-background-active: #121212 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0077cc !important;
  --bases-table-header-background: #121212 !important;
  --bases-table-header-color: #bfb8ae !important;
  --bases-table-summary-background: #121212 !important;
  --blockquote-border-color: #7fd4ff !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, #3a3e4e 65%, transparent) linear-gradient(#3a3e4e, color-mix(in srgb, #3a3e4e 65%, transparent)) !important;
  --bodyFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #7fd4ff !important;
  --bold-modifier: 1000 !important;
  --bold-weight: 1400 !important;
  --button-radius: 10px !important;
  --callout-title-weight: 1400;
  --canvas-background: #121212 !important;
  --caret-color: #e8e4da !important;
  --checkbox-border-color: #0077cc !important;
  --checkbox-border-color-hover: #3399ff !important;
  --checkbox-color: #7fd4ff !important;
  --checkbox-color-hover: #1f93ff !important;
  --checkbox-marker-color: #121212 !important;
  --checkbox-size: 17px !important;
  --checklist-done-color: #bfb8ae !important;
  --code-background: #2e2e3e !important;
  --code-comment: #a8a8b8 !important;
  --code-function: #7fd4d4 !important;
  --code-important: #7fd4ff !important;
  --code-keyword: #d4a8ff !important;
  --code-normal: #f0e8d8 !important;
  --code-number: #c8e8a8 !important;
  --code-operator: #d4a8ff !important;
  --code-property: #7fd4a8 !important;
  --code-punctuation: #a8b4ff !important;
  --code-string: #7fd4a8 !important;
  --code-tag: #7fd4ff !important;
  --code-value: #c8e8a8 !important;
  --codeFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #7fd4ff !important;
  --dark: #e8e4da !important;
  --darkgray: #e8e4da !important;
  --divider-color-hover: #0077cc !important;
  --dropdown-background: #3a3e4e !important;
  --dropdown-background-hover: #4a4f5f !important;
  --embed-border-start: 2px solid #0077cc !important;
  --file-header-background: #121212 !important;
  --file-header-background-focused: #121212 !important;
  --file-header-font: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #3a3e4e !important;
  --flair-color: #e8e4da !important;
  --font-interface: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: JetBrainsMono, monospace !important;
  --font-mermaid: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono-theme: JetBrainsMono, monospace !important;
  --font-print: JetBrainsMono, monospace, Arial' !important;
  --font-text: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: JetBrainsMono, monospace !important;
  --footnote-id-color: #bfb8ae !important;
  --graph-node: #bfb8ae !important;
  --graph-node-focused: #7fd4ff !important;
  --graph-text: #e8e4da !important;
  --gray: #bfb8ae !important;
  --h1-color: #7fd4ff !important;
  --h1-size: 1.7rem !important;
  --h2-color: #7fd4a8 !important;
  --h2-size: 1.5rem !important;
  --h3-color: #a8b4ff !important;
  --h3-size: 1.2rem !important;
  --h4-size: 1.1rem !important;
  --h5-size: 1rem !important;
  --h6-size: 0.9rem !important;
  --headerFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-bg: #2e2e3e !important;
  --highlight-matched-text: #d4a8ff !important;
  --hr-color: #4c505e !important;
  --icon-color: #bfb8ae !important;
  --icon-color-active: #7fd4ff !important;
  --icon-color-focused: #e8e4da !important;
  --icon-color-hover: #bfb8ae !important;
  --inline-title-color: #7fd4ff !important;
  --inline-title-size: 2rem !important;
  --interactive-accent: #0077cc !important;
  --interactive-accent-hover: #3399ff !important;
  --interactive-hover: #4a4f5f !important;
  --interactive-normal: #3a3e4e !important;
  --light: #121212 !important;
  --lightgray: #1a1a1a !important;
  --link-color: #7fd4ff !important;
  --link-color-hover: #3399ff !important;
  --link-external-color: #7fd4ff !important;
  --link-external-color-hover: #3399ff !important;
  --link-unresolved-color: #7fd4ff !important;
  --list-marker-color-collapsed: #7fd4ff !important;
  --list-marker-color-hover: #bfb8ae !important;
  --menu-background: #1a1a1a !important;
  --metadata-input-font: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #e8e4da !important;
  --metadata-label-font: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #bfb8ae !important;
  --metadata-label-text-color-hover: #bfb8ae !important;
  --modal-background: #121212 !important;
  --nav-heading-color: #e8e4da !important;
  --nav-heading-color-collapsed-hover: #bfb8ae !important;
  --nav-heading-color-hover: #e8e4da !important;
  --nav-item-color: #bfb8ae !important;
  --nav-item-color-active: #e8e4da !important;
  --nav-item-color-highlighted: #7fd4ff !important;
  --nav-item-color-hover: #e8e4da !important;
  --nav-item-color-selected: #e8e4da !important;
  --nav-tag-color-active: #bfb8ae !important;
  --nav-tag-color-hover: #bfb8ae !important;
  --pdf-background: #121212 !important;
  --pdf-page-background: #121212 !important;
  --pdf-sidebar-background: #121212 !important;
  --pill-color: #bfb8ae !important;
  --pill-color-hover: #e8e4da !important;
  --pill-color-remove-hover: #7fd4ff !important;
  --prompt-background: #121212 !important;
  --raised-background: color-mix(in srgb, #3a3e4e 65%, transparent) linear-gradient(#3a3e4e, color-mix(in srgb, #3a3e4e 65%, transparent)) !important;
  --ribbon-background: #1a1a1a !important;
  --ribbon-background-collapsed: #121212 !important;
  --search-clear-button-color: #bfb8ae !important;
  --search-icon-color: #bfb8ae !important;
  --search-result-background: #121212 !important;
  --secondary: #7fd4ff !important;
  --setting-group-heading-color: #e8e4da !important;
  --status-bar-background: #1a1a1a !important;
  --status-bar-text-color: #bfb8ae !important;
  --suggestion-background: #121212 !important;
  --tab-background-active: #121212 !important;
  --tab-container-background: #1a1a1a !important;
  --tab-curve: 10px !important;
  --tab-radius: 10px !important;
  --tab-radius-active: 10px !important;
  --tab-switcher-background: #1a1a1a !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent) !important;
  --tab-text-color-active: #bfb8ae !important;
  --tab-text-color-focused: #bfb8ae !important;
  --tab-text-color-focused-active: #bfb8ae !important;
  --tab-text-color-focused-active-current: #e8e4da !important;
  --tab-text-color-focused-highlighted: #7fd4ff !important;
  --table-drag-handle-background-active: #0077cc !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-color: #e8e4da !important;
  --table-header-weight: 1400 !important;
  --table-selection-border-color: #0077cc !important;
  --tag-background: #7fd4ff !important;
  --tag-background-hover: #1f93ff !important;
  --tag-border-color: #0b0b0c !important;
  --tag-border-color-hover: #3399ff !important;
  --tag-color: #121212 !important;
  --tag-color-hover: #121212 !important;
  --tertiary: #3399ff !important;
  --text-accent: #7fd4ff !important;
  --text-accent-hover: #3399ff !important;
  --text-muted: #bfb8ae !important;
  --text-normal: #e8e4da !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #4a5a6a !important;
  --titleFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #1a1a1a !important;
  --titlebar-text-color: #bfb8ae !important;
  --titlebar-text-color-focused: #e8e4da !important;
  --vault-profile-color: #e8e4da !important;
  --vault-profile-color-hover: #e8e4da !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(18, 18, 18);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(232, 228, 218);
  font-weight: 1000;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(26, 26, 26);
  border-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgb(127, 212, 255);
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(18, 18, 18);
  color: rgb(232, 228, 218);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration-color: rgb(127, 212, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration-color: rgb(127, 212, 255);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body del {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 119, 204);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(127, 212, 255);
  border-color: rgb(127, 212, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 184, 174) none 0px;
  text-decoration-color: rgb(191, 184, 174);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration-color: rgb(127, 212, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration-color: rgb(127, 212, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 212, 255) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body dt {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body table {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 223.484px;
}

html[saved-theme="dark"] body td {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body th {
  color: rgb(232, 228, 218);
  font-weight: 1000;
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 46, 62);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 46, 62);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(127, 212, 212);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(127, 212, 212);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(127, 212, 212);
  border-left-color: rgb(127, 212, 212);
  border-right-color: rgb(127, 212, 212);
  border-top-color: rgb(127, 212, 212);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(46, 46, 62);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(46, 46, 62);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(127, 212, 255);
  border-left-color: rgb(127, 212, 255);
  border-right-color: rgb(127, 212, 255);
  border-top-color: rgb(127, 212, 255);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  margin-left: -25.5px;
  width: 17px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 1000;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(127, 212, 255);
  border-bottom-color: rgb(11, 11, 12);
  border-left-color: rgb(11, 11, 12);
  border-right-color: rgb(11, 11, 12);
  border-top-color: rgb(11, 11, 12);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body h1 {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(127, 212, 168);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(168, 180, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(232, 228, 218);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(191, 184, 174);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(191, 184, 174);
  stroke: rgb(191, 184, 174);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(46, 46, 62);
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body sub {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body summary {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body sup {
  color: rgb(232, 228, 218);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(127, 212, 255);
  border-bottom-color: rgb(11, 11, 12);
  border-left-color: rgb(11, 11, 12);
  border-right-color: rgb(11, 11, 12);
  border-top-color: rgb(11, 11, 12);
  color: rgb(18, 18, 18);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #faf9f5 !important;
  --background-secondary: #ebe8e2 !important;
  --background-tertiary: #e5decf !important;
  --bases-cards-background: #faf9f5 !important;
  --bases-group-heading-property-color: #6c6c6c !important;
  --bases-table-cell-background-active: #faf9f5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0077cc !important;
  --bases-table-header-background: #faf9f5 !important;
  --bases-table-header-color: #6c6c6c !important;
  --bases-table-summary-background: #faf9f5 !important;
  --blockquote-border-color: #0077cc !important;
  --blockquote-border-thickness: 3px !important;
  --blur-background: color-mix(in srgb, #faf9f5 65%, transparent) linear-gradient(#faf9f5, color-mix(in srgb, #faf9f5 65%, transparent)) !important;
  --bodyFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #0077cc !important;
  --bold-modifier: 1000 !important;
  --bold-weight: 1400 !important;
  --button-radius: 10px !important;
  --callout-title-weight: 1400;
  --canvas-background: #faf9f5 !important;
  --caret-color: #2e2e2e !important;
  --checkbox-border-color: #0077cc !important;
  --checkbox-border-color-hover: #3399ff !important;
  --checkbox-color: #0077cc !important;
  --checkbox-color-hover: #00b7ff !important;
  --checkbox-size: 17px !important;
  --checklist-done-color: #6c6c6c !important;
  --code-background: #2e2e3e !important;
  --code-comment: #a8a8b8 !important;
  --code-function: #7fd4d4 !important;
  --code-important: #0077cc !important;
  --code-keyword: #d4a8ff !important;
  --code-normal: #f0e8d8 !important;
  --code-number: #c8e8a8 !important;
  --code-operator: #d4a8ff !important;
  --code-property: #7fd4a8 !important;
  --code-punctuation: #a8b4ff !important;
  --code-string: #7fd4a8 !important;
  --code-tag: #7fd4ff !important;
  --code-value: #c8e8a8 !important;
  --codeFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #0077cc !important;
  --dark: #2e2e2e !important;
  --darkgray: #2e2e2e !important;
  --divider-color-hover: #0077cc !important;
  --dropdown-background: #e5dac4 !important;
  --dropdown-background-hover: #ddd2bc !important;
  --embed-border-start: 2px solid #0077cc !important;
  --file-header-background: #faf9f5 !important;
  --file-header-background-focused: #faf9f5 !important;
  --file-header-font: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #e5dac4 !important;
  --flair-color: #2e2e2e !important;
  --font-interface: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: JetBrainsMono, monospace !important;
  --font-mermaid: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono-theme: JetBrainsMono, monospace !important;
  --font-print: JetBrainsMono, monospace, Arial' !important;
  --font-text: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: JetBrainsMono, monospace !important;
  --footnote-id-color: #6c6c6c !important;
  --graph-node: #6c6c6c !important;
  --graph-node-focused: #0077cc !important;
  --graph-text: #2e2e2e !important;
  --gray: #6c6c6c !important;
  --h1-color: #0077cc !important;
  --h1-size: 1.7rem !important;
  --h2-color: #59b384 !important;
  --h2-size: 1.5rem !important;
  --h3-color: #8191ff !important;
  --h3-size: 1.2rem !important;
  --h4-size: 1.1rem !important;
  --h5-size: 1rem !important;
  --h6-size: 0.9rem !important;
  --headerFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --hr-color: #4c505e !important;
  --icon-color: #6c6c6c !important;
  --icon-color-active: #0077cc !important;
  --icon-color-focused: #2e2e2e !important;
  --icon-color-hover: #6c6c6c !important;
  --inline-title-color: #0077cc !important;
  --inline-title-size: 2rem !important;
  --interactive-accent: #0077cc !important;
  --interactive-accent-hover: #3399ff !important;
  --interactive-hover: #ddd2bc !important;
  --interactive-normal: #e5dac4 !important;
  --light: #faf9f5 !important;
  --lightgray: #ebe8e2 !important;
  --link-color: #0077cc !important;
  --link-color-hover: #3399ff !important;
  --link-external-color: #0077cc !important;
  --link-external-color-hover: #3399ff !important;
  --link-unresolved-color: #0077cc !important;
  --list-marker-color-collapsed: #0077cc !important;
  --list-marker-color-hover: #6c6c6c !important;
  --menu-background: #ebe8e2 !important;
  --metadata-input-font: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #2e2e2e !important;
  --metadata-label-font: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #6c6c6c !important;
  --metadata-label-text-color-hover: #6c6c6c !important;
  --modal-background: #faf9f5 !important;
  --nav-heading-color: #2e2e2e !important;
  --nav-heading-color-collapsed-hover: #6c6c6c !important;
  --nav-heading-color-hover: #2e2e2e !important;
  --nav-item-color: #6c6c6c !important;
  --nav-item-color-active: #2e2e2e !important;
  --nav-item-color-highlighted: #0077cc !important;
  --nav-item-color-hover: #2e2e2e !important;
  --nav-item-color-selected: #2e2e2e !important;
  --nav-tag-color-active: #6c6c6c !important;
  --nav-tag-color-hover: #6c6c6c !important;
  --pdf-background: #faf9f5 !important;
  --pdf-page-background: #faf9f5 !important;
  --pdf-sidebar-background: #faf9f5 !important;
  --pill-color: #6c6c6c !important;
  --pill-color-hover: #2e2e2e !important;
  --pill-color-remove-hover: #0077cc !important;
  --prompt-background: #faf9f5 !important;
  --raised-background: color-mix(in srgb, #faf9f5 65%, transparent) linear-gradient(#faf9f5, color-mix(in srgb, #faf9f5 65%, transparent)) !important;
  --ribbon-background: #ebe8e2 !important;
  --ribbon-background-collapsed: #faf9f5 !important;
  --search-clear-button-color: #6c6c6c !important;
  --search-icon-color: #6c6c6c !important;
  --search-result-background: #faf9f5 !important;
  --secondary: #0077cc !important;
  --setting-group-heading-color: #2e2e2e !important;
  --status-bar-background: #ebe8e2 !important;
  --status-bar-text-color: #6c6c6c !important;
  --suggestion-background: #faf9f5 !important;
  --tab-background-active: #faf9f5 !important;
  --tab-container-background: #ebe8e2 !important;
  --tab-curve: 10px !important;
  --tab-radius: 10px !important;
  --tab-radius-active: 10px !important;
  --tab-switcher-background: #ebe8e2 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #ebe8e2, transparent) !important;
  --tab-text-color-active: #6c6c6c !important;
  --tab-text-color-focused: #6c6c6c !important;
  --tab-text-color-focused-active: #6c6c6c !important;
  --tab-text-color-focused-active-current: #2e2e2e !important;
  --tab-text-color-focused-highlighted: #0077cc !important;
  --table-drag-handle-background-active: #0077cc !important;
  --table-drag-handle-color-active: #ffffff !important;
  --table-header-color: #2e2e2e !important;
  --table-header-weight: 1400 !important;
  --table-selection-border-color: #0077cc !important;
  --tag-background: #0077cc !important;
  --tag-background-hover: #00b7ff !important;
  --tag-border-color: #0077cc !important;
  --tag-border-color-hover: #3399ff !important;
  --tag-color: #ffffff !important;
  --tag-color-hover: #ffffff !important;
  --tertiary: #3399ff !important;
  --text-accent: #0077cc !important;
  --text-accent-hover: #3399ff !important;
  --text-muted: #6c6c6c !important;
  --text-normal: #2e2e2e !important;
  --text-on-accent: #ffffff !important;
  --text-selection: #e6d9c2 !important;
  --titleFont: JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #ebe8e2 !important;
  --titlebar-text-color: #6c6c6c !important;
  --titlebar-text-color-focused: #2e2e2e !important;
  --vault-profile-color: #2e2e2e !important;
  --vault-profile-color-hover: #2e2e2e !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 232, 226);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(250, 249, 245);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(46, 46, 46);
  font-weight: 1000;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(250, 249, 245);
  border-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(0, 119, 204);
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 232, 226);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 232, 226);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(250, 249, 245);
  color: rgb(46, 46, 46);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body del {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(0, 119, 204);
  border-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body p {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(108, 108, 108) none 0px;
  text-decoration-color: rgb(108, 108, 108);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 204) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body dt {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body ol > li {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body ul > li {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body table {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 223.484px;
}

html[saved-theme="light"] body td {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body th {
  color: rgb(46, 46, 46);
  font-weight: 1000;
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 46, 62);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 46, 62);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(127, 212, 212);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(127, 212, 212);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(127, 212, 212);
  border-left-color: rgb(127, 212, 212);
  border-right-color: rgb(127, 212, 212);
  border-top-color: rgb(127, 212, 212);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(46, 46, 62);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(46, 46, 62);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body figcaption {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  margin-left: -25.5px;
  width: 17px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  font-weight: 1000;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
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
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(250, 249, 245);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 232, 226);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(0, 119, 204);
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(89, 179, 132);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(129, 145, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(46, 46, 46);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(235, 232, 226);
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(108, 108, 108);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 108, 108);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(108, 108, 108);
  stroke: rgb(108, 108, 108);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body .metadata {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(235, 232, 226);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(46, 46, 62);
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

html[saved-theme="light"] body sub {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body summary {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body sup {
  color: rgb(46, 46, 46);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(0, 119, 204);
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  color: rgb(255, 255, 255);
}`,
  },
};
