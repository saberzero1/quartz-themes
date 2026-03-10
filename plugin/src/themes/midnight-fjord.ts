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
  --accent: #95d45e !important;
  --background-primary: rgba(11, 26, 39, 0.87) !important;
  --bases-cards-background: rgba(11, 26, 39, 0.87) !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: rgba(11, 26, 39, 0.87) !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: rgba(11, 26, 39, 0.87) !important;
  --bases-table-summary-background: rgba(11, 26, 39, 0.87) !important;
  --bodyFont: Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #95d45e !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: rgba(11, 26, 39, 0.87) !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: rgba(11, 26, 39, 0.87) !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: rgba(11, 26, 39, 0.87) !important;
  --file-header-background-focused: rgba(11, 26, 39, 0.87) !important;
  --font-mermaid: Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Finlandica, sans-serif, Arial' !important;
  --font-text: Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Finlandica', sans-serif !important;
  --footnote-radius: 8px !important;
  --h1-color: #95d45e !important;
  --h2-color: #95d45e !important;
  --h3-color: #95d45e !important;
  --h4-color: #95d45e !important;
  --h5-color: #95d45e !important;
  --h6-color: #95d45e !important;
  --headerFont: Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #95d45e !important;
  --input-radius: 12px !important;
  --italic-color: #95d45e !important;
  --light: rgba(11, 26, 39, 0.87) !important;
  --menu-radius: 12px !important;
  --modal-background: rgba(11, 26, 39, 0.87) !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: rgba(11, 26, 39, 0.87) !important;
  --pdf-page-background: rgba(11, 26, 39, 0.87) !important;
  --pdf-sidebar-background: rgba(11, 26, 39, 0.87) !important;
  --primary: #8abce0 !important;
  --prompt-background: rgba(11, 26, 39, 0.87) !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --ribbon-background-collapsed: rgba(11, 26, 39, 0.87) !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: rgba(11, 26, 39, 0.87) !important;
  --secondary: #7d4a21 !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: rgba(11, 26, 39, 0.87) !important;
  --tab-background-active: rgba(11, 26, 39, 0.87) !important;
  --tab-radius: 8px !important;
  --text: #e7f3f9 !important;
  --titleFont: Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(231, 243, 249);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgba(11, 26, 39, 0.87);
  color: rgb(231, 243, 249);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(231, 243, 249);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(231, 243, 249);
}

html body div#quartz-root {
  background-color: rgba(11, 26, 39, 0.87);
  color: rgb(231, 243, 249);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

html body .page article p > em, html em {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

html body .page article p > i, html i {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

html body .page article p > strong, html strong {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(149, 212, 94) none 0px;
  text-decoration: rgb(149, 212, 94);
  text-decoration-color: rgb(149, 212, 94);
}

html body .text-highlight {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body del {
  color: rgb(231, 243, 249);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(231, 243, 249) none 0px;
  text-decoration: line-through rgb(231, 243, 249);
  text-decoration-color: rgb(231, 243, 249);
}

html body p {
  font-family: Finlandica, sans-serif;
}`,
    links: `html body a.external, html footer a {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html body ol.overflow {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body ul.overflow {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
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

html body pre > code, html pre:has(> code) {
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
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body figcaption {
  color: rgb(231, 243, 249);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body img {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body video {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .transclude {
  border-bottom-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body .transclude-inner {
  border-bottom-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
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
  background-color: rgba(11, 26, 39, 0.87);
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

html body .search > .search-container > .search-space > .search-layout, html .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body h1 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(149, 212, 94);
  font-family: "??", Finlandica, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body ::-webkit-scrollbar {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

html body ::-webkit-scrollbar-corner {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

html body ::-webkit-scrollbar-thumb {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
}

html body ::-webkit-scrollbar-track {
  background: rgba(11, 26, 39, 0.87) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgba(11, 26, 39, 0.87);
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
  color: rgb(231, 243, 249);
  font-family: Finlandica, sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
  color: rgb(231, 243, 249);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: Finlandica, sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}

html body li.section-li > .section .meta {
  font-family: Finlandica, sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
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
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
  color: rgb(231, 243, 249);
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
  border-bottom-color: rgb(231, 243, 249);
  border-left-color: rgb(231, 243, 249);
  border-right-color: rgb(231, 243, 249);
  border-top-color: rgb(231, 243, 249);
}`,
  },
  light: {},
};
