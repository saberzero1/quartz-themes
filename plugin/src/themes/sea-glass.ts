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
  --background-primary: #232627 !important;
  --background-secondary: #1d2021 !important;
  --bases-cards-background: #232627 !important;
  --bases-table-border-color: #6f6b5b26 !important;
  --bases-table-cell-background-active: #232627 !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.05) !important;
  --bases-table-header-background: #232627 !important;
  --bases-table-row-background-hover: #1d2021 !important;
  --bases-table-summary-background: #232627 !important;
  --blockquote-background-color: #1d2021 !important;
  --blockquote-border-color: #91f697 !important;
  --blockquote-border-thickness: 4px !important;
  --bodyFont: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 4px !important;
  --canvas-background: #232627 !important;
  --canvas-card-label-color: #91f697 !important;
  --canvas-color-1: 235, 219, 178 !important;
  --canvas-color-2: 111, 107, 91 !important;
  --canvas-color-3: 145, 246, 151 !important;
  --canvas-color-4: 0, 188, 175 !important;
  --canvas-color-5: 0, 148, 137 !important;
  --canvas-color-6: 249, 38, 114 !important;
  --caret-color: #ebdbb2 !important;
  --checkbox-border-color: #6f6b5b !important;
  --checkbox-border-color-hover: #ebdbb2 !important;
  --checkbox-color: #91f697 !important;
  --checkbox-color-hover: #00bcaf !important;
  --checkbox-marker-color: #1d2021 !important;
  --checklist-done-color: #6f6b5b !important;
  --code-background: #1d2021 !important;
  --code-comment: #6f6b5b !important;
  --code-function: #b7f3db !important;
  --code-important: #8be1c0 !important;
  --code-keyword: #f92672 !important;
  --code-normal: #ebdbb2 !important;
  --code-operator: #f92672 !important;
  --code-property: #00bcaf !important;
  --code-punctuation: #6f6b5b !important;
  --code-string: #91f697 !important;
  --code-tag: #f92672 !important;
  --code-value: #8be1c0 !important;
  --codeFont: '??', "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #6f6b5b !important;
  --collapse-icon-color-collapsed: #6f6b5b !important;
  --color-aquamarine: #b7f3db !important;
  --color-aquamarine-rgb: 183, 243, 219 !important;
  --color-dark-cyan: #009489 !important;
  --color-dark-cyan-rgb: 0, 148, 137 !important;
  --color-dim-grey: #6f6b5b !important;
  --color-dim-grey-50: #6f6b5b26 !important;
  --color-dim-grey-rgb: 111, 107, 91 !important;
  --color-eerie-black-100: #1d2021 !important;
  --color-eerie-black-100-rgb: 29, 32, 33 !important;
  --color-eerie-black-75: #232627 !important;
  --color-eerie-black-75-rgb: 35, 38, 39 !important;
  --color-light-green: #91f697 !important;
  --color-light-green-hsl: 124, 85%, 77% !important;
  --color-light-green-rgb: 145, 246, 151 !important;
  --color-light-sea-green: #00bcaf !important;
  --color-light-sea-green-rgb: 0, 188, 175 !important;
  --color-mint: #8be1c0 !important;
  --color-mint-rgb: 139, 225, 192 !important;
  --color-rose: #f92672 !important;
  --color-rose-rgb: 249, 38, 114 !important;
  --color-tan: #ebdbb2 !important;
  --color-tan-rgb: 235, 219, 178 !important;
  --dark: #ebdbb2 !important;
  --darkgray: #ebdbb2 !important;
  --divider-color: #6f6b5b26 !important;
  --divider-color-hover: #6f6b5b !important;
  --file-header-background: #232627 !important;
  --file-header-background-focused: #232627 !important;
  --file-header-font: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 750px !important;
  --file-margins: 32px !important;
  --flair-color: #ebdbb2 !important;
  --font-caskaydia-cove-mono: "CaskaydiaCove Nerd Font Mono" !important;
  --font-euclid-circular-a: "Euclid Circular A" !important;
  --font-interface: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Euclid Circular A" !important;
  --font-mermaid: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "CaskaydiaCove Nerd Font Mono" !important;
  --font-print: '??', '??', "Euclid Circular A", 'Arial' !important;
  --font-text: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Euclid Circular A" !important;
  --graph-controls-width: 200px !important;
  --graph-line: #6f6b5b !important;
  --graph-node: #91f697 !important;
  --graph-node-focused: #f92672 !important;
  --graph-text: #ebdbb2 !important;
  --gray: #ebdbb2 !important;
  --h1-color: #f92672 !important;
  --h1-size: 1.802em !important;
  --h2-color: #009489 !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-color: #ebdbb2 !important;
  --h3-size: 1.424em !important;
  --h3-style: italic !important;
  --h3-weight: 600 !important;
  --h4-color: #ebdbb2 !important;
  --h4-size: 1.266em !important;
  --h4-style: italic !important;
  --h4-weight: 600 !important;
  --h5-color: #ebdbb2 !important;
  --h5-size: 1.125em !important;
  --h5-style: italic !important;
  --h5-weight: 600 !important;
  --h6-color: #ebdbb2 !important;
  --h6-style: italic !important;
  --headerFont: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --hr-color: #6f6b5b26 !important;
  --hr-thickness: 3px !important;
  --icon-color: #6f6b5b !important;
  --icon-color-active: #6f6b5b !important;
  --icon-color-focused: #ebdbb2 !important;
  --icon-color-hover: #ebdbb2 !important;
  --icon-opacity: 1 !important;
  --indentation-guide-color: #6f6b5b26 !important;
  --indentation-guide-color-active: #6f6b5b !important;
  --indentation-guide-editing-indent: 1em !important;
  --inline-title-color: #f92672 !important;
  --inline-title-size: 1.802em !important;
  --input-radius: 4px !important;
  --light: #232627 !important;
  --lightgray: #1d2021 !important;
  --link-color: #91f697 !important;
  --link-color-hover: #91f697 !important;
  --link-decoration: none !important;
  --link-external-color: #91f697 !important;
  --link-external-color-hover: #91f697 !important;
  --link-unresolved-color: #91f697 !important;
  --list-marker-color: #6f6b5b !important;
  --list-marker-color-collapsed: #f92672 !important;
  --list-marker-color-hover: #ebdbb2 !important;
  --menu-background: #1d2021 !important;
  --metadata-input-font: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #ebdbb2 !important;
  --metadata-label-font: '??', "Euclid Circular A", '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #232627 !important;
  --nav-collapse-icon-color: #6f6b5b !important;
  --nav-collapse-icon-color-collapsed: #6f6b5b !important;
  --nav-heading-color: #ebdbb2 !important;
  --nav-heading-color-hover: #ebdbb2 !important;
  --nav-indentation-guide-color: #6f6b5b26 !important;
  --nav-item-background-active: #6f6b5b26 !important;
  --nav-item-background-hover: #6f6b5b26 !important;
  --nav-item-background-selected: #6f6b5b26 !important;
  --nav-item-color: #6f6b5b !important;
  --nav-item-color-active: #ebdbb2 !important;
  --nav-item-color-highlighted: #ebdbb2 !important;
  --nav-item-color-hover: #ebdbb2 !important;
  --nav-item-color-selected: #ebdbb2 !important;
  --pdf-background: #1d2021 !important;
  --pdf-page-background: #1d2021 !important;
  --pdf-sidebar-background: #1d2021 !important;
  --pill-color-hover: #ebdbb2 !important;
  --prompt-background: #232627 !important;
  --ribbon-background: #1d2021 !important;
  --ribbon-background-collapsed: #1d2021 !important;
  --ribbon-width: 50px !important;
  --search-clear-button-color: #6f6b5b !important;
  --search-icon-color: #ebdbb2 !important;
  --search-result-background: #232627 !important;
  --setting-group-heading-color: #ebdbb2 !important;
  --slider-thumb-radius: 50% !important;
  --status-bar-background: #1d2021 !important;
  --status-bar-border-color: #6f6b5b26 !important;
  --status-bar-text-color: #6f6b5b !important;
  --suggestion-background: #232627 !important;
  --tab-background-active: #1d2021 !important;
  --tab-container-background: #1d2021 !important;
  --tab-curve: 10px !important;
  --tab-outline-color: #6f6b5b26 !important;
  --tab-stacked-shadow: -8px 0 8px 0 rgba(0, 0, 0, 0.15) !important;
  --tab-switcher-background: #1d2021 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #1d2021, transparent) !important;
  --tab-text-color: #6f6b5b !important;
  --tab-text-color-active: #ebdbb2 !important;
  --tab-text-color-focused: #6f6b5b !important;
  --tab-text-color-focused-active: #ebdbb2 !important;
  --tab-text-color-focused-active-current: #ebdbb2 !important;
  --tab-text-color-focused-highlighted: #ebdbb2 !important;
  --table-add-button-background: #1d2021 !important;
  --table-add-button-border-width: 2px !important;
  --table-background: #1d2021 !important;
  --table-border-color: #6f6b5b26 !important;
  --table-border-width: 2px !important;
  --table-column-alt-background: none !important;
  --table-column-first-border-width: 2px !important;
  --table-column-last-border-width: 2px !important;
  --table-drag-handle-background: #91f697 !important;
  --table-drag-handle-background-active: #91f697 !important;
  --table-drag-handle-color: #1d2021 !important;
  --table-header-background: #1d2021 !important;
  --table-header-background-hover: #1d2021 !important;
  --table-header-border-color: #6f6b5b26 !important;
  --table-header-border-width: 10px !important;
  --table-header-color: #f92672 !important;
  --table-header-size: 18px !important;
  --table-row-alt-background: #232627 !important;
  --table-row-alt-background-hover: #1d2021 !important;
  --table-row-background-hover: #1d2021 !important;
  --table-row-last-border-width: 2px !important;
  --table-selection: rgba(138, 92, 245, 0.05) !important;
  --table-selection-border-color: #91f697 !important;
  --table-selection-border-radius: 10px !important;
  --table-selection-border-width: 4px !important;
  --tag-background: rgba(146, 246, 153, 0.1) !important;
  --tag-background-hover: rgba(146, 246, 153, 0.2) !important;
  --tag-border-color: rgba(146, 246, 153, 0.15) !important;
  --tag-border-color-hover: rgba(146, 246, 153, 0.15) !important;
  --tag-color: #91f697 !important;
  --tag-padding-y: 0.3em !important;
  --text-normal: #ebdbb2 !important;
  --titleFont: '??', "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #232627 !important;
  --titlebar-background-focused: #1d2021 !important;
  --titlebar-border-color: #6f6b5b26 !important;
  --titlebar-text-color: #ebdbb2 !important;
  --titlebar-text-color-focused: #ebdbb2 !important;
  --vault-name-color: #ebdbb2 !important;
  --vault-name-font-size: 13px !important;
  --vault-name-font-weight: 500 !important;
  --vault-profile-color: #ebdbb2 !important;
  --vault-profile-color-hover: #ebdbb2 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
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
