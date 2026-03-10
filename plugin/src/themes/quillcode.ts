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
  --bodyFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #7fd4ff !important;
  --dark: #e8e4da !important;
  --darkgray: #e8e4da !important;
  --divider-color-hover: #0077cc !important;
  --dropdown-background: #3a3e4e !important;
  --dropdown-background-hover: #4a4f5f !important;
  --embed-border-start: 2px solid #0077cc !important;
  --file-header-background: #121212 !important;
  --file-header-background-focused: #121212 !important;
  --file-header-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #3a3e4e !important;
  --flair-color: #e8e4da !important;
  --font-interface: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: JetBrainsMono, monospace !important;
  --font-mermaid: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono-theme: JetBrainsMono, monospace !important;
  --font-print: '??', '??', JetBrainsMono, monospace, 'Arial' !important;
  --font-text: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #e8e4da !important;
  --metadata-label-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 228, 218);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(18, 18, 18);
  color: rgb(232, 228, 218);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 228, 218);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(26, 26, 26);
  color: rgb(232, 228, 218);
}

body div#quartz-root {
  background-color: rgb(18, 18, 18);
  color: rgb(232, 228, 218);
}`,
    typography: `body .page article p > b, b {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration: rgb(127, 212, 255);
  text-decoration-color: rgb(127, 212, 255);
}

body .page article p > em, em {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body .page article p > i, i {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body .page article p > strong, strong {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration: rgb(127, 212, 255);
  text-decoration-color: rgb(127, 212, 255);
}

body .text-highlight {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body del {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration: line-through rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body p {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(191, 184, 174) none 0px;
  text-decoration: rgb(191, 184, 174);
  text-decoration-color: rgb(191, 184, 174);
}`,
    links: `body a.external, footer a {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration: underline rgb(127, 212, 255);
  text-decoration-color: rgb(127, 212, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 212, 255) none 0px;
  text-decoration: underline rgb(127, 212, 255);
  text-decoration-color: rgb(127, 212, 255);
}

body a.internal.broken {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(127, 212, 255) none 0px;
}`,
    lists: `body dd {
  color: rgb(232, 228, 218);
}

body dt {
  color: rgb(232, 228, 218);
}

body ol > li {
  color: rgb(232, 228, 218);
}

body ol.overflow {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body ul > li {
  color: rgb(232, 228, 218);
}

body ul.overflow {
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    blockquotes: `body blockquote {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body table {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 223.484px;
}

body td {
  color: rgb(232, 228, 218);
}

body th {
  color: rgb(232, 228, 218);
  font-weight: 1000;
}`,
    code: `body code {
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 46, 62);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 46, 62);
  color: rgb(232, 228, 218);
}

body pre > code > [data-line] {
  border-left-color: rgb(127, 212, 212);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(127, 212, 212);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(127, 212, 212);
  border-left-color: rgb(127, 212, 212);
  border-right-color: rgb(127, 212, 212);
  border-top-color: rgb(127, 212, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(46, 46, 62);
}

body pre:has(> code) {
  background-color: rgb(46, 46, 62);
}`,
    images: `body audio {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body figcaption {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body img {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body video {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
}

body .footnotes {
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

body .transclude {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body .transclude-inner {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(191, 184, 174);
  text-decoration: line-through rgb(191, 184, 174);
  text-decoration-color: rgb(191, 184, 174);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  margin-left: -25.5px;
  width: 17px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='*'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='-'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='/'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='>'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='?'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='I'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='S'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='b'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='c'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='d'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='f'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='i'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='k'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='l'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='p'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='u'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body li.task-list-item[data-task='w'] {
  color: rgb(232, 228, 218);
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 1000;
}`,
    search: `body .search > .search-button {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(18, 18, 18);
}

body .search > .search-container > .search-space > * {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 228, 218) none 0px;
  text-decoration: rgb(232, 228, 218);
  text-decoration-color: rgb(232, 228, 218);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(232, 228, 218);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(232, 228, 218);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 228, 218);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(26, 26, 26);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(232, 228, 218);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(127, 212, 255);
  border-bottom-color: rgb(11, 11, 12);
  border-left-color: rgb(11, 11, 12);
  border-right-color: rgb(11, 11, 12);
  border-top-color: rgb(11, 11, 12);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(18, 18, 18);
}

body h1 {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(127, 212, 168);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(127, 212, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(168, 180, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

body ::-webkit-scrollbar-corner {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}

body ::-webkit-scrollbar-track {
  background: rgb(18, 18, 18) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 18, 18);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(191, 184, 174);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(191, 184, 174);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(191, 184, 174);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
}`,
    footer: `body footer {
  background-color: rgb(26, 26, 26);
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(191, 184, 174);
  text-decoration: rgb(191, 184, 174);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(191, 184, 174);
  text-decoration: rgb(191, 184, 174);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body li.section-li > .section .meta {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(191, 184, 174);
  text-decoration: rgb(191, 184, 174);
}

body ul.section-ul {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
}

body .darkmode svg {
  color: rgb(191, 184, 174);
  stroke: rgb(191, 184, 174);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
}

body .breadcrumb-element p {
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
  color: rgb(232, 228, 218);
}

body .metadata {
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(26, 26, 26);
}

body .page-header h2.page-title {
  color: rgb(232, 228, 218);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(232, 228, 218);
  text-decoration: underline dotted rgb(232, 228, 218);
}

body details {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body input[type=text] {
  border-bottom-color: rgb(191, 184, 174);
  border-left-color: rgb(191, 184, 174);
  border-right-color: rgb(191, 184, 174);
  border-top-color: rgb(191, 184, 174);
  color: rgb(191, 184, 174);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(46, 46, 62);
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

body progress {
  border-bottom-color: rgb(232, 228, 218);
  border-left-color: rgb(232, 228, 218);
  border-right-color: rgb(232, 228, 218);
  border-top-color: rgb(232, 228, 218);
}

body sub {
  color: rgb(232, 228, 218);
}

body summary {
  color: rgb(232, 228, 218);
}

body sup {
  color: rgb(232, 228, 218);
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
  --bodyFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color-collapsed: #0077cc !important;
  --dark: #2e2e2e !important;
  --darkgray: #2e2e2e !important;
  --divider-color-hover: #0077cc !important;
  --dropdown-background: #e5dac4 !important;
  --dropdown-background-hover: #ddd2bc !important;
  --embed-border-start: 2px solid #0077cc !important;
  --file-header-background: #faf9f5 !important;
  --file-header-background-focused: #faf9f5 !important;
  --file-header-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-background: #e5dac4 !important;
  --flair-color: #2e2e2e !important;
  --font-interface: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: JetBrainsMono, monospace !important;
  --font-mermaid: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mono-theme: JetBrainsMono, monospace !important;
  --font-print: '??', '??', JetBrainsMono, monospace, 'Arial' !important;
  --font-text: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #2e2e2e !important;
  --metadata-label-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(235, 232, 226);
  color: rgb(46, 46, 46);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(250, 249, 245);
  color: rgb(46, 46, 46);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(235, 232, 226);
  color: rgb(46, 46, 46);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(235, 232, 226);
  color: rgb(46, 46, 46);
}

body div#quartz-root {
  background-color: rgb(250, 249, 245);
  color: rgb(46, 46, 46);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration: rgb(0, 119, 204);
  text-decoration-color: rgb(0, 119, 204);
}

body .page article p > em, em {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body .page article p > i, i {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body .page article p > strong, strong {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 1000;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration: rgb(0, 119, 204);
  text-decoration-color: rgb(0, 119, 204);
}

body .text-highlight {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body del {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration: line-through rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body p {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(108, 108, 108) none 0px;
  text-decoration: rgb(108, 108, 108);
  text-decoration-color: rgb(108, 108, 108);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration: underline rgb(0, 119, 204);
  text-decoration-color: rgb(0, 119, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 204) none 0px;
  text-decoration: underline rgb(0, 119, 204);
  text-decoration-color: rgb(0, 119, 204);
}

body a.internal.broken {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 119, 204) none 0px;
}`,
    lists: `body dd {
  color: rgb(46, 46, 46);
}

body dt {
  color: rgb(46, 46, 46);
}

body ol > li {
  color: rgb(46, 46, 46);
}

body ol.overflow {
  background-color: rgb(250, 249, 245);
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body ul > li {
  color: rgb(46, 46, 46);
}

body ul.overflow {
  background-color: rgb(250, 249, 245);
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    blockquotes: `body blockquote {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body table {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 223.484px;
}

body td {
  color: rgb(46, 46, 46);
}

body th {
  color: rgb(46, 46, 46);
  font-weight: 1000;
}`,
    code: `body code {
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(46, 46, 62);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(46, 46, 62);
  color: rgb(46, 46, 46);
}

body pre > code > [data-line] {
  border-left-color: rgb(127, 212, 212);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(127, 212, 212);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(127, 212, 212);
  border-left-color: rgb(127, 212, 212);
  border-right-color: rgb(127, 212, 212);
  border-top-color: rgb(127, 212, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(46, 46, 62);
}

body pre:has(> code) {
  background-color: rgb(46, 46, 62);
}`,
    images: `body audio {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body figcaption {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body img {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body video {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
}

body .footnotes {
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

body .transclude {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body .transclude-inner {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(108, 108, 108);
  text-decoration: line-through rgb(108, 108, 108);
  text-decoration-color: rgb(108, 108, 108);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  margin-left: -25.5px;
  width: 17px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='*'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='-'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='/'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='>'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='?'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='I'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='S'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='b'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='c'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='d'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='f'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='i'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='k'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='l'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='p'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='u'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body li.task-list-item[data-task='w'] {
  color: rgb(46, 46, 46);
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 1000;
}`,
    search: `body .search > .search-button {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(250, 249, 245);
}

body .search > .search-container > .search-space > * {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(46, 46, 46) none 0px;
  text-decoration: rgb(46, 46, 46);
  text-decoration-color: rgb(46, 46, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(46, 46, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(46, 46, 46);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(46, 46, 46);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(235, 232, 226);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(46, 46, 46);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(0, 119, 204);
  border-bottom-color: rgb(0, 119, 204);
  border-left-color: rgb(0, 119, 204);
  border-right-color: rgb(0, 119, 204);
  border-top-color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(89, 179, 132);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 119, 204);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(129, 145, 255);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(250, 249, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(250, 249, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 108, 108);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 108, 108);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(108, 108, 108);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
}`,
    footer: `body footer {
  background-color: rgb(235, 232, 226);
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(108, 108, 108);
  text-decoration: rgb(108, 108, 108);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(108, 108, 108);
  text-decoration: rgb(108, 108, 108);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body li.section-li > .section .meta {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(108, 108, 108);
  text-decoration: rgb(108, 108, 108);
}

body ul.section-ul {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
}

body .darkmode svg {
  color: rgb(108, 108, 108);
  stroke: rgb(108, 108, 108);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
}

body .breadcrumb-element p {
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
  color: rgb(46, 46, 46);
}

body .metadata {
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(235, 232, 226);
}

body .page-header h2.page-title {
  color: rgb(46, 46, 46);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(46, 46, 46);
  text-decoration: underline dotted rgb(46, 46, 46);
}

body details {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body input[type=text] {
  border-bottom-color: rgb(108, 108, 108);
  border-left-color: rgb(108, 108, 108);
  border-right-color: rgb(108, 108, 108);
  border-top-color: rgb(108, 108, 108);
  color: rgb(108, 108, 108);
  font-family: "??", JetBrainsMono, monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(46, 46, 62);
  border-bottom-color: rgb(240, 232, 216);
  border-left-color: rgb(240, 232, 216);
  border-right-color: rgb(240, 232, 216);
  border-top-color: rgb(240, 232, 216);
  color: rgb(240, 232, 216);
}

body progress {
  border-bottom-color: rgb(46, 46, 46);
  border-left-color: rgb(46, 46, 46);
  border-right-color: rgb(46, 46, 46);
  border-top-color: rgb(46, 46, 46);
}

body sub {
  color: rgb(46, 46, 46);
}

body summary {
  color: rgb(46, 46, 46);
}

body sup {
  color: rgb(46, 46, 46);
}`,
  },
};
