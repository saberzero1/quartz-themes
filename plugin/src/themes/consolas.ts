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
  --background-modifier-active-hover: rgba(138, 92, 245, 0.1) !important;
  --background-modifier-hover: rgb(138, 92, 245) !important;
  --background-ui-current: rgb(138, 92, 245) !important;
  --bases-table-cell-background-selected: rgba(138, 92, 245, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(138, 92, 245) !important;
  --bases-table-header-background-hover: rgb(138, 92, 245) !important;
  --bases-table-header-weight: 450 !important;
  --bases-table-summary-background-hover: rgb(138, 92, 245) !important;
  --blockquote-border-color: rgb(138, 92, 245) !important;
  --bodyFont: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --bold-weight: 650 !important;
  --callout-title-weight: 650;
  --checkbox-border-color-hover: rgb(255, 255, 0) !important;
  --checkbox-color: rgb(138, 92, 245) !important;
  --checkbox-color-hover: rgb(166, 139, 249) !important;
  --checkbox-marker-color: rgb(255, 204, 0) !important;
  --code-background: rgb(54, 47, 70) !important;
  --code-bracket-background: rgb(138, 92, 245) !important;
  --codeFont: '??', "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color-collapsed: rgb(166, 139, 249) !important;
  --color-accent: rgb(138, 92, 245) !important;
  --color-accent-1: rgb(166, 139, 249) !important;
  --color-accent-2: rgb(197, 182, 252) !important;
  --color-alt-1: rgb(255, 255, 0) !important;
  --color-alt-2: rgb(255, 230, 0) !important;
  --color-alt-3: rgb(255, 204, 0) !important;
  --color-alt-4: rgb(255, 179, 0) !important;
  --color-alt-5: rgb(255, 153, 0) !important;
  --color-alt-6: rgb(255, 128, 0) !important;
  --color-cm-checkbox: rgb(0, 255, 255) !important;
  --color-cm-list: rgb(51, 153, 255) !important;
  --color-cm-table: rgb(102, 204, 102) !important;
  --color-default: rgb(138, 92, 245) !important;
  --color-ui-active: rgb(255, 204, 0) !important;
  --color-ui-current: rgb(255, 255, 0) !important;
  --date-background-color: transparent !important;
  --divider-color-hover: rgb(138, 92, 245) !important;
  --embed-border-start: 2px solid rgb(138, 92, 245) !important;
  --font-mermaid: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: '??', "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-size: 15px !important;
  --font-monospace-theme: "Fira Code" !important;
  --font-print: '??', '??', "Ligconsolata", 'Arial' !important;
  --font-stretch-theme: semi-expanded !important;
  --font-text: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Ligconsolata" !important;
  --font-weight: 450 !important;
  --footnote-input-background-active: rgb(138, 92, 245) !important;
  --graph-node-focused: rgb(166, 139, 249) !important;
  --h1: 1.6em !important;
  --h2: 1.3em !important;
  --h3: 1.2em !important;
  --h4: 1.1em !important;
  --h5: 1.05em !important;
  --h6: 1em !important;
  --headerFont: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-spacing: 2.5rem !important;
  --highlight: rgb(138, 92, 245) !important;
  --icon-color: rgb(138, 92, 245) !important;
  --icon-color-active: rgb(166, 139, 249) !important;
  --icon-color-focused: rgb(255, 204, 0) !important;
  --icon-color-hover: rgb(255, 255, 0) !important;
  --inline-title-color: rgb(138, 92, 245) !important;
  --interactive-accent: rgb(138, 92, 245) !important;
  --interactive-accent-hover: rgb(166, 139, 249) !important;
  --link-color: rgb(166, 139, 249) !important;
  --link-color-hover: rgb(197, 182, 252) !important;
  --link-external-color: rgb(166, 139, 249) !important;
  --link-external-color-hover: rgb(197, 182, 252) !important;
  --link-unresolved-color: rgb(166, 139, 249) !important;
  --link-unresolved-decoration-color: rgba(138, 92, 245, 0.3) !important;
  --link-weight: 450 !important;
  --list-indent: 2.25em !important;
  --list-marker-color: rgb(138, 92, 245) !important;
  --list-marker-color-collapsed: rgb(166, 139, 249) !important;
  --metadata-input-background-active: rgb(138, 92, 245) !important;
  --metadata-input-height: 28px !important;
  --metadata-label-background-active: rgb(138, 92, 245) !important;
  --metadata-property-background-active: rgb(138, 92, 245) !important;
  --nav-item-background-active: rgb(138, 92, 245) !important;
  --nav-item-background-hover: rgb(138, 92, 245) !important;
  --nav-item-background-selected: rgba(138, 92, 245, 0.15) !important;
  --nav-item-color-active: rgb(255, 204, 0) !important;
  --nav-item-color-highlighted: rgb(166, 139, 249) !important;
  --nav-item-color-hover: rgb(255, 255, 0) !important;
  --pill-color-remove-hover: rgb(166, 139, 249) !important;
  --ribbon-background: rgb(255, 204, 0) !important;
  --secondary: rgb(166, 139, 249) !important;
  --sidebar-markdown-font-size: 14.4px !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(138, 92, 245) !important;
  --tab-text-color-focused-active: rgb(255, 204, 0) !important;
  --tab-text-color-focused-active-current: rgb(255, 255, 0) !important;
  --tab-text-color-focused-highlighted: rgb(166, 139, 249) !important;
  --table-drag-handle-background-active: rgb(138, 92, 245) !important;
  --table-header-weight: 650 !important;
  --table-selection: rgba(138, 92, 245, 0.1) !important;
  --table-selection-border-color: rgb(138, 92, 245) !important;
  --tag-background: rgba(138, 92, 245, 0.1) !important;
  --tag-background-hover: rgba(138, 92, 245, 0.2) !important;
  --tag-border-color: rgba(138, 92, 245, 0.15) !important;
  --tag-border-color-hover: rgba(138, 92, 245, 0.15) !important;
  --tag-color: rgb(166, 139, 249) !important;
  --tag-color-hover: rgb(166, 139, 249) !important;
  --tertiary: rgb(197, 182, 252) !important;
  --text-accent: rgb(166, 139, 249) !important;
  --text-accent-hover: rgb(197, 182, 252) !important;
  --text-selection: rgba(138, 92, 245, 0.33) !important;
  --textHighlight: rgb(138, 92, 245) !important;
  --titleFont: '??', "Ligconsolata", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --xfa-unfocused-field-background: url("data:image/svg+xmlcharset=UTF-8,<svg width='1px' height='1px' xmlns='http://www.w3.org/2000/svg'><rect width='100%' height='100%' style='fill:rgba(0, 54, 255, 0.13)'/></svg>") !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}`,
    typography: `html body .page article p > b, html b {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
}

html body .page article p > em, html em {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html body .page article p > i, html i {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html body .page article p > strong, html strong {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 650;
}

html body .text-highlight {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html body del {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}`,
    links: `html body a.external, html footer a {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}

html body a.internal.broken {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-weight: 450;
}`,
    blockquotes: `html body blockquote {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    tables: `html body table {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 199.031px;
}

html body td {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  padding-left: 10px;
  padding-right: 10px;
}

html body th {
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
  font-weight: 650;
  padding-left: 10px;
  padding-right: 10px;
}

html body thead {
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

html body tr {
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
}`,
    code: `html body code {
  font-family: "??", "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(54, 47, 70);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(54, 47, 70);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(54, 47, 70);
}

html body pre:has(> code) {
  background-color: rgb(54, 47, 70);
}`,
    images: `html body figcaption {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body li.task-list-item[data-task='-'] {
  color: rgb(102, 102, 102);
  text-decoration: line-through 1px rgb(102, 102, 102);
  text-decoration-color: rgb(102, 102, 102);
}`,
    callouts: `html body .callout .callout-title > .callout-title-inner > p {
  font-weight: 650;
}`,
    search: `html body .search > .search-container > .search-space > * {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(138, 92, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  background-color: rgb(138, 92, 245);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  background-color: rgb(138, 92, 245);
}

html body h1 {
  color: rgb(255, 255, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(255, 230, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(138, 92, 245);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(255, 204, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(255, 178, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(255, 153, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(255, 128, 0);
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    explorer: `html body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  background-color: rgb(138, 92, 245);
  border-bottom-color: rgb(255, 204, 0);
  border-left-color: rgb(255, 204, 0);
  border-right-color: rgb(255, 204, 0);
  border-top-color: rgb(255, 204, 0);
  color: rgb(255, 204, 0);
}`,
    graph: `html body .graph > .graph-outer > .global-graph-icon {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}`,
    darkmode: `html body .darkmode {
  border-bottom-color: rgb(138, 92, 245);
  border-left-color: rgb(138, 92, 245);
  border-right-color: rgb(138, 92, 245);
  border-top-color: rgb(138, 92, 245);
  color: rgb(138, 92, 245);
}

html body .darkmode svg {
  color: rgb(138, 92, 245);
  stroke: rgb(138, 92, 245);
}`,
    misc: `html body .metadata {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", Ligconsolata, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page-header h2.page-title {
  color: rgb(138, 92, 245);
}

html body kbd {
  background-color: rgb(54, 47, 70);
  font-family: "??", "Fira Code", ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}`,
  },
  light: {},
};
