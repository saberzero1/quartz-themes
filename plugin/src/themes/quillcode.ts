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
  --background-primary: #121212;
  --background-secondary: #1a1a1a;
  --background-tertiary: #232323;
  --bases-cards-background: #121212;
  --bases-group-heading-property-color: #bfb8ae;
  --bases-table-cell-background-active: #121212;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0077cc;
  --bases-table-header-background: #121212;
  --bases-table-header-color: #bfb8ae;
  --bases-table-summary-background: #121212;
  --blockquote-border-color: #7fd4ff;
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, #3a3e4e 65%, transparent) linear-gradient(#3a3e4e, color-mix(in srgb, #3a3e4e 65%, transparent));
  --bold-color: #7fd4ff;
  --bold-modifier: 1000;
  --bold-weight: 1400;
  --button-radius: 10px;
  --callout-title-weight: 1400;
  --canvas-background: #121212;
  --caret-color: #e8e4da;
  --checkbox-border-color: #0077cc;
  --checkbox-border-color-hover: #3399ff;
  --checkbox-color: #7fd4ff;
  --checkbox-color-hover: #1f93ff;
  --checkbox-marker-color: #121212;
  --checkbox-size: 17px;
  --checklist-done-color: #bfb8ae;
  --code-background: #2e2e3e;
  --code-comment: #a8a8b8;
  --code-function: #7fd4d4;
  --code-important: #7fd4ff;
  --code-keyword: #d4a8ff;
  --code-normal: #f0e8d8;
  --code-number: #c8e8a8;
  --code-operator: #d4a8ff;
  --code-property: #7fd4a8;
  --code-punctuation: #a8b4ff;
  --code-string: #7fd4a8;
  --code-tag: #7fd4ff;
  --code-value: #c8e8a8;
  --collapse-icon-color-collapsed: #7fd4ff;
  --divider-color-hover: #0077cc;
  --dropdown-background: #3a3e4e;
  --dropdown-background-hover: #4a4f5f;
  --embed-border-start: 2px solid #0077cc;
  --file-header-background: #121212;
  --file-header-background-focused: #121212;
  --file-header-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #3a3e4e;
  --flair-color: #e8e4da;
  --font-interface: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: JetBrainsMono, monospace;
  --font-mermaid: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mono-theme: JetBrainsMono, monospace;
  --font-print: '??', '??', JetBrainsMono, monospace, 'Arial';
  --font-text: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: JetBrainsMono, monospace;
  --footnote-id-color: #bfb8ae;
  --graph-node: #bfb8ae;
  --graph-node-focused: #7fd4ff;
  --graph-text: #e8e4da;
  --h1-color: #7fd4ff;
  --h1-size: 1.7rem;
  --h2-color: #7fd4a8;
  --h2-size: 1.5rem;
  --h3-color: #a8b4ff;
  --h3-size: 1.2rem;
  --h4-size: 1.1rem;
  --h5-size: 1rem;
  --h6-size: 0.9rem;
  --highlight-bg: #2e2e3e;
  --highlight-matched-text: #d4a8ff;
  --hr-color: #4c505e;
  --icon-color: #bfb8ae;
  --icon-color-active: #7fd4ff;
  --icon-color-focused: #e8e4da;
  --icon-color-hover: #bfb8ae;
  --inline-title-color: #7fd4ff;
  --inline-title-size: 2rem;
  --interactive-accent: #0077cc;
  --interactive-accent-hover: #3399ff;
  --interactive-hover: #4a4f5f;
  --interactive-normal: #3a3e4e;
  --link-color: #7fd4ff;
  --link-color-hover: #3399ff;
  --link-external-color: #7fd4ff;
  --link-external-color-hover: #3399ff;
  --link-unresolved-color: #7fd4ff;
  --list-marker-color-collapsed: #7fd4ff;
  --list-marker-color-hover: #bfb8ae;
  --menu-background: #1a1a1a;
  --metadata-input-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #e8e4da;
  --metadata-label-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #bfb8ae;
  --metadata-label-text-color-hover: #bfb8ae;
  --modal-background: #121212;
  --nav-heading-color: #e8e4da;
  --nav-heading-color-collapsed-hover: #bfb8ae;
  --nav-heading-color-hover: #e8e4da;
  --nav-item-color: #bfb8ae;
  --nav-item-color-active: #e8e4da;
  --nav-item-color-highlighted: #7fd4ff;
  --nav-item-color-hover: #e8e4da;
  --nav-item-color-selected: #e8e4da;
  --nav-tag-color-active: #bfb8ae;
  --nav-tag-color-hover: #bfb8ae;
  --pdf-background: #121212;
  --pdf-page-background: #121212;
  --pdf-sidebar-background: #121212;
  --pill-color: #bfb8ae;
  --pill-color-hover: #e8e4da;
  --pill-color-remove-hover: #7fd4ff;
  --prompt-background: #121212;
  --raised-background: color-mix(in srgb, #3a3e4e 65%, transparent) linear-gradient(#3a3e4e, color-mix(in srgb, #3a3e4e 65%, transparent));
  --ribbon-background: #1a1a1a;
  --ribbon-background-collapsed: #121212;
  --search-clear-button-color: #bfb8ae;
  --search-icon-color: #bfb8ae;
  --search-result-background: #121212;
  --setting-group-heading-color: #e8e4da;
  --status-bar-background: #1a1a1a;
  --status-bar-text-color: #bfb8ae;
  --suggestion-background: #121212;
  --tab-background-active: #121212;
  --tab-container-background: #1a1a1a;
  --tab-curve: 10px;
  --tab-radius: 10px;
  --tab-radius-active: 10px;
  --tab-switcher-background: #1a1a1a;
  --tab-switcher-menubar-background: linear-gradient(to top, #1a1a1a, transparent);
  --tab-text-color-active: #bfb8ae;
  --tab-text-color-focused: #bfb8ae;
  --tab-text-color-focused-active: #bfb8ae;
  --tab-text-color-focused-active-current: #e8e4da;
  --tab-text-color-focused-highlighted: #7fd4ff;
  --table-drag-handle-background-active: #0077cc;
  --table-drag-handle-color-active: #ffffff;
  --table-header-color: #e8e4da;
  --table-header-weight: 1400;
  --table-selection-border-color: #0077cc;
  --tag-background: #7fd4ff;
  --tag-background-hover: #1f93ff;
  --tag-border-color: #0b0b0c;
  --tag-border-color-hover: #3399ff;
  --tag-color: #121212;
  --tag-color-hover: #121212;
  --text-accent: #7fd4ff;
  --text-accent-hover: #3399ff;
  --text-muted: #bfb8ae;
  --text-normal: #e8e4da;
  --text-on-accent: #ffffff;
  --text-selection: #4a5a6a;
  --titlebar-background: #1a1a1a;
  --titlebar-text-color: #bfb8ae;
  --titlebar-text-color-focused: #e8e4da;
  --vault-profile-color: #e8e4da;
  --vault-profile-color-hover: #e8e4da;
  --quartz-icon-color: currentColor;
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
  --background-primary: #faf9f5;
  --background-secondary: #ebe8e2;
  --background-tertiary: #e5decf;
  --bases-cards-background: #faf9f5;
  --bases-group-heading-property-color: #6c6c6c;
  --bases-table-cell-background-active: #faf9f5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #0077cc;
  --bases-table-header-background: #faf9f5;
  --bases-table-header-color: #6c6c6c;
  --bases-table-summary-background: #faf9f5;
  --blockquote-border-color: #0077cc;
  --blockquote-border-thickness: 3px;
  --blur-background: color-mix(in srgb, #faf9f5 65%, transparent) linear-gradient(#faf9f5, color-mix(in srgb, #faf9f5 65%, transparent));
  --bold-color: #0077cc;
  --bold-modifier: 1000;
  --bold-weight: 1400;
  --button-radius: 10px;
  --callout-title-weight: 1400;
  --canvas-background: #faf9f5;
  --caret-color: #2e2e2e;
  --checkbox-border-color: #0077cc;
  --checkbox-border-color-hover: #3399ff;
  --checkbox-color: #0077cc;
  --checkbox-color-hover: #00b7ff;
  --checkbox-size: 17px;
  --checklist-done-color: #6c6c6c;
  --code-background: #2e2e3e;
  --code-comment: #a8a8b8;
  --code-function: #7fd4d4;
  --code-important: #0077cc;
  --code-keyword: #d4a8ff;
  --code-normal: #f0e8d8;
  --code-number: #c8e8a8;
  --code-operator: #d4a8ff;
  --code-property: #7fd4a8;
  --code-punctuation: #a8b4ff;
  --code-string: #7fd4a8;
  --code-tag: #7fd4ff;
  --code-value: #c8e8a8;
  --collapse-icon-color-collapsed: #0077cc;
  --divider-color-hover: #0077cc;
  --dropdown-background: #e5dac4;
  --dropdown-background-hover: #ddd2bc;
  --embed-border-start: 2px solid #0077cc;
  --file-header-background: #faf9f5;
  --file-header-background-focused: #faf9f5;
  --file-header-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-background: #e5dac4;
  --flair-color: #2e2e2e;
  --font-interface: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: JetBrainsMono, monospace;
  --font-mermaid: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-mono-theme: JetBrainsMono, monospace;
  --font-print: '??', '??', JetBrainsMono, monospace, 'Arial';
  --font-text: '??', JetBrainsMono, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: JetBrainsMono, monospace;
  --footnote-id-color: #6c6c6c;
  --graph-node: #6c6c6c;
  --graph-node-focused: #0077cc;
  --graph-text: #2e2e2e;
  --h1-color: #0077cc;
  --h1-size: 1.7rem;
  --h2-color: #59b384;
  --h2-size: 1.5rem;
  --h3-color: #8191ff;
  --h3-size: 1.2rem;
  --h4-size: 1.1rem;
  --h5-size: 1rem;
  --h6-size: 0.9rem;
  --hr-color: #4c505e;
  --icon-color: #6c6c6c;
  --icon-color-active: #0077cc;
  --icon-color-focused: #2e2e2e;
  --icon-color-hover: #6c6c6c;
  --inline-title-color: #0077cc;
  --inline-title-size: 2rem;
  --interactive-accent: #0077cc;
  --interactive-accent-hover: #3399ff;
  --interactive-hover: #ddd2bc;
  --interactive-normal: #e5dac4;
  --link-color: #0077cc;
  --link-color-hover: #3399ff;
  --link-external-color: #0077cc;
  --link-external-color-hover: #3399ff;
  --link-unresolved-color: #0077cc;
  --list-marker-color-collapsed: #0077cc;
  --list-marker-color-hover: #6c6c6c;
  --menu-background: #ebe8e2;
  --metadata-input-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #2e2e2e;
  --metadata-label-font: '??', JetBrainsMono, monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #6c6c6c;
  --metadata-label-text-color-hover: #6c6c6c;
  --modal-background: #faf9f5;
  --nav-heading-color: #2e2e2e;
  --nav-heading-color-collapsed-hover: #6c6c6c;
  --nav-heading-color-hover: #2e2e2e;
  --nav-item-color: #6c6c6c;
  --nav-item-color-active: #2e2e2e;
  --nav-item-color-highlighted: #0077cc;
  --nav-item-color-hover: #2e2e2e;
  --nav-item-color-selected: #2e2e2e;
  --nav-tag-color-active: #6c6c6c;
  --nav-tag-color-hover: #6c6c6c;
  --pdf-background: #faf9f5;
  --pdf-page-background: #faf9f5;
  --pdf-sidebar-background: #faf9f5;
  --pill-color: #6c6c6c;
  --pill-color-hover: #2e2e2e;
  --pill-color-remove-hover: #0077cc;
  --prompt-background: #faf9f5;
  --raised-background: color-mix(in srgb, #faf9f5 65%, transparent) linear-gradient(#faf9f5, color-mix(in srgb, #faf9f5 65%, transparent));
  --ribbon-background: #ebe8e2;
  --ribbon-background-collapsed: #faf9f5;
  --search-clear-button-color: #6c6c6c;
  --search-icon-color: #6c6c6c;
  --search-result-background: #faf9f5;
  --setting-group-heading-color: #2e2e2e;
  --status-bar-background: #ebe8e2;
  --status-bar-text-color: #6c6c6c;
  --suggestion-background: #faf9f5;
  --tab-background-active: #faf9f5;
  --tab-container-background: #ebe8e2;
  --tab-curve: 10px;
  --tab-radius: 10px;
  --tab-radius-active: 10px;
  --tab-switcher-background: #ebe8e2;
  --tab-switcher-menubar-background: linear-gradient(to top, #ebe8e2, transparent);
  --tab-text-color-active: #6c6c6c;
  --tab-text-color-focused: #6c6c6c;
  --tab-text-color-focused-active: #6c6c6c;
  --tab-text-color-focused-active-current: #2e2e2e;
  --tab-text-color-focused-highlighted: #0077cc;
  --table-drag-handle-background-active: #0077cc;
  --table-drag-handle-color-active: #ffffff;
  --table-header-color: #2e2e2e;
  --table-header-weight: 1400;
  --table-selection-border-color: #0077cc;
  --tag-background: #0077cc;
  --tag-background-hover: #00b7ff;
  --tag-border-color: #0077cc;
  --tag-border-color-hover: #3399ff;
  --tag-color: #ffffff;
  --tag-color-hover: #ffffff;
  --text-accent: #0077cc;
  --text-accent-hover: #3399ff;
  --text-muted: #6c6c6c;
  --text-normal: #2e2e2e;
  --text-on-accent: #ffffff;
  --text-selection: #e6d9c2;
  --titlebar-background: #ebe8e2;
  --titlebar-text-color: #6c6c6c;
  --titlebar-text-color-focused: #2e2e2e;
  --vault-profile-color: #2e2e2e;
  --vault-profile-color-hover: #2e2e2e;
  --quartz-icon-color: currentColor;
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
