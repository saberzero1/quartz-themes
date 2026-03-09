import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sea-glass",
    modes: ["dark"],
    variations: [],
    fonts: ["euclid-circular-a", "hack"],
  },
  dark: {
    base: `:root:root {
  --background-primary: #232627;
  --background-secondary: #1d2021;
  --bases-cards-background: #232627;
  --bases-table-border-color: #6f6b5b26;
  --bases-table-cell-background-active: #232627;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.05);
  --bases-table-header-background: #232627;
  --bases-table-row-background-hover: #1d2021;
  --bases-table-summary-background: #232627;
  --blockquote-background-color: #1d2021;
  --blockquote-border-color: #91f697;
  --blockquote-border-thickness: 4px;
  --button-radius: 4px;
  --canvas-background: #232627;
  --canvas-card-label-color: #91f697;
  --canvas-color-1: 235, 219, 178;
  --canvas-color-2: 111, 107, 91;
  --canvas-color-3: 145, 246, 151;
  --canvas-color-4: 0, 188, 175;
  --canvas-color-5: 0, 148, 137;
  --canvas-color-6: 249, 38, 114;
  --caret-color: #ebdbb2;
  --checkbox-border-color: #6f6b5b;
  --checkbox-border-color-hover: #ebdbb2;
  --checkbox-color: #91f697;
  --checkbox-color-hover: #00bcaf;
  --checkbox-marker-color: #1d2021;
  --checklist-done-color: #6f6b5b;
  --code-background: #1d2021;
  --code-comment: #6f6b5b;
  --code-function: #b7f3db;
  --code-important: #8be1c0;
  --code-keyword: #f92672;
  --code-normal: #ebdbb2;
  --code-operator: #f92672;
  --code-property: #00bcaf;
  --code-punctuation: #6f6b5b;
  --code-string: #91f697;
  --code-tag: #f92672;
  --code-value: #8be1c0;
  --collapse-icon-color: #6f6b5b;
  --collapse-icon-color-collapsed: #6f6b5b;
  --color-aquamarine: #b7f3db;
  --color-aquamarine-rgb: 183, 243, 219;
  --color-dark-cyan: #009489;
  --color-dark-cyan-rgb: 0, 148, 137;
  --color-dim-grey: #6f6b5b;
  --color-dim-grey-50: #6f6b5b26;
  --color-dim-grey-rgb: 111, 107, 91;
  --color-eerie-black-100: #1d2021;
  --color-eerie-black-100-rgb: 29, 32, 33;
  --color-eerie-black-75: #232627;
  --color-eerie-black-75-rgb: 35, 38, 39;
  --color-light-green: #91f697;
  --color-light-green-hsl: 124, 85%, 77%;
  --color-light-green-rgb: 145, 246, 151;
  --color-light-sea-green: #00bcaf;
  --color-light-sea-green-rgb: 0, 188, 175;
  --color-mint: #8be1c0;
  --color-mint-rgb: 139, 225, 192;
  --color-rose: #f92672;
  --color-rose-rgb: 249, 38, 114;
  --color-tan: #ebdbb2;
  --color-tan-rgb: 235, 219, 178;
  --divider-color: #6f6b5b26;
  --divider-color-hover: #6f6b5b;
  --file-header-background: #232627;
  --file-header-background-focused: #232627;
  --file-header-font: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 750px;
  --file-margins: 32px;
  --flair-color: #ebdbb2;
  --font-caskaydia-cove-mono: "CaskaydiaCove Nerd Font Mono";
  --font-euclid-circular-a: "Euclid Circular A";
  --font-interface: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Euclid Circular A";
  --font-mermaid: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "CaskaydiaCove Nerd Font Mono";
  --font-print: '??', '??', "Euclid Circular A", 'Arial';
  --font-text: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Euclid Circular A";
  --graph-controls-width: 200px;
  --graph-line: #6f6b5b;
  --graph-node: #91f697;
  --graph-node-focused: #f92672;
  --graph-text: #ebdbb2;
  --h1-color: #f92672;
  --h1-size: 1.802em;
  --h2-color: #009489;
  --h2-size: 1.602em;
  --h2-weight: 600;
  --h3-color: #ebdbb2;
  --h3-size: 1.424em;
  --h3-style: italic;
  --h3-weight: 600;
  --h4-color: #ebdbb2;
  --h4-size: 1.266em;
  --h4-style: italic;
  --h4-weight: 600;
  --h5-color: #ebdbb2;
  --h5-size: 1.125em;
  --h5-style: italic;
  --h5-weight: 600;
  --h6-color: #ebdbb2;
  --h6-style: italic;
  --hr-color: #6f6b5b26;
  --hr-thickness: 3px;
  --icon-color: #6f6b5b;
  --icon-color-active: #6f6b5b;
  --icon-color-focused: #ebdbb2;
  --icon-color-hover: #ebdbb2;
  --icon-opacity: 1;
  --indentation-guide-color: #6f6b5b26;
  --indentation-guide-color-active: #6f6b5b;
  --indentation-guide-editing-indent: 1em;
  --inline-title-color: #f92672;
  --inline-title-size: 1.802em;
  --input-radius: 4px;
  --link-color: #91f697;
  --link-color-hover: #91f697;
  --link-decoration: none;
  --link-external-color: #91f697;
  --link-external-color-hover: #91f697;
  --link-unresolved-color: #91f697;
  --list-marker-color: #6f6b5b;
  --list-marker-color-collapsed: #f92672;
  --list-marker-color-hover: #ebdbb2;
  --menu-background: #1d2021;
  --metadata-input-font: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #ebdbb2;
  --metadata-label-font: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #232627;
  --nav-collapse-icon-color: #6f6b5b;
  --nav-collapse-icon-color-collapsed: #6f6b5b;
  --nav-heading-color: #ebdbb2;
  --nav-heading-color-hover: #ebdbb2;
  --nav-indentation-guide-color: #6f6b5b26;
  --nav-item-background-active: #6f6b5b26;
  --nav-item-background-hover: #6f6b5b26;
  --nav-item-background-selected: #6f6b5b26;
  --nav-item-color: #6f6b5b;
  --nav-item-color-active: #ebdbb2;
  --nav-item-color-highlighted: #ebdbb2;
  --nav-item-color-hover: #ebdbb2;
  --nav-item-color-selected: #ebdbb2;
  --pdf-background: #1d2021;
  --pdf-page-background: #1d2021;
  --pdf-sidebar-background: #1d2021;
  --pill-color-hover: #ebdbb2;
  --prompt-background: #232627;
  --ribbon-background: #1d2021;
  --ribbon-background-collapsed: #1d2021;
  --ribbon-width: 50px;
  --search-clear-button-color: #6f6b5b;
  --search-icon-color: #ebdbb2;
  --search-result-background: #232627;
  --setting-group-heading-color: #ebdbb2;
  --slider-thumb-radius: 50%;
  --status-bar-background: #1d2021;
  --status-bar-border-color: #6f6b5b26;
  --status-bar-text-color: #6f6b5b;
  --suggestion-background: #232627;
  --tab-background-active: #1d2021;
  --tab-container-background: #1d2021;
  --tab-curve: 10px;
  --tab-outline-color: #6f6b5b26;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.15);
  --tab-switcher-background: #1d2021;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d2021, transparent);
  --tab-text-color: #6f6b5b;
  --tab-text-color-active: #ebdbb2;
  --tab-text-color-focused: #6f6b5b;
  --tab-text-color-focused-active: #ebdbb2;
  --tab-text-color-focused-active-current: #ebdbb2;
  --tab-text-color-focused-highlighted: #ebdbb2;
  --table-add-button-background: #1d2021;
  --table-add-button-border-width: 2px;
  --table-background: #1d2021;
  --table-border-color: #6f6b5b26;
  --table-border-width: 2px;
  --table-column-alt-background: none;
  --table-column-first-border-width: 2px;
  --table-column-last-border-width: 2px;
  --table-drag-handle-background: #91f697;
  --table-drag-handle-background-active: #91f697;
  --table-drag-handle-color: #1d2021;
  --table-header-background: #1d2021;
  --table-header-background-hover: #1d2021;
  --table-header-border-color: #6f6b5b26;
  --table-header-border-width: 10px;
  --table-header-color: #f92672;
  --table-header-size: 18px;
  --table-row-alt-background: #232627;
  --table-row-alt-background-hover: #1d2021;
  --table-row-background-hover: #1d2021;
  --table-row-last-border-width: 2px;
  --table-selection: rgba(138, 92, 245, 0.05);
  --table-selection-border-color: #91f697;
  --table-selection-border-radius: 10px;
  --table-selection-border-width: 4px;
  --tag-background: rgba(146, 246, 153, 0.1);
  --tag-background-hover: rgba(146, 246, 153, 0.2);
  --tag-border-color: rgba(146, 246, 153, 0.15);
  --tag-border-color-hover: rgba(146, 246, 153, 0.15);
  --tag-color: #91f697;
  --tag-padding-y: 0.3em;
  --text-normal: #ebdbb2;
  --titlebar-background: #232627;
  --titlebar-background-focused: #1d2021;
  --titlebar-border-color: #6f6b5b26;
  --titlebar-text-color: #ebdbb2;
  --titlebar-text-color-focused: #ebdbb2;
  --vault-name-color: #ebdbb2;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #ebdbb2;
  --vault-profile-color-hover: #ebdbb2;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(35, 38, 39);
  color: rgb(235, 219, 178);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(111, 107, 91, 0.15);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 32, 33);
  border-left-color: rgba(111, 107, 91, 0.15);
  color: rgb(235, 219, 178);
}

body div#quartz-root {
  background-color: rgb(35, 38, 39);
  color: rgb(235, 219, 178);
}`,
    typography: `body .page article p > b, b {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > em, em {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > i, i {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .page article p > strong, strong {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .text-highlight {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body del {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: line-through rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body p {
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(145, 246, 151);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(145, 246, 151) none 0px;
  text-decoration: underline rgb(145, 246, 151);
  text-decoration-color: rgb(145, 246, 151);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 246, 151);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(145, 246, 151) none 0px;
  text-decoration: rgb(145, 246, 151);
  text-decoration-color: rgb(145, 246, 151);
}

body a.internal.broken {
  color: rgb(145, 246, 151);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(145, 246, 151) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `body dd {
  color: rgb(235, 219, 178);
}

body dt {
  color: rgb(235, 219, 178);
}

body ol > li {
  color: rgb(235, 219, 178);
}

body ol.overflow {
  background-color: rgb(35, 38, 39);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ul > li {
  color: rgb(235, 219, 178);
}

body ul.overflow {
  background-color: rgb(35, 38, 39);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `body blockquote {
  background-color: rgb(29, 32, 33);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body table {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 252px;
}

body tbody tr:nth-child(even) {
  background-color: rgb(29, 32, 33);
}

body tbody tr:nth-child(odd) {
  background-color: rgb(35, 38, 39);
}

body td {
  border-bottom-color: rgba(111, 107, 91, 0.15);
  border-bottom-width: 2px;
  border-left-color: rgba(111, 107, 91, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(111, 107, 91, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(111, 107, 91, 0.15);
  border-top-width: 2px;
  color: rgb(235, 219, 178);
}

body th {
  border-bottom-color: rgba(111, 107, 91, 0.15);
  border-bottom-width: 2px;
  border-left-color: rgba(111, 107, 91, 0.15);
  border-left-width: 2px;
  border-right-color: rgba(111, 107, 91, 0.15);
  border-right-width: 2px;
  border-top-color: rgba(111, 107, 91, 0.15);
  border-top-width: 10px;
  color: rgb(249, 38, 114);
}

body tr {
  background-color: rgb(29, 32, 33);
}`,
    code: `body code {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "??", "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 32, 33);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

body pre > code > [data-line] {
  border-left-color: rgb(183, 243, 219);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(183, 243, 219);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(183, 243, 219);
  border-left-color: rgb(183, 243, 219);
  border-right-color: rgb(183, 243, 219);
  border-top-color: rgb(183, 243, 219);
}

body pre > code, pre:has(> code) {
  background-color: rgb(29, 32, 33);
}

body pre:has(> code) {
  background-color: rgb(29, 32, 33);
}`,
    images: `body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body figcaption {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body img {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(111, 107, 91);
  text-decoration: line-through rgb(111, 107, 91);
  text-decoration-color: rgb(111, 107, 91);
}

body input[type=checkbox] {
  border-bottom-color: rgb(111, 107, 91);
  border-left-color: rgb(111, 107, 91);
  border-right-color: rgb(111, 107, 91);
  border-top-color: rgb(111, 107, 91);
}

body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}`,
    search: `body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(35, 38, 39);
}

body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(235, 219, 178);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(146, 246, 153, 0.1);
  border-bottom-color: rgba(146, 246, 153, 0.15);
  border-left-color: rgba(146, 246, 153, 0.15);
  border-right-color: rgba(146, 246, 153, 0.15);
  border-top-color: rgba(146, 246, 153, 0.15);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(145, 246, 151);
}

body h1 {
  color: rgb(249, 38, 114);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 148, 137);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(249, 38, 114);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgba(111, 107, 91, 0.15);
  border-left-color: rgba(111, 107, 91, 0.15);
  border-right-color: rgba(111, 107, 91, 0.15);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

body ::-webkit-scrollbar-corner {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

body ::-webkit-scrollbar-track {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(111, 107, 91);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(111, 107, 91);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(111, 107, 91);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(111, 107, 91, 0.15);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 107, 91);
  border-left-color: rgb(111, 107, 91);
  border-right-color: rgb(111, 107, 91);
  border-top-color: rgb(111, 107, 91);
  color: rgb(111, 107, 91);
}`,
    footer: `body footer {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgba(111, 107, 91, 0.15);
  border-left-color: rgba(111, 107, 91, 0.15);
  border-right-color: rgba(111, 107, 91, 0.15);
  border-top-color: rgba(111, 107, 91, 0.15);
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(111, 107, 91);
  text-decoration: rgb(111, 107, 91);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 107, 91);
  text-decoration: rgb(111, 107, 91);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body li.section-li > .section .meta {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 107, 91);
  text-decoration: rgb(111, 107, 91);
}

body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(111, 107, 91);
  border-left-color: rgb(111, 107, 91);
  border-right-color: rgb(111, 107, 91);
  border-top-color: rgb(111, 107, 91);
  color: rgb(111, 107, 91);
}

body .darkmode svg {
  color: rgb(111, 107, 91);
  stroke: rgb(111, 107, 91);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .metadata {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(29, 32, 33);
}

body .page-header h2.page-title {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(235, 219, 178);
  text-decoration: underline dotted rgb(235, 219, 178);
}

body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body input[type=text] {
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "??", "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body sub {
  color: rgb(235, 219, 178);
}

body summary {
  color: rgb(235, 219, 178);
}

body sup {
  color: rgb(235, 219, 178);
}`,
  },
  light: {},
};
