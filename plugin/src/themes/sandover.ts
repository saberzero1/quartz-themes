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
  --accent-h: 9 !important;
  --accent-s: 89% !important;
  --background-modifier-active-hover: #ff8671 !important;
  --background-modifier-border-focus: hsl(9, 89%, 66%) !important;
  --background-primary: #282828 !important;
  --background-secondary: #282828 !important;
  --bases-cards-background: #282828 !important;
  --bases-cards-radius: 0px !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: rgba(#fffcf4, 0.8) !important;
  --bases-table-cell-background-active: #282828 !important;
  --bases-table-cell-background-selected: hsla(9, 89%, 66%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-header-background: #282828 !important;
  --bases-table-header-color: rgba(#fffcf4, 0.8) !important;
  --bases-table-summary-background: #282828 !important;
  --blockquote-border-color: none !important;
  --blockquote-color: #53dfdd !important;
  --bodyFont: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --border-width-alt: 1px !important;
  --button-radius: 0px !important;
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
  --canvas-background: #282828 !important;
  --canvas-card-label-color: rgba(#fffcf4, 0.5) !important;
  --canvas-color-1: 197, 133, 204 !important;
  --canvas-color-3: 2, 122, 255 !important;
  --canvas-color-4: 251, 70, 76 !important;
  --canvas-color-5: 224, 222, 113 !important;
  --canvas-color-6: 68, 207, 110 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #ffa99a !important;
  --caret-color: #fffcf4 !important;
  --checkbox-border-color: rgba(#fffcf4, 0.5) !important;
  --checkbox-border-color-hover: rgba(#fffcf4, 0.8) !important;
  --checkbox-color: hsl(9, 89%, 66%) !important;
  --checkbox-color-hover: hsl(6, 90.78%, 75.9%) !important;
  --checkbox-marker-color: #282828 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: rgba(#fffcf4, 0.8) !important;
  --clickable-icon-radius: 0px !important;
  --code-comment: #c585cc !important;
  --code-function: #53dfdd !important;
  --code-keyword: #44cf6e !important;
  --code-normal: #fffcf4 !important;
  --code-operator: #fffcf4 !important;
  --code-property: #fffcf4 !important;
  --code-punctuation: #fffcf4 !important;
  --code-radius: 0px !important;
  --code-string: #53dfdd !important;
  --code-value: #027aff !important;
  --codeFont: "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: rgba(#fffcf4, 0.5) !important;
  --collapse-icon-color-collapsed: #ff8671 !important;
  --color-accent: hsl(9, 89%, 66%) !important;
  --color-accent-1: hsl(6, 90.78%, 75.9%) !important;
  --color-accent-2: hsl(4, 93.45%, 85.14%) !important;
  --color-accent-hsl: 9, 89%, 66% !important;
  --color-dark1: #282828 !important;
  --color-dark1-rgb: #282828 !important;
  --color-darker-purple: 153, 119, 181 !important;
  --color-gray-rgb: 240, 240, 240 !important;
  --color-light1: #fffcf4 !important;
  --color-light1-rgb: #fffcf4 !important;
  --color-salmon: #ff8671 !important;
  --color-salmon-lighter: #ffa99a !important;
  --color-salmon-lighter-rgb: 255, 169, 154 !important;
  --color-salmon-rgb: 255, 134, 113 !important;
  --color-yellow-light: #ffe5a7 !important;
  --color-yellow-light-rgb: 255, 229, 167 !important;
  --dark: #fffcf4 !important;
  --darkgray: #fffcf4 !important;
  --divider-color-hover: hsl(9, 89%, 66%) !important;
  --embed-border-start: 2px solid hsl(9, 89%, 66%) !important;
  --file-header-background: #282828 !important;
  --file-header-background-focused: #282828 !important;
  --file-header-font: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #fffcf4 !important;
  --font-general: "TT2020 Base" !important;
  --font-interface: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "TT2020 Base" !important;
  --font-mermaid: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "TT2020 Base" !important;
  --font-print: "TT2020 Base", Arial' !important;
  --font-text: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "TT2020 Base" !important;
  --footnote-id-color: rgba(#fffcf4, 0.8) !important;
  --footnote-id-color-no-occurrences: rgba(#fffcf4, 0.5) !important;
  --footnote-radius: 0px !important;
  --graph-node: rgba(#fffcf4, 0.8) !important;
  --graph-node-focused: #ff8671 !important;
  --graph-node-unresolved: rgba(#fffcf4, 0.5) !important;
  --graph-text: #fffcf4 !important;
  --gray: rgba(#fffcf4, 0.8) !important;
  --h1-color: #c585cc !important;
  --h1-size: 1.5em !important;
  --h1-style: bold !important;
  --h1-weight: 600 !important;
  --h2-size: 1.4em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.3em !important;
  --h3-weight: 500 !important;
  --h4-size: 1.1em !important;
  --h4-weight: 500 !important;
  --h5-size: 1em !important;
  --h5-weight: 500 !important;
  --h6-size: 0.85em !important;
  --h6-weight: 400 !important;
  --headerFont: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: rgba(#fffcf4, 0.5) !important;
  --highlight: rgba(255, 229, 167, 0.3) !important;
  --icon-color: #fffcf4 !important;
  --icon-color-active: #c585cc !important;
  --icon-color-focused: #fffcf4 !important;
  --icon-color-focused-active: 197, 133, 204 !important;
  --icon-color-hover: #fffcf4 !important;
  --icon-muted: 0.5 !important;
  --indentation-guide-color: #2a2a2a !important;
  --indentation-guide-color-active: #c585cc !important;
  --inline-title-color: #c585cc !important;
  --inline-title-size: 1.5em !important;
  --inline-title-style: bold !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: rgba(#fffcf4, 0.5) !important;
  --input-placeholder-color: rgba(#fffcf4, 0.5) !important;
  --input-radius: 0px !important;
  --interactive-accent: hsl(9, 89%, 66%) !important;
  --interactive-accent-hover: hsl(6, 90.78%, 75.9%) !important;
  --interactive-accent-hsl: 9, 89%, 66% !important;
  --light: #282828 !important;
  --lightgray: #282828 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color: #ff8671 !important;
  --link-color-hover: hsl(4, 93.45%, 85.14%) !important;
  --link-decoration: none !important;
  --link-external-color: #ff8671 !important;
  --link-external-color-hover: hsl(4, 93.45%, 85.14%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #ff8671 !important;
  --link-unresolved-decoration-color: hsla(9, 89%, 66%, 0.3) !important;
  --list-marker-color: #fffcf4 !important;
  --list-marker-color-collapsed: #ff8671 !important;
  --list-marker-color-hover: rgba(#fffcf4, 0.8) !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: #282828 !important;
  --menu-radius: 0px !important;
  --metadata-input-font: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #fffcf4 !important;
  --metadata-label-font: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgba(#fffcf4, 0.8) !important;
  --metadata-label-text-color-hover: rgba(#fffcf4, 0.8) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --modal-background: #282828 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: rgba(#fffcf4, 0.5) !important;
  --nav-collapse-icon-color-collapsed: rgba(#fffcf4, 0.5) !important;
  --nav-heading-color: #fffcf4 !important;
  --nav-heading-color-collapsed: rgba(#fffcf4, 0.5) !important;
  --nav-heading-color-collapsed-hover: rgba(#fffcf4, 0.8) !important;
  --nav-heading-color-hover: #fffcf4 !important;
  --nav-indentation-guide-color: #2a2a2a !important;
  --nav-item-background-selected: hsla(9, 89%, 66%, 0.15) !important;
  --nav-item-color: rgba(#fffcf4, 0.8) !important;
  --nav-item-color-active: #fffcf4 !important;
  --nav-item-color-highlighted: #ff8671 !important;
  --nav-item-color-hover: #ff8671 !important;
  --nav-item-color-selected: #fffcf4 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: rgba(#fffcf4, 0.5) !important;
  --nav-tag-color-active: rgba(#fffcf4, 0.8) !important;
  --nav-tag-color-hover: rgba(#fffcf4, 0.8) !important;
  --nav-tag-radius: 0px !important;
  --normal-weight: 500 !important;
  --pdf-background: #282828 !important;
  --pdf-page-background: #282828 !important;
  --pdf-sidebar-background: #282828 !important;
  --pill-color: rgba(#fffcf4, 0.8) !important;
  --pill-color-hover: #fffcf4 !important;
  --pill-color-remove: rgba(#fffcf4, 0.5) !important;
  --pill-color-remove-hover: #ff8671 !important;
  --prompt-background: #282828 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --ribbon-background: rgba(#282828, 0.5) !important;
  --ribbon-background-collapsed: rgba(#282828, 0.5) !important;
  --sandover-purple: #c585cc !important;
  --sandover-purple-rgb: 197, 133, 204 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: rgba(#fffcf4, 0.8) !important;
  --search-icon-color: rgba(#fffcf4, 0.8) !important;
  --search-result-background: #282828 !important;
  --secondary: #ff8671 !important;
  --setting-group-heading-color: #fffcf4 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-background: #282828 !important;
  --status-bar-border-color: #141300 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: rgba(#fffcf4, 0.8) !important;
  --suggestion-background: #282828 !important;
  --tab-background-active: #282828 !important;
  --tab-container-background: #282828 !important;
  --tab-font-weight: 500 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #282828 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --tab-text-color: rgba(#fffcf4, 0.5) !important;
  --tab-text-color-active: rgba(#fffcf4, 0.8) !important;
  --tab-text-color-focused: rgba(#fffcf4, 0.8) !important;
  --tab-text-color-focused-active: #fffcf4 !important;
  --tab-text-color-focused-active-current: #fffcf4 !important;
  --tab-text-color-focused-highlighted: #ff8671 !important;
  --table-drag-handle-background-active: hsl(9, 89%, 66%) !important;
  --table-drag-handle-color: rgba(#fffcf4, 0.5) !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(9, 89%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(9, 89%, 66%) !important;
  --tag-background: hsla(9, 89%, 66%, 0.1) !important;
  --tag-background-hover: hsla(9, 89%, 66%, 0.2) !important;
  --tag-border-color: hsla(9, 89%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(9, 89%, 66%, 0.15) !important;
  --tag-color: #ff8671 !important;
  --tag-color-hover: #ff8671 !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .3em !important;
  --tertiary: hsl(4, 93.45%, 85.14%) !important;
  --text-accent: #ff8671 !important;
  --text-accent-hover: hsl(4, 93.45%, 85.14%) !important;
  --text-faint: rgba(#fffcf4, 0.5) !important;
  --text-highlight-bg: rgba(255, 229, 167, 0.3) !important;
  --text-muted: rgba(#fffcf4, 0.8) !important;
  --text-normal: #fffcf4 !important;
  --text-selection: hsla(9, 89%, 66%, 0.33) !important;
  --textHighlight: rgba(255, 229, 167, 0.3) !important;
  --titleFont: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #ff8671 !important;
  --titlebar-background-focused: #ff8671 !important;
  --titlebar-text-color: #000000 !important;
  --titlebar-text-color-focused: #fffcf4 !important;
  --titlebar-text-weight: 300 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --top-left-padding-y: 0px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #fffcf4 !important;
  --vault-profile-color-hover: #fffcf4 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .bases-table thead th {
  color: rgb(255, 252, 244);
  font-weight: 700;
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(40, 40, 40);
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .note-properties-tags {
  background-color: rgba(245, 114, 91, 0.1);
  border-radius: 4.2px;
  color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(40, 40, 40);
  color: rgb(255, 252, 244);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 229, 167, 0.3);
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(255, 255, 255);
  border-radius: 0px;
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 114, 91);
  border-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body p {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgba(245, 114, 91, 0.3);
  text-decoration-color: rgba(245, 114, 91, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body blockquote {
  font-family: "TT2020 Base", "??";
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  width: 201.312px;
}

html[saved-theme="dark"] body td {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body th {
  color: rgb(255, 252, 244);
  font-weight: 700;
}`,
    code: `html[saved-theme="dark"] body code {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body pre > code > [data-line] {
  border-left-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(83, 223, 221);
  border-left-color: rgb(83, 223, 221);
  border-right-color: rgb(83, 223, 221);
  border-top-color: rgb(83, 223, 221);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(197, 133, 204);
  border-left-color: rgb(197, 133, 204);
  border-right-color: rgb(197, 133, 204);
  border-top-color: rgb(197, 133, 204);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(245, 114, 91);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 252, 244);
  text-decoration-color: rgb(255, 252, 244);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 252, 244) none 0px;
  text-decoration-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
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

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 134, 113);
}

html[saved-theme="dark"] body h1 {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(40, 40, 40) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(40, 40, 40);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .folder-outer > ul {
  border-left-color: rgb(42, 42, 42);
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 252, 244);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(20, 19, 0);
  border-left-color: rgb(20, 19, 0);
  border-right-color: rgb(20, 19, 0);
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(255, 252, 244);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
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

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(255, 252, 244);
  stroke: rgb(255, 252, 244);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
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

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body .metadata {
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
  color: rgb(255, 252, 244);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(255, 252, 244);
  border-right-color: rgb(255, 252, 244);
  border-top-color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 252, 244);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgba(245, 114, 91, 0.1);
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 3.675px;
  border-bottom-right-radius: 3.675px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-right-color: rgba(245, 114, 91, 0.15);
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 3.675px;
  border-top-right-radius: 3.675px;
  color: rgb(255, 134, 113);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 9 !important;
  --accent-s: 89% !important;
  --background-modifier-active-hover: #ffa99a !important;
  --background-modifier-border-focus: hsl(9, 89%, 66%) !important;
  --background-modifier-border-hover: #fffcf4 !important;
  --background-primary: #fffcf4 !important;
  --background-primary-alt: #fffcf4 !important;
  --background-secondary: #fffcf4 !important;
  --bases-cards-background: #fffcf4 !important;
  --bases-cards-cover-background: #fffcf4 !important;
  --bases-cards-radius: 0px !important;
  --bases-cards-shadow-hover: 0 0 0 1px #fffcf4 !important;
  --bases-embed-border-radius: 0px !important;
  --bases-group-heading-property-color: #000000 !important;
  --bases-table-cell-background-active: #fffcf4 !important;
  --bases-table-cell-background-disabled: #fffcf4 !important;
  --bases-table-cell-background-selected: hsla(9, 89%, 66%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --bases-table-container-border-radius: 0px !important;
  --bases-table-group-background: #fffcf4 !important;
  --bases-table-header-background: #fffcf4 !important;
  --bases-table-header-color: #000000 !important;
  --bases-table-summary-background: #fffcf4 !important;
  --blockquote-border-color: none !important;
  --blockquote-color: #086ddd !important;
  --blur-background: color-mix(in srgb, #fffcf4 65%, transparent) linear-gradient(#fffcf4, color-mix(in srgb, #fffcf4 65%, transparent)) !important;
  --bodyFont: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 600 !important;
  --border-width-alt: 1px !important;
  --button-radius: 0px !important;
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
  --canvas-background: #fffcf4 !important;
  --canvas-card-label-color: #000000 !important;
  --canvas-color-1: 197, 133, 204 !important;
  --canvas-color-3: 8, 109, 221 !important;
  --canvas-color-4: 233, 49, 71 !important;
  --canvas-color-5: 224, 172, 0 !important;
  --canvas-color-6: 8, 185, 78 !important;
  --canvas-controls-radius: 0px !important;
  --canvas-dot-pattern: #ffa99a !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: #000000 !important;
  --checkbox-border-color-hover: #000000 !important;
  --checkbox-color: hsl(9, 89%, 66%) !important;
  --checkbox-color-hover: #ff8671 !important;
  --checkbox-marker-color: #fffcf4 !important;
  --checkbox-radius: 0 !important;
  --checklist-done-color: #000000 !important;
  --clickable-icon-radius: 0px !important;
  --code-background: #fffcf4 !important;
  --code-comment: #c585cc !important;
  --code-function: #00bfbc !important;
  --code-keyword: #08b94e !important;
  --code-normal: #000000 !important;
  --code-operator: #000000 !important;
  --code-property: #000000 !important;
  --code-punctuation: #000000 !important;
  --code-radius: 0px !important;
  --code-string: #00bfbc !important;
  --code-value: #086ddd !important;
  --codeFont: "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #000000 !important;
  --collapse-icon-color-collapsed: #ff8671 !important;
  --color-accent: hsl(9, 89%, 66%) !important;
  --color-accent-1: hsl(8, 89.89%, 70.95%) !important;
  --color-accent-2: hsl(6, 90.78%, 75.9%) !important;
  --color-accent-hsl: 9, 89%, 66% !important;
  --color-base-35: #fffcf4 !important;
  --color-dark1: #282828 !important;
  --color-dark1-rgb: 40, 40, 40 !important;
  --color-darker-purple: 153, 119, 181 !important;
  --color-gray-rgb: 240, 240, 240 !important;
  --color-light1: #fffcf4 !important;
  --color-light1-rgb: 255, 252, 244 !important;
  --color-salmon: #ff8671 !important;
  --color-salmon-lighter: #ffa99a !important;
  --color-salmon-lighter-rgb: 255, 169, 154 !important;
  --color-salmon-rgb: 255, 134, 113 !important;
  --color-yellow-light: #ffe5a7 !important;
  --color-yellow-light-rgb: 255, 229, 167 !important;
  --dark: #000000 !important;
  --darkgray: #000000 !important;
  --divider-color-hover: hsl(9, 89%, 66%) !important;
  --dropdown-background-hover: rgba(#ff8671, 0.5) !important;
  --embed-border-start: 2px solid hsl(9, 89%, 66%) !important;
  --file-header-background: #fffcf4 !important;
  --file-header-background-focused: #fffcf4 !important;
  --file-header-font: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #000000 !important;
  --font-general: "TT2020 Base" !important;
  --font-interface: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "TT2020 Base" !important;
  --font-mermaid: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "TT2020 Base", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "TT2020 Base" !important;
  --font-print: "TT2020 Base", Arial' !important;
  --font-text: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "TT2020 Base" !important;
  --footnote-id-color: #000000 !important;
  --footnote-id-color-no-occurrences: #000000 !important;
  --footnote-radius: 0px !important;
  --graph-line: #fffcf4 !important;
  --graph-node: #000000 !important;
  --graph-node-focused: #ff8671 !important;
  --graph-node-unresolved: #000000 !important;
  --graph-text: #000000 !important;
  --gray: #000000 !important;
  --h1-color: #c585cc !important;
  --h1-size: 1.5em !important;
  --h1-style: bold !important;
  --h1-weight: 600 !important;
  --h2-size: 1.4em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.3em !important;
  --h3-weight: 500 !important;
  --h4-size: 1.1em !important;
  --h4-weight: 500 !important;
  --h5-size: 1em !important;
  --h5-weight: 500 !important;
  --h6-size: 0.85em !important;
  --h6-weight: 400 !important;
  --headerFont: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #000000 !important;
  --highlight: #ffe5a7 !important;
  --icon-color: #141300 !important;
  --icon-color-active: #fffcf4 !important;
  --icon-color-focused: #fffcf4 !important;
  --icon-color-focused-active: #fffcf4 !important;
  --icon-color-hover: #fffcf4 !important;
  --icon-muted: 0.5 !important;
  --indentation-guide-color: #e3e3e3 !important;
  --indentation-guide-color-active: #c585cc !important;
  --inline-title-color: #c585cc !important;
  --inline-title-size: 1.5em !important;
  --inline-title-style: bold !important;
  --inline-title-weight: 600 !important;
  --input-date-separator: #000000 !important;
  --input-placeholder-color: #000000 !important;
  --input-radius: 0px !important;
  --interactive-accent: hsl(9, 89%, 66%) !important;
  --interactive-accent-hover: #ff8671 !important;
  --interactive-accent-hsl: 9, 89%, 66% !important;
  --interactive-hover: rgba(#ff8671, 0.5) !important;
  --light: #fffcf4 !important;
  --lightgray: #fffcf4 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --link-color: #ff8671 !important;
  --link-color-hover: hsl(6, 90.78%, 75.9%) !important;
  --link-decoration: none !important;
  --link-external-color: #ff8671 !important;
  --link-external-color-hover: hsl(6, 90.78%, 75.9%) !important;
  --link-external-decoration: none !important;
  --link-unresolved-color: #ff8671 !important;
  --link-unresolved-decoration-color: hsla(9, 89%, 66%, 0.3) !important;
  --list-marker-color: #000000 !important;
  --list-marker-color-collapsed: #ff8671 !important;
  --list-marker-color-hover: #000000 !important;
  --max-col-width: 18em !important;
  --max-width: 88% !important;
  --menu-background: #fffcf4 !important;
  --menu-border-color: #fffcf4 !important;
  --menu-radius: 0px !important;
  --metadata-input-font: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-font: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #000000 !important;
  --metadata-label-text-color-hover: #000000 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #fffcf4 !important;
  --mobile-left-sidebar-width: 280pt !important;
  --mobile-right-sidebar-width: 240pt !important;
  --modal-background: #fffcf4 !important;
  --modal-radius: 0px !important;
  --nav-collapse-icon-color: #000000 !important;
  --nav-collapse-icon-color-collapsed: #000000 !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: #000000 !important;
  --nav-heading-color-collapsed-hover: #000000 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-indentation-guide-color: #e3e3e3 !important;
  --nav-item-background-selected: hsla(9, 89%, 66%, 0.15) !important;
  --nav-item-color: #000000 !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-highlighted: #ff8671 !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #000000 !important;
  --nav-item-radius: 0px !important;
  --nav-tag-color: #000000 !important;
  --nav-tag-color-active: #000000 !important;
  --nav-tag-color-hover: #000000 !important;
  --nav-tag-radius: 0px !important;
  --normal-weight: 500 !important;
  --pdf-background: #fffcf4 !important;
  --pdf-page-background: #fffcf4 !important;
  --pdf-sidebar-background: #fffcf4 !important;
  --pill-border-color-hover: #fffcf4 !important;
  --pill-color: #000000 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: #000000 !important;
  --pill-color-remove-hover: #ff8671 !important;
  --prompt-background: #fffcf4 !important;
  --radius-l: 0px !important;
  --radius-m: 0px !important;
  --radius-s: 0px !important;
  --raised-background: color-mix(in srgb, #fffcf4 65%, transparent) linear-gradient(#fffcf4, color-mix(in srgb, #fffcf4 65%, transparent)) !important;
  --ribbon-background: #fffcf4 !important;
  --ribbon-background-collapsed: #fffcf4 !important;
  --sandover-purple: #c585cc !important;
  --sandover-purple-rgb: 197, 133, 204 !important;
  --scrollbar-radius: 0px !important;
  --search-clear-button-color: #000000 !important;
  --search-icon-color: #000000 !important;
  --search-result-background: #fffcf4 !important;
  --secondary: #ff8671 !important;
  --setting-group-heading-color: #000000 !important;
  --setting-items-background: #fffcf4 !important;
  --setting-items-radius: 0px !important;
  --slider-thumb-border-color: #fffcf4 !important;
  --slider-thumb-radius: 0px !important;
  --status-bar-background: #fffcf4 !important;
  --status-bar-border-color: #141300 !important;
  --status-bar-radius: 0px 0 0 0 !important;
  --status-bar-text-color: #000000 !important;
  --suggestion-background: #fffcf4 !important;
  --tab-background-active: #fffcf4 !important;
  --tab-container-background: #fffcf4 !important;
  --tab-divider-color: #fffcf4 !important;
  --tab-font-weight: 500 !important;
  --tab-radius: 0px !important;
  --tab-radius-active: 0px !important;
  --tab-switcher-background: #fffcf4 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #fffcf4, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(9, 89%, 66%) !important;
  --tab-text-color: #000000 !important;
  --tab-text-color-active: #000000 !important;
  --tab-text-color-focused: #000000 !important;
  --tab-text-color-focused-active: #000000 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --tab-text-color-focused-highlighted: #ff8671 !important;
  --table-drag-handle-background-active: hsl(9, 89%, 66%) !important;
  --table-drag-handle-color: #000000 !important;
  --table-header-weight: 700 !important;
  --table-selection: hsla(9, 89%, 66%, 0.1) !important;
  --table-selection-border-color: hsl(9, 89%, 66%) !important;
  --tag-background: hsla(9, 89%, 66%, 0.1) !important;
  --tag-background-hover: hsla(9, 89%, 66%, 0.2) !important;
  --tag-border-color: hsla(9, 89%, 66%, 0.15) !important;
  --tag-border-color-hover: hsla(9, 89%, 66%, 0.15) !important;
  --tag-color: #ff8671 !important;
  --tag-color-hover: #ff8671 !important;
  --tag-decoration-hover: underline !important;
  --tag-padding-x: .5em !important;
  --tag-padding-y: .2em !important;
  --tag-radius: .3em !important;
  --tertiary: hsl(6, 90.78%, 75.9%) !important;
  --text-accent: #ff8671 !important;
  --text-accent-hover: hsl(6, 90.78%, 75.9%) !important;
  --text-faint: #000000 !important;
  --text-highlight-bg: #ffe5a7 !important;
  --text-muted: #000000 !important;
  --text-normal: #000000 !important;
  --text-selection: hsla(9, 89%, 66%, 0.2) !important;
  --textHighlight: #ffe5a7 !important;
  --titleFont: "TT2020 Base", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #ffa99a !important;
  --titlebar-background-focused: #ffa99a !important;
  --titlebar-text-color: #fffcf4 !important;
  --titlebar-text-color-focused: #000000 !important;
  --titlebar-text-weight: 300 !important;
  --toggle-radius: 0px !important;
  --toggle-thumb-radius: 0px !important;
  --top-left-padding-y: 0px !important;
  --vault-name-font-weight: 700 !important;
  --vault-profile-color: #000000 !important;
  --vault-profile-color-hover: #000000 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(0, 0, 0);
  font-weight: 700;
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(255, 252, 244);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgba(245, 114, 91, 0.1);
  border-radius: 4.2px;
  color: rgb(255, 134, 113);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(255, 252, 244);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgb(255, 229, 167);
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(0, 0, 0);
  border-radius: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(245, 114, 91);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration-color: rgb(255, 134, 113);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(255, 134, 113);
  font-family: "TT2020 Base", "??";
  outline: rgb(255, 134, 113) none 0px;
  text-decoration: rgba(245, 114, 91, 0.3);
  text-decoration-color: rgba(245, 114, 91, 0.3);
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body blockquote {
  font-family: "TT2020 Base", "??";
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  width: 201.312px;
}

html[saved-theme="light"] body td {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  color: rgb(0, 0, 0);
  font-weight: 700;
}`,
    code: `html[saved-theme="light"] body code {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(0, 191, 188);
  border-left-color: rgb(0, 191, 188);
  border-right-color: rgb(0, 191, 188);
  border-top-color: rgb(0, 191, 188);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(197, 133, 204);
  border-left-color: rgb(197, 133, 204);
  border-right-color: rgb(197, 133, 204);
  border-top-color: rgb(197, 133, 204);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
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

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(245, 114, 91);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="example"] {
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="info"] {
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="question"] {
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
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

html[saved-theme="light"] body .callout[data-callout="success"] {
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Crect width='8' height='4' x='8' y='2' rx='1' ry='1'/%3E%3Cpath d='M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2'/%3E%3Cpath d='M12 11h4'/%3E%3Cpath d='M12 16h4'/%3E%3Cpath d='M8 11h.01'/%3E%3Cpath d='M8 16h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 20v-9'/%3E%3Cpath d='M14 7a4 4 0 0 1 4 4v3a6 6 0 0 1-12 0v-3a4 4 0 0 1 4-4z'/%3E%3Cpath d='M14.12 3.88 16 2'/%3E%3Cpath d='M21 21a4 4 0 0 0-3.81-4'/%3E%3Cpath d='M21 5a4 4 0 0 1-3.55 3.97'/%3E%3Cpath d='M22 13h-4'/%3E%3Cpath d='M3 21a4 4 0 0 1 3.81-4'/%3E%3Cpath d='M3 5a4 4 0 0 0 3.55 3.97'/%3E%3Cpath d='M6 13H2'/%3E%3Cpath d='m8 2 1.88 1.88'/%3E%3Cpath d='M9 7.13V6a3 3 0 1 1 6 0v1.13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M3 5h.01'/%3E%3Cpath d='M3 12h.01'/%3E%3Cpath d='M3 19h.01'/%3E%3Cpath d='M8 5h13'/%3E%3Cpath d='M8 12h13'/%3E%3Cpath d='M8 19h13'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M18 6 6 18'/%3E%3Cpath d='m6 6 12 12'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M12 16v-4'/%3E%3Cpath d='M12 8h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z'/%3E%3Cpath d='m15 5 4 4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3Cpath d='M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M20 6 9 17l-5-5'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='m9 12 2 2 4-4'/%3E%3C/svg%3E");
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-icon: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3'/%3E%3Cpath d='M12 9v4'/%3E%3Cpath d='M12 17h.01'/%3E%3C/svg%3E");
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(255, 252, 244);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 252, 244);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
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

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
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

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(255, 134, 113);
}

html[saved-theme="light"] body h1 {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(197, 133, 204);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(255, 252, 244) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 252, 244);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(227, 227, 227);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
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
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 252, 244);
  border-bottom-color: rgb(20, 19, 0);
  border-left-color: rgb(20, 19, 0);
  border-right-color: rgb(20, 19, 0);
  border-top-color: rgb(20, 19, 0);
  border-top-left-radius: 0px;
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(0, 0, 0);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
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

html[saved-theme="light"] body .darkmode svg {
  color: rgb(20, 19, 0);
  stroke: rgb(20, 19, 0);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
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

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "TT2020 Base", "??";
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 252, 244);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "TT2020 Base", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgba(245, 114, 91, 0.1);
  border-bottom-color: rgba(245, 114, 91, 0.15);
  border-bottom-left-radius: 3.675px;
  border-bottom-right-radius: 3.675px;
  border-left-color: rgba(245, 114, 91, 0.15);
  border-right-color: rgba(245, 114, 91, 0.15);
  border-top-color: rgba(245, 114, 91, 0.15);
  border-top-left-radius: 3.675px;
  border-top-right-radius: 3.675px;
  color: rgb(255, 134, 113);
}`,
  },
};
