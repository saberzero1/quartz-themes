import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "oistnb", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #AA4400 !important;
  --background-primary: #000000 !important;
  --background-secondary: #0A0A0A !important;
  --background-tertiary: #1A1A1A !important;
  --bases-cards-background: #000000 !important;
  --bases-cards-shadow: 0 0 0 1px #AA4400 !important;
  --bases-embed-border-color: #AA4400 !important;
  --bases-group-heading-property-color: #CC5500 !important;
  --bases-table-border-color: #AA4400 !important;
  --bases-table-cell-background-active: #000000 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FF8533 !important;
  --bases-table-header-background: #000000 !important;
  --bases-table-header-color: #CC5500 !important;
  --bases-table-summary-background: #000000 !important;
  --blockquote-border-color: #FF8533 !important;
  --blur-background: color-mix(in srgb, #CC5500 65%, transparent) linear-gradient(#CC5500, color-mix(in srgb, #CC5500 65%, transparent)) !important;
  --bodyFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #000000 !important;
  --canvas-card-label-color: #AA4400 !important;
  --caret-color: #FF6600 !important;
  --checkbox-border-color: #AA4400 !important;
  --checkbox-border-color-hover: #CC5500 !important;
  --checkbox-color: #FF8533 !important;
  --checkbox-marker-color: #000000 !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #CC5500 !important;
  --code-border-color: #AA4400 !important;
  --code-comment: #AA4400 !important;
  --code-normal: #FF6600 !important;
  --code-punctuation: #CC5500 !important;
  --codeFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #AA4400 !important;
  --dark: #FF6600 !important;
  --dark-gray: #1A1A1A !important;
  --darkgray: #FF6600 !important;
  --divider-color: #AA4400 !important;
  --divider-color-hover: #FF8533 !important;
  --dropdown-background: #CC5500 !important;
  --dropdown-background-hover: #FF6600 !important;
  --embed-block-shadow-hover: 0 0 0 1px #AA4400, inset 0 0 0 1px #AA4400 !important;
  --embed-border-start: 2px solid #FF8533 !important;
  --file-header-background: #000000 !important;
  --file-header-background-focused: #000000 !important;
  --flair-background: #CC5500 !important;
  --flair-color: #FF6600 !important;
  --font-mermaid: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Courier New, monospace, Arial' !important;
  --font-size-huge: 24px !important;
  --font-size-large: 18px !important;
  --font-size-medium: 16px !important;
  --font-size-normal: 14px !important;
  --font-size-small: 12px !important;
  --font-text: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Courier New', monospace !important;
  --font-ui-theme: 'VT323', 'Courier New', monospace !important;
  --footnote-divider-color: #AA4400 !important;
  --footnote-id-color: #CC5500 !important;
  --footnote-id-color-no-occurrences: #AA4400 !important;
  --graph-node: #CC5500 !important;
  --graph-node-unresolved: #AA4400 !important;
  --graph-text: #FF6600 !important;
  --gray: #CC5500 !important;
  --headerFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #AA4400 !important;
  --hr-color: #AA4400 !important;
  --icon-color: #CC5500 !important;
  --icon-color-focused: #FF6600 !important;
  --icon-color-hover: #CC5500 !important;
  --input-date-separator: #AA4400 !important;
  --input-placeholder-color: #AA4400 !important;
  --interactive-accent: #FF8533 !important;
  --interactive-hover: #FF6600 !important;
  --interactive-normal: #CC5500 !important;
  --light: #000000 !important;
  --light-gray: #4D4D4D !important;
  --lightgray: #0A0A0A !important;
  --list-marker-color: #AA4400 !important;
  --list-marker-color-hover: #CC5500 !important;
  --medium-gray: #333333 !important;
  --menu-background: #0A0A0A !important;
  --metadata-border-color: #AA4400 !important;
  --metadata-divider-color: #AA4400 !important;
  --metadata-input-text-color: #FF6600 !important;
  --metadata-label-text-color: #CC5500 !important;
  --metadata-label-text-color-hover: #CC5500 !important;
  --modal-background: #000000 !important;
  --nav-collapse-icon-color: #AA4400 !important;
  --nav-collapse-icon-color-collapsed: #AA4400 !important;
  --nav-heading-color: #FF6600 !important;
  --nav-heading-color-collapsed: #AA4400 !important;
  --nav-heading-color-collapsed-hover: #CC5500 !important;
  --nav-heading-color-hover: #FF6600 !important;
  --nav-item-color: #CC5500 !important;
  --nav-item-color-active: #FF6600 !important;
  --nav-item-color-hover: #FF6600 !important;
  --nav-item-color-selected: #FF6600 !important;
  --nav-tag-color: #AA4400 !important;
  --nav-tag-color-active: #CC5500 !important;
  --nav-tag-color-hover: #CC5500 !important;
  --off-black: #0A0A0A !important;
  --off-white: #E5E5E5 !important;
  --orange-dark: #CC5500 !important;
  --orange-darker: #AA4400 !important;
  --orange-darkest: #802200 !important;
  --orange-light: #FF8533 !important;
  --orange-lighter: #FFA366 !important;
  --orange-medium: #FF6600 !important;
  --pdf-background: #000000 !important;
  --pdf-page-background: #000000 !important;
  --pdf-shadow: 0 0 0 1px #AA4400 !important;
  --pdf-sidebar-background: #000000 !important;
  --pdf-thumbnail-shadow: 0 0 0 1px #AA4400 !important;
  --pill-border-color: #AA4400 !important;
  --pill-color: #CC5500 !important;
  --pill-color-hover: #FF6600 !important;
  --pill-color-remove: #AA4400 !important;
  --prompt-background: #000000 !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, #CC5500 65%, transparent) linear-gradient(#CC5500, color-mix(in srgb, #CC5500 65%, transparent)) !important;
  --ribbon-background: #0A0A0A !important;
  --ribbon-background-collapsed: #000000 !important;
  --search-clear-button-color: #CC5500 !important;
  --search-icon-color: #CC5500 !important;
  --search-result-background: #000000 !important;
  --secondary: #FF8533 !important;
  --setting-group-heading-color: #FF6600 !important;
  --setting-items-border-color: #AA4400 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #AA4400 !important;
  --spacing-l: 16px !important;
  --spacing-m: 12px !important;
  --spacing-s: 8px !important;
  --spacing-xl: 24px !important;
  --spacing-xs: 4px !important;
  --status-bar-background: #0A0A0A !important;
  --status-bar-border-color: #AA4400 !important;
  --status-bar-text-color: #CC5500 !important;
  --suggestion-background: #000000 !important;
  --tab-background-active: #000000 !important;
  --tab-container-background: #0A0A0A !important;
  --tab-outline-color: #AA4400 !important;
  --tab-radius-active: 5px 5px 0 0 !important;
  --tab-switcher-background: #0A0A0A !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #0A0A0A, transparent) !important;
  --tab-text-color: #AA4400 !important;
  --tab-text-color-active: #CC5500 !important;
  --tab-text-color-focused: #CC5500 !important;
  --tab-text-color-focused-active: #CC5500 !important;
  --tab-text-color-focused-active-current: #FF6600 !important;
  --table-add-button-border-color: #AA4400 !important;
  --table-border-color: #AA4400 !important;
  --table-drag-handle-background-active: #FF8533 !important;
  --table-drag-handle-color: #AA4400 !important;
  --table-header-border-color: #AA4400 !important;
  --table-header-color: #FF6600 !important;
  --table-selection-border-color: #FF8533 !important;
  --text-faint: #AA4400 !important;
  --text-muted: #CC5500 !important;
  --text-normal: #FF6600 !important;
  --titleFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #0A0A0A !important;
  --titlebar-border-color: #AA4400 !important;
  --titlebar-text-color: #CC5500 !important;
  --titlebar-text-color-focused: #FF6600 !important;
  --toggle-radius: 15px !important;
  --toggle-thumb-radius: 13px !important;
  --true-black: #000000 !important;
  --vault-profile-color: #FF6600 !important;
  --vault-profile-color-hover: #FF6600 !important;
  --white: #FFFFFF !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="dark"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="dark"] body[data-slug] div#quartz-root.page, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left, html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="dark"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(10, 10, 10);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body[data-slug], html[saved-theme="dark"] body[data-slug] .page > div#quartz-body, html[saved-theme="dark"] .page > div#quartz-body div.center, html[saved-theme="dark"] .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .bases-table thead th {
  border-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .canvas-node {
  border-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .canvas-node-content {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .canvas-node-file {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .canvas-node-group {
  border-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .canvas-sidebar {
  background-color: rgb(10, 10, 10);
  border-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .note-properties {
  border-color: rgb(170, 68, 0);
}

html[saved-theme="dark"] body .note-properties-key {
  color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body .note-properties-row {
  border-color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body .note-properties-value {
  color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 10, 10);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(170, 68, 0);
}

html[saved-theme="dark"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(10, 10, 10);
  border-left-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}`,
    typography: `html[saved-theme="dark"] body .page article p > b, html[saved-theme="dark"] b {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .page article p > em, html[saved-theme="dark"] em {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .page article p > i, html[saved-theme="dark"] i {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .page article p > strong, html[saved-theme="dark"] strong {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .text-highlight {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body del {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body h1.article-title {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(0, 0, 0);
  border-color: rgb(170, 68, 0);
  border-radius: 3px;
}

html[saved-theme="dark"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 133, 51);
  border-color: rgb(255, 133, 51);
}

html[saved-theme="dark"] body p {
  color: rgb(204, 85, 0);
  font-family: "Courier New", monospace;
  outline: rgb(204, 85, 0) none 0px;
  text-decoration-color: rgb(204, 85, 0);
}`,
    links: `html[saved-theme="dark"] body a.external, html[saved-theme="dark"] footer a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal, html[saved-theme="dark"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body a.internal.broken {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="dark"] body dd {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body dt {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body ol > li {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body ol.overflow {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body ul > li {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body ul.overflow {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    blockquotes: `html[saved-theme="dark"] body .data-footnote-backref {
  color: rgb(170, 68, 0);
}

html[saved-theme="dark"] body blockquote {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="dark"] body .table-container {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body table {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.438px;
}

html[saved-theme="dark"] body td {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body th {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}`,
    code: `html[saved-theme="dark"] body code {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

html[saved-theme="dark"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body pre > code, html[saved-theme="dark"] pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

html[saved-theme="dark"] body pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}`,
    images: `html[saved-theme="dark"] body audio {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body figcaption {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body figure {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body img {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body video {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    embeds: `html[saved-theme="dark"] body .file-embed {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body .footnotes {
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .transclude {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 133, 51);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .transclude-inner {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    checkboxes: `html[saved-theme="dark"] body .katex-display > .katex {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body input[type=checkbox] {
  border-bottom-color: rgb(170, 68, 0);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 8.4px;
}

html[saved-theme="dark"] body li.task-list-item[data-task='!'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='*'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='-'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='/'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='>'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='?'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='I'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='S'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='b'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='c'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='d'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='f'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='i'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='k'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='l'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='p'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='u'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task='w'] {
  color: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
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
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > * {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-title, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) .card-description {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="dark"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)), html[saved-theme="dark"] ~ .result-card:focus, html[saved-theme="dark"] ~ .result-card:hover) {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="dark"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="dark"] ~ .result-card:focus)) {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body h1 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

html[saved-theme="dark"] body h2 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

html[saved-theme="dark"] body h2.page-title, html[saved-theme="dark"] h2.page-title a {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body h3 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

html[saved-theme="dark"] body h4 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

html[saved-theme="dark"] body h5 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

html[saved-theme="dark"] body h6 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

html[saved-theme="dark"] body hr {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
}`,
    scrollbars: `html[saved-theme="dark"] body .callout {
  --callout-color: 2, 122, 255;
}

html[saved-theme="dark"] body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

html[saved-theme="dark"] body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}

html[saved-theme="dark"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}`,
    toc: `html[saved-theme="dark"] body details.toc summary::marker {
  color: rgb(255, 102, 0);
}`,
    graph: `html[saved-theme="dark"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}`,
    footer: `html[saved-theme="dark"] body footer {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(204, 85, 0);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body footer ul li a {
  color: rgb(204, 85, 0);
}`,
    recentNotes: `html[saved-theme="dark"] body .recent-notes > h3 {
  color: rgb(255, 102, 0);
  font-family: "Courier New", monospace;
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}`,
    listPage: `html[saved-theme="dark"] body li.section-li {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body li.section-li > .section .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}

html[saved-theme="dark"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body ul.section-ul {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    darkmode: `html[saved-theme="dark"] body .darkmode {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body .darkmode svg {
  color: rgb(204, 85, 0);
  stroke: rgb(204, 85, 0);
}`,
    breadcrumbs: `html[saved-theme="dark"] body .breadcrumb-container {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body .breadcrumb-element p {
  color: rgb(170, 68, 0);
}`,
    misc: `html[saved-theme="dark"] body .katex-display {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body .metadata {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(204, 85, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .metadata-properties {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="dark"] body .navigation-progress {
  background-color: rgb(10, 10, 10);
}

html[saved-theme="dark"] body .page-header h2.page-title {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body abbr {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body details {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body input[type=text] {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}

html[saved-theme="dark"] body kbd {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body progress {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body sub {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body summary {
  color: rgb(255, 102, 0);
}

html[saved-theme="dark"] body sup {
  color: rgb(255, 102, 0);
}`,
  },
  light: {
    base: `:root:root {
  --background-modifier-border: #AA4400 !important;
  --background-primary: #E5E5E5 !important;
  --background-secondary: #FFFFFF !important;
  --background-tertiary: #4D4D4D !important;
  --bases-cards-background: #E5E5E5 !important;
  --bases-cards-shadow: 0 0 0 1px #AA4400 !important;
  --bases-embed-border-color: #AA4400 !important;
  --bases-group-heading-property-color: #333333 !important;
  --bases-table-border-color: #AA4400 !important;
  --bases-table-cell-background-active: #E5E5E5 !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FF8533 !important;
  --bases-table-header-background: #E5E5E5 !important;
  --bases-table-header-color: #333333 !important;
  --bases-table-summary-background: #E5E5E5 !important;
  --blockquote-border-color: #FF8533 !important;
  --blur-background: color-mix(in srgb, #E5E5E5 65%, transparent) linear-gradient(#E5E5E5, color-mix(in srgb, #E5E5E5 65%, transparent)) !important;
  --bodyFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #E5E5E5 !important;
  --canvas-card-label-color: #4D4D4D !important;
  --caret-color: #000000 !important;
  --checkbox-border-color: #4D4D4D !important;
  --checkbox-border-color-hover: #333333 !important;
  --checkbox-color: #FF8533 !important;
  --checkbox-marker-color: #E5E5E5 !important;
  --checkbox-radius: 3px !important;
  --checklist-done-color: #333333 !important;
  --code-border-color: #AA4400 !important;
  --code-comment: #4D4D4D !important;
  --code-normal: #000000 !important;
  --code-punctuation: #333333 !important;
  --codeFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --collapse-icon-color: #4D4D4D !important;
  --dark: #000000 !important;
  --dark-gray: #1A1A1A !important;
  --darkgray: #000000 !important;
  --divider-color: #AA4400 !important;
  --divider-color-hover: #FF8533 !important;
  --dropdown-background: #CC5500 !important;
  --dropdown-background-hover: #FF6600 !important;
  --embed-block-shadow-hover: 0 0 0 1px #AA4400, inset 0 0 0 1px #AA4400 !important;
  --embed-border-start: 2px solid #FF8533 !important;
  --file-header-background: #E5E5E5 !important;
  --file-header-background-focused: #E5E5E5 !important;
  --flair-background: #CC5500 !important;
  --flair-color: #000000 !important;
  --font-mermaid: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: Courier New, monospace, Arial' !important;
  --font-size-huge: 24px !important;
  --font-size-large: 18px !important;
  --font-size-medium: 16px !important;
  --font-size-normal: 14px !important;
  --font-size-small: 12px !important;
  --font-text: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Courier New', monospace !important;
  --font-ui-theme: 'VT323', 'Courier New', monospace !important;
  --footnote-divider-color: #AA4400 !important;
  --footnote-id-color: #333333 !important;
  --footnote-id-color-no-occurrences: #4D4D4D !important;
  --graph-node: #333333 !important;
  --graph-node-unresolved: #4D4D4D !important;
  --graph-text: #000000 !important;
  --gray: #333333 !important;
  --headerFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #4D4D4D !important;
  --hr-color: #AA4400 !important;
  --icon-color: #333333 !important;
  --icon-color-focused: #000000 !important;
  --icon-color-hover: #333333 !important;
  --input-date-separator: #4D4D4D !important;
  --input-placeholder-color: #4D4D4D !important;
  --interactive-accent: #FF8533 !important;
  --interactive-hover: #FF6600 !important;
  --interactive-normal: #CC5500 !important;
  --light: #E5E5E5 !important;
  --light-gray: #4D4D4D !important;
  --lightgray: #FFFFFF !important;
  --list-marker-color: #4D4D4D !important;
  --list-marker-color-hover: #333333 !important;
  --medium-gray: #333333 !important;
  --menu-background: #FFFFFF !important;
  --metadata-border-color: #AA4400 !important;
  --metadata-divider-color: #AA4400 !important;
  --metadata-input-text-color: #000000 !important;
  --metadata-label-text-color: #333333 !important;
  --metadata-label-text-color-hover: #333333 !important;
  --modal-background: #E5E5E5 !important;
  --nav-collapse-icon-color: #4D4D4D !important;
  --nav-collapse-icon-color-collapsed: #4D4D4D !important;
  --nav-heading-color: #000000 !important;
  --nav-heading-color-collapsed: #4D4D4D !important;
  --nav-heading-color-collapsed-hover: #333333 !important;
  --nav-heading-color-hover: #000000 !important;
  --nav-item-color: #333333 !important;
  --nav-item-color-active: #000000 !important;
  --nav-item-color-hover: #000000 !important;
  --nav-item-color-selected: #000000 !important;
  --nav-tag-color: #4D4D4D !important;
  --nav-tag-color-active: #333333 !important;
  --nav-tag-color-hover: #333333 !important;
  --off-black: #0A0A0A !important;
  --off-white: #E5E5E5 !important;
  --orange-dark: #CC5500 !important;
  --orange-darker: #AA4400 !important;
  --orange-darkest: #802200 !important;
  --orange-light: #FF8533 !important;
  --orange-lighter: #FFA366 !important;
  --orange-medium: #FF6600 !important;
  --pdf-background: #E5E5E5 !important;
  --pdf-page-background: #E5E5E5 !important;
  --pdf-sidebar-background: #E5E5E5 !important;
  --pill-border-color: #AA4400 !important;
  --pill-color: #333333 !important;
  --pill-color-hover: #000000 !important;
  --pill-color-remove: #4D4D4D !important;
  --prompt-background: #E5E5E5 !important;
  --radius-xs: 2px !important;
  --raised-background: color-mix(in srgb, #E5E5E5 65%, transparent) linear-gradient(#E5E5E5, color-mix(in srgb, #E5E5E5 65%, transparent)) !important;
  --ribbon-background: #FFFFFF !important;
  --ribbon-background-collapsed: #E5E5E5 !important;
  --search-clear-button-color: #333333 !important;
  --search-icon-color: #333333 !important;
  --search-result-background: #E5E5E5 !important;
  --secondary: #FF8533 !important;
  --setting-group-heading-color: #000000 !important;
  --setting-items-border-color: #AA4400 !important;
  --slider-thumb-radius: 50% !important;
  --slider-track-background: #AA4400 !important;
  --spacing-l: 16px !important;
  --spacing-m: 12px !important;
  --spacing-s: 8px !important;
  --spacing-xl: 24px !important;
  --spacing-xs: 4px !important;
  --status-bar-background: #FFFFFF !important;
  --status-bar-border-color: #AA4400 !important;
  --status-bar-text-color: #333333 !important;
  --suggestion-background: #E5E5E5 !important;
  --tab-background-active: #E5E5E5 !important;
  --tab-container-background: #FFFFFF !important;
  --tab-outline-color: #AA4400 !important;
  --tab-radius-active: 5px 5px 0 0 !important;
  --tab-switcher-background: #FFFFFF !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #FFFFFF, transparent) !important;
  --tab-text-color: #4D4D4D !important;
  --tab-text-color-active: #333333 !important;
  --tab-text-color-focused: #333333 !important;
  --tab-text-color-focused-active: #333333 !important;
  --tab-text-color-focused-active-current: #000000 !important;
  --table-add-button-border-color: #AA4400 !important;
  --table-border-color: #AA4400 !important;
  --table-drag-handle-background-active: #FF8533 !important;
  --table-drag-handle-color: #4D4D4D !important;
  --table-header-border-color: #AA4400 !important;
  --table-header-color: #000000 !important;
  --table-selection-border-color: #FF8533 !important;
  --text-faint: #4D4D4D !important;
  --text-muted: #333333 !important;
  --text-normal: #000000 !important;
  --titleFont: Courier New, monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #FFFFFF !important;
  --titlebar-border-color: #AA4400 !important;
  --titlebar-text-color: #333333 !important;
  --titlebar-text-color-focused: #000000 !important;
  --toggle-radius: 15px !important;
  --toggle-thumb-radius: 13px !important;
  --true-black: #000000 !important;
  --vault-profile-color: #000000 !important;
  --vault-profile-color-hover: #000000 !important;
  --white: #FFFFFF !important;
  --quartz-icon-color: currentColor !important;
}

html[saved-theme="light"] body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html[saved-theme="light"] body[data-slug] div#quartz-root.page, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left, html[saved-theme="light"] .page > div#quartz-body div.sidebar.left:has(.explorer), html[saved-theme="light"] .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body[data-slug], html[saved-theme="light"] body[data-slug] .page > div#quartz-body, html[saved-theme="light"] .page > div#quartz-body div.center, html[saved-theme="light"] .page > div#quartz-body footer {
  background-color: rgb(229, 229, 229);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .bases-table thead th {
  border-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-content {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-file {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-node-group {
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .canvas-sidebar {
  background-color: rgb(229, 229, 229);
  border-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .note-properties {
  border-color: rgb(170, 68, 0);
}

html[saved-theme="light"] body .note-properties-key {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-row {
  border-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .note-properties-value {
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(170, 68, 0);
}

html[saved-theme="light"] body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body div#quartz-root {
  background-color: rgb(229, 229, 229);
  color: rgb(0, 0, 0);
}`,
    typography: `html[saved-theme="light"] body .page article p > b, html[saved-theme="light"] b {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > em, html[saved-theme="light"] em {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > i, html[saved-theme="light"] i {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .page article p > strong, html[saved-theme="light"] strong {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .text-highlight {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body del {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1.article-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"] {
  background-color: rgb(0, 0, 0);
  border-color: rgb(77, 77, 77);
  border-radius: 3px;
}

html[saved-theme="light"] body li.task-list-item input[type="checkbox"]:checked {
  background-color: rgb(255, 133, 51);
  border-color: rgb(255, 133, 51);
}

html[saved-theme="light"] body p {
  color: rgb(51, 51, 51);
  font-family: "Courier New", monospace;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `html[saved-theme="light"] body a.external, html[saved-theme="light"] footer a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal, html[saved-theme="light"] .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body a.internal.broken {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `html[saved-theme="light"] body dd {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body dt {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ol.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul > li {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ul.overflow {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `html[saved-theme="light"] body .data-footnote-backref {
  color: rgb(77, 77, 77);
}

html[saved-theme="light"] body blockquote {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html[saved-theme="light"] body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body table {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.438px;
}

html[saved-theme="light"] body td {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body th {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}`,
    code: `html[saved-theme="light"] body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

html[saved-theme="light"] body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body pre > code, html[saved-theme="light"] pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

html[saved-theme="light"] body pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}`,
    images: `html[saved-theme="light"] body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `html[saved-theme="light"] body .file-embed {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 133, 51);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `html[saved-theme="light"] body .katex-display > .katex {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .katex-display > .katex > .katex-html {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body input[type=checkbox] {
  border-bottom-color: rgb(77, 77, 77);
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  border-left-color: rgb(77, 77, 77);
  border-right-color: rgb(77, 77, 77);
  border-top-color: rgb(77, 77, 77);
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  margin-right: 8.4px;
}

html[saved-theme="light"] body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\\""] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(229, 229, 229);
  color: rgb(255, 102, 0);
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
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body .search > .search-container > .search-space {
  background-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-title, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html[saved-theme="light"] .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)), html[saved-theme="light"] ~ .result-card:focus, html[saved-theme="light"] ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html[saved-theme="light"] .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html[saved-theme="light"] ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h2.page-title, html[saved-theme="light"] h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body hr {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
}`,
    scrollbars: `html[saved-theme="light"] body .callout {
  --callout-color: 8, 109, 221;
}

html[saved-theme="light"] body ::-webkit-scrollbar {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-corner {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:active {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-thumb:hover {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

html[saved-theme="light"] body ::-webkit-scrollbar-track {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}`,
    explorer: `html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}

html[saved-theme="light"] body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}`,
    toc: `html[saved-theme="light"] body details.toc summary::marker {
  color: rgb(0, 0, 0);
}`,
    graph: `html[saved-theme="light"] body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `html[saved-theme="light"] body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(51, 51, 51);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body footer ul li a {
  color: rgb(51, 51, 51);
}`,
    recentNotes: `html[saved-theme="light"] body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "Courier New", monospace;
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}`,
    listPage: `html[saved-theme="light"] body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body li.section-li > .section .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}

html[saved-theme="light"] body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
}

html[saved-theme="light"] body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `html[saved-theme="light"] body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `html[saved-theme="light"] body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body .breadcrumb-element p {
  color: rgb(77, 77, 77);
}`,
    misc: `html[saved-theme="light"] body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body .metadata {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(51, 51, 51);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html[saved-theme="light"] body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

html[saved-theme="light"] body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body abbr {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

html[saved-theme="light"] body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sub {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body summary {
  color: rgb(0, 0, 0);
}

html[saved-theme="light"] body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
