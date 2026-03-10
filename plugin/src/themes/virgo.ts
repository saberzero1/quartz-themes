import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "virgo", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #262626 !important;
  --background-secondary-alt: #262626 !important;
  --bases-cards-background: #262626 !important;
  --bases-table-border-color: #cccc !important;
  --bases-table-cell-background-active: #262626 !important;
  --bases-table-header-background: #262626 !important;
  --bases-table-summary-background: #262626 !important;
  --bodyFont: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #262626 !important;
  --checkbox-marker-color: #262626 !important;
  --codeFont: '??', "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --color-jk-purple: #896a9e !important;
  --color-jk-purple-33: #896a9e33 !important;
  --divider-color: #f000 !important;
  --file-header-background: #262626 !important;
  --file-header-background-focused: #262626 !important;
  --file-header-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --font-jk-base: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --font-jk-mono: "Code New Roman", romanFont, "LXGW WenKai Mono" !important;
  --font-jk-text: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --font-mermaid: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Code New Roman", romanFont, "LXGW WenKai Mono" !important;
  --font-print: '??', '??', "LXGW WenKai GB Screen R", jinkaiFont, 'Arial' !important;
  --font-text: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --headerFont: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --light: #262626 !important;
  --lightgray: #262626 !important;
  --metadata-input-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #262626 !important;
  --pdf-background: #262626 !important;
  --pdf-page-background: #262626 !important;
  --pdf-sidebar-background: #262626 !important;
  --prompt-background: #262626 !important;
  --ribbon-background-collapsed: #262626 !important;
  --search-result-background: #262626 !important;
  --status-bar-border-color: #f000 !important;
  --suggestion-background: #262626 !important;
  --tab-background-active: #262626 !important;
  --tab-outline-color: #f000 !important;
  --table-border-color: #cccc !important;
  --table-header-border-color: #cccc !important;
  --titleFont: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background-focused: #262626 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  border-left-color: rgba(255, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(38, 38, 38);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body ol.overflow {
  background-color: rgb(38, 38, 38);
}

body ul.overflow {
  background-color: rgb(38, 38, 38);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  border-top-style: solid;
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 169.891px;
}

body td {
  border-bottom-color: rgba(204, 204, 204, 0.8);
  border-left-color: rgba(204, 204, 204, 0.8);
  border-right-color: rgba(204, 204, 204, 0.8);
  border-top-color: rgba(204, 204, 204, 0.8);
}

body th {
  border-bottom-color: rgba(204, 204, 204, 0.8);
  border-left-color: rgba(204, 204, 204, 0.8);
  border-right-color: rgba(204, 204, 204, 0.8);
  border-top-color: rgba(204, 204, 204, 0.8);
}`,
    code: `body code {
  font-family: "??", "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `body figcaption {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    search: `body .search > .search-button {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(38, 38, 38);
}

body .search > .search-container > .search-space > * {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(255, 0, 0, 0);
  border-left-color: rgba(255, 0, 0, 0);
  border-right-color: rgba(255, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-corner {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}

body ::-webkit-scrollbar-track {
  background: rgb(38, 38, 38) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(38, 38, 38);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  border-bottom-color: rgba(255, 0, 0, 0);
  border-left-color: rgba(255, 0, 0, 0);
  border-right-color: rgba(255, 0, 0, 0);
  border-top-color: rgba(255, 0, 0, 0);
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 28px;
}

body .metadata-properties {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page-header h2.page-title {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  font-family: "??", "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-hover: #896a9e33 !important;
  --background-primary: #f4f7fb !important;
  --background-primary-alt: #fff7 !important;
  --background-secondary: #f4f7fb !important;
  --background-secondary-alt: #f4f7fb !important;
  --bases-cards-background: #f4f7fb !important;
  --bases-cards-cover-background: #fff7 !important;
  --bases-table-border-color: #cccc !important;
  --bases-table-cell-background-active: #f4f7fb !important;
  --bases-table-cell-background-disabled: #fff7 !important;
  --bases-table-group-background: #fff7 !important;
  --bases-table-header-background: #f4f7fb !important;
  --bases-table-header-background-hover: #896a9e33 !important;
  --bases-table-summary-background: #f4f7fb !important;
  --bases-table-summary-background-hover: #896a9e33 !important;
  --blur-background: color-mix(in srgb, #f4f7fb 65%, transparent) linear-gradient(#f4f7fb, color-mix(in srgb, #f4f7fb 65%, transparent)) !important;
  --bodyFont: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #f4f7fb !important;
  --checkbox-marker-color: #f4f7fb !important;
  --code-background: #fff7 !important;
  --code-bracket-background: #896a9e33 !important;
  --codeFont: '??', "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --color-jk-purple: #896a9e !important;
  --color-jk-purple-33: #896a9e33 !important;
  --divider-color: #f000 !important;
  --file-header-background: #f4f7fb !important;
  --file-header-background-focused: #f4f7fb !important;
  --file-header-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --font-jk-base: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --font-jk-mono: "Code New Roman", romanFont, "LXGW WenKai Mono" !important;
  --font-jk-text: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --font-mermaid: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Code New Roman", romanFont, "LXGW WenKai Mono" !important;
  --font-print: '??', '??', "LXGW WenKai GB Screen R", jinkaiFont, 'Arial' !important;
  --font-text: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "LXGW WenKai GB Screen R", jinkaiFont !important;
  --footnote-input-background-active: #896a9e33 !important;
  --headerFont: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: #896a9e33 !important;
  --light: #f4f7fb !important;
  --lightgray: #f4f7fb !important;
  --menu-background: #f4f7fb !important;
  --metadata-input-background-active: #896a9e33 !important;
  --metadata-input-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-background-active: #896a9e33 !important;
  --metadata-label-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-property-background-active: #896a9e33 !important;
  --modal-background: #f4f7fb !important;
  --nav-item-background-active: #896a9e33 !important;
  --nav-item-background-hover: #896a9e33 !important;
  --pdf-background: #f4f7fb !important;
  --pdf-page-background: #f4f7fb !important;
  --pdf-sidebar-background: #f4f7fb !important;
  --prompt-background: #f4f7fb !important;
  --raised-background: color-mix(in srgb, #f4f7fb 65%, transparent) linear-gradient(#f4f7fb, color-mix(in srgb, #f4f7fb 65%, transparent)) !important;
  --ribbon-background: #f4f7fb !important;
  --ribbon-background-collapsed: #f4f7fb !important;
  --search-result-background: #f4f7fb !important;
  --setting-items-background: #fff7 !important;
  --status-bar-background: #f4f7fb !important;
  --status-bar-border-color: #f000 !important;
  --suggestion-background: #f4f7fb !important;
  --tab-background-active: #f4f7fb !important;
  --tab-container-background: #f4f7fb !important;
  --tab-outline-color: #f000 !important;
  --tab-switcher-background: #f4f7fb !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4f7fb, transparent) !important;
  --table-border-color: #cccc !important;
  --table-header-border-color: #cccc !important;
  --textHighlight: #896a9e33 !important;
  --titleFont: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #f4f7fb !important;
  --titlebar-background-focused: #f4f7fb !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(244, 247, 251);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(244, 247, 251);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(244, 247, 251);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(255, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(244, 247, 251);
  border-left-color: rgba(255, 0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(244, 247, 251);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body ol.overflow {
  background-color: rgb(244, 247, 251);
}

body ul.overflow {
  background-color: rgb(244, 247, 251);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  border-top-style: solid;
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 169.891px;
}

body td {
  border-bottom-color: rgba(204, 204, 204, 0.8);
  border-left-color: rgba(204, 204, 204, 0.8);
  border-right-color: rgba(204, 204, 204, 0.8);
  border-top-color: rgba(204, 204, 204, 0.8);
}

body th {
  border-bottom-color: rgba(204, 204, 204, 0.8);
  border-left-color: rgba(204, 204, 204, 0.8);
  border-right-color: rgba(204, 204, 204, 0.8);
  border-top-color: rgba(204, 204, 204, 0.8);
}`,
    code: `body code {
  font-family: "??", "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(255, 255, 255, 0.467);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(255, 255, 255, 0.467);
}

body pre > code, pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.467);
}

body pre:has(> code) {
  background-color: rgba(255, 255, 255, 0.467);
}`,
    images: `body figcaption {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body img {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}`,
    embeds: `body .file-embed {
  background-color: rgba(255, 255, 255, 0.467);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    search: `body .search > .search-button {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(244, 247, 251);
}

body .search > .search-container > .search-space > * {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(137, 106, 158, 0.2);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(244, 247, 251);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(137, 106, 158, 0.2);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(137, 106, 158, 0.2);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(255, 0, 0, 0);
  border-left-color: rgba(255, 0, 0, 0);
  border-right-color: rgba(255, 0, 0, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(244, 247, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 247, 251);
}

body ::-webkit-scrollbar-corner {
  background: rgb(244, 247, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 247, 251);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(244, 247, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 247, 251);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(244, 247, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 247, 251);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(244, 247, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 247, 251);
}

body ::-webkit-scrollbar-track {
  background: rgb(244, 247, 251) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(244, 247, 251);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(137, 106, 158, 0.2);
}`,
    footer: `body footer {
  background-color: rgb(244, 247, 251);
  border-bottom-color: rgba(255, 0, 0, 0);
  border-left-color: rgba(255, 0, 0, 0);
  border-right-color: rgba(255, 0, 0, 0);
  border-top-color: rgba(255, 0, 0, 0);
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 28px;
}

body .metadata-properties {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(244, 247, 251);
}

body .page-header h2.page-title {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "LXGW WenKai GB Screen R", jinkaiFont, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(255, 255, 255, 0.467);
  font-family: "??", "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
