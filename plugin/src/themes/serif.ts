import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "serif", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 220;
  --accent-l: 52%;
  --accent-s: 50%;
  --background-modifier-active-hover: rgba(71, 112, 194, 0.1);
  --background-primary: #282c34;
  --background-secondary: #3b4251;
  --bases-cards-background: #282c34;
  --bases-table-cell-background-active: #282c34;
  --bases-table-cell-background-selected: rgba(71, 112, 194, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(71, 112, 194);
  --bases-table-header-background: #282c34;
  --bases-table-summary-background: #282c34;
  --blockquote-border-color: rgb(71, 112, 194);
  --bodyFont: var(--font-text);
  --button-radius: 4px;
  --canvas-background: #282c34;
  --checkbox-color: rgb(71, 112, 194);
  --checkbox-color-hover: rgb(101, 141, 205);
  --checkbox-marker-color: #282c34;
  --checkbox-radius: 0px;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(101, 141, 205);
  --color-accent: rgb(71, 112, 194);
  --color-accent-1: rgb(101, 141, 205);
  --color-accent-2: rgb(126, 163, 215);
  --color-accent-hsl: 220, 50%, 52%;
  --divider-color-hover: rgb(71, 112, 194);
  --embed-border-start: 2px solid rgb(71, 112, 194);
  --file-header-background: #282c34;
  --file-header-background-focused: #282c34;
  --file-header-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Libre Baskerville, serif;
  --font-mermaid: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', Fira Code, serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Fira Code, serif;
  --font-print: '??', '??', Libre Baskerville, serif, 'Arial';
  --font-text: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Libre Baskerville, serif;
  --graph-node-focused: rgb(101, 141, 205);
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(101, 141, 205);
  --input-radius: 4px;
  --interactive-accent: rgb(71, 112, 194);
  --interactive-accent-hover: rgb(101, 141, 205);
  --interactive-accent-hsl: 220, 50%, 52%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(101, 141, 205);
  --link-color-hover: rgb(126, 163, 215);
  --link-decoration: none;
  --link-external-color: rgb(101, 141, 205);
  --link-external-color-hover: rgb(126, 163, 215);
  --link-unresolved-color: rgb(101, 141, 205);
  --link-unresolved-decoration-color: rgba(71, 112, 194, 0.3);
  --list-marker-color-collapsed: rgb(101, 141, 205);
  --menu-background: #3b4251;
  --metadata-input-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #282c34;
  --nav-item-background-selected: rgba(71, 112, 194, 0.15);
  --nav-item-color-highlighted: rgb(101, 141, 205);
  --pdf-background: #282c34;
  --pdf-page-background: #282c34;
  --pdf-sidebar-background: #282c34;
  --pill-color-remove-hover: rgb(101, 141, 205);
  --prompt-background: #282c34;
  --ribbon-background: #4c567a;
  --ribbon-background-collapsed: #3b4251;
  --search-result-background: #282c34;
  --secondary: var(--text-accent);
  --slider-thumb-radius: 4px;
  --status-bar-background: #3b4251;
  --suggestion-background: #282c34;
  --tab-background-active: #282c34;
  --tab-container-background: #3b4251;
  --tab-radius: 6px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #3b4251;
  --tab-switcher-menubar-background: linear-gradient(to top, #3b4251, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(71, 112, 194);
  --tab-text-color-focused-highlighted: rgb(101, 141, 205);
  --table-drag-handle-background-active: rgb(71, 112, 194);
  --table-selection: rgba(71, 112, 194, 0.1);
  --table-selection-border-color: rgb(71, 112, 194);
  --tag-background: rgba(71, 112, 194, 0.1);
  --tag-background-hover: rgba(71, 112, 194, 0.2);
  --tag-border-color: rgba(71, 112, 194, 0.15);
  --tag-border-color-hover: rgba(71, 112, 194, 0.15);
  --tag-color: rgb(101, 141, 205);
  --tag-color-hover: rgb(101, 141, 205);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(101, 141, 205);
  --text-accent-hover: rgb(126, 163, 215);
  --text-selection: rgba(71, 112, 194, 0.33);
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #3b4251;
  --toggle-radius: 4px;
  --toggle-thumb-radius: 4px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(59, 66, 81);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 44, 52);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(59, 66, 81);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(59, 66, 81);
}

body div#quartz-root {
  background-color: rgb(40, 44, 52);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(100, 140, 205);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 140, 205) none 0px;
  text-decoration: underline rgb(100, 140, 205);
  text-decoration-color: rgb(100, 140, 205);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(100, 140, 205);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 140, 205) none 0px;
  text-decoration: rgb(100, 140, 205);
  text-decoration-color: rgb(100, 140, 205);
}

body a.internal.broken {
  color: rgb(100, 140, 205);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(100, 140, 205) none 0px;
  text-decoration: rgba(71, 112, 194, 0.3);
  text-decoration-color: rgba(71, 112, 194, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(40, 44, 52);
}

body ul.overflow {
  background-color: rgb(40, 44, 52);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 207.562px;
}`,
    code: `body code {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `body figcaption {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(71, 112, 194);
}

body .transclude-inner {
  border-left-color: rgb(71, 112, 194);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 44, 52);
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(59, 66, 81);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(71, 112, 194, 0.1);
  border-bottom-color: rgba(71, 112, 194, 0.15);
  border-left-color: rgba(71, 112, 194, 0.15);
  border-right-color: rgba(71, 112, 194, 0.15);
  border-top-color: rgba(71, 112, 194, 0.15);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(100, 140, 205);
}

body h1 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 44, 52) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 44, 52);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  background-color: rgb(59, 66, 81);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(59, 66, 81);
}

body .page-header h2.page-title {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 220;
  --accent-l: 52%;
  --accent-s: 50%;
  --background-modifier-active-hover: rgba(71, 112, 194, 0.1);
  --background-primary: #f5f5f5;
  --background-secondary: #e0dcc8;
  --bases-cards-background: #f5f5f5;
  --bases-table-cell-background-active: #f5f5f5;
  --bases-table-cell-background-selected: rgba(71, 112, 194, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(86, 126, 200);
  --bases-table-header-background: #f5f5f5;
  --bases-table-summary-background: #f5f5f5;
  --blockquote-border-color: rgb(86, 126, 200);
  --blur-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent));
  --bodyFont: var(--font-text);
  --button-radius: 4px;
  --canvas-background: #f5f5f5;
  --checkbox-color: rgb(86, 126, 200);
  --checkbox-color-hover: rgb(101, 141, 205);
  --checkbox-marker-color: #f5f5f5;
  --checkbox-radius: 0px;
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(71, 112, 194);
  --color-accent: rgb(71, 112, 194);
  --color-accent-1: rgb(86, 126, 200);
  --color-accent-2: rgb(101, 141, 205);
  --color-accent-hsl: 220, 50%, 52%;
  --divider-color-hover: rgb(86, 126, 200);
  --embed-border-start: 2px solid rgb(86, 126, 200);
  --file-header-background: #f5f5f5;
  --file-header-background-focused: #f5f5f5;
  --file-header-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Libre Baskerville, serif;
  --font-mermaid: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', Fira Code, serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Fira Code, serif;
  --font-print: '??', '??', Libre Baskerville, serif, 'Arial';
  --font-text: '??', Libre Baskerville, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Libre Baskerville, serif;
  --graph-node-focused: rgb(71, 112, 194);
  --headerFont: var(--font-text);
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: rgb(71, 112, 194);
  --input-radius: 4px;
  --interactive-accent: rgb(86, 126, 200);
  --interactive-accent-hover: rgb(101, 141, 205);
  --interactive-accent-hsl: 220, 50%, 52%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(71, 112, 194);
  --link-color-hover: rgb(101, 141, 205);
  --link-decoration: none;
  --link-external-color: rgb(71, 112, 194);
  --link-external-color-hover: rgb(101, 141, 205);
  --link-unresolved-color: rgb(71, 112, 194);
  --link-unresolved-decoration-color: rgba(71, 112, 194, 0.3);
  --list-marker-color-collapsed: rgb(71, 112, 194);
  --menu-background: #e0dcc8;
  --metadata-input-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', Libre Baskerville, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #f5f5f5;
  --nav-item-background-selected: rgba(71, 112, 194, 0.15);
  --nav-item-color-highlighted: rgb(71, 112, 194);
  --pdf-background: #f5f5f5;
  --pdf-page-background: #f5f5f5;
  --pdf-sidebar-background: #f5f5f5;
  --pill-color-remove-hover: rgb(71, 112, 194);
  --prompt-background: #f5f5f5;
  --raised-background: color-mix(in srgb, #f5f5f5 65%, transparent) linear-gradient(#f5f5f5, color-mix(in srgb, #f5f5f5 65%, transparent));
  --ribbon-background: #bdbdbd;
  --ribbon-background-collapsed: #e0dcc8;
  --search-result-background: #f5f5f5;
  --secondary: var(--text-accent);
  --slider-thumb-radius: 4px;
  --status-bar-background: #e0dcc8;
  --suggestion-background: #f5f5f5;
  --tab-background-active: #f5f5f5;
  --tab-container-background: #e0dcc8;
  --tab-radius: 6px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #e0dcc8;
  --tab-switcher-menubar-background: linear-gradient(to top, #e0dcc8, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(71, 112, 194);
  --tab-text-color-focused-highlighted: rgb(71, 112, 194);
  --table-drag-handle-background-active: rgb(86, 126, 200);
  --table-selection: rgba(71, 112, 194, 0.1);
  --table-selection-border-color: rgb(86, 126, 200);
  --tag-background: rgba(71, 112, 194, 0.1);
  --tag-background-hover: rgba(71, 112, 194, 0.2);
  --tag-border-color: rgba(71, 112, 194, 0.15);
  --tag-border-color-hover: rgba(71, 112, 194, 0.15);
  --tag-color: rgb(71, 112, 194);
  --tag-color-hover: rgb(71, 112, 194);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(71, 112, 194);
  --text-accent-hover: rgb(101, 141, 205);
  --text-selection: rgba(71, 112, 194, 0.2);
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #e0dcc8;
  --toggle-radius: 4px;
  --toggle-thumb-radius: 4px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(224, 220, 200);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(224, 220, 200);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(224, 220, 200);
}

body div#quartz-root {
  background-color: rgb(245, 245, 245);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(71, 112, 194);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 112, 194) none 0px;
  text-decoration: underline rgb(71, 112, 194);
  text-decoration-color: rgb(71, 112, 194);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 112, 194);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 112, 194) none 0px;
  text-decoration: rgb(71, 112, 194);
  text-decoration-color: rgb(71, 112, 194);
}

body a.internal.broken {
  color: rgb(71, 112, 194);
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 112, 194) none 0px;
  text-decoration: rgba(71, 112, 194, 0.3);
  text-decoration-color: rgba(71, 112, 194, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(245, 245, 245);
}

body ul.overflow {
  background-color: rgb(245, 245, 245);
}`,
    blockquotes: `body blockquote {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 207.562px;
}`,
    code: `body code {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `body figcaption {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(86, 126, 199);
}

body .transclude-inner {
  border-left-color: rgb(86, 126, 199);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(224, 220, 200);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(71, 112, 194, 0.1);
  border-bottom-color: rgba(71, 112, 194, 0.15);
  border-left-color: rgba(71, 112, 194, 0.15);
  border-right-color: rgba(71, 112, 194, 0.15);
  border-top-color: rgba(71, 112, 194, 0.15);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(71, 112, 194);
}

body h1 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-corner {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}

body ::-webkit-scrollbar-track {
  background: rgb(245, 245, 245) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 245, 245);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  background-color: rgb(224, 220, 200);
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Libre Baskerville", serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(224, 220, 200);
}

body .page-header h2.page-title {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", "Libre Baskerville", serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  font-family: "??", "Fira Code", serif, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
