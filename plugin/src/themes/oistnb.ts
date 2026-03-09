import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: { name: "oistnb", modes: ["dark", "light"], variations: [], fonts: [] },
  dark: {
    base: `:root:root[saved-theme="dark"] {
  --background-modifier-border: #AA4400;
  --background-primary: #000000;
  --background-secondary: #0A0A0A;
  --background-tertiary: #1A1A1A;
  --bases-cards-background: #000000;
  --bases-cards-shadow: 0 0 0 1px #AA4400;
  --bases-embed-border-color: #AA4400;
  --bases-group-heading-property-color: #CC5500;
  --bases-table-border-color: #AA4400;
  --bases-table-cell-background-active: #000000;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FF8533;
  --bases-table-header-background: #000000;
  --bases-table-header-color: #CC5500;
  --bases-table-summary-background: #000000;
  --blockquote-border-color: #FF8533;
  --blur-background: color-mix(in srgb, #CC5500 65%, transparent) linear-gradient(#CC5500, color-mix(in srgb, #CC5500 65%, transparent));
  --canvas-background: #000000;
  --canvas-card-label-color: #AA4400;
  --caret-color: #FF6600;
  --checkbox-border-color: #AA4400;
  --checkbox-border-color-hover: #CC5500;
  --checkbox-color: #FF8533;
  --checkbox-marker-color: #000000;
  --checkbox-radius: 3px;
  --checklist-done-color: #CC5500;
  --code-border-color: #AA4400;
  --code-comment: #AA4400;
  --code-normal: #FF6600;
  --code-punctuation: #CC5500;
  --collapse-icon-color: #AA4400;
  --dark-gray: #1A1A1A;
  --divider-color: #AA4400;
  --divider-color-hover: #FF8533;
  --dropdown-background: #CC5500;
  --dropdown-background-hover: #FF6600;
  --embed-block-shadow-hover: 0 0 0 1px #AA4400, inset 0 0 0 1px #AA4400;
  --embed-border-start: 2px solid #FF8533;
  --file-header-background: #000000;
  --file-header-background-focused: #000000;
  --flair-background: #CC5500;
  --flair-color: #FF6600;
  --font-mermaid: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Courier New', monospace, 'Arial';
  --font-size-huge: 24px;
  --font-size-large: 18px;
  --font-size-medium: 16px;
  --font-size-normal: 14px;
  --font-size-small: 12px;
  --font-text: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Courier New', monospace;
  --font-ui-theme: 'VT323', 'Courier New', monospace;
  --footnote-divider-color: #AA4400;
  --footnote-id-color: #CC5500;
  --footnote-id-color-no-occurrences: #AA4400;
  --graph-node: #CC5500;
  --graph-node-unresolved: #AA4400;
  --graph-text: #FF6600;
  --heading-formatting: #AA4400;
  --hr-color: #AA4400;
  --icon-color: #CC5500;
  --icon-color-focused: #FF6600;
  --icon-color-hover: #CC5500;
  --input-date-separator: #AA4400;
  --input-placeholder-color: #AA4400;
  --interactive-accent: #FF8533;
  --interactive-hover: #FF6600;
  --interactive-normal: #CC5500;
  --light-gray: #4D4D4D;
  --list-marker-color: #AA4400;
  --list-marker-color-hover: #CC5500;
  --medium-gray: #333333;
  --menu-background: #0A0A0A;
  --metadata-border-color: #AA4400;
  --metadata-divider-color: #AA4400;
  --metadata-input-text-color: #FF6600;
  --metadata-label-text-color: #CC5500;
  --metadata-label-text-color-hover: #CC5500;
  --modal-background: #000000;
  --nav-collapse-icon-color: #AA4400;
  --nav-collapse-icon-color-collapsed: #AA4400;
  --nav-heading-color: #FF6600;
  --nav-heading-color-collapsed: #AA4400;
  --nav-heading-color-collapsed-hover: #CC5500;
  --nav-heading-color-hover: #FF6600;
  --nav-item-color: #CC5500;
  --nav-item-color-active: #FF6600;
  --nav-item-color-hover: #FF6600;
  --nav-item-color-selected: #FF6600;
  --nav-tag-color: #AA4400;
  --nav-tag-color-active: #CC5500;
  --nav-tag-color-hover: #CC5500;
  --off-black: #0A0A0A;
  --off-white: #E5E5E5;
  --orange-dark: #CC5500;
  --orange-darker: #AA4400;
  --orange-darkest: #802200;
  --orange-light: #FF8533;
  --orange-lighter: #FFA366;
  --orange-medium: #FF6600;
  --pdf-background: #000000;
  --pdf-page-background: #000000;
  --pdf-shadow: 0 0 0 1px #AA4400;
  --pdf-sidebar-background: #000000;
  --pdf-thumbnail-shadow: 0 0 0 1px #AA4400;
  --pill-border-color: #AA4400;
  --pill-color: #CC5500;
  --pill-color-hover: #FF6600;
  --pill-color-remove: #AA4400;
  --prompt-background: #000000;
  --radius-xs: 2px;
  --raised-background: color-mix(in srgb, #CC5500 65%, transparent) linear-gradient(#CC5500, color-mix(in srgb, #CC5500 65%, transparent));
  --ribbon-background: #0A0A0A;
  --ribbon-background-collapsed: #000000;
  --search-clear-button-color: #CC5500;
  --search-icon-color: #CC5500;
  --search-result-background: #000000;
  --setting-group-heading-color: #FF6600;
  --setting-items-border-color: #AA4400;
  --slider-thumb-radius: 50%;
  --slider-track-background: #AA4400;
  --spacing-l: 16px;
  --spacing-m: 12px;
  --spacing-s: 8px;
  --spacing-xl: 24px;
  --spacing-xs: 4px;
  --status-bar-background: #0A0A0A;
  --status-bar-border-color: #AA4400;
  --status-bar-text-color: #CC5500;
  --suggestion-background: #000000;
  --tab-background-active: #000000;
  --tab-container-background: #0A0A0A;
  --tab-outline-color: #AA4400;
  --tab-radius-active: 5px 5px 0 0;
  --tab-switcher-background: #0A0A0A;
  --tab-switcher-menubar-background: linear-gradient(to top, #0A0A0A, transparent);
  --tab-text-color: #AA4400;
  --tab-text-color-active: #CC5500;
  --tab-text-color-focused: #CC5500;
  --tab-text-color-focused-active: #CC5500;
  --tab-text-color-focused-active-current: #FF6600;
  --table-add-button-border-color: #AA4400;
  --table-border-color: #AA4400;
  --table-drag-handle-background-active: #FF8533;
  --table-drag-handle-color: #AA4400;
  --table-header-border-color: #AA4400;
  --table-header-color: #FF6600;
  --table-selection-border-color: #FF8533;
  --text-faint: #AA4400;
  --text-muted: #CC5500;
  --text-normal: #FF6600;
  --titlebar-background: #0A0A0A;
  --titlebar-border-color: #AA4400;
  --titlebar-text-color: #CC5500;
  --titlebar-text-color-focused: #FF6600;
  --toggle-radius: 15px;
  --toggle-thumb-radius: 13px;
  --true-black: #000000;
  --vault-profile-color: #FF6600;
  --vault-profile-color-hover: #FF6600;
  --white: #FFFFFF;
  --quartz-icon-color: currentColor;
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
  --background-modifier-border: #AA4400;
  --background-primary: #E5E5E5;
  --background-secondary: #FFFFFF;
  --background-tertiary: #4D4D4D;
  --bases-cards-background: #E5E5E5;
  --bases-cards-shadow: 0 0 0 1px #AA4400;
  --bases-embed-border-color: #AA4400;
  --bases-group-heading-property-color: #333333;
  --bases-table-border-color: #AA4400;
  --bases-table-cell-background-active: #E5E5E5;
  --bases-table-cell-shadow-focus: 0 0 0 2px #FF8533;
  --bases-table-header-background: #E5E5E5;
  --bases-table-header-color: #333333;
  --bases-table-summary-background: #E5E5E5;
  --blockquote-border-color: #FF8533;
  --blur-background: color-mix(in srgb, #E5E5E5 65%, transparent) linear-gradient(#E5E5E5, color-mix(in srgb, #E5E5E5 65%, transparent));
  --canvas-background: #E5E5E5;
  --canvas-card-label-color: #4D4D4D;
  --caret-color: #000000;
  --checkbox-border-color: #4D4D4D;
  --checkbox-border-color-hover: #333333;
  --checkbox-color: #FF8533;
  --checkbox-marker-color: #E5E5E5;
  --checkbox-radius: 3px;
  --checklist-done-color: #333333;
  --code-border-color: #AA4400;
  --code-comment: #4D4D4D;
  --code-normal: #000000;
  --code-punctuation: #333333;
  --collapse-icon-color: #4D4D4D;
  --dark-gray: #1A1A1A;
  --divider-color: #AA4400;
  --divider-color-hover: #FF8533;
  --dropdown-background: #CC5500;
  --dropdown-background-hover: #FF6600;
  --embed-block-shadow-hover: 0 0 0 1px #AA4400, inset 0 0 0 1px #AA4400;
  --embed-border-start: 2px solid #FF8533;
  --file-header-background: #E5E5E5;
  --file-header-background-focused: #E5E5E5;
  --flair-background: #CC5500;
  --flair-color: #000000;
  --font-mermaid: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-print: '??', '??', 'Courier New', monospace, 'Arial';
  --font-size-huge: 24px;
  --font-size-large: 18px;
  --font-size-medium: 16px;
  --font-size-normal: 14px;
  --font-size-small: 12px;
  --font-text: '??', 'Courier New', monospace, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: 'Courier New', monospace;
  --font-ui-theme: 'VT323', 'Courier New', monospace;
  --footnote-divider-color: #AA4400;
  --footnote-id-color: #333333;
  --footnote-id-color-no-occurrences: #4D4D4D;
  --graph-node: #333333;
  --graph-node-unresolved: #4D4D4D;
  --graph-text: #000000;
  --heading-formatting: #4D4D4D;
  --hr-color: #AA4400;
  --icon-color: #333333;
  --icon-color-focused: #000000;
  --icon-color-hover: #333333;
  --input-date-separator: #4D4D4D;
  --input-placeholder-color: #4D4D4D;
  --interactive-accent: #FF8533;
  --interactive-hover: #FF6600;
  --interactive-normal: #CC5500;
  --light-gray: #4D4D4D;
  --list-marker-color: #4D4D4D;
  --list-marker-color-hover: #333333;
  --medium-gray: #333333;
  --menu-background: #FFFFFF;
  --metadata-border-color: #AA4400;
  --metadata-divider-color: #AA4400;
  --metadata-input-text-color: #000000;
  --metadata-label-text-color: #333333;
  --metadata-label-text-color-hover: #333333;
  --modal-background: #E5E5E5;
  --nav-collapse-icon-color: #4D4D4D;
  --nav-collapse-icon-color-collapsed: #4D4D4D;
  --nav-heading-color: #000000;
  --nav-heading-color-collapsed: #4D4D4D;
  --nav-heading-color-collapsed-hover: #333333;
  --nav-heading-color-hover: #000000;
  --nav-item-color: #333333;
  --nav-item-color-active: #000000;
  --nav-item-color-hover: #000000;
  --nav-item-color-selected: #000000;
  --nav-tag-color: #4D4D4D;
  --nav-tag-color-active: #333333;
  --nav-tag-color-hover: #333333;
  --off-black: #0A0A0A;
  --off-white: #E5E5E5;
  --orange-dark: #CC5500;
  --orange-darker: #AA4400;
  --orange-darkest: #802200;
  --orange-light: #FF8533;
  --orange-lighter: #FFA366;
  --orange-medium: #FF6600;
  --pdf-background: #E5E5E5;
  --pdf-page-background: #E5E5E5;
  --pdf-sidebar-background: #E5E5E5;
  --pill-border-color: #AA4400;
  --pill-color: #333333;
  --pill-color-hover: #000000;
  --pill-color-remove: #4D4D4D;
  --prompt-background: #E5E5E5;
  --radius-xs: 2px;
  --raised-background: color-mix(in srgb, #E5E5E5 65%, transparent) linear-gradient(#E5E5E5, color-mix(in srgb, #E5E5E5 65%, transparent));
  --ribbon-background: #FFFFFF;
  --ribbon-background-collapsed: #E5E5E5;
  --search-clear-button-color: #333333;
  --search-icon-color: #333333;
  --search-result-background: #E5E5E5;
  --setting-group-heading-color: #000000;
  --setting-items-border-color: #AA4400;
  --slider-thumb-radius: 50%;
  --slider-track-background: #AA4400;
  --spacing-l: 16px;
  --spacing-m: 12px;
  --spacing-s: 8px;
  --spacing-xl: 24px;
  --spacing-xs: 4px;
  --status-bar-background: #FFFFFF;
  --status-bar-border-color: #AA4400;
  --status-bar-text-color: #333333;
  --suggestion-background: #E5E5E5;
  --tab-background-active: #E5E5E5;
  --tab-container-background: #FFFFFF;
  --tab-outline-color: #AA4400;
  --tab-radius-active: 5px 5px 0 0;
  --tab-switcher-background: #FFFFFF;
  --tab-switcher-menubar-background: linear-gradient(to top, #FFFFFF, transparent);
  --tab-text-color: #4D4D4D;
  --tab-text-color-active: #333333;
  --tab-text-color-focused: #333333;
  --tab-text-color-focused-active: #333333;
  --tab-text-color-focused-active-current: #000000;
  --table-add-button-border-color: #AA4400;
  --table-border-color: #AA4400;
  --table-drag-handle-background-active: #FF8533;
  --table-drag-handle-color: #4D4D4D;
  --table-header-border-color: #AA4400;
  --table-header-color: #000000;
  --table-selection-border-color: #FF8533;
  --text-faint: #4D4D4D;
  --text-muted: #333333;
  --text-normal: #000000;
  --titlebar-background: #FFFFFF;
  --titlebar-border-color: #AA4400;
  --titlebar-text-color: #333333;
  --titlebar-text-color-focused: #000000;
  --toggle-radius: 15px;
  --toggle-thumb-radius: 13px;
  --true-black: #000000;
  --vault-profile-color: #000000;
  --vault-profile-color-hover: #000000;
  --white: #FFFFFF;
  --quartz-icon-color: currentColor;
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
