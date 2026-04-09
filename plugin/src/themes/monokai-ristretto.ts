import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "monokai-ristretto",
    modes: ["dark"],
    variations: [],
    fonts: [],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #403838 !important;
  --background-modifier-cover: rgba(0, 0, 0, 0.5) !important;
  --background-modifier-error: #fd6883 !important;
  --background-modifier-error-hover: #fd6883 !important;
  --background-modifier-form-field: #403838 !important;
  --background-modifier-form-field-highlighted: #403838 !important;
  --background-modifier-form-field-hover: #403838 !important;
  --background-modifier-success: #adda78 !important;
  --background-primary: #2c2525 !important;
  --background-primary-alt: #2c2525 !important;
  --background-secondary: #2c2525 !important;
  --background-secondary-alt: #211c1c !important;
  --bases-cards-background: #2c2525 !important;
  --bases-cards-cover-background: #2c2525 !important;
  --bases-cards-shadow: 0 0 0 1px #403838 !important;
  --bases-embed-border-color: #403838 !important;
  --bases-group-heading-property-color: #72696a !important;
  --bases-table-border-color: #403838 !important;
  --bases-table-cell-background-active: #2c2525 !important;
  --bases-table-cell-background-disabled: #2c2525 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #85dacc !important;
  --bases-table-group-background: #2c2525 !important;
  --bases-table-header-background: #2c2525 !important;
  --bases-table-header-color: #72696a !important;
  --bases-table-summary-background: #2c2525 !important;
  --blockquote-border-color: #85dacc !important;
  --blur-background: color-mix(in srgb, #403838 65%, transparent) linear-gradient(#403838, color-mix(in srgb, #403838 65%, transparent)) !important;
  --bodyFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #2c2525 !important;
  --canvas-card-label-color: #5b5353 !important;
  --caret-color: #e6d9db !important;
  --checkbox-border-color: #5b5353 !important;
  --checkbox-border-color-hover: #72696a !important;
  --checkbox-color: #85dacc !important;
  --checkbox-color-hover: #85dacc !important;
  --checkbox-marker-color: #2c2525 !important;
  --checklist-done-color: #72696a !important;
  --code-background: #2c2525 !important;
  --code-border-color: #403838 !important;
  --code-comment: #5b5353 !important;
  --code-normal: #e6d9db !important;
  --code-punctuation: #72696a !important;
  --codeFont: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #5b5353 !important;
  --collapse-icon-color-collapsed: #85dacc !important;
  --dark: #e6d9db !important;
  --darkgray: #e6d9db !important;
  --divider-color: #403838 !important;
  --divider-color-hover: #85dacc !important;
  --dropdown-background: #403838 !important;
  --dropdown-background-hover: #5b5353 !important;
  --embed-block-shadow-hover: 0 0 0 1px #403838, inset 0 0 0 1px #403838 !important;
  --embed-border-start: 2px solid #85dacc !important;
  --file-header-background: #2c2525 !important;
  --file-header-background-focused: #2c2525 !important;
  --flair-background: #403838 !important;
  --flair-color: #e6d9db !important;
  --font-mermaid: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace !important;
  --font-print: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, Arial' !important;
  --font-text: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif !important;
  --footnote-divider-color: #403838 !important;
  --footnote-id-color: #72696a !important;
  --footnote-id-color-no-occurrences: #5b5353 !important;
  --graph-node: #72696a !important;
  --graph-node-focused: #85dacc !important;
  --graph-node-unresolved: #5b5353 !important;
  --graph-text: #e6d9db !important;
  --gray: #72696a !important;
  --headerFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #5b5353 !important;
  --highlight: #f9cc6c !important;
  --hr-color: #403838 !important;
  --icon-color: #72696a !important;
  --icon-color-active: #85dacc !important;
  --icon-color-focused: #e6d9db !important;
  --icon-color-hover: #72696a !important;
  --input-date-separator: #5b5353 !important;
  --input-placeholder-color: #5b5353 !important;
  --interactive-accent: #85dacc !important;
  --interactive-accent-hover: #85dacc !important;
  --interactive-hover: #5b5353 !important;
  --interactive-normal: #403838 !important;
  --interactive-success: #adda78 !important;
  --light: #2c2525 !important;
  --lightgray: #2c2525 !important;
  --link-color: #85dacc !important;
  --link-color-hover: #85dacc !important;
  --link-external-color: #85dacc !important;
  --link-external-color-hover: #85dacc !important;
  --link-unresolved-color: #85dacc !important;
  --list-marker-color: #5b5353 !important;
  --list-marker-color-collapsed: #85dacc !important;
  --list-marker-color-hover: #72696a !important;
  --menu-background: #2c2525 !important;
  --metadata-border-color: #403838 !important;
  --metadata-divider-color: #403838 !important;
  --metadata-input-text-color: #e6d9db !important;
  --metadata-label-text-color: #72696a !important;
  --metadata-label-text-color-hover: #72696a !important;
  --modal-background: #2c2525 !important;
  --nav-collapse-icon-color: #5b5353 !important;
  --nav-collapse-icon-color-collapsed: #5b5353 !important;
  --nav-heading-color: #e6d9db !important;
  --nav-heading-color-collapsed: #5b5353 !important;
  --nav-heading-color-collapsed-hover: #72696a !important;
  --nav-heading-color-hover: #e6d9db !important;
  --nav-item-color: #72696a !important;
  --nav-item-color-active: #e6d9db !important;
  --nav-item-color-highlighted: #85dacc !important;
  --nav-item-color-hover: #e6d9db !important;
  --nav-item-color-selected: #e6d9db !important;
  --nav-tag-color: #5b5353 !important;
  --nav-tag-color-active: #72696a !important;
  --nav-tag-color-hover: #72696a !important;
  --pdf-background: #2c2525 !important;
  --pdf-page-background: #2c2525 !important;
  --pdf-shadow: 0 0 0 1px #403838 !important;
  --pdf-sidebar-background: #2c2525 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #403838 !important;
  --pill-border-color: #403838 !important;
  --pill-color: #72696a !important;
  --pill-color-hover: #e6d9db !important;
  --pill-color-remove: #5b5353 !important;
  --pill-color-remove-hover: #85dacc !important;
  --prompt-background: #2c2525 !important;
  --raised-background: color-mix(in srgb, #403838 65%, transparent) linear-gradient(#403838, color-mix(in srgb, #403838 65%, transparent)) !important;
  --ribbon-background: #2c2525 !important;
  --ribbon-background-collapsed: #2c2525 !important;
  --scrollbar-active-thumb-bg: rgba(114, 105, 106, 0.5) !important;
  --scrollbar-bg: rgba(114, 105, 106, 0.2) !important;
  --scrollbar-thumb-bg: rgba(114, 105, 106, 0.3) !important;
  --search-clear-button-color: #72696a !important;
  --search-icon-color: #72696a !important;
  --search-result-background: #2c2525 !important;
  --secondary: #85dacc !important;
  --setting-group-heading-color: #e6d9db !important;
  --setting-items-background: #2c2525 !important;
  --setting-items-border-color: #403838 !important;
  --slider-track-background: #403838 !important;
  --status-bar-background: #2c2525 !important;
  --status-bar-border-color: #403838 !important;
  --status-bar-text-color: #72696a !important;
  --suggestion-background: #2c2525 !important;
  --tab-background-active: #2c2525 !important;
  --tab-container-background: #2c2525 !important;
  --tab-outline-color: #403838 !important;
  --tab-switcher-background: #2c2525 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #2c2525, transparent) !important;
  --tab-text-color: #5b5353 !important;
  --tab-text-color-active: #72696a !important;
  --tab-text-color-focused: #72696a !important;
  --tab-text-color-focused-active: #72696a !important;
  --tab-text-color-focused-active-current: #e6d9db !important;
  --tab-text-color-focused-highlighted: #85dacc !important;
  --table-add-button-border-color: #403838 !important;
  --table-border-color: #403838 !important;
  --table-drag-handle-background-active: #85dacc !important;
  --table-drag-handle-color: #5b5353 !important;
  --table-drag-handle-color-active: #2c2525 !important;
  --table-header-border-color: #403838 !important;
  --table-header-color: #e6d9db !important;
  --table-selection-border-color: #85dacc !important;
  --tag-color: #85dacc !important;
  --tag-color-hover: #85dacc !important;
  --tertiary: #85dacc !important;
  --text-accent: #85dacc !important;
  --text-accent-hover: #85dacc !important;
  --text-error: #fd6883 !important;
  --text-error-hover: #fd6883 !important;
  --text-faint: #5b5353 !important;
  --text-highlight-bg: #f9cc6c !important;
  --text-highlight-bg-active: #f38d70 !important;
  --text-muted: #72696a !important;
  --text-normal: #e6d9db !important;
  --text-on-accent: #2c2525 !important;
  --text-selection: rgba(64, 56, 56, 0.5) !important;
  --textHighlight: #f9cc6c !important;
  --titleFont: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #2c2525 !important;
  --titlebar-background-focused: #211c1c !important;
  --titlebar-border-color: #403838 !important;
  --titlebar-text-color: #72696a !important;
  --titlebar-text-color-focused: #e6d9db !important;
  --vault-profile-color: #e6d9db !important;
  --vault-profile-color-hover: #e6d9db !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}

html body .bases-table {
  border-color: rgb(64, 56, 56);
}

html body .bases-table thead th {
  background-color: rgb(64, 56, 56);
  border-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
  font-weight: 700;
}

html body .canvas-node {
  border-color: rgb(230, 217, 219);
}

html body .canvas-node-content {
  color: rgb(230, 217, 219);
}

html body .canvas-node-file {
  color: rgb(230, 217, 219);
}

html body .canvas-node-group {
  border-color: rgb(230, 217, 219);
}

html body .canvas-sidebar {
  background-color: rgb(44, 37, 37);
  border-color: rgb(230, 217, 219);
}

html body .note-properties {
  border-color: rgb(64, 56, 56);
}

html body .note-properties-key {
  color: rgb(114, 105, 106);
}

html body .note-properties-row {
  border-color: rgb(114, 105, 106);
}

html body .note-properties-tags {
  color: rgb(133, 218, 204);
}

html body .note-properties-value {
  color: rgb(114, 105, 106);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 56, 56);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 37, 37);
  border-left-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
}

html body div#quartz-root {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration-color: rgb(230, 217, 219);
}

html body .page article p > em, html em {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration-color: rgb(230, 217, 219);
}

html body .page article p > i, html i {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration-color: rgb(230, 217, 219);
}

html body .page article p > strong, html strong {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration-color: rgb(230, 217, 219);
}

html body .text-highlight {
  background-color: rgb(249, 204, 108);
  color: rgb(44, 37, 37);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(44, 37, 37) none 0px;
  text-decoration-color: rgb(44, 37, 37);
}

html body del {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration-color: rgb(230, 217, 219);
}

html body h1.article-title {
  color: rgb(230, 217, 219);
}

html body li.task-list-item input[type="checkbox"] {
  border-color: rgb(91, 83, 83);
}

html body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(133, 218, 204);
  border-color: rgb(133, 218, 204);
}

html body p {
  color: rgb(114, 105, 106);
  outline: rgb(114, 105, 106) none 0px;
  text-decoration-color: rgb(114, 105, 106);
}`,
    links: `html body a.external, html footer a {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
  text-decoration-color: rgb(133, 218, 204);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
  text-decoration-color: rgb(133, 218, 204);
}

html body a.internal.broken {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
}`,
    lists: `html body dd {
  color: rgb(230, 217, 219);
}

html body dt {
  color: rgb(230, 217, 219);
}

html body ol > li {
  color: rgb(230, 217, 219);
}

html body ol.overflow {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body ul > li {
  color: rgb(230, 217, 219);
}

html body ul.overflow {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(133, 218, 204);
}

html body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body table {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

html body td {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
}

html body th {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
  font-weight: 700;
}

html body thead {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}

html body tr {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}`,
    code: `html body code {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}

html body pre:has(> code) {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}`,
    images: `html body audio {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body figcaption {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body img {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body video {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    embeds: `html body .file-embed {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
}

html body .footnotes {
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}

html body .transclude {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(133, 218, 204);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body .transclude-inner {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body input[type=checkbox] {
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
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
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
  color: rgb(230, 217, 219);
}

html body .search > .search-container > .search-space {
  background-color: rgb(44, 37, 37);
}

html body .search > .search-container > .search-space > * {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration-color: rgb(230, 217, 219);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 37, 37);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 37, 37);
  border-left-color: rgb(44, 37, 37);
  border-right-color: rgb(44, 37, 37);
  border-top-color: rgb(44, 37, 37);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(44, 37, 37);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(64, 56, 56);
  color: rgb(44, 37, 37);
}

html body .search > .search-container > .search-space > input {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(44, 37, 37);
  border-left-color: rgb(44, 37, 37);
  border-right-color: rgb(44, 37, 37);
  border-top-color: rgb(44, 37, 37);
  color: rgb(44, 37, 37);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(64, 56, 56);
  color: rgb(44, 37, 37);
}

html body a.internal.tag-link::before {
  color: rgb(133, 218, 204);
}

html body h1 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
}`,
    scrollbars: `html body .callout {
  --callout-color: 2, 122, 255;
}

html body ::-webkit-scrollbar {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

html body ::-webkit-scrollbar-track {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(230, 217, 219);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(230, 217, 219);
}`,
    toc: `html body details.toc summary::marker {
  color: rgb(230, 217, 219);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
}`,
    footer: `html body footer {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(114, 105, 106);
}

html body footer ul li a {
  color: rgb(114, 105, 106);
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(230, 217, 219);
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}

html body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 217, 219);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 217, 219);
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body li.section-li > .section .meta {
  color: rgb(230, 217, 219);
}

html body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 217, 219);
}

html body ul.section-ul {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
}

html body .darkmode svg {
  color: rgb(114, 105, 106);
  stroke: rgb(114, 105, 106);
}`,
    breadcrumbs: `html body .breadcrumb-container {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
}

html body .breadcrumb-element p {
  color: rgb(91, 83, 83);
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}

html body .metadata {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(114, 105, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(44, 37, 37);
}

html body .page-header h2.page-title {
  color: rgb(230, 217, 219);
}

html body abbr {
  color: rgb(230, 217, 219);
}

html body details {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body input[type=text] {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
  color: rgb(230, 217, 219);
}

html body kbd {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

html body sub {
  color: rgb(230, 217, 219);
}

html body summary {
  color: rgb(230, 217, 219);
}

html body sup {
  color: rgb(230, 217, 219);
}

html body ul.tags > li {
  color: rgb(133, 218, 204);
}`,
  },
  light: {},
};
