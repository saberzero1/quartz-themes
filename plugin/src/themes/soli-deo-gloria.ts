import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "soli-deo-gloria",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["cormorant", "germania-one"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0;
  --accent-l: 0%;
  --accent-s: 0%;
  --background-modifier-active-hover: rgba(0, 0, 0, 0.1);
  --background-primary: #252523;
  --background-secondary: #000000;
  --bases-cards-background: #252523;
  --bases-table-cell-background-active: #252523;
  --bases-table-cell-background-selected: rgba(0, 0, 0, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-header-background: #252523;
  --bases-table-summary-background: #252523;
  --blockquote-border-color: rgb(0, 0, 0);
  --button-radius: 4px;
  --canvas-background: #252523;
  --checkbox-color: rgb(0, 0, 0);
  --checkbox-color-hover: rgb(0, 0, 0);
  --checkbox-marker-color: #252523;
  --checkbox-radius: 0px;
  --collapse-icon-color-collapsed: rgb(0, 0, 0);
  --color-accent: rgb(0, 0, 0);
  --color-accent-1: rgb(0, 0, 0);
  --color-accent-2: rgb(0, 0, 0);
  --color-accent-hsl: 0, 0%, 0%;
  --divider-color-hover: rgb(0, 0, 0);
  --embed-border-start: 2px solid rgb(0, 0, 0);
  --file-header-background: #252523;
  --file-header-background-focused: #252523;
  --file-header-font: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Germania-One, serif;
  --font-mermaid: '??', Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', Courier, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Courier;
  --font-print: '??', '??', Comorant-Garamond, serif, 'Arial';
  --font-text: '??', Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Comorant-Garamond, serif;
  --graph-node-focused: rgb(0, 0, 0);
  --icon-color-active: rgb(0, 0, 0);
  --input-radius: 4px;
  --interactive-accent: rgb(0, 0, 0);
  --interactive-accent-hover: rgb(0, 0, 0);
  --interactive-accent-hsl: 0, 0%, 0%;
  --link-color: rgb(0, 0, 0);
  --link-color-hover: rgb(0, 0, 0);
  --link-decoration: none;
  --link-external-color: rgb(0, 0, 0);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-unresolved-color: rgb(0, 0, 0);
  --link-unresolved-decoration-color: rgba(0, 0, 0, 0.3);
  --list-marker-color-collapsed: rgb(0, 0, 0);
  --menu-background: #000000;
  --metadata-input-font: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #252523;
  --nav-item-background-selected: rgba(0, 0, 0, 0.15);
  --nav-item-color-highlighted: rgb(0, 0, 0);
  --pdf-background: #252523;
  --pdf-page-background: #252523;
  --pdf-sidebar-background: #252523;
  --pill-color-remove-hover: rgb(0, 0, 0);
  --prompt-background: #252523;
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #000000;
  --search-result-background: #252523;
  --slider-thumb-radius: 4px;
  --status-bar-background: #000000;
  --suggestion-background: #252523;
  --tab-background-active: #252523;
  --tab-container-background: #000000;
  --tab-radius: 6px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: rgb(0, 0, 0);
  --table-drag-handle-background-active: rgb(0, 0, 0);
  --table-selection: rgba(0, 0, 0, 0.1);
  --table-selection-border-color: rgb(0, 0, 0);
  --tag-background: rgba(0, 0, 0, 0.1);
  --tag-background-hover: rgba(0, 0, 0, 0.2);
  --tag-border-color: rgba(0, 0, 0, 0.15);
  --tag-border-color-hover: rgba(0, 0, 0, 0.15);
  --tag-color: rgb(0, 0, 0);
  --tag-color-hover: rgb(0, 0, 0);
  --text-accent: rgb(0, 0, 0);
  --text-accent-hover: rgb(0, 0, 0);
  --text-selection: rgba(0, 0, 0, 0.33);
  --titlebar-background: #000000;
  --toggle-radius: 4px;
  --toggle-thumb-radius: 4px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(37, 37, 35);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(37, 37, 35);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(0, 0, 0);
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal.broken {
  color: rgb(0, 0, 0);
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0.3);
  text-decoration-color: rgba(0, 0, 0, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(37, 37, 35);
}

body ul.overflow {
  background-color: rgb(37, 37, 35);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 165.688px;
}`,
    code: `body code {
  font-family: "??", Courier, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `body figcaption {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-left-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(37, 37, 35);
}

body .search > .search-container > .search-space > * {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-left-color: rgba(0, 0, 0, 0.15);
  border-right-color: rgba(0, 0, 0, 0.15);
  border-top-color: rgba(0, 0, 0, 0.15);
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

body h1 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(37, 37, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 35);
}

body ::-webkit-scrollbar-corner {
  background: rgb(37, 37, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 35);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(37, 37, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 35);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(37, 37, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 35);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(37, 37, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 35);
}

body ::-webkit-scrollbar-track {
  background: rgb(37, 37, 35) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(37, 37, 35);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  font-family: "??", Courier, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 0;
  --accent-l: 0%;
  --accent-s: 0%;
  --background-modifier-active-hover: rgba(0, 0, 0, 0.1);
  --background-primary: #f9f0d6;
  --background-secondary: #ffffff;
  --bases-cards-background: #f9f0d6;
  --bases-table-cell-background-active: #f9f0d6;
  --bases-table-cell-background-selected: rgba(0, 0, 0, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(0, 0, 0);
  --bases-table-header-background: #f9f0d6;
  --bases-table-summary-background: #f9f0d6;
  --blockquote-border-color: rgb(0, 0, 0);
  --blur-background: color-mix(in srgb, #f9f0d6 65%, transparent) linear-gradient(#f9f0d6, color-mix(in srgb, #f9f0d6 65%, transparent));
  --button-radius: 4px;
  --canvas-background: #f9f0d6;
  --checkbox-color: rgb(0, 0, 0);
  --checkbox-color-hover: rgb(0, 0, 0);
  --checkbox-marker-color: #f9f0d6;
  --checkbox-radius: 0px;
  --collapse-icon-color-collapsed: rgb(0, 0, 0);
  --color-accent: rgb(0, 0, 0);
  --color-accent-1: rgb(0, 0, 0);
  --color-accent-2: rgb(0, 0, 0);
  --color-accent-hsl: 0, 0%, 0%;
  --divider-color-hover: rgb(0, 0, 0);
  --embed-border-start: 2px solid rgb(0, 0, 0);
  --file-header-background: #f9f0d6;
  --file-header-background-focused: #f9f0d6;
  --file-header-font: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Germania-One, serif;
  --font-mermaid: '??', Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', Courier, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Courier;
  --font-print: '??', '??', Comorant-Garamond, serif, 'Arial';
  --font-text: '??', Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Comorant-Garamond, serif;
  --graph-node-focused: rgb(0, 0, 0);
  --icon-color-active: rgb(0, 0, 0);
  --input-radius: 4px;
  --interactive-accent: rgb(0, 0, 0);
  --interactive-accent-hover: rgb(0, 0, 0);
  --interactive-accent-hsl: 0, 0%, 0%;
  --link-color: rgb(0, 0, 0);
  --link-color-hover: rgb(0, 0, 0);
  --link-decoration: none;
  --link-external-color: rgb(0, 0, 0);
  --link-external-color-hover: rgb(0, 0, 0);
  --link-unresolved-color: rgb(0, 0, 0);
  --link-unresolved-decoration-color: rgba(0, 0, 0, 0.3);
  --list-marker-color-collapsed: rgb(0, 0, 0);
  --menu-background: #ffffff;
  --metadata-input-font: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-font: '??', Germania-One, serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #f9f0d6;
  --nav-item-background-selected: rgba(0, 0, 0, 0.15);
  --nav-item-color-highlighted: rgb(0, 0, 0);
  --pdf-background: #f9f0d6;
  --pdf-page-background: #f9f0d6;
  --pdf-sidebar-background: #f9f0d6;
  --pill-color-remove-hover: rgb(0, 0, 0);
  --prompt-background: #f9f0d6;
  --raised-background: color-mix(in srgb, #f9f0d6 65%, transparent) linear-gradient(#f9f0d6, color-mix(in srgb, #f9f0d6 65%, transparent));
  --ribbon-background: #ffffff;
  --search-result-background: #f9f0d6;
  --slider-thumb-radius: 4px;
  --status-bar-background: #ffffff;
  --suggestion-background: #f9f0d6;
  --tab-background-active: #f9f0d6;
  --tab-container-background: #ffffff;
  --tab-radius: 6px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #ffffff;
  --tab-switcher-menubar-background: linear-gradient(to top, #ffffff, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: rgb(0, 0, 0);
  --table-drag-handle-background-active: rgb(0, 0, 0);
  --table-selection: rgba(0, 0, 0, 0.1);
  --table-selection-border-color: rgb(0, 0, 0);
  --tag-background: rgba(0, 0, 0, 0.1);
  --tag-background-hover: rgba(0, 0, 0, 0.2);
  --tag-border-color: rgba(0, 0, 0, 0.15);
  --tag-border-color-hover: rgba(0, 0, 0, 0.15);
  --tag-color: rgb(0, 0, 0);
  --tag-color-hover: rgb(0, 0, 0);
  --text-accent: rgb(0, 0, 0);
  --text-accent-hover: rgb(0, 0, 0);
  --text-selection: rgba(0, 0, 0, 0.2);
  --titlebar-background: #ffffff;
  --toggle-radius: 4px;
  --toggle-thumb-radius: 4px;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(249, 240, 214);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
}

body div#quartz-root {
  background-color: rgb(249, 240, 214);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > i, i {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > strong, strong {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body p {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(0, 0, 0);
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal.broken {
  color: rgb(0, 0, 0);
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgba(0, 0, 0, 0.3);
  text-decoration-color: rgba(0, 0, 0, 0.3);
}`,
    lists: `body ol.overflow {
  background-color: rgb(249, 240, 214);
}

body ul.overflow {
  background-color: rgb(249, 240, 214);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 165.688px;
}`,
    code: `body code {
  font-family: "??", Courier, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
    images: `body figcaption {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .transclude {
  border-left-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-left-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(249, 240, 214);
}

body .search > .search-container > .search-space > * {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.15);
  border-left-color: rgba(0, 0, 0, 0.15);
  border-right-color: rgba(0, 0, 0, 0.15);
  border-top-color: rgba(0, 0, 0, 0.15);
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(0, 0, 0);
}

body h1 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(249, 240, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 240, 214);
}

body ::-webkit-scrollbar-corner {
  background: rgb(249, 240, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 240, 214);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(249, 240, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 240, 214);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(249, 240, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 240, 214);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(249, 240, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 240, 214);
}

body ::-webkit-scrollbar-track {
  background: rgb(249, 240, 214) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(249, 240, 214);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li > .section .meta {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .metadata {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Comorant-Garamond, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=text] {
  font-family: "??", Germania-One, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  font-family: "??", Courier, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
};
