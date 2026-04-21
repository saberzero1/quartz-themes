import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "gummy-revived",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["peace-sans", "space-grotesk"],
    fontFiles: [
      {
        family: "Peace Sans",
        style: "normal",
        weight: "400",
        file: "peace-sans.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Inter",
        style: "normal",
        weight: "400",
        file: "inter.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Space Grotesk",
        style: "normal",
        weight: "400",
        file: "space-grotesk.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Code Pro",
        style: "normal",
        weight: "400",
        file: "source-code-pro.woff2",
        format: "woff2",
        unicodeRange: null,
      },
      {
        family: "Source Code Pro",
        style: "italic",
        weight: "400",
        file: "source-code-pro-1.woff2",
        format: "woff2",
        unicodeRange: null,
      },
    ],
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
  --bodyFont: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --file-header-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 74ch !important;
  --flair-background: #1F1F1F !important;
  --flair-color: #bdbdbd !important;
  --floating-toc-header-background: #000000 !important;
  --font-interface: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter", sans-serif !important;
  --font-mermaid: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Source Code Pro", monospace !important;
  --font-print: "Space Grotesk", sans-serif, Arial' !important;
  --font-text: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --metadata-input-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #bdbdbd !important;
  --metadata-label-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(0, 0, 0);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(9, 9, 9);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(31, 31, 31);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(0, 0, 0);
  border-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(31, 31, 31);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(9, 9, 9);
  color: rgb(189, 189, 189);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(198, 198, 198);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(95, 95, 95);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(95, 95, 95) none 0px;
  text-decoration-color: rgb(95, 95, 95);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(95, 95, 95);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(95, 95, 95) none 0px;
  text-decoration-color: rgb(95, 95, 95);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(198, 198, 198);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(198, 198, 198) none 0px;
  text-decoration-color: rgb(198, 198, 198);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 189, 189) none 0px;
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body del {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 189, 189) none 0px;
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(31, 31, 31);
  border-color: rgb(255, 255, 255);
  border-width: 0px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(255, 255, 255);
}

html[saved-theme="dark"] body p {
  color: rgb(128, 128, 128);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration-color: rgb(128, 128, 128);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  text-decoration: 13%;
  text-decoration-thickness: 13%;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: underline 13%;
  text-decoration-color: rgb(128, 128, 128);
  text-decoration-thickness: 13%;
}

html[saved-theme="dark"] body a.internal.broken {
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(128, 128, 128) none 0px;
  text-decoration: underline 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body dt {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(95, 95, 95);
}

html[saved-theme="dark"] body blockquote {
  background-color: rgb(9, 9, 9);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body table {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.25px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body tr {
  background-color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "Source Code Pro", monospace;
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
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

html[saved-theme="dark"] body pre:has(> code) {
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
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(221, 221, 221);
  border-left-color: rgb(221, 221, 221);
  border-right-color: rgb(221, 221, 221);
  border-top-color: rgb(221, 221, 221);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  background-color: rgb(31, 31, 31);
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
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

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(189, 189, 189);
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(2, 122, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 151, 63);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 222, 113);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(168, 130, 255);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(68, 207, 110);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(251, 70, 76);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(166, 138, 249);
}`,
    callouts: `html[saved-theme="dark"] body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="dark"] body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
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

html[saved-theme="dark"] body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
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

html[saved-theme="dark"] body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="dark"] body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
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

html[saved-theme="dark"] body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
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

html[saved-theme="dark"] body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
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

html[saved-theme="dark"] body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
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

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(9, 9, 9);
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(189, 189, 189);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(189, 189, 189) none 0px;
  text-decoration-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body a.internal.tag-link, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h1 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body h2 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body h3 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body h4 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body h5 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body h6 {
  color: rgb(221, 221, 221);
  font-family: "Peace Sans";
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
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
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(198, 198, 198);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(198, 198, 198);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(189, 189, 189);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}`,
    footer: `html[saved-theme="dark"] body footer {
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

html[saved-theme="dark"] body footer ul li a {
  color: rgb(128, 128, 128);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(128, 128, 128);
  stroke: rgb(128, 128, 128);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(95, 95, 95);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(31, 31, 31);
  border-left-color: rgb(31, 31, 31);
  border-right-color: rgb(31, 31, 31);
  border-top-color: rgb(31, 31, 31);
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(128, 128, 128);
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(189, 189, 189);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body abbr {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(189, 189, 189);
  border-bottom-width: 1px;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  color: rgb(128, 128, 128);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body kbd {
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

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(189, 189, 189);
  border-left-color: rgb(189, 189, 189);
  border-right-color: rgb(189, 189, 189);
  border-top-color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body sub {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body summary {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body sup {
  color: rgb(189, 189, 189);
}

html[saved-theme="dark"] body ul.tags > li {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(128, 128, 128);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(128, 128, 128);
  border-right-color: rgb(128, 128, 128);
  border-top-color: rgb(128, 128, 128);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(128, 128, 128);
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
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(258, 88%, 66%) !important;
  --bases-table-group-background: #FAFAFA !important;
  --bases-table-header-background: #FFF !important;
  --bases-table-header-color: #ABABAB !important;
  --bases-table-summary-background: #FFF !important;
  --blockquote-border-color: hsl(258, 88%, 66%) !important;
  --blur-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent)) !important;
  --bodyFont: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --checkbox-color: hsl(258, 88%, 66%) !important;
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
  --divider-color-hover: hsl(258, 88%, 66%) !important;
  --dropdown-background: #FFF !important;
  --dropdown-background-hover: #FAFAFA !important;
  --embed-block-shadow-hover: 0 0 0 1px #E0E0E0, inset 0 0 0 1px #E0E0E0 !important;
  --embed-border-start: 2px solid hsl(258, 88%, 66%) !important;
  --file-header-background: #FFF !important;
  --file-header-background-focused: #FFF !important;
  --file-header-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --file-line-width: 74ch !important;
  --flair-background: #FFF !important;
  --flair-color: #5A5A5A !important;
  --floating-toc-header-background: #F3F3F3 !important;
  --font-interface: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Inter", sans-serif !important;
  --font-mermaid: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Source Code Pro", monospace !important;
  --font-print: "Space Grotesk", sans-serif, Arial' !important;
  --font-text: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --headerFont: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --interactive-accent: hsl(258, 88%, 66%) !important;
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
  --metadata-input-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #5A5A5A !important;
  --metadata-label-font: "Inter", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --secondary: hsl(258, 88%, 66%) !important;
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
  --table-drag-handle-background-active: hsl(258, 88%, 66%) !important;
  --table-drag-handle-color: #707070 !important;
  --table-header-border-color: #E0E0E0 !important;
  --table-header-color: #5A5A5A !important;
  --table-selection-border-color: hsl(258, 88%, 66%) !important;
  --text-faint: #707070 !important;
  --text-muted: #ABABAB !important;
  --text-normal: #5A5A5A !important;
  --text-selection: #E0E0E0 !important;
  --titleFont: "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(243, 243, 243);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .bases-table thead th {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .canvas-sidebar {
  border-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(0, 0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(243, 243, 243);
  border-left-color: rgba(0, 0, 0, 0);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body div#quartz-root {
  color: rgb(90, 90, 90);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(112, 112, 112);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration-color: rgb(112, 112, 112);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(112, 112, 112);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(112, 112, 112) none 0px;
  text-decoration-color: rgb(112, 112, 112);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body del {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(224, 224, 224);
  border-color: rgb(0, 0, 0);
  border-width: 0px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgba(0, 0, 0, 0);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body p {
  color: rgb(171, 171, 171);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration-color: rgb(171, 171, 171);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  text-decoration: 13%;
  text-decoration-thickness: 13%;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: underline 13%;
  text-decoration-color: rgb(171, 171, 171);
  text-decoration-thickness: 13%;
}

html[saved-theme="light"] body a.internal.broken {
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 700;
  outline: rgb(171, 171, 171) none 0px;
  text-decoration: underline 13% rgba(0, 0, 0, 0);
  text-decoration-color: rgba(0, 0, 0, 0);
  text-decoration-thickness: 13%;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body dt {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ol > li {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul > li {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(112, 112, 112);
}

html[saved-theme="light"] body blockquote {
  background-color: rgb(255, 255, 255);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  padding-bottom: 18px;
  padding-top: 18px;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body table {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.25px;
}

html[saved-theme="light"] body td {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body th {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body tr {
  background-color: rgb(243, 243, 243);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
  font-family: "Source Code Pro", monospace;
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
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

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
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

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
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

html[saved-theme="light"] body pre:has(> code) {
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
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body figcaption {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(104, 104, 104);
  border-left-color: rgb(104, 104, 104);
  border-right-color: rgb(104, 104, 104);
  border-top-color: rgb(104, 104, 104);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
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

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(90, 90, 90);
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-circle-minus' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3Cline x1='9' y1='12' x2='15' y2='12'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-urgent' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M8 16v-4a4 4 0 0 1 8 0v4'%3E%3C/path%3E%3Cpath d='M3 12h1m8 -9v1m8 8h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7'%3E%3C/path%3E%3Crect x='6' y='16' width='12' height='4' rx='1'%3E%3C/rect%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-question-circle' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 16v.01'%3E%3C/path%3E%3Cpath d='M12 13a2.003 2.003 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483'%3E%3C/path%3E%3Ccircle cx='12' cy='12' r='9'%3E%3C/circle%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 109, 221);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.2.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(171, 171, 171);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-hourglass-high' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M6.5 7h11'%3E%3C/path%3E%3Cpath d='M6 20v-2a6 6 0 1 1 12 0v2a1 1 0 0 1 -1 1h-10a1 1 0 0 1 -1 -1z'%3E%3C/path%3E%3Cpath d='M6 4v2a6 6 0 1 0 12 0v-2a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1z'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&ltTransparent Rectangle&gt'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-arrow-back' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 11l-4 4l4 4m-4 -4h11a4 4 0 0 0 0 -8h-1'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(236, 117, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-brain' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M15.5 13a3.5 3.5 0 0 0 -3.5 3.5v1a3.5 3.5 0 0 0 7 0v-1.8'%3E%3C/path%3E%3Cpath d='M8.5 13a3.5 3.5 0 0 1 3.5 3.5v1a3.5 3.5 0 0 1 -7 0v-1.8'%3E%3C/path%3E%3Cpath d='M17.5 16a3.5 3.5 0 0 0 0 -7h-.5'%3E%3C/path%3E%3Cpath d='M19 9.3v-2.8a3.5 3.5 0 0 0 -7 0'%3E%3C/path%3E%3Cpath d='M6.5 16a3.5 3.5 0 0 1 0 -7h.5'%3E%3C/path%3E%3Cpath d='M5 9.3v-2.8a3.5 3.5 0 0 1 7 0v10'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-bookmark' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M9 4h6a2 2 0 0 1 2 2v14l-5 -3l-5 3v-14a2 2 0 0 1 2 -2'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 479.1c26-5.2 42.9-30.5 37.7-56.5l-2.3-11.4c-5.3-26.7-15.1-52.1-28.8-75.2H464c26.5 0 48-21.5 48-48c0-25.3-19.5-46-44.3-47.9c7.7-8.5 12.3-19.8 12.3-32.1c0-23.4-16.8-42.9-38.9-47.1c4.4-7.3 6.9-15.8 6.9-24.9c0-21.3-13.9-39.4-33.1-45.6c.7-3.3 1.1-6.8 1.1-10.4c0-26.5-21.5-48-48-48H294.5c-19 0-37.5 5.6-53.3 16.1L202.7 73.8C176 91.6 160 121.6 160 153.7V192v48 24.9c0 29.2 13.3 56.7 36 75l7.4 5.9c26.5 21.2 44.6 51 51.2 84.2l2.3 11.4c5.2 26 30.5 42.9 56.5 37.7zM32 320H96c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32H32C14.3 32 0 46.3 0 64V288c0 17.7 14.3 32 32 32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-seeding' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M12 10a6 6 0 0 0 -6 -6h-3v2a6 6 0 0 0 6 6h3'%3E%3C/path%3E%3Cpath d='M12 14a6 6 0 0 1 6 -6h3v1a6 6 0 0 1 -6 6h-3'%3E%3C/path%3E%3Cline x1='12' y1='20' x2='12' y2='10'%3E%3C/line%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M272 384c9.6-31.9 29.5-59.1 49.2-86.2l0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C368 78.8 289.2 0 192 0S16 78.8 16 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0c19.8 27.1 39.7 54.4 49.2 86.2H272zM192 512c44.2 0 80-35.8 80-80V416H112v16c0 44.2 35.8 80 80 80zM112 176c0 8.8-7.2 16-16 16s-16-7.2-16-16c0-61.9 50.1-112 112-112c8.8 0 16 7.2 16 16s-7.2 16-16 16c-44.2 0-80 35.8-80 80z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M18 8a6 6 0 01-7.743 5.743L10 14l-1 1-1 1H6v2H2v-4l4.257-4.257A6 6 0 1118 8zm-6-4a1 1 0 100 2 2 2 0 012 2 1 1 0 102 0 4 4 0 00-4-4z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(224, 172, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 256c-35.3 0-64-28.7-64-64s28.7-64 64-64s64 28.7 64 64s-28.7 64-64 64z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(120, 82, 238);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 384 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M32 32C32 14.3 46.3 0 64 0H320c17.7 0 32 14.3 32 32s-14.3 32-32 32H290.5l11.4 148.2c36.7 19.9 65.7 53.2 79.5 94.7l1 3c3.3 9.8 1.6 20.5-4.4 28.8s-15.7 13.3-26 13.3H32c-10.3 0-19.9-4.9-26-13.3s-7.7-19.1-4.4-28.8l1-3c13.8-41.5 42.8-74.8 79.5-94.7L93.5 64H64C46.3 64 32 49.7 32 32zM160 384h64v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V384z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M313.4 32.9c26 5.2 42.9 30.5 37.7 56.5l-2.3 11.4c-5.3 26.7-15.1 52.1-28.8 75.2H464c26.5 0 48 21.5 48 48c0 25.3-19.5 46-44.3 47.9c7.7 8.5 12.3 19.8 12.3 32.1c0 23.4-16.8 42.9-38.9 47.1c4.4 7.2 6.9 15.8 6.9 24.9c0 21.3-13.9 39.4-33.1 45.6c.7 3.3 1.1 6.8 1.1 10.4c0 26.5-21.5 48-48 48H294.5c-19 0-37.5-5.6-53.3-16.1l-38.5-25.7C176 420.4 160 390.4 160 358.3V320 272 247.1c0-29.2 13.3-56.7 36-75l7.4-5.9c26.5-21.2 44.6-51 51.2-84.2l2.3-11.4c5.2-26 30.5-42.9 56.5-37.7zM32 192H96c17.7 0 32 14.3 32 32V448c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V224c0-17.7 14.3-32 32-32z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 512 512'%3E%3C!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --%3E%3Cpath d='M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84.1 96c0-11.1-9-20.1-20.1-20.1s-20.1 9-20.1 20.1v6c-5.6 1.2-10.9 2.9-15.9 5.1c-15 6.8-27.9 19.4-31.1 37.7c-1.8 10.2-.8 20 3.4 29c4.2 8.8 10.7 15 17.3 19.5c11.6 7.9 26.9 12.5 38.6 16l2.2 .7c13.9 4.2 23.4 7.4 29.3 11.7c2.5 1.8 3.4 3.2 3.8 4.1c.3 .8 .9 2.6 .2 6.7c-.6 3.5-2.5 6.4-8 8.8c-6.1 2.6-16 3.9-28.8 1.9c-6-1-16.7-4.6-26.2-7.9l0 0 0 0 0 0 0 0c-2.2-.8-4.3-1.5-6.3-2.1c-10.5-3.5-21.8 2.2-25.3 12.7s2.2 21.8 12.7 25.3c1.2 .4 2.7 .9 4.4 1.5c7.9 2.7 20.3 6.9 29.8 9.1V416c0 11.1 9 20.1 20.1 20.1s20.1-9 20.1-20.1v-5.5c5.4-1 10.5-2.5 15.4-4.6c15.7-6.7 28.4-19.7 31.6-38.7c1.8-10.4 1-20.3-3-29.4c-3.9-9-10.2-15.6-16.9-20.5c-12.2-8.8-28.3-13.7-40.4-17.4l-.8-.2c-14.2-4.3-23.8-7.3-29.9-11.4c-2.6-1.8-3.4-3-3.6-3.5c-.2-.3-.7-1.6-.1-5c.3-1.9 1.9-5.2 8.2-8.1c6.4-2.9 16.4-4.5 28.6-2.6c4.3 .7 17.9 3.3 21.7 4.3c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-4.4-1.2-14.4-3.2-21-4.4V224z'/%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='h-5 w-5' viewBox='0 0 20 20' fill='currentColor'%3E%3Cpath fill-rule='evenodd' d='M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z' clip-rule='evenodd' /%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(8, 185, 78);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' class='icon icon-tabler icon-tabler-trash-x' width='24' height='24' viewBox='0 0 24 24' stroke-width='2' stroke='currentColor' fill='none' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath stroke='none' d='M0 0h24v24H0z' fill='none'%3E%3C/path%3E%3Cpath d='M4 7h16'%3E%3C/path%3E%3Cpath d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12'%3E%3C/path%3E%3Cpath d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3'%3E%3C/path%3E%3Cpath d='M10 12l4 4m0 -4l-4 4'%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(233, 49, 71);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns=\\%22http://www.w3.org/2000/svg\\%22 class=\\%22icon icon-tabler icon-tabler-check\\%22 width=\\%2224\\%22 height=\\%2224\\%22 viewBox=\\%220 0 24 24\\%22 stroke-width=\\%222\\%22 stroke=\\%22currentColor\\%22 fill=\\%22none\\%22 stroke-linecap=\\%22round\\%22 stroke-linejoin=\\%22round\\%22%3E%3Cpath stroke=\\%22none\\%22 d=\\%22M0 0h24v24H0z\\%22 fill=\\%22none\\%22%3E%3C/path%3E%3Cpath d=\\%22M5 12l5 5l10 -10\\%22%3E%3C/path%3E%3C/svg%3E");
  mask-size: contain;
  -webkit-mask-size: contain;
  mask-repeat: no-repeat;
  -webkit-mask-repeat: no-repeat;
  background-color: rgb(138, 92, 245);
}`,
    callouts: `html[saved-theme="light"] body .callout .callout-title {
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

html[saved-theme="light"] body .callout[data-callout="abstract"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="bug"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="danger"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="example"] {
  --callout-color: 120, 82, 238;
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

html[saved-theme="light"] body .callout[data-callout="failure"] {
  --callout-color: 233, 49, 71;
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

html[saved-theme="light"] body .callout[data-callout="info"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="note"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="question"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .callout[data-callout="quote"] {
  --callout-color: 158, 158, 158;
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

html[saved-theme="light"] body .callout[data-callout="success"] {
  --callout-color: 8, 185, 78;
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

html[saved-theme="light"] body .callout[data-callout="tip"] {
  --callout-color: 0, 191, 188;
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

html[saved-theme="light"] body .callout[data-callout="todo"] {
  --callout-color: 8, 109, 221;
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

html[saved-theme="light"] body .callout[data-callout="warning"] {
  --callout-color: 236, 117, 0;
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

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(90, 90, 90);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(90, 90, 90) none 0px;
  text-decoration-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-bottom-width: 0px;
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body a.internal.tag-link, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h1 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body h2 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body h3 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body h4 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body h5 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body h6 {
  color: rgb(104, 104, 104);
  font-family: "Peace Sans";
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgba(0, 0, 0, 0);
  border-left-color: rgba(0, 0, 0, 0);
  border-right-color: rgba(0, 0, 0, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
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
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(34, 34, 34);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(90, 90, 90);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(243, 243, 243);
  border-bottom-width: 1px;
  border-right-width: 1px;
  color: rgb(171, 171, 171);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(171, 171, 171);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(171, 171, 171);
  stroke: rgb(171, 171, 171);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(112, 112, 112);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body .metadata {
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(171, 171, 171);
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(243, 243, 243);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(90, 90, 90);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body abbr {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(90, 90, 90);
  border-bottom-width: 1px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  color: rgb(171, 171, 171);
  font-family: "??", Inter, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body kbd {
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

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(90, 90, 90);
  border-left-color: rgb(90, 90, 90);
  border-right-color: rgb(90, 90, 90);
  border-top-color: rgb(90, 90, 90);
}

html[saved-theme="light"] body sub {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body summary {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body sup {
  color: rgb(90, 90, 90);
}

html[saved-theme="light"] body ul.tags > li {
  background-color: rgb(243, 243, 243);
  border-bottom-color: rgb(171, 171, 171);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border-left-color: rgb(171, 171, 171);
  border-right-color: rgb(171, 171, 171);
  border-top-color: rgb(171, 171, 171);
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  color: rgb(171, 171, 171);
}`,
  },
  extras: `/* extras from _index.scss */
body {
  &[data-slug] {
    background-color: var(--background-primary);
  }

  figure[data-rehype-pretty-code-figure] pre,
  pre {
    box-shadow:
      -24px 24px 69px -3px #8a5cf533,
      24px -24px 69px -3px hsla(438, 88%, 66%, 0.13) !important;
  }

  h1 {
    --gradient-header:
      var(--chalk-grey), var(--chalk-grey-accent), var(--h1-gradient-accent);
  }

  h2 {
    --gradient-header:
      var(--chalk-grey), var(--chalk-grey-accent), var(--h2-gradient-accent);
  }

  h3 {
    --gradient-header:
      var(--chalk-grey), var(--chalk-grey-accent), var(--h3-gradient-accent);
  }

  h4 {
    --gradient-header:
      var(--chalk-grey), var(--chalk-grey-accent), var(--h4-gradient-accent);
  }

  h5 {
    --gradient-header:
      var(--chalk-grey), var(--chalk-grey-accent), var(--h5-gradient-accent);
  }

  h6 {
    --gradient-header:
      var(--chalk-grey), var(--chalk-grey-accent), var(--h6-gradient-accent);
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    background: linear-gradient(to right, var(--gradient-header));
    background-image: linear-gradient(to right, var(--gradient-header));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    width: fit-content;

    code {
      -webkit-text-fill-color: var(--color-accent);
      -webkit-background-clip: unset;
    }
  }

  .article-title {
    width: fit-content;
  }

  .page > #quartz-body .sidebar {
    &.left,
    &.left:has(div.explorer),
    &.right {
      background-color: transparent;
    }
  }

  @media all and ($mobile) {
    .page
      > #quartz-body
      .sidebar.left:has(div.explorer)
      :not(.folder-container, a[data-for]) {
      &:before,
      &:after {
        background-color: transparent;
      }
    }
  }
}

:root,
html {
  .callout {
    background: var(--border)
      linear-gradient(135deg, var(--border), var(--background-primary));
    background-color: rgba(var(--callout-color), 0.1);

    &.is-collapsed .callout-content > :first-child {
      margin-top: -2rem;
    }
  }

  .callout-title {
    color: var(--color);
    background: var(--background-primary);
  }
}

:root:root {
  --background-primary: #f3f3f3;
  --chalk-grey: #686868;
  --chalk-grey-accent: #636363;
  --h1-gradient-accent: #bec4ff;
  --h2-gradient-accent: #9ac0ff;
  --h3-gradient-accent: #b999e8;
  --h4-gradient-accent: #f088ca;
  --h5-gradient-accent: #8e91eb;
  --h6-gradient-accent: #e990eb;

  .callout {
    background: linear-gradient(
      135deg,
      rgba(var(--callout-color), 0.05),
      var(--background-primary)
    );
    background-color: rgba(var(--callout-color), 0.1);
  }
}

:root:root[saved-theme="dark"] {
  --background-primary: #000;
  --chalk-grey: #ddd;
  --chalk-grey-accent: #cbcbcb;
  --h1-gradient-accent: #5968fb;
  --h2-gradient-accent: #3372ca;
  --h3-gradient-accent: #6f33ca;
  --h4-gradient-accent: #ca3393;
  --h5-gradient-accent: #262cda;
  --h6-gradient-accent: #f21bf6;
}

html[saved-theme="dark"]
  body
  li.task-list-item[data-task="<"]
  input[type="checkbox"] {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&lt;Transparent Rectangle&gt;'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&lt;Transparent Rectangle&gt;'/%3E%3C/svg%3E");
}

html[saved-theme="light"]
  body
  li.task-list-item[data-task="<"]
  input[type="checkbox"] {
  -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&lt;Transparent Rectangle&gt;'/%3E%3C/svg%3E");
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath d='M26 4h-4V2h-2v2h-8V2h-2v2H6a2.002 2.002 0 0 0-2 2v20a2.002 2.002 0 0 0 2 2h20a2.002 2.002 0 0 0 2-2V6a2.002 2.002 0 0 0-2-2ZM6 6h4v2h2V6h8v2h2V6h4v4H6Zm0 6h5v6H6Zm13 14h-6v-6h6Zm0-8h-6v-6h6Zm2 8v-6h5l.001 6Z'/%3E%3Cpath fill='none' d='M0 0h32v32H0z' data-name='&lt;Transparent Rectangle&gt;'/%3E%3C/svg%3E");
}

html[saved-theme="dark"]
  body
  li.task-list-item[data-task=" "]
  input[type="checkbox"]:checked {
  background-color: rgb(31, 31, 31);
  border-color: rgb(255, 255, 255);
  border-width: 0px;
}

html[saved-theme="light"]
  body
  li.task-list-item[data-task=" "]
  input[type="checkbox"]:checked {
  background-color: rgb(224, 224, 224);
  border-color: rgb(0, 0, 0);
  border-width: 0px;
}

html[saved-theme="dark"]
  body
  li.task-list-item[data-task=" "]
  input[type="checkbox"]:checked:after {
  border: none;
}

html[saved-theme="light"]
  body
  li.task-list-item[data-task=" "]
  input[type="checkbox"]:checked:after {
  border: none;
}
`,
};
