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
  --accent-h: 0;
  --accent-l: 100%;
  --accent-s: 0%;
  --background-modifier-active-hover: rgba(255, 255, 255, 0.1);
  --background-modifier-border: rgb(10, 10, 10);
  --background-modifier-hover: rgb(10, 10, 10);
  --background-primary: rgb(10, 10, 10);
  --background-primary-alt: rgb(10, 10, 10);
  --background-secondary: rgb(10, 10, 10);
  --background-secondary-alt: rgb(10, 10, 10);
  --bases-cards-background: rgb(10, 10, 10);
  --bases-cards-cover-background: rgb(10, 10, 10);
  --bases-cards-shadow: 0 0 0 1px rgb(10, 10, 10);
  --bases-embed-border-color: rgb(10, 10, 10);
  --bases-group-heading-property-color: rgb(163, 163, 163);
  --bases-table-border-color: rgb(10, 10, 10);
  --bases-table-cell-background-active: rgb(10, 10, 10);
  --bases-table-cell-background-disabled: rgb(10, 10, 10);
  --bases-table-cell-background-selected: rgba(255, 255, 255, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(255, 255, 255);
  --bases-table-group-background: rgb(10, 10, 10);
  --bases-table-header-background: rgb(10, 10, 10);
  --bases-table-header-background-hover: rgb(10, 10, 10);
  --bases-table-header-color: rgb(163, 163, 163);
  --bases-table-summary-background: rgb(10, 10, 10);
  --bases-table-summary-background-hover: rgb(10, 10, 10);
  --blockquote-border-color: rgb(255, 255, 255);
  --bold-color: rgb(255, 255, 255);
  --canvas-background: rgb(10, 10, 10);
  --caret-color: rgb(212, 212, 212);
  --checkbox-border-color-hover: rgb(163, 163, 163);
  --checkbox-color: rgb(255, 255, 255);
  --checkbox-color-hover: hsl(-3, 0%, 115%);
  --checkbox-marker-color: rgb(10, 10, 10);
  --checklist-done-color: rgb(163, 163, 163);
  --code-background: #101010;
  --code-border-color: rgb(10, 10, 10);
  --code-bracket-background: rgb(10, 10, 10);
  --code-normal: rgb(255, 255, 255);
  --code-punctuation: rgb(163, 163, 163);
  --collapse-icon-color-collapsed: hsl(-3, 0%, 115%);
  --color-accent: rgb(255, 255, 255);
  --color-accent-1: hsl(-3, 0%, 115%);
  --color-accent-2: hsl(-5, 0%, 129%);
  --color-accent-hsl: 0, 0%, 100%;
  --divider-color: rgb(10, 10, 10);
  --divider-color-hover: rgb(255, 255, 255);
  --embed-block-shadow-hover: 0 0 0 1px rgb(10, 10, 10), inset 0 0 0 1px rgb(10, 10, 10);
  --embed-border-start: 2px solid rgb(255, 255, 255);
  --file-header-background: rgb(10, 10, 10);
  --file-header-background-focused: rgb(10, 10, 10);
  --file-header-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgb(212, 212, 212);
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter;
  --font-mermaid: '??', Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', Geist Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Geist Mono;
  --font-print: '??', '??', Geist, 'Arial';
  --font-text: '??', Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Geist;
  --footnote-divider-color: rgb(10, 10, 10);
  --footnote-id-color: rgb(163, 163, 163);
  --footnote-input-background-active: rgb(10, 10, 10);
  --footnote-line-height: 1.75;
  --graph-node: rgb(163, 163, 163);
  --graph-node-focused: hsl(-3, 0%, 115%);
  --graph-text: rgb(212, 212, 212);
  --h1-color: rgb(255, 255, 255);
  --h1-line-height: 2.25rem;
  --h1-size: 1.875rem;
  --h1-weight: 500;
  --h2-color: rgb(255, 255, 255);
  --h2-line-height: 1.3333333;
  --h2-size: 1.5em;
  --h2-weight: 500;
  --h3-color: rgb(255, 255, 255);
  --h3-line-height: 1.6;
  --h3-size: 1.25em;
  --h4-color: rgb(255, 255, 255);
  --h5-color: rgb(255, 255, 255);
  --h5-line-height: 1.75;
  --h6-color: rgb(255, 255, 255);
  --h6-line-height: 1.75;
  --he-weight: 500;
  --heading-spacing: 5.625rem;
  --hr-color: #353533;
  --icon-color: rgb(163, 163, 163);
  --icon-color-active: hsl(-3, 0%, 115%);
  --icon-color-focused: rgb(212, 212, 212);
  --icon-color-hover: rgb(163, 163, 163);
  --inline-title-color: rgb(255, 255, 255);
  --inline-title-line-height: 2.25rem;
  --inline-title-size: 1.875rem;
  --inline-title-weight: 500;
  --interactive-accent: rgb(255, 255, 255);
  --interactive-accent-hover: hsl(-3, 0%, 115%);
  --interactive-accent-hsl: 0, 0%, 100%;
  --line-height-normal: 1.75;
  --link-color: hsl(-3, 0%, 115%);
  --link-color-hover: hsl(-5, 0%, 129%);
  --link-external-color: hsl(-3, 0%, 115%);
  --link-external-color-hover: hsl(-5, 0%, 129%);
  --link-unresolved-color: hsl(-3, 0%, 115%);
  --link-unresolved-decoration-color: rgba(255, 255, 255, 0.3);
  --list-marker-color: #d4d4d4;
  --list-marker-color-collapsed: hsl(-3, 0%, 115%);
  --list-marker-color-hover: rgb(163, 163, 163);
  --menu-background: rgb(10, 10, 10);
  --metadata-border-color: rgb(10, 10, 10);
  --metadata-divider-color: rgb(10, 10, 10);
  --metadata-input-background-active: rgb(10, 10, 10);
  --metadata-input-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(212, 212, 212);
  --metadata-label-background-active: rgb(10, 10, 10);
  --metadata-label-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(163, 163, 163);
  --metadata-label-text-color-hover: rgb(163, 163, 163);
  --metadata-property-background-active: rgb(10, 10, 10);
  --modal-background: rgb(10, 10, 10);
  --nav-heading-color: rgb(212, 212, 212);
  --nav-heading-color-collapsed-hover: rgb(163, 163, 163);
  --nav-heading-color-hover: rgb(212, 212, 212);
  --nav-item-background-active: rgb(10, 10, 10);
  --nav-item-background-hover: rgb(10, 10, 10);
  --nav-item-background-selected: rgba(255, 255, 255, 0.15);
  --nav-item-color: rgb(163, 163, 163);
  --nav-item-color-active: rgb(212, 212, 212);
  --nav-item-color-highlighted: hsl(-3, 0%, 115%);
  --nav-item-color-hover: rgb(212, 212, 212);
  --nav-item-color-selected: rgb(212, 212, 212);
  --nav-tag-color-active: rgb(163, 163, 163);
  --nav-tag-color-hover: rgb(163, 163, 163);
  --p-spacing: 2.25rem;
  --pdf-background: rgb(10, 10, 10);
  --pdf-page-background: rgb(10, 10, 10);
  --pdf-shadow: 0 0 0 1px rgb(10, 10, 10);
  --pdf-sidebar-background: rgb(10, 10, 10);
  --pdf-thumbnail-shadow: 0 0 0 1px rgb(10, 10, 10);
  --pill-border-color: rgb(10, 10, 10);
  --pill-color: rgb(163, 163, 163);
  --pill-color-hover: rgb(212, 212, 212);
  --pill-color-remove-hover: hsl(-3, 0%, 115%);
  --prompt-background: rgb(10, 10, 10);
  --ribbon-background: rgb(10, 10, 10);
  --ribbon-background-collapsed: rgb(10, 10, 10);
  --search-clear-button-color: rgb(163, 163, 163);
  --search-icon-color: rgb(163, 163, 163);
  --search-result-background: rgb(10, 10, 10);
  --setting-group-heading-color: rgb(212, 212, 212);
  --setting-items-background: rgb(10, 10, 10);
  --setting-items-border-color: rgb(10, 10, 10);
  --slider-thumb-border-color: black;
  --slider-track-background: white;
  --status-bar-background: rgb(10, 10, 10);
  --status-bar-border-color: rgb(10, 10, 10);
  --status-bar-text-color: rgb(163, 163, 163);
  --suggestion-background: rgb(10, 10, 10);
  --tab-background-active: rgb(10, 10, 10);
  --tab-container-background: rgb(10, 10, 10);
  --tab-outline-color: rgb(10, 10, 10);
  --tab-switcher-background: rgb(10, 10, 10);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(10, 10, 10), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(255, 255, 255);
  --tab-text-color-active: rgb(163, 163, 163);
  --tab-text-color-focused: rgb(163, 163, 163);
  --tab-text-color-focused-active: rgb(163, 163, 163);
  --tab-text-color-focused-active-current: rgb(212, 212, 212);
  --tab-text-color-focused-highlighted: hsl(-3, 0%, 115%);
  --table-add-button-border-color: rgb(10, 10, 10);
  --table-border-color: rgb(10, 10, 10);
  --table-drag-handle-background-active: rgb(255, 255, 255);
  --table-drag-handle-color-active: black;
  --table-header-border-color: rgb(10, 10, 10);
  --table-header-color: rgb(212, 212, 212);
  --table-selection: rgba(255, 255, 255, 0.1);
  --table-selection-border-color: rgb(255, 255, 255);
  --tag-background: rgba(255, 255, 255, 0.1);
  --tag-background-hover: rgba(255, 255, 255, 0.2);
  --tag-border-color: rgba(255, 255, 255, 0.15);
  --tag-border-color-hover: rgba(255, 255, 255, 0.15);
  --tag-color: hsl(-3, 0%, 115%);
  --tag-color-hover: hsl(-3, 0%, 115%);
  --text-accent: hsl(-3, 0%, 115%);
  --text-accent-hover: hsl(-5, 0%, 129%);
  --text-muted: rgb(163, 163, 163);
  --text-normal: rgb(212, 212, 212);
  --text-on-accent: black;
  --text-selection: #007bcf;
  --titlebar-background: rgb(10, 10, 10);
  --titlebar-background-focused: rgb(10, 10, 10);
  --titlebar-border-color: rgb(10, 10, 10);
  --titlebar-text-color: rgb(163, 163, 163);
  --titlebar-text-color-focused: rgb(212, 212, 212);
  --toggle-thumb-color: black;
  --vault-profile-color: rgb(212, 212, 212);
  --vault-profile-color-hover: rgb(212, 212, 212);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(10, 10, 10);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body div#quartz-root {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .page article p > em, em {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .page article p > i, i {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .page article p > strong, strong {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body .text-highlight {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body del {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: line-through rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body p {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 163, 163) none 0px;
  text-decoration: rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}`,
    links: `body a.external, footer a {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgb(255, 255, 255);
  text-decoration-color: rgb(255, 255, 255);
}

body a.internal.broken {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 255, 255) none 0px;
  text-decoration: underline rgba(255, 255, 255, 0.3);
  text-decoration-color: rgba(255, 255, 255, 0.3);
}`,
    lists: `body dd {
  color: rgb(212, 212, 212);
}

body dt {
  color: rgb(212, 212, 212);
}

body ol > li {
  color: rgb(212, 212, 212);
}

body ol.overflow {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body ul > li {
  color: rgb(212, 212, 212);
}

body ul.overflow {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body table {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 36px;
  width: 190.719px;
}

body td {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body th {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body pre > code, pre:has(> code) {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
}

body pre:has(> code) {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
}`,
    images: `body audio {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body figcaption {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body img {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body video {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    embeds: `body .file-embed {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
}

body .footnotes {
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .transclude {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .transclude-inner {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(163, 163, 163);
  text-decoration: line-through rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}

body li.task-list-item[data-task='!'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='*'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='-'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='/'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='>'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='?'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='I'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='S'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='b'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='c'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='d'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='f'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='i'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='k'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='l'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='p'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='u'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body li.task-list-item[data-task='w'] {
  color: rgb(212, 212, 212);
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(10, 10, 10);
}

body .search > .search-container > .search-space > * {
  color: rgb(212, 212, 212);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(212, 212, 212) none 0px;
  text-decoration: rgb(212, 212, 212);
  text-decoration-color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(10, 10, 10);
  color: rgb(212, 212, 212);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(255, 255, 255, 0.1);
  border-bottom-color: rgba(255, 255, 255, 0.15);
  border-left-color: rgba(255, 255, 255, 0.15);
  border-right-color: rgba(255, 255, 255, 0.15);
  border-top-color: rgba(255, 255, 255, 0.15);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(255, 255, 255);
}

body h1 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(255, 255, 255);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-corner {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}

body ::-webkit-scrollbar-track {
  background: rgb(10, 10, 10) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(10, 10, 10);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}`,
    footer: `body footer {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(212, 212, 212);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body li.section-li > .section .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

body ul.section-ul {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

body .darkmode svg {
  color: rgb(163, 163, 163);
  stroke: rgb(163, 163, 163);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
  color: rgb(212, 212, 212);
}

body .metadata {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(10, 10, 10);
  border-right-color: rgb(10, 10, 10);
  border-top-color: rgb(10, 10, 10);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(10, 10, 10);
}

body .page-header h2.page-title {
  color: rgb(212, 212, 212);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(212, 212, 212);
  text-decoration: underline dotted rgb(212, 212, 212);
}

body details {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body input[type=text] {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(16, 16, 16);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(212, 212, 212);
  border-left-color: rgb(212, 212, 212);
  border-right-color: rgb(212, 212, 212);
  border-top-color: rgb(212, 212, 212);
}

body sub {
  color: rgb(212, 212, 212);
}

body summary {
  color: rgb(212, 212, 212);
}

body sup {
  color: rgb(212, 212, 212);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 240;
  --accent-l: 12%;
  --accent-s: 2%;
  --background-modifier-active-hover: rgba(30, 30, 31, 0.1);
  --background-modifier-border: rgb(245, 245, 245);
  --background-modifier-hover: rgb(245, 245, 245);
  --background-primary: rgb(245, 245, 245);
  --background-primary-alt: rgb(245, 245, 245);
  --background-secondary: rgb(245, 245, 245);
  --background-secondary-alt: rgb(245, 245, 245);
  --bases-cards-background: rgb(245, 245, 245);
  --bases-cards-cover-background: rgb(245, 245, 245);
  --bases-cards-shadow: 0 0 0 1px rgb(245, 245, 245);
  --bases-embed-border-color: rgb(245, 245, 245);
  --bases-group-heading-property-color: rgb(163, 163, 163);
  --bases-table-border-color: rgb(245, 245, 245);
  --bases-table-cell-background-active: rgb(245, 245, 245);
  --bases-table-cell-background-disabled: rgb(245, 245, 245);
  --bases-table-cell-background-selected: rgba(30, 30, 31, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(32, 33, 34);
  --bases-table-group-background: rgb(245, 245, 245);
  --bases-table-header-background: rgb(245, 245, 245);
  --bases-table-header-background-hover: rgb(245, 245, 245);
  --bases-table-header-color: rgb(163, 163, 163);
  --bases-table-summary-background: rgb(245, 245, 245);
  --bases-table-summary-background-hover: rgb(245, 245, 245);
  --blockquote-border-color: rgb(32, 33, 34);
  --blur-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent));
  --canvas-background: rgb(245, 245, 245);
  --caret-color: rgb(0, 0, 0);
  --checkbox-border-color-hover: rgb(163, 163, 163);
  --checkbox-color: rgb(32, 33, 34);
  --checkbox-color-hover: rgb(35, 35, 36);
  --checkbox-marker-color: rgb(245, 245, 245);
  --checklist-done-color: rgb(163, 163, 163);
  --code-background: #ffffff;
  --code-border-color: rgb(245, 245, 245);
  --code-bracket-background: rgb(245, 245, 245);
  --code-normal: rgb(0, 0, 0);
  --code-punctuation: rgb(163, 163, 163);
  --collapse-icon-color-collapsed: rgb(30, 30, 31);
  --color-accent: rgb(30, 30, 31);
  --color-accent-1: rgb(32, 33, 34);
  --color-accent-2: rgb(35, 35, 36);
  --color-accent-hsl: 240, 2%, 12%;
  --divider-color: rgb(245, 245, 245);
  --divider-color-hover: rgb(32, 33, 34);
  --embed-block-shadow-hover: 0 0 0 1px rgb(245, 245, 245), inset 0 0 0 1px rgb(245, 245, 245);
  --embed-border-start: 2px solid rgb(32, 33, 34);
  --file-header-background: rgb(245, 245, 245);
  --file-header-background-focused: rgb(245, 245, 245);
  --file-header-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: rgb(0, 0, 0);
  --font-interface: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: Inter;
  --font-mermaid: '??', Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', Geist Mono, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: Geist Mono;
  --font-print: '??', '??', Geist, 'Arial';
  --font-text: '??', Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: Geist;
  --footnote-divider-color: rgb(245, 245, 245);
  --footnote-id-color: rgb(163, 163, 163);
  --footnote-input-background-active: rgb(245, 245, 245);
  --footnote-line-height: 1.75;
  --graph-node: rgb(163, 163, 163);
  --graph-node-focused: rgb(30, 30, 31);
  --graph-text: rgb(0, 0, 0);
  --h1-line-height: 2.25rem;
  --h1-size: 1.875rem;
  --h1-weight: 500;
  --h2-line-height: 1.3333333;
  --h2-size: 1.5em;
  --h2-weight: 500;
  --h3-line-height: 1.6;
  --h3-size: 1.25em;
  --h5-line-height: 1.75;
  --h6-line-height: 1.75;
  --he-weight: 500;
  --heading-spacing: 5.625rem;
  --hr-color: #353533;
  --icon-color: rgb(163, 163, 163);
  --icon-color-active: rgb(30, 30, 31);
  --icon-color-focused: rgb(0, 0, 0);
  --icon-color-hover: rgb(163, 163, 163);
  --inline-title-line-height: 2.25rem;
  --inline-title-size: 1.875rem;
  --inline-title-weight: 500;
  --interactive-accent: rgb(32, 33, 34);
  --interactive-accent-hover: rgb(35, 35, 36);
  --interactive-accent-hsl: 240, 2%, 12%;
  --line-height-normal: 1.75;
  --link-color: #000000;
  --link-color-hover: rgb(35, 35, 36);
  --link-external-color: #000000;
  --link-external-color-hover: rgb(35, 35, 36);
  --link-unresolved-color: rgb(30, 30, 31);
  --link-unresolved-decoration-color: rgba(30, 30, 31, 0.3);
  --list-marker-color: #d4d4d4;
  --list-marker-color-collapsed: rgb(30, 30, 31);
  --list-marker-color-hover: rgb(163, 163, 163);
  --menu-background: rgb(245, 245, 245);
  --metadata-border-color: rgb(245, 245, 245);
  --metadata-divider-color: rgb(245, 245, 245);
  --metadata-input-background-active: rgb(245, 245, 245);
  --metadata-input-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: rgb(0, 0, 0);
  --metadata-label-background-active: rgb(245, 245, 245);
  --metadata-label-font: '??', Inter, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: rgb(163, 163, 163);
  --metadata-label-text-color-hover: rgb(163, 163, 163);
  --metadata-property-background-active: rgb(245, 245, 245);
  --modal-background: rgb(245, 245, 245);
  --nav-heading-color: rgb(0, 0, 0);
  --nav-heading-color-collapsed-hover: rgb(163, 163, 163);
  --nav-heading-color-hover: rgb(0, 0, 0);
  --nav-item-background-active: rgb(245, 245, 245);
  --nav-item-background-hover: rgb(245, 245, 245);
  --nav-item-background-selected: rgba(30, 30, 31, 0.15);
  --nav-item-color: rgb(163, 163, 163);
  --nav-item-color-active: rgb(0, 0, 0);
  --nav-item-color-highlighted: rgb(30, 30, 31);
  --nav-item-color-hover: rgb(0, 0, 0);
  --nav-item-color-selected: rgb(0, 0, 0);
  --nav-tag-color-active: rgb(163, 163, 163);
  --nav-tag-color-hover: rgb(163, 163, 163);
  --p-spacing: 2.25rem;
  --pdf-background: rgb(245, 245, 245);
  --pdf-page-background: rgb(245, 245, 245);
  --pdf-sidebar-background: rgb(245, 245, 245);
  --pill-border-color: rgb(245, 245, 245);
  --pill-color: rgb(163, 163, 163);
  --pill-color-hover: rgb(0, 0, 0);
  --pill-color-remove-hover: rgb(30, 30, 31);
  --prompt-background: rgb(245, 245, 245);
  --raised-background: color-mix(in srgb, rgb(245, 245, 245) 65%, transparent) linear-gradient(rgb(245, 245, 245), color-mix(in srgb, rgb(245, 245, 245) 65%, transparent));
  --ribbon-background: rgb(245, 245, 245);
  --ribbon-background-collapsed: rgb(245, 245, 245);
  --search-clear-button-color: rgb(163, 163, 163);
  --search-icon-color: rgb(163, 163, 163);
  --search-result-background: rgb(245, 245, 245);
  --setting-group-heading-color: rgb(0, 0, 0);
  --setting-items-background: rgb(245, 245, 245);
  --setting-items-border-color: rgb(245, 245, 245);
  --slider-thumb-border-color: black;
  --slider-track-background: black;
  --status-bar-background: rgb(245, 245, 245);
  --status-bar-border-color: rgb(245, 245, 245);
  --status-bar-text-color: rgb(163, 163, 163);
  --suggestion-background: rgb(245, 245, 245);
  --tab-background-active: rgb(245, 245, 245);
  --tab-container-background: rgb(245, 245, 245);
  --tab-outline-color: rgb(245, 245, 245);
  --tab-switcher-background: rgb(245, 245, 245);
  --tab-switcher-menubar-background: linear-gradient(to top, rgb(245, 245, 245), transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(30, 30, 31);
  --tab-text-color-active: rgb(163, 163, 163);
  --tab-text-color-focused: rgb(163, 163, 163);
  --tab-text-color-focused-active: rgb(163, 163, 163);
  --tab-text-color-focused-active-current: rgb(0, 0, 0);
  --tab-text-color-focused-highlighted: rgb(30, 30, 31);
  --table-add-button-border-color: rgb(245, 245, 245);
  --table-border-color: rgb(245, 245, 245);
  --table-drag-handle-background-active: rgb(32, 33, 34);
  --table-header-border-color: rgb(245, 245, 245);
  --table-header-color: rgb(0, 0, 0);
  --table-selection: rgba(30, 30, 31, 0.1);
  --table-selection-border-color: rgb(32, 33, 34);
  --tag-background: rgba(30, 30, 31, 0.1);
  --tag-background-hover: rgba(30, 30, 31, 0.2);
  --tag-border-color: rgba(30, 30, 31, 0.15);
  --tag-border-color-hover: rgba(30, 30, 31, 0.15);
  --tag-color: rgb(30, 30, 31);
  --tag-color-hover: rgb(30, 30, 31);
  --text-accent: rgb(30, 30, 31);
  --text-accent-hover: rgb(35, 35, 36);
  --text-muted: rgb(163, 163, 163);
  --text-normal: rgb(0, 0, 0);
  --text-selection: #007bcf;
  --titlebar-background: rgb(245, 245, 245);
  --titlebar-background-focused: rgb(245, 245, 245);
  --titlebar-border-color: rgb(245, 245, 245);
  --titlebar-text-color: rgb(163, 163, 163);
  --titlebar-text-color-focused: rgb(0, 0, 0);
  --vault-profile-color: rgb(0, 0, 0);
  --vault-profile-color-hover: rgb(0, 0, 0);
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(245, 245, 245);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(163, 163, 163) none 0px;
  text-decoration: rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
}`,
    links: `body a.external, footer a {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: underline rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body a.internal.broken {
  color: rgb(30, 30, 31);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(30, 30, 31) none 0px;
  text-decoration: underline rgba(30, 30, 31, 0.3);
  text-decoration-color: rgba(30, 30, 31, 0.3);
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
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body blockquote {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-top: 36px;
  width: 190.719px;
}

body td {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}

body pre:has(> code) {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(32, 32, 34);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(32, 32, 34);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(163, 163, 163);
  text-decoration: line-through rgb(163, 163, 163);
  text-decoration-color: rgb(163, 163, 163);
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
    search: `body .search > .search-button {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(245, 245, 245);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(245, 245, 245);
  color: rgb(0, 0, 0);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(30, 30, 31, 0.1);
  border-bottom-color: rgba(30, 30, 31, 0.15);
  border-left-color: rgba(30, 30, 31, 0.15);
  border-right-color: rgba(30, 30, 31, 0.15);
  border-top-color: rgba(30, 30, 31, 0.15);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(30, 30, 31);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
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
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
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
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(163, 163, 163);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}`,
    footer: `body footer {
  background-color: rgb(245, 245, 245);
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(163, 163, 163);
  text-decoration: rgb(163, 163, 163);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

body .darkmode svg {
  color: rgb(163, 163, 163);
  stroke: rgb(163, 163, 163);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
}

body .breadcrumb-element p {
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(245, 245, 245);
  border-left-color: rgb(245, 245, 245);
  border-right-color: rgb(245, 245, 245);
  border-top-color: rgb(245, 245, 245);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Geist, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(245, 245, 245);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
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
  border-bottom-color: rgb(163, 163, 163);
  border-left-color: rgb(163, 163, 163);
  border-right-color: rgb(163, 163, 163);
  border-top-color: rgb(163, 163, 163);
  color: rgb(163, 163, 163);
  font-family: "??", Inter, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
  font-family: "??", "Geist Mono", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
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
