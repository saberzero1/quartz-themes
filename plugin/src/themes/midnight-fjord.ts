import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "midnight-fjord",
    modes: ["dark"],
    variations: [],
    fonts: ["finlandica"],
  },
  dark: {
    base: `:root:root {
  --accent: #95d45e;
  --background-primary: rgba(11, 26, 39, 0.87);
  --bases-cards-background: rgba(11, 26, 39, 0.87);
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-table-cell-background-active: rgba(11, 26, 39, 0.87);
  --bases-table-container-border-radius: 8px;
  --bases-table-header-background: rgba(11, 26, 39, 0.87);
  --bases-table-summary-background: rgba(11, 26, 39, 0.87);
  --bold-color: #95d45e;
  --button-radius: 12px;
  --callout-radius: 8px;
  --canvas-background: rgba(11, 26, 39, 0.87);
  --canvas-controls-radius: 8px;
  --checkbox-marker-color: rgba(11, 26, 39, 0.87);
  --checkbox-radius: 12px;
  --clickable-icon-radius: 8px;
  --code-radius: 8px;
  --file-header-background: rgba(11, 26, 39, 0.87);
  --file-header-background-focused: rgba(11, 26, 39, 0.87);
  --font-mermaid: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Finlandica', sans-serif, 'Arial';
  --font-text: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Finlandica', sans-serif;
  --footnote-radius: 8px;
  --h1-color: #95d45e;
  --h2-color: #95d45e;
  --h3-color: #95d45e;
  --h4-color: #95d45e;
  --h5-color: #95d45e;
  --h6-color: #95d45e;
  --highlight-hue: 30;
  --inline-title-color: #95d45e;
  --input-radius: 12px;
  --italic-color: #95d45e;
  --menu-radius: 12px;
  --modal-background: rgba(11, 26, 39, 0.87);
  --modal-radius: 16px;
  --nav-item-radius: 8px;
  --nav-tag-radius: 8px;
  --pdf-background: rgba(11, 26, 39, 0.87);
  --pdf-page-background: rgba(11, 26, 39, 0.87);
  --pdf-sidebar-background: rgba(11, 26, 39, 0.87);
  --primary: #8abce0;
  --prompt-background: rgba(11, 26, 39, 0.87);
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --ribbon-background-collapsed: rgba(11, 26, 39, 0.87);
  --scrollbar-radius: 16px;
  --search-result-background: rgba(11, 26, 39, 0.87);
  --secondary: #7d4a21;
  --setting-items-radius: 16px;
  --slider-thumb-radius: 12px;
  --status-bar-radius: 12px 0 0 0;
  --suggestion-background: rgba(11, 26, 39, 0.87);
  --tab-background-active: rgba(11, 26, 39, 0.87);
  --tab-radius: 8px;
  --text: #e7f3f9;
  --toggle-radius: 12px;
  --toggle-thumb-radius: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(231, 243, 249);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgba(11, 26, 39, 0.87);
  color: rgb(231, 243, 249);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(231, 243, 249);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(231, 243, 249);
}

body div#quartz-root {
  background-color: rgba(11, 26, 39, 0.87);
  color: rgb(231, 243, 249);
}`,
    typography: `body .page article p > b, b {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

body .page article p > em, em {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

body .page article p > i, i {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

body .page article p > strong, strong {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

body .text-highlight {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(231, 243, 249);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 243, 249) none 0px;
  text-decoration: line-through rgb(231, 243, 249);
  text-decoration-color: rgb(231, 243, 249);
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
  background-color: rgba(11, 26, 39, 0.87);
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body ul.overflow {
  background-color: rgba(11, 26, 39, 0.87);
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
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
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body figcaption {
  color: rgb(231, 243, 249);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body img {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body video {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body .transclude-inner {
  border-bottom-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
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
  background-color: rgba(11, 26, 39, 0.87);
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
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

body ::-webkit-scrollbar-corner {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

body ::-webkit-scrollbar-thumb {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

body ::-webkit-scrollbar-track {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
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
  color: rgb(231, 243, 249);
  font-family: Finlandica, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
  color: rgb(231, 243, 249);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Finlandica, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

body li.section-li > .section .meta {
  font-family: Finlandica, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
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
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
  color: rgb(231, 243, 249);
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
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}`,
  },
  light: {},
};
