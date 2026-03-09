import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "serika", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 50;
  --accent-l: 55%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(232, 201, 48, 0.1);
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-cell-background-selected: rgba(232, 201, 48, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(232, 201, 48);
  --bases-table-container-border-radius: 0px;
  --blockquote-border-color: rgb(232, 201, 48);
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-controls-radius: 0px;
  --checkbox-color: rgb(232, 201, 48);
  --checkbox-color-hover: rgb(238, 204, 83);
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-radius: 0px;
  --collapse-icon-color-collapsed: rgb(238, 204, 83);
  --color-accent: rgb(232, 201, 48);
  --color-accent-1: rgb(238, 204, 83);
  --color-accent-2: rgb(243, 212, 119);
  --color-accent-hsl: 50, 80%, 55%;
  --divider-color-hover: rgb(232, 201, 48);
  --embed-border-start: 2px solid rgb(232, 201, 48);
  --file-header-font: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Roboto Mono *", monospace;
  --font-mermaid: '??', "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Roboto Mono *", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Roboto Mono *", monospace;
  --font-print: '??', '??', "Roboto Mono *", monospace, 'Arial';
  --font-text: '??', "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Roboto Mono *", monospace;
  --footnote-radius: 0px;
  --graph-node-focused: rgb(238, 204, 83);
  --icon-color: #e2b714;
  --icon-color-active: rgb(238, 204, 83);
  --input-radius: 0px;
  --interactive-accent: rgb(232, 201, 48);
  --interactive-accent-hover: rgb(238, 204, 83);
  --interactive-accent-hsl: 50, 80%, 55%;
  --link-color: rgb(238, 204, 83);
  --link-color-hover: rgb(243, 212, 119);
  --link-external-color: rgb(238, 204, 83);
  --link-external-color-hover: rgb(243, 212, 119);
  --link-unresolved-color: rgb(238, 204, 83);
  --link-unresolved-decoration-color: rgba(232, 201, 48, 0.3);
  --list-marker-color-collapsed: rgb(238, 204, 83);
  --menu-radius: 0px;
  --metadata-input-font: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-radius: 0px;
  --nav-item-background-selected: rgba(232, 201, 48, 0.15);
  --nav-item-color-highlighted: rgb(238, 204, 83);
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --pill-color-remove-hover: rgb(238, 204, 83);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: #323437;
  --ribbon-background-collapsed: #323437;
  --scrollbar-radius: 0px;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-background: #323437;
  --status-bar-radius: 0px 0 0 0;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(232, 201, 48);
  --tab-text-color-focused-highlighted: rgb(238, 204, 83);
  --table-drag-handle-background-active: rgb(232, 201, 48);
  --table-selection: rgba(232, 201, 48, 0.1);
  --table-selection-border-color: rgb(232, 201, 48);
  --tag-background: rgba(232, 201, 48, 0.1);
  --tag-background-hover: rgba(232, 201, 48, 0.2);
  --tag-border-color: rgba(232, 201, 48, 0.15);
  --tag-border-color-hover: rgba(232, 201, 48, 0.15);
  --tag-color: rgb(238, 204, 83);
  --tag-color-hover: rgb(238, 204, 83);
  --text-accent: rgb(238, 204, 83);
  --text-accent-hover: rgb(243, 212, 119);
  --text-selection: rgba(232, 201, 48, 0.33);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(238, 205, 85);
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(238, 205, 85) none 0px;
  text-decoration: underline rgb(238, 205, 85);
  text-decoration-color: rgb(238, 205, 85);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(238, 205, 85);
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(238, 205, 85) none 0px;
  text-decoration: underline rgb(238, 205, 85);
  text-decoration-color: rgb(238, 205, 85);
}

body a.internal.broken {
  color: rgb(238, 205, 85);
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(238, 205, 85) none 0px;
  text-decoration: underline rgba(232, 201, 48, 0.3);
  text-decoration-color: rgba(232, 201, 48, 0.3);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 223.484px;
}`,
    code: `body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Roboto Mono *", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
    images: `body figcaption {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .transclude {
  border-left-color: rgb(232, 201, 48);
}

body .transclude-inner {
  border-left-color: rgb(232, 201, 48);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(232, 201, 48, 0.1);
  border-bottom-color: rgba(232, 201, 48, 0.15);
  border-left-color: rgba(232, 201, 48, 0.15);
  border-right-color: rgba(232, 201, 48, 0.15);
  border-top-color: rgba(232, 201, 48, 0.15);
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(238, 205, 85);
}

body h1 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(226, 183, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(226, 183, 20);
  border-right-color: rgb(226, 183, 20);
  border-top-color: rgb(226, 183, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(226, 183, 20);
}`,
    footer: `body footer {
  background-color: rgb(50, 52, 55);
  border-top-left-radius: 0px;
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(226, 183, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(226, 183, 20);
  border-right-color: rgb(226, 183, 20);
  border-top-color: rgb(226, 183, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(226, 183, 20);
}

body .darkmode svg {
  color: rgb(226, 183, 20);
  stroke: rgb(226, 183, 20);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .breadcrumb-element p {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(50, 52, 55);
}

body .page-header h2.page-title {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Roboto Mono *", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 50;
  --accent-l: 55%;
  --accent-s: 80%;
  --background-modifier-active-hover: rgba(232, 201, 48, 0.1);
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-cell-background-selected: rgba(232, 201, 48, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(235, 204, 66);
  --bases-table-container-border-radius: 0px;
  --blockquote-border-color: rgb(235, 204, 66);
  --button-radius: 0px;
  --callout-radius: 0px;
  --canvas-controls-radius: 0px;
  --checkbox-color: rgb(235, 204, 66);
  --checkbox-color-hover: rgb(238, 204, 83);
  --checkbox-radius: 0px;
  --clickable-icon-radius: 0px;
  --code-radius: 0px;
  --collapse-icon-color-collapsed: rgb(232, 201, 48);
  --color-accent: rgb(232, 201, 48);
  --color-accent-1: rgb(235, 204, 66);
  --color-accent-2: rgb(238, 204, 83);
  --color-accent-hsl: 50, 80%, 55%;
  --divider-color-hover: rgb(235, 204, 66);
  --embed-border-start: 2px solid rgb(235, 204, 66);
  --file-header-font: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Roboto Mono *", monospace;
  --font-mermaid: '??', "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Roboto Mono *", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Roboto Mono *", monospace;
  --font-print: '??', '??', "Roboto Mono *", monospace, 'Arial';
  --font-text: '??', "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Roboto Mono *", monospace;
  --footnote-radius: 0px;
  --graph-node-focused: rgb(232, 201, 48);
  --icon-color: #e2b714;
  --icon-color-active: rgb(232, 201, 48);
  --input-radius: 0px;
  --interactive-accent: rgb(235, 204, 66);
  --interactive-accent-hover: rgb(238, 204, 83);
  --interactive-accent-hsl: 50, 80%, 55%;
  --link-color: rgb(232, 201, 48);
  --link-color-hover: rgb(238, 204, 83);
  --link-external-color: rgb(232, 201, 48);
  --link-external-color-hover: rgb(238, 204, 83);
  --link-unresolved-color: rgb(232, 201, 48);
  --link-unresolved-decoration-color: rgba(232, 201, 48, 0.3);
  --list-marker-color-collapsed: rgb(232, 201, 48);
  --menu-radius: 0px;
  --metadata-input-font: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', "Roboto Mono *", monospace, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-radius: 0px;
  --nav-item-background-selected: rgba(232, 201, 48, 0.15);
  --nav-item-color-highlighted: rgb(232, 201, 48);
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --pill-color-remove-hover: rgb(232, 201, 48);
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: #e1e1e3;
  --ribbon-background-collapsed: #e1e1e3;
  --scrollbar-radius: 0px;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-background: #e1e1e3c0;
  --status-bar-radius: 0px 0 0 0;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(232, 201, 48);
  --tab-text-color-focused-highlighted: rgb(232, 201, 48);
  --table-drag-handle-background-active: rgb(235, 204, 66);
  --table-selection: rgba(232, 201, 48, 0.1);
  --table-selection-border-color: rgb(235, 204, 66);
  --tag-background: rgba(232, 201, 48, 0.1);
  --tag-background-hover: rgba(232, 201, 48, 0.2);
  --tag-border-color: rgba(232, 201, 48, 0.15);
  --tag-border-color-hover: rgba(232, 201, 48, 0.15);
  --tag-color: rgb(232, 201, 48);
  --tag-color-hover: rgb(232, 201, 48);
  --text-accent: rgb(232, 201, 48);
  --text-accent-hover: rgb(238, 204, 83);
  --text-selection: rgba(232, 201, 48, 0.2);
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(232, 201, 48);
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 201, 48) none 0px;
  text-decoration: underline rgb(232, 201, 48);
  text-decoration-color: rgb(232, 201, 48);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(232, 201, 48);
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 201, 48) none 0px;
  text-decoration: underline rgb(232, 201, 48);
  text-decoration-color: rgb(232, 201, 48);
}

body a.internal.broken {
  color: rgb(232, 201, 48);
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(232, 201, 48) none 0px;
  text-decoration: underline rgba(232, 201, 48, 0.3);
  text-decoration-color: rgba(232, 201, 48, 0.3);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 223.484px;
}`,
    code: `body code {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Roboto Mono *", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
    images: `body figcaption {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .transclude {
  border-left-color: rgb(235, 204, 67);
}

body .transclude-inner {
  border-left-color: rgb(235, 204, 67);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
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
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(232, 201, 48, 0.1);
  border-bottom-color: rgba(232, 201, 48, 0.15);
  border-left-color: rgba(232, 201, 48, 0.15);
  border-right-color: rgba(232, 201, 48, 0.15);
  border-top-color: rgba(232, 201, 48, 0.15);
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(232, 201, 48);
}

body h1 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(226, 183, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(226, 183, 20);
  border-right-color: rgb(226, 183, 20);
  border-top-color: rgb(226, 183, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(226, 183, 20);
}`,
    footer: `body footer {
  background-color: rgba(225, 225, 227, 0.753);
  border-top-left-radius: 0px;
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(226, 183, 20);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(226, 183, 20);
  border-right-color: rgb(226, 183, 20);
  border-top-color: rgb(226, 183, 20);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(226, 183, 20);
}

body .darkmode svg {
  color: rgb(226, 183, 20);
  stroke: rgb(226, 183, 20);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .breadcrumb-element p {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Roboto Mono *", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgba(225, 225, 227, 0.753);
}

body .page-header h2.page-title {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "Roboto Mono *", monospace, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  font-family: "??", "Roboto Mono *", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
