import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "nostromo",
    modes: ["dark"],
    variations: [],
    fonts: ["share-tech-mono", "vt323"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(232, 216, 163, 0.12);
  --background-modifier-border: rgba(168, 168, 168, 0.2);
  --background-modifier-border-focus: #e8d8a3;
  --background-modifier-border-hover: rgba(168, 168, 168, 0.3);
  --background-modifier-cover: rgba(29, 32, 33, 0.8);
  --background-modifier-form-field: #3c3836;
  --background-modifier-form-field-hover: #3c3836;
  --background-modifier-hover: rgba(232, 216, 163, 0.08);
  --background-primary: #1d2021;
  --background-secondary: #282828;
  --background-secondary-alt: #3c3836;
  --bases-cards-background: #1d2021;
  --bases-cards-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2);
  --bases-cards-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.3);
  --bases-embed-border-color: rgba(168, 168, 168, 0.2);
  --bases-group-heading-property-color: #d5c4a1;
  --bases-table-border-color: rgba(168, 168, 168, 0.2);
  --bases-table-cell-background-active: #1d2021;
  --bases-table-cell-shadow-active: 0 0 0 2px #e8d8a3;
  --bases-table-cell-shadow-focus: 0 0 0 2px #e8d8a3;
  --bases-table-header-background: #1d2021;
  --bases-table-header-background-hover: rgba(232, 216, 163, 0.08);
  --bases-table-header-color: #d5c4a1;
  --bases-table-summary-background: #1d2021;
  --bases-table-summary-background-hover: rgba(232, 216, 163, 0.08);
  --bg-accent: #504945;
  --bg-primary: #1d2021;
  --bg-secondary: #282828;
  --bg-tertiary: #3c3836;
  --blockquote-border-color: #e8d8a3;
  --blue: #6b8ca4;
  --blue-rgb: 107, 140, 164;
  --blur-background: color-mix(in srgb, #3c3836 65%, transparent) linear-gradient(#3c3836, color-mix(in srgb, #3c3836 65%, transparent));
  --bodyFont: var(--font-text);
  --border-radius: 4px;
  --callout-color-abstract: 156, 122, 153;
  --callout-color-bug: 176, 108, 90;
  --callout-color-danger: 176, 108, 90;
  --callout-color-example: 156, 122, 153;
  --callout-color-failure: 176, 108, 90;
  --callout-color-info: 107, 140, 164;
  --callout-color-note: 107, 140, 164;
  --callout-color-question: 232, 216, 163;
  --callout-color-quote: 168, 168, 168;
  --callout-color-success: 122, 143, 113;
  --callout-color-tip: 122, 143, 113;
  --callout-color-todo: 168, 168, 168;
  --callout-color-warning: 194, 140, 92;
  --canvas-background: #1d2021;
  --canvas-card-label-color: #bdae93;
  --caret-color: #ebdbb2;
  --checkbox-border-color: #bdae93;
  --checkbox-border-color-hover: #d5c4a1;
  --checkbox-color: #e8d8a3;
  --checkbox-color-hover: #c28c5c;
  --checkbox-marker-color: #1d2021;
  --checklist-done-color: #d5c4a1;
  --code-border-color: rgba(168, 168, 168, 0.2);
  --code-bracket-background: rgba(232, 216, 163, 0.08);
  --code-comment: #bdae93;
  --code-normal: #ebdbb2;
  --code-punctuation: #d5c4a1;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #bdae93;
  --collapse-icon-color-collapsed: #e8d8a3;
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: rgba(168, 168, 168, 0.2);
  --divider-color-hover: rgba(168, 168, 168, 0.3);
  --dropdown-background: #3c3836;
  --dropdown-background-hover: rgba(232, 216, 163, 0.1);
  --embed-block-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.2), inset 0 0 0 1px rgba(168, 168, 168, 0.2);
  --embed-border-start: 2px solid #e8d8a3;
  --fg-primary: #ebdbb2;
  --fg-secondary: #d5c4a1;
  --fg-tertiary: #bdae93;
  --file-header-background: #1d2021;
  --file-header-background-focused: #1d2021;
  --file-header-font: "Share Tech Mono", "Courier New", monospace;
  --flair-background: #3c3836;
  --flair-color: #ebdbb2;
  --font-heading: "Share Tech Mono", "Courier New", monospace;
  --font-interface: "Share Tech Mono", "Courier New", monospace;
  --font-mermaid: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-monospace: "VT323", "Share Tech Mono", "Courier New", monospace;
  --font-terminal: "VT323", "Share Tech Mono", "Courier New", monospace;
  --font-text: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --footnote-divider-color: rgba(168, 168, 168, 0.2);
  --footnote-id-color: #d5c4a1;
  --footnote-id-color-no-occurrences: #bdae93;
  --footnote-input-background-active: rgba(232, 216, 163, 0.08);
  --graph-node: #d5c4a1;
  --graph-node-focused: #e8d8a3;
  --graph-node-unresolved: #bdae93;
  --graph-text: #ebdbb2;
  --gray: #a8a8a8;
  --gray-rgb: 168, 168, 168;
  --green: #7a8f71;
  --green-rgb: 122, 143, 113;
  --h1-color: #e8d8a3;
  --h1-size: 5rem;
  --h2-color: #e8d8a3;
  --h2-size: 4.5rem;
  --h3-color: #e8d8a3;
  --h3-line-height: 1.2;
  --h3-size: 4rem;
  --h4-color: #e8d8a3;
  --h4-line-height: 1.2;
  --h4-size: 3.5rem;
  --h5-color: #e8d8a3;
  --h5-line-height: 1.2;
  --h5-size: 3rem;
  --h6-color: #e8d8a3;
  --h6-line-height: 1.2;
  --h6-size: 2.5rem;
  --headerFont: var(--font-text);
  --heading-formatting: #bdae93;
  --heading-line-height: 1.2;
  --highlight: var(--text-highlight-bg);
  --hr-color: #e8d8a3;
  --icon-color: #d5c4a1;
  --icon-color-active: #e8d8a3;
  --icon-color-focused: #ebdbb2;
  --icon-color-hover: #d5c4a1;
  --inline-title-color: #e8d8a3;
  --inline-title-font: "VT323", "Share Tech Mono", "Courier New", monospace;
  --inline-title-size: 5rem;
  --input-date-separator: #bdae93;
  --input-placeholder-color: #bdae93;
  --interactive-accent: #e8d8a3;
  --interactive-accent-hover: #c28c5c;
  --interactive-hover: rgba(232, 216, 163, 0.1);
  --interactive-normal: #3c3836;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --link-color: #b06c5a;
  --link-color-hover: #b06c5a;
  --link-external-color: #b06c5a;
  --link-external-color-hover: #b06c5a;
  --link-unresolved-color: #e8d8a3;
  --list-marker-color: #bdae93;
  --list-marker-color-collapsed: #e8d8a3;
  --list-marker-color-hover: #d5c4a1;
  --menu-background: #282828;
  --menu-border-color: rgba(168, 168, 168, 0.3);
  --metadata-border-color: rgba(168, 168, 168, 0.2);
  --metadata-divider-color: rgba(168, 168, 168, 0.2);
  --metadata-input-background-active: rgba(232, 216, 163, 0.08);
  --metadata-input-font: "Share Tech Mono", "Courier New", monospace;
  --metadata-input-text-color: #ebdbb2;
  --metadata-label-background-active: rgba(232, 216, 163, 0.08);
  --metadata-label-font: "Share Tech Mono", "Courier New", monospace;
  --metadata-label-text-color: #d5c4a1;
  --metadata-label-text-color-hover: #d5c4a1;
  --metadata-property-background-active: rgba(232, 216, 163, 0.08);
  --metadata-property-box-shadow-focus: 0 0 0 2px #e8d8a3;
  --metadata-property-box-shadow-hover: 0 0 0 1px rgba(168, 168, 168, 0.3);
  --modal-background: #1d2021;
  --nav-collapse-icon-color: #bdae93;
  --nav-collapse-icon-color-collapsed: #bdae93;
  --nav-heading-color: #ebdbb2;
  --nav-heading-color-collapsed: #bdae93;
  --nav-heading-color-collapsed-hover: #d5c4a1;
  --nav-heading-color-hover: #ebdbb2;
  --nav-item-background-active: rgba(232, 216, 163, 0.08);
  --nav-item-background-hover: rgba(232, 216, 163, 0.08);
  --nav-item-color: #d5c4a1;
  --nav-item-color-active: #ebdbb2;
  --nav-item-color-highlighted: #e8d8a3;
  --nav-item-color-hover: #ebdbb2;
  --nav-item-color-selected: #ebdbb2;
  --nav-tag-color: #bdae93;
  --nav-tag-color-active: #d5c4a1;
  --nav-tag-color-hover: #d5c4a1;
  --orange: #c28c5c;
  --orange-rgb: 194, 140, 92;
  --padding: 12px;
  --pdf-background: #1d2021;
  --pdf-page-background: #1d2021;
  --pdf-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2);
  --pdf-sidebar-background: #1d2021;
  --pdf-thumbnail-shadow: 0 0 0 1px rgba(168, 168, 168, 0.2);
  --pill-border-color: rgba(168, 168, 168, 0.2);
  --pill-border-color-hover: rgba(168, 168, 168, 0.3);
  --pill-color: #d5c4a1;
  --pill-color-hover: #ebdbb2;
  --pill-color-remove: #bdae93;
  --pill-color-remove-hover: #e8d8a3;
  --prompt-background: #1d2021;
  --purple: #9c7a99;
  --purple-rgb: 156, 122, 153;
  --raised-background: color-mix(in srgb, #3c3836 65%, transparent) linear-gradient(#3c3836, color-mix(in srgb, #3c3836 65%, transparent));
  --red: #b06c5a;
  --red-rgb: 176, 108, 90;
  --ribbon-background: #282828;
  --ribbon-background-collapsed: #1d2021;
  --search-clear-button-color: #d5c4a1;
  --search-icon-color: #d5c4a1;
  --search-result-background: #1d2021;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #ebdbb2;
  --setting-items-border-color: rgba(168, 168, 168, 0.2);
  --slider-thumb-border-color: rgba(168, 168, 168, 0.3);
  --slider-track-background: rgba(168, 168, 168, 0.2);
  --status-bar-background: #282828;
  --status-bar-border-color: rgba(168, 168, 168, 0.2);
  --status-bar-text-color: #d5c4a1;
  --suggestion-background: #1d2021;
  --tab-background-active: #3c3836;
  --tab-container-background: #282828;
  --tab-divider-color: rgba(168, 168, 168, 0.3);
  --tab-outline-color: rgba(168, 168, 168, 0.2);
  --tab-switcher-background: #282828;
  --tab-switcher-menubar-background: linear-gradient(to top, #282828, transparent);
  --tab-text-color: #bdae93;
  --tab-text-color-active: #ebdbb2;
  --tab-text-color-focused: #d5c4a1;
  --tab-text-color-focused-active: #e8d8a3;
  --tab-text-color-focused-active-current: #ebdbb2;
  --tab-text-color-focused-highlighted: #e8d8a3;
  --table-add-button-border-color: rgba(168, 168, 168, 0.2);
  --table-border-color: rgba(168, 168, 168, 0.2);
  --table-drag-handle-background-active: #e8d8a3;
  --table-drag-handle-color: #bdae93;
  --table-drag-handle-color-active: #1d2021;
  --table-header-border-color: rgba(168, 168, 168, 0.2);
  --table-header-color: #ebdbb2;
  --table-selection-border-color: #e8d8a3;
  --tag-color: #e8d8a3;
  --tag-color-hover: #e8d8a3;
  --tertiary: var(--text-accent-hover);
  --text-accent: #e8d8a3;
  --text-accent-hover: #c28c5c;
  --text-error: #b06c5a;
  --text-faint: #bdae93;
  --text-highlight-bg: rgba(232, 216, 163, 0.3);
  --text-muted: #d5c4a1;
  --text-normal: #ebdbb2;
  --text-on-accent: #1d2021;
  --text-selection: rgba(232, 216, 163, 0.2);
  --text-success: #7a8f71;
  --text-warning: #c28c5c;
  --textHighlight: var(--text-highlight-bg);
  --titleFont: var(--font-text);
  --titlebar-background: #1d2021;
  --titlebar-background-focused: #1d2021;
  --titlebar-border-color: rgba(168, 168, 168, 0.2);
  --titlebar-text-color: #d5c4a1;
  --titlebar-text-color-focused: #ebdbb2;
  --vault-profile-color: #ebdbb2;
  --vault-profile-color-hover: #ebdbb2;
  --yellow: #e8d8a3;
  --yellow-rgb: 232, 216, 163;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(40, 40, 40);
  color: rgb(235, 219, 178);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgba(168, 168, 168, 0.2);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(40, 40, 40);
  border-left-color: rgba(168, 168, 168, 0.2);
  color: rgb(235, 219, 178);
}

body div#quartz-root {
  background-color: rgb(29, 32, 33);
  color: rgb(235, 219, 178);
}`,
    typography: `body .page article p > b, b {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-weight: 700;
  outline: rgb(232, 216, 163) none 0px;
  text-decoration: rgb(232, 216, 163);
  text-decoration-color: rgb(232, 216, 163);
}

body .page article p > em, em {
  color: rgb(194, 140, 92);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(194, 140, 92) none 0px;
  text-decoration: rgb(194, 140, 92);
  text-decoration-color: rgb(194, 140, 92);
}

body .page article p > i, i {
  color: rgb(194, 140, 92);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(194, 140, 92) none 0px;
  text-decoration: rgb(194, 140, 92);
  text-decoration-color: rgb(194, 140, 92);
}

body .page article p > strong, strong {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  font-weight: 700;
  outline: rgb(232, 216, 163) none 0px;
  text-decoration: rgb(232, 216, 163);
  text-decoration-color: rgb(232, 216, 163);
}

body .text-highlight {
  background-color: rgba(232, 216, 163, 0.3);
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body del {
  color: rgb(176, 108, 90);
  font-family: "Share Tech Mono", "Courier New", monospace;
  outline: rgb(176, 108, 90) none 0px;
  text-decoration: rgb(176, 108, 90);
  text-decoration-color: rgb(176, 108, 90);
}

body p {
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(213, 196, 161) none 0px;
  text-decoration: rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}`,
    links: `body a.external, footer a {
  color: rgb(156, 122, 153);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(156, 122, 153) none 0px;
  text-decoration: underline rgb(156, 122, 153);
  text-decoration-color: rgb(156, 122, 153);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(176, 108, 90);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(176, 108, 90) none 0px;
  text-decoration: underline rgb(176, 108, 90);
  text-decoration-color: rgb(176, 108, 90);
}

body a.internal.broken {
  color: rgb(232, 216, 163);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(232, 216, 163) none 0px;
}`,
    lists: `body ol > li {
  color: rgb(235, 219, 178);
}

body ol.overflow {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ul > li {
  color: rgb(235, 219, 178);
}

body ul.overflow {
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(189, 174, 147);
  text-decoration: rgb(189, 174, 147);
}

body blockquote {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body table {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgba(232, 216, 163, 0.3);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgba(232, 216, 163, 0.3);
  border-top-style: solid;
  border-top-width: 1px;
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin-top: 24px;
  width: 662px;
}

body td {
  border-bottom-color: rgba(232, 216, 163, 0.15);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(232, 216, 163, 0.2);
  border-top-color: rgb(235, 219, 178);
  border-top-width: 0px;
  color: rgb(235, 219, 178);
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
}

body th {
  border-bottom-color: rgba(232, 216, 163, 0.4);
  border-bottom-width: 2px;
  border-left-color: rgba(232, 216, 163, 0.3);
  border-left-width: 2px;
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(232, 216, 163);
  font-weight: 400;
  padding-bottom: 12px;
  padding-left: 12px;
  padding-right: 12px;
  padding-top: 12px;
  text-align: left;
}

body thead {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-right-color: rgba(232, 216, 163, 0.3);
  border-top-color: rgba(232, 216, 163, 0.3);
}

body tr {
  border-bottom-color: rgba(232, 216, 163, 0.3);
  border-left-color: rgba(232, 216, 163, 0.3);
  border-right-color: rgba(232, 216, 163, 0.3);
  border-top-color: rgba(232, 216, 163, 0.3);
}`,
    code: `body code {
  border-bottom-color: rgb(122, 143, 113);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(122, 143, 113);
  border-right-color: rgb(122, 143, 113);
  border-top-color: rgba(122, 143, 113, 0.3);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border-top-width: 1px;
  color: rgb(122, 143, 113);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
  padding-bottom: 19.2px;
  padding-left: 24px;
  padding-right: 24px;
  padding-top: 19.2px;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  color: rgb(235, 219, 178);
}

body pre > code, pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  overflow-x: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body pre:has(> code) {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(122, 143, 113, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-width: 2px;
  border-left-color: rgba(122, 143, 113, 0.4);
  border-left-width: 2px;
  border-right-color: rgba(122, 143, 113, 0.4);
  border-right-width: 2px;
  border-top-color: rgba(122, 143, 113, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-width: 2px;
  overflow-x: hidden;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}`,
    images: `body audio {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body figcaption {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body figure {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body img {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body video {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
}

body .footnotes {
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .transclude {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .transclude-inner {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(213, 196, 161);
  text-decoration: line-through rgb(213, 196, 161);
  text-decoration-color: rgb(213, 196, 161);
}

body input[type=checkbox] {
  border-bottom-color: rgba(232, 216, 163, 0.5);
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
  border-bottom-width: 2px;
  border-left-color: rgba(232, 216, 163, 0.5);
  border-left-width: 2px;
  border-right-color: rgba(232, 216, 163, 0.5);
  border-right-width: 2px;
  border-top-color: rgba(232, 216, 163, 0.5);
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
  border-top-width: 2px;
  margin-right: 12.8px;
  transition: 0.2s;
}

body li.task-list-item[data-task='!'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='*'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='-'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='/'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='>'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='?'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='I'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='S'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='b'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='c'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='d'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='f'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='i'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='k'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='l'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='p'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='u'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body li.task-list-item[data-task='w'] {
  color: rgb(235, 219, 178);
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}`,
    callouts: `body .callout .callout-title {
  border-bottom-color: rgba(107, 140, 164, 0.4);
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-left-color: rgb(232, 216, 163);
  border-right-color: rgb(232, 216, 163);
  border-top-color: rgb(232, 216, 163);
  padding-bottom: 12px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 12px;
}

body .callout > .callout-content {
  padding-bottom: 16px;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 16px;
}

body .callout[data-callout="abstract"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="bug"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="danger"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="example"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="failure"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="info"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="note"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="question"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="quote"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="success"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="tip"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="todo"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}

body .callout[data-callout="warning"] {
  background-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
}`,
    search: `body .search > .search-button {
  background-color: rgb(60, 56, 54);
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 2px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 2px;
  border-top-color: rgb(232, 216, 163);
  border-top-width: 2px;
  box-shadow: rgba(232, 216, 163, 0.5) 0px 0px 20px 0px, rgba(232, 216, 163, 0.1) 0px 0px 20px 0px inset;
}

body .search > .search-container > .search-space > * {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  outline: rgb(235, 219, 178) none 0px;
  text-decoration: rgb(235, 219, 178);
  text-decoration-color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(232, 216, 163, 0.08);
  color: rgb(235, 219, 178);
}

body .search > .search-container > .search-space > .search-layout, .search > .search-container > .search-space > .search-layout.display-results {
  border-bottom-color: rgb(232, 216, 163);
  border-bottom-width: 2px;
  border-left-color: rgb(232, 216, 163);
  border-left-width: 2px;
  border-right-color: rgb(232, 216, 163);
  border-right-width: 2px;
  border-top-color: rgb(232, 216, 163);
  border-top-width: 2px;
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(40, 40, 40);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgba(232, 216, 163, 0.08);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgba(232, 216, 163, 0.08);
  color: rgb(235, 219, 178);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  font-family: "Share Tech Mono", "Courier New", monospace;
}

body a.internal.tag-link::before {
  color: rgb(232, 216, 163);
}

body h1 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

body h2 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

body h2.page-title, h2.page-title a {
  color: rgb(232, 216, 163);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
}

body h3 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

body h4 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

body h5 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

body h6 {
  color: rgb(232, 216, 163);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-shadow: rgba(232, 216, 163, 0.5) 0px 0px 4px;
}

body hr {
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
}`,
    scrollbars: `body .callout {
  border-bottom-color: rgb(235, 219, 178);
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  border-top-left-radius: 0px;
  border-top-right-radius: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  padding-right: 0px;
  padding-top: 0px;
}

body ::-webkit-scrollbar {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

body ::-webkit-scrollbar-corner {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}

body ::-webkit-scrollbar-track {
  background: rgb(29, 32, 33) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(29, 32, 33);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
  text-decoration: rgb(213, 196, 161);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgba(232, 216, 163, 0.08);
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}`,
    footer: `body footer {
  background-color: rgb(40, 40, 40);
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body footer ul li a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(235, 219, 178);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body li.section-li > .section .meta {
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(213, 196, 161);
  text-decoration: rgb(213, 196, 161);
}

body ul.section-ul {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .darkmode svg {
  color: rgb(213, 196, 161);
  stroke: rgb(213, 196, 161);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
}

body .breadcrumb-element p {
  color: rgb(189, 174, 147);
  font-family: "Share Tech Mono", "Courier New", monospace;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgba(156, 122, 153, 0.4);
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-left-color: rgba(156, 122, 153, 0.4);
  border-left-style: solid;
  border-left-width: 2px;
  border-right-color: rgba(156, 122, 153, 0.4);
  border-right-style: solid;
  border-right-width: 2px;
  border-top-color: rgba(156, 122, 153, 0.4);
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-top-style: solid;
  border-top-width: 2px;
  color: rgb(156, 122, 153);
}

body .metadata {
  border-bottom-color: rgba(168, 168, 168, 0.2);
  border-left-color: rgba(168, 168, 168, 0.2);
  border-right-color: rgba(168, 168, 168, 0.2);
  border-top-color: rgba(168, 168, 168, 0.2);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}

body .navigation-progress {
  background-color: rgb(40, 40, 40);
}

body .page-header h2.page-title {
  color: rgb(235, 219, 178);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

body abbr {
  color: rgb(235, 219, 178);
  text-decoration: underline dotted rgb(235, 219, 178);
}

body details {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body input[type=text] {
  border-bottom-color: rgb(213, 196, 161);
  border-left-color: rgb(213, 196, 161);
  border-right-color: rgb(213, 196, 161);
  border-top-color: rgb(213, 196, 161);
  color: rgb(213, 196, 161);
  font-family: "Share Tech Mono", "Courier New", monospace;
}

body kbd {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
  color: rgb(235, 219, 178);
  font-family: VT323, "Share Tech Mono", "Courier New", monospace;
}

body progress {
  border-bottom-color: rgb(235, 219, 178);
  border-left-color: rgb(235, 219, 178);
  border-right-color: rgb(235, 219, 178);
  border-top-color: rgb(235, 219, 178);
}

body summary {
  color: rgb(235, 219, 178);
}

body sup {
  color: rgb(235, 219, 178);
}`,
  },
  light: {},
};
