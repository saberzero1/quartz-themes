import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "gummy-revived",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["peace-sans", "space-grotesk"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #1F1F1F !important;
  --background-modifier-border-focus: #1F1F1F !important;
  --background-modifier-border-hover: #383838 !important;
  --background-modifier-form-field: #1F1F1F !important;
  --background-modifier-form-field-hover: #1F1F1F !important;
  --background-primary: #090909 !important;
  --background-primary-alt: #1F1F1F !important;
  --background-secondary: #000000 !important;
  --background-secondary-alt: #1F1F1F !important;
  --bases-cards-background: #090909 !important;
  --bases-cards-cover-background: #1F1F1F !important;
  --bases-cards-shadow: 0 0 0 1px #1F1F1F !important;
  --bases-cards-shadow-hover: 0 0 0 1px #383838 !important;
  --bases-embed-border-color: #1F1F1F !important;
  --bases-group-heading-property-color: #808080 !important;
  --bases-table-border-color: #1F1F1F !important;
  --bases-table-cell-background-active: #090909 !important;
  --bases-table-cell-background-disabled: #1F1F1F !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #1F1F1F !important;
  --bases-table-group-background: #1F1F1F !important;
  --bases-table-header-background: #090909 !important;
  --bases-table-header-color: #808080 !important;
  --bases-table-summary-background: #090909 !important;
  --blur-background: color-mix(in srgb, #1F1F1F 65%, transparent) linear-gradient(#1F1F1F, color-mix(in srgb, #1F1F1F 65%, transparent)) !important;
  --bodyFont: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-blend-mode: normal;
  --callout-radius: 8px;
  --canvas-background: #090909 !important;
  --canvas-card-label-color: #5F5F5F !important;
  --canvas-dot-pattern: #1F1F1F !important;
  --caret-color: #bdbdbd !important;
  --chalk-grey: #dddddd !important;
  --chalk-grey-accent: #cbcbcb !important;
  --checkbox-border-color: #5F5F5F !important;
  --checkbox-border-color-hover: #808080 !important;
  --checkbox-marker-color: #090909 !important;
  --checklist-done-color: #808080 !important;
  --code-background: #1F1F1F !important;
  --code-border-color: #1F1F1F !important;
  --code-comment: #5F5F5F !important;
  --code-normal: #bdbdbd !important;
  --code-punctuation: #808080 !important;
  --codeFont: "Source Code Pro", monospace !important;
  --collapse-icon-color: #5F5F5F !important;
  --color-base-00: #090909 !important;
  --color-base-10: #1F1F1F !important;
  --color-base-100: #C6C6C6 !important;
  --color-base-20: #000000 !important;
  --color-base-25: #1F1F1F !important;
  --color-base-30: #1F1F1F !important;
  --color-base-35: #383838 !important;
  --color-base-40: #1F1F1F !important;
  --color-base-50: #808080 !important;
  --color-base-60: #5F5F5F !important;
  --color-base-70: #bdbdbd !important;
  --dark: #bdbdbd !important;
  --darkgray: #bdbdbd !important;
  --divider-color: #1F1F1F !important;
  --dropdown-background: #1F1F1F !important;
  --dropdown-background-hover: #383838 !important;
  --embed-block-shadow-hover: 0 0 0 1px #1F1F1F, inset 0 0 0 1px #1F1F1F !important;
  --file-header-background: #090909 !important;
  --file-header-background-focused: #090909 !important;
  --file-header-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 74ch !important;
  --flair-background: #1F1F1F !important;
  --flair-color: #bdbdbd !important;
  --floating-toc-header-background: #000000 !important;
  --font-interface: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter", sans-serif !important;
  --font-mermaid: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Source Code Pro", monospace !important;
  --font-print: '??', '??', "Space Grotesk", sans-serif, 'Arial' !important;
  --font-text: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Space Grotesk", sans-serif !important;
  --font-title: "Peace Sans", sans-serif !important;
  --footnote-divider-color: #1F1F1F !important;
  --footnote-id-color: #808080 !important;
  --footnote-id-color-no-occurrences: #5F5F5F !important;
  --graph-line: #383838 !important;
  --graph-node: #808080 !important;
  --graph-node-unresolved: #5F5F5F !important;
  --graph-text: #bdbdbd !important;
  --gray: #808080 !important;
  --h1-color: #dddddd !important;
  --h1-font: 'Peace Sans' !important;
  --h1-gradient-accent: #bec4ff !important;
  --h1-weight: 00 !important;
  --h2-color: #dddddd !important;
  --h2-font: 'Peace Sans' !important;
  --h2-gradient-accent: #9ac0ff !important;
  --h2-weight: 00 !important;
  --h3-color: #dddddd !important;
  --h3-font: 'Peace Sans' !important;
  --h3-gradient-accent: #b999e8 !important;
  --h3-weight: 000 !important;
  --h4-color: #dddddd !important;
  --h4-font: 'Peace Sans' !important;
  --h4-gradient-accent: #f088ca !important;
  --h4-weight: 00 !important;
  --h5-color: #dddddd !important;
  --h5-font: 'Peace Sans' !important;
  --h5-gradient-accent: #8e91eb !important;
  --h5-weight: 00 !important;
  --h6-color: #dddddd !important;
  --h6-font: 'Peace Sans' !important;
  --h6-gradient-accent: #e990eb !important;
  --h6-weight: 00 !important;
  --headerFont: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #5F5F5F !important;
  --hr-color: #1F1F1F !important;
  --icon-color: #808080 !important;
  --icon-color-focused: #bdbdbd !important;
  --icon-color-hover: #808080 !important;
  --inline-title-color: #dddddd !important;
  --inline-title-font: 'Peace Sans' !important;
  --inline-title-weight: 00 !important;
  --input-date-separator: #5F5F5F !important;
  --input-placeholder-color: #5F5F5F !important;
  --interactive-hover: #383838 !important;
  --interactive-normal: #1F1F1F !important;
  --light: #090909 !important;
  --lightgray: #000000 !important;
  --link-color: #808080 !important;
  --link-color-hover: #bdbdbd !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: 13% !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #808080 !important;
  --link-unresolved-decoration-color: transparent !important;
  --list-marker-color: #5F5F5F !important;
  --list-marker-color-hover: #808080 !important;
  --menu-background: #000000 !important;
  --menu-border-color: #383838 !important;
  --metadata-border-color: #1F1F1F !important;
  --metadata-divider-color: #1F1F1F !important;
  --metadata-input-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #bdbdbd !important;
  --metadata-label-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #808080 !important;
  --metadata-label-text-color-hover: #808080 !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1F1F1F !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #383838 !important;
  --modal-background: #090909 !important;
  --modal-border-color: #1F1F1F !important;
  --nav-collapse-icon-color: #5F5F5F !important;
  --nav-collapse-icon-color-collapsed: #5F5F5F !important;
  --nav-heading-color: #bdbdbd !important;
  --nav-heading-color-collapsed: #5F5F5F !important;
  --nav-heading-color-collapsed-hover: #808080 !important;
  --nav-heading-color-hover: #bdbdbd !important;
  --nav-item-color: #808080 !important;
  --nav-item-color-active: #bdbdbd !important;
  --nav-item-color-hover: #bdbdbd !important;
  --nav-item-color-selected: #bdbdbd !important;
  --nav-tag-color: #5F5F5F !important;
  --nav-tag-color-active: #808080 !important;
  --nav-tag-color-hover: #808080 !important;
  --o-border: 1px solid #1F1F1F !important;
  --pdf-background: #090909 !important;
  --pdf-page-background: #090909 !important;
  --pdf-shadow: 0 0 0 1px #1F1F1F !important;
  --pdf-sidebar-background: #090909 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #1F1F1F !important;
  --pill-border-color: #1F1F1F !important;
  --pill-border-color-hover: #383838 !important;
  --pill-color: #808080 !important;
  --pill-color-hover: #bdbdbd !important;
  --pill-color-remove: #5F5F5F !important;
  --prompt-background: #090909 !important;
  --prompt-border-color: #1F1F1F !important;
  --raised-background: color-mix(in srgb, #1F1F1F 65%, transparent) linear-gradient(#1F1F1F, color-mix(in srgb, #1F1F1F 65%, transparent)) !important;
  --ribbon-background: #000000 !important;
  --ribbon-background-collapsed: #090909 !important;
  --search-clear-button-color: #808080 !important;
  --search-icon-color: #808080 !important;
  --search-result-background: #090909 !important;
  --setting-group-heading-color: #bdbdbd !important;
  --setting-items-background: #1F1F1F !important;
  --setting-items-border-color: #1F1F1F !important;
  --slider-thumb-border-color: #383838 !important;
  --slider-track-background: #1F1F1F !important;
  --status-bar-background: #000000 !important;
  --status-bar-border-color: #1F1F1F !important;
  --status-bar-text-color: #808080 !important;
  --suggestion-background: #090909 !important;
  --tab-background-active: #090909 !important;
  --tab-container-background: #000000 !important;
  --tab-divider-color: #383838 !important;
  --tab-outline-color: #1F1F1F !important;
  --tab-switcher-background: #000000 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent) !important;
  --tab-text-color: #5F5F5F !important;
  --tab-text-color-active: #808080 !important;
  --tab-text-color-focused: #808080 !important;
  --tab-text-color-focused-active: #808080 !important;
  --tab-text-color-focused-active-current: #bdbdbd !important;
  --table-add-button-border-color: #1F1F1F !important;
  --table-border-color: #1F1F1F !important;
  --table-drag-handle-color: #5F5F5F !important;
  --table-header-border-color: #1F1F1F !important;
  --table-header-color: #bdbdbd !important;
  --text-faint: #5F5F5F !important;
  --text-muted: #808080 !important;
  --text-normal: #bdbdbd !important;
  --titleFont: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #1F1F1F !important;
  --titlebar-text-color: #808080 !important;
  --titlebar-text-color-focused: #bdbdbd !important;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94) !important;
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95) !important;
  --vault-profile-color: #bdbdbd !important;
  --vault-profile-color-hover: #bdbdbd !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(189, 189, 189);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(9, 9, 9);
  color: rgb(189, 189, 189);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

body div#quartz-root {
  background-color: rgb(9, 9, 9);
  color: rgb(189, 189, 189);
}`,
    typography: `body .page article p > b, b {
  color: rgb(198, 198, 198);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .page article p > em, em {
  color: rgb(95, 95, 95);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(95, 95, 95) none 0px;
  text-decoration: rgb(95, 95, 95);
  text-decoration-color: rgb(95, 95, 95);
}

body .page article p > i, i {
  color: rgb(95, 95, 95);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(95, 95, 95) none 0px;
  text-decoration: rgb(95, 95, 95);
  text-decoration-color: rgb(95, 95, 95);
}

body .page article p > strong, strong {
  color: rgb(198, 198, 198);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration: rgb(198, 198, 198);
  text-decoration-color: rgb(198, 198, 198);
}

body .text-highlight {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 189, 189) none 0px;
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body del {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 189, 189) none 0px;
  text-decoration: line-through rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body p {
  color: rgb(128, 128, 128);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  text-decoration: 13% rgb(166, 138, 249);
  text-decoration-thickness: 13%;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: underline 13% rgb(128, 128, 128);
  text-decoration-color: rgb(128, 128, 128);
  text-decoration-thickness: 13%;
}

body a.internal.broken {
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: underline 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `body dd {
  color: rgb(189, 189, 189);
}

body dt {
  color: rgb(189, 189, 189);
}

body ol > li {
  color: rgb(189, 189, 189);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body ul > li {
  color: rgb(189, 189, 189);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(95, 95, 95);
  text-decoration: rgb(95, 95, 95);
}

body blockquote {
  background-color: rgb(9, 9, 9);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body table {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.25px;
}

body td {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(189, 189, 189);
}

body th {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(189, 189, 189);
}

body tr {
  background-color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(189, 189, 189);
}

body pre > code, pre:has(> code) {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body figcaption {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body img {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body video {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    embeds: `body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
}

body .footnotes {
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

body .transclude {
  border-bottom-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body .transclude-inner {
  border-bottom-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(95, 95, 95);
  text-decoration: rgb(95, 95, 95);
  text-decoration-color: rgb(95, 95, 95);
}

body input[type=checkbox] {
  border-bottom-color: rgb(255, 255, 255);
  border-bottom-width: 0px;
  border-left-color: rgb(255, 255, 255);
  border-left-width: 0px;
  border-right-color: rgb(255, 255, 255);
  border-right-width: 0px;
  border-top-color: rgb(255, 255, 255);
  border-top-width: 0px;
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='*'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='-'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='/'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='>'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='?'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='I'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='S'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='b'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='c'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='d'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='f'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='i'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='k'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='l'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='p'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='u'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body li.task-list-item[data-task='w'] {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(83, 223, 221, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(251, 70, 76, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(251, 70, 76, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(168, 130, 255, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(168, 130, 255, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(168, 130, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(168, 130, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(251, 70, 76, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(251, 70, 76, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(251, 70, 76, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(251, 70, 76, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(2, 122, 255, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(2, 122, 255, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 151, 63, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(158, 158, 158, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(68, 207, 110, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(68, 207, 110, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(68, 207, 110, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(68, 207, 110, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(83, 223, 221, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(83, 223, 221, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(83, 223, 221, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(83, 223, 221, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(2, 122, 255, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 151, 63, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 151, 63, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(233, 151, 63, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(233, 151, 63, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(189, 189, 189);
  border-left-width: 0px;
  border-right-color: rgb(189, 189, 189);
  border-right-width: 0px;
  border-top-color: rgb(189, 189, 189);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > * {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 189, 189) none 0px;
  text-decoration: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 189, 189);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(189, 189, 189);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(189, 189, 189);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(189, 189, 189);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body h2 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body h2.page-title, h2.page-title a {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body h3 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body h4 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body h5 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body h6 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(2, 122, 255, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(2, 122, 255, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(2, 122, 255, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(2, 122, 255, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-corner {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}

body ::-webkit-scrollbar-track {
  background: rgb(9, 9, 9) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(9, 9, 9);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 198, 198);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 198, 198);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 198, 198);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(198, 198, 198);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(189, 189, 189);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(166, 138, 249);
  border-left-color: rgb(166, 138, 249);
  border-right-color: rgb(166, 138, 249);
  border-top-color: rgb(166, 138, 249);
  color: rgb(166, 138, 249);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}`,
    footer: `body footer {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(31, 31, 31);
  border-bottom-width: 1px;
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-right-width: 1px;
  border-top-color: rgb(31, 31, 31);
  color: rgb(128, 128, 128);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(128, 128, 128);
  text-decoration: rgb(128, 128, 128);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body li.section-li > .section .meta {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(189, 189, 189);
  text-decoration: rgb(189, 189, 189);
}

body ul.section-ul {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}

body .darkmode svg {
  color: rgb(128, 128, 128);
  stroke: rgb(128, 128, 128);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}

body .breadcrumb-element p {
  color: rgb(95, 95, 95);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

body .metadata {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

body .page-header h2.page-title {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(189, 189, 189);
  text-decoration: underline dotted rgb(189, 189, 189);
}

body details {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body input[type=text] {
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-width: 1px;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

body sub {
  color: rgb(189, 189, 189);
}

body summary {
  color: rgb(189, 189, 189);
}

body sup {
  color: rgb(189, 189, 189);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #E0E0E0 !important;
  --background-modifier-border-focus: #BDBDBD !important;
  --background-modifier-border-hover: #D4D4D4 !important;
  --background-modifier-form-field: #FFF !important;
  --background-modifier-form-field-hover: #FFF !important;
  --background-primary: #FFF !important;
  --background-primary-alt: #FAFAFA !important;
  --background-secondary: #F3F3F3 !important;
  --background-secondary-alt: #FCFCFC !important;
  --bases-cards-background: #FFF !important;
  --bases-cards-cover-background: #FAFAFA !important;
  --bases-cards-shadow: 0 0 0 1px #E0E0E0 !important;
  --bases-cards-shadow-hover: 0 0 0 1px #D4D4D4 !important;
  --bases-embed-border-color: #E0E0E0 !important;
  --bases-group-heading-property-color: #ABABAB !important;
  --bases-table-border-color: #E0E0E0 !important;
  --bases-table-cell-background-active: #FFF !important;
  --bases-table-cell-background-disabled: #FAFAFA !important;
  --bases-table-cell-shadow-active: 0 0 0 2px #BDBDBD !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-group-background: #FAFAFA !important;
  --bases-table-header-background: #FFF !important;
  --bases-table-header-color: #ABABAB !important;
  --bases-table-summary-background: #FFF !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --blur-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent)) !important;
  --bodyFont: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --callout-blend-mode: normal;
  --callout-radius: 8px;
  --canvas-background: #FFF !important;
  --canvas-card-label-color: #707070 !important;
  --canvas-dot-pattern: #E0E0E0 !important;
  --caret-color: #5A5A5A !important;
  --chalk-grey: #686868 !important;
  --chalk-grey-accent: #636363 !important;
  --checkbox-border-color: #707070 !important;
  --checkbox-border-color-hover: #ABABAB !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-marker-color: #FFF !important;
  --checklist-done-color: #ABABAB !important;
  --code-background: #FAFAFA !important;
  --code-border-color: #E0E0E0 !important;
  --code-comment: #707070 !important;
  --code-normal: #5A5A5A !important;
  --code-punctuation: #ABABAB !important;
  --codeFont: "Source Code Pro", monospace !important;
  --collapse-icon-color: #707070 !important;
  --color-base-00: #FFF !important;
  --color-base-05: #FCFCFC !important;
  --color-base-10: #FAFAFA !important;
  --color-base-100: #222 !important;
  --color-base-20: #F3F3F3 !important;
  --color-base-25: #E3E3E3 !important;
  --color-base-30: #E0E0E0 !important;
  --color-base-35: #D4D4D4 !important;
  --color-base-40: #BDBDBD !important;
  --color-base-50: #ABABAB !important;
  --color-base-70: #5A5A5A !important;
  --dark: #5A5A5A !important;
  --darkgray: #5A5A5A !important;
  --divider-color: #E0E0E0 !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --dropdown-background: #FFF !important;
  --dropdown-background-hover: #FAFAFA !important;
  --embed-block-shadow-hover: 0 0 0 1px #E0E0E0, inset 0 0 0 1px #E0E0E0 !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --file-header-background: #FFF !important;
  --file-header-background-focused: #FFF !important;
  --file-header-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 74ch !important;
  --flair-background: #FFF !important;
  --flair-color: #5A5A5A !important;
  --floating-toc-header-background: #F3F3F3 !important;
  --font-interface: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter", sans-serif !important;
  --font-mermaid: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Source Code Pro", monospace !important;
  --font-print: '??', '??', "Space Grotesk", sans-serif, 'Arial' !important;
  --font-text: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Space Grotesk", sans-serif !important;
  --font-title: "Peace Sans", sans-serif !important;
  --footnote-divider-color: #E0E0E0 !important;
  --footnote-id-color: #ABABAB !important;
  --footnote-id-color-no-occurrences: #707070 !important;
  --graph-line: #D4D4D4 !important;
  --graph-node: #ABABAB !important;
  --graph-node-unresolved: #707070 !important;
  --graph-text: #5A5A5A !important;
  --gray: #ABABAB !important;
  --h1-color: #686868 !important;
  --h1-font: 'Peace Sans' !important;
  --h1-gradient-accent: #5968fb !important;
  --h1-weight: 00 !important;
  --h2-color: #686868 !important;
  --h2-font: 'Peace Sans' !important;
  --h2-gradient-accent: #3372ca !important;
  --h2-weight: 00 !important;
  --h3-color: #686868 !important;
  --h3-font: 'Peace Sans' !important;
  --h3-gradient-accent: #6f33ca !important;
  --h3-weight: 000 !important;
  --h4-color: #686868 !important;
  --h4-font: 'Peace Sans' !important;
  --h4-gradient-accent: #ca3393 !important;
  --h4-weight: 00 !important;
  --h5-color: #686868 !important;
  --h5-font: 'Peace Sans' !important;
  --h5-gradient-accent: #262cda !important;
  --h5-weight: 00 !important;
  --h6-color: #686868 !important;
  --h6-font: 'Peace Sans' !important;
  --h6-gradient-accent: #f21bf6 !important;
  --h6-weight: 00 !important;
  --headerFont: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #707070 !important;
  --hr-color: #E0E0E0 !important;
  --icon-color: #ABABAB !important;
  --icon-color-focused: #5A5A5A !important;
  --icon-color-hover: #ABABAB !important;
  --inline-title-color: #686868 !important;
  --inline-title-font: 'Peace Sans' !important;
  --inline-title-weight: 00 !important;
  --input-date-separator: #707070 !important;
  --input-placeholder-color: #707070 !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-hover: #FAFAFA !important;
  --interactive-normal: #FFF !important;
  --light: #FFF !important;
  --lightgray: #F3F3F3 !important;
  --link-color: #ABABAB !important;
  --link-color-hover: #5A5A5A !important;
  --link-decoration-hover: none !important;
  --link-decoration-thickness: 13% !important;
  --link-external-decoration: none !important;
  --link-external-decoration-hover: none !important;
  --link-unresolved-color: #ABABAB !important;
  --link-unresolved-decoration-color: transparent !important;
  --list-marker-color: #707070 !important;
  --list-marker-color-hover: #ABABAB !important;
  --menu-background: #F3F3F3 !important;
  --menu-border-color: #D4D4D4 !important;
  --metadata-border-color: #E0E0E0 !important;
  --metadata-divider-color: #E0E0E0 !important;
  --metadata-input-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #5A5A5A !important;
  --metadata-label-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-label-text-color: #ABABAB !important;
  --metadata-label-text-color-hover: #ABABAB !important;
  --metadata-property-box-shadow-focus: 0 0 0 2px #BDBDBD !important;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D4D4D4 !important;
  --modal-background: #FFF !important;
  --modal-border-color: #BDBDBD !important;
  --nav-collapse-icon-color: #707070 !important;
  --nav-collapse-icon-color-collapsed: #707070 !important;
  --nav-heading-color: #5A5A5A !important;
  --nav-heading-color-collapsed: #707070 !important;
  --nav-heading-color-collapsed-hover: #ABABAB !important;
  --nav-heading-color-hover: #5A5A5A !important;
  --nav-item-color: #ABABAB !important;
  --nav-item-color-active: #5A5A5A !important;
  --nav-item-color-hover: #5A5A5A !important;
  --nav-item-color-selected: #5A5A5A !important;
  --nav-tag-color: #707070 !important;
  --nav-tag-color-active: #ABABAB !important;
  --nav-tag-color-hover: #ABABAB !important;
  --o-border: 1px solid #E0E0E0 !important;
  --pdf-background: #FFF !important;
  --pdf-page-background: #FFF !important;
  --pdf-sidebar-background: #FFF !important;
  --pill-border-color: #E0E0E0 !important;
  --pill-border-color-hover: #D4D4D4 !important;
  --pill-color: #ABABAB !important;
  --pill-color-hover: #5A5A5A !important;
  --pill-color-remove: #707070 !important;
  --prompt-background: #FFF !important;
  --prompt-border-color: #BDBDBD !important;
  --raised-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent)) !important;
  --ribbon-background: #F3F3F3 !important;
  --ribbon-background-collapsed: #FFF !important;
  --search-clear-button-color: #ABABAB !important;
  --search-icon-color: #ABABAB !important;
  --search-result-background: #FFF !important;
  --secondary: rgb(138, 92, 245) !important;
  --setting-group-heading-color: #5A5A5A !important;
  --setting-items-background: #FAFAFA !important;
  --setting-items-border-color: #E0E0E0 !important;
  --slider-thumb-border-color: #D4D4D4 !important;
  --slider-track-background: #E0E0E0 !important;
  --status-bar-background: #F3F3F3 !important;
  --status-bar-border-color: #E0E0E0 !important;
  --status-bar-text-color: #ABABAB !important;
  --suggestion-background: #FFF !important;
  --tab-background-active: #FFF !important;
  --tab-container-background: #F3F3F3 !important;
  --tab-divider-color: #D4D4D4 !important;
  --tab-outline-color: #E0E0E0 !important;
  --tab-switcher-background: #F3F3F3 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #F3F3F3, transparent) !important;
  --tab-text-color: #707070 !important;
  --tab-text-color-active: #ABABAB !important;
  --tab-text-color-focused: #ABABAB !important;
  --tab-text-color-focused-active: #ABABAB !important;
  --tab-text-color-focused-active-current: #5A5A5A !important;
  --table-add-button-border-color: #E0E0E0 !important;
  --table-border-color: #E0E0E0 !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-drag-handle-color: #707070 !important;
  --table-header-border-color: #E0E0E0 !important;
  --table-header-color: #5A5A5A !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --text-faint: #707070 !important;
  --text-muted: #ABABAB !important;
  --text-normal: #5A5A5A !important;
  --text-selection: #E0E0E0 !important;
  --titleFont: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: transparent !important;
  --titlebar-background-focused: transparent !important;
  --titlebar-border-color: #E0E0E0 !important;
  --titlebar-text-color: #ABABAB !important;
  --titlebar-text-color-focused: #5A5A5A !important;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94) !important;
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95) !important;
  --vault-profile-color: #5A5A5A !important;
  --vault-profile-color-hover: #5A5A5A !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(243, 243, 243);
  color: rgb(90, 90, 90);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  color: rgb(90, 90, 90);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 243, 243);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

body div#quartz-root {
  color: rgb(90, 90, 90);
}`,
    typography: `body .page article p > b, b {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article p > em, em {
  color: rgb(112, 112, 112);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body .page article p > i, i {
  color: rgb(112, 112, 112);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body .page article p > strong, strong {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .text-highlight {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body del {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: line-through rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body p {
  color: rgb(171, 171, 171);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  text-decoration: 13% rgb(138, 92, 245);
  text-decoration-thickness: 13%;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: underline 13% rgb(171, 171, 171);
  text-decoration-color: rgb(171, 171, 171);
  text-decoration-thickness: 13%;
}

body a.internal.broken {
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: underline 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `body dd {
  color: rgb(90, 90, 90);
}

body dt {
  color: rgb(90, 90, 90);
}

body ol > li {
  color: rgb(90, 90, 90);
}

body ol.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body ul > li {
  color: rgb(90, 90, 90);
}

body ul.overflow {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
}

body blockquote {
  background-color: rgb(255, 255, 255);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body table {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.25px;
}

body td {
  color: rgb(90, 90, 90);
}

body th {
  color: rgb(90, 90, 90);
}

body tr {
  background-color: rgb(243, 243, 243);
}`,
    code: `body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
  color: rgb(90, 90, 90);
}

body pre > code, pre:has(> code) {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body pre:has(> code) {
  background-color: rgba(138, 92, 245, 0.1);
  border-bottom-color: rgb(138, 92, 245);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgb(138, 92, 245);
  border-left-width: 1px;
  border-right-color: rgb(138, 92, 245);
  border-right-width: 1px;
  border-top-color: rgb(138, 92, 245);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    images: `body audio {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body figcaption {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body img {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body video {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

body .footnotes {
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .transclude {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body .transclude-inner {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(112, 112, 112);
  text-decoration: rgb(112, 112, 112);
  text-decoration-color: rgb(112, 112, 112);
}

body input[type=checkbox] {
  border-bottom-color: rgb(0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(0, 0, 0);
  border-left-width: 0px;
  border-right-color: rgb(0, 0, 0);
  border-right-width: 0px;
  border-top-color: rgb(0, 0, 0);
  border-top-width: 0px;
  transition: 0.3s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='*'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='-'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='/'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='>'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='?'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='I'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='S'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='b'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='c'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='d'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='f'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='i'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='k'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='l'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='p'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='u'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body li.task-list-item[data-task='w'] {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 191, 188, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 49, 71, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 49, 71, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(120, 82, 238, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(120, 82, 238, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(120, 82, 238, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(120, 82, 238, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(233, 49, 71, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(233, 49, 71, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(233, 49, 71, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(233, 49, 71, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(8, 109, 221, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(8, 109, 221, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(236, 117, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(158, 158, 158, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(158, 158, 158, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(158, 158, 158, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(158, 158, 158, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(8, 185, 78, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 185, 78, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(8, 185, 78, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(8, 185, 78, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 191, 188, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(0, 191, 188, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(0, 191, 188, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(0, 191, 188, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(8, 109, 221, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(236, 117, 0, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(236, 117, 0, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(236, 117, 0, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(236, 117, 0, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}`,
    search: `body .search > .search-button {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(90, 90, 90);
  border-left-width: 0px;
  border-right-color: rgb(90, 90, 90);
  border-right-width: 0px;
  border-top-color: rgb(90, 90, 90);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  border-top-width: 0px;
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > * {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(90, 90, 90);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(90, 90, 90);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h1 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body h2 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body h2.page-title, h2.page-title a {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body h3 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body h4 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body h5 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body h6 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgba(8, 109, 221, 0.1);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-bottom-width: 1px;
  border-left-color: rgba(8, 109, 221, 0.1);
  border-left-width: 1px;
  border-right-color: rgba(8, 109, 221, 0.1);
  border-right-width: 1px;
  border-top-color: rgba(8, 109, 221, 0.1);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  border-top-width: 1px;
}

body ::-webkit-scrollbar-thumb {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(34, 34, 34);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-decoration: rgb(90, 90, 90);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    footer: `body footer {
  background-color: rgb(243, 243, 243);
  border-bottom-width: 1px;
  border-right-width: 1px;
  color: rgb(171, 171, 171);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body footer ul li a {
  color: rgb(171, 171, 171);
  text-decoration: rgb(171, 171, 171);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body li.section-li > .section .meta {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
  text-decoration: rgb(90, 90, 90);
}

body ul.section-ul {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

body .darkmode svg {
  color: rgb(171, 171, 171);
  stroke: rgb(171, 171, 171);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

body .metadata {
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(243, 243, 243);
}

body .page-header h2.page-title {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(90, 90, 90);
  text-decoration: underline dotted rgb(90, 90, 90);
}

body details {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body input[type=text] {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-width: 1px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(255, 255, 255);
  border-right-color: rgb(255, 255, 255);
  border-top-color: rgb(255, 255, 255);
  color: rgb(255, 255, 255);
  font-family: "Source Code Pro", monospace;
  font-size: 12px;
  padding-bottom: 0px;
  padding-left: 4px;
  padding-right: 4px;
  padding-top: 0px;
}

body progress {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

body sub {
  color: rgb(90, 90, 90);
}

body summary {
  color: rgb(90, 90, 90);
}

body sup {
  color: rgb(90, 90, 90);
}`,
  },
};
