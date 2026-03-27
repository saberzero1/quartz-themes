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
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body .page article p > em, html em {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body .page article p > i, html i {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body .page article p > strong, html strong {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body .text-highlight {
  background-color: rgb(249, 204, 108);
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body del {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: line-through rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body p {
  color: rgb(114, 105, 106);
  outline: rgb(114, 105, 106) none 0px;
  text-decoration: rgb(114, 105, 106);
  text-decoration-color: rgb(114, 105, 106);
}`,
    links: `html body a.external, html footer a {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
  text-decoration: underline rgb(133, 218, 204);
  text-decoration-color: rgb(133, 218, 204);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
  text-decoration: underline rgb(133, 218, 204);
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
  text-decoration: rgb(133, 218, 204);
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
  border-left-color: rgb(133, 218, 204);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(114, 105, 106);
  text-decoration: line-through rgb(114, 105, 106);
  text-decoration-color: rgb(114, 105, 106);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
}

html body li.task-list-item[data-task='!'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(44, 37, 37);
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
  text-decoration: rgb(230, 217, 219);
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
    scrollbars: `html body ::-webkit-scrollbar {
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
  text-decoration: rgb(230, 217, 219);
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
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
  text-decoration: rgb(114, 105, 106);
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
  text-decoration: rgb(230, 217, 219);
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
  text-decoration: rgb(230, 217, 219);
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
  text-decoration: underline dotted rgb(230, 217, 219);
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
}`,
  },
  light: {},
};
