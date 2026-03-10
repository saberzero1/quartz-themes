import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "consolas",
    modes: ["dark"],
    variations: [],
    fonts: ["inconsolata"],
  },
  dark: {
    base: `:root:root {
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1);
  --background-modifier-hover: rgb(138, 92, 245);
  --background-ui-current: rgb(138, 92, 245);
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245);
  --bases-table-header-background-hover: rgb(138, 92, 245);
  --bases-table-header-weight: 450;
  --bases-table-summary-background-hover: rgb(138, 92, 245);
  --blockquote-border-color: rgb(138, 92, 245);
  --bodyFont: var(--font-text);
  --bold-weight: 650;
  --callout-title-weight: 650;
  --checkbox-border-color-hover: rgb(255, 255, 0);
  --checkbox-color: rgb(138, 92, 245);
  --checkbox-color-hover: rgb(166, 139, 249);
  --checkbox-marker-color: rgb(255, 204, 0);
  --code-background: rgb(54, 47, 70);
  --code-bracket-background: rgb(138, 92, 245);
  --codeFont: var(--font-monospace);
  --collapse-icon-color-collapsed: rgb(166, 139, 249);
  --color-accent: rgb(138, 92, 245);
  --color-accent-1: rgb(166, 139, 249);
  --color-accent-2: rgb(197, 182, 252);
  --color-alt-1: rgb(255, 255, 0);
  --color-alt-2: rgb(255, 230, 0);
  --color-alt-3: rgb(255, 204, 0);
  --color-alt-4: rgb(255, 179, 0);
  --color-alt-5: rgb(255, 153, 0);
  --color-alt-6: rgb(255, 128, 0);
  --color-cm-checkbox: rgb(0, 255, 255);
  --color-cm-list: rgb(51, 153, 255);
  --color-cm-table: rgb(102, 204, 102);
  --color-default: rgb(138, 92, 245);
  --color-ui-active: rgb(255, 204, 0);
  --color-ui-current: rgb(255, 255, 0);
  --date-background-color: transparent;
  --divider-color-hover: rgb(138, 92, 245);
  --embed-border-start: 2px solid rgb(138, 92, 245);
  --font-mermaid: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-size: 15px;
  --font-monospace-theme: "Fira Code";
  --font-print: '??', '??', "Ligconsolata", 'Arial';
  --font-stretch-theme: semi-expanded;
  --font-text: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Ligconsolata";
  --font-weight: 450;
  --footnote-input-background-active: rgb(138, 92, 245);
  --graph-node-focused: rgb(166, 139, 249);
  --h1: 1.6em;
  --h2: 1.3em;
  --h3: 1.2em;
  --h4: 1.1em;
  --h5: 1.05em;
  --h6: 1em;
  --headerFont: var(--font-text);
  --heading-spacing: 2.5rem;
  --highlight: var(--background-modifier-hover);
  --icon-color: rgb(138, 92, 245);
  --icon-color-active: rgb(166, 139, 249);
  --icon-color-focused: rgb(255, 204, 0);
  --icon-color-hover: rgb(255, 255, 0);
  --inline-title-color: rgb(138, 92, 245);
  --interactive-accent: rgb(138, 92, 245);
  --interactive-accent-hover: rgb(166, 139, 249);
  --link-color: rgb(166, 139, 249);
  --link-color-hover: rgb(197, 182, 252);
  --link-external-color: rgb(166, 139, 249);
  --link-external-color-hover: rgb(197, 182, 252);
  --link-unresolved-color: rgb(166, 139, 249);
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3);
  --link-weight: 450;
  --list-indent: 2.25em;
  --list-marker-color: rgb(138, 92, 245);
  --list-marker-color-collapsed: rgb(166, 139, 249);
  --metadata-input-background-active: rgb(138, 92, 245);
  --metadata-input-height: 28px;
  --metadata-label-background-active: rgb(138, 92, 245);
  --metadata-property-background-active: rgb(138, 92, 245);
  --nav-item-background-active: rgb(138, 92, 245);
  --nav-item-background-hover: rgb(138, 92, 245);
  --nav-item-background-selected: rgba(138, 92, 245, 0.15);
  --nav-item-color-active: rgb(255, 204, 0);
  --nav-item-color-highlighted: rgb(166, 139, 249);
  --nav-item-color-hover: rgb(255, 255, 0);
  --pill-color-remove-hover: rgb(166, 139, 249);
  --ribbon-background: rgb(255, 204, 0);
  --secondary: var(--text-accent);
  --sidebar-markdown-font-size: 14.4px;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245);
  --tab-text-color-focused-active: rgb(255, 204, 0);
  --tab-text-color-focused-active-current: rgb(255, 255, 0);
  --tab-text-color-focused-highlighted: rgb(166, 139, 249);
  --table-drag-handle-background-active: rgb(138, 92, 245);
  --table-header-weight: 650;
  --table-selection: rgba(138, 92, 245, 0.1);
  --table-selection-border-color: rgb(138, 92, 245);
  --tag-background: rgba(138, 92, 245, 0.1);
  --tag-background-hover: rgba(138, 92, 245, 0.2);
  --tag-border-color: rgba(138, 92, 245, 0.15);
  --tag-border-color-hover: rgba(138, 92, 245, 0.15);
  --tag-color: rgb(166, 139, 249);
  --tag-color-hover: rgb(166, 139, 249);
  --tertiary: var(--text-accent-hover);
  --text-accent: rgb(166, 139, 249);
  --text-accent-hover: rgb(197, 182, 252);
  --text-selection: rgba(138, 92, 245, 0.33);
  --textHighlight: var(--background-modifier-hover);
  --titleFont: var(--font-text);
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>");
  --quartz-icon-color: currentColor;
}`,
    typography: `body .page article p > b, b {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
}

body .page article p > em, em {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body .page article p > i, i {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body .page article p > strong, strong {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
}

body .text-highlight {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body del {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}`,
    links: `body a.external, footer a {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

body a.internal.broken {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}`,
    blockquotes: `body blockquote {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `body table {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 199.031px;
}

body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  padding-left: 10px;
  padding-right: 10px;
}

body th {
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
  font-weight: 650;
  padding-left: 10px;
  padding-right: 10px;
}

body thead {
  border-bottom-color: rgb(255, 204, 0);
  border-bottom-style: solid;
  border-left-color: rgb(255, 204, 0);
  border-left-style: solid;
  border-left-width: 3px;
  border-right-color: rgb(255, 204, 0);
  border-right-style: solid;
  border-right-width: 3px;
  border-top-color: rgb(255, 204, 0);
  border-top-style: solid;
  border-top-width: 3px;
}

body tr {
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
}`,
    code: `body code {
  font-family: "??", "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 47, 70);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 47, 70);
}

body pre > code, pre:has(> code) {
  background-color: rgb(54, 47, 70);
}

body pre:has(> code) {
  background-color: rgb(54, 47, 70);
}`,
    images: `body figcaption {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `body .callout .callout-title > .callout-title-inner > p {
  font-weight: 650;
}`,
    search: `body .search > .search-container > .search-space > * {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(138, 92, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  background-color: rgb(138, 92, 245);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  background-color: rgb(138, 92, 245);
}

body h1 {
  color: rgb(255, 255, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(255, 230, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(138, 92, 245);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(255, 204, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(255, 178, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(255, 153, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(255, 128, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    explorer: `body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
  color: rgb(255, 204, 0);
}`,
    graph: `body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    darkmode: `body .darkmode {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    misc: `body .metadata {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page-header h2.page-title {
  color: rgb(138, 92, 245);
}

body kbd {
  background-color: rgb(54, 47, 70);
  font-family: "??", "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {},
};
