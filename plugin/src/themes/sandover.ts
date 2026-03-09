import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sandover",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["special-elite"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 9;
  --accent-s: 89%;
  --background-modifier-active-hover: #ff8671;
  --background-modifier-border-focus: rgb(245, 114, 91);
  --background-primary: #282828;
  --background-secondary: #282828;
  --bases-cards-background: #282828;
  --bases-cards-radius: 0px;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: rgba(#fffcf4, 0.8);
  --bases-table-cell-background-active: #282828;
  --bases-table-cell-background-selected: rgba(245, 114, 91, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(245, 114, 91);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 114, 91);
  --bases-table-container-border-radius: 0px;
  --bases-table-header-background: #282828;
  --bases-table-header-color: rgba(#fffcf4, 0.8);
  --bases-table-summary-background: #282828;
  --blockquote-border-color: none;
  --blockquote-color: #53dfdd;
  --bold-weight: 600;
  --border-width-alt: 1px;
  --button-radius: 0px;
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-example: 197, 133, 204;
  --callout-important: 197, 133, 204;
  --callout-info: 224, 222, 113;
  --callout-note: 2, 122, 255;
  --callout-question: 250, 153, 205;
  --callout-quote: 68, 207, 110;
  --callout-radius: 0px;
  --callout-success: 251, 70, 76;
  --callout-tip: 255, 169, 154;
  --callout-todo: 68, 207, 110;
  --canvas-background: #282828;
  --canvas-card-label-color: rgba(#fffcf4, 0.5);
  --canvas-color-1: 197, 133, 204;
  --canvas-color-3: 2, 122, 255;
  --canvas-color-4: 251, 70, 76;
  --canvas-color-5: 224, 222, 113;
  --canvas-color-6: 68, 207, 110;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #ffa99a;
  --caret-color: #fffcf4;
  --checkbox-border-color: rgba(#fffcf4, 0.5);
  --checkbox-border-color-hover: rgba(#fffcf4, 0.8);
  --checkbox-color: rgb(245, 114, 91);
  --checkbox-color-hover: rgb(249, 149, 138);
  --checkbox-marker-color: #282828;
  --checkbox-radius: 0;
  --checklist-done-color: rgba(#fffcf4, 0.8);
  --clickable-icon-radius: 0px;
  --code-comment: #c585cc;
  --code-function: #53dfdd;
  --code-keyword: #44cf6e;
  --code-normal: #fffcf4;
  --code-operator: #fffcf4;
  --code-property: #fffcf4;
  --code-punctuation: #fffcf4;
  --code-radius: 0px;
  --code-string: #53dfdd;
  --code-value: #027aff;
  --collapse-icon-color: rgba(#fffcf4, 0.5);
  --collapse-icon-color-collapsed: #ff8671;
  --color-accent: rgb(245, 114, 91);
  --color-accent-1: rgb(249, 149, 138);
  --color-accent-2: rgb(252, 186, 181);
  --color-accent-hsl: 9, 89%, 66%;
  --color-dark1: #282828;
  --color-dark1-rgb: #282828;
  --color-darker-purple: 153, 119, 181;
  --color-gray-rgb: 240, 240, 240;
  --color-light1: #fffcf4;
  --color-light1-rgb: #fffcf4;
  --color-salmon: #ff8671;
  --color-salmon-lighter: #ffa99a;
  --color-salmon-lighter-rgb: 255, 169, 154;
  --color-salmon-rgb: 255, 134, 113;
  --color-yellow-light: #ffe5a7;
  --color-yellow-light-rgb: 255, 229, 167;
  --divider-color-hover: rgb(245, 114, 91);
  --embed-border-start: 2px solid rgb(245, 114, 91);
  --file-header-background: #282828;
  --file-header-background-focused: #282828;
  --file-header-font: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #fffcf4;
  --font-general: "TT2020 Base";
  --font-interface: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "TT2020 Base";
  --font-mermaid: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "TT2020 Base";
  --font-print: '??', '??', "TT2020 Base", '??', 'Arial';
  --font-text: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "TT2020 Base", '??';
  --footnote-id-color: rgba(#fffcf4, 0.8);
  --footnote-id-color-no-occurrences: rgba(#fffcf4, 0.5);
  --footnote-radius: 0px;
  --graph-node: rgba(#fffcf4, 0.8);
  --graph-node-focused: #ff8671;
  --graph-node-unresolved: rgba(#fffcf4, 0.5);
  --graph-text: #fffcf4;
  --h1-color: #c585cc;
  --h1-size: 1.5em;
  --h1-style: bold;
  --h1-weight: 600;
  --h2-size: 1.4em;
  --h2-weight: 600;
  --h3-size: 1.3em;
  --h3-weight: 500;
  --h4-size: 1.1em;
  --h4-weight: 500;
  --h5-size: 1em;
  --h5-weight: 500;
  --h6-size: 0.85em;
  --h6-weight: 400;
  --heading-formatting: rgba(#fffcf4, 0.5);
  --icon-color: #fffcf4;
  --icon-color-active: #c585cc;
  --icon-color-focused: #fffcf4;
  --icon-color-focused-active: 197, 133, 204;
  --icon-color-hover: #fffcf4;
  --icon-muted: 0.5;
  --indentation-guide-color: #2a2a2a;
  --indentation-guide-color-active: #c585cc;
  --inline-title-color: #c585cc;
  --inline-title-size: 1.5em;
  --inline-title-style: bold;
  --inline-title-weight: 600;
  --input-date-separator: rgba(#fffcf4, 0.5);
  --input-placeholder-color: rgba(#fffcf4, 0.5);
  --input-radius: 0px;
  --interactive-accent: rgb(245, 114, 91);
  --interactive-accent-hover: rgb(249, 149, 138);
  --interactive-accent-hsl: 9, 89%, 66%;
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color: #ff8671;
  --link-color-hover: rgb(252, 186, 181);
  --link-decoration: none;
  --link-external-color: #ff8671;
  --link-external-color-hover: rgb(252, 186, 181);
  --link-external-decoration: none;
  --link-unresolved-color: #ff8671;
  --link-unresolved-decoration-color: rgba(245, 114, 91, 0.3);
  --list-marker-color: #fffcf4;
  --list-marker-color-collapsed: #ff8671;
  --list-marker-color-hover: rgba(#fffcf4, 0.8);
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: #282828;
  --menu-radius: 0px;
  --metadata-input-font: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #fffcf4;
  --metadata-label-font: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgba(#fffcf4, 0.8);
  --metadata-label-text-color-hover: rgba(#fffcf4, 0.8);
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(245, 114, 91);
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --modal-background: #282828;
  --modal-radius: 0px;
  --nav-collapse-icon-color: rgba(#fffcf4, 0.5);
  --nav-collapse-icon-color-collapsed: rgba(#fffcf4, 0.5);
  --nav-heading-color: #fffcf4;
  --nav-heading-color-collapsed: rgba(#fffcf4, 0.5);
  --nav-heading-color-collapsed-hover: rgba(#fffcf4, 0.8);
  --nav-heading-color-hover: #fffcf4;
  --nav-indentation-guide-color: #2a2a2a;
  --nav-item-background-selected: rgba(245, 114, 91, 0.15);
  --nav-item-color: rgba(#fffcf4, 0.8);
  --nav-item-color-active: #fffcf4;
  --nav-item-color-highlighted: #ff8671;
  --nav-item-color-hover: #ff8671;
  --nav-item-color-selected: #fffcf4;
  --nav-item-radius: 0px;
  --nav-tag-color: rgba(#fffcf4, 0.5);
  --nav-tag-color-active: rgba(#fffcf4, 0.8);
  --nav-tag-color-hover: rgba(#fffcf4, 0.8);
  --nav-tag-radius: 0px;
  --normal-weight: 500;
  --pdf-background: #282828;
  --pdf-page-background: #282828;
  --pdf-sidebar-background: #282828;
  --pill-color: rgba(#fffcf4, 0.8);
  --pill-color-hover: #fffcf4;
  --pill-color-remove: rgba(#fffcf4, 0.5);
  --pill-color-remove-hover: #ff8671;
  --prompt-background: #282828;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --ribbon-background: rgba(#282828, 0.5);
  --ribbon-background-collapsed: rgba(#282828, 0.5);
  --sandover-purple: #c585cc;
  --sandover-purple-rgb: 197, 133, 204;
  --scrollbar-radius: 0px;
  --search-clear-button-color: rgba(#fffcf4, 0.8);
  --search-icon-color: rgba(#fffcf4, 0.8);
  --search-result-background: #282828;
  --setting-group-heading-color: #fffcf4;
  --setting-items-radius: 0px;
  --slider-thumb-radius: 0px;
  --status-bar-background: #282828;
  --status-bar-border-color: #141300;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: rgba(#fffcf4, 0.8);
  --suggestion-background: #282828;
  --tab-background-active: #282828;
  --tab-container-background: #282828;
  --tab-font-weight: 500;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #282828;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 114, 91);
  --tab-text-color: rgba(#fffcf4, 0.5);
  --tab-text-color-active: rgba(#fffcf4, 0.8);
  --tab-text-color-focused: rgba(#fffcf4, 0.8);
  --tab-text-color-focused-active: #fffcf4;
  --tab-text-color-focused-active-current: #fffcf4;
  --tab-text-color-focused-highlighted: #ff8671;
  --table-drag-handle-background-active: rgb(245, 114, 91);
  --table-drag-handle-color: rgba(#fffcf4, 0.5);
  --table-header-weight: 700;
  --table-selection: rgba(245, 114, 91, 0.1);
  --table-selection-border-color: rgb(245, 114, 91);
  --tag-background: rgba(245, 114, 91, 0.1);
  --tag-background-hover: rgba(245, 114, 91, 0.2);
  --tag-border-color: rgba(245, 114, 91, 0.15);
  --tag-border-color-hover: rgba(245, 114, 91, 0.15);
  --tag-color: #ff8671;
  --tag-color-hover: #ff8671;
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .3em;
  --text-accent: #ff8671;
  --text-accent-hover: rgb(252, 186, 181);
  --text-faint: rgba(#fffcf4, 0.5);
  --text-highlight-bg: rgba(255, 229, 167, 0.3);
  --text-muted: rgba(#fffcf4, 0.8);
  --text-normal: #fffcf4;
  --text-selection: rgba(245, 114, 91, 0.33);
  --titlebar-background: #ff8671;
  --titlebar-background-focused: #ff8671;
  --titlebar-text-color: #000000;
  --titlebar-text-color-focused: #fffcf4;
  --titlebar-text-weight: 300;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --top-left-padding-y: 0px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #fffcf4;
  --vault-profile-color-hover: #fffcf4;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body .page article p > em, em {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body .page article p > i, i {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body .page article p > strong, strong {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body .text-highlight {
  background-color: rgba(255, 229, 167, 0.3);
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body del {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: line-through rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body p {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgb(255, 134, 113);
  text-decoration-color: rgb(255, 134, 113);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgb(255, 134, 113);
  text-decoration-color: rgb(255, 134, 113);
}

body a.internal.broken {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgba(245, 114, 91, 0.3);
  text-decoration-color: rgba(245, 114, 91, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 252, 244);
}

body dt {
  color: rgb(255, 252, 244);
}

body ol > li {
  color: rgb(255, 252, 244);
}

body ol.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body ul > li {
  color: rgb(255, 252, 244);
}

body ul.overflow {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
}

body blockquote {
  font-family: "TT2020 Base", "??";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body table {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  width: 201.312px;
}

body td {
  color: rgb(255, 252, 244);
}

body th {
  color: rgb(255, 252, 244);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
  color: rgb(255, 252, 244);
}

body pre > code > [data-line] {
  border-left-color: rgb(83, 223, 221);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(83, 223, 221);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(83, 223, 221);
  border-left-color: rgb(83, 223, 221);
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
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
    images: `body audio {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body figcaption {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body img {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body video {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
}

body .transclude {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(245, 114, 91);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(245, 114, 91);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(255, 252, 244);
  text-decoration: line-through rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-right: 4px;
  width: 12px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(83, 223, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 197, 133, 204;
  background-color: rgba(197, 133, 204, 0.1);
  border-bottom-color: rgba(197, 133, 204, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(197, 133, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(197, 133, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(197, 133, 204, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 224, 222, 113;
  background-color: rgba(224, 222, 113, 0.1);
  border-bottom-color: rgba(224, 222, 113, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 222, 113, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(224, 222, 113, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(224, 222, 113, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 250, 153, 205;
  background-color: rgba(250, 153, 205, 0.1);
  border-bottom-color: rgba(250, 153, 205, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(250, 153, 205, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(250, 153, 205, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(250, 153, 205, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 255, 169, 154;
  background-color: rgba(255, 169, 154, 0.1);
  border-bottom-color: rgba(255, 169, 154, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 154, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 154, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 154, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(233, 151, 63, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 252, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 252, 244);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 252, 244);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 114, 91, 0.1);
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 4.2px;
  border-bottom-right-radius: 4.2px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-right-color: rgba(245, 114, 91, 0.15);
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 4.2px;
  border-top-right-radius: 4.2px;
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 134, 113);
}

body h1 {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

body h2 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

body h2.page-title, h2.page-title a {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

body h3 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

body h4 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

body h5 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

body h6 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(255, 252, 244);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(255, 252, 244);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(255, 252, 244);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}`,
    footer: `body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(20, 19, 0);
  border-left-color: rgb(20, 19, 0);
  border-right-color: rgb(20, 19, 0);
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body li.section-li > .section .meta {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 252, 244);
  text-decoration: rgb(255, 252, 244);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

body .darkmode svg {
  color: rgb(255, 252, 244);
  stroke: rgb(255, 252, 244);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

body .breadcrumb-element p {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
}

body .metadata {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

body .metadata-properties {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

body .page-header h2.page-title {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(255, 252, 244);
  text-decoration: underline dotted rgb(255, 252, 244);
}

body details {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body input[type=text] {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

body sub {
  color: rgb(255, 252, 244);
}

body summary {
  color: rgb(255, 252, 244);
}

body sup {
  color: rgb(255, 252, 244);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9;
  --accent-s: 89%;
  --background-modifier-active-hover: #ffa99a;
  --background-modifier-border-focus: rgb(245, 114, 91);
  --background-modifier-border-hover: #fffcf4;
  --background-primary: #fffcf4;
  --background-primary-alt: #fffcf4;
  --background-secondary: #fffcf4;
  --bases-cards-background: #fffcf4;
  --bases-cards-cover-background: #fffcf4;
  --bases-cards-radius: 0px;
  --bases-cards-shadow-hover: 0 0 0 1px #fffcf4;
  --bases-embed-border-radius: 0px;
  --bases-group-heading-property-color: #000000;
  --bases-table-cell-background-active: #fffcf4;
  --bases-table-cell-background-disabled: #fffcf4;
  --bases-table-cell-background-selected: rgba(245, 114, 91, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px rgb(245, 114, 91);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 114, 91);
  --bases-table-container-border-radius: 0px;
  --bases-table-group-background: #fffcf4;
  --bases-table-header-background: #fffcf4;
  --bases-table-header-color: #000000;
  --bases-table-summary-background: #fffcf4;
  --blockquote-border-color: none;
  --blockquote-color: #086ddd;
  --blur-background: color-mix(in srgb, #fffcf4 65%, transparent) linear-gradient(#fffcf4, color-mix(in srgb, #fffcf4 65%, transparent));
  --bold-weight: 600;
  --border-width-alt: 1px;
  --button-radius: 0px;
  --callout-border-opacity: 0.4;
  --callout-border-width: 1px;
  --callout-example: 197, 133, 204;
  --callout-important: 197, 133, 204;
  --callout-info: 224, 172, 0;
  --callout-note: 8, 109, 221;
  --callout-question: 213, 57, 132;
  --callout-quote: 8, 185, 78;
  --callout-radius: 0px;
  --callout-success: 233, 49, 71;
  --callout-tip: 255, 169, 154;
  --callout-todo: 8, 185, 78;
  --canvas-background: #fffcf4;
  --canvas-card-label-color: #000000;
  --canvas-color-1: 197, 133, 204;
  --canvas-color-3: 8, 109, 221;
  --canvas-color-4: 233, 49, 71;
  --canvas-color-5: 224, 172, 0;
  --canvas-color-6: 8, 185, 78;
  --canvas-controls-radius: 0px;
  --canvas-dot-pattern: #ffa99a;
  --caret-color: #000000;
  --checkbox-border-color: #000000;
  --checkbox-border-color-hover: #000000;
  --checkbox-color: rgb(245, 114, 91);
  --checkbox-color-hover: #ff8671;
  --checkbox-marker-color: #fffcf4;
  --checkbox-radius: 0;
  --checklist-done-color: #000000;
  --clickable-icon-radius: 0px;
  --code-background: #fffcf4;
  --code-comment: #c585cc;
  --code-function: #00bfbc;
  --code-keyword: #08b94e;
  --code-normal: #000000;
  --code-operator: #000000;
  --code-property: #000000;
  --code-punctuation: #000000;
  --code-radius: 0px;
  --code-string: #00bfbc;
  --code-value: #086ddd;
  --collapse-icon-color: #000000;
  --collapse-icon-color-collapsed: #ff8671;
  --color-accent: rgb(245, 114, 91);
  --color-accent-1: rgb(248, 132, 114);
  --color-accent-2: rgb(249, 149, 138);
  --color-accent-hsl: 9, 89%, 66%;
  --color-base-35: #fffcf4;
  --color-dark1: #282828;
  --color-dark1-rgb: 40, 40, 40;
  --color-darker-purple: 153, 119, 181;
  --color-gray-rgb: 240, 240, 240;
  --color-light1: #fffcf4;
  --color-light1-rgb: 255, 252, 244;
  --color-salmon: #ff8671;
  --color-salmon-lighter: #ffa99a;
  --color-salmon-lighter-rgb: 255, 169, 154;
  --color-salmon-rgb: 255, 134, 113;
  --color-yellow-light: #ffe5a7;
  --color-yellow-light-rgb: 255, 229, 167;
  --divider-color-hover: rgb(245, 114, 91);
  --dropdown-background-hover: rgba(#ff8671, 0.5);
  --embed-border-start: 2px solid rgb(245, 114, 91);
  --file-header-background: #fffcf4;
  --file-header-background-focused: #fffcf4;
  --file-header-font: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #000000;
  --font-general: "TT2020 Base";
  --font-interface: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "TT2020 Base";
  --font-mermaid: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "TT2020 Base";
  --font-print: '??', '??', "TT2020 Base", '??', 'Arial';
  --font-text: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "TT2020 Base", '??';
  --footnote-id-color: #000000;
  --footnote-id-color-no-occurrences: #000000;
  --footnote-radius: 0px;
  --graph-line: #fffcf4;
  --graph-node: #000000;
  --graph-node-focused: #ff8671;
  --graph-node-unresolved: #000000;
  --graph-text: #000000;
  --h1-color: #c585cc;
  --h1-size: 1.5em;
  --h1-style: bold;
  --h1-weight: 600;
  --h2-size: 1.4em;
  --h2-weight: 600;
  --h3-size: 1.3em;
  --h3-weight: 500;
  --h4-size: 1.1em;
  --h4-weight: 500;
  --h5-size: 1em;
  --h5-weight: 500;
  --h6-size: 0.85em;
  --h6-weight: 400;
  --heading-formatting: #000000;
  --icon-color: #141300;
  --icon-color-active: #fffcf4;
  --icon-color-focused: #fffcf4;
  --icon-color-focused-active: #fffcf4;
  --icon-color-hover: #fffcf4;
  --icon-muted: 0.5;
  --indentation-guide-color: #e3e3e3;
  --indentation-guide-color-active: #c585cc;
  --inline-title-color: #c585cc;
  --inline-title-size: 1.5em;
  --inline-title-style: bold;
  --inline-title-weight: 600;
  --input-date-separator: #000000;
  --input-placeholder-color: #000000;
  --input-radius: 0px;
  --interactive-accent: rgb(245, 114, 91);
  --interactive-accent-hover: #ff8671;
  --interactive-accent-hsl: 9, 89%, 66%;
  --interactive-hover: rgba(#ff8671, 0.5);
  --line-height: 1.5;
  --line-width: 40rem;
  --link-color: #ff8671;
  --link-color-hover: rgb(249, 149, 138);
  --link-decoration: none;
  --link-external-color: #ff8671;
  --link-external-color-hover: rgb(249, 149, 138);
  --link-external-decoration: none;
  --link-unresolved-color: #ff8671;
  --link-unresolved-decoration-color: rgba(245, 114, 91, 0.3);
  --list-marker-color: #000000;
  --list-marker-color-collapsed: #ff8671;
  --list-marker-color-hover: #000000;
  --max-col-width: 18em;
  --max-width: 88%;
  --menu-background: #fffcf4;
  --menu-border-color: #fffcf4;
  --menu-radius: 0px;
  --metadata-input-font: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #000000;
  --metadata-label-font: '??', "TT2020 Base", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #000000;
  --metadata-label-text-color-hover: #000000;
  --metadata-property-box-shadow-focus: 0 0 0 2px rgb(245, 114, 91);
  --metadata-property-box-shadow-hover: 0 0 0 1px #fffcf4;
  --mobile-left-sidebar-width: 280pt;
  --mobile-right-sidebar-width: 240pt;
  --modal-background: #fffcf4;
  --modal-radius: 0px;
  --nav-collapse-icon-color: #000000;
  --nav-collapse-icon-color-collapsed: #000000;
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: #000000;
  --nav-heading-color-collapsed-hover: #000000;
  --nav-heading-color-hover: #000000;
  --nav-indentation-guide-color: #e3e3e3;
  --nav-item-background-selected: rgba(245, 114, 91, 0.15);
  --nav-item-color: #000000;
  --nav-item-color-active: #000000;
  --nav-item-color-highlighted: #ff8671;
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #000000;
  --nav-item-radius: 0px;
  --nav-tag-color: #000000;
  --nav-tag-color-active: #000000;
  --nav-tag-color-hover: #000000;
  --nav-tag-radius: 0px;
  --normal-weight: 500;
  --pdf-background: #fffcf4;
  --pdf-page-background: #fffcf4;
  --pdf-sidebar-background: #fffcf4;
  --pill-border-color-hover: #fffcf4;
  --pill-color: #000000;
  --pill-color-hover: #000000;
  --pill-color-remove: #000000;
  --pill-color-remove-hover: #ff8671;
  --prompt-background: #fffcf4;
  --radius-l: 0px;
  --radius-m: 0px;
  --radius-s: 0px;
  --raised-background: color-mix(in srgb, #fffcf4 65%, transparent) linear-gradient(#fffcf4, color-mix(in srgb, #fffcf4 65%, transparent));
  --ribbon-background: #fffcf4;
  --ribbon-background-collapsed: #fffcf4;
  --sandover-purple: #c585cc;
  --sandover-purple-rgb: 197, 133, 204;
  --scrollbar-radius: 0px;
  --search-clear-button-color: #000000;
  --search-icon-color: #000000;
  --search-result-background: #fffcf4;
  --setting-group-heading-color: #000000;
  --setting-items-background: #fffcf4;
  --setting-items-radius: 0px;
  --slider-thumb-border-color: #fffcf4;
  --slider-thumb-radius: 0px;
  --status-bar-background: #fffcf4;
  --status-bar-border-color: #141300;
  --status-bar-radius: 0px 0 0 0;
  --status-bar-text-color: #000000;
  --suggestion-background: #fffcf4;
  --tab-background-active: #fffcf4;
  --tab-container-background: #fffcf4;
  --tab-divider-color: #fffcf4;
  --tab-font-weight: 500;
  --tab-radius: 0px;
  --tab-radius-active: 0px;
  --tab-switcher-background: #fffcf4;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffcf4, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 114, 91);
  --tab-text-color: #000000;
  --tab-text-color-active: #000000;
  --tab-text-color-focused: #000000;
  --tab-text-color-focused-active: #000000;
  --tab-text-color-focused-active-current: #000000;
  --tab-text-color-focused-highlighted: #ff8671;
  --table-drag-handle-background-active: rgb(245, 114, 91);
  --table-drag-handle-color: #000000;
  --table-header-weight: 700;
  --table-selection: rgba(245, 114, 91, 0.1);
  --table-selection-border-color: rgb(245, 114, 91);
  --tag-background: rgba(245, 114, 91, 0.1);
  --tag-background-hover: rgba(245, 114, 91, 0.2);
  --tag-border-color: rgba(245, 114, 91, 0.15);
  --tag-border-color-hover: rgba(245, 114, 91, 0.15);
  --tag-color: #ff8671;
  --tag-color-hover: #ff8671;
  --tag-decoration-hover: underline;
  --tag-padding-x: .5em;
  --tag-padding-y: .2em;
  --tag-radius: .3em;
  --text-accent: #ff8671;
  --text-accent-hover: rgb(249, 149, 138);
  --text-faint: #000000;
  --text-highlight-bg: #ffe5a7;
  --text-muted: #000000;
  --text-normal: #000000;
  --text-selection: rgba(245, 114, 91, 0.2);
  --titlebar-background: #ffa99a;
  --titlebar-background-focused: #ffa99a;
  --titlebar-text-color: #fffcf4;
  --titlebar-text-color-focused: #000000;
  --titlebar-text-weight: 300;
  --toggle-radius: 0px;
  --toggle-thumb-radius: 0px;
  --top-left-padding-y: 0px;
  --vault-name-font-weight: 700;
  --vault-profile-color: #000000;
  --vault-profile-color-hover: #000000;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  background-color: rgb(255, 229, 167);
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgb(255, 134, 113);
  text-decoration-color: rgb(255, 134, 113);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgb(255, 134, 113);
  text-decoration-color: rgb(255, 134, 113);
}

body a.internal.broken {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgba(245, 114, 91, 0.3);
  text-decoration-color: rgba(245, 114, 91, 0.3);
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body blockquote {
  font-family: "TT2020 Base", "??";
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  width: 201.312px;
}

body td {
  color: rgb(0, 0, 0);
}

body th {
  color: rgb(0, 0, 0);
  font-weight: 700;
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body pre > code > [data-line] {
  border-left-color: rgb(0, 191, 188);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 191, 188);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 191, 188);
  border-left-color: rgb(0, 191, 188);
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body pre:has(> code) {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(245, 114, 91);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(245, 114, 91);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(0, 0, 0);
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  margin-right: 4px;
  width: 12px;
}

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `body .callout[data-callout="abstract"] {
  border-bottom-color: rgba(0, 191, 188, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  --callout-color: 197, 133, 204;
  background-color: rgba(197, 133, 204, 0.1);
  border-bottom-color: rgba(197, 133, 204, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(197, 133, 204, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(197, 133, 204, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(197, 133, 204, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  --callout-color: 224, 172, 0;
  background-color: rgba(224, 172, 0, 0.1);
  border-bottom-color: rgba(224, 172, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(224, 172, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(224, 172, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(224, 172, 0, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  border-bottom-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  --callout-color: 213, 57, 132;
  background-color: rgba(213, 57, 132, 0.1);
  border-bottom-color: rgba(213, 57, 132, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(213, 57, 132, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(213, 57, 132, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(213, 57, 132, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  --callout-color: 233, 49, 71;
  background-color: rgba(233, 49, 71, 0.1);
  border-bottom-color: rgba(233, 49, 71, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  --callout-color: 255, 169, 154;
  background-color: rgba(255, 169, 154, 0.1);
  border-bottom-color: rgba(255, 169, 154, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(255, 169, 154, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(255, 169, 154, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(255, 169, 154, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  --callout-color: 8, 185, 78;
  background-color: rgba(8, 185, 78, 0.1);
  border-bottom-color: rgba(8, 185, 78, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  border-bottom-color: rgba(236, 117, 0, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(245, 114, 91, 0.1);
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 4.2px;
  border-bottom-right-radius: 4.2px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-right-color: rgba(245, 114, 91, 0.15);
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 4.2px;
  border-top-right-radius: 4.2px;
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 134, 113);
}

body h1 {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

body h2.page-title, h2.page-title a {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.4);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.4);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.4);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.4);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(0, 0, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(20, 19, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(20, 19, 0);
  border-right-color: rgb(20, 19, 0);
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(20, 19, 0);
}`,
    footer: `body footer {
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(20, 19, 0);
  border-left-color: rgb(20, 19, 0);
  border-right-color: rgb(20, 19, 0);
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(20, 19, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(20, 19, 0);
  border-right-color: rgb(20, 19, 0);
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(20, 19, 0);
}

body .darkmode svg {
  color: rgb(20, 19, 0);
  stroke: rgb(20, 19, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

body .breadcrumb-element p {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

body .navigation-progress {
  background-color: rgb(255, 252, 244);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
