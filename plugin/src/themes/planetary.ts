import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "planetary",
    modes: ["dark", "light"],
    variations: [],
    fonts: ["ibm-plex-sans"],
  },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --accent-h: 4;
  --accent-l: 64%;
  --accent-s: 89%;
  --background-code: #232120;
  --background-code-preview: #232120;
  --background-modifier-active-hover: rgba(245, 92, 81, 0.15);
  --background-modifier-border: #232120;
  --background-modifier-border-focus: #807874;
  --background-modifier-border-hover: #ffebd1;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #f85c51;
  --background-modifier-error-hover: #f85c51;
  --background-modifier-hover: rgba(255, 255, 255, 0.075);
  --background-modifier-success: #23d18c;
  --background-preview: #121110;
  --background-primary: #121110;
  --background-primary-alt: #232120;
  --background-quick: #232120;
  --background-secondary: #181716;
  --background-secondary-alt: #181716;
  --background-tag: #000000;
  --bases-cards-background: #121110;
  --bases-cards-cover-background: #232120;
  --bases-cards-shadow: 0 0 0 1px #232120;
  --bases-cards-shadow-hover: 0 0 0 1px #ffebd1;
  --bases-embed-border-color: #232120;
  --bases-group-heading-property-color: #807874;
  --bases-table-border-color: #232120;
  --bases-table-cell-background-active: #121110;
  --bases-table-cell-background-disabled: #232120;
  --bases-table-cell-background-selected: rgba(245, 92, 81, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #807874;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 92, 81);
  --bases-table-group-background: #232120;
  --bases-table-header-background: #121110;
  --bases-table-header-background-hover: rgba(255, 255, 255, 0.075);
  --bases-table-header-color: #807874;
  --bases-table-summary-background: #121110;
  --bases-table-summary-background-hover: rgba(255, 255, 255, 0.075);
  --blockquote-border-color: rgb(245, 92, 81);
  --blur-background: color-mix(in srgb, #232120 65%, transparent) linear-gradient(#232120, color-mix(in srgb, #232120 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #f85c51;
  --bold-weight: 600;
  --canvas-background: #121110;
  --canvas-card-label-color: rgb(245, 92, 81);
  --canvas-contrast-high: #ffebd1;
  --canvas-contrast-low: #807874;
  --canvas-contrast-medium: #989692;
  --canvas-dot-pattern: #181716;
  --canvas1: #121110;
  --canvas2: #232120;
  --canvas3: #181716;
  --canvas4: #403938;
  --caret-color: #ffebd1;
  --checkbox-border-color: rgb(245, 92, 81);
  --checkbox-border-color-hover: #807874;
  --checkbox-color: rgb(245, 92, 81);
  --checkbox-color-hover: #a83e37;
  --checkbox-marker-color: #121110;
  --checklist-done-color: #807874;
  --code-background: #181716;
  --code-border-color: #232120;
  --code-bracket-background: rgba(255, 255, 255, 0.075);
  --code-comment: rgb(245, 92, 81);
  --code-normal: #989692;
  --code-operator: #f85c51;
  --code-property: #0acecb;
  --code-punctuation: #807874;
  --code-string: #23d18c;
  --code-tag: #f85c51;
  --code-value: #a29bfe;
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(245, 92, 81);
  --collapse-icon-color-collapsed: rgb(245, 92, 81);
  --color-accent: rgb(245, 92, 81);
  --color-accent-1: #f85c51;
  --color-accent-2: #a83e37;
  --color-accent-hsl: 4, 89%, 64%;
  --color-blue: #69afff;
  --color-cyan: #0acecb;
  --color-green: #23d18c;
  --color-head: rgb(245, 92, 81);
  --color-purple: #a29bfe;
  --color-red: #f85c51;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #232120;
  --divider-color-hover: rgb(245, 92, 81);
  --dropdown-background: #232120;
  --dropdown-background-hover: #403938;
  --embed-block-shadow-hover: 0 0 0 1px #232120,
	  inset 0 0 0 1px #232120;
  --embed-border-left: 2px solid rgb(245, 92, 81);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(245, 92, 81);
  --file-header-background: #121110;
  --file-header-background-focused: #121110;
  --file-hr: #232120;
  --file-margins: 32px;
  --flair-background: #232120;
  --flair-color: #ffebd1;
  --font-mermaid: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', IBM Plex Sans, sans-serif, 'Arial';
  --font-text: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: IBM Plex Sans, sans-serif;
  --footnote-divider-color: #232120;
  --footnote-id-color: #807874;
  --footnote-id-color-no-occurrences: rgb(245, 92, 81);
  --footnote-input-background-active: rgba(255, 255, 255, 0.075);
  --graph-line: #ffebd1;
  --graph-node: #807874;
  --graph-node-focused: rgb(245, 92, 81);
  --graph-node-tag: #23d18c;
  --graph-node-unresolved: rgb(245, 92, 81);
  --graph-text: #ffebd1;
  --gray: var(--text-muted);
  --h1-color: rgb(245, 92, 81);
  --h1-size: 2.00em;
  --h2-color: rgb(245, 92, 81);
  --h2-size: 1.8em;
  --h2-weight: 600;
  --h3-color: rgb(245, 92, 81);
  --h3-size: 1.4em;
  --h3-weight: 600;
  --h4-color: rgb(245, 92, 81);
  --h4-size: 1.2em;
  --h4-weight: 600;
  --h5-color: rgb(245, 92, 81);
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-color: rgb(245, 92, 81);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(245, 92, 81);
  --highlight: var(--text-highlight-bg);
  --hr-color: #232120;
  --icon-color: #807874;
  --icon-color-active: rgb(245, 92, 81);
  --icon-color-focused: #ffebd1;
  --icon-color-hover: #807874;
  --inline-title-color: rgb(245, 92, 81);
  --inline-title-size: 2.00em;
  --input-date-separator: rgb(245, 92, 81);
  --input-placeholder-color: rgb(245, 92, 81);
  --interactive-accent: rgb(245, 92, 81);
  --interactive-accent-hover: #a83e37;
  --interactive-accent-hsl: 4, 89%, 64%;
  --interactive-hover: #403938;
  --interactive-normal: #232120;
  --italic-color: #0acecb;
  --leaf-handle: #232120;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(245, 92, 81);
  --link-color-hover: #a83e37;
  --link-external-color: rgb(245, 92, 81);
  --link-external-color-hover: #a83e37;
  --link-unresolved-color: rgb(245, 92, 81);
  --link-unresolved-decoration-color: rgba(245, 92, 81, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(245, 92, 81);
  --list-marker-color-collapsed: rgb(245, 92, 81);
  --list-marker-color-hover: #807874;
  --menu-background: #181716;
  --menu-border-color: #ffebd1;
  --menu-selection: #232120;
  --menu-selection-text: #ffebd1;
  --metadata-border-color: #232120;
  --metadata-divider-color: #232120;
  --metadata-input-background-active: rgba(255, 255, 255, 0.075);
  --metadata-input-text-color: #ffebd1;
  --metadata-label-background-active: rgba(255, 255, 255, 0.075);
  --metadata-label-text-color: #807874;
  --metadata-label-text-color-hover: #807874;
  --metadata-property-background-active: rgba(255, 255, 255, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #807874;
  --metadata-property-box-shadow-hover: 0 0 0 1px #ffebd1;
  --modal-background: #121110;
  --modal-border-color: #807874;
  --nav-collapse-icon-color: rgb(245, 92, 81);
  --nav-collapse-icon-color-collapsed: rgb(245, 92, 81);
  --nav-heading-color: #ffebd1;
  --nav-heading-color-collapsed: rgb(245, 92, 81);
  --nav-heading-color-collapsed-hover: #807874;
  --nav-heading-color-hover: #ffebd1;
  --nav-item-background-active: rgba(255, 255, 255, 0.075);
  --nav-item-background-hover: rgba(255, 255, 255, 0.075);
  --nav-item-background-selected: rgba(245, 92, 81, 0.15);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #807874;
  --nav-item-color-active: #ffebd1;
  --nav-item-color-highlighted: #a83e37;
  --nav-item-color-hover: #ffebd1;
  --nav-item-color-selected: #ffebd1;
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(245, 92, 81);
  --nav-tag-color-active: #807874;
  --nav-tag-color-hover: #807874;
  --pdf-background: #121110;
  --pdf-page-background: #121110;
  --pdf-shadow: 0 0 0 1px #232120;
  --pdf-sidebar-background: #121110;
  --pdf-thumbnail-shadow: 0 0 0 1px #232120;
  --pill-border-color: #232120;
  --pill-border-color-hover: #ffebd1;
  --pill-color: #807874;
  --pill-color-hover: #ffebd1;
  --pill-color-remove: rgb(245, 92, 81);
  --pill-color-remove-hover: rgb(245, 92, 81);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #121110;
  --prompt-border-color: #807874;
  --raised-background: color-mix(in srgb, #232120 65%, transparent) linear-gradient(#232120, color-mix(in srgb, #232120 65%, transparent));
  --ribbon-background: #181716;
  --ribbon-background-collapsed: #121110;
  --scrollbar-bg: #232120;
  --search-clear-button-color: #807874;
  --search-icon-color: #807874;
  --search-result-background: #121110;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ffebd1;
  --setting-items-background: #232120;
  --setting-items-border-color: #232120;
  --slider-thumb-border-color: #ffebd1;
  --slider-thumb-radius: 50%;
  --slider-track-background: #232120;
  --status-bar-background: #181716;
  --status-bar-border-color: #232120;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #807874;
  --suggestion-background: #121110;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #f85c51;
  --sync-avatar-color-4: #23d18c;
  --sync-avatar-color-5: #0acecb;
  --sync-avatar-color-6: #69afff;
  --sync-avatar-color-7: #a29bfe;
  --tab-background-active: #121110;
  --tab-container-background: #181716;
  --tab-divider-color: #232120;
  --tab-outline-color: #232120;
  --tab-radius: 8px 8px 0 0;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #181716;
  --tab-switcher-menubar-background: linear-gradient(to top, #181716, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 92, 81);
  --tab-text-color: #807874;
  --tab-text-color-active: #807874;
  --tab-text-color-focused: #807874;
  --tab-text-color-focused-active: #807874;
  --tab-text-color-focused-active-current: #ffebd1;
  --tab-text-color-focused-highlighted: rgb(245, 92, 81);
  --table-add-button-border-color: #232120;
  --table-border-color: #232120;
  --table-drag-handle-background-active: rgb(245, 92, 81);
  --table-drag-handle-color: rgb(245, 92, 81);
  --table-drag-handle-color-active: #121110;
  --table-header-background: #181716;
  --table-header-background-hover: #181716;
  --table-header-border-color: #232120;
  --table-header-color: rgb(245, 92, 81);
  --table-header-weight: 600;
  --table-line: #807874;
  --table-selection: rgba(245, 92, 81, 0.1);
  --table-selection-border-color: rgb(245, 92, 81);
  --table-selection-border-radius: 8px;
  --tag-background: #782b1d52;
  --tag-background-hover: rgba(245, 92, 81, 0.2);
  --tag-border-color: rgba(245, 92, 81, 0.15);
  --tag-border-color-hover: rgba(245, 92, 81, 0.15);
  --tag-color: rgb(245, 92, 81);
  --tag-color-hover: rgb(245, 92, 81);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(245, 92, 81);
  --text-accent-hover: #a83e37;
  --text-error: #f85c51;
  --text-faint: rgb(245, 92, 81);
  --text-highlight-bg: #69afff;
  --text-muted: #807874;
  --text-normal: #ffebd1;
  --text-on-accent: #121110;
  --text-selection: #403938;
  --text-success: #23d18c;
  --text-tag: #23d18c;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #181716;
  --titlebar-background-focused: #181716;
  --titlebar-border-color: #232120;
  --titlebar-text-color: #807874;
  --titlebar-text-color-focused: #ffebd1;
  --vault-name-color: #ffebd1;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #ffebd1;
  --vault-profile-color-hover: #ffebd1;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(24, 23, 22);
  color: rgb(255, 235, 209);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(18, 17, 16);
  color: rgb(255, 235, 209);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(24, 23, 22);
  color: rgb(255, 235, 209);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(35, 33, 32);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(24, 23, 22);
  border-left-color: rgb(35, 33, 32);
  color: rgb(255, 235, 209);
}

body div#quartz-root {
  background-color: rgb(18, 17, 16);
  color: rgb(255, 235, 209);
}`,
    typography: `body .page article p > b, b {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

body .page article p > em, em {
  color: rgb(10, 206, 203);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 206, 203) none 0px;
  text-decoration: rgb(10, 206, 203);
  text-decoration-color: rgb(10, 206, 203);
}

body .page article p > i, i {
  color: rgb(10, 206, 203);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(10, 206, 203) none 0px;
  text-decoration: rgb(10, 206, 203);
  text-decoration-color: rgb(10, 206, 203);
}

body .page article p > strong, strong {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

body .text-highlight {
  background-color: rgb(105, 175, 255);
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body del {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration: line-through rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body p {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  outline: rgb(128, 120, 116) none 0px;
  text-decoration: rgb(128, 120, 116);
  text-decoration-color: rgb(128, 120, 116);
}`,
    links: `body a.external, footer a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
  text-decoration-color: rgb(245, 92, 81);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
  text-decoration-color: rgb(245, 92, 81);
}

body a.internal.broken {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgba(245, 92, 81, 0.3);
  text-decoration-color: rgba(245, 92, 81, 0.3);
}`,
    lists: `body dd {
  color: rgb(255, 235, 209);
}

body dt {
  color: rgb(255, 235, 209);
}

body ol > li {
  color: rgb(255, 235, 209);
}

body ol.overflow {
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body ul > li {
  color: rgb(255, 235, 209);
}

body ul.overflow {
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(245, 92, 81);
  text-decoration: rgb(245, 92, 81);
}

body blockquote {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body table {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 190.469px;
}

body td {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  border-top-width: 0px;
  color: rgb(255, 235, 209);
}

body th {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  border-top-left-radius: 8px;
  color: rgb(245, 92, 81);
}

body tr {
  background-color: rgb(24, 23, 22);
}`,
    code: `body code {
  border-bottom-color: rgb(152, 150, 146);
  border-left-color: rgb(152, 150, 146);
  border-right-color: rgb(152, 150, 146);
  border-top-color: rgb(152, 150, 146);
  color: rgb(152, 150, 146);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(255, 235, 209);
}

body pre > code, pre:has(> code) {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
}

body pre:has(> code) {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body figcaption {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body img {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body video {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    embeds: `body .file-embed {
  background-color: rgb(35, 33, 32);
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
}

body .footnotes {
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

body .transclude {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(128, 120, 116);
  text-decoration: line-through rgb(128, 120, 116);
  text-decoration-color: rgb(128, 120, 116);
}

body input[type=checkbox] {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

body li.task-list-item[data-task='!'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 235, 209);
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(255, 235, 209);
  font-family: "IBM Plex Sans", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 235, 209);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 235, 209) none 0px;
  text-decoration: rgb(255, 235, 209);
  text-decoration-color: rgb(255, 235, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 235, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 235, 209);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(255, 235, 209);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(24, 23, 22);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(255, 255, 255, 0.075);
  color: rgb(255, 235, 209);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(120, 43, 29, 0.32);
  border-bottom-color: rgba(245, 92, 81, 0.15);
  border-left-color: rgba(245, 92, 81, 0.15);
  border-right-color: rgba(245, 92, 81, 0.15);
  border-top-color: rgba(245, 92, 81, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(245, 92, 81);
}

body h1 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

body ::-webkit-scrollbar-corner {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}

body ::-webkit-scrollbar-track {
  background: rgb(18, 17, 16) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(18, 17, 16);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(128, 120, 116);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(128, 120, 116);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(128, 120, 116);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(255, 255, 255, 0.075);
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}`,
    footer: `body footer {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}

body footer ul li a {
  color: rgb(128, 120, 116);
  text-decoration: rgb(128, 120, 116);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 235, 209);
  font-family: "IBM Plex Sans", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(128, 120, 116);
  text-decoration: rgb(128, 120, 116);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body li.section-li > .section .meta {
  color: rgb(128, 120, 116);
  font-family: "IBM Plex Sans", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(128, 120, 116);
  text-decoration: rgb(128, 120, 116);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}

body .darkmode svg {
  color: rgb(128, 120, 116);
  stroke: rgb(128, 120, 116);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}

body .breadcrumb-element p {
  color: rgb(245, 92, 81);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
  color: rgb(255, 235, 209);
}

body .metadata {
  border-bottom-color: rgb(35, 33, 32);
  border-left-color: rgb(35, 33, 32);
  border-right-color: rgb(35, 33, 32);
  border-top-color: rgb(35, 33, 32);
  color: rgb(128, 120, 116);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(24, 23, 22);
}

body .page-header h2.page-title {
  color: rgb(255, 235, 209);
}

body abbr {
  color: rgb(255, 235, 209);
  text-decoration: underline dotted rgb(255, 235, 209);
}

body details {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body input[type=text] {
  border-bottom-color: rgb(128, 120, 116);
  border-left-color: rgb(128, 120, 116);
  border-right-color: rgb(128, 120, 116);
  border-top-color: rgb(128, 120, 116);
  color: rgb(128, 120, 116);
}

body kbd {
  background-color: rgb(24, 23, 22);
  border-bottom-color: rgb(152, 150, 146);
  border-left-color: rgb(152, 150, 146);
  border-right-color: rgb(152, 150, 146);
  border-top-color: rgb(152, 150, 146);
  color: rgb(152, 150, 146);
}

body progress {
  border-bottom-color: rgb(255, 235, 209);
  border-left-color: rgb(255, 235, 209);
  border-right-color: rgb(255, 235, 209);
  border-top-color: rgb(255, 235, 209);
}

body sub {
  color: rgb(255, 235, 209);
}

body summary {
  color: rgb(255, 235, 209);
}

body sup {
  color: rgb(255, 235, 209);
}`,
  },
  light: {
    base: `:root:root {
  --accent-h: 4;
  --accent-l: 64%;
  --accent-s: 89%;
  --background-code: #f6e2db;
  --background-code-preview: #f6e2db;
  --background-modifier-active-hover: rgba(245, 92, 81, 0.15);
  --background-modifier-border: #f6e2db;
  --background-modifier-border-focus: #b29688;
  --background-modifier-border-hover: #4a3827;
  --background-modifier-cover: rgba(0, 0, 0, 0.8);
  --background-modifier-error: #f85c51;
  --background-modifier-error-hover: #f85c51;
  --background-modifier-error-rgb: 251, 70, 76;
  --background-modifier-form-field: #fffefd;
  --background-modifier-form-field-hover: #fffefd;
  --background-modifier-hover: rgba(0, 0, 0, 0.075);
  --background-modifier-success: #0cc77c;
  --background-modifier-success-rgb: 68, 207, 110;
  --background-preview: #fffefd;
  --background-primary: #fffefd;
  --background-primary-alt: #f6e2db;
  --background-quick: #f6e2db;
  --background-secondary: #fdf9f5;
  --background-secondary-alt: #fdf9f5;
  --background-tag: #000000;
  --bases-cards-background: #fffefd;
  --bases-cards-cover-background: #f6e2db;
  --bases-cards-shadow: 0 0 0 1px #f6e2db;
  --bases-cards-shadow-hover: 0 0 0 1px #4a3827;
  --bases-embed-border-color: #f6e2db;
  --bases-group-heading-property-color: #b29688;
  --bases-table-border-color: #f6e2db;
  --bases-table-cell-background-active: #fffefd;
  --bases-table-cell-background-disabled: #f6e2db;
  --bases-table-cell-background-selected: rgba(245, 92, 81, 0.1);
  --bases-table-cell-shadow-active: 0 0 0 2px #b29688;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(245, 92, 81);
  --bases-table-group-background: #f6e2db;
  --bases-table-header-background: #fffefd;
  --bases-table-header-background-hover: rgba(0, 0, 0, 0.075);
  --bases-table-header-color: #b29688;
  --bases-table-summary-background: #fffefd;
  --bases-table-summary-background-hover: rgba(0, 0, 0, 0.075);
  --blockquote-border-color: rgb(245, 92, 81);
  --blur-background: color-mix(in srgb, #fffefd 65%, transparent) linear-gradient(#fffefd, color-mix(in srgb, #fffefd 65%, transparent));
  --bodyFont: var(--font-text);
  --bold-color: #f85c51;
  --bold-weight: 600;
  --callout-bug: 251, 70, 76;
  --callout-default: 2, 122, 255;
  --callout-error: 251, 70, 76;
  --callout-example: 168, 130, 255;
  --callout-fail: 251, 70, 76;
  --callout-important: 83, 223, 221;
  --callout-info: 2, 122, 255;
  --callout-question: 233, 151, 63;
  --callout-success: 68, 207, 110;
  --callout-summary: 83, 223, 221;
  --callout-tip: 83, 223, 221;
  --callout-todo: 2, 122, 255;
  --callout-warning: 233, 151, 63;
  --canvas-background: #fffefd;
  --canvas-card-label-color: rgb(245, 92, 81);
  --canvas-color-1: 251, 70, 76;
  --canvas-color-2: 233, 151, 63;
  --canvas-color-3: 224, 222, 113;
  --canvas-color-4: 68, 207, 110;
  --canvas-color-5: 83, 223, 221;
  --canvas-color-6: 168, 130, 255;
  --canvas-contrast-high: #4a3827;
  --canvas-contrast-low: #b29688;
  --canvas-contrast-medium: #765c4f;
  --canvas-dot-pattern: #fdf9f5;
  --canvas1: #fffefd;
  --canvas2: #f6e2db;
  --canvas3: #fdf9f5;
  --canvas4: #d7c3ba;
  --caret-color: #4a3827;
  --checkbox-border-color: rgb(245, 92, 81);
  --checkbox-border-color-hover: #b29688;
  --checkbox-color: rgb(245, 92, 81);
  --checkbox-color-hover: #a83e37;
  --checkbox-marker-color: #fffefd;
  --checklist-done-color: #b29688;
  --code-background: #fdf9f5;
  --code-border-color: #f6e2db;
  --code-bracket-background: rgba(0, 0, 0, 0.075);
  --code-comment: rgb(245, 92, 81);
  --code-function: #eacf00;
  --code-important: #e9973f;
  --code-keyword: #f22c96;
  --code-normal: #765c4f;
  --code-operator: #f85c51;
  --code-property: rgb(14, 205, 201);
  --code-punctuation: #b29688;
  --code-string: #0cc77c;
  --code-tag: #f85c51;
  --code-value: #a29bfe;
  --codeFont: var(--font-text);
  --collapse-icon-color: rgb(245, 92, 81);
  --collapse-icon-color-collapsed: rgb(245, 92, 81);
  --color-accent: rgb(245, 92, 81);
  --color-accent-1: #f85c51;
  --color-accent-2: #a83e37;
  --color-accent-hsl: 4, 89%, 64%;
  --color-blue: #d6e9ff;
  --color-blue-rgb: 2, 122, 255;
  --color-cyan: rgb(14, 205, 201);
  --color-cyan-rgb: 83, 223, 221;
  --color-green: #0cc77c;
  --color-green-rgb: 68, 207, 110;
  --color-head: rgb(245, 92, 81);
  --color-orange: #e9973f;
  --color-orange-rgb: 233, 151, 63;
  --color-pink: #f22c96;
  --color-pink-rgb: 250, 153, 205;
  --color-purple: #a29bfe;
  --color-purple-rgb: 168, 130, 255;
  --color-red: #f85c51;
  --color-red-rgb: 251, 70, 76;
  --color-yellow: #eacf00;
  --color-yellow-rgb: 224, 222, 113;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #f6e2db;
  --divider-color-hover: rgb(245, 92, 81);
  --dropdown-background: #f6e2db;
  --dropdown-background-hover: #d7c3ba;
  --embed-block-shadow-hover: 0 0 0 1px #f6e2db,
	  inset 0 0 0 1px #f6e2db;
  --embed-border-left: 2px solid rgb(245, 92, 81);
  --embed-border-right: none;
  --embed-border-start: 2px solid rgb(245, 92, 81);
  --file-header-background: #fffefd;
  --file-header-background-focused: #fffefd;
  --file-hr: #f6e2db;
  --file-margins: 32px;
  --flair-background: #f6e2db;
  --flair-color: #4a3827;
  --font-mermaid: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', IBM Plex Sans, sans-serif, 'Arial';
  --font-text: '??', IBM Plex Sans, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: IBM Plex Sans, sans-serif;
  --footnote-divider-color: #f6e2db;
  --footnote-id-color: #b29688;
  --footnote-id-color-no-occurrences: rgb(245, 92, 81);
  --footnote-input-background-active: rgba(0, 0, 0, 0.075);
  --graph-line: #4a3827;
  --graph-node: #b29688;
  --graph-node-attachment: #eacf00;
  --graph-node-focused: rgb(245, 92, 81);
  --graph-node-tag: #0cc77c;
  --graph-node-unresolved: rgb(245, 92, 81);
  --graph-text: #4a3827;
  --gray: var(--text-muted);
  --h1-color: rgb(245, 92, 81);
  --h1-size: 2.00em;
  --h2-color: rgb(245, 92, 81);
  --h2-size: 1.8em;
  --h2-weight: 600;
  --h3-color: rgb(245, 92, 81);
  --h3-size: 1.4em;
  --h3-weight: 600;
  --h4-color: rgb(245, 92, 81);
  --h4-size: 1.2em;
  --h4-weight: 600;
  --h5-color: rgb(245, 92, 81);
  --h5-size: 1.125em;
  --h5-weight: 600;
  --h6-color: rgb(245, 92, 81);
  --headerFont: var(--font-text);
  --heading-formatting: rgb(245, 92, 81);
  --highlight: var(--text-highlight-bg);
  --hr-color: #f6e2db;
  --icon-color: #b29688;
  --icon-color-active: rgb(245, 92, 81);
  --icon-color-focused: #4a3827;
  --icon-color-hover: #b29688;
  --inline-title-color: rgb(245, 92, 81);
  --inline-title-size: 2.00em;
  --input-date-separator: rgb(245, 92, 81);
  --input-placeholder-color: rgb(245, 92, 81);
  --interactive-accent: rgb(245, 92, 81);
  --interactive-accent-hover: #a83e37;
  --interactive-accent-hsl: 4, 89%, 64%;
  --interactive-hover: #d7c3ba;
  --interactive-normal: #f6e2db;
  --italic-color: rgb(14, 205, 201);
  --leaf-handle: #f6e2db;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: rgb(245, 92, 81);
  --link-color-hover: #a83e37;
  --link-external-color: rgb(245, 92, 81);
  --link-external-color-hover: #a83e37;
  --link-unresolved-color: rgb(245, 92, 81);
  --link-unresolved-decoration-color: rgba(245, 92, 81, 0.3);
  --list-indent: 2.25em;
  --list-marker-color: rgb(245, 92, 81);
  --list-marker-color-collapsed: rgb(245, 92, 81);
  --list-marker-color-hover: #b29688;
  --menu-background: #fdf9f5;
  --menu-border-color: #4a3827;
  --menu-selection: #f6e2db;
  --menu-selection-text: #4a3827;
  --metadata-border-color: #f6e2db;
  --metadata-divider-color: #f6e2db;
  --metadata-input-background-active: rgba(0, 0, 0, 0.075);
  --metadata-input-text-color: #4a3827;
  --metadata-label-background-active: rgba(0, 0, 0, 0.075);
  --metadata-label-text-color: #b29688;
  --metadata-label-text-color-hover: #b29688;
  --metadata-property-background-active: rgba(0, 0, 0, 0.075);
  --metadata-property-box-shadow-focus: 0 0 0 2px #b29688;
  --metadata-property-box-shadow-hover: 0 0 0 1px #4a3827;
  --modal-background: #fffefd;
  --modal-border-color: #b29688;
  --nav-collapse-icon-color: rgb(245, 92, 81);
  --nav-collapse-icon-color-collapsed: rgb(245, 92, 81);
  --nav-heading-color: #4a3827;
  --nav-heading-color-collapsed: rgb(245, 92, 81);
  --nav-heading-color-collapsed-hover: #b29688;
  --nav-heading-color-hover: #4a3827;
  --nav-item-background-active: rgba(0, 0, 0, 0.075);
  --nav-item-background-hover: rgba(0, 0, 0, 0.075);
  --nav-item-background-selected: rgba(245, 92, 81, 0.15);
  --nav-item-children-margin-left: 12px;
  --nav-item-children-padding-left: 4px;
  --nav-item-color: #b29688;
  --nav-item-color-active: #4a3827;
  --nav-item-color-highlighted: #a83e37;
  --nav-item-color-hover: #4a3827;
  --nav-item-color-selected: #4a3827;
  --nav-item-white-space: nowrap;
  --nav-tag-color: rgb(245, 92, 81);
  --nav-tag-color-active: #b29688;
  --nav-tag-color-hover: #b29688;
  --pdf-background: #fffefd;
  --pdf-page-background: #fffefd;
  --pdf-sidebar-background: #fffefd;
  --pill-border-color: #f6e2db;
  --pill-border-color-hover: #4a3827;
  --pill-color: #b29688;
  --pill-color-hover: #4a3827;
  --pill-color-remove: rgb(245, 92, 81);
  --pill-color-remove-hover: rgb(245, 92, 81);
  --popover-max-height: 70vh;
  --popover-pdf-height: 800px;
  --popover-pdf-width: 600px;
  --prompt-background: #fffefd;
  --prompt-border-color: #b29688;
  --raised-background: color-mix(in srgb, #fffefd 65%, transparent) linear-gradient(#fffefd, color-mix(in srgb, #fffefd 65%, transparent));
  --ribbon-background: #fdf9f5;
  --ribbon-background-collapsed: #fffefd;
  --scrollbar-bg: #f6e2db;
  --search-clear-button-color: #b29688;
  --search-icon-color: #b29688;
  --search-result-background: #fffefd;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #4a3827;
  --setting-items-background: #f6e2db;
  --setting-items-border-color: #f6e2db;
  --slider-thumb-border-color: #4a3827;
  --slider-thumb-radius: 50%;
  --slider-track-background: #f6e2db;
  --status-bar-background: #fdf9f5;
  --status-bar-border-color: #f6e2db;
  --status-bar-scroll-padding: 30px;
  --status-bar-text-color: #b29688;
  --suggestion-background: #fffefd;
  --swatch-height: 24px;
  --swatch-width: 24px;
  --sync-avatar-color-1: #f85c51;
  --sync-avatar-color-2: #e9973f;
  --sync-avatar-color-3: #eacf00;
  --sync-avatar-color-4: #0cc77c;
  --sync-avatar-color-5: rgb(14, 205, 201);
  --sync-avatar-color-6: #d6e9ff;
  --sync-avatar-color-7: #a29bfe;
  --sync-avatar-color-8: #f22c96;
  --tab-background-active: #fffefd;
  --tab-container-background: #fdf9f5;
  --tab-divider-color: #f6e2db;
  --tab-outline-color: #f6e2db;
  --tab-radius: 8px 8px 0 0;
  --tab-radius-active: 8px 8px 0 0;
  --tab-stacked-text-align: left;
  --tab-switcher-background: #fdf9f5;
  --tab-switcher-menubar-background: linear-gradient(to top, #fdf9f5, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(245, 92, 81);
  --tab-text-color: #b29688;
  --tab-text-color-active: #b29688;
  --tab-text-color-focused: #b29688;
  --tab-text-color-focused-active: #b29688;
  --tab-text-color-focused-active-current: #4a3827;
  --tab-text-color-focused-highlighted: rgb(245, 92, 81);
  --table-add-button-border-color: #f6e2db;
  --table-border-color: #f6e2db;
  --table-drag-handle-background-active: rgb(245, 92, 81);
  --table-drag-handle-color: rgb(245, 92, 81);
  --table-drag-handle-color-active: #fffefd;
  --table-header-background: #fdf9f5;
  --table-header-background-hover: #fdf9f5;
  --table-header-border-color: #f6e2db;
  --table-header-color: rgb(245, 92, 81);
  --table-header-weight: 600;
  --table-line: #b29688;
  --table-selection: rgba(245, 92, 81, 0.1);
  --table-selection-border-color: rgb(245, 92, 81);
  --table-selection-border-radius: 8px;
  --tag-background: #782b1d52;
  --tag-background-hover: rgba(245, 92, 81, 0.2);
  --tag-border-color: rgba(245, 92, 81, 0.15);
  --tag-border-color-hover: rgba(245, 92, 81, 0.15);
  --tag-color: rgb(245, 92, 81);
  --tag-color-hover: rgb(245, 92, 81);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(245, 92, 81);
  --text-accent-hover: #a83e37;
  --text-error: #f85c51;
  --text-faint: rgb(245, 92, 81);
  --text-highlight-bg: #d6e9ff;
  --text-muted: #b29688;
  --text-normal: #4a3827;
  --text-on-accent: #fffefd;
  --text-selection: #d7c3ba;
  --text-success: #0cc77c;
  --text-tag: #0cc77c;
  --text-warning: #e9973f;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #fdf9f5;
  --titlebar-background-focused: #fdf9f5;
  --titlebar-border-color: #f6e2db;
  --titlebar-text-color: #b29688;
  --titlebar-text-color-focused: #4a3827;
  --vault-name-color: #4a3827;
  --vault-name-font-size: 13px;
  --vault-name-font-weight: 500;
  --vault-profile-color: #4a3827;
  --vault-profile-color-hover: #4a3827;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(253, 249, 245);
  color: rgb(74, 56, 39);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(255, 254, 253);
  color: rgb(74, 56, 39);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(253, 249, 245);
  color: rgb(74, 56, 39);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(246, 226, 219);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(253, 249, 245);
  border-left-color: rgb(246, 226, 219);
  color: rgb(74, 56, 39);
}

body div#quartz-root {
  background-color: rgb(255, 254, 253);
  color: rgb(74, 56, 39);
}`,
    typography: `body .page article p > b, b {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

body .page article p > em, em {
  color: rgb(14, 205, 201);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(14, 205, 201) none 0px;
  text-decoration: rgb(14, 205, 201);
  text-decoration-color: rgb(14, 205, 201);
}

body .page article p > i, i {
  color: rgb(14, 205, 201);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(14, 205, 201) none 0px;
  text-decoration: rgb(14, 205, 201);
  text-decoration-color: rgb(14, 205, 201);
}

body .page article p > strong, strong {
  color: rgb(248, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(248, 92, 81) none 0px;
  text-decoration: rgb(248, 92, 81);
  text-decoration-color: rgb(248, 92, 81);
}

body .text-highlight {
  background-color: rgb(214, 233, 255);
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body del {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration: line-through rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body p {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  outline: rgb(178, 150, 136) none 0px;
  text-decoration: rgb(178, 150, 136);
  text-decoration-color: rgb(178, 150, 136);
}`,
    links: `body a.external, footer a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
  text-decoration-color: rgb(245, 92, 81);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgb(245, 92, 81);
  text-decoration-color: rgb(245, 92, 81);
}

body a.internal.broken {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(245, 92, 81) none 0px;
  text-decoration: underline rgba(245, 92, 81, 0.3);
  text-decoration-color: rgba(245, 92, 81, 0.3);
}`,
    lists: `body dd {
  color: rgb(74, 56, 39);
}

body dt {
  color: rgb(74, 56, 39);
}

body ol > li {
  color: rgb(74, 56, 39);
}

body ol.overflow {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body ul > li {
  color: rgb(74, 56, 39);
}

body ul.overflow {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(245, 92, 81);
  text-decoration: rgb(245, 92, 81);
}

body blockquote {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body table {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 190.469px;
}

body td {
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  border-top-width: 0px;
  color: rgb(74, 56, 39);
}

body th {
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  border-top-left-radius: 8px;
  color: rgb(245, 92, 81);
}

body tr {
  background-color: rgb(253, 249, 245);
}`,
    code: `body code {
  border-bottom-color: rgb(118, 92, 79);
  border-left-color: rgb(118, 92, 79);
  border-right-color: rgb(118, 92, 79);
  border-top-color: rgb(118, 92, 79);
  color: rgb(118, 92, 79);
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  color: rgb(74, 56, 39);
}

body pre > code > [data-line] {
  border-left-color: rgb(234, 207, 0);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(234, 207, 0);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(234, 207, 0);
  border-left-color: rgb(234, 207, 0);
  border-right-color: rgb(234, 207, 0);
  border-top-color: rgb(234, 207, 0);
}

body pre > code, pre:has(> code) {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
}

body pre:has(> code) {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
}`,
    images: `body audio {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body figcaption {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body img {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body video {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    embeds: `body .file-embed {
  background-color: rgb(246, 226, 219);
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
}

body .footnotes {
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

body .transclude {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body .transclude-inner {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(178, 150, 136);
  text-decoration: line-through rgb(178, 150, 136);
  text-decoration-color: rgb(178, 150, 136);
}

body input[type=checkbox] {
  border-bottom-color: rgb(245, 92, 81);
  border-left-color: rgb(245, 92, 81);
  border-right-color: rgb(245, 92, 81);
  border-top-color: rgb(245, 92, 81);
}

body li.task-list-item[data-task='!'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='*'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='-'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='/'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='>'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='?'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='I'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='S'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='b'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='c'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='d'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='f'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='i'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='k'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='l'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='p'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='u'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body li.task-list-item[data-task='w'] {
  color: rgb(74, 56, 39);
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgb(2, 122, 255);
  border-left-color: rgb(2, 122, 255);
  border-right-color: rgb(2, 122, 255);
  border-top-color: rgb(2, 122, 255);
}

body .callout[data-callout="abstract"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-left-color: rgba(83, 223, 221, 0.25);
  border-right-color: rgba(83, 223, 221, 0.25);
  border-top-color: rgba(83, 223, 221, 0.25);
}

body .callout[data-callout="bug"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-left-color: rgba(251, 70, 76, 0.25);
  border-right-color: rgba(251, 70, 76, 0.25);
  border-top-color: rgba(251, 70, 76, 0.25);
}

body .callout[data-callout="danger"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-left-color: rgba(251, 70, 76, 0.25);
  border-right-color: rgba(251, 70, 76, 0.25);
  border-top-color: rgba(251, 70, 76, 0.25);
}

body .callout[data-callout="example"] {
  --callout-color: 168, 130, 255;
  background-color: rgba(168, 130, 255, 0.1);
  border-bottom-color: rgba(168, 130, 255, 0.25);
  border-left-color: rgba(168, 130, 255, 0.25);
  border-right-color: rgba(168, 130, 255, 0.25);
  border-top-color: rgba(168, 130, 255, 0.25);
}

body .callout[data-callout="failure"] {
  --callout-color: 251, 70, 76;
  background-color: rgba(251, 70, 76, 0.1);
  border-bottom-color: rgba(251, 70, 76, 0.25);
  border-left-color: rgba(251, 70, 76, 0.25);
  border-right-color: rgba(251, 70, 76, 0.25);
  border-top-color: rgba(251, 70, 76, 0.25);
}

body .callout[data-callout="info"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

body .callout[data-callout="note"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

body .callout[data-callout="question"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
}

body .callout[data-callout="success"] {
  --callout-color: 68, 207, 110;
  background-color: rgba(68, 207, 110, 0.1);
  border-bottom-color: rgba(68, 207, 110, 0.25);
  border-left-color: rgba(68, 207, 110, 0.25);
  border-right-color: rgba(68, 207, 110, 0.25);
  border-top-color: rgba(68, 207, 110, 0.25);
}

body .callout[data-callout="tip"] {
  --callout-color: 83, 223, 221;
  background-color: rgba(83, 223, 221, 0.1);
  border-bottom-color: rgba(83, 223, 221, 0.25);
  border-left-color: rgba(83, 223, 221, 0.25);
  border-right-color: rgba(83, 223, 221, 0.25);
  border-top-color: rgba(83, 223, 221, 0.25);
}

body .callout[data-callout="todo"] {
  --callout-color: 2, 122, 255;
  background-color: rgba(2, 122, 255, 0.1);
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

body .callout[data-callout="warning"] {
  --callout-color: 233, 151, 63;
  background-color: rgba(233, 151, 63, 0.1);
  border-bottom-color: rgba(233, 151, 63, 0.25);
  border-left-color: rgba(233, 151, 63, 0.25);
  border-right-color: rgba(233, 151, 63, 0.25);
  border-top-color: rgba(233, 151, 63, 0.25);
}`,
    search: `body .search > .search-button {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  color: rgb(74, 56, 39);
  font-family: "IBM Plex Sans", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
}

body .search > .search-container > .search-space > * {
  color: rgb(74, 56, 39);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(74, 56, 39) none 0px;
  text-decoration: rgb(74, 56, 39);
  text-decoration-color: rgb(74, 56, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(74, 56, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(74, 56, 39);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(74, 56, 39);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(253, 249, 245);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(0, 0, 0, 0.075);
  color: rgb(74, 56, 39);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgba(120, 43, 29, 0.32);
  border-bottom-color: rgba(245, 92, 81, 0.15);
  border-left-color: rgba(245, 92, 81, 0.15);
  border-right-color: rgba(245, 92, 81, 0.15);
  border-top-color: rgba(245, 92, 81, 0.15);
}

body a.internal.tag-link::before {
  color: rgb(245, 92, 81);
}

body h1 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(245, 92, 81);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
}`,
    scrollbars: `body .callout {
  --callout-color: 2, 122, 255;
  border-bottom-color: rgba(2, 122, 255, 0.25);
  border-left-color: rgba(2, 122, 255, 0.25);
  border-right-color: rgba(2, 122, 255, 0.25);
  border-top-color: rgba(2, 122, 255, 0.25);
}

body ::-webkit-scrollbar {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

body ::-webkit-scrollbar-corner {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}

body ::-webkit-scrollbar-track {
  background: rgb(255, 254, 253) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(255, 254, 253);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(178, 150, 136);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(178, 150, 136);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
  text-decoration: rgb(178, 150, 136);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(0, 0, 0, 0.075);
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}`,
    footer: `body footer {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}

body footer ul li a {
  color: rgb(178, 150, 136);
  text-decoration: rgb(178, 150, 136);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(74, 56, 39);
  font-family: "IBM Plex Sans", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(178, 150, 136);
  text-decoration: rgb(178, 150, 136);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body li.section-li > .section .meta {
  color: rgb(178, 150, 136);
  font-family: "IBM Plex Sans", sans-serif;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(178, 150, 136);
  text-decoration: rgb(178, 150, 136);
}

body ul.section-ul {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}

body .darkmode svg {
  color: rgb(178, 150, 136);
  stroke: rgb(178, 150, 136);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}

body .breadcrumb-element p {
  color: rgb(245, 92, 81);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
  color: rgb(74, 56, 39);
}

body .metadata {
  border-bottom-color: rgb(246, 226, 219);
  border-left-color: rgb(246, 226, 219);
  border-right-color: rgb(246, 226, 219);
  border-top-color: rgb(246, 226, 219);
  color: rgb(178, 150, 136);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
  font-family: "??", "IBM Plex Sans", sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(253, 249, 245);
}

body .page-header h2.page-title {
  color: rgb(74, 56, 39);
}

body abbr {
  color: rgb(74, 56, 39);
  text-decoration: underline dotted rgb(74, 56, 39);
}

body details {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body input[type=text] {
  border-bottom-color: rgb(178, 150, 136);
  border-left-color: rgb(178, 150, 136);
  border-right-color: rgb(178, 150, 136);
  border-top-color: rgb(178, 150, 136);
  color: rgb(178, 150, 136);
}

body kbd {
  background-color: rgb(253, 249, 245);
  border-bottom-color: rgb(118, 92, 79);
  border-left-color: rgb(118, 92, 79);
  border-right-color: rgb(118, 92, 79);
  border-top-color: rgb(118, 92, 79);
  color: rgb(118, 92, 79);
}

body progress {
  border-bottom-color: rgb(74, 56, 39);
  border-left-color: rgb(74, 56, 39);
  border-right-color: rgb(74, 56, 39);
  border-top-color: rgb(74, 56, 39);
}

body sub {
  color: rgb(74, 56, 39);
}

body summary {
  color: rgb(74, 56, 39);
}

body sup {
  color: rgb(74, 56, 39);
}`,
  },
};
