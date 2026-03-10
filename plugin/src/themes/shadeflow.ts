import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "shadeflow",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["geist", "geist-mono"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 0 !important;
  --accent-l: 100% !important;
  --accent-s: 0% !important;
  --background-modifier-active-hover: rgba(255, 255, 255, 0.1) !important;
  --background-modifier-border: rgb(10, 10, 10) !important;
  --background-modifier-hover: rgb(10, 10, 10) !important;
  --background-primary: rgb(10, 10, 10) !important;
  --background-primary-alt: rgb(10, 10, 10) !important;
  --background-secondary: rgb(10, 10, 10) !important;
  --background-secondary-alt: rgb(10, 10, 10) !important;
  --bases-cards-background: rgb(10, 10, 10) !important;
  --bases-cards-cover-background: rgb(10, 10, 10) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(10, 10, 10) !important;
  --bases-embed-border-color: rgb(10, 10, 10) !important;
  --bases-group-heading-property-color: rgb(163, 163, 163) !important;
  --bases-table-border-color: rgb(10, 10, 10) !important;
  --bases-table-cell-background-active: rgb(10, 10, 10) !important;
  --bases-table-cell-background-disabled: rgb(10, 10, 10) !important;
  --bases-table-cell-background-selected: rgba(255, 255, 255, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 255, 255) !important;
  --bases-table-group-background: rgb(10, 10, 10) !important;
  --bases-table-header-background: rgb(10, 10, 10) !important;
  --bases-table-header-background-hover: rgb(10, 10, 10) !important;
  --bases-table-header-color: rgb(163, 163, 163) !important;
  --bases-table-summary-background: rgb(10, 10, 10) !important;
  --bases-table-summary-background-hover: rgb(10, 10, 10) !important;
  --blockquote-border-color: rgb(255, 255, 255) !important;
  --bodyFont: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: rgb(255, 255, 255) !important;
  --canvas-background: rgb(10, 10, 10) !important;
  --caret-color: rgb(212, 212, 212) !important;
  --checkbox-border-color-hover: rgb(163, 163, 163) !important;
  --checkbox-color: rgb(255, 255, 255) !important;
  --checkbox-color-hover: hsl(-3, 0%, 115%) !important;
  --checkbox-marker-color: rgb(10, 10, 10) !important;
  --checklist-done-color: rgb(163, 163, 163) !important;
  --code-background: #101010 !important;
  --code-border-color: rgb(10, 10, 10) !important;
  --code-bracket-background: rgb(10, 10, 10) !important;
  --code-normal: rgb(255, 255, 255) !important;
  --code-punctuation: rgb(163, 163, 163) !important;
  --codeFont: Geist Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: hsl(-3, 0%, 115%) !important;
  --color-accent: rgb(255, 255, 255) !important;
  --color-accent-1: hsl(-3, 0%, 115%) !important;
  --color-accent-2: hsl(-5, 0%, 129%) !important;
  --color-accent-hsl: 0, 0%, 100% !important;
  --dark: rgb(212, 212, 212) !important;
  --darkgray: rgb(212, 212, 212) !important;
  --divider-color: rgb(10, 10, 10) !important;
  --divider-color-hover: rgb(255, 255, 255) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(10, 10, 10), inset 0 0 0 1px rgb(10, 10, 10) !important;
  --embed-border-start: 2px solid rgb(255, 255, 255) !important;
  --file-header-background: rgb(10, 10, 10) !important;
  --file-header-background-focused: rgb(10, 10, 10) !important;
  --file-header-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgb(212, 212, 212) !important;
  --font-interface: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter !important;
  --font-mermaid: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Geist Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: Geist Mono !important;
  --font-print: Geist, Arial' !important;
  --font-text: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Geist !important;
  --footnote-divider-color: rgb(10, 10, 10) !important;
  --footnote-id-color: rgb(163, 163, 163) !important;
  --footnote-input-background-active: rgb(10, 10, 10) !important;
  --footnote-line-height: 1.75 !important;
  --graph-node: rgb(163, 163, 163) !important;
  --graph-node-focused: hsl(-3, 0%, 115%) !important;
  --graph-text: rgb(212, 212, 212) !important;
  --gray: rgb(163, 163, 163) !important;
  --h1-color: rgb(255, 255, 255) !important;
  --h1-line-height: 2.25rem !important;
  --h1-size: 1.875rem !important;
  --h1-weight: 500 !important;
  --h2-color: rgb(255, 255, 255) !important;
  --h2-line-height: 1.3333333 !important;
  --h2-size: 1.5em !important;
  --h2-weight: 500 !important;
  --h3-color: rgb(255, 255, 255) !important;
  --h3-line-height: 1.6 !important;
  --h3-size: 1.25em !important;
  --h4-color: rgb(255, 255, 255) !important;
  --h5-color: rgb(255, 255, 255) !important;
  --h5-line-height: 1.75 !important;
  --h6-color: rgb(255, 255, 255) !important;
  --h6-line-height: 1.75 !important;
  --he-weight: 500 !important;
  --headerFont: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 5.625rem !important;
  --highlight: rgb(10, 10, 10) !important;
  --hr-color: #353533 !important;
  --icon-color: rgb(163, 163, 163) !important;
  --icon-color-active: hsl(-3, 0%, 115%) !important;
  --icon-color-focused: rgb(212, 212, 212) !important;
  --icon-color-hover: rgb(163, 163, 163) !important;
  --inline-title-color: rgb(255, 255, 255) !important;
  --inline-title-line-height: 2.25rem !important;
  --inline-title-size: 1.875rem !important;
  --inline-title-weight: 500 !important;
  --interactive-accent: rgb(255, 255, 255) !important;
  --interactive-accent-hover: hsl(-3, 0%, 115%) !important;
  --interactive-accent-hsl: 0, 0%, 100% !important;
  --light: rgb(10, 10, 10) !important;
  --lightgray: rgb(10, 10, 10) !important;
  --line-height-normal: 1.75 !important;
  --link-color: hsl(-3, 0%, 115%) !important;
  --link-color-hover: hsl(-5, 0%, 129%) !important;
  --link-external-color: hsl(-3, 0%, 115%) !important;
  --link-external-color-hover: hsl(-5, 0%, 129%) !important;
  --link-unresolved-color: hsl(-3, 0%, 115%) !important;
  --link-unresolved-decoration-color: rgba(255, 255, 255, 0.3) !important;
  --list-marker-color: #d4d4d4 !important;
  --list-marker-color-collapsed: hsl(-3, 0%, 115%) !important;
  --list-marker-color-hover: rgb(163, 163, 163) !important;
  --menu-background: rgb(10, 10, 10) !important;
  --metadata-border-color: rgb(10, 10, 10) !important;
  --metadata-divider-color: rgb(10, 10, 10) !important;
  --metadata-input-background-active: rgb(10, 10, 10) !important;
  --metadata-input-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(212, 212, 212) !important;
  --metadata-label-background-active: rgb(10, 10, 10) !important;
  --metadata-label-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(163, 163, 163) !important;
  --metadata-label-text-color-hover: rgb(163, 163, 163) !important;
  --metadata-property-background-active: rgb(10, 10, 10) !important;
  --modal-background: rgb(10, 10, 10) !important;
  --nav-heading-color: rgb(212, 212, 212) !important;
  --nav-heading-color-collapsed-hover: rgb(163, 163, 163) !important;
  --nav-heading-color-hover: rgb(212, 212, 212) !important;
  --nav-item-background-active: rgb(10, 10, 10) !important;
  --nav-item-background-hover: rgb(10, 10, 10) !important;
  --nav-item-background-selected: rgba(255, 255, 255, 0.15) !important;
  --nav-item-color: rgb(163, 163, 163) !important;
  --nav-item-color-active: rgb(212, 212, 212) !important;
  --nav-item-color-highlighted: hsl(-3, 0%, 115%) !important;
  --nav-item-color-hover: rgb(212, 212, 212) !important;
  --nav-item-color-selected: rgb(212, 212, 212) !important;
  --nav-tag-color-active: rgb(163, 163, 163) !important;
  --nav-tag-color-hover: rgb(163, 163, 163) !important;
  --p-spacing: 2.25rem !important;
  --pdf-background: rgb(10, 10, 10) !important;
  --pdf-page-background: rgb(10, 10, 10) !important;
  --pdf-shadow: 0 0 0 1px rgb(10, 10, 10) !important;
  --pdf-sidebar-background: rgb(10, 10, 10) !important;
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(10, 10, 10) !important;
  --pill-border-color: rgb(10, 10, 10) !important;
  --pill-color: rgb(163, 163, 163) !important;
  --pill-color-hover: rgb(212, 212, 212) !important;
  --pill-color-remove-hover: hsl(-3, 0%, 115%) !important;
  --prompt-background: rgb(10, 10, 10) !important;
  --ribbon-background: rgb(10, 10, 10) !important;
  --ribbon-background-collapsed: rgb(10, 10, 10) !important;
  --search-clear-button-color: rgb(163, 163, 163) !important;
  --search-icon-color: rgb(163, 163, 163) !important;
  --search-result-background: rgb(10, 10, 10) !important;
  --secondary: hsl(-3, 0%, 115%) !important;
  --setting-group-heading-color: rgb(212, 212, 212) !important;
  --setting-items-background: rgb(10, 10, 10) !important;
  --setting-items-border-color: rgb(10, 10, 10) !important;
  --slider-thumb-border-color: black !important;
  --slider-track-background: white !important;
  --status-bar-background: rgb(10, 10, 10) !important;
  --status-bar-border-color: rgb(10, 10, 10) !important;
  --status-bar-text-color: rgb(163, 163, 163) !important;
  --suggestion-background: rgb(10, 10, 10) !important;
  --tab-background-active: rgb(10, 10, 10) !important;
  --tab-container-background: rgb(10, 10, 10) !important;
  --tab-outline-color: rgb(10, 10, 10) !important;
  --tab-switcher-background: rgb(10, 10, 10) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(10, 10, 10), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 255, 255) !important;
  --tab-text-color-active: rgb(163, 163, 163) !important;
  --tab-text-color-focused: rgb(163, 163, 163) !important;
  --tab-text-color-focused-active: rgb(163, 163, 163) !important;
  --tab-text-color-focused-active-current: rgb(212, 212, 212) !important;
  --tab-text-color-focused-highlighted: hsl(-3, 0%, 115%) !important;
  --table-add-button-border-color: rgb(10, 10, 10) !important;
  --table-border-color: rgb(10, 10, 10) !important;
  --table-drag-handle-background-active: rgb(255, 255, 255) !important;
  --table-drag-handle-color-active: black !important;
  --table-header-border-color: rgb(10, 10, 10) !important;
  --table-header-color: rgb(212, 212, 212) !important;
  --table-selection: rgba(255, 255, 255, 0.1) !important;
  --table-selection-border-color: rgb(255, 255, 255) !important;
  --tag-background: rgba(255, 255, 255, 0.1) !important;
  --tag-background-hover: rgba(255, 255, 255, 0.2) !important;
  --tag-border-color: rgba(255, 255, 255, 0.15) !important;
  --tag-border-color-hover: rgba(255, 255, 255, 0.15) !important;
  --tag-color: hsl(-3, 0%, 115%) !important;
  --tag-color-hover: hsl(-3, 0%, 115%) !important;
  --tertiary: hsl(-5, 0%, 129%) !important;
  --text-accent: hsl(-3, 0%, 115%) !important;
  --text-accent-hover: hsl(-5, 0%, 129%) !important;
  --text-muted: rgb(163, 163, 163) !important;
  --text-normal: rgb(212, 212, 212) !important;
  --text-on-accent: black !important;
  --text-selection: #007bcf !important;
  --textHighlight: rgb(10, 10, 10) !important;
  --titleFont: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(10, 10, 10) !important;
  --titlebar-background-focused: rgb(10, 10, 10) !important;
  --titlebar-border-color: rgb(10, 10, 10) !important;
  --titlebar-text-color: rgb(163, 163, 163) !important;
  --titlebar-text-color-focused: rgb(212, 212, 212) !important;
  --toggle-thumb-color: black !important;
  --vault-profile-color: rgb(212, 212, 212) !important;
  --vault-profile-color-hover: rgb(212, 212, 212) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body del {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: line-through rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body p {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 163, 163) none 0px;
  text-decoration: rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.3);
  text-decoration-color: rgba(255, 255, 255, 0.3);
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body dt {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    blockquotes: `html[saved-theme="dark"] body blockquote {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body table {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 36px;
  width: 190.719px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body pre:has(> code) {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(163, 163, 163);
  text-decoration: line-through rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    search: `html[saved-theme="dark"] body .search > .search-button {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
}`,
    scrollbars: `html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(212, 212, 212);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(163, 163, 163);
  stroke: rgb(163, 163, 163);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(212, 212, 212);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(212, 212, 212);
  text-decoration: underline dotted rgb(212, 212, 212);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body sub {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body summary {
  color: rgb(212, 212, 212);
}

html[saved-theme="dark"] body sup {
  color: rgb(212, 212, 212);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 240 !important;
  --accent-l: 12% !important;
  --accent-s: 2% !important;
  --background-modifier-active-hover: rgba(30, 30, 31, 0.1) !important;
  --background-modifier-border: rgb(245, 245, 245) !important;
  --background-modifier-hover: rgb(245, 245, 245) !important;
  --background-primary: rgb(245, 245, 245) !important;
  --background-primary-alt: rgb(245, 245, 245) !important;
  --background-secondary: rgb(245, 245, 245) !important;
  --background-secondary-alt: rgb(245, 245, 245) !important;
  --bases-cards-background: rgb(245, 245, 245) !important;
  --bases-cards-cover-background: rgb(245, 245, 245) !important;
  --bases-cards-shadow: 0 0 0 1px rgb(245, 245, 245) !important;
  --bases-embed-border-color: rgb(245, 245, 245) !important;
  --bases-group-heading-property-color: rgb(163, 163, 163) !important;
  --bases-table-border-color: rgb(245, 245, 245) !important;
  --bases-table-cell-background-active: rgb(245, 245, 245) !important;
  --bases-table-cell-background-disabled: rgb(245, 245, 245) !important;
  --bases-table-cell-background-selected: rgba(30, 30, 31, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(32, 33, 34) !important;
  --bases-table-group-background: rgb(245, 245, 245) !important;
  --bases-table-header-background: rgb(245, 245, 245) !important;
  --bases-table-header-background-hover: rgb(245, 245, 245) !important;
  --bases-table-header-color: rgb(163, 163, 163) !important;
  --bases-table-summary-background: rgb(245, 245, 245) !important;
  --bases-table-summary-background-hover: rgb(245, 245, 245) !important;
  --blockquote-border-color: rgb(32, 33, 34) !important;
  --blur-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent)) !important;
  --bodyFont: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: rgb(245, 245, 245) !important;
  --caret-color: rgb(0, 0, 0) !important;
  --checkbox-border-color-hover: rgb(163, 163, 163) !important;
  --checkbox-color: rgb(32, 33, 34) !important;
  --checkbox-color-hover: rgb(35, 35, 36) !important;
  --checkbox-marker-color: rgb(245, 245, 245) !important;
  --checklist-done-color: rgb(163, 163, 163) !important;
  --code-background: #ffffff !important;
  --code-border-color: rgb(245, 245, 245) !important;
  --code-bracket-background: rgb(245, 245, 245) !important;
  --code-normal: rgb(0, 0, 0) !important;
  --code-punctuation: rgb(163, 163, 163) !important;
  --codeFont: Geist Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(30, 30, 31) !important;
  --color-accent: rgb(30, 30, 31) !important;
  --color-accent-1: rgb(32, 33, 34) !important;
  --color-accent-2: rgb(35, 35, 36) !important;
  --color-accent-hsl: 240, 2%, 12% !important;
  --dark: rgb(0, 0, 0) !important;
  --darkgray: rgb(0, 0, 0) !important;
  --divider-color: rgb(245, 245, 245) !important;
  --divider-color-hover: rgb(32, 33, 34) !important;
  --embed-block-shadow-hover: 0 0 0 1px rgb(245, 245, 245), inset 0 0 0 1px rgb(245, 245, 245) !important;
  --embed-border-start: 2px solid rgb(32, 33, 34) !important;
  --file-header-background: rgb(245, 245, 245) !important;
  --file-header-background-focused: rgb(245, 245, 245) !important;
  --file-header-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: rgb(0, 0, 0) !important;
  --font-interface: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: Inter !important;
  --font-mermaid: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: Geist Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: Geist Mono !important;
  --font-print: Geist, Arial' !important;
  --font-text: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: Geist !important;
  --footnote-divider-color: rgb(245, 245, 245) !important;
  --footnote-id-color: rgb(163, 163, 163) !important;
  --footnote-input-background-active: rgb(245, 245, 245) !important;
  --footnote-line-height: 1.75 !important;
  --graph-node: rgb(163, 163, 163) !important;
  --graph-node-focused: rgb(30, 30, 31) !important;
  --graph-text: rgb(0, 0, 0) !important;
  --gray: rgb(163, 163, 163) !important;
  --h1-line-height: 2.25rem !important;
  --h1-size: 1.875rem !important;
  --h1-weight: 500 !important;
  --h2-line-height: 1.3333333 !important;
  --h2-size: 1.5em !important;
  --h2-weight: 500 !important;
  --h3-line-height: 1.6 !important;
  --h3-size: 1.25em !important;
  --h5-line-height: 1.75 !important;
  --h6-line-height: 1.75 !important;
  --he-weight: 500 !important;
  --headerFont: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 5.625rem !important;
  --highlight: rgb(245, 245, 245) !important;
  --hr-color: #353533 !important;
  --icon-color: rgb(163, 163, 163) !important;
  --icon-color-active: rgb(30, 30, 31) !important;
  --icon-color-focused: rgb(0, 0, 0) !important;
  --icon-color-hover: rgb(163, 163, 163) !important;
  --inline-title-line-height: 2.25rem !important;
  --inline-title-size: 1.875rem !important;
  --inline-title-weight: 500 !important;
  --interactive-accent: rgb(32, 33, 34) !important;
  --interactive-accent-hover: rgb(35, 35, 36) !important;
  --interactive-accent-hsl: 240, 2%, 12% !important;
  --light: rgb(245, 245, 245) !important;
  --lightgray: rgb(245, 245, 245) !important;
  --line-height-normal: 1.75 !important;
  --link-color: #000000 !important;
  --link-color-hover: rgb(35, 35, 36) !important;
  --link-external-color: #000000 !important;
  --link-external-color-hover: rgb(35, 35, 36) !important;
  --link-unresolved-color: rgb(30, 30, 31) !important;
  --link-unresolved-decoration-color: rgba(30, 30, 31, 0.3) !important;
  --list-marker-color: #d4d4d4 !important;
  --list-marker-color-collapsed: rgb(30, 30, 31) !important;
  --list-marker-color-hover: rgb(163, 163, 163) !important;
  --menu-background: rgb(245, 245, 245) !important;
  --metadata-border-color: rgb(245, 245, 245) !important;
  --metadata-divider-color: rgb(245, 245, 245) !important;
  --metadata-input-background-active: rgb(245, 245, 245) !important;
  --metadata-input-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: rgb(0, 0, 0) !important;
  --metadata-label-background-active: rgb(245, 245, 245) !important;
  --metadata-label-font: Inter, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: rgb(163, 163, 163) !important;
  --metadata-label-text-color-hover: rgb(163, 163, 163) !important;
  --metadata-property-background-active: rgb(245, 245, 245) !important;
  --modal-background: rgb(245, 245, 245) !important;
  --nav-heading-color: rgb(0, 0, 0) !important;
  --nav-heading-color-collapsed-hover: rgb(163, 163, 163) !important;
  --nav-heading-color-hover: rgb(0, 0, 0) !important;
  --nav-item-background-active: rgb(245, 245, 245) !important;
  --nav-item-background-hover: rgb(245, 245, 245) !important;
  --nav-item-background-selected: rgba(30, 30, 31, 0.15) !important;
  --nav-item-color: rgb(163, 163, 163) !important;
  --nav-item-color-active: rgb(0, 0, 0) !important;
  --nav-item-color-highlighted: rgb(30, 30, 31) !important;
  --nav-item-color-hover: rgb(0, 0, 0) !important;
  --nav-item-color-selected: rgb(0, 0, 0) !important;
  --nav-tag-color-active: rgb(163, 163, 163) !important;
  --nav-tag-color-hover: rgb(163, 163, 163) !important;
  --p-spacing: 2.25rem !important;
  --pdf-background: rgb(245, 245, 245) !important;
  --pdf-page-background: rgb(245, 245, 245) !important;
  --pdf-sidebar-background: rgb(245, 245, 245) !important;
  --pill-border-color: rgb(245, 245, 245) !important;
  --pill-color: rgb(163, 163, 163) !important;
  --pill-color-hover: rgb(0, 0, 0) !important;
  --pill-color-remove-hover: rgb(30, 30, 31) !important;
  --prompt-background: rgb(245, 245, 245) !important;
  --raised-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent)) !important;
  --ribbon-background: rgb(245, 245, 245) !important;
  --ribbon-background-collapsed: rgb(245, 245, 245) !important;
  --search-clear-button-color: rgb(163, 163, 163) !important;
  --search-icon-color: rgb(163, 163, 163) !important;
  --search-result-background: rgb(245, 245, 245) !important;
  --secondary: rgb(30, 30, 31) !important;
  --setting-group-heading-color: rgb(0, 0, 0) !important;
  --setting-items-background: rgb(245, 245, 245) !important;
  --setting-items-border-color: rgb(245, 245, 245) !important;
  --slider-thumb-border-color: black !important;
  --slider-track-background: black !important;
  --status-bar-background: rgb(245, 245, 245) !important;
  --status-bar-border-color: rgb(245, 245, 245) !important;
  --status-bar-text-color: rgb(163, 163, 163) !important;
  --suggestion-background: rgb(245, 245, 245) !important;
  --tab-background-active: rgb(245, 245, 245) !important;
  --tab-container-background: rgb(245, 245, 245) !important;
  --tab-outline-color: rgb(245, 245, 245) !important;
  --tab-switcher-background: rgb(245, 245, 245) !important;
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(30, 30, 31) !important;
  --tab-text-color-active: rgb(163, 163, 163) !important;
  --tab-text-color-focused: rgb(163, 163, 163) !important;
  --tab-text-color-focused-active: rgb(163, 163, 163) !important;
  --tab-text-color-focused-active-current: rgb(0, 0, 0) !important;
  --tab-text-color-focused-highlighted: rgb(30, 30, 31) !important;
  --table-add-button-border-color: rgb(245, 245, 245) !important;
  --table-border-color: rgb(245, 245, 245) !important;
  --table-drag-handle-background-active: rgb(32, 33, 34) !important;
  --table-header-border-color: rgb(245, 245, 245) !important;
  --table-header-color: rgb(0, 0, 0) !important;
  --table-selection: rgba(30, 30, 31, 0.1) !important;
  --table-selection-border-color: rgb(32, 33, 34) !important;
  --tag-background: rgba(30, 30, 31, 0.1) !important;
  --tag-background-hover: rgba(30, 30, 31, 0.2) !important;
  --tag-border-color: rgba(30, 30, 31, 0.15) !important;
  --tag-border-color-hover: rgba(30, 30, 31, 0.15) !important;
  --tag-color: rgb(30, 30, 31) !important;
  --tag-color-hover: rgb(30, 30, 31) !important;
  --tertiary: rgb(35, 35, 36) !important;
  --text-accent: rgb(30, 30, 31) !important;
  --text-accent-hover: rgb(35, 35, 36) !important;
  --text-muted: rgb(163, 163, 163) !important;
  --text-normal: rgb(0, 0, 0) !important;
  --text-selection: #007bcf !important;
  --textHighlight: rgb(245, 245, 245) !important;
  --titleFont: Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: rgb(245, 245, 245) !important;
  --titlebar-background-focused: rgb(245, 245, 245) !important;
  --titlebar-border-color: rgb(245, 245, 245) !important;
  --titlebar-text-color: rgb(163, 163, 163) !important;
  --titlebar-text-color-focused: rgb(0, 0, 0) !important;
  --vault-profile-color: rgb(0, 0, 0) !important;
  --vault-profile-color-hover: rgb(0, 0, 0) !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 163, 163) none 0px;
  text-decoration: rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(30, 30, 31);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 30, 31) none 0px;
  text-decoration: underline rgba(30, 30, 31, 0.3);
  text-decoration-color: rgba(30, 30, 31, 0.3);
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
    blockquotes: `html[saved-theme="light"] body blockquote {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 36px;
  width: 190.719px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(32, 32, 34);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(32, 32, 34);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(163, 163, 163);
  text-decoration: line-through rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    search: `html[saved-theme="light"] body .search > .search-button {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(30, 30, 31, 0.1);
  border-bottom-color: rgba(30, 30, 31, 0.15);
  border-left-color: rgba(30, 30, 31, 0.15);
  border-right-color: rgba(30, 30, 31, 0.15);
  border-top-color: rgba(30, 30, 31, 0.15);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(30, 30, 31);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
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
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
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
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="light"] body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(163, 163, 163);
  stroke: rgb(163, 163, 163);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

html[saved-theme="light"] body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
}`,
  },
};
