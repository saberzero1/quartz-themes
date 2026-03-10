import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "serif", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 220 !important;
  --accent-l: 52% !important;
  --accent-s: 50% !important;
  --background-modifier-active-hover: rgba(71, 112, 194, 0.1) !important;
  --background-primary: #282c34 !important;
  --background-secondary: #3b4251 !important;
  --bases-cards-background: #282c34 !important;
  --bases-table-cell-background-active: #282c34 !important;
  --bases-table-cell-background-selected: rgba(71, 112, 194, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(71, 112, 194) !important;
  --bases-table-header-background: #282c34 !important;
  --bases-table-summary-background: #282c34 !important;
  --blockquote-border-color: rgb(71, 112, 194) !important;
  --bodyFont: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 4px !important;
  --canvas-background: #282c34 !important;
  --checkbox-color: rgb(71, 112, 194) !important;
  --checkbox-color-hover: rgb(101, 141, 205) !important;
  --checkbox-marker-color: #282c34 !important;
  --checkbox-radius: 0px !important;
  --codeFont: '??', Fira Code, serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(101, 141, 205) !important;
  --color-accent: rgb(71, 112, 194) !important;
  --color-accent-1: rgb(101, 141, 205) !important;
  --color-accent-2: rgb(126, 163, 215) !important;
  --color-accent-hsl: 220, 50%, 52% !important;
  --divider-color-hover: rgb(71, 112, 194) !important;
  --embed-border-start: 2px solid rgb(71, 112, 194) !important;
  --file-header-background: #282c34 !important;
  --file-header-background-focused: #282c34 !important;
  --file-header-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Libre Baskerville, serif !important;
  --font-mermaid: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', Fira Code, serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: Fira Code, serif !important;
  --font-print: '??', '??', Libre Baskerville, serif, 'Arial' !important;
  --font-text: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Libre Baskerville, serif !important;
  --graph-node-focused: rgb(101, 141, 205) !important;
  --headerFont: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: rgba(71, 112, 194, 0.1) !important;
  --icon-color-active: rgb(101, 141, 205) !important;
  --input-radius: 4px !important;
  --interactive-accent: rgb(71, 112, 194) !important;
  --interactive-accent-hover: rgb(101, 141, 205) !important;
  --interactive-accent-hsl: 220, 50%, 52% !important;
  --light: #282c34 !important;
  --lightgray: #3b4251 !important;
  --link-color: rgb(101, 141, 205) !important;
  --link-color-hover: rgb(126, 163, 215) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(101, 141, 205) !important;
  --link-external-color-hover: rgb(126, 163, 215) !important;
  --link-unresolved-color: rgb(101, 141, 205) !important;
  --link-unresolved-decoration-color: rgba(71, 112, 194, 0.3) !important;
  --list-marker-color-collapsed: rgb(101, 141, 205) !important;
  --menu-background: #3b4251 !important;
  --metadata-input-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #282c34 !important;
  --nav-item-background-selected: rgba(71, 112, 194, 0.15) !important;
  --nav-item-color-highlighted: rgb(101, 141, 205) !important;
  --pdf-background: #282c34 !important;
  --pdf-page-background: #282c34 !important;
  --pdf-sidebar-background: #282c34 !important;
  --pill-color-remove-hover: rgb(101, 141, 205) !important;
  --prompt-background: #282c34 !important;
  --ribbon-background: #4c567a !important;
  --ribbon-background-collapsed: #3b4251 !important;
  --search-result-background: #282c34 !important;
  --secondary: rgb(101, 141, 205) !important;
  --slider-thumb-radius: 4px !important;
  --status-bar-background: #3b4251 !important;
  --suggestion-background: #282c34 !important;
  --tab-background-active: #282c34 !important;
  --tab-container-background: #3b4251 !important;
  --tab-radius: 6px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #3b4251 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4251, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(71, 112, 194) !important;
  --tab-text-color-focused-highlighted: rgb(101, 141, 205) !important;
  --table-drag-handle-background-active: rgb(71, 112, 194) !important;
  --table-selection: rgba(71, 112, 194, 0.1) !important;
  --table-selection-border-color: rgb(71, 112, 194) !important;
  --tag-background: rgba(71, 112, 194, 0.1) !important;
  --tag-background-hover: rgba(71, 112, 194, 0.2) !important;
  --tag-border-color: rgba(71, 112, 194, 0.15) !important;
  --tag-border-color-hover: rgba(71, 112, 194, 0.15) !important;
  --tag-color: rgb(101, 141, 205) !important;
  --tag-color-hover: rgb(101, 141, 205) !important;
  --tertiary: rgb(126, 163, 215) !important;
  --text-accent: rgb(101, 141, 205) !important;
  --text-accent-hover: rgb(126, 163, 215) !important;
  --text-selection: rgba(71, 112, 194, 0.33) !important;
  --textHighlight: rgba(71, 112, 194, 0.1) !important;
  --titleFont: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #3b4251 !important;
  --toggle-radius: 4px !important;
  --toggle-thumb-radius: 4px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 81);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 81);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 81);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 44, 52);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .text-highlight {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body del {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(100, 140, 205);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 140, 205) none 0px;
  text-decoration: underline rgb(100, 140, 205);
  text-decoration-color: rgb(100, 140, 205);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(100, 140, 205);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 140, 205) none 0px;
  text-decoration: rgb(100, 140, 205);
  text-decoration-color: rgb(100, 140, 205);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(100, 140, 205);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 140, 205) none 0px;
  text-decoration: rgba(71, 112, 194, 0.3);
  text-decoration-color: rgba(71, 112, 194, 0.3);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body table {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 207.562px;
}`,
    code: `html[saved-theme="dark"] body code {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `html[saved-theme="dark"] body figcaption {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `html[saved-theme="dark"] body .transclude {
  border-left-color: rgb(71, 112, 194);
}

html[saved-theme="dark"] body .transclude-inner {
  border-left-color: rgb(71, 112, 194);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 81);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(71, 112, 194, 0.1);
  border-bottom-color: rgba(71, 112, 194, 0.15);
  border-left-color: rgba(71, 112, 194, 0.15);
  border-right-color: rgba(71, 112, 194, 0.15);
  border-top-color: rgba(71, 112, 194, 0.15);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(100, 140, 205);
}

html[saved-theme="dark"] body h1 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(59, 66, 81);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li > .section .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .metadata {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(59, 66, 81);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=text] {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 220 !important;
  --accent-l: 52% !important;
  --accent-s: 50% !important;
  --background-modifier-active-hover: rgba(71, 112, 194, 0.1) !important;
  --background-primary: #f5f5f5 !important;
  --background-secondary: #e0dcc8 !important;
  --bases-cards-background: #f5f5f5 !important;
  --bases-table-cell-background-active: #f5f5f5 !important;
  --bases-table-cell-background-selected: rgba(71, 112, 194, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(86, 126, 200) !important;
  --bases-table-header-background: #f5f5f5 !important;
  --bases-table-summary-background: #f5f5f5 !important;
  --blockquote-border-color: rgb(86, 126, 200) !important;
  --blur-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent)) !important;
  --bodyFont: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 4px !important;
  --canvas-background: #f5f5f5 !important;
  --checkbox-color: rgb(86, 126, 200) !important;
  --checkbox-color-hover: rgb(101, 141, 205) !important;
  --checkbox-marker-color: #f5f5f5 !important;
  --checkbox-radius: 0px !important;
  --codeFont: '??', Fira Code, serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(71, 112, 194) !important;
  --color-accent: rgb(71, 112, 194) !important;
  --color-accent-1: rgb(86, 126, 200) !important;
  --color-accent-2: rgb(101, 141, 205) !important;
  --color-accent-hsl: 220, 50%, 52% !important;
  --divider-color-hover: rgb(86, 126, 200) !important;
  --embed-border-start: 2px solid rgb(86, 126, 200) !important;
  --file-header-background: #f5f5f5 !important;
  --file-header-background-focused: #f5f5f5 !important;
  --file-header-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Libre Baskerville, serif !important;
  --font-mermaid: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', Fira Code, serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: Fira Code, serif !important;
  --font-print: '??', '??', Libre Baskerville, serif, 'Arial' !important;
  --font-text: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Libre Baskerville, serif !important;
  --graph-node-focused: rgb(71, 112, 194) !important;
  --headerFont: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --highlight: rgba(71, 112, 194, 0.1) !important;
  --icon-color-active: rgb(71, 112, 194) !important;
  --input-radius: 4px !important;
  --interactive-accent: rgb(86, 126, 200) !important;
  --interactive-accent-hover: rgb(101, 141, 205) !important;
  --interactive-accent-hsl: 220, 50%, 52% !important;
  --light: #f5f5f5 !important;
  --lightgray: #e0dcc8 !important;
  --link-color: rgb(71, 112, 194) !important;
  --link-color-hover: rgb(101, 141, 205) !important;
  --link-decoration: none !important;
  --link-external-color: rgb(71, 112, 194) !important;
  --link-external-color-hover: rgb(101, 141, 205) !important;
  --link-unresolved-color: rgb(71, 112, 194) !important;
  --link-unresolved-decoration-color: rgba(71, 112, 194, 0.3) !important;
  --list-marker-color-collapsed: rgb(71, 112, 194) !important;
  --menu-background: #e0dcc8 !important;
  --metadata-input-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #f5f5f5 !important;
  --nav-item-background-selected: rgba(71, 112, 194, 0.15) !important;
  --nav-item-color-highlighted: rgb(71, 112, 194) !important;
  --pdf-background: #f5f5f5 !important;
  --pdf-page-background: #f5f5f5 !important;
  --pdf-sidebar-background: #f5f5f5 !important;
  --pill-color-remove-hover: rgb(71, 112, 194) !important;
  --prompt-background: #f5f5f5 !important;
  --raised-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent)) !important;
  --ribbon-background: #bdbdbd !important;
  --ribbon-background-collapsed: #e0dcc8 !important;
  --search-result-background: #f5f5f5 !important;
  --secondary: rgb(71, 112, 194) !important;
  --slider-thumb-radius: 4px !important;
  --status-bar-background: #e0dcc8 !important;
  --suggestion-background: #f5f5f5 !important;
  --tab-background-active: #f5f5f5 !important;
  --tab-container-background: #e0dcc8 !important;
  --tab-radius: 6px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #e0dcc8 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e0dcc8, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(71, 112, 194) !important;
  --tab-text-color-focused-highlighted: rgb(71, 112, 194) !important;
  --table-drag-handle-background-active: rgb(86, 126, 200) !important;
  --table-selection: rgba(71, 112, 194, 0.1) !important;
  --table-selection-border-color: rgb(86, 126, 200) !important;
  --tag-background: rgba(71, 112, 194, 0.1) !important;
  --tag-background-hover: rgba(71, 112, 194, 0.2) !important;
  --tag-border-color: rgba(71, 112, 194, 0.15) !important;
  --tag-border-color-hover: rgba(71, 112, 194, 0.15) !important;
  --tag-color: rgb(71, 112, 194) !important;
  --tag-color-hover: rgb(71, 112, 194) !important;
  --tertiary: rgb(101, 141, 205) !important;
  --text-accent: rgb(71, 112, 194) !important;
  --text-accent-hover: rgb(101, 141, 205) !important;
  --text-selection: rgba(71, 112, 194, 0.2) !important;
  --textHighlight: rgba(71, 112, 194, 0.1) !important;
  --titleFont: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e0dcc8 !important;
  --toggle-radius: 4px !important;
  --toggle-thumb-radius: 4px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(224, 220, 200);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(224, 220, 200);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(224, 220, 200);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 245, 245);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body del {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(71, 112, 194);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 112, 194) none 0px;
  text-decoration: underline rgb(71, 112, 194);
  text-decoration-color: rgb(71, 112, 194);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 112, 194);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 112, 194) none 0px;
  text-decoration: rgb(71, 112, 194);
  text-decoration-color: rgb(71, 112, 194);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(71, 112, 194);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 112, 194) none 0px;
  text-decoration: rgba(71, 112, 194, 0.3);
  text-decoration-color: rgba(71, 112, 194, 0.3);
}`,
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body table {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 207.562px;
}`,
    code: `html[saved-theme="light"] body code {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `html[saved-theme="light"] body figcaption {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `html[saved-theme="light"] body .transclude {
  border-left-color: rgb(86, 126, 199);
}

html[saved-theme="light"] body .transclude-inner {
  border-left-color: rgb(86, 126, 199);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 220, 200);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(71, 112, 194, 0.1);
  border-bottom-color: rgba(71, 112, 194, 0.15);
  border-left-color: rgba(71, 112, 194, 0.15);
  border-right-color: rgba(71, 112, 194, 0.15);
  border-top-color: rgba(71, 112, 194, 0.15);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(71, 112, 194);
}

html[saved-theme="light"] body h1 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(224, 220, 200);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li > .section .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .metadata {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(224, 220, 200);
}

html[saved-theme="light"] body .page-header h2.page-title {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=text] {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
