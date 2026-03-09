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
  --background-modifier-border: #403838;
  --background-modifier-cover: rgba(0, 0, 0, 0.5);
  --background-modifier-error: #fd6883;
  --background-modifier-error-hover: #fd6883;
  --background-modifier-form-field: #403838;
  --background-modifier-form-field-highlighted: #403838;
  --background-modifier-form-field-hover: #403838;
  --background-modifier-success: #adda78;
  --background-primary: #2c2525;
  --background-primary-alt: #2c2525;
  --background-secondary: #2c2525;
  --background-secondary-alt: #211c1c;
  --bases-cards-background: #2c2525;
  --bases-cards-cover-background: #2c2525;
  --bases-cards-shadow: 0 0 0 1px #403838;
  --bases-embed-border-color: #403838;
  --bases-group-heading-property-color: #72696a;
  --bases-table-border-color: #403838;
  --bases-table-cell-background-active: #2c2525;
  --bases-table-cell-background-disabled: #2c2525;
  --bases-table-cell-shadow-focus: 0 0 0 2px #85dacc;
  --bases-table-group-background: #2c2525;
  --bases-table-header-background: #2c2525;
  --bases-table-header-color: #72696a;
  --bases-table-summary-background: #2c2525;
  --blockquote-border-color: #85dacc;
  --blur-background: color-mix(in srgb, #403838 65%, transparent) linear-gradient(#403838, color-mix(in srgb, #403838 65%, transparent));
  --canvas-background: #2c2525;
  --canvas-card-label-color: #5b5353;
  --caret-color: #e6d9db;
  --checkbox-border-color: #5b5353;
  --checkbox-border-color-hover: #72696a;
  --checkbox-color: #85dacc;
  --checkbox-color-hover: #85dacc;
  --checkbox-marker-color: #2c2525;
  --checklist-done-color: #72696a;
  --code-background: #2c2525;
  --code-border-color: #403838;
  --code-comment: #5b5353;
  --code-normal: #e6d9db;
  --code-punctuation: #72696a;
  --collapse-icon-color: #5b5353;
  --collapse-icon-color-collapsed: #85dacc;
  --divider-color: #403838;
  --divider-color-hover: #85dacc;
  --dropdown-background: #403838;
  --dropdown-background-hover: #5b5353;
  --embed-block-shadow-hover: 0 0 0 1px #403838, inset 0 0 0 1px #403838;
  --embed-border-start: 2px solid #85dacc;
  --file-header-background: #2c2525;
  --file-header-background-focused: #2c2525;
  --flair-background: #403838;
  --flair-color: #e6d9db;
  --font-mermaid: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace;
  --font-print: '??', '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, 'Arial';
  --font-text: '??', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  --footnote-divider-color: #403838;
  --footnote-id-color: #72696a;
  --footnote-id-color-no-occurrences: #5b5353;
  --graph-node: #72696a;
  --graph-node-focused: #85dacc;
  --graph-node-unresolved: #5b5353;
  --graph-text: #e6d9db;
  --heading-formatting: #5b5353;
  --hr-color: #403838;
  --icon-color: #72696a;
  --icon-color-active: #85dacc;
  --icon-color-focused: #e6d9db;
  --icon-color-hover: #72696a;
  --input-date-separator: #5b5353;
  --input-placeholder-color: #5b5353;
  --interactive-accent: #85dacc;
  --interactive-accent-hover: #85dacc;
  --interactive-hover: #5b5353;
  --interactive-normal: #403838;
  --interactive-success: #adda78;
  --link-color: #85dacc;
  --link-color-hover: #85dacc;
  --link-external-color: #85dacc;
  --link-external-color-hover: #85dacc;
  --link-unresolved-color: #85dacc;
  --list-marker-color: #5b5353;
  --list-marker-color-collapsed: #85dacc;
  --list-marker-color-hover: #72696a;
  --menu-background: #2c2525;
  --metadata-border-color: #403838;
  --metadata-divider-color: #403838;
  --metadata-input-text-color: #e6d9db;
  --metadata-label-text-color: #72696a;
  --metadata-label-text-color-hover: #72696a;
  --modal-background: #2c2525;
  --nav-collapse-icon-color: #5b5353;
  --nav-collapse-icon-color-collapsed: #5b5353;
  --nav-heading-color: #e6d9db;
  --nav-heading-color-collapsed: #5b5353;
  --nav-heading-color-collapsed-hover: #72696a;
  --nav-heading-color-hover: #e6d9db;
  --nav-item-color: #72696a;
  --nav-item-color-active: #e6d9db;
  --nav-item-color-highlighted: #85dacc;
  --nav-item-color-hover: #e6d9db;
  --nav-item-color-selected: #e6d9db;
  --nav-tag-color: #5b5353;
  --nav-tag-color-active: #72696a;
  --nav-tag-color-hover: #72696a;
  --pdf-background: #2c2525;
  --pdf-page-background: #2c2525;
  --pdf-shadow: 0 0 0 1px #403838;
  --pdf-sidebar-background: #2c2525;
  --pdf-thumbnail-shadow: 0 0 0 1px #403838;
  --pill-border-color: #403838;
  --pill-color: #72696a;
  --pill-color-hover: #e6d9db;
  --pill-color-remove: #5b5353;
  --pill-color-remove-hover: #85dacc;
  --prompt-background: #2c2525;
  --raised-background: color-mix(in srgb, #403838 65%, transparent) linear-gradient(#403838, color-mix(in srgb, #403838 65%, transparent));
  --ribbon-background: #2c2525;
  --ribbon-background-collapsed: #2c2525;
  --scrollbar-active-thumb-bg: rgba(114, 105, 106, 0.5);
  --scrollbar-bg: rgba(114, 105, 106, 0.2);
  --scrollbar-thumb-bg: rgba(114, 105, 106, 0.3);
  --search-clear-button-color: #72696a;
  --search-icon-color: #72696a;
  --search-result-background: #2c2525;
  --setting-group-heading-color: #e6d9db;
  --setting-items-background: #2c2525;
  --setting-items-border-color: #403838;
  --slider-track-background: #403838;
  --status-bar-background: #2c2525;
  --status-bar-border-color: #403838;
  --status-bar-text-color: #72696a;
  --suggestion-background: #2c2525;
  --tab-background-active: #2c2525;
  --tab-container-background: #2c2525;
  --tab-outline-color: #403838;
  --tab-switcher-background: #2c2525;
  --tab-switcher-menubar-background: linear-gradient(to top, #2c2525, transparent);
  --tab-text-color: #5b5353;
  --tab-text-color-active: #72696a;
  --tab-text-color-focused: #72696a;
  --tab-text-color-focused-active: #72696a;
  --tab-text-color-focused-active-current: #e6d9db;
  --tab-text-color-focused-highlighted: #85dacc;
  --table-add-button-border-color: #403838;
  --table-border-color: #403838;
  --table-drag-handle-background-active: #85dacc;
  --table-drag-handle-color: #5b5353;
  --table-drag-handle-color-active: #2c2525;
  --table-header-border-color: #403838;
  --table-header-color: #e6d9db;
  --table-selection-border-color: #85dacc;
  --tag-color: #85dacc;
  --tag-color-hover: #85dacc;
  --text-accent: #85dacc;
  --text-accent-hover: #85dacc;
  --text-error: #fd6883;
  --text-error-hover: #fd6883;
  --text-faint: #5b5353;
  --text-highlight-bg: #f9cc6c;
  --text-highlight-bg-active: #f38d70;
  --text-muted: #72696a;
  --text-normal: #e6d9db;
  --text-on-accent: #2c2525;
  --text-selection: rgba(64, 56, 56, 0.5);
  --titlebar-background: #2c2525;
  --titlebar-background-focused: #211c1c;
  --titlebar-border-color: #403838;
  --titlebar-text-color: #72696a;
  --titlebar-text-color-focused: #e6d9db;
  --vault-profile-color: #e6d9db;
  --vault-profile-color-hover: #e6d9db;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(64, 56, 56);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(44, 37, 37);
  border-left-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
}

body div#quartz-root {
  background-color: rgb(44, 37, 37);
  color: rgb(230, 217, 219);
}`,
    typography: `body .page article p > b, b {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body .page article p > em, em {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body .page article p > i, i {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body .page article p > strong, strong {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body .text-highlight {
  background-color: rgb(249, 204, 108);
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body del {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: line-through rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body p {
  color: rgb(114, 105, 106);
  outline: rgb(114, 105, 106) none 0px;
  text-decoration: rgb(114, 105, 106);
  text-decoration-color: rgb(114, 105, 106);
}`,
    links: `body a.external, footer a {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
  text-decoration: underline rgb(133, 218, 204);
  text-decoration-color: rgb(133, 218, 204);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
  text-decoration: underline rgb(133, 218, 204);
  text-decoration-color: rgb(133, 218, 204);
}

body a.internal.broken {
  color: rgb(133, 218, 204);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(133, 218, 204) none 0px;
}`,
    lists: `body dd {
  color: rgb(230, 217, 219);
}

body dt {
  color: rgb(230, 217, 219);
}

body ol > li {
  color: rgb(230, 217, 219);
}

body ol.overflow {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body ul > li {
  color: rgb(230, 217, 219);
}

body ul.overflow {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(133, 218, 204);
  text-decoration: rgb(133, 218, 204);
}

body blockquote {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body table {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 195.062px;
}

body td {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
}

body th {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
  font-weight: 700;
}

body thead {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}

body tr {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}`,
    code: `body code {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(230, 217, 219);
}

body pre > code, pre:has(> code) {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}

body pre:has(> code) {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
}`,
    images: `body audio {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body figcaption {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body img {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body video {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    embeds: `body .file-embed {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
}

body .footnotes {
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}

body .transclude {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(133, 218, 204);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body .transclude-inner {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(133, 218, 204);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(114, 105, 106);
  text-decoration: line-through rgb(114, 105, 106);
  text-decoration-color: rgb(114, 105, 106);
}

body input[type=checkbox] {
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
}

body li.task-list-item[data-task='!'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='*'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='-'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='/'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='>'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='?'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='I'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='S'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='b'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='c'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='d'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='f'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='i'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='k'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='l'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='p'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='u'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body li.task-list-item[data-task='w'] {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}`,
    search: `body .search > .search-button {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
  color: rgb(230, 217, 219);
}

body .search > .search-container > .search-space {
  background-color: rgb(44, 37, 37);
}

body .search > .search-container > .search-space > * {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(230, 217, 219) none 0px;
  text-decoration: rgb(230, 217, 219);
  text-decoration-color: rgb(230, 217, 219);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(44, 37, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(44, 37, 37);
  border-left-color: rgb(44, 37, 37);
  border-right-color: rgb(44, 37, 37);
  border-top-color: rgb(44, 37, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(44, 37, 37);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(64, 56, 56);
  color: rgb(44, 37, 37);
}

body .search > .search-container > .search-space > input {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(44, 37, 37);
  border-left-color: rgb(44, 37, 37);
  border-right-color: rgb(44, 37, 37);
  border-top-color: rgb(44, 37, 37);
  color: rgb(44, 37, 37);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(64, 56, 56);
  color: rgb(44, 37, 37);
}

body a.internal.tag-link::before {
  color: rgb(133, 218, 204);
}

body h1 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(230, 217, 219);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(253, 104, 131);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

body ::-webkit-scrollbar-corner {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}

body ::-webkit-scrollbar-track {
  background: rgb(44, 37, 37) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(44, 37, 37);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
}

body .explorer .explorer-content ul.explorer-ul li a {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
}`,
    footer: `body footer {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(114, 105, 106);
}

body footer ul li a {
  color: rgb(114, 105, 106);
  text-decoration: rgb(114, 105, 106);
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(230, 217, 219);
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}

body .recent-notes > ul.recent-ul > li .section > .desc > h3 > a {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  color: rgb(230, 217, 219);
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body li.section-li > .section .meta {
  color: rgb(230, 217, 219);
}

body li.section-li > .section > .desc > h3 > a {
  color: rgb(230, 217, 219);
  text-decoration: rgb(230, 217, 219);
}

body ul.section-ul {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
}

body .darkmode svg {
  color: rgb(114, 105, 106);
  stroke: rgb(114, 105, 106);
}`,
    breadcrumbs: `body .breadcrumb-container {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
}

body .breadcrumb-element p {
  color: rgb(91, 83, 83);
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
}

body .metadata {
  border-bottom-color: rgb(64, 56, 56);
  border-left-color: rgb(64, 56, 56);
  border-right-color: rgb(64, 56, 56);
  border-top-color: rgb(64, 56, 56);
  color: rgb(114, 105, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  border-bottom-color: rgb(114, 105, 106);
  border-left-color: rgb(114, 105, 106);
  border-right-color: rgb(114, 105, 106);
  border-top-color: rgb(114, 105, 106);
  color: rgb(114, 105, 106);
  font-family: "??", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(44, 37, 37);
}

body .page-header h2.page-title {
  color: rgb(230, 217, 219);
}

body abbr {
  color: rgb(230, 217, 219);
  text-decoration: underline dotted rgb(230, 217, 219);
}

body details {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body input[type=text] {
  background-color: rgb(64, 56, 56);
  border-bottom-color: rgb(91, 83, 83);
  border-left-color: rgb(91, 83, 83);
  border-right-color: rgb(91, 83, 83);
  border-top-color: rgb(91, 83, 83);
  color: rgb(230, 217, 219);
}

body kbd {
  background-color: rgb(44, 37, 37);
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
  color: rgb(230, 217, 219);
  font-family: "??", "JetBrains Mono", Menlo, Monaco, Consolas, "Courier New", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(230, 217, 219);
  border-left-color: rgb(230, 217, 219);
  border-right-color: rgb(230, 217, 219);
  border-top-color: rgb(230, 217, 219);
}

body sub {
  color: rgb(230, 217, 219);
}

body summary {
  color: rgb(230, 217, 219);
}

body sup {
  color: rgb(230, 217, 219);
}`,
  },
  light: {},
};
