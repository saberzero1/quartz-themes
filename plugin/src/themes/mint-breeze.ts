import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "mint-breeze",
    modes: ["light"],
    variations: [],
    fonts: ["noto-sans-old-persian", "noto-serif-kr"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent: #42b38d;
  --background-primary: #f8fcfb;
  --bases-cards-background: #f8fcfb;
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-table-cell-background-active: #f8fcfb;
  --bases-table-container-border-radius: 8px;
  --bases-table-header-background: #f8fcfb;
  --bases-table-summary-background: #f8fcfb;
  --blur-background: color-mix(in srgb, #f8fcfb 65%, transparent) linear-gradient(#f8fcfb, color-mix(in srgb, #f8fcfb 65%, transparent));
  --bold-color: #42b38d;
  --button-radius: 12px;
  --callout-radius: 8px;
  --canvas-background: #f8fcfb;
  --canvas-controls-radius: 8px;
  --checkbox-marker-color: #f8fcfb;
  --checkbox-radius: 12px;
  --clickable-icon-radius: 8px;
  --code-radius: 8px;
  --file-header-background: #f8fcfb;
  --file-header-background-focused: #f8fcfb;
  --font-mermaid: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Noto Serif KR', serif, 'Arial';
  --font-text: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Noto Serif KR', serif;
  --footnote-radius: 8px;
  --h1-color: #42b38d;
  --h2-color: #42b38d;
  --h3-color: #42b38d;
  --h4-color: #42b38d;
  --h5-color: #42b38d;
  --h6-color: #42b38d;
  --highlight-hue: 30;
  --inline-title-color: #42b38d;
  --input-radius: 12px;
  --italic-color: #42b38d;
  --menu-radius: 12px;
  --modal-background: #f8fcfb;
  --modal-radius: 16px;
  --nav-item-radius: 8px;
  --nav-tag-radius: 8px;
  --pdf-background: #f8fcfb;
  --pdf-page-background: #f8fcfb;
  --pdf-sidebar-background: #f8fcfb;
  --primary: #2a5a4a;
  --prompt-background: #f8fcfb;
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --raised-background: color-mix(in srgb, #f8fcfb 65%, transparent) linear-gradient(#f8fcfb, color-mix(in srgb, #f8fcfb 65%, transparent));
  --ribbon-background-collapsed: #f8fcfb;
  --scrollbar-radius: 16px;
  --search-result-background: #f8fcfb;
  --secondary: #8ccfb9;
  --setting-items-radius: 16px;
  --slider-thumb-radius: 12px;
  --status-bar-radius: 12px 0 0 0;
  --suggestion-background: #f8fcfb;
  --tab-background-active: #f8fcfb;
  --tab-radius: 8px;
  --text: #13201c;
  --toggle-radius: 12px;
  --toggle-thumb-radius: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(19, 32, 28);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(248, 252, 251);
  color: rgb(19, 32, 28);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(19, 32, 28);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(19, 32, 28);
}

body div#quartz-root {
  background-color: rgb(248, 252, 251);
  color: rgb(19, 32, 28);
}`,
    typography: `body .page article p > b, b {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(66, 179, 141) none 0px;
  text-decoration: rgb(66, 179, 141);
  text-decoration-color: rgb(66, 179, 141);
}

body .page article p > em, em {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(66, 179, 141) none 0px;
  text-decoration: rgb(66, 179, 141);
  text-decoration-color: rgb(66, 179, 141);
}

body .page article p > i, i {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(66, 179, 141) none 0px;
  text-decoration: rgb(66, 179, 141);
  text-decoration-color: rgb(66, 179, 141);
}

body .page article p > strong, strong {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(66, 179, 141) none 0px;
  text-decoration: rgb(66, 179, 141);
  text-decoration-color: rgb(66, 179, 141);
}

body .text-highlight {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(19, 32, 28);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(19, 32, 28) none 0px;
  text-decoration: line-through rgb(19, 32, 28);
  text-decoration-color: rgb(19, 32, 28);
}

body p {
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body ol.overflow {
  background-color: rgb(248, 252, 251);
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body ul.overflow {
  background-color: rgb(248, 252, 251);
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body table {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.984px;
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
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body figcaption {
  color: rgb(19, 32, 28);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body img {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body video {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body .transclude-inner {
  border-bottom-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "Noto Sans Old Persian", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(248, 252, 251);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(66, 179, 141);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(248, 252, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 252, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(248, 252, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 252, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(248, 252, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 252, 251);
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(248, 252, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 252, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(248, 252, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 252, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(248, 252, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(248, 252, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Noto Sans Old Persian", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Noto Sans Old Persian", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "Noto Sans Old Persian", sans-serif;
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
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(19, 32, 28);
  font-family: "Noto Sans Old Persian", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
  color: rgb(19, 32, 28);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}

body li.section-li > .section .meta {
  font-family: "Noto Sans Old Persian", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
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
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
  color: rgb(19, 32, 28);
}

body .metadata {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body progress {
  border-bottom-color: rgb(19, 32, 28);
  border-left-color: rgb(19, 32, 28);
  border-right-color: rgb(19, 32, 28);
  border-top-color: rgb(19, 32, 28);
}`,
  },
};
