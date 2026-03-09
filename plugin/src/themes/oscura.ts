import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "oscura",
    modes: ["dark"],
    variations: [],
    fonts: ["jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-border: #32333B;
  --background-modifier-cover: rgba(0, 0, 0, 0.5);
  --background-modifier-error: #FF5C5C;
  --background-modifier-error-hover: #FF5C5C;
  --background-modifier-form-field: #232323;
  --background-modifier-form-field-highlighted: #2C2C31;
  --background-modifier-form-field-hover: #232323;
  --background-modifier-success: #4EBE96;
  --background-primary: #0B0B0F;
  --background-primary-alt: #0B0B0F;
  --background-secondary: #0B0B0F;
  --background-secondary-alt: #0B0B0F;
  --bases-cards-background: #0B0B0F;
  --bases-cards-cover-background: #0B0B0F;
  --bases-cards-shadow: 0 0 0 1px #32333B;
  --bases-embed-border-color: #32333B;
  --bases-group-heading-property-color: #46474F;
  --bases-table-border-color: #32333B;
  --bases-table-cell-background-active: #0B0B0F;
  --bases-table-cell-background-disabled: #0B0B0F;
  --bases-table-cell-shadow-focus: 0 0 0 2px #479FFA;
  --bases-table-group-background: #0B0B0F;
  --bases-table-header-background: #0B0B0F;
  --bases-table-header-color: #46474F;
  --bases-table-summary-background: #0B0B0F;
  --blockquote-border-color: #479FFA;
  --blur-background: color-mix(in srgb, #232323 65%, transparent) linear-gradient(#232323, color-mix(in srgb, #232323 65%, transparent));
  --canvas-background: #0B0B0F;
  --canvas-card-label-color: #32333B;
  --caret-color: #E6E6E6;
  --checkbox-border-color: #32333B;
  --checkbox-border-color-hover: #46474F;
  --checkbox-color: #479FFA;
  --checkbox-color-hover: #479FFA;
  --checkbox-marker-color: #0B0B0F;
  --checklist-done-color: #46474F;
  --code-background: #0B0B0F;
  --code-border-color: #32333B;
  --code-comment: #32333B;
  --code-normal: #E6E6E6;
  --code-punctuation: #46474F;
  --collapse-icon-color: #32333B;
  --collapse-icon-color-collapsed: #479FFA;
  --divider-color: #32333B;
  --divider-color-hover: #479FFA;
  --dropdown-background: #232323;
  --dropdown-background-hover: #2C2C31;
  --embed-block-shadow-hover: 0 0 0 1px #32333B, inset 0 0 0 1px #32333B;
  --embed-border-start: 2px solid #479FFA;
  --file-header-background: #0B0B0F;
  --file-header-background-focused: #0B0B0F;
  --flair-background: #232323;
  --flair-color: #E6E6E6;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --footnote-divider-color: #32333B;
  --footnote-id-color: #46474F;
  --footnote-id-color-no-occurrences: #32333B;
  --graph-node: #46474F;
  --graph-node-focused: #479FFA;
  --graph-node-unresolved: #32333B;
  --graph-text: #E6E6E6;
  --heading-formatting: #32333B;
  --hr-color: #32333B;
  --icon-color: #46474F;
  --icon-color-active: #479FFA;
  --icon-color-focused: #E6E6E6;
  --icon-color-hover: #46474F;
  --input-date-separator: #32333B;
  --input-placeholder-color: #32333B;
  --interactive-accent: #479FFA;
  --interactive-accent-hover: #479FFA;
  --interactive-hover: #2C2C31;
  --interactive-normal: #232323;
  --interactive-success: #4EBE96;
  --link-color: #479FFA;
  --link-color-hover: #479FFA;
  --link-external-color: #479FFA;
  --link-external-color-hover: #479FFA;
  --link-unresolved-color: #479FFA;
  --list-marker-color: #32333B;
  --list-marker-color-collapsed: #479FFA;
  --list-marker-color-hover: #46474F;
  --menu-background: #0B0B0F;
  --metadata-border-color: #32333B;
  --metadata-divider-color: #32333B;
  --metadata-input-text-color: #E6E6E6;
  --metadata-label-text-color: #46474F;
  --metadata-label-text-color-hover: #46474F;
  --modal-background: #0B0B0F;
  --nav-collapse-icon-color: #32333B;
  --nav-collapse-icon-color-collapsed: #32333B;
  --nav-heading-color: #E6E6E6;
  --nav-heading-color-collapsed: #32333B;
  --nav-heading-color-collapsed-hover: #46474F;
  --nav-heading-color-hover: #E6E6E6;
  --nav-item-color: #46474F;
  --nav-item-color-active: #E6E6E6;
  --nav-item-color-highlighted: #479FFA;
  --nav-item-color-hover: #E6E6E6;
  --nav-item-color-selected: #E6E6E6;
  --nav-tag-color: #32333B;
  --nav-tag-color-active: #46474F;
  --nav-tag-color-hover: #46474F;
  --pdf-background: #0B0B0F;
  --pdf-page-background: #0B0B0F;
  --pdf-shadow: 0 0 0 1px #32333B;
  --pdf-sidebar-background: #0B0B0F;
  --pdf-thumbnail-shadow: 0 0 0 1px #32333B;
  --pill-border-color: #32333B;
  --pill-color: #46474F;
  --pill-color-hover: #E6E6E6;
  --pill-color-remove: #32333B;
  --pill-color-remove-hover: #479FFA;
  --prompt-background: #0B0B0F;
  --raised-background: color-mix(in srgb, #232323 65%, transparent) linear-gradient(#232323, color-mix(in srgb, #232323 65%, transparent));
  --ribbon-background: #0B0B0F;
  --ribbon-background-collapsed: #0B0B0F;
  --scrollbar-active-thumb-bg: rgba(90, 91, 99, 0.5);
  --scrollbar-bg: rgba(90, 91, 99, 0.2);
  --scrollbar-thumb-bg: rgba(90, 91, 99, 0.3);
  --search-clear-button-color: #46474F;
  --search-icon-color: #46474F;
  --search-result-background: #0B0B0F;
  --setting-group-heading-color: #E6E6E6;
  --setting-items-background: #0B0B0F;
  --setting-items-border-color: #32333B;
  --slider-track-background: #32333B;
  --status-bar-background: #0B0B0F;
  --status-bar-border-color: #32333B;
  --status-bar-text-color: #46474F;
  --suggestion-background: #0B0B0F;
  --tab-background-active: #0B0B0F;
  --tab-container-background: #0B0B0F;
  --tab-outline-color: #32333B;
  --tab-switcher-background: #0B0B0F;
  --tab-switcher-menubar-background: linear-gradient(to top, #0B0B0F, transparent);
  --tab-text-color: #32333B;
  --tab-text-color-active: #46474F;
  --tab-text-color-focused: #46474F;
  --tab-text-color-focused-active: #46474F;
  --tab-text-color-focused-active-current: #E6E6E6;
  --tab-text-color-focused-highlighted: #479FFA;
  --table-add-button-border-color: #32333B;
  --table-border-color: #32333B;
  --table-drag-handle-background-active: #479FFA;
  --table-drag-handle-color: #32333B;
  --table-drag-handle-color-active: #0B0B0F;
  --table-header-border-color: #32333B;
  --table-header-color: #E6E6E6;
  --table-selection-border-color: #479FFA;
  --tag-color: #479FFA;
  --tag-color-hover: #479FFA;
  --text-accent: #479FFA;
  --text-accent-hover: #479FFA;
  --text-error: #FF5C5C;
  --text-error-hover: #FF5C5C;
  --text-faint: #32333B;
  --text-highlight-bg: #5C6974;
  --text-highlight-bg-active: #5C6974;
  --text-muted: #46474F;
  --text-normal: #E6E6E6;
  --text-on-accent: #0B0B0F;
  --text-selection: rgba(90, 91, 99, 0.5);
  --titlebar-background: #0B0B0F;
  --titlebar-background-focused: #0B0B0F;
  --titlebar-border-color: #32333B;
  --titlebar-text-color: #46474F;
  --titlebar-text-color-focused: #E6E6E6;
  --vault-profile-color: #E6E6E6;
  --vault-profile-color-hover: #E6E6E6;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(50, 51, 59);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(11, 11, 15);
  border-left-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

body div#quartz-root {
  background-color: rgb(11, 11, 15);
  color: rgb(230, 230, 230);
}`,
    typography: `body .page article p > b, b {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body .page article p > em, em {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body .page article p > i, i {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body .page article p > strong, strong {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body .text-highlight {
  background-color: rgb(92, 105, 116);
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body del {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: line-through rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body p {
  color: rgb(70, 71, 79);
  outline: rgb(70, 71, 79) none 0px;
  text-decoration: rgb(70, 71, 79);
  text-decoration-color: rgb(70, 71, 79);
}`,
    links: `body a.external, footer a {
  color: rgb(71, 159, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 159, 250) none 0px;
  text-decoration: underline rgb(71, 159, 250);
  text-decoration-color: rgb(71, 159, 250);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(71, 159, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 159, 250) none 0px;
  text-decoration: underline rgb(71, 159, 250);
  text-decoration-color: rgb(71, 159, 250);
}

body a.internal.broken {
  color: rgb(71, 159, 250);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(71, 159, 250) none 0px;
}`,
    lists: `body dd {
  color: rgb(230, 230, 230);
}

body dt {
  color: rgb(230, 230, 230);
}

body ol > li {
  color: rgb(230, 230, 230);
}

body ol.overflow {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body ul > li {
  color: rgb(230, 230, 230);
}

body ul.overflow {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(71, 159, 250);
  text-decoration: rgb(71, 159, 250);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body table {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

body th {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}`,
    code: `body code {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

body pre > code, pre:has(> code) {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

body pre:has(> code) {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}`,
    images: `body audio {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body figcaption {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body img {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body video {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    embeds: `body .file-embed {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
}

body .footnotes {
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .transclude {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(71, 159, 250);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body .transclude-inner {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(71, 159, 250);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(70, 71, 79);
  text-decoration: line-through rgb(70, 71, 79);
  text-decoration-color: rgb(70, 71, 79);
}

body input[type=checkbox] {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

body li.task-list-item[data-task='!'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='*'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='-'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='/'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='>'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='?'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='I'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='S'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='b'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='c'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='d'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='f'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='i'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='k'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='l'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='p'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='u'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body li.task-list-item[data-task='w'] {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}`,
    search: `body .search > .search-button {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

body .search > .search-container > .search-space {
  background-color: rgb(11, 11, 15);
}

body .search > .search-container > .search-space > * {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 230, 230) none 0px;
  text-decoration: rgb(230, 230, 230);
  text-decoration-color: rgb(230, 230, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(230, 230, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(230, 230, 230);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(44, 44, 49);
  color: rgb(230, 230, 230);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(44, 44, 49);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(44, 44, 49);
  color: rgb(230, 230, 230);
}

body a.internal.tag-link::before {
  color: rgb(71, 159, 250);
}

body h1 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(230, 230, 230);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(230, 231, 163);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

body ::-webkit-scrollbar-corner {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}

body ::-webkit-scrollbar-track {
  background: rgb(11, 11, 15) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(11, 11, 15);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
}`,
    footer: `body footer {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(70, 71, 79);
}

body footer ul li a {
  color: rgb(70, 71, 79);
  text-decoration: rgb(70, 71, 79);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(230, 230, 230);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 230, 230);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body li.section-li > .section .meta {
  color: rgb(230, 230, 230);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 230, 230);
  text-decoration: rgb(230, 230, 230);
}

body ul.section-ul {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
}

body .darkmode svg {
  color: rgb(70, 71, 79);
  stroke: rgb(70, 71, 79);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
}

body .breadcrumb-element p {
  color: rgb(50, 51, 59);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
}

body .metadata {
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(70, 71, 79);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(70, 71, 79);
  border-left-color: rgb(70, 71, 79);
  border-right-color: rgb(70, 71, 79);
  border-top-color: rgb(70, 71, 79);
  color: rgb(70, 71, 79);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(11, 11, 15);
}

body .page-header h2.page-title {
  color: rgb(230, 230, 230);
}

body abbr {
  color: rgb(230, 230, 230);
  text-decoration: underline dotted rgb(230, 230, 230);
}

body details {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body input[type=text] {
  background-color: rgb(35, 35, 35);
  border-bottom-color: rgb(50, 51, 59);
  border-left-color: rgb(50, 51, 59);
  border-right-color: rgb(50, 51, 59);
  border-top-color: rgb(50, 51, 59);
  color: rgb(230, 230, 230);
}

body kbd {
  background-color: rgb(11, 11, 15);
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
  color: rgb(230, 230, 230);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(230, 230, 230);
  border-left-color: rgb(230, 230, 230);
  border-right-color: rgb(230, 230, 230);
  border-top-color: rgb(230, 230, 230);
}

body sub {
  color: rgb(230, 230, 230);
}

body summary {
  color: rgb(230, 230, 230);
}

body sup {
  color: rgb(230, 230, 230);
}`,
  },
  light: {},
};
