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
  --bases-table-cell-background-selected: hsla(258, 88%, 66%, 0.05) !important;
  --bases-table-header-background: #232627 !important;
  --bases-table-row-background-hover: #1d2021 !important;
  --bases-table-summary-background: #232627 !important;
  --blockquote-background-color: #1d2021 !important;
  --blockquote-border-color: #91f697 !important;
  --blockquote-border-thickness: 4px !important;
  --bodyFont: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
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
  --file-header-font: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 750px !important;
  --file-margins: 32px !important;
  --flair-color: #ebdbb2 !important;
  --font-caskaydia-cove-mono: "CaskaydiaCove Nerd Font Mono" !important;
  --font-euclid-circular-a: "Euclid Circular A" !important;
  --font-interface: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Euclid Circular A" !important;
  --font-mermaid: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "CaskaydiaCove Nerd Font Mono" !important;
  --font-print: "Euclid Circular A", Arial' !important;
  --font-text: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #ebdbb2 !important;
  --metadata-label-font: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --table-selection: hsla(258, 88%, 66%, 0.05) !important;
  --table-selection-border-color: #91f697 !important;
  --table-selection-border-radius: 10px !important;
  --table-selection-border-width: 4px !important;
  --tag-background: hsla(124, 85%, 77%, 0.1) !important;
  --tag-background-hover: hsla(124, 85%, 77%, 0.2) !important;
  --tag-border-color: hsla(124, 85%, 77%, 0.15) !important;
  --tag-border-color-hover: hsla(124, 85%, 77%, 0.15) !important;
  --tag-color: #91f697 !important;
  --tag-padding-y: 0.3em !important;
  --text-normal: #ebdbb2 !important;
  --titleFont: "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(35, 38, 39);
  color: rgb(235, 219, 178);
}

html body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(35, 38, 39);
}

html body .bases-table thead th {
  border-color: rgba(111, 107, 91, 0.15);
  color: rgb(249, 38, 114);
}

html body .canvas-node {
  border-color: rgb(235, 219, 178);
}

html body .canvas-node-content {
  color: rgb(235, 219, 178);
}

html body .canvas-node-file {
  color: rgb(235, 219, 178);
}

html body .canvas-node-group {
  border-color: rgb(235, 219, 178);
}

html body .canvas-sidebar {
  background-color: rgb(29, 32, 33);
  border-color: rgb(235, 219, 178);
}

html body .note-properties-tags {
  background-color: rgba(146, 246, 153, 0.1);
  color: rgb(145, 246, 151);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(111, 107, 91, 0.15);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(29, 32, 33);
  border-left-color: rgba(111, 107, 91, 0.15);
  color: rgb(235, 219, 178);
}

html body div#quartz-root {
  background-color: rgb(35, 38, 39);
  color: rgb(235, 219, 178);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .page article p > em, html em {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .page article p > i, html i {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .page article p > strong, html strong {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .text-highlight {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body del {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body h1.article-title {
  color: rgb(235, 219, 178);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(111, 107, 91);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(145, 246, 151);
  border-color: rgb(145, 246, 151);
}

html body p {
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgb(145, 246, 151);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(145, 246, 151) none 0px;
  text-decoration-color: rgb(145, 246, 151);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(145, 246, 151);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(145, 246, 151) none 0px;
  text-decoration-color: rgb(145, 246, 151);
}

html body a.internal.broken {
  color: rgb(145, 246, 151);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(145, 246, 151) none 0px;
  text-decoration: rgba(138, 92, 245, 0.3);
}`,
    lists: `html body dd {
  color: rgb(235, 219, 178);
}

html body dt {
  color: rgb(235, 219, 178);
}

html body ol > li {
  color: rgb(235, 219, 178);
}

html body ol.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ul > li {
  color: rgb(235, 219, 178);
}

html body ul.overflow {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `html body blockquote {
  background-color: rgb(29, 32, 33);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body table {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 252px;
}

html body tbody tr:nth-child(even) {
  background-color: rgb(29, 32, 33);
}

html body tbody tr:nth-child(odd) {
  background-color: rgb(35, 38, 39);
}

html body td {
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

html body th {
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

html body tr {
  background-color: rgb(29, 32, 33);
}`,
    code: `html body code {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "??", "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(29, 32, 33);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

html body pre > code > [data-line] {
  border-left-color: rgb(183, 243, 219);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(183, 243, 219);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(183, 243, 219);
  border-left-color: rgb(183, 243, 219);
  border-right-color: rgb(183, 243, 219);
  border-top-color: rgb(183, 243, 219);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(29, 32, 33);
}

html body pre:has(> code) {
  background-color: rgb(29, 32, 33);
}`,
    images: `html body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body figcaption {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body img {
  border-bottom-color: rgb(249, 38, 114);
  border-left-color: rgb(249, 38, 114);
  border-right-color: rgb(249, 38, 114);
  border-top-color: rgb(249, 38, 114);
}

html body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `html body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(111, 107, 91);
  border-left-color: rgb(111, 107, 91);
  border-right-color: rgb(111, 107, 91);
  border-top-color: rgb(111, 107, 91);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}`,
    callouts: `html body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html body .search > .search-button {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(35, 38, 39);
}

html body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(235, 219, 178);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(29, 32, 33);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(235, 219, 178);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(146, 246, 153, 0.1);
  border-bottom-color: rgba(146, 246, 153, 0.15);
  border-left-color: rgba(146, 246, 153, 0.15);
  border-right-color: rgba(146, 246, 153, 0.15);
  border-top-color: rgba(146, 246, 153, 0.15);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(145, 246, 151);
}

html body h1 {
  color: rgb(249, 38, 114);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(0, 148, 137);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(249, 38, 114);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgba(111, 107, 91, 0.15);
  border-left-color: rgba(111, 107, 91, 0.15);
  border-right-color: rgba(111, 107, 91, 0.15);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}

html body ::-webkit-scrollbar-track {
  background: rgb(35, 38, 39) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(35, 38, 39);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .folder-outer > ul {
  border-left-color: rgba(111, 107, 91, 0.15);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(235, 219, 178);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(111, 107, 91);
  border-left-color: rgb(111, 107, 91);
  border-right-color: rgb(111, 107, 91);
  border-top-color: rgb(111, 107, 91);
  color: rgb(111, 107, 91);
}`,
    footer: `html body footer {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgba(111, 107, 91, 0.15);
  border-left-color: rgba(111, 107, 91, 0.15);
  border-right-color: rgba(111, 107, 91, 0.15);
  border-top-color: rgba(111, 107, 91, 0.15);
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body footer ul li a {
  color: rgb(111, 107, 91);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(111, 107, 91);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body li.section-li > .section .meta {
  color: rgb(111, 107, 91);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(111, 107, 91);
}

html body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(111, 107, 91);
  border-left-color: rgb(111, 107, 91);
  border-right-color: rgb(111, 107, 91);
  border-top-color: rgb(111, 107, 91);
  color: rgb(111, 107, 91);
}

html body .darkmode svg {
  color: rgb(111, 107, 91);
  stroke: rgb(111, 107, 91);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

html body .metadata {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", "Euclid Circular A", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(29, 32, 33);
}

html body .page-header h2.page-title {
  color: rgb(235, 219, 178);
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(235, 219, 178);
}

html body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body input[type=text] {
  font-family: "??", "Euclid Circular A", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: "??", "CaskaydiaCove Nerd Font Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

html body sub {
  color: rgb(235, 219, 178);
}

html body summary {
  color: rgb(235, 219, 178);
}

html body sup {
  color: rgb(235, 219, 178);
}

html body ul.tags > li {
  background-color: rgba(146, 246, 153, 0.1);
  border-bottom-color: rgba(146, 246, 153, 0.15);
  border-left-color: rgba(146, 246, 153, 0.15);
  border-right-color: rgba(146, 246, 153, 0.15);
  border-top-color: rgba(146, 246, 153, 0.15);
  color: rgb(145, 246, 151);
}`,
  },
  light: {},
};
