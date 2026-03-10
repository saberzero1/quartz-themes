import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "aurora-twilight",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cabin", "quicksand"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent: rgb(155, 182, 47) !important;
  --background-primary: rgb(2, 4, 34) !important;
  --background-secondary: rgb(0, 0, 0) !important;
  --bases-cards-background: rgb(2, 4, 34) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: rgb(2, 4, 34) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: rgb(2, 4, 34) !important;
  --bases-table-summary-background: rgb(2, 4, 34) !important;
  --bodyFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d86679 !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: rgb(2, 4, 34) !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: rgb(2, 4, 34) !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: rgb(2, 4, 34) !important;
  --file-header-background-focused: rgb(2, 4, 34) !important;
  --font-mermaid: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', Cabin, Quicksand, 'Arial' !important;
  --font-text: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Cabin, Quicksand !important;
  --footnote-radius: 8px !important;
  --h1-color: #ffc444 !important;
  --h2-color: #faa250 !important;
  --h3-color: #f88765 !important;
  --h4-color: #f88773 !important;
  --h5-color: #f88773 !important;
  --h6-color: #f88773 !important;
  --headerFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #ffc444 !important;
  --input-radius: 12px !important;
  --italic-color: #82c0e9 !important;
  --light: rgb(2, 4, 34) !important;
  --lightgray: rgb(0, 0, 0) !important;
  --menu-background: rgb(0, 0, 0) !important;
  --menu-radius: 12px !important;
  --modal-background: rgb(2, 4, 34) !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: rgb(2, 4, 34) !important;
  --pdf-page-background: rgb(2, 4, 34) !important;
  --pdf-sidebar-background: rgb(2, 4, 34) !important;
  --primary: rgb(119, 248, 194) !important;
  --prompt-background: rgb(2, 4, 34) !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --ribbon-background: rgb(0, 0, 0) !important;
  --ribbon-background-collapsed: rgb(2, 4, 34) !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: rgb(2, 4, 34) !important;
  --secondary: rgb(7, 151, 57) !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-background: rgb(0, 0, 0) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: rgb(2, 4, 34) !important;
  --tab-background-active: rgb(2, 4, 34) !important;
  --tab-container-background: rgb(0, 0, 0) !important;
  --tab-radius: 8px !important;
  --tab-switcher-background: rgb(0, 0, 0) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(0, 0, 0), transparent) !important;
  --text: rgb(221, 221, 253) !important;
  --titleFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(0, 0, 0) !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(221, 221, 253);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
  color: rgb(221, 221, 253);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  color: rgb(221, 221, 253);
}

body div#quartz-root {
  background-color: rgb(2, 4, 34);
  color: rgb(221, 221, 253);
}`,
    typography: `body .page article p > b, b {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

body .page article p > em, em {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

body .page article p > i, i {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

body .page article p > strong, strong {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

body .text-highlight {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(221, 221, 253);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(221, 221, 253) none 0px;
  text-decoration: line-through rgb(221, 221, 253);
  text-decoration-color: rgb(221, 221, 253);
}

body p {
  font-family: Cabin, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body ol.overflow {
  background-color: rgb(2, 4, 34);
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body ul.overflow {
  background-color: rgb(2, 4, 34);
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body table {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.344px;
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
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body figcaption {
  color: rgb(221, 221, 253);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body img {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body video {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body .transclude-inner {
  border-bottom-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: Cabin, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(2, 4, 34);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
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
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(250, 162, 80);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(248, 135, 101);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(2, 4, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(2, 4, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Cabin, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Cabin, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Cabin, sans-serif;
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
  background-color: rgb(0, 0, 0);
  border-top-left-radius: 12px;
  font-family: Cabin, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(221, 221, 253);
  font-family: Cabin, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
  color: rgb(221, 221, 253);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Cabin, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}

body li.section-li > .section .meta {
  font-family: Cabin, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
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
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
  color: rgb(221, 221, 253);
}

body .metadata {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body progress {
  border-bottom-color: rgb(221, 221, 253);
  border-left-color: rgb(221, 221, 253);
  border-right-color: rgb(221, 221, 253);
  border-top-color: rgb(221, 221, 253);
}`,
  },
  light: {
    base: `:root:root {
  --accent: rgb(181, 208, 73) !important;
  --background-primary: rgb(221, 223, 253) !important;
  --background-secondary: rgb(255, 255, 255) !important;
  --bases-cards-background: rgb(221, 223, 253) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: rgb(221, 223, 253) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: rgb(221, 223, 253) !important;
  --bases-table-summary-background: rgb(221, 223, 253) !important;
  --blur-background: color-mix(in srgb, rgb(221, 223, 253) 65%, transparent) linear-gradient(rgb(221, 223, 253), color-mix(in srgb, rgb(221, 223, 253) 65%, transparent)) !important;
  --bodyFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #d86679 !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: rgb(221, 223, 253) !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: rgb(221, 223, 253) !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: rgb(221, 223, 253) !important;
  --file-header-background-focused: rgb(221, 223, 253) !important;
  --font-mermaid: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', Cabin, Quicksand, 'Arial' !important;
  --font-text: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Cabin, Quicksand !important;
  --footnote-radius: 8px !important;
  --h1-color: #ffc444 !important;
  --h2-color: #faa250 !important;
  --h3-color: #f88765 !important;
  --h4-color: #f88773 !important;
  --h5-color: #f88773 !important;
  --h6-color: #f88773 !important;
  --headerFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #ffc444 !important;
  --input-radius: 12px !important;
  --italic-color: #82c0e9 !important;
  --light: rgb(221, 223, 253) !important;
  --lightgray: rgb(255, 255, 255) !important;
  --menu-background: rgb(255, 255, 255) !important;
  --menu-radius: 12px !important;
  --modal-background: rgb(221, 223, 253) !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: rgb(221, 223, 253) !important;
  --pdf-page-background: rgb(221, 223, 253) !important;
  --pdf-sidebar-background: rgb(221, 223, 253) !important;
  --primary: rgb(7, 136, 82) !important;
  --prompt-background: rgb(221, 223, 253) !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, rgb(221, 223, 253) 65%, transparent) linear-gradient(rgb(221, 223, 253), color-mix(in srgb, rgb(221, 223, 253) 65%, transparent)) !important;
  --ribbon-background: rgb(255, 255, 255) !important;
  --ribbon-background-collapsed: rgb(221, 223, 253) !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: rgb(221, 223, 253) !important;
  --secondary: rgb(104, 248, 154) !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-background: rgb(255, 255, 255) !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: rgb(221, 223, 253) !important;
  --tab-background-active: rgb(221, 223, 253) !important;
  --tab-container-background: rgb(255, 255, 255) !important;
  --tab-radius: 8px !important;
  --tab-switcher-background: rgb(255, 255, 255) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(255, 255, 255), transparent) !important;
  --text: rgb(2, 2, 34) !important;
  --titleFont: '??', Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(255, 255, 255) !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(2, 2, 34);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(2, 2, 34);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  color: rgb(2, 2, 34);
}

body div#quartz-root {
  background-color: rgb(221, 223, 253);
  color: rgb(2, 2, 34);
}`,
    typography: `body .page article p > b, b {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

body .page article p > em, em {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

body .page article p > i, i {
  color: rgb(130, 192, 233);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(130, 192, 233) none 0px;
  text-decoration: rgb(130, 192, 233);
  text-decoration-color: rgb(130, 192, 233);
}

body .page article p > strong, strong {
  color: rgb(216, 102, 121);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 102, 121) none 0px;
  text-decoration: rgb(216, 102, 121);
  text-decoration-color: rgb(216, 102, 121);
}

body .text-highlight {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(2, 2, 34);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(2, 2, 34) none 0px;
  text-decoration: line-through rgb(2, 2, 34);
  text-decoration-color: rgb(2, 2, 34);
}

body p {
  font-family: Cabin, sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body ol.overflow {
  background-color: rgb(221, 223, 253);
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body ul.overflow {
  background-color: rgb(221, 223, 253);
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body table {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 176.344px;
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
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body figcaption {
  color: rgb(2, 2, 34);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body img {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body video {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body .transclude-inner {
  border-bottom-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: Cabin, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(221, 223, 253);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
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
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(250, 162, 80);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 196, 68);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(248, 135, 101);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(248, 135, 115);
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

body ::-webkit-scrollbar-corner {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}

body ::-webkit-scrollbar-track {
  background: rgb(221, 223, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(221, 223, 253);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Cabin, sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Cabin, sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Cabin, sans-serif;
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
  background-color: rgb(255, 255, 255);
  border-top-left-radius: 12px;
  font-family: Cabin, sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(2, 2, 34);
  font-family: Cabin, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
  color: rgb(2, 2, 34);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Cabin, sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}

body li.section-li > .section .meta {
  font-family: Cabin, sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
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
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
  color: rgb(2, 2, 34);
}

body .metadata {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Cabin, Quicksand, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body progress {
  border-bottom-color: rgb(2, 2, 34);
  border-left-color: rgb(2, 2, 34);
  border-right-color: rgb(2, 2, 34);
  border-top-color: rgb(2, 2, 34);
}`,
  },
};
