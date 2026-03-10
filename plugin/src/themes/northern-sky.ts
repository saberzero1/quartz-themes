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
  --accent: #62a12b !important;
  --background-primary: #dfedf7 !important;
  --bases-cards-background: #dfedf7 !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: #dfedf7 !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: #dfedf7 !important;
  --bases-table-summary-background: #dfedf7 !important;
  --blur-background: color-mix(in srgb, #dfedf7 65%, transparent) linear-gradient(#dfedf7, color-mix(in srgb, #dfedf7 65%, transparent)) !important;
  --bodyFont: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #62a12b !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: #dfedf7 !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: #dfedf7 !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: #dfedf7 !important;
  --file-header-background-focused: #dfedf7 !important;
  --font-mermaid: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Finlandica', sans-serif, 'Arial' !important;
  --font-text: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Finlandica', sans-serif !important;
  --footnote-radius: 8px !important;
  --h1-color: #62a12b !important;
  --h2-color: #62a12b !important;
  --h3-color: #62a12b !important;
  --h4-color: #62a12b !important;
  --h5-color: #62a12b !important;
  --h6-color: #62a12b !important;
  --headerFont: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #62a12b !important;
  --input-radius: 12px !important;
  --italic-color: #62a12b !important;
  --light: #dfedf7 !important;
  --menu-radius: 12px !important;
  --modal-background: #dfedf7 !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #dfedf7 !important;
  --pdf-page-background: #dfedf7 !important;
  --pdf-sidebar-background: #dfedf7 !important;
  --primary: #1f5175 !important;
  --prompt-background: #dfedf7 !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #dfedf7 65%, transparent) linear-gradient(#dfedf7, color-mix(in srgb, #dfedf7 65%, transparent)) !important;
  --ribbon-background-collapsed: #dfedf7 !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: #dfedf7 !important;
  --secondary: #deab82 !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: #dfedf7 !important;
  --tab-background-active: #dfedf7 !important;
  --tab-radius: 8px !important;
  --tab-radius-active: 12px !important;
  --text: #061218 !important;
  --titleFont: '??', 'Finlandica', sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(6, 18, 24);
}

html body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(223, 237, 247);
  color: rgb(6, 18, 24);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(6, 18, 24);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(6, 18, 24);
}

html body div#quartz-root {
  background-color: rgb(223, 237, 247);
  color: rgb(6, 18, 24);
}`,
    typography: `html body .page article p > b, b {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

html body .page article p > em, em {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

html body .page article p > i, i {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

html body .page article p > strong, strong {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(98, 161, 43) none 0px;
  text-decoration: rgb(98, 161, 43);
  text-decoration-color: rgb(98, 161, 43);
}

html body .text-highlight {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body del {
  color: rgb(6, 18, 24);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(6, 18, 24) none 0px;
  text-decoration: line-through rgb(6, 18, 24);
  text-decoration-color: rgb(6, 18, 24);
}

html body p {
  font-family: Finlandica, sans-serif;
}`,
    links: `html body a.external, footer a {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html body ol.overflow {
  background-color: rgb(223, 237, 247);
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body ul.overflow {
  background-color: rgb(223, 237, 247);
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body table {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 183.297px;
}`,
    code: `html body code {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body pre > code, pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body pre:has(> code) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    images: `html body audio {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body figcaption {
  color: rgb(6, 18, 24);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body img {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body video {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .transclude {
  border-bottom-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body .transclude-inner {
  border-bottom-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="bug"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="danger"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="example"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="failure"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="info"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="note"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="question"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="quote"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="success"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="tip"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="todo"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .callout[data-callout="warning"] {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-family: Finlandica, sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(223, 237, 247);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > * {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body h1 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, h2.page-title a {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(98, 161, 43);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body ::-webkit-scrollbar {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}

html body ::-webkit-scrollbar-track {
  background: rgb(223, 237, 247) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(223, 237, 247);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: Finlandica, sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: Finlandica, sans-serif;
}

html body .explorer .explorer-content ul.explorer-ul li a {
  font-family: Finlandica, sans-serif;
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html body footer {
  border-top-left-radius: 12px;
  font-family: Finlandica, sans-serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(6, 18, 24);
  font-family: Finlandica, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
  color: rgb(6, 18, 24);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Finlandica, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}

html body li.section-li > .section .meta {
  font-family: Finlandica, sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
    darkmode: `html body .darkmode {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
  color: rgb(6, 18, 24);
}

html body .metadata {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body progress {
  border-bottom-color: rgb(6, 18, 24);
  border-left-color: rgb(6, 18, 24);
  border-right-color: rgb(6, 18, 24);
  border-top-color: rgb(6, 18, 24);
}`,
  },
};
