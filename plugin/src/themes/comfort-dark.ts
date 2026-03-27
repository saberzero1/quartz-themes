import type { ThemeData } from "../types.js";

export const theme: ThemeData = {
  meta: {
    name: "comfort-dark",
    modes: ["dark"],
    variations: [],
    fonts: ["iosevka-web", "jetbrains-mono"],
  },
  dark: {
    base: `:root:root {
  --accent-h: 40 !important;
  --accent-l: 50% !important;
  --accent-s: 50% !important;
  --background-modifier-active-hover: hsla(40, 50%, 50%, 0.1) !important;
  --background-primary: #222222 !important;
  --background-primary-alt: #262626 !important;
  --background-secondary: #222222 !important;
  --background-secondary-alt: #262626 !important;
  --base-h: 212 !important;
  --base-l: 15% !important;
  --base-s: 15% !important;
  --bases-cards-background: #222222 !important;
  --bases-cards-cover-background: #262626 !important;
  --bases-table-cell-background-active: #222222 !important;
  --bases-table-cell-background-disabled: #262626 !important;
  --bases-table-cell-background-selected: hsla(40, 50%, 50%, 0.1) !important;
  --bases-table-cell-shadow-focus: 0 0 0 2px hsl(40, 50%, 50%) !important;
  --bases-table-group-background: #262626 !important;
  --bases-table-header-background: #222222 !important;
  --bases-table-summary-background: #222222 !important;
  --blockquote-border-color: hsl(40, 50%, 50%) !important;
  --bodyFont: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --canvas-background: #222222 !important;
  --canvas-card-label-color: #a09b80 !important;
  --caret-color: #bbc0c5 !important;
  --checkbox-border-color: hsl(40, 50%, 50%) !important;
  --checkbox-color: hsl(40, 50%, 50%) !important;
  --checkbox-color-hover: hsl(37, 51%, 57.5%) !important;
  --checkbox-marker-color: #222222 !important;
  --checkbox-radius: 50% !important;
  --code-background: #383838 !important;
  --code-bracket: #ffd700 !important;
  --code-class: #4ec9b0 !important;
  --code-comment: #6a9955 !important;
  --code-define: #569cd6 !important;
  --code-function: #dcdcaa !important;
  --code-keyword: #c586c0 !important;
  --code-normal: #bbc0c5 !important;
  --code-number: #b5cea8 !important;
  --code-oper: #d4d4d4 !important;
  --code-operator: #d4d4d4 !important;
  --code-package: #3f9486 !important;
  --code-property: #9cdcfe !important;
  --code-punctuation: #d4d4d4 !important;
  --code-string: #ce9178 !important;
  --code-tag: #b5cea8 !important;
  --code-value: #b5cea8 !important;
  --code-variable: #8cdcfe !important;
  --codeFont: "Iosevka", JetBrains Mono, Fira Code, Menlo, SFMono-Regular, Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --collapse-icon-color: #a09b80 !important;
  --collapse-icon-color-collapsed: #59a2c5 !important;
  --color-accent: hsl(40, 50%, 50%) !important;
  --color-accent-1: hsl(37, 51%, 57.5%) !important;
  --color-accent-2: hsl(35, 52.5%, 64.5%) !important;
  --color-accent-hsl: 40, 50%, 50% !important;
  --color-prime: hsl(40, 50%, 50%) !important;
  --dark: #bbc0c5 !important;
  --darkgray: #bbc0c5 !important;
  --divider-color: #262626 !important;
  --divider-color-hover: hsl(40, 50%, 50%) !important;
  --dot-graph: #bbc0c5 !important;
  --em-color: #db711a !important;
  --embed-border-start: 2px solid hsl(40, 50%, 50%) !important;
  --file-header-background: #222222 !important;
  --file-header-background-focused: #222222 !important;
  --file-header-font: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --flair-color: #bbc0c5 !important;
  --folding-offset: 10px !important;
  --font-interface: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-interface-theme: "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif !important;
  --font-mermaid: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-monospace: "Iosevka", JetBrains Mono, Fira Code, Menlo, SFMono-Regular, Consolas, Roboto Mono, monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace !important;
  --font-monospace-theme: "Iosevka", 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular, Consolas, 'Roboto Mono', monospace !important;
  --font-print: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, Arial' !important;
  --font-text: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --font-text-theme: "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif !important;
  --footnote-id-color-no-occurrences: #a09b80 !important;
  --graph-node-focused: #59a2c5 !important;
  --graph-node-unresolved: #a09b80 !important;
  --graph-text: #bbc0c5 !important;
  --gray: #a09b80 !important;
  --h1-color: #939bd6 !important;
  --h1-size: 2rem !important;
  --h2-color: #ba7390 !important;
  --h2-size: 1.8rem !important;
  --h3-color: #b78b60 !important;
  --h3-size: 1.6rem !important;
  --h4-color: #a79645 !important;
  --h4-size: 1.5rem !important;
  --h5-color: #859676 !important;
  --h5-size: 1.4rem !important;
  --h6-color: #799097 !important;
  --h6-size: 1.3rem !important;
  --headerFont: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --heading-formatting: #a09b80 !important;
  --highlight: hsla(40, 50%, 50%, 0.1) !important;
  --icon-color-active: #59a2c5 !important;
  --icon-color-focused: #bbc0c5 !important;
  --icon-muted: 0.5 !important;
  --inline-title-color: #939bd6 !important;
  --inline-title-size: 2rem !important;
  --input-date-separator: #a09b80 !important;
  --input-placeholder-color: #a09b80 !important;
  --interactive-accent: hsl(40, 50%, 50%) !important;
  --interactive-accent-hover: hsl(37, 51%, 57.5%) !important;
  --interactive-accent-hsl: 40, 50%, 50% !important;
  --light: #222222 !important;
  --lightgray: #222222 !important;
  --line-height: 1.5 !important;
  --line-width: 40rem !important;
  --line-width-adaptive: 40rem !important;
  --line-width-wide: calc(40rem + 12.5%) !important;
  --link-color: #59a2c5 !important;
  --link-color-hover: #b3a14b !important;
  --link-decoration: auto !important;
  --link-external-color: #59a2c5 !important;
  --link-external-color-hover: #b3a14b !important;
  --link-external-decoration: auto !important;
  --link-unresolved-color: #59a2c5 !important;
  --link-unresolved-decoration-color: hsla(40, 50%, 50%, 0.3) !important;
  --list-marker-color: #a09b80 !important;
  --list-marker-color-collapsed: #59a2c5 !important;
  --max-col-width: 18em !important;
  --max-width: 90% !important;
  --menu-background: #222222 !important;
  --metadata-input-font: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --metadata-input-text-color: #bbc0c5 !important;
  --metadata-label-font: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --modal-background: #222222 !important;
  --nav-collapse-icon-color: #a09b80 !important;
  --nav-collapse-icon-color-collapsed: #a09b80 !important;
  --nav-heading-color: #bbc0c5 !important;
  --nav-heading-color-collapsed: #a09b80 !important;
  --nav-heading-color-hover: #bbc0c5 !important;
  --nav-item-background-selected: hsla(40, 50%, 50%, 0.15) !important;
  --nav-item-color-active: #bbc0c5 !important;
  --nav-item-color-highlighted: #59a2c5 !important;
  --nav-item-color-hover: #bbc0c5 !important;
  --nav-item-color-selected: #bbc0c5 !important;
  --nav-tag-color: #a09b80 !important;
  --nested-padding: 1.1em !important;
  --pdf-background: #222222 !important;
  --pdf-page-background: #222222 !important;
  --pdf-sidebar-background: #222222 !important;
  --pill-color-hover: #bbc0c5 !important;
  --pill-color-remove: #a09b80 !important;
  --pill-color-remove-hover: #59a2c5 !important;
  --prompt-background: #222222 !important;
  --quote-color: #db711a !important;
  --ribbon-background: #222222 !important;
  --ribbon-background-collapsed: #222222 !important;
  --search-result-background: #222222 !important;
  --secondary: #59a2c5 !important;
  --setting-group-heading-color: #bbc0c5 !important;
  --setting-items-background: #262626 !important;
  --status-bar-background: #222222 !important;
  --status-bar-border-color: #262626 !important;
  --strong-color: #db711a !important;
  --suggestion-background: #222222 !important;
  --tab-background-active: #222222 !important;
  --tab-container-background: #222222 !important;
  --tab-outline-color: #262626 !important;
  --tab-switcher-background: #222222 !important;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent) !important;
  --tab-switcher-preview-shadow-active: 0 0 0 2px hsl(40, 50%, 50%) !important;
  --tab-text-color: #a09b80 !important;
  --tab-text-color-focused-active-current: #bbc0c5 !important;
  --tab-text-color-focused-highlighted: #59a2c5 !important;
  --table-drag-handle-background-active: hsl(40, 50%, 50%) !important;
  --table-drag-handle-color: #a09b80 !important;
  --table-header-color: #bbc0c5 !important;
  --table-selection: hsla(40, 50%, 50%, 0.1) !important;
  --table-selection-border-color: hsl(40, 50%, 50%) !important;
  --tag-background: #123b2b !important;
  --tag-background-color: #123b2b !important;
  --tag-background-color-hover: #194a37 !important;
  --tag-background-hover: #194a37 !important;
  --tag-border-color: hsla(40, 50%, 50%, 0.15) !important;
  --tag-border-color-hover: hsla(40, 50%, 50%, 0.15) !important;
  --tag-color: #bbc0c5 !important;
  --tag-color-hover: #bbc0c5 !important;
  --tag-font-color: #bbc0c5 !important;
  --tertiary: #b3a14b !important;
  --text-accent: #59a2c5 !important;
  --text-accent-hover: #b3a14b !important;
  --text-faint: #a09b80 !important;
  --text-graph: #dde0e5 !important;
  --text-highlight: #db711a !important;
  --text-highlight-background: rgba(255, 208, 0, 0.4) !important;
  --text-link: #59a2c5 !important;
  --text-normal: #bbc0c5 !important;
  --text-selection: hsla(40, 50%, 50%, 0.33) !important;
  --text-title-h1: #939bd6 !important;
  --text-title-h2: #ba7390 !important;
  --text-title-h3: #b78b60 !important;
  --text-title-h4: #a79645 !important;
  --text-title-h5: #859676 !important;
  --text-title-h6: #799097 !important;
  --textHighlight: hsla(40, 50%, 50%, 0.1) !important;
  --titleFont: "Iosevka", Segoe UI, -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif !important;
  --titlebar-background: #222222 !important;
  --titlebar-background-focused: #262626 !important;
  --titlebar-text-color-focused: #bbc0c5 !important;
  --vault-profile-color: #bbc0c5 !important;
  --vault-profile-color-hover: #bbc0c5 !important;
  --quartz-icon-color: currentColor !important;
}

html body {
  background-color: var(--background-primary) !important;
  color: var(--text-normal) !important;
}

html body[data-slug] div#quartz-root.page, html .page > div#quartz-body div.sidebar.left, html .page > div#quartz-body div.sidebar.left:has(.explorer), html .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}

html body[data-slug], html body[data-slug] .page > div#quartz-body, html .page > div#quartz-body div.center, html .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}

html body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}

html body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

html body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  border-left-color: rgb(38, 38, 38);
  color: rgb(187, 192, 197);
}

html body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}`,
    typography: `html body .page article p > b, html b {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

html body .page article p > em, html em {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

html body .page article p > i, html i {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

html body .page article p > strong, html strong {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

html body .text-highlight {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body del {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: line-through rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body p {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `html body a.external, html footer a {
  color: rgb(89, 162, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

html body a.internal, html .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

html body a.internal.broken {
  color: rgb(89, 162, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgba(191, 149, 64, 0.3);
  text-decoration-color: rgba(191, 149, 64, 0.3);
}`,
    lists: `html body dd {
  color: rgb(187, 192, 197);
}

html body dt {
  color: rgb(187, 192, 197);
}

html body ol > li {
  color: rgb(187, 192, 197);
}

html body ol.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body ul > li {
  color: rgb(187, 192, 197);
}

html body ul.overflow {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `html body .data-footnote-backref {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
}

html body blockquote {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `html body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body table {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 187.031px;
}

html body td {
  color: rgb(187, 192, 197);
}

html body th {
  color: rgb(187, 192, 197);
}`,
    code: `html body code {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 56, 56);
}

html body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 56, 56);
  color: rgb(187, 192, 197);
}

html body pre > code > [data-line] {
  border-left-color: rgb(220, 220, 170);
}

html body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 220, 170);
}

html body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 220, 170);
  border-left-color: rgb(220, 220, 170);
  border-right-color: rgb(220, 220, 170);
  border-top-color: rgb(220, 220, 170);
}

html body pre > code, html pre:has(> code) {
  background-color: rgb(56, 56, 56);
}

html body pre:has(> code) {
  background-color: rgb(56, 56, 56);
}`,
    images: `html body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body figcaption {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body img {
  border-bottom-color: rgb(187, 192, 197);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(187, 192, 197);
  border-radius: 10px;
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px 0px, rgba(0, 0, 0, 0.24) 0px 1px 2px 0px;
}

html body video {
  border-bottom-color: rgb(187, 192, 197);
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-left-color: rgb(187, 192, 197);
  border-radius: 10px;
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}`,
    embeds: `html body .file-embed {
  background-color: rgb(38, 38, 38);
}

html body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(191, 149, 64);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(191, 149, 64);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    checkboxes: `html body .katex-display > .katex {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .katex-display > .katex > .katex-html {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(160, 155, 128);
  text-decoration: line-through rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body input[type=checkbox] {
  border-bottom-color: rgb(191, 149, 64);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(191, 149, 64);
  border-right-color: rgb(191, 149, 64);
  border-top-color: rgb(191, 149, 64);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

html body li.task-list-item[data-task='!'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='*'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='-'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='/'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='>'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='?'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='I'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='S'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='b'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='c'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='d'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='f'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='i'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='k'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='l'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='p'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='u'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task='w'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

html body li.task-list-item[data-task="_"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="-"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=","] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=";"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=":"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="!"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="?"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="."] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="'"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=""] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="@"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="*"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="/"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="&"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="#"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="%"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="\`"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="+"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="<"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="="] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task=">"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="|"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="~"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="$"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="0"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="1"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="2"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="3"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="4"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="5"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="6"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="7"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="8"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="9"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="a"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="A"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="b"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="B"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="c"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="C"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="d"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="D"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="e"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="E"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="f"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="F"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="g"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="G"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="h"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="H"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="i"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="I"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="j"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="J"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="k"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="K"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="l"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="L"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="m"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="M"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="n"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="N"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="o"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="O"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="p"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="P"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="q"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="Q"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="r"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="R"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="s"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="S"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="t"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="T"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="u"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="U"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="v"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="V"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="w"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="W"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="x"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="X"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="y"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="Y"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="z"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}

html body li.task-list-item[data-task="Z"] input[type="checkbox"]::after {
  background-color: rgb(34, 34, 34);
}`,
    search: `html body .search > .search-button {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
}

html body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-title, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, html .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

html body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)), html ~ .result-card:focus, html ~ .result-card:hover) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, html .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, html .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, html ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

html body a.internal.tag-link, html .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(18, 59, 43);
  border-bottom-color: rgba(191, 149, 64, 0.15);
  border-left-color: rgba(191, 149, 64, 0.15);
  border-right-color: rgba(191, 149, 64, 0.15);
  border-top-color: rgba(191, 149, 64, 0.15);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body a.internal.tag-link::before {
  color: rgb(187, 192, 197);
}

html body h1 {
  color: rgb(147, 155, 214);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2 {
  color: rgb(186, 115, 144);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h2.page-title, html h2.page-title a {
  color: rgb(147, 155, 214);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h3 {
  color: rgb(183, 139, 96);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h4 {
  color: rgb(167, 150, 69);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h5 {
  color: rgb(133, 150, 118);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body h6 {
  color: rgb(121, 144, 151);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `html body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

html body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `html body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    footer: `html body footer {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `html body .recent-notes > h3 {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `html body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body li.section-li > .section .meta {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `html body .breadcrumb-element p {
  color: rgb(160, 155, 128);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `html body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

html body .metadata {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .metadata-properties {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

html body .page-header h2.page-title {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body abbr {
  color: rgb(187, 192, 197);
  text-decoration: underline dotted rgb(187, 192, 197);
}

html body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body input[type=text] {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

html body kbd {
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

html body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

html body sub {
  color: rgb(187, 192, 197);
}

html body summary {
  color: rgb(187, 192, 197);
}

html body sup {
  color: rgb(187, 192, 197);
}`,
  },
  light: {},
};
