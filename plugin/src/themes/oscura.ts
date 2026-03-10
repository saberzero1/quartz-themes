import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oscura",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #32333B !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-error: #FF5C5C !important;
  --background-modifier-error-hover: #FF5C5C !important;
  --background-modifier-form-field: #232323 !important;
  --background-modifier-form-field-highlighted: #2C2C31 !important;
  --background-modifier-form-field-hover: #232323 !important;
  --background-modifier-success: #4EBE96 !important;
  --background-primary: #0B0B0F !important;
  --background-primary-alt: #0B0B0F !important;
  --background-secondary: #0B0B0F !important;
  --background-secondary-alt: #0B0B0F !important;
  --bases-cards-background: #0B0B0F !important;
  --bases-cards-cover-background: #0B0B0F !important;
  --bases-cards-shadow: 0 0 0 1px #32333B !important;
  --bases-embed-border-color: #32333B !important;
  --bases-group-heading-property-color: #46474F !important;
  --bases-table-border-color: #32333B !important;
  --bases-table-cell-background-active: #0B0B0F !important;
  --bases-table-cell-background-disabled: #0B0B0F !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #479FFA !important;
  --bases-table-group-background: #0B0B0F !important;
  --bases-table-header-background: #0B0B0F !important;
  --bases-table-header-color: #46474F !important;
  --bases-table-summary-background: #0B0B0F !important;
  --blockquote-border-color: #479FFA !important;
  --blur-background: color-mix(in srgb, #232323 65%, transparent) linear-gradient(#232323, color-mix(in srgb, #232323 65%, transparent)) !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #0B0B0F !important;
  --canvas-card-label-color: #32333B !important;
  --caret-color: #E6E6E6 !important;
  --checkbox-border-color: #32333B !important;
  --checkbox-border-color-hover: #46474F !important;
  --checkbox-color: #479FFA !important;
  --checkbox-color-hover: #479FFA !important;
  --checkbox-marker-color: #0B0B0F !important;
  --checklist-done-color: #46474F !important;
  --code-background: #0B0B0F !important;
  --code-border-color: #32333B !important;
  --code-comment: #32333B !important;
  --code-normal: #E6E6E6 !important;
  --code-punctuation: #46474F !important;
  --codeFont: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #32333B !important;
  --collapse-icon-color-collapsed: #479FFA !important;
  --dark: #E6E6E6 !important;
  --darkgray: #E6E6E6 !important;
  --divider-color: #32333B !important;
  --divider-color-hover: #479FFA !important;
  --dropdown-background: #232323 !important;
  --dropdown-background-hover: #2C2C31 !important;
  --embed-block-shadow-hover: 0 0 0 1px #32333B, inset 0 0 0 1px #32333B !important;
  --embed-border-start: 2px solid #479FFA !important;
  --file-header-background: #0B0B0F !important;
  --file-header-background-focused: #0B0B0F !important;
  --flair-background: #232323 !important;
  --flair-color: #E6E6E6 !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  --footnote-divider-color: #32333B !important;
  --footnote-id-color: #46474F !important;
  --footnote-id-color-no-occurrences: #32333B !important;
  --graph-node: #46474F !important;
  --graph-node-focused: #479FFA !important;
  --graph-node-unresolved: #32333B !important;
  --graph-text: #E6E6E6 !important;
  --gray: #46474F !important;
  --headerFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #32333B !important;
  --highlight: #5C6974 !important;
  --hr-color: #32333B !important;
  --icon-color: #46474F !important;
  --icon-color-active: #479FFA !important;
  --icon-color-focused: #E6E6E6 !important;
  --icon-color-hover: #46474F !important;
  --input-date-separator: #32333B !important;
  --input-placeholder-color: #32333B !important;
  --interactive-accent: #479FFA !important;
  --interactive-accent-hover: #479FFA !important;
  --interactive-hover: #2C2C31 !important;
  --interactive-normal: #232323 !important;
  --interactive-success: #4EBE96 !important;
  --light: #0B0B0F !important;
  --lightgray: #0B0B0F !important;
  --link-color: #479FFA !important;
  --link-color-hover: #479FFA !important;
  --link-external-color: #479FFA !important;
  --link-external-color-hover: #479FFA !important;
  --link-unresolved-color: #479FFA !important;
  --list-marker-color: #32333B !important;
  --list-marker-color-collapsed: #479FFA !important;
  --list-marker-color-hover: #46474F !important;
  --menu-background: #0B0B0F !important;
  --metadata-border-color: #32333B !important;
  --metadata-divider-color: #32333B !important;
  --metadata-input-text-color: #E6E6E6 !important;
  --metadata-label-text-color: #46474F !important;
  --metadata-label-text-color-hover: #46474F !important;
  --modal-background: #0B0B0F !important;
  --nav-collapse-icon-color: #32333B !important;
  --nav-collapse-icon-color-collapsed: #32333B !important;
  --nav-heading-color: #E6E6E6 !important;
  --nav-heading-color-collapsed: #32333B !important;
  --nav-heading-color-collapsed-hover: #46474F !important;
  --nav-heading-color-hover: #E6E6E6 !important;
  --nav-item-color: #46474F !important;
  --nav-item-color-active: #E6E6E6 !important;
  --nav-item-color-highlighted: #479FFA !important;
  --nav-item-color-hover: #E6E6E6 !important;
  --nav-item-color-selected: #E6E6E6 !important;
  --nav-tag-color: #32333B !important;
  --nav-tag-color-active: #46474F !important;
  --nav-tag-color-hover: #46474F !important;
  --pdf-background: #0B0B0F !important;
  --pdf-page-background: #0B0B0F !important;
  --pdf-shadow: 0 0 0 1px #32333B !important;
  --pdf-sidebar-background: #0B0B0F !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #32333B !important;
  --pill-border-color: #32333B !important;
  --pill-color: #46474F !important;
  --pill-color-hover: #E6E6E6 !important;
  --pill-color-remove: #32333B !important;
  --pill-color-remove-hover: #479FFA !important;
  --prompt-background: #0B0B0F !important;
  --raised-background: color-mix(in srgb, #232323 65%, transparent) linear-gradient(#232323, color-mix(in srgb, #232323 65%, transparent)) !important;
  --ribbon-background: #0B0B0F !important;
  --ribbon-background-collapsed: #0B0B0F !important;
  --scrollbar-active-thumb-bg: rgba(90, 91, 99, 0.5) !important;
  --scrollbar-bg: rgba(90, 91, 99, 0.2) !important;
  --scrollbar-thumb-bg: rgba(90, 91, 99, 0.3) !important;
  --search-clear-button-color: #46474F !important;
  --search-icon-color: #46474F !important;
  --search-result-background: #0B0B0F !important;
  --secondary: #479FFA !important;
  --setting-group-heading-color: #E6E6E6 !important;
  --setting-items-background: #0B0B0F !important;
  --setting-items-border-color: #32333B !important;
  --slider-track-background: #32333B !important;
  --status-bar-background: #0B0B0F !important;
  --status-bar-border-color: #32333B !important;
  --status-bar-text-color: #46474F !important;
  --suggestion-background: #0B0B0F !important;
  --tab-background-active: #0B0B0F !important;
  --tab-container-background: #0B0B0F !important;
  --tab-outline-color: #32333B !important;
  --tab-switcher-background: #0B0B0F !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0B0B0F, transparent) !important;
  --tab-text-color: #32333B !important;
  --tab-text-color-active: #46474F !important;
  --tab-text-color-focused: #46474F !important;
  --tab-text-color-focused-active: #46474F !important;
  --tab-text-color-focused-active-current: #E6E6E6 !important;
  --tab-text-color-focused-highlighted: #479FFA !important;
  --table-add-button-border-color: #32333B !important;
  --table-border-color: #32333B !important;
  --table-drag-handle-background-active: #479FFA !important;
  --table-drag-handle-color: #32333B !important;
  --table-drag-handle-color-active: #0B0B0F !important;
  --table-header-border-color: #32333B !important;
  --table-header-color: #E6E6E6 !important;
  --table-selection-border-color: #479FFA !important;
  --tag-color: #479FFA !important;
  --tag-color-hover: #479FFA !important;
  --tertiary: #479FFA !important;
  --text-accent: #479FFA !important;
  --text-accent-hover: #479FFA !important;
  --text-error: #FF5C5C !important;
  --text-error-hover: #FF5C5C !important;
  --text-faint: #32333B !important;
  --text-highlight-bg: #5C6974 !important;
  --text-highlight-bg-active: #5C6974 !important;
  --text-muted: #46474F !important;
  --text-normal: #E6E6E6 !important;
  --text-on-accent: #0B0B0F !important;
  --text-selection: rgba(90, 91, 99, 0.5) !important;
  --textHighlight: #5C6974 !important;
  --titleFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0B0B0F !important;
  --titlebar-background-focused: #0B0B0F !important;
  --titlebar-border-color: #32333B !important;
  --titlebar-text-color: #46474F !important;
  --titlebar-text-color-focused: #E6E6E6 !important;
  --vault-profile-color: #E6E6E6 !important;
  --vault-profile-color-hover: #E6E6E6 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 51, 59);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 11, 15);
  border-left-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

html body div#quartz-root {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body .page article p > em, html em {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body .page article p > i, html i {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body .page article p > strong, html strong {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body .text-highlight {
  background-color: rgb(92, 105, 116);
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body del {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: line-through rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body p {
  color: rgb(70, 71, 79);
  outline: rgb(70, 71, 79) none 0px;
  text-decoration: rgb(70, 71, 79);
  text-decoration-color: rgb(70, 71, 79);
}`,
    links: `html body a.external, html footer a {
  color: rgb(71, 159, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 159, 250) none 0px;
  text-decoration: underline rgb(71, 159, 250);
  text-decoration-color: rgb(71, 159, 250);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 159, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 159, 250) none 0px;
  text-decoration: underline rgb(71, 159, 250);
  text-decoration-color: rgb(71, 159, 250);
}

html body a.internal.broken {
  color: rgb(71, 159, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 159, 250) none 0px;
}`,
    lists: `html body dd {
  color: rgb(230, 230, 230);
}

html body dt {
  color: rgb(230, 230, 230);
}

html body ol > li {
  color: rgb(230, 230, 230);
}

html body ol.overflow {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body ul > li {
  color: rgb(230, 230, 230);
}

html body ul.overflow {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(71, 159, 250);
  text-decoration: rgb(71, 159, 250);
}

html body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body table {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

html body td {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

html body th {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}`,
    code: `html body code {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

html body pre:has(> code) {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}`,
    images: `html body audio {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body figcaption {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body img {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body video {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
}

html body .footnotes {
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html body .transclude {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(71, 159, 250);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body .transclude-inner {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(71, 159, 250);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(70, 71, 79);
  text-decoration: line-through rgb(70, 71, 79);
  text-decoration-color: rgb(70, 71, 79);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}`,
    search: `html body .search > .search-button {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

html body .search > .search-container > .search-space {
  background-color: rgb(11, 11, 15);
}

html body .search > .search-container > .search-space > * {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 230, 230);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(230, 230, 230);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(44, 44, 49);
  color: rgb(230, 230, 230);
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(44, 44, 49);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(44, 44, 49);
  color: rgb(230, 230, 230);
}

html body a.internal.tag-link::before {
  color: rgb(71, 159, 250);
}

html body h1 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

html body ::-webkit-scrollbar-track {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
}`,
    footer: `html body footer {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(70, 71, 79);
}

html body footer ul li a {
  color: rgb(70, 71, 79);
  text-decoration: rgb(70, 71, 79);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(230, 230, 230);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 230, 230);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body li.section-li > .section .meta {
  color: rgb(230, 230, 230);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

html body ul.section-ul {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
}

html body .darkmode svg {
  color: rgb(70, 71, 79);
  stroke: rgb(70, 71, 79);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
}

html body .breadcrumb-element p {
  color: rgb(50, 51, 59);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

html body .metadata {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(70, 71, 79);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(11, 11, 15);
}

html body .page-header h2.page-title {
  color: rgb(230, 230, 230);
}

html body abbr {
  color: rgb(230, 230, 230);
  text-decoration: underline dotted rgb(230, 230, 230);
}

html body details {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body input[type=text] {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

html body kbd {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

html body sub {
  color: rgb(230, 230, 230);
}

html body summary {
  color: rgb(230, 230, 230);
}

html body sup {
  color: rgb(230, 230, 230);
}`,
  },
  light: {},
};
