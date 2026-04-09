import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "duality",
    modes: ["dark", "light"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-active-hover: rgba(255, 255, 255, 0.1) !important;
  --background-modifier-border: #4a2c2a !important;
  --background-modifier-border-focus: #663b38 !important;
  --background-modifier-border-hover: #663b38 !important;
  --background-modifier-hover: rgba(255, 255, 255, 0.05) !important;
  --background-primary: #1c1c1c !important;
  --background-primary-alt: #2a2a2a !important;
  --background-secondary: #151515 !important;
  --background-secondary-alt: #151515 !important;
  --bases-cards-background: #1c1c1c !important;
  --bases-cards-cover-background: #2a2a2a !important;
  --bases-cards-shadow: 0 0 0 1px #4a2c2a !important;
  --bases-cards-shadow-hover: 0 0 0 1px #663b38 !important;
  --bases-embed-border-color: #4a2c2a !important;
  --bases-group-heading-property-color: #b0a38c !important;
  --bases-table-border-color: #4a2c2a !important;
  --bases-table-cell-background-active: #1c1c1c !important;
  --bases-table-cell-background-disabled: #2a2a2a !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #663b38 !important;
  --bases-table-group-background: #2a2a2a !important;
  --bases-table-header-background: #1c1c1c !important;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.05) !important;
  --bases-table-header-color: #b0a38c !important;
  --bases-table-summary-background: #1c1c1c !important;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.05) !important;
  --bodyFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --button-radius: 6px !important;
  --callout-background: #2a2a2a;
  --callout-border-color: #4a2c2a;
  --callout-content-background: #2a2a2a;
  --callout-title-color: #ff4500;
  --canvas-background: #1c1c1c !important;
  --canvas-card-label-color: #8c816d !important;
  --caret-color: #d4c9b5 !important;
  --checkbox-border-color: #8c816d !important;
  --checkbox-border-color-hover: #b0a38c !important;
  --checkbox-marker-color: #1c1c1c !important;
  --checklist-done-color: #b0a38c !important;
  --code-background: #2a2a2a !important;
  --code-border-color: #4a2c2a !important;
  --code-bracket-background: rgba(255, 255, 255, 0.05) !important;
  --code-comment: #8c816d !important;
  --code-keyword: #ff4500 !important;
  --code-normal: #d4c9b5 !important;
  --code-punctuation: #b0a38c !important;
  --code-string: #b0a38c !important;
  --codeFont: "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #8c816d !important;
  --collapse-icon-color-collapsed: #ff4500 !important;
  --dark: #d4c9b5 !important;
  --darkgray: #d4c9b5 !important;
  --dialog-max-height: 75vh !important;
  --dialog-max-width: 90vw !important;
  --dialog-width: 500px !important;
  --divider-color: #4a2c2a !important;
  --divider-color-hover: #663b38 !important;
  --embed-block-shadow-hover: 0 0 0 1px #4a2c2a, inset 0 0 0 1px #4a2c2a !important;
  --file-header-background: #1c1c1c !important;
  --file-header-background-focused: #1c1c1c !important;
  --file-header-font: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #d4c9b5 !important;
  --font-interface: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Times New Roman", Times, serif !important;
  --font-mermaid: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Courier New", Courier, monospace !important;
  --font-print: "Times New Roman", Times, serif, Arial' !important;
  --font-text: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Times New Roman", Times, serif !important;
  --footnote-divider-color: #4a2c2a !important;
  --footnote-id-color: #b0a38c !important;
  --footnote-id-color-no-occurrences: #8c816d !important;
  --footnote-input-background-active: rgba(255, 255, 255, 0.05) !important;
  --graph-node: #b0a38c !important;
  --graph-node-focused: #ff4500 !important;
  --graph-node-unresolved: #8c816d !important;
  --graph-text: #d4c9b5 !important;
  --gray: #b0a38c !important;
  --h1-color: #ff4500 !important;
  --h1-size: 2em !important;
  --h2-color: #ff4500 !important;
  --h2-size: 1.6em !important;
  --h3-color: #d4c9b5 !important;
  --h3-size: 1.4em !important;
  --h4-color: #d4c9b5 !important;
  --h4-size: 1.2em !important;
  --h5-color: #b0a38c !important;
  --h5-size: 1em !important;
  --h6-color: #b0a38c !important;
  --h6-size: 0.9em !important;
  --headerFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #8c816d !important;
  --highlight: rgba(255, 69, 0, 0.9) !important;
  --hr-color: #4a2c2a !important;
  --icon-color: #b0a38c !important;
  --icon-color-active: #ff4500 !important;
  --icon-color-focused: #d4c9b5 !important;
  --icon-color-hover: #b0a38c !important;
  --inline-title-color: #ff4500 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #8c816d !important;
  --input-placeholder-color: #8c816d !important;
  --light: #1c1c1c !important;
  --lightgray: #151515 !important;
  --link-color: #ff4500 !important;
  --link-color-hover: #ff6347 !important;
  --link-decoration: none !important;
  --link-external-color: #ff4500 !important;
  --link-external-color-hover: #ff6347 !important;
  --link-unresolved-color: #ff6666 !important;
  --link-unresolved-decoration-color: #ff6666 !important;
  --link-unresolved-decoration-style: dashed !important;
  --list-marker-color: #8c816d !important;
  --list-marker-color-collapsed: #ff4500 !important;
  --list-marker-color-hover: #b0a38c !important;
  --menu-background: #151515 !important;
  --menu-border-color: #663b38 !important;
  --metadata-border-color: #4a2c2a !important;
  --metadata-divider-color: #4a2c2a !important;
  --metadata-input-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-input-font: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #d4c9b5 !important;
  --metadata-label-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-label-font: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #b0a38c !important;
  --metadata-label-text-color-hover: #b0a38c !important;
  --metadata-property-background-active: rgba(255, 255, 255, 0.05) !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #663b38 !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #663b38 !important;
  --modal-background: #2a2a2a !important;
  --modal-border-color: #4a2c2a !important;
  --modal-height: 80vh !important;
  --modal-radius: 6px !important;
  --nav-collapse-icon-color: #b0a38c !important;
  --nav-collapse-icon-color-collapsed: #8c816d !important;
  --nav-heading-color: #d4c9b5 !important;
  --nav-heading-color-collapsed: #8c816d !important;
  --nav-heading-color-collapsed-hover: #b0a38c !important;
  --nav-heading-color-hover: #d4c9b5 !important;
  --nav-item-background-active: rgba(255, 255, 255, 0.1) !important;
  --nav-item-background-hover: rgba(255, 255, 255, 0.05) !important;
  --nav-item-color: #d4c9b5 !important;
  --nav-item-color-active: #ff4500 !important;
  --nav-item-color-highlighted: #ff4500 !important;
  --nav-item-color-hover: #ff4500 !important;
  --nav-item-color-selected: #d4c9b5 !important;
  --nav-tag-color: #8c816d !important;
  --nav-tag-color-active: #b0a38c !important;
  --nav-tag-color-hover: #b0a38c !important;
  --pdf-background: #1c1c1c !important;
  --pdf-page-background: #1c1c1c !important;
  --pdf-shadow: 0 0 0 1px #4a2c2a !important;
  --pdf-sidebar-background: #1c1c1c !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #4a2c2a !important;
  --pill-border-color: #4a2c2a !important;
  --pill-border-color-hover: #663b38 !important;
  --pill-color: #b0a38c !important;
  --pill-color-hover: #d4c9b5 !important;
  --pill-color-remove: #8c816d !important;
  --pill-color-remove-hover: #ff4500 !important;
  --prompt-background: #1c1c1c !important;
  --ribbon-background: #151515 !important;
  --ribbon-background-collapsed: #151515 !important;
  --scrollbar-active-thumb-bg: #663b38 !important;
  --scrollbar-bg: #151515 !important;
  --scrollbar-thumb-bg: #4a2c2a !important;
  --search-clear-button-color: #b0a38c !important;
  --search-icon-color: #b0a38c !important;
  --search-result-background: #1c1c1c !important;
  --secondary: #ff4500 !important;
  --setting-group-heading-color: #d4c9b5 !important;
  --setting-items-background: #2a2a2a !important;
  --setting-items-border-color: #4a2c2a !important;
  --slider-thumb-border-color: #663b38 !important;
  --slider-track-background: #4a2c2a !important;
  --status-bar-background: #151515 !important;
  --status-bar-border-color: #4a2c2a !important;
  --status-bar-text-color: #d4c9b5 !important;
  --suggestion-background: #1c1c1c !important;
  --tab-background-active: #1c1c1c !important;
  --tab-container-background: #151515 !important;
  --tab-divider-color: #4a2c2a !important;
  --tab-outline-color: #4a2c2a !important;
  --tab-radius: 6px !important;
  --tab-radius-active: 6px !important;
  --tab-switcher-background: #151515 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #151515, transparent) !important;
  --tab-text-color: #d4c9b5 !important;
  --tab-text-color-active: #ff4500 !important;
  --tab-text-color-focused: #d4c9b5 !important;
  --tab-text-color-focused-active: #ff4500 !important;
  --tab-text-color-focused-active-current: #d4c9b5 !important;
  --tab-text-color-focused-highlighted: #ff4500 !important;
  --table-add-button-border-color: #4a2c2a !important;
  --table-border-color: #4a2c2a !important;
  --table-drag-handle-color: #8c816d !important;
  --table-drag-handle-color-active: #000000 !important;
  --table-header-border-color: #4a2c2a !important;
  --table-header-color: #d4c9b5 !important;
  --tag-color: #ff4500 !important;
  --tag-color-hover: #ff4500 !important;
  --tertiary: #ff6347 !important;
  --text-accent: #ff4500 !important;
  --text-accent-hover: #ff6347 !important;
  --text-faint: #8c816d !important;
  --text-highlight-bg: rgba(255, 69, 0, 0.9) !important;
  --text-muted: #b0a38c !important;
  --text-normal: #d4c9b5 !important;
  --text-on-accent: #000000 !important;
  --text-selection: rgba(255, 69, 0, 0.3) !important;
  --textHighlight: rgba(255, 69, 0, 0.9) !important;
  --titleFont: "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #151515 !important;
  --titlebar-background-focused: #151515 !important;
  --titlebar-border-color: #4a2c2a !important;
  --titlebar-text-color: #b0a38c !important;
  --titlebar-text-color-focused: #d4c9b5 !important;
  --vault-profile-color: #d4c9b5 !important;
  --vault-profile-color-hover: #d4c9b5 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(21, 21, 21);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(28, 28, 28);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(21, 21, 21);
  border-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(74, 44, 42);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(176, 163, 140);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(176, 163, 140);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(255, 69, 0);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(176, 163, 140);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(21, 21, 21);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(74, 44, 42);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(21, 21, 21);
  border-left-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(28, 28, 28);
  color: rgb(212, 201, 181);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .text-highlight {
  background-color: rgba(255, 69, 0, 0.9);
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body del {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(140, 129, 109);
}

html[saved-theme="dark"] body p {
  color: rgb(176, 163, 140);
  font-family: "Times New Roman", Times, serif;
  outline: rgb(176, 163, 140) none 0px;
  text-decoration-color: rgb(176, 163, 140);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 69, 0) none 0px;
  text-decoration-color: rgb(255, 69, 0);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 69, 0) none 0px;
  text-decoration-color: rgb(255, 69, 0);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 102, 102);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 102) none 0px;
  text-decoration: dashed rgb(255, 102, 102);
  text-decoration-color: rgb(255, 102, 102);
  text-decoration-style: dashed;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body dt {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(140, 129, 109);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body table {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 180.766px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
  font-family: "??", "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 69, 0);
  border-left-color: rgb(255, 69, 0);
  border-right-color: rgb(255, 69, 0);
  border-top-color: rgb(255, 69, 0);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(140, 129, 109);
  border-left-color: rgb(140, 129, 109);
  border-right-color: rgb(140, 129, 109);
  border-top-color: rgb(140, 129, 109);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 201, 181);
  text-decoration-color: rgb(212, 201, 181);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(255, 69, 0);
}

html[saved-theme="dark"] body .callout > .callout-content {
  background-color: rgb(42, 42, 42);
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
}

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
}

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
}

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
}

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
}

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 201, 181) none 0px;
  text-decoration-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(21, 21, 21);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.05);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.05);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 69, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 69, 0);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(28, 28, 28) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(28, 28, 28);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(212, 201, 181);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(21, 21, 21);
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(212, 201, 181);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(212, 201, 181);
  font-family: "Times New Roman", Times, serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(176, 163, 140);
  stroke: rgb(176, 163, 140);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(140, 129, 109);
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(74, 44, 42);
  border-left-color: rgb(74, 44, 42);
  border-right-color: rgb(74, 44, 42);
  border-top-color: rgb(74, 44, 42);
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(21, 21, 21);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(212, 201, 181);
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(176, 163, 140);
  border-left-color: rgb(176, 163, 140);
  border-right-color: rgb(176, 163, 140);
  border-top-color: rgb(176, 163, 140);
  color: rgb(176, 163, 140);
  font-family: "??", "Times New Roman", Times, serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(42, 42, 42);
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
  color: rgb(212, 201, 181);
  font-family: "??", "Courier New", Courier, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(212, 201, 181);
  border-left-color: rgb(212, 201, 181);
  border-right-color: rgb(212, 201, 181);
  border-top-color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body sub {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body summary {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body sup {
  color: rgb(212, 201, 181);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(255, 69, 0);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 40 !important;
  --accent-l: 80% !important;
  --accent-s: 60% !important;
  --background-modifier-border: #a8bdff !important;
  --background-modifier-border-focus: hsl(40, 60%, 80%) !important;
  --background-modifier-border-hover: #88a3ff !important;
  --background-modifier-error: rgba(198, 40, 40, 0.2) !important;
  --background-modifier-error-hover: #c62828 !important;
  --background-modifier-error-rgb: 198, 40, 40 !important;
  --background-modifier-form-field: #f5f8ff !important;
  --background-modifier-form-field-hover: #f5f8ff !important;
  --background-modifier-success: rgba(46, 125, 50, 0.2) !important;
  --background-modifier-success-rgb: 46, 125, 50 !important;
  --background-primary: #f5f8ff !important;
  --background-primary-alt: #e8eeff !important;
  --background-secondary: #e8eeff !important;
  --background-secondary-alt: #dbe4ff !important;
  --bases-cards-background: #f5f8ff !important;
  --bases-cards-cover-background: #e8eeff !important;
  --bases-cards-shadow: 0 0 0 1px #a8bdff !important;
  --bases-cards-shadow-hover: 0 0 0 1px #88a3ff !important;
  --bases-embed-border-color: #a8bdff !important;
  --bases-group-heading-property-color: #6889e0 !important;
  --bases-table-border-color: #a8bdff !important;
  --bases-table-cell-background-active: #f5f8ff !important;
  --bases-table-cell-background-disabled: #e8eeff !important;
  --bases-table-cell-background-selected: hsla(40, 60%, 80%, 0.1) !important;
  --bases-table-cell-shadow-active: 0 0 0 2px hsl(40, 60%, 80%) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(40, 60%, 80%) !important;
  --bases-table-group-background: #e8eeff !important;
  --bases-table-header-background: #f5f8ff !important;
  --bases-table-header-color: #6889e0 !important;
  --bases-table-summary-background: #f5f8ff !important;
  --blockquote-background-color: #f5f8ff !important;
  --blockquote-border-color: #1565c0 !important;
  --blockquote-border-thickness: 4px !important;
  --blockquote-color: #3a5ca0 !important;
  --blockquote-font-style: italic !important;
  --blur-background: color-mix(in srgb, #f5f8ff 65%, transparent) linear-gradient(#f5f8ff, color-mix(in srgb, #f5f8ff 65%, transparent)) !important;
  --bold-color: #1565c0 !important;
  --bold-weight: 700 !important;
  --button-radius: 8px !important;
  --callout-background: linear-gradient(to bottom, #e8eeff, #f5f8ff);
  --callout-border-opacity: 0.7;
  --callout-border-width: 1px;
  --callout-bug: #c62828;
  --callout-content-padding: 8px;
  --callout-default: #1565c0;
  --callout-error: #c62828;
  --callout-example: #6a1b9a;
  --callout-fail: #f57c00;
  --callout-important: #ad1457;
  --callout-info: #00838f;
  --callout-padding: 12px;
  --callout-question: #fbc02d;
  --callout-quote: #6a1b9a;
  --callout-radius: 8px;
  --callout-success: #2e7d32;
  --callout-summary: #1565c0;
  --callout-tip: #2e7d32;
  --callout-title-color: hsl(40, 60%, 80%);
  --callout-title-size: 1.2em;
  --callout-title-weight: 600;
  --callout-todo: #f57c00;
  --callout-warning: #fbc02d;
  --canvas-background: linear-gradient(to bottom, #f5f8ff, #e8eeff) !important;
  --canvas-card-label-color: #7896f0 !important;
  --canvas-color-1: 198, 40, 40 !important;
  --canvas-color-2: 245, 124, 0 !important;
  --canvas-color-3: 251, 192, 45 !important;
  --canvas-color-4: 46, 125, 50 !important;
  --canvas-color-5: 0, 131, 143 !important;
  --canvas-color-6: 106, 27, 154 !important;
  --caret-color: hsl(40, 60%, 80%) !important;
  --checkbox-border-color: #a8bdff !important;
  --checkbox-border-color-hover: #88a3ff !important;
  --checkbox-color: #dbe4ff !important;
  --checkbox-color-hover: #c8d7ff !important;
  --checkbox-marker-color: #2e7d32 !important;
  --checklist-done-color: #6889e0 !important;
  --code-background: #e8eeff !important;
  --code-border-color: #a8bdff !important;
  --code-comment: #6889e0 !important;
  --code-function: #1565c0 !important;
  --code-important: #f57c00 !important;
  --code-keyword: #6a1b9a !important;
  --code-normal: #3a5ca0 !important;
  --code-operator: #f57c00 !important;
  --code-property: #2e7d32 !important;
  --code-punctuation: #6889e0 !important;
  --code-size: 13px !important;
  --code-string: #ad1457 !important;
  --code-tag: #00838f !important;
  --code-value: #fbc02d !important;
  --collapse-icon-color: #7896f0 !important;
  --collapse-icon-color-collapsed: hsl(40, 60%, 80%) !important;
  --color-accent: hsl(40, 60%, 80%) !important;
  --color-accent-1: hsl(39, 60.6%, 86%) !important;
  --color-accent-2: hsl(37, 61.2%, 92%) !important;
  --color-accent-hsl: 40, 60%, 80% !important;
  --color-base-00: #f5f8ff !important;
  --color-base-05: #e8eeff !important;
  --color-base-10: #dbe4ff !important;
  --color-base-100: #3a5ca0 !important;
  --color-base-20: #c8d7ff !important;
  --color-base-25: #b8caff !important;
  --color-base-30: #a8bdff !important;
  --color-base-35: #98b0ff !important;
  --color-base-40: #88a3ff !important;
  --color-base-50: #7896f0 !important;
  --color-base-60: #6889e0 !important;
  --color-base-70: #587cd0 !important;
  --color-blue: #1565c0 !important;
  --color-blue-rgb: 21, 101, 192 !important;
  --color-cyan: #00838f !important;
  --color-cyan-rgb: 0, 131, 143 !important;
  --color-green: #2e7d32 !important;
  --color-green-rgb: 46, 125, 50 !important;
  --color-orange: #f57c00 !important;
  --color-orange-rgb: 245, 124, 0 !important;
  --color-pink: #ad1457 !important;
  --color-pink-rgb: 173, 20, 87 !important;
  --color-purple: #6a1b9a !important;
  --color-purple-rgb: 106, 27, 154 !important;
  --color-red: #c62828 !important;
  --color-red-rgb: 198, 40, 40 !important;
  --color-yellow: #fbc02d !important;
  --color-yellow-rgb: 251, 192, 45 !important;
  --dark: #3a5ca0 !important;
  --darkgray: #3a5ca0 !important;
  --dialog-max-height: 80vh !important;
  --dialog-max-width: 600px !important;
  --dialog-width: 500px !important;
  --divider-color: #a8bdff !important;
  --divider-color-hover: #88a3ff !important;
  --divider-width-hover: 2px !important;
  --dropdown-background: #e8eeff !important;
  --dropdown-background-hover: #dbe4ff !important;
  --dropdown-padding: 8px !important;
  --embed-block-shadow-hover: 0 0 0 1px #a8bdff, inset 0 0 0 1px #a8bdff !important;
  --embed-border-start: 2px solid hsl(40, 60%, 80%) !important;
  --file-header-background: #f5f8ff !important;
  --file-header-background-focused: #f5f8ff !important;
  --flair-background: #f5f8ff !important;
  --flair-color: #3a5ca0 !important;
  --footnote-divider-color: #a8bdff !important;
  --footnote-id-color: #6889e0 !important;
  --footnote-id-color-no-occurrences: #7896f0 !important;
  --graph-line: #98b0ff !important;
  --graph-node: #6889e0 !important;
  --graph-node-attachment: #fbc02d !important;
  --graph-node-focused: hsl(40, 60%, 80%) !important;
  --graph-node-tag: #2e7d32 !important;
  --graph-node-unresolved: #7896f0 !important;
  --graph-text: #3a5ca0 !important;
  --gray: #6889e0 !important;
  --h1-color: #6a1b9a !important;
  --h1-size: 2.2em !important;
  --h2-color: #1565c0 !important;
  --h2-size: 1.9em !important;
  --h2-weight: 600 !important;
  --h3-color: #2e7d32 !important;
  --h3-size: 1.6em !important;
  --h3-weight: 600 !important;
  --h4-color: #f57c00 !important;
  --h4-size: 1.3em !important;
  --h4-weight: 500 !important;
  --h5-color: #ad1457 !important;
  --h5-size: 1.15em !important;
  --h5-weight: 500 !important;
  --h6-color: #00838f !important;
  --h6-weight: 500 !important;
  --header-height: 32px !important;
  --heading-formatting: #7896f0 !important;
  --heading-spacing: 24px !important;
  --highlight: rgba(251, 192, 45, 0.5) !important;
  --hr-color: #a8bdff !important;
  --icon-color: #6889e0 !important;
  --icon-color-active: hsl(40, 60%, 80%) !important;
  --icon-color-focused: #3a5ca0 !important;
  --icon-color-hover: hsl(40, 60%, 80%) !important;
  --icon-opacity: 0.8 !important;
  --indentation-guide-color: #a8bdff !important;
  --indentation-guide-color-active: #88a3ff !important;
  --indentation-guide-width-active: 2px !important;
  --inline-title-color: #6a1b9a !important;
  --inline-title-line-height: 1.4 !important;
  --inline-title-size: 2em !important;
  --input-date-separator: #7896f0 !important;
  --input-placeholder-color: #7896f0 !important;
  --interactive-accent: hsl(40, 60%, 80%) !important;
  --interactive-accent-hover: hsl(40, 60%, 70%) !important;
  --interactive-accent-hsl: 40, 60%, 80% !important;
  --interactive-hover: #dbe4ff !important;
  --interactive-normal: #f5f8ff !important;
  --italic-color: #6a1b9a !important;
  --light: #f5f8ff !important;
  --lightgray: #e8eeff !important;
  --link-color: #1565c0 !important;
  --link-color-hover: rgba(21, 101, 192, 0.8) !important;
  --link-decoration: none !important;
  --link-external-color: #2e7d32 !important;
  --link-external-color-hover: rgba(46, 125, 50, 0.8) !important;
  --link-unresolved-color: #c62828 !important;
  --link-unresolved-decoration-color: hsla(40, 60%, 80%, 0.3) !important;
  --link-unresolved-decoration-style: wavy !important;
  --link-unresolved-opacity: 0.8 !important;
  --list-marker-color: #7896f0 !important;
  --list-marker-color-collapsed: hsl(40, 60%, 80%) !important;
  --list-marker-color-hover: #6889e0 !important;
  --menu-background: #e8eeff !important;
  --menu-border-color: #88a3ff !important;
  --metadata-border-color: #a8bdff !important;
  --metadata-divider-color: #a8bdff !important;
  --metadata-input-text-color: #3a5ca0 !important;
  --metadata-label-text-color: #6889e0 !important;
  --metadata-label-text-color-hover: #6889e0 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px hsl(40, 60%, 80%) !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #88a3ff !important;
  --modal-background: #f5f8ff !important;
  --modal-border-color: #a8bdff !important;
  --modal-max-height: 90vh !important;
  --modal-max-width: 800px !important;
  --modal-width: 90% !important;
  --nav-collapse-icon-color: #7896f0 !important;
  --nav-collapse-icon-color-collapsed: #7896f0 !important;
  --nav-heading-color: #3a5ca0 !important;
  --nav-heading-color-collapsed: #7896f0 !important;
  --nav-heading-color-collapsed-hover: #6889e0 !important;
  --nav-heading-color-hover: #3a5ca0 !important;
  --nav-indentation-guide-color: #a8bdff !important;
  --nav-item-background-hover: #dbe4ff !important;
  --nav-item-background-selected: hsla(40, 60%, 80%, 0.15) !important;
  --nav-item-color: #3a5ca0 !important;
  --nav-item-color-active: #3a5ca0 !important;
  --nav-item-color-highlighted: hsl(40, 60%, 80%) !important;
  --nav-item-color-hover: hsl(40, 60%, 80%) !important;
  --nav-item-color-selected: #3a5ca0 !important;
  --nav-item-size: 15px !important;
  --nav-item-weight: 500 !important;
  --nav-item-weight-hover: 600 !important;
  --nav-tag-color: #7896f0 !important;
  --nav-tag-color-active: #6889e0 !important;
  --nav-tag-color-hover: #6889e0 !important;
  --pdf-background: #f5f8ff !important;
  --pdf-page-background: #f5f8ff !important;
  --pdf-sidebar-background: #f5f8ff !important;
  --pill-background: #dbe4ff !important;
  --pill-background-hover: #c8d7ff !important;
  --pill-border-color: #a8bdff !important;
  --pill-border-color-hover: #88a3ff !important;
  --pill-color: #3a5ca0 !important;
  --pill-color-hover: hsl(40, 60%, 80%) !important;
  --pill-color-remove: #7896f0 !important;
  --pill-color-remove-hover: hsl(40, 60%, 80%) !important;
  --pill-radius: 4px !important;
  --prompt-background: #f5f8ff !important;
  --prompt-border-color: #88a3ff !important;
  --raised-background: color-mix(in srgb, #f5f8ff 65%, transparent) linear-gradient(#f5f8ff, color-mix(in srgb, #f5f8ff 65%, transparent)) !important;
  --ribbon-background: #e8eeff !important;
  --ribbon-background-collapsed: #dbe4ff !important;
  --ribbon-padding: 8px !important;
  --ribbon-width: 48px !important;
  --scrollbar-active-thumb-bg: #7896f0 !important;
  --scrollbar-bg: #dbe4ff !important;
  --scrollbar-thumb-bg: #88a3ff !important;
  --search-clear-button-color: #6889e0 !important;
  --search-icon-color: #6889e0 !important;
  --search-result-background: #f5f8ff !important;
  --secondary: hsl(40, 60%, 80%) !important;
  --setting-group-heading-color: #3a5ca0 !important;
  --setting-items-background: #e8eeff !important;
  --setting-items-border-color: #a8bdff !important;
  --sidebar-markdown-font-size: 15px !important;
  --sidebar-tab-text-display: block !important;
  --slider-thumb-border-color: #a8bdff !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #c8d7ff !important;
  --status-bar-background: #e8eeff !important;
  --status-bar-border-color: #a8bdff !important;
  --status-bar-border-width: 1px !important;
  --status-bar-font-size: 15px !important;
  --status-bar-radius: 4px !important;
  --status-bar-scroll-padding: 8px !important;
  --status-bar-text-color: #6889e0 !important;
  --suggestion-background: #f5f8ff !important;
  --sync-avatar-color-1: #c62828 !important;
  --sync-avatar-color-2: #f57c00 !important;
  --sync-avatar-color-3: #fbc02d !important;
  --sync-avatar-color-4: #2e7d32 !important;
  --sync-avatar-color-5: #00838f !important;
  --sync-avatar-color-6: #1565c0 !important;
  --sync-avatar-color-7: #6a1b9a !important;
  --sync-avatar-color-8: #ad1457 !important;
  --tab-background-active: #e8eeff !important;
  --tab-container-background: #e8eeff !important;
  --tab-curve: 4px !important;
  --tab-divider-color: #88a3ff !important;
  --tab-outline-color: #a8bdff !important;
  --tab-stacked-header-width: 32px !important;
  --tab-switcher-background: #e8eeff !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #e8eeff, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 60%, 80%) !important;
  --tab-text-color: #6889e0 !important;
  --tab-text-color-active: #3a5ca0 !important;
  --tab-text-color-focused: #3a5ca0 !important;
  --tab-text-color-focused-active: hsl(40, 60%, 80%) !important;
  --tab-text-color-focused-active-current: #3a5ca0 !important;
  --tab-text-color-focused-highlighted: hsl(40, 60%, 80%) !important;
  --table-add-button-border-color: #a8bdff !important;
  --table-background: #f5f8ff !important;
  --table-border-color: #a8bdff !important;
  --table-drag-handle-background-active: hsl(40, 60%, 80%) !important;
  --table-drag-handle-color: #7896f0 !important;
  --table-drag-handle-color-active: #1a1a1a !important;
  --table-header-background: #e8eeff !important;
  --table-header-border-color: #a8bdff !important;
  --table-header-color: #3a5ca0 !important;
  --table-row-alt-background: #e8eeff !important;
  --table-row-alt-background-hover: #f5f8ff !important;
  --table-selection: hsla(40, 60%, 80%, 0.1) !important;
  --table-selection-border-color: hsl(40, 60%, 80%) !important;
  --table-text-color: #3a5ca0 !important;
  --tag-background: #dbe4ff !important;
  --tag-background-hover: #c8d7ff !important;
  --tag-border-color: #a8bdff !important;
  --tag-border-color-hover: hsla(40, 60%, 80%, 0.15) !important;
  --tag-color: #3a5ca0 !important;
  --tag-color-hover: hsl(40, 60%, 80%) !important;
  --tag-padding-x: 4px !important;
  --tag-padding-y: 4px !important;
  --tag-radius: 4px !important;
  --tag-size: 13px !important;
  --tag-weight: 500 !important;
  --tertiary: hsl(40, 60%, 70%) !important;
  --text-accent: hsl(40, 60%, 80%) !important;
  --text-accent-hover: hsl(40, 60%, 70%) !important;
  --text-error: #c62828 !important;
  --text-faint: #7896f0 !important;
  --text-highlight-bg: rgba(251, 192, 45, 0.5) !important;
  --text-muted: #6889e0 !important;
  --text-normal: #3a5ca0 !important;
  --text-on-accent: #1a1a1a !important;
  --text-selection: rgba(40, 60%, 85%, 0.3) !important;
  --text-success: #2e7d32 !important;
  --text-warning: #f57c00 !important;
  --textHighlight: rgba(251, 192, 45, 0.5) !important;
  --titlebar-background: linear-gradient(to bottom, #e8eeff, #f5f8ff) !important;
  --titlebar-background-focused: #f5f8ff !important;
  --titlebar-border-color: transparent !important;
  --titlebar-border-width: 0 !important;
  --titlebar-text-color: #3a5ca0 !important;
  --titlebar-text-color-focused: #3a5ca0 !important;
  --titlebar-text-weight: 600 !important;
  --traffic-lights-offset-x: 32px !important;
  --traffic-lights-offset-y: 32px !important;
  --vault-profile-color: #6889e0 !important;
  --vault-profile-color-hover: hsl(40, 60%, 80%) !important;
  --vault-profile-font-size: 15px !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(232, 238, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 248, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .bases-table tbody tr:nth-child(even) {
  background-color: rgb(232, 238, 255);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(245, 248, 255);
  border-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(168, 189, 255);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .note-properties-tags {
  background-color: rgb(219, 228, 255);
  border-radius: 4px;
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(232, 238, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(168, 189, 255);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(232, 238, 255);
  border-left-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 248, 255);
  color: rgb(58, 92, 160);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(21, 101, 192);
  outline: rgb(21, 101, 192) none 0px;
  text-decoration-color: rgb(21, 101, 192);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(106, 27, 154);
  outline: rgb(106, 27, 154) none 0px;
  text-decoration-color: rgb(106, 27, 154);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(106, 27, 154);
  outline: rgb(106, 27, 154) none 0px;
  text-decoration-color: rgb(106, 27, 154);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(21, 101, 192);
  outline: rgb(21, 101, 192) none 0px;
  text-decoration-color: rgb(21, 101, 192);
}

html[saved-theme="light"] body .text-highlight {
  background-color: rgba(251, 192, 45, 0.5);
  color: rgb(58, 92, 160);
  outline: rgb(58, 92, 160) none 0px;
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body del {
  color: rgb(58, 92, 160);
  outline: rgb(58, 92, 160) none 0px;
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(168, 189, 255);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(219, 228, 255);
  border-color: rgb(219, 228, 255);
}

html[saved-theme="light"] body p {
  color: rgb(104, 137, 224);
  font-family: "??";
  outline: rgb(104, 137, 224) none 0px;
  text-decoration-color: rgb(104, 137, 224);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(46, 125, 50);
  outline: rgb(46, 125, 50) none 0px;
  text-decoration-color: rgb(46, 125, 50);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(21, 101, 192);
  outline: rgb(21, 101, 192) none 0px;
  text-decoration-color: rgb(21, 101, 192);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(198, 40, 40);
  outline: rgb(198, 40, 40) none 0px;
  text-decoration: wavy rgba(235, 214, 173, 0.3);
  text-decoration-color: rgba(235, 214, 173, 0.3);
  text-decoration-style: wavy;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body dt {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ol > li {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ul > li {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(120, 150, 240);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(245, 248, 255);
  font-style: italic;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body table {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body tbody tr:nth-child(even) {
  background-color: rgb(245, 248, 255);
}

html[saved-theme="light"] body tbody tr:nth-child(odd) {
  background-color: rgb(232, 238, 255);
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body tr {
  background-color: rgb(232, 238, 255);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body pre > code > [data-line] {
  border-left-color: rgb(21, 101, 192);
}

html[saved-theme="light"] body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(21, 101, 192);
}

html[saved-theme="light"] body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(21, 101, 192);
  border-left-color: rgb(21, 101, 192);
  border-right-color: rgb(21, 101, 192);
  border-top-color: rgb(21, 101, 192);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body figcaption {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(106, 27, 154);
  border-left-color: rgb(106, 27, 154);
  border-right-color: rgb(106, 27, 154);
  border-top-color: rgb(106, 27, 154);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(235, 214, 173);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    checkboxes: `html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(58, 92, 160);
  text-decoration-color: rgb(58, 92, 160);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .callout .callout-title > .callout-title-inner > p {
  color: rgb(235, 214, 173);
}

html[saved-theme="light"] body .callout > .callout-content {
  padding-bottom: 8px;
  padding-left: 8px;
  padding-right: 8px;
  padding-top: 8px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: #1565c0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: #c62828;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: #c62828;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: #6a1b9a;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: #f57c00;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: #00838f;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: #1565c0;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: #fbc02d;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: #6a1b9a;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: #2e7d32;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: #2e7d32;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: #f57c00;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: #fbc02d;
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(58, 92, 160);
  font-family: "??";
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(136, 163, 255);
  border-left-color: rgb(136, 163, 255);
  border-right-color: rgb(136, 163, 255);
  border-top-color: rgb(136, 163, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(58, 92, 160);
  outline: rgb(58, 92, 160) none 0px;
  text-decoration-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(136, 163, 255);
  border-left-color: rgb(136, 163, 255);
  border-right-color: rgb(136, 163, 255);
  border-top-color: rgb(136, 163, 255);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(232, 238, 255);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(219, 228, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  font-weight: 500;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body h1 {
  color: rgb(106, 27, 154);
}

html[saved-theme="light"] body h2 {
  color: rgb(21, 101, 192);
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(106, 27, 154);
  font-family: "??";
}

html[saved-theme="light"] body h3 {
  color: rgb(46, 125, 50);
}

html[saved-theme="light"] body h4 {
  color: rgb(245, 124, 0);
}

html[saved-theme="light"] body h5 {
  color: rgb(173, 20, 87);
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 131, 143);
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: #1565c0;
  border-bottom-color: rgb(58, 92, 160);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(58, 92, 160);
  border-left-width: 1px;
  border-right-color: rgb(58, 92, 160);
  border-right-width: 1px;
  border-top-color: rgb(58, 92, 160);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  padding-left: 12px;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(245, 248, 255) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(245, 248, 255);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(58, 92, 160);
  font-family: "??";
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(58, 92, 160);
  font-family: "??";
  font-weight: 500;
}

html[saved-theme="light"] body .explorer .folder-outer > ul {
  border-left-color: rgb(168, 189, 255);
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.depth-0 {
  font-weight: 500;
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-bottom-width: 1px;
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-right-width: 1px;
  border-top-color: rgb(168, 189, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(104, 137, 224);
  font-family: "??";
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(104, 137, 224);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(58, 92, 160);
  font-family: "??";
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(58, 92, 160);
  font-family: "??";
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(58, 92, 160);
  font-family: "??";
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(104, 137, 224);
  stroke: rgb(104, 137, 224);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(120, 150, 240);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(168, 189, 255);
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(232, 238, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body abbr {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(104, 137, 224);
  border-left-color: rgb(104, 137, 224);
  border-right-color: rgb(104, 137, 224);
  border-top-color: rgb(104, 137, 224);
  color: rgb(104, 137, 224);
}

html[saved-theme="light"] body kbd {
  background-color: rgb(232, 238, 255);
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
  color: rgb(58, 92, 160);
  font-size: 13px;
  padding-bottom: 1.3px;
  padding-left: 3.25px;
  padding-right: 3.25px;
  padding-top: 1.3px;
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(58, 92, 160);
  border-left-color: rgb(58, 92, 160);
  border-right-color: rgb(58, 92, 160);
  border-top-color: rgb(58, 92, 160);
}

html[saved-theme="light"] body sub {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body summary {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body sup {
  color: rgb(58, 92, 160);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(219, 228, 255);
  border-bottom-color: rgb(168, 189, 255);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left-color: rgb(168, 189, 255);
  border-right-color: rgb(168, 189, 255);
  border-top-color: rgb(168, 189, 255);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
  color: rgb(58, 92, 160);
}`,
  },
};
