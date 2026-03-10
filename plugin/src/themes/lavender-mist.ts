import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "lavender-mist",
    modes: ["light"],
    variations: [],
    fonts: ["noto-serif-kr"],
  },
  dark: {},
  light: {
    base: `:root:root {
  --accent: #96539d !important;
  --background-primary: #e7e9f3 !important;
  --bases-cards-background: #e7e9f3 !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: #e7e9f3 !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: #e7e9f3 !important;
  --bases-table-summary-background: #e7e9f3 !important;
  --blur-background: color-mix(in srgb, #e7e9f3 65%, transparent) linear-gradient(#e7e9f3, color-mix(in srgb, #e7e9f3 65%, transparent)) !important;
  --bodyFont: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #96539d !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: #e7e9f3 !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: #e7e9f3 !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: #e7e9f3 !important;
  --file-header-background-focused: #e7e9f3 !important;
  --font-mermaid: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Noto Serif KR', serif, 'Arial' !important;
  --font-text: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Noto Serif KR', serif !important;
  --footnote-radius: 8px !important;
  --h1-color: #96539d !important;
  --h2-color: #96539d !important;
  --h3-color: #96539d !important;
  --h4-color: #96539d !important;
  --h5-color: #96539d !important;
  --h6-color: #96539d !important;
  --headerFont: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 30 !important;
  --inline-title-color: #96539d !important;
  --input-radius: 12px !important;
  --italic-color: #96539d !important;
  --light: #e7e9f3 !important;
  --menu-radius: 12px !important;
  --modal-background: #e7e9f3 !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #e7e9f3 !important;
  --pdf-page-background: #e7e9f3 !important;
  --pdf-sidebar-background: #e7e9f3 !important;
  --primary: #313a5e !important;
  --prompt-background: #e7e9f3 !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --raised-background: color-mix(in srgb, #e7e9f3 65%, transparent) linear-gradient(#e7e9f3, color-mix(in srgb, #e7e9f3 65%, transparent)) !important;
  --ribbon-background-collapsed: #e7e9f3 !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: #e7e9f3 !important;
  --secondary: #af8dc3 !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: #e7e9f3 !important;
  --tab-background-active: #e7e9f3 !important;
  --tab-radius: 8px !important;
  --text: #121421 !important;
  --titleFont: '??', 'Noto Serif KR', serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(18, 20, 33);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(231, 233, 243);
  color: rgb(18, 20, 33);
}

body .page > div#quartz-body div.sidebar {
  color: rgb(18, 20, 33);
}

body .page > div#quartz-body div.sidebar.right {
  color: rgb(18, 20, 33);
}

body div#quartz-root {
  background-color: rgb(231, 233, 243);
  color: rgb(18, 20, 33);
}`,
    typography: `body .page article p > b, b {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration: rgb(150, 83, 157);
  text-decoration-color: rgb(150, 83, 157);
}

body .page article p > em, em {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration: rgb(150, 83, 157);
  text-decoration-color: rgb(150, 83, 157);
}

body .page article p > i, i {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration: rgb(150, 83, 157);
  text-decoration-color: rgb(150, 83, 157);
}

body .page article p > strong, strong {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(150, 83, 157) none 0px;
  text-decoration: rgb(150, 83, 157);
  text-decoration-color: rgb(150, 83, 157);
}

body .text-highlight {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  color: rgb(18, 20, 33);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(18, 20, 33) none 0px;
  text-decoration: line-through rgb(18, 20, 33);
  text-decoration-color: rgb(18, 20, 33);
}

body p {
  font-family: "Noto Serif KR", serif;
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
  background-color: rgb(231, 233, 243);
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body ul.overflow {
  background-color: rgb(231, 233, 243);
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
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
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body figcaption {
  color: rgb(18, 20, 33);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body img {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body video {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

body .transclude {
  border-bottom-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body .transclude-inner {
  border-bottom-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
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
  font-family: "Noto Serif KR", serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(231, 233, 243);
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
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(150, 83, 157);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

body ::-webkit-scrollbar {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

body ::-webkit-scrollbar-corner {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}

body ::-webkit-scrollbar-track {
  background: rgb(231, 233, 243) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(231, 233, 243);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Noto Serif KR", serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Noto Serif KR", serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "Noto Serif KR", serif;
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
  font-family: "Noto Serif KR", serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(18, 20, 33);
  font-family: "Noto Serif KR", serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
  color: rgb(18, 20, 33);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Noto Serif KR", serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}

body li.section-li > .section .meta {
  font-family: "Noto Serif KR", serif;
}

body ul.section-ul {
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
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
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
  color: rgb(18, 20, 33);
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
  border-bottom-color: rgb(18, 20, 33);
  border-left-color: rgb(18, 20, 33);
  border-right-color: rgb(18, 20, 33);
  border-top-color: rgb(18, 20, 33);
}`,
  },
};
