import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "sandstorm",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["flow-circular"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #0f0a07 !important;
  --background-primary: #0f0a07 !important;
  --background-secondary: #191510 !important;
  --background-secondary-alt: #0f0a07 !important;
  --bases-cards-background: #0f0a07 !important;
  --bases-cards-group-padding: 12px !important;
  --bases-cards-shadow: 0 0 0 1px #0f0a07 !important;
  --bases-cards-text-size: 0.875em !important;
  --bases-embed-border-color: #0f0a07 !important;
  --bases-group-heading-property-color: #d8c2b4 !important;
  --bases-table-border-color: #0f0a07 !important;
  --bases-table-cell-background-active: #0f0a07 !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #93684e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #93684e !important;
  --bases-table-header-background: #0f0a07 !important;
  --bases-table-header-color: #d8c2b4 !important;
  --bases-table-summary-background: #0f0a07 !important;
  --bases-table-text-size: 0.875em !important;
  --blockquote-border-color: #93684e !important;
  --blur-background: color-mix(in srgb, #0f0a07 65%, transparent) linear-gradient(#0f0a07, color-mix(in srgb, #0f0a07 65%, transparent)) !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #b08c75 !important;
  --canvas-background: #0f0a07 !important;
  --canvas-card-label-color: #93684e !important;
  --canvas-dot-pattern: #0f0a07 !important;
  --caret-color: #dfccc3 !important;
  --checkbox-border-color: #93684e !important;
  --checkbox-border-color-hover: #d8c2b4 !important;
  --checkbox-color: #93684e !important;
  --checkbox-color-hover: #93684e !important;
  --checkbox-marker-color: #0f0a07 !important;
  --checklist-done-color: #d8c2b4 !important;
  --code-border-color: #0f0a07 !important;
  --code-comment: #93684e !important;
  --code-normal: #dfccc3 !important;
  --code-punctuation: #d8c2b4 !important;
  --codeFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #93684e !important;
  --collapse-icon-color-collapsed: #93684e !important;
  --color-accent: #93684e !important;
  --color-accent-1: #93684e !important;
  --color-accent-2: #93684e !important;
  --color-base-00: #0f0a07 !important;
  --color-base-100: #dfccc3 !important;
  --color-base-20: #191510 !important;
  --color-base-30: #0f0a07 !important;
  --color-base-50: #93684e !important;
  --color-base-70: #d8c2b4 !important;
  --dark: #dfccc3 !important;
  --darkgray: #dfccc3 !important;
  --divider-color: #0f0a07 !important;
  --divider-color-hover: #93684e !important;
  --dropdown-background: #0f0a07 !important;
  --embed-block-shadow-hover: 0 0 0 1px #0f0a07, inset 0 0 0 1px #0f0a07 !important;
  --embed-border-start: 2px solid #93684e !important;
  --file-header-background: #0f0a07 !important;
  --file-header-background-focused: #0f0a07 !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: #0f0a07 !important;
  --flair-color: #dfccc3 !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #0f0a07 !important;
  --footnote-id-color: #d8c2b4 !important;
  --footnote-id-color-no-occurrences: #93684e !important;
  --graph-node: #d8c2b4 !important;
  --graph-node-focused: #93684e !important;
  --graph-node-unresolved: #93684e !important;
  --graph-text: #dfccc3 !important;
  --gray: #d8c2b4 !important;
  --h1-size: 1.802em !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.424em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.266em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #93684e !important;
  --hr-color: #0f0a07 !important;
  --icon-color: #d8c2b4 !important;
  --icon-color-active: #93684e !important;
  --icon-color-focused: #dfccc3 !important;
  --icon-color-hover: #d8c2b4 !important;
  --inline-title-size: 1.802em !important;
  --input-date-separator: #93684e !important;
  --input-placeholder-color: #93684e !important;
  --interactive-accent: #93684e !important;
  --interactive-accent-hover: #93684e !important;
  --interactive-normal: #0f0a07 !important;
  --italic-color: #b08c75 !important;
  --light: #0f0a07 !important;
  --lightgray: #191510 !important;
  --link-color: #93684e !important;
  --link-color-hover: #93684e !important;
  --link-external-color: #93684e !important;
  --link-external-color-hover: #93684e !important;
  --link-unresolved-color: #93684e !important;
  --list-marker-color: #93684e !important;
  --list-marker-color-collapsed: #93684e !important;
  --list-marker-color-hover: #d8c2b4 !important;
  --menu-background: #191510 !important;
  --metadata-border-color: #0f0a07 !important;
  --metadata-divider-color: #0f0a07 !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #dfccc3 !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #d8c2b4 !important;
  --metadata-label-text-color-hover: #d8c2b4 !important;
  --modal-background: #0f0a07 !important;
  --nav-collapse-icon-color: #93684e !important;
  --nav-collapse-icon-color-collapsed: #93684e !important;
  --nav-heading-color: #dfccc3 !important;
  --nav-heading-color-collapsed: #93684e !important;
  --nav-heading-color-collapsed-hover: #d8c2b4 !important;
  --nav-heading-color-hover: #dfccc3 !important;
  --nav-item-color: #d8c2b4 !important;
  --nav-item-color-active: #dfccc3 !important;
  --nav-item-color-highlighted: #93684e !important;
  --nav-item-color-hover: #dfccc3 !important;
  --nav-item-color-selected: #dfccc3 !important;
  --nav-tag-color: #93684e !important;
  --nav-tag-color-active: #d8c2b4 !important;
  --nav-tag-color-hover: #d8c2b4 !important;
  --pdf-background: #0f0a07 !important;
  --pdf-page-background: #0f0a07 !important;
  --pdf-shadow: 0 0 0 1px #0f0a07 !important;
  --pdf-sidebar-background: #0f0a07 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #0f0a07 !important;
  --pill-border-color: #0f0a07 !important;
  --pill-color: #d8c2b4 !important;
  --pill-color-hover: #dfccc3 !important;
  --pill-color-remove: #93684e !important;
  --pill-color-remove-hover: #93684e !important;
  --prompt-background: #0f0a07 !important;
  --raised-background: color-mix(in srgb, #0f0a07 65%, transparent) linear-gradient(#0f0a07, color-mix(in srgb, #0f0a07 65%, transparent)) !important;
  --ribbon-background: #191510 !important;
  --ribbon-background-collapsed: #0f0a07 !important;
  --search-clear-button-color: #d8c2b4 !important;
  --search-icon-color: #d8c2b4 !important;
  --search-result-background: #0f0a07 !important;
  --secondary: #93684e !important;
  --setting-group-heading-color: #dfccc3 !important;
  --setting-items-border-color: #0f0a07 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #0f0a07 !important;
  --status-bar-background: #191510 !important;
  --status-bar-border-color: #0f0a07 !important;
  --status-bar-text-color: #d8c2b4 !important;
  --suggestion-background: #0f0a07 !important;
  --tab-background-active: #0f0a07 !important;
  --tab-container-background: #191510 !important;
  --tab-outline-color: #0f0a07 !important;
  --tab-switcher-background: #191510 !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #93684e !important;
  --tab-text-color: #93684e !important;
  --tab-text-color-active: #d8c2b4 !important;
  --tab-text-color-focused: #d8c2b4 !important;
  --tab-text-color-focused-active: #d8c2b4 !important;
  --tab-text-color-focused-active-current: #dfccc3 !important;
  --tab-text-color-focused-highlighted: #93684e !important;
  --table-add-button-border-color: #0f0a07 !important;
  --table-border-color: #0f0a07 !important;
  --table-drag-handle-background-active: #93684e !important;
  --table-drag-handle-color: #93684e !important;
  --table-header-border-color: #0f0a07 !important;
  --table-header-color: #dfccc3 !important;
  --table-selection-border-color: #93684e !important;
  --tag-color: #93684e !important;
  --tag-color-hover: #93684e !important;
  --tertiary: #93684e !important;
  --text-accent: #93684e !important;
  --text-accent-hover: #93684e !important;
  --text-faint: #93684e !important;
  --text-muted: #d8c2b4 !important;
  --text-normal: #dfccc3 !important;
  --text-selection: #503a2c !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #191510 !important;
  --titlebar-background-focused: #0f0a07 !important;
  --titlebar-border-color: #0f0a07 !important;
  --titlebar-text-color: #d8c2b4 !important;
  --titlebar-text-color-focused: #dfccc3 !important;
  --vault-profile-color: #dfccc3 !important;
  --vault-profile-color-hover: #dfccc3 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(25, 21, 16);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(25, 21, 16);
  border-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .note-properties-tags {
  color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(25, 21, 16);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(25, 21, 16);
  border-left-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 204, 195) none 0px;
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body del {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 204, 195) none 0px;
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(147, 104, 78);
  border-color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body p {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(216, 194, 180) none 0px;
  text-decoration-color: rgb(216, 194, 180);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration-color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration-color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body dt {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body table {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(147, 104, 78);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(147, 104, 78);
  border-top-color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(223, 204, 195);
  text-decoration-color: rgb(223, 204, 195);
}`,
    callouts: `html[saved-theme="dark"] body .callout[data-callout="abstract"] {
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
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(223, 204, 195);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(223, 204, 195) none 0px;
  text-decoration-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  background-color: rgb(15, 10, 7);
  border-bottom-color: rgb(25, 21, 16);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.tag-link::before {
  color: rgb(147, 104, 78);
}

html[saved-theme="dark"] body h1 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h4 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h5 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h6 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(15, 10, 7) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(15, 10, 7);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(223, 204, 195);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(25, 21, 16);
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(216, 194, 180);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(223, 204, 195);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(216, 194, 180);
  stroke: rgb(216, 194, 180);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(147, 104, 78);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(15, 10, 7);
  border-left-color: rgb(15, 10, 7);
  border-right-color: rgb(15, 10, 7);
  border-top-color: rgb(15, 10, 7);
  color: rgb(216, 194, 180);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(25, 21, 16);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(223, 204, 195);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(216, 194, 180);
  border-left-color: rgb(216, 194, 180);
  border-right-color: rgb(216, 194, 180);
  border-top-color: rgb(216, 194, 180);
  color: rgb(216, 194, 180);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(223, 204, 195);
  border-left-color: rgb(223, 204, 195);
  border-right-color: rgb(223, 204, 195);
  border-top-color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body sub {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body summary {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body sup {
  color: rgb(223, 204, 195);
}

html[saved-theme="dark"] body ul.tags > li {
  color: rgb(147, 104, 78);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #f2ebe4 !important;
  --background-modifier-form-field: #f2ebe4 !important;
  --background-modifier-form-field-hover: #f2ebe4 !important;
  --background-primary: #f2ebe4 !important;
  --background-primary-alt: #e2d6cd !important;
  --background-secondary: #e2d6cd !important;
  --background-secondary-alt: #dcccc0 !important;
  --bases-cards-background: #f2ebe4 !important;
  --bases-cards-cover-background: #e2d6cd !important;
  --bases-cards-group-padding: 12px !important;
  --bases-cards-shadow: 0 0 0 1px #f2ebe4 !important;
  --bases-cards-text-size: 0.875em !important;
  --bases-embed-border-color: #f2ebe4 !important;
  --bases-group-heading-property-color: #2a2119 !important;
  --bases-table-border-color: #f2ebe4 !important;
  --bases-table-cell-background-active: #f2ebe4 !important;
  --bases-table-cell-background-disabled: #e2d6cd !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #93684e !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #93684e !important;
  --bases-table-group-background: #e2d6cd !important;
  --bases-table-header-background: #f2ebe4 !important;
  --bases-table-header-color: #2a2119 !important;
  --bases-table-summary-background: #f2ebe4 !important;
  --bases-table-text-size: 0.875em !important;
  --blockquote-border-color: #93684e !important;
  --blur-background: color-mix(in srgb, #f2ebe4 65%, transparent) linear-gradient(#f2ebe4, color-mix(in srgb, #f2ebe4 65%, transparent)) !important;
  --bodyFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-color: #b08c75 !important;
  --canvas-background: #f2ebe4 !important;
  --canvas-card-label-color: #93684e !important;
  --canvas-dot-pattern: #f2ebe4 !important;
  --caret-color: #231915 !important;
  --checkbox-border-color: #93684e !important;
  --checkbox-border-color-hover: #2a2119 !important;
  --checkbox-color: #93684e !important;
  --checkbox-color-hover: #93684e !important;
  --checkbox-marker-color: #f2ebe4 !important;
  --checklist-done-color: #2a2119 !important;
  --code-background: #e2d6cd !important;
  --code-border-color: #f2ebe4 !important;
  --code-comment: #93684e !important;
  --code-normal: #231915 !important;
  --code-punctuation: #2a2119 !important;
  --codeFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #93684e !important;
  --collapse-icon-color-collapsed: #93684e !important;
  --color-accent: #93684e !important;
  --color-accent-1: #93684e !important;
  --color-accent-2: #93684e !important;
  --color-base-00: #f2ebe4 !important;
  --color-base-05: #dcccc0 !important;
  --color-base-10: #e2d6cd !important;
  --color-base-100: #231915 !important;
  --color-base-20: #e2d6cd !important;
  --color-base-30: #f2ebe4 !important;
  --color-base-50: #93684e !important;
  --color-base-70: #2a2119 !important;
  --dark: #231915 !important;
  --darkgray: #231915 !important;
  --divider-color: #f2ebe4 !important;
  --divider-color-hover: #93684e !important;
  --dropdown-background: #f2ebe4 !important;
  --dropdown-background-hover: #e2d6cd !important;
  --embed-block-shadow-hover: 0 0 0 1px #f2ebe4, inset 0 0 0 1px #f2ebe4 !important;
  --embed-border-start: 2px solid #93684e !important;
  --file-header-background: #f2ebe4 !important;
  --file-header-background-focused: #f2ebe4 !important;
  --file-header-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-margins: 32px !important;
  --flair-background: #f2ebe4 !important;
  --flair-color: #231915 !important;
  --font-default: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-mermaid: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --footnote-divider-color: #f2ebe4 !important;
  --footnote-id-color: #2a2119 !important;
  --footnote-id-color-no-occurrences: #93684e !important;
  --graph-node: #2a2119 !important;
  --graph-node-focused: #93684e !important;
  --graph-node-unresolved: #93684e !important;
  --graph-text: #231915 !important;
  --gray: #2a2119 !important;
  --h1-size: 1.802em !important;
  --h2-size: 1.602em !important;
  --h2-weight: 600 !important;
  --h3-size: 1.424em !important;
  --h3-weight: 600 !important;
  --h4-size: 1.266em !important;
  --h4-weight: 600 !important;
  --h5-size: 1.125em !important;
  --h5-weight: 600 !important;
  --headerFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #93684e !important;
  --hr-color: #f2ebe4 !important;
  --icon-color: #2a2119 !important;
  --icon-color-active: #93684e !important;
  --icon-color-focused: #231915 !important;
  --icon-color-hover: #2a2119 !important;
  --inline-title-size: 1.802em !important;
  --input-date-separator: #93684e !important;
  --input-placeholder-color: #93684e !important;
  --interactive-accent: #93684e !important;
  --interactive-accent-hover: #93684e !important;
  --interactive-hover: #e2d6cd !important;
  --interactive-normal: #f2ebe4 !important;
  --italic-color: #b08c75 !important;
  --light: #f2ebe4 !important;
  --lightgray: #e2d6cd !important;
  --link-color: #93684e !important;
  --link-color-hover: #93684e !important;
  --link-external-color: #93684e !important;
  --link-external-color-hover: #93684e !important;
  --link-unresolved-color: #93684e !important;
  --list-marker-color: #93684e !important;
  --list-marker-color-collapsed: #93684e !important;
  --list-marker-color-hover: #2a2119 !important;
  --menu-background: #e2d6cd !important;
  --metadata-border-color: #f2ebe4 !important;
  --metadata-divider-color: #f2ebe4 !important;
  --metadata-input-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #231915 !important;
  --metadata-label-font: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #2a2119 !important;
  --metadata-label-text-color-hover: #2a2119 !important;
  --modal-background: #f2ebe4 !important;
  --nav-collapse-icon-color: #93684e !important;
  --nav-collapse-icon-color-collapsed: #93684e !important;
  --nav-heading-color: #231915 !important;
  --nav-heading-color-collapsed: #93684e !important;
  --nav-heading-color-collapsed-hover: #2a2119 !important;
  --nav-heading-color-hover: #231915 !important;
  --nav-item-color: #2a2119 !important;
  --nav-item-color-active: #231915 !important;
  --nav-item-color-highlighted: #93684e !important;
  --nav-item-color-hover: #231915 !important;
  --nav-item-color-selected: #231915 !important;
  --nav-tag-color: #93684e !important;
  --nav-tag-color-active: #2a2119 !important;
  --nav-tag-color-hover: #2a2119 !important;
  --pdf-background: #f2ebe4 !important;
  --pdf-page-background: #f2ebe4 !important;
  --pdf-sidebar-background: #f2ebe4 !important;
  --pill-border-color: #f2ebe4 !important;
  --pill-color: #2a2119 !important;
  --pill-color-hover: #231915 !important;
  --pill-color-remove: #93684e !important;
  --pill-color-remove-hover: #93684e !important;
  --prompt-background: #f2ebe4 !important;
  --raised-background: color-mix(in srgb, #f2ebe4 65%, transparent) linear-gradient(#f2ebe4, color-mix(in srgb, #f2ebe4 65%, transparent)) !important;
  --ribbon-background: #e2d6cd !important;
  --ribbon-background-collapsed: #f2ebe4 !important;
  --search-clear-button-color: #2a2119 !important;
  --search-icon-color: #2a2119 !important;
  --search-result-background: #f2ebe4 !important;
  --secondary: #93684e !important;
  --setting-group-heading-color: #231915 !important;
  --setting-items-background: #e2d6cd !important;
  --setting-items-border-color: #f2ebe4 !important;
  --shadow-l: 0px 1.8px 7.3px rgba(0, 0, 0, 0.071), 0px 6.3px 24.7px rgba(0, 0, 0, 0.112), 0px 30px 90px rgba(0, 0, 0, 0.2) !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #f2ebe4 !important;
  --status-bar-background: #e2d6cd !important;
  --status-bar-border-color: #f2ebe4 !important;
  --status-bar-text-color: #2a2119 !important;
  --suggestion-background: #f2ebe4 !important;
  --tab-background-active: #f2ebe4 !important;
  --tab-container-background: #e2d6cd !important;
  --tab-outline-color: #f2ebe4 !important;
  --tab-switcher-background: #e2d6cd !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px #93684e !important;
  --tab-text-color: #93684e !important;
  --tab-text-color-active: #2a2119 !important;
  --tab-text-color-focused: #2a2119 !important;
  --tab-text-color-focused-active: #2a2119 !important;
  --tab-text-color-focused-active-current: #231915 !important;
  --tab-text-color-focused-highlighted: #93684e !important;
  --table-add-button-border-color: #f2ebe4 !important;
  --table-border-color: #f2ebe4 !important;
  --table-drag-handle-background-active: #93684e !important;
  --table-drag-handle-color: #93684e !important;
  --table-header-border-color: #f2ebe4 !important;
  --table-header-color: #231915 !important;
  --table-selection-border-color: #93684e !important;
  --tag-color: #93684e !important;
  --tag-color-hover: #93684e !important;
  --tertiary: #93684e !important;
  --text-accent: #93684e !important;
  --text-accent-hover: #93684e !important;
  --text-faint: #93684e !important;
  --text-muted: #2a2119 !important;
  --text-normal: #231915 !important;
  --text-selection: #c6a794 !important;
  --titleFont: ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #e2d6cd !important;
  --titlebar-background-focused: #dcccc0 !important;
  --titlebar-border-color: #f2ebe4 !important;
  --titlebar-text-color: #2a2119 !important;
  --titlebar-text-color-focused: #231915 !important;
  --vault-profile-color: #231915 !important;
  --vault-profile-color-hover: #231915 !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(226, 214, 205);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(242, 235, 228);
  border-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .note-properties-tags {
  color: rgb(147, 104, 78);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(226, 214, 205);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(226, 214, 205);
  border-left-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(176, 140, 117);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(176, 140, 117) none 0px;
  text-decoration-color: rgb(176, 140, 117);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(35, 25, 21) none 0px;
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body del {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(35, 25, 21) none 0px;
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  border-color: rgb(147, 104, 78);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(147, 104, 78);
  border-color: rgb(147, 104, 78);
}

html[saved-theme="light"] body p {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(42, 33, 25) none 0px;
  text-decoration-color: rgb(42, 33, 25);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration-color: rgb(147, 104, 78);
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
  text-decoration-color: rgb(147, 104, 78);
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(147, 104, 78);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(147, 104, 78) none 0px;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body dt {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body ol > li {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body ul > li {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(147, 104, 78);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body table {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body pre:has(> code) {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body figcaption {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(147, 104, 78);
  border-left-color: rgb(147, 104, 78);
  border-right-color: rgb(147, 104, 78);
  border-top-color: rgb(147, 104, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(35, 25, 21);
  text-decoration-color: rgb(35, 25, 21);
}`,
    callouts: `html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
}

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
}

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
}

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
}

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
}

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
}

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(35, 25, 21);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(242, 235, 228);
  box-shadow: rgba(0, 0, 0, 0.07) 0px 1.8px 7.3px 0px, rgba(0, 0, 0, 0.114) 0px 6.3px 24.7px 0px, rgba(0, 0, 0, 0.2) 0px 30px 90px 0px;
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(35, 25, 21) none 0px;
  text-decoration-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(226, 214, 205);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.tag-link::before {
  color: rgb(147, 104, 78);
}

html[saved-theme="light"] body h1 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(242, 235, 228) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(242, 235, 228);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(35, 25, 21);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(42, 33, 25);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(35, 25, 21);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(42, 33, 25);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(42, 33, 25);
  stroke: rgb(42, 33, 25);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(147, 104, 78);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(242, 235, 228);
  border-left-color: rgb(242, 235, 228);
  border-right-color: rgb(242, 235, 228);
  border-top-color: rgb(242, 235, 228);
  color: rgb(42, 33, 25);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  margin-bottom: 16px;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
  font-family: "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(226, 214, 205);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(35, 25, 21);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(42, 33, 25);
  border-left-color: rgb(42, 33, 25);
  border-right-color: rgb(42, 33, 25);
  border-top-color: rgb(42, 33, 25);
  color: rgb(42, 33, 25);
  font-family: "??", "??", "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", Roboto, Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
  background-color: rgb(226, 214, 205);
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(35, 25, 21);
  border-left-color: rgb(35, 25, 21);
  border-right-color: rgb(35, 25, 21);
  border-top-color: rgb(35, 25, 21);
}

html[saved-theme="light"] body sub {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body summary {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body sup {
  color: rgb(35, 25, 21);
}

html[saved-theme="light"] body ul.tags > li {
  color: rgb(147, 104, 78);
}`,
  },
};
