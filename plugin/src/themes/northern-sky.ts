import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "northern-sky",
    modes: ["light"],
    variations: [],
    fonts: ["finlandica"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent: #62a12b;
  --background-primary: #dfedf7;
  --bases-cards-background: #dfedf7;
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-table-cell-background-active: #dfedf7;
  --bases-table-container-border-radius: 8px;
  --bases-table-header-background: #dfedf7;
  --bases-table-summary-background: #dfedf7;
  --blur-background: color-mix(in srgb, #dfedf7 65%, transparent) linear-gradient(#dfedf7, color-mix(in srgb, #dfedf7 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #62a12b;
  --button-radius: 12px;
  --callout-radius: 8px;
  --canvas-background: #dfedf7;
  --canvas-controls-radius: 8px;
  --checkbox-marker-color: #dfedf7;
  --checkbox-radius: 12px;
  --clickable-icon-radius: 8px;
  --code-radius: 8px;
  --codeFont: var(--font-text);
  --file-header-background: #dfedf7;
  --file-header-background-focused: #dfedf7;
  --font-mermaid: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Finlandica', sans-serif, 'Arial';
  --font-text: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Finlandica', sans-serif;
  --footnote-radius: 8px;
  --h1-color: #62a12b;
  --h2-color: #62a12b;
  --h3-color: #62a12b;
  --h4-color: #62a12b;
  --h5-color: #62a12b;
  --h6-color: #62a12b;
  --headerFont: var(--font-text);
  --highlight-hue: 30;
  --inline-title-color: #62a12b;
  --input-radius: 12px;
  --italic-color: #62a12b;
  --light: var(--background-primary);
  --menu-radius: 12px;
  --modal-background: #dfedf7;
  --modal-radius: 16px;
  --nav-item-radius: 8px;
  --nav-tag-radius: 8px;
  --pdf-background: #dfedf7;
  --pdf-page-background: #dfedf7;
  --pdf-sidebar-background: #dfedf7;
  --primary: #1f5175;
  --prompt-background: #dfedf7;
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #dfedf7 65%, transparent) linear-gradient(#dfedf7, color-mix(in srgb, #dfedf7 65%, transparent));
  --ribbon-background-collapsed: #dfedf7;
  --scrollbar-radius: 16px;
  --search-result-background: #dfedf7;
  --secondary: #deab82;
  --setting-items-radius: 16px;
  --slider-thumb-radius: 12px;
  --status-bar-radius: 12px 0 0 0;
  --suggestion-background: #dfedf7;
  --tab-background-active: #dfedf7;
  --tab-radius: 8px;
  --tab-radius-active: 12px;
  --text: #061218;
  --titleFont: var(--font-text);
  --toggle-radius: 12px;
  --toggle-thumb-radius: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(6, 18, 24);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(223, 237, 247);
  color: rgb(6, 18, 24);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(6, 18, 24);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(6, 18, 24);
}

body div#quartz-root {
  background-color: rgb(223, 237, 247);
  color: rgb(6, 18, 24);
}`,
    typography: `body .page article p > b, b {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

body .page article p > em, em {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

body .page article p > i, i {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

body .page article p > strong, strong {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

body .text-highlight {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(6, 18, 24);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 18, 24) none 0px;
  text-decoration: line-through rgb(6, 18, 24);
  text-decoration-color: rgb(6, 18, 24);
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
  background-color: rgb(223, 237, 247);
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body ul.overflow {
  background-color: rgb(223, 237, 247);
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
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
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body figcaption {
  color: rgb(6, 18, 24);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body img {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body video {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body .transclude-inner {
  border-bottom-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
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
  background-color: rgb(223, 237, 247);
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
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

body ::-webkit-scrollbar-corner {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

body ::-webkit-scrollbar-track {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
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
  color: rgb(6, 18, 24);
  font-family: Finlandica, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
  color: rgb(6, 18, 24);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Finlandica, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

body li.section-li > .section .meta {
  font-family: Finlandica, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
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
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
  color: rgb(6, 18, 24);
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
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
  },
};
