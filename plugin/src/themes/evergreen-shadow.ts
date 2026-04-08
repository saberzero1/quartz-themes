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
  --accent: #4cbd97 !important;
  --background-primary: #050c0a !important;
  --bases-cards-background: #050c0a !important;
  --bases-cards-radius: 12px !important;
  --bases-embed-border-radius: 8px !important;
  --bases-table-cell-background-active: #050c0a !important;
  --bases-table-container-border-radius: 8px !important;
  --bases-table-header-background: #050c0a !important;
  --bases-table-summary-background: #050c0a !important;
  --bodyFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #4cbd97 !important;
  --button-radius: 12px !important;
  --callout-radius: 8px;
  --canvas-background: #050c0a !important;
  --canvas-controls-radius: 8px !important;
  --checkbox-marker-color: #050c0a !important;
  --checkbox-radius: 12px !important;
  --clickable-icon-radius: 8px !important;
  --code-radius: 8px !important;
  --codeFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-header-background: #050c0a !important;
  --file-header-background-focused: #050c0a !important;
  --font-mermaid: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Noto Serif KR, serif, Arial' !important;
  --font-text: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Noto Serif KR', serif !important;
  --footnote-radius: 8px !important;
  --h1-color: #4cbd97 !important;
  --h2-color: #4cbd97 !important;
  --h3-color: #4cbd97 !important;
  --h4-color: #4cbd97 !important;
  --h5-color: #4cbd97 !important;
  --h6-color: #4cbd97 !important;
  --headerFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight-hue: 60 !important;
  --inline-title-color: #4cbd97 !important;
  --input-radius: 12px !important;
  --italic-color: #4cbd97 !important;
  --light: #050c0a !important;
  --menu-radius: 12px !important;
  --modal-background: #050c0a !important;
  --modal-radius: 16px !important;
  --nav-item-radius: 8px !important;
  --nav-tag-radius: 8px !important;
  --pdf-background: #050c0a !important;
  --pdf-page-background: #050c0a !important;
  --pdf-sidebar-background: #050c0a !important;
  --primary: #a5d5c5 !important;
  --prompt-background: #050c0a !important;
  --radius-l: 16px !important;
  --radius-m: 12px !important;
  --radius-s: 8px !important;
  --ribbon-background-collapsed: #050c0a !important;
  --scrollbar-radius: 16px !important;
  --search-result-background: #050c0a !important;
  --secondary: #30735d !important;
  --setting-items-radius: 16px !important;
  --slider-thumb-radius: 12px !important;
  --status-bar-radius: 12px 0 0 0 !important;
  --suggestion-background: #050c0a !important;
  --tab-background-active: #050c0a !important;
  --tab-radius: 8px !important;
  --text: #dfece8 !important;
  --titleFont: Noto Serif KR, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --toggle-radius: 12px !important;
  --toggle-thumb-radius: 12px !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  color: rgb(223, 236, 232);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(5, 12, 10);
  color: rgb(223, 236, 232);
}

html body .canvas-node {
  border-color: rgb(223, 236, 232);
}

html body .canvas-node-content {
  color: rgb(223, 236, 232);
}

html body .canvas-node-group {
  border-color: rgb(223, 236, 232);
}

html body .canvas-sidebar {
  border-color: rgb(223, 236, 232);
}

html body .page > div#quartz-body div.sidebar {
  color: rgb(223, 236, 232);
}

html body .page > div#quartz-body div.sidebar.right {
  color: rgb(223, 236, 232);
}

html body div#quartz-root {
  background-color: rgb(5, 12, 10);
  color: rgb(223, 236, 232);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration-color: rgb(76, 189, 151);
}

html body .page article p > em, html em {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration-color: rgb(76, 189, 151);
}

html body .page article p > i, html i {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration-color: rgb(76, 189, 151);
}

html body .page article p > strong, html strong {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(76, 189, 151) none 0px;
  text-decoration-color: rgb(76, 189, 151);
}

html body .text-highlight {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body del {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.task-list-item input[type="checkbox"] {
  border-radius: 12px;
}

html body p {
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    links: `html body a.external, html footer a {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.broken {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html body ol.overflow {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body ul.overflow {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
    blockquotes: `html body blockquote {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body table {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 202.984px;
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
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body figcaption {
  color: rgb(223, 236, 232);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body img {
  border-bottom-color: rgb(76, 189, 151);
  border-left-color: rgb(76, 189, 151);
  border-right-color: rgb(76, 189, 151);
  border-top-color: rgb(76, 189, 151);
}

html body video {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
    embeds: `html body .file-embed {
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
}

html body .transclude {
  border-bottom-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body .transclude-inner {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "Noto Sans Old Persian", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(5, 12, 10);
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
}

html body .search > .search-container > .search-space > * {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(76, 189, 151);
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html body .callout {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body ::-webkit-scrollbar {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}

html body ::-webkit-scrollbar-track {
  background: rgb(5, 12, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(5, 12, 10);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "Noto Sans Old Persian", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}`,
    footer: `html body footer {
  border-top-left-radius: 12px;
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(223, 236, 232);
  font-family: "Noto Sans Old Persian", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
  color: rgb(223, 236, 232);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "Noto Sans Old Persian", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}

html body li.section-li > .section .meta {
  font-family: "Noto Sans Old Persian", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
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
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
  color: rgb(223, 236, 232);
}

html body .metadata {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", "Noto Serif KR", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

html body progress {
  border-bottom-color: rgb(223, 236, 232);
  border-left-color: rgb(223, 236, 232);
  border-right-color: rgb(223, 236, 232);
  border-top-color: rgb(223, 236, 232);
}`,
  },
  light: {},
};
