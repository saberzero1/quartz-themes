import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "virgo", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #262626;
  --background-secondary-alt: #262626;
  --bases-cards-background: #262626;
  --bases-table-border-color: #cccc;
  --bases-table-cell-background-active: #262626;
  --bases-table-header-background: #262626;
  --bases-table-summary-background: #262626;
  --bodyFont: var(--font-text);
  --canvas-background: #262626;
  --checkbox-marker-color: #262626;
  --codeFont: var(--font-monospace);
  --color-jk-purple: #896a9e;
  --color-jk-purple-33: #896a9e33;
  --divider-color: #f000;
  --file-header-background: #262626;
  --file-header-background-focused: #262626;
  --file-header-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "LXGW WenKai GB Screen R", jinkaiFont;
  --font-jk-base: "LXGW WenKai GB Screen R", jinkaiFont;
  --font-jk-mono: "Code New Roman", romanFont, "LXGW WenKai Mono";
  --font-jk-text: "LXGW WenKai GB Screen R", jinkaiFont;
  --font-mermaid: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Code New Roman", romanFont, "LXGW WenKai Mono";
  --font-print: '??', '??', "LXGW WenKai GB Screen R", jinkaiFont, 'Arial';
  --font-text: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "LXGW WenKai GB Screen R", jinkaiFont;
  --headerFont: var(--font-text);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary-alt);
  --metadata-input-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #262626;
  --pdf-background: #262626;
  --pdf-page-background: #262626;
  --pdf-sidebar-background: #262626;
  --prompt-background: #262626;
  --ribbon-background-collapsed: #262626;
  --search-result-background: #262626;
  --status-bar-border-color: #f000;
  --suggestion-background: #262626;
  --tab-background-active: #262626;
  --tab-outline-color: #f000;
  --table-border-color: #cccc;
  --table-header-border-color: #cccc;
  --titleFont: var(--font-text);
  --titlebar-background-focused: #262626;
  --quartz-icon-color: currentColor;
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
  --background-modifier-hover: #896a9e33;
  --background-primary: #f4f7fb;
  --background-primary-alt: #fff7;
  --background-secondary: #f4f7fb;
  --background-secondary-alt: #f4f7fb;
  --bases-cards-background: #f4f7fb;
  --bases-cards-cover-background: #fff7;
  --bases-table-border-color: #cccc;
  --bases-table-cell-background-active: #f4f7fb;
  --bases-table-cell-background-disabled: #fff7;
  --bases-table-group-background: #fff7;
  --bases-table-header-background: #f4f7fb;
  --bases-table-header-background-hover: #896a9e33;
  --bases-table-summary-background: #f4f7fb;
  --bases-table-summary-background-hover: #896a9e33;
  --blur-background: color-mix(in srgb, #f4f7fb 65%, transparent) linear-gradient(#f4f7fb, color-mix(in srgb, #f4f7fb 65%, transparent));
  --bodyFont: var(--font-text);
  --canvas-background: #f4f7fb;
  --checkbox-marker-color: #f4f7fb;
  --code-background: #fff7;
  --code-bracket-background: #896a9e33;
  --codeFont: var(--font-monospace);
  --color-jk-purple: #896a9e;
  --color-jk-purple-33: #896a9e33;
  --divider-color: #f000;
  --file-header-background: #f4f7fb;
  --file-header-background-focused: #f4f7fb;
  --file-header-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "LXGW WenKai GB Screen R", jinkaiFont;
  --font-jk-base: "LXGW WenKai GB Screen R", jinkaiFont;
  --font-jk-mono: "Code New Roman", romanFont, "LXGW WenKai Mono";
  --font-jk-text: "LXGW WenKai GB Screen R", jinkaiFont;
  --font-mermaid: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Code New Roman", romanFont, "LXGW WenKai Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Code New Roman", romanFont, "LXGW WenKai Mono";
  --font-print: '??', '??', "LXGW WenKai GB Screen R", jinkaiFont, 'Arial';
  --font-text: '??', "LXGW WenKai GB Screen R", jinkaiFont, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "LXGW WenKai GB Screen R", jinkaiFont;
  --footnote-input-background-active: #896a9e33;
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-hover);
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --menu-background: #f4f7fb;
  --metadata-input-background-active: #896a9e33;
  --metadata-input-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-background-active: #896a9e33;
  --metadata-label-font: '??', "LXGW WenKai GB Screen R", jinkaiFont, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-property-background-active: #896a9e33;
  --modal-background: #f4f7fb;
  --nav-item-background-active: #896a9e33;
  --nav-item-background-hover: #896a9e33;
  --pdf-background: #f4f7fb;
  --pdf-page-background: #f4f7fb;
  --pdf-sidebar-background: #f4f7fb;
  --prompt-background: #f4f7fb;
  --raised-background: color-mix(in srgb, #f4f7fb 65%, transparent) linear-gradient(#f4f7fb, color-mix(in srgb, #f4f7fb 65%, transparent));
  --ribbon-background: #f4f7fb;
  --ribbon-background-collapsed: #f4f7fb;
  --search-result-background: #f4f7fb;
  --setting-items-background: #fff7;
  --status-bar-background: #f4f7fb;
  --status-bar-border-color: #f000;
  --suggestion-background: #f4f7fb;
  --tab-background-active: #f4f7fb;
  --tab-container-background: #f4f7fb;
  --tab-outline-color: #f000;
  --tab-switcher-background: #f4f7fb;
  --tab-switcher-menubar-background: linear-gradient(to top, #f4f7fb, transparent);
  --table-border-color: #cccc;
  --table-header-border-color: #cccc;
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #f4f7fb;
  --titlebar-background-focused: #f4f7fb;
  --quartz-icon-color: currentColor;
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
