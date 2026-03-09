import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "velvet-moon",
    modes: ["dark"],
    variations: [],
    fonts: ["finlandica"],
  },
  dark: {
    base: `:root:root {
  --accent: #a462ac;
  --background-primary: #0c0e18;
  --bases-cards-background: #0c0e18;
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-table-cell-background-active: #0c0e18;
  --bases-table-container-border-radius: 8px;
  --bases-table-header-background: #0c0e18;
  --bases-table-summary-background: #0c0e18;
  --bold-color: #a462ac;
  --button-radius: 12px;
  --callout-radius: 8px;
  --canvas-background: #0c0e18;
  --canvas-controls-radius: 8px;
  --checkbox-marker-color: #0c0e18;
  --checkbox-radius: 12px;
  --clickable-icon-radius: 8px;
  --code-radius: 8px;
  --file-header-background: #0c0e18;
  --file-header-background-focused: #0c0e18;
  --font-mermaid: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Finlandica', sans-serif, 'Arial';
  --font-text: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Finlandica', sans-serif;
  --footnote-radius: 8px;
  --h1-color: #a462ac;
  --h2-color: #a462ac;
  --h3-color: #a462ac;
  --h4-color: #a462ac;
  --h5-color: #a462ac;
  --h6-color: #a462ac;
  --highlight-hue: 30;
  --inline-title-color: #a462ac;
  --input-radius: 12px;
  --italic-color: #a462ac;
  --menu-radius: 12px;
  --modal-background: #0c0e18;
  --modal-radius: 16px;
  --nav-item-radius: 8px;
  --nav-tag-radius: 8px;
  --pdf-background: #0c0e18;
  --pdf-page-background: #0c0e18;
  --pdf-sidebar-background: #0c0e18;
  --primary: #a1aace;
  --prompt-background: #0c0e18;
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --ribbon-background-collapsed: #0c0e18;
  --scrollbar-radius: 16px;
  --search-result-background: #0c0e18;
  --secondary: #5e3c72;
  --setting-items-radius: 16px;
  --slider-thumb-radius: 12px;
  --status-bar-radius: 12px 0 0 0;
  --suggestion-background: #0c0e18;
  --tab-background-active: #0c0e18;
  --tab-radius: 8px;
  --text: #dee0ed;
  --toggle-radius: 12px;
  --toggle-thumb-radius: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(222, 224, 237);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(12, 14, 24);
  color: rgb(222, 224, 237);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(222, 224, 237);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(222, 224, 237);
}

body div#quartz-root {
  background-color: rgb(12, 14, 24);
  color: rgb(222, 224, 237);
}`,
    typography: `body .page article p > b, b {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(164, 98, 172) none 0px;
  text-decoration: rgb(164, 98, 172);
  text-decoration-color: rgb(164, 98, 172);
}

body .page article p > em, em {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(164, 98, 172) none 0px;
  text-decoration: rgb(164, 98, 172);
  text-decoration-color: rgb(164, 98, 172);
}

body .page article p > i, i {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(164, 98, 172) none 0px;
  text-decoration: rgb(164, 98, 172);
  text-decoration-color: rgb(164, 98, 172);
}

body .page article p > strong, strong {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(164, 98, 172) none 0px;
  text-decoration: rgb(164, 98, 172);
  text-decoration-color: rgb(164, 98, 172);
}

body .text-highlight {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(222, 224, 237);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(222, 224, 237) none 0px;
  text-decoration: line-through rgb(222, 224, 237);
  text-decoration-color: rgb(222, 224, 237);
}

body p {
  font-family: Finlandica, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body ol.overflow {
  background-color: rgb(12, 14, 24);
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body ul.overflow {
  background-color: rgb(12, 14, 24);
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body table {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.297px;
}`,
    code: `body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `body audio {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body figcaption {
  color: rgb(222, 224, 237);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body img {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body video {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body .transclude-inner {
  border-bottom-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: Finlandica, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(12, 14, 24);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body h1 {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(164, 98, 172);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(12, 14, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 14, 24);
}

body ::-webkit-scrollbar-corner {
  background: rgb(12, 14, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 14, 24);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(12, 14, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 14, 24);
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(12, 14, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 14, 24);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(12, 14, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 14, 24);
}

body ::-webkit-scrollbar-track {
  background: rgb(12, 14, 24) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(12, 14, 24);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Finlandica, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Finlandica, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Finlandica, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `body footer {
  border-top-left-radius: 12px;
  font-family: Finlandica, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(222, 224, 237);
  font-family: Finlandica, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
  color: rgb(222, 224, 237);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Finlandica, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}

body li.section-li > .section .meta {
  font-family: Finlandica, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
  color: rgb(222, 224, 237);
}

body .metadata {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body progress {
  border-bottom-color: rgb(222, 224, 237);
  border-left-color: rgb(222, 224, 237);
  border-right-color: rgb(222, 224, 237);
  border-top-color: rgb(222, 224, 237);
}`,
  },
  light: {},
};
