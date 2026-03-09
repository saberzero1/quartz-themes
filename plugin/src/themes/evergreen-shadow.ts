import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "evergreen-shadow",
    modes: ["dark"],
    variations: [],
    fonts: ["noto-sans-old-persian", "noto-serif-kr"],
  },
  dark: {
    base: `:root:root {
  --accent: #4cbd97;
  --background-primary: #050c0a;
  --bases-cards-background: #050c0a;
  --bases-cards-radius: 12px;
  --bases-embed-border-radius: 8px;
  --bases-table-cell-background-active: #050c0a;
  --bases-table-container-border-radius: 8px;
  --bases-table-header-background: #050c0a;
  --bases-table-summary-background: #050c0a;
  --bold-color: #4cbd97;
  --button-radius: 12px;
  --callout-radius: 8px;
  --canvas-background: #050c0a;
  --canvas-controls-radius: 8px;
  --checkbox-marker-color: #050c0a;
  --checkbox-radius: 12px;
  --clickable-icon-radius: 8px;
  --code-radius: 8px;
  --file-header-background: #050c0a;
  --file-header-background-focused: #050c0a;
  --font-mermaid: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Noto Serif KR', serif, 'Arial';
  --font-text: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Noto Serif KR', serif;
  --footnote-radius: 8px;
  --h1-color: #4cbd97;
  --h2-color: #4cbd97;
  --h3-color: #4cbd97;
  --h4-color: #4cbd97;
  --h5-color: #4cbd97;
  --h6-color: #4cbd97;
  --highlight-hue: 60;
  --inline-title-color: #4cbd97;
  --input-radius: 12px;
  --italic-color: #4cbd97;
  --menu-radius: 12px;
  --modal-background: #050c0a;
  --modal-radius: 16px;
  --nav-item-radius: 8px;
  --nav-tag-radius: 8px;
  --pdf-background: #050c0a;
  --pdf-page-background: #050c0a;
  --pdf-sidebar-background: #050c0a;
  --primary: #a5d5c5;
  --prompt-background: #050c0a;
  --radius-l: 16px;
  --radius-m: 12px;
  --radius-s: 8px;
  --ribbon-background-collapsed: #050c0a;
  --scrollbar-radius: 16px;
  --search-result-background: #050c0a;
  --secondary: #30735d;
  --setting-items-radius: 16px;
  --slider-thumb-radius: 12px;
  --status-bar-radius: 12px 0 0 0;
  --suggestion-background: #050c0a;
  --tab-background-active: #050c0a;
  --tab-radius: 8px;
  --text: #dfece8;
  --toggle-radius: 12px;
  --toggle-thumb-radius: 12px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(223, 236, 232);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(5, 12, 10);
  color: rgb(223, 236, 232);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(223, 236, 232);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(223, 236, 232);
}

body div#quartz-root {
  background-color: rgb(5, 12, 10);
  color: rgb(223, 236, 232);
}`,
    typography: `body .page article p > b, b {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration: rgb(76, 189, 151);
  text-decoration-color: rgb(76, 189, 151);
}

body .page article p > em, em {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration: rgb(76, 189, 151);
  text-decoration-color: rgb(76, 189, 151);
}

body .page article p > i, i {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration: rgb(76, 189, 151);
  text-decoration-color: rgb(76, 189, 151);
}

body .page article p > strong, strong {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration: rgb(76, 189, 151);
  text-decoration-color: rgb(76, 189, 151);
}

body .text-highlight {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(223, 236, 232);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 236, 232) none 0px;
  text-decoration: line-through rgb(223, 236, 232);
  text-decoration-color: rgb(223, 236, 232);
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
  background-color: rgb(5, 12, 10);
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body ul.overflow {
  background-color: rgb(5, 12, 10);
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
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
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body figcaption {
  color: rgb(223, 236, 232);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body img {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body video {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body .transclude-inner {
  border-bottom-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
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
  background-color: rgb(5, 12, 10);
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
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

body ::-webkit-scrollbar-corner {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

body ::-webkit-scrollbar-track {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
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
  color: rgb(223, 236, 232);
  font-family: "Noto Sans Old Persian", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
  color: rgb(223, 236, 232);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

body li.section-li > .section .meta {
  font-family: "Noto Sans Old Persian", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
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
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
  color: rgb(223, 236, 232);
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
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
  },
  light: {},
};
