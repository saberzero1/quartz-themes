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
  --background-modifier-border: #1F1F1F;
  --background-modifier-border-focus: #1F1F1F;
  --background-modifier-border-hover: #383838;
  --background-modifier-form-field: #1F1F1F;
  --background-modifier-form-field-hover: #1F1F1F;
  --background-primary: #090909;
  --background-primary-alt: #1F1F1F;
  --background-secondary: #000000;
  --background-secondary-alt: #1F1F1F;
  --bases-cards-background: #090909;
  --bases-cards-cover-background: #1F1F1F;
  --bases-cards-shadow: 0 0 0 1px #1F1F1F;
  --bases-cards-shadow-hover: 0 0 0 1px #383838;
  --bases-embed-border-color: #1F1F1F;
  --bases-group-heading-property-color: #808080;
  --bases-table-border-color: #1F1F1F;
  --bases-table-cell-background-active: #090909;
  --bases-table-cell-background-disabled: #1F1F1F;
  --bases-table-cell-shadow-active: 0 0 0 2px #1F1F1F;
  --bases-table-group-background: #1F1F1F;
  --bases-table-header-background: #090909;
  --bases-table-header-color: #808080;
  --bases-table-summary-background: #090909;
  --blur-background: color-mix(in srgb, #1F1F1F 65%, transparent) linear-gradient(#1F1F1F, color-mix(in srgb, #1F1F1F 65%, transparent));
  --bodyFont: var(--font-text);
  --callout-blend-mode: normal;
  --callout-radius: 8px;
  --canvas-background: #090909;
  --canvas-card-label-color: #5F5F5F;
  --canvas-dot-pattern: #1F1F1F;
  --caret-color: #bdbdbd;
  --chalk-grey: #dddddd;
  --chalk-grey-accent: #cbcbcb;
  --checkbox-border-color: #5F5F5F;
  --checkbox-border-color-hover: #808080;
  --checkbox-marker-color: #090909;
  --checklist-done-color: #808080;
  --code-background: #1F1F1F;
  --code-border-color: #1F1F1F;
  --code-comment: #5F5F5F;
  --code-normal: #bdbdbd;
  --code-punctuation: #808080;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #5F5F5F;
  --color-base-00: #090909;
  --color-base-10: #1F1F1F;
  --color-base-100: #C6C6C6;
  --color-base-20: #000000;
  --color-base-25: #1F1F1F;
  --color-base-30: #1F1F1F;
  --color-base-35: #383838;
  --color-base-40: #1F1F1F;
  --color-base-50: #808080;
  --color-base-60: #5F5F5F;
  --color-base-70: #bdbdbd;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #1F1F1F;
  --dropdown-background: #1F1F1F;
  --dropdown-background-hover: #383838;
  --embed-block-shadow-hover: 0 0 0 1px #1F1F1F, inset 0 0 0 1px #1F1F1F;
  --file-header-background: #090909;
  --file-header-background-focused: #090909;
  --file-header-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 74ch;
  --flair-background: #1F1F1F;
  --flair-color: #bdbdbd;
  --floating-toc-header-background: #000000;
  --font-interface: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Inter", sans-serif;
  --font-mermaid: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Source Code Pro", monospace;
  --font-print: '??', '??', "Space Grotesk", sans-serif, 'Arial';
  --font-text: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Space Grotesk", sans-serif;
  --font-title: "Peace Sans", sans-serif;
  --footnote-divider-color: #1F1F1F;
  --footnote-id-color: #808080;
  --footnote-id-color-no-occurrences: #5F5F5F;
  --graph-line: #383838;
  --graph-node: #808080;
  --graph-node-unresolved: #5F5F5F;
  --graph-text: #bdbdbd;
  --gray: var(--text-muted);
  --h1-color: #dddddd;
  --h1-font: 'Peace Sans';
  --h1-gradient-accent: #bec4ff;
  --h1-weight: 00;
  --h2-color: #dddddd;
  --h2-font: 'Peace Sans';
  --h2-gradient-accent: #9ac0ff;
  --h2-weight: 00;
  --h3-color: #dddddd;
  --h3-font: 'Peace Sans';
  --h3-gradient-accent: #b999e8;
  --h3-weight: 000;
  --h4-color: #dddddd;
  --h4-font: 'Peace Sans';
  --h4-gradient-accent: #f088ca;
  --h4-weight: 00;
  --h5-color: #dddddd;
  --h5-font: 'Peace Sans';
  --h5-gradient-accent: #8e91eb;
  --h5-weight: 00;
  --h6-color: #dddddd;
  --h6-font: 'Peace Sans';
  --h6-gradient-accent: #e990eb;
  --h6-weight: 00;
  --headerFont: var(--font-text);
  --heading-formatting: #5F5F5F;
  --hr-color: #1F1F1F;
  --icon-color: #808080;
  --icon-color-focused: #bdbdbd;
  --icon-color-hover: #808080;
  --inline-title-color: #dddddd;
  --inline-title-font: 'Peace Sans';
  --inline-title-weight: 00;
  --input-date-separator: #5F5F5F;
  --input-placeholder-color: #5F5F5F;
  --interactive-hover: #383838;
  --interactive-normal: #1F1F1F;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #808080;
  --link-color-hover: #bdbdbd;
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #808080;
  --link-unresolved-decoration-color: transparent;
  --list-marker-color: #5F5F5F;
  --list-marker-color-hover: #808080;
  --menu-background: #000000;
  --menu-border-color: #383838;
  --metadata-border-color: #1F1F1F;
  --metadata-divider-color: #1F1F1F;
  --metadata-input-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #bdbdbd;
  --metadata-label-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #808080;
  --metadata-label-text-color-hover: #808080;
  --metadata-property-box-shadow-focus: 0 0 0 2px #1F1F1F;
  --metadata-property-box-shadow-hover: 0 0 0 1px #383838;
  --modal-background: #090909;
  --modal-border-color: #1F1F1F;
  --nav-collapse-icon-color: #5F5F5F;
  --nav-collapse-icon-color-collapsed: #5F5F5F;
  --nav-heading-color: #bdbdbd;
  --nav-heading-color-collapsed: #5F5F5F;
  --nav-heading-color-collapsed-hover: #808080;
  --nav-heading-color-hover: #bdbdbd;
  --nav-item-color: #808080;
  --nav-item-color-active: #bdbdbd;
  --nav-item-color-hover: #bdbdbd;
  --nav-item-color-selected: #bdbdbd;
  --nav-tag-color: #5F5F5F;
  --nav-tag-color-active: #808080;
  --nav-tag-color-hover: #808080;
  --o-border: 1px solid #1F1F1F;
  --pdf-background: #090909;
  --pdf-page-background: #090909;
  --pdf-shadow: 0 0 0 1px #1F1F1F;
  --pdf-sidebar-background: #090909;
  --pdf-thumbnail-shadow: 0 0 0 1px #1F1F1F;
  --pill-border-color: #1F1F1F;
  --pill-border-color-hover: #383838;
  --pill-color: #808080;
  --pill-color-hover: #bdbdbd;
  --pill-color-remove: #5F5F5F;
  --prompt-background: #090909;
  --prompt-border-color: #1F1F1F;
  --raised-background: color-mix(in srgb, #1F1F1F 65%, transparent) linear-gradient(#1F1F1F, color-mix(in srgb, #1F1F1F 65%, transparent));
  --ribbon-background: #000000;
  --ribbon-background-collapsed: #090909;
  --search-clear-button-color: #808080;
  --search-icon-color: #808080;
  --search-result-background: #090909;
  --setting-group-heading-color: #bdbdbd;
  --setting-items-background: #1F1F1F;
  --setting-items-border-color: #1F1F1F;
  --slider-thumb-border-color: #383838;
  --slider-track-background: #1F1F1F;
  --status-bar-background: #000000;
  --status-bar-border-color: #1F1F1F;
  --status-bar-text-color: #808080;
  --suggestion-background: #090909;
  --tab-background-active: #090909;
  --tab-container-background: #000000;
  --tab-divider-color: #383838;
  --tab-outline-color: #1F1F1F;
  --tab-switcher-background: #000000;
  --tab-switcher-menubar-background: linear-gradient(to top, #000000, transparent);
  --tab-text-color: #5F5F5F;
  --tab-text-color-active: #808080;
  --tab-text-color-focused: #808080;
  --tab-text-color-focused-active: #808080;
  --tab-text-color-focused-active-current: #bdbdbd;
  --table-add-button-border-color: #1F1F1F;
  --table-border-color: #1F1F1F;
  --table-drag-handle-color: #5F5F5F;
  --table-header-border-color: #1F1F1F;
  --table-header-color: #bdbdbd;
  --text-faint: #5F5F5F;
  --text-muted: #808080;
  --text-normal: #bdbdbd;
  --titleFont: var(--font-text);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #1F1F1F;
  --titlebar-text-color: #808080;
  --titlebar-text-color-focused: #bdbdbd;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94);
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95);
  --vault-profile-color: #bdbdbd;
  --vault-profile-color-hover: #bdbdbd;
  --quartz-icon-color: currentColor;
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
  --background-modifier-border: #E0E0E0;
  --background-modifier-border-focus: #BDBDBD;
  --background-modifier-border-hover: #D4D4D4;
  --background-modifier-form-field: #FFF;
  --background-modifier-form-field-hover: #FFF;
  --background-primary: #FFF;
  --background-primary-alt: #FAFAFA;
  --background-secondary: #F3F3F3;
  --background-secondary-alt: #FCFCFC;
  --bases-cards-background: #FFF;
  --bases-cards-cover-background: #FAFAFA;
  --bases-cards-shadow: 0 0 0 1px #E0E0E0;
  --bases-cards-shadow-hover: 0 0 0 1px #D4D4D4;
  --bases-embed-border-color: #E0E0E0;
  --bases-group-heading-property-color: #ABABAB;
  --bases-table-border-color: #E0E0E0;
  --bases-table-cell-background-active: #FFF;
  --bases-table-cell-background-disabled: #FAFAFA;
  --bases-table-cell-shadow-active: 0 0 0 2px #BDBDBD;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-group-background: #FAFAFA;
  --bases-table-header-background: #FFF;
  --bases-table-header-color: #ABABAB;
  --bases-table-summary-background: #FFF;
  --blockquote-border-color: rgb(138, 92, 245);
  --blur-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent));
  --bodyFont: var(--font-text);
  --callout-blend-mode: normal;
  --callout-radius: 8px;
  --canvas-background: #FFF;
  --canvas-card-label-color: #707070;
  --canvas-dot-pattern: #E0E0E0;
  --caret-color: #5A5A5A;
  --chalk-grey: #686868;
  --chalk-grey-accent: #636363;
  --checkbox-border-color: #707070;
  --checkbox-border-color-hover: #ABABAB;
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-marker-color: #FFF;
  --checklist-done-color: #ABABAB;
  --code-background: #FAFAFA;
  --code-border-color: #E0E0E0;
  --code-comment: #707070;
  --code-normal: #5A5A5A;
  --code-punctuation: #ABABAB;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #707070;
  --color-base-00: #FFF;
  --color-base-05: #FCFCFC;
  --color-base-10: #FAFAFA;
  --color-base-100: #222;
  --color-base-20: #F3F3F3;
  --color-base-25: #E3E3E3;
  --color-base-30: #E0E0E0;
  --color-base-35: #D4D4D4;
  --color-base-40: #BDBDBD;
  --color-base-50: #ABABAB;
  --color-base-70: #5A5A5A;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #E0E0E0;
  --divider-color-hover: rgb(138, 92, 245);
  --dropdown-background: #FFF;
  --dropdown-background-hover: #FAFAFA;
  --embed-block-shadow-hover: 0 0 0 1px #E0E0E0, inset 0 0 0 1px #E0E0E0;
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --file-header-background: #FFF;
  --file-header-background-focused: #FFF;
  --file-header-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --file-line-width: 74ch;
  --flair-background: #FFF;
  --flair-color: #5A5A5A;
  --floating-toc-header-background: #F3F3F3;
  --font-interface: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Inter", sans-serif;
  --font-mermaid: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: "Source Code Pro", monospace;
  --font-print: '??', '??', "Space Grotesk", sans-serif, 'Arial';
  --font-text: '??', "Space Grotesk", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Space Grotesk", sans-serif;
  --font-title: "Peace Sans", sans-serif;
  --footnote-divider-color: #E0E0E0;
  --footnote-id-color: #ABABAB;
  --footnote-id-color-no-occurrences: #707070;
  --graph-line: #D4D4D4;
  --graph-node: #ABABAB;
  --graph-node-unresolved: #707070;
  --graph-text: #5A5A5A;
  --gray: var(--text-muted);
  --h1-color: #686868;
  --h1-font: 'Peace Sans';
  --h1-gradient-accent: #5968fb;
  --h1-weight: 00;
  --h2-color: #686868;
  --h2-font: 'Peace Sans';
  --h2-gradient-accent: #3372ca;
  --h2-weight: 00;
  --h3-color: #686868;
  --h3-font: 'Peace Sans';
  --h3-gradient-accent: #6f33ca;
  --h3-weight: 000;
  --h4-color: #686868;
  --h4-font: 'Peace Sans';
  --h4-gradient-accent: #ca3393;
  --h4-weight: 00;
  --h5-color: #686868;
  --h5-font: 'Peace Sans';
  --h5-gradient-accent: #262cda;
  --h5-weight: 00;
  --h6-color: #686868;
  --h6-font: 'Peace Sans';
  --h6-gradient-accent: #f21bf6;
  --h6-weight: 00;
  --headerFont: var(--font-text);
  --heading-formatting: #707070;
  --hr-color: #E0E0E0;
  --icon-color: #ABABAB;
  --icon-color-focused: #5A5A5A;
  --icon-color-hover: #ABABAB;
  --inline-title-color: #686868;
  --inline-title-font: 'Peace Sans';
  --inline-title-weight: 00;
  --input-date-separator: #707070;
  --input-placeholder-color: #707070;
  --interactive-accent: rgb(138, 92, 245);
  --interactive-hover: #FAFAFA;
  --interactive-normal: #FFF;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #ABABAB;
  --link-color-hover: #5A5A5A;
  --link-decoration-hover: none;
  --link-decoration-thickness: 13%;
  --link-external-decoration: none;
  --link-external-decoration-hover: none;
  --link-unresolved-color: #ABABAB;
  --link-unresolved-decoration-color: transparent;
  --list-marker-color: #707070;
  --list-marker-color-hover: #ABABAB;
  --menu-background: #F3F3F3;
  --menu-border-color: #D4D4D4;
  --metadata-border-color: #E0E0E0;
  --metadata-divider-color: #E0E0E0;
  --metadata-input-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #5A5A5A;
  --metadata-label-font: '??', "Inter", sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-label-text-color: #ABABAB;
  --metadata-label-text-color-hover: #ABABAB;
  --metadata-property-box-shadow-focus: 0 0 0 2px #BDBDBD;
  --metadata-property-box-shadow-hover: 0 0 0 1px #D4D4D4;
  --modal-background: #FFF;
  --modal-border-color: #BDBDBD;
  --nav-collapse-icon-color: #707070;
  --nav-collapse-icon-color-collapsed: #707070;
  --nav-heading-color: #5A5A5A;
  --nav-heading-color-collapsed: #707070;
  --nav-heading-color-collapsed-hover: #ABABAB;
  --nav-heading-color-hover: #5A5A5A;
  --nav-item-color: #ABABAB;
  --nav-item-color-active: #5A5A5A;
  --nav-item-color-hover: #5A5A5A;
  --nav-item-color-selected: #5A5A5A;
  --nav-tag-color: #707070;
  --nav-tag-color-active: #ABABAB;
  --nav-tag-color-hover: #ABABAB;
  --o-border: 1px solid #E0E0E0;
  --pdf-background: #FFF;
  --pdf-page-background: #FFF;
  --pdf-sidebar-background: #FFF;
  --pill-border-color: #E0E0E0;
  --pill-border-color-hover: #D4D4D4;
  --pill-color: #ABABAB;
  --pill-color-hover: #5A5A5A;
  --pill-color-remove: #707070;
  --prompt-background: #FFF;
  --prompt-border-color: #BDBDBD;
  --raised-background: color-mix(in srgb, #FFF 65%, transparent) linear-gradient(#FFF, color-mix(in srgb, #FFF 65%, transparent));
  --ribbon-background: #F3F3F3;
  --ribbon-background-collapsed: #FFF;
  --search-clear-button-color: #ABABAB;
  --search-icon-color: #ABABAB;
  --search-result-background: #FFF;
  --secondary: var(--interactive-accent);
  --setting-group-heading-color: #5A5A5A;
  --setting-items-background: #FAFAFA;
  --setting-items-border-color: #E0E0E0;
  --slider-thumb-border-color: #D4D4D4;
  --slider-track-background: #E0E0E0;
  --status-bar-background: #F3F3F3;
  --status-bar-border-color: #E0E0E0;
  --status-bar-text-color: #ABABAB;
  --suggestion-background: #FFF;
  --tab-background-active: #FFF;
  --tab-container-background: #F3F3F3;
  --tab-divider-color: #D4D4D4;
  --tab-outline-color: #E0E0E0;
  --tab-switcher-background: #F3F3F3;
  --tab-switcher-menubar-background: linear-gradient(to top, #F3F3F3, transparent);
  --tab-text-color: #707070;
  --tab-text-color-active: #ABABAB;
  --tab-text-color-focused: #ABABAB;
  --tab-text-color-focused-active: #ABABAB;
  --tab-text-color-focused-active-current: #5A5A5A;
  --table-add-button-border-color: #E0E0E0;
  --table-border-color: #E0E0E0;
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-drag-handle-color: #707070;
  --table-header-border-color: #E0E0E0;
  --table-header-color: #5A5A5A;
  --table-selection-border-color: rgb(138, 92, 245);
  --text-faint: #707070;
  --text-muted: #ABABAB;
  --text-normal: #5A5A5A;
  --text-selection: #E0E0E0;
  --titleFont: var(--font-text);
  --titlebar-background: transparent;
  --titlebar-background-focused: transparent;
  --titlebar-border-color: #E0E0E0;
  --titlebar-text-color: #ABABAB;
  --titlebar-text-color-focused: #5A5A5A;
  --transition-03: all 0.2s cubic-bezier(0.25, 0.47, 0.45, 0.94);
  --transition-05: all 0.3s cubic-bezier(0.25, 0.46, 0.46, 0.95);
  --vault-profile-color: #5A5A5A;
  --vault-profile-color-hover: #5A5A5A;
  --quartz-icon-color: currentColor;
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
