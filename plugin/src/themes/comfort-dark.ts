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
  --accent-h: 40;
  --accent-l: 50%;
  --accent-s: 50%;
  --background-modifier-active-hover: rgba(191, 149, 64, 0.1);
  --background-primary: #222222;
  --background-primary-alt: #262626;
  --background-secondary: #222222;
  --background-secondary-alt: #262626;
  --base-h: 212;
  --base-l: 15%;
  --base-s: 15%;
  --bases-cards-background: #222222;
  --bases-cards-cover-background: #262626;
  --bases-table-cell-background-active: #222222;
  --bases-table-cell-background-disabled: #262626;
  --bases-table-cell-background-selected: rgba(191, 149, 64, 0.1);
  --bases-table-cell-shadow-focus: 0 0 0 2px rgb(191, 149, 64);
  --bases-table-group-background: #262626;
  --bases-table-header-background: #222222;
  --bases-table-summary-background: #222222;
  --blockquote-border-color: rgb(191, 149, 64);
  --bodyFont: var(--font-text);
  --canvas-background: #222222;
  --canvas-card-label-color: #a09b80;
  --caret-color: #bbc0c5;
  --checkbox-border-color: rgb(191, 149, 64);
  --checkbox-color: rgb(191, 149, 64);
  --checkbox-color-hover: rgb(203, 161, 93);
  --checkbox-marker-color: #222222;
  --checkbox-radius: 50%;
  --code-background: #383838;
  --code-bracket: #ffd700;
  --code-class: #4ec9b0;
  --code-comment: #6a9955;
  --code-define: #569cd6;
  --code-function: #dcdcaa;
  --code-keyword: #c586c0;
  --code-normal: #bbc0c5;
  --code-number: #b5cea8;
  --code-oper: #d4d4d4;
  --code-operator: #d4d4d4;
  --code-package: #3f9486;
  --code-property: #9cdcfe;
  --code-punctuation: #d4d4d4;
  --code-string: #ce9178;
  --code-tag: #b5cea8;
  --code-value: #b5cea8;
  --code-variable: #8cdcfe;
  --codeFont: var(--font-monospace);
  --collapse-icon-color: #a09b80;
  --collapse-icon-color-collapsed: #59a2c5;
  --color-accent: rgb(191, 149, 64);
  --color-accent-1: rgb(203, 161, 93);
  --color-accent-2: rgb(213, 174, 118);
  --color-accent-hsl: 40, 50%, 50%;
  --color-prime: rgb(191, 149, 64);
  --dark: var(--text-normal);
  --darkgray: var(--text-normal);
  --divider-color: #262626;
  --divider-color-hover: rgb(191, 149, 64);
  --dot-graph: #bbc0c5;
  --em-color: #db711a;
  --embed-border-start: 2px solid rgb(191, 149, 64);
  --file-header-background: #222222;
  --file-header-background-focused: #222222;
  --file-header-font: '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --flair-color: #bbc0c5;
  --folding-offset: 10px;
  --font-interface: '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-interface-theme: "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif;
  --font-mermaid: '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-monospace: '??', "Iosevka", 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular, Consolas, 'Roboto Mono', monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, "Consolas", "Source Code Pro", monospace;
  --font-monospace-theme: "Iosevka", 'JetBrains Mono', 'Fira Code', Menlo, SFMono-Regular, Consolas, 'Roboto Mono', monospace;
  --font-print: '??', '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, 'Arial';
  --font-text: '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --font-text-theme: "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif;
  --footnote-id-color-no-occurrences: #a09b80;
  --graph-node-focused: #59a2c5;
  --graph-node-unresolved: #a09b80;
  --graph-text: #bbc0c5;
  --gray: var(--text-faint);
  --h1-color: #939bd6;
  --h1-size: 2rem;
  --h2-color: #ba7390;
  --h2-size: 1.8rem;
  --h3-color: #b78b60;
  --h3-size: 1.6rem;
  --h4-color: #a79645;
  --h4-size: 1.5rem;
  --h5-color: #859676;
  --h5-size: 1.4rem;
  --h6-color: #799097;
  --h6-size: 1.3rem;
  --headerFont: var(--font-text);
  --heading-formatting: #a09b80;
  --highlight: var(--background-modifier-active-hover);
  --icon-color-active: #59a2c5;
  --icon-color-focused: #bbc0c5;
  --icon-muted: 0.5;
  --inline-title-color: #939bd6;
  --inline-title-size: 2rem;
  --input-date-separator: #a09b80;
  --input-placeholder-color: #a09b80;
  --interactive-accent: rgb(191, 149, 64);
  --interactive-accent-hover: rgb(203, 161, 93);
  --interactive-accent-hsl: 40, 50%, 50%;
  --light: var(--background-primary);
  --lightgray: var(--background-secondary);
  --line-height: 1.5;
  --line-width: 40rem;
  --line-width-adaptive: 40rem;
  --line-width-wide: calc(40rem + 12.5%);
  --link-color: #59a2c5;
  --link-color-hover: #b3a14b;
  --link-decoration: auto;
  --link-external-color: #59a2c5;
  --link-external-color-hover: #b3a14b;
  --link-external-decoration: auto;
  --link-unresolved-color: #59a2c5;
  --link-unresolved-decoration-color: rgba(191, 149, 64, 0.3);
  --list-marker-color: #a09b80;
  --list-marker-color-collapsed: #59a2c5;
  --max-col-width: 18em;
  --max-width: 90%;
  --menu-background: #222222;
  --metadata-input-font: '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --metadata-input-text-color: #bbc0c5;
  --metadata-label-font: '??', "Iosevka", 'Segoe UI', -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, '??', ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", "Inter", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  --modal-background: #222222;
  --nav-collapse-icon-color: #a09b80;
  --nav-collapse-icon-color-collapsed: #a09b80;
  --nav-heading-color: #bbc0c5;
  --nav-heading-color-collapsed: #a09b80;
  --nav-heading-color-hover: #bbc0c5;
  --nav-item-background-selected: rgba(191, 149, 64, 0.15);
  --nav-item-color-active: #bbc0c5;
  --nav-item-color-highlighted: #59a2c5;
  --nav-item-color-hover: #bbc0c5;
  --nav-item-color-selected: #bbc0c5;
  --nav-tag-color: #a09b80;
  --nested-padding: 1.1em;
  --pdf-background: #222222;
  --pdf-page-background: #222222;
  --pdf-sidebar-background: #222222;
  --pill-color-hover: #bbc0c5;
  --pill-color-remove: #a09b80;
  --pill-color-remove-hover: #59a2c5;
  --prompt-background: #222222;
  --quote-color: #db711a;
  --ribbon-background: #222222;
  --ribbon-background-collapsed: #222222;
  --search-result-background: #222222;
  --secondary: var(--text-accent);
  --setting-group-heading-color: #bbc0c5;
  --setting-items-background: #262626;
  --status-bar-background: #222222;
  --status-bar-border-color: #262626;
  --strong-color: #db711a;
  --suggestion-background: #222222;
  --tab-background-active: #222222;
  --tab-container-background: #222222;
  --tab-outline-color: #262626;
  --tab-switcher-background: #222222;
  --tab-switcher-menubar-background: linear-gradient(to top, #222222, transparent);
  --tab-switcher-preview-shadow-active: 0 0 0 2px rgb(191, 149, 64);
  --tab-text-color: #a09b80;
  --tab-text-color-focused-active-current: #bbc0c5;
  --tab-text-color-focused-highlighted: #59a2c5;
  --table-drag-handle-background-active: rgb(191, 149, 64);
  --table-drag-handle-color: #a09b80;
  --table-header-color: #bbc0c5;
  --table-selection: rgba(191, 149, 64, 0.1);
  --table-selection-border-color: rgb(191, 149, 64);
  --tag-background: #123b2b;
  --tag-background-color: #123b2b;
  --tag-background-color-hover: #194a37;
  --tag-background-hover: #194a37;
  --tag-border-color: rgba(191, 149, 64, 0.15);
  --tag-border-color-hover: rgba(191, 149, 64, 0.15);
  --tag-color: #bbc0c5;
  --tag-color-hover: #bbc0c5;
  --tag-font-color: #bbc0c5;
  --tertiary: var(--text-accent-hover);
  --text-accent: #59a2c5;
  --text-accent-hover: #b3a14b;
  --text-faint: #a09b80;
  --text-graph: #dde0e5;
  --text-highlight: #db711a;
  --text-highlight-background: rgba(255, 208, 0, 0.4);
  --text-link: #59a2c5;
  --text-normal: #bbc0c5;
  --text-selection: rgba(191, 149, 64, 0.33);
  --text-title-h1: #939bd6;
  --text-title-h2: #ba7390;
  --text-title-h3: #b78b60;
  --text-title-h4: #a79645;
  --text-title-h5: #859676;
  --text-title-h6: #799097;
  --textHighlight: var(--background-modifier-active-hover);
  --titleFont: var(--font-text);
  --titlebar-background: #222222;
  --titlebar-background-focused: #262626;
  --titlebar-text-color-focused: #bbc0c5;
  --vault-profile-color: #bbc0c5;
  --vault-profile-color-hover: #bbc0c5;
  --quartz-icon-color: currentColor;
}

body[data-slug] div#quartz-root.page, .page > div#quartz-body div.sidebar.left, .page > div#quartz-body div.sidebar.left:has(.explorer), .page > div#quartz-body div.sidebar.left .explorer .explorer-content {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}

body[data-slug], body[data-slug] .page > div#quartz-body, .page > div#quartz-body div.center, .page > div#quartz-body footer {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}

body .page > div#quartz-body div.sidebar {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}

body .page > div#quartz-body div.sidebar.left {
  border-right-color: rgb(38, 38, 38);
}

body .page > div#quartz-body div.sidebar.right {
  background-color: rgb(34, 34, 34);
  border-left-color: rgb(38, 38, 38);
  color: rgb(187, 192, 197);
}

body div#quartz-root {
  background-color: rgb(34, 34, 34);
  color: rgb(187, 192, 197);
}`,
    typography: `body .page article p > b, b {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

body .page article p > em, em {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

body .page article p > i, i {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

body .page article p > strong, strong {
  color: rgb(219, 113, 26);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(219, 113, 26) none 0px;
  text-decoration: rgb(219, 113, 26);
  text-decoration-color: rgb(219, 113, 26);
}

body .text-highlight {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body del {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: line-through rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body p {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    links: `body a.external, footer a {
  color: rgb(89, 162, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal, .breadcrumb-container .breadcrumb-element > a {
  color: rgb(89, 162, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgb(89, 162, 197);
  text-decoration-color: rgb(89, 162, 197);
}

body a.internal.broken {
  color: rgb(89, 162, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(89, 162, 197) none 0px;
  text-decoration: rgba(191, 149, 64, 0.3);
  text-decoration-color: rgba(191, 149, 64, 0.3);
}`,
    lists: `body dd {
  color: rgb(187, 192, 197);
}

body dt {
  color: rgb(187, 192, 197);
}

body ol > li {
  color: rgb(187, 192, 197);
}

body ol.overflow {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body ul > li {
  color: rgb(187, 192, 197);
}

body ul.overflow {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    blockquotes: `body .data-footnote-backref {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
}

body blockquote {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-style: italic;
}`,
    tables: `body .table-container {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body table {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  width: 187.031px;
}

body td {
  color: rgb(187, 192, 197);
}

body th {
  color: rgb(187, 192, 197);
}`,
    code: `body code {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body figure[data-rehype-pretty-code-figure] {
  background-color: rgb(56, 56, 56);
}

body figure[data-rehype-pretty-code-figure] > [data-rehype-pretty-code-title] {
  background-color: rgb(56, 56, 56);
  color: rgb(187, 192, 197);
}

body pre > code > [data-line] {
  border-left-color: rgb(220, 220, 170);
}

body pre > code > [data-line][data-highlighted-line] {
  border-left-color: rgb(220, 220, 170);
}

body pre > code [data-highlighted-chars] {
  border-bottom-color: rgb(220, 220, 170);
  border-left-color: rgb(220, 220, 170);
  border-right-color: rgb(220, 220, 170);
  border-top-color: rgb(220, 220, 170);
}

body pre > code, pre:has(> code) {
  background-color: rgb(56, 56, 56);
}

body pre:has(> code) {
  background-color: rgb(56, 56, 56);
}`,
    images: `body audio {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body figcaption {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body figure {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body img {
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

body video {
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
    embeds: `body .file-embed {
  background-color: rgb(38, 38, 38);
}

body .footnotes {
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .transclude {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(191, 149, 64);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .transclude-inner {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(191, 149, 64);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    checkboxes: `body .katex-display > .katex {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .katex-display > .katex > .katex-html {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .page article li:has(>input[type=checkbox]:checked) {
  color: rgb(160, 155, 128);
  text-decoration: line-through rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body input[type=checkbox] {
  border-bottom-color: rgb(191, 149, 64);
  border-bottom-left-radius: 50%;
  border-bottom-right-radius: 50%;
  border-left-color: rgb(191, 149, 64);
  border-right-color: rgb(191, 149, 64);
  border-top-color: rgb(191, 149, 64);
  border-top-left-radius: 50%;
  border-top-right-radius: 50%;
}

body li.task-list-item[data-task='!'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='*'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='-'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='/'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='>'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='?'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='I'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='S'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='b'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='c'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='d'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='f'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='i'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='k'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='l'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='p'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='u'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}

body li.task-list-item[data-task='w'] {
  color: rgb(160, 155, 128);
  text-decoration: rgb(160, 155, 128);
  text-decoration-color: rgb(160, 155, 128);
}`,
    search: `body .search > .search-button {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .search > .search-container > .search-space {
  background-color: rgb(34, 34, 34);
}

body .search > .search-container > .search-space > * {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  outline: rgb(187, 192, 197) none 0px;
  text-decoration: rgb(187, 192, 197);
  text-decoration-color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container .result-card {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus .card-description, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-title, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) .card-description {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > .search-layout > .results-container > .result-card:hover, .search > .search-container > .search-space > .search-layout > .results-container > .result-card:focus, .search > .search-container > .search-space > .search-layout > .results-container > .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

body .search > .search-container > .search-space > input {
  border-bottom-color: rgb(34, 34, 34);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:has(~ .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)), ~ .result-card:focus, ~ .result-card:hover) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .search>.search-container>.search-space>.search-layout>.results-container .result-card:hover, .search>.search-container>.search-space>.search-layout>.results-container .result-card:focus, .search>.search-container>.search-space>.search-layout>.results-container .result-card.focus:not(:has(~ .result-card:hover, ~ .result-card:focus)) {
  color: rgb(187, 192, 197);
}

body a.internal.tag-link, .search > .search-container > .search-space > .search-layout > .results-container .result-card > ul > li > .match-tag {
  background-color: rgb(18, 59, 43);
  border-bottom-color: rgba(191, 149, 64, 0.15);
  border-left-color: rgba(191, 149, 64, 0.15);
  border-right-color: rgba(191, 149, 64, 0.15);
  border-top-color: rgba(191, 149, 64, 0.15);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body a.internal.tag-link::before {
  color: rgb(187, 192, 197);
}

body h1 {
  color: rgb(147, 155, 214);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2 {
  color: rgb(186, 115, 144);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h2.page-title, h2.page-title a {
  color: rgb(147, 155, 214);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h3 {
  color: rgb(183, 139, 96);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h4 {
  color: rgb(167, 150, 69);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h5 {
  color: rgb(133, 150, 118);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body h6 {
  color: rgb(121, 144, 151);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body hr {
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
}`,
    scrollbars: `body ::-webkit-scrollbar {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-corner {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body ::-webkit-scrollbar-thumb:active {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-thumb:hover {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}

body ::-webkit-scrollbar-track {
  background: rgb(34, 34, 34) none repeat scroll 0% 0% / auto padding-box border-box;
  background-color: rgb(34, 34, 34);
}`,
    explorer: `body .explorer .explorer-content li:has(> .folder-outer.open) > .folder-container {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content li:has(> .folder-outer:not(.open)) > .folder-container {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li a {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .explorer .explorer-content ul.explorer-ul li:has(> .active) {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}`,
    footer: `body footer {
  background-color: rgb(34, 34, 34);
  border-bottom-color: rgb(38, 38, 38);
  border-left-color: rgb(38, 38, 38);
  border-right-color: rgb(38, 38, 38);
  border-top-color: rgb(38, 38, 38);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    recentNotes: `body .recent-notes > h3 {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .recent-notes > ul.recent-ul > li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .recent-notes > ul.recent-ul > li .section > .meta {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    listPage: `body li.section-li {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body li.section-li > .section .meta {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body ul.section-ul {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}`,
    breadcrumbs: `body .breadcrumb-element p {
  color: rgb(160, 155, 128);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}`,
    misc: `body .katex-display {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
}

body .metadata {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .metadata-properties {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body .navigation-progress {
  background-color: rgb(34, 34, 34);
}

body .page-header h2.page-title {
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body abbr {
  color: rgb(187, 192, 197);
  text-decoration: underline dotted rgb(187, 192, 197);
}

body details {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body input[type=text] {
  font-family: "??", Iosevka, "Segoe UI", -apple-system, BlinkMacSystemFont, Roboto, Inter, Ubuntu, sans-serif, "??", ui-sans-serif, -apple-system, BlinkMacSystemFont, system-ui, "Segoe UI", "Google Sans Flex", Roboto, "Inter Variable", Inter, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
}

body kbd {
  background-color: rgb(56, 56, 56);
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
  color: rgb(187, 192, 197);
  font-family: "??", Iosevka, "JetBrains Mono", "Fira Code", Menlo, SFMono-Regular, Consolas, "Roboto Mono", monospace, ui-monospace, SFMono-Regular, "Cascadia Mono", "Roboto Mono", "DejaVu Sans Mono", "Liberation Mono", Menlo, Monaco, Consolas, "Source Code Pro", monospace;
}

body progress {
  border-bottom-color: rgb(187, 192, 197);
  border-left-color: rgb(187, 192, 197);
  border-right-color: rgb(187, 192, 197);
  border-top-color: rgb(187, 192, 197);
}

body sub {
  color: rgb(187, 192, 197);
}

body summary {
  color: rgb(187, 192, 197);
}

body sup {
  color: rgb(187, 192, 197);
}`,
  },
  light: {},
};
