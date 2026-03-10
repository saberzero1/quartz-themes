import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "spring",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["apercu-pro"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-primary: #171717;
  --background-secondary: #444444;
  --bases-cards-background: #171717;
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-cell-background-active: #171717;
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #171717;
  --bases-table-summary-background: #171717;
  --blockquote-background-color: #444444;
  --blockquote-border-color: #f6fa70;
  --blockquote-border-thickness: 4px;
  --bodyFont: var(--font-text);
  --bold-color: #f6fa70;
  --callout-radius: 0px;
  --canvas-background: #171717;
  --canvas-controls-radius: 0px;
  --checkbox-border-color: #f9f9f9;
  --checkbox-color: #9e8af3;
  --checkbox-color-hover: #9e8af3;
  --checkbox-marker-color: #171717;
  --checkbox-radius: 10px;
  --clickable-icon-radius: 0px;
  --code-comment: #a9a9a9;
  --code-function: #556b2f;
  --code-important: #9acd32;
  --code-keyword: #8f9779;
  --code-normal: #ff725b;
  --code-operator: #696969;
  --code-property: #d3d3d3;
  --code-punctuation: #d3d3d3;
  --code-radius: 0px;
  --code-string: #9acd32;
  --code-tag: #556b2f;
  --code-value: #00dfa2;
  --codeFont: var(--font-text);
  --coral: #ff725b;
  --dark-green: #32cd32;
  --dark-yellow: #ffd700;
  --embed-background: #444444;
  --file-header-background: #171717;
  --file-header-background-focused: #171717;
  --font-mermaid: '??', "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Apercu Pro", sans-serif, 'Arial';
  --font-text: '??', "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Apercu Pro", sans-serif;
  --footnote-radius: 0px;
  --graph-line: #f9f9f9;
  --graph-node-unresolved: #556b2f;
  --green: #00dfa2;
  --h1-color: #00dfa2;
  --h1-line-height: 2;
  --h1-size: 1.7rem;
  --h1-weight: 300;
  --h2-color: #9e8af3;
  --h2-line-height: 1.8;
  --h2-size: 1.5rem;
  --h2-weight: 300;
  --h3-color: #ff725b;
  --h3-line-height: 1.6;
  --h3-size: 1.2rem;
  --h3-weight: 300;
  --h4-color: #ff4684;
  --h4-size: 1.1rem;
  --h4-weight: 300;
  --h5-color: #f6fa70;
  --h5-size: 1rem;
  --h5-weight: 300;
  --h6-size: 0.9rem;
  --h6-weight: 300;
  --headerFont: var(--font-text);
  --highlight: var(--text-highlight-bg);
  --icon-color-active: #00dfa2;
  --icon-color-focused: #00dfa2;
  --indentation-guide-color: #171717;
  --inline-title-color: #00dfa2;
  --inline-title-line-height: 2;
  --inline-title-size: 1.7rem;
  --inline-title-weight: 300;
  --input-disabled-border-color: transparent;
  --input-focus-border-color: Highlight;
  --input-focus-outline: 1px solid Canvas;
  --input-unfocused-border-color: transparent;
  --italic-color: #f6fa70;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #f6fa70;
  --link-color-hover: #ff725b;
  --link-decoration-hover: #556b2f;
  --link-external-color: #f6fa70;
  --link-unresolved-color: #8f9779;
  --list-marker-color: #ff725b;
  --list-marker-color-collapsed: #f6fa70;
  --list-spacing: 3px;
  --menu-background: #444444;
  --menu-radius: 0px;
  --modal-background: #171717;
  --modal-border-color: #444444;
  --modal-max-width: 70vw;
  --modal-radius: 20px;
  --nav-collapse-icon-color: #00dfa2;
  --nav-indentation-guide-color: #171717;
  --nav-item-background-active: #171717;
  --nav-item-children-margin-left: 0px;
  --nav-item-children-padding-left: 15px;
  --nav-item-color: #f9f9f9;
  --nav-item-color-active: #00dfa2;
  --nav-item-color-highlighted: #f6fa70;
  --nav-item-color-hover: #00dfa2;
  --nav-item-color-selected: #00dfa2;
  --nav-item-padding: 6px;
  --nav-item-parent-padding: 8px;
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --pdf-background: #171717;
  --pdf-page-background: #171717;
  --pdf-sidebar-background: #171717;
  --pink: #ff4684;
  --prompt-background: #171717;
  --purple: #9e8af3;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: #171717;
  --ribbon-background-collapsed: #171717;
  --scrollbar-radius: 0px;
  --search-result-background: #171717;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-background: #444444;
  --status-bar-radius: 0px 0 0 0;
  --suggestion-background: #171717;
  --tab-background-active: #171717;
  --tab-container-background: #444444;
  --tab-divider-color: #171717;
  --tab-font-size: 1.2em;
  --tab-font-weight: 300;
  --tab-outline-color: #171717;
  --tab-radius: 0px;
  --tab-stacked-font-size: 2em;
  --tab-stacked-text-align: center;
  --tab-switcher-background: #444444;
  --tab-switcher-menubar-background: linear-gradient(to top, #444444, transparent);
  --tab-text-color: #00dfa2;
  --tab-text-color-active: #00dfa2;
  --tab-text-color-focused-active-current: #00dfa2;
  --table-header-background: #444444;
  --table-header-background-hover: #444444;
  --text-highlight-bg: #ffd700;
  --text-highlight-bg-active: #ffd700;
  --text-selection: #556b2f;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #444444;
  --toggle-radius: 20px;
  --toggle-thumb-color: #171717;
  --toggle-thumb-radius: 20px;
  --white: #f9f9f9;
  --yellow: #f6fa70;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(68, 68, 68);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(23, 23, 23);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(68, 68, 68);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(68, 68, 68);
}

body div#quartz-root {
  background-color: rgb(23, 23, 23);
}`,
    typography: `body .page article p > b, b {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 250, 112) none 0px;
  text-decoration: rgb(246, 250, 112);
  text-decoration-color: rgb(246, 250, 112);
}

body .page article p > em, em {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 250, 112) none 0px;
  text-decoration: rgb(246, 250, 112);
  text-decoration-color: rgb(246, 250, 112);
}

body .page article p > i, i {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 250, 112) none 0px;
  text-decoration: rgb(246, 250, 112);
  text-decoration-color: rgb(246, 250, 112);
}

body .page article p > strong, strong {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 250, 112) none 0px;
  text-decoration: rgb(246, 250, 112);
  text-decoration-color: rgb(246, 250, 112);
}

body .text-highlight {
  background-color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 250, 112) none 0px;
  text-decoration: underline rgb(246, 250, 112);
  text-decoration-color: rgb(246, 250, 112);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(246, 250, 112) none 0px;
  text-decoration: underline rgb(246, 250, 112);
  text-decoration-color: rgb(246, 250, 112);
}

body a.internal.broken {
  color: rgb(143, 151, 121);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(143, 151, 121) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(23, 23, 23);
}

body ul.overflow {
  background-color: rgb(23, 23, 23);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(68, 68, 68);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.109px;
}

body tr {
  background-color: rgb(68, 68, 68);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 114, 91);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 114, 91);
  border-right-color: rgb(255, 114, 91);
  border-top-color: rgb(255, 114, 91);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 114, 91);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code > [data-line] {
  border-left-color: rgb(85, 107, 47);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(85, 107, 47);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(85, 107, 47);
  border-left-color: rgb(85, 107, 47);
  border-right-color: rgb(85, 107, 47);
  border-top-color: rgb(85, 107, 47);
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body figcaption {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .transclude {
  background-color: rgb(68, 68, 68);
}

body .transclude-inner {
  background-color: rgb(68, 68, 68);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(249, 249, 249);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(249, 249, 249);
  border-right-color: rgb(249, 249, 249);
  border-top-color: rgb(249, 249, 249);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(23, 23, 23);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(68, 68, 68);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body h1 {
  color: rgb(0, 223, 162);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(158, 138, 243);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 223, 162);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 114, 91);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 70, 132);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(246, 250, 112);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(23, 23, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 23, 23);
}

body ::-webkit-scrollbar-corner {
  background: rgb(23, 23, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 23, 23);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(23, 23, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 23, 23);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(23, 23, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 23, 23);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(23, 23, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 23, 23);
}

body ::-webkit-scrollbar-track {
  background: rgb(23, 23, 23) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(23, 23, 23);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(249, 249, 249);
  text-decoration: rgb(249, 249, 249);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(249, 249, 249);
  text-decoration: rgb(249, 249, 249);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(249, 249, 249);
  text-decoration: rgb(249, 249, 249);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(23, 23, 23);
  border-bottom-color: rgb(0, 223, 162);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 223, 162);
  border-right-color: rgb(0, 223, 162);
  border-top-color: rgb(0, 223, 162);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 223, 162);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  background-color: rgb(68, 68, 68);
  border-top-left-radius: 0px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(249, 249, 249);
  text-decoration: rgb(249, 249, 249);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(249, 249, 249);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(249, 249, 249);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(249, 249, 249);
  text-decoration: rgb(249, 249, 249);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .metadata {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(68, 68, 68);
}

body kbd {
  border-bottom-color: rgb(255, 114, 91);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 114, 91);
  border-right-color: rgb(255, 114, 91);
  border-top-color: rgb(255, 114, 91);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 114, 91);
}`,
  },
  light: {
    base: `:root:root {
  --background-primary: #f0f0f0;
  --background-secondary: #e6e6fa;
  --bases-cards-background: #f0f0f0;
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-table-cell-background-active: #f0f0f0;
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #f0f0f0;
  --bases-table-summary-background: #f0f0f0;
  --blockquote-background-color: #e6e6fa;
  --blockquote-border-color: #f6fa70;
  --blockquote-border-thickness: 4px;
  --blur-background: color-mix(in srgb, #f0f0f0 65%, transparent) linear-gradient(#f0f0f0, color-mix(in srgb, #f0f0f0 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #ffd700;
  --callout-radius: 0px;
  --canvas-background: #f0f0f0;
  --canvas-controls-radius: 0px;
  --checkbox-border-color: black;
  --checkbox-color: #9e8af3;
  --checkbox-color-hover: #9e8af3;
  --checkbox-marker-color: #f0f0f0;
  --checkbox-radius: 10px;
  --clickable-icon-radius: 0px;
  --code-comment: #a9a9a9;
  --code-function: #228b22;
  --code-important: #8b008b;
  --code-keyword: #4682b4;
  --code-normal: #ff4500;
  --code-operator: #2f4f4f;
  --code-property: #696969;
  --code-punctuation: #696969;
  --code-radius: 0px;
  --code-string: #8b008b;
  --code-tag: #228b22;
  --code-value: #008000;
  --codeFont: var(--font-text);
  --coral: #ff725b;
  --dark-green: #32cd32;
  --dark-yellow: #ffd700;
  --embed-background: #e6e6fa;
  --file-header-background: #f0f0f0;
  --file-header-background-focused: #f0f0f0;
  --font-mermaid: '??', "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', "Apercu Pro", sans-serif, 'Arial';
  --font-text: '??', "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Apercu Pro", sans-serif;
  --footnote-radius: 0px;
  --graph-line: black;
  --graph-node-unresolved: #f0f0f0;
  --green: #00dfa2;
  --h1-color: #32cd32;
  --h1-line-height: 2;
  --h1-size: 1.7rem;
  --h1-weight: 300;
  --h2-color: #9e8af3;
  --h2-line-height: 1.8;
  --h2-size: 1.5rem;
  --h2-weight: 300;
  --h3-color: #ff725b;
  --h3-line-height: 1.6;
  --h3-size: 1.2rem;
  --h3-weight: 300;
  --h4-color: #ff4684;
  --h4-size: 1.1rem;
  --h4-weight: 300;
  --h5-color: #ffd700;
  --h5-size: 1rem;
  --h5-weight: 300;
  --h6-size: 0.9rem;
  --h6-weight: 300;
  --headerFont: var(--font-text);
  --highlight: var(--text-highlight-bg);
  --icon-color-active: #32cd32;
  --icon-color-focused: #32cd32;
  --indentation-guide-color: #f0f0f0;
  --inline-title-color: #32cd32;
  --inline-title-line-height: 2;
  --inline-title-size: 1.7rem;
  --inline-title-weight: 300;
  --input-disabled-border-color: transparent;
  --input-focus-border-color: Highlight;
  --input-focus-outline: 1px solid Canvas;
  --input-unfocused-border-color: transparent;
  --italic-color: #ffd700;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ffd700;
  --link-external-color: #ffd700;
  --link-unresolved-color: #4682b4;
  --list-marker-color: #ff725b;
  --list-marker-color-collapsed: #f6fa70;
  --list-spacing: 3px;
  --menu-background: #e6e6fa;
  --menu-radius: 0px;
  --modal-background: #f0f0f0;
  --modal-border-color: #e6e6fa;
  --modal-max-width: 70vw;
  --modal-radius: 20px;
  --nav-collapse-icon-color: #32cd32;
  --nav-indentation-guide-color: #f0f0f0;
  --nav-item-background-active: #f0f0f0;
  --nav-item-children-margin-left: 0px;
  --nav-item-children-padding-left: 15px;
  --nav-item-color: #171717;
  --nav-item-color-active: #32cd32;
  --nav-item-color-highlighted: #f6fa70;
  --nav-item-color-hover: #32cd32;
  --nav-item-color-selected: #32cd32;
  --nav-item-padding: 6px;
  --nav-item-parent-padding: 8px;
  --nav-item-radius: 0px;
  --nav-tag-radius: 0px;
  --pdf-background: #f0f0f0;
  --pdf-page-background: #f0f0f0;
  --pdf-sidebar-background: #f0f0f0;
  --pink: #ff4684;
  --prompt-background: #f0f0f0;
  --purple: #9e8af3;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #f0f0f0 65%, transparent) linear-gradient(#f0f0f0, color-mix(in srgb, #f0f0f0 65%, transparent));
  --ribbon-background: #f0f0f0;
  --ribbon-background-collapsed: #f0f0f0;
  --scrollbar-radius: 0px;
  --search-result-background: #f0f0f0;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-background: #e6e6fa;
  --status-bar-radius: 0px 0 0 0;
  --suggestion-background: #f0f0f0;
  --tab-background-active: #f0f0f0;
  --tab-container-background: #e6e6fa;
  --tab-divider-color: #f0f0f0;
  --tab-font-size: 1.2em;
  --tab-font-weight: 300;
  --tab-outline-color: #f0f0f0;
  --tab-radius: 0px;
  --tab-stacked-font-size: 2em;
  --tab-stacked-text-align: center;
  --tab-switcher-background: #e6e6fa;
  --tab-switcher-menubar-background: linear-gradient(to top, #e6e6fa, transparent);
  --tab-text-color: #32cd32;
  --tab-text-color-active: #32cd32;
  --tab-text-color-focused-active-current: #32cd32;
  --table-header-background: #e6e6fa;
  --table-header-background-hover: #e6e6fa;
  --text-highlight-bg: #ffd700;
  --text-highlight-bg-active: #ffd700;
  --text-selection: #ffd700;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #e6e6fa;
  --toggle-radius: 20px;
  --toggle-thumb-color: #f0f0f0;
  --toggle-thumb-radius: 20px;
  --white: #f9f9f9;
  --yellow: #f6fa70;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(230, 230, 250);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(240, 240, 240);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(230, 230, 250);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(230, 230, 250);
}

body div#quartz-root {
  background-color: rgb(240, 240, 240);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 215, 0) none 0px;
  text-decoration: rgb(255, 215, 0);
  text-decoration-color: rgb(255, 215, 0);
}

body .page article p > em, em {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 215, 0) none 0px;
  text-decoration: rgb(255, 215, 0);
  text-decoration-color: rgb(255, 215, 0);
}

body .page article p > i, i {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 215, 0) none 0px;
  text-decoration: rgb(255, 215, 0);
  text-decoration-color: rgb(255, 215, 0);
}

body .page article p > strong, strong {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 215, 0) none 0px;
  text-decoration: rgb(255, 215, 0);
  text-decoration-color: rgb(255, 215, 0);
}

body .text-highlight {
  background-color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body del {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 215, 0) none 0px;
  text-decoration: underline rgb(255, 215, 0);
  text-decoration-color: rgb(255, 215, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 215, 0) none 0px;
  text-decoration: underline rgb(255, 215, 0);
  text-decoration-color: rgb(255, 215, 0);
}

body a.internal.broken {
  color: rgb(70, 130, 180);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(70, 130, 180) none 0px;
}`,
    lists: `body ol.overflow {
  background-color: rgb(240, 240, 240);
}

body ul.overflow {
  background-color: rgb(240, 240, 240);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(230, 230, 250);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.109px;
}

body tr {
  background-color: rgb(230, 230, 250);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 69, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 69, 0);
  border-right-color: rgb(255, 69, 0);
  border-top-color: rgb(255, 69, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 69, 0);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre > code > [data-line] {
  border-left-color: rgb(34, 139, 34);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(34, 139, 34);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(34, 139, 34);
  border-left-color: rgb(34, 139, 34);
  border-right-color: rgb(34, 139, 34);
  border-top-color: rgb(34, 139, 34);
}

body pre > code, pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body figcaption {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    embeds: `body .file-embed {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .transclude {
  background-color: rgb(230, 230, 250);
}

body .transclude-inner {
  background-color: rgb(230, 230, 250);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-container > .search-space {
  background-color: rgb(240, 240, 240);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(230, 230, 250);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body h1 {
  color: rgb(50, 205, 50);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(158, 138, 243);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(50, 205, 50);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 114, 91);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 70, 132);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(255, 215, 0);
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    scrollbars: `body .callout {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(240, 240, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 240, 240);
}

body ::-webkit-scrollbar-corner {
  background: rgb(240, 240, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 240, 240);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(240, 240, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 240, 240);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(240, 240, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 240, 240);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(240, 240, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 240, 240);
}

body ::-webkit-scrollbar-track {
  background: rgb(240, 240, 240) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(240, 240, 240);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(23, 23, 23);
  text-decoration: rgb(23, 23, 23);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(23, 23, 23);
  text-decoration: rgb(23, 23, 23);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(23, 23, 23);
  text-decoration: rgb(23, 23, 23);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(240, 240, 240);
  border-bottom-color: rgb(50, 205, 50);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(50, 205, 50);
  border-right-color: rgb(50, 205, 50);
  border-top-color: rgb(50, 205, 50);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(50, 205, 50);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    footer: `body footer {
  background-color: rgb(230, 230, 250);
  border-top-left-radius: 0px;
}`,
    recentNotes: `body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(23, 23, 23);
  text-decoration: rgb(23, 23, 23);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(23, 23, 23);
}`,
    listPage: `body li.section-li > .section .meta {
  color: rgb(23, 23, 23);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(23, 23, 23);
  text-decoration: rgb(23, 23, 23);
}`,
    darkmode: `body .darkmode {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    misc: `body .metadata {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Apercu Pro", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(230, 230, 250);
}

body kbd {
  border-bottom-color: rgb(255, 69, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 69, 0);
  border-right-color: rgb(255, 69, 0);
  border-top-color: rgb(255, 69, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 69, 0);
}`,
  },
};
