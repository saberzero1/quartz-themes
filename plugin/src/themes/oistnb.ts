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
  --bodyFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --font-mermaid: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Courier New', monospace, 'Arial' !important;
  --font-size-huge: 24px !important;
  --font-size-large: 18px !important;
  --font-size-medium: 16px !important;
  --font-size-normal: 14px !important;
  --font-size-small: 12px !important;
  --font-text: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Courier New', monospace !important;
  --font-ui-theme: 'VT323', 'Courier New', monospace !important;
  --footnote-divider-color: #AA4400 !important;
  --footnote-id-color: #CC5500 !important;
  --footnote-id-color-no-occurrences: #AA4400 !important;
  --graph-node: #CC5500 !important;
  --graph-node-unresolved: #AA4400 !important;
  --graph-text: #FF6600 !important;
  --gray: #CC5500 !important;
  --headerFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(10, 10, 10);
  color: rgb(255, 102, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(10, 10, 10);
  color: rgb(255, 102, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(170, 68, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(10, 10, 10);
  border-left-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

body div#quartz-root {
  background-color: rgb(0, 0, 0);
  color: rgb(255, 102, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body .page article p > em, em {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body .page article p > i, i {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body .page article p > strong, strong {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body .text-highlight {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body del {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: line-through rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body p {
  color: rgb(204, 85, 0);
  font-family: "Courier New", monospace;
  outline: rgb(204, 85, 0) none 0px;
  text-decoration: rgb(204, 85, 0);
  text-decoration-color: rgb(204, 85, 0);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgb(255, 102, 0);
}

body dt {
  color: rgb(255, 102, 0);
}

body ol > li {
  color: rgb(255, 102, 0);
}

body ol.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body ul > li {
  color: rgb(255, 102, 0);
}

body ul.overflow {
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(170, 68, 0);
  text-decoration: rgb(170, 68, 0);
}

body blockquote {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body table {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.438px;
}

body td {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

body th {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

body pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body figcaption {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body img {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body video {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
}

body .footnotes {
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

body .transclude {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 133, 51);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 133, 51);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(204, 85, 0);
  text-decoration: line-through rgb(204, 85, 0);
  text-decoration-color: rgb(204, 85, 0);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(255, 102, 0);
  font-family: "Courier New", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > * {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(255, 102, 0) none 0px;
  text-decoration: rgb(255, 102, 0);
  text-decoration-color: rgb(255, 102, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(255, 102, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(255, 102, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 102, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(10, 10, 10);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(255, 102, 0);
}

body h1 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

body h2 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

body h2.page-title, h2.page-title a {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

body h4 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

body h5 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

body h6 {
  color: rgb(255, 102, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  text-shadow: rgb(255, 133, 51) 0px 0px 5px;
}

body hr {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-corner {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-track {
  background: rgb(0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(0, 0, 0);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
  text-decoration: rgb(255, 102, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
  text-decoration: rgb(255, 102, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
  text-decoration: rgb(255, 102, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}`,
    footer: `body footer {
  background-color: rgb(10, 10, 10);
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(204, 85, 0);
  font-family: "Courier New", monospace;
}

body footer ul li a {
  color: rgb(204, 85, 0);
  text-decoration: rgb(204, 85, 0);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(255, 102, 0);
  font-family: "Courier New", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body li.section-li > .section .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}

body .darkmode svg {
  color: rgb(204, 85, 0);
  stroke: rgb(204, 85, 0);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}

body .breadcrumb-element p {
  color: rgb(170, 68, 0);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

body .metadata {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(204, 85, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(10, 10, 10);
}

body .page-header h2.page-title {
  color: rgb(255, 102, 0);
}

body abbr {
  color: rgb(255, 102, 0);
  text-decoration: underline dotted rgb(255, 102, 0);
}

body details {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body input[type=text] {
  border-bottom-color: rgb(204, 85, 0);
  border-left-color: rgb(204, 85, 0);
  border-right-color: rgb(204, 85, 0);
  border-top-color: rgb(204, 85, 0);
  color: rgb(204, 85, 0);
}

body kbd {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
  color: rgb(255, 102, 0);
}

body progress {
  border-bottom-color: rgb(255, 102, 0);
  border-left-color: rgb(255, 102, 0);
  border-right-color: rgb(255, 102, 0);
  border-top-color: rgb(255, 102, 0);
}

body sub {
  color: rgb(255, 102, 0);
}

body summary {
  color: rgb(255, 102, 0);
}

body sup {
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
  --bodyFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --codeFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --font-mermaid: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-print: '??', '??', 'Courier New', monospace, 'Arial' !important;
  --font-size-huge: 24px !important;
  --font-size-large: 18px !important;
  --font-size-medium: 16px !important;
  --font-size-normal: 14px !important;
  --font-size-small: 12px !important;
  --font-text: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: 'Courier New', monospace !important;
  --font-ui-theme: 'VT323', 'Courier New', monospace !important;
  --footnote-divider-color: #AA4400 !important;
  --footnote-id-color: #333333 !important;
  --footnote-id-color-no-occurrences: #4D4D4D !important;
  --graph-node: #333333 !important;
  --graph-node-unresolved: #4D4D4D !important;
  --graph-text: #000000 !important;
  --gray: #333333 !important;
  --headerFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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
  --titleFont: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
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

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(229, 229, 229);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(170, 68, 0);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(255, 255, 255);
  border-left-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

body div#quartz-root {
  background-color: rgb(229, 229, 229);
  color: rgb(0, 0, 0);
}`,
    typography: `body .page article p > b, b {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > em, em {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > i, i {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .page article p > strong, strong {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .text-highlight {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body del {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: line-through rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body p {
  color: rgb(51, 51, 51);
  font-family: "Courier New", monospace;
  outline: rgb(51, 51, 51) none 0px;
  text-decoration: rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}`,
    links: `body a.external, footer a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.broken {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    lists: `body dd {
  color: rgb(0, 0, 0);
}

body dt {
  color: rgb(0, 0, 0);
}

body ol > li {
  color: rgb(0, 0, 0);
}

body ol.overflow {
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ul > li {
  color: rgb(0, 0, 0);
}

body ul.overflow {
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(77, 77, 77);
  text-decoration: rgb(77, 77, 77);
}

body blockquote {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body table {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 217.438px;
}

body td {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

body th {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}`,
    code: `body code {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body figure[data-rehype-pretty-code-figure] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
}

body pre > code, pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}

body pre:has(> code) {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
}`,
    images: `body audio {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body figcaption {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body img {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body video {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    embeds: `body .file-embed {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
}

body .footnotes {
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .transclude {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 133, 51);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .transclude-inner {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(255, 133, 51);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(51, 51, 51);
  text-decoration: line-through rgb(51, 51, 51);
  text-decoration-color: rgb(51, 51, 51);
}

body input[type=checkbox] {
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

body li.task-list-item[data-task='!'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='*'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='-'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='/'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='>'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='?'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='I'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='S'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='b'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='c'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='d'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='f'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='i'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='k'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='l'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='p'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='u'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body li.task-list-item[data-task='w'] {
  color: rgb(0, 0, 0);
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}`,
    search: `body .search > .search-button {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(0, 0, 0);
  font-family: "Courier New", monospace;
}

body .search > .search-container > .search-space {
  background-color: rgb(229, 229, 229);
}

body .search > .search-container > .search-space > * {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(0, 0, 0) none 0px;
  text-decoration: rgb(0, 0, 0);
  text-decoration-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(255, 255, 255);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(0, 0, 0);
}

body h1 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(0, 0, 0);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

body ::-webkit-scrollbar-corner {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}

body ::-webkit-scrollbar-track {
  background: rgb(229, 229, 229) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(229, 229, 229);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
  text-decoration: rgb(255, 102, 0);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
  text-decoration: rgb(255, 102, 0);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
  text-decoration: rgb(255, 102, 0);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}`,
    footer: `body footer {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(51, 51, 51);
  font-family: "Courier New", monospace;
}

body footer ul li a {
  color: rgb(51, 51, 51);
  text-decoration: rgb(51, 51, 51);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(0, 0, 0);
  font-family: "Courier New", monospace;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body li.section-li > .section .meta {
  color: rgb(255, 102, 0);
  font-family: VT323, "Courier New", monospace;
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(255, 102, 0);
  text-decoration: rgb(255, 102, 0);
}

body ul.section-ul {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .darkmode svg {
  color: rgb(51, 51, 51);
  stroke: rgb(51, 51, 51);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body .breadcrumb-element p {
  color: rgb(77, 77, 77);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body .metadata {
  border-bottom-color: rgb(170, 68, 0);
  border-left-color: rgb(170, 68, 0);
  border-right-color: rgb(170, 68, 0);
  border-top-color: rgb(170, 68, 0);
  color: rgb(51, 51, 51);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
  font-family: "??", "Courier New", monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(255, 255, 255);
}

body .page-header h2.page-title {
  color: rgb(0, 0, 0);
}

body abbr {
  color: rgb(0, 0, 0);
  text-decoration: underline dotted rgb(0, 0, 0);
}

body details {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body input[type=text] {
  border-bottom-color: rgb(51, 51, 51);
  border-left-color: rgb(51, 51, 51);
  border-right-color: rgb(51, 51, 51);
  border-top-color: rgb(51, 51, 51);
  color: rgb(51, 51, 51);
}

body kbd {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
  color: rgb(0, 0, 0);
}

body progress {
  border-bottom-color: rgb(0, 0, 0);
  border-left-color: rgb(0, 0, 0);
  border-right-color: rgb(0, 0, 0);
  border-top-color: rgb(0, 0, 0);
}

body sub {
  color: rgb(0, 0, 0);
}

body summary {
  color: rgb(0, 0, 0);
}

body sup {
  color: rgb(0, 0, 0);
}`,
  },
};
